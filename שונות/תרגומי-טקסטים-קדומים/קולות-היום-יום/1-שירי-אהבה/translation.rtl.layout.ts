// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Old Babylonian love songs, dialogues and incantations (LAOS 4): 25 short poems, each cut into sections by
// `###` headings, so a run is a section - a few rows. Short lines, much broken text, and a great deal of
// enjambment: a clause often runs over two or three tablet lines with no mark between them. The rules: a
// break inside a sentence is dearer (+30), so that a sentence - and the parallel lines it is made of - keeps
// its row; a line that ends broken off ("[…]", "…") only +10, since no one knows whether its sentence goes on;
// a "?" at a line's end is a real question here (an uncertain reading marks a word, not a line), so it ends
// a sentence; a direct speech ends its row. What the punctuation does not show - mostly parallel pairs with
// a comma or none between them, and a speaker's change - is said below, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "2389e68354b56d04782d3d2e0804a427";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "מתפללת אני ומתפללת אל נניה,",      // LAOS 4 16 o.i.24-26: "I pray to Nanaya, / your well-being I take for ever / as a gift"
    "בבואך – אבי שמח בך,",              // LAOS 4 07 o.3-4: "when you come, my father rejoices / my mother Ningal exults"
    "בבואך – יגילו לך הבריחים,",        // LAOS 4 07 o.6-7: "the bolts rejoice / the door opens by itself"
    "מדוע גידפו? הביא, והביא לכאן!",    // LAOS 4 07 o.16-17: "he brought and brought" / "he came and went, brought and brought"
    "אשר בראש, בראש השנה ערם",          // LAOS 4 01 o.i.9-10: "who at the year's start heaped up / his fruit" - a verb and its object
    "את תנובתו – וחולפים",              // LAOS 4 01 o.i.10-11: "and pass / Adad's lightnings over it" - a verb and its subject
    "הרחל – את טלייה,",                 // LAOS 4 22 r.23-24: the she-goat, the ewe ... / the she-ass - one list
    "כמו אפסר – הסתכלי בי!",            // LAOS 4 26 r.21-22: "like a halter - look at me! / like a calf - lick me!"
    "קשרת את ראשך?",                    // LAOS 4 26 r.23-26: "why ... bound your head? / ... girded your loins?"
    "שמה אשתר את המעשה הזה –",          // LAOS 4 02 o.16-17: "had Ishtar done this - / when would lovers not be seen!"
    "הסנונית הקצתי;",                   // LAOS 4 02 o.20-21: "at the swallow's voice I woke; / in the bedroom I tossed" - a couplet
];
/** A row must not start with a line whose words begin so. */
const KEEP_WITH_PREVIOUS: readonly string[] = [
    "כמו הצאן",                         // LAOS 4 23 o.14-15: "like your lambs / love me! // like the sheep / turn to me!"
    "אתנשא עליה!",                      // LAOS 4 04 o.4: the end of "I will not give her my beads!" - as LAOS 4 16 has it
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "כי ערים אנו!",                     // LAOS 4 16 o.i.21: the man's words end; the woman answers ("אתפוס אותך")
    "\"גבירת העצה\" – נקראת.",           // LAOS 4 16 r.iv.21-22 / 23-25: her names, then "the other one ... before Ishtar"
];

/** A line's text without its Markdown: footnote marks, emphasis. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets or "…". */
const plainWords = (t: string) =>
    bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** How a line ends: its last mark, brackets and quotes aside. */
const ending = (t: string) => bare(t).replace(/[\s"'”’)\]⟩]+$/u, "");
const opensSpeech = (t: string) => /^["“]/.test(bare(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** A sentence ends: . ! : - and ? too, which at a line's end here is a real question (uncertain readings mark a word, not a line). */
const endsSentence = (t: string) => /[.!:?]$/.test(ending(t)) || closesSpeech(t);

function unitEnd({ line }: UnitContext): boolean {
    return endsSentence(line.text);
}

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (KEEP_WITH_PREVIOUS.some(w => plainWords(next.text).startsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row.
    if (closesSpeech(line.text) && !opensSpeech(next.text)) return "always";
    // A question ends a sentence as a full stop does.
    const c = /\?$/.test(ending(line.text)) ? Math.min(cost, 0) : cost;
    // Inside a sentence a break is dearer: keep the sentence, and the parallel lines it is made of, whole.
    // ... but where the line ends broken off ("[…]", "…") no one knows whether the sentence goes on.
    if (endsUnit) return c;
    return /…$/.test(ending(line.text)) ? c + 10 : c + 30;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
    pdf: {
        // The poems (##), each with its page; their sections (###) are mostly a few rows - labels, not a way in.
        indexDepth: 2,
        // The poem the sheet is in, its parenthesis (the edition's number, the city) dropped; before the first
        // poem, the title without " – תרגום".
        footerTitle: ({ chain }) => {
            const poem = chain.find(h => h.level === 2) ?? chain.find(h => h.level === 1);
            return poem ? poem.text.replace(/ \([^()]*\)$/, "").replace(/ – תרגום$/, "") : "";
        },
    },
});
export default layout;
