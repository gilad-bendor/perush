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

import { describe, test, expect, beforeAll, beforeEach, afterEach, afterAll } from "bun:test";
import { $ } from "bun";
import { join } from "path";
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
} from "../../src/orchestrator";
import type { OrchestratorEvents } from "../../src/orchestrator";
import { resetStubState } from "../../src/stub-sdk";
import { resetAgentCache } from "../../src/session-manager";
import { PrivateAssessment, Phase, meetingIdToBranchName, MeetingId } from "../../src/types";
import { generateMeetingId } from "../../src/meetings-db.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface CollectedEvents {
  phases: Phase[];
  speeches: Array<{ speaker: string; content: string }>;
  chunks: Array<{ speaker: string; delta: string }>;
  assessments: PrivateAssessment[];
  vibes: Array<{ vibe: string; nextSpeaker: string }>;
  yourTurns: number;
  errors: string[];
}

function createEventCollector(): { events: CollectedEvents; handlers: Partial<OrchestratorEvents> } {
  const collected: CollectedEvents = {
    phases: [],
    speeches: [],
    chunks: [],
    assessments: [],
    vibes: [],
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
      onVibe: (vibe, nextSpeaker) => collected.vibes.push({ vibe, nextSpeaker }),
      onYourTurn: () => collected.yourTurns++,
      onError: (msg) => collected.errors.push(msg),
    },
  };
}

async function cleanupMeeting(meetingId: MeetingId): Promise<void> {
  try {
    const gitRoot = (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
    const worktreePath = join(gitRoot, "_DELIBERATION-ROOM/.meetings", meetingId);
    try { await $`git worktree remove --force ${worktreePath}`.quiet(); } catch {}
    try { await $`git branch -D ${meetingIdToBranchName(meetingId)}`.quiet(); } catch {}
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
    const meeting = await startAndTrack("Test", ["milo", "archi"]);

    expect(meeting.meetingId).toBeTruthy();
    expect(meeting.title).toBe("Test");
    expect(meeting.openingPrompt).toBeUndefined();
    expect(meeting.participants).toEqual(["milo", "archi"]);
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

    await startAndTrack("Cycle Mechanics", ["milo", "archi"]);

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
    expect(events.vibes.length).toBe(1);
    expect(events.vibes[0].vibe).toBeTruthy();

    expect(getMeeting()!.cycles).toHaveLength(1);
  });

  test("skips last speaker in assessment phase", async () => {
    // Cycle 2 in the shared meeting
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    await runCycle("milo", "Milo's speech");

    const assessingAgents = events.assessments.map(a => a.agent);
    expect(assessingAgents).not.toContain("milo");
    expect(assessingAgents).toContain("archi");
  });

  test("multiple cycles accumulate correctly", async () => {
    // Already has 2 cycles from previous tests; run one more
    await runCycle("archi", "Archi's response");

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

    await startAndTrack("Test", ["milo", "archi"]);

    handleAttention();
    setDirectorTimeout(500);

    const cyclePromise = runCycle("milo", "Milo said something");

    await new Promise(r => setTimeout(r, 50));
    handleHumanSpeech("Director's response");

    const cycle = await cyclePromise;
    expect(cycle).not.toBeNull();

    expect(events.vibes[0].nextSpeaker).toBe("human");
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

    await new Promise(r => setTimeout(r, 50));
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

    await startAndTrack("Rollback Test", ["milo", "archi"]);

    await runCycle("human", "Opening prompt");
    await runCycle("milo", "Milo's first response");
    await runCycle("archi", "Archi's response");

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
    const meeting = await startAndTrack("Resume Test", ["milo", "archi"]);
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
    expect(resumed.sessionIds.archi).toBeTruthy();
    expect(resumed.sessionIds.orchestrator).toBeTruthy();
    expect(getPhase()).toBe("idle");

    // Run additional cycle after resume
    const lastCycle = getMeeting()!.cycles[getMeeting()!.cycles.length - 1];
    await runCycle(lastCycle.speech.speaker, lastCycle.speech.content);
    expect(getMeeting()!.cycles).toHaveLength(cycleCount + 1);

    await endCurrentMeeting();
  });
});
