const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});
const accepted=new Set([4,6,8,10,12,20,100]);
function secureDice(sides){const b=new Uint32Array(1),max=2**32,cutoff=Math.floor(max/sides)*sides;do{crypto.getRandomValues(b)}while(b[0]>=cutoff);return b[0]%sides+1}
export async function onRequestPost({request,env}){
  if(!env.DB)return json({error:'Banco D1 não configurado.'},503);
  if(Number(request.headers.get('content-length')||0)>4000)return json({error:'Solicitação muito grande.'},413);
  let v;try{v=await request.json()}catch{return json({error:'JSON inválido.'},400)}
  const str=(x,max)=>typeof x==='string'&&x.trim().length<=max?x.trim():null;
  const character=str(v?.character,70),episode=str(v?.episode,100),action=str(v?.action,280),sides=v?.sides,requestId=v?.request_id;
  if(!character||!action||episode===null||!accepted.has(sides)||typeof requestId!=='string'||!/^[0-9a-f-]{36}$/i.test(requestId))return json({error:'Confira o personagem, a ação e o dado escolhido.'},400);
  try{
    const prior=await env.DB.prepare('SELECT id, result, sides FROM rolls WHERE request_id=?').bind(requestId).first();
    if(prior)return json(prior);
    const result=secureDice(sides);
    const db=await env.DB.prepare('INSERT INTO rolls (request_id, character, episode, action, sides, result) VALUES (?, ?, ?, ?, ?, ?) RETURNING id, result, sides').bind(requestId,character,episode,action,sides,result).first();
    return json(db,201)
  }catch(e){return json({error:'Não foi possível registrar a rolagem. Tente novamente.'},500)}
}
