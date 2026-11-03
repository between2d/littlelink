// Estudos de caso com conteúdo verificável. Nenhuma imagem, cliente ou resultado
// é inventado: fotos e vídeos serão adicionados quando publicados/autorizados.
export const caseStudies = {
  'viva-usina-2026': {
    heading: 'Show autoral na Usina Cultural Energisa',
    intro: 'Em 31 de outubro de 2026, a RIEG integrou a programação do Viva Usina, em João Pessoa. Uma apresentação musical de repertório autoral, com sua dimensão performática e audiovisual.',
    date: '31 de outubro de 2026',
    place: 'Usina Cultural Energisa · João Pessoa, PB',
    involvement: 'Música autoral e performance ao vivo',
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
    publicLinks: [],
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
    publicLinks: [],
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
    publicLinks: [
      { label: 'Repositório do projeto', url: 'https://github.com/between2d/presenca-instavel' },
    ],
  },
};

export const featuredIds = ['presenca-instavel', 'viva-usina-2026', 'campanha-nabor-2026'];
