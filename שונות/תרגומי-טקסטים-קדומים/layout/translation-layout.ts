// A translation's printed rows - the logic the translations' layout modules call.
//
// The editor knows nothing of numbered lines: it gives a layout module the file's lines and paragraphs and
// the width of any text on paper, and takes back `groups` - which lines share printed rows, where the rows
// start, and what of each line goes to the margin (_RTL-EDITOR/src/html/layout-schema.ts). This turns a
// translation's way of being laid out into those groups:
//
//     translationLayout(file, above, rows)      → { groups, attention, data }
//
// `rows` says where the rows of the file's runs (numbered-lines.ts) break - in one of three ways:
// - `rowStart` - outright: the list of the lines that start a row, by key (a layout session's hand-made
//   decisions), `true` / `false` (a row per line / one row per run), or a function asked about each line;
// - `rowBreak` - by rule: what ending a row after each line costs, and the rows that cost least are found
//   (proposeRows()), with `repeatedPassages: "alike"` (or `"similar"`) laying a repeated passage out like the
//   first time, `unitEnd` parsing a run into units (sentences, by default) that a rule may keep whole, and
//   `minimumFill` keeping rows from being nearly empty;
// - neither: one row per run, which the browser wraps where the width runs out.
// A `rowStart` overrides a `rowBreak`. Rows are measured only on a right-to-left page - the one the fonts
// are for; a left-to-right one (an English source) wraps in the browser whatever it is told.
//
// The translations folder's .layout.ts calls this for every Markdown file of the folder; a translation's own
// translation.rtl.layout.ts calls it again with its own decisions, and its answer is the one that counts.
//
// Pure, and imports nothing that runs but files of this folder: a layout module bundles it.

import type {
    FolderLayout, LayoutFile, LineGroup, Measure as PageMeasure, PageSettings, SchemaValue,
} from "../../../_RTL-EDITOR/src/html/layout-schema";
import { continuesLabel, echoesOf, numberedLines, runsOf, type NumberedLine } from "./numbered-lines";
import { breakPenalty, endsSentence, proposeRows, type BreakCost } from "./rows";

export type { BreakCost, NumberedLine };

/**
 * Widths on the printed page as a percentage of a row of the current run - the column, less the margin its
 * numbers stand in. From the very fonts the PDF is printed in (the editor's measure), so they are the PDF's
 * to within a fraction of a percent; the rows tool's `check` measures the real thing.
 */
export type Measure = {
    /** A line's width on its row: its text and the separator after it - not its number, which is in the margin. */
    readonly line: (line: NumberedLine) => number;
    /** Any Markdown text, set as a line's text is. */
    readonly text: (markdown: string) => number;
    /** The space between two lines of a row - beside their separator, which `line()` counts. */
    readonly gap: number;
    /** How much of a row its lines may take: a little under 100, for sub-pixel rounding. */
    readonly room: number;
};

/** The row a line would join, as it stands before that line. */
export type Row = {
    /** Its lines so far - at least one. */
    readonly lines: readonly NumberedLine[];
    /** How much of the row they take, in percent: their widths and the gaps between them. */
    readonly width: number;
    /** Whether `line` would still fit on it, after a gap: `width + gap + line(line) <= room`. */
    readonly fits: (line: NumberedLine) => boolean;
};

/** What a function `rowStart` is asked with: whether `line` starts a new row. */
export type RowContext = {
    readonly line: NumberedLine;
    /** The line before it - the last one of `row`. */
    readonly previous: NumberedLine;
    /** The line after it in the run, if there is one. */
    readonly next: NumberedLine | null;
    readonly row: Row;
    /** The whole run the line is in. */
    readonly run: readonly NumberedLine[];
    readonly measure: Measure;
    readonly file: TranslationFile;
};

/** What `unitEnd` is asked with: whether a unit of the run - a sentence, a couplet - ends with `line`. */
export type UnitContext = {
    readonly line: NumberedLine;
    /** The line after it in the run, if there is one. */
    readonly next: NumberedLine | null;
    readonly run: readonly NumberedLine[];
    /** The line's place in its run - 0 for its first. */
    readonly position: number;
    readonly measure: Measure;
    readonly file: TranslationFile;
};

/** A stretch of a run, by place in it - both ends included. */
export type Span = { readonly first: number, readonly last: number };

