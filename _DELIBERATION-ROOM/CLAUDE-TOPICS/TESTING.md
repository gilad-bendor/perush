# Testing Guidelines

> **Spin-out from `CLAUDE.md`.** Read when writing or debugging tests.

**Mandatory rule: every implementation task must be accompanied by tests.** Code without tests is incomplete code.

## Running Tests

**Always capture full output to a temp file** so failure analysis doesn't require re-running the suite:

```bash
TMP=$(mktemp /tmp/bun-test.XXXXX); bun test 2>&1 | tee "$TMP" | tail -5; echo "Full output: $TMP"
```

This gives an inline summary (pass/fail counts) and saves the full output for immediate `Read` if failures need investigation. **Never re-run the test suite just to try a different grep pattern** — read the temp file instead.

## Unit Tests (`bun:test`)

Test each module in isolation. Use the stub SDK (see below) to avoid API calls in tests.

**What to test per module**:

1. **`types.ts`**: Zod schema validation — valid inputs pass, invalid inputs fail with expected errors. `FormattedTime` create/parse round-trip. Type utilities.
2. **`config.ts`**: `getClaudeProjectDir()` path derivation for various CWDs. Config value types and defaults.
3. **`meetings-db.ts`**: Meeting CRUD via git branches. Atomic file writes. Meeting listing from branches. Reading ended meetings via `git show`. Worktree creation/removal. Cycle truncation for rollback.
4. **`session-manager.ts`**: Session creation (via stub). Message feeding and assessment extraction. Speech streaming. Session recovery after simulated crash. Move+symlink capture. Template marker resolution (includes, variables, iterators, computed markers). Frontmatter parsing.
5. **`orchestrator.ts`**: Full cycle with stub SDK — assessment → selection → speech. Attention flag mechanics. Phase transitions. Graceful shutdown. Director timeout handling.
6. **`server.ts`**: WebSocket message routing. HTTP endpoint responses. Reconnection/sync behavior.

**Test patterns**:
```typescript
import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { createStubSDK } from "./stub-sdk";

describe("session-manager", () => {
  test("extractAssessment parses valid JSON from agent response", () => {
    // ...
  });

  test("extractAssessment throws on malformed response", () => {
    // ...
  });
});
```

## E2E Tests (Playwright)

Located in `tests/e2e/`. Use `mock-ws-server.ts` to replay canned WebSocket event sequences — this avoids API costs and makes tests deterministic.

**What to test**:
1. **Landing page**: Meeting creation form, participant selection toggles, meeting list rendering, empty state.
2. **Conversation**: Message rendering, RTL layout, streaming text appending, phase indicator updates, speaker color-coding.
3. **Agent panel**: Tab switching, assessment display, importance badges, collapse/expand.
4. **Interactions**: Attention button states, rollback dialog, vibe bar transitions, Director input submission.

## Stub Agent SDK

`src/stub-sdk.ts` provides a **drop-in replacement for the Agent SDK** with the same interface — but the caller explicitly provides the expected response (as YAML or structured data) within the query prompt itself.

**How it works**:

1. The stub implements the same `query()` interface as the real Agent SDK — returning an async iterable of messages with the same type signatures (`system/init`, `assistant`, `result`, etc.).
2. When calling `query()`, the prompt includes a YAML block that specifies the expected response:
   ```
   הודעה חדשה מ-milo: ...content...
   מה ההערכה שלך?

   ---stub-response---
   selfImportance: 7
   humanImportance: 4
   summary: "יש כאן בעיה מילונית חמורה עם המילה 'נחש'"
   ---end-stub-response---
   ```
3. The stub parses the YAML between the markers and returns it as if the AI-Agent had produced that response — with proper message type wrapping, session ID generation, and optional streaming simulation.
4. For speech responses, the stub supports multi-chunk streaming with configurable delay between chunks.

**Activation**: Controlled by a config flag in `src/config.ts` (`USE_STUB_SDK`). When `true`, the session manager instantiates the stub instead of the real SDK. The orchestrator and all other code are unaware of the difference — the interface is identical.

**The stub must be maintained alongside the real SDK interface.** When the real SDK interface changes (new message types, new fields), the stub must be updated to match.

```typescript
// Usage in tests:
import { createStubSDK } from "./stub-sdk";

const sdk = createStubSDK();
const query = sdk.query({
  prompt: `...actual prompt...\n\n---stub-response---\nselfImportance: 8\nhumanImportance: 3\nsummary: "test"\n---end-stub-response---`,
  options: { model: "claude-opus-4-6" }
});

for await (const msg of query) {
  // Same message types as the real SDK
}
```

## Testing & Debugging with Playwright

The project includes `playwright-test.ts` for browser automation and debugging. Playwright is the **primary tool for investigating visual/UI bugs** — especially RTL layout, streaming text rendering, and WebSocket-driven UI updates.

### Quick-start CLI usage

