/**
 * orchestrator.test.ts — Tests for the deliberation loop.
 *
 * Tests the full cycle (assess → select → speak) using the stub SDK.
 * Tests are grouped to minimize git worktree creation:
 * - "Core cycle mechanics" shares a single meeting for tests that observe
 *   cycle behavior without needing a fresh meeting.
 * - Lifecycle tests (start, end, resume, rollback) create meetings as needed
 *   but batch cleanup in afterAll.
 */

import { describe, test, expect, beforeAll, beforeEach, afterEach, afterAll } from "../test-kit.ts";
import { join } from "path";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "fs/promises";
import { tmpdir } from "os";
import {
  startMeeting,
  runCycle,
  endCurrentMeeting,
  handleHumanSpeech,
  handleAttention,
  handleRollback,
  resumeMeetingById,
  isAttentionRequested,
  getPhase,
  getMeeting,
  setEventHandlers,
  setDirectorTimeout,
  resetOrchestrator,
} from "../../src/orchestrator.ts";
import type { OrchestratorEvents } from "../../src/orchestrator.ts";
import { resetStubState } from "../../src/stub-sdk.ts";
import { resetAgentCache } from "../../src/session-manager.ts";
import { type PrivateAssessment, type Phase, meetingIdToBranchName, type MeetingId } from "../../src/types.ts";
import { generateMeetingId, git, setPerushGitRootForTests } from "../../src/meetings-db.ts";
import { DELIBERATION_DIR } from "../../src/config.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface CollectedEvents {
  phases: Phase[];
  speeches: Array<{ speaker: string; content: string }>;
  chunks: Array<{ speaker: string; delta: string }>;
  assessments: PrivateAssessment[];
  statusReads: Array<{ statusRead: string; nextSpeaker: string }>;
  yourTurns: number;
  errors: string[];
}

function createEventCollector(): { events: CollectedEvents; handlers: Partial<OrchestratorEvents> } {
  const collected: CollectedEvents = {
    phases: [],
    speeches: [],
    chunks: [],
    assessments: [],
    statusReads: [],
    yourTurns: 0,
    errors: [],
  };

  return {
    events: collected,
    handlers: {
      onPhaseChange: (phase) => collected.phases.push(phase),
      onSpeech: (speaker, content) => collected.speeches.push({ speaker, content }),
      onSpeechChunk: (speaker, delta) => collected.chunks.push({ speaker, delta }),
      onAssessment: (assessment) => collected.assessments.push(assessment),
      onStatusRead: (statusRead, nextSpeaker) => collected.statusReads.push({ statusRead, nextSpeaker }),
      onYourTurn: () => collected.yourTurns++,
      onError: (msg) => collected.errors.push(msg),
    },
  };
}

async function cleanupMeeting(meetingId: MeetingId): Promise<void> {
  try {
    const gitRoot = (await git(DELIBERATION_DIR, "rev-parse", "--show-toplevel")).trim();
    const worktreePath = join(gitRoot, "_DELIBERATION-ROOM/.meetings", meetingId);
    try { await git(DELIBERATION_DIR, "worktree", "remove", "--force", worktreePath); } catch {}
    try { await git(DELIBERATION_DIR, "branch", "-D", meetingIdToBranchName(meetingId)); } catch {}
  } catch {}
}

// Track all meeting IDs for batch cleanup
const allMeetingIds: MeetingId[] = [];

afterAll(async () => {
  for (const id of allMeetingIds) {
    await cleanupMeeting(id);
  }
});

function freshState() {
  resetOrchestrator();
  resetAgentCache();
  resetStubState();
}

async function startAndTrack(title: string, participants: string[]) {
  const meeting = await startMeeting(title, participants);
  allMeetingIds.push(meeting.meetingId);
  return meeting;
}

// ---------------------------------------------------------------------------
// Meeting Start
// ---------------------------------------------------------------------------

