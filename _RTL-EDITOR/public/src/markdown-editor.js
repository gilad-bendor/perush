import { RegExpCursor, SearchQuery } from "@codemirror/search"
import { EditorView, basicSetup } from 'codemirror';
import { keymap, ViewPlugin, Decoration, gutterLineClass, GutterMarker } from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import { Compartment, EditorSelection, EditorState, RangeSetBuilder, Prec, StateField } from '@codemirror/state';
import { indentWithTab } from '@codemirror/commands';
import { syntaxHighlighting, HighlightStyle, syntaxTree } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// noinspection ES6UnusedImports
import { consoleError, consoleWarn, consoleInfo, consoleLog, consoleGroup, consoleGroupCollapsed, consoleGroupEnd } from './logs.js';
import { TabData } from "./tab-data.js";
import { editTableAtCursor, formatTables, isAiGeneratedFile, isRtlFile, isTableRuleLine, minimalReplacement } from "./tables.js";
import { markdownLinkAt, markdownLinksInLine, resolveMarkdownLink } from "./links.js";
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
                // Custom Home key handler for RTL mode:
                // Fixes the issue where Home key in RTL mode moves cursor to "one-before-start" position
                {
                    key: "Home",
                    run: (view) => {
                        const {state} = view;
                        const selection = state.selection.main;
                        const line = state.doc.lineAt(selection.head);
                        view.dispatch({
                            selection: {anchor: line.from, head: line.from},
                            scrollIntoView: true
                        });
                        return true;
                    }
                },
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
            markdown(),
            markdownHighlighting,
            listLinePlugin,
            markdownLinkPlugin,
            inlineCodeEmphasisPlugin,
            tableLinePlugin,
            tableRuleGutterField,
            ...(isAiGenerated ? [] : [autoFormatTablesExtension(isRtl)]),
            wrapSelectionExtension(),
            // @ts-ignore
            ...specialKeyHandling.map((keyRun) => Prec.high(keymap.of([keyRun]))),
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
                tabElement.innerHTML = `<span class="tab-close">&times;</span><span class="tab-title"></span>`;
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
        const fileName = /** @type {string} */ (resolved.path.split('/').pop());
        await this.openFile(resolved.path, fileName, true, fromFilePath);
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

                if (htmlTagMatch?.[1] === '') {
                    // Opening tag
                    htmlTagsStack.push(htmlTagMatch[2]);
                }

                // If we are inside any HTML tags, mark the entire line
                let lineClass = '';
                if (htmlTagsStack.length > 0) {
                    lineClass = htmlTagsStack.map(tag => `cm-html-${tag}`).join(' ');
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
const wrappingMarkers = ['*', '`'];

/**
 * @param {EditorView} view
 * @param {string} marker
 * @returns {boolean} whether the keystroke was taken
 */
function wrapSelectionWith(view, marker) {
    const { state } = view;
    if (state.readOnly || state.selection.ranges.every((range) => range.empty)) {
        return false;
    }
    view.dispatch(state.changeByRange((range) => {
        if (range.empty) {
            return { changes: { from: range.from, insert: marker }, range: EditorSelection.cursor(range.from + marker.length) };
        }
        return {
            changes: [{ from: range.from, insert: marker }, { from: range.to, insert: marker }],
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
        if (from === to || !wrappingMarkers.includes(text)) {
            return false;
        }
        return wrapSelectionWith(view, text);
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


// HORRIBLE PATCH to CodeMirror to ignore Hebrew Nikud/Punctuation on search
//  (not including RegExp search).
(() => {
    // When searching - ALWAYS use RegExpQuery - and never use StringQuery,
    //  so our override of RegExpCursor.prototype.next is always used.
    const originalSearchCreate = /** @type {any} */ (SearchQuery.prototype).create;
    /** @type {any} */ (SearchQuery.prototype).create = /** @this {{regexp: boolean | RegExp | undefined}} */ function () {
        lastSearchIsRegExp = this.regexp;
        this.regexp = true;
        const query = originalSearchCreate.apply(this, arguments); // this.regexp ? new RegExpQuery(this) : new StringQuery(this)
        this.regexp = lastSearchIsRegExp;
        return query;
    };
    /** @type {boolean | RegExp | undefined} */ let lastSearchIsRegExp;

    // When doing a non-RegExp search, we override to make RegExp search;
    // HOWEVER, in that case, we manipulate the RegExp instance to ignore Hebrew Nikud/Punctuation
    const originalRegExpCursorNext = RegExpCursor.prototype.next;
    RegExpCursor.prototype.next = /** @this {{re: RegExp}} */ function () {
        // @ts-ignore
        if (!this._ALREADY_PATCHED_RE_) {
            // @ts-ignore
            this._ALREADY_PATCHED_RE_ = true;
            if (!lastSearchIsRegExp) {
                const patchedRegExpSource = this.re.source
                    .replace(/[-[\]{}()*+?.,\\^$|#\x00-\x1f]/g, "\\$&")
                    .replace(/([ אבגדהוזחטיךכלםמןנסעףפץצקרששׁשׂת])/g, searchCharactersToOmit + '$1' + searchCharactersToOmit);
                try {
                    this.re = new RegExp(patchedRegExpSource, this.re.flags);
                } catch (error) {
                    consoleError(`Failed to patch search:\n`+
                        `    Original search: ${JSON.stringify(this.re.source)}\n`+
                        `    Patched  search: ${JSON.stringify(patchedRegExpSource)}\n`+
                        `    Flags: ${JSON.stringify(this.re.flags)}\n`+
                        `    Error: `, error);
                }
            } else {
                consoleWarn(`NOTE! Currently, RegExp search doesn't ignore Hebrew Nikud/Punctuation`)
            }
        }
        // @ts-ignore
        return originalRegExpCursorNext.apply(this, arguments);
    }

    const searchCharactersToOmit = '[\\u05b0\\u05b1\\u05b2\\u05b3\\u05b4\\u05b5\\u05b6\\u05b7\\u05b8\\u05b9\\u05ba\\u05bb\\u05bc\\u05bd\\u05be\\u05bf\\u05c0\\u05c1\\u05c2\\u05c3\\u05c4\\u05c5\\u05c6\\u05c7\\u0591\\u0592\\u0593\\u0594\\u0595\\u0596\\u0597\\u0598\\u0599\\u059a\\u059b\\u059c\\u059d\\u059e\\u059f\\u05a0\\u05a1\\u05a2\\u05a3\\u05a4\\u05a5\\u05a6\\u05a7\\u05a8\\u05a9\\u05aa\\u05ab\\u05ac\\u05ad\\u05ae\\u05af\\u05ef\\u05f0\\u05f1\\u05f2\\u05f3\\u05f4\\ufb1d\\ufb1e\\ufb1f\\ufb20\\ufb21\\ufb22\\ufb23\\ufb24\\ufb25\\ufb26\\ufb27\\ufb28\\ufb29\\ufb2c\\ufb2d\\ufb2e\\ufb2f\\ufb30\\ufb31\\ufb32\\ufb33\\ufb34\\ufb35\\ufb36\\ufb38\\ufb39\\ufb3a\\ufb3b\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46\\ufb47\\ufb48\\ufb49\\ufb4a\\ufb4b\\ufb4c\\ufb4d\\ufb4e\\ufb4f]*';
})();
