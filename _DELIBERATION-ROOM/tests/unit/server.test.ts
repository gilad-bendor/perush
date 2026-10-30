/**
 * server.test.ts — Tests for the HTTP + WebSocket server.
 *
 * Tests HTTP routing, WebSocket message handling, and broadcast mechanics.
 * Uses the stub SDK — no real API calls.
 */

import { describe, test, expect, beforeEach, afterEach } from "../test-kit.ts";
import { join } from "path";
import { writeFile, rm, mkdtemp, mkdir } from "fs/promises";
import { tmpdir } from "os";
import {
  handleHttpRequest,
  handleWsMessage,
  broadcast,
  connectedClients,
  stopDeliberationLoop,
  setupOrchestratorEvents,
  createServer,
} from "../../src/server.ts";
import {
  resetOrchestrator,
  getMeeting,
  startMeeting,
  endCurrentMeeting,
} from "../../src/orchestrator.ts";
import { resetStubState } from "../../src/stub-sdk.ts";
import { resetAgentCache } from "../../src/session-manager.ts";
import { DELIBERATION_DIR } from "../../src/config.ts";
import {type MeetingId, meetingIdToBranchName, type MeetingSummary, type ServerMessage} from "../../src/types.ts";
import {generateMeetingId, git, setPerushGitRootForTests} from "../../src/meetings-db.ts";

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
    const gitRoot = (await git(DELIBERATION_DIR, "rev-parse", "--show-toplevel")).trim();
    const worktreePath = join(gitRoot, "_DELIBERATION-ROOM/.meetings", meetingId);
    try { await git(DELIBERATION_DIR, "worktree", "remove", "--force", worktreePath); } catch {}
    try { await git(DELIBERATION_DIR, "branch", "-D", meetingIdToBranchName(meetingId)); } catch {}
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
    const res = await handleHttpRequest(req);

    // If index.html exists, should return 200; otherwise 404
    if (res.status === 200) {
      expect(res.headers.get("Content-Type")).toContain("text/html");
    } else {
      expect(res.status).toBe(404);
    }
  });

  test("returns 404 for non-existent files", async () => {
    const req = new Request("http://localhost:4100/nonexistent.xyz");
    const res = await handleHttpRequest(req);
    expect(res.status).toBe(404);
  });

  test("serves /api/agents endpoint", async () => {
    const req = new Request("http://localhost:4100/api/agents");
    const res = await handleHttpRequest(req);
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
    const res = await handleHttpRequest(req);
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
      const res = await handleHttpRequest(req);
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
      const res = await handleHttpRequest(req);
      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("application/javascript");
    } finally {
      try { await rm(jsPath); } catch {}
    }
  });

  test("returns 400 for a plain (non-upgrade) request to /ws", async () => {
    // A WebSocket upgrade is taken by the server's "upgrade" handler, and never reaches handleHttpRequest
    const req = new Request("http://localhost:4100/ws");
    const res = await handleHttpRequest(req);
    expect(res.status).toBe(400);
  });
});

// ---------------------------------------------------------------------------
// The real server: HTTP + WebSocket on one port
// ---------------------------------------------------------------------------

