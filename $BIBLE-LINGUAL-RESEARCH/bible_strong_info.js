#!/usr/bin/env node
'use strict';

const usage = `
bible_strong_info - Look up Strong's number information

INTENT/GOAL:
    Explore Strong's Concordance data - the foundation of biblical word study.
    Each Strong's number represents a unique Hebrew word with its semantic meaning.
    Understanding Strong's numbers is essential for distinguishing between
    homographs (same spelling, different meaning) and tracking word families.

SYNTAX:
    node bible_strong_info.js <query> [options]

QUERY TYPES:

    Strong's number:
        "216"                   Get info for Strong's H216
        "H216"                  Same (H prefix optional)
        "215-220"               Range of Strong's numbers
        "215,216,430"           Multiple specific numbers

    Hebrew root/word:
        "אור"                   Find all Strong's numbers containing this root
        "ברא"                   All meanings of the root ב.ר.א
        "מלך"                   Could be "king" (noun) or "to reign" (verb)

OPTIONS:
    --type=TYPE             Filter by word type: verb, noun, adjective, name, etc.
    --show-occurrences      Show count of occurrences in Bible
    --show-examples=N       Show N example verses (default: 0)
    --format=FORMAT         Output format: "text" (default), "json"

WORD TYPES (English / Hebrew):
    Verb / פֹּעַל
    Derived-Verb / פֹּעַל נִגְזָר
    Noun / שֵׁם עֶצֶם
    Name / שֵׁם פְּרָטִי
    Adjective / שֵׁם תֹּאַר
    Adverb / תֹּאַר הַפֹּעַל
    Pronoun / שֵׁם גּוּף
    Preposition / מִלַּת יַחַס
    Interjection / מִלַּת קְרִיאָה
    Conjunction / מִלַּת חִבּוּר

EXAMPLES:
    # Look up Strong's H216 (light)
    node bible_strong_info.js 216

    Output:
        H216: אוֹר
        Type: שֵׁם עֶצֶם (Noun)
        Searchable: אור
        BibleHub: https://biblehub.com/hebrew/216.htm

    # Find all Strong's for root אור
    node bible_strong_info.js אור

    Output:
        Found 4 Strong's numbers for "אור":

        H215: אוֹר
          Type: פֹּעַל (Verb) - to shine, give light
          Occurrences: 43

        H216: אוֹר
          Type: שֵׁם עֶצֶם (Noun) - light
          Occurrences: 119

        H217: אוּר
          Type: שֵׁם עֶצֶם (Noun) - fire, flame
          Occurrences: 6

        H218: אוּר
          Type: שֵׁם פְּרָטִי (Name) - Ur (city)
          Occurrences: 5

    # Find all Strong's for אור, verbs only, with examples
    node bible_strong_info.js אור --type=verb --show-examples=2

    Output:
        Found 1 Strong's number for "אור" (verb):

        H215: אוֹר
          Type: פֹּעַל (Verb)
          Occurrences: 43
          Examples:
            (בראשית א:טו) לְהָאִיר עַל הָאָרֶץ
            (שמות יג:כא) לְהָאִיר לָהֶם

    # Get a range of Strong's numbers (useful for exploring)
    node bible_strong_info.js 215-220

NOTES ON STRONG'S NUMBERS:
    - Strong's numbers were created by James Strong in 1890
    - Each number represents a unique semantic unit (not just spelling)
    - A single Hebrew root often has multiple Strong's numbers:
      * Different parts of speech (verb vs noun)
      * Different semantic meanings
    - Example: ענה has 5 Strong's numbers:
      * H6030 - to answer, respond
      * H6031 - to afflict, oppress
      * H6032 - Aramaic: to answer
      * H6033 - Aramaic: poor
      * H6034 - Anah (name)
    - BibleHub provides detailed etymological information

LINGUISTIC INSIGHT:
    When a root has multiple Strong's numbers, ask: "Was there once a unified
    ancient meaning that split into these different usages?" This is a key
    question for biblical linguistic research.
`;

import * as bible from './bible-utils.js';
import {
    TYPE_ALIASES,
    getOccurrenceCount,
    getExamples,
} from './bible-utils.js';

// ============================================================================
// Query Parsing
// ============================================================================

/**
 * @typedef {Object} ParsedQuery
 * @property {'numbers' | 'hebrew'} type
 * @property {number[]} [numbers] - For number queries
 * @property {string} [pattern] - For Hebrew queries
 */

/**
 * Parse the query string to determine what we're looking for
 * @param {string} query
 * @returns {ParsedQuery}
 */
function parseQuery(query) {
    const trimmed = query.trim();

    // Remove H prefix if present
    const withoutH = trimmed.replace(/^[Hh]/, '');

    // Check if it's a range: "215-220"
    const rangeMatch = withoutH.match(/^(\d+)\s*-\s*(\d+)$/);
    if (rangeMatch) {
        const start = parseInt(rangeMatch[1], 10);
        const end = parseInt(rangeMatch[2], 10);
        const numbers = [];
        for (let i = start; i <= end; i++) {
            numbers.push(i);
        }
        return { type: 'numbers', numbers };
    }

    // Check if it's a comma-separated list: "215,216,430"
    const listMatch = withoutH.match(/^[\d,\s]+$/);
    if (listMatch) {
        const numbers = withoutH.split(/[,\s]+/)
            .filter(s => s.length > 0)
            .map(s => parseInt(s, 10));
        return { type: 'numbers', numbers };
    }

    // Check if it's a single number
    const singleMatch = withoutH.match(/^\d+$/);
    if (singleMatch) {
        return { type: 'numbers', numbers: [parseInt(withoutH, 10)] };
    }

    // Must be a Hebrew search
    return { type: 'hebrew', pattern: trimmed };
}

