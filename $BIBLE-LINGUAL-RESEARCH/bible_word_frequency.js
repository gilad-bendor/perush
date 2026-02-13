#!/usr/bin/env node
'use strict';

const usage = `
bible_word_frequency - Analyze word/pattern frequency distribution

INTENT/GOAL:
    Understand usage patterns and distribution of words across the Bible.
    Frequency analysis reveals whether a word is core vocabulary or specialized,
    which books emphasize certain concepts, and how usage evolved over time
    (earlier vs later biblical texts).

SYNTAX:
    ./bible_word_frequency.js <query> [options]

QUERY:
    Same patterns as bible_search.js:
    - Simple text: "אור"
    - Strong's number: "<216>"
    - Root search: "<אור>"
    - Pattern: "ה@ל@ך"

OPTIONS:
    --group-by=MODE         Grouping: "book" (default), "chapter", "section"
    --range=RANGE           Limit analysis to specific range
    --top=N                 Show only top N results (default: show all)
    --min=N                 Only show groups with at least N occurrences
    --no-points             Remove nikud from output
    --format=FORMAT         Output format: "text" (default), "json", "chart"
    --sort=MODE             Sort by: "count" (default), "biblical"

GROUPING MODES:
    book        Count per book (39 groups max)
    chapter     Count per chapter (929 groups max)
    section     Count per section: תורה, נביאים ראשונים, נביאים אחרונים, כתובים

RANGE SYNTAX (same as bible_get_verses):
    "בראשית"                Single book
    "בראשית 1-11"           Chapters within book
    "תורה"                  Section name

EXAMPLES:
    # Word frequency across all books
    ./bible_word_frequency.js "אלהים"

    # Frequency of "light" concept by section
    ./bible_word_frequency.js "<אור>" --group-by=section

    # Chapter-level analysis in Isaiah
    ./bible_word_frequency.js "<אור>" --range="ישעיהו" --group-by=chapter

    # Top 10 books using word
    ./bible_word_frequency.js "שלום" --top=10

    # Only show books with 5+ occurrences
    ./bible_word_frequency.js "ברית" --min=5

    # JSON for further analysis
    ./bible_word_frequency.js "<מים>" --format=json

NOTES:
    - Aramaic sections excluded (not relevant for Hebrew linguistic research)
    - Accents always stripped
    - Nikud shown by default
    - Zero-count books/chapters are omitted from output
`;

import * as bible from './bible-utils.js';
import {
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    KETUVIM,
    SECTIONS,
    parseRange,
    getBookSection,
} from './bible-utils.js';

// ============================================================================
// Argument Parsing
// ============================================================================

