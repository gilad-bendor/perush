#!/usr/bin/env node
'use strict';

const usage = `
bible_get_structure - Get structural information about Biblical books and chapters

INTENT/GOAL:
    Provide orientation within the Biblical text. Know how many chapters
    are in a book, how many verses in a chapter, and understand the
    overall structure. Essential for planning systematic searches and
    understanding the scope of analysis.

SYNTAX:
    node bible_get_structure.js [book] [chapter] [options]

ARGUMENTS:
    (none)          List all books with chapter counts, organized by section
    book            List all chapters in the book with verse counts
    book chapter    Get verse count for specific chapter

SECTIONS:
    The Bible is organized into three main sections:
    - תורה (Torah): בראשית, שמות, ויקרא, במדבר, דברים
    - נביאים (Prophets): יהושע through מלאכי
    - כתובים (Writings): דברי-הימים-א through נחמיה

OPTIONS:
    --format=FORMAT     Output format: "text" (default), "json"
    --include-aramaic   Include info about Aramaic sections

EXAMPLES:
    # List all books with chapter counts
    node bible_get_structure.js

    Output:
        תורה:
          בראשית    50 פרקים
          שמות      40 פרקים
          ויקרא     27 פרקים
          במדבר     36 פרקים
          דברים     34 פרקים
        נביאים ראשונים:
          יהושע     24 פרקים
          ...

    # Get chapters in Genesis
    node bible_get_structure.js בראשית

    Output:
        בראשית - 50 פרקים:
          פרק א   - 31 פסוקים
          פרק ב   - 25 פסוקים
          פרק ג   - 24 פסוקים
          ...

    # Get verse count for specific chapter
    node bible_get_structure.js בראשית 1

    Output:
        בראשית פרק א: 31 פסוקים

    # JSON output for programmatic use
    node bible_get_structure.js בראשית --format=json

ARAMAIC SECTIONS:
    Certain portions of the Bible are in Aramaic rather than Hebrew:
    - דניאל 2:4-7:28
    - עזרא 4:8-6:18, 7:12-26
    - ירמיהו 10:11 (single verse)
    - בראשית 31:47 (two words)

    These sections require different linguistic analysis. The --include-aramaic
    flag will mark these sections in the output.

NOTES:
    - Chapter and verse numbers in output use Hebrew numerals for consistency
    - Internal processing uses 0-indexed numbers
    - This tool is read-only and fast (uses cached structure data)
`;

import * as bible from './bible-utils.js';
import {
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    KETUVIM,
    SECTIONS,
    hebrewToNumber,
} from './bible-utils.js';

// ============================================================================
// Aramaic Sections (with human-readable format for this tool)
// ============================================================================

// Aramaic sections with human-readable format for display
const ARAMAIC_SECTIONS_DISPLAY = {
    'דניאל': [
        { start: '2:4', end: '7:28', description: 'עיקר ספר דניאל' }
    ],
    'עזרא': [
        { start: '4:8', end: '6:18', description: 'מכתבים ותעודות' },
        { start: '7:12', end: '7:26', description: 'מכתב ארתחשסתא' }
    ],
    'ירמיהו': [
        { start: '10:11', end: '10:11', description: 'פסוק בודד' }
    ],
    'בראשית': [
        { start: '31:47', end: '31:47', description: 'שתי מילים: יגר שהדותא' }
    ],
};

// ============================================================================
// Structure Building
// ============================================================================

/**
 * @typedef {Object} BookStructure
 * @property {string} name - Hebrew book name
 * @property {string} section - Section name (תורה, נביאים, כתובים)
 * @property {number} chapterCount - Number of chapters
 * @property {number[]} versesPerChapter - Array of verse counts per chapter
 * @property {number} totalVerses - Total verses in the book
 * @property {Object[]} [aramaicSections] - Aramaic sections if present
 */

/**
 * Build the structure data from verses
 * @returns {Map<string, BookStructure>}
 */
