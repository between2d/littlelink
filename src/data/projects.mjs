export const filters = [
  { id: 'all', label: 'All' },
  { id: 'music', label: 'Music' },
  { id: 'visual', label: 'Visual Arts & VJ' },
  { id: 'video', label: 'Video & Motion' },
  { id: 'games', label: 'Games & Sound' },
  { id: 'press', label: 'Interviews' },
];

const youtubeThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const projects = [
  {
    id: 'whatever-together', category: 'music', year: '2024',
    title: 'Whatever, Together', eyebrow: 'Latest solo album',
    description: 'A compact solo release connecting psychedelic synth-pop, home production, visual identity and Riegulate’s ongoing interest in memory, pop culture and electronic texture.',
    url: 'https://www.youtube.com/watch?v=Vv8aYT8Gkso', action: 'Listen / watch',
    image: youtubeThumb('Vv8aYT8Gkso'), tools: 'Music · production · visual album'
  },
  {
    id: 'jupiter', category: 'music', year: '2020',
    title: 'Jupiter', eyebrow: 'Solo album',
    description: 'A synth-driven solo album imagined as a trip through space, loneliness, pop hooks and electronic atmosphere.',
    url: 'https://www.youtube.com/watch?v=YP3WHoyWN2o', action: 'Listen / watch',
    image: youtubeThumb('YP3WHoyWN2o'), tools: 'Synth-pop · electronic · audiovisual'
  },
  {
    id: 'rainbow-glasses', category: 'music', year: '2021',
    title: 'Rainbow Glasses', eyebrow: 'Remixes of Jupiter',
    description: 'A companion album that reinterprets Jupiter through remixes, new rhythmic perspectives and a more fragmented journey through cyberspace.',
    url: 'https://www.youtube.com/watch?v=X9oN7bHD8LA', action: 'Listen / watch',
    image: youtubeThumb('X9oN7bHD8LA'), tools: 'Remix album · electronic music'
  },
  {
    id: 'now', category: 'music', year: '2022',
    title: 'NOW', eyebrow: 'Single',
    description: 'An original Riegulate single built around immediacy, repetition, synth texture and an audiovisual presentation.',
    url: 'https://www.youtube.com/watch?v=GUMExO06gEw', action: 'Listen / watch',
    image: youtubeThumb('GUMExO06gEw'), tools: 'Single · production · video'
  },
  {
    id: 'caribbean-queen', category: 'music', year: 'Cover',
    title: 'Caribbean Queen', eyebrow: 'Billy Ocean cover',
    description: 'A personal home-produced reinterpretation of the 1980s pop classic, filtered through Riegulate’s synth-heavy sensibility.',
    url: 'https://www.youtube.com/watch?v=8Y9yg8a-78g', action: 'Listen / watch',
    image: youtubeThumb('8Y9yg8a-78g'), tools: 'Cover · arrangement · production'
  },
  {
    id: '80s-covers', category: 'music', year: 'Home sessions',
    title: '80s Covers', eyebrow: 'Cover album',
    description: 'A collection of 1980s songs recorded at home, combining affectionate reinterpretation, DIY production and a strong personal taste for the decade.',
    url: 'https://www.youtube.com/watch?v=m-oUKIsm9PQ', action: 'Listen / watch',
    image: youtubeThumb('m-oUKIsm9PQ'), tools: 'Cover album · home recording'
  },

  {
    id: 'rastro-de-sinal', category: 'visual', year: '2026',
    title: 'Rastro de Sinal', eyebrow: 'Video installation / CRT',
    description: 'A walk through João Pessoa becomes a field of machine vision, unstable tracking and failed recognition. Contemporary computer vision is displayed through an obsolete CRT body.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '25% 25%', tools: 'TouchDesigner · computer vision · Raspberry Pi · CRT'
  },
  {
    id: 'dados-tem-poder', category: 'visual', year: '2024',
    title: 'Dados Têm Poder', eyebrow: 'Realtime video art',
    description: 'A real-time visual investigation of data as an invisible structure that captures, fragments and translates bodies into technical signals.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '50% 25%', tools: 'TouchDesigner · realtime image · surveillance aesthetics'
  },
  {
    id: 'futuro-ancestral', category: 'visual', year: '2024',
    title: 'Futuro Ancestral', eyebrow: 'Video art / sound art',
    description: 'Obsolete technological sounds, CRT static and generative patterns operate as an archive of vanished machines and electronic memory.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '75% 25%', tools: 'TouchDesigner · sound design · CRT · feedback'
  },
  {
    id: 'geomorfia', category: 'visual', year: '2023',
    title: 'Geomorfia da Imaginação', eyebrow: 'Installation / projection',
    description: 'Projection and translucent CMYK surfaces translate the geological patterns of Paraíba’s cliffs into layered physical and algorithmic images.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '100% 25%', tools: 'Videomapping · translucent PVC · generative image'
  },
  {
    id: 'naturia', category: 'visual', year: '2023',
    title: 'NaturIA', eyebrow: 'AI video art / nature',
    description: 'Field recordings from a residency in Conde, Paraíba drive speculative natural imagery produced with generative AI and TouchDesigner.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '0% 50%', tools: 'Stable Diffusion · TouchDesigner · field recording'
  },
  {
    id: 'maos-invisiveis', category: 'visual', year: '2024',
    title: 'Mãos Invisíveis', eyebrow: 'Dance / motion study',
    description: 'Contemporary dance footage is reworked through motion data and vectors that seem to pull, restrain and displace the body.',
    url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', action: 'Open art portfolio',
    sprite: '25% 50%', tools: 'Dance · motion analysis · video processing'
  },
  {
    id: 'jardins-fragmentados', category: 'visual', year: 'Video work',
    title: 'Jardins Fragmentados', eyebrow: 'Audiovisual work',
    description: 'A saturated and unstable garden of body, color and compression where organic movement slips into synthetic image.',
    url: 'https://youtu.be/cYnLtgwx-Z0', action: 'Watch work',
    sprite: '50% 50%', tools: 'Video art · generative image · editing'
  },
  {
    id: 'oxi-lab', category: 'visual', year: '2024',
    title: 'Øxi Lab', eyebrow: 'Immersive audiovisual experience',
    description: 'A Northeastern Brazilian art-and-technology collective combining videomapping, AI, dance, interactive installations and live music.',
    url: 'https://www.instagram.com/oxi_lab_/', action: 'View collective',
    sprite: '75% 50%', tools: 'Live visuals · mapping · installation · collaboration'
  },
  {
    id: 'liminal-clones', category: 'visual', year: 'Ongoing',
    title: 'Liminal Clones & Brasilcore', eyebrow: 'AI image series / video study',
    description: 'Clone imagery, interpolated motion and nostalgic Brazilian interiors create an uncanny study of repetition, memory and identity.',
    url: 'https://www.instagram.com/p/DVBOwgMjq-l/', action: 'View project',
    sprite: '25% 0%', tools: 'Generative AI · interpolation · creative direction'
  },
  {
    id: 'retro-tech', category: 'visual', year: 'Ongoing',
    title: 'Retro Tech at the Shoreline', eyebrow: 'Editorial worldbuilding',
    descripti���q�^