/** What `rowBreak` is asked with: what ending a row after `line` costs - `line` not the last of its run. */
export type BreakContext = {
    readonly line: NumberedLine;
    readonly next: NumberedLine;
    readonly run: readonly NumberedLine[];
    /** The line's place in its run - 0 for its first. */
    readonly position: number;
    /** What it costs by default: breakPenalty(line.text, next.text) - to build on. */
    readonly cost: number;
    /** The unit the line is in (`unitEnd`), by place in the run. */
    readonly unit: Span;
    /** Whether the unit ends with this line - a break here keeps it whole. */
    readonly endsUnit: boolean;
    readonly measure: Measure;
    readonly file: TranslationFile;
};

/** The file, as a translation's layout sees it: the editor's view of it, and its numbered lines. */
export type TranslationFile = LayoutFile & {
    /** Its numbered lines, in order. */
    readonly numbered: readonly NumberedLine[];
    /** Its runs - the lines that may share rows. */
    readonly runs: readonly (readonly NumberedLine[])[];
    /** Its repeated passages: a line's key → the line it repeats (numbered-lines.ts's echoesOf()). */
    readonly echoes: ReadonlyMap<string, NumberedLine>;
    /** The same, with lines that are nearly the same taken as repeating each other (echoesOf()'s `"similar"`). */
    readonly similarEchoes: ReadonlyMap<string, NumberedLine>;
};

/** Where a translation's rows break - see the top of this file. */
export type TranslationRows = {
    readonly rowStart?: readonly string[] | SchemaValue<RowContext, boolean>;
    readonly rowBreak?: SchemaValue<BreakContext, BreakCost>;
    /**
     * With `rowBreak`: `"alike"` breaks a repeated passage where its first occurrence breaks; `"similar"` does so
     * for a passage repeated with small changes of wording too; `"free"` (the default) does neither.
     */
    readonly repeatedPassages?: "alike" | "similar" | "free";
    /**
     * With `rowBreak`: where the run's units end - asked about every line of a run but its last, which always ends
     * one. By default a unit is a sentence (rows.ts's endsSentence()). `rowBreak` is told the unit of each line
     * (`unit`, `endsUnit`), to keep it whole: `({ endsUnit, cost }) => endsUnit ? cost : cost + 150`.
     */
    readonly unitEnd?: SchemaValue<UnitContext, boolean>;
    /**
     * With `rowBreak`: how full (percent) a row must be - but a run's last - when the next line would still fit on
     * it (rows.ts's RowOptions). Left out, a row may be as empty as its breaks make it.
     */
    readonly minimumFill?: number;
    /** Rows a tool made that no session has read yet (`propose --fix`), by the key of their first line. */
    readonly review?: readonly string[];
};

/** What the rows were decided by - for the tools (the answer's `data.rowsBy`). */
export type RowsBy = "list" | "rule" | "function" | "auto";

/** The file with its numbered lines - worked out once per file. */
const translationFiles = new WeakMap<LayoutFile, TranslationFile>();
export function translationFile(file: LayoutFile): TranslationFile {
    let found = translationFiles.get(file);
    if (!found) {
        const numbered = numberedLines(file.lines);
        const runs = runsOf(file, numbered);
        let similar: Map<string, NumberedLine> | null = null;
        found = Object.create(file, {
            numbered: { value: numbered },
            runs: { value: runs },
            echoes: { value: echoesOf(runs) },
            similarEchoes: { get: () => similar ??= echoesOf(runs, "similar") },   // only when a layout asks for it
        }) as TranslationFile;
        translationFiles.set(file, found);
    }
    return found;
}

/** The page settings the modules above give - the last one's of each field. */
function pageOf(above: readonly FolderLayout[]): PageSettings | undefined {
    const page = Object.assign({}, ...above.map(layout => layout.page ?? {}));
    return Object.keys(page).length ? page : undefined;
}

/** The labels of every run's paragraph - one margin for the paragraph, made for its widest. */
function marginNotes(file: TranslationFile): Map<readonly NumberedLine[], string[]> {
    const paragraphOf = (line: NumberedLine) => file.paragraphs.findIndex(p => p.from <= line.index && line.index <= p.to);
    const notes = new Map<number, string[]>();
    for (const run of file.runs) {
        const p = paragraphOf(run[0]);
        notes.set(p, [...notes.get(p) ?? [], ...run.map(line => line.label)]);
    }
    return new Map(file.runs.map(run => [run, notes.get(paragraphOf(run[0]))!]));
}

