// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Cuthaean Legend of Naram-Sin: Akkadian narrative verse in five recensions (OB I-II, MB A-B, SB), the
// first four mostly broken. Short lines, three or four to a row, in sentences that run over several lines -
// often with a dash at a line's end leading into the next ("שני שישים אלף חיל הוצאתי – | מחץ תבוסה ...").
// Its rows are laid out by rule: the default cost of a break (punctuation), a break inside a sentence dearer
// (+30), a line ending with a dash kept with the line it leads to, a speech ending its row, and the formula
// that opens one ("כך אמרתי אל לבי, לאמור – אני עצמי:", "... פתח את פיו ואמר,") starting one. What punctuation
// does not show is named below by words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "b673abe0fdce5b9d65c8cf8b6df42689";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בני הבוחן כך אמרו:",                // SB 17, 114: the diviners' answer is on the formula's row, not a row of 22%
    "כמונו, אנושות הם;",                 // SB 66-67: "if blood comes out – human; | if no blood – demons" - a couplet
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "סרגון אבי – אל ההר נשען",           // SB 4: "Sargon went to the mountain. | After Sargon went to the mountain," - one row
    "עיר עם עיר, בית עם בית",            // SB 138: the series "city against city, ... father against son" starts a row
    "סופרים חכמים",                      // SB 175: the scribes and the reader who saw the stele - a row of their own
    "אתה אשר אותי בירכת",                // SB 179: the closing blessing - its own row (178's dash is a pause, not a lead-in)
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** A line that closes a speech opened on an earlier line - not a quotation within the line. */
const closesSpeech = (t: string) => /["”]$/.test(bare(t)) && (bare(t).match(/["“”]/g) ?? []).length % 2 === 1;
const opensSpeech = (t: string) => /^["“]/.test(bare(t));
/** The formulas that open a speech. */
const formula = (t: string) => /פתח את פיו|לאמור – (אני|הוא|הם)|כך אמרו:$|כך התקרבה:$/.test(plainWords(t));

function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    let c = cost;
    // A line ending with a dash leads into the next.
    if (/[–—]$/.test(bare(line.text))) c += 150;
    if (formula(next.text) && !formula(line.text)) c -= 25;   // a row would rather start with the speech formula
    // Inside a sentence (unit) a break is dearer.
    return endsUnit ? c : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    // "alike": the god list and the extispicy (SB 75-77 and 111-113) laid out the same both times.
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        // The recensions (#), each starting a sheet; their sections (##, "b+1–b+12: ...") are mostly a few rows.
        indexDepth: 1,
        // The legend's title, and the recension the sheet is in - without its English parenthesis.
        footerTitle: ({ chain, file }) => {
            const strip = (t: string) => t.replace(/ \([^)]*\)$/, "").replace(/[*`]/g, "");
            const title = strip(file.headings[0]?.text ?? ""), here = chain.find(h => h.level === 1)?.text ?? "";
            return here && strip(here) !== title ? `${title} / ${strip(here)}` : title;
        },
    },
});
export default layout;
