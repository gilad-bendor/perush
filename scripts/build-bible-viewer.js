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
 *   - Hovering over a biblical verse will show its location (book, chapter, verse)
 *   - Clicking a biblical verse will **fixate** location (book, chapter, verse) for few seconds - to allow copying it to clipboard
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
const MAX_SEARCH_RESULTS = 1000;
const FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS = 3000; // after clicking a verse, ignore mouse-enter events for this many milliseconds
const CHAPTERS_IN_BIBLE = 929;

/**
 * For debug - load only books that match this regexp (null = load all).
 * @type {RegExp | null}
 */
const FILTER_LOADED_BOOKS_REGEXP = null; // /בראשית/;

/**
 * HTML builder - all items are joint to build the content of bible-viewer.html
 * @type {(string|number|boolean)[]}
 */
const html = [];

/**
 * This constant only lives in the browser:
 * @type {{book: string, chapter: string, verse: string, readableVerse: string, searchableVerse: string, words: string[], strongs: number[], verseElement: HTMLElement}[]}
 */
const allVerses = [];


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
    Genesis: 'בראשית',
    Exodus: 'שמות',
    Leviticus: 'ויקרא',
    Numbers: 'במדבר',
    Deuteronomy: 'דברים',
    Joshua: 'יהושע',
    Judges: 'שופטים',
    Ruth: 'רות',
    Samuel1: 'שמואל-א',
    Samuel2: 'שמואל-ב',
    Kings1: 'מלכים-א',
    Kings2: 'מלכים-ב',
    Chronicles1: 'דברי-הימים-א',
    Chronicles2: 'דברי-הימים-ב',
    Ezra: 'עזרא',
    Nehemiah: 'נחמיה',
    Esther: 'אסתר',
    Job: 'איוב',
    Psalm: 'תהילים',
    Proverbs: 'משלי',
    Ecclesiastes: 'קהלת',
    SongOfSolomon: 'שיר-השירים',
    Isaiah: 'ישעיהו',
    Jeremiah: 'ירמיהו',
    Lamentations: 'איכה',
    Ezekiel: 'יחזקאל',
    Daniel: 'דניאל',
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

/**
 * All the letters in Hebrew, with Shin represented by two characters: שּׁ and שּׂ
 * @type {string}
 */
const hebrewLetters = 'אבגדהוזחטיךכלםמןנסעףפץצקרשׁשׂת';

/**
 * All the Hebrew characters that are not letters
 * @type {string}
 */
const hebrewNonLetters =
    '\u05b0\u05b1\u05b2\u05b3\u05b4\u05b5\u05b6\u05b7\u05b8\u05b9\u05ba\u05bb\u05bc\u05bd\u05bf\u05c0\u05c3\u05c4\u05c5\u05c6' + // Points
    '\u0591\u0592\u0593\u0594\u0595\u0596\u0597\u0598\u0599\u059a\u059b\u059c\u059d\u059e\u059f\u05a0\u05a1\u05a3\u05a4\u05a5\u05a6\u05a7\u05a8\u05a9\u05aa\u05ab\u05ac\u05ad\u05ae' + // Accents
    '\u200d'; // Zero-width joiner: when placed between two characters that would otherwise not be connected, causes them to be printed in their connected forms


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
const hebrewNonLettersRegex = new RegExp(`[${hebrewNonLetters}]`, 'g');



// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -----------------------------    Read Input Files    -----------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

/**
 * bsbData[hebrewBookName][hebrewChapterNumber][hebrewVerseNumber] = [ [word1, strong1], [word2, strong2], ... ]
 * @type {Record<string, [string,number][][][]>}
 */
