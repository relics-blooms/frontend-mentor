import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  forbidOnly: !!process.env["CI"],
  fullyParallel: true,
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
  retries: process.env["CI"] ? 2 : 0,
  testDir: "./e2e",
  use: {
    baseURL: process.env["PLAYWRIGHT_TEST_BASE_URL"] ?? "http://localhost:3100",
    trace: "on-first-retry",
  },
  workers: process.env["CI"] ? 1 : 0,
});
