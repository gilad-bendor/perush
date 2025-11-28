#!/usr/local/bin/node

/**
 * Builds docs/bible-viewer.html as a self-contained HTML file, accessible publicly via:
 *     https://gilad-bendor.github.io/perush/bible-viewer.html
 * Input files:
 *     - https://github.com/gilad-bendor/hebrew/blob/main/data/bsb/bsb-words.basic.csv - the Bible text, with Strong numbers
 *     - https://github.com/gilad-bendor/hebrew/blob/main/data/biblehub/biblehub-entries-index.md - Strong-numbers info
 *
 * This HTML file is a simple viewer for the Hebrew Bible text, with advanced search capabilities.
 *
 * Features:
 *   - Displays the entire Hebrew Bible text, with each verse in its own line.
 *   - Hovering over a biblical verse will show its location (book, chapter, verse) at the bottom-bar.
 *   - Clicking a biblical verse will **fixate** that location for few seconds -
 *      and add the "copy-verse-*-icon"s to allow copying the verse and the location to the clipboard.
 *   - Double-clicking a biblical word will execute a search on the word's Strong-number
 *   - Search by **"extended regular expression"**
 *
 * An info-icon is shown at the top-left - use it for more info.
 */

const fs = require('fs');
const path = require('path');

const BSB_INPUT_FILE = path.join(__dirname, '..', '..', 'hebrew', 'data', 'bsb', 'bsb-words.basic.csv');
const BIBLEHUB_INPUT_FILE = path.join(__dirname, '..', '..', 'hebrew', 'data', 'biblehub', 'biblehub-entries-index.md');
const BIBLE_VIEWER_OUTPUT_FILE = path.join(__dirname, '..', 'docs', 'bible-viewer.html');
const WORD_TYPE_INDEX_VERB = 0;

/**
 * For debug - load only books that match this regexp (null = load all).
 * @type {RegExp | null}
 */
const FILTER_LOADED_BOOKS_REGEXP = /בראשית/; // TODO: null; //

/**
 * HTML builder - all items are joint to build the content of bible-viewer.html
 * @type {(string|number|boolean)[]}
 */
const html = [];



// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ---------------------------------    Constants    --------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

/**
 * A mapping from BSB book names (in English) to their Hebrew names.
 * The entries are ordered according to the order of the books in the Bible.
 * @type {Record<string, string>}
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

const wordTypesToHebrew = {
    ['Verb']: 'פֹּעַל',
    ['Derived-Verb']: 'פֹּעַל נִגְזָר',
    ['Noun']: 'שֵׁם עֶצֶם',
    ['Name']: 'שֵׁם פְּרָטִי',
    ['Adjective']: 'שֵׁם תֹּאַר',
    ['Adverb']: 'תֹּאַר הַפֹּעַל',
    ['Pronoun']: 'שֵׁם גּוּף',
    ['Preposition']: 'מִלַּת יַחַס',
    ['Interjection']: 'מִלַּת קְרִיאָה',
    ['Conjunction']: 'מִלַּת חִבּוּר',
    ['word']: 'סוג לא ידוע',
};
const hebrewWordTypes = Object.values(wordTypesToHebrew);
if (Object.keys(wordTypesToHebrew)[WORD_TYPE_INDEX_VERB] !== 'Verb') {
    throw new Error(`WORD_TYPE_INDEX_VERB (${WORD_TYPE_INDEX_VERB}) does not point to 'Verb'`);
}

/** All the letters in Hebrew, with Shin represented by two characters: שּׁ and שּׂ */
const hebrewLetters = 'אבגדהוזחטיךכלםמןנסעףפץצקרשׁשׂת';

/** All the Hebrew "Points" characters (Nikud).*/
const hebrewPoints ='\u05b0\u05b1\u05b2\u05b3\u05b4\u05b5\u05b6\u05b7\u05b8\u05b9\u05ba\u05bb\u05bc\u05bf\u05c3\u05c4\u05c5\u05c6'; // excluding \u05bd=Meteg and \u05c0=Peseq

/** All the Hebrew "Accents" characters (Teamim) */
const hebrewAccents = '\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059a\u059b\u059c\u059d\u059e\u059f\u05a0\u05a1\u05a3\u05a4\u05a5\u05a6\u05a7\u05a8\u05a9\u05aa\u05ab\u05ac\u05ad\u05ae' +
    '\u05bd\u05c0'; // including \u05bd=Meteg and \u05c0=Peseq

