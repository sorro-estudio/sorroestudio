<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import logoRaw from '../assets/logo-escuro.svg?raw'
import SocialLinks from './SocialLinks.vue'
import LangSwitch from './LangSwitch.vue'

const { t } = useI18n()
const route = useRoute()
const open = ref(false)

watch(() => route.fullPath, () => (open.value = false))

// SVG colado direto na página para a fonte Sofia Sans do logo carregar (em <img> ela não carrega).
const logo = logoRaw
  .replace(/<\?xml[^>]*\?>/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .trim()
</script>

<template>
  <header class="header">
    <div class="container header__in">
      <RouterLink to="/" class="brand" aria-label="Sorro Estudio">
        <span class="logo" v-html="logo"></span>
      </RouterLink>

      <button
        class="burger"
        type="button"
        :aria-expanded="open"
        aria-controls="menu-principal"
        @click="open = !open"
      >
        <FontAwesomeIcon :icon="open ? faXmark : faBars" />
      </button>

      <div id="menu-principal" class="menu" :class="{ 'is-open': open }">
        <nav aria-label="Menu">
          <RouterLink to="/projetos" active-class="is-active">{{ t('nav.projects') }}</RouterLink>
          <RouterLink to="/novidades" active-class="is-active">{{ t('nav.news') }}</RouterLink>
          <RouterLink to="/sobre" active-class="is-active">{{ t('nav.about') }}</RouterLink>
        </nav>
        <div class="menu__side">
          <LangSwitch />
          <SocialLinks class="header__social" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--yellow);
  color: var(--ink);
  border-bottom: 3px solid var(--ink);
}

.header__in {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-block: 10px;
}

.brand {
  display: block;
  line-height: 0;
  flex: none;
}

.logo :deep(svg) {
  display: block;
  height: 44px;
  width: auto;
}

.burger {
  display: none;
  background: none;
  border: 2px solid currentColor;
  border-radius: var(--radius);
  color: inherit;
  font-size: 1.2rem;
  padding: 6px 12px;
  cursor: pointer;
}

.menu {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);
  margin-left: auto;
}

.menu__side {
  display: flex;
  align-items: center;
  gap: 16px;
}

nav {
  display: flex;
  gap: clamp(14px, 2.5vw, 28px);
}

nav a {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05em;
  padding-block: 4px;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
}

nav a:hover,
nav a.is-active {
  border-bottom-color: var(--ink);
}

/* no topo amarelo o hover do ícone fica escuro */
.header :deep(.social--icons a:hover) {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--yellow);
}

@media (max-width: 1000px) {
  .header__social {
    display: none;
  }
}

@media (max-width: 820px) {
  .burger {
    display: block;
  }
  .menu {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    background: var(--yellow);
    border-bottom: 3px solid var(--ink);
    padding: 20px var(--gutter) 26px;
  }
  .menu.is-open {
    display: flex;
  }
  nav {
    flex-direction: column;
    gap: 12px;
  }
  nav a {
    font-size: 1.3rem;
  }
  .header__social {
    display: flex;
  }
}

@media (max-width: 520px) {
  .logo :deep(svg) {
    height: 36px;
  }
}
</style>
