import { EditorView, basicSetup } from 'https://esm.sh/codemirror';
import { keymap, ViewPlugin, Decoration } from 'https://esm.sh/@codemirror/view';
import { markdown } from 'https://esm.sh/@codemirror/lang-markdown';
import { Compartment, RangeSetBuilder } from 'https://esm.sh/@codemirror/state';
import { indentWithTab } from 'https://esm.sh/@codemirror/commands';
import { syntaxHighlighting, HighlightStyle } from 'https://esm.sh/@codemirror/language';
import { tags } from 'https://esm.sh/@lezer/highlight';

// Interval to check for file updates from server (in milliseconds).
const UPDATE_FILE_FROM_SERVER_INTERVAL_MS = 1000;

class MarkdownEditor {
    constructor() {
        this.tabs = new Map();
        this.activeTab = null;
        this.tabStates = new Map();
        this.expandedFolders = new Set();
        this.fileTreeElements = new Map();
        this.directionCompartment = new Compartment();
        this.init().catch(console.error);
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
        const splitter = document.getElementById('splitter');
        const sidebar = document.querySelector('.sidebar');
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
        const sidebar = document.querySelector('.sidebar');
        const ratio = sidebar.offsetWidth / window.innerWidth;
        localStorage.setItem('markdownEditor.sidebarRatio', String(ratio));
    }

    restoreSidebarWidth() {
        const savedRatio = localStorage.getItem('markdownEditor.sidebarRatio') || 0.25;
        const sidebar = document.querySelector('.sidebar');
        const width = Math.max(150, Math.min(savedRatio * window.innerWidth, window.innerWidth - 300));
        sidebar.style.width = `${width}px`;
    }

