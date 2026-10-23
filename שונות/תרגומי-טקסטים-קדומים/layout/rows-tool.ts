// The rows tool: what a layout session uses to lay out a translation's printed rows - which its own layout
// module decides (`translation.rtl.layout.ts`, through translation-layout.ts). The session's guidelines are
// layout-guidelines.md, beside it; the generic part is in _RTL-EDITOR/layout-guidelines/.
//
// It reads a layout module, and never writes one: what it proposes it prints - the row starts and the
// file's MD5, as constants ready to be put into the module - and a session puts them there.
//
//     bun rows-tool.ts <command> <file.md> [options]                           (here)
//     bun run rows <command> <file.md> [options]                               (in _RTL-EDITOR)
//
// A path is taken relative to the current folder, or else to the repo root; the paths it prints are
// relative to the repo root.
//
// It renders the file as the mirror does, opens it in Playwright's Chromium - the same browser that
// prints the PDFs - lays the page out at the width of the printed sheet, exactly as a PDF is laid out
// (the editor's line-rows script, on beforeprint), and measures every numbered line (tool-kit.ts). With those widths a row's
// fit is plain arithmetic, and whether a row wraps on paper is read off the page itself.
//
// Commands:
//   status [folder]           every Markdown file under the folder (the whole tree by default) that its layout
//                             says should have one of its own (`output: "laid-out"`), or has one: its rows,
//                             and what is wrong with them. (layout-status.ts lists what needs a session.)
//   report <file>             the rows as the layout makes them: fill, overflow, room for one more line
//       --text                    with the text of each row's lines
//       --widths                  with every line on its own, and its width (% of the column)
//       --run=3,7-9               only these runs (as numbered in the report)
//       --review                  only the runs holding a row marked REVIEW (split by propose --fix)
//   try <file> --run=N [--starts=<names>] [--add=<names>] [--drop=<names>] [--move=<from>to,...]
//                             run N laid out anew: its row starts given whole (comma-separated, its first
//                             line implied), or the current ones changed - reported, and the row starts of
//                             the whole file printed, with the run's REVIEW marks cleared
//   propose <file> [--plain] [--fix]
//                             the best rows by width and punctuation (proposeRows()) - reported, and their
//                             row starts printed. --fix: keep every break of the layout, and only split the
//                             rows that overflow now, marking them REVIEW
//   check <file> [--ignore-md5]
//                             the summary line, the module type-checked, and how far the widths a layout
//                             computes are from Chromium's; exit 1 unless the module is sound, its MD5 is the
//                             file's (unless --ignore-md5), every row fits, every name matches a line and no
//                             row is marked REVIEW
//   resolve <file>            the file's layout with every function in it called - as JSON
//   compare <file> --with=<module>
//                             where the rows of the file's layout (or of --layout=) differ from those another
//                             module gives - place by place, each side's rows with their text
//   template <file> [--rules] a `<name>.layout.ts` to start the file's layout with - its current rows as a list,
//                             or (--rules) a rule: the rows that cost least, with room for exceptions
//   md5 <file>                the file's MD5, as its layout's `sourceMd5` must say
//   preview <file> [--pages=2-4,9] [--out=<folder>]
//                             prints the PDF the mirror would, and those pages as PNGs (pdftoppm)
//
// Options of every command:
//   --layout=<module>         lay the file out with this module instead of its own - to try one out
//   --out=<path>              write the row starts there, rather than at the end of the report (try, propose)

import { existsSync, readFileSync, statSync, writeFileSync } from "fs";
import { basename, dirname, join, relative, resolve } from "path";
import { tmpdir } from "os";
import type { PageSettings } from "../../../_RTL-EDITOR/src/html/layout-schema";
import {
    closeBrowser, layoutFileOf, layoutFor, layoutPathFor, markdownFiles, md5Of, measureGroups, outputOf, pageHtml, printPreview,
    readSource, REPO_ROOT, ROW_SAFETY_PX, typeErrors, type PageLayout,
} from "../../../_RTL-EDITOR/layout-guidelines/tool-kit";
import { type NumberedLine } from "./numbered-lines";
import { proposeRows, type MeasuredLine } from "./rows";
import { predictedLineWidths, translationFile, translationLayout, type RowsBy } from "./translation-layout";

/** A file's printed rows, as the tool works with them: the lines that start a row, and those to review. */
type VerseLayout = { rows: string[], review?: string[] };

