<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { sortedNews, formatDate, NEWS_CATEGORIES } from '../data/news'
import { localized } from '../i18n'

const { t } = useI18n()
const PER_PAGE = 10

const all = sortedNews()
const filter = ref('all')
const page = ref(1)

// só mostra os filtros das categorias que existem de fato
const categories = computed(() =>
  NEWS_CATEGORIES.filter((c) => all.some((n) => n.category === c)),
)

const filtered = computed(() =>
  filter.value === 'all' ? all : all.filter((n) => n.category === filter.value),
)

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / PER_PAGE)))

const pageItems = computed(() => {
  const start = (page.value - 1) * PER_PAGE
  return filtered.value.slice(start, start + PER_PAGE)
})

watch(filter, () => (page.value = 1))

function go(delta) {
  page.value = Math.min(totalPages.value, Math.max(1, page.value + delta))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="section head">
    <div class="container">
      <p class="eyebrow">{{ t('news.eyebrow') }}</p>
      <h1 class="title">{{ t('news.title') }}</h1>
      <p class="lead intro">{{ t('news.intro') }}</p>

      <div class="filters">
        <span class="filters__label">{{ t('news.filter') }}:</span>
        <button
          type="button"
          class="chip"
          :class="{ 'is-on': filter === 'all' }"
          @click="filter = 'all'"
        >
          {{ t('news.all') }}
        </button>
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="chip"
          :class="{ 'is-on': filter === c }"
          @click="filter = c"
        >
          {{ t(`news.categories.${c}`) }}
        </button>
      </div>
    </div>
  </section>

  <section class="section list-wrap">
    <div class="container">
      <p v-if="!pageItems.length" class="empty">{{ t('news.empty') }}</p>

      <ul v-else class="list">
        <li v-for="item in pageItems" :key="item.id">
          <component
            :is="item.url ? 'a' : 'RouterLink'"
            v-bind="
              item.url
                ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
                : { to: item.to || '/novidades' }
            "
            class="row"
          >
            <time class="row__date" :datetime="item.date">{{ formatDate(item.date) }}</time>
            <span v-if="item.category" class="tag row__cat">
              {{ t(`news.categories.${item.category}`) }}
            </span>
            <span class="row__title">{{ localized(item.title) }}</span>
            <span v-if="item.text" class="row__text">{{ localized(item.text) }}</span>
            <FontAwesomeIcon
              :icon="item.url ? faArrowUpRightFromSquare : faArrowRight"
              class="row__go"
              :title="item.url ? t('common.externalLink') : ''"
            />
          </component>
        </li>
      </ul>

      <nav v-if="totalPages > 1" class="pager" aria-label="Paginação">
        <button type="button" class="btn" :disabled="page === 1" @click="go(-1)">
          {{ t('news.prev') }}
        </button>
        <span class="pager__count">{{ t('news.page') }} {{ page }} / {{ totalPages }}</span>
        <button type="button" class="btn" :disabled="page === totalPages" @click="go(1)">
          {{ t('news.next') }}
        </button>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.head {
  padding-bottom: 0;
}

.intro {
  margin-top: 18px;
  color: var(--muted);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
}

.filters__label {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: var(--muted);
}

.chip {
  background: none;
  color: inherit;
  font: inherit;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  padding: 6px 16px;
  border: 2px solid var(--line);
  border-radius: var(--radius);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.chip:hover {
  border-color: var(--yellow);
  color: var(--yellow);
}

.chip.is-on {
  background: var(--yellow);
  border-color: var(--yellow);
  color: var(--ink);
}

.list-wrap {
  padding-top: clamp(32px, 5vw, 52px);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--line);
}

.list li {
  border-bottom: 1px solid var(--line);
}

.row {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 8px 18px;
  padding: clamp(18px, 2.4vw, 26px) 0;
  transition: color 0.15s ease, padding-inline 0.15s ease;
}

.row:hover {
  color: var(--yellow);
  padding-inline: 10px;
}

.row__date {
  font-weight: 800;
  color: var(--muted);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
}

.row:hover .row__date {
  color: inherit;
}

.row__cat {
  color: var(--yellow);
  font-size: 0.75rem;
}

.row__title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  line-height: 1.1;
}

.row__text {
  grid-column: 3;
  color: var(--muted);
  font-size: 0.98rem;
}

.row:hover .row__text {
  color: inherit;
}

.row__go {
  grid-row: 1 / span 2;
  grid-column: 4;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.row:hover .row__go {
  opacity: 1;
  transform: none;
}

.empty {
  color: var(--muted);
  padding-block: 40px;
}

.pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 44px;
}

.pager .btn {
  background: none;
  cursor: pointer;
  font-family: inherit;
}

.pager .btn:disabled {
  opacity: 0.35;
  cursor: default;
  transform: none;
}

.pager__count {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.9rem;
  color: var(--muted);
}

@media (max-width: 720px) {
  .row {
    grid-template-columns: auto 1fr auto;
  }
  .row__title,
  .row__text {
    grid-column: 1 / -1;
  }
  .row__go {
    grid-row: 1;
    grid-column: 3;
    opacity: 1;
    transform: none;
  }
}
</style>
