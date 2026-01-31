#!/usr/bin/env node
'use strict';

const usage = `
bible_find_parallels - Find verses with similar wording or structure

INTENT/GOAL:
    Discover verses that echo each other - parallel passages that express
    similar ideas using related vocabulary. Biblical authors often quoted,
    alluded to, or reworked earlier passages. Finding these parallels:

    - Reveals intertextual relationships
    - Shows how concepts were expressed differently across contexts
    - Identifies formulaic phrases and patterns
    - Helps understand word meaning through parallel substitution

SYNTAX:
    node bible_find_parallels.js <reference> [options]

OPTIONS:
    --min-similarity=N  Minimum similarity score (0-1, default: 0.3)
    --max-results=N     Maximum parallel verses to return (default: 20)
    --same-book         Only find parallels within the same book
    --different-book    Only find parallels in different books
    --highlight         Highlight matching words in output
    --range=RANGE       Limit search to specific range
    --include-aramaic   Include Aramaic sections
    --no-points         Remove nikud from output
    --format=FORMAT     Output format: "text" (default), "json"

EXAMPLES:
    # Find verses parallel to Genesis 1:1
    node bible_find_parallels.js "בראשית 1:1"

    # Find parallels in different books only
    node bible_find_parallels.js "דברים 6:4" --different-book

    # Higher similarity threshold
    node bible_find_parallels.js "תהילים 23:1" --min-similarity=0.4

SIMILARITY CALCULATION:
    Similarity is based on:
    - Shared Strong's numbers (semantic match)
    - Weighted by word significance (rare words count more)
    - Inverse document frequency weighting

    A score of 1.0 = identical verses
    A score of 0.3+ = some significant overlap

NOTES:
    - Similarity matching uses Strong's numbers, not just spelling
    - Common words (את, אשר) are weighted lower
    - Aramaic sections excluded by default
`;

import * as bible from './bible-utils.js';
import {
    STOPWORD_STRONGS,
    isAramaicVerse,
    parseRange,
    parseHebrewOrArabicNumber,
} from './bible-utils.js';

// ============================================================================
// Helpers
// ============================================================================

/**
 * Parse a verse reference like "בראשית 1:1" or "בראשית א:א"
 */
function parseReference(ref) {
    const match = ref.match(/^(\S+)\s+(\d+|[א-ת]+):(\d+|[א-ת]+)$/);
    if (!match) {
        throw new Error(`Invalid reference format: ${ref}. Use "book chapter:verse" (e.g., "בראשית 1:1")`);
    }

    const bookName = match[1];
    const chapterStr = match[2];
    const verseStr = match[3];

    const bookNames = bible.getBookNames();
    if (!bookNames.includes(bookName)) {
        throw new Error(`Unknown book: ${bookName}`);
    }

    // Parse chapter and verse (could be Arabic or Hebrew numerals)
    const chapter = parseHebrewOrArabicNumber(chapterStr);
    const verse = parseHebrewOrArabicNumber(verseStr);

    return { book: bookName, chapter, verse };
}

// Alias for backward compatibility with existing exports
const parseNumber = parseHebrewOrArabicNumber;

// ============================================================================
// Argument Parsing
// ============================================================================

