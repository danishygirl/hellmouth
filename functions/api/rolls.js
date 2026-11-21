const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
export async function onRequestGet({request,env}){
  if(!env.DB)return json({error:'Banco D1 não configurado.'},503);
  const url=new URL(request.url),q=(url.searchParams.get('q')||'').trim().slice(0,100),cursor=Number(url.searchParams.get('cursor')||0),limit=Math.min(Math.max(Number(url.searchParams.get('limit'))||15,1),50);
  if(!Number.isSafeInteger(cursor)||cursor<0)return json({error:'Cursor inválido.'},400);
  let sql='SELECT id, character, episode, action, sides, result, created_at FROM rolls WHERE 1=1',params=[];
  if(cursor){sql+=' AND id < ?';params.push(cursor)}
  if(q){sql+=' AND (character LIKE ? OR episode LIKE ?)';params.push('%'+q.replace(/[\\%_]/g,'\\$&')+'%','%'+q.replace(/[\\%_]/g,'\\$&')+'%');sql=sql.replace('character LIKE ? OR episode LIKE ?','character LIKE ? ESCAPE \'\\\' OR episode LIKE ? ESCAPE \'\\\'')}
  sql+=' ORDER BY id DESC LIMIT ?';params.push(limit+1);
  try{const r=await env.DB.prepare(sql).bind(...params).all(),rows=r.results||[],more=rows.length>limit,items=rows.slice(0,limit);return json({items,next_cursor:more?items[items.length-1].id:null})}catch{return json({error:'Não foi possível consultar os registros.'},500)}
}
