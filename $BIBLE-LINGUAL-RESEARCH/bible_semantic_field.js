#!/usr/bin/env node
'use strict';

const usage = `
bible_semantic_field - Map semantic relationships around a concept

INTENT/GOAL:
    Build a "conceptual map" around a word or concept. While bible_cooccurrences
    finds direct associations, this tool explores deeper: it finds words that
    share similar contexts even if they don't appear in the same verses.

    Semantic fields reveal how ancient Hebrews categorized reality - which
    concepts belonged together in their worldview. This is crucial for
    understanding the metaphorical mappings in allegorical interpretation.

SYNTAX:
    node bible_semantic_field.js <concept> [options]

CONCEPT FORMAT:
    Same as bible_search.js:
    - "מים"         Word
    - "<4325>"      Strong's number
    - "<מים>"       All Strong's for root

OPTIONS:
    --depth=N           How many levels of association (default: 1)
                        1 = direct co-occurrences
                        2 = co-occurrences of co-occurrences
    --min-strength=N    Minimum association strength (0-1, default: 0.05)
    --top=N             Maximum associations per depth level (default: 20)
    --category=CAT      Focus on category: noun, verb, all (default: all)
    --show-examples=N   Show N examples for key relationships
    --range=RANGE       Limit to specific range
    --include-aramaic   Include Aramaic sections
    --no-points         Remove nikud from output
    --format=FORMAT     Output format: "text" (default), "json", "graph"

EXAMPLES:
    # Map the semantic field of "מים" (water)
    node bible_semantic_field.js "<מים>"

    # Explore with depth 2 (associations of associations)
    node bible_semantic_field.js "<אור>" --depth=2

    # Focus on verbs related to a concept
    node bible_semantic_field.js "מלך" --category=verb

    # High-strength associations only
    node bible_semantic_field.js "<ברית>" --min-strength=0.2

GRAPH FORMAT:
    The "graph" format outputs DOT notation for visualization:

        digraph semantic_field {
          "מים" -> "ארץ" [weight=0.85];
          "מים" -> "שמים" [weight=0.72];
          ...
        }

ASSOCIATION STRENGTH:
    Strength is calculated using normalized PMI (Pointwise Mutual Information):
    - How often words appear together vs. how often by chance
    - Normalized to 0-1 scale
    - High strength = distinctive, meaningful association

NOTES:
    - Computationally intensive for depth > 1
    - Aramaic sections excluded by default
`;

import * as bible from './bible-utils.js';
import {
    STOPWORDS,
    SECTION_NAMES,
    isAramaicVerse,
    isStopword,
    parseRange,
} from './bible-utils.js';

// ============================================================================
// Constants
// ============================================================================

// Category aliases
const CATEGORY_ALIASES = {
    'noun': 'Noun',
    'verb': 'Verb',
    'adj': 'Adjective',
    'adjective': 'Adjective',
    'name': 'Name',
    'all': null,
};

// ============================================================================
// Argument Parsing
// ============================================================================

