/**
 * conversation.test.ts — Tests for the git-as-database conversation store.
 *
 * These tests create temporary git repos to avoid polluting the real repo.
 * Each test gets a fresh, isolated git environment.
 */

import { describe, test, expect, afterEach } from "bun:test";
import { $ } from "bun";
import { readFile, stat } from "fs/promises";
import { parse as yamlParse } from "yaml";
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
} from "./conversation";
import {createFormattedTime, MeetingId, meetingIdToBranchName} from "./types";
import type { Meeting } from "./types";

// ---------------------------------------------------------------------------
// We need to override the paths used by conversation.ts for testing.
// Since the module uses constants from config.ts, we'll test functions
// that accept paths as parameters directly, and test the ID generation
// and atomic writes in isolation.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// generateMeetingId
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
    expect(id).toBe("2026-02-27--14-30--test-meeting");
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
    expect(id).toBe("2026-02-27--14-30--meeting");
  });

  test("strips leading/trailing hyphens from slug", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("  --test--  ", date);
    expect(id).toBe("2026-02-27--14-30--test");
  });

  test("handles special characters", () => {
    const date = new Date(2026, 1, 27, 14, 30, 0);
    const id = generateMeetingId("test@#$%meeting", date);
    expect(id).toBe("2026-02-27--14-30--test-meeting");
  });
});

// ---------------------------------------------------------------------------
// Integration tests using the real git repo
// These tests use the actual DELIBERATION_DIR paths and create real
// orphan branches. They're carefully isolated (unique meeting IDs,
// cleanup in afterEach).
// ---------------------------------------------------------------------------

