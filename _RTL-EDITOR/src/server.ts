import { file, serve } from "bun";
import { join, extname, basename, dirname } from "path";
import { readdir, stat, readFile, writeFile, mkdir, rename, unlink } from "fs/promises";
import { watch } from "fs";
import { renderTerminalOutput } from "./terminal-render";
// The very module the browser loads - so that a table is laid out identically on both sides.
import { formatTables, isAiGeneratedFile } from "../public/src/tables.js";
import { diffSnapshots, FsChangeLog, isIgnoredWatchPath, snapshotOfTree } from "./fs-changes";
import type { FileSystemChange } from "./fs-changes";

const PORT = 4000;
const MARKDOWN_DIR = "..";

const exclusions = new Set(["scripts", ".idea", ".git", ".DS_Store"]);

export type FileData = {
    name: string;
    type: "directory" | "file";
    path: string;
    children: FileData[];
};

async function ensureMarkdownDir() {
    try {
        await stat(MARKDOWN_DIR);
    } catch {
        await mkdir(MARKDOWN_DIR, { recursive: true });
    }
}

async function getMarkdownFiles(dir: string, basePath = ""): Promise<FileData[]> {
    try {
        const entries = await readdir(dir, { withFileTypes: true });
        const files: any[] = [];

        for (const entry of entries) {
            if (exclusions.has(entry.name)) {
                continue;
            }
            const fullPath = join(dir, entry.name);
            const relativePath = join(basePath, entry.name);

            // Use stat() instead of checking entry type to follow symbolic links
            let stats;
            try {
                stats = await stat(fullPath);
            } catch {
                // Skip entries that can't be accessed
                continue;
            }

            if (stats.isDirectory()) {
                // Symlinks to directories are not followed (avoids cycles / duplicate trees).
                // Symlinks to files are listed like regular files.
                if (entry.isSymbolicLink()) {
                    continue;
                }
                const children = await getMarkdownFiles(fullPath, relativePath);
                // Only include directories that have .md file descendants
                if (children.length > 0) {
                    files.push({
                        name: entry.name,
                        type: "directory",
                        path: relativePath,
                        children
                    });
                }
            } else if (stats.isFile() && extname(entry.name) === ".md") {
                files.push({
                    name: entry.name,
                    type: "file",
                    path: relativePath
                });
            }
        }

        return files.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === "directory" ? -1 : 1;
        });
    } catch {
        return [];
    }
}

// ----------------------------------------------------------------------------------------------
// Watching the tree
//
// The client is told what has appeared and disappeared as an aside to the polling it already does
// (see the /api/file GET handler). What the server has to do for that is notice the changes.
//
// It notices them by *rescanning*: any event from the watcher schedules a fresh walk of the tree,
// and the difference against the previous snapshot is what gets logged. A walk costs ~20ms and
// only happens when something actually moved, and in exchange the raw events - which on macOS say
// only "rename <path>", and which a folder moved in or out of the tree may report as a single
// event for the folder alone - never have to be interpreted. See diffSnapshots().
//
// A periodic rescan backs the watcher up, because fs.watch is allowed to drop events, and because
// a recursive watch is not supported everywhere.

const fsChangeLog = new FsChangeLog();
let fsSnapshot = new Set<string>();

/** How long to let events settle before rescanning - one rescan for a burst of them. */
const RESCAN_DEBOUNCE_MS = 150;
/** The safety net, for events the watcher never delivered. */
const RESCAN_INTERVAL_MS = 15_000;

let rescanTimer: ReturnType<typeof setTimeout> | null = null;
let rescanning: Promise<void> | null = null;

async function rescanTree(): Promise<void> {
    // One at a time: a burst of events must not have two walks racing to log the same difference.
    if (rescanning) return rescanning;
    rescanning = (async () => {
        try {
            const nextSnapshot = snapshotOfTree(await getMarkdownFiles(MARKDOWN_DIR));
            const changes = diffSnapshots(fsSnapshot, nextSnapshot);
            fsSnapshot = nextSnapshot;
            if (changes.length) {
                fsChangeLog.record(changes);
                console.log(`Filesystem: ${changes.map(c => `${c.changeType[0]} ${c.path}`).join(", ")}`);
            }
        } catch (error) {
            console.error("Failed to rescan the tree:", error);
        } finally {
            rescanning = null;
        }
    })();
    return rescanning;
}

