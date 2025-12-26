import { RegExpCursor, SearchQuery } from "https://esm.sh/@codemirror/search"
import { EditorView, basicSetup } from 'https://esm.sh/codemirror';
import { keymap, ViewPlugin, Decoration } from 'https://esm.sh/@codemirror/view';
import { markdown } from 'https://esm.sh/@codemirror/lang-markdown';
import { Compartment, RangeSetBuilder, Prec } from 'https://esm.sh/@codemirror/state';
import { indentWithTab } from 'https://esm.sh/@codemirror/commands';
import { syntaxHighlighting, HighlightStyle } from 'https://esm.sh/@codemirror/language';
import { tags } from 'https://esm.sh/@lezer/highlight';

// noinspection ES6UnusedImports
import { consoleError, consoleWarn, consoleInfo, consoleLog, consoleGroup, consoleGroupCollapsed, consoleGroupEnd } from './logs.js';
import { TabData } from "./tab-data.js";
/** @typedef {import('../../src/server.ts').FileData} FileData */


export class MarkdownEditor {
    constructor() {
        this.tabs = new Map();
        this.activeTab = null;
        this.tabStates = new Map();
        this.expandedFolders = new Set();
        this.fileTreeElements = new Map();
        this.directionCompartment = new Compartment();
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
        const isRtl = this.isRtlFile(tabData.filePath);

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
        // Tye actual type is KeyBinding[] - see $RTL-EDITOR/node_modules/@codemirror/view/dist/index.d.ts
        /** @type {{key: string, run: (view: EditorView) => boolean }[]} */ const specialKeyHandling = [];
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
            ...specialKeyHandling.map((keyRun) => Prec.high(keymap.of([keyRun]))),
            keymap.of([indentWithTab]),
            this.directionCompartment.of(EditorView.contentAttributes.of({ dir: isRtl ? 'rtl' : 'ltr' })),
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
                keydown: (event) => {
                    // Trace if the last-pressed Shift was left or right.
                    if (event.code === 'ShiftRight') {
                        lastShiftIsRight = true;
                    } else if (event.code === 'ShiftLeft') {
                        lastShiftIsRight = false;
                    }
                },
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

        if (isRtl) {
            extensions.push(EditorView.theme({
                ".cm-content": {
                    fontFamily: "'David', 'Narkisim', 'Times New Roman', serif"
                }
            }));
        }

        return new EditorView({
            doc: initialContent,
            extensions,
            parent: /** @type {Element} */ (document.querySelector('.editor-pane'))
        });
    }

    async loadFilesTree() {
        const fileTree = /** @type {HTMLElement} */ (document.getElementById('file-tree'));
        fileTree.innerHTML = 'Loading files...';

        try {
            const response = await fetch('/api/files');
            const files = await response.json();
            this.renderFileTree(files, fileTree);
        } catch (error) {
            fileTree.innerHTML = 'Error loading files';
            consoleError('Failed to load files:', error);
        }
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
     * @returns {Promise<string>}
     */
    async loadFileFromServer(filePath) {
        try {
            const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Unknown error');
            }
            return data.content;
        } catch (error) {
            throw new Error(`Failed to load file ${JSON.stringify(filePath)}: ${error}`);
        }
    }

    /**
     * @param {string} filePath
     * @param {string} fileName
     * @param {boolean} setAsActive
     */
    async openFile(filePath, fileName, setAsActive = true) {
        consoleLog(`openFile(filePath=${JSON.stringify(filePath)}, fileName=${JSON.stringify(fileName)}, setAsActive=${setAsActive})`);
        try {
            if (! this.tabs.has(filePath)) {
                // Create the tab-title element.
                const tabElement = document.createElement('button');
                tabElement.className = 'tab';
                tabElement.innerHTML = `[title-will-be-set-shortly]<span class="tab-close">&times;</span>`;
                /** @type {HTMLElement} */ (tabElement.querySelector('.tab-close')).addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.closeTab(filePath).catch(consoleError);
                });
                tabElement.addEventListener('click', () => this.switchToTab(filePath).catch(consoleError));
                /** @type {HTMLElement} */ (document.getElementById('tabs')).appendChild(tabElement);

                let content;
                try {
                    // Load file content from server.
                    content = await this.loadFileFromServer(filePath);
                } catch (error) {
                    consoleError(`Failed to load ${JSON.stringify(filePath)}: `, error);
                    this.closeTab(filePath).catch(consoleError);
                    return;
                }

                // Build a <div> wrapper for the editor to allow easier styling.
                const editorWrapper = document.createElement('div');
                editorWrapper.className = 'editor-wrapper' + (this.isRtlFile(filePath) ? ' rtl' : '');
                /** @type {HTMLElement} */ (document.querySelector('.editor-pane')).appendChild(editorWrapper);

                // Create TabData instance
                const tabData = new TabData(this, filePath, fileName, content, /** @type {any} */(null), editorWrapper, tabElement);

                // Build the editor from CodeMirror (needs tabData for event handlers)
                /** @type {EditorView} */
                const editorView = this.createEditorView(tabData, content);
                tabData.editorView = editorView;

                editorWrapper.appendChild(editorView.dom);

                this.tabs.set(filePath, tabData);
                tabData.updateTitle();
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

        // Activate the new tab and editor.
        tabData.activate();

        this.activeTab = filePath;
        this.saveSession();
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
            for (const filePath of sessionData.openTabs || []) {
                const fileName = filePath.split('/').pop();
                this.openFile(filePath, fileName, filePath === sessionData.activeTab).catch(consoleError);
            }
        } catch (error) {
            consoleError('Failed to restore session:', error);
        }
    }

    /**
     * @param {string} filePath
     * @returns {boolean}
     */
    isRtlFile(filePath) {
        return filePath.endsWith('.rtl.md') || filePath === 'CLAUDE.md';
    }
}

// Plugin to add class to list lines for hanging indent and multi-level support
// noinspection JSUnusedGlobalSymbols
const listLinePlugin = ViewPlugin.fromClass(
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
