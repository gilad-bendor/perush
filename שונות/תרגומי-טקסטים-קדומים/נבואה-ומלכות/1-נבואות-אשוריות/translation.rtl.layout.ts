// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Assyrian prophecies (SAA 9) are eleven tablets of short oracles: verse-like lines of two or three words,
// sentences running over several of them, and each oracle closing with its colophon ("מִפִּי X, / בן ארבאיל").
// Laid out by rule: sentences as units (a real question ends one too), a break inside one dearer (+40; after a
// `;`, +10), a line ending with no punctuation dearer still (+40 - the Hebrew keeps the Akkadian verb last, so
// the clause goes on), a speech that closes ending its row, the colophon a row of its own, a line that is all
// lacuna a free place to break. So the vocatives ("אסרחדון, ...") and the formulas ("אל תירא", "אנוכי אשתר
// של ארבאיל") mostly start rows by themselves. What punctuation does not show is named below by its words.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "44e3b7179121ecd78254af74db440905";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "זריחת השמש",                        // "sunrise / (and) sunset" - a pair (2.4, 2.5)
    "את אלה של הימין",                    // 1.8: "those of the right / and of the left"
    "אנוכי אשתר של ארבאיל:",              // 1.1: the self-presentation leads into the promise it introduces
    "סין לימינך, שמש לשמאלך;",             // 1.4: "Sin at your right, Shamash at your left; / sixty great gods ... stand"
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "שלום לשמיים",                        // 3.1: the series of "שלום ..." greetings starts a row
];

/** A line's text without footnote marks and emphasis. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\*/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The last mark of a line - past closing quotes and brackets. */
const endMark = (t: string) => bare(t).replace(/[\s"'”’)\]⟩]+$/u, "").slice(-1);
const closesSpeech = (t: string) => /["”]$/.test(bare(t));
const opensSpeech = (t: string) => /^(לאמור: )?["“']/.test(plainWords(t));
/** The colophon, "מִפִּי X" / "מן פי X" - the prophet's name that closes an oracle. */
const colophon = (t: string) => /^(מפי|מן פי) /.test(plainWords(t));
/** A line that is all lacuna, or broken (a "…" in it - its punctuation is not to be trusted). */
const lacuna = (t: string) => /^[\[\]…\s.]*$/.test(bare(t));
const broken = (t: string) => /…/.test(t);
/** A question word - "?" is mostly an uncertain reading here; a question has one of these before it. */
const questionWord = /(^|[\s"(\[–])(איזה|אילו|מי|מה|מתי|איך|לא|הלא)(?=[\s\]]|$)/;

/** Where a unit ends: a sentence (`.` `!` `:`, a real `?`, a closing quote). */
function unitEnd({ line, run, position }: UnitContext): boolean {
    const end = endMark(line.text);
    if (/[.!:]/.test(end) || closesSpeech(line.text)) return true;
    if (end === "?" && !/\?\]/.test(bare(line.text)))
        return run.slice(Math.max(0, position - 2), position + 1).some(l => questionWord.test(plainWords(l.text)));
    return false;
}

/** What a break inside a sentence costs, on top. */
const INSIDE = 40;

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text);
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // The colophon starts a row of its own: the oracle ends, its speaker is named.
    if (colophon(next.text)) return "always";
    if (colophon(line.text)) return "never";
    if (lacuna(line.text) || lacuna(next.text)) return Math.min(cost, 4);
    // A speech that closes ends its row - unless another answers it, or it asks what the next line answers.
    if (closesSpeech(line.text) && !opensSpeech(next.text) && endMark(line.text) !== "?") return "always";
    let c = cost;
    const end = endMark(line.text);
    if (end === ":") c = 4;                                     // a colon leads into what it introduces
    else if (end === "?" && endsUnit) c = 0;                    // a real question
    else if (!/[.!?;:,…–—-]/.test(end) && !broken(line.text)) c += 40;   // inside its clause
    if (closesSpeech(line.text) && opensSpeech(next.text)) c += 30;     // a quotation answered by another
    // Inside a sentence (unit) a break is dearer.
    // Inside a sentence (unit) a break is dearer - after a `;`, which halves one, only a little.
    return endsUnit ? c : end === ";" ? c + 10 : c + INSIDE;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
    // Eleven tablets (`##`) of short oracles (`###`, a third of a page or less each): the index lists the
    // tablets; the footer names the tablet (it carries its SAA number), the title before the first one.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => (chain.find(h => h.level === 2) ?? chain[0])?.text.replace(/ – תרגום$/, "") ?? "",
    },
});
export default layout;