function scheduleRescan() {
    if (rescanTimer) clearTimeout(rescanTimer);
    rescanTimer = setTimeout(() => {
        rescanTimer = null;
        void rescanTree();
    }, RESCAN_DEBOUNCE_MS);
}

async function startWatchingTree() {
    fsSnapshot = snapshotOfTree(await getMarkdownFiles(MARKDOWN_DIR));
    fsChangeLog.startCovering();

    try {
        watch(MARKDOWN_DIR, { recursive: true }, (_eventType, filename) => {
            if (isIgnoredWatchPath(filename && String(filename), exclusions)) return;
            scheduleRescan();
        });
    } catch (error) {
        console.error("Cannot watch the tree - falling back on the periodic rescan:", error);
    }
    setInterval(() => void rescanTree(), RESCAN_INTERVAL_MS);
}

/**
 * What to tell a client about the tree, given the cursor it sent with its request.
 *
 * The cursor is a "serverTimestamp" this server handed out earlier - never the client's own clock.
 * A client with no cursor yet (its first request) is simply given one. A cursor the log cannot
 * answer for - from before this server started, or from beyond the log's window - gets
 * `fsChangesUnknown`, which asks the client to fetch the whole tree again rather than to believe
 * that nothing has happened.
 */
function fileSystemChangesSince(url: URL): {
    serverTimestamp: number;
    recentFsChanges?: FileSystemChange[];
    fsChangesUnknown?: true;
} {
    const since = Number(url.searchParams.get("since"));
    if (!Number.isFinite(since) || since <= 0) {
        return { serverTimestamp: fsChangeLog.now() };
    }
    const changes = fsChangeLog.since(since);
    if (changes === null) {
        return { serverTimestamp: fsChangeLog.now(), fsChangesUnknown: true };
    }
    return {
        serverTimestamp: fsChangeLog.now(),
        ...(changes.length ? { recentFsChanges: changes } : {}),
    };
}