function buildStructure() {
    const allVerses = bible.getAllVerses();
    const bookNames = bible.getBookNames();

    /** @type {Map<string, BookStructure>} */
    const structure = new Map();

    // Initialize structure for each book
    for (const bookName of bookNames) {
        // Find which section this book belongs to
        let sectionName = '';
        for (const section of SECTIONS) {
            if (section.books.includes(bookName)) {
                sectionName = section.name;
                break;
            }
        }

        structure.set(bookName, {
            name: bookName,
            section: sectionName,
            chapterCount: 0,
            versesPerChapter: [],
            totalVerses: 0,
            aramaicSections: ARAMAIC_SECTIONS_DISPLAY[bookName] || null,
        });
    }

    // Count verses per chapter
    for (const verse of allVerses) {
        const book = structure.get(verse.book);
        if (book) {
            // Expand versesPerChapter array if needed
            while (book.versesPerChapter.length <= verse.chapterIndex) {
                book.versesPerChapter.push(0);
            }
            book.versesPerChapter[verse.chapterIndex]++;
            book.totalVerses++;
        }
    }

    // Set chapter counts
    for (const book of structure.values()) {
        book.chapterCount = book.versesPerChapter.length;
    }

    return structure;
}

// Cached structure
let _structure = null;

/**
 * Get the structure (cached)
 * @returns {Map<string, BookStructure>}
 */
function getStructure() {
    if (!_structure) {
        _structure = buildStructure();
    }
    return _structure;
}

// ============================================================================
// Argument Parsing
// ============================================================================

/**
 * Parse command line arguments
 * @param {string[]} args
 * @returns {Object}
 */
