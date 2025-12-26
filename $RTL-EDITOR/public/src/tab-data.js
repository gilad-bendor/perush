// noinspection ES6UnusedImports
import { consoleError, consoleWarn, consoleInfo, consoleLog, consoleGroup, consoleGroupCollapsed, consoleGroupEnd } from './logs.js';
import { MarkdownEditor } from './markdown-editor.js';
import { EditorView } from 'https://esm.sh/codemirror';

export class TabData {
    /**
     * @param {MarkdownEditor} markdownEditor
     * @param {string} filePath
     * @param {string} fileName
     * @param {string} contentAtServer
     * @param {EditorView} editorView
     * @param {HTMLDivElement} editorWrapper
     * @param {HTMLButtonElement} tabElement
     */
    constructor(markdownEditor, filePath, fileName, contentAtServer, editorView, editorWrapper, tabElement) {
        this.markdownEditor = markdownEditor;
        this.filePath = filePath;
        this.fileName = fileName;
        // noinspection JSUnusedGlobalSymbols
        this.contentAtServer = contentAtServer;
        this.isDirty = false;
        this.editorView = editorView;
        this.editorWrapper = editorWrapper;
        this.tabElement = tabElement;
        this.abortAutoScrolling = false;
        this.updateFileFromServerIntervalId = null;
        this.autosaveTimeoutId = null;
    }

    updateTitle() {
        /** @type {Text} */(this.tabElement.firstChild).data = this.isDirty
                ? `${this.fileName} •`
                : this.fileName;
    }

    scheduleAutosave() {
        clearTimeout(this.autosaveTimeoutId);
        this.autosaveTimeoutId = setTimeout(async () => {
            if (!this.isDirty) {
                this.autosaveTimeoutId = null;
                return;
            }
            this.autosaveTimeoutId = '===SAVING==='; // not setting to null yet, to disable updateFromServer()
            try {
                await this.autosave();
            } catch (error) {
                consoleError('Autosave failed:', error);
            }
            this.autosaveTimeoutId = null;
        }, 1000);
    }

