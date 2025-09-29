#!/usr/local/bin/node

const fs = require('fs');
const path = require('path');

// --------------------------------------------------------------------------------------------------------------------

const perushDir = 'פירוש';

const booksToIndex = {
    'בראשית': 0,
    'שמות':   1,
    'ויקרא':  2,
    'במדבר':  3,
    'דברים':  4,
};

const booksToDir = {
    'בראשית': '1-בראשית',
    'שמות':   '2-שמות',
    'ויקרא':  '3-ויקרא',
    'במדבר':  '4-במדבר',
    'דברים':  '5-דברים'
};

// Book --> Chapter --> Last Pasuk in Chapter
const bookChapterToLastPasuk = {
    'בראשית': { 'א': 'לא', 'ב': 'כה', 'ג': 'כד', 'ד': 'כו', 'ה': 'לב', 'ו': 'כב', 'ז': 'כד', 'ח': 'כב', 'ט': 'כט', 'טו': 'כא', 'טז': 'טז', 'י': 'לב', 'יא': 'לב', 'יב': 'כ', 'יג': 'יח', 'יד': 'כד', 'יז': 'כז', 'יח': 'לג', 'יט': 'לח', 'כ': 'יח', 'כא': 'לד', 'כב': 'כד', 'כג': 'כ', 'כד': 'סז', 'כה': 'לד', 'כו': 'לה', 'כז': 'מו', 'כח': 'כב', 'כט': 'לה', 'ל': 'מג', 'לא': 'נד', 'לב': 'לג', 'לג': 'כ', 'לד': 'לא', 'לה': 'כט', 'לו': 'מג', 'לז': 'לו', 'לח': 'ל', 'לט': 'כג', 'מ': 'כג', 'מא': 'נז', 'מב': 'לח', 'מג': 'לד', 'מד': 'לד', 'מה': 'כח', 'מו': 'לד', 'מז': 'לא', 'מח': 'כב', 'מט': 'לג', 'נ': 'כו' },
    'שמות':   { 'א': 'כב', 'ב': 'כה', 'ג': 'כב', 'ד': 'לא', 'ה': 'כג', 'ו': 'ל', 'ז': 'כט', 'ח': 'כח', 'ט': 'לה', 'טו': 'כז', 'טז': 'לו', 'י': 'כט', 'יא': 'י', 'יב': 'נא', 'יג': 'כב', 'יד': 'לא', 'יז': 'טז', 'יח': 'כז', 'יט': 'כה', 'כ': 'כב', 'כא': 'לז', 'כב': 'ל', 'כג': 'לג', 'כד': 'יח', 'כה': 'מ', 'כו': 'לז', 'כז': 'כא', 'כח': 'מג', 'כט': 'מו', 'ל': 'לח', 'לא': 'יח', 'לב': 'לה', 'לג': 'כג', 'לד': 'לה', 'לה': 'לה', 'לו': 'לח', 'לז': 'כט', 'לח': 'לא', 'לט': 'מג', 'מ': 'לח' },
    'ויקרא':  { 'א': 'יז', 'ב': 'טז', 'ג': 'יז', 'ד': 'לה', 'ה': 'כו', 'ו': 'כג', 'ז': 'לח', 'ח': 'לו', 'ט': 'כד', 'טו': 'לג', 'טז': 'לד', 'י': 'כ', 'יא': 'מז', 'יב': 'ח', 'יג': 'נט', 'יד': 'נז', 'יז': 'טז', 'יח': 'ל', 'יט': 'לז', 'כ': 'כז', 'כא': 'כד', 'כב': 'לג', 'כג': 'מד', 'כד': 'כג', 'כה': 'נה', 'כו': 'מו', 'כז': 'לד' },
    'במדבר':  { 'א': 'נד', 'ב': 'לד', 'ג': 'נא', 'ד': 'מט', 'ה': 'לא', 'ו': 'כז', 'ז': 'פט', 'ח': 'כו', 'ט': 'כג', 'טו': 'מא', 'טז': 'לה', 'י': 'לו', 'יא': 'לה', 'יב': 'טז', 'יג': 'לג', 'יד': 'מה', 'יז': 'כח', 'יח': 'לב', 'יט': 'כב', 'כ': 'כט', 'כא': 'לה', 'כב': 'מא', 'כג': 'ל', 'כד': 'כה', 'כה': 'יח', 'כו': 'סה', 'כז': 'כג', 'כח': 'לא', 'כט': 'לט', 'ל': 'יז', 'לא': 'נד', 'לב': 'מב', 'לג': 'נו', 'לד': 'כט', 'לה': 'לד', 'לו': 'יג' },
    'דברים':  { 'א': 'מו', 'ב': 'לז', 'ג': 'כט', 'ד': 'מט', 'ה': 'כט', 'ו': 'כה', 'ז': 'כו', 'ח': 'כ', 'ט': 'כט', 'טו': 'כג', 'טז': 'כב', 'י': 'כב', 'יא': 'לב', 'יב': 'לא', 'יג': 'יט', 'יד': 'כט', 'יז': 'כ', 'יח': 'כב', 'יט': 'כא', 'כ': 'כ', 'כא': 'כג', 'כב': 'כט', 'כג': 'כו', 'כד': 'כב', 'כה': 'יט', 'כו': 'יט', 'כז': 'כו', 'כח': 'סט', 'כט': 'כח', 'ל': 'כ', 'לא': 'ל', 'לב': 'נב', 'לג': 'כט', 'לד': 'יב' },
};

