// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Poor Man of Nippur is short narrative verse (160 lines), mostly couplets, two or three lines to a row, and
// full of repeated passages: the plan and its carrying out, the gate and the gatekeeper, the message to the
// mayor ("לאדונך – שמחת האלים! – כך אמור לו: ..."), the beating "from his head to the sole of his feet". Its rows
// are laid out by rule: the default cost of a break (punctuation), a break inside a sentence dearer (+30), a
// speech's close a cheap break (-25 - not "always": the speeches are one or two lines, and the mayor's reaction
// "הממונה שמע – וכל היום צחק" shares the row of the message's end), and a line that introduces a speech ("...
// דבר דיבר:") kept with its opening (+20). A repeated passage is laid out as its first occurrence ("alike":
// "similar" and "free" each broke one retelling unlike the first). The one exception is the beating formula.
//
// The PDF's index lists the seven sections (###), the story's episodes. The footer is the title.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "44a54644e30cbeb2ee2465141d5c0305";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "ועד מדרך רגליו",                    // 102, 134a, 155: "from his head to the sole of his feet / he beat his limbs" - the beating, thrice
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“]/.test(plainWords(t));
const closesSpeech = (t: string) => /["”]$/.test(plainWords(t));
/** A line that introduces what follows: "X אל Y דבר דיבר:", "עם לבו העלוב – הוא נמלך:". */
const introduces = (t: string) => /:$/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    let c = cost;
    // A speech that closes is a cheap place for a break.
    if (closesSpeech(line.text)) c -= 25;
    // The line that introduces a speech would rather stay with its opening.
    if (introduces(line.text) && opensSpeech(next.text)) c += 20;
    // Inside a sentence (unit) a break is dearer: keep the couplets it is made of.
    return endsUnit ? c : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
});
export default layout;
