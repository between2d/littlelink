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
    description: 'CRTs, keyboards and aging hardware are staged against tropical coastline, salt air and sunlight—part personal mythology, part Massa Demais visual world.',
    url: 'https://www.instagram.com/p/DWhpMFrF4ZY/', action: 'View project',
    sprite: '50% 0%', tools: 'AI image-making · obsolete media · art direction'
  },
  {
    id: 'hybrid-gems', category: 'visual', year: 'Ongoing',
    title: 'Hybrid Gem Creatures', eyebrow: 'Generative image series',
    description: 'Surreal organisms combine mineral texture, flesh, luxury and mutation, using surface and lighting as the primary narrative.',
    url: 'https://drive.google.com/file/d/1c_vKSJwLx5RxAryWyR0kNdFEZsi3MKrV/view?usp=sharing', action: 'Open AI portfolio',
    sprite: '75% 0%', tools: 'Generative AI · texture · lighting direction'
  },
  {
    id: 'synthetic-identity', category: 'visual', year: 'Ongoing',
    title: 'Synthetic Identity Experiments', eyebrow: 'Realtime AI / deepfake study',
    description: 'Live Stable Diffusion, TouchDesigner and DeepFaceLive tests treat face transformation as performance, distortion and local media language.',
    url: 'https://www.instagram.com/p/DR4k5D3jmnb/', action: 'View project',
    sprite: '100% 0%', tools: 'Stable Diffusion · TouchDesigner · DeepFaceLive'
  },
  {
    id: 'glitch-surveillance', category: 'visual', year: '2026',
    title: 'Glitch Surveillance in João Pessoa', eyebrow: 'Computer vision / urban image',
    description: 'City footage is processed through tracking, bounding boxes and signal noise, turning public space into a system that sees, misreads and forgets.',
    url: 'https://www.instagram.com/p/DUnuY0-jg89/', action: 'View project',
    sprite: '0% 25%', tools: 'Computer vision · tracking · TouchDesigner · glitch'
  },

  {
    id: 'energisa-23', category: 'video', year: '2026',
    title: 'Centro Cultural Energisa — 23 anos', eyebrow: 'Archive / editing / motion',
    description: 'Thousands of historical photographs were organized, curated and transformed into a coherent series of anniversary videos spanning 23 years of cultural activity.',
    url: 'https://youtu.be/ki8LLWCQsos', action: 'Watch project',
    sprite: '100% 75%', tools: 'Premiere · After Effects · archive curation · ExifTool'
  },
  {
    id: 'tvbet', category: 'video', year: '2025',
    title: 'TVBet', eyebrow: 'High-volume editing / live production',
    description: 'Daily short-form editing, graphics and technical live-show support in a fast sports-content operation producing roughly 12 videos per day.',
    url: 'https://www.youtube.com/watch?v=oTOEZ1YZdTY', action: 'Watch sample',
    sprite: '75% 75%', tools: 'Premiere · OBS · Streamlabs · remote production'
  },
  {
    id: 'cade-ze', category: 'video', year: 'Music video',
    title: 'Cadê Zé', eyebrow: 'Maga Bo feat. Rosângela Macedo',
    description: 'Music-video editing and visual effects built around rhythm, heat, texture and the energy of the performance.',
    url: 'https://www.youtube.com/watch?v=_rUUCNYITLQ', action: 'Watch video',
    sprite: '0% 100%', tools: 'Editing · post-production · visual effects'
  },
  {
    id: 'ovniska', category: 'video', year: 'Music video',
    title: 'OvniSka', eyebrow: 'Parahyba Ska Jazz Foundation',
    description: 'A graphic, rhythm-driven music video combining live performance with animated visual structure.',
    url: 'https://www.youtube.com/watch?v=Q42lMBTEHc0', action: 'Watch video',
    sprite: '25% 100%', tools: 'Direction · editing · animation'
  },
  {
    id: 'rieg-1200-clip', category: 'video', year: 'Music video',
    title: 'Rieg — 12:00', eyebrow: 'Official music video',
    description: 'A VHS-inflected visual extension of the 12:00 universe, shaped through editing, distortion and audiovisual direction.',
    url: 'https://www.youtube.com/watch?v=PKmDv6oMMKI', action: 'Watch video',
    sprite: '50% 100%', tools: 'Direction · production · editing · animation'
  },
  {
    id: 'orijah-cuba', category: 'video', year: 'Live video',
    title: 'Orijàh — Cuba feat. Bixarte', eyebrow: 'Batalha da Paz',
    description: 'Live-performance editing and post-production with attention to musical pacing, presence and atmosphere.',
    url: 'https://www.youtube.com/watch?v=Iyk268xWhvI', action: 'Watch video',
    image: youtubeThumb('Iyk268xWhvI'), tools: 'Editing · post-production · performance video'
  },

  {
    id: 'nomad-soul-zero', category: 'games', year: '2020',
    title: 'Nomad Soul Zero', eyebrow: 'Interactive album-game / Android',
    description: 'A cyberpunk point-and-click album-game expanding the 12:00 universe through music, narrative, pixel art and exploration.',
    url: 'https://play.google.com/store/apps/details?id=com.BarbaricRealms.NomadSoulZero', action: 'Play / download',
    sprite: '100% 50%', tools: 'Creative direction · soundtrack · writing · Unity'
  },
  {
    id: 'matapau', category: 'games', year: 'Game soundtrack',
    title: 'Mata Pau', eyebrow: 'Brazilian indie tower defense',
    description: 'An original soundtrack designed for strategic repetition, shifting between tension, calm and funky synth-pop without exhausting the player.',
    url: 'https://poligonal.itch.io/matapau', action: 'Play on itch.io',
    sprite: '0% 75%', tools: 'Composition · loops · gameplay music · collaboration'
  },
  {
    id: 'pippos-quest', category: 'games', year: '2016',
    title: 'Pippos Quest', eyebrow: 'Mobile advergame soundtrack',
    description: 'A fast-turnaround original score spanning forró, surf rock, cartoon adventure and tropical themes for a colorful mobile campaign game.',
    url: 'https://pippos.ticjoy.com.br/', action: 'Visit project',
    sprite: '25% 75%', tools: 'Composition · mobile game · commercial brief'
  },
  {
    id: 'no-do-diabo', category: 'games', year: 'Film score',
    title: 'O Nó do Diabo', eyebrow: 'Feature-film music collaboration',
    description: 'Musical collaboration for a Brazilian historical-horror feature, using atmosphere, repetition, tension and texture across multiple episodes and directors.',
    url: 'https://www.youtube.com/watch?v=EKMKTQhPrEA', action: 'Watch trailer',
    sprite: '50% 75%', tools: 'Film music · horror · Ableton · Pro Tools'
  },
  {
    id: '12-00-film', category: 'games', year: '2018',
    title: '12:00', eyebrow: 'Audiovisual feature film',
    description: 'Rieg’s visual-album feature: a long-form collision of music, VHS language, science fiction, performance and DIY worldbuilding.',
    url: 'https://www.youtube.com/watch?v=fYP4wZm39Jg', action: 'Watch full film',
    image: youtubeThumb('fYP4wZm39Jg'), tools: 'Film · visual album · music · direction'
  },

  {
    id: 'papopopcast', category: 'press', year: '2026',
    title: 'Riegulate e a poética do ruído', eyebrow: 'PapoPopCast interview',
    description: 'A conversation about image, sound, memory, noise and belonging across Riegulate’s multidisciplinary practice.',
    url: 'https://papopopcast.com.br/2026/02/03/riegulate-e-a-poetica-do-ruido-quando-imagem-som-e-memoria-se-tornam-territorio-de-pertencimento/', action: 'Read interview',
    sprite: '75% 100%', tools: 'Interview · visual art · music · memory'
  },
  {
    id: 'historia-do-disco', category: 'press', year: 'Radio / podcast',
    title: 'História do Disco: 12:00', eyebrow: 'Parahyba FM 103.9',
    description: 'Rieg Band discusses the history, construction and audiovisual universe of the album and film 12:00.',
    url: 'https://open.spotify.com/episode/73MHPlkxuJMGgX0yLHVt3s?si=8TNbBU_JQXuz9cDGjyJetQ', action: 'Listen on Spotify',
    image: youtubeThumb('fYP4wZm39Jg'), tools: 'Radio · podcast · album history'
  },
];

