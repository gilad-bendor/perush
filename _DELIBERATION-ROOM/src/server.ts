/**
 * server.ts — Bun web server (HTTP + WebSocket), main entry point.
 *
 * Serves static frontend files, REST API for meeting management,
 * and WebSocket for real-time deliberation communication.
 *
 * Imports from: orchestrator.ts, types.ts, config.ts, context.ts
 */

import { runWithContext } from "./context";
import { join, extname } from "path";
import { readFile, stat } from "fs/promises";
import { SERVER_PORT, DELIBERATION_DIR } from "./config";
import { ClientMessageSchema, type ServerMessage, type SpeakerId } from "./types";
import {
  setEventHandlers,
  startMeeting,
  runCycle,
  endCurrentMeeting,
  handleHumanSpeech,
  handleAttention,
  handleRollback,
  resumeMeetingById,
  getMeeting,
  getPhase,
} from "./orchestrator";
import {
  discoverAgents,
  getAgentDefinitions,
} from "./session-manager";
import {
  listMeetings,
  readEndedMeeting,
} from "./meetings-db.ts";

import {prettyLog} from "./utils.ts";
import {logDebug, logError, wrapDanglingPromise} from "./logs.ts";

// ---------------------------------------------------------------------------
// MIME types for static file serving
// ---------------------------------------------------------------------------

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

// ---------------------------------------------------------------------------
// Static file serving
// ---------------------------------------------------------------------------

/**
 * Serve a static file from a public directory.
 * Returns a 404 Response if the file doesn't exist or isn't a regular file.
 */
