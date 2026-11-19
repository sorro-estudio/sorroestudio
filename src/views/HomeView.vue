<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { projects } from '../data/projects'
import { sortedNews } from '../data/news'
import ProjectCard from '../components/ProjectCard.vue'
import NewsCard from '../components/NewsCard.vue'
import SocialLinks from '../components/SocialLinks.vue'

const { t } = useI18n()
const latest = computed(() => sortedNews().slice(0, 3))
</script>

<template>
  <section class="hero section">
    <div class="container">
      <p class="eyebrow">{{ t('home.projectsEyebrow') }}</p>
      <h1 class="title hero__title">
        {{ t('home.heroTitle1') }}<br />{{ t('home.heroTitle2') }}<br />
        <span>{{ t('home.heroTitle3') }}</span
        >.
      </h1>
      <p class="lead">{{ t('home.heroLead') }}</p>
      <div class="hero__cta">
        <RouterLink to="/projetos" class="btn btn--solid-light">{{ t('home.heroCta') }}</RouterLink>
      </div>
    </div>
  </section>

  <section class="section section--paper">
    <div class="container">
      <p class="eyebrow">{{ t('home.projectsEyebrow') }}</p>
      <h2 class="title block-title">{{ t('home.projectsTitle') }}</h2>
      <div class="grid projects__grid">
        <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
      </div>
    </div>
  </section>

  <section v-if="latest.length" class="section news">
    <div class="container">
      <p class="eyebrow">{{ t('home.newsEyebrow') }}</p>
      <div class="news__head">
        <h2 class="title block-title">{{ t('home.newsTitle') }}</h2>
        <RouterLink to="/novidades" class="news__all">
          {{ t('home.seeAll') }} <FontAwesomeIcon :icon="faArrowRight" />
        </RouterLink>
      </div>
      <div class="news__grid">
        <NewsCard v-for="n in latest" :key="n.id" :item="n" />
      </div>
    </div>
  </section>

  <section class="section section--paper">
    <div class="container">
      <p class="eyebrow">{{ t('home.socialEyebrow') }}</p>
      <h2 class="title block-title">{{ t('home.socialTitle') }}</h2>
      <SocialLinks variant="list" />
    </div>
  </section>
</template>

<style scoped>
.hero .eyebrow {
  color: var(--lime);
  opacity: 1;
}
.hero__title {
  margin-bottom: 22px;
}
.hero__title span {
  color: var(--orange);
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.block-title {
  margin-bottom: 36px;
}

.projects__grid :deep(.card) {
  background: var(--ink);
}

.news .eyebrow {
  color: var(--orange);
  opacity: 1;
}
.news__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}
.news__all {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.95rem;
  color: var(--yellow);
  margin-bottom: 36px;
}
.news__all:hover {
  text-decoration: underline 3px;
  text-underline-offset: 5px;
}
.news__grid {
  display: grid;
  gap: 40px 28px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
}
</style>