/** A row fits when it leaves at least this much of the column - the same margin a layout's `row.fits()` keeps. */
const SAFETY_PX = ROW_SAFETY_PX;

type Line = MeasuredLine & { label: string, index: number, rowStart: boolean };

type MeasuredRun = {
    column: number;
    gap: number;
    lines: Line[];
    /** The rows that wrap on paper, as the page itself shows - by the key of their first line. */
    wrapped: string[];
};

type Measurement = {
    runs: MeasuredRun[];
    /** The numbered lines that are in no run - each a row of its own, whatever the layout says. */
    alone: NumberedLine[];
    /** Every numbered line of the file, in order - what a key's place in the file is read from. */
    all: NumberedLine[];
    unknownRows: string[];
    layout: VerseLayout | null;
    page: PageSettings | null;
    layoutError?: string;
};

// ------------------------------------------------------------------------------------------------
// Measuring

/** `--layout=`: a module to use instead of the file's own. */
let layoutOverride: string | undefined;

/** The file's own layout module - its `<name>.layout.ts`, unless `--layout=` names another. */
function modulePathOf(mdFile: string): string {
    return layoutOverride ?? layoutPathFor(mdFile);
}

/** The file's layout as the mirror gives it to its own page - with the rows the tool works with (its `data`). */
async function readLayout(mdFile: string): Promise<{
    layout: VerseLayout | null, page: PageSettings | null, laidOut: PageLayout, rowsBy: RowsBy | null, error?: string,
}> {
    const laidOut = await layoutFor(REPO_ROOT, relative(REPO_ROOT, mdFile), readSource(mdFile), true, layoutOverride);
    const data = laidOut.resolved?.data ?? {};
    const rowStarts = data.rowStarts as string[] | null | undefined;
    const review = (data.review as string[] | undefined) ?? [];
    const layout = rowStarts ? { rows: rowStarts, ...review.length ? { review } : {} } : null;
    const error = laidOut.problems.map(problem => `${problem.file}: ${problem.message}`).join("; ") || undefined;
    return { layout, page: laidOut.resolved?.page ?? null, laidOut, rowsBy: (data.rowsBy as RowsBy | undefined) ?? null, error };
}

/** The page of `mdFile`, laid out by `layout` (none: every run one row), measured at the printed width. */
async function measure(mdFile: string, layout: VerseLayout | null, page: PageSettings | null): Promise<Omit<Measurement, "layout" | "page">> {
    const raw = readSource(mdFile);
    const file = layoutFileOf(relative(REPO_ROOT, mdFile), raw);
    const laid = translationLayout(file, page ? [{ page }] : [], layout ? { rowStart: layout.rows } : {});
    const all = translationFile(file).numbered as NumberedLine[];
    const byIndex = new Map(all.map(line => [line.index, line]));
    const measured = await measureGroups(pageHtml(mdFile, raw, laid.groups ?? [], page, { sourceLines: true }));

    const keyOf = (sourceLine: number) => byIndex.get(sourceLine)?.key ?? `?${sourceLine + 1}`;
    const runs = measured.map(run => ({
        column: run.column,
        gap: run.gap,
        lines: run.lines.map(line => ({
            key: keyOf(line.sourceLine),
            label: byIndex.get(line.sourceLine)?.label ?? "?",
            index: line.sourceLine,
            width: line.width,
            text: line.text,
            rowStart: line.rowStart,
        })),
        wrapped: run.wrapped.map(keyOf),
    }));
    const inRuns = new Set(runs.flatMap(run => run.lines.map(line => line.index)));
    const alone = all.filter(line => !inRuns.has(line.index));
    return { runs, alone, all, unknownRows: (laid.data?.stale as string[] | undefined) ?? [] };
}

async function measureWithLayout(mdFile: string, layout?: VerseLayout | null): Promise<Measurement> {
    const read = await readLayout(mdFile);
    const used = layout === undefined ? read.layout : layout;
    return { ...await measure(mdFile, used, read.page), layout: used, page: read.page, layoutError: read.error };
}

// ------------------------------------------------------------------------------------------------
// Rows

type Row = { lines: Line[], width: number, fill: number, overflows: boolean, wraps: boolean, room: boolean };

