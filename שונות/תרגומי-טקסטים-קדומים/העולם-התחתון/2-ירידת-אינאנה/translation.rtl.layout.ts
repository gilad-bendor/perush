// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Descent of Inana is Sumerian narrative verse (412 lines) built of long lines - a third to two thirds of a
// row each - and of passages said again and again: the orders to Ninshubur and their carrying out, the lament
// before the three fathers, the seven gates, Enki's orders and the creatures' doing them, the demons' list. Its
// rows are laid out by rule: the default cost of a break (punctuation), a break inside a sentence dearer (+30), a
// speech ending its row, and each repetition broken as its first occurrence ("alike"). What punctuation does not
// show - mostly parallel pairs - is named below by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "20a37913b3cc44d2febd850f23c79891";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "וזירתי נאת־הדברים,",                          // 30-31, 312-313: "my vizier fair of words / my envoy right of words"
    "העומדים לרגל – הלכה;",                         // 104-105: in Neti's report the me run on into the garments (cf. 16)
    "היכנסי!\"",                                    // 128-129: "come in, Inana!" / "Inana, when she came" - two short lines
    "את מי הנהר יחלקו לכם – אל תושיטו יד!",         // 246-247: the river / the field - a couplet
    "את הנהר ומימיו חילקו להם – יד לא הושיטו;",     // 273-274: and its carrying out
    "זה שלפניה – וזיר אינו – שרביט ביד אחז;",       // 291-292: the one before her / the one behind her
    "שדי־גלה קטנים – כמחיצת־קנים,",                 // 293-294: the small demons / the big demons
    "ראש אחד במקום ראשה תיתן!\"",                   // 289-290: the Anuna's demand, and "Inana comes up" at once
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "העומדים לרגל – הלכה.",                         // 16: the seven me (14-16) end; the garments begin
    "אחותך – אל היכל גנזר נגשה,",                   // 98: Neti's report - its 99-101 a row, as Inana's own 73-75
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "דמעות על התלים",                               // 34, 176, 316: the mourning rites start a row, every time
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“']/.test(plainWords(t));
const closesSpeech = (t: string) => /[.!?]"$/.test(bare(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, run, position, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    // Dumuzi's demons (366-367): their list lacks Inana's 300 and 303, so its last two lines share a row - unlike
    // hers (303-304 | 305), whose shape "alike" would otherwise copy.
    if (words.endsWith("את הילד מעל ברכי האיש – הם מקימים;") && position > 0
        && plainWords(run[position - 1].text).endsWith("אינם נושקים;")) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row. (A speech quoted
    // inside a speech, in '...', does not count: the lament Inana dictates runs on into "if Enlil does not ...".)
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    // Inside a sentence a break is dearer: keep the couplets and lists it is made of.
    return endsUnit ? cost : cost + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // Ten pages in seventeen episodes (## each, from the gates to the praise): an index of them, and the episode
    // in the footer.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ \(.*\)$/, "")).join(" / "),
    },
});
export default layout;
