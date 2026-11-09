// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Lament for Sumer and Ur is Sumerian verse, a line of the tablet to a line of the file, nearly every line a
// sentence of its own and 35-60% of a row - so a row is a couplet, and a line too long for its pair stands alone.
// Its stanzas are irregular (a city, its god leaving, its goddess weeping, the refrain, and lines between), so
// counting couplets from a section's start misfires, as it did here; the rows are laid out by rule on the fill
// instead (§2): the default cost of a break (punctuation), with parallel lines - found by their letters, as in
// Enmerkar - kept on a row; a line ending with a dash leading into the next; a ":" that opens no speech ("אנליל ...
// – את אשר עשה:") kept with what it introduces, and one that opens a speech a good place to end a row; a speech's
// close ending its row. The city's refrain ("הוי העיר ההרוסה, ביתי ההרוס!" – מָרָה היא אומרת.) ends its row - which
// costs a few rows where the gipar's couplet follows it, as that couplet does not fit on one row - and shares it with
// the goddess who weeps before it. The kirugu's rubric ends its row; the antiphon's rubric ("הגישגיגל שלו.") closes
// the antiphon's. What the letters do not show - the infinitive chain of the opening (1-54), a couplet whose lines
// are not alike - is named below by its words. 322 rows against the fewest possible 300.
//
// The PDF's index lists the fourteen sections (##), each about a page: the poem's map. The footer is the title and
// the section, without its line range and its parenthesis (the kirugu).

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost, type NumberedLine } from "../../layout/translation-layout.ts";
import { lineSimilarity } from "../../layout/numbered-lines.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "e42c00591d0aa1313106ee55775c7417";

/** A row must not end after a line whose words end so. */
const KEEP_WITH_NEXT: readonly string[] = [
    "\"ביתי – לא!\" הוא אומר",                 // 97-98: the owner of the house / the owner of property - a couplet
    "לאבד את ה־מה של שומר, לשנות את צורותיה",  // 27-28: the me of Sumer / the me of Ur's kingship
    "לכלות את בעלי־החיים",                     // 47-48: in the steppe / Shakkan's four-legged - a couplet
    "סדקים לעשות, שלא תקבל זרע",              // 49-50: the marsh / the reed thicket (the orchard, 51, alone before Ur)
    "אותו בשורש השמים שכב, עפר ההר חולף",     // 83-84: Utu at the horizon / Nanna at the zenith
    "ביד גורף וגורף",                          // 107-108: the flood / like the great storm - a couplet
    "כדגים שנתפסו ביד – את חייהם מוליכים ומוליכים", // 301-302: its people like fish / small and great spread out
    "על גבי מגדל־השער – מאכל לא היה לו",       // 303-304: the king had no food / the king took a ration
    "שכר אין, לתת אין",                        // 306-307: in his beer-house / in his palace
    "ספינת־מגור אינה עוברת",                   // 327-328: its river empty / on its two banks no foot
    "ברפת הרחבה של ננה – גדרה נבקעה",          // 329-330: the cattle pen / the reed fence of the garden
    "אבי מולידי – את עירי, הבודדה, אל זרועך אסוף", // 352-353: "my city" / "my Ur" - gather!
    "תוספתנו – מה לי",                         // 397-398: "woe! ..." / "how long shall we perish?"
    "יתרחב לך עם",                             // 355-356: seed come forth / the me of Sumer restored - with the rubric
    "הדין הגמור, דבר האספה – אין להשיבו",      // 364-365: the verdict cannot be reversed / the word of An and Enlil
    "בתוכה – בדבר הרעב – נכלה",                // 400-401: inside by famine / outside by Elam's weapons
];
/** A row must end after a line whose words end so. */
const BREAK_AFTER: readonly string[] = [
    "שלא יתרחב צאנה בדירה",                    // run 1, the infinitive chain: oxen / sheep (7-8)
    "בערבה – עשב־האנחה לצמוח",                 //   river / field / steppe (9-11)
    "שלא יאמר האב: \"הוי אשתי!\"",             //   mother / father (12-13)
    "שלא תאמר האומנת \"או־אה\"",               //   wife / child / nurse (14-16)
    "למתוח יד אל בקשת ההכרעה",                 //   the seat of kingship / the decision (17-18)
    "לשום את עינה על כל הארץ",                 //   to drive kingship away / to set her eye (19-20)
    "נשה, בת־החורין – בעיר החיצונה ישבה",      // 167 | 168-170: Ninmarki's three lines
    "בשוק עפר אינו מלקט",                      // 350-351 | 352-354: the dogs / the well-digger, then "gather!" three times
    "מי יצא מפניו",                            // 108 | 109: the kirugu's last lines, "to destroy city, destroy house"
    "שפכת עליה",                               // 452 | 453-455: "father Enlil, ..." - one sentence
    "אנקי ונינמח אל ישנו",                     // 504 | 505-507: "that the orchard ..., that the steppe ..., that in the palace ..."
];
/** A row must start at a line whose words begin so. */
const BREAK_BEFORE: readonly string[] = [
    "את אור – הראם הגדול",                     // 52: Ur, the wild bull - the sentence whose fate the gods decreed
    "אן ואנליל אל ישנו",                       // 496, 503, 510: the prayer's refrain starts its row
];

