<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { localized } from '../../i18n'

defineProps({ project: { type: Object, required: true } })
const { t } = useI18n()
</script>

<template>
  <div class="plain">
    <section class="banner">
      <div class="container">
        <RouterLink to="/projetos" class="back">
          <FontAwesomeIcon :icon="faArrowLeft" /> {{ t('project.back') }}
        </RouterLink>
        <h1 class="banner__title">{{ localized(project.title) }}</h1>
        <p class="banner__meta">
          <span v-if="project.year">{{ project.year }}</span>
          <span v-if="project.type">{{ localized(project.type) }}</span>
          <span class="banner__status">{{ localized(project.status) }}</span>
        </p>
      </div>
    </section>

    <section v-if="project.banner" class="container cover">
      <img
        :src="project.banner"
        :alt="`Banner de ${localized(project.title)}`"
        width="1600"
        height="667"
      />
    </section>

    <section class="container body">
      <h2 class="body__h">{{ t('project.about') }}</h2>
      <div class="body__text">
        <p v-for="(par, i) in project.description" :key="i">{{ localized(par) }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.plain {
  background: var(--p-bg);
  color: var(--p-text);
  padding-bottom: clamp(56px, 9vw, 110px);
}

.banner {
  background: var(--p-accent);
  color: var(--p-bg);
  padding-block: clamp(30px, 5vw, 56px);
  border-bottom: 3px solid var(--p-bg);
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  margin-bottom: 20px;
  border-bottom: 3px solid transparent;
}

.back:hover {
  border-bottom-color: currentColor;
}

.banner__title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(2.2rem, 8vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
}

.banner__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 18px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.88rem;
}

.banner__status {
  padding: 2px 14px;
  border: 2px solid currentColor;
  border-radius: var(--radius);
}

.cover {
  padding-top: clamp(28px, 5vw, 56px);
}

.cover img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius);
}

.body {
  padding-top: clamp(40px, 7vw, 80px);
  display: grid;
  grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
  gap: clamp(18px, 4vw, 56px);
}

.body__h {
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.85rem;
  color: var(--p-accent);
  padding-top: 6px;
}

.body__text {
  display: grid;
  gap: 18px;
  max-width: 68ch;
  color: var(--p-muted);
}

@media (max-width: 760px) {
  .body {
    grid-template-columns: 1fr;
  }
}
</style>
