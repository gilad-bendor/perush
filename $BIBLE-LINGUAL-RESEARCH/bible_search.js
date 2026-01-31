#!/usr/bin/env node
'use strict';

const usage = `
bible_search - Search the Hebrew Bible with powerful pattern matching

INTENT/GOAL:
    The primary discovery tool for linguistic research. Find all occurrences
    of words, roots, patterns, and Strong's numbers across the entire Bible.
    Supports the same extended regex syntax as the web-based Bible Viewer,
    optimized for uncovering linguistic patterns and word relationships.

SYNTAX:
    ./bible_search.js <query> [options]

QUERY PATTERNS:

    Simple text:
        "אור"                   Find all words containing אור
        " אור "                 Find exact word אור (spaces = word boundaries)
        " אור"                  Words starting with אור
        "אור "                  Words ending with אור

    Strong's numbers:
        "<216>"                 All occurrences of Strong's H216 (noun: light)
        "<215|216|217>"         Multiple Strong's numbers
        "<אור>"                 All Strong's numbers whose root matches אור
                                (finds H215, H216, H217, H218)

    Special patterns:
        "@"                     Zero or more matres lectionis (א,ה,ו,י)
                                Example: "ה@ל@ך" matches הלך, הולך, הליך, etc.

        "#"                     Any single Hebrew letter
                                Example: "ה#לך" matches הולך, המלך, הפלך, etc.

        "2שב2"                  Proto-Semitic 2-letter root expansion
                                Expands to: שב|נשב|ישב|שוב|שיב|שבה|שבב|שבשב
                                (Only matches VERBS)

    Standard regex:
        "."                     Any character (including space - spans words)
        "[אבג]"                 Character class
        "(מים|ארץ)"             Alternation
        "*", "+", "?", "{n,m}"  Quantifiers

    Multi-word patterns:
        " מים .* ארץ "          "מים" and "ארץ" in same verse, any distance
        "<מים> #* <ארץ>"        Same concepts by Strong's, adjacent words only

OPTIONS:
    --max=N, -n N           Maximum results (default: 100, max: 10000)
    --group-by=MODE         Group results: "none" (default), "book", "strong"
    --range=RANGE           Limit to range: "בראשית", "בראשית 1-10", "תורה"
    --no-points             Remove nikud from output
    --include-aramaic       Include Aramaic sections (excluded by default)
    --format=FORMAT         Output format: "text" (default), "json", "summary"
    --count-only            Only show count, not verses

SPECIAL RANGES:
    --range="תורה"          Torah only (Genesis-Deuteronomy)
    --range="נביאים"        Prophets only
    --range="כתובים"        Writings only
    --range="בראשית"        Single book
    --range="בראשית 1-11"   Chapters 1-11 of Genesis

EXAMPLES:
    # Find all forms of "light"
    ./bible_search.js "<אור>"

    # Find verb "to walk" with all conjugations
    ./bible_search.js "<הלך>" --group-by=book

    # Pattern: any form of קדש root
    ./bible_search.js "ק@ד@ש"

    # Co-occurrence: water and earth in same verse
    ./bible_search.js " מים .* ארץ "

    # Proto-Semitic root analysis
    ./bible_search.js "2שב2"

    # Search only in Torah, show summary
    ./bible_search.js "<ברא>" --range="תורה" --format=summary

    # Quick count
    ./bible_search.js "אלהים" --count-only

OUTPUT FORMATS:

    text (default):
        Found 127 matches for "<אור>":
        Strong's matched: H215 (אוֹר, פֹּעַל), H216 (אוֹר, שֵׁם עֶצֶם), ...

        (בראשית א:ג) וַיֹּאמֶר אֱלֹהִים יְהִי **אוֹר** וַיְהִי **אוֹר**
        (בראשית א:ד) וַיַּרְא אֱלֹהִים אֶת **הָאוֹר** כִּי טוֹב...

    summary:
        Found 127 matches for "<אור>":
        Strong's matched:
          H215 (אוֹר, verb) - 43 occurrences
          H216 (אוֹר, noun) - 78 occurrences
          H217 (אוּר, noun) - 4 occurrences
          H218 (אוּר, name) - 2 occurrences

        Distribution by book:
          בראשית: 12
          שמות: 8
          ישעיהו: 23
          ...

    json:
        {
          "query": "<אור>",
          "totalMatches": 127,
          "strongMatches": [...],
          "matches": [...]
        }

NOTES:
    - Aramaic sections are EXCLUDED by default (use --include-aramaic to include)
    - Accents are ALWAYS stripped (no linguistic value for this analysis)
    - Nikud is ON by default (aids readability)
    - Results are ordered by biblical order (Genesis to Chronicles)
    - Matched words are highlighted with ** markers in text output
`;

