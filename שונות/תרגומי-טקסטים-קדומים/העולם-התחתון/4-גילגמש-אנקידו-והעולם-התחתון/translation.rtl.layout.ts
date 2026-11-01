// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Gilgamesh, Enkidu and the Netherworld is Sumerian narrative verse in several versions: the main one (303 lines),
// three tablets from Ur and the Me-Turan version. Half of it is narrative and speech, the rest a catalogue of
// questions and answers ("את אשר לו בן אחד – ראית?" "ראיתי." "איך נעשה לו?" / the answer). Its rows are laid out
// by rule: the default cost of a break (punctuation); a break inside a sentence dearer (+30); parallel lines -
// found by their letters, as `similar` echoes are - kept on a row; a line ending with a dash kept with the line
// it leads into; a speech ending its row; each question starting a row, with its answer where they fit. What
// none of these shows - a tercet, a few pairs - is named below by the words of the line.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f0e16bbc8a9bf41ec38680f331e27bf7";

/** A row must not end after a line whose words end so (the words as plainWords() gives them). */
const KEEP_WITH_NEXT: readonly string[] = [
    "בימים ההם, בימים הרחוקים ההם,",    // 1-2: the opening tercet - its first two lines on a row, the third on the next
    "מן היד הזקופה של האלמנות,",         // 161-162: the widows' hand / the girls' complaint - a couplet
    "כשמלה נושנה – עש נגע בו;",           // 251-252: like an old garment ... / like a crack ... - the two similes on a row
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בשנים ההן, בשנים הרחוקות ההן,",     // 3: the tercet ends; "בימים רחוקים ..." (4-5) is a couplet of its own
    "כאשר אנקי אל הארץ הפליג –",          // 16 (and 59, 103): the "when" clauses end; the stones (17-20) begin
    "גלגמש לאנקידו דבר השיב:",            // 180: the formula alone; "if you go down ... / advice I give ... / a word I say ..." (181-183) one row
    "אם נינאזו השוכבת –",                 // 199-200: "the sleeping one, Ninazu's mother -" a row; her shoulders / her breast (201-202) the next
    "זקנות כלבה – בוכים.",                // U60.13: the mourning ends; "when he said - / pushed the son of Girsu - / 'drink pure water!'" a row
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "את אשתו אשר הוא אוהב נישק",          // 216, MT.A5: the kiss / the blow two by two, as the order had them (194-197)
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words: no vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
const opensSpeech = (t: string) => /^["“'].*[^"”'\s]/.test(bare(t).replace(/\*/g, ""));
const closesSpeech = (t: string) => /["”]$/.test(bare(t).replace(/\*/g, ""));
/** A line that is all lacuna: "[…] … […]". */
const lacuna = (t: string) => /^[\[\]….\s"']*$/.test(bare(t));
/** A line that opens one of Enkidu's questions: "את אשר ... – ראית?" (its first quotation asks it). */
const opensQuestion = (t: string) => /^"[^"]*ראית/.test(bare(t).replace(/\*/g, ""));

/** How alike two lines are (numbered-lines.ts), footnotes aside - 0 for a line that is not there. */
const alike = (a?: { text: string }, b?: { text: string }) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;
/** An open question at a line's end: its last quotation asks "ראית?" and goes on on the next line. */
const leavesQuestionOpen = (t: string) => /"[^"]*ראית[^"]*$/.test(bare(t).replace(/\*/g, ""));
/** A line that closes a question: "... איך נעשה לו?"" / "איך הוא?"". */
const closesQuestion = (t: string) => /(איך|ראית)[^"]*\?\]?["”]$/.test(bare(t).replace(/\*/g, ""));

/** What ending a row after `line` costs. */
function rowBreak({ line, next, cost, endsUnit, run, position }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“']+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(w))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(w))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(w))) return "always";
    // Each question of the catalogue starts a row, its answer with it where they fit.
    if (opensQuestion(next.text)) return "always";
    // A speech that closes ends its row - unless another speech answers it on the same row (or a lost one, all lacuna).
    if (closesSpeech(line.text) && !opensSpeech(next.text) && !lacuna(next.text)) return "always";
    if (leavesQuestionOpen(line.text)) return "never";
    let c = cost;
    // A question keeps its answer on its row where they fit.
    if (closesQuestion(line.text) && !opensQuestion(next.text)) c += 60;
    // A line that ends with a dash leads into the line it predicates: a prohibition into its consequence
    // ("שמן צלוחית טוב לא תסוך – / לריחו יסובבו אותך!"), a subject into its verb.
    if (/[–—]$/.test(bare(line.text))) c += 100;
    // A quotation is not broken after its first line: a two-line answer is kept whole, a speech starts with two.
    if (opensSpeech(line.text) && !closesSpeech(line.text)) c += 60;
    // Inside a sentence (unit) a break is dearer.
    if (!endsUnit) c += 30;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 120;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
/** A ## that opens a version: "הנוסח הראשי (...) – ...", "נוסח אוּר (UET 6 58)", "סוף השיר – ... (UET 6 60)". */
const opensVersion = (t: string) => /^ה?נוסח/.test(t) || /\)$/.test(t);
/** A heading without its parentheses - the find-spots and the Latin sigla. */
const unbracketed = (t: string) => t.replace(/ \([^)]*\)/g, "").trim();

const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the ##s - the episodes, some twenty, a third of a page to a page each. The footer: the title, the
    // version (named only by the ## that opens it) and the episode - "גלגמש, אנקידו והעולם התחתון / נוסח
    // מה־תורן / אבי הבנים" - with no parentheses (their Latin sigla print in a scrambled order).
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain, file }) => {
            const title = chain.find(h => h.level === 1)?.text ?? "";
            const section = chain.find(h => h.level === 2)?.text;
            if (!section) return title;
            const at = file.headings.findIndex(h => h.level === 2 && h.text.trim() === section.trim());
            const version = file.headings.slice(0, at + 1).filter(h => h.level === 2 && opensVersion(h.text.trim())).pop();
            const versionText = version ? unbracketed(version.text) : "";
            const versionName = versionText.replace(/ –.*$/, "");
            const episode = version && version.text.trim() === section.trim()
                ? versionText.slice(versionName.length).replace(/^ – /, "")
                : unbracketed(section);
            return [title, versionName, episode].filter(Boolean).join(" / ");
        },
    },
});
export default layout;
