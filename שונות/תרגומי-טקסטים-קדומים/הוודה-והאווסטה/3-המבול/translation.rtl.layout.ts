// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Three flood stories, none of them laid out by rows much:
// - Manu and the Fish (Shatapatha Brahmana) is prose, a sentence per line (`1a`, `1b`): a short opening sentence
//   and a long one, which never share a row - each section's lines stand a row each, as the default has them.
// - The Fish (Mahabharata) is epic verse, a half-shloka per line, labelled `1a`, `1c`, `17e` - and a speaker's
//   line (`1`, `2`: "מַרְקַנְדֵּיָה אמר:"). The numbering skips b and d, so the rows tool takes `1a` → `1c` for a
//   break in the numbering: every half-shloka but those right after a speaker's line is "in no run", a row of its
//   own. Two half-shlokas (a shloka, 75-100%) would mostly fit a row, but no layout can join them (see the
//   report). What is left to decide is the one run of three, 1c..2a: the end of Yudhishthira's request, the
//   next speaker's line and his first half-shloka. A speaker's line opens a row, with what he says after it.
// - Yima and the Enclosure (Videvdad 2) is prose, a paragraph per line, nearly all wider than a row.
//
// The PDF's index goes down to the three stories (##); their sections (###) are a third of a page or less in the
// first two. The footer is the title and the story, without its source's parenthesis.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "dd0caac32e318210530570b407bcb0ef";

/** The epic's speaker's line: a plain number, and "X אמר:". */
const isSpeaker = (line: NumberedLine) => /^\d+$/.test(line.label) && /אמר:\s*$/.test(line.text);

/** What ending a row after a line costs: the default (punctuation), but always before a speaker's line. */
function rowBreak({ next, cost }: BreakContext): BreakCost {
    if (isSpeaker(next)) return "always";
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \(.*\)$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
