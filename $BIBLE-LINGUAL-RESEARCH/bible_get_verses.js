#!/usr/bin/env node
'use strict';

const usage = `
bible_get_verses - Retrieve Biblical verses with optional context

INTENT/GOAL:
    Navigate the Biblical text and retrieve verses for analysis.
    This is the primary tool for reading and examining specific passages.
    Designed for linguistic research where context is often crucial
    for understanding word usage.

SYNTAX:
    node bible_get_verses.js <reference> [options]

REFERENCE FORMATS (flexible parsing):
    Single verse:
        "בראשית 1:1"              Hebrew book name + Arabic numbers
        "בראשית א:א"              Hebrew book name + Hebrew numbers

    Verse range (same chapter):
        "בראשית 1:1-5"            Verses 1 through 5
        "בראשית א:א-ה"            Same, Hebrew numbers

    Verse range (cross-chapter):
        "בראשית 2:10-3:5"         From 2:10 to 3:5
        "בראשית 2:10-בראשית 3:5"  Explicit book in both (allows cross-book)

    Whole chapter:
        "בראשית 1"                All verses in chapter 1
        "בראשית א"                Same, Hebrew number

OPTIONS:
    --context=N, -c N       Include N verses before and after (default: 0)
    --no-points             Remove nikud (vowel points) from output
    --include-strongs       Show Strong's numbers inline: word<H123>
    --format=FORMAT         Output format: "text" (default), "json", "markdown"

EXAMPLES:
    # Get Genesis 1:1
    node bible_get_verses.js "בראשית 1:1"

    # Get Genesis 1:1 with 2 verses of context before/after
    node bible_get_verses.js "בראשית 1:1" --context=2

    # Get entire first chapter of Genesis
    node bible_get_verses.js "בראשית 1"

    # Cross-chapter range with Strong's numbers
    node bible_get_verses.js "בראשית 1:26-2:3" --include-strongs

    # Get Exodus verses without vowel points
    node bible_get_verses.js "שמות 3:14" --no-points

OUTPUT:
    Default format shows:
    - Location prefix in parentheses
    - Verse text (nikud ON, accents ALWAYS removed)

    Example:
        (בראשית א:א) בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ
        (בראשית א:ב) וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ...

NOTES:
    - Accents (teamim/cantillation) are ALWAYS removed - they add noise without
      linguistic value for this type of analysis
    - Nikud is ON by default because it aids readability and distinguishes
      word forms (e.g., קָטַל vs קֹטֵל)
    - Book names accept both Hebrew (בראשית) and could support English (Genesis)
      in future versions
`;

import * as bible from './bible-utils.js';
import {
    hebrewToNumber,
    parseHebrewOrArabicNumber,
} from './bible-utils.js';

// Alias for backward compatibility
const parseNumber = parseHebrewOrArabicNumber;

// ============================================================================
// Reference Parsing
// ============================================================================

/**
 * @typedef {Object} VerseReference
 * @property {string} book - Hebrew book name
 * @property {number} chapter - 0-indexed chapter
 * @property {number} verse - 0-indexed verse (-1 for whole chapter)
 */

/**
 * @typedef {Object} ReferenceRange
 * @property {VerseReference} start
 * @property {VerseReference} end
 * @property {boolean} isWholeChapter - True if reference is for whole chapter(s)
 */

/**
 * Parse a book name and validate it exists
 * @param {string} bookName - Book name to parse
 * @returns {string} - Validated Hebrew book name
 */
function parseBookName(bookName) {
    const trimmed = bookName.trim();
    const bookNames = bible.getBookNames();

    if (bookNames.includes(trimmed)) {
        return trimmed;
    }

    // Try to find a close match
    for (const name of bookNames) {
        if (name.startsWith(trimmed) || trimmed.startsWith(name)) {
            return name;
        }
    }

    throw new Error(`Unknown book name: "${trimmed}". Valid books: ${bookNames.slice(0, 5).join(', ')}...`);
}

/**
 * Parse a single verse location (book chapter:verse or book chapter)
 * @param {string} locationStr - Location string like "בראשית 1:1" or "בראשית 1"
 * @returns {VerseReference}
 */
