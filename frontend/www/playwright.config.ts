import { defineConfig, devices } from "@playwright/test";
import process from "node:process";

export default defineConfig({
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
    {
      name: "Microsoft Edge",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: "html",
  retries: process.env.CI ? 2 : 0,
  testDir: "./e2e",
  timeout: 30 * 1000,
  use: {
    actionTimeout: 0,
    baseURL: process.env.CI ? "http://localhost:4173" : "http://localhost:5173",
    trace: "on-first-retry",
    headless: !!process.env.CI,
  },
  webServer: {
    command: process.env.CI ? "npm run preview" : "npm run dev",
    port: process.env.CI ? 4173 : 5173,
    reuseExistingServer: !process.env.CI,
  },
  workers: process.env.CI ? 1 : undefined,
});
