// "Last Edit Location" (Cmd+Shift+Backspace, as in IntelliJ) - the places the user has edited, newest
// last, and the walk back through them.
//
// Plain ESM with no editor dependency, like links.js, so that it can be unit-tested on its own
// (tests/edit-locations.test.ts). The editor feeds it three things: every change of a file's text
// (map()), every edit the user makes (record()), and every move of the cursor the user makes
// (noteMove()) - see editLocationsExtension() in markdown-editor.js.

/** @typedef {{ filePath: string, pos: number }} EditLocation */

/** @typedef {(pos: number) => number} LineOf  the line number a position of the file is on */

/** How many locations are kept; the oldest go first. */
export const MAX_EDIT_LOCATIONS = 100;

export class EditLocations {
    constructor() {
        /** @type {EditLocation[]} newest last */
        this.entries = [];
        // Has the user moved the cursor since the last edit? That is what makes the next edit a
        // new location rather than more of the same one: typing a paragraph is one location,
        // typing, clicking elsewhere and typing again is two.
        this.movedSinceEdit = true;
        // The index of the entry the last jump went to, while a walk back is under way - null
        // when there is none. An edit ends the walk.
        /** @type {number | null} */
        this.walkIndex = null;
    }

    /**
     * Carries the locations of a file through a change of its text - which is what keeps "line 10
     * char 20" pointing at the same text after a line is inserted above it.
     *
     * @param {string} filePath
     * @param {(pos: number) => number} mapPos  e.g. a ChangeSet's mapPos()
     */
    map(filePath, mapPos) {
        for (const entry of this.entries) {
            if (entry.filePath === filePath) entry.pos = mapPos(entry.pos);
        }
    }

    /** The user moved the cursor - an arrow, a click, a search, a switch of tab... */
    noteMove() {
        this.movedSinceEdit = true;
    }

    /**
     * The user edited `filePath`, leaving the cursor at `pos`. The file's locations must already
     * have been map()ped through the edit.
     *
     * An edit right after another one in the same file - no move of the cursor between them - moves
     * the newest location rather than adding one. Any other location left on the same line is
     * dropped, so that a walk back never stops twice at one place.
     *
     * @param {string} filePath
     * @param {number} pos
     * @param {LineOf} lineOf
     */
    record(filePath, pos, lineOf) {
        const newest = this.entries.at(-1);
        if (!this.movedSinceEdit && newest?.filePath === filePath) {
            this.entries.pop();
        }
        const line = lineOf(pos);
        this.entries = this.entries.filter(entry => entry.filePath !== filePath || lineOf(entry.pos) !== line);
        this.entries.push({ filePath, pos });
        if (this.entries.length > MAX_EDIT_LOCATIONS) {
            this.entries.splice(0, this.entries.length - MAX_EDIT_LOCATIONS);
        }
        this.movedSinceEdit = false;
        this.walkIndex = null;
    }

    /**
     * The location to jump back to, one further back with every call until the next edit - or null
     * when there is none left. A location on the line the cursor is already on is passed over, so
     * the first jump right after an edit goes to the edit before it.
     *
     * @param {string | null} currentFilePath
     * @param {number} currentPos
     * @param {LineOf} lineOfCurrentFile
     * @returns {EditLocation | null}
     */
    previous(currentFilePath, currentPos, lineOfCurrentFile) {
        const currentLine = currentFilePath === null ? -1 : lineOfCurrentFile(currentPos);
        let index = (this.walkIndex ?? this.entries.length) - 1;
        while (index >= 0) {
            const entry = this.entries[index];
            if (entry.filePath !== currentFilePath || lineOfCurrentFile(entry.pos) !== currentLine) break;
            index--;
        }
        if (index < 0) return null;
        this.walkIndex = index;
        return { ...this.entries[index] };
    }
}
