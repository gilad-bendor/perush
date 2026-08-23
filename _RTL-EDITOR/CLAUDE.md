# Hebrew Markdown RTL Editor

A TypeScript Bun web-server project for editing Hebrew Markdown files with browser-based interface.

## Features

- File tree browser in left panel
- Tabbed Markdown editor in right panel
- RTL layout support for `*.rtl.md` files, or `*.md` files whose first relevant line (line with a letter) contains Hebrew but not English
- Real-time file editing and saving
- Full server/client sync: every change in the client (UI) is soon saved to the server,
   and the client periodically polls changes from the server.
- Tabs can be reordered by dragging them, with the target gap marked while the drag is on
- Tabs load lazily - a file is fetched when its tab is first shown; a file that cannot be read
   leaves a read-only note in its tab rather than losing it
- Automatic table formatting: tables written in any of three formats are re-laid-out after
   every edit (see "Table formatting" below). `*.ai.md` / `*.ai.rtl.md` are exempt.
- Cmd+click (Ctrl+click off macOS) on a `[text](path)` link opens the linked file and moves the
   focus to it; a file that was not open yet gets its tab right after the linking one
- Ctrl+1 .. Ctrl+9 show the 1st .. 9th tab

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
- `public/src/tables.js` - Table parsing/formatting, shared by the browser and the server
- `public/src/links.js` - Markdown-link parsing/resolution, behind Cmd+click-to-open
- `public/style.css` - Styling with RTL support
- `tests/tables.test.ts` - Unit tests for `tables.js` (`bun test`)
- `tests/links.test.ts` - Unit tests for `links.js` (`bun test`)

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
- Detection happens in `isRtlFile()` in `tables.js`, which `MarkdownEditor.isRtlFile()` delegates to

### Table formatting

`public/src/tables.js` is the single source of truth for tables. It is plain ESM with no editor
dependency, so `markdown-editor.js` imports it in the browser and `server.ts` imports it in Bun -
which is what keeps both sides' idea of a table's layout identical.

Three input formats are recognised and all collapse to one canonical box-drawing form:

┌───────────────┬────────────────┬──────────────────────────────────────────────────┐
│ format        │ looks like     │ where it comes from                              │
├───────────────┼────────────────┼──────────────────────────────────────────────────┤
│ NICE          │ `┌──┬──┐`      │ the on-disk spelling, and what an LTR file shows │
├───────────────┼────────────────┼──────────────────────────────────────────────────┤
│ REVERSED-NICE │ `┐──┬──┌`      │ the same table mirrored - what an RTL file shows │
├───────────────┼────────────────┼──────────────────────────────────────────────────┤
│ MARKDOWN      │ `\| a \| b \|` │ hand-written, or pasted from ClaudeCode          │
└───────────────┴────────────────┴──────────────────────────────────────────────────┘

**Why REVERSED-NICE exists.** A `.rtl.md` file renders with `direction: rtl`, so the bidi algorithm
mirrors the whole line and paints the *first* corner character on the right. Writing `┌` there draws
a box with its corners hooked outwards; writing `┐` draws a closed box. So:

- **On disk** a table is always NICE. `formatTables(content, false)` runs in the server's POST
  handler, so the file reads correctly in git and every other tool.
- **In the editor** an RTL file holds REVERSED-NICE. `formatTables(content, isRtl)` runs when the
  file is loaded and again inside a `transactionFilter` after every edit.
- Because the two are exact inverses, `TabData.updateFromServer()` must compare the editor's text
  with `formatTables(serverContent, isRtl)` - comparing raw text would report a change on every
  poll and fight the formatter forever.
- For the same reason, "does this freshly-opened file need saving?" is **not** "does the editor's
  text differ from the file's" - for an RTL file with a table those always differ. `openFile()`
  asks whether the file already equals what the POST handler would write, i.e. whether
  `formatTables(diskContent, false) === diskContent`. Get this wrong in one direction and every
  RTL file is re-saved on open; get it wrong in the other and a file that somehow ended up
  mirrored on disk can never be corrected, because the editor reads it back as already right.