function parseLocation(locationStr) {
    const trimmed = locationStr.trim();

    // Pattern: book chapter:verse or book chapter
    // Hebrew book names can contain hyphens (שמואל-א)
    const match = trimmed.match(/^([א-ת][א-ת\-]*)\s+([א-ת\d]+)(?::([א-ת\d]+))?$/);

    if (!match) {
        throw new Error(`Invalid reference format: "${trimmed}". Expected format: "בראשית 1:1" or "בראשית 1"`);
    }

    const [, bookPart, chapterPart, versePart] = match;

    const book = parseBookName(bookPart);
    const chapter = parseNumber(chapterPart) - 1; // Convert to 0-indexed

    if (versePart === undefined) {
        // Whole chapter
        return { book, chapter, verse: -1 };
    }

    const verse = parseNumber(versePart) - 1; // Convert to 0-indexed
    return { book, chapter, verse };
}

/**
 * Parse a reference string into a range
 * Handles: "בראשית 1:1", "בראשית 1:1-5", "בראשית 1:26-2:3", "בראשית 1"
 * @param {string} refStr - Reference string
 * @returns {ReferenceRange}
 */
function parseReference(refStr) {
    const trimmed = refStr.trim();

    // Check for range with hyphen
    // Need to be careful: hyphen can be in book name (שמואל-א) or as range separator
    // Strategy: try more specific patterns first

    // Try same-book range with different chapters: "בראשית 1:26-2:3" or "בראשית א:כו-ב:ג"
    // Must try this BEFORE cross-book to avoid mismatching Hebrew chapter numbers as book names
    const crossChapterMatch = trimmed.match(/^([א-ת][א-ת\-]*)\s+([א-ת\d]+):([א-ת\d]+)\s*-\s*([א-ת\d]+):([א-ת\d]+)$/);
    if (crossChapterMatch) {
        const [, book, startChapter, startVerse, endChapter, endVerse] = crossChapterMatch;
        const bookName = parseBookName(book);

        return {
            start: {
                book: bookName,
                chapter: parseNumber(startChapter) - 1,
                verse: parseNumber(startVerse) - 1,
            },
            end: {
                book: bookName,
                chapter: parseNumber(endChapter) - 1,
                verse: parseNumber(endVerse) - 1,
            },
            isWholeChapter: false,
        };
    }

    // Try cross-book range: "בראשית 1:1-שמות 2:3"
    // The second part must have a space (book name + chapter:verse)
    const crossBookMatch = trimmed.match(/^(.+?\s+[א-ת\d]+:[א-ת\d]+)\s*-\s*([א-ת][א-ת\-]*\s+[א-ת\d]+:[א-ת\d]+)$/);
    if (crossBookMatch) {
        const start = parseLocation(crossBookMatch[1]);
        const end = parseLocation(crossBookMatch[2]);

        if (start.verse === -1 || end.verse === -1) {
            throw new Error('Cross-book references must specify verses');
        }

        return { start, end, isWholeChapter: false };
    }

    // Try same-chapter range: "בראשית 1:1-5"
    const sameChapterMatch = trimmed.match(/^([א-ת][א-ת\-]*)\s+([א-ת\d]+):([א-ת\d]+)\s*-\s*([א-ת\d]+)$/);
    if (sameChapterMatch) {
        const [, book, chapter, startVerse, endVerse] = sameChapterMatch;
        const bookName = parseBookName(book);
        const chapterNum = parseNumber(chapter) - 1;

        return {
            start: {
                book: bookName,
                chapter: chapterNum,
                verse: parseNumber(startVerse) - 1,
            },
            end: {
                book: bookName,
                chapter: chapterNum,
                verse: parseNumber(endVerse) - 1,
            },
            isWholeChapter: false,
        };
    }

    // Single location (verse or whole chapter)
    const location = parseLocation(trimmed);

    if (location.verse === -1) {
        // Whole chapter
        return {
            start: { book: location.book, chapter: location.chapter, verse: 0 },
            end: { book: location.book, chapter: location.chapter, verse: -1 }, // -1 means end of chapter
            isWholeChapter: true,
        };
    }

    // Single verse
    return {
        start: location,
        end: location,
        isWholeChapter: false,
    };
}

