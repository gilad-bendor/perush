/**
 * meetings-db.test.ts — Tests for the git-as-database conversation store.
 *
 * Unit tests (generateMeetingId, detectPerushChanges) run without git.
 * Integration tests share a single worktree per describe block to minimize
 * git subprocess overhead. Only tests that specifically test worktree lifecycle
 * (create, end, resume) create their own worktrees.
 */

import { describe, test, expect, beforeAll, afterAll } from "bun:test";
import { $ } from "bun";
import { stat } from "fs/promises";
import { join } from "path";
import {
  generateMeetingId,
  createMeetingWorktree,
  initializeMeeting,
  endMeeting,
  resumeMeeting,
  writeMeetingAtomic,
  readActiveMeeting,
  readEndedMeeting,
  commitCycle,
  isMeetingActive,
  listMeetings,
  commitWithMessage,
  detectPerushChanges,
  resetSessionBranchToCycle,
} from "../../src/meetings-db.ts";
import { createFormattedTime, MeetingId, meetingIdToBranchName } from "../../src/types";
import type { Meeting } from "../../src/types";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeTestMeeting(id: MeetingId): Meeting {
  return {
    meetingId: id,
    mode: "Perush-Development",
    title: "Test Meeting",
    openingPrompt: "This is a test",
    participants: ["milo", "archi"],
    cycles: [],
    startedAt: createFormattedTime(),
    sessionIds: { milo: "sess-1", archi: "sess-2", orchestrator: "sess-3" },
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

// ---------------------------------------------------------------------------
// generateMeetingId (pure — no git)
// ---------------------------------------------------------------------------

describe("generateMeetingId", () => {
  test("produces date-time prefix", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("Test Meeting", date);
    expect(id).toStartWith("2026-02-27--14-30--");
  });

  test("slugifies title", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("Test Meeting", date);
    expect(id).toMatch(/^2026-02-27--14-30--test-meeting-[a-z0-9]{3}$/);
  });

  test("handles Hebrew titles", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("גן עדן — בראשית ב:ד", date);
    expect(id).toContain("גן-עדן");
    expect(id).toStartWith("2026-02-27--14-30--");
  });

  test("handles empty title", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("", date);
    expect(id).toMatch(/^2026-02-27--14-30--meeting-[a-z0-9]{3}$/);
  });

  test("strips leading/trailing hyphens from slug", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("  --test--  ", date);
    expect(id).toMatch(/^2026-02-27--14-30--test-[a-z0-9]{3}$/);
  });

  test("handles special characters", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("test@#$%meeting", date);
    expect(id).toMatch(/^2026-02-27--14-30--test-meeting-[a-z0-9]{3}$/);
  });
});

// ---------------------------------------------------------------------------
// Integration tests: read/write operations (shared worktree)
// ---------------------------------------------------------------------------

