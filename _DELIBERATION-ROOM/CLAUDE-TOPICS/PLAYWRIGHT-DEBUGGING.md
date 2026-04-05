# Interactive Simulation & Debugging with Playwright

> **Spin-out from `CLAUDE.md`.** Read when asked to manually test the application, simulate a meeting flow, or debug UI/server issues via a browser.

This guide covers **ad-hoc interactive debugging** — launching the server, driving the UI through Playwright, and diagnosing problems. For automated E2E test patterns, see [TESTING.md](TESTING.md).

## Prerequisites

1. Dependencies installed: `bun install`
2. CSS built: `bun run build:css` (or use `bun run dev-model-haiku` which runs it automatically)
3. No other process on port 4100 (check with `lsof -i :4100`)

## Starting the Server

**Always use `USE_STUB_SDK=true` for simulation and debugging** — this avoids real API calls ($$$) and makes behavior deterministic. The stub SDK returns canned responses embedded in each prompt.

```bash
cd /path/to/perush/_DELIBERATION-ROOM
USE_STUB_SDK=true bun run dev-model-haiku # this will auto-kill any running server
```

See "Log File" in the main `CLAUDE.md` to learn how to view the app's logs

### Real SDK Mode

Only use the real SDK when specifically testing agent behavior (costs money):

```bash
bun run dev-model-haiku
```

If running inside a Claude Code session, the real SDK may fail with "Claude Code process exited with code 1" — the `SDK_ENV_VARS_TO_STRIP` cleanup in `real-sdk.ts` handles known env vars, but other environment conflicts may exist. The stub SDK does not have this limitation.

## Launching Playwright

### Inline Script (Recommended for Complex Flows)

Write a `bun -e` inline script for full control:

```bash
bun -e '
import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:4100", { waitUntil: "networkidle" });
  await page.screenshot({ path: "/tmp/screenshot.png", fullPage: true });
  // ... interact with the page ...
  await browser.close();
})();
'
```

### CLI Helper (Quick Checks)

```bash
# Screenshot
bun run playwright-test.ts --headless --screenshot=/tmp/debug.png

# Headed mode (visible browser, stays open)
bun run playwright-test.ts

# With console logging
bun run playwright-test.ts --headless --console --wait=5000
```

## Simulating a Full Meeting Flow

### Step 1: Start a New Meeting

```javascript
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto("http://localhost:4100", { waitUntil: "networkidle" });

// Fill the form
await page.fill("#meeting-title", "Debug Test");
await page.fill("#opening-prompt", "נדון בפסוק בראשית א:א");

// All participants are selected by default — submit
await page.click('button[type="submit"]');

// Wait for the deliberation page
await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 15000 });
await page.screenshot({ path: "/tmp/meeting-started.png", fullPage: true });
```

### Step 2: Resume an Existing Meeting

```javascript
await page.goto("http://localhost:4100", { waitUntil: "networkidle" });

// Click the first "המשך דיון" button
const resumeBtn = page.locator("button.resume-btn").first();
await resumeBtn.click();

// Wait for deliberation page
await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 15000 });
```

### Step 3: Wait for Deliberation Cycles

With the stub SDK, cycles run fast. Wait for messages to appear:

```javascript
// Wait for at least 2 messages (opening + first agent speech)
await page.waitForFunction(
  () => document.querySelectorAll(".message").length >= 2,
  { timeout: 15000 }
);
```

### Step 4: End the Meeting

The human input textarea is disabled except during `human-turn` phase. To send `/end` at any time, use a direct WebSocket message:

```javascript
await page.evaluate(() => {
  return new Promise((resolve) => {
    const ws = new WebSocket("ws://localhost:4100/ws");
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "command", command: "/end", messageId: "end-debug" }));
      setTimeout(() => { ws.close(); resolve(null); }, 2000);
    };
  });
});

// Wait for return to landing page
await page.waitForSelector("#landing-page:not(.hidden)", { timeout: 5000 });
```

### Step 5: View a Completed Meeting (Read-Only)

```javascript
const viewBtn = page.locator("button.view-btn").first();
await viewBtn.click();
await page.waitForSelector("#deliberation-page:not(.hidden)", { timeout: 5000 });

// Verify read-only banner is visible
const banner = await page.locator("#view-only-banner").isVisible();
// The human input should be hidden
```

## Debugging Techniques

### Capture Browser Console Messages

```javascript
const consoleMsgs = [];
page.on("console", msg => consoleMsgs.push(`[${msg.type()}] ${msg.text()}`));

// ... interact with the page ...

// Print collected messages
for (const msg of consoleMsgs) {
  console.log(msg);
}
```

The frontend logs every WebSocket message in grouped console entries: `[ WS server --> client HH:MM:SS.mmm <offset>ms <msgId> <type> ]`.

### Inspect DOM State

