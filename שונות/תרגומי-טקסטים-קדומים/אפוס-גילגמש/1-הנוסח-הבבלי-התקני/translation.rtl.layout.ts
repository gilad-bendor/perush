// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Standard Babylonian Gilgamesh, twelve tablets, is narrative verse, mostly couplets, much of it dialogue
// introduced by a formula ("X פתח את פיו ואמר, אל Y דיבר:", "X דיבר אליו, אל Y:"), and whole passages said
// again word for word (the dreams and their tellings, the camps on the road, the questions of the ale-wife, of
// Urshanabi and of Utnapishti and Gilgamesh's answer). Its rows are laid out by rule, with the Old Babylonian
// version's unit parser (../2-הנוסח-הבבלי-הקדום/): the run is parsed into units - sentences (a "?" ends one
// only with a question word), two one-line sentences in a row taken as one couplet - and a break inside a unit is
// dear, dearer inside a couplet; the formula would rather start a row, and a sentence always ends before it; a
// speech that closes ends its row, and so does a quotation inside one (a dream retold, a saying); a line ending
// with ":" stays with what it introduces, unless that is a speech; a broken line is a free place for a break.
// A repeated passage is laid out as its first occurrence ("alike"; "similar" split couplets in the variants).
// What the punctuation does not show is said below, by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout";
import { lineSimilarity } from "../../layout/numbered-lines";
import { endsSentence } from "../../layout/rows";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "a190760c7185e9fe395f5d99616405b8";