/** All the Hebrew characters that are not letters */
const hebrewNonLetters = hebrewPoints + hebrewAccents + '\u200d'; // Zero-width joiner: when placed between two characters that would otherwise not be connected, causes them to be printed in their connected forms

/**
 * All the characters that may appear in a Hebrew word (letters, points, accents).
 * It is assumed that the overall number of characters is small enough to fit into 7 bits.
 * @type {string}
 */
const hebrewCharacters = ' ' + hebrewLetters + hebrewNonLetters;
if (hebrewCharacters.length > 128) {
    throw new Error(`Too many Hebrew characters (${hebrewCharacters.length}), cannot encode them in 7 bits`);
}
const hebrewCharacterToIndex = Object.fromEntries(
    [...hebrewCharacters].map((char, index) => [char, index]),
);

const nonHebrewLettersRegex = new RegExp(`[^${hebrewLetters}]`, 'g');
const hebrewPointsRegex = new RegExp(`[${hebrewPoints}]`, 'g');
const hebrewAccentsRegex = new RegExp(`[${hebrewAccents}]`, 'g');
const hebrewNonLettersRegex = new RegExp(`[${hebrewNonLetters}]`, 'g');



// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -----------------------------    Read Input Files    -----------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

/**
 * bookNamesToData[hebrewBookName][hebrewChapterNumber][hebrewVerseNumber] = [ [word1, strong1], [word2, strong2], ... ]
 * @type {Record<string, [string,number][][][]>}
 */
const bookNamesToData = {};
(() => { // populate bookNamesToData
    /** @type {string | null} */
    let currentHebrewBookName = '===no-book-name===';
    /** @type {number | null} */
    let currentHebrewChapterSequence = 0;
    /** @type {number | null} */
    let currentHebrewVerseSequence = 0;

    /** @type {[string,number][][][]} */
    let currentBookData = [];
    /** @type {[string,number][][]} */
    let currentChapterData = [];
    /** @type {[string,number][]} */
    let currentVerseData = [];

    const bsbCsvContent = fs.readFileSync(BSB_INPUT_FILE, 'utf8');
    let lineNumber = 0;
    const lines = bsbCsvContent.split('\n').filter(line => line.trim().length > 0);
    for (const line of lines) {
        lineNumber++;
        try {
            // Parse line.
            const [bsbBookName, chapterSequence, verseSequence, hebrewWord, strongNumber] = line.split('\t');
            if (bsbBookName === 'bookName') {
                continue; // Skip header line
            }
            const normalizedHebrewWord = normalizeHebrewText(
                hebrewWord.replace(/ש/g, () => {
                    // The BSB data has few cases of ש without a Sin/Shin point:
                    if (hebrewWord.replace(new RegExp(`[^ש${hebrewLetters}]`, 'g'), '').includes('ישׂשכר')) {
                        // Special case: the word "יששכר" is sometimes written without a Sin/Shin point on the second ש.
                        return 'שׂ';
                    } else if (hebrewWord === 'שֵיבָ֖ה') {
                        return 'שׂ';
                    } else if (hebrewWord === 'אִ֥יש' || hebrewWord === 'חמש' || hebrewWord === 'שָמַ֖יִם') {
                        return 'שׁ';
                    } else {
                        throw new Error(`Found unnormalized ש (without a Sin/Shin point) in word ${JSON.stringify(hebrewWord)}`);
                    }
                })
            );

            if (!normalizedHebrewWord) {
                throw new Error(`Missing Hebrew word in line ${line}`);
            }
            if (strongNumber < 0 || strongNumber > 0xFFFF) {
                throw new Error(`Strong number ${strongNumber} is out of range`);
            }

            // Parse book-name, and maintain a reference into the relevant bookNamesToData[...]
            const bsbHebrewBookName = bsbBookNamesToHebrew[bsbBookName];
            if (!bsbHebrewBookName) {
                throw new Error(`Unknown BSB book name ${JSON.stringify(bsbBookName)}`);
            }
            if (bsbHebrewBookName !== currentHebrewBookName) {
                // New book
                currentHebrewBookName = bsbHebrewBookName;
                currentHebrewChapterSequence = 0;
                currentHebrewVerseSequence = 0;
                currentBookData = [];
                bookNamesToData[currentHebrewBookName] = currentBookData;
            }

            // Parse chapter-sequence, and maintain a reference into the relevant bookNamesToData[...][...]
            const chapterSequenceNumber = parseInt(chapterSequence);
            if (isNaN(chapterSequenceNumber)) {
                throw new Error(`Invalid chapter sequence number ${JSON.stringify(chapterSequence)}`);
            }
            if (chapterSequenceNumber !== currentHebrewChapterSequence) {
                // New chapter
                if (chapterSequenceNumber !== currentHebrewChapterSequence + 1) {
                    throw new Error(`Unexpected chapter sequence number ${chapterSequenceNumber}, expected ${currentHebrewChapterSequence + 1}`);
                }
                currentHebrewChapterSequence = chapterSequenceNumber;
                currentHebrewVerseSequence = 0;
                currentChapterData = [];
                currentBookData.push(currentChapterData);
            }

            // Parse verse-sequence, and maintain a reference into the relevant bookNamesToData[...][...][...]
            const verseSequenceNumber = parseInt(verseSequence);
            if (isNaN(verseSequenceNumber)) {
                throw new Error(`Invalid verse sequence number ${JSON.stringify(verseSequence)}`);
            }
            if (verseSequenceNumber !== currentHebrewVerseSequence) {
                // New verse
                if (verseSequenceNumber !== currentHebrewVerseSequence + 1) {
                    throw new Error(`Unexpected verse sequence number ${verseSequenceNumber}, expected ${currentHebrewVerseSequence + 1}`);
                }
                currentHebrewVerseSequence = verseSequenceNumber;
                currentVerseData = [];
                currentChapterData.push(currentVerseData);
            }

            // Add the word to the current verse
            const strongNumberValue = strongNumber ? parseInt(strongNumber) : 0;
            if (isNaN(strongNumberValue)) {
                throw new Error(`Invalid Strong number ${JSON.stringify(strongNumber)}`);
            }
            currentVerseData.push([normalizedHebrewWord, strongNumberValue]);
        } catch (error) {
            console.error(`Error processing line ${lineNumber} of ${BSB_INPUT_FILE}:\n  Line: ${JSON.stringify(line)}\n  Error: `, error);
            process.exit(1);
        }
    }
})();


