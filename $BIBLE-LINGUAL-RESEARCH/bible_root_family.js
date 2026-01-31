#!/usr/bin/env node
'use strict';

const usage = `
bible_root_family - Explore word families derived from a Hebrew root

INTENT/GOAL:
    **THE KEY TOOL** for discovering ancient unified meanings that split into
    multiple modern/biblical usages. Hebrew words are built from consonantal
    roots, typically 3 letters (but sometimes 2 in proto-Semitic).

    By examining ALL words derived from a single root - verbs, nouns,
    adjectives - we can often discern a core meaning that unifies seemingly
    disparate definitions. This is essential for the allegorical interpretation
    methodology.

SYNTAX:
    node bible_root_family.js <root> [options]

ROOT FORMAT:
    3-letter root:
        "שמר"                   Standard trilateral root
        "ש.מ.ר"                 With dots (for clarity)

    2-letter root (proto-Semitic):
        "שב"                    Expands to all derived forms:
                                שב, נשב, ישב, שוב, שיב, שבה, שבב, שבשב
        "2שב2"                  Explicit 2-letter notation

OPTIONS:
    --type=TYPE             Filter by word type (verb, noun, etc.)
    --show-occurrences      Show occurrence count for each word
    --show-examples=N       Show N examples per Strong's number
    --phonetic              Include phonetically similar roots
    --include-aramaic       Include Aramaic forms
    --no-points             Remove nikud from output
    --format=FORMAT         Output format: "text" (default), "json", "tree"

EXAMPLES:
    # Explore the root א.ו.ר (light)
    node bible_root_family.js אור

    # Explore 2-letter proto-Semitic root שב (return/dwell)
    node bible_root_family.js שב

    # Filter to verbs only
    node bible_root_family.js מלך --type=verb

    # Include phonetically similar roots
    node bible_root_family.js אור --phonetic

    # Show occurrence counts and examples
    node bible_root_family.js אור --show-occurrences --show-examples=2

TREE FORMAT:
    The "tree" format shows hierarchical relationships:

        אור
        ├── Verb: אוֹר (H215) - to shine
        ├── Noun: אוֹר (H216) - light
        ├── Noun: אוּר (H217) - fire
        └── Name: אוּר (H218) - Ur

NOTES:
    - This tool is essential for the "allegorical dictionary" methodology
    - Finding unified ancient meanings requires examining ALL derivatives
    - Consider both semantic AND phonetic relationships
    - Aramaic cognates can illuminate Hebrew meanings
`;

import * as bible from './bible-utils.js';

// ============================================================================
// Constants
// ============================================================================

// Type name mappings (various forms -> canonical English)
const TYPE_ALIASES = {
    // English variations
    'verb': 'Verb',
    'noun': 'Noun',
    'name': 'Name',
    'adjective': 'Adjective',
    'adverb': 'Adverb',
    'pronoun': 'Pronoun',
    'preposition': 'Preposition',
    'interjection': 'Interjection',
    'conjunction': 'Conjunction',
    'derived-verb': 'Derived-Verb',
    // Hebrew variations
    'פועל': 'Verb',
    'שם': 'Noun',
    'שם עצם': 'Noun',
    'שם פרטי': 'Name',
    'שם תואר': 'Adjective',
};

// Type display order for organized output
const TYPE_ORDER = [
    'Verb',
    'Derived-Verb',
    'Noun',
    'Adjective',
    'Adverb',
    'Pronoun',
    'Preposition',
    'Conjunction',
    'Interjection',
    'Name',
];

// Guttural consonants (phonetically similar)
const GUTTURALS = new Set(['א', 'ה', 'ח', 'ע']);

// Consonant groups for phonetic similarity
const PHONETIC_GROUPS = [
    new Set(['ב', 'פ', 'ו']),      // Labials
    new Set(['ג', 'כ', 'ק']),      // Velars
    new Set(['ד', 'ת', 'ט']),      // Dentals
    new Set(['ז', 'ס', 'צ', 'שׂ']), // Sibilants
    new Set(['א', 'ה', 'ח', 'ע']), // Gutturals
    new Set(['נ', 'מ']),           // Nasals
];

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

// ============================================================================
// Root Normalization
// ============================================================================

/**
 * Normalize a Hebrew root - strip dots, nikud, handle 2xy2 notation
 * @param {string} input
 * @returns {{ root: string, is2Letter: boolean }}
 */
