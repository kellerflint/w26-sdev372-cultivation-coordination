import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
    include: ["src/tests/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules/**", "server/**", "playwright-tests/**"]
  }
})