const bsbData = {};
(() => { // populate bsbData
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
            const normalizedHebrewWord = normalizeHebrewText(hebrewWord);
            if (!normalizedHebrewWord) {
                throw new Error(`Missing Hebrew word in line ${line}`);
            }
            if (strongNumber < 0 || strongNumber > 0xFFFF) {
                throw new Error(`Strong number ${strongNumber} is out of range`);
            }

            // Parse book-name, and maintain a reference into the relevant bsbData[...]
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
                bsbData[currentHebrewBookName] = currentBookData;
            }

            // Parse chapter-sequence, and maintain a reference into the relevant bsbData[...][...]
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

            // Parse verse-sequence, and maintain a reference into the relevant bsbData[...][...][...]
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
 * biblehubData[strong-number] --> [hebrew-word, word-type-index, searchable-hebrew-word]
 *    note: searchable-hebrew-word is only populated in the browser!
 * @type {[string, number, string?][]}
 */
const biblehubData = [];
(() => { // populate biblehubData
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
            biblehubData[strongNumber] = [normalizeHebrewText(hebrewWordWithPoints), wordTypeIndex];
        }
    }

    // Fill missing entries - some strong-numbers are not defined (for example, 0)
    for (let strongNumber = 0; strongNumber < biblehubData.length; strongNumber++) {
        if (!biblehubData[strongNumber]) {
            biblehubData[strongNumber] = [
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
    // These variables only live in the browser:
    let lastAddedBookName = '';
    let addedChaptersCount = 0;
    let lastAddedChapterIndexInBook = 0;
    let lastVerseMouseEnterTime = 0;
    let allDataWasAdded = false;

    /**
     * Each item is either a function-reference or a [constant's name, its value] - that will be inserted into the HTML.
     * type {(string|[string, any])[]}
     */
    const functionsAndConstants = [
        ['MAX_SEARCH_RESULTS', MAX_SEARCH_RESULTS],
        ['FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS', FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS],
        ['CHAPTERS_IN_BIBLE', CHAPTERS_IN_BIBLE],
        ['hebrewBookNames', hebrewBookNames],
        ['hebrewWordTypes', hebrewWordTypes],
        ['hebrewLetters', hebrewLetters],
        ['hebrewNonLetters', hebrewNonLetters],
        ['hebrewCharacters', hebrewCharacters],
        ['nonHebrewLettersRegex', nonHebrewLettersRegex],
        ['hebrewNonLettersRegex', hebrewNonLettersRegex],
        ['allVerses', allVerses],
        domIsLoaded,
        numberToHebrew,
        fixShinSin,
        normalizeHebrewText,
        hebrewFinalsToRegulars,
        decodeWordsWithStrongNumbers,
        escapeHtml,
        initBiblehubData,
        addBookData,
        addChapterData,
        bibleDataAdded,
        showMessage,
        setCentralLeftVisibilityAndClear,
        resetVerseElementBehaviour,
        handleVerseMouseEnter,
        handleVerseMouseClick,
        handleVerseMouseDoubleClick,
        performSearch,
        clearSearch,
        showInfoDialog,
    ];

    /**
     * This function only lives in the browser:
     * Initializations once the DOM is loaded (not including the data <script> tags).
     */
    function domIsLoaded() {
        showMessage(`Loading page...`, 'bottom-bar');

        // Initialize the splitter between the left sidebar and the main area.
        (() => {
            /** @type {HTMLElement} */ const splitter = document.getElementById('splitter');
            /** @type {HTMLElement} */ const centralLeft = document.querySelector('.central-left');
            let isDragging = false;
            let startX = 0;
            let startWidth = 0;

            splitter.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                startWidth = centralLeft.offsetWidth;
                splitter.classList.add('dragging');
                document.body.style.cursor = 'col-resize';
                document.body.style.userSelect = 'none';
                e.preventDefault();
            });

            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const delta = e.clientX - startX;
                const newWidth = startWidth + delta;
                centralLeft.style.width = `${newWidth}px`;
            });

            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    splitter.classList.remove('dragging');
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                }
            });
        })();
    }

    /**
     * This function only lives in the browser:
     * Show a message in:
     *   - target='bottom-bar' - override (and possibly clear) the bottom-bar
     *   - target='search-results' - add a message in the left sidebar (search results)
     *   - target='dialog' - show (override and possibly clear) a modal dialog with the message
     * @param {string} messageHtml - empty string to clear the message
     * @param {'bottom-bar'|'search-results'|'dialog'?} target
     * @returns {HTMLElement} The HTMLElement that contains the message
     */
    function showMessage(messageHtml, target) {
        switch (target) {
            case 'bottom-bar': {
                const bottomMessageBarElement = document.getElementById('bottom-message-bar');
                bottomMessageBarElement.innerHTML = messageHtml || ' ';
                return bottomMessageBarElement;
            }
            case 'search-results': {
                const searchResultsElement = document.querySelector('.search-results');
                const messageWrapperElement = document.createElement('div');
                messageWrapperElement.className = 'search-message';
                messageWrapperElement.innerHTML = messageHtml;
                searchResultsElement.appendChild(messageWrapperElement);
                return messageWrapperElement;
            }
            default: {
                throw new Error(`showMessage() - unexpected target ${JSON.stringify(target)}`);
            }
        }
    }

    /**
     * This function only lives in the browser:
     * Show or hide the left sidebar (the search results).
     * This will *ALSO CLEAR* the search results.
     * @param {boolean} visible
     */
    function setCentralLeftVisibilityAndClear(visible) {
        /** @type {HTMLElement} */ const centralLeftElement = document.querySelector('.central-left');
        /** @type {HTMLElement} */ const splitterElement = document.querySelector('.splitter');
        /** @type {HTMLElement} */ const searchResultsElement = document.querySelector('.search-results');
        searchResultsElement.innerHTML = '';
        const classListMethod = visible ? 'remove' : 'add';
        centralLeftElement.classList[classListMethod]('hidden');
        splitterElement.classList[classListMethod]('hidden');
    }

    /**
     * This function only lives in the browser:
     * Reset the event-listeners of a verse element (after creating it).
     * @param {HTMLElement} verseElement
     */
    function resetVerseElementBehaviour(verseElement) {
        verseElement.addEventListener('mousemove', handleVerseMouseEnter);
        verseElement.addEventListener('click', handleVerseMouseClick);
        verseElement.addEventListener('dblclick', handleVerseMouseDoubleClick);
    }

    /**
     * This function only lives in the browser:
     * When the mouse enters a verse, show its location (book, chapter, verse) in the bottom bar.
     * @param {MouseEvent} event
     */
    function handleVerseMouseEnter(event) {
        if ((Date.now() - lastVerseMouseEnterTime) > FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS) {
            /** @type {HTMLElement} */ const clickedVerseElement = event.currentTarget;
            const verseInfo = allVerses[Number(clickedVerseElement.dataset.index)];
            showMessage(`${verseInfo.book} ${verseInfo.chapter}:${verseInfo.verse}`, 'bottom-bar');
        }
    }

    /**
     * This function only lives in the browser:
     * When the user clicks a verse, show its location (book, chapter, verse) in the bottom bar,
     *  and freeze it for few seconds (e.g. don't let mouse-enter change it) so the user has a
     *  chance to copy it to the clipboard.
     * @param {MouseEvent} event
     */
    function handleVerseMouseClick(event) {
        lastVerseMouseEnterTime = 0; // so that handleVerseMouseEnter(event) is not ignored
        handleVerseMouseEnter(event);
        lastVerseMouseEnterTime = Date.now();

        // Highlight the clicked verse (and un-highlight all others).
        // Note that a single verse may appear multiple times in the text (e.g. Psalms 150:6), so highlight all of them.
        document.querySelectorAll('.recently-clicked-verse').forEach(
            (/** @type {HTMLElement} */ element) => element.classList.remove('recently-clicked-verse')
        );
        /** @type {HTMLElement} */ const clickedVerseElement = event.currentTarget;
        document.querySelectorAll(`.verse[data-index="${clickedVerseElement.dataset.index}"]`).forEach((verseElement) =>
            verseElement.classList.add('recently-clicked-verse')
        );
    }

    /**
     * This function only lives in the browser:
     * When the user double-clicks a *WORD* in a verse, initiate a search over that word's strong-number.
     * @param {MouseEvent} event
     */
    function handleVerseMouseDoubleClick(event) {
        /** @type {HTMLElement} */ const verseElement = event.currentTarget;
        const originalHtml = verseElement.innerHTML;

        // Detect the clicked word:
        // Clear the clicked verse's HTML, and add word-by-word,
        //  until the click-coordinates are within the word's bounding-rectangle.
        let strongNumberToSearchFor = 0;
        const words = verseElement.innerText.split(' ');
        verseElement.innerHTML = '';
        wordsScan:
            for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
                const word = words[wordIndex];
                const wordElement = document.createElement('span');
                wordElement.appendChild(document.createTextNode(word));
                verseElement.appendChild(wordElement);
                for (const rect of wordElement.getClientRects()) {
                    if (event.clientX >= rect.left && event.clientX <= rect.right &&
                        event.clientY >= rect.top && event.clientY <= rect.bottom) {
                        // Found the clicked word - initiate a search for its Strong number.
                        const verseInfo = allVerses[Number(verseElement.dataset.index)];
                        strongNumberToSearchFor = verseInfo.strongs[wordIndex];
                        if (strongNumberToSearchFor) {
                            break wordsScan;
                        }
                    }
                }

                // Add inter-word space.
                verseElement.appendChild(document.createTextNode(' '));
            }

        // Restore the original HTML.
        verseElement.innerHTML = originalHtml;

        // If a word is found - initiate a search for its Strong number.
        if (strongNumberToSearchFor) {
            /** @type {HTMLInputElement} */ const searchInputElement = document.getElementById('search-input');
            searchInputElement.value = `<${strongNumberToSearchFor}>`;
            performSearch(new Event('submit'));
        }
    }

    /**
     * This function only lives in the browser:
     * Given the encoded biblehubData, add the searchable-hebrew-word to each entry.
     * @param {string} encodedBiblehubData
     */
    function initBiblehubData(encodedBiblehubData) {
        // Decode the encoded biblehubData into the real biblehubData
        biblehubData.push(
            ...decodeWordsWithStrongNumbers(
                encodedBiblehubData
            )
        );

        // Per biblehubData item - which is currently [hebrew-word, word-type-index] -
        //  add the 3rd item: searchable-hebrew-word.
        for (let strongNumber = 0; strongNumber < biblehubData.length; strongNumber++) {
            const entry = biblehubData[strongNumber];
            const [hebrewWordWithPoints, wordTypeIndex] = entry;
            if (wordTypeIndex !==  hebrewWordTypes.length) {
                entry.push(
                    hebrewFinalsToRegulars(
                        normalizeHebrewText(hebrewWordWithPoints)
                            .replace(nonHebrewLettersRegex, '') // Remove Points/Accents
                    )
                );
            }
        }
    }

    /**
     * This function only lives in the browser:
     * Prepare to receive the chapters of a book: addChapterData() is expected to be called soon.
     * @param {string} hebrewBookName
     */
    function addBookData(hebrewBookName) {
        // Add the book-header to the HTML
        const versesContainerElement = document.getElementById('verses-container');
        const bookHeaderElement = document.createElement('div');
        bookHeaderElement.className = 'book-header';
        bookHeaderElement.appendChild(document.createTextNode(hebrewBookName));
        versesContainerElement.appendChild(bookHeaderElement);
        lastAddedBookName = hebrewBookName;
        lastAddedChapterIndexInBook = 0;
    }

    /**
     * This function only lives in the browser:
     * Given a whole chapter's data (encoded verses), process it into JavaScript data-structures and HTML.
     * @param {string} chapterData - chapters --> encoded-verses - see encodeWordsWithStrongNumbers()
     */
    function addChapterData(...chapterData) {
        // Show loading progress in the bottom bar
        const chapterHebrewNumber = numberToHebrew(lastAddedChapterIndexInBook);
        showMessage(
            `Loading (` +
            `<div style="display: inline-block; width: 2.5em; text-align: right;">` +
            `${String(Math.round(100 * addedChaptersCount / CHAPTERS_IN_BIBLE)).padStart(2)}%` +
            `</div>):  ` +
            `<div style="display: inline-block; width: 12em; text-align: right;">${lastAddedBookName} ${chapterHebrewNumber}</div>`,
            'bottom-bar',
        );

        // Prepare
        const versesContainerElement = document.getElementById('verses-container');

        // Add the chapter-header to the HTML
        const chapterHeaderElement = document.createElement('div');
        chapterHeaderElement.className = 'chapter-header';
        chapterHeaderElement.appendChild(document.createTextNode(`   ${lastAddedBookName}  ${chapterHebrewNumber}   `));
        versesContainerElement.appendChild(chapterHeaderElement);

        // Scan chapter's verses
        for (const [verseIndex, verseData] of chapterData.entries()) {
            const verseHebrewNumber = numberToHebrew(verseIndex);
            const wordsWithStrongNumbers = decodeWordsWithStrongNumbers(verseData);
            const words = wordsWithStrongNumbers.map(([word]) => normalizeHebrewText(word));
            const strongs = wordsWithStrongNumbers.map(([, strong]) => strong);
            const readableVerse = words.join(' ');
            const searchableVerse =
                ' ' +    // Spaces at beginning and end, to simplify searching for whole words
                wordsWithStrongNumbers.map(([word, strongNumber]) =>
                    hebrewFinalsToRegulars(
                        normalizeHebrewText(word)
                            .replace(nonHebrewLettersRegex, '') // Remove Points/Accents
                    ) +
                    `<${strongNumber}>`
                ).join(' ') +
                ' ';    // Spaces at beginning and end, to simplify searching for whole words

            // Add the verse to the HTML
            const verseElement = document.createElement('div');
            verseElement.className = 'verse';
            verseElement.dataset.book = lastAddedBookName;
            verseElement.dataset.chapter = String(lastAddedChapterIndexInBook);
            verseElement.dataset.verse = String(verseIndex);
            verseElement.dataset.index = String(allVerses.length);
            verseElement.dataset.searchable = searchableVerse; // TODO: remove if turns out to be slow
            resetVerseElementBehaviour(verseElement);
            verseElement.appendChild(document.createTextNode(readableVerse));
            versesContainerElement.appendChild(verseElement);

            // Store the verse in allVerses.
            allVerses.push({
                book: lastAddedBookName,
                chapter: chapterHebrewNumber,
                verse: verseHebrewNumber,
                readableVerse,
                searchableVerse,
                words,
                strongs,
                verseElement,
            });
        }

        lastAddedChapterIndexInBook++;
        addedChaptersCount++;
        console.log(`addedChaptersCount = `, addedChaptersCount, '     time-since-load: ', (Date.now() - performance.timing.navigationStart) / 1000); // TODO: remove debug
    }

    /**
     * This function only lives in the browser:
     * Called once all bible data has been added (addBookData() and addChapterData() are all called).
     */
    function bibleDataAdded() {
        // All books have been added: mark the page as loaded.
        allDataWasAdded = true;
        showMessage('', 'bottom-bar');

        // The info-icon starts of as highlighted, to draw the user's attention to it,
        //  and immediately after the page is loaded, it is gradually un-highlighted.
        /** @type {HTMLElement} */ const infoIconElement = document.querySelector(`.info-icon`);
        infoIconElement.style.backgroundColor = "transparent";
    }

    function clearSearch() {
        setCentralLeftVisibilityAndClear(false);
        showMessage('', 'bottom-bar');
        document.querySelectorAll('.highlighted-verse').forEach((/** @type {HTMLElement} */ element) => element.remove());
    }

    function performSearch(event) {
        event.preventDefault(); // stops the page reload

        /** @type {HTMLInputElement} */ const searchInputElement = document.getElementById('search-input');
        /** @type {HTMLElement} */ const searchResultsElement = document.querySelector('.search-results');

        // Show the verbatim search-query on the left sidebar
        clearSearch();
        setCentralLeftVisibilityAndClear(true);
        const searchQuery = searchInputElement.value;
        showMessage(`חיפוש: <span class='code'>${escapeHtml(searchQuery)}</span>`, 'search-results');

        // Warn if data is still being loaded
        if (!allDataWasAdded) {
            showMessage(`<div class="error-message">הנתונים עדיין נטענים - התוצאות יהיו חלקיות!\nאנא המתן מספר שניות ונסה שוב</div>`, 'search-results');
        }

        let searchRegExp;
        try {
            // If <...inner-RegExp...> are used - replace it to "<(strong-number-1|strong-number-2|...>"
            //  with all the strong-numbers that matches the inner-RegExp - either strong-number's hebrew-word match, or numeric match.
            // The match is "whole" - i.e. <10[12]> will match strong-numbers 101, 102 - but not 1010 or 3102.
            const searchQueryWithStrongNumbers = searchQuery.replace(/<(.*?)>/g, (wholeMatch, strongNumbersRegExpSource) => {
                try {
                    let normalizedStrongNumbersRegExpSource = fixShinSin(hebrewFinalsToRegulars(strongNumbersRegExpSource))
                        // Replace @ with a RegExp that matches any sequence of אהוי letters - or nothing
                        .replace(/@/g, '[אהוי]*')

                    // Find all strong-numbers that match strongNumbersRegExpSource.
                    /** @type {number[]} */ const matchingStrongNumbers = [];
                    const strongNumberRegExp = new RegExp(`^(${normalizedStrongNumbersRegExpSource})$`);
                    for (let strongNumber = 0; strongNumber < biblehubData.length; strongNumber++) {
                        const [_strongNumberWord, _wordTypeIndex, searchableWord] = biblehubData[strongNumber];
                        if (strongNumberRegExp.test(String(strongNumber)) ||
                            strongNumberRegExp.test(searchableWord)) {
                            matchingStrongNumbers.push(strongNumber);
                        }
                    }
                    if (matchingStrongNumbers.length === 0) {
                        throw new Error('No matching Strong numbers');
                    }
                    const replacement = `<(${matchingStrongNumbers.join('|')})>`;

                    // Report the matching strong-numbers on the left sidebar.
                    showMessage(
                        `<span class='code'>${escapeHtml(wholeMatch)}</span> מתורגם ל: <span class='code'>${escapeHtml(replacement)}</span>${
                            matchingStrongNumbers.map(strongNumber =>
                                `\n    <a href="https://biblehub.com/hebrew/${strongNumber}.htm" target="_blank">H${strongNumber}</a>  =  ${biblehubData[strongNumber][0]}  (${hebrewWordTypes[biblehubData[strongNumber][1]]})`
                            ).join('')
                        }`,
                        'search-results');

                    return replacement;
                } catch (error) {
                    // Invalid <...> RegExp
                    throw new Error(`Invalid RegExp inside <...>:\n    ${wholeMatch}\n  ${error.message}`);
                }
            });

            // Build the search RegExp
            let searchRegExpSource = fixShinSin(hebrewFinalsToRegulars(searchQueryWithStrongNumbers))
                // Collapse multiple spaces into one space
                .replace(/\s+/g, ' ')
                // Remove all Hebrew characters that are not letters
                .replace(hebrewNonLettersRegex, '')
                // Replace @ with a RegExp that matches any sequence of אהוי letters - or nothing
                .replace(/@/g, '[אהוי]*')
                // When a space is NOT preceded by <...> - then match any strong-number
                .replace(/([^>]) /g, '$1<\d+> ');
            showMessage(`<div style="display: inline-block; direction: rtl;">RegExp:</div> <span class='code'>${escapeHtml(searchRegExpSource)}</span>`, 'search-results');

            if (!searchRegExpSource.trim()) {
                throw new Error('חיפוש ריק - אנא הזן ביטוי לחיפוש');
            }

            searchRegExp = new RegExp(searchRegExpSource, 'g');
        } catch (error) {
            // Invalid RegExp
            showMessage(`<div class="error-message">${error.message}</div>`, 'search-results');
            return;
        }

        // Prepare a placeholder for the search summary message
        const summaryMessage = showMessage('', 'search-results');

        /**
         * Given a verseInfo and an offset into its searchableVerse, return the index of the word that contains that offset.
         * Note that searchableVerse is made of words with Strong numbers, e.g. " בְּרֵאשִׁית<7225> בָּרָא<1254> אֱלֹהִים<430> ... "
         *  and is surrounded by spaces.
         * @param verseInfo
         * @param offset
         */
        function searchableVerseOffsetToWordIndex(verseInfo, offset) {
            if (offset < 0 || offset >= verseInfo.searchableVerse.length) {
                throw new Error(`searchableVerseOffsetToWordIndex() - offset ${offset} is out of range`);
            }
            const spacesBeforeOffset = verseInfo.searchableVerse.substring(0, offset).replace(/[^ ]/g, '');
            return Math.max(0, spacesBeforeOffset.length - 1);  // -1 because of the leading space
        }

        let matchesCount = 0;
        for (const verseInfo of allVerses) {
            // Find all matches in verseInfo.searchableVerse - per match, get its start/end index in the verse
            /** @type {Set<number> | null} */ let highlightWordIndexes = null;
            verseInfo.searchableVerse.replace(
                searchRegExp,
                (wholeMatch, ...args) => {
                    // Find the offsets-range of the match (in verseInfo.searchableVerse)
                    const matchStartOffset = args[args.length - 2];
                    const matchEndOffset = matchStartOffset + wholeMatch.length;

                    // Convert to a words-range (in verseInfo.words)
                    const fromWordIndex = searchableVerseOffsetToWordIndex(verseInfo, matchStartOffset);
                    const toWordIndex = searchableVerseOffsetToWordIndex(verseInfo, matchEndOffset);

                    // Mark the words to be highlighted
                    highlightWordIndexes ??= new Set();
                    for (let wordIndex = fromWordIndex; wordIndex <= toWordIndex; wordIndex++) {
                        highlightWordIndexes.add(wordIndex);
                    }

                    return wholeMatch;
                },
            );

            if (highlightWordIndexes) {
                // Found a match in this verse - add it to the search-results
                matchesCount++;
                if (matchesCount > MAX_SEARCH_RESULTS) {
                    break;
                }
                /** @type {HTMLElement} */ const searchMatchElement = verseInfo.verseElement.cloneNode(false);
                resetVerseElementBehaviour(searchMatchElement);
                searchMatchElement.addEventListener('click', () => {
                    // When a search-result is clicked - scroll the relevant verse into view, and highlight it.
                    // noinspection JSUnresolvedReference
                    highlightedVerseElement.scrollIntoViewIfNeeded({behavior: 'smooth', block: 'center'});
                });
                searchMatchElement.classList.add('highlighted-verse');
                searchMatchElement.innerHTML = verseInfo.words
                    .map((word, wordIndex) => {
                        const parts = [];
                        if (highlightWordIndexes.has(wordIndex) && !highlightWordIndexes.has(wordIndex - 1)) {
                            parts.push(`<span class="highlighted-word">`);
                        }
                        parts.push(word);
                        if (highlightWordIndexes.has(wordIndex) && !highlightWordIndexes.has(wordIndex + 1)) {
                            parts.push(`</span>`);
                        }
                        return parts.join('');
                    })
                    .join(' ');
                searchResultsElement.appendChild(searchMatchElement);

                // Add a highlighted copy of the verse into the main text (this will hide the original verse via CSS)
                /** @type {HTMLElement} */ const highlightedVerseElement = searchMatchElement.cloneNode(true);
                resetVerseElementBehaviour(highlightedVerseElement);
                verseInfo.verseElement.parentElement.insertBefore(highlightedVerseElement, verseInfo.verseElement);
                verseInfo.highlightedVerseElement = highlightedVerseElement;
            }
        }

        // Show summary message
        if (matchesCount > MAX_SEARCH_RESULTS) {
            const tooManyResultsMessageHtml = `<div class="error-message">נמצאו יותר מדי תוצאות (${MAX_SEARCH_RESULTS})</div>`;
            summaryMessage.innerHTML = tooManyResultsMessageHtml;  // shown at the top of the search-results
            showMessage(tooManyResultsMessageHtml, 'search-results');  // also shown at the bottom of the search-results
        } else {
            summaryMessage.innerHTML = `נמצאו ${matchesCount} תוצאות:`;  // shown at the top of the search-results
        }
    }

    /**
     * This function only lives in the browser:
     * Show the info-dialog.
     */
    function showInfoDialog() {
        /** @type {HTMLDialogElement} */ const infoDialogElement = document.getElementById('info-dialog');
        infoDialogElement.showModal();
        /** @type {HTMLDialogElement} */ const infoDialogCloseButtonElement = document.querySelector('.info-dialog-close-button');
        infoDialogCloseButtonElement.focus();
        infoDialogCloseButtonElement.addEventListener('click', () => infoDialogElement.close());
    }

    // Insert some functions and constants into the HTML.
    html.push(
        getSkeletonHtml().replace(
            /\/\/ Dynamically added JavaScript code will go here/,
            () => '\n' +  // using a function instead of a string, to avoid $ in the code to be interpreted
                functionsAndConstants.map(functionOrConstant => {
                    if (typeof functionOrConstant === 'function') {
                        return functionOrConstant.toString();
                    } else {
                        const [constantName, constantValue] = functionOrConstant;
                        const serialization = (constantValue instanceof RegExp)
                            ? constantValue.toString()
                            : JSON.stringify(constantValue, undefined, '\t');
                        return `const ${constantName} = ${serialization};`;
                    }
                }).join('\n\n').replace(/^/gm, '\t\t')
        )
    );

    // Populate biblehubData
    addBiblehubDataToHtml();

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
 * Populate biblehubData:
 * This will add to the HTML a <script> tag with the biblehubData encoded in Base64.
 */
