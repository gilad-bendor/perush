'use strict';

/**
 * bible-utils.js - Core utilities for linguistic analysis of the Hebrew Bible
 *
 * This module provides:
 * 1. Data loading from source files (BSB CSV + Biblehub Strong's index)
 * 2. Normalized data access (verses, words, Strong's numbers)
 * 3. Search functionality (regex, Strong's numbers, roots)
 *
 * Usage:
 *   import * as bible from './bible-utils.js';
 *
 *   // Search examples:
 *   bible.search('אור');                    // Simple text search
 *   bible.search('<216>');                  // Search by Strong's number
 *   bible.search('<אור>');                  // Search by root word (finds all Strong's)
 *   bible.search('ה@ל@ך');                  // Pattern with matres lectionis
 *   bible.search(' מים .* ארץ ');           // Multi-word patterns
 *
 *   // Data access:
 *   bible.getStrongInfo(216);               // Get info for Strong's H216
 *   bible.getVerse('בראשית', 0, 0);         // Get Genesis 1:1 (0-indexed)
 *   bible.getAllVerses();                   // Get all verses
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// Configuration
// ============================================================================

const BSB_INPUT_FILE = path.join(__dirname, '..', '..', 'hebrew', 'data', 'bsb', 'bsb-words.basic.csv');
const BIBLEHUB_INPUT_FILE = path.join(__dirname, '..', '..', 'hebrew', 'data', 'biblehub', 'biblehub-entries-index.md');

const WORD_TYPE_INDEX_VERB = 0;
const MAX_SEARCH_RESULTS = 10000;

// ============================================================================
// Constants - Hebrew Character Sets
// ============================================================================

/**
 * Mapping from BSB English book names to Hebrew names (in biblical order)
 */
const bsbBookNamesToHebrew = {
    // תורה:
    Genesis: 'בראשית',
    Exodus: 'שמות',
    Leviticus: 'ויקרא',
    Numbers: 'במדבר',
    Deuteronomy: 'דברים',
    // נביאים ראשונים:
    Joshua: 'יהושע',
    Judges: 'שופטים',
    Samuel1: 'שמואל-א',
    Samuel2: 'שמואל-ב',
    Kings1: 'מלכים-א',
    Kings2: 'מלכים-ב',
    // נביאים אחרונים:
    Isaiah: 'ישעיהו',
    Jeremiah: 'ירמיהו',
    Ezekiel: 'יחזקאל',
    Hosea: 'הושע',
    Joel: 'יואל',
    Amos: 'עמוס',
    Obadiah: 'עובדיה',
    Jonah: 'יונה',
    Micah: 'מיכה',
    Nahum: 'נחום',
    Habakkuk: 'חבקוק',
    Zephaniah: 'צפניה',
    Haggai: 'חגי',
    Zechariah: 'זכריה',
    Malachi: 'מלאכי',
    // כתובים:
    Chronicles1: 'דברי-הימים-א',
    Chronicles2: 'דברי-הימים-ב',
    Psalm: 'תהילים',
    Job: 'איוב',
    Proverbs: 'משלי',
    Ruth: 'רות',
    SongOfSolomon: 'שיר-השירים',
    Ecclesiastes: 'קהלת',
    Lamentations: 'איכה',
    Esther: 'אסתר',
    Daniel: 'דניאל',
    Ezra: 'עזרא',
    Nehemiah: 'נחמיה',
};

const hebrewBookNames = Object.values(bsbBookNamesToHebrew);

/**
 * Word type mappings (English -> Hebrew)
 */
const wordTypesToHebrew = {
    'Verb': 'פֹּעַל',
    'Derived-Verb': 'פֹּעַל נִגְזָר',
    'Noun': 'שֵׁם עֶצֶם',
    'Name': 'שֵׁם פְּרָטִי',
    'Adjective': 'שֵׁם תֹּאַר',
    'Adverb': 'תֹּאַר הַפֹּעַל',
    'Pronoun': 'שֵׁם גּוּף',
    'Preposition': 'מִלַּת יַחַס',
    'Interjection': 'מִלַּת קְרִיאָה',
    'Conjunction': 'מִלַּת חִבּוּר',
    'word': 'סוג לא ידוע',
};

const wordTypesToIndex = Object.fromEntries(
    Object.keys(wordTypesToHebrew).map((wordType, index) => [wordType, index])
);

const hebrewWordTypes = Object.values(wordTypesToHebrew);

/** All Hebrew letters, with Shin (U+FB2A) and Sin (U+FB2B) as precomposed characters */
const hebrewLetters = 'אבגדהוזחטיךכלםמןנסעףפץצקר\uFB2A\uFB2Bת';

/** Hebrew nikud (vowel points) */
const hebrewPoints = '\u05b0\u05b1\u05b2\u05b3\u05b4\u05b5\u05b6\u05b7\u05b8\u05b9\u05ba\u05bb\u05bc\u05bf\u05c3\u05c4\u05c5\u05c6';

/** Hebrew teamim (cantillation marks) */
const hebrewAccents = '\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059a\u059b\u059c\u059d\u059e\u059f\u05a0\u05a1\u05a3\u05a4\u05a5\u05a6\u05a7\u05a8\u05a9\u05aa\u05ab\u05ac\u05ad\u05ae\u05bd\u05c0';

/** All non-letter Hebrew characters */
const hebrewNonLetters = hebrewPoints + hebrewAccents + '\u200d';

/** All possible Hebrew characters (for encoding) */
const hebrewCharacters = ' ' + hebrewLetters + hebrewNonLetters;

const hebrewCharacterToIndex = Object.fromEntries(
    [...hebrewCharacters].map((char, index) => [char, index]),
);

