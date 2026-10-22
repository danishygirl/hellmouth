/* HELLMOUTH — CONTEÚDO EDITÁVEL: adicione episódios copiando um objeto abaixo.
   scene.url deve ser uma página existente ou link externo. scene.image aponta para imagem/GIF. */
 const sharedScenes = [
 {title:'IGREJA DE SUNNYVALE', image:'../assets/scenes/church.svg', url:'../pages/ambientacao.html#igreja'},
 {title:'SUNNYVALE MOTEL', image:'../assets/scenes/motel.svg', url:'../pages/ambientacao.html#motel'},
 {title:'RESERVA AMBIENTAL', image:'../assets/scenes/sunnyvale.svg', url:'../pages/ambientacao.html#reserva'}
];
const episodes = [
 {id:'s1e1',number:'S1E1',title:'Welcome to Sunnyvale',summary:'Uma nova chegada transforma a rotina da cidade, enquanto rumores sobre a floresta começam a circular entre seus moradores.',image:'../assets/scenes/episodio-01-welcome-to-sunnyvale-poster.webp',quote:'Welcome to Sunnyvale',cast:'Emma Roberts, Evan Peters, Jessica L., Ryan Murphy, Hope Lake',body:[
 'Typing... ' ],scenes:sharedScenes},
 // Os episódios seguintes são reservas sem título, sinopse ou conteúdo publicado.
 {id:'s1e2',number:'S1E2',title:'TBA',summary:'',pending:true,image:'',body:[],scenes:[]},
 {id:'s1e3',number:'S1E3',title:'TBA',summary:'',pending:true,image:'',body:[],scenes:[]},
 {id:'s1e4',number:'S1E4',title:'TBA',summary:'',pending:true,image:'',body:[],scenes:[]}
];
const list=document.getElementById('episode-list'), view=document.getElementById('episode-view'), story=document.getElementById('episode-story'), input=document.getElementById('episode-search'), resultCount=document.getElementById('search-count');
let selected=0, previousFocus=null;
const escapeHTML = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderList(){
 list.innerHTML=episodes.map((ep,i)=>ep.pending
  ? `<div class="episode-tile episode-tile-tba" aria-label="${escapeHTML(ep.number)}: TBA, em breve"><span class="tile-number">${escapeHTML(ep.number)} / SEASON ONE</span><h3>TBA</h3><div class="tile-line"></div></div>`
  : `<button type="button" class="episode-tile" data-episode="${i}" aria-label="Abrir ${escapeHTML(ep.number)} ${escapeHTML(ep.title)}"><span class="tile-number">${escapeHTML(ep.number)} / SEASON ONE</span><h3>${escapeHTML(ep.title)} <span aria-hidden="true">↗</span></h3><div class="tile-line"></div><p>${escapeHTML(ep.summary)}</p></button>`).join('');
 list.querySelectorAll('[data-episode]').forEach(el=>el.addEventListener('click',()=>openEpisode(Number(el.dataset.episode))));
}
function episodeStory(query=''){let count=0;const q=query.trim();const html=episodes[selected].body.map(p=>{let safe=escapeHTML(p);if(q){const src=p.toLocaleLowerCase('pt-BR'),needle=q.toLocaleLowerCase('pt-BR');let pos=0,out='';while(true){let found=src.indexOf(needle,pos);if(found<0){out+=escapeHTML(p.slice(pos));break;}out+=escapeHTML(p.slice(pos,found))+'<mark>'+escapeHTML(p.slice(found,found+q.length))+'</mark>';pos=found+q.length;count++;}safe=out;}return `<p>${safe}</p>`;}).join('');story.innerHTML=html;resultCount.textContent=q?`${count} ocorrência${count===1?'':'s'}`:'';const mark=story.querySelector('mark');if(mark)mark.scrollIntoView({block:'nearest',behavior:'smooth'});return count;}
function openEpisode(index){if(episodes[index]?.pending)return;previousFocus=document.activeElement;selected=(index+episodes.length)%episodes.length;const ep=episodes[selected];document.getElementById('view-code').textContent=ep.number;document.getElementById('view-title').textContent=ep.title;document.getElementById('episode-side-img').src=ep.image;document.getElementById('episode-side-img').alt='Imagem do episódio '+ep.title;document.getElementById('episode-scenes').innerHTML=ep.scenes.map(scene=>`<a class="scene-card" href="${escapeHTML(scene.url)}" aria-label="Abrir ${escapeHTML(scene.title)}"><img src="${escapeHTML(scene.image)}" alt=""><span>${escapeHTML(scene.title)} ↗</span></a>`).join('');input.value='';episodeStory();view.hidden=false;view.setAttribute('aria-hidden','false');document.body.classList.add('episode-open');view.scrollTop=0;document.getElementById('episode-next').hidden=!episodes.some((item,i)=>i>selected&&!item.pending);document.getElementById('episode-back').focus();history.replaceState(null,'','#'+ep.id);}
function closeEpisode(){view.hidden=true;view.setAttribute('aria-hidden','true');document.body.classList.remove('episode-open');input.value='';resultCount.textContent='';history.replaceState(null,'',location.pathname+location.search);if(previousFocus?.focus)previousFocus.focus();}
for(const id of ['episode-back','episode-close-bottom'])document.getElementById(id).addEventListener('click',closeEpisode);
document.getElementById('episode-next').addEventListener('click',()=>{const next=episodes.findIndex((ep,i)=>i>selected&&!ep.pending);if(next>=0)openEpisode(next);});input.addEventListener('input',()=>episodeStory(input.value));document.getElementById('clear-search').addEventListener('click',()=>{input.value='';episodeStory();input.focus();});document.getElementById('episode-search-form').addEventListener('submit',e=>{e.preventDefault();episodeStory(input.value);});
document.addEventListener('keydown',e=>{if(view.hidden)return;if(e.key==='Escape')closeEpisode();});
renderList();const initialIndex=episodes.findIndex(ep=>'#'+ep.id===location.hash);if(initialIndex>=0&&!episodes[initialIndex].pending)openEpisode(initialIndex);
