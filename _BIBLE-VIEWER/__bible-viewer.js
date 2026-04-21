'use strict';

const FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS = 3000; // after clicking a verse, ignore mouse-enter events for this many milliseconds
const MAX_CHAPTERS_IN_BOOK = 150;
const CHAPTERS_IN_BIBLE = 929;
const MAX_LENGTH_OF_RECENT_SEARCHES = 2000;
const WORD_TYPE_INDEX_VERB = 0;
const MAX_SEARCH_RESULTS = 10000;

/** @type {[string, number][]} */ const strongNumbersToData = [];
const showLocations = getHashParameter('show-locations') !== undefined;
const showPoints = getHashParameter('hide-points') === undefined;
const showAccents = getHashParameter('hide-accents') === undefined;
let lastAddedBookName = '';
let addedChaptersCount = 0;
/** @type {Record<string, HTMLElement>} */ let bookNameToTocElement = {};
/** @type {Record<string, number>} */ let bookNameToChaptersCount = {};
/** @type {Record<string, Record<number, HTMLElement>>} */ let bookNameToChapterToFirstVerseElement = {};
let lastAddedChapterIndexInBook = 0;
let lastVerseMouseEnterTime = 0;
let allDataWasAdded = false;
/** @type {string[]} */ let recentSearches = [];
/** @type {HTMLElement|undefined} */ let focusedRecentSearchTextElement = undefined;
let timeNearWhichToNotShowRecentSearches = 0;

// Per-<...>-group checkbox state: groupIndex → Set of strong-numbers the user has unchecked.
// Keyed implicitly by query text: whenever the query text changes, the map is cleared.
/** @type {Map<number, Set<number>>} */ const strongNumberExclusions = new Map();
/** @type {string} */ let lastSearchQueryForStrongFilters = '';

// -------- these are auto-populated: see functionsAndConstants() --------
/** @type {string} */ let hebrewCharacters;
/** @type {RegExp} */ let nonHebrewLettersRegex;
/** @type {RegExp} */ let hebrewNonLettersRegex;
/** @type {RegExp} */ let hebrewPointsRegex;
/** @type {RegExp} */ let hebrewAccentsRegex;
/** @type {string[]} */ let hebrewWordTypesVisual;
/** @type {string[]} */ let hebrewWordTypesSearchable;
/** @type {string[]} */ let hebrewBookNames;
/** @type {(string) => string} */ let normalizeHebrewText;
/** @type {(string) => string} */ let fixShinSin;
/** @type {(number) => string} */ let numberToHebrew;

/**
 * This constant only lives in the browser:
 * @type {{book: string, chapter: string, verse: string, readableVerse: string, searchableVerse: string, words: string[], strongs: number[], verseElement: HTMLElement}[]}
 */
const allVerses = [];






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








/**
 * This function only lives in the browser:
 * Initializations once the DOM is loaded (not including the data <script> tags).
 */
function domIsLoaded() {
    showMessage(`הדף בטעינה...`, 'bottom-bar');

    // #_MOBILE_FIX_# Instead of setting the <body> to use "flex" with "height: 100vh" (which causes problems with mobile)
    //  we set the footer as "position:fixed; bottom: 0" and dynamically resize the central-area.
    function resizeHandler() {
        /** @type {HTMLElement} */ const footerElement = document.querySelector('.footer');
        document.documentElement.style.setProperty('--footer-height', footerElement.clientHeight + 'px');
        document.documentElement.style.setProperty('--central-area-height', (window.innerHeight - footerElement.clientHeight) + 'px');
    }
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    // Finalize the HTML in the information-dialog.
    initInfoDialog();

    // Read the recent-searches from localStorage.recentSearches, and populate them into #recent-searches
    initRecentSearches(true);

    // Special handling of copy-to-clipboard (Ctrl+C): add verses' locations.
    captureCopyToClipboard();

    // Handle checkbox / select-all / deselect-all interactions inside the search-results sidebar.
    //  Each <...> group in a search query renders a list of Strong-numbers with a checkbox per entry;
    //  toggling any of them re-runs the search with the narrowed set.
    initStrongFilterControls();

    // Initialize the splitter between the left sidebar and the main area.
    (() => {
        /** @type {HTMLElement} */ const splitter = document.getElementById('splitter');
        /** @type {HTMLElement} */ const centralLeft = document.querySelector('.central-left');
        let isDragging = false;
        let startOffset = 0;
        let startSize = 0;

        function dragStart(_startOffset) {
            isDragging = true;
            startOffset = _startOffset;
            startSize = isMobileMode() ? centralLeft.offsetHeight : centralLeft.offsetWidth;
            splitter.classList.add('dragging');
            document.body.style.userSelect = 'none';
            // console.log(`Drag: started at offset ${startOffset}`);
        }

        function dragChange(currentOffset) {
            if (!isDragging) return;
            const delta = isMobileMode()
                ? (startOffset - currentOffset)
                : (currentOffset - startOffset);
            const newSize = startSize + delta;
            centralLeft.style[isMobileMode() ? 'height' : 'width'] = `${newSize}px`;
            // console.log(`Drag: changed:    current-offset: ${currentOffset}    delta: ${delta}`);
        }

        function dragEnd() {
            if (isDragging) {
                isDragging = false;
                splitter.classList.remove('dragging');
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                // console.log(`Drag: ended`);
            }
        }

        // Desktop: mouse events.
        splitter.addEventListener('mousedown', (event) => {
            dragStart(isMobileMode() ? event.clientY : event.clientX);
            event.preventDefault();
        });
        document.addEventListener('mousemove', (event) => {
            dragChange(isMobileMode() ? event.clientY : event.clientX);
        });
        document.addEventListener('mouseup', dragEnd);

        // Mobile: touch events
        splitter.addEventListener('touchstart', (event) => {
            const touch = event.touches[0];
            dragStart(isMobileMode() ? touch.clientY : touch.clientX);
            event.preventDefault();
        }, { passive: false });
        document.addEventListener('touchmove', (event) => {
            const touch = event.touches[0];
            dragChange(isMobileMode() ? touch.clientY : touch.clientX);
        }, { passive: false });
        document.addEventListener('touchend', dragEnd);
    })();
}

