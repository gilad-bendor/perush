import { describe, expect, test } from "bun:test";
import { ChangeSet, Text } from "@codemirror/state";
import { EditLocations, MAX_EDIT_LOCATIONS } from "../public/src/edit-locations.js";

// A file of 20 lines of 30 characters; line n (1-based) starts at (n - 1) * 31.
const lineOf = (pos: number) => Math.floor(pos / 31) + 1;
const at = (line: number, column: number) => (line - 1) * 31 + column;

describe("EditLocations", () => {
    test("edits with no move between them are one location, moved along", () => {
        const locations = new EditLocations();
        locations.record("a.md", at(3, 5), lineOf);
        locations.record("a.md", at(3, 6), lineOf);
        locations.record("a.md", at(4, 0), lineOf);
        expect(locations.entries).toEqual([{ filePath: "a.md", pos: at(4, 0) }]);
    });

    test("a move of the cursor makes the next edit a new location", () => {
        const locations = new EditLocations();
        locations.record("a.md", at(3, 5), lineOf);
        locations.noteMove();
        locations.record("a.md", at(10, 0), lineOf);
        expect(locations.entries.map(entry => entry.pos)).toEqual([at(3, 5), at(10, 0)]);
    });

    test("an edit in another file is a new location, move or no move", () => {
        const locations = new EditLocations();
        locations.record("a.md", at(3, 5), lineOf);
        locations.record("b.md", at(3, 5), lineOf);
        expect(locations.entries.map(entry => entry.filePath)).toEqual(["a.md", "b.md"]);
    });

    test("an older location on the same line is dropped", () => {
        const locations = new EditLocations();
        locations.record("a.md", at(3, 5), lineOf);
        locations.noteMove();
        locations.record("a.md", at(10, 0), lineOf);
        locations.noteMove();
        locations.record("a.md", at(3, 20), lineOf);
        expect(locations.entries.map(entry => entry.pos)).toEqual([at(10, 0), at(3, 20)]);
    });

    test("keeps only the newest MAX_EDIT_LOCATIONS", () => {
        const locations = new EditLocations();
        for (let i = 0; i < MAX_EDIT_LOCATIONS + 5; i++) {
            locations.record(`f${i}.md`, 0, lineOf);
        }
        expect(locations.entries).toHaveLength(MAX_EDIT_LOCATIONS);
        expect(locations.entries[0].filePath).toBe("f5.md");
    });

    describe("map", () => {
        const doc = Text.of(Array.from({ length: 20 }, () => "x".repeat(30)));

        test("a line inserted above moves a location a line down", () => {
            const locations = new EditLocations();
            locations.record("a.md", at(10, 20), lineOf);
            locations.map("a.md", pos => ChangeSet.of({ from: at(5, 0), insert: "y".repeat(30) + "\n" }, doc.length).mapPos(pos));
            expect(locations.entries[0].pos).toBe(at(11, 20));
        });

        test("a character inserted at the start of its line moves it a character on", () => {
            const locations = new EditLocations();
            locations.record("a.md", at(10, 20), lineOf);
            locations.map("a.md", pos => ChangeSet.of({ from: at(10, 0), insert: "y" }, doc.length).mapPos(pos));
            expect(locations.entries[0].pos).toBe(at(10, 21));
        });

        test("touches only the file it is given", () => {
            const locations = new EditLocations();
            locations.record("a.md", 100, lineOf);
            locations.map("b.md", pos => pos + 1);
            expect(locations.entries[0].pos).toBe(100);
        });
    });

    describe("previous", () => {
        function threeEdits() {
            const locations = new EditLocations();
            for (const line of [2, 8, 14]) {
                locations.noteMove();
                locations.record("a.md", at(line, 3), lineOf);
            }
            return locations;
        }

        test("passes over the location the cursor is on, then walks back", () => {
            const locations = threeEdits();
            expect(locations.previous("a.md", at(14, 3), lineOf)?.pos).toBe(at(8, 3));
            expect(locations.previous("a.md", at(8, 3), lineOf)?.pos).toBe(at(2, 3));
            expect(locations.previous("a.md", at(2, 3), lineOf)).toBeNull();
        });

        test("goes to the newest location when the cursor is elsewhere", () => {
            const locations = threeEdits();
            expect(locations.previous("a.md", at(19, 0), lineOf)?.pos).toBe(at(14, 3));
            expect(locations.previous("b.md", 0, lineOf)?.pos).toBe(at(8, 3));
        });

        test("an edit ends the walk", () => {
            const locations = threeEdits();
            locations.previous("a.md", at(14, 3), lineOf);
            locations.previous("a.md", at(8, 3), lineOf);
            locations.noteMove();
            locations.record("a.md", at(20, 0), lineOf);
            expect(locations.previous("a.md", at(20, 0), lineOf)?.pos).toBe(at(14, 3));
        });

        test("nothing to go back to", () => {
            expect(new EditLocations().previous(null, 0, () => -1)).toBeNull();
        });
    });
});