**Layout rules** (all decided in `renderTable()`):
- Column width fits the content - one padding space either side of the widest cell, minimum 2.
- Every row is treated alike: one padding space, then the cell's text. There is **no header row** -
  a box table offers no way to mark one, so any special first-row treatment would be lost on the
  next round-trip. A Markdown separator row becomes a plain rule and its `:---:` markers are dropped.
- Cells are trimmed at both ends; spaces *inside* a cell are never touched.
- Nothing is ever re-wrapped: a cell already split over several lines stays split where it was.
- In a Markdown row, `\|` is a literal pipe rather than a cell separator.

**Cursor handling.** `formatTables()` takes and returns document offsets, because re-laying a table
out moves text under the cursor. A cursor sitting in a cell's trailing padding keeps its distance
from the text (`CursorDescriptor.padding`) and the column is widened if need be - that is what makes
"press space at the end of a cell, then type" put the new character one space after the content,
even though the space itself is trimmed away.

**AI-generated files are exempt.** `*.ai.md` and `*.ai.rtl.md` are verbatim records of what a model
produced, so their content is never rewritten: `isAiGeneratedFile()` short-circuits the formatter in
`openFile()`, in `TabData.updateFromServer()` and in the server's POST handler, and the table-aware
keys are not installed. They are still *displayed* like any other file - monospace table lines and
all - only their bytes are off limits. Add any new caller of `formatTables()` to that list.

**Rules are drawn short.** A horizontal rule carries no text, so `isTableRuleLine()` tags it with
`cm-table-rule-line` and `style.css` gives it a 6px line-height - a table takes far less vertical
space that way. CodeMirror then makes the matching gutter element 6px too, but the line number
inside keeps its own font-size and line-height and would collide with its neighbours, so
`tableRuleGutterField` (a `gutterLineClass` provider) tags those gutter entries as
`cm-table-rule-gutter` for the CSS to scale down.

**Table lines must keep their metrics.** `.cm-table-line` sets a monospace font, but Markdown
syntax highlighting styles spans *inside* the line - inline code (`` `...` ``) is system-ui at
0.9em - which would shift every column to its right. `style.css` therefore forces
`font-family`/`font-size`/`letter-spacing` back to `inherit` for `.cm-table-line *`. Any new
highlight style that changes text metrics needs the same treatment.

**Structural keys.** Enter / Cmd+Enter / Delete / Backspace inside a table go through
`editTableAtCursor()`, which acts on the *cell* rather than the line:

- `Enter` splits a cell across two lines of the same row; the other columns gain an empty line.
- `Mod-Enter` (Cmd on macOS) starts a new row below the current one - empty when pressed at the end
  of the cell's text, otherwise carrying whatever followed the cursor.
- `Delete` / `Backspace` at a cell-line's end / start join that cell's lines back together, and the
  row loses its last line once every column is empty there.

A keystroke that would eat a box character is swallowed instead.

### Tab loading and order

A tab is created **synchronously** by `openFile()` - button, `TabData`, `this.tabs.set()` - and its
file is fetched only when the tab is first shown, by `TabData.ensureLoaded()` calling
`MarkdownEditor.loadTabContent()`. Until then the `TabData` has no `editorView` and no
`editorWrapper` (both are `null`), which is why so many of its methods start with a guard.

**This is what keeps the tabs in order.** `saveSession()` stores the order as
`Array.from(this.tabs.keys())`, so the Map's insertion order is the user-visible order. Awaiting the
file before `this.tabs.set()` - as the code used to - ordered the Map by whichever file answered
first, and every reload wrote back a differently-permuted session. (The *buttons* were always in the
right order, because they were appended before the `await`; only the Map, and hence the stored
session, drifted.) Keep every new tab-creating path free of `await` before `this.tabs.set()`.

`restoreSession()` therefore creates all the tabs in a plain loop and only then switches to the
active one, so a restored session costs exactly one file fetch.

