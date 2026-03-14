/**
 * server.ts — Bun web server (HTTP + WebSocket), main entry point.
 *
 * Serves static frontend files, REST API for meeting management,
 * and WebSocket for real-time deliberation communication.
 *
 * Imports from: orchestrator.ts, types.ts, config.ts, context.ts
 */

import { runWithContext } from "./context";
import { join, extname, resolve } from "path";
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
  cancelHumanTurn,
} from "./orchestrator";
import {
  discoverAgents,
  getAgentDefinitions,
} from "./session-manager";
import {
  listMeetings,
  readEndedMeeting,
} from "./meetings-db.ts";

import {prettyLog, wrapDanglingPromise} from "./utils.ts";
import {logInfo, logError} from "./logs.ts";

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
  const resolvedPublicDir = resolve(publicDir);
  const filePath = (pathname === "/" || pathname === "")
    ? join(resolvedPublicDir, "index.html")
    : resolve(join(resolvedPublicDir, pathname));

  // Prevent directory traversal attacks
  if (!filePath.startsWith(resolvedPublicDir)) {
    return new Response("Not found", { status: 404 });
  }

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
  logInfo("server", `WS >>> (broadcast) ${message.type} (${messageId})\n${prettyLog(withId).replace(/^/gm, '    ')}`);
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
  logInfo("server", `WS >-> (sendTo) ${message.type} (${messageId})\n${prettyLog(withId)}`);
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
    onSpeech: (speaker, content, timestamp, cycleCost) => {
      broadcast({ type: "speech", speaker, content, timestamp, cycleCost });
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
      broadcast({ type: "sync", meeting, currentPhase, readOnly, editingCycle, paused });
    },
    onProcessStart: (processId, processKind, agent, cycleNumber) => {
      broadcast({ type: "process-start", processId, processKind, agent, cycleNumber });
    },
    onProcessEvent: (processId, eventKind, content, toolName, toolInput) => {
      broadcast({ type: "process-event", processId, eventKind, content, toolName, toolInput });
    },
    onProcessDone: (processId) => {
      broadcast({ type: "process-done", processId });
    },
  });
}

// ---------------------------------------------------------------------------
// Active deliberation loop tracking
// ---------------------------------------------------------------------------

let deliberationLoopActive = false;

/** Resolves when the deliberation loop finishes after being stopped. */
let loopDoneResolver: (() => void) | null = null;

// ---------------------------------------------------------------------------
// Pause state
// ---------------------------------------------------------------------------

/** When true, the deliberation loop will not start new cycles. */
let paused = true;

/** Resolver to unblock the loop when unpaused. */
let unpauseResolver: (() => void) | null = null;

/** Returns the current pause state. */
export function isPaused(): boolean {
  return paused;
}

/** Toggle pause and broadcast the new state. */
function togglePause(): void {
  paused = !paused;
  logInfo("server", `pause toggled → ${paused ? "PAUSED" : "PLAYING"}`);

  if (!paused && unpauseResolver) {
    // Unblock the waiting loop
    unpauseResolver();
    unpauseResolver = null;
  }

  broadcastPauseState();
}

/** Broadcast the current pause state, including whether it's actively blocking. */
function broadcastPauseState(): void {
  // "blocking" = paused AND the loop is active AND we're between cycles (idle phase)
  const blocking = paused && deliberationLoopActive && getPhase() === "idle";
  broadcast({ type: "pause-state", paused, blocking });
}

/**
 * If paused, wait until unpaused. Returns immediately if not paused.
 * Returns false if the loop was stopped while waiting.
 *
 * NOTE: Uses polling (setInterval 200ms) to detect loop-stop while paused.
 * A Promise.race approach would be cleaner, but this is acceptable for a
 * single-user app where pause/unpause is infrequent.
 */
async function waitIfPaused(): Promise<boolean> {
  if (!paused) return true;

  // Broadcast that we're blocking
  broadcastPauseState();

  // Wait for unpause or loop stop
  await new Promise<void>((resolve) => {
    unpauseResolver = resolve;

    // Also resolve if the loop is stopped
    const checkInterval = setInterval(() => {
      if (!deliberationLoopActive) {
        clearInterval(checkInterval);
        resolve();
      }
    }, 200);

    // Clean up interval when resolved normally
    const origResolver = unpauseResolver;
    unpauseResolver = () => {
      clearInterval(checkInterval);
      origResolver?.();
    };
  });

  // After unpausing, broadcast non-blocking state
  if (!paused) broadcastPauseState();

  return deliberationLoopActive;
}

