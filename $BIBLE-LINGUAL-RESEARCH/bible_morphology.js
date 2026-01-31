#!/usr/bin/env node
'use strict';

const usage = `
bible_morphology - Analyze grammatical forms and patterns of a word

INTENT/GOAL:
    Examine the morphological (grammatical) forms of a word as it appears
    in the Bible. This reveals:

    - Which conjugations/declensions are most common
    - Grammatical patterns (e.g., verbs in imperative, nouns with suffix)
    - Usage patterns that illuminate meaning
    - Binyan (verb pattern) distribution for verbs

    Morphological analysis helps understand HOW a word is used, not just
    WHERE it appears.

SYNTAX:
    node bible_morphology.js <strong-number> [options]
    node bible_morphology.js "<root>" [options]

OPTIONS:
    --group-by=MODE     Grouping: "form" (default), "binyan", "prefix", "suffix"
    --show-examples=N   Show N examples per form (default: 2)
    --range=RANGE       Limit to specific range
    --include-aramaic   Include Aramaic sections
    --no-points         Remove nikud from output
    --format=FORMAT     Output format: "text" (default), "json"

EXAMPLES:
    # Analyze verb "שמר" (to guard/keep) by Strong's number
    node bible_morphology.js 8104

    # Analyze by root (finds all Strong's for that root)
    node bible_morphology.js "<שמר>"

    # Group by prefix patterns
    node bible_morphology.js 8104 --group-by=prefix

    # Group by suffix patterns (for nouns with possessives)
    node bible_morphology.js 1285 --group-by=suffix

MORPHOLOGICAL PATTERNS DETECTED:

    PREFIXES (verbs):
    - ו (vav) - conjunctive/conversive
    - ל (lamed) - infinitive construct
    - ה (he) - definite article OR hiphil/niphal
    - י/ת/א/נ - imperfect tense markers
    - מ (mem) - participle OR preposition

    SUFFIXES:
    - ים/ות - plural
    - ־ִי - 1st person possessive
    - ־ְךָ/־ְךְ - 2nd person possessive
    - ־וֹ/־הּ - 3rd person possessive
    - ־ָה - directional/locative
    - ־וּ - 3rd plural perfect

    FORM PATTERNS:
    - Infinitive: ל + root (לִשְׁמֹר)
    - Participle: often פֹּעֵל pattern
    - Perfect: typically CaCaC (שָׁמַר)
    - Imperfect: prefix + root (יִשְׁמֹר)

NOTES:
    - This tool detects patterns from spelling, not from tagged data
    - Accuracy is limited by ambiguous forms
    - Aramaic sections excluded by default
`;

import * as bible from './bible-utils.js';
import {
    SECTION_NAMES,
    isAramaicVerse,
} from './bible-utils.js';

// Hebrew letter categories for morphological detection
const LETTERS = {
    prefixes: new Set(['ו', 'ה', 'ל', 'ב', 'כ', 'מ', 'ש']),
    imperfectPrefixes: new Set(['י', 'ת', 'א', 'נ']),
    vav: 'ו',
    he: 'ה',
    lamed: 'ל',
    mem: 'מ',
    nun: 'נ',
    tav: 'ת',
};

// Suffix patterns (with nikud variations)
const SUFFIX_PATTERNS = {
    // Plural
    pluralMasc: /ים$/,
    pluralFem: /ות$/,
    dual: /יים$/,

    // Possessive suffixes (simplified - nikud may vary)
    poss1s: /[ִּ]?י$/,    // my
    poss2ms: /[ְ]?ךָ$/,   // your (m.s.)
    poss2fs: /[ְ]?ךְ$/,   // your (f.s.)
    poss3ms: /וֹ$/,      // his
    poss3fs: /הּ$/,       // her
    poss1p: /נוּ$/,       // our
    poss2mp: /כֶם$/,      // your (m.p.)
    poss2fp: /כֶן$/,      // your (f.p.)
    poss3mp: /[ָ]ם$/,    // their (m.)
    poss3fp: /[ָ]ן$/,    // their (f.)

    // Verbal suffixes
    perf3mp: /וּ$/,       // they (perfect)
    perf2ms: /תָּ$/,      // you (m.s. perfect)
    perf2fs: /תְּ$/,      // you (f.s. perfect)
    perf1s: /תִּי$/,      // I (perfect)
    imperf3fp: /נָה$/,   // they (f. imperfect)

    // Directional
    directional: /ָה$/,  // -ah (directional)
};