/** A row must not end after a line whose words end so (core() of the line: no punctuation at its end - or, if the name ends with punctuation, plainWords()). */
const KEEP_WITH_NEXT: readonly string[] = [
    "אין לו מתחרה, וקמים כלי נשקו",          // I 63-64, 80-81: "he has no rival, his weapons are raised, / by the pukku his comrades are roused"
    "חומבבה – קולו מבול",                     // II 221-222 (and its repeats): "Humbaba - his voice a flood, / his mouth fire, his breath death"
    "אל הבית אשר באיו אינם יוצאים",          // VII 185-186: "to the house whose entrants do not come out, / to the road whose going does not return"
    "השמדנו את חומבבה, אשר ביער הארזים יושב,", // X 33-34 (130-131, 230-231): "we destroyed Humbaba ..., / killed lions in the passes" (with the comma: VIII 54 ends a sentence)
    "מלון ישכבו",                             // III 85-86: the night's camp ends Shamash's words, and the refrain "היא – אל תחרד ..." shares their row
    "האוכל לחם חרפות ומארות",                // VI 73-74: "shall I eat the bread of shame and curses? / and in the cold shall ... be my cover?'"
    "רובץ נרגל, אשר אינו חומל, לא אחזו – הארץ אחזתהו", // XII 61-62 (69-70, 77-78): the last two "the earth seized him" lines share a row where they fit
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "שמש, גילגמש – הלא האלים",               // III 100-106: Ninsun's formula, then the "הלא ..." questions in pairs
    "בעלת־המסבאה דיברה אליו, אל גילגמש",      // X 35: the ale-wife's formula on a row of its own, as everywhere (Gilgamesh's words before it leave their quote unclosed)
];

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?", "…" or ⟨⟩. */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
/** The words the exceptions name: plainWords() without the quotes and punctuation at either end. */
const core = (t: string) => plainWords(t).replace(/^[\s"'“‘–—-]+/, "").replace(/[\s"'”’.,;:!–—-]+$/, "");
const lead = (t: string) => bare(t).replace(/^[\[(*]+/, "");
const opensSpeech = (t: string) => /^["“]/.test(lead(t));
const opensQuote = (t: string) => /^['‘]/.test(lead(t));
const closesSpeech = (t: string) => /["”]\s*\]?$/.test(bare(t));
/** A quotation inside a speech - a dream told, words said by another - that closes with the line ("... עמי.'"). */
const closesQuote = (t: string) => /['’]\s*\]?$/.test(bare(t));
/** The speech formula's first line: "X פתח את פיו,", "X דיבר אליו, אל Y:", "X פושר חלום,", "X נשא את פניו,". */
const formula = (t: string) => /פתחה? את פי(ו|ה)|^\S+ דיברה? אלי(ו|ה)|פושר חלום|נשא את פניו/.test(plainWords(t));
/** A line that introduces what follows - a speech, a list: it ends with ":". */
const introduces = (t: string) => /:$/.test(plainWords(t));
/** Its second line: "ודיבר אל Y:". */
const formulaTail = (t: string) => /^ודיברה? אל/.test(plainWords(t));
/** A line that is all, or nearly all, lacuna: fewer than six letters, restored ones included. */
const lacuna = (t: string) => bare(t).replace(/[^א-ת]/g, "").length < 6;

/** A real question: a "?" at the line's end, in a sentence that has a question word (most "?" here mark an uncertain reading). */
const QUESTION_WORD = /(^|[\s"'\[–(,])(מי|מה|למה|לאן|אנה|אָנָה|איך|הלא|כמה|אי־פעם)([\s\],?]|$)/;
const asks = (t: string) => /\?\s*\]?$/.test(bare(t).replace(/["'”’]+$/, ""));

/** Whether a sentence ends with run[i] - its first line run[from]. */
function endsSentenceAt(run: readonly NumberedLine[], i: number, from: number): boolean {
    const next = run[i + 1];
    return endsSentence(run[i].text)
        || (asks(run[i].text) && run.slice(from, i + 1).some(line => QUESTION_WORD.test(bare(line.text))))
        || (next !== undefined && (opensSpeech(next.text) || opensQuote(next.text)));   // a speech opens after it
}

/**
 * The run's units: its sentences, with two one-line sentences in a row taken as one couplet - unless a speech
 * opens or closes between them, or the second is clearly the better partner of the one after it.
 */
const parsed = new WeakMap<readonly NumberedLine[], boolean[]>();
function unitEnds(run: readonly NumberedLine[]): boolean[] {
    let ends = parsed.get(run);
    if (ends) return ends;
    const sentences: [number, number][] = [];
    let first = 0;
    run.forEach((_, i) => {
        if (i === run.length - 1 || endsSentenceAt(run, i, first)) { sentences.push([first, i]); first = i + 1; }
    });
    const single = (s: [number, number] | undefined) => s !== undefined && s[0] === s[1];
    const units: [number, number][] = [];
    for (let s = 0; s < sentences.length; s++) {
        const [a, b] = sentences[s], n = sentences[s + 1], nn = sentences[s + 2];
        if (single(sentences[s]) && single(n)) {
            const betterLater = single(nn) && lineSimilarity(run[n[0]].text, run[nn[0]].text) > lineSimilarity(run[a].text, run[n[0]].text) + 0.15;
            const speechEdge = opensSpeech(run[n[0]].text) || opensQuote(run[n[0]].text) || closesSpeech(run[a].text)
                || introduces(run[n[1]].text) || (single(nn) && introduces(run[nn[0]].text) && betterLater);
            if (!betterLater && !speechEdge) { units.push([a, n[1]]); s++; continue; }
        }
        units.push([a, b]);
    }
    ends = run.map(() => false);
    for (const [, last] of units) ends[last] = true;
    parsed.set(run, ends);
    return ends;
}
const unitEnd = ({ run, position }: UnitContext): boolean => unitEnds(run)[position];

/** What ending a row after `line` costs. */
function rowBreak({ line, next, position, unit, endsUnit, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(w => core(line.text).endsWith(w) || plainWords(line.text).endsWith(w))) return "never";
    if (BREAK_BEFORE.some(w => core(next.text).startsWith(w))) return "always";
    if (formulaTail(next.text)) return "never";   // "X פתח את פיו, / ודיבר אל Y:" is one
    // A speech that closes ends its row - unless another speech answers it on the same row, or it is a line's
    // exclamation ("גילגמש נם, שוכב; / "חלום, לילה, הבא!"").
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !opensSpeech(line.text)) return "always";
    // So does a quotation inside a speech (a dream retold, a saying) - unless it opened on the same line, or the
    // speech itself closes with the next line ("... אני!' | [ראה] את חלומותיו."").
    if (closesQuote(line.text) && !opensSpeech(next.text) && !opensQuote(next.text) && !opensQuote(line.text)
        && !closesSpeech(next.text)) return "always";
    let c = cost;
    if (opensSpeech(next.text)) c -= 10;        // a speech would rather start a row
    // Broken lines: a free place for a break, on either side.
    if (lacuna(line.text) || lacuna(next.text)) return Math.min(c, 4);
    // A line ending with ":" stays with what it introduces - unless that is a speech, which may start a row.
    if (introduces(line.text) && !opensSpeech(next.text)) c += 100;
    if (formula(next.text)) c -= 25;            // a row would rather start with the speech formula
    // Before the formula a sentence always ends, whatever the punctuation (a lacuna, a speech left unclosed) says.
    if (endsUnit || formula(next.text)) return c;
    // Inside a unit: after an even number of its lines (between couplets) dear, after an odd one dearer.
    return c + ((position - unit.first + 1) % 2 === 0 ? 60 : 150);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
    // The index: the twelve tablets, each several pages. Their sections (some two hundred, a third of a page
    // each) are labels the page shows at a glance.
    pdf: {
        indexDepth: 2,
        // The tablet the sheet is in, without its motto or line range: "עלילות גלגמש, הנוסח הבבלי התקני, לוח XI"
        // (before the first tablet, the file's title without its motto and tablet range).
        footerTitle: ({ chain }) => {
            const tablet = chain.find(h => h.level === 2);
            if (tablet) return tablet.text.replace(/:\s.*$/, "").replace(/, שורות .*$/, "");
            return (chain[0]?.text ?? "").replace(/:\s.*?\s–\s/, ", ").replace(/, לוחות .*$/, "");
        },
    },
});
export default layout;