function parseArgs(args) {
    const options = {
        reference: null,
        minSimilarity: 0.3,
        maxResults: 20,
        sameBook: false,
        differentBook: false,
        highlight: false,
        range: null,
        includeAramaic: false,
        noPoints: false,
        format: 'text',
        help: false,
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === '--help' || arg === '-h') {
            options.help = true;
        } else if (arg.startsWith('--min-similarity=')) {
            options.minSimilarity = parseFloat(arg.substring(17));
        } else if (arg.startsWith('--max-results=')) {
            options.maxResults = parseInt(arg.substring(14), 10);
        } else if (arg === '--same-book') {
            options.sameBook = true;
        } else if (arg === '--different-book') {
            options.differentBook = true;
        } else if (arg === '--highlight') {
            options.highlight = true;
        } else if (arg.startsWith('--range=')) {
            options.range = arg.substring(8);
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
        } else if (arg === '--no-points') {
            options.noPoints = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (!arg.startsWith('-')) {
            options.reference = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text or json.`);
    }

    if (options.sameBook && options.differentBook) {
        throw new Error('Cannot use both --same-book and --different-book');
    }

    return options;
}

// ============================================================================
// IDF (Inverse Document Frequency) Calculation
// ============================================================================

let _idfCache = null;
let _totalVerses = 0;

/**
 * Build IDF weights for all Strong's numbers
 * @returns {Map<number, number>}
 */
function buildIDF(options) {
    if (_idfCache) return { idf: _idfCache, total: _totalVerses };

    const docFreq = new Map(); // Strong's number -> number of verses containing it
    const allVerses = bible.getAllVerses();
    let total = 0;

    for (const verse of allVerses) {
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        total++;
        const seenStrongs = new Set();

        for (const strongNum of verse.strongs) {
            if (strongNum > 0 && !seenStrongs.has(strongNum)) {
                seenStrongs.add(strongNum);
                docFreq.set(strongNum, (docFreq.get(strongNum) || 0) + 1);
            }
        }
    }

    // Calculate IDF: log(total / docFreq)
    const idf = new Map();
    for (const [strong, freq] of docFreq) {
        idf.set(strong, Math.log(total / freq));
    }

    _idfCache = idf;
    _totalVerses = total;
    return { idf, total };
}

// ============================================================================
// Similarity Calculation
// ============================================================================

/**
 * Get verse signature - Strong's numbers with their positions
 */
function getVerseSignature(verse) {
    const strongs = [];
    for (let i = 0; i < verse.strongs.length; i++) {
        const strong = verse.strongs[i];
        if (strong > 0 && !STOPWORD_STRONGS.has(strong)) {
            strongs.push({ strong, position: i });
        }
    }
    return strongs;
}

/**
 * Calculate weighted Jaccard similarity between two verse signatures
 */
function calculateSimilarity(sig1, sig2, idf) {
    if (sig1.length === 0 || sig2.length === 0) return 0;

    const strongs1 = new Set(sig1.map(s => s.strong));
    const strongs2 = new Set(sig2.map(s => s.strong));

    // Find intersection and union
    const intersection = new Set([...strongs1].filter(s => strongs2.has(s)));
    const union = new Set([...strongs1, ...strongs2]);

    if (union.size === 0) return 0;

    // Weighted similarity using IDF
    let intersectionWeight = 0;
    let unionWeight = 0;

    for (const strong of intersection) {
        intersectionWeight += idf.get(strong) || 1;
    }

    for (const strong of union) {
        unionWeight += idf.get(strong) || 1;
    }

    if (unionWeight === 0) return 0;

    return intersectionWeight / unionWeight;
}

/**
 * Get shared Strong's numbers between two signatures
 */
function getSharedStrongs(sig1, sig2) {
    const strongs1 = new Set(sig1.map(s => s.strong));
    const strongs2 = new Set(sig2.map(s => s.strong));
    return [...strongs1].filter(s => strongs2.has(s));
}

// ============================================================================
// Parallel Finding
// ============================================================================

/**
 * Find a verse by reference
 */
function findVerse(book, chapter, verse) {
    const allVerses = bible.getAllVerses();

    for (const v of allVerses) {
        // chapterIndex and verseIndex are 0-based, chapter and verse are 1-based
        if (v.book === book && v.chapterIndex === chapter - 1 && v.verseIndex === verse - 1) {
            return v;
        }
    }

    throw new Error(`Verse not found: ${book} ${chapter}:${verse}`);
}

/**
 * Build inverted index: Strong's number -> list of verses
 */
function buildInvertedIndex(options) {
    const rangeFilter = parseRange(options.range);
    const index = new Map(); // Strong's number -> verse locations

    const allVerses = bible.getAllVerses();

    for (const verse of allVerses) {
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        const seenStrongs = new Set();

        for (const strongNum of verse.strongs) {
            if (strongNum > 0 && !STOPWORD_STRONGS.has(strongNum) && !seenStrongs.has(strongNum)) {
                seenStrongs.add(strongNum);

                if (!index.has(strongNum)) {
                    index.set(strongNum, []);
                }
                index.get(strongNum).push(verse.location);
            }
        }
    }

    return index;
}

/**
 * Find parallel verses
 */
function findParallels(sourceRef, options) {
    const { book, chapter, verse } = parseReference(sourceRef);
    const sourceVerse = findVerse(book, chapter, verse);

    if (!options.includeAramaic && isAramaicVerse(sourceVerse.book, sourceVerse.chapterIndex, sourceVerse.verseIndex)) {
        throw new Error('Source verse is in Aramaic section. Use --include-aramaic to search.');
    }

    const sourceSig = getVerseSignature(sourceVerse);

    if (sourceSig.length === 0) {
        return {
            source: {
                reference: sourceVerse.location,
                text: bible.removeTeamim(sourceVerse.text),
                strongs: sourceVerse.strongs.filter(s => s > 0),
            },
            parallels: [],
        };
    }

    // Build IDF weights
    const { idf } = buildIDF(options);

    // Build inverted index for candidate finding
    const invertedIndex = buildInvertedIndex(options);

    // Find candidate verses (share at least one Strong's number)
    const candidateLocations = new Set();
    const sourceStrongs = new Set(sourceSig.map(s => s.strong));

    for (const strong of sourceStrongs) {
        const locations = invertedIndex.get(strong) || [];
        for (const loc of locations) {
            if (loc !== sourceVerse.location) {
                candidateLocations.add(loc);
            }
        }
    }

    // Calculate similarity for all candidates
    const allVerses = bible.getAllVerses();
    const locationToVerse = new Map();
    for (const v of allVerses) {
        locationToVerse.set(v.location, v);
    }

    const results = [];

    for (const location of candidateLocations) {
        const candidate = locationToVerse.get(location);
        if (!candidate) continue;

        // Apply book filter
        if (options.sameBook && candidate.book !== book) continue;
        if (options.differentBook && candidate.book === book) continue;

        const candidateSig = getVerseSignature(candidate);
        const similarity = calculateSimilarity(sourceSig, candidateSig, idf);

        if (similarity >= options.minSimilarity) {
            const sharedStrongs = getSharedStrongs(sourceSig, candidateSig);

            // Get words for shared Strong's
            const sharedWords = [];
            for (const strong of sharedStrongs) {
                const info = bible.getStrongInfo(strong);
                if (info) {
                    sharedWords.push(info.word);
                }
            }

            results.push({
                reference: candidate.location,
                book: candidate.book,
                text: bible.removeTeamim(candidate.text),
                similarity: parseFloat(similarity.toFixed(3)),
                sharedStrongs,
                sharedWords,
                strongCount: candidate.strongs.filter(s => s > 0 && !STOPWORD_STRONGS.has(s)).length,
            });
        }
    }

    // Sort by similarity descending
    results.sort((a, b) => b.similarity - a.similarity);

    return {
        source: {
            reference: sourceVerse.location,
            book: sourceVerse.book,
            text: bible.removeTeamim(sourceVerse.text),
            strongs: sourceVerse.strongs.filter(s => s > 0 && !STOPWORD_STRONGS.has(s)),
        },
        parallels: results.slice(0, options.maxResults),
    };
}

// ============================================================================
// Output Formatting
// ============================================================================

function formatWord(word, noPoints) {
    return noPoints ? bible.removeNikud(word) : word;
}

function formatText(result, options) {
    const lines = [];

    // Source verse
    lines.push(`Parallels to ${result.source.reference}:`);
    lines.push(`"${formatWord(result.source.text, options.noPoints)}"`);
    lines.push('');

    if (result.parallels.length === 0) {
        lines.push('No significant parallels found.');
        console.log(lines.join('\n'));
        return;
    }

    lines.push(`Found ${result.parallels.length} parallel${result.parallels.length > 1 ? 's' : ''}:`);
    lines.push('');

    for (let i = 0; i < result.parallels.length; i++) {
        const p = result.parallels[i];
        lines.push(`${i + 1}. (${p.reference}) - Similarity: ${(p.similarity * 100).toFixed(0)}%`);

        let text = formatWord(p.text, options.noPoints);

        // Highlight shared words if requested
        if (options.highlight && p.sharedWords.length > 0) {
            for (const word of p.sharedWords) {
                const searchable = bible.removeNikud(word);
                // Simple highlight by surrounding with **
                const regex = new RegExp(`(${searchable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
                text = text.replace(regex, '**$1**');
            }
        }

        lines.push(`   "${text}"`);

        if (p.sharedWords.length > 0) {
            lines.push(`   Shared: ${p.sharedWords.slice(0, 5).join(', ')}${p.sharedWords.length > 5 ? '...' : ''}`);
        }

        lines.push('');
    }

    console.log(lines.join('\n'));
}

function formatJson(result, options) {
    const output = { ...result };

    if (options.noPoints) {
        output.source.text = bible.removeNikud(output.source.text);
        output.parallels = output.parallels.map(p => ({
            ...p,
            text: bible.removeNikud(p.text),
            sharedWords: p.sharedWords.map(w => bible.removeNikud(w)),
        }));
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

    if (options.help || !options.reference) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    let result;
    try {
        result = findParallels(options.reference, options);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    if (options.format === 'json') {
        formatJson(result, options);
    } else {
        formatText(result, options);
    }
}

// Export for testing
export {
    parseArgs,
    parseReference,
    parseRange,
    parseNumber,
    isAramaicVerse,
    buildIDF,
    getVerseSignature,
    calculateSimilarity,
    getSharedStrongs,
    findVerse,
    findParallels,
    STOPWORD_STRONGS,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