export const portfolios = [
  { title: 'Visual Artist', detail: 'Video art, installation, performance, AI and real-time systems', url: 'https://drive.google.com/file/d/14XsKbv71z3YoZn-nuPbjUrxs63xgjXxh/view?usp=sharing', accent: '#69e7ff' },
  { title: 'VJ & Live Visuals', detail: 'Projection mapping, live systems and immersive performance', url: 'https://drive.google.com/file/d/1TD4DlXACjDzMc601BCbDKejYK4_B8Rvb/view?usp=sharing', accent: '#d5ff3f' },
  { title: 'AI Creative', detail: 'Generative image, video, identity studies and visual worldbuilding', url: 'https://drive.google.com/file/d/1c_vKSJwLx5RxAryWyR0kNdFEZsi3MKrV/view?usp=sharing', accent: '#b6a5ff' },
  { title: 'Video Editor & Motion', detail: 'Editing, motion graphics, livestreams and audiovisual production', url: 'https://drive.google.com/file/d/1iPXlwX_LYH-QblDmJlp5KUKHtNQRq4gx/view?usp=sharing', accent: '#ff5bbd' },
  { title: 'Sound & Game Design', detail: 'Composition, sound design, game audio and fictional worlds', url: 'https://drive.google.com/file/d/1ygLUlsRe76gXGKy21lnQfsXhmewQc6FE/view?usp=sharing', accent: '#ff9a4d' },
];

export const timeline = [
  { year: '2005', title: 'João Pessoa', text: 'Begins building a long-term artistic practice in Brazil across music, video and local cultural scenes.' },
  { year: '2018', title: '12:00', text: 'Rieg releases the audiovisual feature/visual album that becomes the foundation for later fictional projects.' },
  { year: '2020', title: 'Jupiter + Nomad Soul Zero', text: 'A solo electronic album and a playable cyberpunk expansion of the Rieg universe arrive in the same creative period.' },
  { year: '2021–22', title: 'Rainbow Glasses + NOW', text: 'The solo discography expands through remixes, singles and increasingly self-directed visual production.' },
  { year: '2023–24', title: 'Gallery, AI and live systems', text: 'NaturIA, Geomorfia, Øxi Lab, Imagineland and other projects deepen the intersection of territory, memory and technology.' },
  { year: '2024', title: 'Whatever, Together', text: 'A new solo release condenses pop, synths, home production and visual identity into a compact statement.' },
  { year: '2025', title: 'Live visuals in cultural spaces', text: 'VJ and mapping work continues through Panela do Jazz, Cineteatro São José and other regional events.' },
  { year: '2026', title: 'Massa Demais + new commissions', text: 'The practice expands into an independent T-shirt store, major audiovisual archive work and new virtual-art projects.' },
];
