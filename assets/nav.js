/* HELLMOUTH — navegação simples de todas as páginas internas.
   Um único botão Voltar; acesso direto retorna à Main. */
(function(){
  const nav=document.querySelector('.hm-page-nav');
  if(!nav)return;
  nav.innerHTML='<button class="hm-nav-back" type="button" aria-label="Voltar à página anterior">← VOLTAR</button>';
  nav.querySelector('button').addEventListener('click',function(){
    let sameSite=false;
    try { sameSite=!!document.referrer && new URL(document.referrer).origin===location.origin; }catch(e){}
    if(sameSite && history.length>1) history.back();
    else window.location.href='../index.html';
  });
})();