/**
 * Run the deliberation loop: cycles run until the meeting ends.
 * Each cycle takes the last speech and runs: assess → select → speak.
 */
async function runDeliberationLoop(lastSpeaker: SpeakerId, lastContent: string): Promise<void> {
  logInfo("server", `deliberation loop starting (lastSpeaker=${lastSpeaker})`);
  deliberationLoopActive = true;
  let speaker: SpeakerId = lastSpeaker;
  let content = lastContent;

  while (deliberationLoopActive && getMeeting()) {
    // Wait if paused (blocks until unpaused or loop stopped)
    if (!(await waitIfPaused())) break;
    if (!deliberationLoopActive || !getMeeting()) break;

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
      if (err?.message?.includes("Meeting ended")) {
        // Clean exit — meeting was ended during human turn
        break;
      }
      broadcast({ type: "error", message: `Cycle error: ${err?.message || err}` });
      break;
    }
  }

  logInfo("server", `deliberation loop ended`);
  deliberationLoopActive = false;

  // Signal that the loop is done
  if (loopDoneResolver) {
    loopDoneResolver();
    loopDoneResolver = null;
  }
}

/**
 * Stop the deliberation loop and wait for it to finish.
 * Returns immediately if the loop is not active.
 */
async function stopDeliberationLoop(): Promise<void> {
  if (!deliberationLoopActive) return;
  logInfo("server", `deliberation loop stopping...`);
  deliberationLoopActive = false;

  // Unblock the loop if it's waiting for pause
  if (unpauseResolver) {
    unpauseResolver();
    unpauseResolver = null;
  }

  // Unblock the loop if it's waiting for human speech
  cancelHumanTurn();

  // Wait for the loop to actually finish (up to 5s safety net)
  await Promise.race([
    new Promise<void>(resolve => { loopDoneResolver = resolve; }),
    new Promise<void>(resolve => setTimeout(resolve, 5000)),
  ]);

  logInfo("server", `deliberation loop stopped`);
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
    logInfo("server", `WS <<< ${msg.type}\n${prettyLog(msg).replace(/^/gm, '    ')}`);

    switch (msg.type) {
      case "start-meeting": {
        try {
          const meeting = await startMeeting(msg.title, msg.openingPrompt, msg.participants);
          broadcast({
            type: "sync",
            meeting,
            currentPhase: getPhase(),
            paused,
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
            paused,
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
              paused,
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
            await stopDeliberationLoop();
            await endCurrentMeeting();
            broadcast({ type: "meeting-ended" });
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
          await stopDeliberationLoop();
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

      case "toggle-pause": {
        togglePause();
        break;
      }
    }

    logInfo("server", `WS --- ${msg.type} done`);
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
        logInfo("server", `WS client connected (total: ${connectedClients.size})`);
      },
      message(ws, message) {
        const raw = typeof message === "string" ? message : message.toString();
        handleWsMessage(ws as any, raw);
      },
      close(ws) {
        connectedClients.delete(ws as any);
        logInfo("server", `WS client disconnected (total: ${connectedClients.size})`);
      },
    },
  });
}

// ---------------------------------------------------------------------------
// Graceful shutdown
// ---------------------------------------------------------------------------

async function gracefulShutdown(server: ReturnType<typeof Bun.serve>): Promise<void> {
  logInfo("server", `graceful shutdown initiated (${connectedClients.size} client(s), meeting=${getMeeting()?.meetingId ?? "none"})`);

  // Notify clients
  broadcast({ type: "error", message: "Server shutting down" });

  // Stop deliberation loop
  await stopDeliberationLoop();

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

  logInfo("server", `shutdown complete`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Main entry point (when run directly)
// ---------------------------------------------------------------------------

if (import.meta.main) {
  const server = await createServer();
  logInfo("server", `Deliberation Room server running on http://localhost:${server.port}`);

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