function normalizeRoot(input) {
    let root = input.trim();

    // Check for explicit 2-letter notation: 2שב2
    const twoLetterMatch = root.match(/^2(.{2})2$/);
    if (twoLetterMatch) {
        return { root: bible.removeNikud(twoLetterMatch[1]), is2Letter: true };
    }

    // Strip dots
    root = root.replace(/\./g, '');

    // Strip nikud
    root = bible.removeNikud(root);

    // Determine if 2-letter or 3-letter
    const is2Letter = root.length === 2;

    return { root, is2Letter };
}

/**
 * Expand a 2-letter proto-Semitic root to possible 3-letter forms
 * @param {string} root - 2-letter root
 * @returns {string[]} - Array of possible 3-letter roots
 */
function expand2LetterRoot(root) {
    if (root.length !== 2) return [root];

    const [c1, c2] = root;
    const expansions = [
        c1 + c2,             // Base: שב
        'נ' + c1 + c2,       // With נ prefix: נשב
        'י' + c1 + c2,       // With י prefix: ישב
        c1 + 'ו' + c2,       // With ו infix: שוב
        c1 + 'י' + c2,       // With י infix: שיב
        c1 + 'א' + c2,       // With א infix: שאב
        c1 + c2 + 'ה',       // With ה suffix: שבה
        c1 + c2 + 'א',       // With א suffix: שבא
        c1 + c2 + 'י',       // With י suffix: שבי
        c1 + c2 + 'ע',       // With ע suffix: שבע
        c1 + c2 + c2,        // Geminate: שבב
        c1 + c2 + 'ר',       // With ר suffix: שבר
        c1 + c2 + 'ת',       // With ת suffix: שבת
        c1 + c2 + 'ן',       // With ן suffix: שבן
        c1 + c2 + 'ל',       // With ל suffix: שבל
        c1 + c2 + 'נ',       // With נ suffix: שבנ
    ];

    // Remove duplicates
    return [...new Set(expansions)];
}

// ============================================================================
// Phonetic Similarity
// ============================================================================

/**
 * Find phonetically similar consonants
 * @param {string} consonant
 * @returns {string[]}
 */
function getPhoneticSimilar(consonant) {
    const similar = [consonant];
    for (const group of PHONETIC_GROUPS) {
        if (group.has(consonant)) {
            for (const c of group) {
                if (c !== consonant) similar.push(c);
            }
        }
    }
    return similar;
}

/**
 * Generate phonetically similar roots
 * @param {string} root - 3-letter root
 * @returns {string[]} - Array of similar roots
 */
function getPhoneticVariants(root) {
    if (root.length < 2) return [];

    const variants = new Set();
    const chars = [...root];

    // Substitute each position with similar consonants
    for (let i = 0; i < chars.length; i++) {
        const similar = getPhoneticSimilar(chars[i]);
        for (const s of similar) {
            if (s !== chars[i]) {
                const variant = [...chars];
                variant[i] = s;
                variants.add(variant.join(''));
            }
        }
    }

    return [...variants];
}

// ============================================================================
// Strong's Number Lookup
// ============================================================================

// Cache for occurrence counts
let _occurrenceCounts = null;

/**
 * Build occurrence counts for all Strong's numbers
 * @returns {Map<number, number>}
 */
function buildOccurrenceCounts() {
    if (_occurrenceCounts) return _occurrenceCounts;

    const allVerses = bible.getAllVerses();
    const counts = new Map();

    for (const verse of allVerses) {
        for (const strongNum of verse.strongs) {
            if (strongNum > 0) {
                counts.set(strongNum, (counts.get(strongNum) || 0) + 1);
            }
        }
    }

    _occurrenceCounts = counts;
    return counts;
}

/**
 * Get occurrence count for a Strong's number
 * @param {number} strongNumber
 * @returns {number}
 */
function getOccurrenceCount(strongNumber) {
    const counts = buildOccurrenceCounts();
    return counts.get(strongNumber) || 0;
}

/**
 * Find all Strong's numbers matching a root pattern
 * @param {string} root
 * @param {Object} options
 * @returns {Object[]}
 */
function findStrongsByRoot(root, options = {}) {
    const results = [];

    // Use bible.findStrongNumbers to search
    const matches = bible.findStrongNumbers(root);

    for (const { strongNumber, data } of matches) {
        // Apply type filter
        if (options.typeFilter) {
            const normalizedFilter = TYPE_ALIASES[options.typeFilter.toLowerCase()] || options.typeFilter;
            if (data.typeEnglish !== normalizedFilter) continue;
        }

        const entry = {
            strongNumber,
            word: data.word,
            searchable: data.searchable,
            type: data.type,
            typeEnglish: data.typeEnglish,
        };

        if (options.showOccurrences) {
            entry.occurrences = getOccurrenceCount(strongNumber);
        }

        if (options.showExamples > 0) {
            entry.examples = getExamples(strongNumber, options.showExamples);
        }

        // Collect unique forms found in text
        if (options.collectForms) {
            entry.forms = collectWordForms(strongNumber);
        }

        results.push(entry);
    }

    return results;
}

