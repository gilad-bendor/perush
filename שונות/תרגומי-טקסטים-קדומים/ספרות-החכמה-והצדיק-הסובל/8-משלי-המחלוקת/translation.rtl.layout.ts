// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Five Babylonian disputations and fables - the Palm and the Vine, the Poplar series, the Ox and the Horse, the
// Spider, the Fable of the Wren - in short verse lines, mostly couplets, two to four lines to a row, and much of
// it broken ("[…] … […]"). Most of it is speech, every line of which opens with a quotation mark, and the
// speeches are introduced by a narrative formula ("שור פתח את פיו ואמר, אל סוס, הנאדר בקרב, דיבר:"). The rows
// are laid out by rule: the default cost of a break (punctuation); a break inside a sentence dearer (+20), to
// keep its couplets; a break where a speech gives way to narrative cheaper (-30), so that the formula starts a
// row; and a break after the formula dearer (+40), so that it shares its row with the speech it opens. Nothing
// needs an exception. 165 rows against the fewest possible 163; the rule moved nine places from the default's,
// mostly formulas that ended a row and now start one.
//
// The PDF's index lists the five texts (##); their ###s are mostly one to three rows. The footer is the title
// and the text, without the incipit after its dash ("הדקל והיין – "למה? […]"").

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "8bcb86591be93dc43770e4d77072da4b";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line of a speech: every one opens with a quotation mark, '"אני – יין, ...'. */
const inSpeech = (t: string) => /^["“]/.test(bare(t));
/** A narrative line that introduces a speech: "שור פתח את פיו ואמר, אל סוס, הנאדר בקרב, דיבר:". */
const introduces = (t: string) => !inSpeech(t) && /:[\]\)]*$/.test(bare(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    let c = cost;
    // The narrative between two speeches - the speech formula above all - would rather start a row ...
    if (inSpeech(line.text) && !inSpeech(next.text)) c -= 30;
    // ... and stay with the opening of the speech it introduces.
    if (introduces(line.text) && inSpeech(next.text)) c += 40;
    // Inside a sentence a break is dearer: keep the couplets it is made of.
    return endsUnit ? c : c + 20;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ – .*$/, "")).join(" / "),
    },
});
export default layout;
