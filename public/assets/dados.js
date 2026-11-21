(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const form = $('roll-form'), feedback = $('roll-feedback'), historyFeedback = $('history-feedback'), records = $('records');
  const names = {extraordinary:'Sucesso extraordinário',success:'Sucesso',partial:'Sucesso parcial',failure:'Falha',grave:'Falha grave',legacy:'Rolagem antiga'};
  let cursor = null, searching = '', busy = false, pendingId = null, debounce;
  const element = (tag, cls, value) => {const n = document.createElement(tag); if(cls)n.className=cls;if(value!==undefined)n.textContent=value;return n;};
  const formatDate = s => {try{return new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(s));}catch{return s;}};
  const signed = n => n > 0 ? '+'+n : String(n);
  // All 27 possible D3 combinations, independent of the roll itself.
  function chance(difficulty, modifier){let wins=0;for(let a=1;a<=3;a++)for(let b=1;b<=3;b++)for(let c=1;c<=3;c++)if(a+b+c+modifier>=difficulty)wins++;return Math.round(wins/27*1000)/10;}
  function updateChance(){const d=Number($('difficulty').value),m=Number($('modifier').value);$('probability').textContent='CHANCE DE SUCESSO: '+chance(d,m).toLocaleString('pt-BR')+'% · 3D3 '+(m? signed(m):'')+' · Dificuldade '+d;}
  $('difficulty').addEventListener('change',updateChance);$('modifier').addEventListener('change',updateChance);updateChance();
  function draw(item){
    const li=element('li','dice-record'), score=element('div','dice-value',String(item.total)),info=element('div');
    const meta=element('div','dice-record-meta');meta.append(element('span','dice-name',item.character),element('span','dice-date',formatDate(item.created_at)));
    const type=item.legacy?('D'+item.sides+' · Registro anterior'):'3D3 · dificuldade '+item.difficulty+' · modificador '+signed(item.modifier);
    const details=element('div','dice-type',type+' · #'+item.id);
    info.append(meta,details);
    if(item.episode)info.append(element('div','dice-scene',item.episode));
    if(!item.legacy){
      const rolls=Array.isArray(item.rolls)?item.rolls:[];
      info.append(element('div','dice-roll-breakdown',rolls.join(' + ')+' '+(item.modifier>=0?'+ ':'− ')+Math.abs(item.modifier)+' = '+item.total));
      info.append(element('div','dice-outcome dice-outcome-'+item.outcome,names[item.outcome]||item.outcome));
    }
    info.append(element('p','dice-action',item.action));li.append(score,info);records.append(li);
  }
  async function load(reset=true){
    if(busy)return;busy=true;$('load-more').disabled=true;
    if(reset){records.replaceChildren();cursor=null;}
    historyFeedback.textContent='Consultando o arquivo...';
    try{
      const q=new URLSearchParams({limit:'15'});if(searching)q.set('q',searching);if(cursor)q.set('cursor',String(cursor));
      const res=await fetch('/api/rolls?'+q,{cache:'no-store'}),data=await res.json();
      if(!res.ok)throw Error(data.error||'Falha ao consultar o histórico.');
      data.items.forEach(draw);cursor=data.next_cursor;$('load-more').hidden=!cursor;
      historyFeedback.textContent=data.items.length?'':(reset?'Nenhuma rolagem encontrada.':'Fim do histórico.');
    }catch(err){historyFeedback.textContent='Histórico indisponível: '+(err.message||'Verifique a conexão com o banco D1.');}
    finally{busy=false;$('load-more').disabled=false;}
  }
  form.addEventListener('input',()=>{pendingId=null;});
  form.addEventListener('submit',async e=>{
    e.preventDefault();const button=$('roll-button');button.disabled=true;feedback.textContent='Gerando e registrando resultado...';
    pendingId ||= crypto.randomUUID();
    const payload={character:$('character').value.trim(),episode:$('episode').value.trim(),action:$('action').value.trim(),difficulty:Number($('difficulty').value),modifier:Number($('modifier').value),request_id:pendingId};
    try{
      const res=await fetch('/api/roll',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)}),data=await res.json();
      if(!res.ok)throw Error(data.error||'Não foi possível rolar.');
      $('result-faces').replaceChildren(...data.rolls.map(n=>element('span','dice-face',String(n))));
      $('result-id').textContent='#'+data.id;
      $('result-number').textContent=String(data.total);
      $('result-outcome').textContent=names[data.outcome]||data.outcome;
      $('result-detail').textContent=data.rolls.join(' + ')+' '+(data.modifier>=0?'+ ':'− ')+Math.abs(data.modifier)+' = '+data.total+' · Dificuldade '+data.difficulty;
      $('result').hidden=false;feedback.textContent='Rolagem registrada no histórico público.';
      pendingId=null;await load(true);
    }catch(err){feedback.textContent=(err.message||'Falha de conexão.')+' Confira o histórico antes de tentar novamente.';}
    finally{button.disabled=false;}
  });
  $('search').addEventListener('input',e=>{searching=e.target.value.trim();clearTimeout(debounce);debounce=setTimeout(()=>load(true),300);});
  $('refresh').addEventListener('click',()=>load(true));$('load-more').addEventListener('click',()=>load(false));load();
})();
