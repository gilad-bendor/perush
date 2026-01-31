#!/usr/bin/env node
'use strict';

const usage = `
bible_cooccurrences - Find words that appear together, revealing semantic fields

INTENT/GOAL:
    Discover semantic relationships by finding words that frequently appear
    together. Co-occurrence analysis reveals:
    - Semantic fields (clusters of related concepts)
    - Fixed phrases and idioms
    - Theological/conceptual associations
    - Context patterns for word meaning

    This is a KEY TOOL for linguistic research: words that cluster together
    often share underlying conceptual connections that illuminate ancient
    meaning.

SYNTAX:
    node bible_cooccurrences.js <word> [word2] [options]

MODES:
    Single word:    Find what co-occurs with this word
    Two words:      Analyze the specific co-occurrence pattern

QUERY FORMAT:
    Same as bible_search.js:
    - "מים"         Simple word
    - "<4325>"      Strong's number
    - "<מים>"       All Strong's for root

OPTIONS:
    --proximity=MODE    How close words must be:
                        "verse" (default) - same verse
                        "adjacent" - next to each other
                        "N" - within N words

    --top=N             Show top N co-occurring words (default: 20)
    --min=N             Only show words appearing N+ times together
    --show-examples=N   Show N example verses for each co-occurrence
    --by-strong         Group results by Strong's number instead of word
    --range=RANGE       Limit to specific range
    --include-aramaic   Include Aramaic sections
    --include-stopwords Include function words in results
    --no-points         Remove nikud from output
    --format=FORMAT     Output format: "text" (default), "json"

EXAMPLES:
    # What words appear with "מים" (water)?
    node bible_cooccurrences.js "<מים>"

    # Specific co-occurrence: מים and ארץ
    node bible_cooccurrences.js "<מים>" "<ארץ>" --show-examples=3

    # Adjacent co-occurrence (fixed phrases)
    node bible_cooccurrences.js "יהוה" "אלהים" --proximity=adjacent

    # Co-occurrences within 3 words
    node bible_cooccurrences.js "<טוב>" --proximity=3

NOTES:
    - Aramaic sections excluded by default
    - Common function words (את, אשר, על, etc.) are filtered from results
      unless --include-stopwords is used
    - Results sorted by frequency (most common first)
    - Percentage shows what fraction of the primary word's occurrences
      include the co-occurring word
`;

import * as bible from './bible-utils.js';

// ============================================================================
// Constants
// ============================================================================

// Common function words (stopwords) to filter from results
const STOPWORDS = new Set([
    'את', 'אשר', 'על', 'אל', 'מן', 'עם', 'כי', 'לא', 'כל', 'גם',
    'או', 'אם', 'הנה', 'זה', 'זאת', 'הוא', 'היא', 'הם', 'הן',
    'אני', 'אנחנו', 'אתה', 'את', 'אתם', 'אתן', 'לו', 'לה', 'להם',
    'בו', 'בה', 'בהם', 'לי', 'לך', 'לנו', 'לכם', 'ממנו', 'ממנה',
    'עליו', 'עליה', 'עליהם', 'אליו', 'אליה', 'אליהם', 'אתו', 'אתה',
    'כן', 'לפני', 'אחרי', 'תחת', 'עד', 'בין', 'למען', 'יען',
    'פן', 'בלי', 'בלתי', 'אך', 'רק', 'מאד', 'עתה', 'אז', 'שם', 'פה',
]);

// Aramaic sections (for filtering)
const ARAMAIC_SECTIONS = {
    'דניאל': [{ startChapter: 1, startVerse: 3, endChapter: 6, endVerse: 27 }],
    'עזרא': [
        { startChapter: 3, startVerse: 7, endChapter: 5, endVerse: 17 },
        { startChapter: 6, startVerse: 11, endChapter: 6, endVerse: 25 }
    ],
    'ירמיהו': [{ startChapter: 9, startVerse: 10, endChapter: 9, endVerse: 10 }],
    'בראשית': [{ startChapter: 30, startVerse: 46, endChapter: 30, endVerse: 46 }],
};

