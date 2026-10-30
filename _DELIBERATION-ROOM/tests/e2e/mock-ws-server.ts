/**
 * mock-ws-server.ts — Mock WebSocket server for deterministic frontend E2E tests.
 *
 * Replays canned event sequences so tests don't need the real server/orchestrator.
 * Also serves the static frontend files.
 */

import { join } from "path";
import { realpathSync } from "node:fs";
import { WebSocketServer, type WebSocket } from "ws";
import { serveStaticFile } from "../../src/server.ts";
import { createWebServer } from "../../src/http-server.ts";

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const PUBLIC_DIR = join(import.meta.dirname, "../../public");

export interface MockEvent {
  delay?: number; // ms to wait before sending
  message: Record<string, unknown>;
}

export interface MockAgentDef {
  id: string;
  englishName: string;
  hebrewName: string;
  roleTitle: string;
  introForOthers: string;
  noteForOrchestrator: string;
  filePath: string;
}

export interface MockServerOptions {
  port?: number;
  agents?: MockAgentDef[];
  meetings?: Array<Record<string, unknown>>;
  /** Events to send when a client connects */
  onConnectEvents?: MockEvent[];
  /** Events to send when a specific client message type is received */
  onMessageEvents?: Record<string, MockEvent[]>;
  /** The response of /api/perush-scope */
  perushScope?: { trackedPaths: string[]; trackedPathsSource: string };
}

const DEFAULT_AGENTS: MockAgentDef[] = [
  {
    id: "milo",
    englishName: "Milo",
    hebrewName: "מיילו",
    roleTitle: "המילונאי",
    introForOthers: "Dictionary Purist",
    noteForOrchestrator: "Bring in for dictionary checks",
    filePath: "participant-agents/milo.md",
  },
  {
    id: "shalom",
    englishName: "Shalom",
    hebrewName: "שלום",
    roleTitle: "ההוליסטי",
    introForOthers: "Holistic",
    noteForOrchestrator: "Bring in for structural analysis",
    filePath: "participant-agents/shalom.md",
  },
  {
    id: "ethan",
    englishName: "Ethan",
    hebrewName: "איתן",
    roleTitle: "המבקר",
    introForOthers: "Pedantic",
    noteForOrchestrator: "Bring in to challenge interpretations",
    filePath: "participant-agents/ethan.md",
  },
  {
    id: "barak",
    englishName: "Barak",
    hebrewName: "ברק",
    roleTitle: "המבריק",
    introForOthers: "Ideator",
    noteForOrchestrator: "Bring in for creative insight",
    filePath: "participant-agents/barak.md",
  },
];

export function createMockServer(options: MockServerOptions = {}) {
  const {
    port = 4200,
    agents = DEFAULT_AGENTS,
    meetings = [],
    onConnectEvents = [],
    onMessageEvents = {},
    perushScope = { trackedPaths: ["פירוש/", "נספחים-לפירוש/"], trackedPathsSource: "src/config.ts (PERUSH_TRACKED_PATHS)" },
  } = options;

  const clients = new Set<WebSocket>();
  /** Every client message received (parsed) - for tests to assert what the client sent */
  const received: Array<Record<string, any>> = [];

  async function sendSequence(ws: WebSocket, events: MockEvent[]) {
    for (const event of events) {
      if (event.delay) {
        await new Promise((r) => setTimeout(r, event.delay));
      }
      try {
        ws.send(JSON.stringify(event.message));
      } catch {}
    }
  }

  const server = createWebServer(async (req) => {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // A WebSocket upgrade never gets here (see the "upgrade" handler below)
    if (pathname === "/ws") {
      return new Response("WebSocket upgrade failed", { status: 400 });
    }

    // Mock API
    if (pathname === "/api/agents") {
      return Response.json(agents);
    }
    if (pathname === "/api/meetings") {
      return Response.json(meetings);
    }
    if (pathname === "/api/perush-scope") {
      return Response.json(perushScope);
    }

    // SPA catch-all: /meeting/* paths served by the frontend router
    if (pathname.startsWith("/meeting/")) {
      return serveStaticFile("/", PUBLIC_DIR, MIME_TYPES);
    }

    // Static files
    return serveStaticFile(pathname, PUBLIC_DIR, MIME_TYPES);
  });

  // The WebSocket, on the same port as the server's (src/server.ts)
  const wss = new WebSocketServer({ noServer: true });
  server.on("upgrade", (req, socket, head) => {
    if (new URL(req.url ?? "/", "http://localhost").pathname !== "/ws") {
      socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
      return;
    }
    wss.handleUpgrade(req, socket, head, (ws) => {
      clients.add(ws);
      if (onConnectEvents.length > 0) {
        sendSequence(ws, onConnectEvents).catch(console.error);
      }
      ws.on("message", (data) => {
        try {
          const parsed = JSON.parse(data.toString());
          received.push(parsed);
          const typeEvents = onMessageEvents[parsed.type];
          if (typeEvents) {
            sendSequence(ws, typeEvents).catch(console.error);
          }
        } catch {}
      });
      ws.on("close", () => {
        clients.delete(ws);
      });
    });
  });

  server.listen(port);

  return {
    server,
    port,
    url: `http://localhost:${port}`,
    /** Stops at once: every WebSocket and HTTP connection is dropped */
    stop: () => {
      for (const ws of wss.clients) ws.terminate();
      wss.close();
      server.closeAllConnections();
      server.close();
    },
    received,
    broadcast: (msg: Record<string, unknown>) => {
      const json = JSON.stringify(msg);
      for (const ws of clients) {
        try { ws.send(json); } catch {}
      }
    },
  };
}

// Run standalone if executed directly (`node tests/e2e/mock-ws-server.ts`)
if (process.argv[1] && realpathSync(process.argv[1]) === import.meta.filename) {
  const mock = createMockServer({
    port: 4200,
    onConnectEvents: [
      { message: { type: "phase", phase: "idle" } },
    ],
  });
  console.log(`Mock WS server running on ${mock.url}`);
}
