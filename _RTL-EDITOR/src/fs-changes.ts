// Which files and folders have appeared or disappeared, and when.
//
// The pure half of the feature - a snapshot of the tree, the difference between two snapshots, and
// a log of those differences that a client can ask "what has happened since?". The watching itself
// (fs.watch, the rescans it triggers) lives in server.ts; everything here is testable on its own.

import { extname } from "path";
import type { FileData } from "./server";

export type FileSystemChange = {
    /** As the file tree and /api/file name it. A folder ends with "/". */
    path: string;
    changeType: "created" | "deleted";
};

/** A logged change, with the moment it was recorded at. */
type LoggedChange = FileSystemChange & { at: number };

/**
 * The paths of every file and folder in a tree, flattened.
 *
 * Taken from the very tree /api/files answers with - so what the log reports and what the client
 * renders can never disagree. A folder with no .md descendant is in neither: getMarkdownFiles()
 * leaves it out of the tree, and the file tree therefore never shows it.
 */
export function snapshotOfTree(files: FileData[]): Set<string> {
    const paths = new Set<string>();
    const walk = (entries: FileData[]) => {
        for (const entry of entries) {
            if (entry.type === "directory") {
                paths.add(`${entry.path}/`);
                walk(entry.children ?? []);
            } else {
                paths.add(entry.path);
            }
        }
    };
    walk(files);
    return paths;
}

/**
 * What has to happen to `before` for it to become `after`.
 *
 * A folder that comes or goes brings its whole content with it - and this is where that is taken
 * care of, without a single special case: both snapshots hold every file and folder in full, so a
 * deleted folder simply shows up as the folder *and* each path that was under it.
 */
export function diffSnapshots(before: Set<string>, after: Set<string>): FileSystemChange[] {
    const changes: FileSystemChange[] = [];
    for (const path of after) {
        if (!before.has(path)) changes.push({ path, changeType: "created" });
    }
    for (const path of before) {
        if (!after.has(path)) changes.push({ path, changeType: "deleted" });
    }
    // Shallowest first, so that a client applying them in order sees a folder before its content.
    return changes.sort((a, b) => a.path.split("/").length - b.path.split("/").length
        || a.path.localeCompare(b.path));
}

/**
 * The changes the server has seen, and what it can still answer for.
 *
 * The cursor a client carries is a timestamp this log itself hands out (`now()`), never the
 * client's own clock. Two rules make "everything since your timestamp" exact:
 *
 * - Every timestamp it issues is *strictly* greater than the last, recorded or handed out. So a
 *   change cannot land in the same millisecond as the answer that preceded it and be lost to the
 *   `at > since` test - which is why nothing here calls Date.now() directly twice in a row.
 * - It knows how far back it can answer (`coversSince`). A cursor older than that - from before
 *   this server started, or from beyond the trimmed window - is not answered with an empty list,
 *   which would quietly claim nothing had happened; the client is told to reload the tree instead.
 */
export class FsChangeLog {
    private changes: LoggedChange[] = [];
    private lastTimestamp = 0;
    /** The oldest moment this log can still answer for; 0 until the first snapshot is taken. */
    private coversSince = 0;

    constructor(
        /** How many changes to keep. Beyond this, the oldest are dropped and coversSince moves up. */
        private readonly maxChanges = 2000,
        private readonly clock: () => number = Date.now,
    ) {}

    /** A timestamp to hand a client, strictly later than every one issued or recorded before it. */
    now(): number {
        this.lastTimestamp = Math.max(this.clock(), this.lastTimestamp + 1);
        return this.lastTimestamp;
    }

    /** Called once the first snapshot is in hand: from now on, changes are noticed. */
    startCovering(): void {
        this.coversSince = this.now();
    }

    /** @returns the moment the changes were recorded at, or 0 if there were none. */
    record(changes: FileSystemChange[]): number {
        if (!changes.length) return 0;
        const at = this.now();
        for (const change of changes) this.changes.push({ ...change, at });

        const surplus = this.changes.length - this.maxChanges;
        if (surplus > 0) {
            // What is dropped can no longer be answered for - and a cursor from before the last
            // dropped change must be told so, hence its own timestamp and not the next one's.
            this.coversSince = this.changes[surplus - 1].at;
            this.changes.splice(0, surplus);
        }
        return at;
    }

    /**
     * The changes since `since` - or `null` when this log cannot answer for a cursor that old, in
     * which case the client has to fetch the whole tree again.
     */
    since(since: number): FileSystemChange[] | null {
        if (this.coversSince === 0 || since < this.coversSince) return null;
        return this.changes
            .filter(change => change.at > since)
            .map(({ path, changeType }) => ({ path, changeType }));
    }
}

/**
 * Is this path one the file tree could never show anyway?
 *
 * Such a watch event is dropped before it can cost a rescan - which is what keeps a busy .git
 * directory from walking the tree all day long.
 *
 * @param relativePath  the path fs.watch reported, relative to the watched root
 * @param exclusions    the names getMarkdownFiles() skips, at any depth
 */
export function isIgnoredWatchPath(relativePath: string | null | undefined, exclusions: Set<string>): boolean {
    if (!relativePath) return true;                     // no name to judge by - and nothing to rescan for
    const segments = relativePath.split("/");
    if (segments.some(segment => exclusions.has(segment) || segment.startsWith(".tmp."))) {
        return true;                                    // excluded from the tree, or our own writeFileSafe() temporary
    }
    // A file of another kind is of no interest. A name with no extension may well be a directory,
    // and a directory very much is.
    const extension = extname(segments[segments.length - 1]);
    return extension !== "" && extension !== ".md";
}
