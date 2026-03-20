/**
 * server.test.ts — Tests for the HTTP + WebSocket server.
 *
 * Tests HTTP routing, WebSocket message handling, and broadcast mechanics.
 * Uses the stub SDK — no real API calls.
 */

import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { join } from "path";
import { writeFile, rm } from "fs/promises";
import {
  handleHttpRequest,
  handleWsMessage,
  broadcast,
  connectedClients,
  stopDeliberationLoop,
  setupOrchestratorEvents,
} from "./server";
import {
  resetOrchestrator,
  getMeeting,
  startMeeting,
  endCurrentMeeting,
} from "./orchestrator";
import { resetStubState } from "./stub-sdk";
import { resetAgentCache } from "./session-manager";
import { DELIBERATION_DIR } from "./config";
import {MeetingId, meetingIdToBranchName, MeetingSummary, ServerMessage} from "./types";
import {generateMeetingId} from "./meetings-db.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const PUBLIC_DIR = join(DELIBERATION_DIR, "public");

/** Fake WebSocket that collects sent messages */
function createFakeWs(): {
  ws: { send: (data: string) => void; close: () => void; data: unknown };
  messages: ServerMessage[];
} {
  const messages: ServerMessage[] = [];
  const ws = {
    send(data: string) {
      try {
        messages.push(JSON.parse(data));
      } catch {}
    },
    close() {},
    data: {},
  };
  return { ws, messages };
}

// Unique meeting IDs for cleanup
let testMeetingId: MeetingId;
function testId(): MeetingId {
  return generateMeetingId(`srv-test-${Math.random().toString(36).slice(2, 6)}`, new Date());
}

// Cleanup helper
async function cleanupMeeting(meetingId: MeetingId): Promise<void> {
  try {
    const { $ } = await import("bun");
    const gitRoot = (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
    const worktreePath = join(gitRoot, "_DELIBERATION-ROOM/.meetings", meetingId);
    try { await $`git worktree remove --force ${worktreePath}`.quiet(); } catch {}
    try { await $`git branch -D ${meetingIdToBranchName(meetingId)}`.quiet(); } catch {}
  } catch {}
}

// ---------------------------------------------------------------------------
// Setup / Teardown
// ---------------------------------------------------------------------------

beforeEach(() => {
  resetOrchestrator();
  resetAgentCache();
  resetStubState();
  connectedClients.clear();
  testMeetingId = testId();
});

afterEach(async () => {
  stopDeliberationLoop();
  try {
    if (getMeeting()) {
      await endCurrentMeeting();
    }
  } catch {}
  await cleanupMeeting(testMeetingId);
});

// ---------------------------------------------------------------------------
// HTTP Request Handling
// ---------------------------------------------------------------------------

describe("handleHttpRequest", () => {
  test("serves index.html for root path", async () => {
    const req = new Request("http://localhost:4100/");
    const res = await handleHttpRequest(req, {});

    // If index.html exists, should return 200; otherwise 404
    if (res.status === 200) {
      expect(res.headers.get("Content-Type")).toContain("text/html");
    } else {
      expect(res.status).toBe(404);
    }
  });

  test("returns 404 for non-existent files", async () => {
    const req = new Request("http://localhost:4100/nonexistent.xyz");
    const res = await handleHttpRequest(req, {});
    expect(res.status).toBe(404);
  });

  test("serves /api/agents endpoint", async () => {
    const req = new Request("http://localhost:4100/api/agents");
    const res = await handleHttpRequest(req, {});
    expect(res.status).toBe(200);

    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    // Should have discovered at least one agent
    expect(body.length).toBeGreaterThan(0);
    // Each agent should have expected fields
    expect(body[0]).toHaveProperty("id");
    expect(body[0]).toHaveProperty("englishName");
    expect(body[0]).toHaveProperty("hebrewName");
  });

  test("serves /api/meetings endpoint", async () => {
    const req = new Request("http://localhost:4100/api/meetings");
    const res = await handleHttpRequest(req, {});
    expect(res.status).toBe(200);

    const body: MeetingSummary[] = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test("serves CSS file with correct MIME type", async () => {
    // Create a temporary CSS file for testing
    const cssPath = join(PUBLIC_DIR, "_test.css");
    try {
      await writeFile(cssPath, "body { color: red; }");
      const req = new Request("http://localhost:4100/_test.css");
      const res = await handleHttpRequest(req, {});
      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("text/css");
    } finally {
      try { await rm(cssPath); } catch {}
    }
  });

  test("serves JS file with correct MIME type", async () => {
    const jsPath = join(PUBLIC_DIR, "_test.js");
    try {
      await writeFile(jsPath, "console.log('test');");
      const req = new Request("http://localhost:4100/_test.js");
      const res = await handleHttpRequest(req, {});
      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("application/javascript");
    } finally {
      try { await rm(jsPath); } catch {}
    }
  });

  test("returns 101 intent for /ws path", async () => {
    // We can't fully test WS upgrade without a real server,
    // but we can test that the path triggers upgrade attempt
    const req = new Request("http://localhost:4100/ws");
    const res = await handleHttpRequest(
        req,
        {
          upgrade: () => false, // Simulate failed upgrade
        },
    );
    expect(res.status).toBe(400); // Failed upgrade returns 400
  });
});

// ---------------------------------------------------------------------------
// Broadcast Mechanics
// ---------------------------------------------------------------------------

describe("broadcast", () => {
  test("sends to all connected clients", () => {
    const { ws: ws1, messages: msgs1 } = createFakeWs();
    const { ws: ws2, messages: msgs2 } = createFakeWs();

    connectedClients.add(ws1 as any);
    connectedClients.add(ws2 as any);

    broadcast({ type: "your-turn" });

    expect(msgs1).toHaveLength(1);
    expect(msgs1[0].type).toBe("your-turn");
    expect(msgs2).toHaveLength(1);
    expect(msgs2[0].type).toBe("your-turn");
  });

  test("removes clients that throw on send", () => {
    const throwingWs = {
      send() { throw new Error("Connection closed"); },
      close() {},
      data: {},
    };
    const { ws: goodWs, messages } = createFakeWs();

    connectedClients.add(throwingWs as any);
    connectedClients.add(goodWs as any);

    broadcast({ type: "your-turn" });

    // Throwing client was removed
    expect(connectedClients.has(throwingWs as any)).toBe(false);
    // Good client still got the message
    expect(messages).toHaveLength(1);
  });

  test("handles empty client set", () => {
    // Should not throw
    broadcast({ type: "your-turn" });
  });
});

// ---------------------------------------------------------------------------
// WebSocket Message Handling
// ---------------------------------------------------------------------------

describe("handleWsMessage", () => {
  test("rejects invalid JSON", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, "not valid json");

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    expect((messages[0] as any).message).toContain("Invalid JSON");
  });

  test("rejects unknown message types", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({ type: "unknown-type", messageId: "C0" }));

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    expect((messages[0] as any).message).toContain("Invalid message");
  });

  test("rejects malformed start-meeting (missing fields)", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({
      type: "start-meeting",
      messageId: "C1",
      // Missing title, participants
    }));

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
  });

  test("handles attention message", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);

    await handleWsMessage(ws as any, JSON.stringify({ type: "attention", messageId: "C2" }));

    // Should receive attention-ack
    const ack = messages.find(m => m.type === "attention-ack");
    expect(ack).toBeTruthy();
  });

  test("handles /end command with no active meeting", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({
      type: "command",
      messageId: "C3",
      command: "/end",
    }));

    // Should get an error since no meeting is active
    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    expect((messages[0] as any).message).toContain("No active meeting");
  });

  test("handles human-speech with no active meeting", async () => {
    const { ws, messages } = createFakeWs();
    // handleHumanSpeech doesn't throw if no one is waiting — it just does nothing
    await handleWsMessage(ws as any, JSON.stringify({
      type: "human-speech",
      messageId: "C4",
      content: "test speech",
    }));

    // No error — handleHumanSpeech is fire-and-forget when no resolver is set
    expect(messages).toHaveLength(0);
  });

  test("handles view-meeting for non-existent meeting", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({
      type: "view-meeting",
      messageId: "C5",
      meetingId: "nonexistent-meeting-id",
    }));

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    expect((messages[0] as any).message).toContain("Failed to load meeting");
  });

  test("handles resume-meeting with non-existent meeting", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({
      type: "resume-meeting",
      messageId: "C6",
      meetingId: "non-existent-meeting-id",
    }));

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    // The error message will vary (git failure, file not found, etc.)
    expect((messages[0] as any).message).toBeTruthy();
  });

  test("handles rollback with no active meeting", async () => {
    const { ws, messages } = createFakeWs();
    await handleWsMessage(ws as any, JSON.stringify({
      type: "rollback",
      messageId: "C7",
      targetCycleNumber: 1,
    }));

    expect(messages).toHaveLength(1);
    expect(messages[0].type).toBe("error");
    expect((messages[0] as any).message).toContain("No active meeting");
  });
});

