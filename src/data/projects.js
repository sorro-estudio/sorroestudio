// Projetos do estúdio. Cada projeto gera uma página em /projetos/<slug>.
//
// Campos:
// - group:   'main' | 'other' | 'future'  (as seções da página de Projetos)
// - year:    ano de referência, aparece na listagem
// - type:    tipo de produção, ex.: 'Animação', 'Game', 'Animação + Game'
// - banner:  imagem larga, em public/assets/images/ (opcional)
// - layout:  'cyber' | 'arcane' | 'default' — o layout da página do projeto
// - theme:   as cores da página do projeto (cada projeto tem as suas)
// - color:   cor do card nas listagens (todos amarelos, por enquanto)
//
// Textos (title, summary, description) aceitam uma string ou { pt, en, es }.
// Sem tradução no idioma escolhido, o site mostra o português.
export const projects = [
  {
    slug: 'shikigami-project',
    title: 'Shikigami Project',
    group: 'main',
    year: '2026',
    type: { pt: 'Animação + Game', en: 'Animation + Game', es: 'Animación + Game' },
    status: { pt: 'Em breve', en: 'Coming soon', es: 'Próximamente' },
    banner: '/assets/images/shikigami-project-banner-web.webp',
    color: 'var(--yellow)',
    layout: 'cyber',
    theme: {
      bg: '#0b1410',
      surface: '#13211b',
      text: '#eafff3',
      muted: '#8fb3a2',
      accent: '#66ff99',
      accent2: '#99ff66',
    },
    summary: { pt: 'Descrição em breve.', en: 'Description coming soon.', es: 'Descripción próximamente.' },
    description: [{ pt: 'Descrição completa do projeto em breve.', en: 'Full project description coming soon.', es: 'Descripción completa del proyecto próximamente.' }],
  },
  {
    slug: 'witchcrafter',
    title: 'Witchcrafter',
    group: 'main',
    year: '2026',
    type: { pt: 'Animação', en: 'Animation', es: 'Animación' },
    status: { pt: 'Em breve', en: 'Coming soon', es: 'Próximamente' },
    banner: '/assets/images/witchcrafter-banner-web.webp',
    color: 'var(--yellow)',
    layout: 'arcane',
    theme: {
      bg: '#f4f0f7',
      surface: '#ffffff',
      text: '#1d1526',
      muted: '#6b5c7a',
      accent: '#a855f7',
      accent2: '#ff6699',
    },
    summary: { pt: 'Descrição em breve.', en: 'Description coming soon.', es: 'Descripción próximamente.' },
    description: [{ pt: 'Descrição completa do projeto em breve.', en: 'Full project description coming soon.', es: 'Descripción completa del proyecto próximamente.' }],
  },
  {
    slug: 'as-cronicas-de-aster',
    title: 'As Crônicas de Aster',
    group: 'other',
    year: '2026',
    type: { pt: 'Animação', en: 'Animation', es: 'Animación' },
    status: { pt: 'Em breve', en: 'Coming soon', es: 'Próximamente' },
    color: 'var(--yellow)',
    layout: 'default',
    theme: {
      bg: '#101624',
      surface: '#1a2235',
      text: '#eef3ff',
      muted: '#93a4c4',
      accent: '#6699ff',
      accent2: '#66ff99',
    },
    summary: { pt: 'Descrição em breve.', en: 'Description coming soon.', es: 'Descripción próximamente.' },
    description: [{ pt: 'Descrição completa do projeto em breve.', en: 'Full project description coming soon.', es: 'Descripción completa del proyecto próximamente.' }],
  },
  {
    slug: 'reitekina-houseki',
    title: 'Reitekina Houseki',
    group: 'other',
    year: '2026',
    type: { pt: 'Game', en: 'Game', es: 'Game' },
    status: { pt: 'Em breve', en: 'Coming soon', es: 'Próximamente' },
    color: 'var(--yellow)',
    layout: 'default',
    theme: {
      bg: '#1d1119',
      surface: '#2a1a26',
      text: '#fff0f6',
      muted: '#c49bb0',
      accent: '#ff6699',
      accent2: '#ffc444',
    },
    summary: { pt: 'Descrição em breve.', en: 'Description coming soon.', es: 'Descripción próximamente.' },
    description: [{ pt: 'Descrição completa do projeto em breve.', en: 'Full project description coming soon.', es: 'Descripción completa del proyecto próximamente.' }],
  },
]

export const GROUP_ORDER = ['main', 'other', 'future']

export const findProject = (slug) => projects.find((p) => p.slug === slug)

export const projectsByGroup = () =>
  GROUP_ORDER.map((group) => ({
    group,
    items: projects.filter((p) => (p.group || 'other') === group),
  })).filter((g) => g.items.length)