/** A line's text without footnotes. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").trim();
/** A line's words, as the exceptions name them: no footnotes, vowel points (the maqaf kept), brackets, "*", "?" or "…". */
const plainWords = (t: string) => bare(t).replace(/[֑-ֽֿ-ׇ]/g, "").replace(/[\[\]()*?…⟨⟩]/g, "").replace(/\s+/g, " ").replace(/[\s.,;:!–]+$/, "").trim();

/** The rubrics: "קירוגו N." closes a kirugu; "הגישגיגל שלו." / "הגישגיגל של הקירוגו." closes its antiphon. */
const isKirugu = (t: string) => /^קירוגו/.test(plainWords(t));
const isGishgigal = (t: string) => /^הגישגיגל של/.test(plainWords(t));
/** The city's refrain: "הוי העיר ההרוסה, ביתי ההרוס!" – מרה היא אומרת. (or "עירי, שמחמדתה ...") */
const isRefrain = (t: string) => /– מרה היא אומרת$/.test(plainWords(t));
/** The goddess who weeps for her city - the line before the refrain. */
const isWeeping = (t: string) => /דמעות( מרות)? היא בוכה$/.test(plainWords(t));
const opensQuote = (t: string) => /^["“]/.test(bare(t).replace(/^[\[(]+/, ""));
const closesQuote = (t: string) => /["”]\]?$/.test(bare(t));

const alike = (a?: NumberedLine, b?: NumberedLine) => a && b ? lineSimilarity(bare(a.text), bare(b.text)) : 0;

function rowBreak({ line, next, run, position, cost }: BreakContext): BreakCost {
    const words = plainWords(line.text), after = plainWords(next.text).replace(/^["“]+/, "");
    if (KEEP_WITH_NEXT.some(w => words.endsWith(plainWords(w)))) return "never";
    if (BREAK_AFTER.some(w => words.endsWith(plainWords(w)))) return "always";
    if (BREAK_BEFORE.some(w => after.startsWith(plainWords(w)))) return "always";
    // The city's stanza closes with the goddess's weeping and her refrain: they share a row, and it ends there.
    if (isWeeping(line.text) && isRefrain(next.text)) return "never";
    if (isRefrain(line.text)) return "always";
    // The antiphon's rubric closes it, never alone at a row's head; the kirugu's ends its row.
    if (isGishgigal(next.text)) return "never";
    if (isGishgigal(line.text) || isKirugu(line.text)) return "always";
    // A speech closes its row - unless the kirugu's rubric follows it.
    if (closesQuote(line.text) && !opensQuote(next.text) && !isKirugu(next.text)) return "always";
    let c = cost;
    // A line ending ":" that opens no speech ("אנליל ... – את אשר עשה:") leads into the next.
    if (/:$/.test(bare(line.text)) && !opensQuote(next.text)) c += 100;
    // ... and a speech's introduction ("... – דמעות בוכה:") is a good place for a row to end.
    if (/:$/.test(bare(line.text)) && opensQuote(next.text)) c -= 15;
    // A line ending with a dash leads into the next.
    if (/[–—]$/.test(bare(line.text))) c += 40;
    // Parallel lines - their letters alike, more than either is like its other neighbour - are a couplet.
    const pair = alike(line, next), left = alike(run[position - 1], line), right = alike(next, run[position + 2]);
    if (pair >= 0.6 || (pair >= 0.45 && pair > left && pair > right)) c += 120;
    return c;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => chain.filter(h => h.level <= 2)
            .map(h => h.text.replace(/^[\d–-]+:\s*/, "").replace(/\s*\([^()]*\)$/, "")).join(" / "),
    },
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
});
export default layout;
