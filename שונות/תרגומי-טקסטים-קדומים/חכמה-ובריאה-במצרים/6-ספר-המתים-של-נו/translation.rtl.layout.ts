// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// The Book of the Dead of Nu (BM EA 10477) is numbered by the lines of the TLA's edition, "chapter.line", each
// papyrus line a line of the translation, broken mid-sentence where the papyrus breaks it. Most lines fill a row
// or more (549 are wider than a row and wrap inside themselves), so only a few short ones - a title, a rubric's
// last words - share a row, and the rows are the fewest possible (1802) whatever a rule says. The rule is
// Merikare's: the default cost of a break (punctuation), and a line that ends with no pause at all dearer (+30) -
// it ends inside a phrase. It is kept so that an edit is laid out the same way.
//
// What matters here is the PDF (below).

import type { FileLayout, LayoutOfFile, RunningHeading, LayoutFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout, type BreakContext, type BreakCost } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "a9197235d967462f5c7200a73311dd93";

/** A line's text without footnotes and "(?)" marks. */
const bare = (t: string) => t.replace(/\[\^[^\]]*\]/g, "").replace(/\(\?\)/g, "").trim();

/** What ending a row after `line` costs. */
function rowBreak({ line, cost }: BreakContext): BreakCost {
    // A papyrus line that ends with no pause breaks inside a phrase: a row would rather not end there.
    if (!/[.,;:!?…–—]["”'’)\]]*$/u.test(bare(line.text))) return cost + 30;
    return cost;
}

/** A heading as plain words, to compare a running heading (plain text) with the file's (Markdown). */
const plain = (t: string) => t.replace(/[*`_]/g, "").replace(/\s+/g, " ").trim();
/** A heading that names a chapter, or a group of them: "פרק 17: ...", "פרקים 1–42: ...". */
const chapterOf = (t: string) => /^(פרק|פרקים) [^:]+/.exec(plain(t))?.[0];

/**
 * The chapter a sheet is in, by the heading in force at its top: that heading's own "פרק N", or else - a part of a
 * chapter ("אָתוּם לבדו בנוּן (17.4–17.9)", the hills of 149, the parts of 125) - the nearest heading above it that
 * names one, within its ##. A ## of chapters with no ### in force yet gives its range, "פרקים 1–42".
 */
function chapter(chain: readonly RunningHeading[], file: LayoutFile): string | undefined {
    const last = chain[chain.length - 1];
    if (!last || last.level < 2) return undefined;
    const own = chapterOf(last.text);
    if (own) return own;
    const at = file.headings.findLastIndex(h => h.level === last.level && plain(h.text) === plain(last.text));
    for (let i = at - 1; i >= 0 && file.headings[i].level >= 2; i--) {
        const found = chapterOf(file.headings[i].text);
        if (found) return found;
        if (file.headings[i].level === 2) break;
    }
    return undefined;
}

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak, repeatedPassages: "alike" }),
    // The index: the eleven groups of chapters (##) only - the 186 chapters (###) took six pages of it. The footer
    // names the chapter, which is how the Book of the Dead is read and cited ("פרק 125").
    // The footer: the title and the chapter the sheet is in - "ספר המתים של נוּ / פרק 125" - without the chapter's
    // title, which runs to a line of its own.
    pdf: {
        indexDepth: 2,
        footerTitle: ({ chain }) => {
            const title = chain[0]?.text ?? file.headings[0]?.text ?? "";
            const where = chapter(chain, file);
            return where ? `${title} / ${where}` : title;
        },
    },
});
export default layout;
