import { SearchQuery, closeSearchPanel, findNext, findPrevious, getSearchQuery, replaceAll, replaceNext, search, selectMatches, setSearchQuery } from "@codemirror/search"
import { EditorView, basicSetup } from 'codemirror';
import { keymap, ViewPlugin, Decoration, Direction, gutterLineClass, GutterMarker, runScopeHandlers } from '@codemirror/view';
import { markdown, insertNewlineContinueMarkupCommand, deleteMarkupBackward } from '@codemirror/lang-markdown';
import { Compartment, EditorSelection, EditorState, Facet, RangeSetBuilder, Prec, StateField } from '@codemirror/state';
import { indentWithTab, isolateHistory } from '@codemirror/commands';
import { syntaxHighlighting, HighlightStyle, syntaxTree } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// noinspection ES6UnusedImports
import { consoleError, consoleWarn, consoleInfo, consoleLog, consoleGroup, consoleGroupCollapsed, consoleGroupEnd } from './logs.js';
import { TabData } from "./tab-data.js";
import { editTableAtCursor, formatTables, isAiGeneratedFile, isRtlFile, isTableRuleLine, minimalReplacement, setHeaderAtCursor } from "./tables.js";
import { headingLineOfAnchor, markdownLinkAt, markdownLinksInLine, resolveMarkdownLink } from "./links.js";
import { isVoidPseudoTag } from "./pseudo-tags.js";
import { hebrewSearchPattern } from "./hebrew-search.js";
/** @typedef {import('../../src/server.ts').FileData} FileData */


export class MarkdownEditor {
    constructor() {
        this.tabs = new Map();
        this.activeTab = null;
        this.tabStates = new Map();
        this.expandedFolders = new Set();
        this.fileTreeElements = new Map();
        // The "serverTimestamp" of the last answer the server gave us - the cursor it wants back on
        // the next request, to tell us what has appeared and disappeared meanwhile. Null until the
        // file tree is first fetched. See applyFileSystemChanges().
        /** @type {number | null} */
        this.fsTimestamp = null;
        this.directionCompartment = new Compartment();
        this.readOnlyCompartment = new Compartment();
        this.init().catch(consoleError);
    }

    async init() {
        this.bindGlobalEvents();
        this.restoreSidebarWidth();
        await this.restoreSession();
        await this.loadFilesTree();
    }

    bindGlobalEvents() {
        window.addEventListener('beforeunload', () => this.saveSession());
        this.initSplitter();
        this.initTabReordering();
        this.initTabShortcuts();
        this.initPrintButton();
    }

    /**
     * The print button opens the active file's PDF, from the PDF mirror, in a tab of its own - and the
     * HTML button beside it the file's page from the HTML mirror.
     *
     * The tab is opened *synchronously*, while the click is still the browser's idea of a user
     * gesture, and only then pointed at the URL - because a file with unsaved changes has to be
     * written first, and a window opened after that await is taken for a pop-up and blocked.
     * Printing what is on the screen rather than what was on disk a second ago is the whole point.
     */
    initPrintButton() {
        this.publishedButtons = /** @type {HTMLButtonElement[]} */ (
            [['print-button', 'pdf'], ['html-button', 'html']].flatMap(([id, endpoint]) => {
                const button = /** @type {HTMLButtonElement | null} */ (document.getElementById(id));
                button?.addEventListener('click', () => this.openPublished(endpoint));
                return button ? [button] : [];
            }));
        this.updatePrintButton();
    }

    /** @param {string} endpoint  "pdf" for the PDF, "html" for the page */
    openPublished(endpoint) {
        const filePath = this.activeTab;
        if (!filePath) {
            return;
        }
        const newTab = window.open('', '_blank');
        const show = () => {
            const url = `/api/${endpoint}/${encodeURIComponent(filePath)}`;
            if (newTab) {
                newTab.location.href = url;
            } else {
                window.open(url, '_blank');     // a pop-up blocker took the first one
            }
        };
        const tabData = this.tabs.get(filePath);
        // autosave() swallows its own failures, so this always gets to show something - the
        // version the server last made, which is the best there is to offer.
        if (tabData && tabData.isDirty) {
            tabData.autosave().finally(show);
        } else {
            show();
        }
    }

    /** There is nothing to print, or to show, with no file open. */
    updatePrintButton() {
        for (const button of this.publishedButtons ?? []) {
            button.disabled = !this.activeTab;
        }
    }

    /**
     * Ctrl+1 .. Ctrl+9 show the 1st .. 9th tab of the strip.
     *
     * The listener is on the document and in the *capture* phase, so that the shortcut works
     * wherever the focus happens to be - and, above all, so that it is seen before CodeMirror's own
     * key handling, which would otherwise get the keystroke first while the editor is focused.
     */
    initTabShortcuts() {
        document.addEventListener('keydown', (event) => {
            if (!event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;

            // The digit is read off the *key* rather than the character: a Hebrew layout gives the
            // digits as they are, but this way a layout that does not is no worse off.
            const digit = /^(?:Digit|Numpad)([1-9])$/.exec(event.code)?.[1]
                ?? (/^[1-9]$/.test(event.key) ? event.key : null);
            if (!digit) return;

            const filePath = Array.from(this.tabs.keys())[Number(digit) - 1];
            if (filePath === undefined) return;         // fewer tabs than that - leave the key alone

            event.preventDefault();
            event.stopPropagation();
            this.switchToTab(filePath).catch(consoleError);
        }, true);
    }

    // Lets the user drag a tab to a new place in the strip, the way a browser's tabs do.
    //
    // Pointer events are used rather than the HTML5 drag-and-drop API: that API insists on drawing
    // its own drag image and gives no way to paint an insertion marker into the gap between tabs.
    //
    // The order of the tabs is not merely a DOM detail - saveSession() records it as
    // Array.from(this.tabs.keys()) - so a drop has to reorder the Map as well; see
    // reorderTabsFromDom().
    initTabReordering() {
        const tabsElement = /** @type {HTMLElement} */ (document.getElementById('tabs'));
        // How far the pointer must travel before a press turns into a drag rather than a click.
        const DRAG_THRESHOLD_PX = 4;

        tabsElement.addEventListener('pointerdown', (event) => {
            if (event.button !== 0) return;
            const target = /** @type {HTMLElement} */ (event.target);
            // The close button is not a drag handle.
            if (target.closest('.tab-close')) return;
            const draggedTab = /** @type {HTMLElement | null} */ (target.closest('.tab'));
            if (!draggedTab || draggedTab.parentElement !== tabsElement) return;

            const startX = event.clientX;
            const startY = event.clientY;
            let dragging = false;
            let dropIndex = -1;
            /** @type {HTMLElement | null} */
            let indicator = null;

            const startDrag = () => {
                dragging = true;
                draggedTab.classList.add('dragging');
                document.body.style.userSelect = 'none';
                document.body.style.cursor = 'grabbing';
                indicator = document.createElement('div');
                indicator.className = 'tab-drop-indicator';
                tabsElement.appendChild(indicator);
            };

            /**
             * @param {number} x
             * @param {number} y
             */
            const updateDrag = (x, y) => {
                // The tab itself follows the pointer, so that the gesture feels like carrying it.
                draggedTab.style.transform = `translateX(${x - startX}px)`;

                const position = this.tabDropPosition(tabsElement, draggedTab, x, y);
                dropIndex = position.index;
                const containerRect = tabsElement.getBoundingClientRect();
                const marker = /** @type {HTMLElement} */ (indicator);
                marker.style.left = `${position.gapX - containerRect.left - 1}px`;
                marker.style.top = `${position.top - containerRect.top}px`;
                marker.style.height = `${position.height}px`;
            };

            const finish = (/** @type {boolean} */ cancelled) => {
                document.removeEventListener('pointermove', onPointerMove);
                document.removeEventListener('pointerup', onPointerUp);
                document.removeEventListener('pointercancel', onPointerCancel);
                document.removeEventListener('keydown', onKeyDown, true);
                if (!dragging) return;

                indicator?.remove();
                draggedTab.classList.remove('dragging');
                draggedTab.style.transform = '';
                document.body.style.userSelect = '';
                document.body.style.cursor = '';

                if (cancelled || dropIndex < 0) return;
                const others = this.tabElements(tabsElement, draggedTab);
                tabsElement.insertBefore(draggedTab, others[dropIndex] || null);
                this.reorderTabsFromDom(tabsElement);
            };

            const onPointerMove = (/** @type {PointerEvent} */ moveEvent) => {
                if (!dragging) {
                    const moved = Math.abs(moveEvent.clientX - startX) + Math.abs(moveEvent.clientY - startY);
                    if (moved < DRAG_THRESHOLD_PX) return;
                    if (!this.tabElements(tabsElement, draggedTab).length) return;   // nothing to reorder
                    startDrag();
                }
                updateDrag(moveEvent.clientX, moveEvent.clientY);
            };
            const onPointerUp = () => finish(false);
            const onPointerCancel = () => finish(true);
            const onKeyDown = (/** @type {KeyboardEvent} */ keyEvent) => {
                if (keyEvent.key !== 'Escape') return;
                keyEvent.stopPropagation();
                keyEvent.preventDefault();
                finish(true);
            };

            document.addEventListener('pointermove', onPointerMove);
            document.addEventListener('pointerup', onPointerUp);
            document.addEventListener('pointercancel', onPointerCancel);
            document.addEventListener('keydown', onKeyDown, true);
        });
    }

    /**
     * The tab buttons of the strip, in DOM order, minus the one being dragged. The strip also holds
     * the drop indicator while a drag is on, which is why this filters by class rather than taking
     * every child.
     *
     * @param {HTMLElement} tabsElement
     * @param {HTMLElement} [excluded]
     * @returns {HTMLElement[]}
     */
    tabElements(tabsElement, excluded) {
        return /** @type {HTMLElement[]} */ (Array.from(tabsElement.querySelectorAll(':scope > .tab')))
            .filter(element => element !== excluded);
    }

    /**
     * Where would a tab dropped at (x, y) land? Returns the index among the *other* tabs that the
     * dragged tab would take, together with the geometry of the gap, for the marker to be drawn in.
     *
     * @param {HTMLElement} tabsElement
     * @param {HTMLElement} draggedTab
     * @param {number} x
     * @param {number} y
     * @returns {{ index: number, gapX: number, top: number, height: number }}
     */
    tabDropPosition(tabsElement, draggedTab, x, y) {
        const tabs = this.tabElements(tabsElement, draggedTab);
        const rects = tabs.map(element => element.getBoundingClientRect());
        const isRtl = getComputedStyle(tabsElement).direction === 'rtl';

        // Tabs wrap onto several rows once there are enough of them, so pick the row the pointer is
        // on - the nearest one, if it is above or below them all - before looking at the gaps in it.
        /** @type {number[]} */
        let rowIndexes = [];
        let bestDistance = Infinity;
        for (const [index, rect] of rects.entries()) {
            const distance = y < rect.top ? rect.top - y : (y > rect.bottom ? y - rect.bottom : 0);
            if (distance < bestDistance) {
                bestDistance = distance;
                rowIndexes = [index];
            } else if (distance === bestDistance) {
                rowIndexes.push(index);
            }
        }

        // Within the row, the gap is the one before the first tab whose middle the pointer has
        // passed; "passed" runs the other way round when the strip is right-to-left.
        const passed = (/** @type {DOMRect} */ rect) => {
            const middle = (rect.left + rect.right) / 2;
            return isRtl ? x > middle : x < middle;
        };
        const rowRect = rects[rowIndexes[0]];
        for (const index of rowIndexes) {
            if (passed(rects[index])) {
                return {
                    index,
                    gapX: isRtl ? rects[index].right : rects[index].left,
                    top: rowRect.top,
                    height: rowRect.height,
                };
            }
        }
        const lastIndex = rowIndexes[rowIndexes.length - 1];
        return {
            index: lastIndex + 1,
            gapX: isRtl ? rects[lastIndex].left : rects[lastIndex].right,
            top: rowRect.top,
            height: rowRect.height,
        };
    }

    /**
     * Brings this.tabs into line with the order of the tab buttons, after a drag has moved one.
     *
     * @param {HTMLElement} tabsElement
     */
    reorderTabsFromDom(tabsElement) {
        /** @type {Map<HTMLElement, string>} */
        const filePathByElement = new Map();
        for (const [filePath, tabData] of this.tabs) {
            filePathByElement.set(tabData.tabElement, filePath);
        }

        /** @type {Map<string, TabData>} */
        const reordered = new Map();
        for (const element of this.tabElements(tabsElement)) {
            const filePath = filePathByElement.get(element);
            const tabData = filePath === undefined ? undefined : this.tabs.get(filePath);
            if (filePath !== undefined && tabData) {
                reordered.set(filePath, tabData);
            }
        }
        // A tab with no button of its own would otherwise be dropped altogether.
        for (const [filePath, tabData] of this.tabs) {
            if (!reordered.has(filePath)) reordered.set(filePath, tabData);
        }

        this.tabs = reordered;
        this.saveSession();
    }

    initSplitter() {
        const splitter = /** @type {HTMLElement} */ (document.getElementById('splitter'));
        const sidebar = /** @type {HTMLElement} */ (document.querySelector('.sidebar'));
        let isDragging = false;
        let startX = 0;
        let startWidth = 0;


        splitter.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startWidth = sidebar.offsetWidth;
            splitter.classList.add('dragging');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const delta = e.clientX - startX;
            const newWidth = Math.max(150, Math.min(startWidth + delta, window.innerWidth - 300));
            sidebar.style.width = `${newWidth}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                splitter.classList.remove('dragging');
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                this.saveSidebarWidth();
            }
        });

        window.addEventListener('resize', () => this.restoreSidebarWidth());
    }

    saveSidebarWidth() {
        const sidebar = /** @type {HTMLElement} */ (document.querySelector('.sidebar'));
        const ratio = sidebar.offsetWidth / window.innerWidth;
        localStorage.setItem('markdownEditor.sidebarRatio', String(ratio));
    }

    restoreSidebarWidth() {
        const savedRatio = Number(localStorage.getItem('markdownEditor.sidebarRatio') || 0.25);
        const sidebar = /** @type {HTMLElement} */ (document.querySelector('.sidebar'));
        const width = Math.max(150, Math.min(savedRatio * window.innerWidth, window.innerWidth - 300));
        sidebar.style.width = `${width}px`;
    }

    /**
     * @param {TabData} tabData
     * @param {string} initialContent
     * @returns {EditorView}
     */
    createEditorView(tabData, initialContent) {
        const isRtl = this.isRtlFile(tabData.filePath, initialContent);

        const isScriptOutputFile = isScriptOutputFilePath(tabData.filePath);

        // An AI-generated file is kept byte-for-byte as the model wrote it - so it gets neither the
        // table auto-formatter nor the table-aware keys. See isAiGeneratedFile().
        const isAiGenerated = isAiGeneratedFile(tabData.filePath);

        // Create custom markdown highlighting
        const monospaceCss = { background: "rgba(128, 128, 128, .1)", fontSize: "0.9em", fontFamily: "system-ui", WebkitTextStroke: "0.3px black" }
        const markdownHighlighting = syntaxHighlighting(HighlightStyle.define([
            { tag: tags.heading1, fontSize: "2em", fontWeight: "bold" },
            { tag: tags.heading2, fontSize: "1.5em", fontWeight: "bold" },
            { tag: tags.heading3, fontSize: "1.3em", fontWeight: "bold" },
            { tag: tags.heading4, fontSize: "1.1em", fontWeight: "bold" },
            { tag: tags.heading5, fontSize: "1em", fontWeight: "bold" },
            { tag: tags.heading6, fontSize: "0.9em", fontWeight: "bold" },
            { tag: tags.quote, ...monospaceCss },
            { tag: tags.strong, fontWeight: "bold" },
            { tag: tags.emphasis, fontStyle: "italic" },
            { tag: tags.link, color: "#0066cc", textDecoration: "underline" },
            { tag: tags.monospace, ...monospaceCss }
        ]));

        // Custom key-handlers.
        // Tye actual type is KeyBinding[] - see _RTL-EDITOR/node_modules/@codemirror/view/dist/index.d.ts
        /** @type {{key: string, run: (view: EditorView) => boolean }[]} */ const specialKeyHandling = isAiGenerated ? [] : [
            // Inside a table these act on the *cell* rather than on the line - see editTableAtCursor().
            // Mod-Enter comes first so that it is matched before the plain Enter binding.
            { key: 'Mod-Enter', run: tableEditKeyHandler(isRtl, 'addRow') },
            { key: 'Enter', run: tableEditKeyHandler(isRtl, 'split') },
            { key: 'Delete', run: tableEditKeyHandler(isRtl, 'deleteForward') },
            { key: 'Backspace', run: tableEditKeyHandler(isRtl, 'deleteBackward') },
        ];
        if (isRtl) {
            specialKeyHandling.push(
                // (Home and End need no handler of their own here - see the posAndSideAtCoords() patch.)
                // On macOS on Hebrew - the key to the left of "1" produces ";" - but we want it to produce backquote "`".
                {
                    key: ';',
                    run: (view) => {
                        // @ts-ignore
                        if (event.code !== 'Backquote' || event.keyCode !== 186) {
                            return false;
                        }
                        // This handler bypasses EditorView.inputHandler, so the wrapping is done here too.
                        if (wrapSelectionWith(view, '`')) {
                            return true;
                        }
                        view.dispatch(view.state.replaceSelection('`'));
                        return true;
                    }
                },
                // On macOS on Hebrew - the key to the bottom-left of "Enter" produces "ֿ " code (Unicode 5bf), but we want it to produce a backslash "\".
                {
                    key: '\u05bf',
                    run: (view) => {
                        // @ts-ignore
                        if (event.code !== 'Backslash' || event.keyCode !== 220) {
                            return false;
                        }
                        view.dispatch(view.state.replaceSelection('\\'));
                        return true;
                    }
                },
                // On macOS on Hebrew - Shift+A types "שׁ" (Shin).
                // Normally, Alt+A should type "שׂ" (Sin) - but Chrome doesn't seem to receive this keyboard event.
                // So as a patch -  Left-Shift+A types "שׁ" (Shin)
                //           and - Right-Shift+A types "שׂ" (Sin).
                {
                    key: '\u05c1',
                    run: (view) => {
                        if (lastShiftIsRight) {
                            // Very soon, the editor will apply this event and add "Shin" (regardless if we return true or false).
                            // To avert that, we set a timer to replace that Shin with Sin.
                            const offset = view.state.selection.main.from;
                            setTimeout(() => {
                                // First - make sure that the range [offset, offset+2] contains Shin
                                const text = view.state.doc.sliceString(offset, offset + 2);
                                if (text !== '\u05e9\u05c1') {  // Check if it's Shin (ש with right dot)
                                    return;  // Not Shin, don't replace
                                }

                                // Delete the Shin character and insert Sin instead
                                view.dispatch({
                                    changes: {
                                        from: offset,
                                        to: offset + 2,  // Hebrew character + diacritic = 2 code units
                                        insert: '\u05e9\u05c2'  // Sin (ש with left dot)
                                    }
                                });
                            }, 10);
                            return true;
                        }
                        return false;
                    }
                },
            );
        }