/**
 * This function only lives in the browser:
 * Return true if the layout is in mobile-mode, where the splitter is horizontal instead of vertical.
 */
function isMobileMode() {
    return (getComputedStyle(document.body).getPropertyValue('--display-mode') === 'mobile');
}

/**
 * Finalize the HTML in the information-dialog.
 */
function initInfoDialog() {
    /** @type {HTMLInputElement} */ const infoDialogIconsElement = document.querySelector('.info-dialog-icons');
    for (const footerIconElement of document.querySelectorAll('.footer-icon')) {
        /** @type {HTMLInputElement} */ const clonedIconElement = footerIconElement.cloneNode(true);
        const titleText = clonedIconElement.getAttribute('title');
        clonedIconElement.removeAttribute('onclick');
        clonedIconElement.removeAttribute('title');
        clonedIconElement.style.backgroundColor = 'initial';

        const infoDialogIconWrapperElement = document.createElement('div');
        infoDialogIconWrapperElement.className = 'info-dialog-footer-icon';
        infoDialogIconWrapperElement.appendChild(clonedIconElement);
        infoDialogIconWrapperElement.appendChild(document.createTextNode(titleText));

        infoDialogIconsElement.appendChild(infoDialogIconWrapperElement);
    }

    /** @type {HTMLInputElement} */ const wordTypesElement = document.querySelector('.hebrew-word-types-as-codes');
    wordTypesElement.innerHTML = hebrewWordTypesVisual.map(
        type => `<code>${fixShinSin(type).replace(/ /g, '-')}</code>`
    ).join(', ');
}

/**
 * Read the recent-searches from localStorage.recentSearches, and populate them into #recent-searches
 */
function initRecentSearches(isInitialCall) {
    /** @type {HTMLInputElement} */ const searchInputElement = document.getElementById('search-input');
    const recentSearchesElement = document.getElementById('recent-searches');

    // Only on page-load - initialize.
    if (isInitialCall) {
        // Make the search input-box persistent.
        searchInputElement.value = localStorage.lastSearchText || '';

        // Show the recent-searches when the search input-box is focused,
        //  and hide when blurred (but keep shown if blurred due to a search).
        searchInputElement.addEventListener('input', () => {
            localStorage.lastSearchText = searchInputElement.value;
            setRecentSearchesVisibility(true);
        });
        searchInputElement.addEventListener('focus', () => {
            if ((Date.now() - timeNearWhichToNotShowRecentSearches) > 100) { // ignore if the focus was given to the whole window
                setRecentSearchesVisibility(true);
            }
        });
        searchInputElement.addEventListener('blur', () => {
            // Note: on blur, we delay the hiding just a bit, so the click on the recent-search-text can be captured.
            setTimeout(() => setRecentSearchesVisibility(false), 100)
        });

        // Allow up/down arrows to traverse the recent-search-texts items.
        searchInputElement.addEventListener('keydown', (event) => {
            let newFocusedRecentSearchTextElement = undefined;
            const skipCount = event.key.startsWith('Page') ? 5 : 1;
            switch (event.key) {
                case 'ArrowUp':
                case 'PageUp':
                    newFocusedRecentSearchTextElement = focusedRecentSearchTextElement;
                    for (let i = 0; i < skipCount; i++) {
                        newFocusedRecentSearchTextElement = newFocusedRecentSearchTextElement
                            ? newFocusedRecentSearchTextElement.previousElementSibling ?? recentSearchesElement.firstElementChild
                            : recentSearchesElement.lastElementChild;
                    }
                    break;
                case 'ArrowDown':
                case 'PageDown':
                    newFocusedRecentSearchTextElement = focusedRecentSearchTextElement;
                    for (let i = 0; i < skipCount; i++) {
                        newFocusedRecentSearchTextElement = newFocusedRecentSearchTextElement
                            ? newFocusedRecentSearchTextElement.nextElementSibling ?? recentSearchesElement.lastElementChild
                            : recentSearchesElement.firstElementChild;
                    }
                    break;
                case 'Home':
                    newFocusedRecentSearchTextElement = recentSearchesElement.firstElementChild;
                    break;
                case 'End':
                    newFocusedRecentSearchTextElement = recentSearchesElement.lastElementChild;
                    break;
                case 'Escape':
                    setRecentSearchesVisibility(false);
                    return;
            }
            if (newFocusedRecentSearchTextElement) {
                event.preventDefault();
                setRecentSearchesVisibility(true);
                // noinspection JSUnresolvedReference
                newFocusedRecentSearchTextElement.scrollIntoViewIfNeeded({behavior: 'smooth'});
                focusedRecentSearchTextElement?.classList?.remove('focused');
                focusedRecentSearchTextElement = newFocusedRecentSearchTextElement;
                focusedRecentSearchTextElement.classList.add('focused');
                searchInputElement.value = focusedRecentSearchTextElement.innerText;
            }
        });

        // Read the recent-searches from localStorage
        try {
            recentSearches = JSON.parse(localStorage.recentSearches || '[]');
        } catch (error) {
            console.error('Cant parse localStorage.recentSearches: ', error);
        }

        // Track the last time that the window got the focus.
        window.addEventListener('focus', () => timeNearWhichToNotShowRecentSearches = Date.now())
    }

    // Populate #recent-searches
    recentSearchesElement.innerHTML = '';
    for (const recentSearch of recentSearches) {
        const recentSearchTextElement = document.createElement('div');
        recentSearchTextElement.classList.add('recent-search-text');
        recentSearchTextElement.appendChild(document.createTextNode(recentSearch));
        recentSearchesElement.appendChild(recentSearchTextElement);
        recentSearchTextElement.addEventListener('click', () => {
            searchInputElement.value = recentSearch;
            localStorage.lastSearchText = recentSearch;
            performSearch();
        });
        recentSearchTextElement.addEventListener('mousemove', () => {
            focusedRecentSearchTextElement?.classList?.remove('focused');
            focusedRecentSearchTextElement = recentSearchTextElement;
            focusedRecentSearchTextElement.classList.add('focused');
        });
    }
    recentSearchesElement.style.visibility = recentSearches.length ? '' : 'hidden';
}

