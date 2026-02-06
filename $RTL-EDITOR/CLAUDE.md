# Hebrew Markdown RTL Editor

A TypeScript Bun web-server project for editing Hebrew Markdown files with browser-based interface.

## Features

- File tree browser in left panel
- Tabbed Markdown editor in right panel
- RTL layout support for `*.rtl.md` files, or `*.md` files whose first relevant line (line with a letter) contains Hebrew but not English
- Real-time file editing and saving
- Full server/client sync: every change in the client (UI) is soon saved to the server,
   and the client periodically polls changes from the server.

## Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build
```

## Project Structure

- `src/server.ts` - Main Bun web server
- `public/` - Static frontend assets
- `public/index.html` - Main interface
- `public/src/app.js` - Frontend entry point (imports markdown-editor.js)
- `public/src/markdown-editor.js` - Main editor class with CodeMirror integration
- `public/src/tab-data.js` - Tab state management
- `public/style.css` - Styling with RTL support

## API Endpoin
- `GET /api/files` - List all .md files in configured directory
- `GET /api/file/:path` - Read file content
- `POST /api/file/:path` - Save file content

## Configuration

Set `MARKDOWN_DIR` environment variable to specify the directory containing Markdown files (defaults to `./markdown`).

## Architecture Details

### RTL/LTR Detection
- Files ending in `.rtl.md` are always RTL
- Other `.md` files: check first non-empty line - RTL if contains Hebrew but not English
- Detection happens in `MarkdownEditor.isRtlFile()` in `markdown-editor.js`

### CSS Patterns for RTL vs LTR
- Each editor tab gets a wrapper div with class `editor-wrapper`
- RTL files also get the `rtl` class: `<div class="editor-wrapper rtl">`
- Use `.editor-wrapper.rtl` selector for Hebrew-specific styles
- Use `.editor-wrapper:not(.rtl)` selector for English-specific styles
- Example pattern for direction-aware styling:
  ```css
  .editor-wrapper.rtl .some-element { /* Hebrew styles */ }
  .editor-wrapper:not(.rtl) .some-element { /* English styles */ }
  ```

### CodeMirror Structure
The editor uses CodeMirror 6. Key CSS classes:
- `.cm-editor` - Root editor element
- `.cm-scroller` - Scrollable container
- `.cm-content` - Contains all lines (has base padding)
- `.cm-line` - Individual text lines
- `.cm-layer` - Overlay layers for cursor and selection
- `.cm-selectionLayer` - Selection highlight layer
- `.cm-cursorLayer` - Cursor layer

## Testing & Debugging

### Test Files
Use these files for testing (in `test-files/` directory):
- `test-files/_TEST-ENGLISH-LTR.md` - English LTR test file
- `test-files/_TEST-HEBREW-RTL.rtl.md` - Hebrew RTL test file

### Manual Testing
1. Start server: `bun run dev`
2. Open browser at http://localhost:4000/
3. Click on test files in the file tree to open them
4. Test with both English and Hebrew files

### Debugging with Playwright

The project includes `playwright-test.ts` for browser automation and debugging.
Playwright is the **primary tool for investigating visual/UI bugs** in this editor.

#### Quick-start CLI usage

```bash
# Open browser and keep it open for inspection (headed mode)
bun run playwright-test.ts --url=http://localhost:4000

# Take a screenshot
bun run playwright-test.ts --url=http://localhost:4000 --screenshot=debug.png

# Log browser console messages
bun run playwright-test.ts --url=http://localhost:4000 --console

# Click on a file in the tree to open it
bun run playwright-test.ts --url=http://localhost:4000 --click=".file-item.file"

# Evaluate JavaScript in the browser
bun run playwright-test.ts --url=http://localhost:4000 --eval="document.querySelector('.cm-content').innerText"