    async autosave() {
        if (!this.isDirty) {
            return;
        }

        try {
            consoleLog(`Auto saving ${this.filePath}`);

            // Just before auto-saving, make sure we have the latest version from server.
            await this.updateFromServer();

            const currentContent = this.editorView.state.doc.toString();
            const response = await fetch(`/api/file/${encodeURIComponent(this.filePath)}`, {
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

            this.isDirty = false;
            this.contentAtServer = currentContent;
            this.updateTitle();

        } catch (error) {
            consoleError(`Autosave failed for ${JSON.stringify(this.filePath)}:`, error);
        }
    }

    async updateFromServer() {
        // Load file content from server.
        if (this.autosaveTimeoutId) {
            return;
        }
        const contentOnServer = await this.markdownEditor.loadFileFromServer(this.filePath);
        if (this.autosaveTimeoutId) {
            return;
        }

        // If content has changed on server, prompt user to reload or keep local changes.
        const currentContent = this.editorView.state.doc.toString();
        if (currentContent !== contentOnServer) {
            consoleWarn(`File ${JSON.stringify(this.filePath)} has changed on server:`, {uiContent: currentContent, contentOnServer});
            alert(`The file\n    ${this.filePath}\n has changed on the server: updating.`);

            // Remember original scroll position and selection.
            const originalScrollTop = this.editorView.scrollDOM.scrollTop;
            const originalSelection = this.editorView.state.selection;
            this.editorView.dispatch({
                changes: { from: 0, to: this.editorView.state.doc.length, insert: contentOnServer }
            });
            this.editorView.scrollDOM.scrollTop = originalScrollTop;
            try {
                this.editorView.dispatch({selection: originalSelection});
            } catch (error) {
                // Probably "RangeError: Selection points outside of document" - ignore.
            }
            this.contentAtServer = contentOnServer;
            this.isDirty = false;
            this.updateTitle();
        }
    }

    saveScrollPosition() {
        const tabState = this.markdownEditor.tabStates.get(this.filePath) ?? {};
        if (this.abortAutoScrolling) {
            // consoleLog(`    (ignoring scroll event for ${JSON.stringify(this.filePath)} with scrollTop=${this.editorView.scrollDOM.scrollTop})`);
            this.editorView.scrollDOM.scrollTop = tabState.scrollTop ?? 0;
            return;
        }
        // consoleLog(`Saving scroll position for ${JSON.stringify(this.filePath)}: `, this.editorView.scrollDOM.scrollTop);
        this.markdownEditor.tabStates.set(this.filePath, {...tabState, scrollTop: this.editorView.scrollDOM.scrollTop });
        this.markdownEditor.saveSession();
    }

    saveSelectionState() {
        const tabState = this.markdownEditor.tabStates.get(this.filePath) ?? {};
        const selection = this.editorView.state.selection.main;

        // Save selection as serializable object with anchor and head positions
        this.markdownEditor.tabStates.set(this.filePath, {
            ...tabState,
            selection: {
                anchor: selection.anchor,
                head: selection.head
            }
        });
        this.markdownEditor.saveSession();
    }

    restoreState() {
        const tabState = this.markdownEditor.tabStates.get(this.filePath);
        if (!tabState) {
            return;
        }
        consoleLog(`Restoring tab state of ${JSON.stringify(this.filePath)}: `, tabState);

        // Restore scroll position.
        this.editorView.scrollDOM.scrollTop = tabState.scrollTop;
        if (this.editorView.scrollDOM.scrollTop !== tabState.scrollTop) {
            consoleWarn(`Failed to restore scrollTop of ${JSON.stringify(this.filePath)} to ${tabState.scrollTop}, got ${this.editorView.scrollDOM.scrollTop} instead.`);
        }

        // Restore text selection/cursor position.
        if (tabState.selection) {
            const { anchor, head } = tabState.selection;
            const docLength = this.editorView.state.doc.length;

            // Ensure positions are within document bounds
            const validAnchor = Math.min(anchor, docLength);
            const validHead = Math.min(head, docLength);

            this.editorView.dispatch({
                selection: { anchor: validAnchor, head: validHead }
            });
        }
    }

    startServerUpdatePolling() {
        this.stopServerUpdatePolling();
        this.updateFileFromServerIntervalId = setInterval(
            () => this.updateFromServer().catch(consoleError),
            UPDATE_FILE_FROM_SERVER_INTERVAL_MS
        );
    }

    stopServerUpdatePolling() {
        if (this.updateFileFromServerIntervalId) {
            clearInterval(this.updateFileFromServerIntervalId);
            this.updateFileFromServerIntervalId = null;
        }
    }

    activate() {
        this.tabElement.classList.add('active');
        this.editorWrapper.classList.add('active');
        const fileTreeElement = this.markdownEditor.fileTreeElements.get(this.filePath);
        fileTreeElement?.classList.add('active');
        fileTreeElement?.scrollIntoViewIfNeeded();

        this.editorView.focus();

        // It seems that in Chrome, when CodeMirror is focused, it may auto-scroll to the cursor
        this.abortAutoScrolling = true;
        setTimeout(() => this.abortAutoScrolling = false, 100);

        if (!/** @type {any} */(this.editorWrapper)._wasEverVisible_) {
            /** @type {any} */(this.editorWrapper)._wasEverVisible_ = true;
            this.restoreState();
        }

        // Periodically check for file updates from server.
        this.startServerUpdatePolling();
    }

    deactivate() {
        this.tabElement.classList.remove('active');
        this.editorWrapper.classList.remove('active');
        this.markdownEditor.fileTreeElements.get(this.filePath)?.classList.remove('active');
        this.stopServerUpdatePolling();
    }

    destroy() {
        this.stopServerUpdatePolling();
        this.tabElement.remove();
        this.editorView.destroy();
        this.editorWrapper.remove();
        this.markdownEditor.fileTreeElements.get(this.filePath)?.classList.remove('active');
    }
}

// Interval to check for file updates from server (in milliseconds).
const UPDATE_FILE_FROM_SERVER_INTERVAL_MS = 1000;