const hebrewNumerals = {
    'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
    'י': 10, 'יא': 11, 'יב': 12, 'יג': 13, 'יד': 14, 'טו': 15, 'טז': 16, 'יז': 17, 'יח': 18, 'יט': 19,
    'כ': 20, 'כא': 21, 'כב': 22, 'כג': 23, 'כד': 24, 'כה': 25, 'כו': 26, 'כז': 27, 'כח': 28, 'כט': 29,
    'ל': 30, 'לא': 31, 'לב': 32, 'לג': 33, 'לד': 34, 'לה': 35, 'לו': 36, 'לז': 37, 'לח': 38, 'לט': 39,
    'מ': 40, 'מא': 41, 'מב': 42, 'מג': 43, 'מד': 44, 'מה': 45, 'מו': 46, 'מז': 47, 'מח': 48, 'מט': 49,
    'נ': 50, 'נא': 51, 'נב': 52, 'נג': 53, 'נד': 54, 'נה': 55, 'נו': 56, 'נז': 57, 'נח': 58, 'נט': 59,
    'ס': 60, 'סא': 61, 'סב': 62, 'סג': 63, 'סד': 64, 'סה': 65, 'סו': 66, 'סז': 67, 'סח': 68, 'סט': 69,
    'ע': 70, 'עא': 71, 'עב': 72, 'עג': 73, 'עד': 74, 'עה': 75, 'עו': 76, 'עז': 77, 'עח': 78, 'עט': 79,
    'פ': 80, 'פא': 81, 'פב': 82, 'פג': 83, 'פד': 84, 'פה': 85, 'פו': 86, 'פז': 87, 'פח': 88, 'פט': 89,
    'צ': 90, 'צא': 91, 'צב': 92, 'צג': 93, 'צד': 94, 'צה': 95, 'צו': 96, 'צז': 97, 'צח': 98, 'צט': 99,
};

// --------------------------------------------------------------------------------------------------------------------

