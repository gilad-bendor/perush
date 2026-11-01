// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule, as Eshnunna's are: a law code of short laws (§1-§20), each a run of its
// own. A sentence (".", ":", ";") ends a row; the proof formula "בררו עליו, כוננו עליו" ends the protasis;
// a line with no pause at its end is inside its clause (+40). The exceptions below are named by their
// words - most of them in §6, the herald's proclamation, a 52-line run of procedure.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "500edef5dae0bc91bed6a9a37257420f";

/** Where a row must not end: after a line whose text ends so - named by its words (no brackets, no vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "מבארו, ממגדלו",                 // §10: "from his well, from his tower | he forfeits (them)"
    "בלי לשכוח, את לוחותיהם",         // §6: "their tablets | (they) brought" - object and verb
    "הגן למייסד – זכאי (הוא);",       // §12: a ";" with its apodosis' second half, a short line, after it
    "את שדהו ישקה;",                  // §17: "... he waters his field; | no other man waters"
    "ויקחו.",                         // §6: "they take." - a sentence too short for a row of its own
    "עשרים ימים את מלאכת המלך יעשה.", // §10: the penalty, and the broken oath after it
];
/** Where a row must not end: after a line ending so, when the next opens so. */
const KEEP_PAIRS: readonly (readonly [string, string])[] = [
    ["יקח;", "ואחיו"],                // §1: "he chooses, takes; | and his brothers ... choose, take." - one sentence
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "אשור יכריז,",                    // §6: "(the herald) proclaims in Assur," - the clause, then who is to stand by
    "לפני הפקידים ישימו,",            // §6: those with a claim "present their tablets, place them before the officials," | "speak, clear (it), and take."
];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without the editor's brackets, to match a formula however much of it is restored. */
const words = (text: string) => plain(text).replace(/[\[\]]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.]*$/u.test(plain(text));

function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = plain(line.text);
    if (KEEP_WITH_NEXT.some(w => words(line.text).endsWith(w))) return "never";
    if (KEEP_PAIRS.some(([end, start]) => words(line.text).endsWith(end) && words(next.text).startsWith(start))) return "never";
    if (BREAK_AFTER.some(w => words(line.text).endsWith(w))) return "always";

    // The proof formula "בררו עליו, | כוננו עליו," is one: it is kept on one row, and ends the protasis -
    // the penalties start a row of their own (§8, §9, §13, §14 alike).
    if (/בררו עליו,$/u.test(words(line.text))) return "never";
    if (/כוננו עליו[,;]$/u.test(words(line.text))) return 0;

    // A sentence ends the row: the law's clauses are its units (";" included - it ends a clause here).
    if (/[.;:]["”)]*$/u.test(text)) return "always";

    // After a line that is all lacuna the reading breaks anyway; before one, not more than the default.
    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    // Verb last, as in Akkadian: a line ending with no pause (and not in a lacuna) is inside its clause.
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The groups of laws (##); the laws themselves (###) are a few lines each.
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \(.*\)$/, "")).join(" / "),
    },
});
export default layout;
