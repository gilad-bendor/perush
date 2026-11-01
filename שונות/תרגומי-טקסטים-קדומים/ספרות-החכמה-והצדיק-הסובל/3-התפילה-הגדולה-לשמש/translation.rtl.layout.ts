// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Great Hymn to Shamash is verse in couplets, almost without exception: every section opens with a
// couplet, and its lines pair off two by two to its end. So a row is a couplet - a unit is two lines, counted
// from the run's first - and a break inside one is dear. Where the hymn has a tercet, or a line standing on its
// own, the count would slip by one for the rest of the section; those few lines are named below by their words,
// and the count goes on from after them. A tercet too wide for one row is split where its punctuation is
// weakest, and the rows after it are couplets again.
//
// The PDF's index goes down to the hymn's fifteen sections (###): they are its map - the introduction walks
// through them by their line numbers - and the whole index takes a third of the first page. The footer is the
// title: the hymn is one subject, and its sections, a few rows each, change many times on a sheet.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "86d3bf071e7b7af1259f8699550c138a";

/** A unit of three lines starts at a line whose words begin so. */
const TERCET: readonly string[] = [
    "אשר את שבועתך לא יירא",          // 85-87: who does not fear your oath, / who is not afraid, / - your net is spread!
    "האוחז במאזניים – עושה העקשות",   // 107-109: who holds the scales crookedly, / who changes the stone, / - loses the profit
    "תיישר את הוראותיהן – בזבחים",    // 151-153: you direct their omens, / to the four winds, / of all the settlements
    "אשר צועדים את הארץ",             // 169-171: who walk the earth, / who tread the mountains, / the lahmu of the sea
    "בלת־אילי",                        // 192-194: Belet-ili's wish, / in bright Ebabbar, / ... of the edges
];
/** A line that is a unit of its own. */
const SINGLE: readonly string[] = [
    "של הנקי הנאמן",                   // 58: the section's head - "of the innocent and the adversary you reveal the verdict"
    "במצודה של נחושת",                 // 94: the copper snare, after the father / the brothers couplet (92-93)
    "בעשרים",                          // 156: the feast of the twentieth; 157-158 (the beer) and 159-160 (the rescued's libations) pair off after it
];
/** A row must not end after a line whose words end so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "האוחז במאזניים – עושה העקשות,",  // 107-108: the two faces of the crooked weigher share a row; his fate (109) has its own
];

/** A line's words, as the exceptions name them: no footnotes, vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…]/g, "").replace(/\s+/g, " ").trim();
const startsWith = (names: readonly string[], line: NumberedLine) => names.some(words => plainWords(line.text).startsWith(words));

/** The run's units: couplets counted from its first line, but for the named tercets and single lines. */
const parsed = new WeakMap<readonly NumberedLine[], boolean[]>();
function unitEnds(run: readonly NumberedLine[]): boolean[] {
    let ends = parsed.get(run);
    if (ends) return ends;
    ends = run.map(() => false);
    let i = 0;
    while (i < run.length) {
        let size = startsWith(SINGLE, run[i]) ? 1 : startsWith(TERCET, run[i]) ? 3 : 2;
        // A couplet does not reach into a tercet or a single line that starts after its first line.
        if (size === 2 && i + 1 < run.length && (startsWith(SINGLE, run[i + 1]) || startsWith(TERCET, run[i + 1]))) size = 1;
        const last = Math.min(i + size, run.length) - 1;
        ends[last] = true;
        i = last + 1;
    }
    parsed.set(run, ends);
    return ends;
}
const unitEnd = ({ run, position }: UnitContext): boolean => unitEnds(run)[position];

/** What ending a row after `line` costs: cheap between units, dear inside one. */
function rowBreak({ line, endsUnit, cost }: BreakContext): BreakCost {
    if (KEEP_WITH_NEXT.some(words => plainWords(line.text).endsWith(words))) return "never";
    return endsUnit ? cost : cost + 150;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 3,
        footerTitle: ({ chain }) => chain[0]?.text ?? "",
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