/**
 * strongNumbersToData[strong-number] --> [hebrew-word, word-type-index, searchable-hebrew-word]
 *    note: searchable-hebrew-word is only populated in the browser!
 * @type {[string, number, string?][]}
 */
const strongNumbersToData = [];
(() => { // populate strongNumbersToData
    const wordTypesToIndex = Object.fromEntries(
        Object.keys(wordTypesToHebrew).map((wordType, index) => [wordType, index])
    );
    const bsbCsvContent = fs.readFileSync(BIBLEHUB_INPUT_FILE, 'utf8');
    const lines = bsbCsvContent.split('\n');
    for (const line of lines) {
        // Start of the input file:
        //    | מנוקד          | נקי            | Type         | Strong's number & Biblehub link                |
        //    | -------------- | -------------- | ------------ | ---------------------------------------------- |
        //    | אָב             | אב             | Noun         | [ 1    ](https://biblehub.com/hebrew/1.htm)    |
        //    | אַב             | אב             | Noun         | [ 2    ](https://biblehub.com/hebrew/2.htm)    |
        const parsed = line.match(/^\s*\|\s*(.+?)\s*\|\s*.+?\s*\|\s*(.+?)\s*\|\s*\[\s*(\d+)\s*]\(https:\/\/biblehub\.com\/hebrew\/\d+\.htm\)\s*\|$/);
        if (parsed) {
            const [_wholeMatch, hebrewWordWithPoints, englishWordType, strongNumber] = parsed;
            const wordTypeIndex = wordTypesToIndex[englishWordType];
            if (wordTypeIndex === undefined) {
                throw new Error(`Unknown word type ${JSON.stringify(englishWordType)}\n    in line: ${JSON.stringify(line)}\n    of file ${JSON.stringify(BIBLEHUB_INPUT_FILE)}`);
            }
            strongNumbersToData[strongNumber] = [normalizeHebrewText(hebrewWordWithPoints), wordTypeIndex];
        }
    }

    // Fill missing entries - some strong-numbers are not defined (for example, 0)
    for (let strongNumber = 0; strongNumber < strongNumbersToData.length; strongNumber++) {
        if (!strongNumbersToData[strongNumber]) {
            strongNumbersToData[strongNumber] = [
                ' ', // using a single space, because encodeHebrewText() can't handle empty words
                hebrewWordTypes.length, // not using -1 because encodeWordsWithStrongNumbers can't handle negatives
            ];
        }
    }
})();



// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ------------------------------    Build the HTML    ------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

try {
    /**
     * Each item is either a function-reference or a [constant's name, its value] - that will be inserted into the HTML.
     * type {(string|[string, any])[]}
     */
    const functionsAndConstants = [
                    // ['MAX_SEARCH_RESULTS', MAX_SEARCH_RESULTS],
                    // ['FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS', FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS],
                    // ['CHAPTERS_IN_BIBLE', CHAPTERS_IN_BIBLE],
                    // ['MAX_CHAPTERS_IN_BOOK', MAX_CHAPTERS_IN_BOOK],
                    // ['WORD_TYPE_INDEX_VERB', WORD_TYPE_INDEX_VERB],
                    // ['MAX_LENGTH_OF_RECENT_SEARCHES', MAX_LENGTH_OF_RECENT_SEARCHES],
        ['hebrewBookNames', hebrewBookNames],
        ['hebrewWordTypes', hebrewWordTypes],
                    // ['hebrewLetters', hebrewLetters],
                    // ['hebrewPoints', hebrewPoints],
                    // ['hebrewAccents', hebrewAccents],
                    // ['hebrewNonLetters', hebrewNonLetters],
        ['hebrewCharacters', hebrewCharacters],
        ['nonHebrewLettersRegex', nonHebrewLettersRegex],
        ['hebrewPointsRegex', hebrewPointsRegex],
        ['hebrewAccentsRegex', hebrewAccentsRegex],
        ['hebrewNonLettersRegex', hebrewNonLettersRegex],
                    // ['allVerses', allVerses],
                    // domIsLoaded,
                    // isMobileMode,
                    // initInfoDialog,
                    // initRecentSearches,
        numberToHebrew,
        fixShinSin,
        normalizeHebrewText,
                    // decodeWordsWithStrongNumbers,
                    // escapeHtml,
                    // initStrongNumbersData,
                    // initTocHtml,
                    // addBookData,
                    // addChapterData,
                    // bibleDataAdded,
                    // showMessage,
                    // setRecentSearchesVisibility,
                    // setCentralLeftVisibilityAndClear,
                    // resetVerseElementBehaviour,
                    // handleVerseMouseEnter,
                    // handleVerseMouseClick,
                    // handleVerseMouseDoubleClick,
                    // copyVerseToClipboard,
                    // performSearch,
                    // normalizeSearchRegExp,
                    // replaceInRegExpSource,
                    // clearSearch,
                    // fixVisibleVerse,
                    // scrollToTop,
                    // showInfoDialog,
                    // toggleLocations,
                    // togglePoints,
                    // toggleAccents,
                    // setHashParameters,
                    // getHashParameter,
    ];


    // Insert some functions and constants into the HTML.
    html.push(
        getSkeletonHtml().replace(
            /\/\/ Dynamically added JavaScript code will go here/,
            () => '\n' +  // using a function instead of a string, to avoid $ in the code to be interpreted
                functionsAndConstants.map(functionOrConstant => {
                    if (typeof functionOrConstant === 'function') {
                        return functionOrConstant.toString()
                            .replace(/^function (\w+)(\([^)]*\))/gm, '$1 = $2 =>');
                    } else {
                        const [constantName, constantValue] = functionOrConstant;
                        const serialization = (constantValue instanceof RegExp)
                            ? constantValue.toString()
                            : JSON.stringify(constantValue, undefined, '\t');
                        return `const ${constantName} = ${serialization};`;
                    }
                }).join('\n\n').replace(/^/gm, '\t\t\t')
        )
    );

    // Populate strongNumbersToData
    addBiblehubDataToHtml();

    // Add table-of-contents HTML
    addTocHtml();

    // Add actual Bible text: books --> chapters --> verses --> words-with-Strong-numbers
    addBibleTextToHtml();

    // Write the output file
    fs.writeFileSync(BIBLE_VIEWER_OUTPUT_FILE, html.join(''), 'utf8');
    console.log(`Successfully built ${BIBLE_VIEWER_OUTPUT_FILE}`);
    process.exit(0);

} catch (error) {
    console.error(error);
    process.exit(1);
}