function addBiblehubDataToHtml() {
    html.push(
        '\n<script>\n',
        'initBiblehubData(', JSON.stringify(encodeWordsWithStrongNumbers(biblehubData)), ');\n',
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
    for (const [hebrewBookName, bookData] of Object.entries(bsbData)) {
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
        .replace(/ש/g, () => {
            // The BSB data has few cases of ש without a Sin/Shin point:
            if (hebrewText.replace(new RegExp(`[^ש${hebrewLetters}]`, 'g'), '').includes('ישׂשכר')) {
                // Special case: the word "יששכר" is sometimes written without a Sin/Shin point on the second ש.
                return 'שׁ';
            } else if (hebrewText === 'שֵיבָ֖ה') {
                return 'שׁ';
            } else if (hebrewText === 'אִ֥יש' || hebrewText === 'חמש' || hebrewText === 'שָמַ֖יִם') {
                return 'שׁ';
            } else {
                throw new Error(`Found unnormalized ש (without a Sin/Shin point) in word ${JSON.stringify(hebrewText)}`);
            }
        })
        .replace(/־/g, '') // remove Maqaf
        .replace(/׃[פסנ]*$/, ''); // remove פרשייה פתוחה/סגורה

    // Validate that all characters are valid Hebrew characters
    for (const char of normalized) {
        if (!(char in hebrewCharacterToIndex)) {
            throw new Error(`Unknown Hebrew character ${JSON.stringify(char)} in word ${JSON.stringify(normalized)}`);
        }
    }

    return normalized;
}

/**
 * Given a Hebrew text, convert any final letters (ךםןףץ) to their regular counterparts (כמנפצ).
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

/**
 * The reverse of encodeWordsWithStrongNumbers():
 * Given a Base64 string, decode it into a Uint8Array, and then parse it into an array of [HebrewWord, StrongNumber] entries.
 * @param {string} base64String
 * @returns {[string, number][]}
 */
function decodeWordsWithStrongNumbers(base64String) {
    const codesArray = atob(base64String); // this is not supported in the browser:    Buffer.from(base64String, 'base64');
    const wordsWithStrongNumbers = [];
    let offset = 0;
    while (offset < codesArray.length) {
        // Decode the Hebrew word
        let hebrewWord = '';
        while (true) {
            if (offset >= codesArray.length) {
                throw new Error('decodeWordsWithStrongNumbers() - Unexpected end of data while decoding Hebrew word');
            }
            const byteValue = codesArray.charCodeAt(offset);
            const charIndex = byteValue & 0x7F; // Clear high bit
            const char = hebrewCharacters.charAt(charIndex);
            if (!char) {
                throw new Error(`decodeWordsWithStrongNumbers() - Unknown character index ${charIndex} at offset ${offset}`);
            }
            hebrewWord += char;
            offset++;
            if (byteValue & 0x80) {
                // High bit is set, end of word
                break;
            }
        }

        // Decode the Strong number (2 bytes, big-endian)
        if (offset + 1 >= codesArray.length) {
            throw new Error('decodeWordsWithStrongNumbers() - Unexpected end of data while decoding Strong number');
        }
        const strongNumber = (codesArray.charCodeAt(offset) << 8) | codesArray.charCodeAt(offset + 1);
        offset += 2;

        wordsWithStrongNumbers.push([hebrewWord, strongNumber]);
    }
    return wordsWithStrongNumbers;
}

/**
 * Escape any text to be HTML-safe.
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '&#10;');
}

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// -------------------------------    HTML Skeleton    ------------------------------
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

function getSkeletonHtml() {
    return `


<!DOCTYPE html>
<!-- auto-generated by https://github.com/gilad-bendor/perush/blob/main/scripts/build-bible-viewer.js -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Author" content="גלעד בן-דור">
    <meta name="Keywords" content="תנך תורה חיפוש סטרונג bible search strong-number">
    <link rel="icon" type="image/x-icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACzVBMVEUAAAAOOIOEu+VXjMPD6/+d1PdJg75sq92a0fVuotJZlMt5u+len9VimMxRjcZPk842b7Awaax2r95bndT///+3//8UXakZXqgLLHcIKXUPPokNNoEIMn8OO4cPSJUMNH8HMH0PR5MOOYQNMXsQTZkx5/9e9/8TTpkLL3sOOIRYisB2ptN6q9d3qddrn9BLgrxHe7Z7q9eEtuCGuuWHveiDuOR6sN1on9I4cLBOg7x5q9iEtuB3sOBmn9M/eLYXT5hsodJZlcwQR5JVjMRnodZcm9NFgb4AE2tTj8hHhsQAAVonYaZJicdBhMQiXKMmY6k7f8I4fcAiX6YYVqAkb7kmcLkWVJ4OQ48bZbEeZ7INQIwWXakcarcdarccYKoRTJgWYK4dZbAUTpgSUp4VYK0eZbAaV6EECFERT5wUXKkWYrAbZbIeYqwZVJ4AAEgOQYwTUp4VWaUYXakaXqobXacaV6ERQo0DFmELMXwKMXwAD1yZw+aiyemSwumEv+2Dv+5/uuh/st671+682vKx1fLF3/Oozu2Av+98u+11s+ZsqNynyumy1PB4uOx6vvGMxfHJ4fSNw+11ue1wsudoqN9enda/2fCOwOpttOt1u/B2vPG72vOeyu5ss+pnrOVgpN9XmdRQldO00u2mzOxiq+ZlsOt2uOvK4fSMwethq+ddpeFWndtNk9I8iM5sp93S5PSqzuuUw+nF3vLp8vqHvOdToOBQm9xKlNZCi84pesYwg85mpNytz+y82PDZ6vfd6/ZqqN04itM2hs8vfcYicr8pe8gtgM01h9E7jNQ3i9RqqN7k7/na6PVcm9Unecchcb4ic8ErfcotgMwvgs0tgc1yqdzw9vvW5fI9hMcbarkfcMAidMMldsUmeMYld8Yld8V+rtuZvuEqc70YZ7Yba7scbb4dbr8cbb0cbLseargXZLQXZbYYZrYZZbT///8DorAWAAAAe3RSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAROlhYORAKX7/s+Ou9XQoTmfn5lREGj4sFR/HwQwSdmAMZzsoWJ93aIyLX1B8Pt7MNcf79bB/Gwx1D2NZBAj619PSzPAIWU46rq41RFQUNDQW1/KyDAAAAAWJLR0QUkt/JNQAAAAd0SU1FB+YMFwkwLgi20KsAAAEbSURBVBjTARAB7/4AAAECAwQqKywtLi8FBgcBAAABCAkwMTIzNDQ1Njc4CgsBAAwNOTo7e3x9fn+APD0+Dg8AED9AgYKDhIWGh4iJikFCEQASQ0SLjI2Oj5CRkpOURUYTAEdIlZaXmJmam5ydnp+gSUoAS0yhoqOkpaanqKmqq6xNTgBPUK2ur7CxsrO0tba3uFFSAFNUubq7vL2jvr/AwcLDVVYAV1jExcbHyMnKy8zNzs9ZWgAUW1zQztHS09TV1tfYXV4VABZfYNna29zd3t/g4eJhYhcAGABjZOPk5ebm5+jpZWYUGQAaG2doaWrq6+zta2xtbhwdAAEeHwBvcHFyc3R1dhQgIQEAAAEiIyQld3h5eiYnKCkBAArmcOanB9qzAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEyLTIzVDA5OjQ4OjI1KzAwOjAw+m2ntAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMi0yM1QwOTo0ODoyNSswMDowMIswHwgAAAAASUVORK5CYII=">
    <title>Bible Viewer</title>
    <style>
        body {
            direction: rtl;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
        }

        .info-icon {
            cursor: pointer;
            position: absolute;
            left: 0;
            margin: 0.2em;
            font-size: 1.5em;
            background-color: orangered;
            transition: background-color 0.3s ease;
            border-radius: 50%;
            width: 0.85em;
            height: 0.85em;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hidden {
            display: none !important;
        }

        .error-message {
            color: red;
            font-weight: bold;
        }

        .code {
            font-family: monospace;
        }

        /* -------- main flex-column -------- */

        .header {
            text-align: center;
            flex: 0;
            text-decoration: underline;
        }

        .central-area {
            flex: 1;
            display: flex;
            flex-direction: row-reverse;
            overflow: hidden;
        }

        .footer {
            flex: 0;
            border-top: 1px solid gray;
            background: rgba(128,128,128,0.1);
        }

        #bottom-message-bar {
            flex: 0;
            white-space: pre;
            background: rgba(128,128,128,0.1);
            margin: 0 0.5em;
        }

        /* -------- central-area flex-row -------- */

        .central-left {
            flex: 0 0 auto;
            width: 30vw;
            min-width: 10vw;
            max-width: 90vw;
            overflow: auto;
            display: flex;
            flex-direction: column;
        }

        .splitter {
            width: 5px;
            background: #444;
            cursor: col-resize;
            user-select: none;
            flex-shrink: 0;
        }

        .splitter:hover,
        .splitter.dragging {
            background: #007acc;
        }

        .central-right {
            direction: ltr; /* switch the scrollbar side */
            overflow: auto;
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            background: white;
        }

        /* -------- verses -------- */

        #verses-container {
            direction: rtl;
        }

        .book-header {
            border: 2px solid black;
            background: rgba(128,128,128,0.1);
            font-size: 200%;
            text-align: center;
            margin: 2em 1em 0 2em;
        }

        .chapter-header {
            font-size: 150%;
            text-align: center;
            text-decoration: underline;
            text-underline-offset: 0.2em;
            margin: 1em 0 0.5em 0;
            white-space: pre;
        }

        .verse {
        }
        .verse:hover {
            background: rgba(128,128,128,0.2);
        }

        .highlighted-word {
            background-color: rgba(96,96,255,0.2);
        }

        /*
         * After a search, inside #verses-container, every <div class='verse'> that matches the search,
         *  gets a previous-sibling with the class 'highlighted-verse' - that contains the highlighted words.
         * The following CSS rule hides all non-highlighted verses that immediately follow a highlighted verse.
         */
        #verses-container .highlighted-verse + .verse:not(.highlighted-verse) {
            display: none;
        }

        /* -------- search -------- */

        .search-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5em;
            padding: 0.3em 0.5em 0.1em 0.5em;
        }
        #search-input {
            width: 100%;
        }
        .search-button {
            cursor: pointer;
        }
        .search-results {
            margin: 10px;
        }
        .recently-clicked-verse {
            background: rgba(128,128,128,0.2) !important;
        }

        .search-message {
            background: rgba(128,128,128,0.2);
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
            white-space: pre;
        }
        .search-message + .search-message {
            border-top: none;
        }
        .search-message + :not(.search-message) {
            margin-top: 0.5em;
        }

        /* -------- info-dialog -------- */

        #info-dialog {
            top: 5vh;
            padding: 0;
        }
        
        .info-dialog-main {
            max-width: 90vw;
            height: 90vh;
            display: flex;
            flex-direction: column;
            /*background-color: #f0f0f0;*/
        }
        
        .info-dialog-top-bar {
            flex: 0;
            margin-top: 0 !important;
            padding: 0 10px;
        }
        .info-dialog-content {
            flex: 1;
            overflow-y: auto;                            
            padding: 0 10px;
        }
        .info-dialog-close-button {
            flex: 0;
            background-color: rgba(128,128,128,0.5);
            padding: 2px 10px;
            margin: 0 auto 5px auto;
        }
        
        .info-dialog-h1 {
            font-size: 200%;
            color: #2c3e50;
            margin-top: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid #bdc3c7;
        }
        .info-dialog-h2 {
            font-size: 130%;
            color: #7f8c8d;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        #info-dialog strong {
            display: inline-block;
        }
        #info-dialog code {
            background-color: rgba(128,128,128,0.2);
            border-radius: 3px;
            font-family: monospace;
            display: inline-block;
        }
        #info-dialog ul.examples {
            list-style-type: disclosure-closed;
        }
   </style>
