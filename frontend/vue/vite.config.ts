import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'

export default defineConfig({
  base: '/vue',
  build: {
    emptyOutDir: false,
    outDir: path.join(import.meta.dirname, '../../dist/vue'),
  },
  plugins: [vue(), vueJsx(), vueDevTools()],
})