/** A run's widths, in percent of its row (Measure). */
function measureFor(file: TranslationFile, notes: readonly string[], page: PageSettings | undefined): Measure {
    const m: PageMeasure = file.measure(page);
    const row = m.row(notes);
    const percent = (px: number) => px / row * 100;
    return {
        line: line => percent(m.text(line.text) + m.separator),
        text: markdown => percent(m.text(markdown)),
        gap: percent(m.gap),
        room: 100 - percent(m.safety),
    };
}

/** Every line of every run's width, as Measure.line() gives it - for the rows tool to check against Chromium. */
export function predictedLineWidths(file: LayoutFile, page?: PageSettings): Map<string, number> {
    const translation = translationFile(file);
    const notes = marginNotes(translation);
    const widths = new Map<string, number>();
    for (const run of translation.runs) {
        const measure = measureFor(translation, notes.get(run)!, page);
        for (const line of run) widths.set(line.key, measure.line(line));
    }
    return widths;
}

/** Calls an entry's function, and makes sure of its answer's type. */
function call<C, T>(entry: string, at: string, fn: (context: C) => T, context: C, isRight: (value: unknown) => boolean, type: string): T {
    let value: T;
    try {
        value = fn(context);
    } catch (error) {
        throw new Error(`"${entry}" threw at ${at}: ${(error as Error).message}`);
    }
    if (!isRight(value)) throw new Error(`"${entry}" returned ${JSON.stringify(value)} at ${at} - not ${type}`);
    return value;
}

const isBreakCost = (value: unknown): value is BreakCost =>
    (typeof value === "number" && !Number.isNaN(value)) || value === "always" || value === "never";

/** The rows `rowStart` gives - a list, a boolean, or a function asked about every line but a run's first. */
function rowsByStart(file: TranslationFile, rowStart: NonNullable<TranslationRows["rowStart"]>, page: PageSettings | undefined): Set<string> {
    const starts = new Set<string>();
    if (typeof rowStart !== "function") {
        for (const run of file.runs) {
            starts.add(run[0].key);
            for (const line of run.slice(1)) {
                if (rowStart === true || (Array.isArray(rowStart) && rowStart.includes(line.key))) starts.add(line.key);
            }
        }
        return starts;
    }
    const notes = marginNotes(file);
    for (const run of file.runs) {
        starts.add(run[0].key);
        const measure = measureFor(file, notes.get(run)!, page);
        let lines: NumberedLine[] = [run[0]];
        let width = measure.line(run[0]);
        for (let i = 1; i < run.length; i++) {
            const line = run[i];
            const rowWidth = width;
            const row: Row = { lines, width: rowWidth, fits: candidate => rowWidth + measure.gap + measure.line(candidate) <= measure.room };
            const context: RowContext = { line, previous: run[i - 1], next: run[i + 1] ?? null, row, run, measure, file };
            if (call("rowStart", `line ${line.key}`, rowStart, context, value => typeof value === "boolean", "a boolean")) {
                starts.add(line.key);
                lines = [line];
                width = measure.line(line);
            } else {
                lines = [...lines, line];
                width += measure.gap + measure.line(line);
            }
        }
    }
    return starts;
}

/** A run's units: from a line after one `unitEnd` says ends a unit, to the next such line - the run's last ends one. */
function unitsOf(file: TranslationFile, run: readonly NumberedLine[], unitEnd: TranslationRows["unitEnd"], measure: Measure): Span[] {
    const spans: Span[] = [];
    let first = 0;
    run.forEach((line, position) => {
        const last = position === run.length - 1;
        const ends = last || (unitEnd === undefined ? endsSentence(line.text)
            : typeof unitEnd !== "function" ? unitEnd
            : call("unitEnd", `line ${line.key}`, unitEnd,
                { line, next: run[position + 1] ?? null, run, position, measure, file }, value => typeof value === "boolean", "a boolean"));
        if (!ends) return;
        spans.push({ first, last: position });
        first = position + 1;
    });
    return spans;
}

/**
 * The rows that cost least, run by run (proposeRows()), by what `rowBreak` says each break costs.
 *
 * With `repeatedPassages`, a repeated passage breaks where its first occurrence did: the runs are laid out in
 * order, and a repetition's breaks are forced to its first occurrence's - which, in the same run, means laying
 * the run out again, until it settles (a few rounds at most; the last one stands). Where `rowBreak` decided
 * outright (`"always"`, `"never"` - an exception, named by its words), its decision stands.
 */