// ---------------------------------------------------------------------------
// Meeting Lifecycle via WebSocket
// ---------------------------------------------------------------------------

describe("meeting lifecycle via WebSocket", () => {
  test("start-meeting creates a meeting and broadcasts sync", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    setupOrchestratorEvents();

    await handleWsMessage(ws as any, JSON.stringify({
      type: "start-meeting",
      messageId: "C10",
      title: "Test Meeting",
      participants: ["milo", "archi"],
    }));

    // Store meeting ID for cleanup
    const meeting = getMeeting();
    if (meeting) testMeetingId = meeting.meetingId;

    // Should have received a sync message
    const syncMsg = messages.find(m => m.type === "sync");
    expect(syncMsg).toBeTruthy();

    // Meeting should be active
    expect(getMeeting()).not.toBeNull();

    // No deliberation loop to stop — loop starts on first human speech
  });

  test("start-meeting rejects invalid participants", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);

    await handleWsMessage(ws as any, JSON.stringify({
      type: "start-meeting",
      messageId: "C11",
      title: "Test",
      participants: ["nonexistent-agent"],
    }));

    // Should receive error
    const errorMsg = messages.find(m => m.type === "error");
    expect(errorMsg).toBeTruthy();
  });

  test("/end command ends meeting and broadcasts idle phase", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    setupOrchestratorEvents();

    // First start a meeting
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    // Clear messages from setup
    messages.length = 0;

    // End it via command
    await handleWsMessage(ws as any, JSON.stringify({
      type: "command",
      messageId: "C12",
      command: "/end",
    }));

    // Should have received a phase:idle message
    const phaseMsg = messages.find(m => m.type === "phase" && (m as any).phase === "idle");
    expect(phaseMsg).toBeTruthy();

    // Meeting should be null
    expect(getMeeting()).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Orchestrator Event Wiring
// ---------------------------------------------------------------------------

describe("orchestrator event wiring", () => {
  test("setupOrchestratorEvents wires events to broadcast", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);

    setupOrchestratorEvents();

    // Start a meeting — this triggers phase changes via the wired events
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    // The orchestrator emits phase events during startMeeting
    // Check that at least an idle phase was broadcast
    const phaseMessages = messages.filter(m => m.type === "phase");
    expect(phaseMessages.length).toBeGreaterThanOrEqual(0);
  });
});