/**
 * Get example verses for a Strong's number
 * @param {number} strongNumber
 * @param {number} count
 * @returns {Object[]}
 */
function getExamples(strongNumber, count) {
    const searchResult = bible.search(`<${strongNumber}>`, { maxResults: count * 3 });

    const seenBooks = new Set();
    const examples = [];

    for (const match of searchResult.matches) {
        if (examples.length >= count) break;

        if (seenBooks.has(match.verse.book) && examples.length < count - 1) {
            continue;
        }

        seenBooks.add(match.verse.book);

        const matchedWords = match.matchedWordIndexes.map(i => match.verse.words[i]);

        examples.push({
            location: match.verse.location,
            text: bible.removeTeamim(match.verse.text),
            matchedWords: matchedWords.map(w => bible.removeTeamim(w)),
        });
    }

    // Fill remaining if needed
    if (examples.length < count) {
        for (const match of searchResult.matches) {
            if (examples.length >= count) break;
            if (examples.some(e => e.location === match.verse.location)) continue;

            const matchedWords = match.matchedWordIndexes.map(i => match.verse.words[i]);
            examples.push({
                location: match.verse.location,
                text: bible.removeTeamim(match.verse.text),
                matchedWords: matchedWords.map(w => bible.removeTeamim(w)),
            });
        }
    }

    return examples;
}

/**
 * Collect unique word forms for a Strong's number
 * @param {number} strongNumber
 * @param {number} maxSamples
 * @returns {string[]}
 */
function collectWordForms(strongNumber, maxSamples = 100) {
    const searchResult = bible.search(`<${strongNumber}>`, { maxResults: maxSamples });
    const forms = new Set();

    for (const match of searchResult.matches) {
        for (const idx of match.matchedWordIndexes) {
            const word = bible.removeTeamim(match.verse.words[idx]);
            forms.add(word);
        }
    }

    return [...forms].sort();
}

// ============================================================================
// Main Analysis Function
// ============================================================================

/**
 * @typedef {Object} RootFamilyResult
 * @property {string} root - The normalized root
 * @property {boolean} is2Letter - Whether it's a 2-letter proto-Semitic root
 * @property {string[]} [expansions] - 3-letter expansions (for 2-letter roots)
 * @property {Object.<string, Object[]>} family - Grouped by word type
 * @property {Object[]} [phoneticRelatives] - Phonetically similar roots
 * @property {number} totalStrongs - Total Strong's numbers found
 * @property {number} totalOccurrences - Total occurrences across all words
 */

/**
 * Analyze a root and find all related Strong's numbers
 * @param {string} input - Root to analyze
 * @param {Object} options
 * @returns {RootFamilyResult}
 */