function rowsByCost(file: TranslationFile, rows: TranslationRows, page: PageSettings | undefined): Set<string> {
    const rowBreak = rows.rowBreak!;
    const echoes = rows.repeatedPassages === "similar" ? file.similarEchoes : rows.repeatedPassages === "alike" ? file.echoes : null;
    const starts = new Set<string>();
    const breakAfter = new Map<string, boolean>();
    const notes = marginNotes(file);
    for (const run of file.runs) {
        const measure = measureFor(file, notes.get(run)!, page);
        const lines = run.map(line => ({ key: line.key, width: measure.line(line), text: line.text }));
        const units = typeof rowBreak === "function" ? unitsOf(file, run, rows.unitEnd, measure) : [];
        const base = run.slice(0, -1).map((line, position): BreakCost => {
            if (typeof rowBreak !== "function") return rowBreak;
            const unit = units.find(span => span.first <= position && position <= span.last)!;
            const context: BreakContext = {
                line, next: run[position + 1], run, position, cost: breakPenalty(line.text, run[position + 1].text),
                unit, endsUnit: unit.last === position, measure, file,
            };
            return call("rowBreak", `line ${line.key}`, rowBreak, context, isBreakCost, "a number, \"always\" or \"never\"");
        });

        let forced = new Map<number, BreakCost>();
        let chosen: number[] = [];
        for (let round = 0; round < 4; round++) {
            // A decision the rule spelled out ("always", "never" - an exception) stands; a repetition overrides only a cost.
            const costAt = (i: number) => typeof base[i] === "number" ? forced.get(i) ?? base[i] : base[i];
            chosen = proposeRows(lines, measure.room, measure.gap, costAt, { minimumFill: rows.minimumFill });
            const chosenSet = new Set(chosen);
            run.slice(0, -1).forEach((line, i) => breakAfter.set(line.key, chosenSet.has(i + 1)));
            if (!echoes) break;
            const next = new Map<number, BreakCost>();
            run.slice(0, -1).forEach((line, i) => {
                const first = echoes.get(line.key), firstNext = echoes.get(run[i + 1].key);
                if (!first || !firstNext || firstNext.index !== first.index + 1 || first === line) return;
                const broke = breakAfter.get(first.key);
                if (broke !== undefined) next.set(i, broke ? "always" : "never");
            });
            if (next.size === forced.size && [...next].every(([i, cost]) => forced.get(i) === cost)) break;
            forced = next;
        }
        for (const i of chosen) starts.add(run[i].key);
    }
    return starts;
}

/**
 * A translation's layout of `file`: its runs as groups, their rows as `rows` says (see the top of this file).
 *
 * @param above  what the folders' layout modules answered - whose page settings the rows are measured at
 */
export function translationLayout(file: LayoutFile, above: readonly FolderLayout[], rows: TranslationRows): FolderLayout {
    const translation = translationFile(file);
    const page = pageOf(above);
    const measured = translation.rtl;
    const rowsBy: RowsBy = rows.rowStart !== undefined ? (typeof rows.rowStart === "function" ? "function" : "list")
        : rows.rowBreak !== undefined && measured ? "rule" : "auto";

    let starts: Set<string> | null = null;
    if (rows.rowStart !== undefined && (Array.isArray(rows.rowStart) || typeof rows.rowStart === "boolean" || measured)) {
        starts = rowsByStart(translation, rows.rowStart, page);
    } else if (rowsBy === "rule") {
        starts = rowsByCost(translation, rows, page);
    }

    const groups: LineGroup[] = translation.runs.map(run => ({
        from: run[0].index,
        to: run[run.length - 1].index,
        rowStarts: starts ? run.filter((line, i) => i > 0 && starts!.has(line.key)).map(line => line.index) : "auto",
        margins: run.map(line => line.labelLength),
    }));

    const keys = new Set(translation.numbered.map(line => line.key));
    const stale = Array.isArray(rows.rowStart) ? rows.rowStart.filter(key => !keys.has(key)) : [];
    const review = [...rows.review ?? []];
    const attention = [
        ...review.length ? [`${review.length} rows a tool made are not read yet (review)`] : [],
        ...stale.length ? [`${stale.length} row starts name no line (stale): ${stale.join(", ")}`] : [],
    ];
    return {
        groups,
        ...attention.length ? { attention } : {},
        data: { rowsBy, rowStarts: starts ? [...starts] : null, review, stale },
    };
}

export { continuesLabel };
