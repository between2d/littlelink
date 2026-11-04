// Estudos de caso com créditos, proveniência e distinção entre arquivo e registros do evento.
// Vídeos externos preservam sua origem; imagens selecionadas foram trazidas do Drive.
export const caseStudies = {
  'viva-usina-2026': {
    heading: 'Show autoral na Usina Cultural Energisa',
    intro: 'Em 31 de outubro de 2026, a formação original da RIEG, Rieg Rodig (voz, samplers e sintetizadores), Daniel Jesi (baixo) e Nildo Gonzalez (bateria), voltou ao palco após nove anos. O show no Palco Bonde revisitou o álbum e filme 12:00.',
    date: '31 de outubro de 2026',
    place: 'Usina Cultural Energisa · João Pessoa, PB',
    involvement: 'Rieg Rodig: voz, samplers e sintetizadores · Daniel Jesi: baixo · Nildo Gonzalez: bateria',
    challenge: 'Transportar o repertório e a identidade do projeto musical para uma apresentação ao vivo dentro da programação do evento.',
    execution: [
      'Preparação da apresentação e do material de divulgação do show.',
      'Performance musical no palco do Viva Usina.',
      'Produção de peças de comunicação em vídeo para convidar o público.',
    ],
    outcomes: [
      'Apresentação realizada em 31/10/2026.',
      'Vídeos curtos e vídeo-convite produzidos para a divulgação.',
    ],
    gallery: [
      {
        file: 'assets/work/rieg-promo-2026.jpg',
        alt: 'Rieg Rodig com instrumentos eletrônicos e televisores, fotografia de divulgação de 2026.',
        caption: 'Retrato de divulgação de 2026, anterior à apresentação de 31 de outubro. Não é foto do show.',
      },
      {
        file: 'assets/work/rieg-live-archive.jpg',
        alt: 'RIEG em palco com instrumentos e projeção roxa ao fundo, foto de arquivo.',
        caption: 'A RIEG no palco, fotografia de arquivo anterior a 2026. Crédito indicado na imagem: Rafael Paiva.',
      },
    ],
    video: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/fYP4wZm39Jg',
      title: 'RIEG 12:00 — filme/álbum visual de 2018',
      caption: 'Filme 12:00 (2018), obra revisitada ao vivo no Viva Usina 2026. Este vídeo não documenta o show de outubro.',
    },
    publicLinks: [
      { label: 'Filme 12:00 no YouTube', url: 'https://www.youtube.com/watch?v=fYP4wZm39Jg' },
    ],
  },
  'campanha-nabor-2026': {
    heading: 'Pós-produção de áudio para comunicação política',
    intro: 'Trabalho de pós-produção sonora para peças audiovisuais da campanha de Nabor Wanderley na Paraíba, desenvolvido entre agosto e setembro de 2026.',
    date: 'Agosto a setembro de 2026',
    place: 'Paraíba · Trabalho de estúdio',
    involvement: 'Edição, restauração, tratamento e finalização sonora',
    challenge: 'Manter inteligibilidade de voz, consistência de níveis e entrega técnica em diferentes peças de comunicação audiovisual.',
    execution: [
      'Edição de diálogos, limpeza de ruídos e tratamento de voz quando necessário.',
      'Equalização, controle dinâmico, mixagem e finalização de peças.',
      'Trabalho com fluxo de áudio digital profissional em 48 kHz e checagem de níveis.',
    ],
    outcomes: [
      'Pós-produção sonora de materiais de campanha.',
      'Amostras de peças e créditos adicionais disponíveis sob consulta, conforme permissões de divulgação.',
    ],
    video: {
      embedUrl: 'https://drive.google.com/file/d/1vm9psE9ORv1KUVWpRWr7JX4pJB_8ffU6/preview',
      title: 'Filme Busca — corte de trabalho da campanha (agosto de 2026)',
      caption: 'Corte audiovisual de trabalho disponibilizado no Drive. Atuação no projeto: pós-produção de áudio. As imagens, a montagem e a direção não são creditadas aqui como autoria de Rieg Rodig.',
    },
    publicLinks: [
      { label: 'Abrir corte de trabalho no Google Drive', url: 'https://drive.google.com/file/d/1vm9psE9ORv1KUVWpRWr7JX4pJB_8ffU6/view' },
    ],
  },
  'nomad-soul-pc': {
    heading: 'Nomad Soul Zero: um jogo musical da banda RIEG',
    intro: 'Nomad Soul Zero nasceu como um jogo narrativo cyberpunk ligado ao universo musical da RIEG. Lançado para Android em 2022, ganhou uma página pública no itch.io com versão web em novembro de 2026. A programação original foi desenvolvida por colaboradores; o trabalho de adaptação para sistemas desktop continua em andamento.',
    date: '2022 · lançamento Android / novembro de 2026 · itch.io',
    place: 'João Pessoa, PB · distribuição digital',
    involvement: 'Rieg Rodig: concepção, direção criativa, música da RIEG e coordenação artística',
    challenge: 'Levar a narrativa, o visual e a trilha de um álbum-game point-and-click além do lançamento inicial para Android, preservando o trabalho coletivo e a experiência do jogador.',
    execution: [
      'Concepção e direção criativa do universo musical e narrativo da RIEG.',
      'Desenvolvimento original em colaboração com equipe de programação, arte, roteiro e áudio.',
      'Publicação da versão web no itch.io em 2026 e continuidade do trabalho de portabilidade para desktop.',
    ],
    outcomes: [
      'Jogo original lançado no Android em 2022.',
      'Página pública no itch.io com versão web em novembro de 2026.',
      'Versões nativas para Windows, Linux e macOS ainda em desenvolvimento, sem anunciar lançamento antecipado.',
    ],
    publicLinks: [
      { label: 'Jogar Nomad Soul Zero no itch.io', url: 'https://omgwtf.itch.io/nomad-soul-zero' },
      { label: 'Versão Android no Google Play', url: 'https://play.google.com/store/apps/details?id=com.BarbaricRealms.NomadSoulZero' },
    ],
  },
  'presenca-instavel': {
    heading: 'Uma obra participativa construída com rostos e fragmentos digitais',
    intro: 'Projeto selecionado para o Metamuseu 2026. A obra trabalha com captura de rosto, fragmentos fotográficos e interação corporal em um ambiente tridimensional navegável. A implementação está em andamento.',
    date: '2026 · desenvolvimento em andamento',
    place: 'Metamuseu · Arte digital',
    involvement: 'Concepção artística, direção de experiência e desenvolvimento',
    challenge: 'Construir um percurso de participação com captura consentida de imagem, manipulação em tempo real e exploração espacial, mantendo a experiência estável e acessível.',
    execution: [
      'Desenho do fluxo de consentimento, captura, revisão e envio dos fragmentos.',
      'Protótipos de reconhecimento facial e interação gestual com MediaPipe e p5.js.',
      'Construção e integração de ambiente 3D, materiais interativos e navegação em Three.js.',
      'Testes e estabilização das interações, da moderação e do fluxo de participação.',
    ],
    outcomes: [
      'Projeto selecionado para o Metamuseu 2026.',
      'Protótipos e sistemas em desenvolvimento. A instalação final não é apresentada como concluída.',
    ],
    gallery: [
      {
        file: 'assets/work/presenca-prototype-2026.png',
        alt: 'Interface do protótipo Presença Instável em tela de captura e revisão de fragmento.',
        caption: 'Captura real do protótipo em 18 de agosto de 2026. A etapa de revisão aparece em testes; não é documentação da versão final.',
      },
    ],
    publicLinks: [
      { label: 'Repositório do projeto', url: 'https://github.com/between2d/presenca-instavel' },
    ],
  },
};

export const featuredIds = ['presenca-instavel', 'viva-usina-2026', 'campanha-nabor-2026'];