/**
 * Show or hide the recent-searches list above the search input-field.
 * @param {boolean} visible
 */
function setRecentSearchesVisibility(visible) {
    const recentSearchesElement = document.getElementById('recent-searches');
    if (!visible) {
        recentSearchesElement.style.display = 'none';
    } else if (recentSearchesElement.style.display !== 'initial') {
        recentSearchesElement.style.display = 'initial';
        recentSearchesElement.scrollTop = recentSearchesElement.scrollHeight; // Scroll to the bottom
    }
}

/**
 * Attach delegated listeners on the search-results sidebar so that:
 *  - toggling a Strong-number checkbox updates the exclusion-set for its <...> group and re-runs the search;
 *  - clicking "select all" / "deselect all" for a <...> group clears / fills the exclusion-set and re-runs.
 * The .search-results element is wiped on every search, but stays in the DOM, so one listener is enough.
 */
function initStrongFilterControls() {
    /** @type {HTMLElement} */ const searchResultsElement = document.querySelector('.search-results');
    /** @type {HTMLElement} */ const centralLeftElement = document.querySelector('.central-left');

    // performSearch() always resets the sidebar's scroll position - but when the user toggles a checkbox,
    //  that feels jarring (especially when the checkbox is far down the list). Restore after re-running.
    function rerunSearchPreservingScroll() {
        const savedScrollTop = centralLeftElement.scrollTop;
        performSearch();
        centralLeftElement.scrollTop = savedScrollTop;
    }

    searchResultsElement.addEventListener('change', (event) => {
        /** @type {HTMLInputElement} */ const target = event.target;
        if (!target.classList || !target.classList.contains('strong-filter-checkbox')) {
            return;
        }
        const groupIndex = parseInt(target.dataset.groupIndex);
        const strongNumber = parseInt(target.dataset.strong);
        let excludedSet = strongNumberExclusions.get(groupIndex);
        if (!excludedSet) {
            excludedSet = new Set();
            strongNumberExclusions.set(groupIndex, excludedSet);
        }
        if (target.checked) {
            excludedSet.delete(strongNumber);
        } else {
            excludedSet.add(strongNumber);
        }
        rerunSearchPreservingScroll();
    });

    searchResultsElement.addEventListener('click', (event) => {
        /** @type {HTMLElement} */ const target = event.target;
        if (!target.classList || !target.classList.contains('strong-filter-button')) {
            return;
        }
        /** @type {HTMLElement} */ const controlsElement = target.closest('.strong-filter-controls');
        if (!controlsElement) {
            return;
        }
        const groupIndex = parseInt(controlsElement.dataset.groupIndex);
        const action = target.dataset.action;
        if (action === 'select-all') {
            strongNumberExclusions.delete(groupIndex);
        } else if (action === 'deselect-all') {
            // Find every Strong-number rendered for this group, and add them all to the exclusion-set.
            /** @type {NodeListOf<HTMLInputElement>} */ const checkboxes =
                controlsElement.parentElement.querySelectorAll(
                    `.strong-filter-checkbox[data-group-index="${groupIndex}"]`);
            const allStrongs = [...checkboxes].map(cb => parseInt(cb.dataset.strong));
            strongNumberExclusions.set(groupIndex, new Set(allStrongs));
        } else {
            return;
        }
        rerunSearchPreservingScroll();
    });
}

// Special handling of copy-to-clipboard (Ctrl+C): add verses' locations.
function captureCopyToClipboard() {
    document.addEventListener('copy', (event) => {
        const clipboardBuilder = [];
        let versesCount = 0;

        /**
         * This is called whenever a text-excerpt is encountered.
         * If the text belongs to a new verse, or if a verse is done - add verse's location.
         * @param {number|null} verseIndex
         */
        function encounteredVerseIndex(verseIndex) {
            if (verseIndex !== lastVerseIndex) {
                const verseInfo = allVerses[lastVerseIndex];
                if (verseInfo) {
                    // A verse is closed.
                    clipboardBuilder.push('`', ' (', verseInfo.book, ' ', verseInfo.chapter, ':', verseInfo.verse, ')');
                    versesCount++;
                }
                if (typeof verseIndex === 'number') {
                    // A verse is opened.
                    if (clipboardBuilder.length > 0) {
                        clipboardBuilder.push('\n');
                    }
                    clipboardBuilder.push('`');
                }
                lastVerseIndex = verseIndex;
            }
        }
        let lastVerseIndex = null;

        // Scan all ranges of the selection.
        const selection = window.getSelection();
        for (let rangeIndex = 0; rangeIndex < selection.rangeCount; rangeIndex++) {
            const selectionRange = selection.getRangeAt(rangeIndex);
            const {startContainer, startOffset, endContainer, endOffset} = selectionRange;

            /**
             * Handle a text-node that overlaps with the selection.
             * @param {Text} node
             */
            function handleNode(node) {
                // Ignore hidden texts.
                if (node.parentElement?.computedStyleMap().get('display')?.toString() === 'none') {
                    return;
                }

                // If the text is inside a verse - then find the text's verse-index.
                /** @type {HTMLElement} */ let verseElement;
                for (verseElement = node.parentElement; verseElement && !verseElement.classList.contains('verse'); verseElement = verseElement.parentElement) {
                }
                const verseIndex = parseInt(verseElement?.dataset?.index) ?? null;
                encounteredVerseIndex(verseIndex);

                // Add the text-excerpt.
                const selectedText = node.textContent.slice(
                    (node === startContainer) ? startOffset : 0,
                    (node === endContainer) ? endOffset : node.length
                );
                clipboardBuilder.push(selectedText);
            }

            // Walk the selection's text-nodes.
            if ((startContainer === endContainer) && (startContainer.nodeType === document.TEXT_NODE)) {
                handleNode(startContainer);
            } else {
                const walker = document.createTreeWalker(
                    selectionRange.commonAncestorContainer,
                    NodeFilter.SHOW_TEXT
                );
                let node;
                while (node = walker.nextNode()) {
                    // Skip nodes entirely before or after the range
                    if (selectionRange.comparePoint(node, node.data.length) < 0) {
                        // Node is before range.
                        continue;
                    }
                    if (selectionRange.comparePoint(node, 0) > 0) {
                        // Node is after range.
                        break;
                    }
                    handleNode(node);
                }
            }
        }

        // Close any un-closed verse.
        encounteredVerseIndex(null);

        // Copy to clipboard - only if we captured something. If the selection is inside an <input> or
        //  <textarea>, window.getSelection() returns nothing, so we let the browser's native copy run.
        if (clipboardBuilder.length > 0) {
            const textToCopy = clipboardBuilder.join('');
            copyTextToClipboard(
                textToCopy,
                (versesCount <= 1)
                    ? `הטקסט שהועתק:\n`
                    : `הועתקו ${versesCount} פסוקים\n`);
            event.preventDefault();
            return false;
        }
    });
}

