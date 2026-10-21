/* HELLMOUTH / AMBIENTAÇÃO — EDITE AQUI
Adicione ambientes copiando um objeto do array places.
image aceita endereço de PNG, JPG, WEBP ou SVG, local ou externo.
name: nome | category: categoria | lead: frase em destaque
 description: lista de parágrafos da descrição.
*/
const places = [
  {
    "name": "Sunnyvale",
    "category": "CIDADE / CENTRO URBANO",
    "image": "../assets/ambientacao/sunnyvale.webp",
    "lead": "Entre ruas sombreadas, quase tudo parece normal.",
    "description": [
      "Fundada no fim do século XIX, Sunnyvale mantém a aparência de uma pequena cidade tradicional. Casas antigas, bairros arborizados e comerciantes conhecidos por todos dão à região uma sensação de familiaridade.",
      "A tranquilidade, no entanto, é apenas uma parte de sua história. À medida que a noite cai, o cotidiano se aproxima de acontecimentos que seus habitantes aprenderam a não discutir."
    ]
  },
  {
    "name": "Ruas de Sunnyvale",
    "category": "CIDADE / RUAS E COMÉRCIO",
    "image": "../assets/ambientacao/ruas-sunnyvale.webp",
    "lead": "O centro comercial e as ruas tradicionais de Sunnyvale.",
    "description": [
      "As ruas centrais de Sunnyvale reúnem lojas antigas, fachadas de tijolos, estabelecimentos familiares e calçadas arborizadas. A arquitetura conserva traços da Louisiana e da história local.",
      "Descrição provisória — este texto será substituído quando forem enviadas as descrições definitivas dos ambientes."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
    ],
    "name": "Sunnyvale High",
    "category": "INSTITUIÇÃO / ESCOLA",
    "image": "../assets/ambientacao/sunnyvale-high.webp"
  },
  {
    "name": "Departamento Policial",
    "category": "INSTITUIÇÃO / SEGURANÇA",
    "image": "../assets/ambientacao/departamento-policial.webp",
    "lead": "Na cidade, algumas ocorrências parecem desaparecer dos arquivos.",
    "description": [
      "O departamento reúne os agentes responsáveis pela segurança pública de Sunnyvale. Suas salas, arquivos e corredores concentram relatos de acontecimentos que nem sempre encontram explicação convincente.",
      "Enquanto parte da equipe insiste em interpretações convencionais, antigos registros sugerem que alguns padrões se repetem há décadas."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
    ],
    "name": "Distrito Comercial",
    "category": "CIDADE / COMÉRCIO",
    "image": "../assets/ambientacao/distrito-comercial.webp"
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
    ],
    "name": "Residencial Tree Hills",
    "category": "CIDADE / RESIDENCIAL",
    "image": "../assets/ambientacao/residencial-tree-hills.webp"
  },
  {
    "name": "Reserva Ambiental",
    "category": "NATUREZA / RESERVA",
    "image": "../assets/ambientacao/reserva-ambiental.webp",
    "lead": "Um refúgio verde onde nem todas as trilhas levam de volta.",
    "description": [
      "A reserva reúne bosques densos, caminhos antigos e trechos de mata preservada. É frequentada por caminhantes durante o dia, mas a circulação costuma diminuir antes do anoitecer.",
      "Entre árvores altas e clareiras pouco conhecidas, rumores sobre desaparecimentos e ruídos inexplicáveis alimentam a reputação do lugar."
    ]
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
    ],
    "name": "Moonlight Diner",
    "category": "ESTABELECIMENTO / RESTAURANTE",
    "image": "../assets/ambientacao/moonlight-diner.webp"
  },
  {
    "name": "Docks Night Club",
    "category": "ESTABELECIMENTO / VIDA NOTURNA",
    "image": "../assets/ambientacao/docks-night-club.webp",
    "lead": "Quando a música aumenta, a cidade revela outra face.",
    "description": [
      "O Docks é um dos principais pontos da vida noturna local, conhecido por festas, música e encontros que avançam até a madrugada.",
      "Seu movimento intenso contrasta com áreas silenciosas ao redor, fazendo do clube um cenário natural para celebrações, confrontos e alianças inesperadas."
    ]
  },
  {
    "name": "Red Room Bar",
    "category": "ESTABELECIMENTO / BAR",
    "image": "../assets/ambientacao/red-room-bar.webp",
    "lead": "Um ponto de encontro para conversas que não cabem na luz do dia.",
    "description": [
      "Com iluminação baixa e mesas discretas, o Red Room é conhecido por atrair frequentadores muito diferentes entre si. Alguns procuram música e companhia; outros preferem preservar o anonimato.",
      "O local costuma servir como território neutro para encontros tensos, negócios reservados e rumores que atravessam diferentes grupos da cidade."
    ]
  },
  {
    "name": "Academia de Artes Manor Hall",
    "category": "INSTITUIÇÃO / EDUCAÇÃO",
    "image": "../assets/ambientacao/manor-hall.webp",
    "lead": "Uma academia de artes que guarda segredos além do palco.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
    ]
  },
  {
    "name": "Sunnyvale Memorial Garden",
    "category": "LOCAL HISTÓRICO / CEMITÉRIO",
    "image": "../assets/ambientacao/sunnyvale-memorial-garden.webp",
    "lead": "Histórias antigas permanecem entre os mausoléus e jardins.",
    "description": [
      "Descrição pendente: conteúdo definitivo será inserido depois."
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
 $('place-modal-lead').textContent=p.lead;
 $('place-modal-description').innerHTML=p.description.map(t=>'<p>'+esc(t)+'</p>').join('');
 modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('place-open');
 modal.scrollTop=0;$('place-modal-close').focus();
}
function hide(){modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('place-open');opener?.focus();}
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