/**
 * Add table-of-contents HTML
 * This will add to the HTML a <script> tag that calls initTocHtml(),
 *  which will populate the TOC with Hebrew book names and chapter numbers.
 */
function addTocHtml() {
    html.push(
        '\n<script>\n',
        'initTocHtml();\n',
        '</script>\n');
}

/**
 * Populate strongNumbersToData:
 * This will add to the HTML a <script> tag with the strongNumbersToData encoded in Base64.
 */
function addBiblehubDataToHtml() {
    html.push(
        '\n<script>\n',
        'initStrongNumbersData(', JSON.stringify(encodeWordsWithStrongNumbers(strongNumbersToData)), ');\n',
        '</script>\n');
}

/**
 * Per book, add <script> tags with the book's data encoded in Base64. Example:
 *    <script> addBookData("בראשית"); </script>
 *    <script>
 *        addChapterData(    // Chapter 1
 *            "...base64-encoded-data...",    // Verse 1
 *            "...base64-encoded-data...",    // Verse 2
 *            ...
 *        );
 *    </script>
 *    <script>
 *        addChapterData(    // Chapter 2
 *            "...base64-encoded-data...",    // Verse 1
 *            "...base64-encoded-data...",    // Verse 2
 *            ...
 *        );
 *    </script>
 *    ...
 *    <script> bibleDataAdded(); </script>
 */
function addBibleTextToHtml() {
    let addedChaptersCount = 0;
    html.push('\n\n<script> ');
    for (const hebrewBookName of hebrewBookNames) {
        const bookData = bookNamesToData[hebrewBookName];
        html.push('addBookData(', JSON.stringify(hebrewBookName), ');\n');
        if (!FILTER_LOADED_BOOKS_REGEXP || hebrewBookName.match(FILTER_LOADED_BOOKS_REGEXP)) {
            for (const [chapterIndex, chaptersData] of bookData.entries()) {
                html.push('addChapterData( // ', numberToHebrew(chapterIndex), '\n');
                for (const [verseIndex, verseData] of chaptersData.entries()) {
                    const base64EncodedVerse = encodeWordsWithStrongNumbers(verseData);
                    html.push('    ', JSON.stringify(base64EncodedVerse), ', // ', numberToHebrew(verseIndex), '\n');
                }
                html.push(');');
                addedChaptersCount++;
                if (addedChaptersCount % 10 === 0) {
                    html.push(' </script><script> ');
                }
            }
        }
    }
    html.push('\n bibleDataAdded(); </script>\n');
}


// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -------------------------------    Hebrew Utils    -------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

/**
 *    1  -->    "א"
 *    2  -->    "ב"
 *   10  -->    "י"
 *   15  -->   "טו"
 *   16  -->   "טז"
 *   17  -->   "יז"
 *  123  -->  "קכג"
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
    if (numberBase1 === 15) {
        return 'טו';
    }
    if (numberBase1 === 16) {
        return 'טז';
    }
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
 * Replace Shin/Sin - from Unicode-combination to single Unicode:  שׁ --> שׁ,  	שׂ --> שׂ
 * @param {string} hebrewText
 * @return {string}
 */
function fixShinSin(hebrewText) {
    return hebrewText
        // Shin - from Unicode-combination to single Unicode:  שׁ --> שׁ
        .replace(
            /\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c1/g,
            `שׁ$1`,
        )
        // Sin - from Unicode-combination to single Unicode:  שׂ --> שׂ
        .replace(
            /\u05e9([\u0590-\u05c1\u05c3-\u05cf\u05eb-\u05FF]*)\u05c2/g,
            `שׂ$1`,
        ); // שׁ
}

/**
 * Make basic normalization of any string that may contain some Hebrew parts:
 *   - Shin/Sin - from Unicode-combination to single Unicode:  שׁ --> שׁ,  	שׂ --> שׂ
 * @param {string} hebrewText
 * @return {string}
 */
