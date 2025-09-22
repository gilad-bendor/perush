#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const perushDir = './פירוש';
const maxSearchResults = 100;

// Parse command line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
    showUsage();
}
let useRegexp = false;
let searchString = '';
if (args.length === 1) {
    searchString = args[0];
} else if (args.length === 2 && args[0] === '--regexp') {
    useRegexp = true;
    searchString = args[1];
} else {
    showUsage();
}
if (!searchString) {
    showUsage();
}

// Perform the search
try {
    const matches = useRegexp
        ? searchCommentaryRegexp(searchString)
        : searchCommentaryText(searchString);
    if (matches.length === 0) {
        console.error('No matches found.');
    } else {
        matches.forEach(match => console.log(match));
        if (matches.length === maxSearchResults) {
            console.error(`\n(Results limited to ${maxSearchResults} matches)`);
        }
    }
} catch (error) {
    console.error(`Search error: ${error.message}`);
    process.exit(1);
}

// ----------------------------------------------------------------------------------------------------

function showUsage() {
    console.error('Usage: search-files.js [ --regexp ] "search string or regexp"');
    console.error('The --regexp flag enables JavaScript-flavor regular expression search.');
    console.error('Here are the normalizations that are applied on both the search string/regexp and the text being searched:');
    console.error('  1. Normalize Sin and Shin from 2 Unicode characters to a single Unicode character');
    console.error('  2. Replace Hebrew makaf (־) with standard hyphen (-)');
    console.error('  3. Remove Hebrew points and accents');
    console.error('  4. Replace final letters with standard letters');
    console.error('Examples:');
    console.error('  ./scripts/search-files.js "מים"');
    console.error('  ./scripts/search-files.js --regexp "מים.*ארץ"');
    console.error('Search for Biblical verse:');
    console.error('  ./scripts/search-files.js --regexp "^> [^:]*: ארץ"');
    process.exit(1);
}

// Make basic normalization of any string that may contain some Hebrew parts.
function normalizeHebrew(str) {
    return str
        // Shin - from Unicode-combination to single Unicode:  שׁ --> שׁ
        .replace(
            /\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c1/g,
            `\ufb2a$1`,
        )
        // Sin - from Unicode-combination to single Unicode:  שׂ --> שׂ
        .replace(
            /\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c2/g,
            `\ufb2b$1`,
        )
        // Hebrew makaf --> standard hyphen
        .replace(/\u05be/g, '-')
        // Remove Points and Accents
        .replace(/[\u05b0-\u05c7\u0591-\u05af\u05ef-\u05f4]/g, '')
        // Finals --> Regulars
        .replace(/ך/g, 'כ')
        .replace(/ם/g, 'מ')
        .replace(/ן/g, 'נ')
        .replace(/ף/g, 'פ')
        .replace(/ץ/g, 'צ');
}

function searchCommentaryText(searchTerm) {
    searchTerm = normalizeHebrew(searchTerm);
    return innerSearchCommentary((line) => line.includes(searchTerm));
}

function searchCommentaryRegexp(searchPattern) {
    const searchRegExp = new RegExp(normalizeHebrew(searchPattern));
    return innerSearchCommentary((line) => searchRegExp.test(line));
}

// Recursively scan the current directory for *.rtl.md files, and search each line with lineMatcher.
// Return up to `maxSearchResults` matching lines with their full paths. Example output line:
//   .../1050-בראשית-ד_יז-ד_כו-שושלת_קין.rtl.md: עִירָד = עיר + רְדִיַיה: אותם מסדרים - שנולדו מתוך יצירתיות וחידוש
function innerSearchCommentary(lineMatcher) {
    const matches = [];

    // Scan all *.rtl.md files under the perushDir directory, and recurse into subdirectories.
    try {
        const entries = fs.readdirSync(perushDir, { encoding: 'utf-8', withFileTypes: true, recursive: true });
        for (const entry of entries) {
            if (entry.isFile() && entry.name.endsWith('.rtl.md')) {
                const filePath = path.join(entry.path, entry.name);
                try {
                    const content = fs.readFileSync(filePath, 'utf-8');
                    const lines = content.split('\n');
                    for (const line of lines) {
                        if (lineMatcher(normalizeHebrew(line))) {
                            matches.push(`${filePath}: ${line}`);
                        }
                    }
                } catch (error) {
                    console.error(`Error reading file ${filePath}: ${error.message}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error scanning directory ${perushDir}: ${error.message}`);
        process.exit(1);
    }

    return matches.slice(0, maxSearchResults);
}
