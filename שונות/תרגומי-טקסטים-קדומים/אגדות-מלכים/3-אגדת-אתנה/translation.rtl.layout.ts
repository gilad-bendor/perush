// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Etana Legend is narrative verse in six broken versions, told in short sections: couplets, speeches
// opened by a formula ("X פתח את פיו, אל Y דיבר:"), and refrains (the hunt, the eagle's three tries, the
// three bērus of each flight). Its rows are laid out by rule: the default cost of a break (punctuation), a
// break inside a sentence dearer (+15), a row that would rather end where a speech closes and start with a
// speech's formula, the formula kept with the speech's first line, each bēru a row of its own, and the
// hunt's and the gates' pairs kept together. What punctuation does not show is said below, by the words
// of the line. (A speech made to end its row outright, or a dearer break inside a sentence, left lone
// formulas and lacunae on rows of their own: 221 rows against 215.)

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "6f763ca28b022d34f91e97f34565491f";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אתה הוא אתנה, מלך הבהמה!",         // MA e+8-9: "you are Etana, king of the beasts! / you are Etana ..." - a couplet
    "בערב, בתוך היום,",                 // SB II 53-54: in the evening ... / the snake came
    "הנשר צד, ו",                       // SB III 21-22: the eagle hunted ... / no plant (found)
    "רעי, לא אעלה לשמים!",              // SB III 42-43: "I will not go up to heaven! / make a path, let me go to my city!"
    "חזק – וגדל משאו.",                 // SB III b+24: the eagle takes up his load - with the first bēru that follows
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "כרת את כנפיו, את אברותיו,",        // SB II 119: the snake's refusal ends; he cuts the eagle's wings
    "הלך, ו",                           // SB III 20: after the eagle's promise, his search starts a row
    "הנחש פתח את פיו, אל הנשר דיבר",    // OB Morgan b+3: the snake's speech (b+3-b+6) on a row of its own, after two broken lines
    "פעם אחת –", "שנה –", "שלש –",      // MA c+14, c+16, c+18: once / twice / thrice - each try a row (as SB II 108)
    "אחרי ששבועה נשבעו",                // SB II 23: the oath said, the narrative goes on - a row of its own
    "כיש? – את העיר",                   // SB I 3: the city's founding said again, of Kish - the second couplet
    "ראה שוחה",                         // SB II 150: Etana does as told - laid out as Shamash's words (145)
];

/** A line's text without footnotes and italics. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf stays), brackets or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]⟨⟩…]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^"/.test(bare(t));
const closesSpeech = (t: string) => /"$/.test(bare(t));
/** A line that introduces a speech: the formula, or "... חלום ראה:" - it ends with a colon. */
const introduces = (t: string) => /:$/.test(bare(t));

/** What a break inside a sentence (unit) costs on top. */
const INSIDE = 15;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^"+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // Each bēru of a flight ("בֵּרוּ שני – העלה אותו,") starts a row.
    if (/^ברו /.test(after)) return "always";
    // The hunt: "X, Y – הנחש לוכד, / הנשר אוכל ..." - who catches and who eats share a row.
    if (/(לוכד|לכד),$/.test(words)) return "never";
    // The gates: "בשער אנו ... – צעדנו; / השתחווינו ..." - the passing and the bowing share a row.
    if (/צעד(נ)?ו;$/.test(words)) return "never";
    let c = cost;
    if (introduces(line.text)) c += 15;      // a formula stays with the speech's first line,
    if (introduces(next.text)) c -= 15;      // a row would rather start with a speech's formula,
    if (closesSpeech(line.text)) c -= 25;    // and end where a speech closes
    // Inside a sentence (unit) a break is dearer: keep the couplets it is made of.
    return endsUnit ? c : c + INSIDE;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Six versions (the #s), each of short sections (##s) mostly a few rows long: the index lists the
    // versions; the footer says which version, after the title.
    pdf: {
        indexDepth: 1,
        footerTitle: ({ chain, file }) => {
            const title = file.headings[0]?.text ?? "", version = chain.find(h => h.level === 1)?.text ?? "";
            return version && version !== title ? `${title} / ${version}` : version;
        },
    },
});
export default layout;
