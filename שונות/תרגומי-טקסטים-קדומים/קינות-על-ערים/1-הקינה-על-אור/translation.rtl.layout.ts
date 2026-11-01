// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Lament for Ur is Sumerian verse, a line of the tablet to a line of the file, and nearly every line a
// sentence of its own; the lines are long (30-60% of a row), so a row is a couplet, and often a single line.
// The rows are laid out by rule (§2): the run is parsed into units - sentences, from a line ending ".", "!",
// ":" or "?" (here they are real questions) to the next, and two one-line sentences in a row taken as one
// couplet, whether or not the two fit on one row (when they do not, the next couplet still starts after them).
// A break inside a unit is dear, dearer in the middle of a couplet than between two. The kirugu's rubric
// ("קירוגו N.") ends the kirugu's last row where it fits, or heads its antiphon's row; the antiphon keeps its
// rubric ("הגישגיגל שלו.") and a row ends after it. Where the parallelism is not where the count says - a
// litany that runs an odd number of lines, a line too long for its pair - the couplet's first line is named
// below by its words.
//
// The PDF's index lists the eleven songs (##): they are the poem's map, and the introduction walks through
// them. The footer is the title and the song, without the song's line range and its parenthesis.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout.ts";
import { endsSentence } from "../../layout/rows.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "f7e0ad38a31092c908b4e227df36253c";

/** A couplet starts at a line whose words begin so (the line before it ends a unit). */
const PAIR_START: readonly string[] = [
    "לפני אן – את מי עיניי",             // 144, 154: before An / to Enlil - the second time too, after the prostration (153) has a row of its own
    "את סערת השפע",                      // 173-174: the storm of abundance / the good storm he drove away - after Enlil's opening line (172)
    "עם החרסים הבוערים",                 // 192-193, 194-195: after the three long lines of day and night (189-191)
    "הסערה הקוטפת ביד",                  // 197-198: it sweeps the land / it destroys the city
    "הסערה המעלימה כל דבר",              // 200-201: it came for evil / it set its hand on the people
    "את הבית הנאמן במעדרים הופכים",      // 244-245: the house broken with hoes / the city made into tells
    "אוי לי – במקום עירי בית נכרי",      // 295-296: in my city's place a foreign house / in my house's place a foreign city
    "אוי לי – בניינך שקר",               // 321-322, after the ox that will not rise (319-320)
    "דמעותייך – לדמעות נכריות",          // 342-343: your land does not weep / it has no lament
    "את עירך לתלים שם",                  // 345-349: the refrain's couplets, "how do you grow?" / "how is your heart?"
    "עד מתי – כאויב",                    // 374-375: like an enemy, outside your city / like an enemy, against your city
    "שאת ידה על הפולחן",                 // 395-396: which laid its hand on the rites / which sent an unclean hand
    "האב ננה – הסערה ההיא",              // 409-410: the prayer to Nanna after the litany (408 ends it)
    "בעירך, שלתלים שומה",                // 424-425: your city made tells / your city restored
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "בכספי – אנשים",                     // 280: the silver / the stones, after the refrain "רכושי!" (275-279) ends
    "אנחתך מרה היא – גבירך",             // 62, 70: the lady / Nanna refrain starts its row - each line of it a row, as they do not fit together
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "בגלל הסערה – אני זועפת, זועפת,",    // 87-90: the refrain "its wail hangs on me" opens and closes - two rows, not three
];

/** A line's words, as the exceptions name them: no footnotes, vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…]/g, "").replace(/\s+/g, " ").trim();
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
const startsWith = (names: readonly string[], line: NumberedLine) => names.some(words => plainWords(line.text).startsWith(words));

/** The rubrics: "קירוגו N." closes a kirugu; "הגישגיגל שלו." closes its antiphon. */
const isKirugu = (t: string) => /^קירוגו/.test(plainWords(t));
const isGishgigal = (t: string) => /^הגישגיגל שלו\.?$/.test(plainWords(t));
const isRubric = (t: string) => isKirugu(t) || isGishgigal(t);

/** A sentence ends with a line: a full stop, "!", ":", or a "?" at its end (here they are real questions). */
const endsSentenceHere = (t: string) => endsSentence(t) || /\?$/.test(bare(t)) || isRubric(t);

const parsed = new WeakMap<readonly NumberedLine[], boolean[]>();
function unitEnds(run: readonly NumberedLine[]): boolean[] {
    let ends = parsed.get(run);
    if (ends) return ends;
    const sentences: [number, number][] = [];
    let first = 0;
    run.forEach((line, i) => {
        const next = run[i + 1];
        const cut = i === run.length - 1 || endsSentenceHere(line.text) || isRubric(next.text)
            || startsWith(PAIR_START, next) || startsWith(BREAK_BEFORE, next);
        if (cut) { sentences.push([first, i]); first = i + 1; }
    });
    const single = (s: [number, number] | undefined) => s !== undefined && s[0] === s[1];
    const free = (s: [number, number]) => !isRubric(run[s[0]].text);
    // Two one-line sentences in a row make a couplet - whether or not they fit on one row - unless the first opens a speech (":").
    const pairs = (a: number, b: number) => !/:$/.test(bare(run[a].text)) && !startsWith(PAIR_START, run[b]) && !startsWith(BREAK_BEFORE, run[b]);
    const units: [number, number][] = [];
    for (let s = 0; s < sentences.length; s++) {
        const [a, b] = sentences[s], n = sentences[s + 1];
        if (single(sentences[s]) && single(n) && free(sentences[s]) && free(n) && pairs(a, n[0])) {
            units.push([a, n[1]]); s++; continue;
        }
        units.push([a, b]);
    }
    ends = run.map(() => false);
    for (const [, last] of units) ends[last] = true;
    parsed.set(run, ends);
    return ends;
}
const unitEnd = ({ run, position }: UnitContext): boolean => unitEnds(run)[position];

function rowBreak({ line, next, position, unit, endsUnit, cost }: BreakContext): BreakCost {
    if (BREAK_AFTER.some(words => plainWords(line.text).endsWith(words))) return "always";
    if (startsWith(BREAK_BEFORE, next)) return "always";
    // The antiphon's rubric closes it: never alone at a row's head, and the row ends after it.
    if (isGishgigal(next.text)) return "never";
    if (isGishgigal(line.text)) return "always";
    // The kirugu's rubric would rather end the kirugu's last row; the antiphon starts a row after it.
    if (isKirugu(line.text)) return cost + 10;
    if (isKirugu(next.text)) return cost + 40;
    // A line that opens with a dash goes on from the line before it.
    if (/^–/.test(bare(next.text))) return cost + 150;
    if (endsUnit) return cost;
    return cost + ((position - unit.first + 1) % 2 === 0 ? 60 : 150);
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.text.replace(/^[\d–-]+:\s*/, "").replace(/\s*\([^()]*\)$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