// Pre-compiled regex patterns
const nonHebrewLettersRegex = new RegExp(`[^${hebrewLetters}]`, 'g');
const hebrewPointsRegex = new RegExp(`[${hebrewPoints}]`, 'g');
const hebrewAccentsRegex = new RegExp(`[${hebrewAccents}]`, 'g');
const hebrewNonLettersRegex = new RegExp(`[${hebrewNonLetters}]`, 'g');

// ============================================================================
// Hebrew Text Utilities
// ============================================================================

/**
 * Convert number to Hebrew letters (0-indexed)
 * @param {number} numberBase0
 * @returns {string}
 */
function numberToHebrew(numberBase0) {
    if (numberBase0 < 0 || numberBase0 >= 500) {
        throw new Error(`numberToHebrew(${numberBase0}) - base-0 number is out of range`);
    }
    if (numberBase0 < 10) {
        return 'אבגדהוזחטי'.charAt(numberBase0);
    }
    const numberBase1 = numberBase0 + 1;
    if (numberBase1 === 15) return 'טו';
    if (numberBase1 === 16) return 'טז';
    const digit1 = numberBase1 % 10;
    const digit2 = Math.floor(numberBase1 / 10) % 10;
    const digit3 = Math.floor(numberBase1 / 100);
    return (
        (digit3 ? 'קרשת'.charAt(digit3 - 1) : '') +
        (digit2 ? 'יכלמנסעפצק'.charAt(digit2 - 1) : '') +
        'אבגדהוזחטי'.charAt(digit1 - 1)
    );
}

/**
 * Normalize Shin/Sin from Unicode decomposed form to precomposed characters
 * U+05E9 + U+05C1 -> U+FB2A (shin with shin dot)
 * U+05E9 + U+05C2 -> U+FB2B (shin with sin dot)
 * @param {string} hebrewText
 * @returns {string}
 */
function fixShinSin(hebrewText) {
    return hebrewText
        // Shin: decomposed -> precomposed (U+FB2A)
        .replace(/\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c1/g, '\uFB2A$1')
        // Sin: decomposed -> precomposed (U+FB2B)
        .replace(/\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c2/g, '\uFB2B$1');
}

/**
 * Convert final letters to regular letters
 * @param {string} hebrewText
 * @returns {string}
 */
function hebrewFinalsToRegulars(hebrewText) {
    return hebrewText
        .replace(/ך/g, 'כ')
        .replace(/ם/g, 'מ')
        .replace(/ן/g, 'נ')
        .replace(/ף/g, 'פ')
        .replace(/ץ/g, 'צ');
}

/**
 * Normalize Hebrew text: fix shin/sin, remove maqaf, remove sof-pasuk
 * @param {string} hebrewText
 * @returns {string}
 */
function normalizeHebrewText(hebrewText) {
    const normalized = fixShinSin(hebrewText)
        .replace(/־/g, '')
        .replace(/׃[פס׆]*$/, '');

    // Validate characters
    for (const char of normalized) {
        if (!(char in hebrewCharacterToIndex)) {
            throw new Error(`Unknown Hebrew character ${JSON.stringify(char)} in word ${JSON.stringify(normalized)}`);
        }
    }
    return normalized;
}

/**
 * Remove nikud (vowel points) from text
 * @param {string} hebrewText
 * @returns {string}
 */
function removeNikud(hebrewText) {
    return hebrewText.replace(hebrewPointsRegex, '');
}

/**
 * Remove teamim (cantillation marks) from text
 * @param {string} hebrewText
 * @returns {string}
 */
function removeTeamim(hebrewText) {
    return hebrewText.replace(hebrewAccentsRegex, '');
}

/**
 * Create searchable form of a word: no nikud/teamim, finals→regulars
 * @param {string} hebrewWord
 * @returns {string}
 */
function makeSearchable(hebrewWord) {
    return hebrewFinalsToRegulars(
        normalizeHebrewText(hebrewWord).replace(nonHebrewLettersRegex, '')
    );
}

// ============================================================================
// Data Loading (Lazy - loaded on first access)
// ============================================================================

/** @type {Map<string, VerseData[][]> | null} */
let _bookNamesToData = null;

/** @type {StrongData[] | null} */
let _strongNumbersToData = null;

/** @type {VerseInfo[] | null} */
let _allVerses = null;

/**
 * @typedef {Object} VerseData
 * @property {string} word - The Hebrew word (with nikud)
 * @property {number} strong - The Strong's number
 */

/**
 * @typedef {Object} StrongData
 * @property {string} word - The Hebrew root word (with nikud)
 * @property {string} searchable - Searchable form (no nikud, no finals)
 * @property {number} typeIndex - Index into hebrewWordTypes
 * @property {string} type - Hebrew word type name
 * @property {string} typeEnglish - English word type name
 */

/**
 * @typedef {Object} VerseInfo
 * @property {string} book - Hebrew book name
 * @property {number} chapterIndex - 0-indexed chapter
 * @property {number} verseIndex - 0-indexed verse
 * @property {string} chapter - Hebrew chapter number
 * @property {string} verse - Hebrew verse number
 * @property {string} location - Full location string (e.g., "בראשית א:א")
 * @property {string[]} words - Array of Hebrew words (with nikud)
 * @property {number[]} strongs - Array of Strong's numbers
 * @property {string} text - Full verse text (with nikud)
 * @property {string} searchableVerse - Searchable format: " word<strong> word<strong> ... "
 */

/**
 * Load and parse the BSB CSV file
 * @returns {Map<string, [string, number][][][]>}
 */
