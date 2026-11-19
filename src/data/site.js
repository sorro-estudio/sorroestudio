// Dados gerais do site.
// "key" liga a rede ao ícone em src/components/SocialLinks.vue.
// Os textos aceitam uma string ou { pt, en, es }.
export const site = {
  name: 'Sorro Estudio',
  tagline: 'Estúdio independente de animação e games',
  socials: [
    {
      key: 'instagram',
      label: 'Instagram',
      handle: '@sorroestudio',
      url: 'https://www.instagram.com/sorroestudio',
      blurb: {
        pt: 'Bastidores e novidades dos projetos.',
        en: 'Behind the scenes and project news.',
        es: 'Detrás de cámaras y novedades de los proyectos.',
      },
    },
    {
      key: 'youtube',
      label: 'YouTube',
      handle: '@sorroestudio',
      url: 'https://www.youtube.com/@sorroestudio',
      blurb: {
        pt: 'Vídeos, trailers e animações.',
        en: 'Videos, trailers and animations.',
        es: 'Videos, trailers y animaciones.',
      },
    },
    {
      key: 'tiktok',
      label: 'TikTok',
      handle: '@sorroestudio',
      url: 'https://www.tiktok.com/@sorroestudio',
      blurb: {
        pt: 'Clipes curtos e processos de criação.',
        en: 'Short clips and work in progress.',
        es: 'Clips cortos y procesos de creación.',
      },
    },
    {
      key: 'x',
      label: 'X',
      handle: '@SorroEstudio',
      url: 'https://x.com/SorroEstudio',
      blurb: {
        pt: 'Avisos e atualizações do estúdio.',
        en: 'Studio announcements and updates.',
        es: 'Avisos y actualizaciones del estudio.',
      },
    },
  ],
}