// ============================================================================
// Verse Retrieval
// ============================================================================

/**
 * Get the index of a verse in the allVerses array
 * @param {Object[]} allVerses - Array of all verses
 * @param {string} book - Book name
 * @param {number} chapter - 0-indexed chapter
 * @param {number} verse - 0-indexed verse
 * @returns {number} - Index in allVerses, or -1 if not found
 */
function findVerseIndex(allVerses, book, chapter, verse) {
    for (let i = 0; i < allVerses.length; i++) {
        const v = allVerses[i];
        if (v.book === book && v.chapterIndex === chapter && v.verseIndex === verse) {
            return i;
        }
    }
    return -1;
}

/**
 * Get the last verse index of a chapter
 * @param {Object[]} allVerses - Array of all verses
 * @param {string} book - Book name
 * @param {number} chapter - 0-indexed chapter
 * @returns {number} - Last verse index (0-indexed), or -1 if chapter not found
 */
function getLastVerseOfChapter(allVerses, book, chapter) {
    let lastVerse = -1;
    for (const v of allVerses) {
        if (v.book === book && v.chapterIndex === chapter) {
            lastVerse = Math.max(lastVerse, v.verseIndex);
        }
    }
    return lastVerse;
}

/**
 * Retrieve verses for a reference range
 * @param {ReferenceRange} range - The reference range
 * @param {number} context - Number of context verses before/after
 * @returns {{verses: Object[], contextBefore: number, contextAfter: number}}
 */