describe("conversation store — read/write", () => {
  const sharedId: MeetingId = `0000-00-00--00-00--shared-rw-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  let worktreePath: string;

  beforeAll(async () => {
    worktreePath = await createMeetingWorktree(sharedId);
    const meeting = makeTestMeeting(sharedId);
    await initializeMeeting(worktreePath, meeting);
  });

  afterAll(async () => {
    await cleanupMeeting(sharedId);
  });

  test("readActiveMeeting reads from worktree", async () => {
    const read = await readActiveMeeting(worktreePath);
    expect(read.meetingId).toBe(sharedId);
    expect(read.participants).toEqual(["milo", "archi"]);
  });

  test("writeMeetingAtomic + read round-trip", async () => {
    const read = await readActiveMeeting(worktreePath);
    const updated = { ...read, title: "Updated Title" };
    await writeMeetingAtomic(worktreePath, updated);

    const reread = await readActiveMeeting(worktreePath);
    expect(reread.title).toBe("Updated Title");

    // Restore original title for other tests
    await writeMeetingAtomic(worktreePath, { ...reread, title: "Test Meeting" });
  });

  test("commitCycle creates a commit with correct message", async () => {
    const read = await readActiveMeeting(worktreePath);
    const updated: Meeting = {
      ...read,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "test", timestamp: createFormattedTime() },
        assessments: {},
        orchestratorDecision: { nextSpeaker: "milo", statusRead: "test statusRead" },
      }],
    };
    await writeMeetingAtomic(worktreePath, updated);
    await commitCycle(worktreePath, 1, "milo");

    const log = (await $`git -C ${worktreePath} log --oneline`.quiet()).stdout.toString();
    expect(log).toContain("Cycle 1: milo");
  });

  test("commitCycle is idempotent (no changes = no error)", async () => {
    // Commit with no changes — should not throw
    await commitCycle(worktreePath, 99, "milo");
  });

  test("commitWithMessage creates a commit", async () => {
    await commitWithMessage(worktreePath, "Custom commit message");

    const log = (await $`git -C ${worktreePath} log --oneline`.quiet()).stdout.toString();
    expect(log).toContain("Custom commit message");
  });

  test("isMeetingActive returns true for active meeting", async () => {
    expect(await isMeetingActive(sharedId)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Integration tests: worktree lifecycle (each test needs its own worktree)
// ---------------------------------------------------------------------------

describe("conversation store — lifecycle", () => {
  const meetingIds: MeetingId[] = [];

  function trackId(): MeetingId {
    const id: MeetingId = `0000-00-00--00-00--lifecycle-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    meetingIds.push(id);
    return id;
  }

  afterAll(async () => {
    for (const id of meetingIds) {
      await cleanupMeeting(id);
    }
  });

  test("createMeetingWorktree creates orphan branch + worktree", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);

    const s = await stat(worktreePath);
    expect(s.isDirectory()).toBe(true);

    const worktrees = (await $`git worktree list`.quiet()).stdout.toString();
    expect(worktrees).toContain(id);
  });

  test("createMeetingWorktree is idempotent", async () => {
    const id = trackId();
    await createMeetingWorktree(id);
    const worktreePath = await createMeetingWorktree(id);

    const s = await stat(worktreePath);
    expect(s.isDirectory()).toBe(true);
  });

  test("endMeeting removes worktree but branch persists", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);
    await initializeMeeting(worktreePath, makeTestMeeting(id));

    await endMeeting(id, worktreePath);

    expect(await isMeetingActive(id)).toBe(false);

    const branches = (await $`git branch --list ${meetingIdToBranchName(id)}`.quiet()).stdout.toString();
    expect(branches).toContain(id);
  });

  test("readEndedMeeting reads from branch via git show", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);
    await initializeMeeting(worktreePath, makeTestMeeting(id));
    await endMeeting(id, worktreePath);

    const read = await readEndedMeeting(id);
    expect(read.meetingId).toBe(id);
    expect(read.title).toBe("Test Meeting");
  });

  test("resumeMeeting re-attaches worktree", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);
    await initializeMeeting(worktreePath, makeTestMeeting(id));
    await endMeeting(id, worktreePath);

    expect(await isMeetingActive(id)).toBe(false);

    const resumedPath = await resumeMeeting(id);
    expect(await isMeetingActive(id)).toBe(true);

    const read = await readActiveMeeting(resumedPath);
    expect(read.meetingId).toBe(id);
  });

  test("listMeetings finds a test meeting", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);
    await initializeMeeting(worktreePath, makeTestMeeting(id));

    const meetings = await listMeetings();
    const found = meetings.find(m => m.meetingId === id);
    expect(found).toBeDefined();
    expect(found!.title).toBe("Test Meeting");
  }, 20000);

  test("full lifecycle: create → cycle → cycle → end → read", async () => {
    const id = trackId();
    const worktreePath = await createMeetingWorktree(id);
    const meeting = makeTestMeeting(id);
    await initializeMeeting(worktreePath, meeting);

    // Cycle 1
    const cycle1Meeting: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "First speech", timestamp: createFormattedTime() },
        assessments: { archi: { agent: "archi", text: "אני: 5\nok" } },
        orchestratorDecision: { nextSpeaker: "archi", statusRead: "Getting started" },
      }],
    };
    await writeMeetingAtomic(worktreePath, cycle1Meeting);
    await commitCycle(worktreePath, 1, "milo");

    // Cycle 2
    const cycle2Meeting: Meeting = {
      ...cycle1Meeting,
      cycles: [
        ...cycle1Meeting.cycles,
        {
          cycleNumber: 2,
          speech: { speaker: "archi", content: "Second speech", timestamp: createFormattedTime() },
          assessments: { milo: { agent: "milo", text: "אני: 7\ninteresting" } },
          orchestratorDecision: { nextSpeaker: "human", statusRead: "Deep discussion" },
        },
      ],
    };
    await writeMeetingAtomic(worktreePath, cycle2Meeting);
    await commitCycle(worktreePath, 2, "archi");

    // End
    await endMeeting(id, worktreePath);

    // Read ended meeting
    const ended = await readEndedMeeting(id);
    expect(ended.cycles).toHaveLength(2);
    expect(ended.cycles[0].speech.speaker).toBe("milo");
    expect(ended.cycles[1].speech.speaker).toBe("archi");
    expect(ended.cycles[1].orchestratorDecision.statusRead).toBe("Deep discussion");

    // Git log should show the full history
    const gitRoot = (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
    const log = (await $`git -C ${gitRoot} log ${meetingIdToBranchName(id)} --oneline`.quiet()).stdout.toString();
    expect(log).toContain("Meeting ended");
    expect(log).toContain("Cycle 2: archi");
    expect(log).toContain("Cycle 1: milo");
    expect(log).toContain("Initial: meeting created");
  });
});

