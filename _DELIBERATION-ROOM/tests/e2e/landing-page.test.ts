/**
 * landing-page.test.ts — E2E tests for the landing page.
 *
 * Uses Playwright with a mock WebSocket server for deterministic testing.
 */

import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { chromium, type Browser, type Page } from "playwright";
import { createMockServer } from "./mock-ws-server";

let browser: Browser;
let page: Page;
let mockServer: ReturnType<typeof createMockServer>;

beforeAll(async () => {
  // Start mock server
  mockServer = createMockServer({
    port: 4201,
    meetings: [
      {
        meetingId: "test-meeting-1",
        branch: "sessions/test-meeting-1",
        lastActivity: "2026-02-27T14:30:00Z",
        lastCommitMsg: "Cycle 5: archi",
        title: "גן עדן — בראשית ב:ד",
        cycleCount: 5,
        participants: ["milo", "archi", "kashia"],
      },
      {
        meetingId: "test-meeting-2",
        branch: "sessions/test-meeting-2",
        lastActivity: "2026-02-20T09:00:00Z",
        lastCommitMsg: "Meeting ended",
        title: "הנחש — בראשית ג:א",
        cycleCount: 12,
        participants: ["milo", "archi", "kashia", "barak"],
      },
    ],
  });

  // Launch browser
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

afterAll(async () => {
  await page?.close();
  await browser?.close();
  mockServer?.stop();
});

describe("landing page", () => {
  test("page loads with RTL direction", async () => {
    await page.goto(mockServer.url);
    const dir = await page.getAttribute("html", "dir");
    expect(dir).toBe("rtl");
  });

  test("page title is in Hebrew", async () => {
    await page.goto(mockServer.url);
    const heading = await page.textContent("h1");
    expect(heading).toContain("חדר הדיונים");
  });

  test("agent cards render with Hebrew names", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector(".participant-card");

    const cards = await page.$$(".participant-card");
    expect(cards.length).toBe(4);

    const hebrewNames = await Promise.all(
      cards.map((c) => c.textContent())
    );
    expect(hebrewNames.some((n) => n?.includes("מיילו"))).toBe(true);
    expect(hebrewNames.some((n) => n?.includes("ארצ'י"))).toBe(true);
    expect(hebrewNames.some((n) => n?.includes("קשיא"))).toBe(true);
    expect(hebrewNames.some((n) => n?.includes("ברק"))).toBe(true);
  });

  test("all agent cards are selected by default", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector(".participant-card");

    const checkboxes = await page.$$('input[name="participant"]');
    for (const cb of checkboxes) {
      expect(await cb.isChecked()).toBe(true);
    }
  });

  test("agent cards are toggleable", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector(".participant-card");

    // Click first card to deselect
    const firstCard = await page.$(".participant-card");
    await firstCard?.click();

    const firstCheckbox = await page.$('input[name="participant"]');
    expect(await firstCheckbox?.isChecked()).toBe(false);

    // Click again to reselect
    await firstCard?.click();
    expect(await firstCheckbox?.isChecked()).toBe(true);
  });

  test("meeting list renders with mock data", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector("#meeting-list .font-semibold");

    const titles = await page.$$eval(
      "#meeting-list .font-semibold",
      (els) => els.map((e) => e.textContent)
    );
    expect(titles.length).toBe(2);
    expect(titles[0]).toContain("גן עדן");
    expect(titles[1]).toContain("הנחש");
  });

  test("first meeting has resume button, others only view", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector("#meeting-list .font-semibold");

    const resumeButtons = await page.$$(".resume-btn");
    expect(resumeButtons.length).toBe(1);

    const viewButtons = await page.$$(".view-btn");
    expect(viewButtons.length).toBe(2);
  });

  test("new meeting form validates required fields", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector(".participant-card");

    // Submit without filling anything — browser validation should block
    const submitBtn = await page.$('button[type="submit"]');

    // Check title is required
    const titleInput = await page.$("#meeting-title");
    expect(await titleInput?.getAttribute("required")).toBe("");
  });

  test("shows error when no participants selected", async () => {
    await page.goto(mockServer.url);
    await page.waitForSelector(".participant-card");

    // Deselect all participants by clicking each card
    const cards = await page.$$(".participant-card");
    for (const card of cards) {
      // Each card starts checked; click to uncheck
      await card.click();
    }

    // Verify all are unchecked
    const anyChecked = await page.evaluate(() =>
      Array.from(document.querySelectorAll('input[name="participant"]')).some((cb) => (cb as HTMLInputElement).checked)
    );
    expect(anyChecked).toBe(false);

    // Fill required text fields
    await page.fill("#meeting-title", "Test");
    await page.fill("#opening-prompt", "Test prompt");

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for the error element to become visible
    await page.waitForFunction(() =>
      !document.getElementById("no-participants-error")?.classList.contains("hidden")
    , { timeout: 2000 });

    const isHidden = await page.evaluate(() =>
      document.getElementById("no-participants-error")?.classList.contains("hidden")
    );
    expect(isHidden).toBe(false);
  });

  test("landing page shows Hebrew font", async () => {
    await page.goto(mockServer.url);
    const fontFamily = await page.evaluate(() =>
      getComputedStyle(document.body).fontFamily
    );
    // Should contain one of our specified fonts
    expect(
      fontFamily.includes("David") ||
      fontFamily.includes("Narkisim") ||
      fontFamily.includes("Times New Roman") ||
      fontFamily.includes("serif")
    ).toBe(true);
  });
});

describe("empty state", () => {
  test("shows 'no meetings' message when list is empty", async () => {
    // Create a separate mock server with empty meetings
    const emptyMock = createMockServer({
      port: 4202,
      meetings: [],
    });

    try {
      const emptyPage = await browser.newPage();
      await emptyPage.goto(emptyMock.url);
      await emptyPage.waitForSelector("#meeting-list");

      const text = await emptyPage.textContent("#meeting-list");
      expect(text).toContain("אין פגישות קודמות");
      await emptyPage.close();
    } finally {
      emptyMock.stop();
    }
  });
});
