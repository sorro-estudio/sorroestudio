import { createI18n } from 'vue-i18n'
import pt from './pt'
import en from './en'
import es from './es'

export const LOCALES = ['pt', 'en', 'es']
const STORAGE_KEY = 'se-lang'

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALES.includes(saved)) return saved
  } catch {
    // localStorage pode estar bloqueado; segue com a detecção do navegador
  }
  const nav = (navigator.language || 'pt').slice(0, 2).toLowerCase()
  return LOCALES.includes(nav) ? nav : 'pt'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'pt',
  messages: { pt, en, es },
})

function applyHtmlLang(locale) {
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale
}

export function setLocale(locale) {
  if (!LOCALES.includes(locale)) return
  i18n.global.locale.value = locale
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // sem localStorage o idioma vale só nesta visita
  }
  applyHtmlLang(locale)
}

// Textos do conteúdo podem ser uma string ou { pt, en, es }.
// Sem tradução no idioma atual, cai no português.
export function localized(value, locale = i18n.global.locale.value) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[locale] || value.pt || ''
}

applyHtmlLang(i18n.global.locale.value)

export default i18n
