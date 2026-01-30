/**
 * Playwright browser testing helper for RTL Editor
 *
 * Usage:
 *   bun run playwright-test.ts [options]
 *
 * Options:
 *   --url=<url>         URL to open (default: http://localhost:3000)
 *   --headless          Run in headless mode (default: headed)
 *   --screenshot=<path> Take a screenshot and save to path
 *   --wait=<ms>         Wait time before screenshot (default: 1000)
 *   --click=<selector>  Click on element matching selector
 *   --type=<text>       Type text (use with --selector)
 *   --selector=<sel>    Selector for type action
 *   --console           Log browser console messages
 *   --eval=<code>       Evaluate JavaScript in the browser
 */

import { chromium, type Page, type Browser } from 'playwright';

interface Options {
  url: string;
  headless: boolean;
  screenshot?: string;
  wait: number;
  click?: string;
  type?: string;
  selector?: string;
  console: boolean;
  eval?: string;
}

function parseArgs(): Options {
  const args = process.argv.slice(2);
  const options: Options = {
    url: 'http://localhost:3000',
    headless: false,
    wait: 1000,
    console: false,
  };

  for (const arg of args) {
    if (arg.startsWith('--url=')) {
      options.url = arg.slice(6);
    } else if (arg === '--headless') {
      options.headless = true;
    } else if (arg.startsWith('--screenshot=')) {
      options.screenshot = arg.slice(13);
    } else if (arg.startsWith('--wait=')) {
      options.wait = parseInt(arg.slice(7), 10);
    } else if (arg.startsWith('--click=')) {
      options.click = arg.slice(8);
    } else if (arg.startsWith('--type=')) {
      options.type = arg.slice(7);
    } else if (arg.startsWith('--selector=')) {
      options.selector = arg.slice(11);
    } else if (arg === '--console') {
      options.console = true;
    } else if (arg.startsWith('--eval=')) {
      options.eval = arg.slice(7);
    }
  }

  return options;
}

async function main() {
  const options = parseArgs();

  console.log(`Opening browser (headless: ${options.headless})...`);
  const browser: Browser = await chromium.launch({
    headless: options.headless,
    slowMo: options.headless ? 0 : 100, // Slow down for visibility in headed mode
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  const page: Page = await context.newPage();

  // Set up console logging if requested
  if (options.console) {
    page.on('console', msg => {
      console.log(`[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`);
    });
    page.on('pageerror', err => {
      console.error(`[BROWSER ERROR] ${err.message}`);
    });
  }

  try {
    console.log(`Navigating to ${options.url}...`);
    await page.goto(options.url, { waitUntil: 'networkidle' });

    // Execute click if specified
    if (options.click) {
      console.log(`Clicking: ${options.click}`);
      await page.click(options.click);
      await page.waitForTimeout(500);
    }

    // Execute type if specified
    if (options.type && options.selector) {
      console.log(`Typing "${options.type}" into ${options.selector}`);
      await page.fill(options.selector, options.type);
    }

    // Execute eval if specified
    if (options.eval) {
      console.log(`Evaluating: ${options.eval}`);
      const result = await page.evaluate(options.eval);
      console.log('Result:', result);
    }

    // Wait before screenshot
    if (options.wait > 0) {
      console.log(`Waiting ${options.wait}ms...`);
      await page.waitForTimeout(options.wait);
    }

    // Take screenshot if requested
    if (options.screenshot) {
      console.log(`Taking screenshot: ${options.screenshot}`);
      await page.screenshot({ path: options.screenshot, fullPage: true });
      console.log(`Screenshot saved to ${options.screenshot}`);
    }

    // If not headless and no screenshot, keep browser open for inspection
    if (!options.headless && !options.screenshot) {
      console.log('Browser is open. Press Ctrl+C to close.');
      await new Promise(() => {}); // Keep running until killed
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (options.headless || options.screenshot) {
      await browser.close();
    }
  }
}

main();