function normalizeHebrewText(hebrewText) {
    const normalized = fixShinSin(hebrewText)
        .replace(/־/g, '') // remove Maqaf
        .replace(/׃[פס׆]*$/, ''); // remove סוף-פסוק, ופרשייה פתוחה/סגורה

    // Validate that all characters are valid Hebrew characters
    for (const char of normalized) {
        if (!(char in hebrewCharacterToIndex)) {
            throw new Error(`Unknown Hebrew character ${JSON.stringify(char)} in word ${JSON.stringify(normalized)}`);
        }
    }

    return normalized;
}

/**
 * Given a Hebrew text, convert each character to a number (the index of the character in hebrewCharacters),
 *  and add that number to a Uint8Array.
 * The last character's number will have 0x80 added to it, to indicate the end of the word.
 * @param hebrewText
 * @param {Uint8Array} uint8Array
 */
function encodeHebrewText(hebrewText, uint8Array) {
    if (!hebrewText) {
        throw new Error(`encodeHebrewText() - Empty hebrewText not supported (can't mark last character)`);
    }
    let offset = 0;
    for (const char of hebrewText) {
        const charIndex = hebrewCharacterToIndex[char];
        if (charIndex === undefined) {
            throw new Error(`encodeHebrewText() - Unknown Hebrew character ${JSON.stringify(char)} in word ${JSON.stringify(hebrewText)}`);
        }
        let byteValue = charIndex;
        if (offset === hebrewText.length - 1) {
            byteValue |= 0x80; // Mark last character with high bit
        }
        uint8Array[offset] = byteValue;
        offset++;
    }
}

/**
 * Given an array of [HebrewWord, StrongNumber] entries, encode them into a Uint8Array.
 * Each Hebrew word is encoded using encodeHebrewText(), followed by two bytes for the Strong number (big-endian).
 * Return the Base64 representation of the resulting Uint8Array.
 * @param {[string, number][]} wordsWithStrongNumbers
 * @returns {string}
 */
function encodeWordsWithStrongNumbers(wordsWithStrongNumbers) {
    // Calculate the total length needed
    let totalLength = 0;
    for (const [hebrewWord] of wordsWithStrongNumbers) {
        totalLength += hebrewWord.length; // 1 byte per Hebrew character
        totalLength += 2; // 2 bytes for the Strong number
    }

    // Scan the [HebrewWord, StrongNumber] entries and encode them
    const uint8Array = new Uint8Array(totalLength);
    let offset = 0;
    for (const [hebrewWord, strongNumber] of wordsWithStrongNumbers) {
        // Encode the Hebrew word
        encodeHebrewText(hebrewWord, uint8Array.subarray(offset, offset + hebrewWord.length));
        offset += hebrewWord.length;

        // Encode the Strong number (2 bytes, big-endian)
        if (strongNumber < 0 || strongNumber > 0xffff) {
            throw new Error(`encodeWordsWithStrongNumbers() - Strong number ${strongNumber} is out of range`);
        }
        uint8Array[offset] = (strongNumber >> 8) & 0xFF; // High byte
        uint8Array[offset + 1] = strongNumber & 0xFF; // Low byte
        offset += 2;
    }
    if (offset !== totalLength) {
        throw new Error(`encodeWordsWithStrongNumbers() - Mismatch in calculated length: expected ${totalLength}, got ${offset}`);
    }

    // Convert the Uint8Array to a Base64 string.
    return Buffer.from(uint8Array).toString('base64');
}

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -------------------------------    HTML Skeleton    ------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

function getSkeletonHtml() {
    return fs.readFileSync('__bible-viewer.html', 'utf8')
        // Inline __bible-viewer.css
        .replace(
            /.*<!-- this will we auto-replaced: -->\n.*<link .*href="__bible-viewer.css">/,
            () => // prevent auto-replacements
                '    <style>\n' +
                fs.readFileSync('__bible-viewer.css', 'utf8').replace(/^/gm, '        ') +
                '\n    </style>\n'
        )
        // Inline __bible-viewer.js
        .replace(
            /.*<!-- this will we auto-replaced: -->\n.*<script .*src="__bible-viewer.js"><\/script>/,
            () => // prevent auto-replacements
                '    <script>\n' +
                fs.readFileSync('__bible-viewer.js', 'utf8').replace(/^/gm, '        ') +
                '</script>\n'
        );
}