/**
 * This function only lives in the browser:
 * Show a message in:
 *   - target='bottom-bar' - override (and possibly clear) the bottom-bar
 *   - target='search-results' - add a message in the left sidebar (search results)
 *   - target='dialog' - show (override and possibly clear) a modal dialog with the message
 * @param {string} messageHtml - empty string to clear the message
 * @param {'bottom-bar'|'search-results'|'dialog'?} target
 * @param {string?} extraClassNames (only when target='search-results')
 * @returns {HTMLElement} The HTMLElement that contains the message
 */
function showMessage(messageHtml, target, extraClassNames) {
    switch (target) {
        case 'bottom-bar': {
            const bottomMessageBarElement = document.getElementById('bottom-message-bar');
            bottomMessageBarElement.innerHTML = messageHtml || ' ';
            return bottomMessageBarElement;
        }
        case 'search-results': {
            const searchResultsElement = document.querySelector('.search-results');
            const messageWrapperElement = document.createElement('div');
            messageWrapperElement.className = 'search-message' + (extraClassNames ? ` ${extraClassNames}` : '');
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
 * When a verse is clicked - sow the same - and also show the "copy-verse-*-icon"s.
 * @param {MouseEvent} event
 */
function handleVerseMouseEnter(event) {
    if ((Date.now() - lastVerseMouseEnterTime) > FREEZE_VERSE_MOUSE_ENTER_AFTER_CLICK_MS) {
        /** @type {HTMLElement} */ const clickedVerseElement = event.currentTarget;
        const verseIndex = parseInt(clickedVerseElement.dataset.index);
        const verseInfo = allVerses[verseIndex];
        let bottomBarMessage = `<div class="bottom-bar-location-text">${verseInfo.book} ${verseInfo.chapter}:${verseInfo.verse}</div>`;
        if (event.type === 'click') {
            bottomBarMessage = [
                bottomBarMessage,
                `<div class="copy-verse-icon copy-verse-and-location-icon" onclick="copyVerseToClipboard(${verseIndex}, true, true)">`,
                `<div class="copy-verse-icon-inner">📋</div></div>`,
                `<div class="copy-verse-icon copy-verse-only-icon" onclick="copyVerseToClipboard(${verseIndex}, true, false)">`,
                `<div class="copy-verse-icon-inner">א</div></div>`,
                `<div class="copy-verse-icon copy-verse-location-only-icon" onclick="copyVerseToClipboard(${verseIndex}, false, true)">`,
                `<div class="copy-verse-icon-inner">⌖</div></div>`,
            ].join('');
        }
        showMessage(bottomBarMessage, 'bottom-bar');
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
                    if (showLocations) {
                        // If showing locations, then each line is prefixed by the location string,
                        //  that contains probably 2 words - so we need to adjust the wordIndex accordingly.
                        wordIndex -= fixVisibleVerse('', 'a', 'b', 'c').split(' ').length - 1;
                        if (wordIndex < 0) {
                            // The double-click was made on the location: ignore it.
                            break wordsScan;
                        }
                    }
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
 * When the user clicks on the "copy-verse-icon" at the message-bar
 *  (that appears on mouse-hover on a verse, and becomes "stuck" on mouse-click on a verse) -
 *  the verse and the location are copied to the clipboard.
 * @param {number} verseIndex the verse to copy
 * @param {boolean} includeVerse include the verse text in the copy
 * @param {boolean} includeLocation include the verse's location in the copy
 */
function copyVerseToClipboard(verseIndex, includeVerse, includeLocation) {
    // Copy to the verse-text and/or location to the clipboard.
    const verseInfo = allVerses[verseIndex];
    const verseText = verseInfo.readableVerse;
    const locationText = `${verseInfo.book} ${verseInfo.chapter}:${verseInfo.verse}`;
    let textToCopy;
    if (includeVerse && includeLocation) {
        textToCopy = `\`${verseText}\` (${locationText})`
    } else if (includeVerse) {
        textToCopy = verseText;
    } else {
        textToCopy = locationText;
    }
    copyTextToClipboard(textToCopy, `הטקסט שהועתק:\n`);
}

/**
 * Copy some text to the clipboard, and show a brief dialog.
 * @param {string} textToCopy
 * @param {string} dialogPrefix
 */
function copyTextToClipboard(textToCopy, dialogPrefix) {
    navigator.clipboard.writeText(textToCopy).catch(console.error);

    // Show a dialog for 1 second.
    document.querySelectorAll('.copied-text-dialog').forEach((dialog) => dialog.remove());
    const dialogElement = document.createElement('dialog');
    dialogElement.classList.add('copied-text-dialog');
    dialogElement.setAttribute('open', 'true');
    dialogElement.innerText =
        dialogPrefix +
        textToCopy.replace(/^((?:.*\n){10})([\s\S]*)$/, '$1...');  // ellipsis if too many lines
    document.body.appendChild(dialogElement);
    setTimeout(() => dialogElement.remove(), 1000);
}

/**
 * This function only lives in the browser:
 * Given the encoded strongNumbersToData, add the searchable-hebrew-word to each entry.
 * @param {string} encodedStrongNumbersData
 */
function initStrongNumbersData(encodedStrongNumbersData) {
    // Decode the encoded strongNumbersToData into the real strongNumbersToData
    strongNumbersToData.push(
        ...decodeWordsWithStrongNumbers(
            encodedStrongNumbersData
        )
    );

    // Per strongNumbersToData item - which is currently [hebrew-word, word-type-index] -
    //  add the 3rd item: searchable-hebrew-word.
    for (let strongNumber = 0; strongNumber < strongNumbersToData.length; strongNumber++) {
        const entry = strongNumbersToData[strongNumber];
        const [hebrewWordWithPoints, wordTypeIndex] = entry;
        if (wordTypeIndex !==  hebrewWordTypesVisual.length) {
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
 * Populate the table-of-contents (TOC) with Hebrew book names and chapter numbers.
 */
function initTocHtml() {
    // Add Hebrew book names to the TOC
    let bibleTocBooksSectionElement = document.getElementById('bible-toc-books').firstElementChild;
    for (const hebrewBookName of hebrewBookNames) {
        if (hebrewBookName === 'יהושע' || hebrewBookName === 'ישעיהו' || hebrewBookName === 'דברי-הימים-א') {
            bibleTocBooksSectionElement = bibleTocBooksSectionElement.nextElementSibling;
        }
        const bookTocElement = document.createElement('div');
        bookTocElement.className = 'bible-toc-book bible-toc-book-unloaded';
        bookTocElement.appendChild(document.createTextNode(hebrewBookName));
        bibleTocBooksSectionElement.appendChild(bookTocElement);
        bookNameToTocElement[hebrewBookName] = bookTocElement;
        bookTocElement.addEventListener('click', () => {
            document.getElementById('bible-toc-chapters').style.display = 'block'; // first click will make the chapters-box visible
            const currentlySelectedBookElement = document.querySelector('.bible-toc-book-selected');
            if (currentlySelectedBookElement) {
                currentlySelectedBookElement.classList.remove('bible-toc-book-selected');
            }
            bookTocElement.classList.add('bible-toc-book-selected');
            for (const [chapterIndex, chapterTocElement] of [...document.querySelectorAll('.bible-toc-chapter')].entries()) {
                const classListMethod = (chapterIndex < bookNameToChaptersCount[hebrewBookName]) ? 'add' : 'remove';
                chapterTocElement.classList[classListMethod]('bible-toc-chapter-visible');
            }
        });
    }

    // Add Hebrew chapter-numbers to the TOC
    const bibleTocChaptersElement = document.getElementById('bible-toc-chapters');
    for (let chapterIndex = 0; chapterIndex < MAX_CHAPTERS_IN_BOOK; chapterIndex++) {
        const chapterTocElement = document.createElement('div');
        chapterTocElement.className = 'bible-toc-chapter';
        chapterTocElement.appendChild(document.createTextNode(numberToHebrew(chapterIndex)));
        bibleTocChaptersElement.appendChild(chapterTocElement);
        chapterTocElement.addEventListener('click', () => {
            /** @type {HTMLElement} */ const currentlySelectedBookElement = document.querySelector('.bible-toc-book-selected');
            if (currentlySelectedBookElement) {
                const hebrewBookName = currentlySelectedBookElement.innerText;
                bookNameToChapterToFirstVerseElement[hebrewBookName]?.[chapterIndex]?.scrollIntoView();
            }
        });
    }
}

/**
 * This function only lives in the browser:
 * Prepare to receive the chapters of a book: addChapterData() is expected to be called soon.
 * @param {string} hebrewBookName
 */
function addBookData(hebrewBookName) {
    // Mark the last-added book as loaded in the TOC.
    /** @type {any} */ let tocElement = bookNameToTocElement[lastAddedBookName];
    tocElement?.classList?.remove('bible-toc-book-unloaded');

    // Add the book-header to the HTML
    const versesContainerElement = document.getElementById('verses-container');
    const bookHeaderElement = document.createElement('div');
    bookHeaderElement.className = 'book-header';
    bookHeaderElement.appendChild(document.createTextNode(hebrewBookName));
    versesContainerElement.appendChild(bookHeaderElement);
    lastAddedBookName = hebrewBookName;
    lastAddedChapterIndexInBook = 0;
    bookNameToChapterToFirstVerseElement[lastAddedBookName] = {'0': bookHeaderElement};
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
        `הדף בטעינה (` +
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
    bookNameToChapterToFirstVerseElement[lastAddedBookName][lastAddedChapterIndexInBook] ??= chapterHeaderElement;

    // Scan chapter's verses
    for (const [verseIndex, verseData] of chapterData.entries()) {
        const verseHebrewNumber = numberToHebrew(verseIndex);
        const wordsWithStrongNumbers = decodeWordsWithStrongNumbers(verseData);
        const words = wordsWithStrongNumbers.map(([word]) => normalizeHebrewText(word));
        const strongs = wordsWithStrongNumbers.map(([, strong]) => strong);
        const readableVerse = fixVisibleVerse(
            words.join(' '),
            lastAddedBookName,
            chapterHebrewNumber,
            verseHebrewNumber
        );
        const searchableVerse =
            ' ' +    // Spaces at beginning and end, to simplify searching for whole words
            wordsWithStrongNumbers.map(([word, strongNumber]) =>
                hebrewFinalsToRegulars(
                    normalizeHebrewText(word)
                        .replace(nonHebrewLettersRegex, '') // Remove Points/Accents
                ) +
                `<${strongNumber}/${hebrewWordTypesSearchable[strongNumbersToData[strongNumber][1]]}>`
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
    bookNameToChaptersCount[lastAddedBookName] = lastAddedChapterIndexInBook;
}

// noinspection JSUnusedGlobalSymbols
/**
 * This function only lives in the browser:
 * Called once all bible data has been added (addBookData() and addChapterData() are all called).
 */
function bibleDataAdded() {
    addBookData('סוף');

    // All books have been added: mark the page as loaded.
    allDataWasAdded = true;
    showMessage('', 'bottom-bar');

    // Stop the blinking of the info-icon attention-bubble.
    /** @type {HTMLElement} */ const infoIconElement = document.querySelector(`.info-attention-bubble`);
    infoIconElement.style.opacity = '0';
    setTimeout(() => infoIconElement.style.display = 'none', 500);
}

function clearSearch() {
    setCentralLeftVisibilityAndClear(false);
    showMessage('', 'bottom-bar');
    document.querySelectorAll('.highlighted-verse').forEach((/** @type {HTMLElement} */ element) => element.remove());
}

/**
 * Perform research by the value in the search-box.
 * @param {{preventDefault: ()=>void}?} event
 */
function performSearch(event) {
    event?.preventDefault(); // stops the page reload

    /** @type {HTMLInputElement} */ const searchInputElement = document.getElementById('search-input');
    /** @type {HTMLElement} */ const searchResultsElement = document.querySelector('.search-results');
    /** @type {HTMLElement} */ const centralLeftElement = document.querySelector('.central-left');
    const searchQuery = searchInputElement.value;
    setRecentSearchesVisibility(false);

    // Reset the per-<...>-group checkbox exclusions whenever the query text changes.
    if (searchQuery !== lastSearchQueryForStrongFilters) {
        strongNumberExclusions.clear();
        lastSearchQueryForStrongFilters = searchQuery;
    }

    // Set the focus back to the input-field.
    timeNearWhichToNotShowRecentSearches = Date.now();
    searchInputElement.focus();

    // Maintain localStorage.recentSearches: move/append the current search at the end.
    const recentSearchesObject = Object.fromEntries(recentSearches.map(recentSearch => [recentSearch, true]));
    delete recentSearchesObject[searchQuery];
    recentSearchesObject[searchQuery] = true;
    while (true) {  // make sure the recent searches are not too long
        recentSearches = Object.keys(recentSearchesObject);
        if (JSON.stringify(recentSearches).length <= MAX_LENGTH_OF_RECENT_SEARCHES) {
            break;
        }
        delete recentSearchesObject[Object.keys(recentSearchesObject)[0]];
    }
    localStorage.recentSearches = JSON.stringify(recentSearches);
    initRecentSearches(false);

    // Show the verbatim search-query on the left sidebar
    clearSearch();
    setCentralLeftVisibilityAndClear(true);
    showMessage(`חיפוש: <code>${escapeHtml(searchQuery)}</code>`, 'search-results');

    // Warn if data is still being loaded
    if (!allDataWasAdded) {
        showMessage(`<div class="error-message">הנתונים עדיין נטענים - התוצאות יהיו חלקיות!\n`+`אנא המתן מספר שניות ונסה שוב</div>`, 'search-results');
    }

    // 2xy2 - investigate 2-letters proto-semitic roots
    // Replace 2xy2 with a group of possible hebrew words that correspond to the root.
    const preprocessedSearchQuery = searchQuery.replace(/^2(.)(.)2$/, '<' + [
        '$1$2',     // שב
        'נ$1$2',    // נשב
        'י$1$2',    // ישב
        '$1ו$2',    // שוב
        '$1י$2',    // שיב
        '$1$2ה',    // שבה
        '$1$2$2',   // שבב
        '$1$2$1$2', // שבשב
    ].join('|') + '>');
    const onlyAllowVerbs = (preprocessedSearchQuery !== searchQuery);

    let searchRegExp;
    try {
        // If <...inner-RegExp...> are used - replace with a pattern that matches the data format <SNumber/Type>.
        //  First, try matching inner-RegExp against word types (e.g. <פעל>, <שם#*>).
        //  If no word types match, fall back to strong-number search (numeric or Hebrew root word).
        let groupIndex = 0;
        const searchQueryWithStrongNumbers = preprocessedSearchQuery.replace(/<(.+?)>/g, (wholeMatch, innerRegExpSource) => {
            const currentGroupIndex = groupIndex++;
            try {
                return expandSpecialSearchRange(wholeMatch, innerRegExpSource, onlyAllowVerbs, currentGroupIndex);
            } catch (error) {
                // Invalid <...> RegExp
                throw new Error(`Invalid RegExp inside <...>:\n    ${wholeMatch}\n  ${error.message}`);
            }
        });

        // Normalize the search RegExp
        let searchRegExpSource = normalizeSearchRegExp(searchQueryWithStrongNumbers, false);
        showMessage('ביטוי-רגולרי סופי:', 'search-results');
        showMessage(`/${escapeHtml(searchRegExpSource)}/g`, 'search-results', 'search-result-regexp');

        if (!searchRegExpSource.trim()) {
            throw new Error('חיפוש ריק - אנא הזן ביטוי לחיפוש');
        }

        searchRegExp = new RegExp(searchRegExpSource, 'g');
    } catch (error) {
        // Invalid RegExp
        showMessage(`<div class="error-message">${error.message}</div>`, 'search-results');
        centralLeftElement.scrollTop = centralLeftElement.scrollHeight; // Failure: scroll search-results to the bottom
        return;
    }

    // Prepare a placeholder for the search summary message
    const summaryMessage = showMessage('', 'search-results');

    /**
     * Given a verseInfo and an offset into its searchableVerse, return the index of the word that contains that offset.
     * Note that searchableVerse is made of words with Strong numbers, e.g. " בְּרֵאשִׁית<7225> בָּרָא<1254> אֱלֹהִים<430> ... "
     *  and is surrounded by spaces.
     * @param verseInfo
     * @param {number} offset
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
                /** @type {number} */ const matchStartOffset = args[args.length - 2];
                const matchEndOffset = matchStartOffset + wholeMatch.length;

                // Convert to a words-range (in verseInfo.words)
                const fromWordIndex = searchableVerseOffsetToWordIndex(verseInfo, matchStartOffset + (wholeMatch.startsWith(' ') ? 1 : 0));
                const toWordIndex = searchableVerseOffsetToWordIndex(verseInfo, matchEndOffset - (wholeMatch.endsWith(' ') ? 1 : 0));

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
            searchMatchElement.innerHTML = fixVisibleVerse(
                verseInfo.words
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
                    .join(' '),
                verseInfo.book,
                verseInfo.chapter,
                verseInfo.verse
            );
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
    centralLeftElement.scrollTop = 0; // Success: scroll search-results to the top
}

/**
 * If the search-string contains <...> - then this function will replace the "..." to the final search RegExp-string.
 * The returned RegExp-string will be later transformed by normalizeSearchRegExp().
 * @param {string} wholeMatch
 * @param {string} innerRegExpSource
 * @param {boolean} onlyAllowVerbs - if this is a "2xy2" search
 * @param {number} groupIndex - the 0-based index of this <...> occurrence in the full query (used to key per-group checkbox state)
 * @returns {string}
 */
function expandSpecialSearchRange(wholeMatch, innerRegExpSource, onlyAllowVerbs, groupIndex) {
    // Normalize the inner RegExp (e.g. support "#" etc.) and split it over "/" or "\".
    let [wordRegExpSource, typeRegExpSource] = normalizeSearchRegExp(innerRegExpSource, true).split(/[\/\\]/);
    /** @type {number[]} */ const matchingStrongNumbers = [];
    /** @type {string[]} */ const matchingWordTypeSearchables = [];
    /** @type {Set<number>} */ const matchingWordTypeIndexes = new Set();

    // Handle the second item: the word-type RegExp.
    let typeReplacement = '[^>]+'; // default value
    if (typeRegExpSource) {
        // Find all word-types that match typeRegExpSource.
        const typeRegExp = new RegExp(`^(?:${typeRegExpSource.replace(/ /g, '-')})$`);
        for (const [wordTypeIndex, wordTypeSearchable] of hebrewWordTypesSearchable.entries()) {
            if (typeRegExp.test(wordTypeSearchable)) {
                matchingWordTypeSearchables.push(wordTypeSearchable);
                matchingWordTypeIndexes.add(wordTypeIndex);
            }
        }
        if (matchingWordTypeSearchables.length === 0) {
            throw new Error('No matching word-types');
        }
        typeReplacement = `(${matchingWordTypeSearchables.join('|')})`;
    }

    // Handle the first item: a Strong-number/Word RegExp.
    let wordReplacement = '[^>]+'; // default value
    if (wordRegExpSource) {
        // Find all strong-numbers that match typeRegExpSource.
        const strongNumberRegExp = new RegExp(`^(?:${wordRegExpSource})$`);
        for (let strongNumber = 0; strongNumber < strongNumbersToData.length; strongNumber++) {
            const [_strongNumberWord, wordTypeIndex, searchableWord] = strongNumbersToData[strongNumber];
            if (strongNumberRegExp.test(String(strongNumber)) ||
                strongNumberRegExp.test(searchableWord)) {
                if (!onlyAllowVerbs || (wordTypeIndex === WORD_TYPE_INDEX_VERB)) {
                    if ((matchingWordTypeIndexes.size === 0) || (matchingWordTypeIndexes.has(wordTypeIndex))) {
                        matchingStrongNumbers.push(strongNumber);
                    }
                }
            }
        }
        if (matchingStrongNumbers.length === 0) {
            throw new Error('No matching Strong numbers');
        }
        wordReplacement = `(${matchingStrongNumbers.join('|')})`;
    }

    // Apply per-<...>-group checkbox exclusions. The user may have unchecked some Strong-numbers
    //  in a previous render; here we intersect the matchingStrongNumbers with the still-checked set.
    const excludedSet = strongNumberExclusions.get(groupIndex) ?? new Set();
    /** @type {number[]} */ const checkedStrongNumbers = (matchingStrongNumbers.length > 0)
        ? matchingStrongNumbers.filter(strongNumber => !excludedSet.has(strongNumber))
        : matchingStrongNumbers;
    if ((matchingStrongNumbers.length > 0) && (checkedStrongNumbers.length > 0)) {
        wordReplacement = `(${checkedStrongNumbers.join('|')})`;
    }

    const replacement = `(#+<(${wordReplacement}/${typeReplacement})>)`;

    // Report the matching strong-numbers on the left sidebar - with a checkbox before each entry,
    //  so the user can narrow the search to a subset without re-typing.
    const showSelectAllButtons = (matchingStrongNumbers.length > 2);
    const controlsHtml = showSelectAllButtons
        ? `\n    <span class="strong-filter-controls" data-group-index="${groupIndex}">` +
          `<button type="button" class="strong-filter-button" data-action="select-all">בחר הכל</button>` +
          ` <button type="button" class="strong-filter-button" data-action="deselect-all">נקה הכל</button>` +
          `</span>`
        : '';
    const linesHtml = matchingStrongNumbers.map(strongNumber => {
        const isChecked = !excludedSet.has(strongNumber);
        return `\n    <label class="strong-filter-line">` +
               `<input type="checkbox" class="strong-filter-checkbox"` +
               ` data-group-index="${groupIndex}" data-strong="${strongNumber}"${isChecked ? ' checked' : ''}>` +
               `<a class="biblehub-reference" href="https://biblehub.com/hebrew/${strongNumber}.htm" target="_blank">H${strongNumber}</a>` +
               `  =  ${strongNumbersToData[strongNumber][0]}  (${hebrewWordTypesVisual[strongNumbersToData[strongNumber][1]]})` +
               `</label>`;
    }).join('');
    showMessage(
        `<code>${escapeHtml(wholeMatch)}</code> מתורגם ל: <code>${escapeHtml(replacement)}</code>` +
        controlsHtml + linesHtml,
        'search-results');

    // If the user has unchecked every Strong-number in this group, there is nothing to search for.
    //  We throw *after* rendering the checkboxes, so the user can re-check boxes to recover.
    if ((matchingStrongNumbers.length > 0) && (checkedStrongNumbers.length === 0)) {
        throw new Error('לא נבחר אף מספר-שורש - סמן לפחות אחד');
    }

    return replacement;
}






/**
 * This function only lives in the browser:
 * Given a search RegExp source, normalize it.
 * @param {string} searchRegExpSource
 * @param {boolean} isInsideAngleBrackets
 * @returns {string}
 */
function normalizeSearchRegExp(searchRegExpSource, isInsideAngleBrackets) {
    searchRegExpSource = fixShinSin(hebrewFinalsToRegulars(searchRegExpSource))

    // Handle "standard shin": ש  -->  שׂשׁ
    // When inside brackets, do not add surrounding ( ) - to avoid nested brackets.
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /(?<!ת)-ת/g, '-רשׂשׁת', '-ת');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /-ש/g, '-רשׂשׁ', '-[שׂשׁ]');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /ש-/g, 'שׂשׁת-', '[שׂשׁ]-');
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /ש/g, 'שׂשׁ', '[שׂשׁ]');

    if (!isInsideAngleBrackets) {
        // Collapse multiple spaces into one space
        searchRegExpSource = searchRegExpSource.replace(/\s+/g, ' ');
        // Remove all Hebrew characters that are not letters
        searchRegExpSource = searchRegExpSource.replace(hebrewNonLettersRegex, '');
    }

    // Replace @ with a RegExp that matches any sequence of אהוי letters - or nothing
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /@/g, 'אהוי', '[אהוי]*');
    // Replace # with any single letter
    searchRegExpSource = replaceInRegExpSource(searchRegExpSource, /#/g, 'א-ת', isInsideAngleBrackets ? '[-א-תשׂשׁ]' : '[א-תשׂשׁ]');

    if (!isInsideAngleBrackets) {
        // When a space is NOT preceded by > - optionally skip <SNumber/Type> before the space
        searchRegExpSource = searchRegExpSource.replace(/([^>]) /g, '$1(?:<[^>]*>)? ');
    }

    return searchRegExpSource;
}

/**
 * This function only lives in the browser:
 * Given a RegExp source, search for all occurrences of searchRegExpSource,
 *  and replace them with either:
 * - replaceToIfInsideBrackets - if the occurrence is inside brackets, or
 * - replaceToIfOutsideBrackets - if the occurrence is outside brackets.
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
        });
}

/**
 * Hide points/accents if needed, and add location if needed.
 * @param {string} verseWithPointsAndAccents
 * @param {string} bookName
 * @param {string} chapterHebrewNumber
 * @param {string} verseHebrewNumber
 * @returns {string}
 */
function fixVisibleVerse(verseWithPointsAndAccents, bookName, chapterHebrewNumber, verseHebrewNumber) {
    let visibleVerse = verseWithPointsAndAccents;
    if (!showPoints) {
        visibleVerse = visibleVerse.replace(hebrewPointsRegex, '');
    }
    if (!showAccents) {
        visibleVerse = visibleVerse.replace(hebrewAccentsRegex, '');
    }
    if (showLocations) {
        visibleVerse = `(${bookName} ${chapterHebrewNumber}:${verseHebrewNumber}) ${visibleVerse}`;
    }
    return visibleVerse;
}

/**
 * This function only lives in the browser:
 * Scroll the biblical text to the top.
 */
function scrollToTop() {
    document.querySelector('.central-right').scrollTop = 0;
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

/**
 * This function only lives in the browser:
 * Toggle showing/hiding locations for each verse.
 */
function toggleLocations() {
    if (showLocations) {
        setHashParameters({'show-locations': undefined});
        document.location.reload();
    } else {
        setHashParameters({'show-locations': ''});
        document.location.reload();
    }
}

/**
 * This function only lives in the browser:
 * Toggle showing/hiding points in the text.
 */
function togglePoints() {
    if (showPoints) {
        setHashParameters({'hide-points': ''});
        document.location.reload();
    } else {
        setHashParameters({'hide-points': undefined});
        document.location.reload();
    }
}

/**
 * This function only lives in the browser:
 * Toggle showing/hiding accents in the text.
 */
function toggleAccents() {
    if (showAccents) {
        setHashParameters({'hide-accents': ''});
        document.location.reload();
    } else {
        setHashParameters({'hide-accents': undefined});
        document.location.reload();
    }
}

/**
 * This function only lives in the browser:
 * Set the URL hash parameters (format: "#key1=value&key2=value2...").
 * Per entry in the parameters - set hash-parameter, or delete it if the value is undefined.
 * @param {Record<string, string | undefined>} parameters
 */
function setHashParameters(parameters) {
    let hash = document.location.hash;
    for (const [key, value] of Object.entries(parameters)) {
        // First, remove the parameter if it exists
        hash = hash.replace(new RegExp(`(?<=[#&])${encodeURIComponent(key)}(=([^&]*))?(?=&|$)`), '');

        // Now, if the value is defined - add it.
        if (value !== undefined) {
            const separator = (hash === '' || hash === '#') ? '#' : '&';
            hash += `${separator}${encodeURIComponent(key)}${value ? `=${encodeURIComponent(value)}` : ''}`;
        }
    }
    hash = hash.replace(/&+/, '&').replace(/&$/, ''); // Remove duplicated and trailing &'s
    if (document.location.hash !== hash) {
        document.location.hash = hash;
    }
}

/**
 * This function only lives in the browser:
 * Get a URL hash parameter's value (format: "#key1=value&key2=value2...").
 * @param {string} parameterName
 * @returns {string | undefined}
 */
function getHashParameter(parameterName) {
    const hash = document.location.hash;
    const match = hash.match(new RegExp(`(?<=[#&])${encodeURIComponent(parameterName)}(=([^&]*))?(?:&|$)`));
    return match ? decodeURIComponent(match[2]) : undefined;
}

/**
 * This function only lives in the browser:
 * The content of this function is executed in the GLOBAL SCOPE when the page's DOM is loaded.
 */
function scriptAtTheEndOfHtml() {
    if (showLocations) {
        document.querySelector('.locations-icon .icon-disabled').remove();
    }
    if (showPoints) {
        document.querySelector('.points-icon .icon-disabled').remove();
    }
    if (showAccents) {
        document.querySelector('.accents-icon .icon-disabled').remove();
    }

    // Dynamically added JavaScript code will go here

    // noinspection JSUnusedLocalSymbols
    const hebrewCharacterToIndex = Object.fromEntries(
        [...hebrewCharacters].map((char, index) => [char, index]),
    );

    domIsLoaded();
}

// This useless code prevents "unused" warnings:
initTocHtml.bind();
initStrongNumbersData.bind();
addBookData.bind();
addChapterData.bind();