// ============================================================================
// Strong's Lookup
// ============================================================================

/**
 * @typedef {Object} StrongResult
 * @property {number} strongNumber
 * @property {string} word - Hebrew word with nikud
 * @property {string} searchable - Normalized searchable form
 * @property {string} type - Hebrew type name
 * @property {string} typeEnglish - English type name
 * @property {string} url - BibleHub URL
 * @property {number} [occurrences] - Occurrence count (if requested)
 * @property {Object[]} [examples] - Example verses (if requested)
 */

/**
 * Look up Strong's numbers by number
 * @param {number[]} numbers
 * @param {Object} options
 * @returns {StrongResult[]}
 */
function lookupByNumbers(numbers, options) {
    const results = [];

    for (const num of numbers) {
        const info = bible.getStrongInfo(num);
        if (info && info.word.trim() !== '') {
            // Apply type filter if specified
            if (options.typeFilter && info.typeEnglish.toLowerCase() !== options.typeFilter.toLowerCase()) {
                continue;
            }

            const result = {
                strongNumber: num,
                word: info.word,
                searchable: info.searchable,
                type: info.type,
                typeEnglish: info.typeEnglish,
                url: `https://biblehub.com/hebrew/${num}.htm`,
            };

            if (options.showOccurrences) {
                result.occurrences = getOccurrenceCount(num);
            }

            if (options.showExamples > 0) {
                result.examples = getExamples(num, options.showExamples);
            }

            results.push(result);
        }
    }

    return results;
}

/**
 * Look up Strong's numbers by Hebrew pattern
 * @param {string} pattern
 * @param {Object} options
 * @returns {StrongResult[]}
 */
function lookupByHebrew(pattern, options) {
    const matches = bible.findStrongNumbers(pattern);
    const results = [];

    for (const { strongNumber, data } of matches) {
        // Apply type filter if specified
        if (options.typeFilter && data.typeEnglish.toLowerCase() !== options.typeFilter.toLowerCase()) {
            continue;
        }

        const result = {
            strongNumber,
            word: data.word,
            searchable: data.searchable,
            type: data.type,
            typeEnglish: data.typeEnglish,
            url: `https://biblehub.com/hebrew/${strongNumber}.htm`,
        };

        if (options.showOccurrences) {
            result.occurrences = getOccurrenceCount(strongNumber);
        }

        if (options.showExamples > 0) {
            result.examples = getExamples(strongNumber, options.showExamples);
        }

        results.push(result);
    }

    return results;
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
        query: null,
        typeFilter: null,
        showOccurrences: false,
        showExamples: 0,
        format: 'text',
        help: false,
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
        } else if (arg.startsWith('--type=')) {
            const typeName = arg.substring(7).toLowerCase();
            options.typeFilter = TYPE_ALIASES[typeName] || typeName;
        } else if (arg === '--show-occurrences') {
            options.showOccurrences = true;
        } else if (arg.startsWith('--show-examples=')) {
            options.showExamples = parseInt(arg.substring(16), 10);
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (!arg.startsWith('-')) {
            options.query = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text or json.`);
    }

    return options;
}

// ============================================================================
// Output Formatting
// ============================================================================

/**
 * Format results as text
 * @param {StrongResult[]} results
 * @param {string} query
 * @param {Object} options
 */
function formatText(results, query, options) {
    if (results.length === 0) {
        console.log(`No Strong's numbers found for "${query}"${options.typeFilter ? ` (type: ${options.typeFilter})` : ''}`);
        return;
    }

    const typeInfo = options.typeFilter ? ` (${options.typeFilter})` : '';
    console.log(`Found ${results.length} Strong's number${results.length > 1 ? 's' : ''} for "${query}"${typeInfo}:\n`);

    for (const result of results) {
        console.log(`H${result.strongNumber}: ${result.word}`);
        console.log(`  Type: ${result.type} (${result.typeEnglish})`);
        console.log(`  Searchable: ${result.searchable}`);

        if (result.occurrences !== undefined) {
            console.log(`  Occurrences: ${result.occurrences}`);
        }

        console.log(`  BibleHub: ${result.url}`);

        if (result.examples && result.examples.length > 0) {
            console.log('  Examples:');
            for (const ex of result.examples) {
                console.log(`    (${ex.location}) ${ex.matchedWords.join(' ')}`);
            }
        }

        console.log('');
    }
}

/**
 * Format results as JSON
 * @param {StrongResult[]} results
 * @param {string} query
 * @param {Object} options
 */
function formatJson(results, query, options) {
    const output = {
        query,
        typeFilter: options.typeFilter,
        resultCount: results.length,
        results,
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

    if (options.help || !options.query) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    // Parse the query
    const parsedQuery = parseQuery(options.query);

    // Look up results
    let results;
    try {
        if (parsedQuery.type === 'numbers') {
            results = lookupByNumbers(parsedQuery.numbers, options);
        } else {
            results = lookupByHebrew(parsedQuery.pattern, options);
        }
    } catch (error) {
        console.error(`Lookup error: ${error.message}`);
        process.exit(1);
    }

    // Format output
    if (options.format === 'json') {
        formatJson(results, options.query, options);
    } else {
        formatText(results, options.query, options);
    }
}

// Export for testing
export {
    parseQuery,
    parseArgs,
    lookupByNumbers,
    lookupByHebrew,
    getOccurrenceCount,
    getExamples,
    TYPE_ALIASES,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