function rowsOf(run: MeasuredRun): Row[] {
    const groups: Line[][] = [];
    for (const line of run.lines) {
        if (line.rowStart || !groups.length) groups.push([]);
        groups[groups.length - 1].push(line);
    }
    const usable = run.column - SAFETY_PX;
    const width = (lines: Line[]) => lines.reduce((sum, line, i) => sum + line.width + (i ? run.gap : 0), 0);
    return groups.map((lines, i) => {
        const w = width(lines);
        const next = groups[i + 1]?.[0];
        return {
            lines,
            width: w,
            fill: w / run.column,
            overflows: w > usable,
            wraps: run.wrapped.includes(lines[0].key),
            room: !!next && w + run.gap + next.width <= usable,
        };
    });
}

/** `5 .. 9` - not with a dash, which a label may hold itself (`66–67`). */
function span(lines: { label: string }[]): string {
    return lines.length === 1 ? lines[0].label : `${lines[0].label} .. ${lines[lines.length - 1].label}`;
}

const percent = (fraction: number) => `${(fraction * 100).toFixed(0)}%`;

type Summary = {
    rows: number, overflowing: number, roomy: number, tooWide: number, averageFill: number, allFill: number,
    fewest: number, toReview: number,
};

/** As few rows as the run can have: each filled until the next line no longer fits. */
function fewestRows(run: MeasuredRun): number {
    let rows = 0, width = Infinity;
    for (const line of run.lines) {
        if (width + run.gap + line.width > run.column - SAFETY_PX) {
            rows++;
            width = line.width;
        } else {
            width += run.gap + line.width;
        }
    }
    return rows;
}

function summarize(measurement: Measurement): Summary {
    let rows = 0, overflowing = 0, roomy = 0, tooWide = 0, fills = 0, counted = 0, allFills = 0, fewest = 0;
    const review = reviewSet(measurement);
    let toReview = 0;
    for (const run of measurement.runs) {
        fewest += fewestRows(run);
        const runRows = rowsOf(run);
        toReview += runRows.filter(row => review.has(row.lines[0].key)).length;
        allFills += runRows.reduce((sum, row) => sum + Math.min(row.fill, 1), 0);
        runRows.forEach((row, i) => {
            rows++;
            if (row.overflows || row.wraps) {
                if (row.lines.length === 1) tooWide++;
                else overflowing++;
            }
            if (row.room) roomy++;
            if (i < runRows.length - 1) { fills += Math.min(row.fill, 1); counted++; }
        });
    }
    return { rows, overflowing, roomy, tooWide, averageFill: counted ? fills / counted : 1, allFill: rows ? allFills / rows : 1, fewest, toReview };
}

function reviewSet(measurement: Measurement): Set<string> {
    return new Set(measurement.layout?.review ?? []);
}

/** `3,7-9` → {3, 7, 8, 9}; nothing → null, meaning all. */
function numberSet(spec: string | undefined): Set<number> | null {
    if (!spec) return null;
    const numbers = new Set<number>();
    for (const part of spec.split(",")) {
        const [from, to] = part.split("-").map(Number);
        if (!Number.isInteger(from) || (to !== undefined && !Number.isInteger(to))) throw new Error(`not a list of numbers: ${spec}`);
        for (let n = from; n <= (to ?? from); n++) numbers.add(n);
    }
    return numbers;
}

type ReportOptions = { text: boolean, widths: boolean, runs: Set<number> | null, review?: boolean };

