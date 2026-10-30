// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Advice to a Prince is a list of omens: "(אִם) <what the king did> – <what the god will do>". Each section is
// a run of one to eight tablet lines, one to four rows. The rows are laid out by rule: an omen starts a row of
// its own, and its apodosis does too - it opens with the god who acts ("אֶנְלִיל, אדון הארצות, ...",
// "במאמר אאה, ..."), so a row never ends with the protasis' last words above the god's name or starts with the
// apodosis' verb under it. Where the god is not the apodosis' first word, the words that open it are named.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "18434adac61847cda1a9ff1b8fe038b9";

/** The subjects an apodosis opens with: the gods who act, by name (without vowel points). */
const GODS = ["אאה", "שמש", "אנליל", "מרדוך", "אנו", "אדד", "ארה", "נבו", "האלים הגדולים"];
/** A row must start at a line whose words begin so - an apodosis or a clause that does not open with a god. */
const BREAK_BEFORE: readonly string[] = [
    "הצבא ההוא",          // 21, 26: "that army" - the corvée laid on it (21-22, a pair), and its exemption (26-27)
    "הרכש אשר",           // 30: the apodosis - "the horses that ate their fodder / will be led in the enemy's yoke"
    "מקומם",              // 45: after their death by the weapon (43-44), their place and their posterity (45-46)
];

/** A line's words: no footnotes, vowel points or brackets. */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ׇ]/g, "").replace(/[\[\]⟨⟩*?]/g, "").trim();
const opensOmen = (t: string) => plainWords(t).startsWith("(אם)");
/** An apodosis: a line opening with a god (or "by the command of" a god), then a pause or a verb. */
const opensWithGod = (t: string) => {
    const words = plainWords(t).replace(/^במאמר /, "");
    return GODS.some(god => words.startsWith(god + ",") || words.startsWith(god + " "));
};

/** What ending a row after a line costs: the default (punctuation), but for the omens' shape. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    // A new omen starts a row - but two short omens of one line each may share one (3-4).
    if (opensOmen(next.text)) return opensOmen(line.text) ? cost : "always";
    // The apodosis starts a row.
    if (opensWithGod(next.text)) return "always";
    if (BREAK_BEFORE.some(words => plainWords(next.text).startsWith(words))) return "always";
    // A relative clause stays with its antecedent ("בין סריס המלך – | אשר ... העמידו,").
    if (/^אשר\s/.test(plainWords(next.text))) return cost + 40;
    return cost;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The sections (##) are two to eight tablet lines each: the whole text is a page or two, and an index of
        // its sections would only repeat what the page shows at a glance.
        indexDepth: 0,
        footerTitle: ({ chain }) => (chain[0]?.text ?? "").replace(/ – תרגום$/, ""),
    },
});
export default layout;
