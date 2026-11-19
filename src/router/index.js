import { createRouter, createWebHistory } from 'vue-router'
import { findProject } from '../data/projects'
import i18n, { localized } from '../i18n'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  {
    path: '/projetos',
    name: 'projetos',
    component: () => import('../views/ProjectsView.vue'),
    meta: { titleKey: 'projects.title' },
  },
  {
    path: '/projetos/:slug',
    name: 'projeto',
    component: () => import('../views/ProjectView.vue'),
  },
  {
    path: '/novidades',
    name: 'novidades',
    component: () => import('../views/NewsView.vue'),
    meta: { titleKey: 'news.title' },
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/AboutView.vue'),
    meta: { titleKey: 'about.title' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'nao-encontrado',
    component: () => import('../views/NotFoundView.vue'),
    meta: { titleKey: 'notFound.title' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Sorro Estudio'
  const project = to.params.slug ? findProject(to.params.slug) : null
  const page = project
    ? localized(project.title)
    : to.meta.titleKey
      ? i18n.global.t(to.meta.titleKey)
      : null
  document.title = page ? `${page} — ${base}` : `${base} — Animação e Games`
})

export default router