        // noinspection JSUnusedGlobalSymbols
        const extensions = [
            basicSetup,
            search({ createPanel: (view) => new CountingSearchPanel(view) }),
            markdown({ addKeymap: false }),
            markdownTightKeymap(),
            markdownHighlighting,
            listLinePlugin,
            markdownLinkPlugin,
            inlineCodeEmphasisPlugin,
            tableLinePlugin,
            tableRuleGutterField,
            ...(isAiGenerated ? [] : [autoFormatTablesExtension(isRtl), headerRuleExtension(isRtl)]),
            wrapSelectionExtension(),
            typedArrowExtension(isRtl),
            bidiEdgeSelectionExtension(),
            // @ts-ignore
            ...specialKeyHandling.map((keyRun) => Prec.high(keymap.of([keyRun]))),
            rowEdgeEnterExtension(),
            keymap.of([indentWithTab]),
            this.directionCompartment.of(EditorView.contentAttributes.of({ dir: isRtl ? 'rtl' : 'ltr' })),
            this.readOnlyCompartment.of(EditorState.readOnly.of(tabData.readOnly)),
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    tabData.isDirty = true;
                    tabData.updateTitle();
                    tabData.scheduleAutosave();
                }
                // Track selection/cursor changes
                if (update.selectionSet) {
                    tabData.saveSelectionState();
                }
            }),
            EditorView.domEventHandlers({
                scroll: () => {
                    tabData.saveScrollPosition();
                },
                keydown: (event, view) => {
                    // Trace if the last-pressed Shift was left or right.
                    if (event.code === 'ShiftRight') {
                        lastShiftIsRight = true;
                    } else if (event.code === 'ShiftLeft') {
                        lastShiftIsRight = false;
                    }
                    showLinksAsClickable(view, isLinkModifier(event));
                },
                keyup: (event, view) => {
                    showLinksAsClickable(view, isLinkModifier(event));
                },
                mousemove: (event, view) => {
                    // Catches the modifier being pressed while the editor is not focused, and is
                    // what makes the link under the pointer light up as the key goes down.
                    showLinksAsClickable(view, isLinkModifier(event));
                },
                mouseout: (event, view) => {
                    showLinksAsClickable(view, false);
                },
                // Cmd+click (Ctrl+click elsewhere) on a [text](path) link opens the linked file.
                mousedown: (event, view) => this.openLinkAtCoords(event, view, tabData),
                // ...(isRtl ? {
                //     // Fix RTL cursor positioning: when clicking to the left of line end,
                //     //  CodeMirror positions cursor one char to the right.
                //     mouseup: (event, view) => {
                //         // Only handle single clicks that didn't create a selection (no drag or double-click)
                //         const selection = view.state.selection.main;
                //         if (event.detail !== 1 || selection.anchor !== selection.head) {
                //             return false;
                //         }
                //         const pos = view.posAtCoords({ x: event.clientX, y: event.clientY });
                //         if (pos !== null) {
                //             const line = view.state.doc.lineAt(pos);
                //
                //             // If clicked at end of line, ensure cursor goes to actual end
                //             let charIndex;
                //             for (charIndex = line.from; charIndex < line.to; charIndex++) {
                //                 const charCoords = view.coordsAtPos(charIndex);
                //                 if (charCoords) {
                //                     if (event.clientX >= charCoords.left) {
                //                         charIndex--;
                //                         break;
                //                     }
                //                 }
                //             }
                //             view.dispatch({
                //                 selection: { anchor: charIndex, head: charIndex },
                //                 scrollIntoView: true
                //             });
                //             return true;
                //         }
                //         return false;
                //     }
                // } : {})
            }),
            EditorView.lineWrapping,
            EditorView.theme({
                "&": { height: "100%" },
                ".cm-scroller": { overflow: "auto" },
                "&.cm-focused": { outline: "none" }
            }, { dark: false })
        ];
        let lastShiftIsRight = false

        if (isScriptOutputFile) {
            extensions.push(userPromptLinePlugin);
            extensions.push(looseWhitespaceSearch.of(true));
        }

        if (isRtl) {
            extensions.push(EditorView.theme({
                ".cm-content": {
                    fontFamily: "'David', 'Narkisim', 'Times New Roman', serif"
                }
            }));

            // Fix RTL cursor/selection offset caused by vertical scrollbar.
            // When the scroller has a vertical scrollbar, it takes space from the right side.
            // RTL text shifts left accordingly, but CodeMirror's cursor/selection layers
            // don't account for this shift. We compensate by translating those layers.
            extensions.push(ViewPlugin.fromClass(
                // @ts-ignore
                class {
                    constructor(/** @type {EditorView} */ view) {
                        this.adjustLayers(view);
                    }

                    update(/** @type {{view: EditorView}} */ update) {
                        this.adjustLayers(update.view);
                    }

                    adjustLayers(/** @type {EditorView} */ view) {
                        const scrollbarWidth = view.scrollDOM.offsetWidth - view.scrollDOM.clientWidth;
                        const transform = scrollbarWidth > 0 ? `translateX(${scrollbarWidth}px)` : '';
                        for (const sel of '.cm-cursorLayer,.cm-selectionLayer'.split(',')) {
                            const el = /** @type {HTMLElement | null} */ (view.dom.querySelector(sel));
                            if (el) el.style.transform = transform;
                        }
                    }
                }));
        }

        return new EditorView({
            doc: initialContent,
            extensions,
            parent: /** @type {Element} */ (document.querySelector('.editor-pane'))
        });
    }

    /**
     * (Re-)fetches the file tree and renders it.
     *
     * Also **sets the cursor**: the tree and the "what has changed since" cursor have to come from
     * the same answer, or a file created between the two would be in neither, and the tree would
     * stay wrong until the next change happened to come along.
     *
     * The expanded folders and the scroll position survive a re-render - the first because
     * renderFileTree() reads this.expandedFolders, the second because it is put back here.
     *
     * @param {boolean} isRefresh   true when the tree is already on screen, and should not be
     *                              replaced by "Loading files..." while the new one is fetched
     */
    async loadFilesTree(isRefresh = false) {
        const fileTree = /** @type {HTMLElement} */ (document.getElementById('file-tree'));
        if (!isRefresh) fileTree.innerHTML = 'Loading files...';
        const scrollTop = fileTree.scrollTop;

        try {
            const response = await fetch('/api/files');
            const {files, serverTimestamp} = await response.json();
            // The elements of the tree that is about to be thrown away must not be kept - a file
            // that has just been deleted would otherwise keep an element nobody can see.
            this.fileTreeElements.clear();
            this.renderFileTree(files, fileTree);
            fileTree.scrollTop = scrollTop;
            this.fsTimestamp = serverTimestamp ?? null;
        } catch (error) {
            if (!isRefresh) fileTree.innerHTML = 'Error loading files';
            consoleError('Failed to load files:', error);
        }
    }

    /**
     * Takes in what the server says has happened to the tree since our cursor - the "serverTimestamp"
     * and "recentFsChanges" that every /api/file answer carries.
     *
     * The tree is not patched change by change; it is fetched again. Applying a change list to the
     * rendered tree would mean re-deriving which folders still have a .md file under them, in which
     * order, and the answer is already one fetch away - one that only happens when something really
     * did change.
     *
     * @param {{ serverTimestamp?: number, recentFsChanges?: {path: string, changeType: 'created' | 'deleted'}[], fsChangesUnknown?: boolean }} data
     */
    applyFileSystemChanges(data) {
        if (typeof data.serverTimestamp === 'number') {
            // Answers can overtake one another; the cursor must never go backwards, or a change
            // would be delivered - and the tree fetched - over and over.
            this.fsTimestamp = Math.max(this.fsTimestamp ?? 0, data.serverTimestamp);
        }

        // The server cannot say what happened since a cursor that old (it has restarted, or the
        // change log has moved past it) - so the tree is taken afresh rather than believed to be
        // unchanged.
        if (data.fsChangesUnknown) {
            consoleLog('The server cannot say what has changed - reloading the file tree');
            this.loadFilesTree(true).catch(consoleError);
            return;
        }

        const changes = data.recentFsChanges;
        if (!changes?.length) return;
        consoleLog('Filesystem changes: ', changes);

        for (const tabData of this.tabs.values()) {
            tabData.applyFileSystemChange(changes);
        }
        this.loadFilesTree(true).catch(consoleError);
    }

    /**
     * @param {FileData[]} files
     * @param {HTMLElement} container
     * @param {number} level
     * @param {string} parentPath
     */
    renderFileTree(files, container, level = 0, parentPath = '') {
        container.innerHTML = '';

        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = `file-item ${file.type}`;
            fileItem.textContent = file.name;

            const currentPath = parentPath ? `${parentPath}/${file.name}` : file.name;

            if (file.type === 'file') {
                fileItem.addEventListener('click', () => this.openFile(file.path, file.name, true));
                this.fileTreeElements.set(file.path, fileItem);
                if (this.activeTab === file.path) {
                    fileItem.classList.add('active');
                }
            } else {
                fileItem.addEventListener('click', () => {
                    const childrenHolderElement = /** @type {HTMLElement | null} */ (fileItem.nextElementSibling);
                    if (childrenHolderElement) {
                        const isExpanded = childrenHolderElement.style.display !== 'none';
                        childrenHolderElement.style.display = isExpanded ? 'none' : 'block';

                        if (isExpanded) {
                            this.expandedFolders.delete(currentPath);
                        } else {
                            this.expandedFolders.add(currentPath);
                        }
                        this.saveSession();
                    }
                });
            }

            container.appendChild(fileItem);

            if (file.type === 'directory' && file.children && file.children.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'file-children';

                // Check if this folder should be expanded based on saved state
                const isExpanded = this.expandedFolders.has(currentPath);
                childrenContainer.style.display = isExpanded ? 'block' : 'none';

                this.renderFileTree(file.children, childrenContainer, level + 1, currentPath);
                container.appendChild(childrenContainer);
            }
        });
    }

    /**
     * Brings a file's entry in the tree into view, opening every folder above it on the way.
     *
     * The folders are opened in both places they are held: the `.file-children` elements that are
     * on screen now, and `this.expandedFolders`, which is what renderFileTree() reads and what the
     * session stores - so the folders stay open after the next tree fetch, and after a reload.
     *
     * A folder's path in `this.expandedFolders` is its names joined by "/", which is exactly the
     * path the server gives a file, so the ancestors are the prefixes of the file's own path.
     *
     * @param {string} filePath
     */
    revealFileInTree(filePath) {
        const fileTreeElement = this.fileTreeElements.get(filePath);
        if (!fileTreeElement) return;       // not in the tree - nothing to scroll to

        const folderNames = filePath.split('/');
        folderNames.pop();                  // the file itself is not a folder
        let folderPath = '';
        let anyFolderOpened = false;
        for (const folderName of folderNames) {
            folderPath = folderPath ? `${folderPath}/${folderName}` : folderName;
            if (!this.expandedFolders.has(folderPath)) {
                this.expandedFolders.add(folderPath);
                anyFolderOpened = true;
            }
        }
        if (anyFolderOpened) this.saveSession();

        // The elements on screen are opened by walking up from the file, rather than by looking
        // each folder's element up - the display is a property of the children holder, and every
        // one of them is on that path.
        for (let element = fileTreeElement.parentElement; element; element = element.parentElement) {
            if (element.classList.contains('file-children')) {
                element.style.display = 'block';
            } else if (element.id === 'file-tree') {
                break;
            }
        }

        fileTreeElement.scrollIntoViewIfNeeded();
    }

    /**
     * @param {string} filePath
     * @returns {Promise<{ content: string; readOnly: boolean }>}
     */
    async loadFileFromServer(filePath) {
        // Every read of a file doubles as a poll of the tree: the cursor goes out with the request,
        // and what has changed since comes back with the answer - including with a 404, which is
        // what a tab holding a missing file gets, and it has to hear about the tree too.
        const since = this.fsTimestamp === null ? '' : `?since=${this.fsTimestamp}`;
        try {
            const response = await fetch(`/api/file/${encodeURIComponent(filePath)}${since}`);
            const data = await response.json();
            this.applyFileSystemChanges(data);
            if (!response.ok) {
                throw new Error(data.error || 'Unknown error');
            }
            return data;
        } catch (error) {
            throw new Error(`Failed to load file ${JSON.stringify(filePath)}: ${error}`);
        }
    }

    /**
     * Opens a tab for a file - or, if it is already open, just brings it to the front.
     *
     * Everything that settles the tab's *place* in the strip happens synchronously; the file itself
     * is fetched only when the tab is first shown (TabData.ensureLoaded() -> loadTabContent()).
     * That is what keeps a restored session in order: were the file awaited here, this.tabs - and
     * with it saveSession() - would end up ordered by which file answered first.
     *
     * @param {string} filePath
     * @param {string} fileName
     * @param {boolean} setAsActive
     * @param {string | null} insertAfterFilePath  place the new tab right after this one, rather
     *        than at the end of the strip - which is where a file opened from a link belongs.
     *        Ignored if the file is already open, or if that tab is gone.
     */
    async openFile(filePath, fileName, setAsActive = true, insertAfterFilePath = null) {
        consoleLog(`openFile(filePath=${JSON.stringify(filePath)}, fileName=${JSON.stringify(fileName)}, setAsActive=${setAsActive})`);
        try {
            if (! this.tabs.has(filePath)) {
                // Create the tab-title element.
                const tabElement = document.createElement('button');
                tabElement.className = 'tab';
                tabElement.innerHTML = `<span class="tab-close">&times;</span><span class="tab-title"></span><span class="tab-dirty"> •</span>`;
                /** @type {HTMLElement} */ (tabElement.querySelector('.tab-close')).addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.closeTab(filePath).catch(consoleError);
                });
                tabElement.addEventListener('click', () => this.switchToTab(filePath).catch(consoleError));
                const tabsElement = /** @type {HTMLElement} */ (document.getElementById('tabs'));
                const insertAfterTab = insertAfterFilePath === null ? undefined : this.tabs.get(insertAfterFilePath);
                if (insertAfterTab) {
                    tabsElement.insertBefore(tabElement, insertAfterTab.tabElement.nextSibling);
                } else {
                    tabsElement.appendChild(tabElement);
                }

                const tabData = new TabData(this, filePath, fileName, tabElement);
                this.tabs.set(filePath, tabData);
                tabData.updateTitle();
                // this.tabs is what saveSession() stores the order as, and the new tab has just
                // been appended to it - so a tab placed mid-strip has to be sorted back in. Still
                // synchronous, as the ordering rule above demands.
                if (insertAfterTab) this.reorderTabsFromDom(tabsElement);
            }

            if (setAsActive) {
                await this.switchToTab(filePath);
                this.saveSession();
            }
        } catch (error) {
            consoleError(`Error opening file: ${/** @type {Error} */ (error).message}`);
        }
    }

    /**
     * Fetches a tab's file and builds its editor - the deferred half of openFile(), run the first
     * time the tab is shown, and again if a missing file has come back. See TabData.ensureLoaded().
     *
     * A file that cannot be read does not cost the user their tab: the editor holds a read-only
     * note saying so, and the path stays in the strip and in the session.
     *
     * @param {TabData} tabData
     */
    async loadTabContent(tabData) {
        const filePath = tabData.filePath;

        let content;
        let readOnly;
        let isMissing = false;
        try {
            ({content, readOnly} = await this.loadFileFromServer(filePath));
        } catch (error) {
            consoleError(`Failed to load ${JSON.stringify(filePath)}: `, error);
            content = `\n\`${filePath}\`\n\nfile not found`;
            readOnly = true;
            isMissing = true;
        }
        // The tab may have been closed while its file was on its way, in which case building an
        // editor for it now would leave an orphan pane behind.
        if (this.tabs.get(filePath) !== tabData) {
            return;
        }

        const contentAtServer = content;
        const isRtl = this.isRtlFile(filePath, content);

        // The file on disk holds tables in their un-mirrored form; the editor wants them
        // laid out and - in an RTL file - mirrored. So the two texts differ for any RTL
        // file that has a table, and "editor differs from disk" says nothing about whether
        // the file needs writing. What does say so is whether the file is already in the
        // form the server would write (see the POST handler): if it is not - because a
        // table is still Markdown, is misaligned, or is mirrored the wrong way round -
        // the tab starts dirty and autosaves the corrected text back. (This now happens when the
        // tab is first shown rather than when the session is restored, so a tab that is never
        // opened is never rewritten.)
        const reformats = !isMissing && !isAiGeneratedFile(filePath);
        const needsSaving = reformats && formatTables(content, false).content !== content;
        if (reformats) {
            content = formatTables(content, isRtl).content;
        }

        // A rebuild (a missing file that has come back) starts from a clean slate.
        tabData.destroyEditor();

        tabData.isRtl = isRtl;
        tabData.readOnly = !!readOnly;
        tabData.isMissing = isMissing;
        tabData.contentAtServer = contentAtServer;
        tabData.isDirty = false;

        // Build a <div> wrapper for the editor to allow easier styling.
        const editorWrapper = document.createElement('div');
        editorWrapper.className = 'editor-wrapper'
            + (isRtl ? ' rtl' : '')
            + (isScriptOutputFilePath(filePath) ? ' script-output' : '');
        /** @type {HTMLElement} */ (document.querySelector('.editor-pane')).appendChild(editorWrapper);
        tabData.editorWrapper = editorWrapper;

        // Build the editor from CodeMirror (needs tabData for event handlers)
        const editorView = this.createEditorView(tabData, content);
        tabData.editorView = editorView;
        editorWrapper.appendChild(editorView.dom);

        // A tab rebuilt while it is the one on show has to be made visible again itself; on the
        // usual path TabData.activate() does it, right after awaiting this.
        if (this.activeTab === filePath) {
            editorWrapper.classList.add('active');
        }

        tabData.tabElement.classList.toggle('missing', isMissing);
        tabData.updateTitle();

        if (!readOnly && needsSaving) {
            tabData.isDirty = true;
            tabData.updateTitle();
            tabData.scheduleAutosave();
        }
    }

    /**
     * Cmd+click (Ctrl+click off macOS) on a [text](path) link: opens the linked file and moves the
     * focus to it, rather than letting CodeMirror plant a second cursor there.
     *
     * @param {MouseEvent} event
     * @param {EditorView} view
     * @param {TabData} tabData
     * @returns {boolean}   true if the click was taken, which stops CodeMirror handling it
     */
    openLinkAtCoords(event, view, tabData) {
        if (event.button !== 0 || !isLinkModifier(event)) return false;

        const pos = view.posAtCoords({ x: event.clientX, y: event.clientY });
        if (pos === null) return false;
        const line = view.state.doc.lineAt(pos);
        const link = markdownLinkAt(line.text, pos - line.from);
        // A click in a line's empty space still lands on a text position - which in an RTL line is
        // the *start* or *end* of the line, either of which may be a link. So the pointer has to be
        // over the link as it is actually painted, not merely over one of its offsets.
        if (!link || !coordsWithinRange(view, line.from + link.from, line.from + link.to, event)) {
            return false;
        }

        event.preventDefault();
        this.openMarkdownLink(link.rawTarget, tabData.filePath).catch(consoleError);
        return true;
    }

    /**
     * Opens what a link points at: a file of the tree in a tab of its own, anything else in a
     * browser tab.
     *
     * A file that is not open yet gets its tab right after the one the link was clicked in - the
     * two are related, so they belong side by side - rather than at the end of the strip.
     * An "#anchor" then moves the cursor to the heading it names, in that file or in this one.
     *
     * @param {string} rawTarget    the text between the link's parentheses
     * @param {string} fromFilePath the file the link was clicked in
     */
    async openMarkdownLink(rawTarget, fromFilePath) {
        const resolved = resolveMarkdownLink(fromFilePath, rawTarget);
        if (!resolved) {
            consoleWarn(`Cannot open link ${JSON.stringify(rawTarget)} of ${JSON.stringify(fromFilePath)}`);
            return;
        }
        if (resolved.kind === 'external') {
            window.open(resolved.url, '_blank', 'noopener');
            return;
        }
        // A path that names no file is not turned away here: openFile() leaves a "file not found"
        // note in the tab, and picks the file up should it appear. See loadTabContent().
        if (resolved.path !== fromFilePath) {
            const fileName = /** @type {string} */ (resolved.path.split('/').pop());
            await this.openFile(resolved.path, fileName, true, fromFilePath);
        }
        if (resolved.anchor !== undefined) this.goToAnchor(resolved.path, resolved.anchor);
    }

    /**
     * Puts the cursor on the heading an "#anchor" names, and that heading at the top of the view.
     *
     * @param {string} filePath  a tab that has been shown, so its editor exists
     * @param {string} anchor
     */
    goToAnchor(filePath, anchor) {
        const tabData = this.tabs.get(filePath);
        const view = tabData?.editorView;
        if (!tabData || !view || this.activeTab !== filePath) return;
        const lineIndex = headingLineOfAnchor(view.state.doc.toString(), anchor);
        if (lineIndex < 0) {
            consoleWarn(`No heading ${JSON.stringify(anchor)} in ${JSON.stringify(filePath)}`);
            return;
        }
        // A tab that was just shown ignores scrolling for a moment (see TabData.activate()), and
        // would put the old scroll position back over this one.
        tabData.abortAutoScrolling = false;
        const line = view.state.doc.line(lineIndex + 1);
        view.dispatch({
            selection: { anchor: line.from },
            effects: EditorView.scrollIntoView(line.from, { y: 'start', yMargin: 20 }),
        });
        view.focus();
    }

    /**
     * @param {string} filePath
     */
    async switchToTab(filePath) {
        consoleLog(`switchToTab(${JSON.stringify(filePath)})`);
        const tabData = this.tabs.get(filePath);
        if (!tabData) {
            consoleError('Tab data not found for filePath:', filePath);
            return;
        }

        // Un-activate the old tab and editor.
        const oldTabData = this.tabs.get(this.activeTab);
        if (oldTabData) {
            oldTabData.deactivate();
        }

        // activate() waits for the file, so this.activeTab has to say where the user meant to be
        // *before* the wait - that is how a switch made while a file is loading wins over it.
        this.activeTab = filePath;
        this.updatePrintButton();
        this.saveSession();

        // Activate the new tab and editor.
        await tabData.activate();
    }

    /**
     * @param {string} filePath
     */
    async closeTab(filePath) {
        const tabData = this.tabs.get(filePath);

        // If the tab is dirty, delay closing it to allow autosave to kick in.
        if (tabData && tabData.isDirty) {
            consoleLog('Delaying close of dirty tab: ', filePath);
            setTimeout(() => this.closeTab(filePath).catch(consoleError), 1000);
            return;
        }

        this.tabs.delete(filePath);

        if (filePath === this.activeTab) {
            const tabToActivate = this.tabs.keys().next().value;
            if (tabToActivate) {
                await this.switchToTab(tabToActivate);
            } else {
                this.activeTab = null;
                this.updatePrintButton();
            }
        }

        // Cleanup DOM.
        if (tabData) {
            tabData.destroy();
        }

        this.saveSession();
    }


    saveSession() {
        const sessionData = {
            openTabs: Array.from(this.tabs.keys()),
            activeTab: this.activeTab,
            tabStates: Object.fromEntries(this.tabStates),
            expandedFolders: Array.from(this.expandedFolders)
        };
        // consoleLog('Saving session: ', sessionData);
        localStorage.setItem('markdownEditor.session', JSON.stringify(sessionData));
    }

    async restoreSession() {
        const sessionJson = localStorage.getItem('markdownEditor.session');
        if (!sessionJson) return;

        try {
            const sessionData = JSON.parse(sessionJson);
            consoleLog('Restoring session: ', sessionData);
            this.tabStates = new Map(Object.entries(sessionData.tabStates || {}));
            this.expandedFolders = new Set(sessionData.expandedFolders || []);

            // Every tab is created before any of them is shown: openFile() is synchronous up to
            // this.tabs.set(), so the strip - and the session written back from it - comes up in
            // the stored order. Only the active tab's file is fetched now; the others wait until
            // they are first shown.
            for (const filePath of sessionData.openTabs || []) {
                const fileName = filePath.split('/').pop();
                this.openFile(filePath, fileName, false).catch(consoleError);
            }
            if (sessionData.activeTab && this.tabs.has(sessionData.activeTab)) {
                await this.switchToTab(sessionData.activeTab);
            }
        } catch (error) {
            consoleError('Failed to restore session:', error);
        }
    }

    /**
     * @param {string} filePath
     * @param {string} [content]
     * @returns {boolean}
     */
    isRtlFile(filePath, content) {
        // The rule itself lives in tables.js, because the server needs the very same answer
        // when it decides how to write a table back to disk.
        return isRtlFile(filePath, content);
    }
}

