<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { findProject } from '../data/projects'
import { localized } from '../i18n'

const route = useRoute()
const { t } = useI18n()
const project = computed(() => findProject(route.params.slug))
</script>

<template>
  <section v-if="project" class="section soon">
    <div class="container">
      <RouterLink to="/projetos" class="back">
        <FontAwesomeIcon :icon="faArrowLeft" /> {{ t('project.back') }}
      </RouterLink>

      <p class="eyebrow">
        <span v-if="project.year">{{ project.year }}</span>
        <span v-if="project.type"> · {{ localized(project.type) }}</span>
      </p>
      <h1 class="title">{{ localized(project.title) }}</h1>

      <p class="soon__tag">{{ t('common.soon') }}</p>
      <p class="soon__text">{{ t('project.soonText') }}</p>
    </div>
  </section>

  <section v-else class="section">
    <div class="container">
      <h1 class="title">{{ t('project.notFoundTitle') }}</h1>
      <p class="lead nf">{{ t('project.notFoundText') }}</p>
      <RouterLink to="/projetos" class="btn btn--solid-light">
        {{ t('project.notFoundCta') }}
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.soon {
  min-height: 56vh;
  display: flex;
  align-items: center;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  color: var(--yellow);
  margin-bottom: 32px;
}

.back:hover {
  text-decoration: underline 3px;
  text-underline-offset: 5px;
}

.soon .eyebrow {
  color: var(--muted);
  opacity: 1;
}

.soon__tag {
  display: inline-block;
  margin-top: 28px;
  padding: 8px 26px;
  border: 3px solid var(--yellow);
  border-radius: var(--radius);
  color: var(--yellow);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.9rem;
}

.soon__text {
  margin-top: 20px;
  color: var(--muted);
  max-width: 44ch;
}

.nf {
  margin: 16px 0 28px;
  color: var(--muted);
}
</style>
