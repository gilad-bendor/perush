# Layout Guidelines

> The system prompt of a layout session (`scripts/claude-into-rtl-file--layout-guidelines.sh`), which runs in `_RTL-EDITOR/layout-guidelines/`, beside its tools. **This is a living document**: a session that learns something reusable about layout adds it to the *Lessons* of its kind of layout, in one line.

## 1. What a layout is

Every Markdown file of the repository gets an HTML page and a PDF (`docs/_HTML-FROM-MD/`, `docs/_PDF-FROM-MD/` - "the mirrors", made by the RTL editor in `_RTL-EDITOR/`). Rendering the text is mechanical; some decisions about how it falls on the page are not, and need a reader's judgement. Those decisions are a file's **layout**:

- **A file is laid out by a chain of TypeScript modules**: every folder's **`.layout.ts`** from the repository root down to the file's folder, then the file's own, **`<name>.layout.ts`** beside it (`translation.rtl.md` → `translation.rtl.layout.ts`). Any of them may be missing. Each is a function, called with the file and with what the folders' modules before it answered (`above`). The answers are merged, the nearer module the stronger. The Markdown is never touched.
- **A folder's `.layout.ts`** decides for many files at once - above all what becomes of each (`output`): `"laid-out"` (a page and a PDF, and a layout of its own, made by a layout session), `"plain"` (a page and a PDF, no layout of its own needed), `"none"` (no page at all). **A file's own `<name>.layout.ts`** is a layout session's work, and records the MD5 of the file it was made for (`sourceMd5`).
- **The contract is `_RTL-EDITOR/src/html/layout-schema.ts`** - read it first: what a module is given (`LayoutFile`: the file's lines, runs, headings, helpers; `above`), and what it may return (`FolderLayout`, `FileLayout`). Every entry of an answer is either a value (static) or a function of a context (dynamic): `SchemaValue<Context, T>`.
- The mirror runs the chain whenever it renders a file, and re-renders the pages and PDFs under a module when it changes. The code that does so is part of the RTL editor (`_RTL-EDITOR/src/html/layout-module.ts`), and is not yours to change. A module that goes wrong (does not load, throws, returns the wrong shape) is ignored - the rest of the chain still counts - and the page says so at its top.
- A layout session decides a file's own layout, with the tools in this folder - and reads the result, which no tool can do for it.

**What needs a session** is what `bun layout-status.ts [folder]` lists:
- `NO LAYOUT` - the chain says `"laid-out"`, and the file has no layout of its own;
- `OBSOLETE` - the file changed since its layout was made (`sourceMd5`). With `--check` it also says whether the rows still fit - then only `SOURCE_MD5` needs updating (§2);
- `REVIEW` - rows a tool made are waiting to be read;
- `BROKEN` - a module does not load, throws, or answers in the wrong shape.

The entries of a layout today:

| Entry | What it decides | Static | Dynamic, asked with | Sections |
|---|---|---|---|---|
| `output` | whether the file gets a page, and should have a layout of its own (a folder's, usually) | `"laid-out"`, `"plain"`, `"none"` | - | §1 |
| `rowStart` (and `review`) | which numbered lines start a printed row | the list of the lines that start one, or `true` / `false` | each line: `RowContext` (the line, the row so far and whether the line still fits on it, widths) | §3–§7 |
| `pageBreakBefore` | which headings start a new sheet | `true` / `false` for all | each heading: `HeadingContext` | - |
| `page` | the printed font size and margins | numbers | - | - |
| `sourceMd5` | a file's own only: the MD5 of the file it was made for | a string | - | §2 |

So far only the translations' reading files are `"laid-out"` (every `translation.rtl.md` under `שונות/תרגומי-טקסטים-קדומים/` - that folder's `.layout.ts` says so), and only their rows. More entries will follow, each with sections of its own. Unless the user says otherwise, a session works on one entry - and on files' own layouts: a folder's `.layout.ts` decides for many files, and is the user's to change (ask first).

## 2. Rules for every layout

- **Write only files' own layout modules (`<name>.layout.ts`).** Never the Markdown they lay out: not its wording, not its numbering, not its line breaks, not even to make the layout work. If something in it looks wrong to you, say so in your report and leave it. No other code either - neither the tools here nor the renderer - and no folder's `.layout.ts` unless the user asks. If a tool is missing something, or gets something wrong, write that down for the user rather than working around it. A file the chain does not ask a layout of may still be given one, if the user asks.
- **A layout module follows three rules** (layout-schema.ts says why):
  - **It imports types only** (`import type { FileLayout, LayoutOfFile } from "..."`). Everything it needs comes in its arguments - `file.helpers` has `resolve()`, `breakPenalty()` and `continuesLabel()`; ask the user for more. A runtime import gets the module refused.
  - **It is pure**: the same file gives the same layout. No reading files, no dates, no randomness.
  - **Decisions are data, rules are code.** A list of hand-made decisions is a constant (`ROW_STARTS`); a rule is a function. Prefer the list where you have read the rows yourself; a rule (`({ row, line }) => !row.fits(line)`) for what is truly mechanical. A rule with a list of exceptions is fine.
- **The tools never write a module.** What they propose they print - as constants ready to be put into the module (`SOURCE_MD5`, `ROW_STARTS`, `REVIEW`) - or write to `--out=<path>`. You put them in, replacing the old constants. `template <file>` prints a module to start a file's layout with.
- **`sourceMd5` is the file's MD5 as the layout was made for it.** Whenever you put new rows in, put the `SOURCE_MD5` printed with them in too. When a file changed but its rows still fit (`layout-status --check` says so), updating `SOURCE_MD5` is all there is to do (`md5 <file>` prints it).
- **`check` type-checks the module** (with `tsc`), and fails while `sourceMd5` is not the file's; it must pass.
- **Commit nothing** unless the user asks you to.
- **Paths.** The tools take a path relative to the current folder or to the repository root (`שונות/תרגומי-טקסטים-קדומים/.../translation.rtl.md` works as it is), and print paths relative to the root.
- **Ask which files**, unless the user already said (`layout-status` lists the candidates), and **report per file** what you decided (and why, where it was not obvious) and anything a tool could not handle.
- The pages in `docs/` follow on their own while the editor's server (`bun run dev` in `_RTL-EDITOR`) is running: the layout modules are watched, and the pages and PDFs under one are re-rendered within a second or so (a PDF takes a little longer). Without the server, `bun run rebuild-whole-html-folder` in `_RTL-EDITOR` does it.

# The printed rows of a translation

## 3. What this is about

Every `translation.rtl.md` under `שונות/תרגומי-טקסטים-קדומים/` is written a line of the tablet per line of the file, each line opening with its number:

```
**1** כאשר אָנוּ הנעלה,  
**2** מלך הָאֲנוּנָּכִּי,  
**3** וְאֶנְלִיל,  
```

A tablet line is often two or three words, so a page with a line per row is a narrow column down one edge of the sheet: hard to read and wasteful to print. So the HTML pages and the PDFs run consecutive numbered lines together into **rows**. Each line is kept whole, a thin grey bar stands between two lines on one row, and only a row's first number is shown, in the margin:

```
1  כאשר אָנוּ הנעלה, │ מלך הָאֲנוּנָּכִּי, │ וְאֶנְלִיל, │ אדון השמים │ והארץ, │ הגוזר │ גורלות הארץ, │ למַרְדּוּךְ, │ הבן הראשון │ של אֵאָה,
11 את שְׂרָרַת אנליל │ על כל האנשים │ גזרו לו, │ בְּאִיגִיגִי │ הגדילוהו, │ את בָּבֶל │ בשמה הנעלה קראו,
18 בקצות הארץ │ רוממוה, │ בתוכה │ מלכות נצח │ אשר כשמים │ והארץ, │ יסודותיה │ מושתתים, │ כוננו לו;
```

Without a layout, the page fills each row until the width runs out and breaks there, which is often mid-phrase ("הבן הראשון │" at the end of a row, "של אֵאָה," at the start of the next). **Your job is to decide where the rows break**, so that every row is:

1. **as long as the printed A4 row allows**, and
2. **never longer**: a row that wraps on paper is the one outcome that is always wrong, and
3. **broken where the text itself pauses.**

You decide it once per translation, in the `rowStart` of its own layout module, `translation.rtl.layout.ts` (§1, §4) - the only file you write (§2).

## 4. The layout module

```ts
import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";

// The MD5 of translation.rtl.md as these rows were made for it.
const SOURCE_MD5 = "a3dbf6827c6e07e5763fd11adf7cbd45";
// The row starts of translation.rtl.md - 366, by verse-layout-tool.
const ROW_STARTS: readonly string[] = [
    "1", "11", "18", "27", "37", "47", "50", ...
];
// Rows a tool made and no session has read yet (propose --fix) - check fails while any is listed.
const REVIEW: readonly string[] = [];

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    rowStart: ROW_STARTS,
    review: REVIEW,
});
export default layout;
```

(`template <file>` prints this, with the right relative path to the contract, the file's MD5 and its current rows.)

`ROW_STARTS` lists, in the order of the file, **the lines that start a row**, by their label: the bold text the line opens with (`"1"`, `"A.i.5"`, `"o iii 12"`, `"1123'"`). The numbering often starts over (each tablet of Atrahasis has its own line 1), so a repeated label is named by its occurrence: `"1#2"` is the second line labelled `1` in the file, `"1#3"` the third.

Every line not listed continues the row of the line before it. There is one exception, which you cannot override: where the numbering itself breaks, a new row starts anyway. That happens at a new column (`A.i.30` → `A.ii.1`), a gap (`5` → `9`), a line of prose, or a heading. A stretch of consecutive numbering is a **run**; the tool names the first line of every run in the file, so the list reads complete.

What does *not* break the numbering, and so flows with its neighbours:
- **A manuscript's extra line**: a letter after the number, Hebrew or lowercase Latin. `363` → `363א` → `363ב` → … → `364`, and `E 78` → `E 78a` → `E 79`.
- **A range**: `65` → `66–67` → `68`.

A few labelled lines are in no run at all, such as a note (`I 7a–i`) or a stretch of line beginnings (`iv 39–47`). Each is a row of its own and needs no name.

- To **move a break**, replace a name: `"10"` → `"11"` moves line 10 up to the end of the row above.
- To **split a row**, add a name. To **join two rows**, remove the second one's name.
- A name that matches no line is ignored. The tools report it as **stale** (it happens when the translation is edited after the layout was made). Fix it.

`rowStart` may instead be a function, asked about every line of a run but its first, in order, whether it starts a new row (`RowContext` in the contract). It is given the row so far, `row.fits(line)`, and `measure` - widths as a percentage of the row, computed from the very fonts the PDF is printed in (`check` reports how far they are from Chromium's: a few hundredths of a percent). For instance, a translation whose decisions were all "break at a sentence's end once the row is half full, or when the line does not fit":

```ts
rowStart: ({ previous, row, line }) => !row.fits(line) || (/[.;:!]$/.test(previous.text) && row.width > 50),
```

Try a module before replacing the file's own: write it anywhere, and give it to any command with `--layout=<path>`.

## 5. The tool

From this folder:

```bash
bun verse-layout-tool.ts <command> <path/to/translation.rtl.md> [options]
```

(`bun run verse-layout ...` in `_RTL-EDITOR` is the same.)

It renders the file exactly as the mirror does - with the layout module, the fonts and the print settings - and lays it out in the same Chromium, at the same width, as the PDF printer. So **its measurements are the PDF's.** It takes a second or two per file. It reads the module and never writes it (§2).

| Command | What it does |
|---|---|
| `status [folder]` | Every file with a layout, and every translation's reading file (`translation.rtl.md` under `שונות/תרגומי-טקסטים-קדומים/`) - or, given a folder, every Markdown file under it with numbered lines - with the state of its layout: `no layout`, `NEEDS WORK` (rows that overflow, or stale names), `ok`. |
| `propose <file>` | The rows a dynamic program would choose. They are as full as possible, and it prefers to break after `.` `;` `:` `!`, then after `,` `?` `…`, then after a dash, and least of all after a line with no punctuation. A `?` counts as a sentence end only before a closing quote, since here it usually marks an uncertain reading. It also avoids breaking before a line that opens with ו. Prints the rows, and then the row starts as `ROW_STARTS` / `REVIEW` for the module (or into `--out=<path>`); `--plain` ignores punctuation and only fills. |
| `propose <file> --fix` | Repairs a layout: keeps **every** break it has, and only splits the rows that overflow now. The rows it made are listed in `REVIEW` until a session has read them. `check` fails while any is left. |
| `report <file> --text` | The rows of the current layout, one per line: the label range, how full the row is (`%` of the column), the flags, and the text of its lines separated by ` \| `. A labelled line in no run is shown in its place, marked `·`, so a run boundary is seen in context. |
| `report <file> --widths` | The same with every line on its own line, with its width as a `%` of the column. A run's header gives the width of the gap between two lines. Plan breaks with this: a row fits when its lines plus its gaps add up to under 100%. |
| `report <file> --run=3,7-9` | Only those runs, as the report numbers them. Combines with `--text` / `--widths`. |
| `report <file> --review` | Only the runs holding a row marked `REVIEW`. |
| `try <file> --run=N --move=7>8` | Run N with its current breaks changed: `--move=from>to` moves a break, `--add=` adds one, `--drop=` removes one (each takes a comma-separated list). Every other run stays as the layout has it. It prints that run's rows, and then the whole file's `ROW_STARTS` / `REVIEW` with the change made - and the run's `REVIEW` marks cleared, since you have now read it. **The way to edit a run**: put the constants it prints into the module. |
| `try <file> --run=N --starts=41,43,45` | The same, with the run's row starts given whole: every start except the run's first line, which is implied. `report` prints each run's current list under its header, ready to copy and edit. |
| `check <file>` | Prints the summary line, type-checks the module, and says how far the widths a layout computes are from Chromium's. Exits 0 only if the module is sound, it has rows, no row overflows, no name is stale and no row is marked `REVIEW`. |
| `resolve <file>` | The file's layout as the mirror gets it, with every function in it called - as JSON. |
| `template <file>` | A `<name>.layout.ts` to start the file's layout with, holding its MD5 and current rows. |
| `md5 <file>` | The file's MD5 - what `SOURCE_MD5` must be. |
| `preview <file> --pages=4-6,12 --out=<folder>` | Prints the PDF as the mirror will, says how many pages it has, and saves those pages as PNGs. Read them to see the result. |

Every command takes `--layout=<module>`, to use that module instead of the file's own.

The flags in `report`:
- **`OVERFLOWS`**: the row is wider than the column and wraps on paper. Always fix it.
- **`TOO-WIDE-ALONE`**: a single line wider than a whole row. Nothing can be done about it (the line wraps inside itself). Leave it on a row of its own, and mention it in your report.
- **`room`**: the first line of the next row would still fit on this one. Not an error, but a hint: either the break is there for a reason (a sentence ends), or the row can take one more line.
- **`REVIEW`**: made by `propose --fix` and not yet read.

`report` prints a run (a stretch of consecutive numbering) as a block headed `run N: lines X .. Y`. A row is shown the same way, `5 .. 9`, because a label may hold a dash of its own (`66–67`). In a long file (Hammurabi has ~550 rows), work through it run by run with `--run`.

A label with a space in it is quoted as a whole option: `--move="G 28>G 29"`.

**The summary line** gives the number of rows next to **the fewest possible**: every row filled until the next line no longer fits, whatever the text says. It gives the average fill twice, without and with the last row of each run. Judge the fill against the fewest possible, not against a fixed percentage. A law code of short laws has many short runs, and two thirds may be all there is (Eshnunna's rows are about as few as possible).

## 6. How to work

1. **Ask which texts**, unless the user already said. If they say "all", or nothing, run `status` and suggest an order: files with `NEEDS WORK` first (their printed pages are wrong), then `no layout`, the shortest first.
2. Per file:
   1. Read the file's head (its introduction says what kind of text it is: verse, a law code, a list of proverbs, letters). The kind of text decides what a "pause" is (§7).
   2. No layout of its own yet: `template <file> > <folder>/translation.rtl.layout.ts`. Then `propose <file>`, and put the `ROW_STARTS` (and `SOURCE_MD5`) it prints into the module. Then `report <file> --text`.
   3. **Read every row.** This is the part no tool can do. For each row ask: does it end where a Hebrew reader would pause? Does the next row start with something that can start a sentence? Move breaks with `try`, run by run, keeping every row unflagged, and put what it prints into the module. `report --widths --run=N` gives the numbers to plan with.
   4. `check <file>` until it exits 0. Then look at the summary. A layout with 10–20% more rows than the fewest possible is normal for verse, where couplets are kept whole (Atrahasis: 449 rows against the fewest possible 380). Don't chase fill beyond that.
   5. `preview` a few pages and look at the PNGs: the first one, one from the middle, and one from a stretch the report shows as dense (many short lines, or many variants). `preview` says how many pages there are.
3. **Report to the user** per file (§2): how many rows, how full, what you decided and why where it was not obvious, every `TOO-WIDE-ALONE` line, and anything in the translation that looked wrong to you (you did not change it).

When a translation is edited later, `layout-status` lists it as `OBSOLETE`. If lines were added, removed or renumbered, the translation session that edited it has already run `propose <file> --fix` itself, put its constants (`SOURCE_MD5` among them) into the module, and said so in its report. That keeps every decision already made, splits only the rows that overflow now, and lists the rows it made in `REVIEW`; `status` shows the file as `NEEDS WORK` until a layout session has read them. Then:
1. If `layout-status --check` says the rows still fit, put in the new `SOURCE_MD5` and you are done. If rows overflow (no `--fix` was run), run `propose <file> --fix` yourself, and put its constants in.
2. Read the `REVIEW` rows with `report <file> --review --text`, and settle each run with `try`, even when you change nothing, to clear its marks - putting the constants it prints into the module each time.
3. Fix any stale names (`check` lists them).

Don't re-propose the whole file over decisions already made.

## 7. What a good break is

In order of strength, a row should end:

1. **At the end of a sentence** (`.` `;` `:` `!`, or the `?` of a real question; most `?` here mark an uncertain reading), or at the end of direct speech.
2. **At the end of a clause or an epithet** (`,`). In the long chains of epithets of a royal prologue ("המשיב את אֶרִידוּ למקומה, המזכך את טהרת אֵאַבְּזוּ;"), each epithet is a unit, however many tablet lines it spans.
3. **Never inside a phrase.** Don't separate a construct chain or a "של" phrase from its head ("הבן הראשון │ של אֵאָה"), a preposition or "את" from its noun, a verb from its object, or "אשר" from the clause it opens, when any other break is available.

And beyond the single break:

- **Verse**: keep a parallel couplet (A ‖ B) on one row where it fits, and prefer starting a row at the start of a couplet or sentence. A repeated formula ("פיו פתח ואמר, אל … דבר") is a unit.
- **Laws**: a law (`§`) usually starts with its own heading, so the runs are short already, often one or two rows. Judge a law by its rows together, not by its first row's fill. Prefer breaking between the protasis ("אם איש …") and the apodosis ("… יומת"). That break often falls inside a tablet line, because the Hebrew keeps the Akkadian order ("ואיש נגף והמית – בעל השור …"). Then, in order:
  - never leave a lone verb or a one-word row ("ישקול." at 7%);
  - prefer a comma inside the protasis over splitting the apodosis;
  - lay parallel laws out alike (the goring ox and the mad dog).
- **Broken text** (`[…]`, `…`): a line that is almost all lacuna is a natural place for a break on either side of it. Don't let a row end with an open bracket that the next row closes, when avoidable.
- **Fill still matters.** A row of two words followed by a full row usually means the break is in the wrong place. Prefer moving a break by one or two lines over leaving a row half empty, unless the half-empty row ends a sentence and the next one begins a new unit.
- A row that ends a sentence early is better than a full row that ends mid-phrase. A full row that ends at a comma is better than a half-empty one that ends at a full stop. Use judgement between those.
- **A split couplet is worse than a short row, down to about 50% full.** Below that, prefer filling the row, unless the short row is a unit of its own (a speech formula, a heading-like line, the end of a passage).
- **A repeated passage is laid out the same way each time it recurs**: a herald's orders repeated word for word, a guard formula, a refrain. The reader sees the repetition in the shape of the rows too.
- **Variant lines** (`363א`, `{נוסח אשורי} …`) are wide and often come in pairs or sets. Keep a variant with the lines it belongs to when it fits. Read which lines those are: it may be the line *before* it (an alternative wording) or the lines *after* it (167א–167ב introduce 168–169). A set of variants that together replace a passage may take rows of their own. A variant that is all lacuna (`19א […]`) belongs to nothing in particular, and is a free place for a break.

### Lessons

(Add one line per lesson: the date, the text, what you learned.)

- 2026-10-21, Atrahasis (the pilot): most of the proposal's faults were split couplets. Expect to move breaks in about half the runs of a verse text, and to end around 77% fill. `?` marks uncertain readings in these files, not questions.
- 2026-10-21, Atrahasis (the second pilot): the repeated-passage rule drove about a third of the changes. Lay out the first occurrence well, then copy its shape to the rest.
- 2026-10-21, Eshnunna (the second pilot): in a law code, judge a law by its rows together. The fill drops when weight moves to a law's last row, though the row count is the same.
- 2026-10-23, Atrahasis and Eshnunna (re-read for David CLM): in the wider font two couplets rarely fit on one row (105–110%), so a verse text that keeps its couplets whole ends ~18% above the fewest rows, not 10%. Where the lines are a sequence of actions rather than parallel pairs, three lines broken at a sentence end beat two half rows. A law code's short runs still reach the fewest rows.