// ============================================================================
// Helpers
// ============================================================================

function parseRange(rangeStr) {
    if (!rangeStr) return null;

    if (SECTION_NAMES[rangeStr]) {
        return { books: new Set(SECTION_NAMES[rangeStr]) };
    }

    const bookNames = bible.getBookNames();
    if (bookNames.includes(rangeStr)) {
        return { books: new Set([rangeStr]) };
    }

    throw new Error(`Unknown range: ${rangeStr}`);
}

/**
 * Get the consonants only (remove nikud, teamim, and shin/sin dots)
 */
function getConsonants(word) {
    let result = bible.removeTeamim(bible.removeNikud(word));
    // Also remove shin dot (U+05C1) and sin dot (U+05C2)
    result = result.replace(/[\u05C1\u05C2]/g, '');
    return result;
}

/**
 * Get the first consonant (excluding vav conjunction if present)
 */
function getFirstConsonant(word) {
    const clean = getConsonants(word);
    if (clean.length === 0) return '';
    // Check if starts with vav + another letter - might be conjunction
    return clean[0];
}

/**
 * Detect prefix pattern
 */
function detectPrefix(word) {
    const clean = bible.removeTeamim(word);
    const consonants = getConsonants(word);

    if (consonants.length === 0) return { prefix: 'none', description: 'empty' };

    const first = consonants[0];
    const second = consonants.length > 1 ? consonants[1] : '';

    // Check for common prefix combinations
    const prefixes = [];

    // Vav at start
    if (first === 'ו') {
        prefixes.push('ו');
        // Check what follows
        if (LETTERS.imperfectPrefixes.has(second)) {
            prefixes.push(second);
            return { prefix: prefixes.join('+'), description: 'vav + imperfect', isImperfect: true };
        }
        if (second === 'ה') {
            return { prefix: 'ו+ה', description: 'vav + article/hiphil' };
        }
        if (second === 'ל') {
            return { prefix: 'ו+ל', description: 'vav + infinitive', isInfinitive: true };
        }
        if (second === 'מ') {
            return { prefix: 'ו+מ', description: 'vav + participle/preposition' };
        }
        return { prefix: 'ו', description: 'vav conjunctive' };
    }

    // Imperfect prefixes
    if (LETTERS.imperfectPrefixes.has(first)) {
        return { prefix: first, description: 'imperfect', isImperfect: true };
    }

    // Lamed prefix (infinitive)
    if (first === 'ל') {
        return { prefix: 'ל', description: 'infinitive', isInfinitive: true };
    }

    // He prefix (article or hiphil)
    if (first === 'ה') {
        // Check for patach under he (article) vs other vowels
        if (clean[0] === 'ה' && clean.length > 1) {
            const afterHe = clean[1];
            // Dagesh after he often indicates article
            return { prefix: 'ה', description: 'article/hiphil' };
        }
        return { prefix: 'ה', description: 'article/hiphil' };
    }

    // Mem prefix (participle or preposition)
    if (first === 'מ') {
        return { prefix: 'מ', description: 'participle/preposition' };
    }

    // Bet/Kaf prefixes (prepositions)
    if (first === 'ב') {
        return { prefix: 'ב', description: 'preposition "in"' };
    }
    if (first === 'כ') {
        return { prefix: 'כ', description: 'preposition "like"' };
    }
    // Note: ש as prefix ("that") is rare and hard to distinguish from root
    // We don't detect it as a prefix by default

    return { prefix: 'none', description: 'no prefix' };
}

/**
 * Detect suffix pattern
 */
