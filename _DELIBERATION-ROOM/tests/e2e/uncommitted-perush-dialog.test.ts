/**
 * uncommitted-perush-dialog.test.ts — E2E tests for the dialog about uncommitted perush files
 * (before a meeting starts or resumes).
 *
 * Uses Playwright with a mock WebSocket server for deterministic testing.
 */

import { describe, test, expect, beforeAll, afterAll, beforeEach } from "../test-kit.ts";
import { chromium, type Browser, type Page } from "playwright";
import { setTimeout as sleep } from "node:timers/promises";
import { createMockServer } from "./mock-ws-server.ts";

const FILE_A = "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md";
const FILE_B = "נספחים-לפירוש/נספח.rtl.md";

const UNCOMMITTED_CHANGES = {
  type: "uncommitted-changes",
  messageId: "S1",
  context: "start",
  changes: [
    { path: FILE_A, status: " M" },
    { path: FILE_B, status: "??" },
  ],
  decisions: {},
  trackedPaths: ["פירוש/", "נספחים-לפירוש/"],
  trackedPathsSource: "src/config.ts (PERUSH_TRACKED_PATHS)",
};

let browser: Browser;
let page: Page;
let mockServer: ReturnType<typeof createMockServer>;

beforeAll(async () => {
  mockServer = createMockServer({
    port: 4203,
    onMessageEvents: {
      // Every start-meeting is answered with the dialog - so the test drives the client alone
      "start-meeting": [{ message: UNCOMMITTED_CHANGES }],
    },
  });
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
});

afterAll(async () => {
  await page?.close();
  await browser?.close();
  mockServer?.stop();
});

beforeEach(() => {
  mockServer.received.length = 0;
});

async function submitNewMeeting() {
  await page.goto(mockServer.url);
  await page.waitForSelector(".participant-card");
  await page.fill("#meeting-title", "בדיקה");
  await page.click('button[type="submit"]');
  await page.waitForSelector("#uncommitted-modal:not(.hidden)");
}

const startRequests = () => mockServer.received.filter(message => message.type === "start-meeting");

describe("uncommitted perush files dialog", () => {
  test("the landing page tells which folders are tracked, and where they are defined", async () => {
    await page.goto(mockServer.url);
    await page.waitForFunction(() => document.getElementById("perush-scope-note")!.textContent!.includes("config.ts"));
    const note = await page.textContent("#perush-scope-note");
    expect(note).toContain("פירוש/, נספחים-לפירוש/");
    expect(note).toContain("src/config.ts (PERUSH_TRACKED_PATHS)");
  });

  test("lists the files; 'continue' is enabled only when every file is decided - and sends the decisions", async () => {
    await submitNewMeeting();

    const paths = await page.$$eval(".uncommitted-file-path > bdi", elements => elements.map(element => element.textContent));
    expect(paths).toEqual([FILE_A, FILE_B]);
    const statuses = await page.$$eval(".uncommitted-file-status", elements => elements.map(element => element.textContent));
    expect(statuses).toEqual(["שונה", "חדש"]);
    expect(await page.textContent("#uncommitted-scope")).toContain("src/config.ts");
    expect(await page.isDisabled("#uncommitted-continue")).toBe(true);

    await page.check('input[name="uncommitted-0"][value="include"]');
    expect(await page.isDisabled("#uncommitted-continue")).toBe(true);
    await page.check('input[name="uncommitted-1"][value="ignore"]');
    expect(await page.isDisabled("#uncommitted-continue")).toBe(false);

    await page.click("#uncommitted-continue");
    await page.waitForFunction(() => document.getElementById("uncommitted-modal")!.classList.contains("hidden"));
    await sleep(100);
    const [first, second] = startRequests();
    expect(first.perushFileDecisions).toBeUndefined();
    expect(second).toMatchObject({ title: "בדיקה", perushFileDecisions: { [FILE_A]: "include", [FILE_B]: "ignore" } });
  });

  test("'all: part of the deliberation' decides every file", async () => {
    await submitNewMeeting();
    await page.click("#uncommitted-all-include");
    expect(await page.isChecked('input[name="uncommitted-0"][value="include"]')).toBe(true);
    expect(await page.isChecked('input[name="uncommitted-1"][value="include"]')).toBe(true);
    expect(await page.isDisabled("#uncommitted-continue")).toBe(false);
  });

  test("'recheck' asks again without decisions - and keeps the decisions made so far", async () => {
    await submitNewMeeting();
    await page.check('input[name="uncommitted-0"][value="ignore"]');

    await page.click("#uncommitted-recheck");
    await page.waitForFunction(() => document.querySelectorAll(".uncommitted-file").length === 2
        && !document.getElementById("uncommitted-modal")!.classList.contains("hidden"));
    await sleep(100);

    expect(startRequests().map(request => request.perushFileDecisions)).toEqual([undefined, undefined]);
    expect(await page.isChecked('input[name="uncommitted-0"][value="ignore"]')).toBe(true);
  });

  test("after a failed start, a dialog about resuming another meeting resumes that meeting - never re-sends the old start", async () => {
    await submitNewMeeting();
    await page.click("#uncommitted-all-include");
    await page.click("#uncommitted-continue");
    await page.waitForFunction(() => document.getElementById("uncommitted-modal")!.classList.contains("hidden"));

    // The start fails (e.g. the commit failed) - the error is shown on the landing page
    mockServer.broadcast({ type: "error", messageId: "S2", message: "the start failed" });
    await page.waitForFunction(() => document.getElementById("landing-error")!.textContent === "the start failed");
    expect(await page.isVisible("#landing-error")).toBe(true);

    // Then the server asks about resuming meeting X (e.g. after opening its URL)
    mockServer.broadcast({ ...UNCOMMITTED_CHANGES, messageId: "S3", context: "resume", meetingId: "2026-01-01--10-00--x" });
    await page.waitForSelector("#uncommitted-modal:not(.hidden)");
    expect(await page.isChecked('input[name="uncommitted-0"][value="include"]')).toBe(false);   // no stale decisions
    await page.click("#uncommitted-all-ignore");
    await page.click("#uncommitted-continue");
    await sleep(100);

    const last = mockServer.received.at(-1)!;
    expect(last).toMatchObject({ type: "resume-meeting", meetingId: "2026-01-01--10-00--x",
      perushFileDecisions: { [FILE_A]: "ignore", [FILE_B]: "ignore" } });
  });

  test("'cancel' closes the dialog and sends nothing", async () => {
    await submitNewMeeting();
    await page.click("#uncommitted-cancel");
    expect(await page.isHidden("#uncommitted-modal")).toBe(true);
    await sleep(100);
    expect(startRequests()).toHaveLength(1);
  });
});
