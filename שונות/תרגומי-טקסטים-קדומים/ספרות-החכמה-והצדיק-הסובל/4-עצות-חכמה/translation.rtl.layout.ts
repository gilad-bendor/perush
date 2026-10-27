// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Counsels of Wisdom are verse in short sections of two to ten lines, each line a whole admonition in two
// halves ("A – B"), most of them closed by ";". Two or three lines make a row. The rows are laid out by rule
// (§2): a unit is a sentence (the default: up to "." "!" ":"), and a break inside one costs more than a break
// between two; a line that ends with "," or "–" goes on into the next one, and so does one that ends with ":"
// (it introduces what follows - "בלימודך – ראה בלוח:", "אשנה ... – בוא, אומרה לך:"). The rest is said below, by
// the words of the lines.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "916b9dbb65852d5d8f6d160d86fd9059";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The words alone, without the punctuation at either end - what the exceptions are named by. */
const words = (t: string) => plainWords(t).replace(/^["'“‘\s]+/, "").replace(/[\s.,;:!–—"'”’-]+$/, "");
/** How the line ends: its last punctuation, the quotes after it aside. */
const ending = (t: string) => plainWords(t).replace(/["'”’\s]+$/, "");
const opensSpeech = (t: string) => /^["“]/.test(plainWords(t));

/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בחכמה של אאה",               // 1-2: the opening words, the text's title - then the address, "לך, בני ..."
];
/** A row must not end after a line whose words begin so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "ראה את האח הגדול",           // A+5-6: "see the elder brother ... / ... this – fear and honour"
    "את אשר לרגע תשיח",           // A+76-77: "what you say in a moment ... / and in restraint of speech ..." - a couplet
    "אשתרית, אשר לאל",            // A+23-25: the harlot, the ishtarītu, the kulmašītu - the last two kept together
];

/** What ending a row after `line` costs. */
function rowBreak({ line, next, endsUnit, cost }: BreakContext): BreakCost {
    if (BREAK_AFTER.some(w => words(line.text).endsWith(w))) return "always";
    if (KEEP_WITH_NEXT.some(w => words(line.text).startsWith(w))) return "never";
    // A speech's introduction stays with it ("מפי אנשיך – כך אל תשמע: / "(ב)בית (ההוא) ...").
    if (ending(line.text).endsWith(":") && opensSpeech(next.text)) return "never";
    // The god's reply, "על זאת – האל זועם עליו; / לא טוב על שמש ..." and its twin "... שמח בו", is a couplet of its own.
    if (/^על זאת/.test(words(next.text))) return "always";
    if (/^על זאת/.test(words(line.text))) return "never";
    let c = cost;
    if (/[,–:]$/.test(ending(line.text))) c += 40;
    return endsUnit ? c : c + 40;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // A short text in some twenty-five sections of a few rows each: no index, and the title on every sheet.
    pdf: {
        indexDepth: 0,
        footerTitle: ({ chain }) => chain.find(h => h.level === 1)?.text ?? "",
    },
});
export default layout;