// Plugin to add class to list lines for hanging indent and multi-level support
// noinspection JSUnusedGlobalSymbols
const listLinePlugin = ViewPlugin.fromClass(
    // @ts-ignore
    class {
        constructor(/** @type {EditorView} */ view) {
            this.decorations = this.buildDecorations(view);
        }

        update(/** @type {{ docChanged: boolean, viewportChanged: boolean, view: EditorView}} */ update) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(/** @type {EditorView} */ view) {
            const builder = new RangeSetBuilder();

            // Suppose these Markdown lines:
            //
            // - Item 1                          --> listIndentationsStack=[2]   (no indentation, and "- " is 2 chars)
            //   This is a continuation line     --> listIndentationsStack=[2]   (2 spaces indentation, still under Item 1)
            //   1. Nested Item 1.1              --> listIndentationsStack=[2,5] (2 spaces indentation, and "1. " is 3 chars, new nested list)
            //      Continuation of Item 1.1     --> listIndentationsStack=[2,5] (5 spaces indentation, still under Nested Item 1.1)
            // - Item 2                          --> listIndentationsStack=[2]   (no indentation, back to Item 2)
            // Normal text line                  --> listIndentationsStack=[]    (no indentation, not a list)
            //
            /** @type {number[]} */ const listIndentationsStack = [];

            // Trace HTML tags stack: the tags MUST open and close at the start of lines (allowing for indentation).
            // Suppose these HTML lines:
            //
            // aaa                                        --> htmlTagsStack=[]
            // <foo hey="1">                              --> htmlTagsStack=["foo"]
            //   bbb                                      --> htmlTagsStack=["foo"]
            //   <bar>                                    --> htmlTagsStack=["foo","bar"]
            //     ccc                                    --> htmlTagsStack=["foo","bar"]
            //   </bar>                                   --> htmlTagsStack=["foo","bar"]
            //   ddd                                      --> htmlTagsStack=["foo"]
            // </foo>                                     --> htmlTagsStack=["foo"]
            // eee                                        --> htmlTagsStack=[]
            const htmlTagsStack = [];

            // Scan text-lines in the document.
            // Note: we process the ENTIRE document to maintain context (like HTML tag stacks) from lines above the viewport.
            //  We could optimize this by only scanning the visible viewport and a few lines above it - like this:  for (let { from, to } of view.visibleRanges) { ... }
            const from = 0;
            const to = view.state.doc.length;
            let lineNumber = 0;
            for (let pos = from; pos <= to; ) {
                lineNumber++;
                const line = view.state.doc.lineAt(pos);
                const lineText = line.text;
                const trimmedText = lineText.trimStart();

                // ---------- Handle HTML tags ----------

                // Check for HTML tags that open or close at the start of the line (after indentation)
                const htmlTagMatch = /^<(\/?)([-\p{L}\d]+)(?:>| .*>)/u.exec(trimmedText);
                // consoleLog(`Line: `, JSON.stringify(lineText), `     `, htmlTagMatch);

                // A void tag - <כלול-בהדפסה ...>, the way HTML's own <img> is - has no closing tag, so it
                // never joins the stack: it marks its own line, and nothing below it.
                const voidTag = htmlTagMatch?.[1] === '' && isVoidPseudoTag(htmlTagMatch[2]) ? htmlTagMatch[2] : null;

                if (htmlTagMatch?.[1] === '' && !voidTag) {
                    // Opening tag
                    htmlTagsStack.push(htmlTagMatch[2]);
                }

                // If we are inside any HTML tags - or this line is a void one - mark the entire line
                let lineClass = '';
                const lineTags = voidTag ? [...htmlTagsStack, voidTag] : htmlTagsStack;
                if (lineTags.length > 0) {
                    lineClass = lineTags.map(tag => `cm-html-${tag}`).join(' ');
                    const decoration = Decoration.line({
                        class: lineClass
                    });
                    builder.add(line.from, line.from, decoration);
                }

                if (htmlTagMatch?.[1] === '/' && htmlTagMatch[2] === htmlTagsStack.at(-1)) {
                    // Closing tag
                    htmlTagsStack.pop();
                }


                // ---------- Handle List Items ----------

                if (trimmedText) {
                    // Clean up the stack based on current indentation.
                    const indentation = lineText.length - trimmedText.length;
                    while (listIndentationsStack.length > 0 && indentation < /** @type {number} */ (listIndentationsStack.at(-1))) {
                        listIndentationsStack.pop();
                    }

                    // Check if line starts with list marker: -, *, +, or numbered list
                    const listItemMatch = /^([-*+]|\d+\.)\s/.exec(trimmedText);
                    if (listItemMatch) {
                        // This is a list item - calculate its level based on indentation
                        const innerIndentation = indentation + (listItemMatch?.[0]?.length ?? 0);
                        listIndentationsStack.push(innerIndentation);
                    }

                    const level = listIndentationsStack.length;
                    if (level > 0) {
                        const decoration = Decoration.line({
                            class: `cm-list-line cm-list-level-${level}`
                        });
                        builder.add(line.from, line.from, decoration);

                        // Apply monospace font to the first listIndentationsStack.at(-1) characters of the line
                        const indentChars = /** @type {number} */ (listIndentationsStack.at(-1));
                        if (indentChars > 0 && indentChars <= lineText.length) {
                            const monospaceMark = Decoration.mark({
                                class: `cm-list-line cm-list-indent-monospace${lineClass ? ` ${lineClass}` : ''}`
                            });
                            builder.add(line.from, line.from + indentChars, monospaceMark);
                        }
                    }
                }

                // ---------- Handle "---" ----------

                if (/^---+$/.test(trimmedText)) {
                    const decoration = Decoration.line({
                        class: 'cm-horizontal-rule'
                    });
                    builder.add(line.from, line.from, decoration);
                }

                // ---------- Make end-of-line spaces visible ----------

                const terminalSpacesCount = / *$/.exec(lineText)?.[0]?.length;
                if (terminalSpacesCount) {
                    const spaceMark = Decoration.mark({
                        class: 'cm-visible-space'
                    });
                    for (let i = line.from + lineText.length - terminalSpacesCount; i < line.from + lineText.length; i++) {
                        builder.add(i, i + 1, spaceMark);
                    }
                }

                pos = line.to + 1;
            }

            if (lineNumber > 10000) {
                consoleWarn(`Document is very long (${lineNumber} lines) - performance may be slow because we scan the *whole* document, rather than just the visible lines.`);
            }

            return builder.finish();
        }
    },
    {
        // @ts-ignore
        decorations: (v) => v.decorations
    },
);


