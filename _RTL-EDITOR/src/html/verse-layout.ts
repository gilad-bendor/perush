// The printed rows of a file's numbered lines, decided ahead of time - the names of its lines, the marks
// that put a layout's rows into its text, and the proposal the layout tool starts from.
//
// Left to itself, a page runs its numbered lines together as far as the width allows (verse-runs.ts)
// - which fills the rows, but breaks them wherever the width happens to run out: in the middle of a
// clause, between two halves of a parallel couplet. A file can do better with a layout of its own: the
// `rowStart` of its layout (layout-schema.ts, layout-module.ts) - its own `<name>.layout.ts`, decided by a layout
// session with the tools in _RTL-EDITOR/layout-guidelines/.
//
// A line is named by its label - `"1#2"` for the second line labelled `1` in the file, as the numbering
// starts over in every tablet. A line the layout does not start a row with follows on the row of the
// line before it, unless the numbering itself breaks there (a new column, a gap), which always starts a
// row. A name that matches no line is ignored, and so a layout gone stale only lays out less.
//
// The rows reach the page through the text: every line that starts a row gets ROW_MARK put before its
// label, wherever the file is read for the mirror - for its own page and for a book that embeds it
// alike. The rows are still blocks that may wrap - a narrow screen is narrower than the sheet the
// layout was made for - and wrap the way any run does, between lines.

import { fenceScanner } from "./includes";
import { ROW_MARK, isVerseLabel } from "./verse-runs";

/** A numbered line of a file: where it is, its label, and the name a layout knows it by. */
export type LabeledLine = { index: number, label: string, key: string };

const LABELED_LINE = /^( {0,3})\*\*([^*\n]+)\*\*(?=\s|$)/;

/** Every line of the file that opens with a line number - outside a code fence. */
export function labeledLines(content: string): LabeledLine[] {
    const inFence = fenceScanner();
    const seen = new Map<string, number>();
    const result: LabeledLine[] = [];
    content.split("\n").forEach((line, index) => {
        if (inFence(line)) return;
        const match = LABELED_LINE.exec(line.split(ROW_MARK).join(""));
        if (!match || !isVerseLabel(match[2])) return;
        const label = match[2];
        const occurrence = (seen.get(label) ?? 0) + 1;
        seen.set(label, occurrence);
        result.push({ index, label, key: occurrence === 1 ? label : `${label}#${occurrence}` });
    });
    return result;
}

/**
 * The file's text with ROW_MARK before every line the layout starts a row with.
 *
 * @returns  also the names of the layout that match no line - stale, and ignored
 */
export function applyVerseLayout(content: string, layout: { rows: string[] }): { content: string, unknownRows: string[] } {
    const clean = content.split(ROW_MARK).join("");
    const lines = clean.split("\n");
    const wanted = new Set(layout.rows);
    for (const line of labeledLines(clean)) {
        if (!wanted.delete(line.key)) continue;
        const text = lines[line.index];
        const indent = text.length - text.trimStart().length;
        lines[line.index] = text.slice(0, indent) + ROW_MARK + text.slice(indent);
    }
    return { content: lines.join("\n"), unknownRows: [...wanted] };
}

// ------------------------------------------------------------------------------------------------
// Proposing a layout

/** A line as the tool measured it: its name, its width on the sheet (with its separator), its text. */
export type MeasuredLine = { key: string, width: number, text: string };

/**
 * How much a row ending after this line costs, by how its text ends - a sentence, a clause, nothing -
 * and by how the next line begins: one opening with the conjunction ו most often goes on with it.
 *
 * A `?` is a question only before a closing quote: in these translations it mostly marks an uncertain
 * reading (`השבעה(?)`, `קדמון?`), which says nothing about where the sentence ends.
 */
export function breakPenalty(text: string, next?: string): number {
    const noNotes = text.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trimEnd();   // footnotes, (?)
    const closing = /[\s"'״׳”’»)\]}⟩›*]+$/u;
    const end = noNotes.replace(closing, "");
    const quoted = /["'״׳”’»]/u.test(noNotes.slice(end.length));
    const continues = next !== undefined && /^\s*[\[(*{]*ו/u.test(next) ? 4 : 0;
    if (/[.!:;]$/.test(end) || (/\?$/.test(end) && quoted)) return continues;
    if (/[?…,]$/.test(end)) return 4 + continues;
    if (/[–—-]$/.test(end)) return 6 + continues;
    return 12 + continues;
}

/**
 * The rows of one run that read best: every row as full as it can be, broken where the text pauses.
 * A dynamic program over where the rows start - the costs are a row's empty space, squared, and the
 * break at its end (breakPenalty()). The last row's emptiness is free, as a paragraph's last line is,
 * unless it is nearly empty. A line too wide for any row gets one of its own.
 *
 * @param plain  ignore the text, and only fill the rows
 * @returns      the index of every line that starts a row - 0 first
 */
export function proposeRows(lines: MeasuredLine[], column: number, gap: number, plain = false): number[] {
    const n = lines.length;
    const best = new Array<number>(n + 1).fill(Infinity);
    const from = new Array<number>(n + 1).fill(0);
    best[0] = 0;
    for (let start = 0; start < n; start++) {
        if (best[start] === Infinity) continue;
        let width = 0;
        for (let end = start; end < n; end++) {
            width += lines[end].width + (end > start ? gap : 0);
            if (width > column && end > start) break;
            const isLast = end === n - 1;
            const empty = Math.max(0, column - width) / column;
            const cost = isLast
                ? (empty > 0.75 && start > 0 ? 10 : 0)
                : 100 * empty * empty + (plain ? 0 : breakPenalty(lines[end].text, lines[end + 1].text));
            if (best[start] + cost < best[end + 1]) {
                best[end + 1] = best[start] + cost;
                from[end + 1] = start;
            }
            if (width > column) break;
        }
    }
    const starts: number[] = [];
    for (let end = n; end > 0; end = from[end]) starts.unshift(from[end]);
    return starts;
}
