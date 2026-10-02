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
   A table that declares a header row keeps it - through the editor, the disk and git
- Cmd+click (Ctrl+click off macOS) on a `[text](path)` link opens the linked file and moves the
   focus to it; a file that was not open yet gets its tab right after the linking one.
   `path#heading` and a bare `#heading` put the cursor on that heading
- Ctrl+1 .. Ctrl+9 show the 1st .. 9th tab
- Showing a tab highlights its file in the tree, opening every folder above it and scrolling it
   into view
- Typing `*`, `` ` ``, `״` or `׳` over a selection wraps it rather than replacing it - the way `(`,
   `"` and `'` already do; pressing `*` twice gives `**bold**`. `)` parenthesizes it too, like `(`
- Typing `-->`, `<--`, `<->` gives `→`, `←`, `↔`, and `==>`, `<==`, `<=>` give `⇒`, `⇐`, `⇔` - the
   other way round in an RTL file. See "Typed arrows" below
- Find (Cmd+F) shows how many matches the whole file holds, and has a "first" button; with no match
   every button is disabled
- `*...*` and `**...**` *inside* an inline-code span are shown bold, the way they are outside one
- The file tree keeps up with the disk: a file or folder created or deleted by anything else - git,
   ClaudeCode, the Finder - shows up within a second, and a tab whose file was deleted turns into
   the same "file not found" tab a reload would give it
- Every Markdown file of the tree is kept as a readable HTML page under `../docs/_HTML-FROM-MD/` (committed, so GitHub Pages serves it),
   re-rendered within a second of any change, with an `index.html` in every folder - see "The HTML mirror" below
- `<כלול-בהדפסה מקור="..." מ="..." עד="..." כותרות="+1">` embeds another Markdown file into this one -
   on the page only, never on disk. See "Embedding one file in another" below
- `<תוכן-העניינים>` on a line of its own becomes a table of contents of the headings *below* it -
   again on the page only. See "The table of contents" below
- Every page of the HTML mirror with more than one `#`..`###` heading also opens with an index of them all,
   under its breadcrumb trail - on screen only, so not in its PDF. See "The page index" below
- A ```` ```html ```` fenced block is written to the page as raw HTML, the fence lines gone - the one
   way a file may put HTML of its own on its page. See "The raw-HTML fence" below
- Every page of the HTML mirror is also printed to a PDF under `../docs/_PDF-FROM-MD/`, easier to print and
   to share - see "The PDF mirror" below
- Two buttons beside the help button open the current file in a tab of its own: the printer its PDF,
   the `</>` to its left its HTML page

## Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Bring ../docs/_HTML-FROM-MD up to date once, without the server
bun run rebuild-whole-html-folder
```

## Project Structure

- `src/server.ts` - Main Bun web server
- `src/fs-changes.ts` - Tree snapshots, their differences, and the log a client polls
- `src/markdown-tree.ts` - The tree of `.md` files the editor shows, and the names it skips
- `src/html/` - The Markdown → HTML capability, entered through `HtmlMirror`
- `src/html/md-to-html.ts` - A Markdown file as a readable, self-contained HTML page
- `src/html/html-mirror.ts` - Which file's page goes where, and keeping `../docs/_HTML-FROM-MD` up to date
- `src/html/includes.ts` - `<כלול-בהדפסה>`: one Markdown file embedded into another, and the errors of it
- `src/html/folder-index.ts` - The `index.html` of every folder of `../docs/_HTML-FROM-MD`
- `src/html/pdf-mirror.ts` - Every page of the HTML mirror printed to `../docs/_PDF-FROM-MD`, by Playwright's Chromium
- `src/rebuild-whole-html-folder.ts` - `bun run rebuild-whole-html-folder`
- `src/write-file-safe.ts` - Atomic file writes, shared by the POST handler and the mirror
- `src/line-endings.ts` - A CRLF file stays CRLF over a save
- `public/` - Static frontend assets
- `public/index.html` - Main interface
- `public/src/app.js` - Frontend entry point (imports markdown-editor.js)
- `public/src/markdown-editor.js` - Main editor class with CodeMirror integration
- `public/src/tab-data.js` - Tab state management
- `public/src/tables.js` - Table parsing/formatting, shared by the browser and the server
- `public/src/links.js` - Markdown-link parsing/resolution, behind Cmd+click-to-open
- `public/src/pseudo-tags.js` - Which pseudo-tags are void, shared by the browser and the server
- `public/src/hebrew-search.js` - What a plain Find matches in Hebrew text (niqqud, precomposed letters, shin/sin)
- `public/style.css` - Styling with RTL support
- `tests/tables.test.ts` - Unit tests for `tables.js` (`bun test`)
- `tests/links.test.ts` - Unit tests for `links.js` (`bun test`)
- `tests/hebrew-search.test.ts` - Unit tests for `hebrew-search.js` (`bun test`)
- `tests/fs-changes.test.ts` - Unit tests for `fs-changes.ts` (`bun test`)
- `tests/line-endings.test.ts` - Unit tests for `line-endings.ts` (`bun test`)
- `tests/md-to-html.test.ts` / `tests/html-mirror.test.ts` / `tests/includes.test.ts` - Unit tests for
   the HTML mirror (`bun test`)
- `tests/pdf-mirror.test.ts` - Unit tests for the PDF mirror - these print real PDFs, in Chromium

## API Endpoin
- `GET /api/files` - `{files, serverTimestamp}`: the whole tree, and a cursor to poll changes with
- `GET /api/file/:path?since=<cursor>` - `{content, readOnly?, serverTimestamp, recentFsChanges?, fsChangesUnknown?}`
- `POST /api/file/:path` - Save file content
- `GET /api/pdf/:path` - brings the file's PDF up to date, and redirects (302) to it under `/docs/_PDF-FROM-MD/` -
  see "The print and HTML buttons"
- `GET /api/html/:path` - the same for its page, under `/docs/_HTML-FROM-MD/`
- `GET /docs/...` - `../docs/` as it is, the way GitHub Pages serves it: a folder is its `index.html`.
  A PDF of the mirror is the one exception: its links to GitHub Pages are pointed back at this server

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
- Every row is treated alike: one padding space, then the cell's text, header row or not. What a
  header changes is the *rule below it*, and nothing else - no alignment, no width, no styling,
  because nothing else would survive the round trip through the box form. A Markdown separator
  row's `:---:` alignment markers are therefore dropped.
- Cells are trimmed at both ends; spaces *inside* a cell are never touched.
- Nothing is ever re-wrapped: a cell already split over several lines stays split where it was.
- In a Markdown row, `\|` is a literal pipe rather than a cell separator.

**The header row.** A table may declare that its first row (or its first few) is a header. Each
format says so in its own way, and `TableBlock.headerRows` is what the three agree on:

- **MARKDOWN** says it with the `|---|---|` separator, as it always has. Only the *first* separator
  of a table counts - a table has one header, and it is at the top.
- **NICE** / **REVERSED-NICE** draw the rule below the header doubled: `╞═══╪═══╡`, mirrored to
  `╡═══╪═══╞` in an RTL file, exactly as `┌` and `┐` are. It is always *written* in full, and read
  **leniently**: a rule standing between two rows is the header's if either of its ends is `╞`/`╡`
  **or** any part of it is drawn doubled. So `╞───┼───╡`, `┤═══┼═══├` and even the mixed `╞───┼───┤`
  all say the same thing, and all come back as the canonical spelling.

  The leniency is not politeness. `ruleKind()` turning a line away does not cost a header - it costs
  the line its status as a rule, and a table with a non-rule in the middle is parsed as *two* tables
  with a stray line between them. That is a garbled file, from one character being off.

**Switching it on and off is a keystroke.** Typing `=` (or `═`) on a table's rule makes that rule the
header rule; typing `-` (or `─`) makes it plain again. `setHeaderAtCursor()` does the work and
`headerRuleExtension()` in `markdown-editor.js` catches the character - an `EditorView.inputHandler`
rather than a key binding, because these are ordinary characters whose *insertion* is what has to be
replaced: putting one into a rule line would break the drawing.

- Only a rule standing **between two rows** can carry a header; on the top and bottom rules, which
  are the box itself, the keystroke is swallowed rather than let through.
- Typing `=` on a *deeper* rule moves the header down to it, so the rows above it all become header
  rows. One rule carries the header at a time.
- Typing `-` only clears a header when the cursor is on the header's own rule - otherwise it would
  quietly remove a header the cursor is nowhere near.
- Anywhere else - in a cell, in prose - `-` and `=` are ordinary characters, typed as usual.

A table that declares no header, which is most of them, is drawn exactly as before: no doubled rule
appears anywhere in it. The doubled rule is the *only* thing that carries a header through a save,
which is why it had to exist: before it, a `*.ai.md` file kept its header (nothing rewrites those)
and every other file lost it the first time the editor formatted it.

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

### Line endings

The editor holds `\n` only - CodeMirror splits on `\r\n` too and joins with `\n` - so a CRLF file is
handed out as `\n` text by `GET /api/file/` (`toLf()`), and `POST` writes it back with the line ending
the file on disk already has (`lineEndingOf()`, `withLineEnding()` in `src/line-endings.ts`). Without
that, the poll saw a difference on every comparison ("has changed on the server") and the first save
turned the file into LF. A mixed file is written with its majority, a tie or a new file with `\n`.

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

### Wrapping a selection

`basicSetup` brings CodeMirror's `closeBrackets`, which is why typing `(` over a selection already
gives `(text)` - and `"text"`, `'text'`. It only knows those pairs, so `*`, `` ` `` and the Hebrew
`״` / `׳` are handled by
`wrapSelectionExtension()` - an `EditorView.inputHandler` that catches those characters when the
typed-over range is non-empty and inserts the marker at both ends instead.

`closeBrackets` wraps only on the *opening* bracket, and on a Hebrew keyboard layout the key marked `(`
types `)`. So the same handler takes `)` over a selection too and gives `(text)`.

**The selection is left on the original text**, not on the wrapped result: that is what makes a
second `*` turn `*text*` into `**text**` rather than `*(*text*)*`.

The RTL-only `;`-types-a-backquote binding dispatches `replaceSelection()` itself and so never
reaches an input handler - it calls `wrapSelectionWith()` first for the same reason.

### Typed arrows

`typedArrowExtension()` - another `EditorView.inputHandler` - replaces `-->` `<--` `<->` by `→` `←` `↔`, and
`==>` `<==` `<=>` by `⇒` `⇐` `⇔`, as the sequence's last character is typed.

- **Cmd+Z right after it gives the three characters back.** The typed character is inserted first, and the
  arrow is a second transaction, isolated in the history (`isolateHistory.of('full')`) - which is the way to
  write a literal `-->`. The sequence is re-read after the insertion, as the table formatter may have moved it.
- **In an RTL file the arrow is mirrored**: `-->` gives `←`, `<==` gives `⇒`. There `<` and `>` are painted
  mirrored (bidi mirroring), so `-->` is *seen* pointing left, and the arrow has to keep pointing that way.
  `↔` and `⇔` are the same either way.
- **Code is converted too** - in these files a code span is mostly a quotation, not code.
- **Only the `-->` that closes an HTML comment is left alone** (a `<!--` with no `-->` after it, anywhere above).
- It comes after `headerRuleExtension()`, which keeps `-` and `=` on a table's rule for itself.

### Enter in a list

Enter continues a list or a quote with CodeMirror's own `insertNewlineContinueMarkup`, except that it never
adds a blank line of its own (`markdownTightKeymap()`, installed in place of the keymap `markdown()` brings):

- In a *loose* list - a blank line between items - CodeMirror inserts a blank line before the new item. The
  command is run into a dispatch of ours that drops that line from what it inserts.
- On an empty second item of a tight list it would push the item down, making the list loose;
  `nonTightLists: false` has it remove the empty item's marker instead, as on any other empty item.

### Searching Hebrew

CodeMirror's Find is patched (the "HORRIBLE PATCH" at the end of `markdown-editor.js`) so that a plain,
non-RegExp search goes through `hebrewSearchPattern()` in `public/src/hebrew-search.js`:

- **Marks in the text are skipped** - niqqud, cantillation, maqaf, geresh/gershayim - so `נפש` finds `נַפְשֶׁךָ`.
- **A letter matches its precomposed forms** (U+FB1D..U+FB4F): `שׁ` is often one character, U+FB2A, in a
  pasted verse, and looks exactly like `ש` plus a dot. The forms are found by decomposing that range,
  not listed by hand.
- **A mark typed in the query must be on that letter** - written separately or baked into a precomposed
  letter, in any order: `בּ` finds `בּ` and U+FB31, not a plain `ב`.
- **Shin and sin**: a dot is not required, it *excludes the other one*. A dotless `ש` finds all of them;
  `שׁ` finds `ש` and `שׁ`, never `שׂ`; `שׂ` finds `ש` and `שׂ`, never `שׁ`. A dotless shin in the text may be either.

- **In a terminal recording** (`*.script.md`, `*.script.rtl.md`) a run of whitespace in the query matches any run
  of whitespace (`\s+`): the terminal wraps a long line, and a Claude session indents the continuation, so
  `a b` may well stand as `a`, a line break, some spaces and `b`. The editor of such a file carries the
  `looseWhitespaceSearch` facet, and `hebrewSearchPattern()` its `looseWhitespace` option.

The patch is at `SearchQuery.prototype.create()`: a plain query is turned into a RegExp query of the
Hebrew pattern *before* any `RegExpCursor` is built, since the cursor compiles its query in its
constructor and the text as typed (`(`, say) need not be a valid RegExp. `create()` is not told which editor it is
for, so what it returns holds a matcher for each value of `looseWhitespaceSearch` and picks one by the
state every call is handed. The replacement's `$` is
escaped on the way, so a plain replace stays literal.

**The Find panel** is `CountingSearchPanel`, given to `search({ createPanel })` - CodeMirror's own
panel is not exported, so it is rebuilt, with a **first** button and an `N מופעים` label counting the
matches of the *whole* document. The count is redone on every change of the query or of the text,
through `create()` - not `query.getCursor()`, which for a plain query walks a string cursor and would
count other matches than next/previous visit. Every button but `×` is disabled while there is no match.

CodeMirror compiles with the `u` flag, where `\-` or `\,` outside a class is a syntax error - so only
the RegExp syntax characters are escaped. A search with "regexp" ticked is left exactly as typed.

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

### Pseudo-tags

`<עיון>` ... `</עיון>` and its like are the commentary's own markup (CLAUDE-HEBREW.md lists them).
Neither side keeps a list of the names: the editor's `syntaxHighlightPlugin` tracks any tag that opens
and closes at the start of a line, and `public/style.css` colours the names it knows - which is the
only place a new tag has to be added, `src/html/md-to-html.ts`'s `PAGE_STYLE` being the mirror's copy
of it. The two lists are meant to hold the same names and the same colours.

Two pseudo-tags *do* something on the page, and only there - in the editor both are markers like any
other: `<כלול-בהדפסה>` is replaced by the file it names (see "Embedding one file in another"),
and `<תוכן-העניינים>` by the page's index of headings (see "The table of contents").

**Except the void ones.** `<כלול-בהדפסה ...>` and `<תוכן-העניינים>` have no closing tag, the way
HTML's own `<img>` has none - and nothing in the text says so, just as `<img>` is void because the spec says it is. So the
names are listed, once, in `public/src/pseudo-tags.js` - plain ESM, imported by the browser and by
Bun, like `tables.js` - and both sides ask `isVoidPseudoTag()`:

- The editor's tag stack does not take it: it decorates its own line and nothing below it. Push it
  and it is never popped, so the rest of the file wears its colour.
- `pseudoTagRule()` does not look for a closing line, which for any other tag is what tells a block
  from a line of plain text.

**A void tag's colour comes last in the CSS.** A line inside another tag carries both classes
(`cm-html-עיון cm-html-כלול-בהדפסה`), and which background wins is decided by the order of the
rules, not the order of the classes. A marker should keep its own colour wherever it sits, so its
rule goes at the end of the block - the opposite of what a tag that *encloses* others would want.

`<תוכן-העניינים>` is the one name `PAGE_STYLE` does not share, and deliberately: on the page that
line is not a pseudo-tag box at all - it *is* the index, and wears `.index`.

### Emphasis inside inline code

Markdown says a code span is literal text, so `` `a *b* c` `` gets no `StrongEmphasis`/`Emphasis`
children from the parser and the `{ tag: tags.strong }` rule of `markdownHighlighting` never fires
inside one. The stars are meant as emphasis in this project's files all the same, so
`inlineCodeEmphasisPlugin` decorates them with `.cm-code-emphasis` (`font-weight: bold` in
`style.css`) - `*one*` and `**two**` alike, the marks included in the bold range the way `tags.strong`
covers the `**` of a real `**bold**`.

Unlike `markdownLinkPlugin`, this plugin asks the **syntax tree**. The question is exactly "which
spans did the parser call `InlineCode`?", and a regexp for backticks would have to re-answer it - and
would get fenced code blocks and escaped backticks wrong. *Within* such a span the parser has nothing
more to say, so the stars themselves are found by regexp.

**Asking the tree means watching the tree.** A long file is not parsed in one go - CodeMirror parses
a slice at a time, in the background, and the transactions carrying each new slice change neither
the document nor the viewport. So the plugin's `update()` rebuilds on
`syntaxTree(update.startState) !== syntaxTree(update.state)` as well as on `docChanged` /
`viewportChanged`. Leave that test out and a file big enough to miss the first parse slice shows no
emphasis at all until its first edit. Any future plugin that reads the syntax tree needs the same
third test; `markdownLinkPlugin` and `tableLinePlugin` scan the raw lines and so do not.

### Watching the tree

A file or folder created or deleted by anything outside the editor reaches the UI within a second,
without a second polling loop: **the file poll carries it**. Every `GET /api/file/:path` sends the
cursor the server last gave (`?since=`), and every answer - the 404 of a missing file included -
brings back `serverTimestamp` and, when there is anything to report, `recentFsChanges`:

```ts
type FileSystemChange = { path: string; changeType: "created" | "deleted" };   // a folder ends with "/"
```

**The server notices changes by rescanning, not by reading the events.** Any `fs.watch` event
schedules (150 ms debounce) a fresh walk of the tree, and `diffSnapshots()` against the previous
snapshot is what gets logged. A walk costs ~20 ms and only happens when something really moved, and
in exchange no event has to be interpreted - which matters, because macOS reports only
`rename <path>` for both a creation and a deletion, and reports a folder moved in or out of the tree
as a *single* event for the folder alone. Since both snapshots hold every path in full, a folder
that comes or goes is reported as the folder **and** every file that was under it, with no special
case anywhere. A periodic rescan (15 s) backs the watcher up, as `fs.watch` may drop events and a
recursive watch is not supported on every platform. `isIgnoredWatchPath()` drops an event before it
can cost a rescan - which is what keeps a busy `.git` from walking the tree all day.

**The cursor is a timestamp the server issues** (`FsChangeLog.now()`), never the client's clock, and
two rules make "everything since your cursor" exact:

- Every timestamp it hands out is *strictly* greater than the last one issued or recorded. A change
  landing in the same millisecond as the answer before it would otherwise fail the `at > since`
  test and be lost for good - the log's clock never repeats itself.
- The log knows how far back it can answer (`coversSince`). A cursor from before this server
  started, or from beyond the trimmed window, is **not** answered with an empty list - that would
  quietly claim nothing had happened. It gets `fsChangesUnknown`, and the client fetches the whole
  tree again. This is what makes a server restart harmless.

**The client re-fetches the tree rather than patching it.** Applying a change list to the rendered
tree would mean re-deriving which folders still hold a `.md` file, and in what order, when the
answer is one fetch away - and one that only happens when something did change.
`loadFilesTree(true)` keeps the expanded folders (`this.expandedFolders`) and the scroll position,
and clears `fileTreeElements` first, or a deleted file keeps an element nobody can see.

**Why `/api/files` returns the cursor too.** The tree and the cursor have to come from the same
answer. Take the cursor from a file poll a moment later instead, and a file created in between is
in neither - and the tree stays wrong until the next change happens along.

**A tab whose file goes gets the missing-file treatment - the very same one.**
`TabData.applyFileSystemChange()` calls `loadTabContent()`, which finds nothing and leaves the tab
exactly as a reload would: red italic title, "RO" badge, and a `file not found` note where the text
was. There is deliberately no second, softer presentation for "deleted while open" - one state, one
look, however the tab got there. A folder above the file counts as the file, matched by prefix.

Two things follow from reusing that path:
- **A dirty tab is left alone.** Rebuilding it would throw away text that is not on disk yet, and
  the autosave already scheduled is about to write the file back - after which the `created` that
  follows puts the tab right. Until then `this.isDeleted` keeps `updateFromServer()` from reporting
  the 404 as a failure once a second.
- **A file that comes back is loaded for real**, again through `loadTabContent()`. A tab that was
  never shown has no editor to rebuild, so it just drops its cached `loadPromise` and is fetched
  when it is finally shown.

### The HTML mirror

Every `.md` file the file tree shows gets a page: `<path>/<name>.md` → `../docs/_HTML-FROM-MD/<path>/<name>.html`
(so `X.rtl.md` → `X.rtl.html`). Only the terminal recordings are left out - `*.script.md`,
`*.script.rtl.md` (`isMirroredFile()`) - because they are a raw VT control stream rather than
Markdown, and nothing but the GET handler's `renderTerminalOutput()` can make text of them.

**AI output is mirrored like anything else.** Being a verbatim record is about the *bytes on disk* -
`isAiGeneratedFile()` keeps the table formatter off those files - and says nothing about how they are
read. Their tables are the Markdown a model wrote, header separator and all, which `parseTables()`
understands; so they render as `<table>`s with a proper `<thead>`, and are the main reason a header
row is worth carrying at all.

The folder lives under `docs/` and is **committed**, because `docs/` is what GitHub Pages serves - that is
the point of it being there. `docs/.nojekyll` keeps Pages from running Jekyll, which would drop every
file and folder whose name starts with `_` - both mirrors, and `איסוף-מקדים-לניתוחים-לשוניים/` and its like. It is written
(`NO_JEKYLL_PATH`, with a line saying what it is) along with `docs/index.html`, so a `docs/` deleted whole
comes back whole. The folder's own name,
`HTML_MIRROR_NAME`, is in `exclusions` (which match a single path segment), as is `node_modules` - whose
vendor READMEs would otherwise have been both listed and mirrored.

On GitHub Pages only what is under `docs/` exists, so a link from a page to a file with no page of its
own (an image, a `*.script.md`) - which leads back into the tree - is broken there, though it works locally.

**Rendering** (`md-to-html.ts`, markdown-it) aims to *look* like the editor - David for RTL, the same
heading sizes, shaded inline code and quotes, the pseudo-tag colours - while *reading* like a
document: no Markdown syntax characters. The CSS is inlined into every page (`PAGE_STYLE`), copied
from `style.css` and the editor's `HighlightStyle` - change one, check the other. Beyond CommonMark:

- **A single newline is a line break** (`breaks: true`) - the files are written a sentence per line.
- **Tables** in any of the three formats become `<table>`, via `parseTables()` from `tables.js`.
  A table that declares a header row (see "The header row" above) gets a `<thead>` of `<th>` cells -
  bold, on a shaded strip; one that declares none gets a bare `<tbody>`, as in the editor.
  markdown-it's own GFM table rule is disabled. A cell's lines are joined with line breaks, and its
  Markdown is rendered.
- **Pseudo-tags** - `<עיון>` ... `</עיון>`, each on a line of its own, indentation allowed - become a
  `.pseudo-tag` box whose first line is the tag's name (and any attribute values: `ניתוח-לשוני: רֶמֶשׂ`),
  centred. The name must hold a non-ASCII letter, which is what tells one from a real HTML tag, and
  it must be closed further down - otherwise the line is plain text. A **void** tag
  (`isVoidPseudoTag()`) closes nothing: its line is the whole box, and the caption all there is in it.
- **Raw HTML is escaped** (`html: false`), as the editor shows it as text too - except inside a
  ```` ```html ```` fence, which goes to the page as it is. See "The raw-HTML fence" below.
- `*` / `**` inside inline code are bold, stars removed.
- **An index** goes where the file's `<תוכן-העניינים>` line stands, and nowhere else (`renderIndexes()`):
  a collapsible `<nav class="index">` of the headings of `#`..`###` **below** it, titled
  **תוכן העניינים** in an RTL page and **Contents** in an LTR one, indented from the shallowest
  level present. Headings inside a pseudo-tag, quote or list are not listed - they are details of that
  block. Every heading gets an `id` (words joined by `-`, niqqud and punctuation dropped, `-2`, `-3`
  for repeats), whether it is listed or not, so a link can always point at a section. See "The table
  of contents" below.
- **Links are written readably** - Hebrew as Hebrew, not `%D7%90` (`readableUrl()`, which replaces
  markdown-it's `normalizeLink()`, and `readablePath()` for the indexes). Only what a URL cannot hold as it
  is gets escaped - a space is still `%20` - and an escaped non-ASCII character already in the source is
  decoded back. The browser encodes the link when it follows it. The two places this cannot reach: the
  links inside a PDF, which the PDF format holds as ASCII, and the `Location` of the `/api/` redirects.
- **Links** are rewritten by `mirroredHref()`: to a mirrored `.md` → its page; to anything else (an
  `*.ai.md`, an image) → back to the original, two folders further up.
  A link with no text, `[](aaa/bbb.md)`, shows its target as written - `[aaa/bbb.md](aaa/bbb.md)`.
  A target may hold spaces, `[x](מחקר ראשוני - פרומפט.rtl.md)`, as file names here do - CommonMark ends it at
  the first space, so `md-to-html.ts` wraps markdown-it's `parseLinkDestination()`. A title after a space is still a title.
- **A breadcrumb trail** opens the page - the one its folder's index opens with, and the page's own
  name at the end: `פירוש / _HTML-FROM-MD / פירוש / 1-בראשית / <file>`, every step but the last a link
  up to that folder's index (`pageBreadcrumbs()`, rendered by `renderBreadcrumbs()`, which the folder
  indexes share). On screen only: it is not printed, and so not in any PDF. On a page - not on an
  index - it cannot be selected, so a copy of the text does not bring the trail along.
- **The page index** follows the trail (`renderPageIndex()`, asked for by `RenderOptions.pageIndex`, which
  only `HtmlMirror` passes): every `#`..`###` of the page, wherever it stands - unlike `<תוכן-העניינים>`,
  which lists only what is below it, this one is a way around the whole page. Only top-level headings, as in
  any index (not those inside a pseudo-tag, quote or list), and only when there are at least two - an index of
  one entry says nothing. It is `<nav class="index page-index">`, so it looks like the file's own index, and
  like the trail it cannot be selected and is not printed (`display: none` in `@media print`) - which is
  what keeps it out of every PDF. A file that asks for `<תוכן-העניינים>` gets both - except a file that
  embeds others (`hasIncludeDirective()`: a `<כלול-בהדפסה>` line, faulty or not), which gets none: such a file
  is a book, like `פירוש/הדפסה.rtl.md`, and has its own index if it wants one.
- **The trail and the page index are faded** (`opacity: 0.7`), in the text's own colour with their links
  in the usual blue - present, but quieter than the page they lead around.
- **On paper** the page is laid out for the sheet, by an `@media print` block at the end of
  `PAGE_STYLE`. See "Printing a page" below.

**When a page is rendered** works like `make`: a page is stale when it is missing, older than any of the
files it was built from, or older than the rendering code (`RENDERER_FILES`) - so a renderer change
rebuilds every page, and a restart only redoes what went stale while the server was down.

"The files it was built from" is more than the one file, because `<כלול-בהדפסה>` embeds others into
it. `HtmlMirror.dependencies` holds, per page, every file that went into it - the embedded ones at
any depth, and the ones that were *meant* to be embedded but could not be read, because the day one
of those appears the page has to change. `dependents` is the same map the other way round, which is
what `scheduleSync()` fans a changed file out over. The map is flat, so no chain is ever walked.

**A render is no longer the same thing as a write.** The dependencies of a page are known only once
it has been rendered, so a mirror that has just been made knows none of them and renders the whole
tree - which is what the startup sweep is for, and it costs ~0.8 s. What comes out is compared with
the page on disk and written only if it differs, so that sweep normally writes nothing at all; a page
that came out identical is `utimes()`d instead, or the next sweep would render it all over again.
That comparison is also what stops two files that embed each other from rebuilding one another for
ever: only a page whose content really changed makes its own dependents be re-synced.

`HtmlMirror` is driven by `server.ts` from three places, with no hook in the POST handler:

- **Startup** - `syncTree()` over the first snapshot (~0.8 s to render all ~600 files, ~40 ms when fresh).
- **Every `fs.watch` event on a `.md` path** - `scheduleSync()`, debounced 300 ms per file. A file that
  is only *edited* is no change to the tree, so the rescan would never report it; the editor's own
  save arrives here too, as the rename at the end of `writeFileSafe()`. Files that come and go
  (a whole folder included) are also scheduled from the rescan's diff.
- **The 15 s periodic rescan** - `syncTree()` again, for dropped events. It also deletes pages whose
  file left the tree, and prunes the folders that leaves empty - **unless the tree is empty**, which
  is far likelier a failed walk than a deleted project.

**Folder indexes.** `docs/_HTML-FROM-MD/` and every folder under it get an `index.html`
(`folder-index.ts`): a breadcrumb trail back up, starting from `docs/index.html` - titled **פירוש** (`SITE_TITLE`) -
and a `..` heading the list of the subfolders and then the pages directly in the folder - folders first,
as in the file tree, each linking to its own index. Nothing deeper is listed. A page is named by its file without `.rtl.html` /
`.html`, unless two pages of the folder would then share a name - then both keep their full name.
A file named `index.md` would take its folder's index, so its page is `index.md.html` (`htmlPathFor()`).

**What an index lists is what git would.** Only pages whose `.md` file git does not ignore - tracked, or
new and not yet added (`git ls-files --cached --others --exclude-standard`) - and only the folders holding
one; a folder with none gets no index. The pages of ignored files are still made, just not listed. When
git cannot be asked (not a work tree) everything is listed.

**Technical files.** A `.printignore`, in any folder, is read exactly like a `.gitignore` - git itself
reads it (`--exclude-per-directory=.printignore`) - and the files it matches are *technical*: listed
like any other, but as `li.technical`, hidden until the toggle at the top of every index,
**הצג קבצים טכניים**, is ticked - a box stuck to the top of the viewport, however far the list is scrolled. A folder whose pages are all technical is technical itself.
No index shows how many pages a folder holds.
- **The toggle is the URL's hash**, `#show-technical` - off by default, so a link can be shared as it is
  seen. Ticking it `pushState`s the hash, and `popstate`/`hashchange` put the page back in step, which
  is what makes Back/Forward walk through the toggles.
- **Every link of the index carries the hash on**, rewritten in place whenever the toggle moves - so
  the next folder opens as this one was left, and so does a link copied or opened in a new tab.
- With JavaScript off the technical files stay hidden: the hiding is CSS on `body:not(.show-technical)`.

Neither a `.gitignore` nor a `.printignore` is a Markdown file, so an edit to one reaches the indexes
through the 15 s sweep.

**`docs/index.html`** - the page GitHub Pages opens with - is the index of `docs/` itself (`SITE_INDEX_PATH`,
`siteIndexPage()`): the two mirrors, each linking to its own index, and any other page
or PDF standing directly in `docs/` (`bible-viewer.html`). It is titled **פירוש** (`SITE_TITLE`), and every mirror's breadcrumb trail starts
there, `פירוש / _HTML-FROM-MD / ...`, so a mirror's root index has a `..` too.

**The PDF mirror's indexes are written here as well**, by the same `syncIndexes()`: it holds the very
same pages as `.pdf`, so its indexes are the same lists, and working them out twice would only let the
two drift apart. A PDF not printed yet is listed a moment before it exists.

An index depends only on *which* pages exist, so it is not dated like a page: `syncIndexes()` renders
them all and writes only those whose content differs from the file on disk. It runs at the end of
every sweep, and - debounced - whenever a single file's sync makes a page appear or disappear, which
`HtmlMirror.pagedFiles` tracks between sweeps (it is `null` until the first sweep, so a lone sync
never writes indexes that know nothing of the rest of the tree). An index whose folder no longer
holds a page is removed, deepest first - which is also what lets the folder itself be pruned, since
`removePage()` can only remove a folder once it is empty. The sweep's orphan check skips files named
`index.html`, or it would delete the indexes as pages without a file.

A page is written after its file is read, so it ends up the newer of the two - which would hide an
edit made *during* the render. `syncFile()` therefore re-stats the file afterwards and renders again
if it moved.

### Embedding one file in another

`<כלול-בהדפסה מקור="..." מ="..." עד="..." כותרות="+1">` puts another Markdown file's text where the
tag stands. It happens **in memory only, on the way to the HTML page**: no Markdown file is ever
rewritten, and the editor shows the tag line itself. `src/html/includes.ts` holds all of it;
`expandIncludes()` hands `md-to-html.ts` one Markdown document and the list of what was wrong with it.

- **`מקור`** is mandatory: a *relative* path to a `.md` file within the served tree.
- **`מ`** / **`עד`** name a heading of `מקור` by its text. `מ` starts at that heading's own line;
  `עד` stops on the line *before* its heading - **עד ולא עד בכלל** - so `מ="פרק א" עד="פרק ב"` is
  exactly the first chapter. Left out, they are the file's first and last non-blank lines. The text is
  matched exactly first and then with the niqqud and punctuation stripped, because asking an author to
  reproduce `## וַיֹּאמֶר אֱלֹהִים` character for character would make the attribute unusable here.
  A heading that matches twice is an error: there is no way to say which was meant.
- **`כותרות`** is a *signed* one-digit number, and moves every heading of the embedded block by it, so
  `כותרות="-2"` turns a `### x` into a `# x`. Nested shifts compose - the inner file is expanded and
  shifted first, and the outer shift then moves the result.
- Every value must be wrapped in one of `"` `'` `׳` `״` and closed by **the same** character, and the
  tag must stand alone on its line.

**The seam is invisible.** The embedded text reads as if it had been written in place - no box, no
caption - and its headings join the page's תוכן העניינים like any other. That is the whole point of a
tag called "כלול בהדפסה".

Three things follow from expanding *text* rather than tokens, and each is worth keeping in mind:

- **A block is inserted flush-left, with a blank line on either side.** It is a document of its own and
  must not run into the paragraph above it; the indentation of the tag line is ignored.
- **An embedded file's links are rewritten**, to `/`-rooted paths, by `rootedTarget()`. A link is
  written relative to the file it stands in, and that is not the file whose page this is about to
  become. Rooted targets pass through unchanged, which is what lets a file embedded two levels deep be
  rewritten once per level with the same result. Only a plain target is touched: one with a title after
  it, or wrapped in `<>`, is left exactly as written, and so is a bare `#anchor`.
- **A code fence is left alone** - a directive or a heading drawn inside one is sample text. Every scan
  in the module goes through `fenceScanner()` for that reason.

**An error is shown, not thrown.** A file with a typo in a directive still renders: the faulty line
becomes a `שגיאה-N` block where it stood, and the page opens with the list of them all, each linking to
its own block - white bold on dark red, both of them. The message is Hebrew, and names the file and
line the fault is in, which for a nested embedding is not the file whose page it is. Cyclic references
are one such error, reported with the whole chain (`a.md ← b.md ← c.md ← a.md`).

The messages travel from `expandIncludes()` to the renderer in `RenderOptions.errors`; what is left in
the text is only a `\uE000error:<n>\uE000` marker line. That character is stripped from every file that
is read - `toLines()` is the one door a file's text comes in by - so nothing a file could hold can be
mistaken for one. A NUL would have been the obvious marker, and is not usable: markdown-it replaces it
with U+FFFD before any rule sees it.

### The raw-HTML fence

A ```` ```html ```` fence is the one way a file can put HTML on its page: the fence's own lines go,
and what was between them is written out untouched. Everything else stays escaped - `html: false` is
what makes a stray `<div>` in the prose show as the four characters it is, and that is what the
editor shows too.

````text
```html
<div style="text-align: center">שורה באמצע</div>
```
````

The rule is one override of markdown-it's own `fence` renderer, in `md-to-html.ts`; every other
fence falls through to it and is still a `<pre><code>` block, `js` and unlabelled alike. The info
string is read the way a language is - the first word, case ignored - so ```` ```HTML הערה ```` is a
raw fence and ```` ```htmlish ```` is not.

**Why a fence and not a tag.** The way out of the escaping has to be something a writer types on
purpose, on lines of their own, and can see the whole extent of in the editor - not a `<` that
happens to begin a word in the middle of a paragraph. A fence is already that shape, and the editor
already draws it as a block. A file can therefore break its own page, which is the price of the
capability; nothing a file writes by accident can.

Two things it does *not* do, both worth knowing:

- **The content is not Markdown.** `*b*`, `` `c` `` and `<עיון>` inside the fence reach the page as
  those characters, not as emphasis, code or a pseudo-tag box.
- **`<כלול-בהדפסה>` inside it is not expanded**, and neither is a heading inside it indexed -
  `includes.ts` skips every fence (`fenceScanner()`), and the headings come from the token stream,
  where a fence is one opaque token.

### The table of contents

`<תוכן-העניינים>`, alone on its line, is where the page's index of headings goes - and the only
thing that puts one there. `renderIndexes()` in `md-to-html.ts` builds them; `indexTagRule()` marks
the lines; the `index_tag` renderer rule drops each one into its own.

**It used to be automatic**, on every page with at least three headings, and that is the change: a
decision the file could not argue with. A short file got an index that only repeated what was already
in sight, and a long one could not choose to open with its first paragraph instead. So the file says
where, or says nothing and gets none - and with the count no longer deciding anything, a file that
asks for an index gets one however few headings it has.

**An index lists the headings below it, and only those.** A table of contents is the way into what
comes next; a section already read is not something to be sent back to. So the tag's place in the
file is a real choice and not only a matter of layout: put it under a chapter's opening paragraph and
it indexes the chapter, put it halfway down and it indexes the second half, and a tag below the last
heading is empty and leaves no trace.

- **The line must hold nothing else.** Whitespace around the tag is fine - the indentation is the
  block's own, as with any other - but a word beside it and the line is ordinary text.
- **The tag is void** (`isVoidPseudoTag()`, see "Pseudo-tags"), and its block rule is registered
  *before* `pseudo_tag`, which would otherwise draw the line as a caption box.
- **Every heading still gets its `id`**, listed or not, so a link can always point at a section.
  That is `documentHeadings()`'s other job, and why it runs for every page. It now runs for
  `markdownToHtml()` too, which is why a bare `## x` renders as `<h2 id="x">` even without a page
  around it.
- **An index cannot be rendered from inside the token stream** - it is built from the stream around
  it. `prepareDocument()` parses, puts every index in the env by its tag's token position, and only
  then renders the body; the renderer rule reads back the one belonging to the line it is on. Hence
  parse and render being two steps rather than one `markdown.render()`, and hence a `Map` rather than
  a single string: two tags in one file hold different indexes.
- **A tag with no heading below it drops its line** rather than showing an empty box.
- The indentation is measured against the shallowest heading *of that index*, so a tag standing among
  `##`s starts flush whatever the `#` above it is doing.

**Beware the first line.** `isRtlFile()` decides a plain `.md` file's direction by its first line
holding a letter, and `<תוכן-העניינים>` is Hebrew - so an English file that opens with the tag renders
right-to-left. A `.rtl.md` file is unaffected, and so is any file with a line of prose above the tag.

### Printing a page

The print button, and a file like `פירוש/הדפסה.rtl.md` that exists only to be printed, make paper a real
destination rather than a courtesy - so `PAGE_STYLE` ends with an `@media print` block. Every page
gets it; nothing is special-cased to the one file.

- **The margins move from the body to `@page`.** On screen the reading column is `main`'s
  `max-width`; on paper it is the sheet, so `@page { margin }` sets it and `main` is let go.
- **The backgrounds have to be asked for.** A browser drops every background when printing, and here
  the colour is the thing that says whether a block is an `<עיון>` or a `<מדרש>` - so
  `print-color-adjust: exact` on `body` (it inherits) brings the pseudo-tag boxes, the quote strips,
  the shaded inline code and a table's header row back.
- **Nothing is split that reads as one thing**: `break-inside: avoid` on a pseudo-tag box, a table, a
  row, a quote and a list item, `break-after: avoid` on every heading, and `orphans`/`widows` on
  paragraphs.
- **Every `#` starts a new sheet.** An embedded file opens with its own, so a file that is a
  collection of `<כלול-בהדפסה>` directives prints as the chapters it is, with the title and the
  תוכן העניינים alone on page 1. `main > :first-child` is exempt, so no sheet comes out blank - and so is the first `#` of the page
  (`main > h1:first-of-type`), or a credit line above it would print as a sheet of its own.
  This is the one opinionated rule of the block - drop `h1 { break-before: page }` for a continuous
  scroll instead.
- **The breadcrumb trail is dropped** - a way around the site is no use on paper - which is what
  keeps it out of every PDF of the PDF mirror, as Chromium prints them with this very block.
- **A collapsed index would print as its title alone**, so `<details>` is forced open on paper.
- **Links lose the blue and the underline**: on paper a link cannot be followed, and only the words
  are left to read. Not in the PDF mirror, though: a PDF is read on a screen as often as on paper, so
  `pointLinksAt()` puts the blue back before printing.

To see the result without a printer, Chrome will do it from the command line - no server needed,
since a page in the mirror is a file:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer \
    --print-to-pdf=/tmp/print.pdf "file://$PWD/../docs/_HTML-FROM-MD/<path>.html"
```

### The PDF mirror

Every page of the HTML mirror is printed to a PDF (`pdf-mirror.ts`):
`docs/_HTML-FROM-MD/<path>/<name>.html` → `docs/_PDF-FROM-MD/<path>/<name>.pdf`. The folder indexes are not
printed - a list of links is no document to print - but every folder of the PDF mirror does get an
`index.html` of its own, listing its PDFs (see "Folder indexes" above).

- **Printed from the page, not from the Markdown.** The page is what a reader sees, and its `@media print`
  block (see "Printing a page") is already the layout meant for paper.
- **A PDF is judged by a stamp, not by dates.** Every PDF carries `/PerushSource` in its document info: an
  MD5 of the page it was printed from, of `pdf-mirror.ts` and of where its links are pointed
  (`sourceStamp()`), added after printing by `pdf-lib` (`withStamp()`). A PDF is stale when it is missing or
  its stamp is not the one its page would give now. The HTML mirror's `make` rule could not be used one step
  later, because the PDFs are committed: a fresh clone dates every file in whatever order git wrote it, which
  would reprint PDFs that are right - or, worse, keep one printed from an older page. It also used to reprint
  every PDF whenever a renderer edit made `syncPage()` re-date pages that came out identical.
  - `readStamp()` reads only the first 8 KB: Chromium makes the document info object 1, and pdf-lib writes
    objects in order. It falls back to the whole file. The PDF is saved without object streams, which would
    compress the stamp out of sight.
  - Both stamps - the page's and the PDF's - are cached by the file's `stat` (`cached()`), so a sweep reads
    nothing that has not changed. A PDF without a stamp, or not printed by this code, is simply stale.
- **HtmlMirror drives it**, through its `companion`: every `syncFile()` schedules the file's PDF, and every
  sweep is one for the PDFs too - scheduling them all (a fresh one costs two `stat`s) and deleting those
  whose file is gone. Nothing else - no watcher, no timer - has to know the PDFs exist.
- **One browser, one file at a time, in the background.** Playwright's Chromium is launched when a PDF is
  due and closed after 30 s of nothing to do; `syncFile()` shares one print between the queue and the
  print button asking for the same file. The whole tree (~700 pages) takes a couple of minutes the first
  time, and `rebuild-whole-html-folder` waits for it (`idle()`).
- **The links are rewritten before printing** (`pointLinksAt()`). The page is loaded as a file, so every
  link in it is a `file://` URL, and Chrome writes it into the PDF as it is - leading nowhere once the PDF
  is shared. A link into `docs/` is pointed at GitHub Pages, and one to anything else in the repository
  at GitHub (`publicUrls()`, from the `origin` remote; `https://<owner>.github.io/<repo>/` is the default
  project-site URL, and a custom domain would have to be written in). A `#heading` link stays a link
  within the PDF.
- **A link to another page leads to its PDF**, not to the page - one PDF leads to the next. A folder's
  `index.html` stays itself (the PDF mirror has its own). A `#heading` on it becomes `#nameddest=<name>`,
  which is how a PDF viewer is told where to scroll - and that needs two things Chromium does not do:
  - **A destination for every heading.** Chromium writes one only for an id some link of the page points
    to, so `pointLinksAt()` adds a hidden link to every id.
  - **A name no viewer decodes.** Chromium names a destination by the link's fragment, percent-encoded,
    and a viewer decodes the fragment it is given (Chrome's exactly once, pdf.js its own way). So every id
    is renamed first, to plain ASCII with no `%` - letters, digits and `-` as they are, every other byte
    `_XX` (`pdfDestName()`) - and the in-page links with it.
- **Read from this server, a PDF's links lead back to it.** On disk they lead to GitHub Pages, for the
  PDF that is shared; but a PDF opened at `localhost:4000/docs/...` should not send its reader off to
  the published site, which may well be behind. So the `/docs/` handler serves a PDF of the mirror
  through `PdfMirror.servedFrom()`, which points every link to GitHub Pages at the request's own
  `<origin>/docs/` (pdf-lib, on the annotations; the last one made is cached). The links to GitHub -
  to a file that has no page - are left as they are.
- **Size.** A PDF embeds its fonts, so each is some 300-600 KB - several hundred MB for the tree, which is
  worth knowing before committing it all.

### The print and HTML buttons

Two small buttons beside the help button open the active file in a tab of its own: the printer
(`#print-button`) its PDF, at `GET /api/pdf/<path>.md`, and the `</>` to its left (`#html-button`)
its page, at `GET /api/html/<path>.md`. `initPrintButton()` wires both to `openPublished()`. They are the
only things inside the editor that read the mirrors, and the server hands over what is there rather
than re-deriving it - there is only one renderer, and it has already run.

**The endpoint redirects** (302) to the file under `/docs/...`, which the server serves as a folder of
static files, the way GitHub Pages does. Serving the file's bytes at the `/api/` URL instead would break
every relative link of the page - to the next page, to its folder's `index.html` - since they would be
resolved against `/api/html/`. The `/docs/` handler normalizes the path and refuses one that leaves `docs/`.

Two things the handler does before redirecting:

- **It brings the page - and for the print button the PDF - up to date** (`syncFile()` of each). The
  mirrors' own syncs are debounced and queued, so a file saved a moment ago may still have yesterday's
  page or PDF on disk - and what is shown has to be what is on the screen.
- **It checks that the page is inside the mirror.** `htmlPathFor()` joins the path onto
  `docs/_HTML-FROM-MD/` and normalizes it, so a `../` that climbed out has left the prefix behind - which
  is exactly what the test is. Without it the endpoint would serve any `.html` file on the disk.
  `pdfPathFor()` is built on `htmlPathFor()`, so the one test covers both.
  A file with no page at all (a `*.script.md`) gets a Hebrew error *page*, not a bare 404: it is
  opening in a tab of its own and has to say something there.

**The client opens the tab before it saves, not after.** A dirty file is written first (`autosave()`),
but a `window.open()` issued after that await is no longer part of the click as the browser counts
it, and a pop-up blocker takes it. So the tab is opened empty, synchronously, and its `location` set
once the save settles - whether the save worked or not, because a stale page beats no page.

### Markdown links

Cmd+click (Ctrl+click off macOS - where Cmd does not exist and Ctrl+click is not the context-menu
gesture) on a `[text](path)` link opens the linked file. `public/src/links.js` holds the parsing,
free of any editor dependency the way `tables.js` is, so it can be unit-tested on its own.

- **One regexp answers both questions.** `markdownLinksInLine()` feeds `markdownLinkPlugin`, which
  marks every link `.cm-md-link`, *and* `markdownLinkAt()`, which the click handler asks about the
  clicked position - so what lights up under the Cmd key is exactly what a click would open.
  The syntax tree is deliberately not used: it would answer a different question from the regexp,
  and the two would drift apart.
  So `.cm-md-link` carries the link *colour* too, not only the syntax highlighting - which follows
  CommonMark and would stop colouring a target at its first space, though a Cmd+click opens it.
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
  `http(s)`/`mailto` target opens a browser tab instead; a directory, and a `../` that climbs out of the served tree, open
  nothing. A path that names no file is *not* turned away - the tab shows the usual "file not found"
  note and picks the file up should it appear (see "Tab loading and order").
- **An `#anchor` goes to its heading** - `file.md#x` in that file, a bare `#x` in the linking one:
  the cursor lands on the heading's line and the view scrolls it to the top (`goToAnchor()`).
  `headingLineOfAnchor()` gives every heading the id the HTML mirror gives it - `headingSlug()` is
  shared, `md-to-html.ts` imports it, so the anchor that works on the page works in the editor - and
  falls back to a loose match (runs of `-` squeezed) for anchors written GitHub's way, `א--ב` for
  `א — ב`. Only `#` headings outside a code fence are seen.
- **The new tab goes right after the linking one**, not at the end of the strip: `openFile()` takes
  an `insertAfterFilePath`, inserts the button there and calls `reorderTabsFromDom()` to sort
  `this.tabs` to match - still synchronously, as that Map's order is the stored session order.

### Mixed-direction lines

In a line that mixes Hebrew and English, one spot on the screen can stand for two logical offsets, and
the visual ends of a row are not its logical ends: `אאא ttt` is painted `ttt אאא`, so its far left is
offset 4 (the *start* of "ttt") while the line ends at 7. These patches keep the editor straight about it:

- **`posAndSideAtCoords()` / `posAtCoords()`** (end of `markdown-editor.js`): a point beyond the text of a
  row - to the left of it in an RTL line - is the row's logical end, and one on the other side its logical
  start (`rowAt()`). CodeMirror finds a row's ends by asking these about the editor's far edges, so this one
  patch is what makes End / Home / Shift+End / Cmd+arrows reach the real end of the line, what makes a
  selection be *painted* over all of its text (it used to skip the English part), and what makes a click or
  a drag past the end of a line land at its end. Hence no Home or End key binding of our own.
- **A line's start is painted at its start edge** (`coordsAtPos()`, `moveByChar()`, `moveVertically()`, with
  `lineEdgeAlias()` / `toLineEdge()`), and its end at the other edge - even when the line opens (ends) with a
  run of the other direction. In `1. אאא` the "1" is a left-to-right run at the right end of an RTL line, and
  CodeMirror painted offset 0 on its *left*, while what stood at the right edge was offset 1, *after* the "1":
  Home seemed to land after the "1", and Backspace or a letter typed at the right edge acted after it. So the
  line's start and the run's far end swap places for the caret: the start is painted where the far end was,
  the arrows move from the start as from there, and an arrival there - by arrow, Up/Down or click - is an
  arrival at the start. Only for a caret's side of ±1: the selection layer asks `coordsAtPos()` with ±2, and
  its rectangles are untouched. A line that is one run throughout (an English line of an RTL file) is left
  alone.
- **`patches/@codemirror%2Fview@6.39.11.patch`** (`bun patch`, applied by `bun install`): CodeMirror's bidi
  algorithm forgot that a bracket pair resolved by rule N0 counts as a strong character for the pairs after
  it, so in `אאא [ttt](x.md)` it took `(x.md)` for LTR while the browser paints the parentheses RTL. Every
  Markdown link in Hebrew text was affected: the arrows moved the cursor the wrong way over the `(`, and a
  selection was painted in the wrong place. Upgrading `@codemirror/view` needs the patch carried over (or
  dropped, if upstream fixed it). The same patch holds two changes to the selection layer, both for the line
  start painted at the edge (above):
  - A line a selection only touches - the start of `1. אאא` after Shift+Left from the line above it - gets an
    empty piece, which CodeMirror measured with the selection's side of ±2, from the left of the "1" to the
    right edge: the "1" looked selected though it was not. It is measured as a cursor there now (±1).
  - The head of a non-empty range is painted on the side it holds (`r.assoc`), not always leaning into the
    range. `bidiEdgeSelectionExtension()` sets that side through `rangeWithSide()` - an arrival at the left of
    the "1" is painted there - since `EditorSelection.range()` takes no side; for every range CodeMirror makes
    itself, the side it holds is the one it used to be painted with.
  Re-making the patch (`bun patch @codemirror/view@6.39.11`, edit, `bun patch --commit ...`) adds an empty
  `.bun-tag-*` file to it - drop that entry from the patch file.
- **`bidiEdgeSelectionExtension()`**: Shift+Left / Shift+Right over a character whose two sides are the same
  offset (by its side, `assoc`) - a step over it changed only the side, and a selection did not grow at all.
  When a step keeps the head's offset, the character whose glyph lies between the two painted carets is
  selected instead (`charSteppedOver()`); stepping back shrinks it to the caret it began as.
- **`rowEdgeEnterExtension()`**: Enter with the caret painted at an edge of its row acts at that edge's logical end -
  in an RTL row the right edge is its start, the left edge its end (`rowEdgeOf()`) - so Enter at the right edge of
  `1. אאא` pushes the whole line down rather than splitting it after the "1". The cursor is moved first and Enter
  left to the bindings after it (list continuation, indentation) - which is why it is `Prec.highest`: markdown's
  own Enter is `Prec.high`.

What remains is bidi itself, not a bug: arrows move *visually*, so one of the two offsets at a direction
boundary in the middle of a line is never visited by them.

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

- **Box-drawing characters are mirrored in RTL files**: `┌` and `┐` swap places (and `├`/`┤`, `└`/`┘`,
  and the header rule's `╞`/`╡`) between the editor's text and the file on disk. See "Table formatting" above - do not "fix" a
  `.rtl.md` file that looks reversed in a terminal.
- **Cursor layer uses LTR coordinates**: `.cm-cursorLayer` has `direction: ltr` even when content is `direction: rtl`. The cursor's CSS `left` is always relative to the scroller's left edge (which includes the gutter width of ~36px).
- **Gutter is always on the left**: Even for RTL files, the line-number gutter is on the left side. The content area starts after the gutter.
- **Short RTL lines and empty space**: RTL text is right-aligned within the `.cm-line` element. Clicking in the empty space to the LEFT of short text correctly places the cursor at end-of-line (the leftmost text position in RTL). This is expected CodeMirror behavior.
- **Previous cursor offset attempts**: There have been two prior attempts to fix RTL cursor positioning — a CSS `left: 0.5em` rule (removed, caused offset issues) and a commented-out `mouseup` handler in `markdown-editor.js` (lines ~226-258). See the comments in the code for details.
- **Font fallback**: RTL content uses `fontFamily: 'David', 'Narkisim', 'Times New Roman', serif`. David and Narkisim are not standard macOS fonts — Playwright's Chromium will likely fall back to Times New Roman, which may produce different character metrics than the user's browser.

## Git

Commit to whatever branch is checked out; never create one first. Claude Code's
built-in "if on the default branch, branch first" rule does not apply here -
single author, no review workflow, so a side branch only adds a merge step.
