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

#### Playwright Options
- `--url=<url>` - URL to open (default: http://localhost:3000, use http://localhost:4000 for this project)
- `--headless` - Run without visible browser window
- `--screenshot=<path>` - Save screenshot to file
- `--wait=<ms>` - Wait time before screenshot (default: 1000)
- `--click=<selector>` - Click element matching CSS selector
- `--type=<text>` - Type text (use with --selector)
- `--selector=<sel>` - Selector for type action
- `--console` - Log browser console messages
- `--eval=<code>` - Execute JavaScript in browser context

#### Useful Selectors for Debugging
- `.file-tree` - File tree container
- `.file-item.file` - File entries in tree
- `.file-item.directory` - Directory entries in tree
- `.editor-wrapper` - Editor container (check for `.rtl` class)
- `.cm-editor` - CodeMirror editor root
- `.cm-content` - Editor content area
- `.cm-line` - Individual lines
- `.tab` - Tab buttons
- `.tab.active` - Currently active tab