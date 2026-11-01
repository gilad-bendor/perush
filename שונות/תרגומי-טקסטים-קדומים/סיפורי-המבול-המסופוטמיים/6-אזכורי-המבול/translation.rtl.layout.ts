// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Nine short texts that mention the flood: king lists (the reigns, "X fell, its kingship to Y was carried"),
// the opening of Shuruppak's instructions, Sumerian and Akkadian verse, a bilingual chronicle, and the Uruk
// list of kings and sages. Their rows are laid out by rule: the sentence is the unit - a reign ("... עשה N
// שנה."), a city's fall, a couplet of the bilingual chronicle - and a break inside one is dear (+150), dearer
// still after a line with no punctuation (+40: a name before its verb). A passage repeated word for word is
// laid out as before ("alike" - "similar" would make every city of the king list alike, row for row, and cost a
// row). What the punctuation does not show - a couplet of two sentences, a verb kept with its objects, the
// repetition of Enki's speech (F 123-128) shaped as its first telling - is said below, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "7de0dd05b98e70156e562dd15ea89bfd";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בעת ההיא הילד, בימי טהרתו,",        // §4 14-16: "at that time the child ... / did 100 years, / and after growing did 100 years"
    "עשה 100 שנה,",                      //   (the same sentence)
    "את סל העפר ואת המחרשה, מחיית הארץ,", // §4 12-13: "the basket and the plough / had not yet given -" - the verb kept with its objects
    "מאז הימים הרחוקים ההם,",            // §3 F 27-28: the speech's opening "since those days ... / since those nights ..." (F 29 cannot join them)
    "אחרי ששטף המבול,",                 // §3 F 30-31 and its repetition F 123-124: "the assembly - after the flood swept, / to destroy the seed of mankind"
    "והיו חיים.",                       // §3 F 32-33, F 125-126: "I alone was for life - and there was life. / Ziusudra ... lived" - a couplet
    "בדרך רחוקה הלך ובא, יגע, ונרגע.",   // §6 9-10: he went a distant road / all his toil was set on a stele - a couplet
    "את המלוכה אל הארץ ...",             // §8 4′-5′: "kingship to the earth / kingship in the land" - a pair
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "אנליל את ה",                       // §8 15′: after the sum of the kings ("5 cities, 9 kings"), Enlil and the din - the flood's motive
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    let c = cost;
    // A line with no punctuation is inside its clause (a name, then its verb on the next line).
    if (!/[.,;:!?–"]$/.test(words)) c += 40;
    return endsUnit ? c : c + 150;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Nine texts of a page or so each: an index of them (the ###s are a few lines each), and in the footer the
    // file's title and the text the sheet is in, by its name alone ("4. שליטי לגש", not its " – subtitle").
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.level === 2 ? h.text.replace(/ \(.*\)$/, "").replace(/ – .*$/, "") : h.text).join(" / "),
    },
});
export default layout;
