<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <a class="skip" href="#conteudo">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style>
.skip {
  position: absolute;
  left: -999px;
  top: 8px;
  background: var(--paper);
  color: var(--ink);
  padding: 8px 14px;
  border-radius: var(--radius);
  z-index: 100;
}
.skip:focus {
  left: 8px;
}
</style>
