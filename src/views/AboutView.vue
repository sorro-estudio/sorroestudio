<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="eyebrow">{{ t('about.eyebrow') }}</p>
      <h1 class="title">{{ t('about.title') }}</h1>
      <div class="text">
        <p>{{ t('about.p1') }}</p>
        <p>{{ t('about.p2') }}</p>
      </div>
      <RouterLink to="/projetos" class="btn btn--solid-light">{{ t('about.cta') }}</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.text {
  max-width: 680px;
  display: grid;
  gap: 18px;
  margin: 28px 0 36px;
  color: var(--muted);
}
</style>