```bash
# Open browser and keep it open for inspection (headed mode)
bun run playwright-test.ts --url=http://localhost:4100

# Take a screenshot
bun run playwright-test.ts --url=http://localhost:4100 --screenshot=debug.png

# Log browser console messages
bun run playwright-test.ts --url=http://localhost:4100 --console

# Click on an element
bun run playwright-test.ts --url=http://localhost:4100 --click=".start-meeting-btn"

# Evaluate JavaScript in the browser
bun run playwright-test.ts --url=http://localhost:4100 --eval="document.querySelector('.conversation-feed').children.length"

# Headless mode (for automated checks)
bun run playwright-test.ts --url=http://localhost:4100 --headless --screenshot=test.png
```

### CLI Options
- `--url=<url>` - URL to open (default: http://localhost:4100)
- `--headless` - Run without visible browser window
- `--screenshot=<path>` - Save screenshot to file
- `--wait=<ms>` - Wait time before screenshot (default: 1000)
- `--click=<selector>` - Click element matching CSS selector
- `--type=<text>` - Type text (use with --selector)
- `--selector=<sel>` - Selector for type action
- `--console` - Log browser console messages
- `--eval=<code>` - Execute JavaScript in browser context

### Writing custom Playwright diagnostic scripts

For complex visual bugs (RTL layout, streaming text, WebSocket state, etc.), write a **custom TypeScript Playwright script** and run it with `bun run <script.ts>`. This is much more powerful than the CLI flags above.

**Prerequisites:** The dev server must be running (`bun run dev-model-haiku` on port 4100).

**Key patterns for custom scripts:**

1. **Waiting for WebSocket events** — the deliberation UI is event-driven:
   ```js
   await page.waitForSelector('.message[data-speaker="milo"]');
   await page.waitForSelector('.vibe-bar.human-turn');
   await page.waitForFunction(() => {
     const streaming = document.querySelector('.message.streaming');
     return streaming && streaming.textContent.length > 100;
   });
   ```

2. **Submitting human input**:
   ```js
   await page.fill('.human-input textarea', 'הנה נקודה מעניינת לגבי הנחש...');
   await page.click('.human-input .submit-btn');
   ```

3. **Inspecting process labels** (expandable traces per agent per interaction):
   ```js
   await page.click('.process-label');
   const content = await page.evaluate(() => {
     return document.querySelector('.process-label-content')?.textContent;
   });
   ```

4. **Headed mode** — launches a real visible Chrome window:
   ```ts
   const browser = await chromium.launch({ headless: false, slowMo: 200 });
   ```

### Useful CSS Selectors for Debugging

- `.deliberation-room` - Main layout container
- `.conversation-feed` - Scrolling conversation area
- `.message` - Individual conversation message
- `.message[data-speaker="milo"]` - Messages by specific Participant
- `.message.streaming` - Currently streaming message
- `.vibe-bar` - Vibe/status bar
- `.vibe-bar.human-turn` - Vibe bar in "Director's turn" state
- `.human-input` - Director input area
- `.human-input textarea` - The actual textarea
- `.process-label` - Expandable process trace label
- `.landing-page` - Meeting creation/resume page
- `.meeting-list` - Previous meetings list
- `.participant-card` - Participant selection toggle card (landing page)
- `.participant-card.selected` - Selected participant card
- `.attention-btn` - Attention button in vibe bar
- `.attention-btn.activated` - Attention button after click (amber fill, disabled)
- `.rollback-icon` - Per-message rollback icon (hover-visible on human messages)
- `.rollback-modal` - Rollback confirmation dialog
- `.rollback-modal .preview` - The selected message preview in the dialog
- `.message.editing` - Human message in editable state (post-rollback)
- `.message.faded` - Messages after rollback target (opacity: 0.3 during confirmation)
- `.view-only-banner` - Persistent banner in view-only mode

### Known RTL quirks

- **CSS Logical Properties are essential**: Physical `left`/`right` will break in RTL. Always use logical properties.
- **Grid column order**: CSS Grid with `dir="rtl"` automatically flips column order. This is correct behavior — don't fight it.
- **Mixed bidi text**: Messages with both Hebrew and English need `unicode-bidi: plaintext` to render correctly.
- **Font fallback**: Hebrew content uses `'David', 'Narkisim', 'Times New Roman', serif`. David and Narkisim are not standard macOS fonts — Playwright's Chromium will fall back to Times New Roman.

### Deliberation-specific testing challenges

- **Timing**: Messages arrive at unpredictable times via WebSocket. Tests must use `waitForSelector`/`waitForFunction` rather than fixed delays.
- **Streaming text**: Verify that streaming chunks append correctly, maintain RTL direction, and scroll properly.
- **State transitions**: The UI cycles through phases (assessing → selecting → speaking → human-turn). Tests should verify that phase transitions update the UI correctly.
- **Mock server for frontend testing**: Use `tests/e2e/mock-ws-server.ts` — a mock WebSocket server that replays canned event sequences. The stub SDK handles the backend side; the mock WS server handles the frontend side.
