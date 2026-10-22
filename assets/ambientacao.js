/* HELLMOUTH — FUNCIONAMENTO DO CATÁLOGO / HOVERS
   Edite ambientes e links em assets/ambientacao-locais.js (não neste arquivo).
*/
const $=id=>document.getElementById(id);
const list=$('places-list'),modal=$('place-modal');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let current=0, opener=null;
function render(){
 list.innerHTML=places.map((p,i)=>`<button class="place-entry" type="button" data-place="${i}" aria-label="Abrir informações sobre ${esc(p.name)}"><img class="place-thumbnail" src="${esc(p.image)}" alt="" loading="lazy"><span class="place-entry-copy"><span class="place-name">${esc(p.name)}</span><span class="place-category">${esc(p.category)}</span></span><span class="place-arrow" aria-hidden="true">↗</span></button>`).join('');
 $('places-total').textContent=String(places.length).padStart(2,'0')+' / FILES';
 list.querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>{opener=b;show(Number(b.dataset.place));}));
}
function show(i){
 current=(i+places.length)%places.length;
 const p=places[current];
 $('place-modal-number').textContent='LOCATION FILE / '+String(current+1).padStart(3,'0');
 $('place-modal-img').src=p.image; $('place-modal-img').alt='Imagem de '+p.name;
 $('place-modal-title').textContent=p.name;
 $('place-modal-category').textContent=p.category;
 const topicLink=$('place-modal-loreverse');
 const validTopic=/^https?:\/\//i.test((p.loreverseUrl||'').trim());
 if(validTopic){topicLink.href=p.loreverseUrl.trim();topicLink.target='_blank';}else{topicLink.removeAttribute('href');topicLink.removeAttribute('target');}
 topicLink.classList.toggle('is-unconfigured',!validTopic);
 topicLink.setAttribute('aria-disabled',String(!validTopic));topicLink.tabIndex=validTopic?0:-1;
 topicLink.title=validTopic?'Abrir tópico de '+p.name+' no Loreverse':'Link do Loreverse ainda não cadastrado';
 $('place-modal-description').innerHTML=p.description.map(t=>'<p>'+esc(t)+'</p>').join('');
 modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('place-open');
 modal.scrollTop=0;$('place-modal-close').focus();
}
function hide(){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('place-open');opener?.focus();}
$('place-modal-loreverse').addEventListener('click',e=>{
 if(e.currentTarget.getAttribute('aria-disabled')==='true')e.preventDefault();
});
$('place-modal-close').addEventListener('click',hide);
$('place-modal-next').addEventListener('click',()=>show(current+1));
modal.addEventListener('click',e=>{if(e.target===modal)hide()});
document.addEventListener('keydown',e=>{
 if(modal.hidden)return;
 if(e.key==='Escape'){e.preventDefault();hide()}
 if(e.key==='Tab'){
  const controls=Array.from(modal.querySelectorAll('button, a[href]')).filter(b=>!b.disabled && b.tabIndex!==-1);
  const first=controls[0],last=controls[controls.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
 }
});
render();


/* V15 — LINKS DA COMUNIDADE. Substitua url: '#' pelo link exato de cada tópico no Loreverse.
   Adicione/remova objetos para personalizar o menu. */
const communityTopics = [
  
  { name: 'Inscrições', description: 'Cadastro de personagens', url: 'https://loreverse.world/topicos/2061' },
  { name: 'Chat', description: 'Interações narrativas', url: 'https://loreverse.world/topicos/2060' },
  { name: 'Regras', description: 'Normas e convivência', url: 'https://loreverse.world/universos/hellmouth#panel-regras' },
  { name: 'Telegram', description: 'Chat interativo', url: '#' },
  { name: 'Discord', description: 'Chat interativo', url: '#' },
  { name: 'SAC', description: 'Contate a moderação', url: 'https://loreverse.world/@slaughter' }
];
const chainIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13.5a4.5 4.5 0 0 0 6.5.2l2.7-2.7a4.5 4.5 0 0 0-6.4-6.4l-1.55 1.55"/><path d="M14 10.5a4.5 4.5 0 0 0-6.5-.2l-2.7 2.7a4.5 4.5 0 0 0 6.4 6.4l1.55-1.55"/></svg>';
const navLinks=$('community-links');
navLinks.innerHTML=communityTopics.map(topic => {
  const valid=/^https?:\/\//i.test(topic.url);
  const label=esc(topic.name), desc=esc(topic.description);
  return `<a class="community-link${valid?'':' is-placeholder'}" href="${valid?esc(topic.url):'#'}" ${valid?'target="_blank" rel="noopener noreferrer"':'aria-label="'+label+': link do Loreverse ainda não configurado"'}>
    <span class="community-link-icon">${chainIcon}</span>
    <span class="community-link-text"><span class="community-link-name">${label}</span><span class="community-link-sub">${desc}</span></span>
    <span class="community-link-arrow" aria-hidden="true">›</span>
  </a>`;
}).join('');
navLinks.querySelectorAll('.is-placeholder').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
