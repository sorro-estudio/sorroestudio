<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faYoutube, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { site } from '../data/site'
import { localized } from '../i18n'

// variant: 'list' (nome + descrição, na página inicial) ou 'icons' (só os ícones, topo e rodapé)
defineProps({
  variant: { type: String, default: 'icons' },
})

const icons = { instagram: faInstagram, youtube: faYoutube, x: faXTwitter, tiktok: faTiktok }
</script>

<template>
  <ul :class="['social', `social--${variant}`]">
    <li v-for="s in site.socials" :key="s.key">
      <a :href="s.url" target="_blank" rel="noopener noreferrer" :aria-label="s.label">
        <template v-if="variant === 'list'">
          <span class="social__head">
            <span class="social__circle"><FontAwesomeIcon :icon="icons[s.key]" /></span>
            <span class="social__label">{{ s.label }}</span>
          </span>
          <span class="social__handle">{{ s.handle }}</span>
          <span class="social__blurb">{{ localized(s.blurb) }}</span>
        </template>
        <FontAwesomeIcon v-else :icon="icons[s.key]" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ---- só ícones (topo e rodapé) ---- */
.social--icons {
  display: flex;
  gap: 8px;
}
.social--icons a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid currentColor;
  border-radius: 50%;
  font-size: 1.1rem;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
}
.social--icons a:hover {
  background: var(--yellow);
  border-color: var(--yellow);
  color: var(--ink);
  transform: scale(1.1);
}

/* ---- lista com nome e descrição (página inicial) ---- */
.social--list {
  display: grid;
  gap: 40px 30px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.social--list a {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.social__head {
  display: flex;
  align-items: center;
  gap: 14px;
}
.social__circle {
  display: grid;
  place-items: center;
  flex: none;
  width: 48px;
  height: 48px;
  border: 2px solid currentColor;
  border-radius: 50%;
  font-size: 1.4rem;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.social--list a:hover .social__circle {
  background: var(--yellow);
  border-color: var(--ink);
}
.social__label {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1;
  text-decoration: underline 0.14em transparent;
  text-underline-offset: 0.1em;
  transition: text-decoration-color 0.15s ease;
}
.social--list a:hover .social__label {
  text-decoration-color: var(--yellow);
}
.social__handle {
  font-weight: 800;
}
.social__blurb {
  opacity: 0.8;
  font-size: 1rem;
}
</style>