    createEditorView(filePath, fileName, initialContent) {
        const isRtl = this.isRtlFile(filePath);

        // Create custom markdown highlighting
        const monospaceCss = { background: "rgba(128, 128, 128, .1)", fontSize: "0.9em", fontFamily: "sans-serif", WebkitTextStroke: "0.3px black" }
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

        // noinspection JSUnusedGlobalSymbols
        const extensions = [
            basicSetup,
            markdown(),
            markdownHighlighting,
            listLinePlugin,
            keymap.of([indentWithTab]),
            this.directionCompartment.of(EditorView.contentAttributes.of({ dir: isRtl ? 'rtl' : 'ltr' })),
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    this.tabs.get(filePath).isDirty = true;
                    this.updateTabTitle(filePath);
                    this.scheduleAutosave(filePath);
                }
                // Track selection/cursor changes
                if (update.selectionSet) {
                    this.saveSelectionState(filePath);
                }
            }),
            EditorView.domEventHandlers({
                scroll: () => {
                    this.saveScrollPosition(filePath);
                },
                keydown: (event, view) => {
                    const { state } = view;

                    // On macOS on Hebrew - the key to the left of "1" produces ";" - but we want it to produce backquote "`".
                    if (event.code === 'Backquote' && event.key === ';' && event.keyCode === 186) {
                        view.dispatch(state.replaceSelection('`'));
                        event.preventDefault();
                    }

                    // On macOS on Hebrew - the key to the bottom-left of "Enter" produces "ֿ " code (Unicode 5bf), but we want it to produce a backslash "\".
                    if (event.code === 'Backslash' && event.key === '\u05bf' && event.keyCode === 220) {
                        view.dispatch(state.replaceSelection('\\'));
                        event.preventDefault();
                    }
                }
            }),
            EditorView.lineWrapping,
            EditorView.theme({
                "&": { height: "100%" },
                ".cm-scroller": { overflow: "auto" },
                "&.cm-focused": { outline: "none" }
            }, { dark: false })
        ];

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
            parent: document.querySelector('.editor-pane')
        });
    }

    async loadFilesTree() {
        const fileTree = document.getElementById('file-tree');
        fileTree.innerHTML = 'Loading files...';

        try {
            const response = await fetch('/api/files');
            const files = await response.json();
            this.renderFileTree(files, fileTree);
        } catch (error) {
            fileTree.innerHTML = 'Error loading files';
            console.error('Failed to load files:', error);
        }
    }

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
                    const children = fileItem.nextElementSibling;
                    if (children) {
                        const isExpanded = children.style.display !== 'none';
                        children.style.display = isExpanded ? 'none' : 'block';

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

    async loadFileFromServer(filePath) {
        const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || 'Failed to load file');
        }
        return data.content;
    }

    async updateFileFromServer(filePath) {
        const tabData = this.tabs.get(filePath);

        // Load file content from server.
        if (!tabData || tabData.autosaveTimeoutId) {
            return;
        }
        const contentOnServer = await this.loadFileFromServer(filePath);
        if (tabData.autosaveTimeoutId) {
            return;
        }

        // If content has changed on server, prompt user to reload or keep local changes.
        const currentContent = tabData.editorView.state.doc.toString();
        if (currentContent !== contentOnServer) {
            // console.log(`File ${JSON.stringify(filePath)} has changed on server:`);
            // console.log('----- UI content -----');
            // console.log(currentContent);
            // console.log('----- New content from server -----');
            // console.log(contentOnServer);
            // console.log('----------------------------------');
            alert(`The file\n    ${filePath}\n has changed on the server: updating.`);

            // Remember original scroll position and selection.
            const editorView = tabData.editorView;
            const originalScrollTop = editorView.scrollDOM.scrollTop;
            const originalSelection = editorView.state.selection;
            editorView.dispatch({
                changes: { from: 0, to: editorView.state.doc.length, insert: contentOnServer }
            });
            editorView.scrollDOM.scrollTop = originalScrollTop;
            editorView.dispatch({ selection: originalSelection });
            tabData.contentAtServer = contentOnServer;
            tabData.isDirty = false;
            this.updateTabTitle(filePath);
        }
    }

    async openFile(filePath, fileName, setAsActive = true) {
        console.log(`openFile(filePath=${JSON.stringify(filePath)}, fileName=${JSON.stringify(fileName)}, setAsActive=${setAsActive})`);
        try {
            if (! this.tabs.has(filePath)) {
                // Create the tab-title element.
                const tabElement = document.createElement('button');
                tabElement.className = 'tab';
                tabElement.innerHTML = `[title-will-be-set-shortly]<span class="tab-close">&times;</span>`;
                tabElement.querySelector('.tab-close').addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.closeTab(filePath).catch(console.error);
                });
                tabElement.addEventListener('click', () => this.switchToTab(filePath).catch(console.error));
                document.getElementById('tabs').appendChild(tabElement);

                let content;
                try {
                    // Load file content from server.
                    content = await this.loadFileFromServer(filePath);
                } catch (error) {
                    console.error(`Failed to load ${JSON.stringify(filePath)}: `, error);
                    this.closeTab(filePath).catch(console.error);
                    return;
                }

                // Build the editor from CodeMirror
                const editorView = this.createEditorView(filePath, fileName, content);

                // Build a <div> wrapper for the editor to allow easier styling.
                const editorWrapper = document.createElement('div');
                editorWrapper.className = 'editor-wrapper' + (this.isRtlFile(filePath) ? ' rtl' : '');
                editorWrapper.appendChild(editorView.dom);
                document.querySelector('.editor-pane').appendChild(editorWrapper);

                this.tabs.set(filePath, {
                    filePath,
                    fileName,
                    contentAtServer: content,
                    isDirty: false,
                    editorView,
                    editorWrapper,
                    tabElement,
                    abortAutoScrolling: false,
                    updateFileFromServerIntervalId: null,
                    autosaveTimeoutId: null,
                });
                this.updateTabTitle(filePath);
            }

            if (setAsActive) {
                await this.switchToTab(filePath);
                this.saveSession();
            }
        } catch (error) {
            console.log(`Error opening file: ${error.message}`);
        }
    }

    async switchToTab(filePath) {
        console.log(`switchToTab(${JSON.stringify(filePath)})`);
        const tabData = this.tabs.get(filePath);
        if (!tabData) {
            console.error('Tab data not found for filePath:', filePath);
            return;
        }

        // Un-activate the old tab and editor.
        const oldTabData = this.tabs.get(this.activeTab);
        if (oldTabData) {
            oldTabData.tabElement.classList.remove('active');
            oldTabData.editorWrapper.classList.remove('active');
            this.fileTreeElements.get(oldTabData.filePath)?.classList.remove('active');
            clearInterval(oldTabData.updateFileFromServerIntervalId);
        }

        // Activate the new tab and editor.
        tabData.tabElement.classList.add('active');
        tabData.editorWrapper.classList.add('active');
        const fileTreeElement = this.fileTreeElements.get(tabData.filePath);
        fileTreeElement?.classList.add('active');
        fileTreeElement?.scrollIntoViewIfNeeded();

        tabData.editorView.focus();

        // It seems that in Chrome, when CodeMirror is focused, it may auto-scroll to the cursor
        tabData.abortAutoScrolling = true;
        setTimeout(() => tabData.abortAutoScrolling = false, 100);

        if (!tabData.editorWrapper._wasEverVisible_) {
            tabData.editorWrapper._wasEverVisible_ = true;
            this.restoreTabState(filePath);
        }

        // Periodically check for file updates from server.
        tabData.updateFileFromServerIntervalId = setInterval(
            () => this.updateFileFromServer(filePath).catch(console.error),
            UPDATE_FILE_FROM_SERVER_INTERVAL_MS
        );

        this.activeTab = filePath;
        this.saveSession();
    }

    async closeTab(filePath) {
        const tabData = this.tabs.get(filePath);

        // If the tab is dirty, delay closing it to allow autosave to kick in.
        if (tabData && tabData.isDirty) {
            console.log('Delaying close of dirty tab: ', filePath);
            setTimeout(() => this.closeTab(filePath).catch(console.error), 1000);
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
        tabData.tabElement.remove();
        tabData.editorView.destroy();
        tabData.editorWrapper.remove();
        this.fileTreeElements.get(tabData.filePath)?.classList.remove('active');

        this.saveSession();
    }

    updateTabTitle(filePath) {
        const tabData = this.tabs.get(filePath);
        if (tabData) {
            tabData.tabElement.firstChild.data = tabData.isDirty ? `${tabData.fileName} •` : tabData.fileName;
        }
    }

    scheduleAutosave(filePath) {
        const tabData = this.tabs.get(filePath);
        clearTimeout(tabData.autosaveTimeoutId);
        tabData.autosaveTimeoutId = setTimeout(async () => {
            if (!tabData.isDirty) {
                return;
            }
            tabData.autosaveTimeoutId = '===SAVING==='; // not setting to null yet, to disable updateFileFromServer()
            try {
                await this.autosave(filePath).catch(console.error);
            } catch (error) {
                console.error('Autosave failed:', error);
            }
            tabData.autosaveTimeoutId = null;
        }, 1000);
    }

    async autosave(filePath) {
        const tabData = this.tabs.get(filePath);
        if (!tabData || !tabData.isDirty) {
            return;
        }

        try {
            console.log(`Auto saving ${filePath}`);

            // Just before auto-saving, make sure we have the latest version from server.
            await this.updateFileFromServer(filePath);

            const currentContent = tabData.editorView.state.doc.toString();
            const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: currentContent })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to autosave file');
            }

            tabData.isDirty = false;
            tabData.contentAtServer = currentContent;
            this.updateTabTitle(filePath);

        } catch (error) {
            console.error('Autosave failed:', error);
        }
    }

    saveSession() {
        const sessionData = {
            openTabs: Array.from(this.tabs.keys()),
            activeTab: this.activeTab,
            tabStates: Object.fromEntries(this.tabStates),
            expandedFolders: Array.from(this.expandedFolders)
        };
        console.log('Saving session: ', sessionData);
        localStorage.setItem('markdownEditor.session', JSON.stringify(sessionData));
    }

    async restoreSession() {
        const sessionJson = localStorage.getItem('markdownEditor.session');
        if (!sessionJson) return;

        try {
            const sessionData = JSON.parse(sessionJson);
            console.log('Restoring session: ', sessionData);
            this.tabStates = new Map(Object.entries(sessionData.tabStates || {}));
            this.expandedFolders = new Set(sessionData.expandedFolders || []);
            for (const filePath of sessionData.openTabs || []) {
                const fileName = filePath.split('/').pop();
                this.openFile(filePath, fileName, filePath === sessionData.activeTab).catch(console.error);
            }
        } catch (error) {
            console.error('Failed to restore session:', error);
        }
    }

    saveScrollPosition(filePath) {
        const tabData = this.tabs.get(filePath);
        const tabState = this.tabStates.get(filePath) ?? {};
        if (tabData.abortAutoScrolling) {
            console.log(`    (ignoring scroll event for ${JSON.stringify(filePath)} with scrollTop=${tabData.editorView.scrollDOM.scrollTop})`);
            tabData.editorView.scrollDOM.scrollTop = tabState.scrollTop ?? 0;
            return;
        }
        console.log(`Saving scroll position for ${JSON.stringify(filePath)}: `, tabData.editorView.scrollDOM.scrollTop);
        this.tabStates.set(filePath, {...tabState, scrollTop: tabData.editorView.scrollDOM.scrollTop });
        this.saveSession();
    }

    saveSelectionState(filePath) {
        const tabData = this.tabs.get(filePath);
        if (!tabData) return;

        const tabState = this.tabStates.get(filePath) ?? {};
        const selection = tabData.editorView.state.selection.main;

        // Save selection as serializable object with anchor and head positions
        this.tabStates.set(filePath, {
            ...tabState,
            selection: {
                anchor: selection.anchor,
                head: selection.head
            }
        });
        this.saveSession();
    }

    restoreTabState(filePath) {
        const tabState = this.tabStates.get(filePath);
        if (!tabState) {
            return;
        }
        const editorView = this.tabs.get(filePath).editorView;
        console.log(`Restoring tab state of ${JSON.stringify(filePath)}: `, tabState);

        // Restore scroll position.
        editorView.scrollDOM.scrollTop = tabState.scrollTop;
        if (editorView.scrollDOM.scrollTop !== tabState.scrollTop) {
            console.warn(`Failed to restore scrollTop of ${JSON.stringify(filePath)} to ${tabState.scrollTop}, got ${editorView.scrollDOM.scrollTop} instead.`);
        }

        // Restore text selection/cursor position.
        if (tabState.selection) {
            const { anchor, head } = tabState.selection;
            const docLength = editorView.state.doc.length;

            // Ensure positions are within document bounds
            const validAnchor = Math.min(anchor, docLength);
            const validHead = Math.min(head, docLength);

            editorView.dispatch({
                selection: { anchor: validAnchor, head: validHead }
            });
        }
    }

    isRtlFile(filePath) {
        return filePath.endsWith('.rtl.md') || filePath === 'CLAUDE.md';
    }
}

