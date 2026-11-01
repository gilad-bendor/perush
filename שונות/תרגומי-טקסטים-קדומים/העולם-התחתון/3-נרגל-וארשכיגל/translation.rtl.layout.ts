// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Nergal and Ereshkigal is narrative verse in two versions (Amarna, ~90 lines; Standard Babylonian, ~330), much of
// it speeches and messages repeated from one messenger to the next. Its rows are laid out by rule: the default
// cost of a break (punctuation); inside a sentence (unit) a break dearer, and dearer still inside a couplet
// counted from the sentence's start; a speech ending its row (but a one-line speech); a row would rather start
// with the speech formula; and a repeated passage laid out as its first occurrence. What the punctuation does
// not show - a few parallel pairs and the shape of the messages - is named below by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "47af117780937dad52a35c5941b4e747";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "צועק:",                              // MB.a+30-31: Nergal at the gate, and the first line of his call
    "בא אל חצרה הרחבה,",                  // a+22-23, c+48-49: came into her court / knelt - the first two acts
    "את יופיה מראה לו –",                 // d+7-8: she shows him her beauty - / he took it to heart (as c+63-64)
    "לא ידעתי את מחול העלמות,",           // d+63-64, d+79-80: the maidens' dance / the girls' skipping - a couplet
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "פתח את שערך;",                       // MB.a+31: "open your gate;" / "loosen the bolts, I'll come in!" - two rows of the call
    "לפניו – למה לא תכרע",                // b+8: the reproach closes the description of the gods kneeling (b+1-8)
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "לאמור: 'את – לא לך לעלות",           // a+4, a+26: Anu's message starts a row - the second time too
    "התיישר, עומד",                       // a+24, c+50: he stood up, speaking: / "Anu sent me" - a row
    "לאמור: 'בכיסא הזה שבי",              // c+52-54: "sit on this throne, / judge ..." - one row
    "לא ידעתי את מחול העלמות",            // d+63, d+79: the couplet starts a row
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“'][^"”']/.test(plainWords(t));
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
/** The speech formula, "X פתח את פיו ואמר, אל Y דבר דיבר:". */
const formula = (t: string) => /פתח(ה)? את פי(ו|ה)/.test(plainWords(t));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, unit, position }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row, or it is a
    // one-line speech, which may share a row with the narrative around it.
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !opensSpeech(line.text)) return "always";
    let c = cost;
    if (formula(next.text)) c -= 25;   // a row would rather start with the speech formula
    // Inside a sentence (unit) a break is dearer, and dearer still inside a couplet (counted from the unit's start).
    if (endsUnit) return c;
    return c + ((position - unit.first) % 2 === 1 ? 10 : 100);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the episodes (the ##s, ~30 of them - there is no level between them and the title). The footer:
    // the title, the version (Amarna or Standard Babylonian - named only by the first ## of each, "הנוסח ... – ..."),
    // and the episode.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain, file }) => {
            const title = chain.find(h => h.level === 1)?.text ?? "";
            const section = chain.find(h => h.level === 2)?.text;
            if (!section) return title;
            const at = file.headings.findIndex(h => h.level === 2 && h.text.trim() === section);
            const version = file.headings.slice(0, at + 1).filter(h => h.level === 2 && h.text.startsWith("הנוסח")).pop();
            const versionName = version ? version.text.replace(/ –.*$/, "").replace(/ \(.*\)$/, "") : "";
            return [title, versionName, section.replace(/^הנוסח[^–]*– /, "")].filter(Boolean).join(" / ");
        },
    },
});
export default layout;
