/**
 * integration.test.ts — Full integration test.
 *
 * Starts the real server (with stub SDK), opens a browser, creates a meeting,
 * and verifies the full deliberation cycle: assess → select → speak → UI update.
 */

import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { chromium, type Browser, type Page } from "playwright";

let browser: Browser;
let page: Page;
let serverProc: ReturnType<typeof Bun.spawn>;
const PORT = 4100; // Matches SERVER_PORT in config.ts

beforeAll(async () => {
  // Kill any orphan server on the test port from a previous run
  try {
    Bun.spawnSync(["bash", "-c", `lsof -ti:${PORT} | xargs kill -9 2>/dev/null`]);
  } catch {}

  // Start the real server with stub SDK on a test port
  serverProc = Bun.spawn(
    ["bun", "run", "src/server.ts"],
    {
      env: {
        ...process.env,
        NODE_ENV: "test",  // Activates USE_STUB_SDK
        // Override port via a simple env var (we'll need to handle this)
      },
      stdout: "pipe",
      stderr: "pipe",
      cwd: import.meta.dir + "/../../",
    }
  );

  // Wait for server to be ready
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://localhost:${PORT}/api/agents`);
      if (res.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }

  if (!ready) {
    const stderr = serverProc.stderr instanceof ReadableStream
      ? await new Response(serverProc.stderr).text()
      : String(serverProc.stderr ?? "");
    throw new Error(`Server failed to start within 15s. stderr: ${stderr}`);
  }

  browser = await chromium.launch({ headless: true });
}, 30000);

afterAll(async () => {
  await page?.close();
  await browser?.close();
  serverProc?.kill();
  // Wait for process to exit
  try { await serverProc?.exited; } catch {}
});

describe("full integration (stub SDK)", () => {
  test("landing page loads and shows agents", async () => {
    page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}`);

    // Wait for agents to load
    await page.waitForSelector(".participant-card", { timeout: 5000 });

    const cards = await page.$$(".participant-card");
    expect(cards.length).toBeGreaterThanOrEqual(2); // At least milo and shalom

    // Check Hebrew names are rendered
    const text = await page.textContent("#participant-cards");
    expect(text).toContain("מיילו");
    expect(text).toContain("שלום");
  });

  test("create meeting and see opening prompt in conversation", async () => {
    page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}`);
    await page.waitForSelector(".participant-card", { timeout: 5000 });

    // Wait for WebSocket to be connected (app.js sets data-ws-ready on open)
    await page.waitForFunction(
      () => document.documentElement.dataset.wsReady === "true",
      { timeout: 5000 }
    );

    // Fill form (no opening prompt — it's entered on the meeting page)
    await page.fill("#meeting-title", "Integration Test");

    // Submit
    await page.click('button[type="submit"]');

    // Wait for deliberation page
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 10000 });

    // Human input should be enabled for the first prompt
    await page.waitForFunction(
      () => !(document.getElementById("human-input-textarea") as HTMLTextAreaElement).disabled,
      { timeout: 5000 }
    );

    // Type the first prompt
    await page.fill("#human-input-textarea", "נדון בפסוק בראשית א:א — בְּרֵאשִׁית בָּרָא אֱלֹהִים");
    await page.click("#human-submit-btn");

    // Should see the opening prompt as first message (rendered by first cycle)
    await page.waitForSelector(".message", { timeout: 5000 });

    const messages = await page.$$(".message");
    expect(messages.length).toBeGreaterThanOrEqual(1);

    // Wait a bit for the first cycle to complete (stub SDK is fast)
    await page.waitForFunction(() =>
      document.querySelectorAll(".message").length >= 2
    , { timeout: 15000 });

    // Should have at least 2 messages: opening + first agent speech
    const allMessages = await page.$$(".message");
    expect(allMessages.length).toBeGreaterThanOrEqual(2);

    // End the meeting
    await page.evaluate(() => {
      const textarea = document.getElementById("human-input-textarea") as HTMLTextAreaElement;
      textarea.disabled = false; // Force enable for test
      textarea.value = "/end";
    });
    await page.evaluate(() => {
      (document.getElementById("human-submit-btn") as HTMLButtonElement).disabled = false;
      (document.getElementById("human-submit-btn") as HTMLButtonElement).click();
    });

    // Wait for idle phase
    await page.waitForFunction(() =>
      document.getElementById("status-read-phase")?.textContent === "המתנה"
    , { timeout: 10000 });
  }, 30000);
});
