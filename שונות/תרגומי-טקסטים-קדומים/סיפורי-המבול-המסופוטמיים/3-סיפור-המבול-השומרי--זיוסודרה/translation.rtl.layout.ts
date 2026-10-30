// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Sumerian Flood Story is verse, but what survives is fragmentary. Its main text is labelled twice -
// ETCSL's line and Civil's in parentheses, "A1 (37)" - and the numbering logic does not take two numbers
// rising together as one run, so those lines stand one to a row and no rule here reaches them. The rows below
// lay out the Ur manuscript's appendix: line beginnings, a word or two each, broken where a new statement opens.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "0f5c37e054e22a045aba27b955c49caf";

/** Where a row must not end: after a line whose text ends so - named by its words, not its number. */
const KEEP_WITH_NEXT: readonly string[] = [];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "הערים ההן […]",                  // Ur r 5′: "those cities" closes the list of the five cities (as B16 does)
];

/** What ending a row after a line costs: the default (punctuation), but for the exceptions. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(words => line.text.endsWith(words))) return "never";
    if (BREAK_AFTER.some(words => line.text.endsWith(words))) return "always";
    // "בעת ההיא" - "at that time" - opens a new statement: a row would rather start with it.
    if (/^בעת ההיא/.test(next.text)) return cost - 10;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // A short poem in short episodes: the index lists the episodes (##), not the appendix's two sides (###);
    // the footer is the poem's title - one subject.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