function parseArgs(args) {
    const options = {
        concept: null,
        depth: 1,
        minStrength: 0.05,
        top: 20,
        category: null,
        showExamples: 0,
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
        } else if (arg.startsWith('--depth=')) {
            options.depth = parseInt(arg.substring(8), 10);
        } else if (arg.startsWith('--min-strength=')) {
            options.minStrength = parseFloat(arg.substring(15));
        } else if (arg.startsWith('--top=')) {
            options.top = parseInt(arg.substring(6), 10);
        } else if (arg.startsWith('--category=')) {
            const cat = arg.substring(11).toLowerCase();
            options.category = CATEGORY_ALIASES[cat] !== undefined ? CATEGORY_ALIASES[cat] : cat;
        } else if (arg.startsWith('--show-examples=')) {
            options.showExamples = parseInt(arg.substring(16), 10);
        } else if (arg.startsWith('--range=')) {
            options.range = arg.substring(8);
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
        } else if (arg === '--no-points') {
            options.noPoints = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (!arg.startsWith('-')) {
            options.concept = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json', 'graph'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text, json, or graph.`);
    }

    if (options.depth < 1 || options.depth > 3) {
        throw new Error(`Invalid depth: ${options.depth}. Must be 1-3.`);
    }

    return options;
}

// ============================================================================
// Semantic Field Analysis
// ============================================================================

// Cache for word frequencies
let _wordFrequencies = null;
let _totalWords = 0;

/**
 * Build word frequency map
 */
function buildWordFrequencies(options) {
    if (_wordFrequencies) return { frequencies: _wordFrequencies, total: _totalWords };

    const rangeFilter = parseRange(options.range);
    const frequencies = new Map();
    let total = 0;

    const allVerses = bible.getAllVerses();

    for (const verse of allVerses) {
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        for (let i = 0; i < verse.words.length; i++) {
            const word = verse.words[i];
            if (isStopword(word)) continue;

            const key = bible.makeSearchable(word);
            frequencies.set(key, (frequencies.get(key) || 0) + 1);
            total++;
        }
    }

    _wordFrequencies = frequencies;
    _totalWords = total;
    return { frequencies, total };
}

/**
 * Calculate normalized PMI (association strength)
 */
function calculatePMI(cooccurCount, word1Count, word2Count, totalVerses) {
    if (cooccurCount === 0 || word1Count === 0 || word2Count === 0) return 0;

    // P(x,y) = cooccurrences / total possible pairs
    // P(x) = word1 verses / total verses
    // P(y) = word2 verses / total verses
    // PMI = log2(P(x,y) / (P(x) * P(y)))

    const pXY = cooccurCount / totalVerses;
    const pX = word1Count / totalVerses;
    const pY = word2Count / totalVerses;

    if (pX * pY === 0) return 0;

    const pmi = Math.log2(pXY / (pX * pY));

    // Normalize to 0-1 using -log2(P(x,y)) as max possible
    // Simplified: use a sigmoid-like normalization
    return Math.max(0, Math.min(1, (pmi + 5) / 10));
}

/**
 * @typedef {Object} Association
 * @property {string} word - The associated word
 * @property {string} searchable - Normalized form
 * @property {number} strength - Association strength (0-1)
 * @property {number} cooccurrences - Raw co-occurrence count
 * @property {number} [strongNumber] - Strong's number if available
 * @property {string} [type] - Word type
 * @property {string} [via] - For depth 2+, which word this came through
 * @property {Object[]} [examples] - Example verses
 */

/**
 * Find associations for a query at depth 1
 */
function findDirectAssociations(query, options) {
    const searchResult = bible.search(query, { maxResults: 10000 });
    const rangeFilter = parseRange(options.range);

    // Count verse occurrences and co-occurrences
    const cooccurrenceCounts = new Map();
    const matchedLocations = new Set();
    let queryVerseCount = 0;

    // Track query Strong's numbers for later lookup
    const queryStrongs = new Set(searchResult.strongMatches.map(s => s.strongNumber));

    for (const match of searchResult.matches) {
        const verse = match.verse;

        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        if (matchedLocations.has(verse.location)) continue;
        matchedLocations.add(verse.location);
        queryVerseCount++;

        const matchedIndexes = new Set(match.matchedWordIndexes);

        for (let i = 0; i < verse.words.length; i++) {
            if (matchedIndexes.has(i)) continue;

            const word = verse.words[i];
            const strongNum = verse.strongs[i];

            if (isStopword(word)) continue;

            // Skip if same Strong's number as query
            if (strongNum > 0 && queryStrongs.has(strongNum)) continue;

            // Apply category filter
            if (options.category && strongNum > 0) {
                const info = bible.getStrongInfo(strongNum);
                if (info && info.typeEnglish !== options.category) continue;
            }

            const key = bible.makeSearchable(word);

            if (!cooccurrenceCounts.has(key)) {
                cooccurrenceCounts.set(key, {
                    word: bible.removeTeamim(word),
                    searchable: key,
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
                });
            }
        }
    }

    // Get total verses for PMI calculation
    const allVerses = bible.getAllVerses();
    let totalVerses = 0;
    for (const verse of allVerses) {
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;
        totalVerses++;
    }

    // Get word frequencies for associated words
    const wordVerseCounts = new Map();
    for (const verse of allVerses) {
        if (rangeFilter) {
            if (!rangeFilter.books.has(verse.book)) continue;
            if (!rangeFilter.chapterFilter(verse.book, verse.chapterIndex)) continue;
        }
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        const seenInVerse = new Set();
        for (const word of verse.words) {
            if (isStopword(word)) continue;
            const key = bible.makeSearchable(word);
            if (!seenInVerse.has(key)) {
                seenInVerse.add(key);
                wordVerseCounts.set(key, (wordVerseCounts.get(key) || 0) + 1);
            }
        }
    }

    // Calculate association strength
    const associations = [];

    for (const [key, data] of cooccurrenceCounts) {
        const word2Count = wordVerseCounts.get(key) || 1;
        const strength = calculatePMI(data.count, queryVerseCount, word2Count, totalVerses);

        if (strength < options.minStrength) continue;

        const assoc = {
            word: data.word,
            searchable: data.searchable,
            strength: parseFloat(strength.toFixed(3)),
            cooccurrences: data.count,
        };

        if (data.strongSet.size > 0) {
            assoc.strongNumbers = [...data.strongSet];
            // Get type from first Strong's number
            const firstStrong = [...data.strongSet][0];
            const info = bible.getStrongInfo(firstStrong);
            if (info) {
                assoc.type = info.typeEnglish;
            }
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

            assoc.examples = selectedExamples;
        }

        associations.push(assoc);
    }

    // Sort by strength descending
    associations.sort((a, b) => b.strength - a.strength);

    return {
        associations: associations.slice(0, options.top),
        queryVerseCount,
        totalVerses,
    };
}

/**
 * Build semantic field with specified depth
 */
function buildSemanticField(concept, options) {
    // Get depth 1 associations
    const depth1Result = findDirectAssociations(concept, options);

    const result = {
        concept,
        strongMatches: bible.search(concept, { maxResults: 1 }).strongMatches,
        queryVerseCount: depth1Result.queryVerseCount,
        totalVerses: depth1Result.totalVerses,
        depth1: depth1Result.associations,
    };

    // Expand to depth 2 if requested
    if (options.depth >= 2 && depth1Result.associations.length > 0) {
        const depth2Associations = [];
        const seenWords = new Set([bible.makeSearchable(concept)]);

        // Add depth 1 words to seen set
        for (const assoc of depth1Result.associations) {
            seenWords.add(assoc.searchable);
        }

        // For top depth 1 associations, find their associations
        const depth1ToExpand = depth1Result.associations.slice(0, 10);

        for (const d1Assoc of depth1ToExpand) {
            const d2Result = findDirectAssociations(d1Assoc.word, {
                ...options,
                depth: 1,
                top: 10,
            });

            for (const d2Assoc of d2Result.associations) {
                if (seenWords.has(d2Assoc.searchable)) continue;

                // Combine strength: strength through path
                const combinedStrength = d1Assoc.strength * d2Assoc.strength;
                if (combinedStrength < options.minStrength) continue;

                depth2Associations.push({
                    ...d2Assoc,
                    strength: parseFloat(combinedStrength.toFixed(3)),
                    via: d1Assoc.word,
                });
            }
        }

        // Sort and deduplicate
        depth2Associations.sort((a, b) => b.strength - a.strength);
        const uniqueDepth2 = [];
        const seenDepth2 = new Set();
        for (const assoc of depth2Associations) {
            if (!seenDepth2.has(assoc.searchable)) {
                seenDepth2.add(assoc.searchable);
                uniqueDepth2.push(assoc);
            }
        }

        result.depth2 = uniqueDepth2.slice(0, options.top);
    }

    return result;
}

// ============================================================================
// Output Formatting
// ============================================================================

function formatWord(word, noPoints) {
    return noPoints ? bible.removeNikud(word) : word;
}

function formatText(result, options) {
    const lines = [];

    // Header
    let header = `Semantic field around "${result.concept}"`;
    if (result.strongMatches.length > 0) {
        const strongs = result.strongMatches.slice(0, 3)
            .map(s => `H${s.strongNumber}`)
            .join(', ');
        header += ` (${strongs})`;
    }
    lines.push(header);
    lines.push(`Analyzed ${result.queryVerseCount} verses`);
    lines.push('');

    if (result.depth1.length === 0) {
        lines.push('No significant associations found.');
        console.log(lines.join('\n'));
        return;
    }

    // Depth 1
    lines.push('DIRECT ASSOCIATIONS (depth 1):');
    lines.push('┌' + '─'.repeat(60));

    const maxWordLen = Math.max(...result.depth1.map(a =>
        formatWord(a.word, options.noPoints).length));

    for (const assoc of result.depth1) {
        const word = formatWord(assoc.word, options.noPoints);
        const paddedWord = word.padStart(maxWordLen);
        const strengthBar = '█'.repeat(Math.round(assoc.strength * 20));

        let line = `│  ${paddedWord}  ${strengthBar.padEnd(20)}  ${(assoc.strength * 100).toFixed(0)}%`;
        if (assoc.type) {
            line += `  (${assoc.type})`;
        }
        lines.push(line);

        if (assoc.examples && assoc.examples.length > 0) {
            for (const ex of assoc.examples) {
                lines.push(`│      (${ex.location}) ${ex.text.substring(0, 50)}...`);
            }
        }
    }

    lines.push('└' + '─'.repeat(60));

    // Depth 2
    if (result.depth2 && result.depth2.length > 0) {
        lines.push('');
        lines.push('EXTENDED NETWORK (depth 2):');
        lines.push('┌' + '─'.repeat(60));

        // Group by "via" word
        const byVia = new Map();
        for (const assoc of result.depth2) {
            if (!byVia.has(assoc.via)) {
                byVia.set(assoc.via, []);
            }
            byVia.get(assoc.via).push(assoc);
        }

        for (const [via, assocs] of byVia) {
            lines.push(`│  Via ${formatWord(via, options.noPoints)}:`);
            for (const assoc of assocs.slice(0, 5)) {
                const word = formatWord(assoc.word, options.noPoints);
                lines.push(`│    ${word}  (${(assoc.strength * 100).toFixed(0)}%)`);
            }
        }

        lines.push('└' + '─'.repeat(60));
    }

    console.log(lines.join('\n'));
}

function formatGraph(result, options) {
    const lines = [];
    lines.push('digraph semantic_field {');
    lines.push('  rankdir=LR;');
    lines.push(`  "${result.concept}" [shape=box, style=filled, fillcolor=lightblue];`);

    for (const assoc of result.depth1) {
        const word = formatWord(assoc.word, options.noPoints);
        const weight = (assoc.strength * 100).toFixed(0);
        lines.push(`  "${result.concept}" -> "${word}" [label="${weight}%", weight=${weight}];`);
    }

    if (result.depth2) {
        for (const assoc of result.depth2) {
            const word = formatWord(assoc.word, options.noPoints);
            const via = formatWord(assoc.via, options.noPoints);
            const weight = (assoc.strength * 100).toFixed(0);
            lines.push(`  "${via}" -> "${word}" [label="${weight}%", weight=${weight}, style=dashed];`);
        }
    }

    lines.push('}');
    console.log(lines.join('\n'));
}

function formatJson(result, options) {
    const output = { ...result };

    if (options.noPoints) {
        if (output.depth1) {
            output.depth1 = output.depth1.map(a => ({ ...a, word: bible.removeNikud(a.word) }));
        }
        if (output.depth2) {
            output.depth2 = output.depth2.map(a => ({
                ...a,
                word: bible.removeNikud(a.word),
                via: bible.removeNikud(a.via),
            }));
        }
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

    if (options.help || !options.concept) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    let result;
    try {
        result = buildSemanticField(options.concept, options);
    } catch (error) {
        console.error(`Analysis error: ${error.message}`);
        process.exit(1);
    }

    switch (options.format) {
        case 'json':
            formatJson(result, options);
            break;
        case 'graph':
            formatGraph(result, options);
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
    isAramaicVerse,
    isStopword,
    calculatePMI,
    findDirectAssociations,
    buildSemanticField,
    STOPWORDS,
    CATEGORY_ALIASES,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
