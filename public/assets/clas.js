/* HELLMOUTH — CLÃS / TODOS OS DADOS EDITÁVEIS
  Para adicionar clãs, duplique um objeto abaixo. icon pode ser caractere;
  iconImage aceita URL de PNG/SVG transparente (deixe '' se usar icon).
  Os clãs são exemplos narrativos, altere livremente nomes, textos e símbolos.
*/
const clans=[
 {id:'os-escolhidos',name:'Os Escolhidos',icon:'✦',iconImage:'../assets/clan-symbols/os-escolhidos.webp',className:'Humanos',foundation:'Recentemente',territory:'Sunnyvale e outros lugares',lead:'Para que os homens possam herdar a Terra sem medo do escuro.',desc:[
 'Recentemente, em todos os lugares, pessoas foram selecionadas por uma força superior e começaram a receber mensagens alertando-as sobre a existência de seres malignos. Mais do que isso, essas pessoas passaram a enxergar esses monstros e a manifestar poderes fantásticos, com os quais eram capazes de combatê-los.',
 'Munidas de um grande senso de responsabilidade, essas pessoas aceitaram a missão e passaram a combater as criaturas sobrenaturais.',
 'O objetivo é permitir que, no futuro, os homens possam “herdar a Terra”, ocupando nosso planeta sem medo do escuro, livres da repressão desses monstros.'
 ]},
 {id:'society-of-leopold',name:'Society of Leopold',icon:'✝',iconImage:'../assets/clan-symbols/society-of-leopold.webp',className:'Humanos / Inquisição',foundation:'Não informado',territory:'Atuação clandestina',lead:'Soldados autoproclamados de Cristo diante de um Apocalipse iminente.',desc:[
 'A Sociedade de Leopold é uma facção da Inquisição que existe para perseguir e combater seres sobrenaturais. Representa uma grande ameaça a todos os grupos sobrenaturais devido ao seu amplo conhecimento, treinamento, equipamento, preparação e zelo fanático.',
 'A Sociedade acredita plenamente que o Apocalipse está se aproximando e que todos os seres sobrenaturais, querendo ou não, fazem parte do exército do Anticristo. Como soldados autoproclamados de Cristo, seus integrantes consideram seu dever divino matar ou neutralizar o máximo possível de ameaças sobrenaturais ao cristianismo antes do retorno de Cristo ao mundo.',
 'Atualmente, a Sociedade age em segredo absoluto, conduzindo investigações mais próximas do trabalho de detetive moderno do que da jurisdição medieval.'
 ]},
 {id:'maidens-blood-sisterhood',name:"Maiden's Blood Sisterhood",icon:'✧',iconImage:'../assets/clan-symbols/maidens-blood-sisterhood.webp',className:'Humanos / Caçadoras',foundation:'Não informado',territory:'Campi universitários',lead:'De dia, uma irmandade estudantil. À noite, caçadoras das criaturas das trevas.',desc:[
 'Maiden’s Blood Sisterhood é uma sociedade secreta formada por estudantes que também são caçadoras de vampiros. Distribuída por centenas de campi universitários, a Sisterhood é uma rede de sociedades secretas vagamente organizadas, cada uma dedicada a proteger seu campus e as pessoas que ali vivem das criaturas das trevas.',
 'Durante o dia, seus grupos se apresentam como sororidades comuns, participando de atividades estudantis e ajudando a comunidade.',
 'À noite, porém, suas integrantes caçam ativamente qualquer ameaça à faculdade e às populações locais.'
 ]},
 {id:'camarilla',name:'Camarilla',icon:'♛',iconImage:'../assets/clan-symbols/camarilla.webp',className:'Vampiros / Sociedade Vampírica',foundation:'Tradições da Idade das Trevas',territory:'Cidades governadas por reis e rainhas',lead:'Preservar a ordem da sociedade vampírica acima de tudo.',desc:[
 'A Camarilla é a maior das seitas vampíricas, uma organização ampla que ostensivamente representa e protege todos os vampiros. Seu objetivo é manter o status quo da sociedade vampírica; para isso, boa parte de sua estrutura e de suas tradições reflete a sociedade cainita da Europa durante a Idade das Trevas.',
 'Trata-se de uma aliança abrangente, mas que carece de uma autoridade central forte ou de um exército permanente.',
 'As cidades da Camarilla são sempre governadas por um rei ou uma rainha, com a assistência de seu clã, que pode atuar como conselho consultivo ou manter seu próprio regime de poder.'
 ]},
 {id:'brujah',name:'Brujah',icon:'⛓',iconImage:'../assets/clan-symbols/brujah.webp',className:'Vampiros / Camarilla',foundation:'Clã da Camarilla',territory:'Comunidades rebeldes e movimentos urbanos',lead:'Rebeldes por natureza, determinados a derrubar o sistema.',desc:[
 'O clã Brujah é composto quase inteiramente por rebeldes de todos os tipos, eternamente à procura das expressões definitivas de sua individualidade. Os Brujah são punks, carecas, motoqueiros, death-rockers, freaks, socialistas e anarquistas. Tendem a ser teimosos, altamente agressivos, rudes e extremamente vingativos. São os vampiros mais incontroláveis da Família.',
 'Esses desajustados são fanáticos por suas crenças díspares. A única coisa que os une é o desejo de sobrepujar o sistema social, seja vampírico ou mortal, e substituí-lo por outro forjado por eles mesmos — ou por nada. Muitos são obstinados e se devotam tanto à sua causa que se tornam cegos a todas as outras nuances da verdade.',
 'Os Brujah tendem a se vestir segundo o estilo mais ultrajante de cada período, embora alguns adotem um visual que entre em conflito com o restante do clã, para serem considerados os mais rebeldes. Jaquetas de couro, cabelos arrepiados, correntes e botas pretas são comuns atualmente, assim como vestimentas antigas, especialmente as da Renascença.'
 ]},
 {id:'malkavian',name:'Malkavian',icon:'◈',iconImage:'../assets/clan-symbols/malkavian.webp',className:'Vampiros / Camarilla',foundation:'Clã da Camarilla',territory:'Não informado',lead:'Da loucura nasce a sabedoria; da sabedoria, o poder.',desc:[
 'Os Malkavians são considerados loucos, cada um à sua maneira. Da loucura, porém, origina-se a sabedoria e, da sabedoria, o poder. Conhecidos como verdadeiras criaturas do caos, também são chamados de palhaços e brincalhões. Como tudo o que está ligado a eles, nem sempre seu comportamento faz sentido.',
 'O clã é notório pela conduta destrutiva e niilista de alguns de seus membros. Os Malkavians têm reputação de comportamento sádico e de fazer mau uso da humanidade que ainda conservam. Na verdade, porém, esses integrantes representam uma minoria.',
 'Os membros do clã frequentemente surpreendem outros vampiros, pois muitos sequer parecem insanos. Alguns acreditam que a má reputação dos Malkavians se deve a poucos integrantes realmente psicóticos. Ainda assim, vale lembrar: às vezes, as pessoas de aparência mais normal são justamente as que estão mais distantes da realidade.'
 ]},
 {id:'toreador',name:'Toreador',icon:'❀',iconImage:'../assets/clan-symbols/toreador.webp',className:'Vampiros / Camarilla',foundation:'Clã da Camarilla',territory:'Círculos artísticos e culturais',lead:'Preservar a arte é desafiar os efeitos do tempo.',desc:[
 'Os membros deste clã são conhecidos por seu hedonismo, embora haja um equívoco na interpretação de seu comportamento. São membros orgulhosos e nobres da Família, entusiasmam-se com facilidade e cultivam gostos caros. Entretanto, classificá-los simplesmente como hedonistas seria um exagero. Os artistas são sempre incompreendidos.',
 'O clã como um todo considera seus integrantes conservacionistas, dedicados à proteção dos maiores artistas do mundo. Os Toreador procuram especialmente aqueles que julgam mais talentosos e lhes concedem o dom da imortalidade, preservando, assim, seu gênio dos efeitos do tempo.',
 'Os membros do clã costumam ter boa aparência e vestir-se conforme a última moda, frequentando as lojas mais refinadas. Em toda a Família, apenas os Toreador conseguem acompanhar — ou dão importância — à moda humana, sempre em transformação.'
 ]},
 {id:'tremere',name:'Tremere',icon:'✴',iconImage:'../assets/clan-symbols/tremere.webp',className:'Vampiros / Camarilla',foundation:'Clã da Camarilla',territory:'Não informado',lead:'Nossa prioridade é servir ao clã.',desc:[
 'Os integrantes deste clã são dedicados e extremamente bem organizados, embora alguns os considerem arcanos e indignos de confiança. São agressivos, altamente intelectuais e manipuladores, respeitando apenas aqueles que lutam e perseveram apesar de todas as adversidades. Os Tremere acreditam que devem usar os outros clãs para prosperar.',
 '“Faça amizade com eles, deixe-os pensar que são iguais a você, mas jamais esqueça que nossa prioridade é servir ao clã”, sussurram os anciões Tremere aos seus progênitos. “Se você precisar usar seus amigos a serviço do clã, então saberá que seu tempo não foi desperdiçado.”',
 'Os Tremere tradicionalmente vestem casacas negras ou mantos com colarinhos altos e dobrados para fora, com símbolos arcanos costurados no tecido. Embora isso já não seja universal, ainda preferem roupas de tecidos pretos e aparência impressionante, como ternos cinza-escuros de risca de giz. Muitos carregam adereços como bengalas; alguns desses “ornamentos” podem ser potentes talismãs místicos.'
 ]},
 {id:'ventrue',name:'Ventrue',icon:'♔',iconImage:'../assets/clan-symbols/ventrue.webp',className:'Vampiros / Camarilla',foundation:'Clã da Camarilla',territory:'Elite social e política da cidade',lead:'O poder pertence àqueles que sabem preservá-lo.',desc:[
 'Antiquados e presos às velhas tradições, os Ventrue são sofisticados e gentis. Acreditam no bom gosto acima de tudo e trabalham arduamente para tornar suas vidas confortáveis. Frequentemente, são líderes da Camarilla: membros cautelosos, honrados, sociáveis e elegantes.',
 'Podem ser encontrados entre a elite do mundo mortal. Sua sofisticação facilita o convívio com os círculos mais influentes da sociedade, permitindo-lhes exercer controle sobre muitas das pessoas mais poderosas da cidade. Por transitarem com facilidade nesses ambientes, os Ventrue costumam deter um monopólio sobre o controle político local. Quando algo dá errado, é a eles que os outros membros frequentemente recorrem em busca de apoio.',
 'Os Ventrue não mudam de comportamento com facilidade e, por isso, costumam vestir-se em estilos antiquados, com laços, franjas, cartolas e roupas de gala. Os integrantes mais jovens também se vestem muito bem; “mauricinho” seria um adjetivo adequado para descrevê-los.'
 ]},
 {id:'coven',name:'Coven',icon:'☽',iconImage:'../assets/clan-symbols/coven.webp',className:'Bruxas / Magos',foundation:'Iniciação obrigatória',territory:'Organização mundial',lead:'A iniciação marca o ingresso em uma comunidade unida pela magia.',desc:[
 'O Coven reúne pessoas que possuem poderes mágicos ao redor do mundo, também conhecidas como bruxas ou magos. Qualquer pessoa que deseje ingressar precisa passar por uma iniciação. Depois desse processo, a bruxa torna-se oficialmente membro do coven.',
 'Seus integrantes podem praticar a bruxaria individualmente, como bruxas solitárias, ou reunir-se em grupos menores.',
 'Esses grupos funcionam como subdivisões de uma hierarquia com diferentes propósitos, mantendo suas próprias práticas dentro da organização.'
 ]},
 {id:'manors-hall',name:"Manor's Hall",icon:'❖',iconImage:'../assets/clan-symbols/manors-hall.webp',className:'Bruxas / Coven',foundation:'Convite e iniciação',territory:"Academia de Artes Manor's Hall, Sunnyvale",lead:'Por trás da arte, a magia permanece em segredo.',desc:[
 'A Manor’s Hall é uma prestigiada academia de artes de Sunnyvale, conhecida por seus programas de balé e teatro, que atraem jovens de famílias tradicionais da cidade e de outras regiões do país. Entretanto, por trás de sua reputação artística, a instituição abriga um Coven secreto e exclusivo, dedicado à formação de bruxas e feiticeiros que desejam desenvolver e aperfeiçoar suas habilidades mágicas.',
 'Disfarçados de professores e estudantes de artes, seus integrantes recebem treinamento em feitiçaria, rituais e práticas ocultistas, utilizando a disciplina artística como parte de sua formação. O ingresso no Coven acontece mediante convite e iniciação, sendo reservado àqueles que demonstram aptidão mágica e capacidade de preservar os segredos da instituição.',
 'Em Sunnyvale, a Manor’s Hall mantém uma posição discreta e oficialmente neutra diante dos conflitos entre humanos e criaturas sobrenaturais. Seus membros evitam interferir nas disputas que movimentam a cidade, embora a academia seja um importante ponto de encontro para praticantes de magia de diferentes linhagens.'
 ]},
 {id:'blackwood-pack',name:'Blackwood Pack',icon:'♜',iconImage:'../assets/clan-symbols/blackwood-pack.webp',className:'Shapeshifters / Lobisomens',foundation:'Século XIX',territory:'Florestas, cabanas e comunidades de trailers nos arredores de Sunnyvale',lead:'A floresta pertence àqueles que sabem sobreviver nela.',desc:[
 'A Blackwood Pack é uma das alcateias de lobisomens mais antigas de Sunnyvale, estabelecida nas regiões florestais que cercam a cidade desde o século XIX. Seus integrantes vivem em comunidades afastadas do centro urbano, ocupando cabanas, trailers residenciais e pequenas propriedades distribuídas pelas estradas secundárias da reserva ambiental. Embora alguns mantenham empregos e frequentem os estabelecimentos da cidade, a maioria prefere viver longe da população humana.',
 'A alcateia é formada por famílias que compartilham a condição da licantropia e por indivíduos transformados que encontraram proteção entre seus membros. Organizados sob a liderança de um alfa, os Blackwood mantêm regras próprias de convivência, protegendo seu território e auxiliando os recém-transformados a compreender e controlar seus instintos.',
 'Em Sunnyvale, a Blackwood Pack é conhecida por sua resistência à presença de vampiros e outras criaturas sobrenaturais em seu território. Para os moradores comuns, entretanto, os Blackwood são apenas uma comunidade reservada de famílias que vivem nos arredores e não gostam de receber visitantes.'
 ]}

];
const $=id=>document.getElementById(id);
const list=$('clans-icons'),symbol=$('clan-hero-symbol'),content=$('clan-hero-content'),input=$('clans-search-input'),empty=$('clans-empty');
let selected=0,visible=clans.map((_,i)=>i);
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function iconHTML(c){return c.iconImage?`<img src="${escapeHtml(c.iconImage)}" alt="Símbolo de ${escapeHtml(c.name)}">`:escapeHtml(c.icon||'✦');}
function renderIcons(){
 const q=input.value.trim().toLocaleLowerCase('pt-BR');
 visible=clans.map((c,i)=>({...c,i})).filter(c=>[c.name,c.className,c.territory,c.lead,...c.desc].join(' ').toLocaleLowerCase('pt-BR').includes(q)).map(c=>c.i);
 if(visible.length&&!visible.includes(selected))selected=visible[0];
 list.innerHTML=visible.map(i=>{const c=clans[i];return `<button class="clan-select" type="button" aria-pressed="${i===selected}" data-i="${i}" aria-label="Ver clã ${escapeHtml(c.name)}"><span class="clan-symbol">${iconHTML(c)}</span><span>${escapeHtml(c.name)}</span></button>`}).join('');
 empty.hidden=!!visible.length;
 list.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>selectClan(Number(b.dataset.i))));
 if(visible.length)renderDetail();else{symbol.innerHTML='';content.innerHTML='';}
}
function selectClan(i){selected=i;renderIcons();}
function renderDetail(){const c=clans[selected];symbol.innerHTML=iconHTML(c);
 const paras=c.desc.map(p=>`<p>${escapeHtml(p)}</p>`);
 const first=paras[0]||''; const second=paras[1]||''; const third=paras.slice(2).join('');
 content.innerHTML=`<div class="clan-record-heading"><span>HELLMOUTH / CLAN RECORD ${String(selected+1).padStart(2,'0')}</span><h2>${escapeHtml(c.name)}</h2></div>
 <div class="clan-editorial-grid">
  <div class="editorial-impact"><p class="editorial-quote">“${escapeHtml(c.lead)}”</p><div class="editorial-facts"><span>${escapeHtml(c.className)}</span><span>${escapeHtml(c.foundation)}</span><span>${escapeHtml(c.territory)}</span></div></div>
  <div class="editorial-body">${first}${second}</div>
  <div class="editorial-body">${third}</div>
 </div><div class="clan-folio">${String(selected+1).padStart(2,'0')}</div>`;
}
function cycle(direction){if(!visible.length)return;const pos=visible.indexOf(selected);selectClan(visible[(pos+direction+visible.length)%visible.length]);}
$('clans-prev').addEventListener('click',()=>cycle(-1));$('clans-next').addEventListener('click',()=>cycle(1));
input.addEventListener('input',renderIcons);$('clans-clear').addEventListener('click',()=>{input.value='';renderIcons();input.focus()});
renderIcons();
