<script setup>
import { useI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import logoRaw from '../assets/logo-escuro.svg?raw'
import { site } from '../data/site'
import SocialLinks from './SocialLinks.vue'

const { t } = useI18n()
const year = new Date().getFullYear()

// No rodapé escuro o logo é invertido: o que é #22222a vira a cor do texto
// e os olhos, amarelos no original, ficam escuros para aparecer no claro.
const logo = logoRaw
  .replace(/<\?xml[^>]*\?>/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replaceAll('#22222a', 'currentColor')
  .replaceAll('#ffc444', '#22222a')
  .trim()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container top-row">
      <button type="button" class="to-top" @click="toTop">
        <FontAwesomeIcon :icon="faChevronUp" />
        <span>{{ t('footer.top') }}</span>
      </button>
    </div>

    <div class="social-band">
      <div class="container social-band__in">
        <span class="social-band__label">{{ t('footer.follow') }}</span>
        <SocialLinks />
      </div>
    </div>

    <div class="container main">
      <RouterLink to="/" class="logo" :aria-label="site.name">
        <span v-html="logo"></span>
      </RouterLink>

      <nav class="links" :aria-label="t('footer.menu')">
        <RouterLink to="/projetos">{{ t('nav.projects') }}</RouterLink>
        <RouterLink to="/novidades">{{ t('nav.news') }}</RouterLink>
        <RouterLink to="/sobre">{{ t('nav.about') }}</RouterLink>
      </nav>

      <p class="tagline">{{ site.tagline }}</p>
    </div>

    <div class="container legal">
      <p>© {{ year }} {{ site.name }}. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--paper);
  border-top: 3px solid var(--yellow);
  position: relative;
}

.top-row {
  display: flex;
  justify-content: flex-start;
  height: 0;
}

.to-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  transform: translateY(-50%);
  background: var(--yellow);
  color: var(--ink);
  border: 3px solid var(--ink);
  border-radius: var(--radius);
  font: inherit;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
}

.to-top:hover {
  background: var(--paper);
  transform: translateY(calc(-50% - 3px));
}

.social-band {
  border-bottom: 1px solid var(--line);
  padding-block: 26px 22px;
}

.social-band__in {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.social-band__label {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.8rem;
  color: var(--muted);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  padding-block: clamp(32px, 5vw, 52px);
  text-align: center;
}

.logo {
  display: block;
  line-height: 0;
  color: var(--paper);
  transition: color 0.15s ease;
}

.logo:hover {
  color: var(--yellow);
}

.logo :deep(svg) {
  height: 54px;
  width: auto;
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(16px, 3vw, 34px);
}

.links a {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.92rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
}

.links a:hover {
  border-bottom-color: var(--yellow);
  color: var(--yellow);
}

.tagline {
  color: var(--muted);
  font-size: 0.95rem;
}

.legal {
  border-top: 1px solid var(--line);
  padding-block: 20px;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
}

.footer :deep(.social--icons a) {
  color: var(--paper);
}

.footer :deep(.social--icons a:hover) {
  color: var(--ink);
}
</style>