function detectSuffix(word) {
    const clean = bible.removeTeamim(word);
    const consonants = getConsonants(word);

    // Check possessive suffixes first (more specific)
    if (/נוּ$/.test(clean)) {
        return { suffix: 'נוּ', description: '1st plural possessive (our)', isPossessive: true };
    }
    if (/כֶם$/.test(clean)) {
        return { suffix: 'כֶם', description: '2nd masc. plural possessive (your)', isPossessive: true };
    }
    if (/כֶן$/.test(clean)) {
        return { suffix: 'כֶן', description: '2nd fem. plural possessive (your)', isPossessive: true };
    }
    if (/תִּי$/.test(clean)) {
        return { suffix: 'תִּי', description: '1st sing. perfect (I)', isVerbal: true };
    }
    if (/תָּ$/.test(clean)) {
        return { suffix: 'תָּ', description: '2nd masc. sing. perfect (you)', isVerbal: true };
    }
    if (/תְּ$/.test(clean)) {
        return { suffix: 'תְּ', description: '2nd fem. sing. perfect (you)', isVerbal: true };
    }
    if (/נָה$/.test(clean)) {
        return { suffix: 'נָה', description: '3rd fem. plural', isVerbal: true };
    }

    // Plural endings
    if (/ים$/.test(consonants)) {
        return { suffix: 'ים', description: 'masc. plural', isPlural: true };
    }
    if (/ות$/.test(consonants)) {
        return { suffix: 'ות', description: 'fem. plural', isPlural: true };
    }
    if (/יים$/.test(consonants)) {
        return { suffix: 'יים', description: 'dual', isDual: true };
    }

    // Simple possessives (check consonants)
    if (/הּ$/.test(clean)) {
        return { suffix: 'הּ', description: '3rd fem. sing. possessive (her)', isPossessive: true };
    }
    if (/וֹ$/.test(clean)) {
        return { suffix: 'וֹ', description: '3rd masc. sing. possessive (his)', isPossessive: true };
    }
    if (/וּ$/.test(clean)) {
        return { suffix: 'וּ', description: '3rd plural perfect (they)', isVerbal: true };
    }

    // Check for directional ־ָה (ending with qamats-he but not possessive)
    if (/ָה$/.test(clean) && !/הּ$/.test(clean)) {
        return { suffix: 'ָה', description: 'directional', isDirectional: true };
    }

    return { suffix: 'none', description: 'no suffix' };
}

/**
 * Detect overall form
 */
function detectForm(word, strongInfo) {
    const prefix = detectPrefix(word);
    const suffix = detectSuffix(word);
    const isVerb = strongInfo?.typeEnglish === 'Verb';

    let form = 'base';
    let formDescription = 'base form';

    if (prefix.isInfinitive) {
        form = 'infinitive';
        formDescription = 'infinitive construct';
    } else if (prefix.isImperfect) {
        form = 'imperfect';
        formDescription = 'imperfect tense';
    } else if (suffix.isVerbal && suffix.suffix.startsWith('ת')) {
        form = 'perfect';
        formDescription = 'perfect tense (2nd person)';
    } else if (suffix.suffix === 'וּ' && isVerb) {
        form = 'perfect';
        formDescription = 'perfect tense (3rd plural)';
    } else if (prefix.prefix === 'מ' && isVerb) {
        form = 'participle';
        formDescription = 'participle';
    } else if (suffix.isPlural) {
        form = 'plural';
        formDescription = 'plural';
    } else if (suffix.isDual) {
        form = 'dual';
        formDescription = 'dual';
    } else if (suffix.isPossessive) {
        form = 'possessive';
        formDescription = `with possessive suffix (${suffix.description})`;
    }

    return {
        form,
        formDescription,
        prefix,
        suffix,
    };
}

// ============================================================================
// Argument Parsing
// ============================================================================

function parseArgs(args) {
    const options = {
        query: null,
        groupBy: 'form',
        showExamples: 2,
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
        } else if (arg.startsWith('--group-by=')) {
            options.groupBy = arg.substring(11);
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
            options.query = arg;
        } else {
            throw new Error(`Unknown option: ${arg}`);
        }
    }

    if (!['text', 'json'].includes(options.format)) {
        throw new Error(`Invalid format: ${options.format}. Must be text or json.`);
    }

    if (!['form', 'prefix', 'suffix', 'binyan'].includes(options.groupBy)) {
        throw new Error(`Invalid group-by: ${options.groupBy}. Must be form, prefix, suffix, or binyan.`);
    }

    return options;
}

