/**
 * playwright-test.ts — Playwright CLI helper for browser debugging.
 *
 * Quick-start usage:
 *   bun run playwright-test.ts --url=http://localhost:4100
 *   bun run playwright-test.ts --url=http://localhost:4100 --screenshot=debug.png
 *   bun run playwright-test.ts --url=http://localhost:4100 --console
 *   bun run playwright-test.ts --url=http://localhost:4100 --click=".start-meeting-btn"
 *   bun run playwright-test.ts --url=http://localhost:4100 --eval="document.title"
 *   bun run playwright-test.ts --url=http://localhost:4100 --headless --screenshot=test.png
 */

import { chromium } from "playwright";

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function getArg(name: string): string | undefined {
  const prefix = `--${name}=`;
  const arg = process.argv.find(a => a.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : undefined;
}

function hasFlag(name: string): boolean {
  return process.argv.includes(`--${name}`);
}

const url = getArg("url") || "http://localhost:4100";
const headless = hasFlag("headless");
const screenshotPath = getArg("screenshot");
const waitMs = parseInt(getArg("wait") || "1000", 10);
const clickSelector = getArg("click");
const typeText = getArg("type");
const typeSelector = getArg("selector");
const logConsole = hasFlag("console");
const evalCode = getArg("eval");

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Opening ${url} (headless: ${headless})`);

  const browser = await chromium.launch({
    headless,
    slowMo: headless ? 0 : 100,
  });

  const page = await browser.newPage();

  // Console logging
  if (logConsole) {
    page.on("console", msg => {
      const type = msg.type();
      const text = msg.text();
      console.log(`[browser:${type}] ${text}`);
    });
  }

  // Navigate
  await page.goto(url, { waitUntil: "networkidle" });
  console.log(`Page loaded: ${await page.title()}`);

  // Wait
  if (waitMs > 0) {
    await page.waitForTimeout(waitMs);
  }

  // Click
  if (clickSelector) {
    console.log(`Clicking: ${clickSelector}`);
    await page.click(clickSelector);
    await page.waitForTimeout(500);
  }

  // Type
  if (typeText && typeSelector) {
    console.log(`Typing "${typeText}" into ${typeSelector}`);
    await page.fill(typeSelector, typeText);
  }

  // Eval
  if (evalCode) {
    console.log(`Evaluating: ${evalCode}`);
    const result = await page.evaluate(evalCode);
    console.log(`Result:`, result);
  }

  // Screenshot
  if (screenshotPath) {
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);
  }

  // Keep open in headed mode if no specific actions requested
  if (!headless && !screenshotPath && !evalCode) {
    console.log("Browser is open. Press Ctrl+C to close.");
    await new Promise(() => {}); // Keep running until killed
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