function parseArgs(args) {
    const options = {
        book: null,
        chapter: null,
        format: 'text',
        includeAramaic: false,
        help: false,
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
        } else if (!arg.startsWith('-')) {
            // Positional argument
            if (options.book === null) {
                options.book = arg;
            } else if (options.chapter === null) {
                // Parse as number (Arabic or Hebrew)
                if (/^\d+$/.test(arg)) {
                    options.chapter = parseInt(arg, 10);
                } else {
                    // Try Hebrew number
                    options.chapter = parseHebrewNumber(arg);
                }
            }
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text or json.`);
    }

    return options;
}

// parseHebrewNumber - use hebrewToNumber from bible-utils.js
const parseHebrewNumber = hebrewToNumber;

// ============================================================================
// Output Formatting
// ============================================================================

/**
 * Format all books overview (text)
 * @param {Object} options
 */
function formatAllBooksText(options) {
    const structure = getStructure();
    const lines = [];

    let totalBooks = 0;
    let totalChapters = 0;
    let totalVerses = 0;

    for (const section of SECTIONS) {
        lines.push(`${section.name}:`);

        for (const bookName of section.books) {
            const book = structure.get(bookName);
            if (book) {
                const paddedName = bookName.padStart(15);
                lines.push(`  ${paddedName}    ${book.chapterCount} פרקים`);

                if (options.includeAramaic && book.aramaicSections) {
                    for (const aram of book.aramaicSections) {
                        lines.push(`    [ארמית: ${aram.start}-${aram.end}]`);
                    }
                }

                totalBooks++;
                totalChapters += book.chapterCount;
                totalVerses += book.totalVerses;
            }
        }
        lines.push('');
    }

    lines.push(`סה"כ: ${totalBooks} ספרים, ${totalChapters} פרקים, ${totalVerses} פסוקים`);

    console.log(lines.join('\n'));
}

/**
 * Format single book details (text)
 * @param {string} bookName
 * @param {Object} options
 */
function formatBookText(bookName, options) {
    const structure = getStructure();
    const book = structure.get(bookName);

    if (!book) {
        throw new Error(`Unknown book: ${bookName}`);
    }

    const lines = [];
    lines.push(`${book.name} - ${book.chapterCount} פרקים:`);

    for (let i = 0; i < book.versesPerChapter.length; i++) {
        const chapterHebrew = bible.numberToHebrew(i);
        const verseCount = book.versesPerChapter[i];
        lines.push(`  פרק ${chapterHebrew.padStart(3)} - ${verseCount} פסוקים`);
    }

    if (options.includeAramaic && book.aramaicSections) {
        lines.push('');
        lines.push('מקטעים ארמיים:');
        for (const aram of book.aramaicSections) {
            lines.push(`  ${aram.start}-${aram.end}: ${aram.description}`);
        }
    }

    lines.push('');
    lines.push(`סה"כ: ${book.totalVerses} פסוקים`);

    console.log(lines.join('\n'));
}

/**
 * Format single chapter info (text)
 * @param {string} bookName
 * @param {number} chapter - 1-indexed chapter number
 * @param {Object} options
 */
function formatChapterText(bookName, chapter, options) {
    const structure = getStructure();
    const book = structure.get(bookName);

    if (!book) {
        throw new Error(`Unknown book: ${bookName}`);
    }

    const chapterIndex = chapter - 1;
    if (chapterIndex < 0 || chapterIndex >= book.versesPerChapter.length) {
        throw new Error(`Invalid chapter ${chapter} for ${bookName}. Valid range: 1-${book.chapterCount}`);
    }

    const chapterHebrew = bible.numberToHebrew(chapterIndex);
    const verseCount = book.versesPerChapter[chapterIndex];

    console.log(`${book.name} פרק ${chapterHebrew}: ${verseCount} פסוקים`);
}

/**
 * Format all books overview (JSON)
 * @param {Object} options
 */
function formatAllBooksJson(options) {
    const structure = getStructure();

    const output = {
        sections: SECTIONS.map(section => ({
            name: section.name,
            books: section.books.map(bookName => {
                const book = structure.get(bookName);
                return {
                    name: book.name,
                    chapters: book.chapterCount,
                    totalVerses: book.totalVerses,
                    ...(options.includeAramaic && book.aramaicSections
                        ? { aramaicSections: book.aramaicSections }
                        : {}),
                };
            }),
        })),
        totals: {
            books: [...structure.values()].length,
            chapters: [...structure.values()].reduce((sum, b) => sum + b.chapterCount, 0),
            verses: [...structure.values()].reduce((sum, b) => sum + b.totalVerses, 0),
        },
    };

    console.log(JSON.stringify(output, null, 2));
}

/**
 * Format single book details (JSON)
 * @param {string} bookName
 * @param {Object} options
 */
function formatBookJson(bookName, options) {
    const structure = getStructure();
    const book = structure.get(bookName);

    if (!book) {
        throw new Error(`Unknown book: ${bookName}`);
    }

    const output = {
        name: book.name,
        section: book.section,
        chapters: book.chapterCount,
        totalVerses: book.totalVerses,
        chapterDetails: book.versesPerChapter.map((verses, i) => ({
            chapter: i + 1,
            chapterHebrew: bible.numberToHebrew(i),
            verses,
        })),
        ...(options.includeAramaic && book.aramaicSections
            ? { aramaicSections: book.aramaicSections }
            : {}),
    };

    console.log(JSON.stringify(output, null, 2));
}

/**
 * Format single chapter info (JSON)
 * @param {string} bookName
 * @param {number} chapter - 1-indexed chapter number
 * @param {Object} options
 */
function formatChapterJson(bookName, chapter, options) {
    const structure = getStructure();
    const book = structure.get(bookName);

    if (!book) {
        throw new Error(`Unknown book: ${bookName}`);
    }

    const chapterIndex = chapter - 1;
    if (chapterIndex < 0 || chapterIndex >= book.versesPerChapter.length) {
        throw new Error(`Invalid chapter ${chapter} for ${bookName}. Valid range: 1-${book.chapterCount}`);
    }

    const output = {
        book: book.name,
        chapter,
        chapterHebrew: bible.numberToHebrew(chapterIndex),
        verses: book.versesPerChapter[chapterIndex],
    };

    console.log(JSON.stringify(output, null, 2));
}

// ============================================================================
// Main
// ============================================================================

async function main() {
    const args = process.argv.slice(2);

    let options;
    try {
        options = parseArgs(args);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.error('Use --help for usage information.');
        process.exit(1);
    }

    if (options.help) {
        console.log(usage);
        process.exit(0);
    }

    try {
        if (options.format === 'json') {
            if (options.chapter !== null) {
                formatChapterJson(options.book, options.chapter, options);
            } else if (options.book !== null) {
                formatBookJson(options.book, options);
            } else {
                formatAllBooksJson(options);
            }
        } else {
            if (options.chapter !== null) {
                formatChapterText(options.book, options.chapter, options);
            } else if (options.book !== null) {
                formatBookText(options.book, options);
            } else {
                formatAllBooksText(options);
            }
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Export for testing
export {
    getStructure,
    buildStructure,
    parseArgs,
    parseHebrewNumber,
    SECTIONS,
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    KETUVIM,
    ARAMAIC_SECTIONS_DISPLAY,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
