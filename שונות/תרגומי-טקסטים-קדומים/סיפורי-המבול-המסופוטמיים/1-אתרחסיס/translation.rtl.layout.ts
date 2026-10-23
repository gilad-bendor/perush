// The layout of translation.rtl.md's page and PDF - see _RTL-EDITOR/src/html/layout-schema.ts, and
// _RTL-EDITOR/layout-guidelines/claude-layout-guidelines.md. Pure, and imports types only: everything it
// needs comes in its arguments.

import type { FileLayout, LayoutOfFile } from "../../../../_RTL-EDITOR/src/html/layout-schema";

// The MD5 of translation.rtl.md as these rows were made for it.
const SOURCE_MD5 = "380be9af4d9953ee50ff4c4fb7753b1a";
// The row starts of translation.rtl.md - 449, by verse-layout-tool.
const ROW_STARTS: readonly string[] = [
    "1", "5", "7", "11", "13", "17", "19", "21", "23", "25", "27", "33", "36א", "36ג", "37א", "39",
    "40ב", "43", "45", "47", "49", "54", "57", "59", "61", "63", "68", "70", "72", "74", "77", "80",
    "84", "87", "89", "91", "95", "97", "99", "101", "104", "107", "110א", "110ו", "111", "115", "118",
    "120", "122", "124", "128", "130", "132", "134", "136", "140", "142", "144א", "145א", "149", "151",
    "153", "157", "159–160", "162", "164", "166", "167א", "168", "170", "172", "174", "176", "178",
    "180", "182", "184", "186", "187", "189", "191", "193", "196", "200", "202", "204", "206", "210",
    "212", "214", "217", "221", "223", "225", "227", "229", "231", "232א", "235", "238", "240", "242",
    "245", "247", "249א", "250", "251", "252", "255", "256א", "256ג", "256ה", "262", "264", "266א",
    "266ג", "266ה", "267", "269", "271", "272", "277", "280", "283", "288", "289", "291", "294", "295א",
    "296", "299", "301", "303", "307", "309–327", "334", "337", "340–348", "352", "354", "356א", "358",
    "360", "361", "363א", "363ד", "364#2", "366", "369א", "369ג", "370", "372", "376", "380", "382א",
    "385", "387", "391", "395", "398", "400", "403", "407", "410", "413א", "414", "416א", "416ד", "416ז",
    "A 1", "A 4", "A 6a", "A 7", "A 9", "A 11", "A 16", "A 20", "B 1", "B 3", "B 5", "B 7", "B 9",
    "B 10", "B 11", "B 13", "B 15", "B 17", "C 1", "D 1", "D 6", "D 7", "E 1", "E 5", "E 9", "E 13",
    "E 17", "E 21", "E 25", "E 29", "E 33", "E 37", "E 40", "E 43a", "E 45", "E 49", "E 51", "E 54",
    "E 58", "E 61", "E 63", "E 66", "E 69", "E 71", "E 73", "E 75", "E 77", "E 78a", "E 78d", "E 78f",
    "E 78g", "E 78k", "E 78m", "E 78p", "E 78r", "E 78s", "E 78u", "E 78w", "E 78x", "E 79", "E 82",
    "E 86", "E 90", "E 94", "E 98", "E 103", "E 107", "E 109", "E 112", "E 114", "E 116a", "E 119",
    "E 121", "E 123", "E 126", "E 129", "E 131", "E 132", "E 134", "E 135", "E 136", "E 137", "E 138",
    "E 140", "E 142", "E 144", "E 147", "E 150", "E 152", "E 154", "E 157", "E 158", "E 160a", "E 161a",
    "E 161b", "E 161d", "E 161f", "E 161g", "E 161i", "E 161k", "E 161m", "E 161o", "E 161q", "E 162",
    "E 164", "E 166", "E 169", "E 172", "E 174", "E 175a", "E 175b", "F 1", "F 9", "F 15", "G 1", "G 9",
    "G 14", "G 16", "G 18", "G 20", "G 22", "G 26", "G 28", "G 30", "G 31a", "G 32", "G 34", "G 35a",
    "G 35c", "G 35d", "G 35e", "G 35g", "G 36", "G 38", "G 40", "G 42", "G 43", "G 44", "G 45", "G 46",
    "G 48a", "G 49a", "G 49c", "G 49e", "G 49f", "G 49g", "G 49i", "G 49j", "G 49k", "G 49l", "G 49m",
    "G 49o", "G 49q", "G 49s", "G 49t", "G 50", "G 52", "G 56", "G 59", "G 61", "G 63", "G 65", "G 68",
    "G 74", "G 76", "G 78", "G 80", "G 82", "G 84", "G 86", "G 90", "G 92", "G 94", "H 1", "H 4", "H 7",
    "H 9", "H 13", "H 15", "H 17", "H 22", "H 25", "H 28", "H 32", "I 1", "I 4", "I 6", "C₀ iv 1'",
    "C₀ iv 5'", "i 1", "i 10", "i 13", "i 15", "i 17", "i 20", "i 22", "i 25", "i 29", "i 31", "i 33",
    "i 36", "i 38", "i 42", "i 45", "i 47", "i 49", "ii 9", "ii 13", "ii 28", "ii 32", "ii 34", "ii 36",
    "ii 40", "ii 45", "ii 48", "ii 52", "iii 3", "iii 7", "iii 11", "iii 13", "iii 15", "iii 18",
    "iii 20", "iii 23", "iii 25", "iii 28", "iii 32", "iii 36", "iii 40", "iii 44", "iii 48", "iii 52",
    "iv 3", "iv 5", "iv 8", "iv 10", "iv 12", "iv 15", "iv 16", "iv 21", "iv 24", "iv 26", "v 30",
    "v 34", "v 36", "v 41", "v 44", "v 46", "v 48", "v 52", "vi 1", "vi 5", "vi 7", "vi 11", "vi 13",
    "vi 16", "vi 20", "vi 23", "vi 25", "vi 38", "vi 41", "vi 44", "vi 47", "vi 49", "vii 1", "vii 3",
    "vii 6", "vii 10", "vii 14–27", "viii 3–7", "viii 11", "viii 14", "viii 18", "viii 20", "viii 24",
    "viii 28", "viii 29", "C₀ iv 8", "C₀ iv 13", "C₀ iv 16"
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