function loadBsbData() {
    if (_bookNamesToData) return _bookNamesToData;

    console.error('Loading Bible data from', BSB_INPUT_FILE);

    /** @type {Map<string, [string, number][][][]>} */
    const bookNamesToData = new Map();

    let currentHebrewBookName = '===no-book-name===';
    let currentHebrewChapterSequence = 0;
    let currentHebrewVerseSequence = 0;

    /** @type {[string, number][][][]} */
    let currentBookData = [];
    /** @type {[string, number][][]} */
    let currentChapterData = [];
    /** @type {[string, number][]} */
    let currentVerseData = [];

    const bsbCsvContent = fs.readFileSync(BSB_INPUT_FILE, 'utf8');
    const lines = bsbCsvContent.split('\n').filter(line => line.trim().length > 0);

    for (const line of lines) {
        const [bsbBookName, chapterSequence, verseSequence, hebrewWord, strongNumber] = line.split('\t');

        if (bsbBookName === 'bookName') continue; // Skip header

        // Normalize the Hebrew word (handle special shin/sin cases)
        // Some words in BSB have plain ש (U+05E9) without shin/sin dot - these need special handling
        let normalizedHebrewWord;
        try {
            const wordWithFixedShin = hebrewWord.replace(/\u05E9/g, () => {
                // Check for יששכר (Issachar) - second shin should be sin
                const lettersOnly = hebrewWord.replace(new RegExp(`[^\u05E9${hebrewLetters}]`, 'g'), '');
                if (lettersOnly.includes('י\uFB2Bשכר') || lettersOnly.includes('י\uFB2B\u05E9כר')) {
                    return '\uFB2B'; // Sin
                }
                if (hebrewWord.includes('שֵיבָ')) return '\uFB2B'; // שֵיבָה = sin
                if (hebrewWord.includes('אִ') && hebrewWord.includes('יש')) return '\uFB2A'; // איש = shin
                if (hebrewWord.includes('חמש')) return '\uFB2A'; // חמש = shin
                if (hebrewWord.includes('שָמַ') && hebrewWord.includes('יִם')) return '\uFB2A'; // שמים = shin
                throw new Error(`Unnormalized ש (U+05E9) in ${JSON.stringify(hebrewWord)}`);
            });
            normalizedHebrewWord = normalizeHebrewText(wordWithFixedShin);
        } catch (e) {
            console.error(`Error normalizing word in line: ${line}`);
            throw e;
        }

        if (!normalizedHebrewWord) {
            throw new Error(`Missing Hebrew word in line ${line}`);
        }

        // Handle book transitions
        const bsbHebrewBookName = bsbBookNamesToHebrew[bsbBookName];
        if (!bsbHebrewBookName) {
            throw new Error(`Unknown BSB book name ${JSON.stringify(bsbBookName)}`);
        }

        if (bsbHebrewBookName !== currentHebrewBookName) {
            currentHebrewBookName = bsbHebrewBookName;
            currentHebrewChapterSequence = 0;
            currentHebrewVerseSequence = 0;
            currentBookData = [];
            bookNamesToData.set(currentHebrewBookName, currentBookData);
        }

        // Handle chapter transitions
        const chapterSequenceNumber = parseInt(chapterSequence);
        if (chapterSequenceNumber !== currentHebrewChapterSequence) {
            if (chapterSequenceNumber !== currentHebrewChapterSequence + 1) {
                throw new Error(`Unexpected chapter sequence ${chapterSequenceNumber}`);
            }
            currentHebrewChapterSequence = chapterSequenceNumber;
            currentHebrewVerseSequence = 0;
            currentChapterData = [];
            currentBookData.push(currentChapterData);
        }

        // Handle verse transitions
        const verseSequenceNumber = parseInt(verseSequence);
        if (verseSequenceNumber !== currentHebrewVerseSequence) {
            if (verseSequenceNumber !== currentHebrewVerseSequence + 1) {
                throw new Error(`Unexpected verse sequence ${verseSequenceNumber}`);
            }
            currentHebrewVerseSequence = verseSequenceNumber;
            currentVerseData = [];
            currentChapterData.push(currentVerseData);
        }

        // Add word to verse
        const strongNumberValue = strongNumber ? parseInt(strongNumber) : 0;
        currentVerseData.push([normalizedHebrewWord, strongNumberValue]);
    }

    _bookNamesToData = bookNamesToData;
    console.error(`Loaded ${bookNamesToData.size} books`);
    return bookNamesToData;
}

/**
 * Load and parse the Biblehub Strong's numbers file
 * @returns {StrongData[]}
 */
function loadStrongData() {
    if (_strongNumbersToData) return _strongNumbersToData;

    console.error('Loading Strong\'s data from', BIBLEHUB_INPUT_FILE);

    /** @type {StrongData[]} */
    const strongNumbersToData = [];

    const content = fs.readFileSync(BIBLEHUB_INPUT_FILE, 'utf8');
    const lines = content.split('\n');

    for (const line of lines) {
        const parsed = line.match(/^\s*\|\s*(.+?)\s*\|\s*.+?\s*\|\s*(.+?)\s*\|\s*\[\s*(\d+)\s*]\(https:\/\/biblehub\.com\/hebrew\/\d+\.htm\)\s*\|$/);
        if (parsed) {
            const [, hebrewWordWithPoints, englishWordType, strongNumber] = parsed;
            const typeIndex = wordTypesToIndex[englishWordType];
            if (typeIndex === undefined) {
                throw new Error(`Unknown word type ${JSON.stringify(englishWordType)}`);
            }

            const normalizedWord = normalizeHebrewText(hebrewWordWithPoints);
            strongNumbersToData[parseInt(strongNumber)] = {
                word: normalizedWord,
                searchable: makeSearchable(normalizedWord),
                typeIndex,
                type: hebrewWordTypes[typeIndex],
                typeEnglish: englishWordType,
            };
        }
    }

    // Fill missing entries
    for (let i = 0; i < strongNumbersToData.length; i++) {
        if (!strongNumbersToData[i]) {
            strongNumbersToData[i] = {
                word: ' ',
                searchable: '',
                typeIndex: hebrewWordTypes.length,
                type: 'לא ידוע',
                typeEnglish: 'unknown',
            };
        }
    }

    _strongNumbersToData = strongNumbersToData;
    console.error(`Loaded ${strongNumbersToData.length} Strong's numbers`);
    return strongNumbersToData;
}

