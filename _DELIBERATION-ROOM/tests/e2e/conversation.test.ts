/**
 * meetings-db.test.ts — E2E tests for the live deliberation UI.
 *
 * Uses Playwright with a mock WebSocket server for deterministic testing.
 * Tests streaming, RTL, phase transitions, agent panel, vibe bar.
 */

import { describe, test, expect, beforeAll, afterAll, afterEach } from "bun:test";
import { chromium, type Browser, type Page } from "playwright";
import { createMockServer } from "./mock-ws-server";

let browser: Browser;
let page: Page;
let mockServer: ReturnType<typeof createMockServer>;

// A sync message that transitions to deliberation view
const syncMessage = {
  type: "sync",
  meeting: {
    meetingId: "test-conv-1",
    mode: "Perush-Development",
    title: "Test Deliberation",
    openingPrompt: "נדון בפסוק בראשית א:א",
    participants: ["milo", "archi"],
    cycles: [],
    startedAt: "2026-02-27 14:30:00 (1772148600000)",
    sessionIds: { milo: "s1", archi: "s2", manager: "s3" },
  },
  currentPhase: "idle",
};

// A sync with existing cycles
const syncWithCycles = {
  type: "sync",
  meeting: {
    ...syncMessage.meeting,
    cycles: [
      {
        cycleNumber: 1,
        speech: {
          speaker: "milo",
          content: "מנקודת מבט מילונית, המילה בראשית מורכבת מ-בְּ+רֵאשִׁית.",
          timestamp: "2026-02-27 14:31:00 (1772148660000)",
        },
        assessments: {
          archi: {
            agent: "archi",
            text: "אני: 6\nנקודה מעניינת מבחינת מבנה",
          },
        },
        managerDecision: { nextSpeaker: "Milo", vibe: "הדיון מתחיל להתפתח." },
      },
      {
        cycleNumber: 2,
        speech: {
          speaker: "archi",
          content: "מבחינה מבנית, הפסוק הזה מהווה כותרת לכל סיפור הבריאה.",
          timestamp: "2026-02-27 14:32:00 (1772148720000)",
        },
        assessments: {
          milo: {
            agent: "milo",
            text: "אני: 3\nמסכים, אך יש לדייק במילון",
          },
        },
        managerDecision: { nextSpeaker: "Director", vibe: "הגיע הזמן לשמוע את המנחה." },
      },
    ],
  },
  currentPhase: "idle",
};

/** URL for the test meeting (navigated to instead of root). */
const meetingUrl = (server: ReturnType<typeof createMockServer>) =>
  `${server.url}/meeting/test-conv-1`;

beforeAll(async () => {
  mockServer = createMockServer({
    port: 4203,
    onMessageEvents: {
      "join-meeting": [{ message: syncMessage }],
    },
  });

  browser = await chromium.launch({ headless: true });
});

afterEach(async () => {
  try {
    if (page && !page.isClosed()) {
      await page.close();
    }
  } catch {
    // Page may already be closed by test cleanup or browser context failure
  }
});

afterAll(async () => {
  await browser?.close();
  mockServer?.stop();
});

