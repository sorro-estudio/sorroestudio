<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { localized } from '../../i18n'

defineProps({ project: { type: Object, required: true } })
const { t } = useI18n()
</script>

<template>
  <div class="cyber">
    <section class="hero">
      <img
        v-if="project.banner"
        class="hero__bg"
        :src="project.banner"
        :alt="`Banner de ${localized(project.title)}`"
        width="1600"
        height="667"
      />
      <div class="hero__veil"></div>
      <div class="container hero__in">
        <RouterLink to="/projetos" class="back">
          <FontAwesomeIcon :icon="faArrowLeft" /> {{ t('project.back') }}
        </RouterLink>
        <h1 class="hero__title">{{ localized(project.title) }}</h1>
        <p class="hero__sum">{{ localized(project.summary) }}</p>
      </div>
    </section>

    <div class="specs">
      <div class="container specs__in">
        <div class="spec">
          <span class="spec__k">{{ t('project.year') }}</span>
          <span class="spec__v">{{ project.year || '—' }}</span>
        </div>
        <div class="spec">
          <span class="spec__k">{{ t('project.type') }}</span>
          <span class="spec__v">{{ localized(project.type) || '—' }}</span>
        </div>
        <div class="spec">
          <span class="spec__k">{{ t('project.status') }}</span>
          <span class="spec__v">{{ localized(project.status) || '—' }}</span>
        </div>
      </div>
    </div>

    <section class="body">
      <div class="container body__in">
        <h2 class="body__h">{{ t('project.about') }}</h2>
        <div class="body__text">
          <p v-for="(par, i) in project.description" :key="i">{{ localized(par) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cyber {
  background:
    repeating-linear-gradient(0deg, transparent 0 38px, color-mix(in srgb, var(--p-accent) 8%, transparent) 38px 39px),
    repeating-linear-gradient(90deg, transparent 0 38px, color-mix(in srgb, var(--p-accent) 8%, transparent) 38px 39px),
    var(--p-bg);
  color: var(--p-text);
}

.hero {
  position: relative;
  min-height: clamp(320px, 48vw, 540px);
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-bottom: 3px solid var(--p-accent);
}

.hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--p-bg) 2%,
    color-mix(in srgb, var(--p-bg) 55%, transparent) 45%,
    transparent 100%
  );
}

.hero__in {
  position: relative;
  padding-block: clamp(28px, 5vw, 56px);
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  color: var(--p-accent);
  margin-bottom: 20px;
}

.back:hover {
  text-decoration: underline 2px;
  text-underline-offset: 4px;
}

.hero__title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(2.4rem, 9vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-shadow:
    2px 0 0 color-mix(in srgb, var(--p-accent2) 70%, transparent),
    -2px 0 0 color-mix(in srgb, var(--p-accent) 70%, transparent);
}

.hero__sum {
  margin-top: 16px;
  max-width: 46ch;
  color: var(--p-muted);
}

.specs {
  background: var(--p-surface);
  border-bottom: 1px solid color-mix(in srgb, var(--p-accent) 25%, transparent);
}

.specs__in {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(24px, 6vw, 72px);
  padding-block: 18px;
}

.spec {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spec__k {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--p-accent);
}

.spec__v {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.body {
  padding-block: clamp(48px, 8vw, 96px);
}

.body__in {
  display: grid;
  grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
  gap: clamp(20px, 4vw, 56px);
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
  border-left: 3px solid var(--p-accent);
  padding-left: clamp(18px, 3vw, 32px);
  color: var(--p-muted);
}

@media (max-width: 760px) {
  .body__in {
    grid-template-columns: 1fr;
  }
}
</style>