function analyzeRootFamily(input, options = {}) {
    const { root, is2Letter } = normalizeRoot(input);

    const result = {
        root,
        is2Letter,
        family: {},
        totalStrongs: 0,
        totalOccurrences: 0,
    };

    // Get roots to search
    let searchRoots;
    if (is2Letter) {
        result.expansions = expand2LetterRoot(root);
        searchRoots = result.expansions;
    } else {
        searchRoots = [root];
    }

    // Collect all Strong's numbers
    const allEntries = [];
    const seenStrongs = new Set();

    for (const searchRoot of searchRoots) {
        const entries = findStrongsByRoot(searchRoot, {
            showOccurrences: options.showOccurrences,
            showExamples: options.showExamples,
            typeFilter: options.typeFilter,
            collectForms: options.format === 'tree',
        });

        for (const entry of entries) {
            if (!seenStrongs.has(entry.strongNumber)) {
                seenStrongs.add(entry.strongNumber);
                entry.matchedRoot = searchRoot;
                allEntries.push(entry);
            }
        }
    }

    // Sort by occurrence count (if available), then by Strong's number
    allEntries.sort((a, b) => {
        if (a.occurrences !== undefined && b.occurrences !== undefined) {
            if (b.occurrences !== a.occurrences) return b.occurrences - a.occurrences;
        }
        return a.strongNumber - b.strongNumber;
    });

    // Group by type
    for (const entry of allEntries) {
        const type = entry.typeEnglish || 'Other';
        if (!result.family[type]) {
            result.family[type] = [];
        }
        result.family[type].push(entry);
        result.totalStrongs++;
        if (entry.occurrences) {
            result.totalOccurrences += entry.occurrences;
        }
    }

    // Add phonetically similar roots
    if (options.phonetic && !is2Letter) {
        const phoneticRoots = getPhoneticVariants(root);
        const phoneticEntries = [];

        for (const pRoot of phoneticRoots) {
            const entries = findStrongsByRoot(pRoot, {
                showOccurrences: options.showOccurrences,
            });

            for (const entry of entries) {
                if (!seenStrongs.has(entry.strongNumber)) {
                    entry.relatedRoot = pRoot;
                    phoneticEntries.push(entry);
                }
            }
        }

        if (phoneticEntries.length > 0) {
            result.phoneticRelatives = phoneticEntries;
        }
    }

    return result;
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
        root: null,
        typeFilter: null,
        showOccurrences: false,
        showExamples: 0,
        phonetic: false,
        includeAramaic: false,
        noPoints: false,
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
        } else if (arg === '--phonetic') {
            options.phonetic = true;
        } else if (arg === '--include-aramaic') {
            options.includeAramaic = true;
        } else if (arg === '--no-points') {
            options.noPoints = true;
        } else if (arg.startsWith('--format=')) {
            options.format = arg.substring(9);
        } else if (!arg.startsWith('-')) {
            options.root = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json', 'tree'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text, json, or tree.`);
    }

    return options;
}

// ============================================================================
// Output Formatting
// ============================================================================

/**
 * Format a word with optional nikud removal
 * @param {string} word
 * @param {boolean} noPoints
 * @returns {string}
 */
function formatWord(word, noPoints) {
    return noPoints ? bible.removeNikud(word) : word;
}

/**
 * Format results as text
 * @param {RootFamilyResult} result
 * @param {Object} options
 */
function formatText(result, options) {
    const lines = [];

    // Header
    if (result.is2Letter) {
        lines.push(`Proto-Semitic root: ${result.root} (2-letter)`);
        lines.push(`Possible 3-letter expansions: ${result.expansions.join(', ')}`);
    } else {
        lines.push(`Root family: ${result.root.split('').join('.')}`);
    }

    lines.push('');

    if (result.totalStrongs === 0) {
        lines.push('No Strong\'s numbers found for this root.');
        console.log(lines.join('\n'));
        return;
    }

    lines.push(`Found ${result.totalStrongs} Strong's number${result.totalStrongs > 1 ? 's' : ''}`);
    if (result.totalOccurrences > 0) {
        lines.push(`Total occurrences: ${result.totalOccurrences}`);
    }
    lines.push('');

    // Output by type in defined order
    const orderedTypes = TYPE_ORDER.filter(t => result.family[t]);
    const otherTypes = Object.keys(result.family).filter(t => !TYPE_ORDER.includes(t));

    for (const type of [...orderedTypes, ...otherTypes]) {
        const entries = result.family[type];
        if (!entries || entries.length === 0) continue;

        lines.push(`┌─ ${type.toUpperCase()} ${'─'.repeat(50 - type.length)}`);

        for (const entry of entries) {
            const word = formatWord(entry.word, options.noPoints);
            let line = `│  H${entry.strongNumber}: ${word}`;
            if (entry.type && entry.type !== entry.typeEnglish) {
                line += ` (${entry.type})`;
            }
            lines.push(line);

            if (result.is2Letter && entry.matchedRoot) {
                lines.push(`│      Matched root: ${entry.matchedRoot}`);
            }

            if (entry.occurrences !== undefined) {
                lines.push(`│      Occurrences: ${entry.occurrences}`);
            }

            if (entry.examples && entry.examples.length > 0) {
                lines.push(`│      Examples:`);
                for (const ex of entry.examples) {
                    lines.push(`│        (${ex.location}) ${ex.matchedWords.join(' ')}`);
                }
            }

            lines.push('│');
        }
    }

    lines.push(`└${'─'.repeat(55)}`);

    // Phonetic relatives
    if (result.phoneticRelatives && result.phoneticRelatives.length > 0) {
        lines.push('');
        lines.push('Phonetically related roots:');

        // Group by root
        const byRoot = {};
        for (const entry of result.phoneticRelatives) {
            if (!byRoot[entry.relatedRoot]) {
                byRoot[entry.relatedRoot] = [];
            }
            byRoot[entry.relatedRoot].push(entry);
        }

        for (const [pRoot, entries] of Object.entries(byRoot)) {
            lines.push(`  ${pRoot}:`);
            for (const entry of entries) {
                const word = formatWord(entry.word, options.noPoints);
                let line = `    H${entry.strongNumber}: ${word} (${entry.typeEnglish})`;
                if (entry.occurrences !== undefined) {
                    line += ` - ${entry.occurrences} occ.`;
                }
                lines.push(line);
            }
        }
    }

    console.log(lines.join('\n'));
}

