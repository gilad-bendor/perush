class MarkdownEditor {
    constructor() {
        // Get the HTML of the editor template and remove it from the DOM.
        const editorTemplateElement = document.querySelector('.editor');
        this.editorTemplate = editorTemplateElement.outerHTML;
        editorTemplateElement.remove();

        this.tabs = new Map();
        this.activeTab = null;
        this.autosaveTimer = null;
        this.scrollPositions = new Map();
        this.expandedFolders = new Set();
        this.fileTreeElements = new Map();
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

    bindEditorEvents(editorTextarea, filePath) {
        editorTextarea.addEventListener('keydown', (event) => {
            // console.log(event)
            let targetCursorPos;

            // Override macOS annoying "Home" key behavior: move to start of line, instead scrolling to start of text.
            if (event.code === 'Home') {
                if (event.metaKey) {
                    targetCursorPos = 0; // Move to start of text if Cmd+Home
                    editorTextarea.scrollTop = 0;
                } else {
                    const text = editorTextarea.value;
                    const cursorPos = editorTextarea.selectionStart;
                    targetCursorPos = text.lastIndexOf('\n', cursorPos - 1) + 1;
                }
            }

            // Override macOS annoying "End" key behavior: move to end of line, instead scrolling to end of text.
            if (event.code === 'End') {
                const text = editorTextarea.value;
                if (event.metaKey) {
                    targetCursorPos = text.length; // Move to end of text if Cmd+End
                    editorTextarea.scrollTop = 1000000000;
                } else {
                    const cursorPos = editorTextarea.selectionStart;
                    targetCursorPos = text.indexOf('\n', cursorPos);
                    if (targetCursorPos === -1) {
                        targetCursorPos = text.length; // If no newline, go to end of text
                    }
                }
            }

            // On macOS on Hebrew - the key to the left of "1" produces ";" - but we want it to produce backquote "`".
            if (event.code === 'Backquote' && event.key === ';' && event.keyCode === 186) {
                document.execCommand('insertText', false, '`');
                event.preventDefault();
            }

            // On macOS on Hebrew - the key to the bottom-left of "Enter" produces "ֿ " code (Unicode 5bf), but we want it to produce a backquote "\".
            if (event.code === 'Backslash' && event.key === '\u05bf' && event.keyCode === 220) {
                document.execCommand('insertText', false, '\\');
                event.preventDefault();
            }

            // // On macOS on Hebrew - the key to the left of "z" produces nothing - but we want it to produce ???.
            // if (event.code === 'IntlBackslash' && event.key === 'Unidentified' && event.keyCode === 192) {
            //     document.execCommand('insertText', false, '???');
            //     event.preventDefault();
            // }

            if (targetCursorPos !== undefined) {
                event.preventDefault();
                editorTextarea.setSelectionRange(targetCursorPos, targetCursorPos);
                editorTextarea.focus();
            }
        });

        editorTextarea.addEventListener('input', () => {
            this.tabs.get(filePath).isDirty = true;
            this.updateTabTitle(filePath);
            this.scheduleAutosave();
        });

        editorTextarea.addEventListener('scroll', () => {
            this.saveScrollPosition(filePath);
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

                // Build the editor <textarea> from the template.
                const wrapper = document.createElement('div');
                wrapper.innerHTML = this.editorTemplate;
                const editorTextarea = wrapper.firstElementChild;
                document.querySelector('.editor-pane').appendChild(editorTextarea);
                this.bindEditorEvents(editorTextarea, filePath);

                try {
                    // Load file content from server.
                    const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.error || 'Failed to load file');
                    }
                    editorTextarea.dataset.filePath = filePath;
                    editorTextarea.value = data.content;
                    if (this.isRtlFile(fileName)) {
                        editorTextarea.classList.add('rtl');
                    }
                } catch (error) {
                    console.error(`Failed to load ${JSON.stringify(filePath)}: `, error);
                    this.closeTab(filePath).catch(console.error);
                    return;
                }

                this.tabs.set(filePath, {
                    filePath,
                    fileName,
                    originalContent: editorTextarea.value,
                    isDirty: false,
                    editorTextarea,
                    tabElement,
                    abortAutoScrolling: false,
                });
                this.updateTabTitle(filePath);
            }

            if (setAsActive) {
                await this.switchToTab(filePath); // will call this.saveSession()
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
            oldTabData.editorTextarea.classList.remove('active');
            this.fileTreeElements.get(oldTabData.filePath)?.classList.remove('active');
        }

        // Activate the new tab and editor.
        tabData.tabElement.classList.add('active');
        tabData.editorTextarea.classList.add('active');
        const fileTreeElement = this.fileTreeElements.get(tabData.filePath);
        fileTreeElement?.classList.add('active');
        fileTreeElement?.scrollIntoViewIfNeeded();

        tabData.editorTextarea.focus();

        // It seems that in Chrome, when a <textarea> is focused, it is auto-scrolling to the cursor, which we don't want.
        tabData.abortAutoScrolling = true;
        setTimeout(() => tabData.abortAutoScrolling = false, 100);

        if (!tabData.editorTextarea._wasEverVisible_) {
            tabData.editorTextarea._wasEverVisible_ = true;
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
        tabData.editorTextarea.remove();
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
            const currentContent = tabData.editorTextarea.value;
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
            console.log(`    (ignoring scroll event for ${JSON.stringify(filePath)} with scrollTop=${tabData.editorTextarea.scrollTop})`);
            tabData.editorTextarea.scrollTop = this.scrollPositions.get(this.activeTab);
            return;
        }
        console.log(`Saving scroll position for ${JSON.stringify(filePath)}: `, tabData.editorTextarea.scrollTop);
        this.scrollPositions.set(this.activeTab, tabData.editorTextarea.scrollTop);
        this.saveSession();
    }

    restoreScrollPosition(filePath) {
        if (!this.scrollPositions.has(filePath)) return;
        const editorTextarea = this.tabs.get(filePath).editorTextarea;
        const targetScrollTop = this.scrollPositions.get(filePath);
        console.log(`Restoring scroll position of ${JSON.stringify(filePath)}: ${targetScrollTop}`);
        editorTextarea.scrollTop = targetScrollTop;
        if (editorTextarea.scrollTop !== targetScrollTop) {
            console.warn(`Failed to restore scrollTop of ${JSON.stringify(filePath)} to ${targetScrollTop}, got ${editorTextarea.scrollTop} instead.`);
        }
    }

    isRtlFile(fileName) {
        return fileName.endsWith('.rtl.md') || fileName === 'CLAUDE.md';
    }
}

// Initialize the MarkdownEditor.
new MarkdownEditor();