// Keeps every table in the document laid out, after every single edit.
//
// The formatting is appended to the *same* transaction that carried the user's edit, rather
// than dispatched separately, so that one Undo takes back the edit and its re-alignment
// together, and so that the intermediate, ragged state is never rendered.
//
// formatTables() is idempotent, so a keystroke that does not disturb a table costs one
// comparison and produces no change at all.
//
// Typing one of these over a selection wraps the selection instead of replacing it - the way
// basicSetup's closeBrackets already treats "(" and the other bracket pairs. The selection is left
// on the original text, so pressing the same key again wraps it once more: "123" -> "*123*" -> "**123**".
// closeBrackets quotes a selection with ' and " too, but knows nothing of the Hebrew gershayim and geresh.
// It wraps a selection only on the *opening* bracket, though, and on a Hebrew keyboard layout the key
// marked "(" types ")" - so ")" parenthesizes a selection too, as "(" does.
const wrappingMarkers = ['*', '`', '״', '׳'];

/**
 * @param {EditorView} view
 * @param {string} marker
 * @param {string} [closingMarker] what goes after the selection - the marker itself unless given
 * @returns {boolean} whether the keystroke was taken
 */
function wrapSelectionWith(view, marker, closingMarker = marker) {
    const { state } = view;
    if (state.readOnly || state.selection.ranges.every((range) => range.empty)) {
        return false;
    }
    view.dispatch(state.changeByRange((range) => {
        if (range.empty) {
            return { changes: { from: range.from, insert: marker }, range: EditorSelection.cursor(range.from + marker.length) };
        }
        return {
            changes: [{ from: range.from, insert: marker }, { from: range.to, insert: closingMarker }],
            range: EditorSelection.range(range.from + marker.length, range.to + marker.length),
        };
    }), { userEvent: 'input.type', scrollIntoView: true });
    return true;
}

