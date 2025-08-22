import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
      interval: 100 // (optional) check every 100ms
    }
  },
  assetsInclude: ['**/*.JPG'], // 👈 add this line
})