# Headless mode (for CI or automated checks)
bun run playwright-test.ts --url=http://localhost:4000 --headless --screenshot=test.png
```

#### CLI Options
- `--url=<url>` - URL to open (default: http://localhost:3000, use http://localhost:4000 for this project)
- `--headless` - Run without visible browser window
- `--screenshot=<path>` - Save screenshot to file
- `--wait=<ms>` - Wait time before screenshot (default: 1000)
- `--click=<selector>` - Click element matching CSS selector
- `--type=<text>` - Type text (use with --selector)
- `--selector=<sel>` - Selector for type action
- `--console` - Log browser console messages
- `--eval=<code>` - Execute JavaScript in browser context

#### Writing custom Playwright diagnostic scripts

For complex visual bugs (cursor positioning, RTL layout, selection behavior, etc.),
write a **custom TypeScript Playwright script** and run it with `bun run <script.ts>`.
This is much more powerful than the CLI flags above.

**Prerequisites:** The dev server must be running (`bun run dev` on port 4000).

**Key patterns for custom scripts:**

1. **Accessing the EditorView** — `app.js` exposes the editor as `window._editor`:
   ```js
   const result = await page.evaluate(() => {
     const editor = window._editor;
     const tabData = editor.tabs.get(editor.activeTab);
     const view = tabData.editorView;  // This is the CodeMirror EditorView
     // Now you can call view.state, view.posAtCoords(), view.coordsAtPos(), etc.
   });
   ```
   NOTE: `cmView` is NOT accessible on the `.cm-editor` DOM element in Playwright's
   evaluate context. Always use `window._editor` instead.

2. **Opening a file programmatically** — the file tree starts with directories collapsed:
   ```js
   // Expand all directories first
   await page.evaluate(() => {
     document.querySelectorAll('.file-children').forEach(el => {
       (el as HTMLElement).style.display = 'block';
     });
   });
   // Then click the file
   const file = page.locator('.file-item.file', { hasText: 'FILENAME' });
   await file.scrollIntoViewIfNeeded();
   await file.click();
   ```

3. **Taking screenshots with visual markers** (useful for click-vs-cursor analysis):
   ```js
   await page.evaluate(({x, y}) => {
     const marker = document.createElement('div');
     marker.style.cssText = `position:fixed; left:${x}px; top:${y-15}px; width:2px; height:30px; background:red; z-index:99999; pointer-events:none;`;
     document.body.appendChild(marker);
   }, { x: clickX, y: clickY });
   await page.screenshot({ path: 'debug.png' });
   ```

4. **Headed mode** — launches a real visible Chrome window for manual inspection:
   ```ts
   const browser = await chromium.launch({ headless: false, slowMo: 200 });
   ```
   Use `await page.waitForTimeout(30000)` to keep it open for observation.

5. **Measuring cursor accuracy** — compare click position vs cursor DOM position:
   ```js
   await page.mouse.click(x, y);
   const cursor = await page.evaluate(() => {
     const el = document.querySelector('.editor-wrapper.active .cm-cursor');
     return el?.getBoundingClientRect().left;
   });
   console.log(`click=${x}, cursor=${cursor}, delta=${cursor - x}`);
   ```

#### Useful Selectors for Debugging
- `.file-tree` - File tree container
- `.file-item.file` - File entries in tree
- `.file-item.directory` - Directory entries in tree
- `.editor-wrapper` - Editor container (check for `.rtl` class)
- `.editor-wrapper.active` - Currently visible editor (use this to scope queries)
- `.cm-editor` - CodeMirror editor root
- `.cm-content` - Editor content area (has `direction: rtl` for RTL files)
- `.cm-line` - Individual text lines
- `.cm-cursor` - Cursor element (positioned absolutely within `.cm-cursorLayer`)
- `.cm-cursorLayer` - Cursor overlay layer (absolute, `direction: ltr`, starts at scroller left)
- `.cm-selectionLayer` - Selection highlight layer
- `.cm-gutters` - Line number gutter (`position: sticky`, always on the LEFT side)
- `.tab` - Tab buttons
- `.tab.active` - Currently active tab

### Known RTL quirks

- **Cursor layer uses LTR coordinates**: `.cm-cursorLayer` has `direction: ltr` even when content is `direction: rtl`. The cursor's CSS `left` is always relative to the scroller's left edge (which includes the gutter width of ~36px).
- **Gutter is always on the left**: Even for RTL files, the line-number gutter is on the left side. The content area starts after the gutter.
- **Short RTL lines and empty space**: RTL text is right-aligned within the `.cm-line` element. Clicking in the empty space to the LEFT of short text correctly places the cursor at end-of-line (the leftmost text position in RTL). This is expected CodeMirror behavior.
- **Previous cursor offset attempts**: There have been two prior attempts to fix RTL cursor positioning — a CSS `left: 0.5em` rule (removed, caused offset issues) and a commented-out `mouseup` handler in `markdown-editor.js` (lines ~226-258). See the comments in the code for details.
- **Font fallback**: RTL content uses `fontFamily: 'David', 'Narkisim', 'Times New Roman', serif`. David and Narkisim are not standard macOS fonts — Playwright's Chromium will likely fall back to Times New Roman, which may produce different character metrics than the user's browser.