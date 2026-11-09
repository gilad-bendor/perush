// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Sumerian proverbs: every proverb is a paragraph of its own (its number in italics above it), so a run is one
// proverb, mostly a single row. The few that take two rows or more are lists of parallel clauses, or a short
// fable with speech (the fox and his wife). The rules: a line that ends with a dash leads into the next one,
// so the row does not end there; a line that ends with a bare "…" (a word lost mid-sentence) is inside its
// clause; a direct speech keeps rows of its own - but a one-line saying shares the row of the short narration
// ("...:") that introduces it, as two-line proverbs mostly are.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "b02ed9eba1eece63cf8892cea9890dd4";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    // The exclamation that names the subject; the three lines after it describe him, a row of their own.
    "העני – כמה הוא שפל!",
];

/** The line's text without its Markdown: footnote marks, emphasis. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for the rules and the exceptions. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    const following = plain(next.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => text.endsWith(words))) return "always";
    // A direct speech: its own rows - break after it closes, and before it opens after a full sentence.
    if (/["”]$/.test(text)) return "always";
    // ... but after a narration's ":" a saying that closes on its own line may share the row (a two-line proverb).
    if (/^["“]/.test(following) && /[.!]$/.test(text)) return "always";
    if (/^["“]/.test(following) && /:$/.test(text) && !/^["“][^"”]*["”]/.test(following)) return "always";
    // A line that ends with a dash leads to what follows it (a topic, then what is said of it).
    if (/[–—-]$/.test(text)) return cost + 100;
    // A bare "…" at the end (not "[…]"): a word lost inside the clause.
    if (/[^\]]…$/.test(text)) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The collections and their themed sections (each half a page or more); the proverbs are not headings.
        indexDepth: 3,
        // The title and the collection: "משלים שומריים / אוסף המשלים 1".
        footerTitle: ({ chain }) =>
            chain
                .filter(h => h.level <= 2)
                .map(h => h.text.replace(/ \(.*\)$/, "").replace(/ – תרגום$/, ""))
                .join(" / "),
    },
});
export default layout;