/**
 * Build the allVerses array from loaded data
 * @returns {VerseInfo[]}
 */
function buildAllVerses() {
    if (_allVerses) return _allVerses;

    const bookNamesToData = loadBsbData();
    const allVerses = [];

    for (const hebrewBookName of hebrewBookNames) {
        const bookData = bookNamesToData.get(hebrewBookName);
        if (!bookData) continue;

        for (let chapterIndex = 0; chapterIndex < bookData.length; chapterIndex++) {
            const chapterData = bookData[chapterIndex];
            const chapterHebrew = numberToHebrew(chapterIndex);

            for (let verseIndex = 0; verseIndex < chapterData.length; verseIndex++) {
                const verseData = chapterData[verseIndex];
                const verseHebrew = numberToHebrew(verseIndex);

                const words = verseData.map(([word]) => normalizeHebrewText(word));
                const strongs = verseData.map(([, strong]) => strong);

                // Build searchable verse format: " word<strong> word<strong> ... "
                const searchableVerse = ' ' + verseData.map(([word, strongNumber]) =>
                    makeSearchable(word) + `<${strongNumber}>`
                ).join(' ') + ' ';

                allVerses.push({
                    book: hebrewBookName,
                    chapterIndex,
                    verseIndex,
                    chapter: chapterHebrew,
                    verse: verseHebrew,
                    location: `${hebrewBookName} ${chapterHebrew}:${verseHebrew}`,
                    words,
                    strongs,
                    text: words.join(' '),
                    searchableVerse,
                });
            }
        }
    }

    _allVerses = allVerses;
    console.error(`Built ${allVerses.length} verses`);
    return allVerses;
}

// ============================================================================
// Search Engine
// ============================================================================

/**
 * Helper: replace in regex source, handling bracket context
 * @param {string} regExpSource
 * @param {RegExp} replaceRegExp
 * @param {string} replaceToIfInsideBrackets
 * @param {string} replaceToIfOutsideBrackets
 * @returns {string}
 */
function replaceInRegExpSource(regExpSource, replaceRegExp, replaceToIfInsideBrackets, replaceToIfOutsideBrackets) {
    return regExpSource.replace(
        replaceRegExp,
        (wholeMatch, ...args) => {
            const matchIndex = args[args.length - 2];
            const beforeMatch = regExpSource.substring(0, matchIndex);
            return (/\[[^\]]*$/.test(beforeMatch))
                ? replaceToIfInsideBrackets
                : replaceToIfOutsideBrackets;
        }
    );
}

/**
 * Normalize a search query into a regex source
 * @param {string} searchRegExpSource
 * @param {boolean} isInsideAngleBrackets
 * @returns {string}
 */
function normalizeSearchRegExp(searchRegExpSource, isInsideAngleBrackets) {
    searchRegExpSource = fixShinSin(hebrewFinalsToRegulars(searchRegExpSource));

    // Handle standard shin (ש) -> match both shin (U+FB2A) and sin (U+FB2B)
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /(?<!ת)-ת/g, '-ר\uFB2B\uFB2Aת', '-ת');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /-ש/g, '-ר\uFB2B\uFB2A', '-[\uFB2B\uFB2A]');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /ש-/g, '\uFB2B\uFB2Aת-', '[\uFB2B\uFB2A]-');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /ש/g, '\uFB2B\uFB2A', '[\uFB2B\uFB2A]');

    if (!isInsideAngleBrackets) {
        // Collapse multiple spaces
        searchRegExpSource = searchRegExpSource.replace(/\s+/g, ' ');
        // Remove non-letter Hebrew characters
        searchRegExpSource = searchRegExpSource.replace(hebrewNonLettersRegex, '');
    }

    // @ = zero or more matres lectionis (אהוי)
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /@/g, 'אהוי', '[אהוי]*');
    // # = any single Hebrew letter (including shin U+FB2A and sin U+FB2B)
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /#/g, 'א-ת', '[א-ת\uFB2A\uFB2B]');

    if (!isInsideAngleBrackets) {
        // Between words, allow any Strong's number
        searchRegExpSource = searchRegExpSource.replace(/([^>]) /g, '$1(?:<\\d+>|) ');
    }

    return searchRegExpSource;
}

/**
 * @typedef {Object} SearchMatch
 * @property {VerseInfo} verse - The matched verse
 * @property {number[]} matchedWordIndexes - Indexes of matched words
 * @property {string} matchedText - The matched portion of text
 */

/**
 * @typedef {Object} SearchResult
 * @property {string} query - Original query
 * @property {string} normalizedRegex - The final regex used
 * @property {SearchMatch[]} matches - Array of matches
 * @property {Object[]} strongMatches - Strong's numbers matched (for <...> queries)
 * @property {number} totalMatches - Total number of matches
 * @property {boolean} truncated - Whether results were truncated
 */

