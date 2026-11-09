// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// שונות/תרגומי-טקסטים-קדומים/layout/layout-guidelines.md. Pure: it imports only the translations' layout
// logic, and everything else comes in its arguments.
//
// An inscription read line by line: every line of the stone stands in a paragraph of its own, its
// transcription below it - so no two numbered lines share a paragraph, and there are no runs to lay out
// into rows. The rule below (the folder's default) is there should the file one day run its lines on;
// what this layout decides today is the PDF's index and footers.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema.ts";
import { translationLayout } from "../../layout/translation-layout.ts";

// The MD5 of translation.rtl.md as this layout was made for it.
const SOURCE_MD5 = "10965d612de10ab9dc3553b6dbd9d383";

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    ...translationLayout(file, above, { rowBreak: ({ cost }) => cost, repeatedPassages: "alike" }),
    pdf: {
        // The tariff's sections (##: cattle, sheep, birds, the law) and the Carthage tariff (#) - four pages.
        indexDepth: 2,
        // The footer: the inscription's own title (the mirror's own, chain[0]) - each # is a text of its own.
    },
});
export default layout;
