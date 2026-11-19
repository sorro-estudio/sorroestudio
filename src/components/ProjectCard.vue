<script setup>
import { localized } from '../i18n'

defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <RouterLink :to="`/projetos/${project.slug}`" class="card" :style="{ '--c': project.color }">
    <div class="card__cover">
      <h3>{{ localized(project.title) }}</h3>
    </div>
    <div class="card__body">
      <p>{{ localized(project.summary) }}</p>
      <span class="tag">{{ localized(project.status) }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--ink-2);
  border: 3px solid var(--c);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
  z-index: 1;
}

.card__cover {
  background: var(--c);
  color: var(--ink);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: flex-end;
  padding: 18px;
}

.card__cover h3 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1.7rem, 3.4vw, 2.2rem);
  line-height: 0.95;
}

.card__body {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  color: var(--muted);
}

.card__body .tag {
  color: var(--c);
}
</style>