/**
 * Search the Bible using extended regex syntax
 *
 * Special patterns:
 *   @        - matches zero or more of א,ה,ו,י (matres lectionis)
 *   #        - matches any single Hebrew letter
 *   <N>      - matches Strong's number N
 *   <word>   - matches all Strong's numbers for that root word
 *   <N1|N2>  - matches multiple Strong's numbers
 *   2xy2     - proto-Semitic 2-letter root pattern (expands to verb patterns)
 *
 * @param {string} searchQuery - The search query
 * @param {Object} [options] - Search options
 * @param {number} [options.maxResults=10000] - Maximum results to return
 * @param {boolean} [options.verbsOnly=false] - Only match verbs (for 2xy2 pattern)
 * @returns {SearchResult}
 */
function search(searchQuery, options = {}) {
    const maxResults = options.maxResults ?? MAX_SEARCH_RESULTS;
    const allVerses = buildAllVerses();
    const strongNumbersToData = loadStrongData();

    /** @type {Object[]} */
    const strongMatches = [];

    // Handle 2xy2 proto-Semitic root pattern
    let preprocessedSearchQuery = searchQuery.replace(/^2(.)(.)2$/, '<' + [
        '$1$2',     // שב
        'נ$1$2',    // נשב
        'י$1$2',    // ישב
        '$1ו$2',    // שוב
        '$1י$2',    // שיב
        '$1$2ה',    // שבה
        '$1$2$2',   // שבב
        '$1$2$1$2', // שבשב
    ].join('|') + '>');
    const onlyAllowVerbs = (preprocessedSearchQuery !== searchQuery) || options.verbsOnly;

    // Replace <...> with matching Strong's numbers
    const searchQueryWithStrongNumbers = preprocessedSearchQuery.replace(/<(.*?)>/g, (wholeMatch, innerPattern) => {
        const normalizedInnerPattern = normalizeSearchRegExp(innerPattern, true);
        const matchingStrongNumbers = [];
        const strongNumberRegExp = new RegExp(`^(?:${normalizedInnerPattern})$`);

        for (let strongNumber = 0; strongNumber < strongNumbersToData.length; strongNumber++) {
            const data = strongNumbersToData[strongNumber];
            if (strongNumberRegExp.test(String(strongNumber)) ||
                strongNumberRegExp.test(data.searchable)) {
                if (!onlyAllowVerbs || data.typeIndex === WORD_TYPE_INDEX_VERB) {
                    matchingStrongNumbers.push(strongNumber);
                    strongMatches.push({
                        strongNumber,
                        word: data.word,
                        type: data.type,
                        typeEnglish: data.typeEnglish,
                        biblehubUrl: `https://biblehub.com/hebrew/${strongNumber}.htm`,
                    });
                }
            }
        }

        if (matchingStrongNumbers.length === 0) {
            throw new Error(`No matching Strong's numbers for: ${wholeMatch}`);
        }

        return `(#+<(${matchingStrongNumbers.join('|')})>)`;
    });

    // Build final regex
    const normalizedRegex = normalizeSearchRegExp(searchQueryWithStrongNumbers, false);

    if (!normalizedRegex.trim()) {
        throw new Error('Empty search query');
    }

    const searchRegExp = new RegExp(normalizedRegex, 'g');

    // Search all verses
    /** @type {SearchMatch[]} */
    const matches = [];
    let truncated = false;

    for (const verseInfo of allVerses) {
        /** @type {Set<number> | null} */
        let matchedWordIndexes = null;

        verseInfo.searchableVerse.replace(searchRegExp, (wholeMatch, ...args) => {
            const matchStartOffset = args[args.length - 2];
            const matchEndOffset = matchStartOffset + wholeMatch.length;

            // Convert offsets to word indexes
            const fromWordIndex = Math.max(0,
                verseInfo.searchableVerse.substring(0, matchStartOffset + (wholeMatch.startsWith(' ') ? 1 : 0))
                    .replace(/[^ ]/g, '').length - 1
            );
            const toWordIndex = Math.max(0,
                verseInfo.searchableVerse.substring(0, matchEndOffset - (wholeMatch.endsWith(' ') ? 1 : 0))
                    .replace(/[^ ]/g, '').length - 1
            );

            matchedWordIndexes ??= new Set();
            for (let i = fromWordIndex; i <= toWordIndex; i++) {
                matchedWordIndexes.add(i);
            }
            return wholeMatch;
        });

        if (matchedWordIndexes) {
            if (matches.length >= maxResults) {
                truncated = true;
                break;
            }

            const matchedWords = verseInfo.words.filter((_, i) => matchedWordIndexes.has(i));
            matches.push({
                verse: verseInfo,
                matchedWordIndexes: [...matchedWordIndexes].sort((a, b) => a - b),
                matchedText: matchedWords.join(' '),
            });
        }
    }

    return {
        query: searchQuery,
        normalizedRegex,
        matches,
        strongMatches,
        totalMatches: matches.length,
        truncated,
    };
}

// ============================================================================
// Public API
// ============================================================================

/**
 * Get Strong's number information
 * @param {number} strongNumber
 * @returns {StrongData | null}
 */
function getStrongInfo(strongNumber) {
    const data = loadStrongData();
    return data[strongNumber] || null;
}

/**
 * Find all Strong's numbers matching a pattern
 * @param {string} pattern - Hebrew word or regex pattern
 * @returns {Array<{strongNumber: number, data: StrongData}>}
 */
