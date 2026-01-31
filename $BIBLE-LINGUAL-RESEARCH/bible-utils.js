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
};

// Constants for advanced use
export {
    hebrewBookNames,
    hebrewWordTypes,
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