// ============================================================================
// Core Analysis
// ============================================================================

/**
 * Find all occurrences of a Strong's number with their morphological forms
 */
function findOccurrences(strongNum, options) {
    const allVerses = bible.getAllVerses();
    const rangeFilter = parseRange(options.range);
    const occurrences = [];

    for (const verse of allVerses) {
        // Filter by range
        if (rangeFilter && !rangeFilter.books.has(verse.book)) continue;

        // Filter Aramaic
        if (!options.includeAramaic && isAramaicVerse(verse.book, verse.chapterIndex, verse.verseIndex)) continue;

        // Find matching words
        for (let i = 0; i < verse.strongs.length; i++) {
            if (verse.strongs[i] === strongNum) {
                occurrences.push({
                    word: verse.words[i],
                    location: verse.location,
                    book: verse.book,
                    context: verse.text,
                    position: i,
                });
            }
        }
    }

    return occurrences;
}

/**
 * Analyze morphological patterns
 */
function analyzeMorphology(query, options) {
    // Determine if query is Strong's number or root
    let strongNumbers = [];

    if (/^\d+$/.test(query)) {
        // It's a Strong's number
        strongNumbers.push(parseInt(query, 10));
    } else if (/^<.+>$/.test(query)) {
        // It's a root search
        const root = query.slice(1, -1);
        const strongs = bible.findStrongNumbers(root);
        strongNumbers = strongs.map(s => s.strongNumber);
    } else {
        throw new Error(`Invalid query: ${query}. Use Strong's number (e.g., 8104) or root (e.g., <שמר>)`);
    }

    if (strongNumbers.length === 0) {
        throw new Error(`No Strong's numbers found for: ${query}`);
    }

    // Get base word info
    const strongInfo = bible.getStrongInfo(strongNumbers[0]);
    if (!strongInfo) {
        throw new Error(`Strong's number not found: ${strongNumbers[0]}`);
    }

    // Collect all occurrences
    const allOccurrences = [];
    const strongsUsed = [];

    for (const num of strongNumbers) {
        const info = bible.getStrongInfo(num);
        if (info) {
            strongsUsed.push({ number: num, word: info.word, type: info.typeEnglish });
        }
        const occs = findOccurrences(num, options);
        for (const occ of occs) {
            occ.strongNumber = num;
            allOccurrences.push(occ);
        }
    }

    // Analyze each occurrence
    const analyzed = allOccurrences.map(occ => {
        const analysis = detectForm(occ.word, strongInfo);
        return {
            ...occ,
            ...analysis,
        };
    });

    // Group by requested mode
    const groups = new Map();

    for (const occ of analyzed) {
        let key;

        switch (options.groupBy) {
            case 'prefix':
                key = occ.prefix.prefix;
                break;
            case 'suffix':
                key = occ.suffix.suffix;
                break;
            case 'binyan':
                // Simplified binyan detection based on prefix patterns
                key = detectBinyan(occ);
                break;
            case 'form':
            default:
                key = occ.form;
                break;
        }

        if (!groups.has(key)) {
            groups.set(key, {
                key,
                description: getGroupDescription(key, options.groupBy, occ),
                occurrences: [],
            });
        }
        groups.get(key).occurrences.push(occ);
    }

    // Convert to sorted array
    const groupedArray = [...groups.values()].sort((a, b) => b.occurrences.length - a.occurrences.length);

    // Calculate stats and select examples
    for (const group of groupedArray) {
        group.count = group.occurrences.length;
        group.percentage = analyzed.length > 0 ? ((group.count / analyzed.length) * 100).toFixed(1) : 0;

        // Select examples (diverse by book)
        const booksSeen = new Set();
        group.examples = [];
        for (const occ of group.occurrences) {
            if (group.examples.length >= options.showExamples) break;
            if (!booksSeen.has(occ.book)) {
                booksSeen.add(occ.book);
                group.examples.push(occ);
            }
        }
        // If we need more examples, add from same books
        for (const occ of group.occurrences) {
            if (group.examples.length >= options.showExamples) break;
            if (!group.examples.includes(occ)) {
                group.examples.push(occ);
            }
        }
    }

    return {
        query,
        strongsUsed,
        baseWord: strongInfo.word,
        wordType: strongInfo.typeEnglish,
        totalOccurrences: analyzed.length,
        groupBy: options.groupBy,
        groups: groupedArray,
    };
}