// Plugin to add class to list lines for hanging indent and multi-level support
const listLinePlugin = ViewPlugin.fromClass(
    class {
        constructor(view) {
            this.decorations = this.buildDecorations(view);
        }

        // noinspection JSUnusedGlobalSymbols
        update(update) {
            if (update.docChanged || update.viewportChanged) {
                this.decorations = this.buildDecorations(update.view);
            }
        }

        buildDecorations(view) {
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
            const listIndentationsStack = [];

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
                if (trimmedText) {

                    // ---------- Handle HTML tags ----------

                    // Check for HTML tags that open or close at the start of the line (after indentation)
                    const htmlTagMatch = /^<(\/?)([-\p{L}\d]+)(?:>| .*>)/u.exec(trimmedText);
                    // console.log(`Line: `, JSON.stringify(lineText), `     `, htmlTagMatch);

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

                    // Clean up the stack based on current indentation.
                    const indentation = lineText.length - trimmedText.length;
                    while (listIndentationsStack.length > 0 && indentation < listIndentationsStack.at(-1)) {
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
                        const indentChars = listIndentationsStack.at(-1);
                        if (indentChars > 0 && indentChars <= lineText.length) {
                            const monospaceMark = Decoration.mark({
                                class: `cm-list-line cm-list-indent-monospace${lineClass ? ` ${lineClass}` : ''}`
                            });
                            builder.add(line.from, line.from + indentChars, monospaceMark);
                        }
                    }
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
                console.warn(`Document is very long (${lineNumber} lines) - performance may be slow because we scan the *whole* document, rather than just the visible lines.`);
            }

            return builder.finish();
        }
    },
    {
        decorations: v => v.decorations
    },
);

// Initialize the MarkdownEditor.
document.addEventListener('DOMContentLoaded', () => new MarkdownEditor());