describe("startMeeting", () => {
  beforeEach(freshState);
  afterEach(async () => { try { if (getMeeting()) await endCurrentMeeting(); } catch {} });

  test("creates a meeting with participants and sessions", async () => {
    const meeting = await startAndTrack("Test", ["milo", "shalom"]);

    expect(meeting.meetingId).toBeTruthy();
    expect(meeting.title).toBe("Test");
    expect(meeting.openingPrompt).toBeUndefined();
    expect(meeting.participants).toEqual(["milo", "shalom"]);
    expect(meeting.cycles).toHaveLength(0);
    expect(Object.keys(meeting.sessionIds)).toHaveLength(0);
  });

  test("rejects starting a second meeting", async () => {
    await startAndTrack("Test", ["milo"]);
    await expect(startMeeting("Test2", ["milo"])).rejects.toThrow("already active");
  });

  test("rejects empty participants", async () => {
    await expect(startMeeting("Test", [])).rejects.toThrow("No valid participants");
  });
});

// ---------------------------------------------------------------------------
// Core cycle mechanics — single shared meeting (one worktree)
//
// These tests run sequentially against a single meeting. Each test runs
// cycles and checks behavior. The meeting accumulates state across tests.
// ---------------------------------------------------------------------------

describe("core cycle mechanics", () => {
  beforeAll(() => { freshState(); });
  afterAll(async () => { try { if (getMeeting()) await endCurrentMeeting(); } catch {} });

  test("runs a full cycle: assess → select → speak", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await startAndTrack("Cycle Mechanics", ["milo", "shalom"]);

    const cycle = await runCycle("human", "Opening prompt text");

    expect(cycle).not.toBeNull();
    expect(cycle!.cycleNumber).toBe(1);
    expect(cycle!.speech.speaker).toBeTruthy();
    expect(cycle!.speech.content).toBeTruthy();

    expect(events.phases).toContain("assessing");
    expect(events.phases).toContain("selecting");
    expect(events.phases).toContain("speaking");
    expect(events.phases).toContain("idle");

    const assessingIdx = events.phases.indexOf("assessing");
    const selectingIdx = events.phases.indexOf("selecting");
    const speakingIdx = events.phases.indexOf("speaking");
    expect(assessingIdx).toBeLessThan(selectingIdx);
    expect(selectingIdx).toBeLessThan(speakingIdx);

    expect(events.assessments.length).toBeGreaterThan(0);
    expect(events.statusReads.length).toBe(1);
    expect(events.statusReads[0].statusRead).toBeTruthy();

    expect(getMeeting()!.cycles).toHaveLength(1);
  });

  test("skips last speaker in assessment phase", async () => {
    // Cycle 2 in the shared meeting
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await runCycle("milo", "Milo's speech");

    const assessingAgents = events.assessments.map(a => a.agent);
    expect(assessingAgents).not.toContain("milo");
    expect(assessingAgents).toContain("shalom");
  });

  test("multiple cycles accumulate correctly", async () => {
    // Already has 2 cycles from previous tests; run one more
    await runCycle("shalom", "Shalom's response");

    const currentMeeting = getMeeting()!;
    expect(currentMeeting.cycles.length).toBeGreaterThanOrEqual(3);
    // Cycle numbers are sequential
    for (let i = 0; i < currentMeeting.cycles.length; i++) {
      expect(currentMeeting.cycles[i].cycleNumber).toBe(i + 1);
    }
  });

  test("onSpeech emits for completed speeches", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await runCycle("human", "Another prompt");

    expect(events.speeches.length).toBe(1);
    expect(events.speeches[0].content).toBeTruthy();
  });

  test("returns to idle after cycle", async () => {
    expect(getPhase()).toBe("idle");
  });

  test("totalCostEstimate accumulates per cycle", async () => {
    const costBefore = getMeeting()!.totalCostEstimate ?? 0;

    await runCycle("milo", "More from milo");
    expect(getMeeting()!.totalCostEstimate).toBeGreaterThan(costBefore);
  });
});

// ---------------------------------------------------------------------------
// Attention Flag
// ---------------------------------------------------------------------------