`TabData.activate()` is `async`: it marks the button active, awaits `ensureLoaded()`, and then - only
if `markdownEditor.activeTab` still names it - shows the pane, focuses it and starts polling.
`switchToTab()` sets `activeTab` *before* awaiting `activate()`, which is what makes a second switch
during a slow load win over the first.

**A file that cannot be read is not an error path that closes the tab.** `loadTabContent()` puts a four-line
note - blank, `` `<path>` ``, blank, `file not found` - into a read-only editor, sets `tabData.isMissing`, and marks the
button `.tab.missing`. The path stays in the session, so a file that is temporarily gone (a branch
switch, a rename in progress) does not silently disappear from the strip. While such a tab is
active, `updateFromServer()` keeps trying the file, and rebuilds the tab for real once it appears -
which is the other caller of `loadTabContent()`, and the reason it starts by calling
`tabData.destroyEditor()` and ends by re-adding the `active` class itself.

Two consequences worth remembering:
- The "file's tables are stale on disk → mark dirty and autosave the reformatted text" fix-up now
  happens when a tab is first *shown*, not when the session is restored. A tab that is never opened
  is never rewritten.
- `loadTabContent()` bails out if `this.tabs.get(filePath) !== tabData` after the fetch - the tab was
  closed mid-flight, and building its editor now would leave an orphan pane in the editor pane.

### Tab shortcuts

`initTabShortcuts()` binds Ctrl+1 .. Ctrl+9 to the 1st .. 9th tab of the strip - which is
`Array.from(this.tabs.keys())[n - 1]`, the same order the buttons and the session are in.

The listener is on the **document, in the capture phase**: the shortcut has to work wherever the
focus is, and it has to be seen before CodeMirror's key handling, which gets the keystroke first
while the editor is focused. A digit with no tab of its own is left alone rather than swallowed.

Ctrl rather than Cmd: on macOS Cmd+<digit> is the browser's own tab shortcut, and Ctrl+<digit> is
free (on Windows and Linux it is Ctrl that Chrome keeps for itself, and the shortcut would not
reach the page there).

### Tab reordering

A tab is dragged to a new place in the strip by `initTabReordering()` in `markdown-editor.js`, which
listens for `pointerdown` on `#tabs` rather than using the HTML5 drag-and-drop API - that API draws
its own drag image and offers no way to paint a marker into the gap between two tabs.

- A press becomes a drag only after the pointer has travelled a few pixels, so a plain click still
  switches tabs; a press on `.tab-close` is never a drag.
- While dragging, the tab follows the pointer (`transform`) and is faded (`.tab.dragging`), and a
  `.tab-drop-indicator` bar is drawn in the gap the tab would land in. The strip is
  `position: relative` for the indicator to be positioned against.
- `tabDropPosition()` picks the *row* under the pointer first - tabs wrap onto several rows once
  there are enough of them - and only then the gap within it, comparing the pointer against each
  tab's horizontal middle. It reads the strip's computed `direction`, so a right-to-left strip
  would work too.
- Escape cancels the drag.
- **The order is not merely a DOM detail.** `saveSession()` stores it as
  `Array.from(this.tabs.keys())`, so a drop calls `reorderTabsFromDom()`, which rebuilds that Map in
  the buttons' new order and saves the session. Move the elements without it and the order reverts
  on the next reload. See "Tab loading and order" above.

### Markdown links

Cmd+click (Ctrl+click off macOS - where Cmd does not exist and Ctrl+click is not the context-menu
gesture) on a `[text](path)` link opens the linked file. `public/src/links.js` holds the parsing,
free of any editor dependency the way `tables.js` is, so it can be unit-tested on its own.

- **One regexp answers both questions.** `markdownLinksInLine()` feeds `markdownLinkPlugin`, which
  marks every link `.cm-md-link`, *and* `markdownLinkAt()`, which the click handler asks about the
  clicked position - so what lights up under the Cmd key is exactly what a click would open.
  The syntax tree is deliberately not used: it would answer a different question from the regexp,
  and the two would drift apart.