/**
 * @returns {import('@codemirror/state').Extension}
 */
function wrapSelectionExtension() {
    return EditorView.inputHandler.of((view, from, to, text) => {
        if (from === to) {
            return false;
        }
        if (text === ')') {
            return wrapSelectionWith(view, '(', ')');
        }
        if (!wrappingMarkers.includes(text)) {
            return false;
        }
        return wrapSelectionWith(view, text);
    });
}

/**
 * The three-character sequences that turn into an arrow as their last character is typed - a dash
 * draws a single-lined arrow, an equals sign a double-lined one.
 */
const TYPED_ARROWS = new Map([
    ['-->', '→'], ['<--', '←'], ['<->', '↔'],
    ['==>', '⇒'], ['<==', '⇐'], ['<=>', '⇔'],
]);

/**
 * In an RTL line "<" and ">" are painted mirrored, so a typed "-->" is seen pointing left - and the
 * arrow it becomes has to point the way it was seen.
 */
const MIRRORED_ARROWS = new Map([['→', '←'], ['←', '→'], ['⇒', '⇐'], ['⇐', '⇒']]);

/**
 * Typing the last character of "-->", "<--", "<->" (or their "=" forms) replaces the sequence by
 * its arrow - in an RTL file the arrow pointing the other way, as the sequence is seen there.
 *
 * The character is inserted first and the arrow is a transaction of its own, isolated in the
 * history - so Cmd+Z right after it gives back the three characters as typed, which is the way to
 * write a literal "-->" when one is wanted. The sequence is re-read after the insertion, as the
 * table formatter may have moved it.
 *
 * Code is converted like any other text - in these files it is mostly quotation, not code. Only the
 * "-->" that closes an HTML comment is left alone.
 *
 * @param {boolean} isRtl
 * @returns {import('@codemirror/state').Extension}
 */
function typedArrowExtension(isRtl) {
    return EditorView.inputHandler.of((view, from, to, text) => {
        const { state } = view;
        if (from !== to || from < 2 || state.readOnly || state.selection.ranges.length !== 1) {
            return false;
        }
        const sequence = state.sliceDoc(from - 2, from) + text;
        let arrow = TYPED_ARROWS.get(sequence);
        if (!arrow || (sequence === '-->' && isInHtmlComment(state, from - 2))) {
            return false;
        }
        if (isRtl) {
            arrow = MIRRORED_ARROWS.get(arrow) ?? arrow;
        }
        view.dispatch({ changes: { from, insert: text }, selection: { anchor: from + text.length }, userEvent: 'input.type', scrollIntoView: true });
        const end = view.state.selection.main.head;
        if (view.state.sliceDoc(end - sequence.length, end) === sequence) {
            view.dispatch({
                changes: { from: end - sequence.length, to: end, insert: arrow },
                selection: { anchor: end - sequence.length + arrow.length },
                userEvent: 'input.type',
                annotations: isolateHistory.of('full'),
                scrollIntoView: true,
            });
        }
        return true;
    });
}

/**
 * Whether `pos` stands after a "<!--" that no "-->" has closed yet.
 *
 * @param {EditorState} state
 * @param {number} pos
 * @returns {boolean}
 */
function isInHtmlComment(state, pos) {
    const before = state.sliceDoc(0, pos);
    return before.lastIndexOf('<!--') > before.lastIndexOf('-->');
}

/**
 * Shift+Left / Shift+Right, made to select a character that stands at the edge of a mixed-direction
 * row - the "1" of an RTL line `1. אאא`, which CodeMirror's own commands could not select at all.
 *
 * That "1" is a left-to-right run at the right end of a right-to-left line, and the two sides of it
 * are not two offsets: its left side is offset 0 *and* offset 1 (painted after the "."), its right
 * side offset 1 painted after the "1". A step over it moves the caret from one side to the other but
 * leaves the offset where it was - for a cursor that is a visible move, for a selection none at all.
 * So when a step keeps the head's offset and only changes its side, the character whose glyph lies
 * between the two painted carets is the one stepped over, and it is selected - with the head on the
 * side the caret was moving to. Every other step is CodeMirror's own, except that a selection
 * shrunk back to nothing keeps the side it was shrunk to, which is what brings the caret back to
 * where the selection began.
 *
 * @returns {import('@codemirror/state').Extension}
 */
function bidiEdgeSelectionExtension() {
    const extend = (/** @type {EditorView} */ view, /** @type {boolean} */ left) => {
        const forward = left === (view.textDirectionAt(view.state.selection.main.head) === Direction.RTL);
        const selection = EditorSelection.create(view.state.selection.ranges.map((range) => {
            const moved = view.moveByChar(range, forward);
            if (moved.head !== range.head) {
                return moved.head === range.anchor
                    ? EditorSelection.cursor(moved.head, moved.assoc, moved.bidiLevel ?? undefined)
                    : rangeWithSide(range.anchor, moved.head, moved.assoc, moved.bidiLevel ?? undefined);
            }
            const steppedOver = charSteppedOver(view, range.head, range.assoc || 1, moved.assoc || 1);
            if (!steppedOver) {
                return range;
            }
            const other = steppedOver.from === range.head ? steppedOver.to : steppedOver.from;
            if (!range.empty) {
                return other === range.anchor ? EditorSelection.cursor(range.head, moved.assoc) : EditorSelection.range(range.anchor, other);
            }
            // An empty range can grow either way round; the head goes where the caret was heading.
            const target = view.coordsAtPos(range.head, moved.assoc || 1)?.left ?? 0;
            const headX = (/** @type {number} */ head, /** @type {number} */ anchor) => view.coordsAtPos(head, head > anchor ? -1 : 1)?.left ?? Infinity;
            return Math.abs(headX(other, range.head) - target) < Math.abs(headX(range.head, other) - target)
                ? EditorSelection.range(range.head, other)
                : EditorSelection.range(other, range.head);
        }), view.state.selection.mainIndex);
        view.dispatch(view.state.update({ selection, scrollIntoView: true, userEvent: 'select' }));
        return true;
    };
    return Prec.high(keymap.of([
        { key: 'Shift-ArrowLeft', run: (view) => extend(view, true) },
        { key: 'Shift-ArrowRight', run: (view) => extend(view, false) },
    ]));
}

/**
 * The keymap `markdown()` installs, with Enter never adding a blank line of its own.
 *
 * CodeMirror's Enter in a list keeps a loose list loose: under `- one`, a blank line, `- two`, Enter at
 * the end of `- two` inserts a blank line *and* `- `. The new item is wanted, the blank line is not - so
 * the command runs into a dispatch of ours, which drops the blank line from what it inserts. Its other
 * blank line - Enter on an empty second item of a tight list pushing that item down - is switched off
 * by `nonTightLists: false`, and the item's marker is removed instead.
 *
 * @returns {import('@codemirror/state').Extension}
 */
function markdownTightKeymap() {
    const continueMarkup = insertNewlineContinueMarkupCommand({ nonTightLists: false });
    /** @type {import('@codemirror/state').StateCommand} */
    const enter = ({ state, dispatch }) => continueMarkup({
        state,
        dispatch: (tr) => {
            let dropped = false;
            /** @type {{from: number, to: number, insert: string}[]} */
            const changes = [];
            tr.changes.iterChanges((fromA, toA, _fromB, _toB, inserted) => {
                const lines = inserted.toString().split('\n');
                // "\n" + the blank line (indentation and `>` only) + "\n" + the new item's markup
                if (lines.length === 3 && lines[0] === '' && !/[^\s>]/.test(lines[1])) {
                    lines.splice(1, 1);
                    dropped = true;
                }
                changes.push({ from: fromA, to: toA, insert: lines.join(state.lineBreak) });
            });
            if (!dropped) return dispatch(tr);
            const changeSet = state.changes(changes);
            dispatch(state.update({
                changes: changeSet,
                selection: state.selection.map(changeSet, 1),
                scrollIntoView: true,
                userEvent: 'input',
            }));
        },
    });
    return Prec.high(keymap.of([
        { key: 'Enter', run: enter },
        { key: 'Backspace', run: deleteMarkupBackward },
    ]));
}

/**
 * Enter with the caret painted at the edge of its row acts at that edge's end of the row - the right
 * edge of an RTL row is its start, the left edge its end - whatever offset the caret stands for.
 *
 * At the right edge of `1. אאא` the caret is offset 1, after the "1": the "1" is a left-to-right run, and
 * its right side is its end. Enter there split the line after the "1", where what is seen is a caret at
 * the start of the line. So the cursor is first moved to the row's start (or end), and Enter is then
 * left to the bindings that follow - the list continuation, the indentation - exactly as if it had been
 * there to begin with.
 *
 * @returns {import('@codemirror/state').Extension}
 */
function rowEdgeEnterExtension() {
    return Prec.highest(keymap.of([{
        key: 'Enter',
        run: (view) => {
            let moved = false;
            const selection = EditorSelection.create(view.state.selection.ranges.map((range) => {
                const edge = range.empty && rowEdgeOf(view, range.head, range.assoc || 1);
                if (!edge || edge.pos === range.head) return range;
                moved = true;
                return EditorSelection.cursor(edge.pos, edge.assoc);
            }), view.state.selection.mainIndex);
            if (moved) view.dispatch({ selection });
            return false;   // Enter itself is the next binding's
        },
    }]));
}

/**
 * The logical end of its row that `pos` is painted at, when it is painted at either edge of the row:
 * its start for the edge the row's direction starts from, its end for the other one. Null when it is
 * painted anywhere else.
 *
 * @param {EditorView} view
 * @param {number} pos
 * @param {number} assoc
 * @returns {{pos: number, assoc: -1 | 1} | null}
 */
function rowEdgeOf(view, pos, assoc) {
    const row = rowAt(view, pos, assoc);
    const caret = row && view.coordsAtPos(pos, assoc);
    if (!row || !caret) return null;
    const ltr = view.textDirectionAt(row.from) === Direction.LTR;
    const start = /** @type {const} */ ({ pos: row.from, assoc: 1 }), end = /** @type {const} */ ({ pos: row.to, assoc: -1 });
    if (Math.abs(caret.left - row.left) < 1) return ltr ? start : end;
    if (Math.abs(caret.left - row.right) < 1) return ltr ? end : start;
    return null;
}

/**
 * EditorSelection.range(), with its head on the side `assoc` names. CodeMirror leans the head of a
 * non-empty range into the range, whichever side it arrived at - and at a direction boundary the two
 * sides are painted apart: after Shift+Left from the line above `1. אאא` reached the left of the "1",
 * the caret was painted on its right. There is no public way to pass the side, so the range's flags are
 * set as EditorSelection.range() sets them, with the side's bit swapped.
 *
 * @param {number} anchor
 * @param {number} head
 * @param {number} assoc
 * @param {number} [bidiLevel]
 * @returns {import('@codemirror/state').SelectionRange}
 */
function rangeWithSide(anchor, head, assoc, bidiLevel) {
    const range = EditorSelection.range(anchor, head, undefined, bidiLevel);
    if (range.empty || !assoc || assoc === range.assoc) return range;
    const ASSOC_BEFORE = 8, ASSOC_AFTER = 16;   // @codemirror/state's RangeFlag
    // @ts-ignore - flags and create() are internal
    const flags = (range.flags & ~(ASSOC_BEFORE | ASSOC_AFTER)) | (assoc < 0 ? ASSOC_BEFORE : ASSOC_AFTER);
    // @ts-ignore
    return range.constructor.create(range.from, range.to, flags);
}