// Section names for range filtering
const SECTION_NAMES = {
    'תורה': ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים'],
    'נביאים': [
        'יהושע', 'שופטים', 'שמואל-א', 'שמואל-ב', 'מלכים-א', 'מלכים-ב',
        'ישעיהו', 'ירמיהו', 'יחזקאל',
        'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה',
        'נחום', 'חבקוק', 'צפניה', 'חגי', 'זכריה', 'מלאכי'
    ],
    'כתובים': [
        'דברי-הימים-א', 'דברי-הימים-ב', 'תהילים', 'איוב', 'משלי',
        'רות', 'שיר-השירים', 'קהלת', 'איכה', 'אסתר', 'דניאל', 'עזרא', 'נחמיה'
    ],
};

// ============================================================================
// Helpers
// ============================================================================

/**
 * Check if a verse is in an Aramaic section
 */
function isAramaicVerse(book, chapterIndex, verseIndex) {
    const sections = ARAMAIC_SECTIONS[book];
    if (!sections) return false;

    for (const section of sections) {
        if (chapterIndex > section.startChapter && chapterIndex < section.endChapter) return true;
        if (chapterIndex === section.startChapter && chapterIndex === section.endChapter) {
            return verseIndex >= section.startVerse && verseIndex <= section.endVerse;
        }
        if (chapterIndex === section.startChapter && verseIndex >= section.startVerse) return true;
        if (chapterIndex === section.endChapter && verseIndex <= section.endVerse) return true;
    }
    return false;
}

/**
 * Check if a word is a stopword (normalized form)
 */
function isStopword(word) {
    const normalized = bible.removeNikud(word);
    return STOPWORDS.has(normalized);
}

/**
 * Parse range specification
 */
function parseRange(rangeStr) {
    if (!rangeStr) return null;

    if (SECTION_NAMES[rangeStr]) {
        return { books: new Set(SECTION_NAMES[rangeStr]), chapterFilter: () => true };
    }

    const bookNames = bible.getBookNames();
    const parts = rangeStr.split(/\s+/);
    const bookName = parts[0];

    if (!bookNames.includes(bookName)) {
        throw new Error(`Unknown book or section: ${bookName}`);
    }

    if (parts.length === 1) {
        return { books: new Set([bookName]), chapterFilter: () => true };
    }

    const chapterRange = parts.slice(1).join(' ');
    const rangeMatch = chapterRange.match(/^(\d+)(?:-(\d+))?$/);

    if (!rangeMatch) {
        throw new Error(`Invalid chapter range: ${chapterRange}`);
    }

    const startChapter = parseInt(rangeMatch[1]) - 1;
    const endChapter = rangeMatch[2] ? parseInt(rangeMatch[2]) - 1 : startChapter;

    return {
        books: new Set([bookName]),
        chapterFilter: (book, chapterIndex) => {
            return book === bookName && chapterIndex >= startChapter && chapterIndex <= endChapter;
        },
    };
}

/**
 * Check if query word matches a word in verse
 * Returns true if the word should be considered a match for the query
 */
