<script setup>
import { useI18n } from 'vue-i18n'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <p class="eyebrow">{{ t('projects.eyebrow') }}</p>
      <h1 class="title">{{ t('projects.title') }}</h1>
      <p class="lead intro">{{ t('projects.intro') }}</p>
      <div class="grid">
        <ProjectCard v-for="p in projects" :key="p.slug" :project="p" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  margin: 18px 0 40px;
  color: var(--muted);
}
</style>