describe("deliberation UI", () => {
  test("join-meeting transitions from landing to deliberation", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));

    // Wait for deliberation page to appear
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    // Landing page should be hidden
    const landingHidden = await page.evaluate(() =>
      document.getElementById("landing-page")?.classList.contains("hidden")
    );
    expect(landingHidden).toBe(true);
  });

  test("opening prompt renders as first message", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    const messages = await page.$$(".message");
    expect(messages.length).toBeGreaterThanOrEqual(1);

    const firstContent = await messages[0].textContent();
    expect(firstContent).toContain("נדון בפסוק בראשית א:א");
  });

  test("messages have RTL direction", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector(".message", { timeout: 3000 });

    const dir = await page.evaluate(() => {
      const msg = document.querySelector(".message");
      return msg ? getComputedStyle(msg).direction : null;
    });
    expect(dir).toBe("rtl");
  });

  test("vibe bar shows phase indicator", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    const phaseText = await page.textContent("#vibe-phase");
    expect(phaseText).toBeTruthy();
  });

  test("back button is visible during deliberation", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    const backBtn = await page.$("#back-to-landing");
    const isHidden = await backBtn?.evaluate((el) =>
      el.classList.contains("hidden")
    );
    expect(isHidden).toBe(false);
  });

  test("agent panel is removed (replaced by process labels)", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    const panelExists = await page.evaluate(() =>
      document.querySelector(".agent-panel") !== null
    );
    expect(panelExists).toBe(false);

    const toggleExists = await page.evaluate(() =>
      document.getElementById("panel-toggle") !== null
    );
    expect(toggleExists).toBe(false);
  });

  test("human input is disabled when not human-turn", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    const disabled = await page.evaluate(() =>
      (document.getElementById("human-input-textarea") as HTMLTextAreaElement)?.disabled
    );
    expect(disabled).toBe(true);
  });

  test("speech message from server renders in conversation", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    // Send a speech from mock server
    mockServer.broadcast({
      type: "speech",
      speaker: "milo",
      content: "הערה חדשה על הפסוק.",
      timestamp: "2026-02-27 15:00:00 (1772150400000)",
    });

    // Wait for the message to appear
    await page.waitForFunction(() =>
      document.querySelectorAll(".message").length >= 2
    , { timeout: 3000 });

    const messages = await page.$$(".message");
    const lastContent = await messages[messages.length - 1].textContent();
    expect(lastContent).toContain("הערה חדשה על הפסוק");
  });

  test("streaming chunks append to message", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    // Send chunks
    mockServer.broadcast({ type: "speech-chunk", speaker: "archi", delta: "חלק " });
    mockServer.broadcast({ type: "speech-chunk", speaker: "archi", delta: "ראשון " });
    mockServer.broadcast({ type: "speech-chunk", speaker: "archi", delta: "של הודעה" });

    // Wait for streaming message
    await page.waitForSelector(".message.streaming", { timeout: 3000 });

    const streamingContent = await page.evaluate(() =>
      document.querySelector(".message.streaming .message-content")?.textContent
    );
    expect(streamingContent).toContain("חלק ראשון של הודעה");

    // Finalize
    mockServer.broadcast({ type: "speech-done", speaker: "archi" });

    await page.waitForFunction(() =>
      !document.querySelector(".message.streaming")
    , { timeout: 3000 });
  });

  test("phase change to human-turn enables input", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    // Change phase to human-turn
    mockServer.broadcast({ type: "phase", phase: "human-turn" });
    mockServer.broadcast({ type: "your-turn" });

    await page.waitForFunction(() =>
      !(document.getElementById("human-input-textarea") as HTMLTextAreaElement)?.disabled
    , { timeout: 3000 });

    const disabled = await page.evaluate(() =>
      (document.getElementById("human-input-textarea") as HTMLTextAreaElement)?.disabled
    );
    expect(disabled).toBe(false);
  });

  test("vibe bar updates on vibe message", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    mockServer.broadcast({
      type: "vibe",
      vibe: "הדיון מתעמק — נראה שמתגבשת הסכמה.",
      nextSpeaker: "kashia",
    });

    await page.waitForFunction(() =>
      document.getElementById("vibe-text")?.textContent?.includes("מתעמק")
    , { timeout: 3000 });

    const vibeText = await page.textContent("#vibe-text");
    expect(vibeText).toContain("מתעמק");
  });

  test("error message renders in conversation", async () => {
    page = await browser.newPage();
    await page.goto(meetingUrl(mockServer));
    await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

    mockServer.broadcast({ type: "error", message: "שגיאה בהערכה" });

    await page.waitForFunction(() => {
      const divs = document.querySelectorAll("#conversation-messages > div");
      return Array.from(divs).some((d) => d.textContent?.includes("שגיאה בהערכה"));
    }, { timeout: 3000 });
  });
});

describe("sync with existing cycles", () => {
  test("renders all cycle messages from sync", async () => {
    const cyclesMock = createMockServer({
      port: 4204,
      onMessageEvents: {
        "join-meeting": [{ message: syncWithCycles }],
      },
    });

    try {
      page = await browser.newPage();
      await page.goto(`${cyclesMock.url}/meeting/test-conv-1`);
      await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

      // Should have 3 messages: opening + 2 cycle speeches
      await page.waitForFunction(() =>
        document.querySelectorAll(".message").length >= 3
      , { timeout: 3000 });

      const messages = await page.$$(".message");
      expect(messages.length).toBe(3);

      // First message: opening prompt from human
      const firstSpeaker = await messages[0].getAttribute("data-speaker");
      expect(firstSpeaker).toBe("human");

      // Second: milo's speech
      const secondSpeaker = await messages[1].getAttribute("data-speaker");
      expect(secondSpeaker).toBe("milo");

      // Third: archi's speech
      const thirdSpeaker = await messages[2].getAttribute("data-speaker");
      expect(thirdSpeaker).toBe("archi");
    } finally {
      // Close page before stopping server to avoid page.close() hanging in afterEach
      // (Bun's server.stop(true) severs the WS, leaving the page in a state where close() blocks)
      if (page && !page.isClosed()) await page.close();
      cyclesMock.stop();
    }
  });

  test("vibe shows last cycle decision", async () => {
    const cyclesMock = createMockServer({
      port: 4205,
      onMessageEvents: {
        "join-meeting": [{ message: syncWithCycles }],
      },
    });

    try {
      page = await browser.newPage();
      await page.goto(`${cyclesMock.url}/meeting/test-conv-1`);
      await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

      const vibeText = await page.textContent("#vibe-text");
      expect(vibeText).toContain("הגיע הזמן לשמוע את המנחה");
    } finally {
      if (page && !page.isClosed()) await page.close();
      cyclesMock.stop();
    }
  });
});

describe("view-only mode", () => {
  test("hides human input in read-only mode", async () => {
    const viewOnlySync = { ...syncWithCycles, readOnly: true };
    const viewMock = createMockServer({
      port: 4206,
      onMessageEvents: {
        "join-meeting": [{ message: viewOnlySync }],
      },
    });

    try {
      page = await browser.newPage();
      await page.goto(`${viewMock.url}/meeting/test-conv-1`);
      await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 3000 });

      // Human input should be hidden
      const inputHidden = await page.evaluate(() =>
        document.querySelector(".human-input")?.classList.contains("hidden")
      );
      expect(inputHidden).toBe(true);

      // View-only banner should be visible
      const bannerHidden = await page.evaluate(() =>
        document.getElementById("view-only-banner")?.classList.contains("hidden")
      );
      expect(bannerHidden).toBe(false);
    } finally {
      if (page && !page.isClosed()) await page.close();
      viewMock.stop();
    }
  });
});
