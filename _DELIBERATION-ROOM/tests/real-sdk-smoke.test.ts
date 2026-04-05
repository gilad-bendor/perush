/**
 * real-sdk-smoke.test.ts — Single integration test using the real Agent SDK.
 *
 * The ONLY test in the project that does NOT use the stub SDK. It spawns a
 * real server with all models set to Claude Haiku for minimal cost, then
 * exercises the full deliberation flow via WebSocket:
 *
 *   create meeting → observe 2 cycles → end meeting → verify git state
 *
 * Run:   REAL_SDK_TEST=true bun test tests/real-sdk-smoke.test.ts
 * Cost:  ~$0.05-0.15 per run (Haiku pricing)
 *
 * Prerequisites:
 *   - `claude` CLI installed and authenticated
 *   - `bun install` completed
 *   - Port 4199 available
 */

import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { $ } from "bun";
import { resolve, join } from "path";

const DELIBERATION_DIR = resolve(import.meta.dir, "..");
const MEETINGS_DIR = join(DELIBERATION_DIR, ".meetings");
const PORT = 4199;
const HAIKU_MODEL = "claude-haiku-4-5";

// ---------------------------------------------------------------------------
// Guard: skip unless explicitly requested
// ---------------------------------------------------------------------------

describe.skipIf(process.env.REAL_SDK_TEST !== "true")("real SDK smoke test", () => {
  let serverProc: ReturnType<typeof Bun.spawn> | null = null;
  let meetingId: string | null = null;
  let ws: WebSocket | null = null;

  // -------------------------------------------------------------------------
  // Server lifecycle
  // -------------------------------------------------------------------------

  beforeAll(async () => {
    // Build a clean environment for the subprocess:
    // - Real SDK (not stub): NODE_ENV != "test", USE_STUB_SDK unset
    // - Haiku for all models (cheap)
    // - Separate port to avoid dev server conflict
    const env: Record<string, string | undefined> = { ...process.env };
    env.NODE_ENV = "development";
    delete env.USE_STUB_SDK;
    env.PARTICIPANT_MODEL = HAIKU_MODEL;
    env.ORCHESTRATOR_MODEL = HAIKU_MODEL;
    env.SERVER_PORT = String(PORT);

    serverProc = Bun.spawn(["bun", "run", "src/server.ts"], {
      env: env as Record<string, string>,
      stdout: "inherit",
      stderr: "inherit",
      cwd: DELIBERATION_DIR,
    });

    // Poll /api/agents until the server is ready
    let ready = false;
    for (let i = 0; i < 40; i++) {
      try {
        const res = await fetch(`http://localhost:${PORT}/api/agents`);
        if (res.ok) {
          ready = true;
          break;
        }
      } catch {}
      await Bun.sleep(500);
    }

    if (!ready) {
      serverProc?.kill();
      throw new Error("Server failed to start within 20s");
    }
  }, 30_000);

  afterAll(async () => {
    // Close WebSocket
    try {
      ws?.close();
    } catch {}

    // Kill server (SIGTERM → graceful shutdown handler runs)
    if (serverProc) {
      serverProc.kill();
      try {
        await serverProc.exited;
      } catch {}
    }

    // Clean up git state for the known meeting
    if (meetingId) {
      try {
        await $`git worktree remove --force ${join(MEETINGS_DIR, meetingId)}`.quiet();
      } catch {}
      try {
        await $`git branch -D sessions/${meetingId}`.quiet();
      } catch {}
    }

    // Fallback: clean up any leftover smoke test branches
    try {
      const branchOutput = await $`git branch --list "sessions/*sdk-smoke-test*"`.text();
      for (const line of branchOutput.trim().split("\n").filter(Boolean)) {
        const branchName = line.trim().replace(/^\*?\s*/, "");
        const mid = branchName.replace("sessions/", "");
        try {
          await $`git worktree remove --force ${join(MEETINGS_DIR, mid)}`.quiet();
        } catch {}
        try {
          await $`git branch -D ${branchName}`.quiet();
        } catch {}
      }
    } catch {}
  });

  // -------------------------------------------------------------------------
  // Tests
  // -------------------------------------------------------------------------

  test("agents endpoint returns discovered agents", async () => {
    const res = await fetch(`http://localhost:${PORT}/api/agents`);
    expect(res.ok).toBe(true);
    const agents = (await res.json()) as any[];
    expect(agents.length).toBeGreaterThanOrEqual(2);
    const ids = agents.map((a) => a.id);
    expect(ids).toContain("milo");
    expect(ids).toContain("archi");
  });

  test("full deliberation: create → 2 cycles → end → verify git", async () => {
    // ------ WebSocket client setup ------

    const messages: any[] = [];

    type Waiter = {
      check: () => boolean;
      resolve: () => void;
      timer: ReturnType<typeof setTimeout>;
    };
    const waiters: Waiter[] = [];

    ws = new WebSocket(`ws://localhost:${PORT}/ws`);

    // Wait for connection
    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error("WS connection timeout")),
        10_000,
      );
      ws!.onopen = () => {
        clearTimeout(timer);
        resolve();
      };
      ws!.onerror = () => {
        clearTimeout(timer);
        reject(new Error("WS connection error"));
      };
    });

    ws.onmessage = (event: MessageEvent) => {
      const msg = JSON.parse(String(event.data));
      messages.push(msg);

      // Auto-respond to human turn requests
      if (msg.type === "your-turn") {
        setTimeout(() => {
          if (ws?.readyState === WebSocket.OPEN) {
            ws.send(
              JSON.stringify({
                type: "human-speech",
                content: "נקודה מעניינת. המשיכו בניתוח.",
              }),
            );
          }
        }, 200);
      }

      // Check pending waiters (reverse iterate for safe splice)
      for (let i = waiters.length - 1; i >= 0; i--) {
        if (waiters[i].check()) {
          waiters[i].resolve();
          waiters.splice(i, 1);
        }
      }
    };

    /**
     * Wait until a condition over the full messages array becomes true.
     * Resolves immediately if already true; otherwise waits for new messages.
     */
    function waitFor(
      check: (msgs: any[]) => boolean,
      timeoutMs: number,
      label: string,
    ): Promise<void> {
      if (check(messages)) return Promise.resolve();

      return new Promise<void>((resolve, reject) => {
        const timer = setTimeout(() => {
          const types = messages.map((m) => m.type).join(", ");
          reject(
            new Error(
              `Timeout waiting for ${label} (${timeoutMs}ms).\n` +
                `Collected ${messages.length} messages: [${types}]`,
            ),
          );
        }, timeoutMs);

        waiters.push({
          check: () => check(messages),
          resolve: () => {
            clearTimeout(timer);
            resolve();
          },
          timer,
        });
      });
    }

    // Helper: count messages matching a predicate
    const countOf = (pred: (m: any) => boolean) => messages.filter(pred).length;

    // ------ Phase 1: Create meeting (2 agents: milo + archi) ------

    console.log("[smoke] Starting meeting with milo + archi...");

    ws.send(
      JSON.stringify({
        type: "start-meeting",
        title: "SDK Smoke Test",
        openingPrompt:
          "נדון בפסוק הראשון: בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ. " +
          "מה משמעות המילים לפי המילון? השיבו בקצרה.",
        participants: ["milo", "archi"],
      }),
    );

    // Wait for sync — session creation with the real SDK may take 30-90s
    await waitFor(
      (msgs) => msgs.some((m) => m.type === "sync" && m.meeting?.meetingId),
      120_000,
      "sync (meeting created)",
    );

    const syncMsg = messages.find(
      (m) => m.type === "sync" && m.meeting?.meetingId,
    );
    meetingId = syncMsg.meeting.meetingId;
    console.log(`[smoke] Meeting created: ${meetingId}`);

    expect(meetingId).toBeTruthy();
    expect(syncMsg.meeting.participants).toEqual(["milo", "archi"]);

    // ------ Phase 2: Observe 2 completed cycles ------
    // Each completed cycle produces exactly one "speech" message.
    // If the orchestrator selects "Director", the auto-responder sends human speech.

    console.log("[smoke] Waiting for cycle 1...");
    await waitFor(
      (msgs) => countOf((m) => m.type === "speech") >= 1,
      120_000,
      "cycle 1 speech",
    );
    const speech1 = messages.filter((m) => m.type === "speech").at(-1);
    console.log(`[smoke] Cycle 1 done. Speaker: ${speech1?.speaker}`);

    console.log("[smoke] Waiting for cycle 2...");
    await waitFor(
      (msgs) => countOf((m) => m.type === "speech") >= 2,
      120_000,
      "cycle 2 speech",
    );
    const speech2 = messages.filter((m) => m.type === "speech").at(-1);
    console.log(`[smoke] Cycle 2 done. Speaker: ${speech2?.speaker}`);

    // ------ Phase 3: Verify message variety ------

    console.log("[smoke] Verifying message types...");

    // Phase transitions: at least assessing and selecting occurred
    const phases = messages
      .filter((m) => m.type === "phase")
      .map((m) => m.phase);
    expect(phases).toContain("assessing");
    expect(phases).toContain("selecting");
    expect(
      phases.some((p) => p === "speaking" || p === "human-turn"),
    ).toBe(true);

    // StatusRead messages: at least 2 (one per cycle)
    const statusReads = messages.filter((m) => m.type === "status-read");
    expect(statusReads.length).toBeGreaterThanOrEqual(2);
    for (const statusRead of statusReads) {
      expect(statusRead.statusRead).toBeTruthy();
      expect(statusRead.nextSpeaker).toBeTruthy();
    }

    // Speech messages: at least 2 with non-empty content
    const speeches = messages.filter((m) => m.type === "speech");
    expect(speeches.length).toBeGreaterThanOrEqual(2);
    for (const s of speeches) {
      expect(typeof s.content).toBe("string");
      expect(s.content.length).toBeGreaterThan(0);
    }

    // Streaming chunks: if any agent spoke, we should have seen chunks
    const agentSpeeches = speeches.filter((s) => s.speaker !== "human");
    if (agentSpeeches.length > 0) {
      const chunks = messages.filter((m) => m.type === "speech-chunk");
      expect(chunks.length).toBeGreaterThan(0);
    }

    // Assessment messages: at least 1 (some may fail to parse from Haiku)
    const assessments = messages.filter((m) => m.type === "assessment");
    expect(assessments.length).toBeGreaterThanOrEqual(1);

    // ------ Phase 4: End meeting ------

    console.log("[smoke] Ending meeting...");
    ws.send(JSON.stringify({ type: "command", command: "/end" }));

    await waitFor(
      (msgs) => msgs.some((m) => m.type === "phase" && m.phase === "idle"),
      30_000,
      "phase idle (meeting ended)",
    );
    console.log("[smoke] Meeting ended.");

    // ------ Phase 5: Verify git state ------

    console.log("[smoke] Verifying git state...");

    // Session branch should exist
    const branchOutput = await $`git branch --list sessions/${meetingId}`.text();
    expect(branchOutput.trim()).toContain(meetingId!);

    // meeting.yaml should be readable from the branch
    const meetingYamlStr =
      await $`git show sessions/${meetingId}:meeting.yaml`.text();
    const { parse: yamlParse } = await import("yaml");
    const meeting = yamlParse(meetingYamlStr);

    expect(meeting.meetingId).toBe(meetingId);
    expect(meeting.participants).toEqual(["milo", "archi"]);
    expect(meeting.cycles.length).toBeGreaterThanOrEqual(2);

    // Each cycle has a speech with content
    expect(meeting.cycles[0].speech.content).toBeTruthy();
    expect(meeting.cycles[1].speech.content).toBeTruthy();

    // Each cycle has an orchestrator decision with status-read
    for (const cycle of meeting.cycles) {
      expect(cycle.orchestratorDecision).toBeTruthy();
      expect(cycle.orchestratorDecision.statusRead).toBeTruthy();
      expect(typeof cycle.assessments).toBe("object");
    }

    // Session IDs are recorded for all agents + orchestrator
    expect(meeting.sessionIds.milo).toBeTruthy();
    expect(meeting.sessionIds.archi).toBeTruthy();
    expect(meeting.sessionIds.orchestrator).toBeTruthy();

    // ------ Summary ------

    console.log("[smoke] All verifications passed!");
    console.log(`[smoke] Total WS messages: ${messages.length}`);
    console.log(`[smoke] Completed cycles: ${meeting.cycles.length}`);
    console.log(
      `[smoke] Estimated cost: $${meeting.totalCostEstimate?.toFixed(2) ?? "unknown"}`,
    );
  }, 300_000); // 5 minute timeout
});
