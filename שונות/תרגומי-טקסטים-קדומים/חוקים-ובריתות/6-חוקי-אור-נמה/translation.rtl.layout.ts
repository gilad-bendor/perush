// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The rows are laid out by rule, as Eshnunna's are: a law code of short laws, most of them a run of one row.
// A line with no pause at its end is inside its clause (+40), and so is one that ends with a dash, which
// leads to what it names; a second condition ("אם") after a sentence starts a row of its own. The prologue's
// chains of titles and deeds need a few exceptions, named by their words below.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "ae3aafed67da595bb6564cf51789ee90";

/** Where a row must not end: after a line whose text ends so - named by its words (no markup, no vowel points). */
const KEEP_WITH_NEXT: readonly string[] = [
    "מלך אור,",              // the royal titles: "king of Ur, | king of Sumer and Akkad" - one pair
    "משנשבע שבועה,",        // "the owner, having sworn an oath, | takes / replaces" - the oath belongs to its apodosis
    "מנחה …",                // prologue: "offerings […] | of first fruits" - one phrase
    "שעוריה שישה כור,",      // the wet nurse: barley, wool, oil - one list
    "צמרה שלושים מנה,",
];
/** Where a row must end: after a line whose text ends so. */
const BREAK_AFTER: readonly string[] = [
    "אדוני בניתי,",          // the dedication: "(when) Nanna's house ... I built," | "and the Magan ship ... I dedicated to him."
    "לצלם אור־נמה:",         // "for Ur-Namma's statue:" | the list of offerings
    "על גדת כל הנהרות,",     // "on the banks of all the rivers," | "offerings [...] of first fruits ... I offered there."
    "הקרבתי שם.",            // ... | "gardens I planted there, ... the king's chief gardener received (them)."
    "לידם? השבתי.",          // "... I returned to them." | "the seafaring trade, the chief of sailors, the herdsman - ..."
];
/** Where a row must end: after a line ending so, when the next opens so. */
const BREAK_PAIRS: readonly (readonly [string, string])[] = [
    ["ואכד,", "אבנו"],       // the dedication: Enlil, and the statue's titles | "his stone, diorite it is." Ur-Namma ...
];

/** A line's text without its markup: footnote marks and the *…* of an uncertain rendering. */
const plain = (text: string) => text.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** And without the editor's brackets and vowel points, to name a line by its words. */
const words = (text: string) => plain(text).replace(/[\[\]⟨⟩]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "");
/** A line that is all lacuna: "[…]", "… […]". */
const isLacuna = (text: string) => /^[\[\]…\s.?]*$/u.test(plain(text));

function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const text = plain(line.text), w = words(line.text);
    if (KEEP_WITH_NEXT.some(k => w.endsWith(k))) return "never";
    if (BREAK_AFTER.some(k => w.endsWith(k))) return "always";
    if (BREAK_PAIRS.some(([end, start]) => w.endsWith(end) && words(next.text).startsWith(start))) return "always";

    // After a line that is all lacuna the reading breaks anyway; before one, not more than the default.
    if (isLacuna(line.text)) return Math.min(cost, 4);
    if (isLacuna(next.text)) return cost;

    // A second condition in a law ("... ישקול. | אם האמה מתה, ...") starts a row of its own, as the first does.
    if (/[.;]$/u.test(text) && /^אם$/u.test(words(next.text))) return "always";
    // A line ending with a dash leads to what it names ("איקו אחד – | שלושה כור שעורים ימוד"): kept with it.
    if (/[–—]$/u.test(text)) return cost + 40;
    // Before a line that opens with a dash - a parenthesis - the reading pauses.
    if (/^[–—]/u.test(plain(next.text))) return cost;

    // Verb last, as in Sumerian and Akkadian: a line ending with no pause is inside its clause.
    if (!/[.,;:!?…–—]["”)\]⟩]*$/u.test(text)) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The prologue, the groups of laws and the epilogue (##); the laws themselves (###) are a few lines each.
        indexDepth: 2,
        // "<the title> / <the group>", with the parentheses dropped: the title's date, the extra laws' line range.
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \([^)]*\)/g, "")).join(" / "),
    },
});
export default layout;
