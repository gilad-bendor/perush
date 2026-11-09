// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Instructions for Temple Personnel (CTH 264): Hittite prose, nineteen sections, each a run of its own,
// translated tablet line by tablet line - so a sentence often runs over from one line into the next, and a
// line often ends inside its clause ("ואילו בתוך ביתו אף אחד אַל | ישכב"). Lines are long, two to a row. The
// rows are laid out by rule: the default cost of a break (punctuation), a break after a line that ends with
// no pause dearer (+30, as in Eshnunna), dearer still after a word that cannot end a phrase ("אַל", "לא",
// "את", "של", "אשר", "עם" ...), and a quotation - an oath, an excuse - not split.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "8c18d314ef0bcb95da5cf3e957a0bcca";

/** Where a row must not end: after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "מבשל־השכר – האלים:",          // §14: "the cupbearer, ..., the brewer – the gods: | toward their soul be very afraid!"
];
/** Where a row must end: after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*" or "?". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]*?⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A word that cannot end a phrase - a negation, a preposition, a particle that needs what follows. */
const OPEN_WORD = /(^| )(אל|לא|את|של|אשר|עם|על|אם|או|ו|כל|מן|אחר|ממש אל|אותו)$/u;

function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const text = bare(line.text), words = plainWords(line.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    let c = cost;
    // A line ending with no pause is inside its clause (+30); after a word that needs the next, more (+30).
    if (!/[.,;:!?…–—"”)]$/u.test(text)) c += 30;
    // (Not a word restored in brackets, "[אַל?]": the break is the tablet's, not the sentence's.)
    if (!/\]$/u.test(text) && OPEN_WORD.test(words)) c += 30;
    // Inside a quotation (an oath, an excuse): not split.
    const quotes = run.slice(0, position + 1).reduce((n, l) => n + (l.text.match(/["“”]/g) ?? []).length, 0);
    if (quotes % 2 === 1) c += 30;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "alike", "similar" and "free" lay it out the same: no passage repeats.
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The sections (§1-§19, the colophon), half a page or more each.
        indexDepth: 2,
        // The title and the section, without their parentheses (CTH, the tablet and its lines); a long
        // section title only up to its first comma or colon.
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.text.replace(/ \([^)]*\)/g, "").trim())
            .map(t => t.length > 40 ? t.replace(/^(.{12,}?)[,:;].*$/u, "$1") : t).join(" / "),
    },
});
export default layout;