import * as bible from './bible-utils.js';
import {
    TORAH,
    NEVIIM,
    KETUVIM,
    ARAMAIC_SECTIONS,
    isAramaicVerse,
    parseRange,
} from './bible-utils.js';

/**
 * Parse command line arguments
 * @param {string[]} args
 * @returns {Object}
 */
function parseArgs(args) {
    const options = {
        query: null,
        maxResults: 100,
        groupBy: 'none',
        range: null,
        noPoints: false,
        includeAramaic: false,
        format: 'text',
        countOnly: false,
        help: false,
    };

    let i = 0;
    while (i < args.length) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
            i++;
        } else if (arg.startsWith('--max=')) {
            options.maxResults = parseInt(arg.substring(6));
            i++;
        } else if (arg === '-n') {
            options.maxResults = parseInt(args[++i]);
            i++;
        } else if (arg.startsWith('--group-by=')) {
            options.groupBy = arg.substring(11);
            i++;
        } else if (arg.startsWith('--range=')) {
            options.range = arg.substring(8);
            i++;
        } else if (arg === '--no-points') {
            options.noPoints = true;
            i++;
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
            i++;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
            i++;
        } else if (arg === '--count-only') {
            options.countOnly = true;
            i++;
        } else if (!arg.startsWith('-')) {
            options.query = arg;
            i++;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    // Validate options
    if (!['none', 'book', 'strong'].includes(options.groupBy)) {
        throw new Error(`Invalid group-by value: ${options.groupBy}. Must be none, book, or strong.`);
    }
    if (!['text', 'json', 'summary'].includes(options.format)) {
        throw new Error(`Invalid format value: ${options.format}. Must be text, json, or summary.`);
    }
    if (options.maxResults < 1 || options.maxResults > 10000) {
        throw new Error(`Invalid max value: ${options.maxResults}. Must be between 1 and 10000.`);
    }

    return options;
}

/**
 * Highlight matched words in a verse
 * @param {string[]} words - Array of words in the verse
 * @param {number[]} matchedIndexes - Indexes of matched words
 * @param {boolean} noPoints - Whether to remove nikud
 * @returns {string}
 */
function highlightVerse(words, matchedIndexes, noPoints) {
    const matchedSet = new Set(matchedIndexes);
    return words.map((word, i) => {
        const displayWord = noPoints ? bible.removeNikud(word) : word;
        return matchedSet.has(i) ? `**${displayWord}**` : displayWord;
    }).join(' ');
}

/**
 * Group matches by book
 * @param {Object[]} matches
 * @returns {Map<string, Object[]>}
 */
function groupByBook(matches) {
    const groups = new Map();
    for (const match of matches) {
        const book = match.verse.book;
        if (!groups.has(book)) {
            groups.set(book, []);
        }
        groups.get(book).push(match);
    }
    return groups;
}

/**
 * Group matches by Strong's number
 * @param {Object[]} matches
 * @returns {Map<number, Object[]>}
 */
function groupByStrong(matches) {
    const groups = new Map();
    for (const match of matches) {
        // Find Strong's numbers in matched words
        const matchedStrongs = new Set();
        for (const wordIndex of match.matchedWordIndexes) {
            const strongNum = match.verse.strongs[wordIndex];
            if (strongNum > 0) {
                matchedStrongs.add(strongNum);
            }
        }

        for (const strongNum of matchedStrongs) {
            if (!groups.has(strongNum)) {
                groups.set(strongNum, []);
            }
            groups.get(strongNum).push(match);
        }
    }
    return groups;
}

/**
 * Count matches by Strong's number
 * @param {Object[]} matches
 * @returns {Map<number, number>}
 */
