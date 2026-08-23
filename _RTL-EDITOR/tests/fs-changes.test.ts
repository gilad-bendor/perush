import { describe, expect, test } from "bun:test";
import { diffSnapshots, FsChangeLog, isIgnoredWatchPath, snapshotOfTree } from "../src/fs-changes";
import type { FileData } from "../src/server";

/** A tree in the shape /api/files answers with. */
function tree(...entries: FileData[]): FileData[] {
    return entries;
}
function file(path: string): FileData {
    return { name: path.split("/").pop()!, type: "file", path, children: [] };
}
function directory(path: string, ...children: FileData[]): FileData {
    return { name: path.split("/").pop()!, type: "directory", path, children };
}

describe("snapshotOfTree", () => {
    test("holds every file and folder, a folder marked by its trailing slash", () => {
        const snapshot = snapshotOfTree(tree(
            file("CLAUDE.md"),
            directory("פירוש",
                file("פירוש/הקדמה.rtl.md"),
                directory("פירוש/1-בראשית", file("פירוש/1-בראשית/1010-א.rtl.md"))),
        ));
        expect([...snapshot].sort()).toEqual([
            "CLAUDE.md",
            "פירוש/",
            "פירוש/1-בראשית/",
            "פירוש/1-בראשית/1010-א.rtl.md",
            "פירוש/הקדמה.rtl.md",
        ].sort());
    });

    test("an empty tree is an empty snapshot", () => {
        expect(snapshotOfTree([]).size).toBe(0);
    });
});

describe("diffSnapshots", () => {
    test("reports what came and what went", () => {
        // Sorted by depth and then by path - not by which kind of change it is.
        expect(diffSnapshots(new Set(["a.md", "b.md"]), new Set(["b.md", "c.md"]))).toEqual([
            { path: "a.md", changeType: "deleted" },
            { path: "c.md", changeType: "created" },
        ]);
    });

    test("no difference, no changes", () => {
        expect(diffSnapshots(new Set(["a.md"]), new Set(["a.md"]))).toEqual([]);
    });

    test("a deleted folder brings every path under it - which is the whole point", () => {
        const before = new Set(["טיוטות/", "טיוטות/א.md", "טיוטות/עוד/", "טיוטות/עוד/ב.md", "אחר.md"]);
        const after = new Set(["אחר.md"]);
        expect(diffSnapshots(before, after)).toEqual([
            { path: "טיוטות/", changeType: "deleted" },
            { path: "טיוטות/א.md", changeType: "deleted" },
            { path: "טיוטות/עוד/", changeType: "deleted" },
            { path: "טיוטות/עוד/ב.md", changeType: "deleted" },
        ]);
    });

    test("a created folder likewise, shallowest first", () => {
        const changes = diffSnapshots(new Set(), new Set(["a/", "a/b/", "a/b/deep.md", "a/top.md"]));
        // A folder always comes before anything under it; siblings sort among themselves.
        expect(changes.map(change => change.path)).toEqual(["a/", "a/top.md", "a/b/", "a/b/deep.md"]);
        expect(changes.every(change => change.changeType === "created")).toBe(true);
    });
});

describe("FsChangeLog", () => {
    /** A log on a clock that stands still - the worst case for a timestamp cursor. */
    function frozenLog(maxChanges = 2000) {
        return new FsChangeLog(maxChanges, () => 1_000);
    }

    test("a cursor is never handed out twice, even on a clock that does not move", () => {
        const log = frozenLog();
        const first = log.now();
        const second = log.now();
        expect(second).toBeGreaterThan(first);
    });

    test("answers with the changes after the cursor, and only those", () => {
        const log = frozenLog();
        log.startCovering();
        const cursor = log.now();
        log.record([{ path: "a.md", changeType: "created" }]);
        const afterFirst = log.now();
        log.record([{ path: "b.md", changeType: "deleted" }]);

        expect(log.since(cursor)).toEqual([
            { path: "a.md", changeType: "created" },
            { path: "b.md", changeType: "deleted" },
        ]);
        expect(log.since(afterFirst)).toEqual([{ path: "b.md", changeType: "deleted" }]);
        expect(log.since(log.now())).toEqual([]);
    });

    test("a change recorded in the same millisecond as the answer is not lost", () => {
        const log = frozenLog();
        log.startCovering();
        // The clock stands still, so this is exactly the race a plain Date.now() would lose.
        const cursor = log.now();
        log.record([{ path: "a.md", changeType: "created" }]);
        expect(log.since(cursor)).toEqual([{ path: "a.md", changeType: "created" }]);
    });

    test("a cursor from before the log was covering anything is unanswerable", () => {
        const log = frozenLog();
        const beforeCovering = log.now();
        log.startCovering();
        expect(log.since(beforeCovering)).toBeNull();
        expect(log.since(log.now())).toEqual([]);
    });

    test("nothing can be answered before the first snapshot is in hand", () => {
        expect(frozenLog().since(1)).toBeNull();
    });

    test("a cursor from beyond the trimmed window is unanswerable, a later one still works", () => {
        const log = frozenLog(2);
        log.startCovering();
        const oldest = log.now();
        log.record([{ path: "a.md", changeType: "created" }]);
        const middle = log.now();
        log.record([{ path: "b.md", changeType: "created" }]);
        log.record([{ path: "c.md", changeType: "created" }]);      // pushes "a.md" out

        expect(log.since(oldest)).toBeNull();
        expect(log.since(middle)).toEqual([
            { path: "b.md", changeType: "created" },
            { path: "c.md", changeType: "created" },
        ]);
    });

    test("recording nothing changes nothing", () => {
        const log = frozenLog();
        log.startCovering();
        const cursor = log.now();
        expect(log.record([])).toBe(0);
        expect(log.since(cursor)).toEqual([]);
    });
});

describe("isIgnoredWatchPath", () => {
    const exclusions = new Set(["scripts", ".idea", ".git", ".DS_Store"]);
    const ignored = (path: string | null) => isIgnoredWatchPath(path, exclusions);

    test("a Markdown file, and a name that may be a folder, are worth a rescan", () => {
        expect(ignored("פירוש/1-בראשית/1010-א.rtl.md")).toBe(false);
        expect(ignored("CLAUDE.md")).toBe(false);
        expect(ignored("פירוש/1-בראשית")).toBe(false);          // no extension - very likely a folder
    });

    test("an excluded folder is ignored at any depth - .git churn must not walk the tree", () => {
        expect(ignored(".git/index.lock")).toBe(true);
        expect(ignored("_RTL-EDITOR/.idea/workspace.xml")).toBe(true);
        expect(ignored("a/b/.git/refs/heads/main")).toBe(true);
        expect(ignored("scripts/whatever.md")).toBe(true);
    });

    test("our own atomic-save temporary is ignored", () => {
        expect(ignored("פירוש/.tmp.1010-א.rtl.md.k3j4h")).toBe(true);
    });

    test("a file of another kind is ignored", () => {
        expect(ignored("public/style.css")).toBe(true);
        expect(ignored("image.png")).toBe(true);
    });

    test("no path at all is ignored", () => {
        expect(ignored(null)).toBe(true);
        expect(ignored("")).toBe(true);
    });
});
