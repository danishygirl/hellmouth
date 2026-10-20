/* HELLMOUTH — CLÃS / TODOS OS DADOS EDITÁVEIS
  Para adicionar clãs, duplique um objeto abaixo. icon pode ser caractere;
  iconImage aceita URL de PNG/SVG transparente (deixe '' se usar icon).
  Os clãs são exemplos narrativos, altere livremente nomes, textos e símbolos.
*/
const clans=[
 {id:'sangue-antigo',name:'Sangue Antigo',icon:'♜',iconImage:'',className:'Vampiros',foundation:'Século XIX',territory:'Centro histórico',lead:'Uma linhagem que prefere o silêncio à exposição.',desc:[
 'O Sangue Antigo reúne famílias vampíricas que chegaram a Sunnyvale muito antes de a cidade ganhar seu nome. Seus membros mantêm relações estreitas com estabelecimentos históricos, propriedades isoladas e autoridades locais. A discrição é parte essencial de seu código.',
 'Para o clã, tradição e estabilidade valem mais do que força bruta. Conflitos são resolvidos por acordos, favores e promessas transmitidos entre gerações. Quebrar um pacto pode ser pior do que desobedecer a um líder.',
 'Embora algumas famílias tenham se integrado à sociedade humana, outras recusam qualquer mudança. Essas diferenças alimentam disputas internas e explicam por que alianças antigas podem ruir quando um segredo vem à tona.'
 ]},
 {id:'circulo-da-lua',name:'Círculo da Lua',icon:'☽',iconImage:'',className:'Bruxas',foundation:'1888',territory:'Bosques do leste',lead:'Conhecimento, ritual e silêncio sob o luar.',desc:[
 'O Círculo da Lua é uma associação de praticantes que preserva manuscritos, símbolos e rituais anteriores à fundação da cidade. A entrada costuma depender de confiança, linhagem ou demonstração de compromisso com os pactos do grupo.',
 'Reuniões acontecem em casas antigas, jardins e áreas remotas da reserva ambiental. Seus integrantes raramente revelam suas intenções por completo, especialmente diante de quem desconhece o custo da magia.',
 'O círculo pode oferecer proteção e respostas, mas cobra responsabilidade. Usar encantamentos para interferir no destino alheio frequentemente transforma uma solução temporária em um problema duradouro.'
 ]},
 {id:'alcateia-do-norte',name:'Alcateia do Norte',icon:'⌁',iconImage:'',className:'Shapeshifters',foundation:'Origem desconhecida',territory:'Reserva de Sunnyvale',lead:'Território, instinto e uma lealdade difícil de romper.',desc:[
 'A Alcateia do Norte vive próxima às rotas mais antigas da floresta. Seus membros mantêm uma rede de vigilância informal, protegendo acessos, trilhas e refúgios que a maioria dos moradores sequer conhece.',
 'A autoridade é negociada entre experiência e respeito. A convivência com a cidade exige disciplina, sobretudo quando disputas territoriais ameaçam revelar a verdadeira natureza de seus integrantes.',
 'O vínculo com a mata inspira rituais e tradições próprias. Nem toda transformação é celebrada: para alguns, mudar de forma também significa perder o controle de uma parte essencial de si.'
 ]},
 {id:'vigilia',name:'A Vigília',icon:'✣',iconImage:'',className:'Humanos',foundation:'1957',territory:'Toda a cidade',lead:'Observar primeiro. Intervir apenas quando necessário.',desc:[
 'A Vigília é uma rede informal de habitantes que se recusa a ignorar os acontecimentos sobrenaturais de Sunnyvale. Seus arquivos incluem relatos, mapas, fotografias e registros desaparecidos dos departamentos públicos.',
 'Seus integrantes não possuem poderes, mas contam com contatos, recursos e disposição para investigar. Muitos carregam histórias pessoais que explicam sua desconfiança diante do inexplicável.',
 'O maior conflito do grupo está em decidir quando uma criatura representa perigo real. Nem todos concordam que combater o sobrenatural seja o mesmo que proteger a população.'
 ]},
 {id:'filhos-do-veu',name:'Filhos do Véu',icon:'◇',iconImage:'',className:'Independentes',foundation:'Registro incompleto',territory:'Locais abandonados',lead:'O que desaparece da vista nem sempre deixa de existir.',desc:[
 'Os Filhos do Véu são citados em testemunhos contraditórios sobre desaparecimentos e encontros incomuns. Não há consenso sobre a origem do grupo, seus objetivos ou a identidade de seus integrantes.',
 'Algumas versões descrevem uma sociedade iniciática; outras falam em pessoas que aprenderam a atravessar limites perigosos entre mundos. Não existem registros públicos suficientes para confirmar qualquer uma delas.',
 'Suas aparições costumam anteceder mudanças profundas na cidade. Talvez sejam mensageiros, talvez apenas espectadores. Poucos tiveram oportunidade de perguntar.'
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
