import {adminAPI} from './admin.js';
// HELL MOUTH — dados 3D3 e histórico persistente (Cloudflare Worker + D1)
const headers={'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'};
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});
let ready=false;
async function ensureDB(db){
  if(ready)return;
  await db.prepare(`CREATE TABLE IF NOT EXISTS rolls_v3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    request_id TEXT NOT NULL UNIQUE,
    character TEXT NOT NULL,
    episode TEXT NOT NULL DEFAULT '',
    action TEXT NOT NULL,
    dice_count INTEGER NOT NULL DEFAULT 3,
    sides INTEGER NOT NULL,
    difficulty INTEGER,
    modifier INTEGER NOT NULL DEFAULT 0,
    rolls_json TEXT NOT NULL,
    total INTEGER NOT NULL,
    outcome TEXT NOT NULL,
    legacy INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
  )`).run();
  // Histórico 3D3 começa vazio; registros de versões antigas não são importados.
  ready=true;
}
// Rejection sampling to avoid modulo bias.
function die(sides=3){const bytes=new Uint32Array(1),limit=4294967296,cap=Math.floor(limit/sides)*sides;do{crypto.getRandomValues(bytes)}while(bytes[0]>=cap);return bytes[0]%sides+1;}
const clean=(v,max)=>typeof v==='string'&&v.trim().length<=max?v.trim():null;
const outcome=delta=>delta>=2?'extraordinary':delta>=0?'success':delta===-1?'partial':delta===-2?'failure':'grave';
function itemFromRow(row){return {...row,rolls:JSON.parse(row.rolls_json),legacy:!!row.legacy,rolls_json:undefined};}
async function roll(request,db){
  if(Number(request.headers.get('content-length')||0)>4000)return json({error:'Solicitação muito grande.'},413);
  let v;try{v=await request.json()}catch{return json({error:'Dados inválidos.'},400)}
  const character=clean(v?.character,70),episode=clean(v?.episode,100),action=clean(v?.action,280);
  const difficulty=v?.difficulty,modifier=v?.modifier,requestId=v?.request_id;
  if(!character||!action||episode===null||!Number.isInteger(difficulty)||difficulty<5||difficulty>9||!Number.isInteger(modifier)||modifier< -2||modifier>2||typeof requestId!=='string'||!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(requestId))
    return json({error:'Confira o personagem, a ação, a dificuldade e o modificador.'},400);
  const prior=await db.prepare('SELECT * FROM rolls_v3 WHERE request_id=?').bind(requestId).first();
  if(prior)return json(itemFromRow(prior));
  const rolls=[die(),die(),die()],total=rolls.reduce((a,b)=>a+b,modifier),status=outcome(total-difficulty);
  try{
    const row=await db.prepare(`INSERT INTO rolls_v3 (request_id,character,episode,action,dice_count,sides,difficulty,modifier,rolls_json,total,outcome)
      VALUES (?,?,?,?,3,3,?,?,?,?,?) RETURNING *`)
      .bind(requestId,character,episode,action,difficulty,modifier,JSON.stringify(rolls),total,status).first();
    return json(itemFromRow(row),201);
  }catch(e){const existing=await db.prepare('SELECT * FROM rolls_v3 WHERE request_id=?').bind(requestId).first();if(existing)return json(itemFromRow(existing));throw e;}
}
async function history(request,db){
  const u=new URL(request.url),q=(u.searchParams.get('q')||'').trim().slice(0,100),cursor=Number(u.searchParams.get('cursor')||0);
  const limit=Math.min(Math.max(Number(u.searchParams.get('limit'))||15,1),50);
  if(!Number.isSafeInteger(cursor)||cursor<0)return json({error:'Cursor inválido.'},400);
  let sql='SELECT * FROM rolls_v3 WHERE 1=1';const params=[];
  if(cursor){sql+=' AND id < ?';params.push(cursor)}
  if(q){const term='%'+q.replace(/[\\%_]/g,m=>'\\'+m)+'%';sql+=" AND (character LIKE ? ESCAPE '\\' OR episode LIKE ? ESCAPE '\\')";params.push(term,term)}
  sql+=' ORDER BY id DESC LIMIT ?';params.push(limit+1);
  const result=await db.prepare(sql).bind(...params).all(),rows=result.results||[],more=rows.length>limit,items=rows.slice(0,limit);
  return json({items:items.map(itemFromRow),next_cursor:more?items[items.length-1].id:null});
}
export default {async fetch(request,env){
  const path=new URL(request.url).pathname;
  if(path==='/api/characters'||path.startsWith('/api/admin/')||path.startsWith('/api/photo/'))return adminAPI(request,env);
  if(path==='/api/roll'||path==='/api/rolls'){
    if(!env.DB)return json({error:'Banco de dados D1 ainda não conectado.'},503);
    try{
      await ensureDB(env.DB);
      if(path==='/api/roll'&&request.method==='POST')return await roll(request,env.DB);
      if(path==='/api/rolls'&&request.method==='GET')return await history(request,env.DB);
      return json({error:'Método não permitido.'},405);
    }catch(err){console.error('HELLMOUTH dice:',err);return json({error:'Não foi possível acessar o banco de dados.'},500)}
  }
  return env.ASSETS.fetch(request);
}};