/**
 * Detect binyan (verb pattern) from word form
 */
function detectBinyan(occurrence) {
    const consonants = getConsonants(occurrence.word);
    const clean = bible.removeTeamim(occurrence.word);

    // Check for Niphal (נ prefix in perfect, or vowel pattern)
    if (consonants.startsWith('נ') && consonants.length > 3) {
        return 'niphal';
    }

    // Check for Hitpael (הת prefix, or metathesis with sibilants: השת, הסת, הצת)
    // Metathesis: הִתְשַׁמֵּר → הִשְׁתַּמֵּר (ת moves after sibilant)
    if (consonants.startsWith('הת') || consonants.startsWith('ית')) {
        return 'hitpael';
    }
    // Hitpael with metathesis: ה + sibilant + ת pattern
    if (consonants.length >= 4 && consonants[0] === 'ה') {
        const second = consonants[1];
        const third = consonants[2];
        // Sibilants: שׁ, שׂ, ש, ס, צ, ז
        const sibilants = new Set(['ש', 'שׁ', 'שׂ', 'ס', 'צ', 'ז']);
        if ((sibilants.has(second) || second === 'ש') && third === 'ת') {
            return 'hitpael';
        }
    }

    // Check for Hiphil (ה prefix with hiriq pattern)
    if (consonants.startsWith('ה') && /ִ/.test(clean)) {
        return 'hiphil';
    }

    // Check for Piel/Pual (doubled middle consonant - hard to detect without vowels)
    // Look for dagesh forte which would indicate doubling
    if (/ּ/.test(clean) && consonants.length >= 3) {
        // Check position of dagesh
        const dageshPos = clean.indexOf('ּ');
        if (dageshPos > 1 && dageshPos < clean.length - 2) {
            // Dagesh might be in middle consonant
            return 'piel/pual';
        }
    }

    // Default to Qal
    return 'qal';
}

/**
 * Get description for a group key
 */
function getGroupDescription(key, groupBy, sampleOcc) {
    switch (groupBy) {
        case 'prefix':
            return sampleOcc?.prefix?.description || key;
        case 'suffix':
            return sampleOcc?.suffix?.description || key;
        case 'binyan':
            const binyanDescriptions = {
                'qal': 'Basic (Qal) - active simple',
                'niphal': 'Passive/Reflexive (Niphal)',
                'piel/pual': 'Intensive (Piel/Pual)',
                'hiphil': 'Causative (Hiphil)',
                'hitpael': 'Reflexive (Hitpael)',
            };
            return binyanDescriptions[key] || key;
        case 'form':
        default:
            const formDescriptions = {
                'base': 'Base form',
                'infinitive': 'Infinitive construct',
                'imperfect': 'Imperfect tense',
                'perfect': 'Perfect tense',
                'participle': 'Participle',
                'plural': 'Plural',
                'dual': 'Dual',
                'possessive': 'With possessive suffix',
            };
            return formDescriptions[key] || key;
    }
}

// ============================================================================
// Output Formatting
// ============================================================================

function formatWord(word, noPoints) {
    word = bible.removeTeamim(word);
    return noPoints ? bible.removeNikud(word) : word;
}