/**
 * The character next to `pos` whose glyph lies between where `pos` is painted on its `fromSide` and
 * where it is painted on its `toSide` - or null, when the two are the same spot.
 *
 * @param {EditorView} view
 * @param {number} pos
 * @param {number} fromSide
 * @param {number} toSide
 * @returns {{from: number, to: number} | null}
 */
function charSteppedOver(view, pos, fromSide, toSide) {
    const a = view.coordsAtPos(pos, fromSide), b = view.coordsAtPos(pos, toSide);
    if (!a || !b || Math.abs(a.left - b.left) < 1) return null;
    const low = Math.min(a.left, b.left), high = Math.max(a.left, b.left);
    const line = view.state.doc.lineAt(pos);
    for (const from of [pos - 1, pos]) {
        if (from < line.from || from >= line.to) continue;
        const rect = view.coordsForChar(from);
        const middle = rect && (rect.left + rect.right) / 2;
        if (middle != null && middle > low && middle < high) return { from, to: from + 1 };
    }
    return null;
}

/**
 * What each of the four characters means when it is typed on a table's rule: whether the rule it
 * lands on should become the header's. Both spellings of each, because the rule is drawn with the
 * box-drawing "─"/"═" but the keyboard offers "-"/"=".
 */
const HEADER_RULE_KEYS = new Map([['=', true], ['═', true], ['-', false], ['─', false]]);

/**
 * Typing "=" on a table's rule makes it the header rule, and "-" makes it plain again - which is
 * how a table's header is switched on and off.
 *
 * It has to be an input handler rather than a key binding: these are ordinary characters, and what
 * is wanted is to *replace* their insertion. Inserting one into a rule line would break the drawing,
 * so setHeaderAtCursor() redraws the whole rule instead - and on a rule that cannot carry a header
 * (the top and bottom ones) it swallows the keystroke rather than let it through.
 *
 * @param {boolean} isRtl
 * @returns {import('@codemirror/state').Extension}
 */
function headerRuleExtension(isRtl) {
    return EditorView.inputHandler.of((view, from, to, text) => {
        if (from !== to || !HEADER_RULE_KEYS.has(text) || view.state.readOnly) {
            return false;
        }
        const document = view.state.doc.toString();
        const result = setHeaderAtCursor(document, isRtl, from, HEADER_RULE_KEYS.get(text));
        if (!result) {
            return false;               // not on a rule - an ordinary "-" or "=", typed as usual
        }
        if (result.content !== document) {
            view.dispatch({
                changes: minimalReplacement(document, result.content),
                selection: { anchor: result.positions[0] },
                scrollIntoView: true,
            }, { userEvent: 'input.type' });
        }
        return true;
    });
}

/**
 * @param {boolean} isRtl
 * @returns {import('@codemirror/state').Extension}
 */
function autoFormatTablesExtension(isRtl) {
    return EditorState.transactionFilter.of((transaction) => {
        if (!transaction.docChanged || transaction.startState.readOnly) {
            return transaction;
        }
        const document = transaction.newDoc.toString();
        const selection = transaction.newSelection.main;
        const formatted = formatTables(document, isRtl, [selection.anchor, selection.head]);
        if (formatted.content === document) {
            return transaction;
        }
        return [transaction, {
            changes: minimalReplacement(document, formatted.content),
            selection: { anchor: formatted.positions[0], head: formatted.positions[1] },
            // The changes are expressed against the document this transaction already produced.
            sequential: true,
        }];
    });
}

/**
 * Builds a key handler for one of the structural table edits - see editTableAtCursor(), whose
 * three return values map onto: dispatch it / let CodeMirror handle the key / swallow the key.
 *
 * @param {boolean} isRtl
 * @param {'split' | 'addRow' | 'deleteForward' | 'deleteBackward'} operation
 * @returns {(view: EditorView) => boolean}
 */
function tableEditKeyHandler(isRtl, operation) {
    return (view) => {
        const { state } = view;
        const selection = state.selection.main;
        // With a selection there is a range to delete or replace: ordinary editing applies,
        // and the auto-formatter tidies up whatever it leaves behind.
        if (!selection.empty || state.readOnly) {
            return false;
        }
        const document = state.doc.toString();
        const result = editTableAtCursor(document, isRtl, selection.head, operation);
        if (!result) {
            // Not a cell-level operation - e.g. Delete in the middle of a cell's text, which is
            // an ordinary Delete. CodeMirror performs it and the auto-formatter realigns.
            return false;
        }
        if (result.content !== document) {
            view.dispatch({
                changes: minimalReplacement(document, result.content),
                selection: { anchor: result.positions[0] },
                scrollIntoView: true,
            });
        }
        // Even when nothing changed the key is consumed - editTableAtCursor() only returns
        // an unchanged document for a keystroke that would have broken the table's structure.
        return true;
    };
}


// Shrinks the line-number gutter alongside a table's horizontal rules.
//
// "cm-table-rule-line" squeezes a rule to a few pixels, and CodeMirror duly makes its gutter
// element just as short - but the number inside keeps a full row's line-height and font-size, so
// the numbers of nearby rules would be drawn on top of each other. This gives those gutter
// elements a class of their own, which style.css scales to fit.
//
// noinspection JSUnusedGlobalSymbols
const tableRuleGutterMarker = new (class extends GutterMarker {
    elementClass = 'cm-table-rule-gutter';
})();

/**
 * @param {EditorState} state
 * @returns {import('@codemirror/state').RangeSet<GutterMarker>}
 */
function buildTableRuleGutterMarkers(state) {
    const builder = new RangeSetBuilder();
    for (let lineNumber = 1; lineNumber <= state.doc.lines; lineNumber++) {
        const line = state.doc.line(lineNumber);
        // The cheap test first: only a line drawn with box characters can be a rule.
        if (boxDrawingCharRegExp.test(line.text) && isTableRuleLine(line.text)) {
            builder.add(line.from, line.from, tableRuleGutterMarker);
        }
    }
    return builder.finish();
}

const tableRuleGutterField = StateField.define({
    create: (state) => buildTableRuleGutterMarkers(state),
    update: (markers, transaction) =>
        transaction.docChanged ? buildTableRuleGutterMarkers(transaction.state) : markers,
    // @ts-ignore
    provide: (field) => gutterLineClass.from(field),
});


/**
 * Is this a ClaudeCode transcript - a file generated by "script <file> claude ..."?
 * See isScriptOutputFile in server.ts.
 *
 * Such a file is plain terminal output rather than hand-written Markdown, so it gets the
 * "script-output" class on its .editor-wrapper - which style.css uses to opt out of the
 * pseudo-tag styling (<עיון> etc.), that is meaningless there.
 *
 * @param {string} filePath
 * @returns {boolean}
 */
function isScriptOutputFilePath(filePath) {
    return /\.script(\.rtl)?\.md$/.test(filePath);
}


// Plugin to highlight the user-prompts inside ClaudeCode transcripts (*.script.md / *.script.rtl.md).
//
// A user-prompt block is:
//   ❯ first line of the prompt          --> the block starts at a line beginning with "❯ "
//     a continuation line               --> followed by any number of lines that either start with
//                                           2 spaces or are blank (empty / whitespace-only)
//                                       --> trailing blank lines are dropped from the block
// ⏺ ClaudeCode's answer                 --> a line that is neither indented nor blank ends the block
//
// A line that ClaudeCode is guaranteed to have generated (see claudeCodeOutputLineRegExp) also ends the block,
// even though it is indented.
//
// noinspection JSUnusedGlobalSymbols
const claudeCodeOutputLineRegExp = /\(ctrl\+o to expand\)|^ {2}⎿/;
const userPromptLinePlugin = ViewPlugin.fromClass(
    // @ts-ignore
    class {
        constructor(/** @type {EditorView} */ view) {
            this.decorations = this.buildDecorations(view);
        }

        update(/** @type {{ docChanged: boolean, viewportChanged: boolean, view: EditorView}} */ update) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(/** @type {EditorView} */ view) {
            const builder = new RangeSetBuilder();
            const doc = view.state.doc;
            const decoration = Decoration.line({
                class: 'cm-user-prompt'
            });

            // Note: we scan the ENTIRE document, because a block may start above the viewport.
            for (let lineNumber = 1; lineNumber <= doc.lines; ) {
                if (!doc.line(lineNumber).text.startsWith('❯ ')) {   // "❯ "
                    lineNumber++;
                    continue;
                }

                // Find the end of the block: `blockEnd` is the last line of the block,
                //  and `promptEnd` is the last line that isn't blank (blank tail lines aren't part of the prompt).
                let blockEnd = lineNumber;
                let promptEnd = lineNumber;
                while (blockEnd < doc.lines) {
                    const nextLineText = doc.line(blockEnd + 1).text;
                    const isBlank = !nextLineText.trim();
                    if (!isBlank && !nextLineText.startsWith('  ')) {
                        break;
                    }
                    if (claudeCodeOutputLineRegExp.test(nextLineText)) {
                        break;
                    }
                    blockEnd++;
                    if (!isBlank) {
                        promptEnd = blockEnd;
                    }
                }

                for (; lineNumber <= promptEnd; lineNumber++) {
                    builder.add(doc.line(lineNumber).from, doc.line(lineNumber).from, decoration);
                }
                lineNumber = blockEnd + 1;
            }

            return builder.finish();
        }
    },
    {
        // @ts-ignore
        decorations: (v) => v.decorations
    },
);


