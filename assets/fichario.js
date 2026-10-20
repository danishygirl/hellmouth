/* HELLMOUTH — FICHÁRIO ILUSTRATIVO / EDITE AQUI
   Objetivo: visual mais próximo de um índice editorial com símbolos.
   Para cada personagem, você pode editar:
   - className / classIcon = nome e símbolo da classe
   - clan / clanIcon = nome e símbolo do clã
   - avatar / portrait = imagem pequena e imagem da ficha
   - profileUrl = URL do perfil no Loreverse
   - story = texto / parágrafos
   - items = até 3 itens na maleta
*/
/* HELLMOUTH — PERSONAGENS / ARQUIVO PRINCIPAL PARA EDIÇÃO NO GITHUB

   Abra: assets/fichario.js

   COMO ADICIONAR OUTRO PERSONAGEM:
   1. Copie o bloco { ... } de Christian Thorne dentro da lista characters.
   2. Cole após o bloco, separado por vírgula, e edite os valores entre aspas.
   3. Use um id ÚNICO, por exemplo 'npc-002' ou 'player-001'.
   4. Envie as imagens WEBP em assets/characters/ e atualize avatar e portrait.
   5. profileUrl = URL REAL do perfil Loreverse. Deixe '' enquanto não existir.
   6. clanIconImage = emblema WEBP em assets/clan-symbols/.
   7. Em story, cada linha entre aspas vira um parágrafo.
   8. Em items, cadastre até 3 objetos; use [] quando não houver itens.
   9. photoplayer = nome do ator/atriz. Use 'A definir' enquanto não souber.

   ATENÇÃO: mantenha as vírgulas entre os blocos dos personagens.
   Não é preciso mexer no HTML ou no CSS para cadastrar novas fichas.
*/
const characters = [
  {
    id: 'npc-001',
    name: 'Christian Thorne',
    player: 'nonplayable',
    age: '33 anos',
    photoplayer: 'Finn Wittrock', // Nome do ator que interpreta o personagem
    className: 'Humano',
    classIcon: '✦',
    clan: 'Society of Leopold',
    clanIcon: '✝',
    clanIconImage: '../assets/clan-symbols/society-of-leopold.webp',
    subtitle: 'IRMANDADE DO SOL / SUNNYVALE',
    avatar: '../assets/characters/christian-thorne.webp',
    portrait: '../assets/characters/christian-thorne.webp',
    profileUrl: '', // URL do Loreverse, caso haja
    story: [
      'Christian Thorne é o líder da igreja “Irmandade do Sol”, uma congregação que atua frequentemente como associação filantrópica em Sunnyvale. A Irmandade do Sol, comandada por Thorne, é responsável por eventos na cidade durante todo o ano.',
      'Christian é conhecido por seu temperamento extremista e suas ideologias políticas conservadoras. Por isso, lidera o grupo de civis que persegue e não tolera as criaturas sobrenaturais da cidade, principalmente os vampiros.'
    ],
    items: [] // Exemplo: {name:'Objeto', description:'Descrição.', image:'../assets/characters/item.webp'}
  }
];

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cleanUrl = u => { const s = String(u || ''); return /^(https?:\/\/|\.\.\/|\/)/i.test(s) ? s : '#'; };
const classes = ['Todos', ...new Set(characters.map(c => c.className))];
let activeClass = 'Todos', activeIndex = 0, returnFocus = null;
const filters = $('files-filters'), groups = $('files-groups'), empty = $('files-empty'), input = $('files-query'), view = $('character-view');

function drawFilters(){
  filters.innerHTML = classes.map(c => `<button class="file-filter" type="button" data-class="${esc(c)}" aria-pressed="${c===activeClass}">${esc(c)}</button>`).join('');
  filters.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { activeClass = b.dataset.class; drawFilters(); drawRows(); }));
}

function badge(icon, text, image){
  const visual = image
    ? `<img class="badge-image" src="${esc(image)}" alt="" loading="lazy">`
    : esc(icon || '•');
  return `<span class="character-badge"><span class="symbol">${visual}</span><span class="text">${esc(text || '—')}</span></span>`;
}