// Check if this script is being run directly or imported as a module
if (require.main === module) {
    // CLI mode
    try {
        // Parse command line arguments
        const locations = process.argv.slice(2);
        if (locations.length === 0 || locations.length > 2) {
            console.log('Usage: list-files-range.js book_perek_pasuk [book_perek_pasuk]');
            console.log('Examples:');
            console.log('  ./scripts/list-files-range.js בראשית_יא_*');
            console.log('  ./scripts/list-files-range.js שמות_מב_ז שמות_מג_ד');
            console.log('  ./scripts/list-files-range.js במדבר_*_*');
            console.log('  ./scripts/list-files-range.js *_*_*');
            process.exit(1);
        }
        if (locations.length === 1) {
            locations.push(locations[0]);
        }

        // Parse locations.
        const parsedLocations = locations.map((location, locationIndex) => parseLocation(location, locationIndex === 0 ? 'from' : 'to'));

        const filesList = listFilesInRange(parsedLocations[0], parsedLocations[1]);
        console.log(filesList.join('\n'));

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// --------------------------------------------------------------------------------------------------------------------

/**
 * Similar to buildLocation() - but the location is given as a string in the format book_perek_pasuk.
 * @param {string} locationString
 * @param {'from'|'to'|'point'} mode
 * @returns {{ book: string, perek: number, pasuk: number }}
 * @throws {Error} - If wildcards are used inappropriately, or if values are invalid.
 */
function parseLocation(locationString, mode) {
    const match = locationString.match(/^(בראשית|שמות|ויקרא|במדבר|דברים|\*)_([א-ת]{1,2}|\*)_([א-ת]{1,2}|\*)$/);
    if (!match) {
        throw new Error(`Invalid location argument ${JSON.stringify(locationString)}`);
    }
    const [_whole, book, perek, pasuk] = match;
    return buildLocation(book, perek, pasuk, mode);
}

/**
 * Helper function to build a location object { book, perek, pasuk }, replacing wildcards with actual values.
 * If mode is 'from', wildcards are replaced with the first valid value.
 * If mode is 'to', wildcards are replaced with the last valid value.
 * Else - wildcards are not allowed.
 * @param {string} book
 * @param {string} perek
 * @param {string} pasuk
 * @param {'from'|'to'|'point'} mode
 * @returns {{ book: string, perek: number, pasuk: number }}
 * @throws {Error} - If wildcards are used inappropriately, or if values are invalid.
 */
function buildLocation(book, perek, pasuk, mode) {
    if (book === '*') {
        switch (mode) {
            case 'from': book = 'בראשית'; break;
            case 'to':   book = 'דברים';  break;
            default: throw new Error(`buildLocation() only accepts book='*' on modes 'from' or 'to'`);
        }
    }
    if (!bookChapterToLastPasuk[book]) {
        throw new Error(`Unknown book name ${JSON.stringify(book)}`);
    }
    if (perek === '*') {
        switch (mode) {
            case 'from': perek = 'א'; break;
            case 'to':   perek = Object.entries(bookChapterToLastPasuk[book]).at(-1)[1]; break; // last chapter
            default: throw new Error(`buildLocation() only accepts perek='*' on modes 'from' or 'to'`);
        }
    }
    if (pasuk === '*') {
        switch (mode) {
            case 'from': pasuk = 'א'; break;
            case 'to':   pasuk = bookChapterToLastPasuk[book][perek]; break; // last pasuk in chapter
            default: throw new Error(`buildLocation() only accepts pasuk='*' on modes 'from' or 'to'`);
        }
    }

    return { book, perek: hebrewToNumber(perek), pasuk: hebrewToNumber(pasuk) };
}

/**
 * Helper function to compare two location objects { book, perek, pasuk }.
 * Returns negative if loc1 < loc2, positive if loc1 > loc2, zero if equal.
 * @param {{ book: string, perek: number, pasuk: number }} loc1
 * @param {{ book: string, perek: number, pasuk: number }} loc2
 * @returns {number}
 */
function compareLocations(loc1, loc2) {
    if (loc1.book !== loc2.book) {
        return booksToIndex[loc1.book] - booksToIndex[loc2.book];
    }
    if (loc1.perek !== loc2.perek) {
        return loc1.perek - loc2.perek;
    }
    return loc1.pasuk - loc2.pasuk;
}

/**
 * Helper function to convert Hebrew numerals to numbers.
 * @param {string} hebrew - The Hebrew numeral string (e.g., 'א', 'יב', '*').
 * @returns {number|'*'} - The corresponding number or "*" for wildcard.
 * @throws {Error} - If the input is not a valid Hebrew numeral or '*'.
 */
function hebrewToNumber(hebrew) {
    if (hebrew === '*') {
        return '*';
    }
    const result = hebrewNumerals[hebrew];
    if (result === undefined) {
        throw new Error(`Invalid Hebrew numeral ${JSON.stringify(hebrew)}`);
    }
    return result;
}

/**
 * Parse file name to extract range information.
 * @param {string} dir - The directory of the file.
 * @param {string} fileName - The file name to parse.
 * @returns {{ from: { book: string, perek: number, pasuk: number }, to: { book: string, perek: number, pasuk: number } }}
 */
function parseFileName(dir, fileName) {
    // Format: NNNN-book-from-to-title.rtl.md
    const fileNameMatch = fileName.match(/^(\d{4})-(בראשית|שמות|ויקרא|במדבר|דברים)-([א-ת]{1,2})_([א-ת]{1,2})-([א-ת]{1,2})_([א-ת]{1,2})-(.+)\.rtl\.md$/);
    if (!fileNameMatch) {
        throw new Error(`Invalid file name format ${JSON.stringify(path.join(dir, fileName))}`);
    }
    const [_whole, _sequence, book, fromPerek, fromPasuk, toPerek, toPasuk, _freeText] = fileNameMatch;
    return {
        book,
        from: buildLocation(book, fromPerek, fromPasuk, 'point'),
        to:   buildLocation(book, toPerek,   toPasuk,   'point'),
    };
}

/**
 * List all the files in the specified range.
 * @param {{ book: string, perek: number, pasuk: number }} from
 * @param {{ book: string, perek: number, pasuk: number }} to
 * @returns {string[]} - List of file paths in the specified range.
 */
function listFilesInRange(from, to) {
    // Scan the dirs of every book.
    const filesList = [];
    for (const bookDir of Object.values(booksToDir)) {
        const dirPath = path.join(perushDir, bookDir);

        // Scan the files of the book.
        const fileNames = fs.readdirSync(dirPath).filter(fileName => fileName.endsWith('.rtl.md'));
        for (const fileName of fileNames) {
            const parsedFileName = parseFileName(dirPath, fileName);
            if (compareLocations(parsedFileName.to, from) >= 0 && compareLocations(parsedFileName.from, to) <= 0) {
                filesList.push(path.join(dirPath, fileName));
            }
        }
    }
    return filesList;
}


// Export functions for module usage
module.exports = {
    parseLocation,
    listFilesInRange,
};
