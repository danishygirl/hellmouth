// HELL MOUTH — Fate & Fortune API / Cloudflare Workers
// Cloudflare D1 is automatically provisioned by wrangler during deploy.
const headers = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' };
const json = (data, status=200) => new Response(JSON.stringify(data), { status, headers });
const dice = new Set([4, 6, 8, 10, 12, 20, 100]);
let initialized = false;
async function ensureDB(db) {
  if (initialized) return;
  await db.prepare(`CREATE TABLE IF NOT EXISTS rolls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    request_id TEXT NOT NULL UNIQUE,
    character TEXT NOT NULL,
    episode TEXT NOT NULL DEFAULT '',
    action TEXT NOT NULL,
    sides INTEGER NOT NULL CHECK (sides IN (4,6,8,10,12,20,100)),
    result INTEGER NOT NULL CHECK (result >= 1 AND result <= sides),
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
  )`).run();
  initialized = true;
}
function secureDice(sides) {
  const bytes = new Uint32Array(1), limit = 4294967296, cap = Math.floor(limit/sides)*sides;
  do { crypto.getRandomValues(bytes); } while (bytes[0] >= cap);
  return bytes[0] % sides + 1;
}
const clean = (value,max) => typeof value === 'string' && value.trim().length <= max ? value.trim() : null;
async function roll(request,db) {
  if (Number(request.headers.get('content-length') || 0) > 4000) return json({error:'Solicitação muito grande.'},413);
  let v; try { v = await request.json(); } catch { return json({error:'Dados inválidos.'},400); }
  const character=clean(v?.character,70), episode=clean(v?.episode,100), action=clean(v?.action,280);
  const sides=v?.sides, requestId=v?.request_id;
  if (!character || !action || episode === null || !dice.has(sides) ||
      typeof requestId !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(requestId))
    return json({error:'Confira o personagem, a ação e o dado escolhido.'},400);
  // Idempotency: repeated POST with same request ID returns same roll.
  const prior = await db.prepare('SELECT id, result, sides FROM rolls WHERE request_id=?').bind(requestId).first();
  if(prior) return json(prior);
  const result=secureDice(sides);
  try {
    const inserted=await db.prepare('INSERT INTO rolls (request_id,character,episode,action,sides,result) VALUES (?,?,?,?,?,?) RETURNING id,result,sides')
      .bind(requestId,character,episode,action,sides,result).first();
    return json(inserted,201);
  } catch(e) {
    // Two identical concurrent submissions must still return the first recorded result.
    const existing=await db.prepare('SELECT id, result, sides FROM rolls WHERE request_id=?').bind(requestId).first();
    if (existing) return json(existing);
    throw e;
  }
}
async function rolls(request,db) {
  const u=new URL(request.url),q=(u.searchParams.get('q')||'').trim().slice(0,100);
  const cursor=Number(u.searchParams.get('cursor')||0);
  const limit=Math.min(Math.max(Number(u.searchParams.get('limit'))||15,1),50);
  if(!Number.isSafeInteger(cursor)||cursor<0) return json({error:'Cursor inválido.'},400);
  let sql='SELECT id, character, episode, action, sides, result, created_at FROM rolls WHERE 1=1';
  const params=[];
  if(cursor){sql+=' AND id < ?';params.push(cursor);}
  if(q){
    const term='%'+q.replace(/[\\%_]/g, m=>'\\'+m)+'%';
    sql+=" AND (character LIKE ? ESCAPE '\\' OR episode LIKE ? ESCAPE '\\')";
    params.push(term,term);
  }
  sql+=' ORDER BY id DESC LIMIT ?';params.push(limit+1);
  const result=await db.prepare(sql).bind(...params).all();
  const rows=result.results||[],more=rows.length>limit,items=rows.slice(0,limit);
  return json({items,next_cursor:more?items[items.length-1].id:null});
}
export default {
  async fetch(request,env) {
    const url=new URL(request.url);
    if(url.pathname === '/api/roll' || url.pathname === '/api/rolls') {
      if(!env.DB) return json({error:'Banco de dados ainda não conectado.'},503);
      try {
        await ensureDB(env.DB);
        if(url.pathname === '/api/roll' && request.method === 'POST') return await roll(request,env.DB);
        if(url.pathname === '/api/rolls' && request.method === 'GET') return await rolls(request,env.DB);
        return json({error:'Método não permitido.'},405);
      } catch(e) { console.error('Dice API:', e); return json({error:'Não foi possível acessar o histórico. Tente novamente.'},500); }
    }
    return env.ASSETS.fetch(request);
  }
};
