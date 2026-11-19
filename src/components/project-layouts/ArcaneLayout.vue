<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { localized } from '../../i18n'

defineProps({ project: { type: Object, required: true } })
const { t } = useI18n()
</script>

<template>
  <div class="arcane">
    <div class="container topbar">
      <RouterLink to="/projetos" class="back">
        <FontAwesomeIcon :icon="faArrowLeft" /> {{ t('project.back') }}
      </RouterLink>
    </div>

    <section class="container hero">
      <p class="kicker">{{ localized(project.type) }} · {{ project.year }}</p>
      <h1 class="hero__title">{{ localized(project.title) }}</h1>
      <div class="rule"><span></span><i></i><span></span></div>
      <p class="hero__sum">{{ localized(project.summary) }}</p>
    </section>

    <section v-if="project.banner" class="container frame-wrap">
      <figure class="frame">
        <img
          :src="project.banner"
          :alt="`Banner de ${localized(project.title)}`"
          width="1600"
          height="667"
        />
      </figure>
    </section>

    <section class="container body">
      <h2 class="body__h">{{ t('project.about') }}</h2>
      <div class="body__text">
        <p v-for="(par, i) in project.description" :key="i">{{ localized(par) }}</p>
      </div>
      <p class="status">{{ localized(project.status) }}</p>
    </section>
  </div>
</template>

<style scoped>
.arcane {
  background:
    radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--p-accent) 14%, transparent), transparent 55%),
    var(--p-bg);
  color: var(--p-text);
  padding-bottom: clamp(56px, 9vw, 110px);
}

.topbar {
  padding-top: 26px;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: var(--p-accent);
}

.back:hover {
  text-decoration: underline 2px;
  text-underline-offset: 4px;
}

.hero {
  text-align: center;
  padding-top: clamp(36px, 7vw, 80px);
}

.kicker {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--p-accent);
}

.hero__title {
  margin-top: 18px;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(2.6rem, 9vw, 6rem);
  line-height: 1;
  letter-spacing: -0.01em;
}

.rule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 26px auto 0;
  max-width: 320px;
}

.rule span {
  flex: 1;
  height: 1px;
  background: color-mix(in srgb, var(--p-accent) 55%, transparent);
}

.rule i {
  width: 9px;
  height: 9px;
  background: var(--p-accent);
  transform: rotate(45deg);
}

.hero__sum {
  margin: 24px auto 0;
  max-width: 48ch;
  color: var(--p-muted);
  font-size: 1.05rem;
}

.frame-wrap {
  padding-top: clamp(36px, 6vw, 64px);
}

.frame {
  margin: 0;
  padding: 10px;
  background: var(--p-surface);
  border: 1px solid color-mix(in srgb, var(--p-accent) 35%, transparent);
  box-shadow: 0 24px 60px -30px color-mix(in srgb, var(--p-accent) 60%, transparent);
}

.frame img {
  width: 100%;
  height: auto;
  display: block;
}

.body {
  padding-top: clamp(44px, 7vw, 88px);
  text-align: center;
}

.body__h {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.26em;
  font-size: 0.74rem;
  color: var(--p-accent);
  margin-bottom: 22px;
}

.body__text {
  display: grid;
  gap: 18px;
  max-width: 62ch;
  margin-inline: auto;
  color: var(--p-muted);
  font-size: 1.05rem;
}

.status {
  margin-top: 34px;
  display: inline-block;
  padding: 6px 22px;
  border: 1px solid var(--p-accent);
  color: var(--p-accent);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
  font-weight: 700;
}
</style>