function printReport(measurement: Measurement, options: ReportOptions): void {
    let alone = 0;
    const printAlone = (beforeIndex: number, shown: boolean) => {
        for (; alone < measurement.alone.length && measurement.alone[alone].index < beforeIndex; alone++) {
            const line = measurement.alone[alone];
            if (shown) console.log(`  · ${line.label.padEnd(16)} (in no run - a row of its own)  ${options.text || options.widths ? line.text : ""}`.trimEnd());
        }
    };
    const review = reviewSet(measurement);
    for (const [i, run] of measurement.runs.entries()) {
        const shown = (!options.runs || options.runs.has(i + 1))
            && (!options.review || run.lines.some(line => review.has(line.key) && line.rowStart));
        printAlone(run.lines[0].index, shown && (!!options.runs || !!options.review));
        if (!shown) continue;
        const all = run.lines;
        console.log(`\nrun ${i + 1}: lines ${span([all[0], all[all.length - 1]])} - column ${run.column.toFixed(0)}px, `
            + `a gap between two lines is ${percent(run.gap / run.column)}`);
        const starts = rowsOf(run).slice(1).map(row => row.lines[0].key);
        console.log(`  (try --run=${i + 1} --starts=${starts.join(",")})`);
        for (const row of rowsOf(run)) {
            const flags = [
                row.overflows || row.wraps ? (row.lines.length === 1 ? "TOO-WIDE-ALONE" : "OVERFLOWS") : "",
                row.room ? "room" : "",
                review.has(row.lines[0].key) ? "REVIEW" : "",
            ].filter(Boolean).join(" ");
            const head = `  ${span(row.lines).padEnd(20)} ${percent(row.fill).padStart(4)}  ${flags.padEnd(9)}`;
            console.log(options.text && !options.widths ? `${head} ${row.lines.map(line => line.text).join(" | ")}` : head.trimEnd());
            if (options.widths) {
                for (const line of row.lines) {
                    console.log(`      ${line.label.padEnd(16)} ${percent(line.width / run.column).padStart(4)}  ${line.text}`);
                }
            }
        }
        // What stands between this run and the next, so a boundary is read in its context.
        printAlone(measurement.runs[i + 1]?.lines[0].index ?? Infinity, true);
    }
    printSummary(measurement);
}

function printSummary(measurement: Measurement): void {
    const s = summarize(measurement);
    console.log(`\n${s.rows} rows in ${measurement.runs.length} runs (the fewest possible: ${s.fewest}); ${s.overflowing} overflow; `
        + `${s.tooWide} lines too wide for a row of their own; ${s.roomy} with room for one more line; `
        + `average fill ${percent(s.averageFill)} without the last row of each run, ${percent(s.allFill)} with it; `
        + `${measurement.alone.length} numbered lines in no run`);
    if (s.toReview) console.log(`${s.toReview} rows marked REVIEW - changed by propose --fix, not read yet (report --review)`);
    if (measurement.layoutError) console.log(`THE LAYOUT IS IGNORED - it went wrong: ${measurement.layoutError}`);
    else if (!measurement.layout) console.log("no rows in the layout - every run is one row, wrapped where the width runs out");
    if (measurement.unknownRows.length) {
        console.log(`${measurement.unknownRows.length} names of the layout match no line (stale): ${measurement.unknownRows.join(", ")}`);
    }
}

// ------------------------------------------------------------------------------------------------
// Changing a layout

/** The names in file order - whatever order they were collected in. */
function inFileOrder(keys: Iterable<string>, all: readonly NumberedLine[]): string[] {
    const order = new Map(all.map((line, i) => [line.key, i]));
    return [...new Set(keys)].sort((a, b) => (order.get(a) ?? Infinity) - (order.get(b) ?? Infinity));
}

/** These rows; `review` is carried over from the existing ones unless given. */
function newLayout(rows: string[], existing: VerseLayout | null, review = existing?.review ?? []): VerseLayout {
    const kept = review.filter(name => rows.includes(name));
    return { rows, ...kept.length ? { review: kept } : {} };
}

/** The current rows of every run, as names - what a layout file says, reconstructed from the page. */
function currentStarts(measurement: Measurement): string[][] {
    return measurement.runs.map(run => rowsOf(run).map(row => row.lines[0].key));
}

/**
 * The proposal for every run - or, to fix a layout, only inside the rows that overflow now: every break
 * the layout already has is kept, and such a row is split as proposeRows() would split a run of its own.
 */
async function propose(mdFile: string, plain: boolean, fix: boolean): Promise<VerseLayout> {
    const existing = (await readLayout(mdFile)).layout;
    const rows: string[] = [];
    if (fix && existing) {
        const split: string[] = [];
        const review = [...existing.review ?? []];
        for (const run of (await measureWithLayout(mdFile, existing)).runs) {
            for (const row of rowsOf(run)) {
                if (!(row.overflows || row.wraps) || row.lines.length === 1) {
                    rows.push(row.lines[0].key);
                    continue;
                }
                const starts = proposeRows(row.lines, run.column - SAFETY_PX, run.gap, plain ? () => 0 : undefined);
                for (const start of starts) rows.push(row.lines[start].key);
                for (const start of starts) review.push(row.lines[start].key);
                split.push(`${span(row.lines)} → ${starts.map((start, i) => span(row.lines.slice(start, starts[i + 1]))).join(", ")}`);
            }
        }
        console.log(split.length ? `split ${split.length} rows that overflowed - they are marked REVIEW until read:\n  ${split.join("\n  ")}`
            : "no row overflows - nothing to fix");
        return newLayout(rows, existing, review);
    }
    for (const run of (await measure(mdFile, null, (await readLayout(mdFile)).page)).runs) {
        for (const start of proposeRows(run.lines, run.column - SAFETY_PX, run.gap, plain ? () => 0 : undefined)) rows.push(run.lines[start].key);
    }
    return newLayout(rows, existing, []);
}

