// noinspection ES6UnusedImports
import { consoleError, consoleWarn, consoleInfo, consoleLog, consoleGroup, consoleGroupCollapsed, consoleGroupEnd } from './logs.js';
import { MarkdownEditor } from './markdown-editor.js';
import { EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { formatTables, isAiGeneratedFile } from './tables.js';

export class TabData {
    /**
     * A tab starts out *un-loaded*: it has a name and a button, but no file content and no editor.
     * The file is fetched the first time the tab is shown - see ensureLoaded().
     *
     * This is what keeps the tabs in order. openFile() creates every tab synchronously, so the
     * order of this.tabs (which is what saveSession() stores) is the order of the buttons in the
     * strip. Fetching the file first would order the Map by whichever file answered first.
     *
     * @param {MarkdownEditor} markdownEditor
     * @param {string} filePath
     * @param {string} fileName
     * @param {HTMLButtonElement} tabElement
     */
    constructor(
        markdownEditor,
        filePath,
        fileName,
        tabElement,
    ) {
        this.markdownEditor = markdownEditor;
        this.filePath = filePath;
        this.fileName = fileName;
        this.tabElement = tabElement;

        // Everything below is settled when the file is loaded - see MarkdownEditor.loadTabContent().
        this.readOnly = false;
        this.isRtl = false;
        // Set when the file could not be read: the editor then holds a note saying so, rather than
        // the tab being thrown away and the file dropped from the session.
        this.isMissing = false;
        // Set when the file has been deleted on disk while the tab was open - reported by the
        // server together with the polling, see MarkdownEditor.applyFileSystemChanges(). The tab
        // then shows the same "file not found" note as one whose file was already gone when it was
        // opened; this flag is what keeps the 404 from being reported as a failure meanwhile.
        this.isDeleted = false;
        // The file exactly as it is on the server - which is *not* what the editor holds, because
        // tables are laid out (and, in an RTL file, mirrored) on the way in. See updateFromServer().
        // noinspection JSUnusedGlobalSymbols
        this.contentAtServer = '';
        /** @type {EditorView | null} */
        this.editorView = null;
        /** @type {HTMLDivElement | null} */
        this.editorWrapper = null;
        /** @type {Promise<void> | null} */
        this.loadPromise = null;

        this.isDirty = false;
        this.abortAutoScrolling = false;
        this.updateFileFromServerIntervalId = null;
        this.autosaveTimeoutId = null;
    }

    /**
     * Fetches the file and builds the editor - once. Every later call gets the same promise back,
     * so that switching to a tab twice in quick succession does not load it twice.
     *
     * @returns {Promise<void>}
     */
    ensureLoaded() {
        if (!this.loadPromise) {
            this.loadPromise = this.markdownEditor.loadTabContent(this).catch((error) => {
                consoleError(`Failed to load tab ${JSON.stringify(this.filePath)}: `, error);
            });
        }
        return this.loadPromise;
    }

    /**
     * Takes in what has happened to the tree, as far as it concerns this tab's own file.
     *
     * A folder counts as its whole content: the server reports the folder *and* every path that was
     * under it (see diffSnapshots()), but the folder's own entry is matched by prefix too, so that
     * a tab is caught either way.
     *
     * A file that goes leaves the tab looking **exactly** as it does when a file is missing at
     * load time - red italic title, "RO" badge, and a "file not found" note where the text was -
     * because it is the same code path: loadTabContent() finds nothing and writes the note itself.
     * A file that comes back is loaded for real, again by the same path.
     *
     * The changes come shallowest-first, so the last one that names this file is the state to end
     * up in - which is what a folder deleted and put back again amounts to.
     *
     * @param {{path: string, changeType: 'created' | 'deleted'}[]} changes
     */
    applyFileSystemChange(changes) {
        /** @type {'created' | 'deleted' | null} */
        let outcome = null;
        for (const {path, changeType} of changes) {
            const isAboutThisFile = path.endsWith('/')
                ? this.filePath.startsWith(path)            // the folder holding it, at any depth
                : path === this.filePath;
            if (isAboutThisFile) outcome = changeType;
        }
        if (!outcome) return;

        this.isDeleted = outcome === 'deleted';

        if (this.isDeleted) {
            // A tab that has never been shown has nothing to rebuild: when it is shown, it will
            // find the file gone and write the note itself. One that already holds the note is
            // there too.
            if (!this.editorView || this.isMissing) return;
            // Unsaved text is not thrown away for a file that is about to come back: the autosave
            // already scheduled writes it out again, and the "created" that follows puts the tab
            // right. Until then updateFromServer() keeps quiet about the 404 - see this.isDeleted.
            if (this.isDirty) return;
            this.markdownEditor.loadTabContent(this).catch(consoleError);
            return;
        }

        // The file is back. A tab holding the note is rebuilt from it at once; one that was never
        // shown drops its cached load, so that it is fetched for real when it is.
        if (!this.isMissing) return;
        if (this.editorView) {
            this.markdownEditor.loadTabContent(this).catch(consoleError);
        } else {
            this.loadPromise = null;
        }
    }

    updateTitle() {
        /** @type {HTMLElement} */(this.tabElement.querySelector('.tab-title')).textContent = this.isDirty
                ? `${this.fileName} •`
                : this.fileName;

        // Read-only tabs get an "RO" badge after the file-name.
        const existingBadge = this.tabElement.querySelector('.tab-read-only');
        if (this.readOnly && !existingBadge) {
            const badge = document.createElement('span');
            badge.className = 'tab-read-only';
            badge.textContent = 'RO';
            this.tabElement.appendChild(badge);
        } else if (!this.readOnly && existingBadge) {
            existingBadge.remove();
        }
    }

    /**
     * Apply this.readOnly to the editor, so that a read-only tab cannot be edited.
     * @param {boolean} readOnly
     */
    setReadOnly(readOnly) {
        this.readOnly = readOnly;
        if (!this.editorView) {
            this.updateTitle();     // not loaded yet - the editor will be built read-only
            return;
        }
        this.editorView.dispatch({
            effects: this.markdownEditor.readOnlyCompartment.reconfigure(EditorState.readOnly.of(readOnly))
        });
        this.updateTitle();
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
        if (!this.isDirty || this.readOnly || !this.editorView) {
            return;
        }
        const editorView = this.editorView;

        try {
            consoleLog(`Auto saving ${this.filePath}`);

            // Just before auto-saving, make sure we have the latest version from server.
            await this.updateFromServer();

            const currentContent = editorView.state.doc.toString();
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
        // Do not alert and move the focus to the browser - if the browser os not already focused.
        if (!document.hasFocus()) {
            return;
        }
        // Load file content from server.
        if (this.autosaveTimeoutId) {
            return;
        }
        if (!this.editorView) {
            return;                 // not loaded yet - there is nothing to compare against
        }

        // The tab of a missing file keeps looking for it: should the file appear, the note is
        // replaced by a real editor. Until then there is nothing to compare, so leave it be.
        if (this.isMissing) {
            try {
                await this.markdownEditor.loadFileFromServer(this.filePath);
            } catch (error) {
                return;             // still missing
            }
            await this.markdownEditor.loadTabContent(this);
            return;
        }

        const editorView = this.editorView;
        /** @type {{content: string, readOnly?: boolean}} */
        let fileAtServer;
        try {
            fileAtServer = await this.markdownEditor.loadFileFromServer(this.filePath);
        } catch (error) {
            // A file that has been deleted under an open tab is not a failure to report once a
            // second: the deletion is already known, and the tab keeps the text it holds. (The
            // request itself was not in vain - it carried the tree's cursor, and the answer, 404
            // and all, brought back what has changed.)
            if (this.isDeleted) return;
            throw error;
        }
        const {content: contentOnServer, readOnly} = fileAtServer;
        if (this.autosaveTimeoutId) {
            return;
        }
        if (!!readOnly !== this.readOnly) {
            this.setReadOnly(!!readOnly);
        }

        // If content has changed on server, prompt user to reload or keep local changes.
        // The comparison is against the *formatted* server content: the server stores tables
        // un-mirrored and does not care about their alignment, so comparing raw text would
        // report a difference on every poll and fight the auto-formatter forever.
        const currentContent = editorView.state.doc.toString();
        const formattedContentOnServer = isAiGeneratedFile(this.filePath)
            ? contentOnServer                                   // never reformatted - see isAiGeneratedFile()
            : formatTables(contentOnServer, this.isRtl).content;
        if (currentContent !== formattedContentOnServer) {
            consoleWarn(`File ${JSON.stringify(this.filePath)} has changed on server:`, {uiContent: currentContent, contentOnServer});
            // For a read-only tab, the user has no local changes to lose - so update silently.
            if (!this.readOnly && !readOnly) {
                alert(`The file\n    ${this.filePath}\n has changed on the server: updating.`);
            }

            // Remember original scroll position and selection.
            const originalScrollTop = editorView.scrollDOM.scrollTop;
            const originalSelection = editorView.state.selection;
            editorView.dispatch({
                changes: { from: 0, to: this.editorView.state.doc.length, insert: formattedContentOnServer }
            });
            editorView.scrollDOM.scrollTop = originalScrollTop;
            try {
                editorView.dispatch({selection: originalSelection});
            } catch (error) {
                // Probably "RangeError: Selection points outside of document" - ignore.
            }
            this.contentAtServer = contentOnServer;
            this.isDirty = false;
            this.updateTitle();
        }
    }

    saveScrollPosition() {
        if (!this.editorView) return;
        const editorView = this.editorView;
        const tabState = this.markdownEditor.tabStates.get(this.filePath) ?? {};
        if (this.abortAutoScrolling) {
            // consoleLog(`    (ignoring scroll event for ${JSON.stringify(this.filePath)} with scrollTop=${this.editorView.scrollDOM.scrollTop})`);
            editorView.scrollDOM.scrollTop = tabState.scrollTop ?? 0;
            return;
        }
        // consoleLog(`Saving scroll position for ${JSON.stringify(this.filePath)}: `, this.editorView.scrollDOM.scrollTop);
        this.markdownEditor.tabStates.set(this.filePath, {...tabState, scrollTop: editorView.scrollDOM.scrollTop });
        this.markdownEditor.saveSession();
    }

    saveSelectionState() {
        if (!this.editorView) return;
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
        if (!tabState || !this.editorView) {
            return;
        }
        const editorView = this.editorView;
        consoleLog(`Restoring tab state of ${JSON.stringify(this.filePath)}: `, tabState);

        // Restore scroll position.
        editorView.scrollDOM.scrollTop = tabState.scrollTop;
        if (editorView.scrollDOM.scrollTop !== tabState.scrollTop) {
            consoleWarn(`Failed to restore scrollTop of ${JSON.stringify(this.filePath)} to ${tabState.scrollTop}, got ${editorView.scrollDOM.scrollTop} instead.`);
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

    /**
     * Shows this tab - fetching its file first, if this is the first time it is shown.
     *
     * @returns {Promise<void>}
     */
    async activate() {
        this.tabElement.classList.add('active');
        const fileTreeElement = this.markdownEditor.fileTreeElements.get(this.filePath);
        fileTreeElement?.classList.add('active');
        fileTreeElement?.scrollIntoViewIfNeeded();

        await this.ensureLoaded();
        if (this.markdownEditor.activeTab !== this.filePath) {
            return;                 // the user has switched away while the file was loading
        }
        const editorView = this.editorView;
        const editorWrapper = this.editorWrapper;
        if (!editorView || !editorWrapper) {
            return;                 // loading failed outright - ensureLoaded() has logged it
        }

        editorWrapper.classList.add('active');
        editorView.focus();

        // It seems that in Chrome, when CodeMirror is focused, it may auto-scroll to the cursor
        this.abortAutoScrolling = true;
        setTimeout(() => this.abortAutoScrolling = false, 100);

        if (!/** @type {any} */(editorWrapper)._wasEverVisible_) {
            /** @type {any} */(editorWrapper)._wasEverVisible_ = true;
            this.restoreState();
        }

        // Periodically check for file updates from server.
        this.startServerUpdatePolling();
    }

    deactivate() {
        this.tabElement.classList.remove('active');
        this.editorWrapper?.classList.remove('active');
        this.markdownEditor.fileTreeElements.get(this.filePath)?.classList.remove('active');
        this.stopServerUpdatePolling();
    }

    /**
     * Throws the editor away, leaving the tab as it was before it was ever shown. Called when the
     * tab is closed, and when a missing file has come back and its editor is rebuilt from it.
     */
    destroyEditor() {
        this.editorView?.destroy();
        this.editorWrapper?.remove();
        this.editorView = null;
        this.editorWrapper = null;
    }

    destroy() {
        this.stopServerUpdatePolling();
        this.tabElement.remove();
        this.destroyEditor();
        this.markdownEditor.fileTreeElements.get(this.filePath)?.classList.remove('active');
    }
}

// Interval to check for file updates from server (in milliseconds).
const UPDATE_FILE_FROM_SERVER_INTERVAL_MS = 1000;
