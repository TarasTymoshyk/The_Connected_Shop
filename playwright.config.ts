import { defineConfig, devices } from '@playwright/test'
import type { ReporterConfig } from './custom-reporter';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const reporterConfig: ReporterConfig = {
  outputDir: 'test-results/enterprise-report',
  reportTitle: 'Test Execution Report',
  companyName: 'Vantage Software',
  projectName: 'Vantage',
  theme: 'dark',
  primaryColor: '#1d46fc',
  logo: 'data:image/jpeg;base64,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',
  showPassedTests: true,
  showSkippedTests: true,
  showEnvironmentInfo: true,
  includeScreenshots: true,
  includeVideos: true,
  includeTraces: true,
  testCategories: ['smoke', 'regression', 'integration', 'e2e'],
};
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['./custom-reporter.ts', reporterConfig],

  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://dev.emeli.in.ua',
    extraHTTPHeaders: {
      Authorization:
        'Basic ' +
        Buffer.from('admin:Engineer_123').toString('base64'),
      'Content-Type': 'application/json'
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
