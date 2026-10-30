// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Farmer's Instructions are a father's orders to his son, a line or two to each step of the work. Most
// sentences are a line of their own; the rest open with a clause ending in a dash - "כשאתה עומד לחרוש את
// השדה –", "ביום שהשעורה עולה ... –", "אחרי ש... –" - whose order is the next line. So the rows are laid out
// by the default cost (punctuation), and for one rule: a row does not end after a dash, between such a clause
// and its order. What the punctuation does not show - a parallel pair - is named below by its words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "948c563313b62b5c7cdaa1c72a11bc38";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [
    "תלם יכו שם לך;",     // 61-62: "במקום־העפר הסמוך – ... / במקום־העפר שפיו כפול – ..." - a parallel pair
];

/** A line's text without its footnote marks. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").trim();

/** What ending a row after a line costs: the default (punctuation), but for this text's rule and exceptions. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    if (KEEP_WITH_NEXT.some(words => text.endsWith(words))) return "never";
    // A line that ends with a dash is the opening clause of a sentence ("when ... –", "on the day ... –"),
    // or the first half of its subject: its order is on the next line, and the row goes on to it.
    if (/[–—]$/u.test(text)) return cost + 100;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Four pages, one subject: the index lists the eight stages of the farmer's year (the ##s), and the
    // footer is the title alone.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