type RunEdit = { starts?: string[], add: string[], drop: string[], move: [string, string][] };

/**
 * The layout with run `runNumber` laid out anew - its row starts given whole (`starts`), or the current
 * ones changed (`add`, `drop`, `move`) - and every other run as it is now. The run counts as read: its
 * rows leave `review`.
 */
async function withRunEdited(mdFile: string, runNumber: number, edit: RunEdit): Promise<VerseLayout> {
    const existing = (await readLayout(mdFile)).layout;
    const current = await measureWithLayout(mdFile, existing);
    const run = current.runs[runNumber - 1];
    if (!run) throw new Error(`there is no run ${runNumber} - the file has ${current.runs.length}`);
    const keys = new Set(run.lines.map(line => line.key));
    const first = run.lines[0].key;

    let starts = new Set(edit.starts ?? rowsOf(run).slice(1).map(row => row.lines[0].key));
    const missing = (name: string) => { if (!starts.has(name)) throw new Error(`no row of run ${runNumber} starts at ${name}`); };
    for (const name of edit.drop) { missing(name); starts.delete(name); }
    for (const [from, to] of edit.move) { missing(from); starts.delete(from); starts.add(to); }
    for (const name of edit.add) starts.add(name);
    starts.delete(first);

    const strange = [...starts].filter(key => !keys.has(key));
    if (strange.length) throw new Error(`not lines of run ${runNumber}: ${strange.join(", ")} (it holds ${span([run.lines[0], run.lines[run.lines.length - 1]])})`);
    const others = currentStarts(current).filter((_, i) => i !== runNumber - 1).flat();
    const review = (existing?.review ?? []).filter(name => !keys.has(name));
    return newLayout(inFileOrder([...others, first, ...starts], current.all), existing, review);
}

// ------------------------------------------------------------------------------------------------
// Other commands

/** The Markdown files under the folder that should have a layout of their own, or have one. */
async function findLaidOutFiles(folder: string | undefined): Promise<string[]> {
    const found: string[] = [];
    for (const path of await markdownFiles(folder)) {
        const full = join(REPO_ROOT, path);
        if (existsSync(join(REPO_ROOT, layoutPathFor(path))) || await outputOf(REPO_ROOT, path) === "laid-out") found.push(full);
    }
    return found;
}

async function preview(mdFile: string, pages: string | undefined, out: string): Promise<void> {
    // The page exactly as the mirror makes it: rows, page breaks, print settings and font.
    const { laidOut, page, error } = await readLayout(mdFile);
    if (error) console.log(`A LAYOUT MODULE WENT WRONG, and what it says is ignored: ${error}`);
    const resolved = laidOut.resolved;
    const html = pageHtml(mdFile, readSource(mdFile), resolved?.groups ?? [], page, { pageBreaks: resolved?.pageBreaks });
    const wanted = numberSet(pages ?? "1-3");
    const printed = await printPreview(html, wanted ? [...wanted] : null, out);
    if (!printed.pngs.length) throw new Error(`no such pages: ${pages} - the PDF has ${printed.pageCount}`);
    console.log(`PDF: ${printed.pdf} (${printed.pageCount} pages)`);
    console.log(`PNGs: ${printed.pngs.join("\n      ")}`);
}

// ------------------------------------------------------------------------------------------------
// What the tool gives a session to put into a module

/** Names as a TypeScript array, packed several to a line - a long list stays readable. */
function namesLiteral(names: readonly string[]): string {
    const lines: string[] = [];
    let current = "";
    for (const name of names) {
        const item = JSON.stringify(name);
        if (current && current.length + item.length + 2 > 100) {
            lines.push(current + ",");
            current = "";
        }
        current += (current ? ", " : "") + item;
    }
    if (current) lines.push(current);
    return lines.length ? `[\n${lines.map(line => `    ${line}`).join("\n")}\n]` : "[]";
}