function findStrongNumbers(pattern) {
    const data = loadStrongData();
    const normalizedPattern = normalizeSearchRegExp(pattern, true);
    const regex = new RegExp(`^(?:${normalizedPattern})$`);
    const results = [];

    for (let i = 0; i < data.length; i++) {
        if (regex.test(String(i)) || regex.test(data[i].searchable)) {
            results.push({ strongNumber: i, data: data[i] });
        }
    }

    return results;
}

/**
 * Get a specific verse
 * @param {string} book - Hebrew book name
 * @param {number} chapterIndex - 0-indexed chapter
 * @param {number} verseIndex - 0-indexed verse
 * @returns {VerseInfo | null}
 */
function getVerse(book, chapterIndex, verseIndex) {
    const allVerses = buildAllVerses();
    return allVerses.find(v =>
        v.book === book &&
        v.chapterIndex === chapterIndex &&
        v.verseIndex === verseIndex
    ) || null;
}

/**
 * Get all verses
 * @returns {VerseInfo[]}
 */
function getAllVerses() {
    return buildAllVerses();
}

/**
 * Get list of Hebrew book names
 * @returns {string[]}
 */
function getBookNames() {
    return [...hebrewBookNames];
}

/**
 * Get word type information
 * @returns {{hebrew: string[], english: string[]}}
 */
function getWordTypes() {
    return {
        hebrew: [...hebrewWordTypes],
        english: Object.keys(wordTypesToHebrew),
    };
}

// ============================================================================
// Biblical Sections Constants
// ============================================================================

/** Torah books */
const TORAH = ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים'];

/** Early prophets */
const NEVIIM_RISHONIM = ['יהושע', 'שופטים', 'שמואל-א', 'שמואל-ב', 'מלכים-א', 'מלכים-ב'];

/** Later prophets */
const NEVIIM_ACHARONIM = [
    'ישעיהו', 'ירמיהו', 'יחזקאל',
    'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה',
    'נחום', 'חבקוק', 'צפניה', 'חגי', 'זכריה', 'מלאכי'
];

/** All prophets */
const NEVIIM = [...NEVIIM_RISHONIM, ...NEVIIM_ACHARONIM];

/** Writings */
const KETUVIM = [
    'דברי-הימים-א', 'דברי-הימים-ב', 'תהילים', 'איוב', 'משלי',
    'רות', 'שיר-השירים', 'קהלת', 'איכה', 'אסתר', 'דניאל', 'עזרא', 'נחמיה'
];

/** Section definitions with display names */
const SECTIONS = [
    { name: 'תורה', books: TORAH },
    { name: 'נביאים ראשונים', books: NEVIIM_RISHONIM },
    { name: 'נביאים אחרונים', books: NEVIIM_ACHARONIM },
    { name: 'כתובים', books: KETUVIM },
];

/** Section name mapping (Hebrew names to book arrays) */
const SECTION_NAMES = {
    'תורה': TORAH,
    'נביאים': NEVIIM,
    'נביאים-ראשונים': NEVIIM_RISHONIM,
    'נביאים-אחרונים': NEVIIM_ACHARONIM,
    'כתובים': KETUVIM,
};

// ============================================================================
// Aramaic Sections
// ============================================================================

/**
 * Aramaic sections (verse ranges that are in Aramaic, not Hebrew)
 * Format: { book: [{startChapter, startVerse, endChapter, endVerse}] }
 * Note: chapters and verses are 0-indexed
 */
const ARAMAIC_SECTIONS = {
    'דניאל': [
        { startChapter: 1, startVerse: 3, endChapter: 6, endVerse: 27 } // Actually 2:4-7:28
    ],
    'עזרא': [
        { startChapter: 3, startVerse: 7, endChapter: 5, endVerse: 17 }, // 4:8-6:18
        { startChapter: 6, startVerse: 11, endChapter: 6, endVerse: 25 } // 7:12-26
    ],
    'ירמיהו': [
        { startChapter: 9, startVerse: 10, endChapter: 9, endVerse: 10 } // 10:11 (single verse)
    ],
    'בראשית': [
        { startChapter: 30, startVerse: 46, endChapter: 30, endVerse: 46 } // 31:47 (two words)
    ],
};

/**
 * Check if a verse is in an Aramaic section
 * @param {string} book - Hebrew book name
 * @param {number} chapterIndex - 0-indexed chapter
 * @param {number} verseIndex - 0-indexed verse
 * @returns {boolean}
 */
function isAramaicVerse(book, chapterIndex, verseIndex) {
    const sections = ARAMAIC_SECTIONS[book];
    if (!sections) return false;

    for (const section of sections) {
        if (chapterIndex > section.startChapter && chapterIndex < section.endChapter) {
            return true;
        }
        if (chapterIndex === section.startChapter && chapterIndex === section.endChapter) {
            return verseIndex >= section.startVerse && verseIndex <= section.endVerse;
        }
        if (chapterIndex === section.startChapter && verseIndex >= section.startVerse) {
            return true;
        }
        if (chapterIndex === section.endChapter && verseIndex <= section.endVerse) {
            return true;
        }
    }
    return false;
}

// ============================================================================
// Word Type Aliases
// ============================================================================

/**
 * Type name mappings (various forms -> canonical English)
 */
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
    // Hebrew variations (without nikud)
    'פועל': 'Verb',
    'שם': 'Noun',
    'שם עצם': 'Noun',
    'שם פרטי': 'Name',
    'שם תואר': 'Adjective',
    'תואר הפועל': 'Adverb',
    'שם גוף': 'Pronoun',
    'מלת יחס': 'Preposition',
    'מלת קריאה': 'Interjection',
    'מלת חיבור': 'Conjunction',
};

/**
 * Type display order for organized output
 */
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

