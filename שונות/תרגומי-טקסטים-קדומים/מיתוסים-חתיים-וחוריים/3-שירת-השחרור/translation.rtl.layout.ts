// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Song of Release (its Hittite side) is Hurro-Hittite narrative verse, a line of the tablet per line - a
// sentence often runs on over two or three of them: the feast in the underworld, the parables, each with its
// meaning and its refrain ("הניחו את הדבר ההוא! …"), and the god's demand of Megi.
//
// Its rows are laid out by the rule the Hittite and Hurrian myths share - the same code in each of
// מיתוסים-חתיים-וחוריים/*/translation.rtl.layout.ts, to be kept alike: the default cost of a break (punctuation); a
// line that ends inside its clause (no punctuation, no lacuna) kept with the next; a line that introduces (ends with
// ":") kept with what it introduces, one that ends with a dash (a simile's "כמו ש… –", a fronted object) with what
// completes it, and a "כאשר …," / "אם …," with its main clause; the lines of a list (the same first or last word)
// kept together; a row that would rather end where a speech closes, and start with an introduction or a simile. What
// punctuation does not show is said below, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "a69825e193e5419488476999b61ed01d";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [];

/** A line's text without footnotes, "(?)" marks and italics. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf stays), brackets or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]⟨⟩‹›…]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“]/.test(bare(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** A line that introduces what follows: a speech formula, "הִנֵּה X מונח:", "ובארץ רעב נעשה:". */
const introduces = (t: string) => /:["”]?$/.test(bare(t));
/** A line that leads on to what completes it: a simile's "כמו ש… –", a fronted "ואלה אשר הרות –". */
const leadsOn = (t: string) => /[–—]$/.test(bare(t));
/** A line that ends inside its clause: no punctuation at its end, and no lacuna ("[…]", "…") either. */
const runsOn = (t: string) => !/[.,;:!?–—"”'…\])›]$/.test(bare(t));
/** A line's words, without punctuation. */
const wordsOf = (t: string) => plainWords(t).replace(/["“”'.,;:!?–—()]/g, " ").split(/\s+/).filter(Boolean);
/** Its first word, a "ו" or an "ואילו" ahead of it left out. */
const firstWord = (t: string) => { const w = wordsOf(t).filter(x => x !== "ואילו"); return (w[0] ?? "").replace(/^ו/, ""); };
const lastWord = (t: string) => { const w = wordsOf(t); return w[w.length - 1] ?? ""; };
/** Two lines of a list - "את חטאו לקחתי, / את חרונו לקחתי," - "ובתוכו … ; / ובתוכו …": the same first or last word. */
const parallel = (a: string, b: string) =>
    (firstWord(a).length > 1 && !NOT_A_LIST.includes(firstWord(a)) && firstWord(a) === firstWord(b)) || (lastWord(a).length > 1 && lastWord(a) === lastWord(b));
/** First words that begin lines of a sentence, not items of a list ("ואותו [לא מצאו]; / ואותו – הולכת זו"). */
const NOT_A_LIST: readonly string[] = ["אותו", "אותה", "אותם", "הוא", "היא", "הם", "גם", "כך", "הנה"];
/** A clause that opens with "(ו)(אילו) כאשר / אם" and is not over at the line's end ("ואם תביט החוצה,"). */
const subordinate = (t: string) => /^(ו)?(אילו )?(כאשר|אם) /.test(plainWords(t).replace(/^["“']+/, "")) && /[,–—]$/.test(bare(t));
/** A simile's protasis: "(ו)כמו ש…". */
const simile = (t: string) => firstWord(t) === "כמו";

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    let c = cost;
    if (introduces(line.text)) c += 40;                              // an introduction stays with what it introduces,
    if (leadsOn(line.text)) c += 60;                                 // a simile's "כמו ש… –" with its "כך …",
    if (runsOn(line.text)) c += 30;                                  // a line that ends inside its clause with the next,
    if (subordinate(line.text)) c += 25;                             // a "כאשר …," / "אם …," with its main clause,
    if (introduces(next.text)) c -= 10;                              // a row would rather start with an introduction,
    if (closesSpeech(line.text) && !opensSpeech(next.text)) c -= 20; // and end where a speech closes;
    if (parallel(line.text, next.text)) c += 20;                     // the lines of a list stay together,
    else if (simile(next.text)) c -= 10;                             // and a row would rather start with a simile
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // One song, in the order of its tablets, and many short sections (§), most of them two to five rows: no index;
    // in the footer the title, without its parenthesis (the CTH number), and the tablet the sheet is in - the
    // subject changes with it (the feast, the parables, the slave owners, the god's word): "שירת השחרור: הצד
    // החתי / KBo 32.14".
    pdf: {
        indexDepth: 0,
        footerTitle: ({ chain }) => {
            const title = (chain.find(h => h.level === 1)?.text ?? "").replace(/ \([^)]*\)/g, "");
            const tablet = chain.find(h => h.level === 2)?.text.replace(/[,\s]*(§.*|–.*)$/, "").trim();
            return tablet ? `${title} / ${tablet}` : title;
        },
    },
});
export default layout;
