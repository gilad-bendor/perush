// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Instructions of Shuruppak are sayings in some forty short sections, most lines a whole saying in two
// halves ("אל תעשה X – הֲרֵי Y."), some pairs and triads joined by ";" or ",". The rows are laid out by rule
// (§2): a unit is a sentence (the default: up to "." "!" ":" - ";" goes on), a break inside one costs more
// than a break between two, and a line that ends with "," "–" or ";" goes on into the next. The opening
// formula, said three times (1-13, 73-82, 143-152), gets rows of its own. The rest is said below, by words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "d32cd9de687552b37cf1ccfb7ee98a38";

/** A line's text without footnotes and markup. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The words alone, without the punctuation at either end - what the exceptions are named by. */
const words = (t: string) => plainWords(t).replace(/^["'“‘\s]+/, "").replace(/[\s.,;:!–—"'”’-]+$/, "");
/** How the line ends: its last punctuation, the quotes after it aside. */
const ending = (t: string) => bare(t).replace(/["'”’\s]+$/, "");

/** A row must start with a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "בני, אתן עצה",              // the speech of the opening formula (9, 79, 149) - after "נתן עצה לזיוסודרה בנו:"
    "ראש עבד מארץ־ההר",          // 158-161: the slave from the mountains, the stranger - "when ..., when ..., ... he will go before you"
];
/** A row must end after a line whose words begin so. */
const BREAK_AFTER: readonly string[] = [
    "זיוסודרה, אומר לך דבר",     // 9-10 / 11-12: the opening speech's two couplets, a row each
    "בעל־הסמכות, העשיר",         // 204: the three "of princeship" - then 205-207, the counsel to bow and cling
    "את הרע – הלב לא יזניח",     // 195-197: the good, the bad, the heart that does not let go of either - then 198-199, a couplet
];
/** A row must not end after a line whose words begin so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "את עצתי",                    // 11-12 (and 81-82, 151-152): "את עצתי אל תזניח! / את הדבר שאמרתי אל תעבור!"
    "במקום ריב",                  // 22-24: "במקום ריב ... / אל הריב ... / אל הריב ..." - a triad
    "אל הריב – כעד",
    "ריב אל תעשה",                // 25-26: not a lone broken line of 24% - the two broken lines together, then 27
    "הגיבור – יחיד הוא",          // 69-70 and 71-72: the hero and Utu, said twice
    "לעמוד עם הגיבור",
    "שכירך – את שק־העור",          // 119-121: the hired man shares, eats, finishes the sack with you
    "את שק־העור הרי יאכל",
    "אחיך הגדול",                 // 173-174: the elder brother and the elder sister
    "הגנבת",                       // 222-231: the woman in the street, two lines a row - the thief, the she-donkey and the sow,
    "האתון",                       //   the scratched nose and the spindle, house and alley, roof and parapet
    "האשה ששרטה",
    "אל כל בית ובית",
    "על שפת הגג",
    "אל מקום שיש בו ריב",          // 232-233: and the broken lines after it, three rows instead of four
    "לרועה",                       // 271-272: the shepherd and the farmer, "נגמר לו"
];

/** What ending a row after `line` costs. */
function rowBreak({ line, next, endsUnit, cost }: BreakContext): BreakCost {
    if (BREAK_BEFORE.some(w => words(next.text).startsWith(w))) return "always";
    if (BREAK_AFTER.some(w => words(line.text).startsWith(w))) return "always";
    if (KEEP_WITH_NEXT.some(w => words(line.text).startsWith(w))) return "never";
    let c = cost;
    if (/[,–;]$/.test(ending(line.text))) c += 40;
    return endsUnit ? c : c + 40;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Some forty sections of a few rows each, under one "##": no index, and the title on every sheet.
    pdf: {
        indexDepth: 0,
        footerTitle: ({ chain }) => chain.find(h => h.level === 1)?.text ?? "",
    },
});
export default layout;
