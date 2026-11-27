let characters=[];
// HELLMOUTH — galeria de personagens. Edite os dados acima para cadastrar novas fichas.
const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const classes = ['Todos','Humano','Vampiro','Bruxa','Metamorfo'];
const icons = {
 Humano:'<circle cx="12" cy="8" r="3"/><path d="M5.5 20c.2-4 2.4-6 6.5-6s6.3 2 6.5 6"/>',
 Vampiro:'<path d="M5 4l2.4 12L12 21l4.6-5L19 4l-5 5-2-2-2 2z"/><path d="m9 13 3 8 3-8"/>',
 Bruxa:'<path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z"/><path d="M19 17v5m-2.5-2.5h5"/>',
 Metamorfo:'<path d="M4 17c2-6 4-10 8-12 4 2 6 6 8 12-3-1-5 0-8 4-3-4-5-5-8-4z"/><path d="M9 13h.01M15 13h.01"/>'
};
const icon = cls => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${icons[cls]||icons.Humano}</svg>`;
let selected='Todos', current=0, focusReturn=null;
const gallery=$('files-gallery'), search=$('files-query'), modal=$('character-view');
function renderFilters(){
 $('files-filters').innerHTML=classes.map(c=>`<button type="button" class="file-filter" data-filter="${esc(c)}" aria-pressed="${c===selected}">${esc(c)}</button>`).join('');
 $('files-filters').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.filter;renderFilters();renderGallery()}));
}
function renderGallery(){
 const q=search.value.trim().toLocaleLowerCase('pt-BR');
 const filtered=characters.map((c,i)=>({...c,index:i})).filter(c=>(selected==='Todos'||c.className===selected)&&[c.name,c.className,c.clan,c.photoplayer,c.occupation,c.player].join(' ').toLocaleLowerCase('pt-BR').includes(q));
 gallery.innerHTML=filtered.map(c=>`<button type="button" class="portrait-card" data-index="${c.index}" aria-label="Abrir ficha de ${esc(c.name)}"><img src="${esc(c.portrait||c.avatar)}" alt="${esc(c.name)}" loading="lazy"><span class="class-symbol" title="${esc(c.className)}" aria-label="Classe: ${esc(c.className)}">${icon(c.className)}</span><span class="portrait-caption">${esc(c.name)}</span></button>`).join('');
 $('files-count').textContent=`${filtered.length} PERSONAGENS`;
 $('files-empty').hidden=filtered.length>0;
 gallery.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>openFile(Number(b.dataset.index))));
}
function openFile(i,keepFocus=false){
 if(!keepFocus)focusReturn=document.activeElement;
 current=(i+characters.length)%characters.length;
 const c=characters[current];
 $('sheet-photo').src=c.portrait||c.avatar;
 $('sheet-photo').alt=`Retrato de ${c.name}`;
 $('sheet-title').textContent=c.name;
 $('sheet-age').textContent=c.age||'A definir';
 $('sheet-class').textContent=c.className||'A definir';
 $('sheet-clan').textContent=c.clan||'Nenhum';
 $('sheet-occupation').textContent=c.occupation||'A definir';
 $('sheet-photoplayer').textContent=c.photoplayer||'A definir';
 $('sheet-story').innerHTML=(c.story||[]).map(p=>`<p>${esc(p)}</p>`).join('');
 $('sheet-story').scrollTop=0;
 const link=$('sheet-profile-link');
 if(/^https:\/\//i.test(c.profileUrl||'')){link.href=c.profileUrl;link.hidden=false}else{link.removeAttribute('href');link.hidden=true}
 modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('character-opened');
 $('sheet-back').focus();history.replaceState(null,'',`#${encodeURIComponent(c.id)}`);
}
function closeFile(){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('character-opened');history.replaceState(null,'',location.pathname+location.search);focusReturn?.focus?.()}
$('sheet-back').addEventListener('click',closeFile);
$('sheet-next').addEventListener('click',()=>openFile(current+1,true));
modal.addEventListener('click',e=>{if(e.target===modal)closeFile()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeFile()});
search.addEventListener('input',renderGallery);
async function loadCharacters(){
try {const r=await fetch('/api/characters',{cache:'no-store'});if(!r.ok)throw Error();characters=await r.json();renderFilters();renderGallery();}catch(e){$('files-empty').hidden=false;$('files-empty').textContent='Não foi possível carregar o fichário. Atualize a página.';return;}
const initial=characters.findIndex(c=>'#'+encodeURIComponent(c.id)===location.hash);
if(initial>=0)openFile(initial);

}
loadCharacters();
