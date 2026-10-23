// Where a translation's printed rows break: what a break costs, and the rows that cost least.
//
// A row should be as full as the printed line allows, never fuller, and should end where the text pauses.
// proposeRows() finds such rows for one run (numbered-lines.ts): a dynamic program whose costs are a row's
// empty space, squared, and what the break at its end costs - by default breakPenalty(), which reads the
// punctuation. translation-layout.ts runs it with whatever costs a layout gives; the rows tool
// (rows-tool.ts) proposes rows with it.
//
// Pure, and imports nothing: a layout module bundles it.

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
    const { end, quoted } = endingOf(text);
    const continues = next !== undefined && /^\s*[\[(*{]*ו/u.test(next) ? 4 : 0;
    if (/[.!:;]$/.test(end) || (/\?$/.test(end) && quoted)) return continues;
    if (/[?…,]$/.test(end)) return 4 + continues;
    if (/[–—-]$/.test(end)) return 6 + continues;
    return 12 + continues;
}

/**
 * Whether a line ends a sentence - the default end of a unit (translation-layout.ts's `unitEnd`): its text
 * ends with `.` `!` `:`, with the `?` of a real question (before a closing quote), or closes direct speech.
 * A `;` does not: in these translations it joins the halves of one sentence, or of a couplet.
 */
export function endsSentence(text: string): boolean {
    const { end, quoted, closesSpeech } = endingOf(text);
    return /[.!:]$/.test(end) || (/\?$/.test(end) && quoted) || closesSpeech;
}

/** How a line's text ends: its last character that is no quote or bracket, and the quotes after it. */
function endingOf(text: string): { end: string, quoted: boolean, closesSpeech: boolean } {
    const noNotes = text.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trimEnd();   // footnotes, (?)
    const end = noNotes.replace(/[\s"'״׳”’»)\]}⟩›*]+$/u, "");
    const after = noNotes.slice(end.length);
    // A double quote at a line's end closes a speech; a single one is mostly a quotation inside it.
    return { end, quoted: /["'״׳”’»]/u.test(after), closesSpeech: /["״”»]/u.test(after) };
}

/** What ending a row after a line costs: a number (breakPenalty()'s scale), or a decision. */
export type BreakCost = number | "always" | "never";

/** What `"never"` costs: no break is that bad, unless the lines on either side could not share a row anyway. */
const NEVER = 1e6;

/** What else shapes the rows. */
export type RowOptions = {
    /**
     * How full, in percent of the column, a row must be - but a run's last - when the next line would still fit
     * on it. A row emptier than that is avoided wherever any other layout will do (a cost no break outweighs),
     * so a lone short line - a lacuna - joins a row instead of taking one of its own.
     */
    readonly minimumFill?: number;
};

/** What a row under `minimumFill` costs: more than any break, less than `"never"`. */
const UNDERFILLED = 1e4;

/**
 * The rows of one run that read best: every row as full as it can be, broken where the text pauses.
 * A dynamic program over where the rows start - the costs are a row's empty space, squared, and the
 * break at its end (`breakCost`, breakPenalty() by default). The last row's emptiness is free, as a
 * paragraph's last line is, unless it is nearly empty. A line too wide for any row gets one of its own.
 *
 * `"always"` after a line ends its row there, whatever it costs; `"never"` keeps it on one row with the
 * next line - unless the two cannot share a row at all, which no cost can change. `options.minimumFill` keeps
 * rows from being nearly empty (RowOptions).
 *
 * @param breakCost  what ending a row after line `i` costs (`i` < the last line)
 * @returns          the index of every line that starts a row - 0 first
 */
export function proposeRows(lines: MeasuredLine[], column: number, gap: number,
                            breakCost: (i: number) => BreakCost = i => breakPenalty(lines[i].text, lines[i + 1].text),
                            options: RowOptions = {}): number[] {
    const n = lines.length;
    const minimumFill = (options.minimumFill ?? 0) / 100;
    const costs = lines.slice(0, -1).map((_, i) => breakCost(i));
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
            const at = costs[end];
            const underfilled = minimumFill > 0 && !isLast && width / column < minimumFill
                && width + gap + lines[end + 1].width <= column;
            const cost = isLast
                ? (empty > 0.75 && start > 0 ? 10 : 0)
                : 100 * empty * empty + (at === "never" ? NEVER : at === "always" ? 0 : at) + (underfilled ? UNDERFILLED : 0);
            if (best[start] + cost < best[end + 1]) {
                best[end + 1] = best[start] + cost;
                from[end + 1] = start;
            }
            if (width > column || at === "always") break;
        }
    }
    const starts: number[] = [];
    for (let end = n; end > 0; end = from[end]) starts.unshift(from[end]);
    return starts;
}
