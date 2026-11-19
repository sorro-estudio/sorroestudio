import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Domínio próprio na raiz (sorroestudio.com.br), então base = '/'
export default defineConfig({
  plugins: [vue()],
})