function countByStrong(matches) {
    const counts = new Map();
    for (const match of matches) {
        for (const wordIndex of match.matchedWordIndexes) {
            const strongNum = match.verse.strongs[wordIndex];
            if (strongNum > 0) {
                counts.set(strongNum, (counts.get(strongNum) || 0) + 1);
            }
        }
    }
    return counts;
}

/**
 * Count matches by book
 * @param {Object[]} matches
 * @returns {Map<string, number>}
 */
function countByBook(matches) {
    const counts = new Map();
    for (const match of matches) {
        const book = match.verse.book;
        counts.set(book, (counts.get(book) || 0) + 1);
    }
    return counts;
}

// ============================================================================
// Main Search Function
// ============================================================================

/**
 * Perform the search with all options
 * @param {string} query
 * @param {Object} options
 * @returns {Object}
 */
function performSearch(query, options) {
    // Parse range if specified
    const rangeFilter = parseRange(options.range);

    // Perform the core search with higher limit to account for filtering
    const searchLimit = options.countOnly ? 10000 : Math.min(options.maxResults * 10, 10000);
    const rawResult = bible.search(query, { maxResults: searchLimit });

    // Filter results
    let filteredMatches = rawResult.matches;

    // Apply range filter
    if (rangeFilter) {
        filteredMatches = filteredMatches.filter(match => {
            const verse = match.verse;
            if (!rangeFilter.books.has(verse.book)) return false;
            return rangeFilter.chapterFilter(verse.book, verse.chapterIndex);
        });
    }

    // Apply Aramaic filter (exclude by default)
    if (!options.includeAramaic) {
        filteredMatches = filteredMatches.filter(match => {
            const verse = match.verse;
            return !isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex);
        });
    }

    // Truncate to max results
    const truncated = filteredMatches.length > options.maxResults;
    if (!options.countOnly) {
        filteredMatches = filteredMatches.slice(0, options.maxResults);
    }

    return {
        query: rawResult.query,
        normalizedRegex: rawResult.normalizedRegex,
        strongMatches: rawResult.strongMatches,
        matches: options.countOnly ? [] : filteredMatches,
        totalMatches: options.countOnly ? filteredMatches.length : filteredMatches.length,
        filteredCount: filteredMatches.length,
        truncated: truncated && !options.countOnly,
        options,
    };
}

// ============================================================================
// Output Formatters
// ============================================================================

/**
 * Format output as text
 * @param {Object} result
 * @param {Object} options
 */
function formatText(result, options) {
    const lines = [];

    // Header
    lines.push(`Found ${result.filteredCount} matches for "${result.query}"${result.truncated ? ' (showing first ' + result.matches.length + ')' : ''}:`);

    // Show Strong's matches if any
    if (result.strongMatches.length > 0) {
        const strongsDisplay = result.strongMatches.slice(0, 10).map(sm =>
            `H${sm.strongNumber} (${options.noPoints ? bible.removeNikud(sm.word) : sm.word}, ${sm.type})`
        ).join(', ');
        lines.push(`Strong's matched: ${strongsDisplay}${result.strongMatches.length > 10 ? `, +${result.strongMatches.length - 10} more` : ''}`);
    }

    if (options.countOnly) {
        console.log(lines.join('\n'));
        return;
    }

    lines.push('');

    // Output based on grouping
    if (options.groupBy === 'book') {
        const groups = groupByBook(result.matches);
        for (const [book, matches] of groups) {
            lines.push(`== ${book} (${matches.length} matches) ==`);
            for (const match of matches) {
                const highlighted = highlightVerse(match.verse.words, match.matchedWordIndexes, options.noPoints);
                lines.push(`  (${match.verse.chapter}:${match.verse.verse}) ${highlighted}`);
            }
            lines.push('');
        }
    } else if (options.groupBy === 'strong') {
        const groups = groupByStrong(result.matches);
        for (const [strongNum, matches] of groups) {
            const strongInfo = bible.getStrongInfo(strongNum);
            const word = options.noPoints ? bible.removeNikud(strongInfo.word) : strongInfo.word;
            lines.push(`== H${strongNum}: ${word} (${strongInfo.type}) - ${matches.length} matches ==`);
            for (const match of matches) {
                const highlighted = highlightVerse(match.verse.words, match.matchedWordIndexes, options.noPoints);
                lines.push(`  (${match.verse.location}) ${highlighted}`);
            }
            lines.push('');
        }
    } else {
        // No grouping
        for (const match of result.matches) {
            const highlighted = highlightVerse(match.verse.words, match.matchedWordIndexes, options.noPoints);
            lines.push(`(${match.verse.location}) ${highlighted}`);
        }
    }

    console.log(lines.join('\n'));
}

