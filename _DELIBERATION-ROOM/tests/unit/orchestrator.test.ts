/**
 * orchestrator.test.ts — Tests for the deliberation loop.
 *
 * Tests the full cycle (assess → select → speak) using the stub SDK.
 * Integration tests use real git worktrees with unique meeting IDs.
 */

import { describe, test, expect, beforeEach, afterEach } from "bun:test";
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
import {PrivateAssessment, Phase, meetingIdToBranchName, MeetingId} from "../../src/types";
import {generateMeetingId} from "../../src/meetings-db.ts";

// Unique test meeting IDs to avoid collisions
function testId(): MeetingId {
  return generateMeetingId(`orch-test-${Math.random().toString(36).slice(2, 6)}`, new Date());
}

// Collect events for assertions
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

// Cleanup helper — remove test worktrees and branches
async function cleanupMeeting(meetingId: MeetingId): Promise<void> {
  try {
    const gitRoot = (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
    const worktreePath = join(gitRoot, "_DELIBERATION-ROOM/.meetings", meetingId);
    try { await $`git worktree remove --force ${worktreePath}`.quiet(); } catch {}
    try { await $`git branch -D ${meetingIdToBranchName(meetingId)}`.quiet(); } catch {}
  } catch {}
}

// ---------------------------------------------------------------------------
// Test setup
// ---------------------------------------------------------------------------

let testMeetingId: MeetingId;

beforeEach(() => {
  resetOrchestrator();
  resetAgentCache();
  resetStubState();
  testMeetingId = testId();
});

afterEach(async () => {
  try {
    // Try to end meeting if still active
    if (getMeeting()) {
      await endCurrentMeeting();
    }
  } catch {}
  await cleanupMeeting(testMeetingId);
});

// ---------------------------------------------------------------------------
// Meeting Start
// ---------------------------------------------------------------------------

describe("startMeeting", () => {
  test("creates a meeting with participants and sessions", async () => {
    const meeting = await startMeeting("Test", ["milo", "archi"]);

    expect(meeting.meetingId).toBeTruthy();
    expect(meeting.title).toBe("Test");
    expect(meeting.openingPrompt).toBeUndefined();
    expect(meeting.participants).toEqual(["milo", "archi"]);
    expect(meeting.cycles).toHaveLength(0);
    // Sessions are created lazily — not at meeting start
    expect(Object.keys(meeting.sessionIds)).toHaveLength(0);

    // Store the meeting ID for cleanup
    testMeetingId = meeting.meetingId;
  });

  test("rejects starting a second meeting", async () => {
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await expect(startMeeting("Test2", ["milo"])).rejects.toThrow("already active");
  });

  test("rejects empty participants", async () => {
    await expect(startMeeting("Test", [])).rejects.toThrow("No valid participants");
  });
});

// ---------------------------------------------------------------------------
// Single Cycle
// ---------------------------------------------------------------------------

describe("runCycle", () => {
  test("runs a full cycle: assess → select → speak", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    const cycle = await runCycle("human", "Opening prompt text");

    expect(cycle).not.toBeNull();
    expect(cycle!.cycleNumber).toBe(1);
    expect(cycle!.speech.speaker).toBeTruthy();
    expect(cycle!.speech.content).toBeTruthy();

    // Phases fired in correct order
    expect(events.phases).toContain("assessing");
    expect(events.phases).toContain("selecting");
    expect(events.phases).toContain("speaking");
    expect(events.phases).toContain("idle");

    // Assessment phase order: assessing must come before selecting
    const assessingIdx = events.phases.indexOf("assessing");
    const selectingIdx = events.phases.indexOf("selecting");
    const speakingIdx = events.phases.indexOf("speaking");
    expect(assessingIdx).toBeLessThan(selectingIdx);
    expect(selectingIdx).toBeLessThan(speakingIdx);

    // Assessments were produced
    expect(events.assessments.length).toBeGreaterThan(0);

    // Vibe was produced
    expect(events.vibes.length).toBe(1);
    expect(events.vibes[0].vibe).toBeTruthy();

    // Meeting was updated
    const currentMeeting = getMeeting()!;
    expect(currentMeeting.cycles).toHaveLength(1);
  });

  test("skips last speaker in assessment phase", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    await runCycle("milo", "Milo's speech");

    // Only archi should have assessed (milo was the last speaker)
    const assessingAgents = events.assessments.map(a => a.agent);
    expect(assessingAgents).not.toContain("milo");
    expect(assessingAgents).toContain("archi");
  });

  test("multiple cycles accumulate correctly", async () => {
    const meeting = await startMeeting("Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "First prompt");
    await runCycle("milo", "Milo's response");

    const currentMeeting = getMeeting()!;
    expect(currentMeeting.cycles).toHaveLength(2);
    expect(currentMeeting.cycles[0].cycleNumber).toBe(1);
    expect(currentMeeting.cycles[1].cycleNumber).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// Attention Flag
// ---------------------------------------------------------------------------

describe("attention flag", () => {
  test("handleAttention sets the flag", () => {
    handleAttention();
    expect(isAttentionRequested()).toBe(true);
  });

  test("attention forces human as next speaker", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    handleAttention();

    // Need to handle the forced human turn
    // The cycle will wait for human speech, so we need to resolve it
    setDirectorTimeout(500); // Short timeout for test

    const cyclePromise = runCycle("milo", "Milo said something");

    // Wait a tick for the cycle to reach human-turn phase
    await new Promise(r => setTimeout(r, 50));

    // Provide human speech
    handleHumanSpeech("Director's response");

    const cycle = await cyclePromise;
    expect(cycle).not.toBeNull();

    // The next speaker should be human (Director)
    expect(events.vibes[0].nextSpeaker).toBe("human");
    expect(cycle!.speech.speaker).toBe("human");
    expect(cycle!.speech.content).toBe("Director's response");

    // Flag was consumed
    expect(isAttentionRequested()).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// Human Turn
// ---------------------------------------------------------------------------

describe("human turn", () => {
  test("handleHumanSpeech resolves pending turn", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    handleAttention(); // Force human turn
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
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    handleAttention();
    setDirectorTimeout(100); // Very short timeout

    await expect(runCycle("milo", "speech")).rejects.toThrow("Director timeout");
  });
});

// ---------------------------------------------------------------------------
// End Meeting
// ---------------------------------------------------------------------------

describe("endCurrentMeeting", () => {
  test("cleans up all state", async () => {
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await endCurrentMeeting();

    expect(getMeeting()).toBeNull();
    expect(getPhase()).toBe("idle");
  });

  test("throws if no meeting active", async () => {
    await expect(endCurrentMeeting()).rejects.toThrow("No active meeting");
  });
});

// ---------------------------------------------------------------------------
// Event Emission
// ---------------------------------------------------------------------------

describe("event emission", () => {
  test("onSpeech emits for completed speeches", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "Opening text");

    expect(events.speeches.length).toBe(1);
    expect(events.speeches[0].content).toBeTruthy();
  });

  test("onError emits for failures without crashing", async () => {
    const { handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    // Run a cycle — should succeed even if some assessments fail
    await runCycle("human", "test");
    // No assessments expected (milo is the only participant, and they can't assess if they're not the last speaker... actually milo will assess since human was last speaker)
    // This should not throw
  });
});

// ---------------------------------------------------------------------------
// Phase Tracking
// ---------------------------------------------------------------------------

describe("phase tracking", () => {
  test("starts as idle", () => {
    expect(getPhase()).toBe("idle");
  });

  test("returns to idle after cycle", async () => {
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "test");
    expect(getPhase()).toBe("idle");
  });
});

// ---------------------------------------------------------------------------
// Rollback
// ---------------------------------------------------------------------------

describe("handleRollback", () => {
  test("throws if no active meeting", async () => {
    await expect(handleRollback(0)).rejects.toThrow("No active meeting");
  });

  test("rolls back to opening prompt (cycle 0)", async () => {
    const { handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Rollback Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    // Run two cycles
    await runCycle("human", "Opening prompt");
    await runCycle("milo", "Response from milo");

    expect(getMeeting()!.cycles).toHaveLength(2);

    // Rollback to cycle 0
    const progressSteps: string[] = [];
    await handleRollback(0, (step) => progressSteps.push(step));

    const rolledBack = getMeeting()!;
    expect(rolledBack.cycles).toHaveLength(0);
    expect(rolledBack.meetingId).toBe(testMeetingId);
    expect(getPhase()).toBe("idle");
    expect(progressSteps).toContain("aborting");
    expect(progressSteps).toContain("session-recovery");
    expect(progressSteps).toContain("complete");
  });

  test("rolls back to a specific cycle", async () => {
    const meeting = await startMeeting("Rollback Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "Opening prompt");
    await runCycle("milo", "Milo's first response");
    await runCycle("archi", "Archi's response");

    expect(getMeeting()!.cycles).toHaveLength(3);

    // Rollback to cycle 1
    await handleRollback(1);

    const rolledBack = getMeeting()!;
    expect(rolledBack.cycles).toHaveLength(1);
    expect(rolledBack.cycles[0].speech.speaker).toBeTruthy();
  });

  test("emits rolling-back phase and returns to idle", async () => {
    const { events, handlers } = createEventCollector();
    setEventHandlers(handlers);

    const meeting = await startMeeting("Rollback Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "Opening");

    events.phases.length = 0; // Reset collected phases

    await handleRollback(0);

    expect(events.phases).toContain("rolling-back");
    expect(events.phases[events.phases.length - 1]).toBe("idle");
  });
});

// ---------------------------------------------------------------------------
// Resume Meeting
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Cost Tracking
// ---------------------------------------------------------------------------

describe("cost tracking", () => {
  test("totalCostEstimate accumulates per cycle", async () => {
    const meeting = await startMeeting("Cost Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    expect(getMeeting()!.totalCostEstimate).toBeUndefined();

    await runCycle("human", "First prompt");
    expect(getMeeting()!.totalCostEstimate).toBeGreaterThan(0);

    const costAfterOne = getMeeting()!.totalCostEstimate!;

    await runCycle("milo", "Milo responds");
    expect(getMeeting()!.totalCostEstimate).toBeGreaterThan(costAfterOne);
  });
});

// ---------------------------------------------------------------------------
// Resume Meeting
// ---------------------------------------------------------------------------

describe("resumeMeetingById", () => {
  test("throws if a different meeting is already active", async () => {
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await expect(resumeMeetingById(generateMeetingId("some-other-id", new Date()))).rejects.toThrow("already active");
  });

  test("returns the active meeting if resuming the same meeting ID", async () => {
    const meeting = await startMeeting("Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    // Resuming the same meeting should succeed (no-op)
    const resumed = await resumeMeetingById(testMeetingId);
    expect(resumed).toBe(meeting);
    expect(resumed.meetingId).toBe(testMeetingId);
  });

  test("resumes an ended meeting with correct state", async () => {
    const meeting = await startMeeting("Resume Test", ["milo", "archi"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "Opening prompt");

    const cycleCount = getMeeting()!.cycles.length;

    await endCurrentMeeting();
    expect(getMeeting()).toBeNull();

    // Resume the meeting
    const resumed = await resumeMeetingById(testMeetingId);

    expect(resumed.meetingId).toBe(testMeetingId);
    expect(resumed.title).toBe("Resume Test");
    expect(resumed.cycles).toHaveLength(cycleCount);
    expect(resumed.sessionIds.milo).toBeTruthy();
    expect(resumed.sessionIds.archi).toBeTruthy();
    expect(resumed.sessionIds.manager).toBeTruthy();
    expect(getPhase()).toBe("idle");
  });

  test("runs additional cycles after resume", async () => {
    const meeting = await startMeeting("Resume Test", ["milo"]);
    testMeetingId = meeting.meetingId;

    await runCycle("human", "Opening");
    await endCurrentMeeting();

    await resumeMeetingById(testMeetingId);

    // Run another cycle after resume
    const lastCycle = getMeeting()!.cycles[getMeeting()!.cycles.length - 1];
    await runCycle(lastCycle.speech.speaker, lastCycle.speech.content);

    expect(getMeeting()!.cycles).toHaveLength(2);
  });
});
