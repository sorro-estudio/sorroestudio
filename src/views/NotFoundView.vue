<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="eyebrow">{{ t('notFound.eyebrow') }}</p>
      <h1 class="title">{{ t('notFound.title') }}</h1>
      <p class="lead msg">{{ t('notFound.text') }}</p>
      <RouterLink to="/" class="btn btn--solid-light">{{ t('notFound.cta') }}</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.msg {
  margin: 18px 0 32px;
  color: var(--muted);
}
</style>
