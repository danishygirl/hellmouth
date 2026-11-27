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
    name: 'Christian Thorne',
    player: 'nonplayable',
    age: '33 anos',
    photoplayer: 'Finn Wittrock', // Nome do ator que interpreta o personagem
    occupation: 'A definir', // Ocupação do personagem
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
    name: 'Sydra Windsor',
    player: 'nonplayable',
    age: '44 anos',
    photoplayer: 'Dominique Jackson', // Nome do ator/atriz que interpreta o personagem
    occupation: 'A definir', // Ocupação do personagem
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
    name: 'Cassian Pendleton',
    player: 'nonplayable',
    age: '261 anos (aparência de 25 anos)', // Cronologia adotada: transformação em 1790, aos 25
    photoplayer: 'Cody Fern',
    occupation: 'A definir', // Ocupação do personagem
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
    name: 'Fenris Molkov',
    player: 'nonplayable',
    age: '35 anos',
    photoplayer: 'Johnny Sibilly',
    occupation: 'A definir', // Ocupação do personagem
    className: 'Metamorfo',
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
  },
   {
    name: 'Tobias Castenskiold Ellis-Farar',
    age: '23 anos',
    photoplayer: 'Oscar Spendrup',
    occupation: 'Nenhum',
    className: 'Humano',
    classIcon: '✦',
    clan: 'Nenhum',
    clanIcon: '',
    clanIconImage: '',
    subtitle: 'SUNNYVALE',
   avatar: '../assets/characters/tobias.webp',
portrait: '../assets/characters/tobias.webp',
    profileUrl: '',
    story: [
        'De família nobre e riqueza geracional, com um passado coletivo denso e de não pavonear, Tobias não sabia, até pouco tempo, do mundo em que vivia. O ensino superior foi o primeiro aceno para o mundo que sempre lhe fora vedado — aquele que existia para além dos muros do complexo. Aos 23 anos, ele tem aprendido com uma avidez quase frenética as nuances dos diversos ambientes que a sociedade tem a oferecer, percebendo, um pouco tarde, que a redoma de vidro em que cresceu não o preparou para quase nada do que está lá fora.',
    ],
    items: []
},
   {
    name: 'Tara Haliwell',
    age: '26 anos',
    photoplayer: 'Elle Fanning',
    occupation: 'Proprietária da loja Tara Trinkets',
    className: 'Bruxa',
    classIcon: '✦',
    clan: 'Nenhum',
    clanIcon: '',
    clanIconImage: '',
    subtitle: 'SUNNYVALE',
   avatar: '../assets/characters/tara.webp',
portrait: '../assets/characters/tara.webp',
    profileUrl: '',
    story: [
        'Tara Haliwell é proprietária da Tara Trinkets, uma loja de artigos ocultistas em Sunnyvale, especializada na comercialização de amuletos, cristais, grimórios e outros objetos relacionados ao sobrenatural. Em uma cidade predominantemente conservadora e religiosa, Tara encontrou no ocultismo uma maneira peculiar de ganhar a vida, conquistando até mesmo a clientela mais cética da região. Dona de um senso de humor bastante irônico e de uma evidente habilidade para os negócios, Tara conhece bem as contradições dos moradores de Sunnyvale. A mesma população que condena determinadas práticas sobrenaturais é também responsável por boa parte de suas vendas, especialmente quando a superstição fala mais alto que as convicções religiosas. Tara prefere não questionar a fé de seus clientes, sobretudo quando estão dispostos a gastar dinheiro em sua loja. Entusiasta das festividades locais, tem uma predileção especial pelo Vampire Weekend, ocasião em que pode divulgar seu estabelecimento e aproveitar o interesse dos moradores pelo sobrenatural sem os habituais julgamentos. Apesar de seu interesse pelo ocultismo, Tara demonstra uma personalidade bastante prática. É sociável, observadora e sabe conduzir uma conversa a seu favor, recorrendo à simpatia mesmo diante de pessoas cujas opiniões considera inconvenientes. Sua familiaridade com o lado mais místico de Sunnyvale faz da Tara Trinkets um curioso ponto de encontro entre a religiosidade da cidade e as superstições que seus habitantes dificilmente admitem cultivar.',
    ],
    items: [] 
];

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
renderFilters();renderGallery();
const initial=characters.findIndex(c=>'#'+encodeURIComponent(c.id)===location.hash);
if(initial>=0)openFile(initial);