serve({
    port: PORT,
    async fetch(request) {
        const url = new URL(request.url);

        if (url.pathname === "/") {
            return new Response(await file("./public/index.html").text(), {
                headers: { "Content-Type": "text/html" }
            });
        }

        if (url.pathname.startsWith("/public/")) {
            const filePath = `.${url.pathname}`;
            try {
                const content = await file(filePath).arrayBuffer();
                const mimeType = filePath.endsWith(".css") ? "text/css" :
                    filePath.endsWith(".js") ? "application/javascript" : "text/plain";
                return new Response(content, {
                    headers: { "Content-Type": mimeType }
                });
            } catch {
                return new Response("Not Found", { status: 404 });
            }
        }

        // Serve node_modules for frontend imports
        if (url.pathname.startsWith("/node_modules/")) {
            const filePath = `.${url.pathname}`;
            try {
                const content = await file(filePath).arrayBuffer();
                return new Response(content, {
                    headers: { "Content-Type": "application/javascript" }
                });
            } catch {
                return new Response("Not Found", { status: 404 });
            }
        }

        if (url.pathname === "/api/files") {
            await ensureMarkdownDir();
            const files = await getMarkdownFiles(MARKDOWN_DIR);
            // The cursor comes with the tree, and not from the client's first file poll a moment
            // later: a file created in between would otherwise be in neither, and the tree would
            // stay wrong until the next change.
            return new Response(JSON.stringify({ files, serverTimestamp: fsChangeLog.now() }), {
                headers: { "Content-Type": "application/json" }
            });
        }

        if (url.pathname.startsWith("/api/file/")) {
            const filePath = decodeURIComponent(url.pathname.slice(10));
            const fullPath = join(MARKDOWN_DIR, filePath);

            // Check if the file was generated by executing "script <file> clause ..."
            // This is designed to support scripts/claude-into-rtl-file.sh
            const isScriptOutputFile = filePath.endsWith(".script.rtl.md") || filePath.endsWith(".script.md");

            if (request.method === "GET") {
                try {
                    let content = await readFile(fullPath, "utf-8");

                    if (isScriptOutputFile) {
                        // See comment of isScriptOutputFile:
                        // The recording is a raw VT/xterm control stream rather than text -
                        // replay it through a terminal emulator to recover what was on screen.
                        content = await renderTerminalOutput(content, { maxConsecutiveBlankLines: 1 });
                        // Swap → and ←: the recorded glyphs are the ones the LTR terminal
                        // showed, and the editor re-renders them in an RTL context.
                        // Box-drawing characters used to be swapped here too; the editor's
                        // table formatter now decides their direction for every file alike
                        // (see formatTables() in public/src/tables.js).
                        for (const [a,b] of ["←→"]) {
                            content = content
                                .replace(new RegExp(a, "g"), "\u0000")
                                .replace(new RegExp(b, "g"), a)
                                .replace(/\u0000/g, b);
                        }
                        // Trim out line-suffixes of at least 3 spaces (2 spaces may be Markdown syntax).
                        content = content
                            .replace(/   +$/gm, "");
                    }

                    return new Response(JSON.stringify({
                        content,
                        readOnly: isScriptOutputFile || undefined,
                        ...fileSystemChangesSince(url),
                    }), {
                        headers: { "Content-Type": "application/json" }
                    });
                } catch {
                    // The changes travel with the 404 as well: a client whose only open tab is a
                    // file that does not exist still has to hear about the rest of the tree.
                    return new Response(JSON.stringify({
                        error: "File not found",
                        ...fileSystemChangesSince(url),
                    }), {
                        status: 404,
                        headers: { "Content-Type": "application/json" }
                    });
                }
            }

            if (request.method === "POST") {
                try {
                    const { content } = await request.json();
                    if (isScriptOutputFile) {
                        throw new Error("File was generated by \"script <file> clause ...\" - and can't be written");
                    }
                    // The editor mirrors a table's box characters in an RTL file, because that is
                    // what draws a closed box once the browser applies bidi to the line. On disk we
                    // want the plain, un-mirrored spelling, so that the file reads correctly in git
                    // and in every other tool - which is what laying the tables out as LTR gives us.
                    // Re-formatting here is also a safety net for a client that did not format.
                    // An AI-generated file is exempt: it is stored exactly as the model wrote it.
                    const contentForDisk = isAiGeneratedFile(filePath)
                        ? content
                        : formatTables(content, false).content;
                    await writeFileSafe(fullPath, contentForDisk);
                    return new Response(JSON.stringify({ success: true }), {
                        headers: { "Content-Type": "application/json" }
                    });
                } catch(error) {
                    return new Response(JSON.stringify({ error: "Failed to save file: " + error }), {
                        status: 500,
                        headers: { "Content-Type": "application/json" }
                    });
                }
            }
        }

        return new Response("Not Found", { status: 404 });
    }
});

// Like fs.promises.writeFile() with these differences:
// 1. "Safe": will never write half-file.
// 2. Will auto-create the directory if it does not exist.
// We first write to a temporary file, and then rename it to the final file -
//  so the operation is atomic (more thread-safe and crash-resilient).
async function writeFileSafe(filePath: string, fileContents: string): Promise<void> {
    const tmpFilePath = join(
        dirname(filePath),
        `.tmp.${basename(filePath)}.${Math.random().toString(36).substring(2)}`,
    );

    // Write the temporary file - with auto-creation of the directory.
    try {
        await writeFile(tmpFilePath, fileContents, 'utf-8');
    } catch (error) {
        if ((error as any).code !== 'ENOENT') {
            throw error;
        }
        // Maybe the directory does not exist - create the directory and try to write the temporary file again.
        await mkdir(dirname(tmpFilePath), { recursive: true });
        await writeFile(tmpFilePath, fileContents, 'utf-8');
    }

    // Move the temporary file over the final file - this is atomic and thread-safe.
    try {
        await rename(tmpFilePath, filePath);
    } catch (error) {
        // Something went wrong when moving the temporary file over the final file: cleanup and throw.
        try {
            await unlink(tmpFilePath);
        } catch {}
        throw error;
    }
}

console.log(`Server running at http://localhost:${PORT}`);

// Take the first snapshot and start watching. Until this finishes, the change log answers "I cannot
// tell" to any cursor - so a client that polls in the meantime fetches the tree again, rather than
// being told that nothing has happened.
void startWatchingTree().then(
    () => console.log(`Watching ${fsSnapshot.size} files and folders under ${MARKDOWN_DIR}`),
    (error) => console.error("Failed to start watching the tree:", error),
);