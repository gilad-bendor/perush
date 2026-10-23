# Layout Guidelines

> The system prompt of a layout session (`scripts/claude-into-rtl-file--layout-guidelines.sh`), which runs in `_RTL-EDITOR/layout-guidelines/`, beside the general tools. What is said here holds for any layout; what a kind of file needs is in the guidelines beside its own layout logic (§1). **This is a living document**: a session that learns something reusable adds it - here if it is general, to its kind's guidelines if not - in one line.

## 1. What a layout is

Every Markdown file of the repository gets an HTML page and a PDF (`docs/_HTML-FROM-MD/`, `docs/_PDF-FROM-MD/` - "the mirrors", made by the RTL editor in `_RTL-EDITOR/`). Rendering the text is mechanical; some decisions about how it falls on the page are not, and need a reader's judgement. Those decisions are a file's **layout**:

- **A file is laid out by a chain of TypeScript modules**: every folder's **`.layout.ts`** from the repository root down to the file's folder, then the file's own, **`<name>.layout.ts`** beside it (`translation.rtl.md` → `translation.rtl.layout.ts`). Any of them may be missing. Each is a function, called with the file and with what the folders' modules before it answered (`above`). The answers are merged, the nearer module the stronger. The Markdown is never touched.
- **The editor knows nothing of what a file is about.** The contract, `_RTL-EDITOR/src/html/layout-schema.ts` - read it first - gives a module elementary capabilities: the file's lines, its paragraphs, its headings, and the width of any text on paper (`LayoutFile`, `Measure`). It takes back elementary decisions:

  | Entry | What it decides |
  |---|---|
  | `output` | whether the file gets a page and a PDF, and should have a layout of its own: `"laid-out"` (a page, and a layout of its own made by a session), `"plain"` (a page; the default), `"none"` (no page at all) |
  | `groups` | which consecutive lines of a paragraph share printed rows, where those rows start, and what of each line goes to the margin |
  | `pageBreakBefore` | which headings start a new sheet |
  | `page` | the printed font size and margins |
  | `attention` | what a layout session should look at - listed by `layout-status` |
  | `data` | anything the modules or their tools want to pass along - the editor passes it on and nothing more |
  | `sourceMd5` | a file's own layout only: the MD5 of the file it was made for |

- **Everything else is the business of the modules, and of the code they import** - files of the repository, by a relative path; the editor bundles them. A kind of file keeps its layout logic, its tools and its guidelines together in a `layout/` folder of its own, and its folder's `.layout.ts` calls that logic.
- The mirror runs the chain whenever it renders a file, and re-renders the pages and PDFs under a module - or anything it imports - when it changes. A module that goes wrong (does not load, throws, returns the wrong shape) is ignored - the rest of the chain still counts - and the page says so at its top.
- A layout session decides a file's own layout, with the tools - and reads the result, which no tool can do for it.

**The kinds of layout today:**

| Files | Their logic, tools and guidelines | Read |
|---|---|---|
| the ancient-text translations - every `translation.rtl.md` under `שונות/תרגומי-טקסטים-קדומים/` is `"laid-out"`: its numbered lines share printed rows | `שונות/תרגומי-טקסטים-קדומים/layout/` | its `layout-guidelines.md` - before laying out a translation |

The root's `.layout.ts` gives the editor's own folders (`_RTL-EDITOR/` and the like) `output: "none"`.

**What needs a session** is what `bun layout-status.ts [folder]` (here) lists:
- `NO LAYOUT` - the chain says `"laid-out"`, and the file has no layout of its own;
- `OBSOLETE` - the file changed since its layout was made (`sourceMd5`). With `--check` it prints the page, and says whether any row wraps - when none does, only `SOURCE_MD5` needs updating (§2);
- `ATTENTION` - what the layout itself asks a session to look at (rows a tool made and nobody read, names that match no line);
- `BROKEN` - a module does not load, throws, or answers in the wrong shape.

## 2. Rules for every layout

- **Write only files' own layout modules (`<name>.layout.ts`).** Never the Markdown they lay out: not its wording, not its numbering, not its line breaks, not even to make the layout work. If something in it looks wrong to you, say so in your report and leave it. No other code either - neither the editor, nor the tools, nor a kind's layout logic (`layout/`), nor a folder's `.layout.ts` - unless the user asks. If a tool or the logic is missing something, or gets something wrong, write that down for the user rather than working around it. A file the chain does not ask a layout of may still be given one, if the user asks.
- **A layout module follows three rules** (layout-schema.ts says why):
  - **It imports only files of the repository, by a relative path** - its kind's logic, above all - and types from anywhere. A package import gets the module refused.
  - **It is pure**: the same file gives the same layout. No reading files, no dates, no randomness.
  - **Rules first, then exceptions named by their words.** Where a kind's logic takes rules, prefer a rule with a few exceptions over a list of hand-made decisions. A rule lays out text it has never seen: an edit, even a renumbering, leaves it working. Name an exception by the words it is about, never by line number - a number moves when lines are added. Fall back to a list where a text needs more judgement than a rule and its exceptions can hold; and say so in your report.
- **The return type is spelled out** (`(file, above): FileLayout => ...`), so that `tsc` catches a misspelled entry - which it does not otherwise.
- **The tools never write a module.** What they propose they print - as constants ready to be put into the module - or write to `--out=<path>`. You put them in, replacing the old constants. A kind's tool has a `template` to start a module with.
- **`sourceMd5` is the file's MD5 as the layout was made for it.** Whenever you change the layout for a new version of the file, put the file's MD5 in too. When a file changed but its rows still fit (`layout-status --check` says so), updating `SOURCE_MD5` is all there is to do.
- **A kind's `check` must pass** - it type-checks the module, and fails while `sourceMd5` is not the file's.
- **Commit nothing** unless the user asks you to.
- **Paths.** The tools take a path relative to the current folder or to the repository root (`שונות/תרגומי-טקסטים-קדומים/.../translation.rtl.md` works as it is), and print paths relative to the root.
- **Ask which files**, unless the user already said (`layout-status` lists the candidates), and **report per file** what you decided (and why, where it was not obvious) and anything a tool could not handle.
- The pages in `docs/` follow on their own while the editor's server (`bun run dev` in `_RTL-EDITOR`) is running: the layout modules and what they import are watched, and the pages and PDFs under one are re-rendered within a second or so (a PDF takes a little longer). Without the server, `bun run rebuild-whole-html-folder` in `_RTL-EDITOR` does it.

## 3. The general tools

Here, in `_RTL-EDITOR/layout-guidelines/`:

| Tool | What it does |
|---|---|
| `bun layout-status.ts [folder] [--check]` | What needs a session (§1). Exit 1 when anything is listed. |
| `tool-kit.ts` | Not a command: what a kind's tool is built on - a page made as the mirror makes it, measured in Chromium, printed to a PDF, a module type-checked. |

A kind's own tool - the translations' `bun run rows ...` - is described in its guidelines.

### Lessons

(Add one line per lesson that holds for any layout: the date, what you learned.)