function drawRows(){
  const q = input.value.trim().toLocaleLowerCase('pt-BR');
  let total = 0;
  groups.innerHTML = classes.slice(1).map(className => {
    if (activeClass !== 'Todos' && activeClass !== className) return '';
    const matches = characters.map((c,index)=>({...c,index})).filter(c => c.className === className && [c.name,c.player,c.className,c.clan,c.photoplayer,c.id].join(' ').toLocaleLowerCase('pt-BR').includes(q));
    if (!matches.length) return '';
    total += matches.length;
    return `<section class="files-group">
      <div class="files-group-top"><h3>${esc(className)}</h3><span>${String(matches.length).padStart(2,'0')} / ENTRIES</span></div>
      ${matches.map(c => `<div class="character-row">
        <div class="character-person">
          <a class="character-avatar" href="${esc(cleanUrl(c.profileUrl))}" ${cleanUrl(c.profileUrl)==='#'?'aria-label="Link do perfil ainda não configurado" aria-disabled="true"':'target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no Loreverse"'}>
            <img src="${esc(c.avatar)}" alt="Foto de ${esc(c.name)}" loading="lazy">
          </a>
          <div>
            <button type="button" class="character-name" data-open="${c.index}">${esc(c.name)}</button>
            <span class="character-sub">${esc(c.id)} / ${esc(c.subtitle)}</span>
          </div>
        </div>
        <span class="character-player">${esc(c.player)}</span>
        <div class="character-badges">${badge(c.classIcon,c.className)}${badge(c.clanIcon,c.clan,c.clanIconImage)}</div>
        <button type="button" class="character-open" data-open="${c.index}" aria-label="Abrir ficha de ${esc(c.name)}">↗</button>
      </div>`).join('')}
    </section>`;
  }).join('');

  empty.hidden = !!total;
  $('files-count').textContent = `${total} registro${total===1?'':'s'}`;
  groups.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openFile(Number(b.dataset.open))));
}

function openFile(index, preserveFocus=false){
  if(!preserveFocus) returnFocus = document.activeElement;
  activeIndex = (index + characters.length) % characters.length;
  const c = characters[activeIndex];

  $('sheet-code').textContent = `PERSONNEL FILE / ${c.id.toUpperCase()}`;
  $('sheet-title').textContent = c.name;
  $('sheet-name').textContent = c.name;
  $('sheet-subtitle').textContent = c.subtitle;
  $('sheet-photo').src = c.portrait;
  $('sheet-photo').alt = `Retrato de ${c.name}`;
  $('sheet-player').textContent = c.player;
  $('sheet-age').textContent = c.age;
  $('sheet-photoplayer').textContent = c.photoplayer || 'A definir';
  $('sheet-class').textContent = c.className;
  $('sheet-clan').textContent = c.clan;
  $('sheet-story').innerHTML = c.story.map(p => `<p>${esc(p)}</p>`).join('');
  $('sheet-story').scrollTop = 0;

  const link = $('sheet-profile-link');
  link.href = cleanUrl(c.profileUrl);
  link.textContent = link.getAttribute('href') === '#' ? 'LINK DO LOREVERSE A CONFIGURAR' : 'PERFIL NO LOREVERSE ↗';
  link.setAttribute('aria-disabled', link.getAttribute('href') === '#' ? 'true' : 'false');

  $('sheet-items').innerHTML = Array.from({length:3}, (_,i) => {
    const it = c.items[i];
    return `<div class="sheet-item">
      <div class="sheet-item-figure">${it?.image ? `<img src="${esc(it.image)}" alt="${esc(it.name)}">` : `<span>${String(i+1).padStart(2,'0')}</span>`}</div>
      <div>
        <h4>${esc(it?.name || 'Espaço vazio')}</h4>
        <p>${esc(it?.description || 'Nenhum item adquirido.')}</p>
      </div>
    </div>`;
  }).join('');

  view.hidden = false;
  view.setAttribute('aria-hidden','false');
  document.body.classList.add('character-opened');
  view.scrollTop = 0;
  $('sheet-back').focus();
  history.replaceState(null,'',`#${encodeURIComponent(c.id)}`);
}

function closeFile(){
  view.hidden = true;
  view.setAttribute('aria-hidden','true');
  document.body.classList.remove('character-opened');
  history.replaceState(null,'',location.pathname + location.search);
  returnFocus?.focus?.();
}

$('sheet-back').addEventListener('click', closeFile);
$('sheet-close-bottom').addEventListener('click', closeFile);
$('sheet-next').addEventListener('click', () => openFile(activeIndex + 1, true));
input.addEventListener('input', drawRows);
document.addEventListener('keydown', e => { if(e.key === 'Escape' && !view.hidden) closeFile(); });

drawFilters();
drawRows();
const init = characters.findIndex(c => '#'+encodeURIComponent(c.id) === location.hash);
if(init >= 0) openFile(init);
