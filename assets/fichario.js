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
      "Christian Thorne não é apenas um pregador; ele é a espinha dorsal comunitária de Sunnyvale. Fundador e líder supremo da Irmandade do Sol, Thorne construiu um império de caridade e devoção. Sob seu comando, a congregação gerencia os principais eventos da cidade ao longo do ano — desde festivais de colheita e arrecadações de alimentos até creches comunitárias e abrigos para os necessitados.",
      "Para o cidadão comum, Thorne é um homem santo, um pilar de moralidade e generosidade que preenche as lacunas deixadas pelo governo local. Sua voz mansa no púlpito atrai tanto os trabalhadores humildes quanto a elite conservadora de Sunnyvale, garantindo à Irmandade do Sol uma influência política e financeira massiva.",
      "Por trás dos sorrisos benevolentes, reside um homem de temperamento extremista e ideologias profundamente radicais. Christian enxerga o mundo em uma dualidade absoluta: a luz purificadora do sol contra as trevas corruptoras. Ele usa sua retórica inflamada para alimentar o medo e o preconceito da população, moldando uma agenda política conservadora que clama pelo “retorno à pureza tradicional” de Sunnyvale.",
      "Esse fanatismo se traduz em uma milícia civil clandestina. Thorne lidera um grupo de fanáticos armados que vigia a cidade durante a noite, caçando ativamente qualquer criatura sobrenatural que ouse cruzar os limites do município. Seu ódio principal é direcionado aos vampiros, seres que ele considera a personificação máxima do pecado e da heresia, pois distorcem o milagre da vida e queimam sob a luz do deus que ele prega.",
      "Thorne não se vê como um vilão; ele se enxerga como o herói messiânico de que Sunnyvale precisa para ser salva da condenação eterna. Isso o torna um oponente extremamente perigoso para os sobrenaturais, pois sua arma mais forte é a fé cega de seus seguidores e a influência legal que ele exerce sobre as autoridades locais."
    ],
    items: [] // Exemplo: {name:'Objeto', description:'Descrição.', image:'../assets/characters/item.webp'}
  },
  {
    id: 'npc-002',
    name: 'Sydra Windsor',
    player: 'nonplayable',
    age: '44 anos',
    photoplayer: 'Dominique Jackson', // Nome do ator/atriz que interpreta o personagem
    className: 'Bruxa',
    classIcon: '✦',
    clan: "Manor's Hall",
    clanIcon: '✶',
    clanIconImage: '../assets/clan-symbols/manors-hall.webp',
    subtitle: "MANOR'S HALL / SUNNYVALE",
    avatar: '../assets/characters/sydra-windsor.webp',
    portrait: '../assets/characters/sydra-windsor.webp',
    profileUrl: '', // URL do Loreverse, caso haja
    story: [
      "Para a elite de Sunnyvale, Sydra Windsor é sinônimo de prestígio, disciplina e alta cultura. Há quase uma década, ela comanda a Academia de Artes Manor's Hall, o instituto educacional mais exclusivo e tradicional da região. Sob sua liderança implacável, a escola se tornou o destino dos filhos das famílias mais ricas da cidade.",
      "Sydra é uma mulher de personalidade ríspida, postura impecável e aparência profundamente intimidadora. Seus olhos parecem ler a alma de quem cruza seu caminho, e ela não tolera falhas, atrasos ou mediocridade. Ela transita pelas festas da alta sociedade de Sunnyvale com a elegância de uma rainha, usando sua influência política e financeira para garantir que a Manor's Hall permaneça intocável e longe de investigações externas.",
      "Por trás dos portões da mansão e das cortinas de veludo das salas de teatro, esconde-se a verdadeira natureza do lugar: Manor's Hall é, na verdade, um santuário e uma escola oculta para jovens bruxas e feiticeiros. Sydra usa a fachada artística e o isolamento dos alunos internos para camuflar o ensino das artes arcanas, poções e rituais sobrenaturais.",
      "Mais do que uma educadora, Sydra protege seu corpo discente com unhas e dentes, como uma loba protege seus filhotes. Windsor sabe que o menor deslize ou manifestação mágica descontrolada pode atrair os olhares errados, destruindo o refúgio seguro que levou anos para construir.",
      "Sydra Windsor é uma aliada valiosa, mas uma inimiga aterrorizante. Ela não hesitará em usar feitiços de manipulação mental, maldições ou sua influência na alta sociedade para destruir qualquer um que ameace expor as bruxas de sua escola e colocá-las em perigo."
    ],
    items: [] // Exemplo: {name:'Objeto', description:'Descrição.', image:'../assets/characters/item.webp'}
  },
  {
    // CASSIAN PENDELTON — todos os campos abaixo podem ser editados pelo GitHub.
    id: 'npc-003',
    name: 'Cassian Pendleton',
    player: 'nonplayable',
    age: '261 anos (aparência de 25 anos)', // Cronologia adotada: transformação em 1790, aos 25
    photoplayer: 'Cody Fern',
    className: 'Vampiro',
    classIcon: '✦',
    clan: 'Camarilla: Toreador',
    clanIcon: '❀',
    clanIconImage: '../assets/clan-symbols/toreador.webp',
    subtitle: 'PRÍNCIPE DE SUNNYVALE / CAMARILLA',
    avatar: '../assets/characters/cassian-pendleton.webp',
    portrait: '../assets/characters/cassian-pendleton.webp',
    profileUrl: '', // Preencha com o endereço do perfil Loreverse, quando houver.
    story: [
      'Nascido na aristocracia rural inglesa no final do século XVIII, Cassian Pendleton foi criado para ser o reflexo da perfeição da Era Georgiana. Jovem brilhante, dedicava seus dias à poesia, ao patronato das artes cênicas e à arquitetura clássica. Ele não via a arte apenas como estética, mas como a ferramenta definitiva de ordem, civilização e controle social.',
      'Sua obsessão por simetria, beleza e etiqueta impecável chamou a atenção de uma influente Anciã do Clã Toreador de Londres. Fascinada por sua mente afiada e frieza cirúrgica disfarçada de charme, ela o retirou do mundo dos vivos na noite de seu aniversário de 25 anos.',
      'Cassian chegou à Louisiana no final dos anos 1970, estabelecendo seus primeiros contatos em New Orleans antes de voltar sua atenção para Sunnyvale. Enquanto muitos Anciões da Camarilla insistiam em preservar antigas estruturas de poder, Cassian percebeu o potencial das novas redes de comunicação, dos investimentos imobiliários e da influência sobre as instituições locais. Para ele, a modernização seria uma obra de arte e uma ferramenta de controle social cada vez mais poderosa.',
      'Sunnyvale era uma cidade em disputa, cercada por grupos Anarquistas e atravessada pelos interesses de famílias influentes, empresários e organizações discretas. Usando sua fortuna acumulada ao longo de séculos e sua Disciplina de Presença, Cassian conquistou aliados entre os proprietários e investidores da região. Comprou quarteirões inteiros por meio de empresas de fachada e estruturou uma rede de informações e vigilância capaz de alcançar os principais círculos de poder da cidade.',
      'Em 1988, após arquitetar a queda do antigo Príncipe local — um Ventrue que perdeu influência ao subestimar as mudanças políticas e econômicas de Sunnyvale —, Cassian Pendleton autodeclarou-se Príncipe de Sunnyvale.'
    ],
    items: [] // Até 3 itens, editáveis aqui.
  },
  {
    id: 'npc-004',
    name: 'Fenris Molkov',
    player: 'nonplayable',
    age: '35 anos',
    photoplayer: 'Johnny Sibilly',
    className: 'Shapeshifter',
    classIcon: '✦',
    clan: 'Blackwood Pack',
    clanIcon: '☽',
    clanIconImage: '../assets/clan-symbols/blackwood-pack.webp',
    subtitle: 'ALFA DA ALCATEIA / BLACKWOOD PACK',
    avatar: '../assets/characters/fenris-molkov.webp',
    portrait: '../assets/characters/fenris-molkov.webp',
    profileUrl: '',
    story: [
      'Fenris Molkov assumiu a liderança do Blackwood Pack aos 30 anos, não por direito de herança, mas por puro instinto de sobrevivência e poder. Nascido sob uma linhagem de shapeshifters de sangue forte, ele aprendeu cedo que em Sunnyvale a fraqueza atrai a morte.',
      'Sua ascensão ao topo da alcateia ocorreu há cinco anos, durante a crise da Lua de Sangue. O Alfa anterior estava velho e suas decisões políticas quase expuseram os segredos do clã aos humanos e a corporações rivais. Diante da ruína iminente do clã, Fenris fez o que a natureza exigia: desafiou o antigo líder em combate. A luta foi brutal, mas a ferocidade e a forma de lobo implacável de Fenris garantiram sua vitória e o título de Alfa.',
      'Hoje, Fenris equilibra a selvajaria de sua natureza com a frieza de um estrategista. Sob o seu comando, o Blackwood Pack recuperou o controle territorial de Sunnyvale e se tornou mais unido do que nunca.',
      'Para a população humana da cidade, Fenris se passa por um empresário recluso do ramo madeireiro, mas, entre os sobrenaturais, ele é o predador supremo cuja presença impõe silêncio e respeito absoluto. Ele protege os seus com garras de ferro, mas pune a traição sem qualquer hesitação.'
    ],
    items: []
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

// Visual do índice: classe SEM símbolo; clã COM emblema.
// Este modelo se aplica automaticamente a personagens adicionados no array characters.
function badge(icon, text, image, type = 'clan'){
  const visual = type === 'class' ? '' : `<span class="symbol">${image
    ? `<img class="badge-image" src="${esc(image)}" alt="" loading="lazy">`
    : esc(icon || '•')}</span>`;
  return `<span class="character-badge character-badge--${type}">${visual}<span class="text">${esc(text || '—')}</span></span>`;
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
        <div class="character-badges">${badge(c.classIcon,c.className,null,'class')}${badge(c.clanIcon,c.clan,c.clanIconImage,'clan')}</div>
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