export async function serveStaticFile(
  pathname: string,
  publicDir: string,
  mimeTypes: Record<string, string>,
): Promise<Response> {
  const filePath = (pathname === "/" || pathname === "")
    ? join(publicDir, "index.html")
    : join(publicDir, pathname);

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      return new Response("Not found", { status: 404 });
    }

    const content = await readFile(filePath);
    const ext = extname(filePath);
    const contentType = mimeTypes[ext] || "application/octet-stream";

    return new Response(content, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

// ---------------------------------------------------------------------------
// WebSocket connection tracking
// ---------------------------------------------------------------------------

const connectedClients = new Set<ServerWebSocket<unknown>>();

type ServerWebSocket<T> = {
  send(data: string | ArrayBuffer): void;
  close(): void;
  data: T;
};

// ---------------------------------------------------------------------------
// Server message ID counter
// ---------------------------------------------------------------------------

let serverMessageSeq = 0;

/** Returns the next server message ID: "S1", "S2", ... */
function nextServerMessageId(): string {
  return `S${++serverMessageSeq}`;
}

/** Distributes Omit across union members, preserving the discriminated union. */
type DistributiveOmit<T, K extends string> = T extends unknown ? Omit<T, K> : never;

/** Message body without messageId — callers don't assign IDs, broadcast/sendTo do. */
type ServerMessageBody = DistributiveOmit<ServerMessage, "messageId">;

/** Broadcast a message to all connected WebSocket clients. */
function broadcast(message: ServerMessageBody): void {
  const messageId = nextServerMessageId();
  const withId = { messageId, ...message };
  logDebug("server", `WS >>> (broadcast) ${message.type} (${messageId})\n${prettyLog(withId).replace(/^/gm, '    ')}`);
  const json = JSON.stringify(withId);
  for (const ws of connectedClients) {
    try {
      ws.send(json);
    } catch {
      connectedClients.delete(ws);
    }
  }
}

/** Send a message to a single client. */
function sendTo(ws: ServerWebSocket<unknown>, message: ServerMessageBody): void {
  const messageId = nextServerMessageId();
  const withId = { messageId, ...message };
  logDebug("server", `WS >-> (sendTo) ${message.type} (${messageId})\n${prettyLog(withId)}`);
  try {
    ws.send(JSON.stringify(withId));
  } catch {
    connectedClients.delete(ws);
  }
}

// ---------------------------------------------------------------------------
// Wire orchestrator events to WebSocket broadcasts
// ---------------------------------------------------------------------------

function setupOrchestratorEvents(): void {
  setEventHandlers({
    onPhaseChange: (phase, activeSpeaker) => {
      broadcast({ type: "phase", phase, activeSpeaker });
    },
    onSpeech: (speaker, content, timestamp) => {
      broadcast({ type: "speech", speaker, content, timestamp });
    },
    onSpeechChunk: (speaker, delta) => {
      broadcast({ type: "speech-chunk", speaker, delta });
    },
    onSpeechDone: (speaker) => {
      broadcast({ type: "speech-done", speaker });
    },
    onAssessment: (assessment) => {
      broadcast({
        type: "assessment",
        agent: assessment.agent,
        selfImportance: assessment.selfImportance,
        humanImportance: assessment.humanImportance,
        summary: assessment.summary,
      });
    },
    onVibe: (vibe, nextSpeaker) => {
      broadcast({ type: "vibe", vibe, nextSpeaker });
    },
    onYourTurn: () => {
      broadcast({ type: "your-turn" });
    },
    onError: (message) => {
      broadcast({ type: "error", message });
    },
    onSync: (meeting, currentPhase, readOnly, editingCycle) => {
      broadcast({ type: "sync", meeting, currentPhase, readOnly, editingCycle });
    },
  });
}

// ---------------------------------------------------------------------------
// Active deliberation loop tracking
// ---------------------------------------------------------------------------

let deliberationLoopActive = false;

/**
 * Run the deliberation loop: cycles run until the meeting ends.
 * Each cycle takes the last speech and runs: assess → select → speak.
 */
async function runDeliberationLoop(lastSpeaker: SpeakerId, lastContent: string): Promise<void> {
  logDebug("server", `deliberation loop starting (lastSpeaker=${lastSpeaker})`);
  deliberationLoopActive = true;
  let speaker: SpeakerId = lastSpeaker;
  let content = lastContent;

  while (deliberationLoopActive && getMeeting()) {
    try {
      const cycle = await runCycle(speaker, content);
      if (!cycle || !deliberationLoopActive) break;

      // Next cycle uses this cycle's speech as context
      speaker = cycle.speech.speaker;
      content = cycle.speech.content;
    } catch (err: any) {
      if (err?.message?.includes("Director timeout")) {
        broadcast({ type: "error", message: "המנחה לא הגיב — הדיון מושהה." });
        break;
      }
      broadcast({ type: "error", message: `Cycle error: ${err?.message || err}` });
      break;
    }
  }

  logDebug("server", `deliberation loop ended`);
  deliberationLoopActive = false;
}

function stopDeliberationLoop(): void {
  logDebug("server", `deliberation loop stopped`);
  deliberationLoopActive = false;
}

// ---------------------------------------------------------------------------
// WebSocket message handler
// ---------------------------------------------------------------------------

async function handleWsMessage(ws: ServerWebSocket<unknown>, raw: string): Promise<void> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    sendTo(ws, { type: "error", message: "Invalid JSON" });
    return;
  }

  const result = ClientMessageSchema.safeParse(parsed);
  if (!result.success) {
    sendTo(ws, { type: "error", message: `Invalid message: ${result.error.message}` });
    return;
  }

  const msg = result.data;

  // Run the handler within the context of this client message.
  // All console output (including from async continuations) will be prefixed with its messageId.
  return runWithContext(msg, async () => {
    logDebug("server", `WS <<< ${msg.type}\n${prettyLog(msg).replace(/^/gm, '    ')}`);

    switch (msg.type) {
      case "start-meeting": {
        try {
          const meeting = await startMeeting(msg.title, msg.openingPrompt, msg.participants);
          broadcast({
            type: "sync",
            meeting,
            currentPhase: getPhase(),
          });
          // Start the deliberation loop with the opening prompt
          wrapDanglingPromise(
              "server",
              "Start deliberation after human's meeting-opening prompt",
              runDeliberationLoop("human", msg.openingPrompt),
          );
        } catch (err: any) {
          sendTo(ws, { type: "error", message: err?.message || "Failed to start meeting" });
        }
        break;
      }

      case "resume-meeting": {
        try {
          const meeting = await resumeMeetingById(msg.meetingId);
          broadcast({
            type: "sync",
            meeting,
            currentPhase: getPhase(),
          });
          // Resume the deliberation loop from the last speech
          const lastCycle = meeting.cycles[meeting.cycles.length - 1];
          if (lastCycle) {
            wrapDanglingPromise(
                "server",
                `Start deliberation after ${lastCycle.speech.speaker}'s prompt`,
                runDeliberationLoop(lastCycle.speech.speaker, lastCycle.speech.content),
            );
          } else {
            // No cycles yet — resume from opening prompt
            wrapDanglingPromise(
                "server",
                `Start deliberation after human's prompt`,
                runDeliberationLoop("human", meeting.openingPrompt),
            );
          }
        } catch (err: any) {
          sendTo(ws, { type: "error", message: err?.message || "Failed to resume meeting" });
        }
        break;
      }

      case "view-meeting": {
        try {
          const meetingData = await readEndedMeeting(msg.meetingId);
          sendTo(ws, {
            type: "sync",
            meeting: meetingData,
            currentPhase: "idle",
            readOnly: true,
          });
        } catch (err: any) {
          sendTo(ws, { type: "error", message: `Failed to load meeting: ${err?.message}` });
        }
        break;
      }

      case "join-meeting": {
        try {
          // If this meeting is currently active, send live state (lightweight)
          const activeMeeting = getMeeting();
          if (activeMeeting && activeMeeting.meetingId === msg.meetingId) {
            sendTo(ws, {
              type: "sync",
              meeting: activeMeeting,
              currentPhase: getPhase(),
            });
          } else {
            // Not active — view-only from git
            const meetingData = await readEndedMeeting(msg.meetingId);
            sendTo(ws, {
              type: "sync",
              meeting: meetingData,
              currentPhase: "idle",
              readOnly: true,
            });
          }
        } catch (err: any) {
          sendTo(ws, { type: "error", message: `Failed to join meeting: ${err?.message}` });
        }
        break;
      }

      case "human-speech": {
        handleHumanSpeech(msg.content);
        break;
      }

      case "command": {
        if (msg.command === "/end") {
          try {
            stopDeliberationLoop();
            await endCurrentMeeting();
            broadcast({ type: "phase", phase: "idle" });
          } catch (err: any) {
            sendTo(ws, { type: "error", message: err?.message || "Failed to end meeting" });
          }
        }
        break;
      }

      case "attention": {
        handleAttention();
        sendTo(ws, { type: "attention-ack" });
        break;
      }

      case "rollback": {
        try {
          stopDeliberationLoop();
          await handleRollback(msg.targetCycleNumber, (step, detail) => {
            broadcast({
              type: "rollback-progress",
              step: step as any,
              detail,
            });
          });
          // After rollback completes, the orchestrator sends sync with editingCycle.
          // The deliberation loop will restart when the Director submits their edited message.
        } catch (err: any) {
          sendTo(ws, { type: "error", message: err?.message || "Rollback failed" });
        }
        break;
      }
    }

    logDebug("server", `WS --- ${msg.type} done`);
  }); // end runWithContext
}

