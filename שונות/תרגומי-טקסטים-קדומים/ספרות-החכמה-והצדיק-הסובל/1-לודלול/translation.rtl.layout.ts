// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// Ludlul bel nemeqi is Babylonian verse in couplets: each line a whole verse in two halves ("A – B"), a third of a
// row or more, so a row is a couplet - two short couplets share one now and then. A unit is two lines, counted
// from each run's first (every section, ###, starts on a couplet), and a break inside one is dear. Where the poem
// has a tercet - a list of three (the body parts of II 59-70, the demons of II 51-53 / III 69-71), a couplet and
// the line that sums it up - or a line standing alone, the count would slip by one for the rest of the section;
// those lines are named below by their words, and the count goes on after them. A line that is all lacuna pairs
// with nothing, so a break beside one is free (tablets III-V are broken in many places).
//
// The PDF's index goes down to the five tablets (##): the sections (###) are some sixty, two to five rows each,
// and each tablet's introduction already walks through them by their line numbers. The footer is the poem and the
// tablet at the top of the sheet ("לודלול בל נמקי / לוח II"), without their quoted incipits.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine, type UnitContext } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "e91273b4bf2c5365c43c15ee150663dd";

/** A unit of three lines starts at a line whose words begin so. */
const TERCET: readonly string[] = [
    // Tablet I
    "חברי הזועף",               // 86-88: the companion, the comrade, the good colleague - the friends end with "."
    "המספר עליי נבלות",         // 95-97: the liar helped by a god, the defender dead, the one who did not help alive
    // Tablet II
    "לו ידעתי",                 // 33-35: "if only I knew ..." and the two sayings it is about
    "באחיזת אף",                // 41-43: singing / wailing, and "like opening and closing" that sums them up
    "רוח־רעה מיסוד השמים",      // 51-53: the demons rise - from heaven, from earth, from the apsu (as III 69-71)
    "הקיפו",                    // 59-61: the head, the forehead and eyes, the neck
    "את החזה מחצו",             // 62-64: the chest, the back, the heart
    "את קרבי דלחו",             // 65-67: the innards, the lungs, the limbs
    "את גופי התמיר",            // 68-70: the body felled like a wall, like a reed, like a fig
    "קשיון אחז",                // 77-79: the arms, the knees, the feet
    "דגן – אם",                 // 88-90: grain, beer - "and still the illness lasted!"
    "מלקותיי",                  // 99-101: the lashes, the whip, the goad
    "פתוח גדישי",               // 114-116: the grave open, the lament done, "how wrecked he is!"
    // Tablet III
    "עלמה אחת",                 // 31-33: the young woman - her beauty, her distance, "queen of the people"
    "באה – וישבה",              // 34-36: she came and sat; "enough!"; "do not fear!"
    "הדף רוח־רעה",              // 69-71: the demons sent back - to heaven, to earth, to the apsu (as II 51-53)
    "המעי הגס",                 // 104-106: the colon, its swelling, food and drink
    // Tablet IV
    "אל צרפניתו",               // d+1-d+3: to Zarpanitu, to my god, to my goddess
    // Tablet V
    "במצוקה",                   // 9-11: he took my hand, the right, the left
    "מרדוך – של מניסי",         // 16-18: the pursuer's sling, the gravedigger's hoe
    "רחוב",                     // 25-27: the street, the square, the gate
];
/** A line that is a unit of its own. */
const SINGLE: readonly string[] = [
    "אשר יראה וזהירות",         // II 18: the impious one who did not teach his people - his god / his goddess (19-20) pair after it
    "לא קניתי הולך לצדי",       // I 98: "I found none at my side" - the betrayal's last word, before the property (99-104)
    'אמרו: "רב! מאוד מיוגע הוא',  // III 55: the refrain "enough! he is very weary" between two couplets
    "כלא – מוצא",               // IV a+15: what is left of the lines before the light (a+16-a+17)
    "אני, אשר מן הקבר שבתי",    // V 41: the entry, before the twelve gates (42-53) pair off
];
/** A row must not end after a line whose words begin so. */
const KEEP_WITH_NEXT: readonly string[] = [];
/** A row must end after a line whose words begin so. */
const BREAK_AFTER: readonly string[] = [];

/** A line's words, as the exceptions name them: no footnotes, markup, vowel points (the maqaf kept), brackets, "?" or "…". */
const plainWords = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").trim();
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

/** A line with no words left - all lacuna ("[…] … […]"). */
const isLacuna = (line: NumberedLine) => /^[\s.,;:–-]*$/.test(plainWords(line.text));

/** What ending a row after `line` costs: cheap between units, dear inside one - but beside a lacuna, which pairs with nothing. */
function rowBreak({ line, next, endsUnit, cost }: BreakContext): BreakCost {
    if (startsWith(KEEP_WITH_NEXT, line)) return "never";
    if (startsWith(BREAK_AFTER, line)) return "always";
    if (endsUnit || isLacuna(line) || isLacuna(next)) return cost;
    return cost + 150;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2).map(h => h.text.replace(/ – ".*"$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, unitEnd, repeatedPassages: "alike" }),
});
export default layout;