// ============================================================================
// Stopwords
// ============================================================================

/**
 * Common function words (stopwords) to filter from co-occurrence results
 */
const STOPWORDS = new Set([
    'את', 'אשר', 'על', 'אל', 'מן', 'עם', 'כי', 'לא', 'כל', 'גם',
    'או', 'אם', 'הנה', 'זה', 'זאת', 'הוא', 'היא', 'הם', 'הן',
    'אני', 'אנחנו', 'אתה', 'את', 'אתם', 'אתן', 'לו', 'לה', 'להם',
    'בו', 'בה', 'בהם', 'לי', 'לך', 'לנו', 'לכם', 'ממנו', 'ממנה',
    'עליו', 'עליה', 'עליהם', 'אליו', 'אליה', 'אליהם', 'אתו', 'אתה',
    'כן', 'לפני', 'אחרי', 'תחת', 'עד', 'בין', 'למען', 'יען',
    'פן', 'בלי', 'בלתי', 'אך', 'רק', 'מאד', 'עתה', 'אז', 'שם', 'פה',
]);

/**
 * Stopwords as Strong's numbers - very common function words to weight lower
 */
const STOPWORD_STRONGS = new Set([
    853,   // את - direct object marker
    834,   // אשר - which, that
    5921,  // על - on, upon
    413,   // אל - to, toward
    4480,  // מן - from
    5973,  // עם - with
    3588,  // כי - for, because
    3808,  // לא - not
    3605,  // כל - all
    1571,  // גם - also
]);

/**
 * Check if a word is a stopword (using normalized form)
 * @param {string} word - Hebrew word
 * @returns {boolean}
 */
function isStopword(word) {
    const normalized = removeNikud(word);
    return STOPWORDS.has(normalized);
}

// ============================================================================
// Range Parsing
// ============================================================================

/**
 * Parse a range string into a filter function
 * @param {string} rangeStr - Range specification (e.g., "בראשית", "בראשית 1-11", "תורה")
 * @returns {{books: Set<string>, chapterFilter: (book: string, chapter: number) => boolean} | null}
 */
function parseRange(rangeStr) {
    if (!rangeStr) return null;

    // Check if it's a section name
    if (SECTION_NAMES[rangeStr]) {
        return {
            books: new Set(SECTION_NAMES[rangeStr]),
            chapterFilter: () => true,
        };
    }

    // Check if it's a book name (possibly with chapter range)
    const parts = rangeStr.split(/\s+/);
    const bookName = parts[0];

    if (!hebrewBookNames.includes(bookName)) {
        throw new Error(`Unknown book or section: ${bookName}`);
    }

    // Just book name, no chapter range
    if (parts.length === 1) {
        return {
            books: new Set([bookName]),
            chapterFilter: () => true,
        };
    }

    // Book with chapter range
    const chapterRange = parts.slice(1).join(' ');
    const rangeMatch = chapterRange.match(/^(\d+)(?:-(\d+))?$/);

    if (!rangeMatch) {
        throw new Error(`Invalid chapter range: ${chapterRange}`);
    }

    const startChapter = parseInt(rangeMatch[1]) - 1; // Convert to 0-indexed
    const endChapter = rangeMatch[2] ? parseInt(rangeMatch[2]) - 1 : startChapter;

    return {
        books: new Set([bookName]),
        chapterFilter: (book, chapterIndex) => {
            return book === bookName && chapterIndex >= startChapter && chapterIndex <= endChapter;
        },
    };
}

/**
 * Get which section a book belongs to
 * @param {string} book - Hebrew book name
 * @returns {string} - Section name
 */
function getBookSection(book) {
    for (const section of SECTIONS) {
        if (section.books.includes(book)) return section.name;
    }
    return 'unknown';
}

// ============================================================================
// Hebrew Number Utilities
// ============================================================================

/**
 * Hebrew letter values for number parsing
 */
const hebrewLetterValues = {
    'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9,
    'י': 10, 'כ': 20, 'ך': 20, 'ל': 30, 'מ': 40, 'ם': 40, 'נ': 50, 'ן': 50,
    'ס': 60, 'ע': 70, 'פ': 80, 'ף': 80, 'צ': 90, 'ץ': 90,
    'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400,
};

/**
 * Convert Hebrew numeral string to number
 * Handles טו (15) and טז (16) special cases
 * @param {string} hebrewNum - Hebrew numeral string (e.g., "א", "יא", "כג")
 * @returns {number} - The numeric value (1-indexed)
 */
function hebrewToNumber(hebrewNum) {
    if (!hebrewNum || hebrewNum.trim() === '') {
        throw new Error('Empty Hebrew number');
    }

    // Remove any non-Hebrew characters (quotes, geresh, etc.)
    const cleaned = hebrewNum.replace(/[^א-ת]/g, '');

    if (cleaned === '') {
        throw new Error(`Invalid Hebrew number: ${hebrewNum}`);
    }

    let total = 0;
    for (const char of cleaned) {
        const value = hebrewLetterValues[char];
        if (value === undefined) {
            throw new Error(`Unknown Hebrew numeral character: ${char}`);
        }
        total += value;
    }

    return total;
}

/**
 * Parse a number that could be Arabic (1, 23) or Hebrew (א, כג)
 * @param {string} numStr - Number string
 * @returns {number} - 1-indexed number
 */
function parseHebrewOrArabicNumber(numStr) {
    const trimmed = numStr.trim();

    // Check if it's Arabic numerals
    if (/^\d+$/.test(trimmed)) {
        return parseInt(trimmed, 10);
    }

    // Must be Hebrew numerals
    return hebrewToNumber(trimmed);
}

