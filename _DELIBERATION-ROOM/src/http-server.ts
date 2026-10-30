/**
 * http-server.ts — A web server on node:http whose handler speaks the Web's Request and Response, as the
 * server's own handler (handleHttpRequest) does: each request is made a Request, handed to `fetch`, and its
 * Response written back - status, headers, body. The WebSocket is attached by server.ts (the `upgrade` event).
 *
 * Imports from: (no src/ imports)
 */

import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { Readable } from "node:stream";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";

/** The request node:http received, as a Web Request - its URL whole, with the host it was asked of. */
export function toRequest(incoming: IncomingMessage): Request {
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

type FetchHandler = (request: Request) => Response | Promise<Response>;

/** A node:http server (not yet listening) answering every request with what `fetch` makes of it; one that throws is a 500. */
export function createWebServer(fetch: FetchHandler): Server {
  return createServer(async (incoming, outgoing) => {
    try {
      await send(await fetch(toRequest(incoming)), outgoing);
    } catch (error) {
      console.error(`${incoming.method} ${incoming.url}:`, error);
      if (!outgoing.headersSent) outgoing.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      outgoing.end("Internal Server Error");
    }
  });
}

/** createWebServer(), listening on `port` (0: any free port). Resolves once listening - rejects if the port can't be had. */
export async function serve({ port, fetch }: { port: number; fetch: FetchHandler }): Promise<Server> {
  const server = createWebServer(fetch);
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, () => {
      server.off("error", reject);
      resolve();
    });
  });
  return server;
}

/** The port a listening server is on */
export function portOf(server: Server): number {
  return (server.address() as AddressInfo).port;
}