/** The rows as constants for a file's layout module - what `sourceMd5`, `rowStart` and `review` are given there. */
function rowsSnippet(mdFile: string, layout: VerseLayout): string {
    return `// The MD5 of ${basename(mdFile)} as these rows were made for it.\n`
        + `const SOURCE_MD5 = ${JSON.stringify(md5Of(readFileSync(mdFile, "utf-8")))};\n`
        + `// The row starts of ${basename(mdFile)} - ${layout.rows.length}, by the rows tool.\n`
        + `const ROW_STARTS: readonly string[] = ${namesLiteral(layout.rows)};\n`
        + `// Rows a tool made and no session has read yet (propose --fix) - check fails while any is listed.\n`
        + `const REVIEW: readonly string[] = ${namesLiteral(layout.review ?? [])};\n`;
}

/** Gives the rows to the session: into `--out=`, or at the end of the report. */
function emit(mdFile: string, layout: VerseLayout, out: string | undefined): void {
    const snippet = rowsSnippet(mdFile, layout);
    if (out) {
        writeFileSync(out, snippet);
        console.log(`\nwrote the row starts to ${out} - put them into ${relative(REPO_ROOT, modulePathOf(mdFile))}`);
    } else {
        console.log(`\n----- the row starts, for ${relative(REPO_ROOT, modulePathOf(mdFile))} -----\n${snippet}----- end -----`);
    }
}

/** A module to start a file's layout with - with its current rows, if it has any; or a rule. */
async function template(mdFile: string, rules: boolean): Promise<string> {
    const relativeTo = (target: string) => {
        const path = relative(dirname(mdFile), target);
        return path.startsWith(".") ? path : `./${path}`;
    };
    const schema = relativeTo(join(REPO_ROOT, "_RTL-EDITOR/src/html/layout-schema"));
    const logic = relativeTo(join(import.meta.dir, "translation-layout"));
    const header = `// The layout of ${basename(mdFile)}'s page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
`;
    if (rules) return `${header}
import type { FileLayout, LayoutOfFile } from "${schema}";
import { translationLayout, type BreakContext, type BreakCost } from "${logic}";

// The MD5 of ${basename(mdFile)} as this layout was made for it.
const SOURCE_MD5 = ${JSON.stringify(md5Of(readFileSync(mdFile, "utf-8")))};

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [];

/** What ending a row after a line costs: the default (punctuation), but for the exceptions. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(words => line.text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => line.text.endsWith(words))) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
// More to say beside rowBreak (layout-guidelines.md, §2): units kept whole (\`endsUnit\`, \`unitEnd\`), passages
// repeated with small changes (\`repeatedPassages: "similar"\`), rows never nearly empty (\`minimumFill\`).
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
`;
    const current = (await readLayout(mdFile)).layout ?? { rows: [] };
    return `${header}
import type { FileLayout, LayoutOfFile } from "${schema}";
import { translationLayout } from "${logic}";

${rowsSnippet(mdFile, current)}
// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowStart: ROW_STARTS, review: REVIEW }),
});
export default layout;
`;
}

/**
 * Where two sets of row starts differ - place by place, each side's rows there, with their lines' text. A place is
 * a stretch of a run between two lines both sides start a row with, where the two break differently: one run may
 * hold several, and each is a decision of its own.
 */
function compareRows(mdFile: string, ours: Set<string>, theirs: Set<string>, thisName: string, otherName: string): void {
    const file = translationFile(layoutFileOf(relative(REPO_ROOT, mdFile), readSource(mdFile)));
    let places = 0, runsDiffering = 0;
    file.runs.forEach((run, i) => {
        const startsOf = (starts: Set<string>) => run.map((line, j) => j === 0 || starts.has(line.key));
        const a = startsOf(ours), b = startsOf(theirs);
        if (a.every((start, j) => start === b[j])) return;
        runsDiffering++;
        // The stretches between the rows both sides start - [from, to), by place in the run.
        const shared = run.map((_, j) => j).filter(j => a[j] && b[j]);
        const stretches = shared.map((from, k) => [from, shared[k + 1] ?? run.length] as const)
            .filter(([from, to]) => a.slice(from, to).some((start, j) => start !== b[from + j]));
        const rows = (starts: boolean[], from: number, to: number) => {
            const out: string[] = [];
            for (let j = from; j < to; j++) {
                const line = run[j];
                if (starts[j]) out.push(`${line.label}: ${line.text}`);
                else out[out.length - 1] += ` | ${line.text}`;
            }
            return out;
        };
        for (const [from, to] of stretches) {
            places++;
            console.log(`\nplace ${places} - run ${i + 1}: lines ${span([run[from], run[to - 1]])}`);
            for (const row of rows(a, from, to)) console.log(`  this   ${row}`);
            for (const row of rows(b, from, to)) console.log(`  with   ${row}`);
        }
    });
    console.log(`\n${places} places differ, in ${runsDiffering} of ${file.runs.length} runs (this: ${thisName}; with: ${otherName})`);
}