/**
 * Format output as summary
 * @param {Object} result
 * @param {Object} options
 */
function formatSummary(result, options) {
    const lines = [];

    // Header
    lines.push(`Found ${result.filteredCount} matches for "${result.query}":`);
    lines.push('');

    // Strong's distribution
    if (result.strongMatches.length > 0) {
        lines.push('Strong\'s numbers matched:');
        const strongCounts = countByStrong(result.matches);

        // Sort by count descending
        const sortedStrongs = [...strongCounts.entries()].sort((a, b) => b[1] - a[1]);
        for (const [strongNum, count] of sortedStrongs) {
            const info = bible.getStrongInfo(strongNum);
            const word = options.noPoints ? bible.removeNikud(info.word) : info.word;
            lines.push(`  H${strongNum} (${word}, ${info.typeEnglish}) - ${count} occurrences`);
        }
        lines.push('');
    }

    // Book distribution
    lines.push('Distribution by book:');
    const bookCounts = countByBook(result.matches);
    for (const [book, count] of bookCounts) {
        lines.push(`  ${book}: ${count}`);
    }

    console.log(lines.join('\n'));
}

/**
 * Format output as JSON
 * @param {Object} result
 * @param {Object} options
 */
function formatJson(result, options) {
    const output = {
        query: result.query,
        normalizedRegex: result.normalizedRegex,
        totalMatches: result.filteredCount,
        truncated: result.truncated,
        strongMatches: result.strongMatches.map(sm => ({
            strongNumber: sm.strongNumber,
            word: options.noPoints ? bible.removeNikud(sm.word) : sm.word,
            type: sm.type,
            typeEnglish: sm.typeEnglish,
        })),
        matches: result.matches.map(match => ({
            location: match.verse.location,
            book: match.verse.book,
            chapter: match.verse.chapterIndex + 1,
            verse: match.verse.verseIndex + 1,
            text: options.noPoints ? bible.removeNikud(match.verse.text) : match.verse.text,
            matchedWordIndexes: match.matchedWordIndexes,
            matchedText: options.noPoints ? bible.removeNikud(match.matchedText) : match.matchedText,
        })),
    };

    // Add grouping info if requested
    if (options.groupBy === 'book') {
        output.byBook = {};
        const groups = groupByBook(result.matches);
        for (const [book, matches] of groups) {
            output.byBook[book] = {
                count: matches.length,
                matches: matches.map(m => m.verse.location),
            };
        }
    } else if (options.groupBy === 'strong') {
        output.byStrong = {};
        const groups = groupByStrong(result.matches);
        for (const [strongNum, matches] of groups) {
            const info = bible.getStrongInfo(strongNum);
            output.byStrong[strongNum] = {
                word: options.noPoints ? bible.removeNikud(info.word) : info.word,
                type: info.type,
                count: matches.length,
                matches: matches.map(m => m.verse.location),
            };
        }
    }

    console.log(JSON.stringify(output, null, 2));
}

// ============================================================================
// Main Entry Point
// ============================================================================

async function main() {
    const args = process.argv.slice(2);

    // Parse arguments
    let options;
    try {
        options = parseArgs(args);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.error('Use --help for usage information.');
        process.exit(1);
    }

    // Show help
    if (options.help || !options.query) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    // Perform search
    let result;
    try {
        result = performSearch(options.query, options);
    } catch (error) {
        console.error(`Search error: ${error.message}`);
        process.exit(1);
    }

    // Output results
    switch (options.format) {
        case 'json':
            formatJson(result, options);
            break;
        case 'summary':
            formatSummary(result, options);
            break;
        case 'text':
        default:
            formatText(result, options);
            break;
    }
}

// Export for testing
export {
    parseArgs,
    parseRange,
    performSearch,
    isAramaicVerse,
    highlightVerse,
    groupByBook,
    groupByStrong,
    countByBook,
    countByStrong,
    TORAH,
    NEVIIM,
    KETUVIM,
    ARAMAIC_SECTIONS,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
