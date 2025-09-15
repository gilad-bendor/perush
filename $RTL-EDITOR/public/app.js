class MarkdownEditor {
    constructor() {
        this.tabs = new Map();
        this.activeTab = null;
        this.activeTabIsInitializing = false;
        this.autosaveTimer = null;
        this.scrollPositions = new Map();
        this.init();
    }

    async init() {
        this.bindEvents();
        await this.loadFiles();
        this.restoreSession();
    }

    bindEvents() {
        document.getElementById('refresh-btn').addEventListener('click', () => this.loadFiles());

        const editor = document.getElementById('editor');
        editor.addEventListener('keydown', (event) => {
            // console.log(event)
            let targetCursorPos;

            // Override macOS annoying "Home" key behavior: move to start of line, instead scrolling to start of text.
            if (event.code === 'Home') {
                if (event.metaKey) {
                    targetCursorPos = 0; // Move to start of text if Cmd+Home
                    editor.scrollTop = 0;
                } else {
                    const text = editor.value;
                    const cursorPos = editor.selectionStart;
                    targetCursorPos = text.lastIndexOf('\n', cursorPos - 1) + 1;
                }
            }

            // Override macOS annoying "End" key behavior: move to end of line, instead scrolling to end of text.
            if (event.code === 'End') {
                const text = editor.value;
                if (event.metaKey) {
                    targetCursorPos = text.length; // Move to end of text if Cmd+End
                    editor.scrollTop = 1000000000;
                } else {
                    const cursorPos = editor.selectionStart;
                    const lineStart = text.lastIndexOf('\n', cursorPos - 1) + 1;
                    targetCursorPos = text.indexOf('\n', cursorPos);
                    if (targetCursorPos === -1) {
                        targetCursorPos = text.length; // If no newline, go to end of text
                    }
                }
            }

            // On macOS on Hebrew - the key to the left of "z" produces "IntlBackslash" code, but we want it to produce a backquote "`".
            if (event.code === 'IntlBackslash') {
                document.execCommand('insertText', false, '`');
                event.preventDefault();
            }

            if (targetCursorPos !== undefined) {
                event.preventDefault();
                editor.setSelectionRange(targetCursorPos, targetCursorPos);
                editor.focus();
            }
        });

        editor.addEventListener('input', () => {
            if (this.activeTab) {
                this.tabs.get(this.activeTab).isDirty = true;
                this.updateTabTitle(this.activeTab);
                this.scheduleAutosave();
            }
        });

        editor.addEventListener('scroll', () => {
            if (this.activeTab) {
                this.saveScrollPosition();
            }
        });

        window.addEventListener('beforeunload', () => {
            this.saveSession();
        });
    }

    async loadFiles() {
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

    renderFileTree(files, container, level = 0) {
        container.innerHTML = '';
        
        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = `file-item ${file.type}`;
            fileItem.style.paddingLeft = `${12 + level * 16}px`;
            fileItem.textContent = file.name;
            
            if (file.type === 'file') {
                fileItem.addEventListener('click', () => this.openFile(file.path, file.name));
            } else {
                fileItem.addEventListener('click', () => {
                    const children = fileItem.nextElementSibling;
                    if (children) {
                        children.style.display = children.style.display === 'none' ? 'block' : 'none';
                    }
                });
            }
            
            container.appendChild(fileItem);
            
            if (file.type === 'directory' && file.children && file.children.length > 0) {
                const childrenContainer = document.createElement('div');
                childrenContainer.className = 'file-children';
                this.renderFileTree(file.children, childrenContainer, level + 1);
                container.appendChild(childrenContainer);
            }
        });
    }

    async openFile(filePath, fileName) {
        if (this.tabs.has(filePath)) {
            this.switchToTab(filePath);
            return;
        }

        try {
            const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to load file');
            }

            this.tabs.set(filePath, {
                fileName,
                content: data.content,
                originalContent: data.content,
                isDirty: false,
                isRTL: this.isRtlFile(fileName)
            });

            this.createTab(filePath, fileName);
            this.switchToTab(filePath);
            this.saveSession();
        } catch (error) {
            alert(`Error opening file: ${error.message}`);
        }
    }

    createTab(filePath, fileName) {
        const tabsContainer = document.getElementById('tabs');
        
        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.innerHTML = `
            ${fileName}
            <span class="tab-close" onclick="event.stopPropagation(); editor.closeTab('${filePath}')">&times;</span>
        `;
        tab.addEventListener('click', () => this.switchToTab(filePath));
        
        tabsContainer.appendChild(tab);
    }

    switchToTab(filePath) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        
        const tabs = Array.from(document.querySelectorAll('.tab'));
        const tabIndex = Array.from(this.tabs.keys()).indexOf(filePath);
        if (tabs[tabIndex]) {
            tabs[tabIndex].classList.add('active');
        }

        this.activeTab = filePath;
        this.activeTabIsInitializing = true;
        const tabData = this.tabs.get(filePath);
        
        const editor = document.getElementById('editor');
        const placeholder = document.getElementById('editor-placeholder');
        const editorPane = document.getElementById('editor-pane');
        // const filePath2 = document.getElementById('current-file-path');
        
        placeholder.style.display = 'none';
        editorPane.style.display = 'flex';
        
        editor.value = tabData.content;
        editor.className = tabData.isRTL ? 'rtl' : '';
        // filePath2.textContent = filePath;
        
        this.restoreScrollPosition(filePath);
        this.saveSession();
        editor.focus();
    }

    closeTab(filePath) {
        const tabData = this.tabs.get(filePath);
        
        if (tabData && tabData.isDirty) {
            if (!confirm('File has unsaved changes. Close anyway?')) {
                return;
            }
        }

        this.tabs.delete(filePath);
        
        const tabs = Array.from(document.querySelectorAll('.tab'));
        const tabKeys = Array.from(this.tabs.keys());
        const tabIndex = tabKeys.indexOf(filePath);
        
        if (tabs.length > tabIndex) {
            tabs[tabKeys.indexOf(filePath) + (this.tabs.has(filePath) ? 0 : 1)]?.remove();
        }
        
        tabs.forEach((tab, index) => {
            if (tab.textContent.includes(this.tabs.get(tabKeys[index])?.fileName || '')) {
                tab.remove();
                return false;
            }
        });

        if (this.activeTab === filePath) {
            if (this.tabs.size > 0) {
                const nextTab = this.tabs.keys().next().value;
                this.switchToTab(nextTab);
            } else {
                this.activeTab = null;
                this.activeTabIsInitializing = false;
                document.getElementById('editor-placeholder').style.display = 'flex';
                document.getElementById('editor-pane').style.display = 'none';
            }
        }
        
        this.scrollPositions.delete(filePath);
        this.updateTabsDisplay();
        this.saveSession();
    }

    updateTabsDisplay() {
        const tabsContainer = document.getElementById('tabs');
        tabsContainer.innerHTML = '';
        
        for (const [filePath, tabData] of this.tabs) {
            this.createTab(filePath, tabData.fileName);
        }
        
        if (this.activeTab && this.tabs.has(this.activeTab)) {
            const tabs = Array.from(document.querySelectorAll('.tab'));
            const activeIndex = Array.from(this.tabs.keys()).indexOf(this.activeTab);
            if (tabs[activeIndex]) {
                tabs[activeIndex].classList.add('active');
            }
        }
    }

    updateTabTitle(filePath) {
        const tabData = this.tabs.get(filePath);
        const tabs = Array.from(document.querySelectorAll('.tab'));
        const tabIndex = Array.from(this.tabs.keys()).indexOf(filePath);
        
        if (tabs[tabIndex] && tabData) {
            const fileName = tabData.fileName;
            const title = tabData.isDirty ? `${fileName} •` : fileName;
            tabs[tabIndex].innerHTML = `
                ${title}
                <span class="tab-close" onclick="event.stopPropagation(); editor.closeTab('${filePath}')">&times;</span>
            `;
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
        }, 2000);
    }

    async autosave() {
        if (!this.activeTab) return;

        const tabData = this.tabs.get(this.activeTab);
        const editor = document.getElementById('editor');
        
        tabData.content = editor.value;
        
        try {
            const response = await fetch(`/api/file/${encodeURIComponent(this.activeTab)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: tabData.content })
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || 'Failed to autosave file');
            }
            
            tabData.isDirty = false;
            tabData.originalContent = tabData.content;
            this.updateTabTitle(this.activeTab);
            
        } catch (error) {
            console.error('Autosave failed:', error);
        }
    }

    async saveCurrentFile() {
        if (!this.activeTab) return;

        const tabData = this.tabs.get(this.activeTab);
        const editor = document.getElementById('editor');
        const saveBtn = document.getElementById('save-btn');
        
        tabData.content = editor.value;
        
        saveBtn.textContent = 'Saving...';
        saveBtn.disabled = true;
        
        try {
            const response = await fetch(`/api/file/${encodeURIComponent(this.activeTab)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: tabData.content })
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || 'Failed to save file');
            }
            
            tabData.isDirty = false;
            tabData.originalContent = tabData.content;
            this.updateTabTitle(this.activeTab);
            
        } catch (error) {
            alert(`Error saving file: ${error.message}`);
        } finally {
            saveBtn.textContent = 'Save';
            saveBtn.disabled = false;
        }
    }

    saveSession() {
        const sessionData = {
            openTabs: Array.from(this.tabs.keys()),
            activeTab: this.activeTab,
            scrollPositions: Object.fromEntries(this.scrollPositions)
        };
        localStorage.setItem('markdownEditor.session', JSON.stringify(sessionData));
    }

    async restoreSession() {
        const sessionData = localStorage.getItem('markdownEditor.session');
        if (!sessionData) return;

        try {
            const session = JSON.parse(sessionData);
            this.scrollPositions = new Map(Object.entries(session.scrollPositions || {}));

            for (const filePath of session.openTabs || []) {
                try {
                    const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`);
                    const data = await response.json();
                    
                    if (response.ok) {
                        const fileName = filePath.split('/').pop();
                        this.tabs.set(filePath, {
                            fileName,
                            content: data.content,
                            originalContent: data.content,
                            isDirty: false,
                            isRTL: this.isRtlFile(fileName)
                        });
                        this.createTab(filePath, fileName);
                    }
                } catch (error) {
                    console.warn(`Failed to restore tab: ${filePath}`, error);
                }
            }

            if (session.activeTab && this.tabs.has(session.activeTab)) {
                this.switchToTab(session.activeTab);
            } else if (this.tabs.size > 0) {
                this.switchToTab(this.tabs.keys().next().value);
            }
        } catch (error) {
            console.error('Failed to restore session:', error);
        }
    }

    saveScrollPosition() {
        if (!this.activeTab || this.activeTabIsInitializing) return;
        const editor = document.getElementById('editor');
        // console.log('Saving scroll position: ', editor.scrollTop);
        this.scrollPositions.set(this.activeTab, editor.scrollTop);
        this.saveSession();
    }

    restoreScrollPosition(filePath) {
        if (!this.scrollPositions.has(filePath)) return;
        const editor = document.getElementById('editor');
        setTimeout(() => {
            // console.log('Restoring scroll position: ', this.scrollPositions.get(filePath));
            editor.scrollTop = this.scrollPositions.get(filePath);
            this.activeTabIsInitializing = false;
        }, 10);
    }

    isRtlFile(fileName) {
        return fileName.endsWith('.rtl.md') || fileName === 'CLAUDE.md';
    }
}

const editor = new MarkdownEditor();