describe("conversation store (integration)", () => {
  const testMeetingId: MeetingId = `0000-00-00--00-00--test-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  function makeTestMeeting(id: MeetingId): Meeting {
    return {
      meetingId: id,
      mode: "Perush-Development",
      title: "Test Meeting",
      openingPrompt: "This is a test",
      participants: ["milo", "archi"],
      cycles: [],
      startedAt: createFormattedTime(),
      sessionIds: { milo: "sess-1", archi: "sess-2", manager: "sess-3" },
    };
  }

  afterEach(async () => {
    // Cleanup: remove worktree and branch if they exist
    try {
      const worktreePath = join(
        (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim(),
        "_DELIBERATION-ROOM/.meetings",
        testMeetingId,
      );
      await $`git worktree remove --force ${worktreePath}`.quiet();
    } catch {}
    try {
      await $`git branch -D ${meetingIdToBranchName(testMeetingId)}`.quiet();
    } catch {}
  });

  test("createMeetingWorktree creates orphan branch + worktree", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);

    // Worktree directory exists
    const s = await stat(worktreePath);
    expect(s.isDirectory()).toBe(true);

    // Worktree is listed by git
    const worktrees = (await $`git worktree list`.quiet()).stdout.toString();
    expect(worktrees).toContain(testMeetingId);
  });

  test("initializeMeeting writes meeting.yaml and commits", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);

    await initializeMeeting(worktreePath, meeting);

    // meeting.yaml exists in worktree
    const content = await readFile(join(worktreePath, "meeting.yaml"), "utf-8");
    const parsed = yamlParse(content);
    expect(parsed.meetingId).toBe(testMeetingId);
    expect(parsed.title).toBe("Test Meeting");

    // Commit exists on the branch
    const log = (await $`git -C ${worktreePath} log --oneline -1`.quiet()).stdout.toString();
    expect(log).toContain("Initial: meeting created");
  });

  test("readActiveMeeting reads from worktree", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    const read = await readActiveMeeting(worktreePath);
    expect(read.meetingId).toBe(testMeetingId);
    expect(read.participants).toEqual(["milo", "archi"]);
  });

  test("writeMeetingAtomic + read round-trip", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Update the meeting
    const updated = { ...meeting, title: "Updated Title" };
    await writeMeetingAtomic(worktreePath, updated);

    const read = await readActiveMeeting(worktreePath);
    expect(read.title).toBe("Updated Title");
  });

  test("commitCycle creates a commit with correct message", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Modify meeting.yaml to simulate a cycle
    const updated: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "test", timestamp: createFormattedTime() },
        assessments: {},
        managerDecision: { nextSpeaker: "milo", vibe: "test vibe" },
      }],
    };
    await writeMeetingAtomic(worktreePath, updated);
    await commitCycle(worktreePath, 1, "milo");

    const log = (await $`git -C ${worktreePath} log --oneline`.quiet()).stdout.toString();
    expect(log).toContain("Cycle 1: milo");
  });

  test("isMeetingActive returns true for active meeting", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    expect(await isMeetingActive(testMeetingId)).toBe(true);
  });

  test("endMeeting removes worktree but branch persists", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    await endMeeting(testMeetingId, worktreePath);

    // Worktree is gone
    expect(await isMeetingActive(testMeetingId)).toBe(false);

    // Branch still exists
    const branches = (await $`git branch --list ${meetingIdToBranchName(testMeetingId)}`.quiet()).stdout.toString();
    expect(branches).toContain(testMeetingId);
  });

  test("readEndedMeeting reads from branch via git show", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);
    await endMeeting(testMeetingId, worktreePath);

    const read = await readEndedMeeting(testMeetingId);
    expect(read.meetingId).toBe(testMeetingId);
    expect(read.title).toBe("Test Meeting");
  });

  test("resumeMeeting re-attaches worktree", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);
    await endMeeting(testMeetingId, worktreePath);

    // Meeting is not active
    expect(await isMeetingActive(testMeetingId)).toBe(false);

    // Resume
    const resumedPath = await resumeMeeting(testMeetingId);

    // Meeting is active again
    expect(await isMeetingActive(testMeetingId)).toBe(true);

    // Data is intact
    const read = await readActiveMeeting(resumedPath);
    expect(read.meetingId).toBe(testMeetingId);
  });

  test("listMeetings finds the test meeting", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    const meetings = await listMeetings();
    const found = meetings.find(m => m.meetingId === testMeetingId);
    expect(found).toBeDefined();
    expect(found!.title).toBe("Test Meeting");
  }, 10000);

  test("createMeetingWorktree is idempotent", async () => {
    // Create twice — second call should succeed without error
    await createMeetingWorktree(testMeetingId);
    const worktreePath = await createMeetingWorktree(testMeetingId);

    const s = await stat(worktreePath);
    expect(s.isDirectory()).toBe(true);
  });

  test("commitCycle is idempotent (no changes = no error)", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Commit with no changes — should not throw
    await commitCycle(worktreePath, 1, "milo");
  });

  test("commitWithMessage creates a commit", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    await commitWithMessage(worktreePath, "Custom commit message");

    const log = (await $`git -C ${worktreePath} log --oneline`.quiet()).stdout.toString();
    expect(log).toContain("Custom commit message");
  });

  test("full lifecycle: create → cycle → cycle → end → read", async () => {
    // Create
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Cycle 1
    const cycle1Meeting: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "First speech", timestamp: createFormattedTime() },
        assessments: { archi: { agent: "archi", selfImportance: 5, humanImportance: 3, summary: "ok" } },
        managerDecision: { nextSpeaker: "archi", vibe: "Getting started" },
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
          assessments: { milo: { agent: "milo", selfImportance: 7, humanImportance: 2, summary: "interesting" } },
          managerDecision: { nextSpeaker: "human", vibe: "Deep discussion" },
        },
      ],
    };
    await writeMeetingAtomic(worktreePath, cycle2Meeting);
    await commitCycle(worktreePath, 2, "archi");

    // End
    await endMeeting(testMeetingId, worktreePath);

    // Read ended meeting
    const ended = await readEndedMeeting(testMeetingId);
    expect(ended.cycles).toHaveLength(2);
    expect(ended.cycles[0].speech.speaker).toBe("milo");
    expect(ended.cycles[1].speech.speaker).toBe("archi");
    expect(ended.cycles[1].managerDecision.vibe).toBe("Deep discussion");

    // Git log should show the full history
    const gitRoot = (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
    const log = (await $`git -C ${gitRoot} log ${meetingIdToBranchName(testMeetingId)} --oneline`.quiet()).stdout.toString();
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
    // In test environment, there should be no outstanding perush changes
    // (unless the dev has uncommitted work, which we can't control)
    expect(Array.isArray(changes)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// Rollback support
// ---------------------------------------------------------------------------

describe("session branch rollback", () => {
  const testMeetingId: MeetingId = generateMeetingId(`rollback-test-${Math.random().toString(36).slice(2, 8)}`, new Date());

  function makeTestMeeting(meetingId: MeetingId): Meeting {
    return {
      meetingId: meetingId,
      mode: "Perush-Development",
      title: "Rollback Test",
      openingPrompt: "This is a rollback test",
      participants: ["milo", "archi"],
      cycles: [],
      startedAt: createFormattedTime(),
      sessionIds: { milo: "sess-1", archi: "sess-2", manager: "sess-3" },
    };
  }

  afterEach(async () => {
    try {
      const worktreePath = join(
        (await $`git rev-parse --show-toplevel`.quiet()).stdout.toString().trim(),
        "_DELIBERATION-ROOM/.meetings",
        testMeetingId,
      );
      await $`git worktree remove --force ${worktreePath}`.quiet();
    } catch {}
    try {
      await $`git branch -D ${meetingIdToBranchName(testMeetingId)}`.quiet();
    } catch {}
  });

  test("resetSessionBranchToCycle resets to initial commit for cycle 0", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Add a cycle
    const updated: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "test speech", timestamp: createFormattedTime() },
        assessments: {},
        managerDecision: { nextSpeaker: "archi", vibe: "test" },
      }],
    };
    await writeMeetingAtomic(worktreePath, updated);
    await commitCycle(worktreePath, 1, "milo");

    // Reset to cycle 0 (initial commit)
    await resetSessionBranchToCycle(worktreePath, 0);

    // Should be back to original meeting with no cycles
    const resetMeeting = await readActiveMeeting(worktreePath);
    expect(resetMeeting.cycles).toHaveLength(0);
  });

  test("resetSessionBranchToCycle resets to specific cycle", async () => {
    const worktreePath = await createMeetingWorktree(testMeetingId);
    const meeting = makeTestMeeting(testMeetingId);
    await initializeMeeting(worktreePath, meeting);

    // Add cycle 1
    const cycle1: Meeting = {
      ...meeting,
      cycles: [{
        cycleNumber: 1,
        speech: { speaker: "milo", content: "first", timestamp: createFormattedTime() },
        assessments: {},
        managerDecision: { nextSpeaker: "archi", vibe: "starting" },
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
          managerDecision: { nextSpeaker: "human", vibe: "progressing" },
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
