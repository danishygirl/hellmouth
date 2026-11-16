/* HELLMOUTH — EPISÓDIOS
   Cada episódio publicado vira um pôster clicável que leva direto ao Loreverse.
   Para cadastrar novos episódios, copie um objeto abaixo.
   IMPORTANTE: troque episodeUrl pela URL exata do tópico/cena no Loreverse.
*/
const episodes = [
  {
    id: 's1e1',
    number: 'S1E1',
    title: 'First Taste',
    summary: 'O cemitério de Sunnyvale não era exatamente um lugar agradável para passear, pelo menos para quem se importava com a companhia dos mortos.',
    image: '../assets/scenes/first-taste-poster.webp',
    episodeUrl: 'https://loreverse.world/threads/1585',
    pending: false
  },
  { id:'s1e2', number:'S1E2', title:'TBA', pending:true },
  { id:'s1e3', number:'S1E3', title:'TBA', pending:true },
  { id:'s1e4', number:'S1E4', title:'TBA', pending:true }
];

const list = document.getElementById('episode-list');
const empty = document.getElementById('list-empty');

const escapeHTML = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = (url='') => /^https?:\/\//i.test(String(url).trim()) ? String(url).trim() : '#';

function renderList(){
  const hasEpisodes = episodes.length > 0;
  empty.hidden = hasEpisodes;
  if(!hasEpisodes){
    list.innerHTML = '';
    return;
  }

  list.innerHTML = episodes.map((ep) => {
    if(ep.pending){
      return `
        <div class="episode-tile-tba" aria-label="${escapeHTML(ep.number)}: episódio ainda não publicado">
          <span class="tile-number">${escapeHTML(ep.number)} / SEASON ONE</span>
          <h3>TBA</h3>
          <div class="tile-line"></div>
        </div>`;
    }

    const href = safeUrl(ep.episodeUrl);
    const targetAttrs = href === '#'
      ? 'aria-disabled="true" title="Adicione a URL do episódio no Loreverse em assets/episodes.js"'
      : 'target="_blank" rel="noopener noreferrer"';

    return `
      <a
        class="episode-poster-link"
        href="${escapeHTML(href)}"
        ${targetAttrs}
        aria-label="Abrir ${escapeHTML(ep.title)} no Loreverse"
        style="--poster-image:url('${escapeHTML(ep.image)}')"
      >
        <div class="episode-poster-copy">
          <span class="episode-poster-kicker">${escapeHTML(ep.number)} / SEASON ONE</span>
          <h3 class="episode-poster-title">${escapeHTML(ep.title)}</h3>
          <div class="episode-poster-line"></div>
          <p class="episode-poster-summary"><em>${escapeHTML(ep.summary)}</em></p>
          <span class="episode-poster-arrow">ABRIR EPISÓDIO NO LOREVERSE <span aria-hidden="true">↗</span></span>
        </div>
      </a>`;
  }).join('');
}

renderList();