// ---------------------------------------------------------------------------
// HTTP request handler
// ---------------------------------------------------------------------------

const PUBLIC_DIR = join(DELIBERATION_DIR, "public");

async function handleHttpRequest(req: Request, server: any): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // WebSocket upgrade
  if (pathname === "/ws") {
    const success = server.upgrade(req);
    if (success) return new Response(null, { status: 101 });
    return new Response("WebSocket upgrade failed", { status: 400 });
  }

  // REST API
  if (pathname === "/api/agents") {
    try {
      const agents = getAgentDefinitions();
      return Response.json(agents);
    } catch {
      // Agents not yet discovered
      const agents = await discoverAgents();
      return Response.json(agents);
    }
  }

  if (pathname === "/api/meetings") {
    const meetings = await listMeetings();
    return Response.json(meetings);
  }

  // SPA catch-all: /meeting/* paths are handled by the frontend router
  if (pathname.startsWith("/meeting/")) {
    return serveStaticFile("/", PUBLIC_DIR, MIME_TYPES);
  }

  // Static file serving
  return serveStaticFile(pathname, PUBLIC_DIR, MIME_TYPES);
}

// ---------------------------------------------------------------------------
// Server startup
// ---------------------------------------------------------------------------

/** Start the Bun web server. Returns the server instance. */
export async function createServer(port: number = SERVER_PORT): Promise<ReturnType<typeof Bun.serve>> {
  // Discover agents at startup
  await discoverAgents();

  // Wire events
  setupOrchestratorEvents();

  return Bun.serve({
    port,
    fetch(req, server) {
      return handleHttpRequest(req, server);
    },
    websocket: {
      open(ws) {
        connectedClients.add(ws as any);
        logDebug("server", `WS client connected (total: ${connectedClients.size})`);
      },
      message(ws, message) {
        const raw = typeof message === "string" ? message : message.toString();
        handleWsMessage(ws as any, raw);
      },
      close(ws) {
        connectedClients.delete(ws as any);
        logDebug("server", `WS client disconnected (total: ${connectedClients.size})`);
      },
    },
  });
}

// ---------------------------------------------------------------------------
// Graceful shutdown
// ---------------------------------------------------------------------------

async function gracefulShutdown(server: ReturnType<typeof Bun.serve>): Promise<void> {
  logDebug("server", `graceful shutdown initiated (${connectedClients.size} client(s), meeting=${getMeeting()?.meetingId ?? "none"})`);

  // Notify clients
  broadcast({ type: "error", message: "Server shutting down" });

  // Stop deliberation loop
  stopDeliberationLoop();

  // End active meeting if any
  if (getMeeting()) {
    try {
      await endCurrentMeeting();
    } catch (err) {
      logError("server", "Error ending meeting during shutdown", err);
    }
  }

  // Close all WebSocket connections
  for (const ws of connectedClients) {
    try { ws.close(); } catch {}
  }
  connectedClients.clear();

  // Stop the server
  server.stop();

  logDebug("server", `shutdown complete`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Main entry point (when run directly)
// ---------------------------------------------------------------------------

if (import.meta.main) {
  const server = await createServer();
  logDebug("server", `Deliberation Room server running on http://localhost:${server.port}`);

  process.on("SIGINT", () => gracefulShutdown(server));
  process.on("SIGTERM", () => gracefulShutdown(server));
}

// ---------------------------------------------------------------------------
// Exports for testing
// ---------------------------------------------------------------------------

export {
  broadcast,
  handleWsMessage,
  connectedClients,
  handleHttpRequest,
  stopDeliberationLoop,
  setupOrchestratorEvents,
};