// Plugin that marks *...* and **...** *inside* an inline-code span - `a *b* c` - as bold.
//
// Markdown says a code span is literal text, so the parser gives it no StrongEmphasis/Emphasis
// children and the { tag: tags.strong } rule of markdownHighlighting never fires there. The stars
// are still meant as emphasis in this project's files, so they are decorated here instead.
//
// Unlike markdownLinkPlugin, this one asks the syntax tree rather than scanning the raw lines: the
// question is exactly "which spans did the parser call InlineCode?", and a regexp for backticks
// would have to re-answer it - and would get fenced code blocks and escaped backticks wrong.
// Inside such a span, though, the parser has nothing more to say, so the stars are found by regexp.
//
// The marks are included in the bold range, the way tags.strong covers the ** of a real **bold**.
// noinspection JSUnusedGlobalSymbols
const inlineCodeEmphasisPlugin = ViewPlugin.fromClass(
    // @ts-ignore
    class {
        constructor(/** @type {EditorView} */ view) {
            this.decorations = this.buildDecorations(view);
        }

        update(/** @type {{ docChanged: boolean, viewportChanged: boolean, startState: EditorState, state: EditorState, view: EditorView}} */ update) {
            // "the tree changed" matters as much as the other two here, and is easy to forget: a
            // long file is parsed a slice at a time, in the background, and the transactions that
            // carry each new slice change neither the document nor the viewport. Without this test
            // a file big enough not to be parsed in one go shows no emphasis at all until its first
            // edit - which is what finally rebuilds the decorations.
            if (update.docChanged || update.viewportChanged
                || syntaxTree(update.startState) !== syntaxTree(update.state)) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(/** @type {EditorView} */ view) {
            const builder = new RangeSetBuilder();
            const decoration = Decoration.mark({ class: 'cm-code-emphasis' });

            for (const { from, to } of view.visibleRanges) {
                syntaxTree(view.state).iterate({
                    from, to,
                    enter: (node) => {
                        if (node.name !== 'InlineCode') {
                            return;
                        }
                        const text = view.state.doc.sliceString(node.from, node.to);
                        for (const match of text.matchAll(inlineCodeEmphasisRegExp)) {
                            builder.add(node.from + match.index, node.from + match.index + match[0].length, decoration);
                        }
                    }
                });
            }

            return builder.finish();
        }
    },
    {
        // @ts-ignore
        decorations: (v) => v.decorations
    },
);

// **...** comes first, so that it wins over *...* over the same text. Neither may span a line
// break, and neither may be empty - "**" on its own is not an emphasis of nothing.
const inlineCodeEmphasisRegExp = /\*\*[^*\n]+\*\*|\*[^*\n]+\*/g;


// Plugin that puts every table line in a monospace font.
//
// A table is drawn with box-drawing characters and its cells are padded with spaces to an exact
// number of columns:
//     ┌─────────────┬──────────┐
//     │ מוצא        │ עוף      │
//     └─────────────┴──────────┘
// The padding is kept correct by formatTables() in tables.js (Hebrew Nikud is zero-width, and is
// counted as such) - it just needs a monospace font to line up, which is what the "cm-table-line"
// class does in style.css. ClaudeCode transcripts (*.script.md / *.script.rtl.md) arrive already
// drawn this way, so the same plugin serves them too.
//
// A line that is nothing but a horizontal rule gets "cm-table-rule-line" as well, so that the
// separators between rows can be squeezed to a fraction of a row's height.
//
// noinspection JSUnusedGlobalSymbols
// Marks every [text](path) link, so that the CSS can show it as clickable while the Cmd key is
// held - see showLinksAsClickable() and MarkdownEditor.openLinkAtCoords().
//
// The links are found by scanning the visible lines rather than by walking the syntax tree: the
// click handler has to answer the same question about a single line, and one regexp (links.js)
// answering both keeps the highlight and the clickable area the same thing.
// noinspection JSUnusedGlobalSymbols
const markdownLinkPlugin = ViewPlugin.fromClass(
    // @ts-ignore
    class {
        constructor(/** @type {EditorView} */ view) {
            this.decorations = this.buildDecorations(view);
        }

        update(/** @type {{ docChanged: boolean, viewportChanged: boolean, view: EditorView}} */ update) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(/** @type {EditorView} */ view) {
            const builder = new RangeSetBuilder();
            const linkDecoration = Decoration.mark({ class: 'cm-md-link' });

            for (const { from, to } of view.visibleRanges) {
                for (let pos = from; pos <= to; ) {
                    const line = view.state.doc.lineAt(pos);
                    for (const link of markdownLinksInLine(line.text)) {
                        builder.add(line.from + link.from, line.from + link.to, linkDecoration);
                    }
                    pos = line.to + 1;
                }
            }

            return builder.finish();
        }
    },
    {
        // @ts-ignore
        decorations: (v) => v.decorations
    },
);

/**
 * Is this the modifier that turns a click on a link into "open it"? Cmd on macOS, Ctrl elsewhere -
 * where Cmd does not exist and Ctrl+click is not the context-menu gesture it is on a Mac.
 *
 * @param {MouseEvent | KeyboardEvent} event
 * @returns {boolean}
 */
function isLinkModifier(event) {
    return isMac ? event.metaKey : event.ctrlKey;
}
const isMac = /Mac|iP(hone|ad|od)/.test(navigator.platform || navigator.userAgent);

/**
 * Turns the "links are clickable right now" hint on or off for a whole editor - the CSS then gives
 * every .cm-md-link a pointer cursor and a heavier underline.
 *
 * @param {EditorView} view
 * @param {boolean} clickable
 */
function showLinksAsClickable(view, clickable) {
    view.contentDOM.classList.toggle('cm-links-clickable', clickable);
}

/**
 * Is the pointer over the text of [from, to) as it is actually painted?
 *
 * A range can be painted as several rectangles - it may be wrapped over two lines, or split by the
 * bidi algorithm - so every one of them is tried.
 *
 * @param {EditorView} view
 * @param {number} from
 * @param {number} to
 * @param {MouseEvent} event
 * @returns {boolean}
 */
function coordsWithinRange(view, from, to, event) {
    try {
        const start = view.domAtPos(from);
        const end = view.domAtPos(to);
        const range = document.createRange();
        range.setStart(start.node, start.offset);
        range.setEnd(end.node, end.offset);
        return Array.from(range.getClientRects()).some(rect =>
            event.clientX >= rect.left && event.clientX <= rect.right &&
            event.clientY >= rect.top && event.clientY <= rect.bottom);
    } catch (error) {
        // Should the DOM not be where domAtPos() says - better to open the link than to swallow
        // the click.
        consoleWarn('Failed to measure a link\'s position: ', error);
        return true;
    }
}


const boxDrawingCharRegExp = /[─-╿]/;   // The Unicode "Box Drawing" block
const tableLinePlugin = ViewPlugin.fromClass(
    // @ts-ignore
    class {
        constructor(/** @type {EditorView} */ view) {
            this.decorations = this.buildDecorations(view);
        }

        update(/** @type {{ docChanged: boolean, viewportChanged: boolean, view: EditorView}} */ update) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(/** @type {EditorView} */ view) {
            const builder = new RangeSetBuilder();
            const rowDecoration = Decoration.line({
                class: 'cm-table-line'
            });
            const ruleDecoration = Decoration.line({
                class: 'cm-table-line cm-table-rule-line'
            });

            // Note: unlike the other plugins, each line stands on its own here -
            //  so it is enough to scan just the visible lines.
            for (const { from, to } of view.visibleRanges) {
                for (let pos = from; pos <= to; ) {
                    const line = view.state.doc.lineAt(pos);
                    if (boxDrawingCharRegExp.test(line.text)) {
                        builder.add(line.from, line.from, isTableRuleLine(line.text) ? ruleDecoration : rowDecoration);
                    }
                    pos = line.to + 1;
                }
            }

            return builder.finish();
        }
    },
    {
        // @ts-ignore
        decorations: (v) => v.decorations
    },
);


// The Find panel - CodeMirror's own SearchPanel (which it does not export), plus:
//  - a "first" button, jumping to the first match of the document;
//  - "N מופעים", the number of matches in the *whole* document, recounted on every change of the
//    query or of the text;
//  - every button but the close one disabled while there is no match.
// Every input is autocomplete="off": on a reload Chrome refills form controls by name - even ones made
//  later, as this panel is on Cmd+F - and without a change event, so a "regexp" left ticked before the
//  reload came back ticked over a plain query. mount() then puts the query back into the inputs too.
// The count goes through the query's own matcher, so it is the patched Hebrew search below that counts -
//  the same matches next/previous walk through (see searchMatcher()).
// Typed against @codemirror/view and /state, which @codemirror/search is built on - not the copies
//  under codemirror/node_modules that the "codemirror" import's types point at. At runtime the
//  import map makes them one and the same.
/** @typedef {import('@codemirror/view').EditorView} SearchView */
/** @typedef {import('@codemirror/state').EditorState} SearchEditorState */
class CountingSearchPanel {
    /** @param {SearchView} view */
    constructor(view) {
        this.view = view;
        /** @type {SearchQuery} */
        this.query = getSearchQuery(view.state);
        this.commit = this.commit.bind(this);
        const phrase = (/** @type {string} */ text) => view.state.phrase(text);
        const field = (/** @type {string} */ name, /** @type {string} */ value, /** @type {string} */ placeholder, mainField = false) => {
            const input = document.createElement('input');
            Object.assign(input, { value, placeholder, className: 'cm-textfield', name });
            input.setAttribute('aria-label', placeholder);
            input.setAttribute('form', '');
            input.setAttribute('autocomplete', 'off');
            if (mainField) input.setAttribute('main-field', 'true');
            input.addEventListener('change', this.commit);
            // 'input' rather than CodeMirror's 'keyup': a paste or a cut by mouse changes the text too
            input.addEventListener('input', this.commit);
            return input;
        };
        const checkbox = (/** @type {string} */ name, /** @type {boolean} */ checked, /** @type {string} */ label) => {
            const input = document.createElement('input');
            Object.assign(input, { type: 'checkbox', name, checked });
            input.setAttribute('form', '');
            input.setAttribute('autocomplete', 'off');
            input.addEventListener('change', this.commit);
            const element = document.createElement('label');
            element.append(input, phrase(label));
            return { input, element };
        };
        /** @type {HTMLButtonElement[]} */
        this.matchButtons = [];
        const button = (/** @type {string} */ name, /** @type {(view: SearchView) => boolean} */ command, /** @type {string} */ label) => {
            const element = document.createElement('button');
            Object.assign(element, { className: 'cm-button', name, type: 'button', textContent: phrase(label) });
            element.addEventListener('click', () => command(view));
            this.matchButtons.push(element);
            return element;
        };

        this.searchField = field('search', this.query.search, phrase('Find'), true);
        this.replaceField = field('replace', this.query.replace, phrase('Replace'));
        const caseBox = checkbox('case', this.query.caseSensitive, 'match case');
        const reBox = checkbox('re', this.query.regexp, 'regexp');
        const wordBox = checkbox('word', this.query.wholeWord, 'by word');
        this.caseField = caseBox.input;
        this.reField = reBox.input;
        this.wordField = wordBox.input;
        this.countLabel = document.createElement('span');
        this.countLabel.className = 'cm-search-count';
        const close = document.createElement('button');
        Object.assign(close, { name: 'close', type: 'button', textContent: '×' });
        close.setAttribute('aria-label', phrase('close'));
        close.addEventListener('click', () => closeSearchPanel(view));

        this.dom = document.createElement('div');
        this.dom.className = 'cm-search';
        this.dom.addEventListener('keydown', (event) => this.keydown(event));
        this.dom.append(
            this.searchField,
            button('first', findFirst, 'first'),
            button('next', findNext, 'next'),
            button('prev', findPrevious, 'previous'),
            button('select', selectMatches, 'all'),
            caseBox.element, reBox.element, wordBox.element,
            this.countLabel,
            ...(view.state.readOnly ? [] : [
                document.createElement('br'),
                this.replaceField,
                button('replace', replaceNext, 'replace'),
                button('replaceAll', replaceAll, 'replace all'),
            ]),
            close,
        );
        this.recount();
    }

    commit() {
        const query = new SearchQuery({
            search: this.searchField.value,
            caseSensitive: this.caseField.checked,
            regexp: this.reField.checked,
            wholeWord: this.wordField.checked,
            replace: this.replaceField.value,
        });
        if (!query.eq(this.query)) {
            this.query = query;
            this.view.dispatch({ effects: setSearchQuery.of(query) });
        }
    }

    /** @param {KeyboardEvent} event */
    keydown(event) {
        if (runScopeHandlers(this.view, event, 'search-panel')) {
            event.preventDefault();
        } else if (event.key === 'Enter' && event.target === this.searchField) {
            event.preventDefault();
            (event.shiftKey ? findPrevious : findNext)(this.view);
        } else if (event.key === 'Enter' && event.target === this.replaceField) {
            event.preventDefault();
            replaceNext(this.view);
        }
    }

    /** @param {import('@codemirror/view').ViewUpdate} update */
    update(update) {
        let queryChanged = false;
        for (const transaction of update.transactions) {
            for (const effect of transaction.effects) {
                if (effect.is(setSearchQuery)) {
                    queryChanged = true;
                    if (!effect.value.eq(this.query)) this.setQuery(effect.value);
                }
            }
        }
        if (queryChanged || update.docChanged) {
            this.recount();
        }
    }

    /** @param {SearchQuery} query */
    setQuery(query) {
        this.query = query;
        this.searchField.value = query.search;
        this.replaceField.value = query.replace;
        this.caseField.checked = query.caseSensitive;
        this.reField.checked = query.regexp;
        this.wordField.checked = query.wholeWord;
    }

    recount() {
        const count = countMatches(this.view.state, this.query);
        this.countLabel.textContent =
            count === null ? (this.query.search ? 'ביטוי לא תקין' : '') :
            count === 1 ? 'מופע אחד' :
            `${count} מופעים`;
        for (const button of this.matchButtons) {
            button.disabled = !count;
        }
    }

    mount() {
        // Once in the page - where the browser may have refilled the inputs - they show the query again.
        this.setQuery(this.query);
        this.searchField.select();
    }

    get pos() { return 80; }
    get top() { return false; }
}

/**
 * How many matches the query has in the whole document; null for a query that cannot search
 * (an empty one, or a broken regexp).
 * @param {SearchEditorState} state
 * @param {SearchQuery} query
 */
function countMatches(state, query) {
    if (!query.valid) return null;
    return searchMatcher(query).matchAll(state, Infinity).length;
}

/**
 * The query's matcher as the search itself builds it - through create(), which the patch below
 * routes to the Hebrew-aware RegExp search. query.getCursor() would not: for a plain query it walks
 * a plain-string cursor, and would count other matches than next/previous visit.
 * @param {SearchQuery} query
 * @returns {{matchAll(state: SearchEditorState, limit: number): {from: number, to: number}[],
 *            nextMatch(state: SearchEditorState, from: number, to: number): {from: number, to: number} | null}}
 */
function searchMatcher(query) {
    return /** @type {any} */ (query).create();
}

/**
 * Selects the first match of the document - "first" in the search panel.
 * @param {SearchView} view
 */
function findFirst(view) {
    const query = getSearchQuery(view.state);
    if (!query.valid) return false;
    const first = searchMatcher(query).nextMatch(view.state, 0, 0);
    if (!first) return false;
    const selection = EditorSelection.single(first.from, first.to);
    view.dispatch({
        selection,
        effects: /** @type {any} */ (EditorView).scrollIntoView(selection.main, { y: 'center' }),
        userEvent: 'select.search',
    });
    return true;
}


// Whether a plain search in this editor matches any run of whitespace for a run of whitespace in
//  the query - on in a terminal recording (*.script.md / *.script.rtl.md), where a line the
//  terminal wrapped has a line break and an indentation where the words had a space.
//  See hebrewSearchPattern()'s `looseWhitespace`.
/** @type {Facet<boolean, boolean>} */
const looseWhitespaceSearch = Facet.define({ combine: (values) => values.some(Boolean) });

// HORRIBLE PATCH to CodeMirror to ignore Hebrew Nikud/Punctuation on search
//  (not including RegExp search). What a plain search matches is decided by hebrewSearchPattern().
// A plain query is never searched as a string: create() - which builds the matcher that next, previous,
//  the highlighting and CountingSearchPanel all use - is handed a RegExp query of the Hebrew-aware
//  pattern instead. The pattern has to be built *here*, before any RegExpCursor sees it: the cursor
//  compiles its query in its constructor, and the text as typed - "(" say - need not be a valid RegExp.
// create() is not told which editor it is for, so a plain query's matcher holds a RegExp query for
//  either value of looseWhitespaceSearch, and picks by the state each of its calls is handed.
(() => {
    const originalSearchCreate = /** @type {any} */ (SearchQuery.prototype).create;
    /** @type {any} */ (SearchQuery.prototype).create = /** @this {SearchQuery & {unquoted: string}} */ function () {
        if (this.regexp) {
            return originalSearchCreate.apply(this, arguments);
        }
        /** @type {Map<boolean, any>} */
        const matchers = new Map();
        const matcher = (/** @type {boolean} */ looseWhitespace) => {
            if (!matchers.has(looseWhitespace)) {
                matchers.set(looseWhitespace, originalSearchCreate.call(new SearchQuery({
                    // `unquoted` is the text as a plain search reads it - "\n" a newline, and so on.
                    search: hebrewSearchPattern(this.unquoted, { looseWhitespace }),
                    caseSensitive: this.caseSensitive,
                    wholeWord: this.wholeWord,
                    // A RegExp query's replacement expands $1, $&...; a plain one's is taken as it is.
                    replace: this.replace.replace(/\$/g, '$$$$'),
                    regexp: true,
                })));
            }
            return matchers.get(looseWhitespace);
        };
        const forState = (/** @type {EditorState} */ state) => matcher(state.facet(looseWhitespaceSearch));
        // The interface of CodeMirror's (unexported) QueryType - what its commands and highlighter call.
        return {
            spec: this,
            nextMatch: (/** @type {EditorState} */ state, /** @type {number} */ from, /** @type {number} */ to) => forState(state).nextMatch(state, from, to),
            prevMatch: (/** @type {EditorState} */ state, /** @type {number} */ from, /** @type {number} */ to) => forState(state).prevMatch(state, from, to),
            matchAll: (/** @type {EditorState} */ state, /** @type {number} */ limit) => forState(state).matchAll(state, limit),
            highlight: (/** @type {EditorState} */ state, /** @type {number} */ from, /** @type {number} */ to, /** @type {any} */ add) => forState(state).highlight(state, from, to, add),
            getReplacement: (/** @type {any} */ result) => matcher(false).getReplacement(result),
        };
    };
})();


// PATCH to CodeMirror: a point beyond the text of a row stands for the row's *logical* end (or start),
//  not for whichever character happens to be painted at that edge.
// In a line that mixes directions the two differ. `אאא ttt` is painted `ttt אאא`, with "ttt" running
//  left to right - so its far left is the *start* of "ttt", offset 4, while the line ends at 7, between
//  "ttt" and the space. CodeMirror finds the ends of a row by asking posAtCoords() about the editor's
//  far left and far right, and so took offset 4 for the end of the line. Three things went wrong with it:
//  - End (and Shift+End, Cmd+arrow - everything through moveToLineBoundary()) stopped before "ttt".
//  - A selection was painted against a row ending at 4 - its "ttt" part came out with a negative
//    width, and was not painted at all, though the selected text itself was right.
//  - A click, or a drag, past the end of the line's text stopped before "ttt" too.
// So a point to the line's "end" side of its row's text - the left in a right-to-left line - is the
//  row's logical end, and one to the other side its logical start. A point over the text is left to
//  CodeMirror. A row is a wrapped line's row on the screen; the rows of a line are in logical order,
//  which is what lets rowAt() find a row's ends by binary search.
(() => {
    const originalPosAndSideAtCoords = EditorView.prototype.posAndSideAtCoords;
    /** @this {EditorView} */
    EditorView.prototype.posAndSideAtCoords = function (/** @type {{x: number, y: number}} */ coords, precise = true) {
        const found = rowEndsAtCoords(this, coords, originalPosAndSideAtCoords.call(this, coords, precise));
        return found && (toLineEdge(this, found.pos, found.assoc) ?? found);
    };
    /**
     * @param {EditorView} view
     * @param {{x: number, y: number}} coords
     * @param {{pos: number, assoc: -1 | 1} | null} found
     */
    function rowEndsAtCoords(view, coords, found) {
        if (!found) return found;
        const row = rowAt(view, found.pos, found.assoc);
        if (!row) return found;
        const ltr = view.textDirectionAt(row.from) === Direction.LTR;
        if (coords.x < row.left) {
            return ltr ? { pos: row.from, assoc: 1 } : { pos: row.to, assoc: -1 };
        }
        if (coords.x > row.right) {
            return ltr ? { pos: row.to, assoc: -1 } : { pos: row.from, assoc: 1 };
        }
        return found;
    }
    /** @this {EditorView} */
    EditorView.prototype.posAtCoords = function (/** @type {{x: number, y: number}} */ coords, precise = true) {
        const found = this.posAndSideAtCoords(coords, precise);
        return found && found.pos;
    };
})();

// PATCH to CodeMirror: the start of a line is painted at the line's start edge - the right edge of an
//  RTL line - and its end at the other edge, even when the line opens (or ends) with a run of the other
//  direction.
// In `1. אאא` the "1" is a left-to-right run at the right end of the line, and CodeMirror paints offset 0,
//  the start of that run, on its *left*: Home put the caret between the "1" and the ".", where it is seen
//  as standing after the "1". What is painted at the right edge is offset 1, the run's end - after the "1",
//  so that Backspace there deleted the "1" and a letter typed there went in after it.
// So the line's start and the run's far end swap places, for the caret only:
//  - coordsAtPos() paints the line's start where the run's far end was painted. Only for a side of ±1, which
//    is what the caret asks for; the selection layer asks with ±2, and its rectangles are left as they were.
//  - moveByChar() - the arrows, with or without Shift, by character or by word - moves from the line's start
//    as it would from that end, and an arrival at that end is an arrival at the line's start.
//  - moveVertically() and posAndSideAtCoords() (above) take an arrival at that end - by Up / Down, or by a
//    click - for the line's start.
// A line that is one run of the other direction throughout - an English line of an RTL file - is left alone:
//  it is read as the text it is, and its start is the start of its first word.
(() => {
    const originalCoordsAtPos = EditorView.prototype.coordsAtPos;
    /** @this {EditorView} */
    EditorView.prototype.coordsAtPos = function (/** @type {number} */ pos, side = 1) {
        if (Math.abs(side) <= 1) {
            const line = this.state.doc.lineAt(pos);
            const alias = pos === line.from ? lineEdgeAlias(this, line, true) : pos === line.to ? lineEdgeAlias(this, line, false) : null;
            if (alias) {
                const here = originalCoordsAtPos.call(this, pos, side);
                const there = originalCoordsAtPos.call(this, alias.pos, alias.assoc);
                if (here && there && there.top < here.bottom && here.top < there.bottom) return there;
            }
        }
        return originalCoordsAtPos.call(this, pos, side);
    };
    const originalMoveByChar = EditorView.prototype.moveByChar;
    /** @this {EditorView} */
    EditorView.prototype.moveByChar = function (/** @type {import('@codemirror/state').SelectionRange} */ start, /** @type {boolean} */ forward, /** @type {any} */ by) {
        const line = this.state.doc.lineAt(start.head);
        const alias = start.head === line.from ? lineEdgeAlias(this, line, true) : start.head === line.to ? lineEdgeAlias(this, line, false) : null;
        const moved = originalMoveByChar.call(this, alias ? EditorSelection.cursor(alias.pos, alias.assoc) : start, forward, by);
        const edge = toLineEdge(this, moved.head, moved.assoc);
        return edge ? EditorSelection.cursor(edge.pos, edge.assoc) : moved;
    };
    const originalMoveVertically = EditorView.prototype.moveVertically;
    /** @this {EditorView} */
    EditorView.prototype.moveVertically = function (/** @type {import('@codemirror/state').SelectionRange} */ start, /** @type {boolean} */ forward, /** @type {number} */ distance) {
        const moved = originalMoveVertically.call(this, start, forward, distance);
        const edge = toLineEdge(this, moved.head, moved.assoc);
        return edge ? EditorSelection.cursor(edge.pos, edge.assoc, undefined, moved.goalColumn) : moved;
    };
})();

/**
 * Where a line's start (or end) would be painted if it were not the start of a run of the other
 * direction: the far end of that run, and the side of it that is painted at the line's edge. Null when the
 * line does not open (end) with such a run, and when the run is the whole line.
 *
 * @param {EditorView} view
 * @param {import('@codemirror/state').Line} line
 * @param {boolean} atStart
 * @returns {{pos: number, assoc: -1 | 1} | null}
 */
function lineEdgeAlias(view, line, atStart) {
    if (line.length === 0) return null;
    const spans = view.bidiSpans(line);   // in visual order, from the line's start edge
    const base = view.textDirectionAt(line.from) === Direction.LTR ? 0 : 1;
    const span = spans[atStart ? 0 : spans.length - 1];
    if (span.level % 2 === base) return null;
    const pos = line.from + (atStart ? span.to : span.from);
    if (pos === line.from || pos === line.to) return null;
    return atStart ? { pos, assoc: -1 } : { pos, assoc: 1 };
}

/**
 * The line's start (or end), when `pos` on its `assoc` side is where lineEdgeAlias() says the line's start
 * (end) would have been painted - that spot is the line's start now. Null for any other position.
 *
 * @param {EditorView} view
 * @param {number} pos
 * @param {number} assoc
 * @returns {{pos: number, assoc: -1 | 1} | null}
 */
function toLineEdge(view, pos, assoc) {
    const line = view.state.doc.lineAt(pos);
    const start = lineEdgeAlias(view, line, true), end = lineEdgeAlias(view, line, false);
    if (start && start.pos === pos && assoc < 0) return { pos: line.from, assoc: 1 };
    if (end && end.pos === pos && assoc > 0) return { pos: line.to, assoc: -1 };
    return null;
}

/**
 * The row of the screen that `pos` is painted on: its logical range, and the horizontal extent of its
 * text. Null when there is no text there to measure - an empty line, a widget, a line out of view.
 * @param {EditorView} view
 * @param {number} pos
 * @param {number} assoc
 * @returns {{from: number, to: number, left: number, right: number} | null}
 */
function rowAt(view, pos, assoc) {
    const line = view.state.doc.lineAt(pos);
    if (line.length === 0 || pos < view.viewport.from || pos > view.viewport.to) return null;
    const here = view.coordsAtPos(pos, assoc || 1);
    if (!here) return null;
    const middle = (here.top + here.bottom) / 2;
    const onRow = (/** @type {number} */ p, /** @type {-1 | 1} */ side) => {
        const rect = view.coordsAtPos(p, side);
        return !!rect && rect.top <= middle && rect.bottom >= middle;
    };
    // The last position still on the row, painted as the end of it; the first, as its start.
    let from = line.from, to = line.to;
    if (!onRow(to, -1)) {
        let low = pos, high = line.to;   // onRow(low) holds, onRow(high) does not
        while (high - low > 1) { const mid = (low + high) >> 1; if (onRow(mid, -1)) low = mid; else high = mid; }
        to = low;
    }
    if (!onRow(from, 1)) {
        let low = line.from, high = pos;   // onRow(high) holds, onRow(low) does not
        while (high - low > 1) { const mid = (low + high) >> 1; if (onRow(mid, 1)) high = mid; else low = mid; }
        from = high;
    }
    let lineElement;
    try {
        const { node } = view.domAtPos(line.from);
        lineElement = /** @type {Element} */ (node.nodeType === Node.TEXT_NODE ? node.parentElement : node).closest('.cm-line');
    } catch {
        return null;
    }
    if (!lineElement) return null;
    const range = document.createRange();
    range.selectNodeContents(lineElement);
    let left = Infinity, right = -Infinity;
    for (const rect of range.getClientRects()) {
        if (rect.width > 0 && rect.top <= middle && rect.bottom >= middle) {
            left = Math.min(left, rect.left);
            right = Math.max(right, rect.right);
        }
    }
    return left < right ? { from, to, left, right } : null;
}