function wordMatchesQuery(searchResult, verseLocation, wordIndex) {
    for (const match of searchResult.matches) {
        if (match.verse.location === verseLocation) {
            if (match.matchedWordIndexes.includes(wordIndex)) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Calculate word distance in verse
 */
function getWordDistance(idx1, idx2) {
    return Math.abs(idx1 - idx2);
}

// ============================================================================
// Argument Parsing
// ============================================================================

/**
 * Parse command line arguments
 */
function parseArgs(args) {
    const options = {
        word1: null,
        word2: null,
        proximity: 'verse',
        top: 20,
        min: 1,
        showExamples: 0,
        byStrong: false,
        range: null,
        includeAramaic: false,
        includeStopwords: false,
        noPoints: false,
        format: 'text',
        help: false,
    };

    const words = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
        } else if (arg.startsWith('--proximity=')) {
            options.proximity = arg.substring(12);
        } else if (arg.startsWith('--top=')) {
            options.top = parseInt(arg.substring(6), 10);
        } else if (arg.startsWith('--min=')) {
            options.min = parseInt(arg.substring(6), 10);
        } else if (arg.startsWith('--show-examples=')) {
            options.showExamples = parseInt(arg.substring(16), 10);
        } else if (arg === '--by-strong') {
            options.byStrong = true;
        } else if (arg.startsWith('--range=')) {
            options.range = arg.substring(8);
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
        } else if (arg === '--include-stopwords') {
            options.includeStopwords = true;
        } else if (arg === '--no-points') {
            options.noPoints = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (!arg.startsWith('-')) {
            words.push(arg);
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (words.length >= 1) options.word1 = words[0];
    if (words.length >= 2) options.word2 = words[1];

    if (!['text', 'json'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text or json.`);
    }

    // Parse proximity
    if (options.proximity !== 'verse' && options.proximity !== 'adjacent') {
        const num = parseInt(options.proximity, 10);
        if (isNaN(num) || num < 1) {
            throw new Error(`Invalid proximity: ${options.proximity}. Must be "verse", "adjacent", or a number.`);
        }
        options.proximityDistance = num;
        options.proximity = 'distance';
    }

    return options;
}

// ============================================================================
// Co-occurrence Analysis
// ============================================================================

/**
 * @typedef {Object} CooccurrenceEntry
 * @property {string} word - The co-occurring word
 * @property {string} searchable - Normalized form
 * @property {number} count - How many times it co-occurs
 * @property {number} [strongNumber] - Strong's number if available
 * @property {Object[]} [examples] - Example verses
 */

/**
 * @typedef {Object} CooccurrenceResult
 * @property {string} query - The query word
 * @property {number} totalVerses - Total verses containing query
 * @property {CooccurrenceEntry[]} cooccurrences - Co-occurring words
 */

/**
 * Analyze co-occurrences for a single word query
 */
function analyzeCooccurrences(query, options = {}) {
    // Search for the query word
    const searchResult = bible.search(query, { maxResults: 10000 });

    // Parse range filter
    const rangeFilter = parseRange(options.range);

    // Track co-occurrences
    const cooccurrenceCounts = new Map(); // searchable -> { word, count, strongSet, examples }
    const matchedLocations = new Set();
    let totalVerses = 0;

    for (const match of searchResult.matches) {
        const verse = match.verse;

        // Apply range filter
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }

        // Apply Aramaic filter
        if (!options.includeAramaic) {
            if (isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;
        }

        // Skip if we've already processed this verse
        if (matchedLocations.has(verse.location)) continue;
        matchedLocations.add(verse.location);
        totalVerses++;

        // Get matched positions
        const matchedIndexes = new Set(match.matchedWordIndexes);

        // Count co-occurring words
        for (let i = 0; i < verse.words.length; i++) {
            // Skip the matched words themselves
            if (matchedIndexes.has(i)) continue;

            const word = verse.words[i];
            const strongNum = verse.strongs[i];

            // Check proximity
            if (options.proximity === 'adjacent') {
                let isAdjacent = false;
                for (const matchIdx of matchedIndexes) {
                    if (getWordDistance(i, matchIdx) === 1) {
                        isAdjacent = true;
                        break;
                    }
                }
                if (!isAdjacent) continue;
            } else if (options.proximity === 'distance') {
                let withinDistance = false;
                for (const matchIdx of matchedIndexes) {
                    if (getWordDistance(i, matchIdx) <= options.proximityDistance) {
                        withinDistance = true;
                        break;
                    }
                }
                if (!withinDistance) continue;
            }

            // Get key for grouping
            let key;
            let displayWord = bible.removeTeamim(word);

            if (options.byStrong && strongNum > 0) {
                key = `H${strongNum}`;
                // Get the word from Strong's data if available
                const strongInfo = bible.getStrongInfo(strongNum);
                if (strongInfo) {
                    displayWord = strongInfo.word;
                }
            } else {
                key = bible.makeSearchable(word);
            }

            // Skip stopwords unless explicitly requested
            if (!options.includeStopwords && isStopword(word)) continue;

            // Count
            if (!cooccurrenceCounts.has(key)) {
                cooccurrenceCounts.set(key, {
                    word: displayWord,
                    searchable: bible.makeSearchable(word),
                    count: 0,
                    strongSet: new Set(),
                    examples: [],
                });
            }

            const entry = cooccurrenceCounts.get(key);
            entry.count++;
            if (strongNum > 0) entry.strongSet.add(strongNum);

            // Collect examples
            if (options.showExamples > 0 && entry.examples.length < options.showExamples * 2) {
                entry.examples.push({
                    location: verse.location,
                    book: verse.book,
                    text: bible.removeTeamim(verse.text),
                    matchedWord: bible.removeTeamim(verse.words[match.matchedWordIndexes[0]]),
                    cooccurWord: bible.removeTeamim(word),
                });
            }
        }
    }

    // Convert to array and sort by count
    let cooccurrences = [...cooccurrenceCounts.entries()].map(([key, data]) => {
        const entry = {
            key,
            word: data.word,
            searchable: data.searchable,
            count: data.count,
            percentage: totalVerses > 0 ? (data.count / totalVerses * 100).toFixed(1) : '0.0',
        };

        if (data.strongSet.size > 0) {
            entry.strongNumbers = [...data.strongSet];
        }

        // Select diverse examples
        if (options.showExamples > 0 && data.examples.length > 0) {
            const selectedExamples = [];
            const seenBooks = new Set();

            for (const ex of data.examples) {
                if (selectedExamples.length >= options.showExamples) break;
                if (!seenBooks.has(ex.book) || selectedExamples.length < options.showExamples - 1) {
                    seenBooks.add(ex.book);
                    selectedExamples.push(ex);
                }
            }

            entry.examples = selectedExamples;
        }

        return entry;
    });

    // Sort by count descending
    cooccurrences.sort((a, b) => b.count - a.count);

    // Apply min filter
    if (options.min > 1) {
        cooccurrences = cooccurrences.filter(e => e.count >= options.min);
    }

    // Apply top filter
    if (options.top) {
        cooccurrences = cooccurrences.slice(0, options.top);
    }

    return {
        query,
        totalVerses,
        strongMatches: searchResult.strongMatches,
        cooccurrences,
        proximity: options.proximity,
        proximityDistance: options.proximityDistance,
    };
}

/**
 * Analyze co-occurrence of two specific words
 */
function analyzeWordPair(query1, query2, options = {}) {
    // Search for both words
    const search1 = bible.search(query1, { maxResults: 10000 });
    const search2 = bible.search(query2, { maxResults: 10000 });

    // Parse range filter
    const rangeFilter = parseRange(options.range);

    // Build sets of locations for each word
    const locations1 = new Map(); // location -> { match, words: [positions] }
    const locations2 = new Map();

    for (const match of search1.matches) {
        const verse = match.verse;
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        if (!locations1.has(verse.location)) {
            locations1.set(verse.location, { match, positions: [] });
        }
        locations1.get(verse.location).positions.push(...match.matchedWordIndexes);
    }

    for (const match of search2.matches) {
        const verse = match.verse;
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        if (!locations2.has(verse.location)) {
            locations2.set(verse.location, { match, positions: [] });
        }
        locations2.get(verse.location).positions.push(...match.matchedWordIndexes);
    }

    // Find co-occurrences
    const cooccurringVerses = [];
    const bookCounts = new Map();

    for (const [location, data1] of locations1) {
        if (!locations2.has(location)) continue;
        const data2 = locations2.get(location);

        // Check proximity (default to 'verse' if not specified)
        let passes = false;
        let minDistance = Infinity;

        if (!options.proximity || options.proximity === 'verse') {
            passes = true;
        } else {
            for (const pos1 of data1.positions) {
                for (const pos2 of data2.positions) {
                    const dist = getWordDistance(pos1, pos2);
                    minDistance = Math.min(minDistance, dist);

                    if (options.proximity === 'adjacent' && dist === 1) {
                        passes = true;
                    } else if (options.proximity === 'distance' && dist <= options.proximityDistance) {
                        passes = true;
                    }
                }
            }
        }

        if (!passes) continue;

        // Get matched words
        const verse = data1.match.verse;
        const word1 = bible.removeTeamim(verse.words[data1.positions[0]]);
        const word2 = bible.removeTeamim(verse.words[data2.positions[0]]);

        cooccurringVerses.push({
            location,
            book: verse.book,
            text: bible.removeTeamim(verse.text),
            word1,
            word2,
            distance: minDistance === Infinity ? null : minDistance,
        });

        // Count by book
        bookCounts.set(verse.book, (bookCounts.get(verse.book) || 0) + 1);
    }

    // Sort by biblical order
    const bookOrder = bible.getBookNames();
    cooccurringVerses.sort((a, b) => {
        const orderA = bookOrder.indexOf(a.book);
        const orderB = bookOrder.indexOf(b.book);
        if (orderA !== orderB) return orderA - orderB;
        return a.location.localeCompare(b.location);
    });

    // Build distribution sorted by count
    const distribution = [...bookCounts.entries()]
        .map(([book, count]) => ({ book, count }))
        .sort((a, b) => b.count - a.count);

    // Select examples
    let examples = [];
    if (options.showExamples > 0) {
        const seenBooks = new Set();
        for (const v of cooccurringVerses) {
            if (examples.length >= options.showExamples) break;
            if (!seenBooks.has(v.book) || examples.length < options.showExamples - 1) {
                seenBooks.add(v.book);
                examples.push(v);
            }
        }
    }

    return {
        query1,
        query2,
        strongMatches1: search1.strongMatches,
        strongMatches2: search2.strongMatches,
        word1Count: locations1.size,
        word2Count: locations2.size,
        cooccurrenceCount: cooccurringVerses.length,
        percentage1: locations1.size > 0 ? (cooccurringVerses.length / locations1.size * 100).toFixed(1) : '0.0',
        percentage2: locations2.size > 0 ? (cooccurringVerses.length / locations2.size * 100).toFixed(1) : '0.0',
        distribution,
        examples,
        proximity: options.proximity,
        proximityDistance: options.proximityDistance,
    };
}

// ============================================================================
// Output Formatting
// ============================================================================

/**
 * Format word with optional nikud removal
 */
function formatWord(word, noPoints) {
    return noPoints ? bible.removeNikud(word) : word;
}

/**
 * Format single-word co-occurrence results as text
 */
function formatSingleWordText(result, options) {
    const lines = [];

    // Header
    let header = `Co-occurrences with "${result.query}"`;
    if (result.strongMatches.length > 0) {
        const strongs = result.strongMatches.slice(0, 3)
            .map(s => `H${s.strongNumber}`)
            .join(', ');
        header += ` (${strongs}${result.strongMatches.length > 3 ? '...' : ''})`;
    }
    header += `: ${result.totalVerses} verses analyzed`;
    lines.push(header);

    // Proximity info
    if (result.proximity === 'adjacent') {
        lines.push('Proximity: adjacent words only');
    } else if (result.proximity === 'distance') {
        lines.push(`Proximity: within ${result.proximityDistance} words`);
    }

    lines.push('');

    if (result.cooccurrences.length === 0) {
        lines.push('No significant co-occurrences found.');
        console.log(lines.join('\n'));
        return;
    }

    lines.push(`Top ${result.cooccurrences.length} co-occurring words:`);
    lines.push('');

    // Calculate column widths
    const maxWordLen = Math.max(...result.cooccurrences.map(e =>
        formatWord(e.word, options.noPoints).length));

    for (const entry of result.cooccurrences) {
        const word = formatWord(entry.word, options.noPoints);
        const paddedWord = word.padStart(maxWordLen);
        const countStr = String(entry.count).padStart(5);

        let line = `  ${paddedWord}  ${countStr} times  (${entry.percentage}%)`;
        if (entry.strongNumbers && entry.strongNumbers.length > 0) {
            const strongs = entry.strongNumbers.slice(0, 2).map(n => `H${n}`).join('/');
            line += `  [${strongs}]`;
        }
        lines.push(line);

        if (entry.examples && entry.examples.length > 0) {
            for (const ex of entry.examples) {
                lines.push(`      (${ex.location}) ${ex.text.substring(0, 60)}...`);
            }
        }
    }

    console.log(lines.join('\n'));
}

/**
 * Format word-pair co-occurrence results as text
 */
function formatWordPairText(result, options) {
    const lines = [];

    // Header
    lines.push(`Co-occurrence: "${result.query1}" + "${result.query2}"`);
    lines.push('');
    lines.push(`  ${result.query1}: ${result.word1Count} verses`);
    lines.push(`  ${result.query2}: ${result.word2Count} verses`);
    lines.push(`  Together: ${result.cooccurrenceCount} verses`);
    lines.push(`  (${result.percentage1}% of ${result.query1}, ${result.percentage2}% of ${result.query2})`);

    // Proximity info
    if (result.proximity === 'adjacent') {
        lines.push('  Proximity: adjacent words only');
    } else if (result.proximity === 'distance') {
        lines.push(`  Proximity: within ${result.proximityDistance} words`);
    }

    lines.push('');

    if (result.examples.length > 0) {
        lines.push('Examples:');
        for (const ex of result.examples) {
            lines.push(`  (${ex.location}) ${ex.text}`);
        }
        lines.push('');
    }

    if (result.distribution.length > 0) {
        lines.push('Distribution by book:');
        for (const { book, count } of result.distribution.slice(0, 10)) {
            lines.push(`  ${book}: ${count}`);
        }
        if (result.distribution.length > 10) {
            lines.push(`  ... and ${result.distribution.length - 10} more books`);
        }
    }

    console.log(lines.join('\n'));
}

/**
 * Format results as JSON
 */
function formatJson(result, options) {
    const output = { ...result };

    // Clean up for JSON output
    if (output.cooccurrences) {
        output.cooccurrences = output.cooccurrences.map(e => {
            const cleaned = { ...e };
            if (options.noPoints) {
                cleaned.word = bible.removeNikud(cleaned.word);
            }
            delete cleaned.key;
            return cleaned;
        });
    }

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

    if (options.help || !options.word1) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    let result;
    try {
        if (options.word2) {
            // Two-word mode
            result = analyzeWordPair(options.word1, options.word2, options);
        } else {
            // Single-word mode
            result = analyzeCooccurrences(options.word1, options);
        }
    } catch (error) {
        console.error(`Analysis error: ${error.message}`);
        process.exit(1);
    }

    // Output
    if (options.format === 'json') {
        formatJson(result, options);
    } else if (options.word2) {
        formatWordPairText(result, options);
    } else {
        formatSingleWordText(result, options);
    }
}

// Export for testing
export {
    parseArgs,
    parseRange,
    isAramaicVerse,
    isStopword,
    analyzeCooccurrences,
    analyzeWordPair,
    STOPWORDS,
    SECTION_NAMES,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