/**
 * Format results as tree
 * @param {RootFamilyResult} result
 * @param {Object} options
 */
function formatTree(result, options) {
    const lines = [];

    // Root
    lines.push(result.root);

    const orderedTypes = TYPE_ORDER.filter(t => result.family[t]);
    const otherTypes = Object.keys(result.family).filter(t => !TYPE_ORDER.includes(t));
    const allTypes = [...orderedTypes, ...otherTypes];

    for (let i = 0; i < allTypes.length; i++) {
        const type = allTypes[i];
        const entries = result.family[type];
        if (!entries || entries.length === 0) continue;

        const isLastType = i === allTypes.length - 1;
        const typePrefix = isLastType ? '└── ' : '├── ';
        const childPrefix = isLastType ? '    ' : '│   ';

        lines.push(`${typePrefix}${type}:`);

        for (let j = 0; j < entries.length; j++) {
            const entry = entries[j];
            const isLastEntry = j === entries.length - 1;
            const entryPrefix = childPrefix + (isLastEntry ? '└── ' : '├── ');

            const word = formatWord(entry.word, options.noPoints);
            let line = `${entryPrefix}${word} (H${entry.strongNumber})`;
            if (entry.occurrences !== undefined) {
                line += ` [${entry.occurrences}]`;
            }
            lines.push(line);

            // Show forms if available
            if (entry.forms && entry.forms.length > 0) {
                const formsPrefix = childPrefix + (isLastEntry ? '    ' : '│   ');
                const formsSample = entry.forms.slice(0, 5);
                if (entry.forms.length > 5) {
                    formsSample.push('...');
                }
                lines.push(`${formsPrefix}Forms: ${formsSample.join(', ')}`);
            }
        }
    }

    console.log(lines.join('\n'));
}

/**
 * Format results as JSON
 * @param {RootFamilyResult} result
 * @param {Object} options
 */
function formatJson(result, options) {
    const output = {
        root: result.root,
        is2Letter: result.is2Letter,
        totalStrongs: result.totalStrongs,
        totalOccurrences: result.totalOccurrences,
    };

    if (result.is2Letter) {
        output.expansions = result.expansions;
    }

    output.family = {};

    for (const [type, entries] of Object.entries(result.family)) {
        output.family[type] = entries.map(entry => {
            const e = {
                strongNumber: entry.strongNumber,
                word: options.noPoints ? bible.removeNikud(entry.word) : entry.word,
                searchable: entry.searchable,
            };
            if (entry.occurrences !== undefined) {
                e.occurrences = entry.occurrences;
            }
            if (entry.matchedRoot) {
                e.matchedRoot = entry.matchedRoot;
            }
            if (entry.examples) {
                e.examples = entry.examples;
            }
            if (entry.forms) {
                e.forms = entry.forms;
            }
            return e;
        });
    }

    if (result.phoneticRelatives) {
        output.phoneticRelatives = result.phoneticRelatives.map(entry => ({
            relatedRoot: entry.relatedRoot,
            strongNumber: entry.strongNumber,
            word: options.noPoints ? bible.removeNikud(entry.word) : entry.word,
            typeEnglish: entry.typeEnglish,
            occurrences: entry.occurrences,
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

    if (options.help || !options.root) {
        console.log(usage);
        process.exit(options.help ? 0 : 1);
    }

    let result;
    try {
        result = analyzeRootFamily(options.root, options);
    } catch (error) {
        console.error(`Analysis error: ${error.message}`);
        process.exit(1);
    }

    switch (options.format) {
        case 'json':
            formatJson(result, options);
            break;
        case 'tree':
            formatTree(result, options);
            break;
        case 'text':
        default:
            formatText(result, options);
            break;
    }
}

// Export for testing
export {
    normalizeRoot,
    expand2LetterRoot,
    getPhoneticVariants,
    findStrongsByRoot,
    analyzeRootFamily,
    parseArgs,
    getOccurrenceCount,
    getExamples,
    collectWordForms,
    TYPE_ALIASES,
    TYPE_ORDER,
    PHONETIC_GROUPS,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
