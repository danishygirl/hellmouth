/* HELLMOUTH / AMBIENTAÇÃO — EDITE AQUI
Adicione ambientes copiando um objeto do array places.
image aceita endereço de PNG, JPG, WEBP ou SVG, local ou externo.
name: nome | category: categoria | loreverseUrl: link direto para o tópico no Loreverse
 description: lista de parágrafos da descrição.
*/
const places = [
  {
    "name": "Sunnyvale",
    "loreverseUrl": "", loreverse.world/universos/hellmouth
    "category": "LOUISIANA / UNITED STATES",
    "image": "../assets/ambientacao/sunnyvale.webp",
    "lead": "Entre ruas sombreadas, quase tudo parece normal.",
    "description": [
      "Uma rodovia de duas faixas corta uma densa floresta de pinheiros, palmeiras e carvalhos cobertos por musgo, sob um céu aberto e brilhante. À margem da estrada, uma antiga placa de madeira desgastada dá as boas-vindas à cidade. Postes de madeira conduzem a fiação elétrica em direção ao perímetro urbano, caracterizado por comércios locais, ruas residenciais com casas de madeira e o calor do sul da Louisiana. A cidade é fortemente iluminada pelo sol escaldante, que gera um calor denso e constante durante o dia. Essa claridade tropical confere ao lugar um aspecto pacato e tipicamente interiorano, enquanto a vegetação fechada e o mormaço criam uma barreira de isolamento em relação ao restante do mundo. Ao anoitecer, o calor abafado permanece, mas, durante o inverno, poças d’água refletem a luz nas estradas de barro que separam as casas mais isoladas da cidade."
    ]
  },
  {
    "name": "Ruas de Sunnyvale",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "CIDADE / RUAS",
    "image": "../assets/ambientacao/ruas-sunnyvale.webp",
    "lead": "O centro comercial e as ruas tradicionais de Sunnyvale.",
    "description": [
      "Uma avenida principal de asfalto é ladeada por calçadas largas de tijolos e edifícios pequenos com sacadas de ferro. Placas de madeira preta com letras douradas identificam o comércio local, incluindo lojas de antiguidades e livrarias, sob bandeiras americanas pendentes. Carros clássicos e picapes dividem as vagas ao longo da via, pontuada por árvores floridas, postes de luz coloniais e a silhueta de uma torre de igreja ao fundo. A luz do dia ilumina diretamente as fachadas históricas, reforçando a atmosfera convidativa de uma comunidade tradicional do interior da Louisiana. O mormaço diurno mantém o movimento lento e a rotina comercial desacelerada ao longo da avenida."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Um complexo imponente de tijolos vermelhos escuros e arquitetura robusta, cercado por uma densa floresta de pinheiros altos. O asfalto irregular do estacionamento é marcado por poças d’água que refletem a luz e por carros antigos dos estudantes durante a temporada de chuvas. O local transita entre a normalidade de uma escola pública e o isolamento sombrio provocado pelas árvores que cercam o horizonte. À medida que o sol se põe, o bosque projeta sombras longas e distorcidas sobre a fachada, dando ao prédio o aspecto de uma fortaleza isolada."
    ],
    "name": "Sunnyvale High",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "INSTITUIÇÃO / ESCOLA",
    "image": "../assets/ambientacao/sunnyvale-high.webp"
  },
  {
    "name": "Departamento Policial",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "INSTITUIÇÃO / SEGURANÇA",
    "image": "../assets/ambientacao/departamento-policial.webp",
    "lead": "Na cidade, algumas ocorrências parecem desaparecer dos arquivos.",
    "description": [
      "Uma repartição pública de tijolos vermelhos e concreto claro, com um letreiro institucional cinza na entrada. Postes decorativos e árvores pequenas preenchem o pátio, onde um mastro alto sustenta a bandeira dos Estados Unidos. O estacionamento de asfalto abriga viaturas de patrulha pretas e brancas e caminhonetes utilitárias da força policial local. A calmaria externa transmite a impressão de uma delegacia pacata de cidade pequena, cuja atividade principal parece se resumir a relatórios burocráticos e ao arquivamento de queixas menores. As janelas retangulares barram a claridade com persianas escuras, criando pontos cegos para o interior das salas de triagem e mantendo isolada a área interna de carceragem."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Calçadas charmosas de paralelepípedos, ladeadas por lojas de fachadas clássicas e letreiros, compõem o distrito. Árvores cobertas por musgo pendente se estendem sobre a rua, bloqueando parte da luz. A fileira de comércios locais, como livrarias e lojas vintage, transmite o ar pacato de uma cidade pequena, mas rapidamente se torna solitária e suspeita quando o movimento diminui. Os recantos das vitrines escuras e os toldos das lojas criam pontos cegos constantes ao longo das calçadas, perfeitos para a movimentação discreta dos moradores."
    ],
    "name": "Distrito Comercial",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "CIDADE / COMÉRCIO",
    "image": "../assets/ambientacao/distrito-comercial.webp"
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Um bairro suburbano tipicamente americano, com casas de madeira de um ou dois andares, varandas frontais e cercas brancas baixas. À noite, a rua de asfalto escuro é fracamente iluminada por postes espaçados, deixando grandes vãos de escuridão entre as propriedades e as árvores frondosas. A quietude extrema e a falta de movimento nas calçadas geram uma falsa sensação de segurança, em que cada janela acesa parece observar quem passa pela rua."
    ],
    "name": "Residencial Tree Hills",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "CIDADE / RESIDENCIAL",
    "image": "../assets/ambientacao/residencial-tree-hills.webp"
  },
  {
    "name": "Reserva Ambiental",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "NATUREZA / RESERVA",
    "image": "../assets/ambientacao/reserva-ambiental.webp",
    "lead": "Um refúgio verde onde nem todas as trilhas levam de volta.",
    "description": [
      "Um rio de águas calmas e escuras corta uma floresta densa e fechada. Na margem lamacenta, destacam-se um pequeno trapiche de madeira envelhecida e uma torre de observação rústica suspensa entre as árvores. A calmaria da água e a vastidão da mata dão a impressão de um lugar intocado, mas a vegetação fechada torna o ambiente um pouco claustrofóbico. As copas volumosas das árvores bloqueiam quase toda a luz do entardecer, cobrindo o chão da floresta e as margens do rio com a escuridão da noite."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Um estabelecimento rústico com acabamento em madeira escura, mesas redondas e cabines estofadas em couro vermelho. Uma mesa de bilhar com feltro verde domina o primeiro plano, iluminada por uma luminária antiga de vidro decorado. O clima de bar de beira de estrada, típico de uma cidade pequena, serve como cobertura perfeita para encontros clandestinos e faz parte da rotina dos moradores de Sunnyvale."
    ],
    "name": "Moonlight Diner",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "ESTABELECIMENTO / RESTAURANTE",
    "image": "../assets/ambientacao/moonlight-diner.webp"
  },
  {
    "name": "Docks Night Club",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "ESTABELECIMENTO / VIDA NOTURNA",
    "image": "../assets/ambientacao/docks-night-club.webp",
    "lead": "Quando a música aumenta, a cidade revela outra face.",
    "description": [
      "Um clube underground com paredes pretas totalmente cobertas por pôsteres de bandas, adesivos e pichações. No centro, uma pista de dança de concreto desgastado leva a um pequeno palco. À direita, balcões de madeira com banquetas de couro vermelho e metal cromado dividem o espaço. O lugar é famoso por receber shows ao vivo de bandas de garagem, atraindo multidões barulhentas e servindo como o reduto perfeito para os jovens da cidade se misturarem."
    ]
  },
  {
    "name": "Red Room Bar",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "ESTABELECIMENTO / BAR",
    "image": "../assets/ambientacao/red-room-bar.webp",
    "lead": "Um ponto de encontro para conversas que não cabem na luz do dia.",
    "description": [
      "Um salão gótico de proporções imensas, dominado por tons de vermelho-sangue e carmesim. O espaço é preenchido por grandes sofás curvos de veludo, tapetes ornamentais e mesas baixas. Ao fundo, acima de uma estrutura de colunas imponentes, ergue-se uma grande estátua de uma figura montada em um animal. À esquerda, um balcão extenso exibe prateleiras repletas de garrafas de vidro. A arquitetura clássica, com painéis de madeira escura e tetos altos com passarelas de metal, cria a atmosfera de uma área VIP de boate noturna no segundo andar. O local funciona oficialmente como o ambiente de reunião e corte da Camarilla, onde as leis da Máscara são discutidas e a hierarquia vampírica é rigidamente mantida em total segredo."
    ]
  },
  {
    "name": "Academia de Artes Manor Hall",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "INSTITUIÇÃO / EDUCAÇÃO",
    "image": "../assets/ambientacao/manor-hall.webp",
    "lead": "Uma academia de artes que guarda segredos além do palco.",
    "description": [
      "Um imponente casarão de arquitetura clássica da Louisiana, com fachadas de colunas brancas e grandes varandas externas protegidas por grades de ferro trabalhado. No andar térreo, destaca-se um salão neoclássico com colunas coríntias, tetos altos com molduras de gesso, pisos de madeira clara e grandes lustres de cristal. O espaço é decorado com sofás de época, uma lareira de mármore entalhada e paredes repletas de retratos antigos. No segundo andar, corredores longos de assoalho conectam os dormitórios, que contam com camas de ferro forjado, dosséis e janelas francesas de acesso à varanda."
    ]
  },
  {
    "name": "Sunnyvale Memorial Garden",
    "loreverseUrl": "", // COLE AQUI o link do tópico deste ambiente no Loreverse
    "category": "LOCAL HISTÓRICO / CEMITÉRIO",
    "image": "../assets/ambientacao/sunnyvale-memorial-garden.webp",
    "lead": "Histórias antigas permanecem entre os mausoléus e jardins.",
    "description": [
      "Um cemitério antigo composto por fileiras irregulares de lápides de mármore cinzento, cruzes de pedra e mausoléus em estilo gótico. Caminhos de terra e folhas caídas separam os setores do gramado escuro. Poucos postes de luz coloniais estão distribuídos pelo terreno, emitindo uma iluminação pálida que alcança apenas as quadras principais e os troncos de árvores altas. A disposição espaçada das sepulturas e a arquitetura desgastada das capelas familiares dão ao local um aspecto de abandono e isolamento geográfico do restante da cidade."
    ]
  }
];
const $=id=>document.getElementById(id);
const list=$('places-list'),modal=$('place-modal');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let current=0, opener=null;
function render(){
 list.innerHTML=places.map((p,i)=>`<button class="place-entry" type="button" data-place="${i}" aria-label="Abrir informações sobre ${esc(p.name)}"><img class="place-thumbnail" src="${esc(p.image)}" alt="" loading="lazy"><span class="place-entry-copy"><span class="place-name">${esc(p.name)}</span><span class="place-category">${esc(p.category)}</span></span><span class="place-arrow" aria-hidden="true">↗</span></button>`).join('');
 $('places-total').textContent=String(places.length).padStart(2,'0')+' / FILES';
 list.querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>{opener=b;show(Number(b.dataset.place));}));
}
function show(i){
 current=(i+places.length)%places.length;
 const p=places[current];
 $('place-modal-number').textContent='LOCATION FILE / '+String(current+1).padStart(3,'0');
 $('place-modal-img').src=p.image; $('place-modal-img').alt='Imagem de '+p.name;
 $('place-modal-title').textContent=p.name;
 $('place-modal-category').textContent=p.category;
 const topicLink=$('place-modal-loreverse');
 const validTopic=/^https?:\/\//i.test((p.loreverseUrl||'').trim());
 topicLink.href=validTopic?p.loreverseUrl.trim():'#';
 topicLink.classList.toggle('is-unconfigured',!validTopic);
 topicLink.setAttribute('aria-disabled',String(!validTopic));
 topicLink.title=validTopic?'Abrir tópico de '+p.name+' no Loreverse':'Link do Loreverse ainda não cadastrado';
 $('place-modal-description').innerHTML=p.description.map(t=>'<p>'+esc(t)+'</p>').join('');
 modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('place-open');
 modal.scrollTop=0;$('place-modal-close').focus();
}
function hide(){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('place-open');opener?.focus();}
$('place-modal-loreverse').addEventListener('click',e=>{
 if(e.currentTarget.getAttribute('aria-disabled')==='true')e.preventDefault();
});
$('place-modal-close').addEventListener('click',hide);
$('place-modal-next').addEventListener('click',()=>show(current+1));
modal.addEventListener('click',e=>{if(e.target===modal)hide()});
document.addEventListener('keydown',e=>{
 if(modal.hidden)return;
 if(e.key==='Escape'){e.preventDefault();hide()}
 if(e.key==='Tab'){
  const controls=Array.from(modal.querySelectorAll('button')).filter(b=>!b.disabled);
  const first=controls[0],last=controls[controls.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
 }
});
render();


/* V15 — LINKS DA COMUNIDADE. Substitua url: '#' pelo link exato de cada tópico no Loreverse.
   Adicione/remova objetos para personalizar o menu. */
const communityTopics = [
  { name: 'Sobre a Comunidade', description: 'Apresentação e história do RPG', url: '#' },
  { name: 'Regras', description: 'Normas e convivência', url: '#' },
  { name: 'Inscrições', description: 'Cadastro de personagens', url: '#' },
  { name: 'Fichas de Personagens', description: 'Registro dos habitantes', url: '#' },
  { name: 'Classes e Raças', description: 'Características sobrenaturais', url: '#' },
  { name: 'Clãs', description: 'Linhagens e sociedades', url: '#' },
  { name: 'Ambientações', description: 'Tópicos para cenas na cidade', url: '#' },
  { name: 'Pedidos e Dúvidas', description: 'Suporte aos jogadores', url: '#' }
];
const chainIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13.5a4.5 4.5 0 0 0 6.5.2l2.7-2.7a4.5 4.5 0 0 0-6.4-6.4l-1.55 1.55"/><path d="M14 10.5a4.5 4.5 0 0 0-6.5-.2l-2.7 2.7a4.5 4.5 0 0 0 6.4 6.4l1.55-1.55"/></svg>';
const navLinks=$('community-links');
navLinks.innerHTML=communityTopics.map(topic => {
  const valid=/^https?:\/\//i.test(topic.url);
  const label=esc(topic.name), desc=esc(topic.description);
  return `<a class="community-link${valid?'':' is-placeholder'}" href="${valid?esc(topic.url):'#'}" ${valid?'target="_blank" rel="noopener noreferrer"':'aria-label="'+label+': link do Loreverse ainda não configurado"'}>
    <span class="community-link-icon">${chainIcon}</span>
    <span class="community-link-text"><span class="community-link-name">${label}</span><span class="community-link-sub">${desc}</span></span>
    <span class="community-link-arrow" aria-hidden="true">›</span>
  </a>`;
}).join('');
navLinks.querySelectorAll('.is-placeholder').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