function formatText(result, options) {
    const lines = [];

    // Header
    lines.push(`Morphological Analysis: ${result.baseWord} (H${result.strongsUsed[0].number})`);
    lines.push(`Type: ${result.wordType}`);
    lines.push(`Total occurrences: ${result.totalOccurrences}`);

    if (result.strongsUsed.length > 1) {
        lines.push(`Strong's numbers used: ${result.strongsUsed.map(s => `H${s.number}`).join(', ')}`);
    }

    lines.push('');
    lines.push(`Grouped by: ${result.groupBy.toUpperCase()}`);
    lines.push('─'.repeat(60));

    // Groups
    for (const group of result.groups) {
        lines.push('');
        lines.push(`${group.key === 'none' ? '(no ' + result.groupBy + ')' : group.key} - ${group.count} (${group.percentage}%)`);
        lines.push(`  ${group.description}`);

        // Examples
        for (const ex of group.examples) {
            const word = formatWord(ex.word, options.noPoints);
            lines.push(`  Example: "${word}" (${ex.location})`);
        }
    }

    lines.push('');
    lines.push('─'.repeat(60));

    // Insights
    const insights = generateInsights(result);
    if (insights.length > 0) {
        lines.push('');
        lines.push('INSIGHTS:');
        for (const insight of insights) {
            lines.push(`• ${insight}`);
        }
    }

    console.log(lines.join('\n'));
}

function formatJson(result, options) {
    const output = { ...result };

    if (options.noPoints) {
        // Remove nikud from examples
        for (const group of output.groups) {
            for (const ex of group.examples) {
                ex.word = formatWord(ex.word, true);
            }
        }
    }

    // Add insights
    output.insights = generateInsights(result);

    console.log(JSON.stringify(output, null, 2));
}

/**
 * Generate insights from the analysis
 */
function generateInsights(result) {
    const insights = [];

    if (result.groups.length === 0) return insights;

    const topGroup = result.groups[0];

    // Dominant form insight
    if (parseFloat(topGroup.percentage) > 50) {
        insights.push(`Predominantly ${topGroup.key} form (${topGroup.percentage}% of occurrences).`);
    }

    // Check for high prefix usage
    if (result.groupBy === 'prefix') {
        const vavGroup = result.groups.find(g => g.key.includes('ו'));
        if (vavGroup && parseFloat(vavGroup.percentage) > 30) {
            insights.push(`High vav-prefixed usage (${vavGroup.percentage}%) - common in narrative texts.`);
        }

        const lamedGroup = result.groups.find(g => g.key === 'ל' || g.key === 'ו+ל');
        if (lamedGroup && parseFloat(lamedGroup.percentage) > 15) {
            insights.push(`Significant infinitive usage (${lamedGroup.percentage}%) - often expresses purpose.`);
        }
    }

    // Verb-specific insights
    if (result.wordType === 'Verb' && result.groupBy === 'binyan') {
        const qalGroup = result.groups.find(g => g.key === 'qal');
        if (qalGroup && parseFloat(qalGroup.percentage) > 80) {
            insights.push('Overwhelmingly Qal (basic) pattern - simple, common verb meaning.');
        }

        const hiphilGroup = result.groups.find(g => g.key === 'hiphil');
        if (hiphilGroup && parseFloat(hiphilGroup.percentage) > 20) {
            insights.push(`Notable Hiphil usage (${hiphilGroup.percentage}%) - causative emphasis.`);
        }
    }

    // Possessive suffix insights
    if (result.groupBy === 'suffix') {
        const possessives = result.groups.filter(g =>
            g.key.includes('י') || g.key.includes('ך') || g.key.includes('ו') ||
            g.key.includes('ה') || g.key.includes('נו')
        );
        const possTotal = possessives.reduce((sum, g) => sum + g.count, 0);
        const possPercent = ((possTotal / result.totalOccurrences) * 100).toFixed(1);
        if (parseFloat(possPercent) > 20) {
            insights.push(`High possessive suffix usage (${possPercent}%) - often in relational contexts.`);
        }
    }

    return insights;
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
        result = analyzeMorphology(options.query, options);
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
    parseRange,
    isAramaicVerse,
    detectPrefix,
    detectSuffix,
    detectForm,
    detectBinyan,
    findOccurrences,
    analyzeMorphology,
    getConsonants,
};

// Run main if executed directly
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    main().catch(error => {
        console.error(`Fatal error: ${error.message}`);
        process.exit(1);
    });
}
