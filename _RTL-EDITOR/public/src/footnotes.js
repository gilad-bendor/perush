// Footnotes in the editor's text - `text[^a]` and `[^a]: the note` - for following one to the other by a click.
//
// Plain ESM with no editor dependency, like links.js, so that it can be unit-tested. What counts as a footnote is
// what markdown-it-footnote makes one on the page (src/html/footnotes.ts):
//
// - A definition is `[^label]:` at a line's start (up to 3 spaces in). Its note goes on over the lines that follow -
//   a "lazy" line of text, or after a blank line one indented by 4 spaces (or a tab) - until a blank line, or a line
//   that starts a block of its own (a heading, a list item, a quote, a fence, another definition...).
// - A reference is `[^label]` anywhere else, the label holding no whitespace - and only one whose label is defined:
//   any other is plain text on the page.
// - Nothing inside code counts: a fenced block, or an inline code span.

/** `[^label]` - a reference, or the start of a definition. */
const LABEL_REGEXP = /\[\^([^\]\s]+)\]/g;
/** A line that defines a note: its indentation, and its `[^label]:`. */
const DEFINITION_REGEXP = /^( {0,3})\[\^([^\]\s]+)\]:/;
/** A fence line - ``` or ~~~ - opening or closing a code block. */
const FENCE_REGEXP = /^ {0,3}(`{3,}|~{3,})/;
/**
 * A line that starts a block of its own, and so ends a note's paragraph rather than going on with it: a heading,
 * a quote, a list item, a fence, a horizontal rule, a pseudo-tag or HTML, a table drawn in boxes or written in pipes.
 */
const BLOCK_START_REGEXP = /^ {0,3}(#{1,6}(\s|$)|>|[-*+](\s|$)|\d{1,9}[.)](\s|$)|`{3,}|~{3,}|([-*_])(\s*\3){2,}\s*$|<|[─-╿]|\|)/;

/**
 * @typedef {{ label: string, from: number, to: number }} FootnoteReference
 *   A `[^label]` in the text: from its `[` to after its `]`.
 *
 * @typedef {{ label: string, markerFrom: number, markerTo: number, bodyFrom: number, bodyTo: number }} FootnoteDefinition
 *   A `[^label]: ...`: its marker (`[^label]`, without the colon), and its note - from its first character to its
 *   last, blank space at either end left out. An empty note has `bodyFrom === bodyTo`, right after the colon.
 *
 * @typedef {{ references: FootnoteReference[], definitions: Map<string, FootnoteDefinition>, undefinedReferences: FootnoteReference[] }} Footnotes
 *   The references in the order they stand in the text - only those whose label is defined - and the definitions by
 *   label (the first, should a label be defined twice). Apart, the references to a label nothing defines: plain text
 *   on the page, which the editor marks as a mistake.
 */

/**
 * The footnotes of a text: every reference to a defined note, and every definition.
 *
 * @param {string} text
 * @returns {Footnotes}
 */
