/* Navegação comum. Edite a ordem e nomes no array se adicionar páginas.
   VOLTAR usa o histórico apenas quando há referrer do mesmo site;
   fora isso, retorna ao índice principal. */
(function(){
 const nav=document.querySelector('.hm-page-nav');if(!nav)return;
 const routes=[
  {label:'MAIN',url:'../index.html',file:'index.html'},
  {label:'EPISÓDIOS',url:'episodios.html',file:'episodios.html'},
  {label:'FICHÁRIO',url:'fichario.html',file:'fichario.html'},
  {label:'CLASSES',url:'classes.html',file:'classes.html'},
  {label:'CLÃS',url:'clas.html',file:'clas.html'},
  {label:'AMBIENTAÇÃO',url:'ambientacao.html',file:'ambientacao.html'}
 ];
 const file=location.pathname.split('/').pop()||'index.html';
 const position=routes.findIndex(p=>p.file===file);
 if(position<0)return;
 const previous=routes[Math.max(0,position-1)];
 const isHome=position===0;
 const href=(route)=>isHome?(route.file==='index.html'?'index.html':'pages/'+route.file):route.url;
 const next=routes[Math.min(routes.length-1,position+1)];
 nav.innerHTML=`<button type="button" id="hm-nav-back">← VOLTAR</button><a href="${isHome?'index.html':'../index.html'}">⌂ HOME</a><a href="${href(previous)}">← ANTERIOR</a><a href="${href(next)}">PRÓXIMA →</a><span class="hm-nav-context">${routes[position].label} / HELLMOUTH</span>`;
 nav.querySelector('#hm-nav-back').addEventListener('click',()=>{
  let safe=false;try{safe=Boolean(document.referrer&&new URL(document.referrer).origin===location.origin)}catch(e){}
  if(safe&&history.length>1)history.back();else location.href=isHome?'index.html':'../index.html';
 });
})();
