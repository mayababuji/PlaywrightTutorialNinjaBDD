import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.TEST_ENV || 'dev';

dotenv.config({
  path: path.resolve(`.env.${environment}`)
});

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.js'
});

export default defineConfig({
  testDir,
  fullyParallel: true,

  timeout: Number(process.env.TEST_TIMEOUT || 30000),

  use: {
    baseURL: process.env.BASE_URL,
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

 reporter: [
  ['line'],
  ['html', { open: 'never' }],
  ['allure-playwright', { resultsDir: 'allure-results' }]
]
});