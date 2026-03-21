import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',

  use: {
    baseURL: 'http://localhost',
    headless: true
  },

  timeout: 30000,
  retries: 1,

  webServer: {
    command: 'docker compose up --build mysql init-db backend frontend',
    url: 'http://localhost',
    reuseExistingServer: !process.env.CI
  }
});