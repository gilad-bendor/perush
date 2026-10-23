// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// _RTL-EDITOR/layout-guidelines/claude-layout-guidelines.md. Pure, and imports types only: everything it
// needs comes in its arguments.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";

// The MD5 of translation.rtl.md as these rows were made for it.
const SOURCE_MD5 = "2258cbdc231ad082c51aa1b1f640ead0";
// The row starts of translation.rtl.md - 95, by verse-layout-tool.
const ROW_STARTS: readonly string[] = [
    "1", "3", "6", "8", "11", "13", "16", "18", "20", "21", "22", "24", "26", "28", "30", "33", "35",
    "37", "39", "41", "43", "45", "47", "49", "51", "52", "53", "56", "59", "62", "64", "66", "68", "70",
    "73", "75", "77", "79", "80", "83", "84", "86", "87", "89", "90", "92", "94", "96", "98", "101",
    "103", "106", "108", "109", "111", "114", "116", "117", "119", "121", "123", "125", "126", "129",
    "131", "133", "135", "137", "138", "140", "142", "145", "147", "149", "152", "155", "157", "158",
    "160", "162", "165", "168", "169", "171", "173", "175", "177", "179", "181", "183", "185", "187",
    "189", "191", "194"
];
// Rows a tool made and no session has read yet (propose --fix) - check fails while any is listed.
const REVIEW: readonly string[] = [];

// The return type is spelled out so that tsc catches a misspelled entry, which it would not otherwise.
const layout: LayoutOfFile = (file, above): FileLayout => ({
    sourceMd5: SOURCE_MD5,
    rowStart: ROW_STARTS,
    review: REVIEW,
});
export default layout;
