import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site lives at https://secbest.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
