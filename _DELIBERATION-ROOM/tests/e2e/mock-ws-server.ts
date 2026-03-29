/**
 * mock-ws-server.ts — Mock WebSocket server for deterministic frontend E2E tests.
 *
 * Replays canned event sequences so tests don't need the real server/orchestrator.
 * Also serves the static frontend files.
 */

import { join } from "path";
import { serveStaticFile } from "../../src/server";

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const PUBLIC_DIR = join(import.meta.dir, "../../public");

export interface MockEvent {
  delay?: number; // ms to wait before sending
  message: Record<string, unknown>;
}

export interface MockAgentDef {
  id: string;
  englishName: string;
  hebrewName: string;
  roleTitle: string;
  orchestratorIntro: string;
  orchestratorTip: string;
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
}

const DEFAULT_AGENTS: MockAgentDef[] = [
  {
    id: "milo",
    englishName: "Milo",
    hebrewName: "מיילו",
    roleTitle: "המילונאי",
    orchestratorIntro: "Dictionary Purist",
    orchestratorTip: "Bring in for dictionary checks",
    filePath: "participant-agents/milo.md",
  },
  {
    id: "archi",
    englishName: "Archi",
    hebrewName: "ארצ'י",
    roleTitle: "האדריכל",
    orchestratorIntro: "Architect",
    orchestratorTip: "Bring in for structural analysis",
    filePath: "participant-agents/archi.md",
  },
  {
    id: "kashia",
    englishName: "Kashia",
    hebrewName: "קשיא",
    roleTitle: "המבקר",
    orchestratorIntro: "Skeptic",
    orchestratorTip: "Bring in to challenge interpretations",
    filePath: "participant-agents/kashia.md",
  },
  {
    id: "barak",
    englishName: "Barak",
    hebrewName: "ברק",
    roleTitle: "ההברקה",
    orchestratorIntro: "Ideator",
    orchestratorTip: "Bring in for creative insight",
    filePath: "participant-agents/barak.md",
  },
];

type ServerWebSocket<T> = {
  send(data: string | ArrayBuffer): void;
  close(): void;
  data: T;
};

export function createMockServer(options: MockServerOptions = {}) {
  const {
    port = 4200,
    agents = DEFAULT_AGENTS,
    meetings = [],
    onConnectEvents = [],
    onMessageEvents = {},
  } = options;

  const clients = new Set<ServerWebSocket<unknown>>();

  async function sendSequence(ws: ServerWebSocket<unknown>, events: MockEvent[]) {
    for (const event of events) {
      if (event.delay) {
        await new Promise((r) => setTimeout(r, event.delay));
      }
      try {
        ws.send(JSON.stringify(event.message));
      } catch {}
    }
  }

  const server = Bun.serve({
    port,
    async fetch(req, server) {
      const url = new URL(req.url);
      const pathname = url.pathname;

      // WebSocket upgrade
      if (pathname === "/ws") {
        const success = server.upgrade(req);
        if (success) return new Response(null, { status: 101 });
        return new Response("WebSocket upgrade failed", { status: 400 });
      }

      // Mock API
      if (pathname === "/api/agents") {
        return Response.json(agents);
      }
      if (pathname === "/api/meetings") {
        return Response.json(meetings);
      }

      // SPA catch-all: /meeting/* paths served by the frontend router
      if (pathname.startsWith("/meeting/")) {
        return serveStaticFile("/", PUBLIC_DIR, MIME_TYPES);
      }

      // Static files
      return serveStaticFile(pathname, PUBLIC_DIR, MIME_TYPES);
    },
    websocket: {
      open(ws) {
        clients.add(ws as any);
        if (onConnectEvents.length > 0) {
          sendSequence(ws as any, onConnectEvents).catch(console.error);
        }
      },
      message(ws, message) {
        const raw = typeof message === "string" ? message : new TextDecoder().decode(message as unknown as ArrayBuffer);
        try {
          const parsed = JSON.parse(raw);
          const typeEvents = onMessageEvents[parsed.type];
          if (typeEvents) {
            sendSequence(ws as any, typeEvents).catch(console.error);
          }
        } catch {}
      },
      close(ws) {
        clients.delete(ws as any);
      },
    },
  });

  return {
    server,
    port: server.port,
    url: `http://localhost:${server.port}`,
    stop: () => server.stop(true),
    broadcast: (msg: Record<string, unknown>) => {
      const json = JSON.stringify(msg);
      for (const ws of clients) {
        try { ws.send(json); } catch {}
      }
    },
  };
}

// Run standalone if executed directly
if (import.meta.main) {
  const mock = createMockServer({
    port: 4200,
    onConnectEvents: [
      { message: { type: "phase", phase: "idle" } },
    ],
  });
  console.log(`Mock WS server running on ${mock.url}`);
}
