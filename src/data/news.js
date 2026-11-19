// Novidades do estúdio: eventos, lançamentos, devlogs e vídeos.
// A lista é ordenada pela data automaticamente (mais recente primeiro).
//
// Campos:
// - date:     'AAAA-MM-DD'
// - category: 'lancamento' | 'evento' | 'devlog' | 'video'
// - title / text: string ou { pt, en, es }
// - to:       link interno, ex.: '/projetos/witchcrafter'
// - url:      link externo (YouTube, loja, itch.io...). Tem prioridade sobre "to".
export const news = [
  {
    id: 'shikigami-anuncio',
    date: '2026-11-19',
    category: 'lancamento',
    title: 'Shikigami Project',
    text: {
      pt: 'Novidades em breve.',
      en: 'News coming soon.',
      es: 'Novedades próximamente.',
    },
    to: '/projetos/shikigami-project',
  },
  {
    id: 'witchcrafter-anuncio',
    date: '2026-11-19',
    category: 'lancamento',
    title: 'Witchcrafter',
    text: {
      pt: 'Novidades em breve.',
      en: 'News coming soon.',
      es: 'Novedades próximamente.',
    },
    to: '/projetos/witchcrafter',
  },
]

export const NEWS_CATEGORIES = ['lancamento', 'evento', 'devlog', 'video']

export const sortedNews = () =>
  [...news].sort((a, b) => String(b.date).localeCompare(String(a.date)))

// 2026-11-19 -> 2026.11.19
export const formatDate = (iso) => String(iso || '').replaceAll('-', '.')