</head>
<body>
    <div class="info-icon" onclick="showInfoDialog()">ⓘ</div>
    <div class="header"><!-- Bible Viewer --></div>
    <div class="central-area">
        <div class="central-left hidden">
            <div class="search-results">
                <!-- Search results will be dynamically added here -->
            </div>
        </div>
        <div class="splitter hidden" id="splitter"></div>
        <div class="central-right">
            <div id="verses-container">
                <!-- Verses will be dynamically added here -->
            </div>
        </div>
    </div>
    <div class="footer">
        <form onsubmit="performSearch(event)">
            <div class="search-wrapper">
                <label for="search-input">חיפוש:</label>
                <input type="text" id="search-input" value="קרא">
                <button class="search-button">חפש</button>
                <div class="search-trash-icon" onclick="clearSearch()">⌫</div>
            </div>
        </form>
    </div>
    <div id="bottom-message-bar">&nbsp</div>
    
    <dialog id="info-dialog">
        <div class="info-dialog-main">
            <div class="info-dialog-h1 info-dialog-top-bar"> כלי לחיפוש וחקר לשוני בתנ״ך - מדריך</div>
            <div class="info-dialog-content">
                דף זה מיועד לחוקרי תנ"ך ומתעניינים בלשון המקרא, ללא צורך בידע טכני מוקדם.
                
                <div class="info-dialog-h1"> תכונות עיקריות </div>
                <ul>
                    <li><strong> תצוגת טקסט מלא:</strong> הכלי מציג את כל טקסט התנ"ך, כאשר כל פסוק מופיע בשורה נפרדת
                    <li><strong>️ מעבר עכבר על פסוק:</strong> כשמעבירים את העכבר מעל פסוק, מופיע המיקום המדויק (ספר, פרק, פסוק)
                    <li><strong> לחיצה על פסוק:</strong> לחיצה בודדת תקבע את המיקום למספר שניות - מאפשרת להעתיק את המיקום (ספר, פרק, פסוק) בנוחות
                    <li><strong> לחיצה כפולה על מילה:</strong> תפעיל חיפוש אוטומטי על פי מספר סטרונג של המילה - כך שיופיעו כל ההטיות של המילה
                    <li><strong> חיפוש חכם:</strong> חיפוש מתקדם באמצעות "ביטויים רגולריים" (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#using_special_characters" target="_blank">regular expressions</a>) עם מעט הרחבות - יוסבר בהמשך
                </ul>
                
                <div class="info-dialog-h1">🔍 מערכת החיפוש המתקדמת</div>
                
                <div class="info-dialog-h2"> חיפושים פשוטים ושימוש ברווחים </div>
                <ul>
                    <li> חיפוש של רצף אותיות ימצא את כל המופעים של הרצף המדוייק.
                    <li> החיפוש לא מבחין בין אותיות סופיות לרגילות: ך=כ, ם=מ, ן=נ, ף=פ, ץ=צ.
                    <li> החיפוש מתעלם מניקוד וטעמים.
                    <li> רווחים: יש רווח אחד בדיוק בין מילה למילה, וגם רווח בתחילת/סוף כל פסוק: זה עוזר לחפש מילים שלמות, או התחלה/סוף של מילה.
                    <li> דוגמאות:
                        <ul class="examples">
                            <li> <code>הלך</code> ימצא כל מילה שמכילה את הרצף ״הלך״ או ״הלכ״ (בכל מקום במילה)
                            <li> <code>&nbsp;הלך</code> (עם רווח לפני) - ימצא מילים ש<strong>מתחילות</strong> ב-״הלך״ או ״הלכ״
                            <li> <code>הלך&nbsp;</code> (עם רווח אחרי) - ימצא מילים ש<strong>מסתיימות</strong> ב-״הלך״ או ״הלכ״
                            <li> <code>&nbsp;הלך&nbsp;</code> (עם רווחים משני הצדדים) - ימצא רק את המילים ״הלך״ או ״הלכ״ <strong>בדיוק</strong> - ללא אותיות נוספות
                        </ul>
                </ul>
                
                <div class="info-dialog-h2">תבניות מיוחדות בחיפוש (לא חלק מסטנדרט regular-expressions)</div>
                <ul>
                    <li>
                        התו <code>@</code> מאפשר "להתעלם" מאותיות השימוש (א,ה,ו,י). דוגמה:
                        <ul class="examples">
                            <li> <code>ה@ל@ך</code> ימצא: <code>הלך</code>, <code>הליך</code>, <code>הולך</code>, וכו' (עם או בלי אותיות א,ה,ו,י ביניהן)
                        </ul>
                    </li>
                    <li>
                        <code>&lt;...&gt;</code> (סוגריים משולשים) מאפשרים חיפוש לפי מספרי סטרונג או מילות היסוד. <br>
                        הטקסט בתוך הסוגרים הוא בעצמו ביטוי-רגולרי (regular expression). <br>
                        דוגמאות:
                        <ul class="examples">
                            <li> <code>&lt;6030&gt;</code> - ימצא את כל המופעים של מספר-סטרונג <a href="https://biblehub.com/hebrew/6030.htm" target="_blank">6030</a> (מובן מסויים של השורש ״ענה״)
                            <li> <code>&lt;6030|6031&gt;</code> ימצא את כל המופעים של מספרי-סטרונג <a href="https://biblehub.com/hebrew/6030.htm" target="_blank">6030</a> ו-<a href="https://biblehub.com/hebrew/6031.htm" target="_blank">6031</a>
                            <li> <code>&lt;ענה&gt;</code> - ימצא את כל המופעים של חמשת מספרי-סטרונג של המילה ״ענה״:
                                    <a href="https://biblehub.com/hebrew/6030.htm" target="_blank">6030</a>,
                                    <a href="https://biblehub.com/hebrew/6031.htm" target="_blank">6031</a>,
                                    <a href="https://biblehub.com/hebrew/6032.htm" target="_blank">6032</a>,
                                    <a href="https://biblehub.com/hebrew/6033.htm" target="_blank">6033</a>,
                                    <a href="https://biblehub.com/hebrew/6034.htm" target="_blank">6034</a>.
                        </ul>
                    </li>
                </ul>
                
                <div class="info-dialog-h2">יכולות סטנדרטיות של ביטויים רגולריים (regular-expressions)</div>
                לצורך הדוגמאות - הסימן <code>⓪</code> מציין ״ביטוי פשוט״ כלשהו - למשל <code>א</code>, <code>(אבג|דהו)</code>, <code>[אבג]</code>.
                <ul>
                   <li> תווי התאמה:
                     <ul>
                       <li> <code>.</code> - מתאימה לכל תו בודד
                       <li> <code>[...]</code> אחד מכמה <strong>אותיות</strong> - למשל <code>[אבג]</code> - מתאימה לאחת מהאותיות א, ב או ג
                       <li> <code>[^...]</code> כל אות <strong>חוץ</strong> מכמה <strong>אותיות</strong> - למשל <code>[^אבג]</code> - מתאימה לכל אות <strong>חוץ</strong> מהאותיות א, ב או ג
                       <li> <code>⓪|⓪|⓪</code> אחד מכמה <strong>ביטויים</strong> - למשל <code>(אבג|דהו)</code> - מתאימה ל״אבג״ או ל״דהו״
                       <li> <code>(...)</code> מֵאָחֶד ״ביטוי מורכב״ (רצף של ״ביטויים פשוטים״) ל״ביטוי פשוט״ - למשל <code>(אבג|דהו|[לנ]ס@)</code> - מתאימה ל״אבג״ או ל״דהו״
                     </ul>
                   <li> תווי חזרה:
                     <ul>
                       <li> <code>⓪*</code> - אפס או יותר מופעים של ⓪
                       <li> <code>⓪+</code> - מופע אחד או יותר של ⓪
                       <li> <code>⓪?</code> - אפס או מופע אחד של ⓪
                       <li> <code>⓪{2,4}</code> - בין 2 ל-4 מופעים של ⓪
                    </ul>
                </ul>
            </div>
    
            <button class="info-dialog-close-button">סגור</button>
        </div>
    </dialog>
</body>
</html>
<script>
    const bsbData = [];
    const biblehubData = [];
    let lastAddedBookName = '';
    let addedChaptersCount = 0;
    let lastAddedChapterIndexInBook = 0;
    let lastVerseMouseEnterTime = 0;
    let allDataWasAdded = false;

    // Dynamically added JavaScript code will go here

    // noinspection JSUnresolvedReference
    const hebrewCharacterToIndex = Object.fromEntries(
        [...hebrewCharacters].map((char, index) => [char, index]),
    );

    domIsLoaded();
</script>


`;
}