- **The pointer has to be over the link as painted, not merely over one of its offsets.** A click
  in a line's empty space still lands on a text position - in an RTL line the left edge maps to the
  *end* of the line, and a line that ends with a link would open it from anywhere to its left. So
  `MarkdownEditor.openLinkAtCoords()` measures the link's client rects (`coordsWithinRange()`) and
  only then takes the click. `markdownLinkAt()` excludes the link's end offset for the same reason.
- **A taken click is swallowed** (`event.preventDefault()` and a `true` return), or CodeMirror
  plants a second cursor where the link was.
- `showLinksAsClickable()` toggles `cm-links-clickable` on the content DOM from the editor's own
  keydown / keyup / mousemove handlers - no document-level listeners - which is why the highlight
  also appears when the key goes down with the editor unfocused.
- **Path resolution** (`resolveMarkdownLink()`) is against the linking file's own directory, or the
  root of the served tree for a leading `/` - the same paths the file tree and `/api/file` use. An
  `http(s)`/`mailto` target opens a browser tab instead; a `#anchor` keeps only the file part (there
  is nowhere to put the anchor); a directory, and a `../` that climbs out of the served tree, open
  nothing. A path that names no file is *not* turned away - the tab shows the usual "file not found"
  note and picks the file up should it appear (see "Tab loading and order").
- **The new tab goes right after the linking one**, not at the end of the strip: `openFile()` takes
  an `insertAfterFilePath`, inserts the button there and calls `reorderTabsFromDom()` to sort
  `this.tabs` to match - still synchronously, as that Map's order is the stored session order.

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
- `.cm-md-link` - A `[text](path)` link; clickable-looking while `.cm-content` has `cm-links-clickable`
- `.cm-table-line` - A line belonging to a table (monospace, `white-space: pre`)
- `.cm-table-rule-line` - A table's horizontal rule, squeezed to a 6px line-height
- `.cm-table-rule-gutter` - That rule's gutter entry, scaled to match (via `gutterLineClass`)
- `.cm-layer` - Overlay layers for cursor and selection
- `.cm-selectionLayer` - Selection highlight layer
- `.cm-cursorLayer` - Cursor layer

## Testing & Debugging

### Unit tests

```bash
bun test                 # runs tests/*.test.ts
```

`tests/tables.test.ts` covers `tables.js` end to end - format conversion, layout, cursor mapping and
the structural key operations. It is much faster to iterate on than the browser, so reach for it
first when changing table behaviour.

### Test Files
Use these files for testing (in `test-files/` directory):
- `test-files/_TEST-ENGLISH-LTR.md` - English LTR test file
- `test-files/_TEST-HEBREW-RTL.rtl.md` - Hebrew RTL test file

Each links to the other, so Cmd+click can be tried in an LTR and an RTL file alike.

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

- **Box-drawing characters are mirrored in RTL files**: `┌` and `┐` swap places (and `├`/`┤`, `└`/`┘`)
  between the editor's text and the file on disk. See "Table formatting" above - do not "fix" a
  `.rtl.md` file that looks reversed in a terminal.
- **Cursor layer uses LTR coordinates**: `.cm-cursorLayer` has `direction: ltr` even when content is `direction: rtl`. The cursor's CSS `left` is always relative to the scroller's left edge (which includes the gutter width of ~36px).
- **Gutter is always on the left**: Even for RTL files, the line-number gutter is on the left side. The content area starts after the gutter.
- **Short RTL lines and empty space**: RTL text is right-aligned within the `.cm-line` element. Clicking in the empty space to the LEFT of short text correctly places the cursor at end-of-line (the leftmost text position in RTL). This is expected CodeMirror behavior.
- **Previous cursor offset attempts**: There have been two prior attempts to fix RTL cursor positioning — a CSS `left: 0.5em` rule (removed, caused offset issues) and a commented-out `mouseup` handler in `markdown-editor.js` (lines ~226-258). See the comments in the code for details.
- **Font fallback**: RTL content uses `fontFamily: 'David', 'Narkisim', 'Times New Roman', serif`. David and Narkisim are not standard macOS fonts — Playwright's Chromium will likely fall back to Times New Roman, which may produce different character metrics than the user's browser.