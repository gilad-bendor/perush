import { EditorView, basicSetup } from 'https://esm.sh/codemirror';
import { keymap } from 'https://esm.sh/@codemirror/view';
import { markdown } from 'https://esm.sh/@codemirror/lang-markdown';
import { Compartment } from 'https://esm.sh/@codemirror/state';
import { indentWithTab } from 'https://esm.sh/@codemirror/commands';
import { syntaxHighlighting, HighlightStyle } from 'https://esm.sh/@codemirror/language';
import { tags } from 'https://esm.sh/@lezer/highlight';

class MarkdownEditor {
    constructor() {
        this.tabs = new Map();
        this.activeTab = null;
        this.autosaveTimer = null;
        this.scrollPositions = new Map();
        this.expandedFolders = new Set();
        this.fileTreeElements = new Map();
        this.directionCompartment = new Compartment();
        this.init().catch(console.error);
    }

    async init() {
        this.bindGlobalEvents();
        await this.restoreSession();
        await this.loadFilesTree();
    }

    bindGlobalEvents() {
        document.getElementById('refresh-btn').addEventListener('click', () => this.loadFilesTree());
        window.addEventListener('beforeunload', () => this.saveSession());
    }

    createEditorView(filePath, fileName, initialContent) {
        const isRtl = this.isRtlFile(fileName);

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

        const extensions = [
            basicSetup,
            markdown(),
            markdownHighlighting,
            keymap.of([indentWithTab]),
            this.directionCompartment.of(EditorView.contentAttributes.of({ dir: isRtl ? 'rtl' : 'ltr' })),
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    this.tabs.get(filePath).isDirty = true;
                    this.updateTabTitle(filePath);
                    this.scheduleAutosave();
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
                    const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.error || 'Failed to load file');
                    }
                    content = data.content;
                } catch (error) {
                    console.error(`Failed to load ${JSON.stringify(filePath)}: `, error);
                    this.closeTab(filePath).catch(console.error);
                    return;
                }

                // Build the editor from CodeMirror
                const editorView = this.createEditorView(filePath, fileName, content);

                // Build a <div> wrapper for the editor to allow easier styling.
                const editorWrapper = document.createElement('div');
                editorWrapper.className = 'editor-wrapper';
                editorWrapper.appendChild(editorView.dom);
                document.querySelector('.editor-pane').appendChild(editorWrapper);

                this.tabs.set(filePath, {
                    filePath,
                    fileName,
                    originalContent: content,
                    isDirty: false,
                    editorView,
                    editorWrapper,
                    tabElement,
                    abortAutoScrolling: false,
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
            this.restoreScrollPosition(filePath);
        }

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

    scheduleAutosave() {
        if (this.autosaveTimer) {
            clearTimeout(this.autosaveTimer);
        }

        this.autosaveTimer = setTimeout(() => {
            if (this.activeTab && this.tabs.get(this.activeTab)?.isDirty) {
                this.autosave();
            }
        }, 1000);
    }

    async autosave() {
        if (!this.activeTab) return;

        try {
            console.log(`Auto saving ${this.activeTab}`);
            const tabData = this.tabs.get(this.activeTab);
            const currentContent = tabData.editorView.state.doc.toString();
            const response = await fetch(`/api/file/${encodeURIComponent(this.activeTab)}`, {
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
            tabData.originalContent = currentContent;
            this.updateTabTitle(this.activeTab);

        } catch (error) {
            console.error('Autosave failed:', error);
        }
    }

    saveSession() {
        const sessionData = {
            openTabs: Array.from(this.tabs.keys()),
            activeTab: this.activeTab,
            scrollPositions: Object.fromEntries(this.scrollPositions),
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
            this.scrollPositions = new Map(Object.entries(sessionData.scrollPositions || {}));
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
        if (tabData.abortAutoScrolling) {
            console.log(`    (ignoring scroll event for ${JSON.stringify(filePath)} with scrollTop=${tabData.editorView.scrollDOM.scrollTop})`);
            tabData.editorView.scrollDOM.scrollTop = this.scrollPositions.get(this.activeTab);
            return;
        }
        console.log(`Saving scroll position for ${JSON.stringify(filePath)}: `, tabData.editorView.scrollDOM.scrollTop);
        this.scrollPositions.set(filePath, tabData.editorView.scrollDOM.scrollTop);
        this.saveSession();
    }

    restoreScrollPosition(filePath) {
        if (!this.scrollPositions.has(filePath)) return;
        const editorView = this.tabs.get(filePath).editorView;
        const targetScrollTop = this.scrollPositions.get(filePath);
        console.log(`Restoring scroll position of ${JSON.stringify(filePath)}: ${targetScrollTop}`);
        editorView.scrollDOM.scrollTop = targetScrollTop;
        if (editorView.scrollDOM.scrollTop !== targetScrollTop) {
            console.warn(`Failed to restore scrollTop of ${JSON.stringify(filePath)} to ${targetScrollTop}, got ${editorView.scrollDOM.scrollTop} instead.`);
        }
    }

    isRtlFile(fileName) {
        return fileName.endsWith('.rtl.md') || fileName === 'CLAUDE.md';
    }
}

// Initialize the MarkdownEditor.
document.addEventListener('DOMContentLoaded', () => new MarkdownEditor());
