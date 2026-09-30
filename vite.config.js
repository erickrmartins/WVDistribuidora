import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base do GitHub Pages: https://<usuario>.github.io/WVDistribuidora/
// O Vite aplica essa base em todos os caminhos do index.html (script, favicon)
// e expõe o valor em import.meta.env.BASE_URL para as imagens do código.
export default defineConfig({
  base: '/WVDistribuidora/',
  plugins: [react()],
})