// ============================================================================
// Occurrence Counting (Cached)
// ============================================================================

/** @type {Map<number, number> | null} */
let _occurrenceCounts = null;

/**
 * Build occurrence counts for all Strong's numbers
 * @returns {Map<number, number>}
 */
function buildOccurrenceCounts() {
    if (_occurrenceCounts) return _occurrenceCounts;

    const allVerses = buildAllVerses();
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

// ============================================================================
// Example Retrieval
// ============================================================================

/**
 * Get example verses for a Strong's number
 * @param {number} strongNumber
 * @param {number} count - Number of examples to retrieve
 * @returns {Object[]}
 */
function getExamples(strongNumber, count) {
    const searchResult = search(`<${strongNumber}>`, { maxResults: count * 3 });

    // Try to get diverse examples (different books)
    const seenBooks = new Set();
    const examples = [];

    for (const match of searchResult.matches) {
        if (examples.length >= count) break;

        // Prefer examples from different books
        if (seenBooks.has(match.verse.book) && examples.length < count - 1) {
            continue;
        }

        seenBooks.add(match.verse.book);

        // Get the matched word(s)
        const matchedWords = match.matchedWordIndexes.map(i => match.verse.words[i]);

        examples.push({
            location: match.verse.location,
            text: removeTeamim(match.verse.text),
            matchedWords: matchedWords.map(w => removeTeamim(w)),
        });
    }

    // If we didn't get enough diverse examples, fill from what we have
    if (examples.length < count) {
        for (const match of searchResult.matches) {
            if (examples.length >= count) break;
            if (examples.some(e => e.location === match.verse.location)) continue;

            const matchedWords = match.matchedWordIndexes.map(i => match.verse.words[i]);
            examples.push({
                location: match.verse.location,
                text: removeTeamim(match.verse.text),
                matchedWords: matchedWords.map(w => removeTeamim(w)),
            });
        }
    }

    return examples;
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Format a word with optional nikud removal
 * @param {string} word
 * @param {boolean} noPoints - If true, remove nikud
 * @returns {string}
 */
function formatWord(word, noPoints = false) {
    return noPoints ? removeNikud(word) : word;
}

// ============================================================================
// Module Exports
// ============================================================================

// Primary exports - most useful for tools
export {
    // Core search
    search,

    // Strong's number utilities
    getStrongInfo,
    findStrongNumbers,

    // Verse access
    getVerse,
    getAllVerses,
    getBookNames,
    getWordTypes,
};

// Text processing utilities
export {
    removeNikud,
    removeTeamim,
    makeSearchable,
    numberToHebrew,
    normalizeHebrewText,
    formatWord,
};

// Hebrew number parsing
export {
    hebrewToNumber,
    parseHebrewOrArabicNumber,
};

// Biblical section constants
export {
    TORAH,
    NEVIIM_RISHONIM,
    NEVIIM_ACHARONIM,
    NEVIIM,
    KETUVIM,
    SECTIONS,
    SECTION_NAMES,
    hebrewBookNames,
    hebrewWordTypes,
};

// Aramaic handling
export {
    ARAMAIC_SECTIONS,
    isAramaicVerse,
};

// Word type handling
export {
    TYPE_ALIASES,
    TYPE_ORDER,
};

// Stopwords
export {
    STOPWORDS,
    STOPWORD_STRONGS,
    isStopword,
};

// Range parsing
export {
    parseRange,
    getBookSection,
};

// Occurrence counting
export {
    buildOccurrenceCounts,
    getOccurrenceCount,
    getExamples,
};

// Internal utilities (exported for edge cases, prefer higher-level functions)
export {
    fixShinSin,
    hebrewFinalsToRegulars,
    hebrewLetters,
    hebrewPoints,
    hebrewAccents,
    hebrewCharacters,
    hebrewPointsRegex,
    hebrewAccentsRegex,
    hebrewNonLettersRegex,
    nonHebrewLettersRegex,
};

// ============================================================================
// CLI Test Interface
// ============================================================================

// Check if running as main module (ES module style)
const isMainModule = process.argv[1] && import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
    // Run as CLI: node bible-utils.js "<search query>"
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node bible-utils.js "<search query>"');
        console.log('');
        console.log('Examples:');
        console.log('  node bible-utils.js "אור"          # Simple search');
        console.log('  node bible-utils.js "<216>"        # Strong\'s number');
        console.log('  node bible-utils.js "<אור>"        # Root word');
        console.log('  node bible-utils.js "ה@ל@ך"        # Pattern with matres');
        console.log('  node bible-utils.js "2שב2"         # Proto-Semitic root');
        process.exit(0);
    }

    const query = args.join(' ');
    console.log(`\nSearching for: ${query}\n`);

    try {
        const result = search(query, { maxResults: 20 });

        if (result.strongMatches.length > 0) {
            console.log('Strong\'s numbers matched:');
            for (const sm of result.strongMatches.slice(0, 10)) {
                console.log(`  H${sm.strongNumber}: ${sm.word} (${sm.type})`);
            }
            if (result.strongMatches.length > 10) {
                console.log(`  ... and ${result.strongMatches.length - 10} more`);
            }
            console.log('');
        }

        console.log(`Regex: /${result.normalizedRegex}/g`);
        console.log(`Found: ${result.totalMatches} matches${result.truncated ? ' (truncated)' : ''}\n`);

        for (const match of result.matches) {
            const highlightedWords = match.verse.words.map((word, i) =>
                match.matchedWordIndexes.includes(i) ? `**${word}**` : word
            ).join(' ');
            console.log(`(${match.verse.location}) ${highlightedWords}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}