function getVerses(range, context = 0) {
    const allVerses = bible.getAllVerses();

    // Resolve end verse if it's -1 (whole chapter)
    let endVerse = range.end.verse;
    if (endVerse === -1) {
        endVerse = getLastVerseOfChapter(allVerses, range.end.book, range.end.chapter);
        if (endVerse === -1) {
            throw new Error(`Chapter ${range.end.chapter + 1} not found in ${range.end.book}`);
        }
    }

    // Find start and end indices
    const startIdx = findVerseIndex(allVerses, range.start.book, range.start.chapter, range.start.verse);
    const endIdx = findVerseIndex(allVerses, range.end.book, range.end.chapter, endVerse);

    if (startIdx === -1) {
        throw new Error(`Verse not found: ${range.start.book} ${range.start.chapter + 1}:${range.start.verse + 1}`);
    }
    if (endIdx === -1) {
        throw new Error(`Verse not found: ${range.end.book} ${range.end.chapter + 1}:${endVerse + 1}`);
    }
    if (startIdx > endIdx) {
        throw new Error('Start reference must come before end reference');
    }

    // Apply context
    const contextStartIdx = Math.max(0, startIdx - context);
    const contextEndIdx = Math.min(allVerses.length - 1, endIdx + context);

    const verses = allVerses.slice(contextStartIdx, contextEndIdx + 1);

    return {
        verses,
        contextBefore: startIdx - contextStartIdx,
        contextAfter: contextEndIdx - endIdx,
        mainStartIdx: startIdx - contextStartIdx,
        mainEndIdx: endIdx - contextStartIdx,
    };
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
        reference: null,
        context: 0,
        noPoints: false,
        includeStrongs: false,
        format: 'text',
        help: false,
    };

    let i = 0;
    while (i < args.length) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
            i++;
        } else if (arg.startsWith('--context=')) {
            options.context = parseInt(arg.substring(10));
            i++;
        } else if (arg === '-c') {
            options.context = parseInt(args[++i]);
            i++;
        } else if (arg === '--no-points') {
            options.noPoints = true;
            i++;
        } else if (arg === '--include-strongs') {
            options.includeStrongs = true;
            i++;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
            i++;
        } else if (!arg.startsWith('-')) {
            options.reference = arg;
            i++;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    // Validate
    if (!['text', 'json', 'markdown'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text, json, or markdown.`);
    }
    if (options.context < 0 || options.context > 50) {
        throw new Error(`Invalid context value: ${options.context}. Must be between 0 and 50.`);
    }

    return options;
}

// ============================================================================
// Output Formatting
// ============================================================================

/**
 * Format a verse for text output
 * @param {Object} verse - Verse object
 * @param {Object} options - Formatting options
 * @param {boolean} isContext - Whether this is a context verse
 * @returns {string}
 */
function formatVerseText(verse, options, isContext = false) {
    let text = verse.text;

    // Always remove teamim (accents)
    text = bible.removeTeamim(text);

    // Conditionally remove nikud
    if (options.noPoints) {
        text = bible.removeNikud(text);
    }

    // Add Strong's numbers if requested
    if (options.includeStrongs) {
        const words = options.noPoints
            ? verse.words.map(w => bible.removeNikud(bible.removeTeamim(w)))
            : verse.words.map(w => bible.removeTeamim(w));

        text = words.map((word, i) => {
            const strong = verse.strongs[i];
            return strong > 0 ? `${word}<H${strong}>` : word;
        }).join(' ');
    }

    const prefix = isContext ? '  ' : '';
    return `${prefix}(${verse.location}) ${text}`;
}

/**
 * Format verses as text
 * @param {Object} result - Result from getVerses
 * @param {Object} options - Formatting options
 */
function formatText(result, options) {
    const lines = [];

    for (let i = 0; i < result.verses.length; i++) {
        const verse = result.verses[i];
        const isContext = i < result.mainStartIdx || i > result.mainEndIdx;
        lines.push(formatVerseText(verse, options, isContext));
    }

    console.log(lines.join('\n'));
}

/**
 * Format verses as markdown
 * @param {Object} result - Result from getVerses
 * @param {Object} options - Formatting options
 */
function formatMarkdown(result, options) {
    const lines = [];

    for (let i = 0; i < result.verses.length; i++) {
        const verse = result.verses[i];
        const isContext = i < result.mainStartIdx || i > result.mainEndIdx;

        let text = verse.text;
        text = bible.removeTeamim(text);
        if (options.noPoints) {
            text = bible.removeNikud(text);
        }

        if (options.includeStrongs) {
            const words = options.noPoints
                ? verse.words.map(w => bible.removeNikud(bible.removeTeamim(w)))
                : verse.words.map(w => bible.removeTeamim(w));

            text = words.map((word, i) => {
                const strong = verse.strongs[i];
                return strong > 0 ? `${word}<H${strong}>` : word;
            }).join(' ');
        }

        if (isContext) {
            lines.push(`> *${verse.location}:* ${text}`);
        } else {
            lines.push(`> **${verse.location}:** ${text}`);
        }
    }

    console.log(lines.join('\n>\n'));
}

/**
 * Format verses as JSON
 * @param {Object} result - Result from getVerses
 * @param {Object} options - Formatting options
 */
function formatJson(result, options) {
    const output = {
        contextBefore: result.contextBefore,
        contextAfter: result.contextAfter,
        verses: result.verses.map((verse, i) => {
            let text = verse.text;
            text = bible.removeTeamim(text);
            if (options.noPoints) {
                text = bible.removeNikud(text);
            }

            const words = options.noPoints
                ? verse.words.map(w => bible.removeNikud(bible.removeTeamim(w)))
                : verse.words.map(w => bible.removeTeamim(w));

            return {
                location: verse.location,
                book: verse.book,
                chapter: verse.chapterIndex + 1,
                verse: verse.verseIndex + 1,
                text,
                isContext: i < result.mainStartIdx || i > result.mainEndIdx,
                words: options.includeStrongs
                    ? words.map((word, j) => ({
                        word,
                        strong: verse.strongs[j] > 0 ? verse.strongs[j] : null,
                    }))
                    : words,
            };
        }),
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

    if (options.help || !options.reference) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    let range;
    try {
        range = parseReference(options.reference);
    } catch (error) {
        console.error(`Reference error: ${error.message}`);
        process.exit(1);
    }

    let result;
    try {
        result = getVerses(range, options.context);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    switch (options.format) {
        case 'json':
            formatJson(result, options);
            break;
        case 'markdown':
            formatMarkdown(result, options);
            break;
        case 'text':
        default:
            formatText(result, options);
            break;
    }
}

// Export for testing
export {
    hebrewToNumber,
    parseNumber,
    parseBookName,
    parseLocation,
    parseReference,
    parseArgs,
    getVerses,
    findVerseIndex,
    getLastVerseOfChapter,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
