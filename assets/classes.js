(function(){
  const input = document.getElementById('class-search-input');
  const button = document.getElementById('class-search-button');
  const clear = document.getElementById('class-search-clear');
  const status = document.getElementById('class-search-status');
  const searchable = Array.from(document.querySelectorAll('[data-searchable]'));

  function clearHighlights(){
    searchable.forEach(el => {
      if(el.dataset.originalHtml){
        el.innerHTML = el.dataset.originalHtml;
      }
    });
  }

  function prepareOriginals(){
    searchable.forEach(el => {
      if(!el.dataset.originalHtml){
        el.dataset.originalHtml = el.innerHTML;
      }
    });
  }

  function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  }

  function runSearch(){
    prepareOriginals();
    clearHighlights();
    const query = input.value.trim();
    if(!query){
      status.innerHTML = 'Digite uma palavra para pesquisar nas classes.';
      return;
    }
    const terms = query.split(/\s+/).filter(Boolean);
    const re = new RegExp('(' + terms.map(escapeRegExp).join('|') + ')','gi');
    let hitCount = 0;
    let firstHitEl = null;
    searchable.forEach(el => {
      const text = el.textContent || '';
      const matches = text.match(re);
      if(matches){
        hitCount += matches.length;
        if(!firstHitEl) firstHitEl = el;
        el.innerHTML = el.dataset.originalHtml.replace(re,'<mark class="search-hit">$1</mark>');
      }
    });
    if(hitCount){
      status.innerHTML = 'Foram encontradas <mark>' + hitCount + '</mark> ocorrências para <mark>' + query + '</mark>.';
      firstHitEl.scrollIntoView({behavior:'smooth', block:'center'});
    } else {
      status.innerHTML = 'Nenhum resultado para <mark>' + query + '</mark>.';
    }
  }

  button.addEventListener('click', runSearch);
  clear.addEventListener('click', function(){
    input.value = '';
    clearHighlights();
    status.textContent = 'Pesquisa limpa. Digite uma palavra para pesquisar nas classes.';
  });
  input.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); runSearch(); } });
})();