function parseArgs(args) {
    const options = {
        query: null,
        groupBy: 'book',
        range: null,
        top: null,
        min: null,
        noPoints: false,
        format: 'text',
        sort: 'count',
        help: false,
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
        } else if (arg.startsWith('--group-by=')) {
            options.groupBy = arg.substring(11);
        } else if (arg.startsWith('--range=')) {
            options.range = arg.substring(8);
        } else if (arg.startsWith('--top=')) {
            options.top = parseInt(arg.substring(6));
        } else if (arg.startsWith('--min=')) {
            options.min = parseInt(arg.substring(6));
        } else if (arg === '--no-points') {
            options.noPoints = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (arg.startsWith('--sort=')) {
            options.sort = arg.substring(7);
        } else if (!arg.startsWith('-')) {
            options.query = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['book', 'chapter', 'section'].includes(options.groupBy)) {
        throw new Error(`Invalid group-by: ${options.groupBy}. Must be book, chapter, or section.`);
    }
    if (!['text', 'json', 'chart'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text, json, or chart.`);
    }
    if (!['count', 'biblical'].includes(options.sort)) {
        throw new Error(`Invalid sort: ${options.sort}. Must be count or biblical.`);
    }

    return options;
}

// ============================================================================
// Frequency Analysis
// ============================================================================

function analyzeFrequency(query, options) {
    // Search for matches
    const searchResult = bible.search(query, { maxResults: 10000 });

    // Parse range filter
    const rangeFilter = parseRange(options.range);

    // Count occurrences by group
    const counts = new Map();
    let total = 0;

    for (const match of searchResult.matches) {
        const verse = match.verse;

        // Apply range filter
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }

        // Count matched words (not just verses)
        const matchCount = match.matchedWordIndexes.length;
        total += matchCount;

        // Group by specified mode
        let groupKey;
        if (options.groupBy === 'section') {
            groupKey = getBookSection(verse.book);
        } else if (options.groupBy === 'chapter') {
            groupKey = `${verse.book} ${verse.chapter}`;
        } else {
            groupKey = verse.book;
        }

        counts.set(groupKey, (counts.get(groupKey) || 0) + matchCount);
    }

    // Convert to array and sort
    let distribution = [...counts.entries()].map(([key, count]) => ({
        key,
        count,
        percentage: total > 0 ? (count / total * 100).toFixed(1) : '0.0',
    }));

    // Sort
    if (options.sort === 'count') {
        distribution.sort((a, b) => b.count - a.count);
    } else {
        // Biblical order - use book order
        const bookOrder = bible.getBookNames();
        distribution.sort((a, b) => {
            const bookA = a.key.split(' ')[0];
            const bookB = b.key.split(' ')[0];
            const orderA = bookOrder.indexOf(bookA);
            const orderB = bookOrder.indexOf(bookB);
            if (orderA !== orderB) return orderA - orderB;
            // Same book, compare chapter numbers
            const chapterA = parseInt(a.key.split(' ')[1]) || 0;
            const chapterB = parseInt(b.key.split(' ')[1]) || 0;
            return chapterA - chapterB;
        });
    }

    // Apply min filter
    if (options.min) {
        distribution = distribution.filter(d => d.count >= options.min);
    }

    // Apply top filter
    if (options.top) {
        distribution = distribution.slice(0, options.top);
    }

    return {
        query,
        total,
        strongMatches: searchResult.strongMatches,
        distribution,
        groupBy: options.groupBy,
    };
}

// ============================================================================
// Output Formatting
// ============================================================================

function formatText(result, options) {
    const lines = [];

    // Header
    let header = `Frequency of "${result.query}"`;
    if (result.strongMatches.length > 0) {
        const strongs = result.strongMatches.slice(0, 5)
            .map(s => `H${s.strongNumber}`)
            .join(', ');
        header += ` (${strongs}${result.strongMatches.length > 5 ? '...' : ''})`;
    }
    header += `: ${result.total} total occurrences`;
    lines.push(header);
    lines.push('');

    if (result.distribution.length === 0) {
        lines.push('No matches found.');
        console.log(lines.join('\n'));
        return;
    }

    // Calculate bar scaling
    const maxCount = Math.max(...result.distribution.map(d => d.count));
    const maxBarLength = 40;
    const scale = maxCount > 0 ? maxBarLength / maxCount : 1;

    // Group label
    lines.push(`By ${result.groupBy}:`);

    // Distribution
    const maxKeyLength = Math.max(...result.distribution.map(d => d.key.length));

    for (const item of result.distribution) {
        const paddedKey = item.key.padStart(maxKeyLength);
        const bar = '█'.repeat(Math.round(item.count * scale));
        const countStr = String(item.count).padStart(5);
        lines.push(`  ${paddedKey}  ${countStr}  ${bar}  (${item.percentage}%)`);
    }

    console.log(lines.join('\n'));
}

function formatChart(result, options) {
    if (result.distribution.length === 0) {
        console.log('No matches found.');
        return;
    }

    const maxCount = Math.max(...result.distribution.map(d => d.count));
    const maxBarLength = 50;
    const scale = maxCount > 0 ? maxBarLength / maxCount : 1;
    const maxKeyLength = Math.max(...result.distribution.map(d => d.key.length));

    console.log(`Frequency chart: "${result.query}" (${result.total} total)\n`);

    for (const item of result.distribution) {
        const paddedKey = item.key.padStart(maxKeyLength);
        const bar = '█'.repeat(Math.round(item.count * scale));
        console.log(`${paddedKey}  ${bar} ${item.count}`);
    }
}

function formatJson(result, options) {
    const output = {
        query: result.query,
        total: result.total,
        groupBy: result.groupBy,
        strongMatches: result.strongMatches.map(s => ({
            strongNumber: s.strongNumber,
            word: options.noPoints ? bible.removeNikud(s.word) : s.word,
            type: s.type,
        })),
        distribution: result.distribution.reduce((acc, item) => {
            acc[item.key] = {
                count: item.count,
                percentage: parseFloat(item.percentage),
            };
            return acc;
        }, {}),
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

    let result;
    try {
        result = analyzeFrequency(options.query, options);
    } catch (error) {
        console.error(`Analysis error: ${error.message}`);
        process.exit(1);
    }

    switch (options.format) {
        case 'json':
            formatJson(result, options);
            break;
        case 'chart':
            formatChart(result, options);
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
    analyzeFrequency,
    getBookSection,
    SECTIONS,
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    KETUVIM,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
