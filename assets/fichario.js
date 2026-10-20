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
const characters = [
  {
    id:'sv-001',
    name:'Riley Vale',
    player:'@player_riley',
    age:'19 anos',
    className:'Humanos',
    classIcon:'✦',
    clan:'—',
    clanIcon:'○',
    subtitle:'RESIDENT / SUNNYVALE',
    avatar:'../assets/characters/riley.svg',
    portrait:'../assets/characters/riley.svg',
    profileUrl:'#',
    story:[
      'Riley cresceu ouvindo histórias sobre a floresta que delimita Sunnyvale. Desde a infância, aprendeu quais estradas deveria evitar depois do pôr do sol, embora ninguém jamais explicasse o motivo.',
      'Na cidade, todos parecem conhecer seu nome. Mas há acontecimentos recentes sobre os quais ninguém quer falar, especialmente depois do desaparecimento de um antigo morador.',
      'A rotina passa a ser dividida entre a curiosidade, o medo e a necessidade de descobrir o que está escondido nas lembranças da própria família.'
    ],
    items:[
      {name:'Mapa da cidade',description:'Ruas e trilhas antigas.',image:''},
      {name:'Lanterna',description:'Pequena e recarregável.',image:''}
    ]
  },
  {
    id:'sv-002',
    name:'Morgan Ash',
    player:'@player_morgan',
    age:'24 anos',
    className:'Vampiros',
    classIcon:'☾',
    clan:'Sangue Antigo',
    clanIcon:'✶',
    subtitle:'NIGHT RECORD / RESTRICTED',
    avatar:'../assets/characters/morgan.svg',
    portrait:'../assets/characters/morgan.svg',
    profileUrl:'#',
    story:[
      'Morgan chegou a Sunnyvale há muitos anos, embora suas fotografias pareçam ter sido tiradas ontem. Sua presença é conhecida nos lugares que permanecem abertos até tarde.',
      'Os rumores a respeito de sua origem nunca foram esclarecidos. Alguns a consideram uma figura respeitável; outros evitam até mencionar seu nome.',
      'Por trás da aparência tranquila, existem alianças que atravessam gerações e uma dívida que ainda não foi paga.'
    ],
    items:[
      {name:'Anel antigo',description:'Objeto de procedência incerta.',image:''},
      {name:'Envelope lacrado',description:'Nunca foi aberto em público.',image:''}
    ]
  },
  {
    id:'sv-003',
    name:'Evelyn Thorn',
    player:'@player_evelyn',
    age:'21 anos',
    className:'Bruxas',
    classIcon:'✧',
    clan:'Círculo da Lua',
    clanIcon:'☽',
    subtitle:'ARCHIVE / OCCULT STUDIES',
    avatar:'../assets/characters/evelyn.svg',
    portrait:'../assets/characters/evelyn.svg',
    profileUrl:'#',
    story:[
      'Evelyn coleciona documentos esquecidos e mantém um caderno onde registra histórias da cidade. Em casa, objetos comuns convivem com livros que parecem antigos demais para pertencer a uma família.',
      'Ao investigar uma sequência de acontecimentos estranhos, encontrou referências a um nome repetido em diferentes décadas.',
      'Sua maior preocupação não é o que descobriu, mas a possibilidade de que alguém já saiba que ela está investigando.'
    ],
    items:[
      {name:'Grimório',description:'Anotações incompletas.',image:''},
      {name:'Amuleto',description:'Pequeno pingente prateado.',image:''},
      {name:'Chave',description:'Abre uma porta desconhecida.',image:''}
    ]
  },
  {
    id:'sv-004',
    name:'Noah Mercer',
    player:'@player_noah',
    age:'20 anos',
    className:'Lobisomens',
    classIcon:'✹',
    clan:'Alcateia do Norte',
    clanIcon:'▲',
    subtitle:'FOREST SECTOR / 004',
    avatar:'../assets/characters/noah.svg',
    portrait:'../assets/characters/noah.svg',
    profileUrl:'#',
    story:[
      'Noah conhece atalhos pela reserva ambiental que nem mesmo os guardas florestais utilizam. Sua família vive nas proximidades há gerações.',
      'Ultimamente, acontecimentos incomuns reacenderam antigos conflitos e ameaçam o delicado equilíbrio entre os moradores da cidade e os habitantes da floresta.'
    ],
    items:[
      {name:'Canivete',description:'Usado nas trilhas da reserva.',image:''}
    ]
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

function badge(icon, text){
  return `<span class="character-badge"><span class="symbol">${esc(icon || '•')}</span><span class="text">${esc(text || '—')}</span></span>`;
}

function drawRows(){
  const q = input.value.trim().toLocaleLowerCase('pt-BR');
  let total = 0;
  groups.innerHTML = classes.slice(1).map(className => {
    if (activeClass !== 'Todos' && activeClass !== className) return '';
    const matches = characters.map((c,index)=>({...c,index})).filter(c => c.className === className && [c.name,c.player,c.className,c.clan,c.id].join(' ').toLocaleLowerCase('pt-BR').includes(q));
    if (!matches.length) return '';
    total += matches.length;
    return `<section class="files-group">
      <div class="files-group-top"><h3>${esc(className)}</h3><span>${String(matches.length).padStart(2,'0')} / ENTRIES</span></div>
      ${matches.map(c => `<div class="character-row">
        <div class="character-person">
          <a class="character-avatar" href="${esc(cleanUrl(c.profileUrl))}" ${cleanUrl(c.profileUrl)==='#'?'aria-label="Link do perfil ainda não configurado"':'target="_blank" rel="noopener noreferrer" aria-label="Abrir perfil no Loreverse"'}>
            <img src="${esc(c.avatar)}" alt="Foto de ${esc(c.name)}" loading="lazy">
          </a>
          <div>
            <button type="button" class="character-name" data-open="${c.index}">${esc(c.name)}</button>
            <span class="character-sub">${esc(c.id)} / ${esc(c.subtitle)}</span>
          </div>
        </div>
        <span class="character-player">${esc(c.player)}</span>
        <div class="character-badges">${badge(c.classIcon,c.className)}${badge(c.clanIcon,c.clan)}</div>
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
  $('sheet-class').textContent = c.className;
  $('sheet-clan').textContent = c.clan;
  $('sheet-class-kicker').textContent = c.className.toUpperCase();
  $('sheet-clan-kicker').textContent = String(c.clan || '—').toUpperCase();
  $('sheet-class-icon').textContent = c.classIcon || '•';
  $('sheet-clan-icon').textContent = c.clanIcon || '•';
  $('sheet-band-class').textContent = c.className;
  $('sheet-band-clan').textContent = c.clan;
  $('sheet-story').innerHTML = c.story.map(p => `<p>${esc(p)}</p>`).join('');
  $('sheet-story').scrollTop = 0;

  const link = $('sheet-profile-link');
  link.href = cleanUrl(c.profileUrl);
  link.textContent = link.href.endsWith('#') ? 'LINK DO LOREVERSE A CONFIGURAR' : 'PERFIL NO LOREVERSE ↗';

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
