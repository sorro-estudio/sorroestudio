<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '../data/news'
import { localized } from '../i18n'

defineProps({
  item: { type: Object, required: true },
})

const { t } = useI18n()
</script>

<template>
  <component
    :is="item.url ? 'a' : 'RouterLink'"
    v-bind="
      item.url
        ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
        : { to: item.to || '/novidades' }
    "
    class="news"
  >
    <div class="news__meta">
      <time v-if="item.date" :datetime="item.date">{{ formatDate(item.date) }}</time>
      <span v-if="item.category" class="tag">{{ t(`news.categories.${item.category}`) }}</span>
    </div>
    <h3>{{ localized(item.title) }}</h3>
    <p>{{ localized(item.text) }}</p>
    <span class="news__more">
      {{ t('news.readMore') }}
      <FontAwesomeIcon :icon="item.url ? faArrowUpRightFromSquare : faArrowRight" />
    </span>
  </component>
</template>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 22px;
  border-top: 3px solid var(--line);
  transition: border-color 0.15s ease;
}

.news:hover {
  border-top-color: var(--yellow);
}

.news__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 700;
}

.news__meta .tag {
  color: var(--yellow);
  font-size: 0.75rem;
}

.news h3 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1.4rem, 2.8vw, 1.9rem);
  line-height: 1;
  transition: color 0.15s ease;
}

.news:hover h3 {
  color: var(--yellow);
}

.news p {
  color: var(--muted);
}

.news__more {
  margin-top: auto;
  padding-top: 4px;
  color: var(--yellow);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.95rem;
}
</style>
