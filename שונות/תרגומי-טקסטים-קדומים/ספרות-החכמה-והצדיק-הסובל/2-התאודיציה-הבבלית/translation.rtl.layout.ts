// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Babylonian Theodicy is a dialogue in 27 stanzas of 11 lines, each stanza a run. Every line is a whole verse
// in two halves ("A – B"), a third of a row or more, so a row holds two lines, now and then three. The rows are
// laid out by rule (§2): a unit is a sentence - up to "." "!" ":" or "?" (at a line's end, a "?" here is a real
// question, nearly always) - and a break inside one costs more than a break between two; a line that ends with
// a dash leaves its subject hanging ("הערוד, חמור־הבר, אשר רוה ... –" / "... – היתה אוזנו?") and goes on to its
// verb; a line ending with ":" (an introduction) or "," (an epithet, a clause) leans on the next one. Where a
// parallel pair shows in no punctuation, it is named below by its words.
//
// The PDF's index goes down to the stanzas (###): they are the dialogue's map - each names its speaker and the
// syllable of the acrostic - and without them the index would hold the two halves alone. The footer is the
// title and the stanza at the top of the sheet ("התאודיציה הבבלית / בית V – הסובל"): the speaker is what
// changes.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "180b9e3d665b5fc8934218b4c5456068";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The words alone, without the punctuation at either end - what the exceptions are named by. */
const words = (t: string) => plainWords(t).replace(/^["'“‘\s]+/, "").replace(/[\s.,;:!–—"'”’-]+$/, "");
/** How the line ends: its last mark, closing brackets and quotes aside. */
const ending = (t: string) => bare(t).replace(/[\s"'”’)\]⟩*]+$/u, "");

/** A row must not end after a line whose words begin so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "ההורה, היולדת",            // 10-11: the mother / the father and the mother - the orphan's couplet
    "נתונים אבותינו",           // 16-17: our fathers walk the way of death / cross the river Hubur
    "הפרה",                     // 260-261: the cow - her first calf / her later one
    "אשר לא תחפש את דעת האל",   // 239-240: who does not seek the god / who pulls the god's yoke
    "שם – לא",                  // 190: its "?" is an uncertain reading, not a question - 188-191 go together
];
/** A row must end after a line whose words begin so. */
const BREAK_AFTER: readonly string[] = [
    "המלכה, מעצבתן",            // 276-278: the three creator gods, a row of their own - then what they gave (279-280)
];

/** A unit is a sentence: up to a line that ends with "." "!" ":" or "?". */
const unitEnd = ({ line }: UnitContext): boolean => /[.!?:]$/.test(ending(line.text));

/** What ending a row after `line` costs: cheap between sentences, dearer inside one. */
function rowBreak({ line, endsUnit, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(w => words(line.text).startsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words(line.text).startsWith(w))) return "always";
    const end = ending(line.text);
    // A "?" at a line's end is a real question here, and ends a sentence as a "." does.
    let c = /\?$/.test(end) ? Math.max(0, cost - 4) : cost;
    if (/[–—]$/.test(end)) c += 100;        // a subject left hanging goes on to its verb
    else if (/:$/.test(end)) c += 20;       // "...:" introduces what follows
    else if (/,$/.test(end)) c += 20;       // an epithet, a clause: the sentence goes on
    return endsUnit ? c : c + 40;
}

/** A heading's text without what follows its first " – " ("התאודיציה הבבלית – "..."" → "התאודיציה הבבלית"). */
const short = (text: string) => text.split(" – ")[0];
/** A stanza's heading without its line numbers and syllable ("בית V (45–55) – הסובל – ag" → "בית V – הסובל"). */
const stanza = (text: string) => text.replace(/ \([^)]*\)/, "").replace(/ – [^–]*$/, "");

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => {
            const title = chain.find(h => h.level === 1);
            const here = chain.find(h => h.level === 3) ?? chain.find(h => h.level === 2);
            return [title && short(title.text), here && (here.level === 3 ? stanza(here.text) : short(here.text))]
                .filter(Boolean).join(" / ");
        },
    },
});
export default layout;
