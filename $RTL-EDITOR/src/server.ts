import { file, serve } from "bun";
import { join, extname, basename, dirname } from "path";
import { readdir, stat, readFile, writeFile, mkdir, rename, unlink } from "fs/promises";

const PORT = 4000;
const MARKDOWN_DIR = "..";

const exclusions = new Set(["$RTL-EDITOR", "scripts", ".idea", ".git", ".DS_Store"]);

async function ensureMarkdownDir() {
    try {
        await stat(MARKDOWN_DIR);
    } catch {
        await mkdir(MARKDOWN_DIR, { recursive: true });
    }
}

async function getMarkdownFiles(dir: string, basePath = ""): Promise<any[]> {
    try {
        const entries = await readdir(dir, { withFileTypes: true });
        const files: any[] = [];

        for (const entry of entries) {
            if (exclusions.has(entry.name)) {
                continue;
            }
            const fullPath = join(dir, entry.name);
            const relativePath = join(basePath, entry.name);

            if (entry.isDirectory()) {
                const children = await getMarkdownFiles(fullPath, relativePath);
                files.push({
                    name: entry.name,
                    type: "directory",
                    path: relativePath,
                    children
                });
            } else if (entry.isFile() && extname(entry.name) === ".md") {
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

        if (url.pathname === "/api/files") {
            await ensureMarkdownDir();
            const files = await getMarkdownFiles(MARKDOWN_DIR);
            return new Response(JSON.stringify(files), {
                headers: { "Content-Type": "application/json" }
            });
        }

        if (url.pathname.startsWith("/api/file/")) {
            const filePath = decodeURIComponent(url.pathname.slice(10));
            const fullPath = join(MARKDOWN_DIR, filePath);

            if (request.method === "GET") {
                try {
                    const content = await readFile(fullPath, "utf-8");
                    return new Response(JSON.stringify({ content }), {
                        headers: { "Content-Type": "application/json" }
                    });
                } catch {
                    return new Response(JSON.stringify({ error: "File not found" }), {
                        status: 404,
                        headers: { "Content-Type": "application/json" }
                    });
                }
            }

            if (request.method === "POST") {
                try {
                    const { content } = await request.json();
                    await writeFileSafe(fullPath, content);
                    return new Response(JSON.stringify({ success: true }), {
                        headers: { "Content-Type": "application/json" }
                    });
                } catch {
                    return new Response(JSON.stringify({ error: "Failed to save file" }), {
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