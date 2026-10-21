/* HELLMOUTH — CADASTRO DE AMBIENTES (EDITÁVEL NO GITHUB)
   Para alterar: edite name, category, image, description e loreverseUrl abaixo.
   Para adicionar: COPIE um bloco completo entre { ... }, incluindo a vírgula que o separa do seguinte.
   Insira uma imagem WEBP em assets/ambientacao/ e informe aqui o caminho ../assets/ambientacao/arquivo.webp
   loreverseUrl deve ser uma URL completa começando com https://
   A ORDEM DOS BLOCOS É A ORDEM MOSTRADA NO SITE.
   Não precisa editar ambientacao.js para cadastrar ambientes.
*/
const places = [
  {
    "name": "Sunnyvale",
    "loreverseUrl": "https://loreverse.world/universos/hellmouth",
    "category": "CIDADE / CENTRO URBANO",
    "image": "../assets/ambientacao/sunnyvale.webp",
    "lead": "Entre ruas sombreadas, quase tudo parece normal.",
    "description": [
      "Uma rodovia de duas faixas corta uma densa floresta de pinheiros, palmeiras e carvalhos cobertos por musgo, sob um céu aberto e brilhante. À margem da estrada, uma antiga placa de madeira desgastada dá as boas-vindas à cidade. Postes de madeira conduzem a fiação elétrica em direção ao perímetro urbano, caracterizado por comércios locais, ruas residenciais com casas de madeira e o calor do sul da Louisiana. A cidade é fortemente iluminada pelo sol escaldante, que gera um calor denso e constante durante o dia. Essa claridade tropical confere ao lugar um aspecto pacato e tipicamente interiorano, enquanto a vegetação fechada e o mormaço criam uma barreira de isolamento em relação ao restante do mundo. Ao anoitecer, o calor abafado permanece, mas, durante o inverno, poças d’água refletem a luz nas estradas de barro que separam as casas mais isoladas da cidade."
    ]
  },
  {
    "name": "Ruas de Sunnyvale",
    "loreverseUrl": "https://loreverse.world/topicos/2054",
    "category": "CIDADE / RUAS E COMÉRCIO",
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
    "loreverseUrl": "https://loreverse.world/topicos/2057",
    "category": "INSTITUIÇÃO / ESCOLA",
    "image": "../assets/ambientacao/sunnyvale-high.webp"
  },
  {
    "name": "Departamento Policial",
    "loreverseUrl": "https://loreverse.world/topicos/2053",
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
    "loreverseUrl": "https://loreverse.world/topicos/2049",
    "category": "CIDADE / COMÉRCIO",
    "image": "../assets/ambientacao/distrito-comercial.webp"
  },
  {
    "lead": "Descrição a definir.",
    "description": [
      "Um bairro suburbano tipicamente americano, com casas de madeira de um ou dois andares, varandas frontais e cercas brancas baixas. À noite, a rua de asfalto escuro é fracamente iluminada por postes espaçados, deixando grandes vãos de escuridão entre as propriedades e as árvores frondosas. A quietude extrema e a falta de movimento nas calçadas geram uma falsa sensação de segurança, em que cada janela acesa parece observar quem passa pela rua."
    ],
    "name": "Residencial Tree Hills",
    "loreverseUrl": "https://loreverse.world/topicos/2047",
    "category": "CIDADE / RESIDENCIAL",
    "image": "../assets/ambientacao/residencial-tree-hills.webp"
  },
  {
    "name": "Reserva Ambiental",
    "loreverseUrl": "https://loreverse.world/topicos/2051",
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
    "loreverseUrl": "https://loreverse.world/topicos/2050",
    "category": "ESTABELECIMENTO / RESTAURANTE",
    "image": "../assets/ambientacao/moonlight-diner.webp"
  },
  {
    "name": "Docks Night Club",
    "loreverseUrl": "https://loreverse.world/topicos/2056",
    "category": "ESTABELECIMENTO / VIDA NOTURNA",
    "image": "../assets/ambientacao/docks-night-club.webp",
    "lead": "Quando a música aumenta, a cidade revela outra face.",
    "description": [
      "Um clube underground com paredes pretas totalmente cobertas por pôsteres de bandas, adesivos e pichações. No centro, uma pista de dança de concreto desgastado leva a um pequeno palco. À direita, balcões de madeira com banquetas de couro vermelho e metal cromado dividem o espaço. O lugar é famoso por receber shows ao vivo de bandas de garagem, atraindo multidões barulhentas e servindo como o reduto perfeito para os jovens da cidade se misturarem."
    ]
  },
  {
    "name": "Red Room Bar",
    "loreverseUrl": "https://loreverse.world/topicos/2052",
    "category": "ESTABELECIMENTO / BAR",
    "image": "../assets/ambientacao/red-room-bar.webp",
    "lead": "Um ponto de encontro para conversas que não cabem na luz do dia.",
    "description": [
      "Um salão gótico de proporções imensas, dominado por tons de vermelho-sangue e carmesim. O espaço é preenchido por grandes sofás curvos de veludo, tapetes ornamentais e mesas baixas. Ao fundo, acima de uma estrutura de colunas imponentes, ergue-se uma grande estátua de uma figura montada em um animal. À esquerda, um balcão extenso exibe prateleiras repletas de garrafas de vidro. A arquitetura clássica, com painéis de madeira escura e tetos altos com passarelas de metal, cria a atmosfera de uma área VIP de boate noturna no segundo andar. O local funciona oficialmente como o ambiente de reunião e corte da Camarilla, onde as leis da Máscara são discutidas e a hierarquia vampírica é rigidamente mantida em total segredo."
    ]
  },
  {
    "name": "Academia de Artes Manor Hall",
    "loreverseUrl": "https://loreverse.world/topicos/2055",
    "category": "INSTITUIÇÃO / EDUCAÇÃO",
    "image": "../assets/ambientacao/manor-hall.webp",
    "lead": "Uma academia de artes que guarda segredos além do palco.",
    "description": [
      "Um imponente casarão de arquitetura clássica da Louisiana, com fachadas de colunas brancas e grandes varandas externas protegidas por grades de ferro trabalhado. No andar térreo, destaca-se um salão neoclássico com colunas coríntias, tetos altos com molduras de gesso, pisos de madeira clara e grandes lustres de cristal. O espaço é decorado com sofás de época, uma lareira de mármore entalhada e paredes repletas de retratos antigos. No segundo andar, corredores longos de assoalho conectam os dormitórios, que contam com camas de ferro forjado, dosséis e janelas francesas de acesso à varanda."
    ]
  },
  {
    "name": "Sunnyvale Memorial Garden",
    "loreverseUrl": "https://loreverse.world/topicos/2048",
    "category": "LOCAL HISTÓRICO / CEMITÉRIO",
    "image": "../assets/ambientacao/sunnyvale-memorial-garden.webp",
    "lead": "Histórias antigas permanecem entre os mausoléus e jardins.",
    "description": [
      "Um cemitério antigo composto por fileiras irregulares de lápides de mármore cinzento, cruzes de pedra e mausoléus em estilo gótico. Caminhos de terra e folhas caídas separam os setores do gramado escuro. Poucos postes de luz coloniais estão distribuídos pelo terreno, emitindo uma iluminação pálida que alcança apenas as quadras principais e os troncos de árvores altas. A disposição espaçada das sepulturas e a arquitetura desgastada das capelas familiares dão ao local um aspecto de abandono e isolamento geográfico do restante da cidade."
    ]
  }
];