```javascript
// Count messages
const msgCount = await page.evaluate(
  () => document.querySelectorAll(".message").length
);

// Get current phase text
const phase = await page.textContent("#status-read-phase");

// Check if textarea is enabled
const disabled = await page.locator("#human-input-textarea").isDisabled();

// Read status-read text
const statusRead = await page.textContent("#status-read-text");

// Check which page is visible
const onDeliberation = await page.evaluate(
  () => !document.getElementById("deliberation-page")?.classList.contains("hidden")
);
```

### Send Arbitrary WebSocket Messages

For testing specific server responses without going through the UI:

```javascript
await page.evaluate((msg) => {
  return new Promise((resolve) => {
    const ws = new WebSocket("ws://localhost:4100/ws");
    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
      setTimeout(() => { ws.close(); resolve(null); }, 1000);
    };
  });
}, { type: "human-speech", content: "הנה הערה מהמנחה", messageId: "debug-1" });
```

### Read Server Logs

All server output is automatically written to a log file under `.logs/` (path shown at startup). Each line has the format:

```
2026-03-02T09:28:38.239Z [LOG] [C10] WS <<< start-meeting
```

The `[messageId]` prefix from `context.ts` is preserved. Key log patterns:

- `WS <<< <type>` — incoming client message
- `WS >>> (broadcast) <type> (<msgId>)` — outgoing broadcast
- `WS >-> (sendTo) <type> (<msgId>)` — outgoing targeted message
- `WS --- <type> done` — handler finished
- `[session-mgr] createSession START/DONE for <agentId>` — session lifecycle
- `[session-mgr] clearSessions` — sessions wiped (meeting end or recovery)

```bash
# Watch live logs while debugging (full, with YAML payloads)
./scripts/active-logs-full.sh -f

# Watch live logs, header lines only (no YAML payloads)
./scripts/active-logs-short.sh -f

# Watch for session issues
./scripts/active-logs-full.sh | grep '\[session-mgr\]'

# Watch for errors
./scripts/active-logs-full.sh | grep '\[ERROR\]'

# Watch WebSocket traffic
./scripts/active-logs-full.sh | grep 'WS ' | head -50
```

The log file survives even if the terminal is lost. If the log file is deleted while the server is running, it is recreated automatically on the next log line.

### Screenshots at Key Moments

Take screenshots before and after every interaction to build a visual timeline:

```javascript
await page.screenshot({ path: "/tmp/step1-before.png", fullPage: true });
await resumeBtn.click();
await page.waitForTimeout(3000);
await page.screenshot({ path: "/tmp/step2-after-click.png", fullPage: true });
```

Use the `Read` tool to view PNG screenshots — Claude Code can read images.

### Adding Debug Console.logs to Server Code

When server behavior is unclear, add temporary `console.log` statements to the relevant module (`session-manager.ts`, `orchestrator.ts`, `server.ts`), then restart the server. Bun picks up changes on restart — no build step needed. All `console.*` output is automatically captured in the log file — use `tail -f .logs/*.log` to watch new lines appear in real time.

Useful places to add logging:
- `session-manager.ts: createSession` — trace session creation and registry state
- `session-manager.ts: feedMessage` — trace which sessions are found/missing
- `orchestrator.ts: runCycle` — trace assessment and selection phases
- `server.ts: handleWsMessage` — trace incoming message handling

## Common Issues

### "No session found for \<agentId\>"

The session registry is empty when `feedMessage` is called. Possible causes:
- `clearSessions()` was called between session creation and the first cycle (check for premature meeting end or error-path cleanup)
- `createSession` threw before `sessionRegistry.set()` (check server logs for session creation errors)
- Real SDK: Claude Code child process exited before producing a `session_id` (use stub SDK instead)

### Page Doesn't Switch from Landing to Deliberation

The page switch happens when the frontend receives a `sync` message with meeting data. If the `sync` never arrives:
- Check that the WebSocket connection is established: `data-ws-ready="true"` on `<html>`
- Check server logs for errors in `resumeMeetingById` or `startMeeting`
- The meeting might have been in an error state — check for `error` type WS messages

### Textarea Is Disabled

The human input textarea is only enabled during `human-turn` phase. To send commands at other times, use the direct WebSocket approach shown above.

### Two Textareas Found (Strict Mode Violation)

The page has two textareas: `#opening-prompt` (landing page form) and `#human-input-textarea` (deliberation input). Always use the specific ID selector, not `textarea`.

### Meeting Already Active on Server

If a previous meeting wasn't ended cleanly, the server still thinks a meeting is active. New connections receive a `sync` message and jump to the deliberation view. To end it:

```javascript
await page.evaluate(() => {
  return new Promise((resolve) => {
    const ws = new WebSocket("ws://localhost:4100/ws");
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "command", command: "/end", messageId: "cleanup" }));
      setTimeout(() => { ws.close(); resolve(null); }, 2000);
    };
  });
});
await page.reload({ waitUntil: "networkidle" });
```

Or simply restart the server — sessions are lost on restart anyway.

### Stub SDK Deliberation Loop Runs Forever

With the stub SDK, the orchestrator always picks the same speaker and the loop never pauses for human turn. The loop will run indefinitely generating `"תגובת הסוכן."` messages. End the meeting via `/end` command when you've seen enough.
