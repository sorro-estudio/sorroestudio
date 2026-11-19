<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { LOCALES, setLocale } from '../i18n'

const { locale, t } = useI18n()
const open = ref(false)
const root = ref(null)

function choose(l) {
  setLocale(l)
  open.value = false
}

function onDocClick(e) {
  if (open.value && root.value && !root.value.contains(e.target)) open.value = false
}

function onKey(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="lang" :class="{ 'is-open': open }">
    <button
      type="button"
      class="pill"
      :aria-expanded="open"
      :aria-label="t('lang.label')"
      @click="open = !open"
    >
      <FontAwesomeIcon :icon="faGlobe" class="pill__globe" />
      <span class="pill__grow">
        <span class="pill__name">{{ t(`lang.${locale}`) }}</span>
        <FontAwesomeIcon :icon="faChevronDown" class="pill__caret" />
      </span>
    </button>

    <ul v-if="open" class="panel" role="listbox" :aria-label="t('lang.label')">
      <li v-for="l in LOCALES" :key="l">
        <button
          type="button"
          class="panel__item"
          :class="{ 'is-on': l === locale }"
          role="option"
          :aria-selected="l === locale"
          @click="choose(l)"
        >
          <span class="dot"></span>{{ t(`lang.${l}`) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang {
  position: relative;
}

.pill {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 9px;
  background: var(--yellow);
  color: var(--ink);
  border: 2px solid var(--ink);
  border-radius: 999px;
  font: inherit;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.15s ease;
}

.pill:hover {
  background: var(--paper);
}

.pill__globe {
  font-size: 1.15rem;
  flex: none;
}

/* fechado é só o círculo; no hover (ou aberto) ele cresce e mostra o idioma */
.pill__grow {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.25s ease, opacity 0.2s ease, margin-left 0.25s ease;
}

.lang:hover .pill__grow,
.lang:focus-within .pill__grow,
.lang.is-open .pill__grow {
  max-width: 180px;
  opacity: 1;
  margin-left: 9px;
}

.pill__caret {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.lang.is-open .pill__caret {
  transform: rotate(180deg);
}

.panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 30;
  list-style: none;
  margin: 0;
  padding: 6px;
  background: var(--ink-2);
  border: 2px solid var(--ink);
  border-radius: var(--radius);
  box-shadow: 0 16px 40px -16px rgba(0, 0, 0, 0.9);
  min-width: 170px;
}

.panel__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: none;
  border: 0;
  border-radius: var(--radius);
  color: var(--paper);
  font: inherit;
  font-weight: 700;
  font-size: 0.92rem;
  text-align: left;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease;
}

.panel__item:hover {
  background: var(--yellow);
  color: var(--ink);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  flex: none;
}

.panel__item.is-on {
  color: var(--yellow);
}

.panel__item.is-on:hover {
  color: var(--ink);
}

.panel__item.is-on .dot {
  opacity: 1;
}

@media (max-width: 820px) {
  .panel {
    right: auto;
    left: 0;
  }
}
</style>