describe("attention flag", () => {
  beforeEach(freshState);
  afterEach(async () => { try { if (getMeeting()) await endCurrentMeeting(); } catch {} });

  test("handleAttention sets the flag", () => {
    handleAttention();
    expect(isAttentionRequested()).toBe(true);
  });

  test("attention forces human as next speaker", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await startAndTrack("Test", ["milo", "shalom"]);

    handleAttention();
    setDirectorTimeout(500);

    const cyclePromise = runCycle("milo", "Milo said something");

    // Wait until cycle reaches human-turn phase before sending speech
    while (getPhase() !== "human-turn") await new Promise(r => setTimeout(r, 10));
    handleHumanSpeech("Director's response");

    const cycle = await cyclePromise;
    expect(cycle).not.toBeNull();

    expect(events.statusReads[0].nextSpeaker).toBe("human");
    expect(cycle!.speech.speaker).toBe("human");
    expect(cycle!.speech.content).toBe("Director's response");
    expect(isAttentionRequested()).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Human Turn
// ---------------------------------------------------------------------------

describe("human turn", () => {
  beforeEach(freshState);
  afterEach(async () => { try { if (getMeeting()) await endCurrentMeeting(); } catch {} });

  test("handleHumanSpeech resolves pending turn", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await startAndTrack("Test", ["milo"]);

    handleAttention();
    setDirectorTimeout(2000);

    const cyclePromise = runCycle("milo", "Milo's speech");

    // Wait until cycle reaches human-turn phase before sending speech
    while (getPhase() !== "human-turn") await new Promise(r => setTimeout(r, 10));
    handleHumanSpeech("Human's input");

    const cycle = await cyclePromise;
    expect(cycle!.speech.speaker).toBe("human");
    expect(cycle!.speech.content).toBe("Human's input");
    expect(events.yourTurns).toBe(1);
  });

  test("director timeout rejects the promise", async () => {
    await startAndTrack("Test", ["milo"]);

    handleAttention();
    setDirectorTimeout(100);

    await expect(runCycle("milo", "speech")).rejects.toThrow("Director timeout");
  });
});

// ---------------------------------------------------------------------------
// End Meeting
// ---------------------------------------------------------------------------

describe("endCurrentMeeting", () => {
  beforeEach(freshState);

  test("cleans up all state", async () => {
    await startAndTrack("Test", ["milo"]);

    await endCurrentMeeting();

    expect(getMeeting()).toBeNull();
    expect(getPhase()).toBe("idle");
  });

  test("throws if no meeting active", async () => {
    await expect(endCurrentMeeting()).rejects.toThrow("No active meeting");
  });
});

// ---------------------------------------------------------------------------
// Phase Tracking
// ---------------------------------------------------------------------------

describe("phase tracking", () => {
  test("starts as idle", () => {
    // (Does not need its own meeting)
    expect(getPhase()).toBe("idle");
  });
});

// ---------------------------------------------------------------------------
// Rollback
// ---------------------------------------------------------------------------

describe("handleRollback", () => {
  test("throws if no active meeting", async () => {
    freshState();
    await expect(handleRollback(0)).rejects.toThrow("No active meeting");
  });

  // All rollback behavior tests share a single meeting
  test("rolls back to cycle 0, specific cycle, and emits correct phases", async () => {
    freshState();
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await startAndTrack("Rollback Test", ["milo", "shalom"]);

    await runCycle("human", "Opening prompt");
    await runCycle("milo", "Milo's first response");
    await runCycle("shalom", "Shalom's response");

    expect(getMeeting()!.cycles).toHaveLength(3);

    // Rollback to cycle 1
    await handleRollback(1);
    expect(getMeeting()!.cycles).toHaveLength(1);
    expect(getMeeting()!.cycles[0].speech.speaker).toBeTruthy();

    // Re-add cycles, then rollback to 0
    await runCycle("milo", "Rebuilding");

    events.phases.length = 0;
    const progressSteps: string[] = [];
    await handleRollback(0, (step) => progressSteps.push(step));

    const rolledBack = getMeeting()!;
    expect(rolledBack.cycles).toHaveLength(0);
    expect(getPhase()).toBe("idle");
    expect(progressSteps).toContain("aborting");
    expect(progressSteps).toContain("session-recovery");
    expect(progressSteps).toContain("complete");

    // Phase emission check
    expect(events.phases).toContain("rolling-back");
    expect(events.phases[events.phases.length - 1]).toBe("idle");

    // Cleanup
    await endCurrentMeeting();
  });
});

// ---------------------------------------------------------------------------
// Perush files on main - against a scratch repository (the real main is never touched by tests)
// ---------------------------------------------------------------------------

describe("perush files on main", () => {
  const DIRECTOR_FILE = "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md";
  const AGENT_FILE = "בלשנות/ניתוחים-לשוניים/עד.rtl.md";
  let repo: string;

  const repoGit = (...args: string[]) => git(repo, ...args);
  async function write(file: string, content: string): Promise<void> {
    await mkdir(join(repo, file, ".."), { recursive: true });
    await writeFile(join(repo, file), content);
  }
  const filesOf = async (ref: string) =>
    (await repoGit("show", "-z", "--name-only", "--no-renames", "--format=", ref)).split("\0").filter(Boolean);
  const subjectOf = async (ref: string) => (await repoGit("log", "-1", "--format=%s", ref)).trim();

  beforeEach(async () => {
    repo = await mkdtemp(join(tmpdir(), "orchestrator-perush-"));
    await repoGit("init", "-q", "-b", "main");
    await repoGit("config", "user.name", "test");
    await repoGit("config", "user.email", "test@example.com");
    await write(DIRECTOR_FILE, "v0\n");
    await write(AGENT_FILE, "v0\n");
    await repoGit("add", "-A");
    await repoGit("commit", "-q", "-m", "initial");
    setPerushGitRootForTests(repo);
  });

  afterEach(async () => {
    setPerushGitRootForTests(undefined);
    try { if (getMeeting()) await endCurrentMeeting(); } catch {}
    await rm(repo, { recursive: true, force: true });
  });

  test("a cycle commits the Director's edits and the speaking agent's edits separately, and records main's commit; rollback restores it", async () => {
    freshState();
    let agentEdited = false;
    const { events, handlers } = createEventCollector();
    setEventHandlers({
      ...handlers,
      // The speaking agent "edits a file" while it speaks
      onSpeechChunk: (speaker) => {
        if (!agentEdited) {
          agentEdited = true;
          wrapAgentEdit(write(AGENT_FILE, `edited by ${speaker}\n`));
        }
      },
    });
    let pendingAgentEdit: Promise<void> = Promise.resolve();
    function wrapAgentEdit(promise: Promise<void>) { pendingAgentEdit = promise; }

    const meeting = await startAndTrack("Perush On Main", ["milo", "shalom"]);
    const baseline = (await repoGit("rev-parse", "HEAD")).trim();
    expect(meeting.perushScope).toEqual({
      trackedPaths: ["פירוש/", "נספחים-לפירוש/", "בלשנות/ניתוחים-לשוניים/"],
      ignoredPaths: [],
    });
    expect(meeting.perushBaseline).toBe(baseline);

    // The Director edits a file before the cycle
    await write(DIRECTOR_FILE, "edited by the Director\n");
    const cycle = await runCycle("human", "Opening prompt");
    await pendingAgentEdit;
    const speaker = cycle!.speech.speaker;
    expect(speaker).not.toBe("human");
    expect(agentEdited).toBe(true);

    expect(await subjectOf("HEAD~1")).toBe(`Cycle 1: Director's edits (${meeting.meetingId})`);
    expect(await filesOf("HEAD~1")).toEqual([DIRECTOR_FILE]);
    expect(await subjectOf("HEAD")).toBe(`Cycle 1: perush update by ${speaker} (${meeting.meetingId})`);
    expect(await filesOf("HEAD")).toEqual([AGENT_FILE]);
    expect(cycle!.perushCommit).toBe((await repoGit("rev-parse", "HEAD")).trim());

    // Rollback to cycle 0 restores the baseline
    await handleRollback(0);
    expect(await readFile(join(repo, DIRECTOR_FILE), "utf-8")).toBe("v0\n");
    expect(await readFile(join(repo, AGENT_FILE), "utf-8")).toBe("v0\n");
    expect(await subjectOf("HEAD")).toBe(`Rollback perush files to cycle 0 (${meeting.meetingId})`);
    expect(events.errors).toEqual([]);
  });

  test("when committing on main fails, the Director is told - and the cycle records no (wrong) restore point", async () => {
    freshState();
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);
    await startAndTrack("Commit Fails", ["milo", "shalom"]);
    await write(DIRECTOR_FILE, "edited by the Director\n");
    await writeFile(join(repo, ".git/index.lock"), "");                 // e.g. an IDE's git holds the lock

    const cycle = await runCycle("human", "Opening prompt");

    expect(cycle!.perushCommit).toBeUndefined();
    expect(events.errors.some(error => error.includes("index.lock"))).toBe(true);
  });

  test("a file ignored on resume stays ignored by a later rollback - not committed, not restored", async () => {
    freshState();
    const { handlers } = createEventCollector();
    setEventHandlers(handlers);
    const UNRELATED_FILE = "פירוש/1-בראשית/לא-קשור.rtl.md";
    const meeting = await startAndTrack("Ignore On Resume", ["milo", "shalom"]);
    await runCycle("human", "Opening prompt");
    await endCurrentMeeting();

    await write(UNRELATED_FILE, "the Director's unrelated work\n");
    await resumeMeetingById(meeting.meetingId, { [UNRELATED_FILE]: "ignore" });
    expect(getMeeting()!.perushScope!.ignoredPaths).toEqual([UNRELATED_FILE]);

    await handleRollback(0);

    expect(getMeeting()!.perushScope!.ignoredPaths).toEqual([UNRELATED_FILE]);
    expect(await readFile(join(repo, UNRELATED_FILE), "utf-8")).toBe("the Director's unrelated work\n");
    expect(await repoGit("log", "--all", "--format=%H", "--", UNRELATED_FILE)).toBe("");   // never committed
  });

  test("a meeting created before perushBaseline existed: rollback leaves the perush files alone, and says so", async () => {
    freshState();
    const { handlers } = createEventCollector();
    setEventHandlers(handlers);
    // Started with the flow off - so, like an old meeting, no baseline is saved in its meeting.yaml
    setPerushGitRootForTests(undefined);
    await startAndTrack("Old Meeting", ["milo"]);
    expect(getMeeting()!.perushBaseline).toBeUndefined();
    setPerushGitRootForTests(repo);
    await write(DIRECTOR_FILE, "edited\n");

    const progress: Array<string | undefined> = [];
    await handleRollback(0, (_step, detail) => progress.push(detail));

    expect(await readFile(join(repo, DIRECTOR_FILE), "utf-8")).toBe("edited\n");
    expect(progress.some(detail => detail?.includes("לא שוחזרו"))).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Resume Meeting
// ---------------------------------------------------------------------------

describe("resumeMeetingById", () => {
  test("throws if a different meeting is already active", async () => {
    freshState();
    await startAndTrack("Test", ["milo"]);

    await expect(resumeMeetingById(generateMeetingId("some-other-id", new Date()))).rejects.toThrow("already active");

    // Also test: resuming same meeting is a no-op
    const meeting = getMeeting()!;
    const resumed = await resumeMeetingById(meeting.meetingId);
    expect(resumed).toBe(meeting);

    await endCurrentMeeting();
  });

  test("resumes ended meeting and runs additional cycles", async () => {
    freshState();
    const meeting = await startAndTrack("Resume Test", ["milo", "shalom"]);
    const meetingId = meeting.meetingId;

    await runCycle("human", "Opening prompt");
    const cycleCount = getMeeting()!.cycles.length;

    await endCurrentMeeting();
    expect(getMeeting()).toBeNull();

    // Resume
    const resumed = await resumeMeetingById(meetingId);
    expect(resumed.meetingId).toBe(meetingId);
    expect(resumed.title).toBe("Resume Test");
    expect(resumed.cycles).toHaveLength(cycleCount);
    expect(resumed.sessionIds.milo).toBeTruthy();
    expect(resumed.sessionIds.shalom).toBeTruthy();
    expect(resumed.sessionIds.orchestrator).toBeTruthy();
    expect(getPhase()).toBe("idle");

    // Run additional cycle after resume
    const lastCycle = getMeeting()!.cycles[getMeeting()!.cycles.length - 1];
    await runCycle(lastCycle.speech.speaker, lastCycle.speech.content);
    expect(getMeeting()!.cycles).toHaveLength(cycleCount + 1);

    await endCurrentMeeting();
  });
});