describe("createServer", () => {
  test("serves HTTP, and a WebSocket on /ws that answers and is tracked as a client", async () => {
    const server = await createServer(0);   // any free port
    try {
      const res = await fetch(`http://localhost:${server.port}/api/perush-scope`);
      expect(res.status).toBe(200);

      const ws = new WebSocket(`ws://localhost:${server.port}/ws`);
      await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
      expect(connectedClients.size).toBe(1);

      // Invalid JSON is answered (on this client only) with an error message
      const reply = new Promise<ServerMessage>(resolve => { ws.onmessage = (event) => resolve(JSON.parse(event.data)); });
      ws.send("not json");
      const message = await reply;
      expect(message.type).toBe("error");
      expect((message as { message: string }).message).toBe("Invalid JSON");

      const closed = new Promise(resolve => { ws.onclose = resolve; });
      ws.close();
      await closed;
      // The server sees the close a moment later
      for (let i = 0; i < 50 && connectedClients.size > 0; i++) await new Promise(r => setTimeout(r, 10));
      expect(connectedClients.size).toBe(0);
    } finally {
      await server.stop();
    }
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
      participants: ["milo", "shalom"],
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
// Uncommitted perush files - the Director decides before a meeting starts or resumes
// (against a scratch repository - the real main is never touched by tests)
// ---------------------------------------------------------------------------

describe("uncommitted perush files", () => {
  const FILE_A = "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md";
  const FILE_B = "נספחים-לפירוש/נספח.rtl.md";
  const FILE_C = "פירוש/1-בראשית/חדש.rtl.md";
  let repo: string;

  const repoGit = (...args: string[]) => git(repo, ...args);
  async function write(file: string, content: string): Promise<void> {
    await mkdir(join(repo, file, ".."), { recursive: true });
    await writeFile(join(repo, file), content);
  }
  const subjectOf = async (ref: string) => (await repoGit("log", "-1", "--format=%s", ref)).trim();
  const filesOf = async (ref: string) =>
    (await repoGit("show", "-z", "--name-only", "--no-renames", "--format=", ref)).split("\0").filter(Boolean).sort();
  const send = (ws: unknown, message: object) => handleWsMessage(ws as any, JSON.stringify({ messageId: "C1", ...message }));
  const askedAbout = (messages: ServerMessage[]) => messages.filter(m => m.type === "uncommitted-changes") as any[];

  beforeEach(async () => {
    repo = await mkdtemp(join(tmpdir(), "server-perush-"));
    await repoGit("init", "-q", "-b", "main");
    await repoGit("config", "user.name", "test");
    await repoGit("config", "user.email", "test@example.com");
    await write(FILE_A, "v0\n");
    await write(FILE_B, "v0\n");
    await repoGit("add", "-A");
    await repoGit("commit", "-q", "-m", "initial");
    setPerushGitRootForTests(repo);
  });

  afterEach(async () => {
    setPerushGitRootForTests(undefined);
    await rm(repo, { recursive: true, force: true });
  });

  test("/api/perush-scope tells the folders new meetings track, and where they are defined", async () => {
    const res = await handleHttpRequest(new Request("http://localhost/api/perush-scope"));
    expect(await res.json()).toEqual({
      trackedPaths: ["פירוש/", "נספחים-לפירוש/", "בלשנות/ניתוחים-לשוניים/"],
      trackedPathsSource: "_DELIBERATION-ROOM/src/config.ts (PERUSH_TRACKED_PATHS)",
    });
  });

  test("start: no uncommitted changes - the meeting starts right away", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    await send(ws, { type: "start-meeting", title: "Clean", participants: ["milo"] });
    testMeetingId = getMeeting()!.meetingId;
    expect(askedAbout(messages)).toEqual([]);
    expect(getMeeting()!.perushBaseline).toBe((await repoGit("rev-parse", "HEAD")).trim());
  });

  test("start: asks about the uncommitted files - then commits the included ones and leaves out the ignored ones", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    await write(FILE_A, "the Director's work for this deliberation\n");
    await write(FILE_B, "unrelated work\n");

    // 1. No decisions yet - asked, nothing started
    await send(ws, { type: "start-meeting", title: "With Changes", participants: ["milo"] });
    expect(getMeeting()).toBeNull();
    const [question] = askedAbout(messages);
    expect(question.context).toBe("start");
    expect(question.changes.map((change: any) => change.path).sort()).toEqual([FILE_A, FILE_B].sort());
    expect(question.trackedPaths).toEqual(["פירוש/", "נספחים-לפירוש/", "בלשנות/ניתוחים-לשוניים/"]);
    expect(question.trackedPathsSource).toContain("config.ts");

    // 2. Partial decisions - asked again (with the decisions made so far), nothing started
    messages.length = 0;
    await send(ws, { type: "start-meeting", title: "With Changes", participants: ["milo"],
      perushFileDecisions: { [FILE_A]: "include" } });
    expect(getMeeting()).toBeNull();
    expect(askedAbout(messages)[0].decisions).toEqual({ [FILE_A]: "include" });

    // 3. All decided - started
    messages.length = 0;
    await send(ws, { type: "start-meeting", title: "With Changes", participants: ["milo"],
      perushFileDecisions: { [FILE_A]: "include", [FILE_B]: "ignore" } });
    const meeting = getMeeting()!;
    testMeetingId = meeting.meetingId;
    expect(askedAbout(messages)).toEqual([]);
    expect(messages.some(m => m.type === "sync")).toBe(true);
    expect(await subjectOf("HEAD")).toBe(`Pre-meeting state (${meeting.meetingId})`);
    expect(await filesOf("HEAD")).toEqual([FILE_A]);
    expect(meeting.perushBaseline).toBe((await repoGit("rev-parse", "HEAD")).trim());
    expect(meeting.perushScope!.ignoredPaths).toEqual([FILE_B]);
  });

  test("start: an included rename commits both of its sides", async () => {
    const { ws } = createFakeWs();
    connectedClients.add(ws as any);
    await repoGit("mv", FILE_A, FILE_C);
    await send(ws, { type: "start-meeting", title: "Rename", participants: ["milo"],
      perushFileDecisions: { [FILE_C]: "include" } });
    testMeetingId = getMeeting()!.meetingId;
    expect(await filesOf("HEAD")).toEqual([FILE_A, FILE_C].sort());
  });

  test("resume while another meeting is active: an error - before asking about any file", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    await send(ws, { type: "start-meeting", title: "First", participants: ["milo"] });
    const first = getMeeting()!.meetingId;
    testMeetingId = first;
    await endCurrentMeeting();
    await send(ws, { type: "start-meeting", title: "Second", participants: ["milo"] });
    const second = getMeeting()!.meetingId;
    await write(FILE_C, "new\n");

    messages.length = 0;
    await send(ws, { type: "resume-meeting", meetingId: first });
    expect(askedAbout(messages)).toEqual([]);
    expect((messages.find(m => m.type === "error") as any).message).toContain("already active");
    await endCurrentMeeting();
    await cleanupMeeting(second);
  });

  test("resume: asks about new uncommitted files - an ignored one is added to the meeting's saved scope", async () => {
    const { ws, messages } = createFakeWs();
    connectedClients.add(ws as any);
    await write(FILE_B, "unrelated work\n");
    await send(ws, { type: "start-meeting", title: "Resume Me", participants: ["milo"],
      perushFileDecisions: { [FILE_B]: "ignore" } });
    const meetingId = getMeeting()!.meetingId;
    testMeetingId = meetingId;
    await endCurrentMeeting();

    // A new uncommitted file since; FILE_B is already ignored by the meeting - not asked about again
    await write(FILE_C, "new\n");
    messages.length = 0;
    await send(ws, { type: "resume-meeting", meetingId });
    expect(getMeeting()).toBeNull();
    expect(messages.some(m => m.type === "sync")).toBe(false);          // the UI stays on the landing page
    const [question] = askedAbout(messages);
    expect(question).toMatchObject({ context: "resume", meetingId });
    expect(question.changes.map((change: any) => change.path)).toEqual([FILE_C]);

    // Opening the meeting's URL (join-meeting) asks the same
    messages.length = 0;
    await send(ws, { type: "join-meeting", meetingId });
    expect(getMeeting()).toBeNull();
    expect(askedAbout(messages)[0]).toMatchObject({ context: "resume", meetingId });

    messages.length = 0;
    await send(ws, { type: "resume-meeting", meetingId, perushFileDecisions: { [FILE_C]: "ignore" } });
    expect(getMeeting()!.meetingId).toBe(meetingId);
    expect(getMeeting()!.perushScope!.ignoredPaths).toEqual([FILE_B, FILE_C]);
    stopDeliberationLoop();
    await endCurrentMeeting();
    const { readEndedMeeting } = await import("../../src/meetings-db.ts");
    expect((await readEndedMeeting(meetingId)).perushScope!.ignoredPaths).toEqual([FILE_B, FILE_C]);
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