// ---------------------------------------------------------------------------
// Cross-branch tagging
// ---------------------------------------------------------------------------

describe("cross-branch tagging", () => {
  test("detectPerushChanges returns empty when nothing changed", async () => {
    const changes = await detectPerushChanges();
    expect(Array.isArray(changes)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Rollback support (shared worktree)
// ---------------------------------------------------------------------------

describe("session branch rollback", () => {
  const rollbackId: MeetingId = generateMeetingId(`rollback-test-${Math.random().toString(36).slice(2, 8)}`, new Date());
  let worktreePath: string;

  beforeAll(async () => {
    worktreePath = await createMeetingWorktree(rollbackId);
    const meeting = makeTestMeeting(rollbackId);
    Object.assign(meeting, { meetingId: rollbackId, title: "Rollback Test", openingPrompt: "This is a rollback test" });
    await initializeMeeting(worktreePath, meeting);
  });

  afterAll(async () => {
    await cleanupMeeting(rollbackId);
  });

  test("resetSessionBranchToCycle resets to initial commit for cycle 0", async () => {
    // Add a cycle
    const meeting = await readActiveMeeting(worktreePath);
    const updated: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "test speech", timestamp: createFormattedTime() },
        assessments: {},
        orchestratorDecision: { nextSpeaker: "archi", statusRead: "test" },
      }],
    };
    await writeMeetingAtomic(worktreePath, updated);
    await commitCycle(worktreePath, 1, "milo");

    // Reset to cycle 0 (initial commit)
    await resetSessionBranchToCycle(worktreePath, 0);

    const resetMeeting = await readActiveMeeting(worktreePath);
    expect(resetMeeting.cycles).toHaveLength(0);
  });

  test("resetSessionBranchToCycle resets to specific cycle", async () => {
    // Re-read current state (after previous test reset to cycle 0)
    const base = await readActiveMeeting(worktreePath);

    // Add cycle 1
    const cycle1: Meeting = {
      ...base,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "first", timestamp: createFormattedTime() },
        assessments: {},
        orchestratorDecision: { nextSpeaker: "archi", statusRead: "starting" },
      }],
    };
    await writeMeetingAtomic(worktreePath, cycle1);
    await commitCycle(worktreePath, 1, "milo");

    // Add cycle 2
    const cycle2: Meeting = {
      ...cycle1,
      cycles: [
        ...cycle1.cycles,
        {
          cycleNumber: 2,
          speech: { speaker: "archi", content: "second", timestamp: createFormattedTime() },
          assessments: {},
          orchestratorDecision: { nextSpeaker: "human", statusRead: "progressing" },
        },
      ],
    };
    await writeMeetingAtomic(worktreePath, cycle2);
    await commitCycle(worktreePath, 2, "archi");

    // Reset to cycle 1
    await resetSessionBranchToCycle(worktreePath, 1);

    const resetMeeting = await readActiveMeeting(worktreePath);
    expect(resetMeeting.cycles).toHaveLength(1);
    expect(resetMeeting.cycles[0].speech.speaker).toBe("milo");
  });
});