export function parseFootnotes(text) {
    /** @type {Map<string, FootnoteDefinition>} */
    const definitions = new Map();
    /** @type {FootnoteReference[]} */
    const candidates = [];

    /** The definition whose note is still going on, and the end of its last line with text. */
    let open = /** @type {FootnoteDefinition | null} */ (null);
    let afterBlank = false;
    /** The fence a code block was opened with, while in one. */
    let fence = /** @type {string | null} */ (null);

    let lineFrom = 0;
    for (const line of text.split('\n')) {
        const lineTo = lineFrom + line.length;
        const blank = !line.trim();

        if (fence !== null) {
            const closing = FENCE_REGEXP.exec(line);
            if (closing && closing[1][0] === fence[0] && closing[1].length >= fence.length && !line.slice(closing[0].length).trim()) {
                fence = null;
            }
        } else if (FENCE_REGEXP.test(line)) {
            fence = /** @type {RegExpExecArray} */ (FENCE_REGEXP.exec(line))[1];
            open = null;
        } else {
            // Does this line go on with the note above it?
            if (open) {
                if (blank) {
                    afterBlank = true;
                } else if (afterBlank ? /^( {4}|\t)/.test(line) : !BLOCK_START_REGEXP.test(line) && !DEFINITION_REGEXP.test(line)) {
                    if (open.bodyFrom === open.bodyTo) open.bodyFrom = lineFrom + (line.length - line.trimStart().length);
                    open.bodyTo = lineFrom + line.trimEnd().length;
                    afterBlank = false;
                } else {
                    open = null;
                }
            }

            const definition = DEFINITION_REGEXP.exec(line);
            let scanFrom = 0;
            if (definition && !open) {
                const label = definition[2];
                const markerFrom = lineFrom + definition[1].length;
                const markerTo = lineFrom + definition[0].length - 1;
                const rest = line.slice(definition[0].length);
                const bodyFrom = rest.trim() ? lineFrom + definition[0].length + (rest.length - rest.trimStart().length) : markerTo + 1;
                const bodyTo = rest.trim() ? lineFrom + line.trimEnd().length : markerTo + 1;
                const found = { label, markerFrom, markerTo, bodyFrom, bodyTo };
                if (!definitions.has(label)) definitions.set(label, found);
                open = found;
                afterBlank = false;
                scanFrom = definition[0].length;
            }

            // The references of the line, inline code left out.
            const pieces = line.slice(scanFrom).split(/(`+[^`]*`+)/);
            let offset = lineFrom + scanFrom;
            pieces.forEach((piece, i) => {
                if (i % 2 === 0) {
                    for (const match of piece.matchAll(LABEL_REGEXP)) {
                        const from = offset + /** @type {number} */ (match.index);
                        candidates.push({ label: match[1], from, to: from + match[0].length });
                    }
                }
                offset += piece.length;
            });
        }
        lineFrom = lineTo + 1;
    }

    return {
        references: candidates.filter(reference => definitions.has(reference.label)),
        definitions,
        undefinedReferences: candidates.filter(reference => !definitions.has(reference.label)),
    };
}

/**
 * The references to a note, in the order they stand in the text.
 *
 * @param {Footnotes} footnotes
 * @param {string} label
 * @returns {FootnoteReference[]}
 */
export function referencesTo(footnotes, label) {
    return footnotes.references.filter(reference => reference.label === label);
}

/**
 * The notes nothing refers to.
 *
 * @param {Footnotes} footnotes
 * @returns {FootnoteDefinition[]}
 */
export function unreferencedDefinitions(footnotes) {
    const referenced = new Set(footnotes.references.map(reference => reference.label));
    return [...footnotes.definitions.values()].filter(definition => !referenced.has(definition.label));
}

/**
 * What stands at an offset of the text: a reference, or a definition's marker - the offset inside it, or at its
 * start (not at its end, which is the start of whatever follows it).
 *
 * @param {Footnotes} footnotes
 * @param {number} pos
 * @returns {{ reference: FootnoteReference } | { definition: FootnoteDefinition } | null}
 */
export function footnoteAt(footnotes, pos) {
    const reference = footnotes.references.find(r => r.from <= pos && pos < r.to);
    if (reference) return { reference };
    for (const definition of footnotes.definitions.values()) {
        if (definition.markerFrom <= pos && pos < definition.markerTo) return { definition };
    }
    return null;
}

/** ➀ .. ➉ - the 1st .. 10th reference to a note, in the bar that offers them. */
const CIRCLED_NUMBERS = '➀➁➂➃➄➅➆➇➈➉';

/**
 * How the n-th reference to a note (from 1) is named in the bar that offers them: ➀ .. ➉, and from 11 on the
 * plain number.
 *
 * @param {number} n
 * @returns {string}
 */
export function referenceNumeral(n) {
    return n >= 1 && n <= CIRCLED_NUMBERS.length ? CIRCLED_NUMBERS[n - 1] : String(n);
}