// ------------------------------------------------------------------------------------------------
// Checking

/** How far the widths a layout computes (Measure) are from Chromium's - in points of a row's percent. */
function widthDeviation(mdFile: string, measurement: Measurement): { largest: number, at: string, mean: number } {
    const predicted = predictedLineWidths(layoutFileOf(relative(REPO_ROOT, mdFile), readSource(mdFile)), measurement.page ?? undefined);
    let largest = 0, at = "", sum = 0, count = 0;
    for (const run of measurement.runs) {
        for (const line of run.lines) {
            const ours = predicted.get(line.key);
            if (ours === undefined) continue;
            const difference = Math.abs(ours - line.width / run.column * 100);
            sum += difference;
            count++;
            if (difference > largest) { largest = difference; at = line.key; }
        }
    }
    return { largest, at, mean: count ? sum / count : 0 };
}

// ------------------------------------------------------------------------------------------------

async function main(): Promise<number> {
    const [command, target, ...rest] = process.argv.slice(2);
    const flag = (name: string) => rest.includes(`--${name}`);
    const option = (name: string) => rest.find(arg => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
    const toPath = (path: string) => existsSync(resolve(path)) ? resolve(path) : resolve(REPO_ROOT, path);
    const file = target && toPath(target);
    const needFile = () => {
        if (!file || !existsSync(file) || !statSync(file).isFile()) throw new Error(`no such file: ${target}`);
    };
    if (flag("write")) throw new Error("the tool writes no layout: it prints the row starts (or writes them to --out=<path>), for you to put into the file's layout module");
    const override = option("layout");
    if (override !== undefined) {
        layoutOverride = toPath(override);
        if (!existsSync(layoutOverride)) throw new Error(`no such layout module: ${override}`);
    }
    const reportOptions = (): ReportOptions => ({ text: flag("text"), widths: flag("widths"), runs: numberSet(option("run")), review: flag("review") });

    switch (command) {
        case "status": {
            for (const path of await findLaidOutFiles(file || undefined)) {
                const measurement = await measureWithLayout(path);
                const s = summarize(measurement);
                const name = relative(REPO_ROOT, path);
                if (!measurement.layout) {
                    // Every run is one row then - whose "overflow" says nothing.
                    const lines = measurement.runs.reduce((sum, run) => sum + run.lines.length, 0);
                    const state = measurement.layoutError ? "BROKEN LAYOUT" : "no layout";
                    console.log(`${state.padEnd(13)} ${name}: ${lines} numbered lines in ${measurement.runs.length} runs`);
                    continue;
                }
                const obsolete = (await readLayout(path)).laidOut.obsolete;
                const state = s.overflowing || measurement.unknownRows.length || s.toReview || measurement.layoutError || obsolete ? "NEEDS WORK" : "ok";
                console.log(`${state.padEnd(13)} ${name}: ${s.rows} rows (fewest ${s.fewest}), ${s.overflowing} overflow, `
                    + `${measurement.unknownRows.length} stale, ${s.toReview} to review, fill ${percent(s.averageFill)}${obsolete ? ", OBSOLETE (the file changed)" : ""}`);
            }
            return 0;
        }
        case "report":
            needFile();
            printReport(await measureWithLayout(file), reportOptions());
            return 0;
        case "try": {
            needFile();
            const run = Number(option("run"));
            const names = (value: string | undefined) => (value ?? "").split(",").map(name => name.trim()).filter(Boolean);
            const edit: RunEdit = {
                starts: option("starts") === undefined ? undefined : names(option("starts")),
                add: names(option("add")),
                drop: names(option("drop")),
                move: names(option("move")).map(pair => {
                    const [from, to] = pair.split(">").map(name => name.trim());
                    if (!from || !to) throw new Error(`--move takes from>to pairs: ${pair}`);
                    return [from, to] as [string, string];
                }),
            };
            if (!Number.isInteger(run)) throw new Error("try needs --run=N");
            if ((await readLayout(file)).rowsBy === "rule") {
                console.log("NOTE: this layout is a rule (rowBreak); what try prints is a list of breaks - putting it in replaces the rule.");
            }
            const layout = await withRunEdited(file, run, edit);
            printReport(await measureWithLayout(file, layout), { ...reportOptions(), text: true, runs: new Set([run]) });
            emit(file, layout, option("out"));
            return 0;
        }
        case "propose": {
            needFile();
            if (flag("fix") && (await readLayout(file)).rowsBy === "rule") {
                throw new Error("this layout is a rule (rowBreak), which follows the file by itself: there is nothing to fix - "
                    + "and --fix would print a list of breaks in its place. If rows overflow, adjust the rule.");
            }
            const layout = await propose(file, flag("plain"), flag("fix"));
            if (flag("fix")) printSummary(await measureWithLayout(file, layout));
            else printReport(await measureWithLayout(file, layout), reportOptions());
            emit(file, layout, option("out"));
            return 0;
        }
        case "check": {
            needFile();
            const measurement = await measureWithLayout(file);
            printSummary(measurement);
            const s = summarize(measurement);
            const modulePath = modulePathOf(file);
            const types = existsSync(modulePath) ? typeErrors(modulePath) : "";
            if (types) console.log(`${modulePath.startsWith(REPO_ROOT) ? relative(REPO_ROOT, modulePath) : modulePath} does not type-check:\n${types}`);
            const { laidOut } = await readLayout(file);
            const obsolete = laidOut.obsolete && !flag("ignore-md5");
            if (laidOut.obsolete) {
                console.log(`the file has changed since its layout was made: its sourceMd5 should be ${md5Of(readFileSync(file, "utf-8"))}`
                    + (obsolete ? "" : " (ignored: --ignore-md5)"));
            }
            if (measurement.layout) {
                const deviation = widthDeviation(file, measurement);
                console.log(`the widths a layout computes (measure) are within ${deviation.largest.toFixed(2)}% of a row of Chromium's `
                    + `(at line ${deviation.at}; ${deviation.mean.toFixed(2)}% on average)`);
            }
            return measurement.layout && !measurement.layoutError && !types && !obsolete && !s.overflowing && !measurement.unknownRows.length && !s.toReview ? 0 : 1;
        }
        case "resolve": {
            needFile();
            const { laidOut, error } = await readLayout(file);
            if (error) throw new Error(`a layout module went wrong: ${error}`);
            const resolved = laidOut.resolved;
            console.log(JSON.stringify(resolved && { ...resolved, pageBreaks: Object.fromEntries(resolved.pageBreaks) }, null, 2));
            return 0;
        }
        case "compare": {
            needFile();
            const other = option("with");
            if (!other) throw new Error("compare needs --with=<module>");
            // A module that goes wrong is no layout to compare - say so, rather than report the rows as the same.
            const side = async (name: string) => {
                const read = await readLayout(file);
                if (read.error) throw new Error(`${name} went wrong, and there is nothing to compare: ${read.error}`);
                return read.layout?.rows ?? [];
            };
            const ours = await side(layoutOverride ? basename(layoutOverride) : "the file's layout");
            const saved = layoutOverride;
            layoutOverride = toPath(other);
            const theirs = await side(basename(other));
            layoutOverride = saved;
            compareRows(file, new Set(ours), new Set(theirs), layoutOverride ? basename(layoutOverride) : "the file's layout", basename(other));
            return 0;
        }
        case "template":
            needFile();
            console.log(await template(file, flag("rules")));
            return 0;
        case "md5":
            needFile();
            console.log(md5Of(readFileSync(file, "utf-8")));
            return 0;
        case "preview":
            needFile();
            await preview(file, option("pages"), option("out") ?? join(tmpdir(), `rows-tool-${process.pid}`));
            return 0;
        default: {
            const source = readFileSync(import.meta.path, "utf-8").split("\n");
            console.log(source.slice(0, source.findIndex(line => !line.startsWith("//"))).map(line => line.slice(3)).join("\n"));
            return command ? 2 : 0;
        }
    }
}

main()
    .then(async code => { await closeBrowser(); process.exit(code); })
    .catch(async error => { console.error(error instanceof Error ? error.message : error); await closeBrowser(); process.exit(2); });
