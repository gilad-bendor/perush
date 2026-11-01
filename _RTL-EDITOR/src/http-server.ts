// A web server on node:http whose handler speaks the Web's Request and Response, as the server's own does:
// each request is made a Request, handed to `fetch`, and its Response written back - status, headers, body.

import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import { extname } from "node:path";
import { Readable } from "node:stream";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";

/** The Content-Type of a file served as it is, by its extension - application/octet-stream for any other. */
const MIME_TYPES: Record<string, string> = {
    ".html": "text/html; charset=utf-8",
    ".htm": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".pdf": "application/pdf",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".otf": "font/otf",
};

export function mimeTypeOf(path: string): string {
    return MIME_TYPES[extname(path).toLowerCase()] ?? "application/octet-stream";
}

/** The request node:http received, as a Web Request - its URL whole, with the host it was asked of. */
function toRequest(incoming: IncomingMessage): Request {
    const url = new URL(incoming.url ?? "/", `http://${incoming.headers.host ?? "localhost"}`);
    const headers = new Headers();
    for (const [name, value] of Object.entries(incoming.headers)) {
        if (value === undefined) continue;
        for (const one of Array.isArray(value) ? value : [value]) headers.append(name, one);
    }
    const hasBody = incoming.method !== "GET" && incoming.method !== "HEAD";
    return new Request(url, {
        method: incoming.method,
        headers,
        body: hasBody ? Readable.toWeb(incoming) as ReadableStream : undefined,
        // A streamed body has to say so.
        ...(hasBody ? { duplex: "half" } : {}),
    } as RequestInit);
}

/** A Response written back to node:http - its body streamed as it comes. */
async function send(response: Response, outgoing: ServerResponse): Promise<void> {
    const headers: Record<string, string | string[]> = {};
    response.headers.forEach((value, name) => { if (name !== "set-cookie") headers[name] = value; });
    const cookies = response.headers.getSetCookie();
    if (cookies.length) headers["set-cookie"] = cookies;
    outgoing.writeHead(response.status, response.statusText || undefined, headers);
    if (!response.body) {
        outgoing.end();
        return;
    }
    await new Promise<void>((resolve, reject) => {
        Readable.fromWeb(response.body as NodeReadableStream).on("error", reject).pipe(outgoing).on("finish", resolve).on("error", reject);
    });
}

/** Listens on `port`, answering every request with what `fetch` makes of it; one that throws is a 500. */
export function serve({ port, fetch }: { port: number, fetch: (request: Request) => Response | Promise<Response> }): Server {
    const server = createServer(async (incoming, outgoing) => {
        try {
            await send(await fetch(toRequest(incoming)), outgoing);
        } catch (error) {
            console.error(`${incoming.method} ${incoming.url}:`, error);
            if (!outgoing.headersSent) outgoing.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            outgoing.end("Internal Server Error");
        }
    });
    server.listen(port);
    return server;
}
