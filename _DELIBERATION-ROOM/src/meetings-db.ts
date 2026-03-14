/**
 * meetings-db.ts — Git-as-database conversation store.
 *
 * Each meeting lives on its own orphan branch (sessions/<meeting-id>).
 * Active meetings use a git worktree for regular file I/O.
 * Ended meetings are read via `git show`.
 *
 * Imports from: types.ts, config.ts
 */

import { $ } from "bun";
import { join } from "path";
import { readFile, writeFile, rename, unlink, stat, mkdir } from "fs/promises";
import { stringify as yamlStringify, parse as yamlParse } from "yaml";
import {
  AgentId,
  BranchName,
  branchNameToMeetingId, cycleTagMain, cycleTagSession,
  Meeting,
  MeetingId,
  meetingIdToBranchName,
  meetingIdToTagIdPrefix,
  MeetingSummary,
  SESSION_BRANCH_PREFIX,
  SpeakerId,
} from "./types";
import { MeetingSchema } from "./types";
import {
  DELIBERATION_DIR,
  MEETINGS_DIR,
  COMMIT_INITIAL,
  COMMIT_MEETING_ENDED,
  commitCycleMessage,
  commitPerushUpdate,
} from "./config";
import {logInfo, logWarn, logError} from "./logs.ts";

// ---------------------------------------------------------------------------
// Meeting ID generation
// ---------------------------------------------------------------------------

/**
 * Generate a meeting ID from the title and start time.
 * Produces a URL-safe slug: lowercase alphanumeric + hyphens.
 */
export function generateMeetingId(title: string, startedAt: Date): MeetingId {
  // Slugify: keep Hebrew (as-is), Latin, digits; replace everything else with hyphens
  const slug = title
      .trim()
      .replace(/[^\p{L}\p{N}]+/gu, "-") // replace non-letter/non-digit runs with hyphens
      .replace(/^-+|-+$/g, "")           // strip leading/trailing hyphens
      .toLowerCase();

  // Random suffix to avoid collisions if two meetings share the same title and minute
  const rand = Math.random().toString(36).slice(2, 5);

  return `${
    startedAt.getFullYear()}-${
    String(startedAt.getMonth() + 1).padStart(2, "0") as unknown as number}-${
    String(startedAt.getDate()).padStart(2, "0") as unknown as number}--${
    String(startedAt.getHours()).padStart(2, "0") as unknown as number}-${
    String(startedAt.getMinutes()).padStart(2, "0") as unknown as number}--${
    slug || "meeting"}-${rand}`;
}

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

/** Get the root of the git repository (parent of _DELIBERATION-ROOM) */
async function getGitRoot(): Promise<string> {
  const result = await $`git -C ${DELIBERATION_DIR} rev-parse --show-toplevel`.quiet();
  return result.stdout.toString().trim();
}

// ---------------------------------------------------------------------------
// Worktree management
// ---------------------------------------------------------------------------

/**
 * Create a new meeting with an orphan branch and worktree.
 * Returns the worktree path.
 */
export async function createMeetingWorktree(meetingId: MeetingId): Promise<string> {
  logInfo("meetings-db", `createMeetingWorktree: ${meetingId}`);
  const worktreePath = join(MEETINGS_DIR, meetingId);
  const branchName = meetingIdToBranchName(meetingId);
  const gitRoot = await getGitRoot();

  // Ensure the .meetings directory exists
  await mkdir(MEETINGS_DIR, { recursive: true });

  // Clean up if worktree already exists (idempotent)
  try {
    await stat(worktreePath);
    logWarn("meetings-db", `createMeetingWorktree: existing worktree found, removing: ${worktreePath}`);
    await $`git -C ${gitRoot} worktree remove --force ${worktreePath}`.quiet();
  } catch {
    // Doesn't exist — good
  }

  // Delete the branch if it already exists (idempotent for re-creation)
  try {
    await $`git -C ${gitRoot} branch -D ${branchName}`.quiet();
    logWarn("meetings-db", `createMeetingWorktree: deleted existing branch: ${branchName}`);
  } catch {
    // Doesn't exist — good
  }

  // Create orphan branch + worktree (compatible with git < 2.42 which lacks --orphan)
  // Step 1: Create a detached worktree
  await $`git -C ${gitRoot} worktree add --detach ${worktreePath}`.quiet();
  // Step 2: Switch to an orphan branch inside the worktree (empties the index)
  await $`git -C ${worktreePath} switch --orphan ${branchName}`.quiet();

  logInfo("meetings-db", `createMeetingWorktree: done → ${worktreePath} on ${branchName}`);
  return worktreePath;
}

/**
 * Write the initial meeting.yaml and make the first commit.
 */
export async function initializeMeeting(worktreePath: string, meeting: Meeting): Promise<void> {
  logInfo("meetings-db", `initializeMeeting: ${meeting.meetingId} (${meeting.participants.length} participants)`);
  await writeMeetingAtomic(worktreePath, meeting);
  await $`git -C ${worktreePath} add -A`.quiet();
  await $`git -C ${worktreePath} commit -m ${COMMIT_INITIAL}`.quiet();
  logInfo("meetings-db", `initializeMeeting: initial commit done`);
}

/**
 * End a meeting: final commit + remove worktree.
 */
export async function endMeeting(meetingId: MeetingId, worktreePath: string): Promise<void> {
  logInfo("meetings-db", `endMeeting: ${meetingId}`);
  const gitRoot = await getGitRoot();

  // Final commit (allow empty in case no changes since last cycle)
  await $`git -C ${worktreePath} add -A`.quiet();
  try {
    await $`git -C ${worktreePath} commit -m ${COMMIT_MEETING_ENDED} --allow-empty`.quiet();
  } catch {
    // Commit might fail if nothing to commit — that's fine
  }

  // Remove the worktree (the branch persists)
  await $`git -C ${gitRoot} worktree remove ${worktreePath}`.quiet();
  logInfo("meetings-db", `endMeeting: done, worktree removed`);
}

/**
 * Resume a meeting: re-attach the worktree to the existing branch.
 * Returns the worktree path.
 */
export async function resumeMeeting(meetingId: MeetingId): Promise<string> {
  logInfo("meetings-db", `resumeMeeting: ${meetingId}`);
  const worktreePath = join(MEETINGS_DIR, meetingId);
  const branchName = meetingIdToBranchName(meetingId);
  const gitRoot = await getGitRoot();

  // Ensure the .meetings directory exists
  await mkdir(MEETINGS_DIR, { recursive: true });

  // Clean up if worktree already exists (crash recovery)
  try {
    await stat(worktreePath);
    logWarn("meetings-db", `resumeMeeting: stale worktree found, removing: ${worktreePath}`);
    await $`git -C ${gitRoot} worktree remove --force ${worktreePath}`.quiet();
  } catch {
    // Doesn't exist — good
  }

  // Re-attach worktree to the existing branch
  await $`git -C ${gitRoot} worktree add ${worktreePath} ${branchName}`.quiet();

  logInfo("meetings-db", `resumeMeeting: done → ${worktreePath}`);
  return worktreePath;
}

// ---------------------------------------------------------------------------
// Meeting I/O
// ---------------------------------------------------------------------------

/**
 * Write meeting.yaml atomically using temp-file-then-rename.
 */
export async function writeMeetingAtomic(worktreePath: string, meeting: Meeting): Promise<void> {
  const targetPath = join(worktreePath, "meeting.yaml");
  const tempPath = join(worktreePath, `.meeting.yaml.tmp.${Date.now()}`);
  const content = yamlStringify(meeting);

  await writeFile(tempPath, content, "utf-8");
  try {
    await rename(tempPath, targetPath);
  } catch (err) {
    // Clean up orphaned temp file before re-throwing
    try { await unlink(tempPath); } catch { /* best-effort */ }
    throw err;
  }
}

/**
 * Read meeting.yaml from an active meeting's worktree.
 */
export async function readActiveMeeting(worktreePath: string): Promise<Meeting> {
  const content = await readFile(join(worktreePath, "meeting.yaml"), "utf-8");
  return MeetingSchema.parse(yamlParse(content));
}

/**
 * Read meeting.yaml from an ended meeting via `git show`.
 */
export async function readEndedMeeting(meetingId: MeetingId): Promise<Meeting> {
  logInfo("meetings-db", `readEndedMeeting: ${meetingId}`);
  const branchName = meetingIdToBranchName(meetingId);
  const gitRoot = await getGitRoot();
  const result = await $`git -C ${gitRoot} show ${branchName}:meeting.yaml`.quiet();
  return MeetingSchema.parse(yamlParse(result.stdout.toString()));
}

// ---------------------------------------------------------------------------
// Cycle commits
// ---------------------------------------------------------------------------

/**
 * Commit the current state of the meeting worktree after a cycle.
 */
export async function commitCycle(
  worktreePath: string,
  cycleNumber: number,
  speaker: SpeakerId,
): Promise<void> {
  logInfo("meetings-db", `commitCycle: cycle ${cycleNumber}, speaker: ${speaker}`);
  await $`git -C ${worktreePath} add -A`.quiet();
  const message = commitCycleMessage(cycleNumber, speaker);
  try {
    await $`git -C ${worktreePath} commit -m ${message}`.quiet();
  } catch {
    logInfo("meetings-db", `commitCycle: nothing to commit (cycle ${cycleNumber})`);
  }
}

// ---------------------------------------------------------------------------
// Meeting listing
// ---------------------------------------------------------------------------

/**
 * Check if a meeting is currently active (has a worktree on disk).
 */
export async function isMeetingActive(meetingId: MeetingId): Promise<boolean> {
  try {
    await stat(join(MEETINGS_DIR, meetingId));
    return true;
  } catch {
    return false;
  }
}

/**
 * List all meetings by querying git branches.
 * Returns summaries sorted by most recent activity first.
 */
export async function listMeetings(): Promise<MeetingSummary[]> {
  logInfo("meetings-db", `listMeetings`);
  const gitRoot = await getGitRoot();

  // Use Bun.spawn because Bun's shell template interprets %(…) as syntax
  const formatStr = "%(refname:short)|%(committerdate:iso)|%(subject)";
  const proc = Bun.spawn(
    ["git", "-C", gitRoot, "branch", "--list", `${SESSION_BRANCH_PREFIX}*`, "--sort=-committerdate", `--format=${formatStr}`],
    { stdout: "pipe", stderr: "pipe" },
  );
  const stdoutText = await new Response(proc.stdout).text();
  await proc.exited;

  const output = stdoutText.trim();
  if (!output) return [];

  const summaries: MeetingSummary[] = [];

  for (const line of output.split("\n")) {
    const [branch, date, lastCommitMsg] = line.split("|");
    if (!branch) continue;

    const meetingId = branchNameToMeetingId(branch as BranchName);

    // Try to read meeting metadata from the branch
    let title: string | undefined;
    let cycleCount: number | undefined;
    let participants: AgentId[] | undefined;

    try {
      const meetingYaml = await $`git -C ${gitRoot} show ${branch}:meeting.yaml`.quiet();
      const meeting = yamlParse(meetingYaml.stdout.toString());
      title = meeting.title;
      cycleCount = meeting.cycles?.length;
      participants = meeting.participants;
    } catch {
      // Branch might not have meeting.yaml yet — that's fine
    }

    summaries.push({
      meetingId,
      branch,
      lastActivity: date || "",
      lastCommitMsg: lastCommitMsg || "",
      title,
      cycleCount,
      participants,
    });
  }

  logInfo("meetings-db", `listMeetings: found ${summaries.length} meeting(s)`);
  return summaries;
}

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------

/**
 * Remove dangling worktrees from previous crashes.
 */
export async function cleanupDanglingWorktrees(): Promise<void> {
  logInfo("meetings-db", `cleanupDanglingWorktrees`);
  const gitRoot = await getGitRoot();
  await $`git -C ${gitRoot} worktree prune`.quiet();
}

/**
 * Ensure git config settings required by the project (Hebrew filenames, etc.).
 * Safe to call multiple times — sets values idempotently on the local repo.
 */
export async function ensureGitConfig(): Promise<void> {
  const gitRoot = await getGitRoot();
  await $`git -C ${gitRoot} config core.quotepath false`.quiet();
  logInfo("meetings-db", `ensureGitConfig: core.quotepath=false`);
}

// ---------------------------------------------------------------------------
// Commit with custom message (for rollback, recovery, etc.)
// ---------------------------------------------------------------------------

/**
 * Commit with a custom message (for rollback, recovery, shutdown, etc.)
 */
export async function commitWithMessage(worktreePath: string, message: string): Promise<void> {
  logInfo("meetings-db", `commitWithMessage: "${message}"`);
  await $`git -C ${worktreePath} add -A`.quiet();
  try {
    await $`git -C ${worktreePath} commit -m ${message} --allow-empty`.quiet();
  } catch {
    logInfo("meetings-db", `commitWithMessage: nothing to commit`);
  }
}

/**
 * Get the commit hash for a specific cycle on the session branch.
 * Returns the commit hash, or null if not found.
 */
export async function findCycleCommit(
  worktreePath: string,
  cycleNumber: number,
  speaker: SpeakerId,
): Promise<string | null> {
  const message = commitCycleMessage(cycleNumber, speaker);
  try {
    const result = await $`git -C ${worktreePath} log --all --format=%H --grep=${message} -1`.quiet();
    const hash = result.stdout.toString().trim();
    logInfo("meetings-db", `findCycleCommit: cycle ${cycleNumber} → ${hash || "not found"}`);
    return hash || null;
  } catch {
    logWarn("meetings-db", `findCycleCommit: git log failed for cycle ${cycleNumber}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Cross-branch tagging (perush changes)
// ---------------------------------------------------------------------------

/**
 * Detect whether any perush files were modified on main.
 * Returns the list of changed file paths, or empty array if none.
 */
export async function detectPerushChanges(): Promise<string[]> {
  const gitRoot = await getGitRoot();
  try {
    const result = await $`git -C ${gitRoot} diff --name-only`.quiet();
    const lines = result.stdout.toString().trim().split("\n").filter(Boolean);
    const changed = lines.filter(
      f => f.startsWith("פירוש/") || f.startsWith("ניתוחים-לשוניים/"),
    );
    if (changed.length > 0) {
      logInfo("meetings-db", `detectPerushChanges: ${changed.length} file(s) changed`, changed);
    }
    return changed;
  } catch {
    return [];
  }
}

/**
 * Commit perush file changes on main.
 * Returns the commit hash, or null if nothing to commit.
 */
export async function commitPerushChangesOnMain(
  cycleNumber: number,
  meetingId: MeetingId,
): Promise<string | null> {
  logInfo("meetings-db", `commitPerushChangesOnMain: cycle ${cycleNumber}, meeting ${meetingId}`);
  const gitRoot = await getGitRoot();
  const message = commitPerushUpdate(cycleNumber, meetingId);

  try {
    await $`git -C ${gitRoot} add פירוש/ ניתוחים-לשוניים/`.quiet();
    await $`git -C ${gitRoot} commit -m ${message}`.quiet();
    const hash = (await $`git -C ${gitRoot} rev-parse HEAD`.quiet()).stdout.toString().trim();
    logInfo("meetings-db", `commitPerushChangesOnMain: committed ${hash.slice(0, 8)}`);
    return hash;
  } catch {
    logWarn("meetings-db", `commitPerushChangesOnMain: nothing to commit`);
    return null;
  }
}

/**
 * Create correlated tags on both main and the session branch.
 * Tags: session-cycle/<meeting-id>/main → HEAD of main, session-cycle/<meeting-id>/session → HEAD of session branch.
 * Return true if tags are created.
 */
export async function createCorrelatedTags(
  worktreePath: string,
  meetingId: MeetingId,
  cycleNumber: number,
): Promise<boolean> {
  const gitRoot = await getGitRoot();

  try {
    // Tag main's HEAD
    await $`git -C ${gitRoot} tag ${cycleTagMain(meetingId, cycleNumber)} HEAD`.quiet();

    // Tag session branch's HEAD
    const sessionHead = (
      await $`git -C ${worktreePath} rev-parse HEAD`.quiet()
    ).stdout.toString().trim();
    await $`git -C ${gitRoot} tag ${cycleTagSession(meetingId, cycleNumber)} ${sessionHead}`.quiet();

    return true;
  } catch (err) {
    logError("meetings-db", `Failed to create correlated tags: ${err}`);
    return false;
  }
}

/**
 * Async push tags and branches to remote (fire-and-forget).
 * Does NOT block the deliberation loop. Failures are logged but not thrown.
 */
export function asyncPush(meetingId: MeetingId, cycleNumber: number): void {
  (async () => {
    try {
      const gitRoot = await getGitRoot();
      await $`git -C ${gitRoot} push origin ${cycleTagMain(meetingId, cycleNumber)} ${cycleTagSession(meetingId, cycleNumber)} main ${meetingIdToBranchName(meetingId)}`.quiet();
    } catch (err) {
      logError("meetings-db", `Async push failed for meeting-id ${meetingId}: ${err}`);
    }
  })();
}

/**
 * Full cross-branch tagging flow after a cycle.
 * Detects perush changes → commits on main → creates correlated tags → async push.
 * Returns true if tagging occurred.
 */
export async function tagPerushChangesIfNeeded(
  worktreePath: string,
  cycleNumber: number,
  meetingId: MeetingId,
): Promise<boolean> {
  const changedFiles = await detectPerushChanges();
  if (changedFiles.length === 0) return false;

  logInfo("meetings-db", `tagPerushChangesIfNeeded: cycle ${cycleNumber} — committing + tagging`);

  const commitHash = await commitPerushChangesOnMain(cycleNumber, meetingId);
  if (!commitHash) return false;

  const areTagsCreated = await createCorrelatedTags(worktreePath, meetingId, cycleNumber);
  if (!areTagsCreated) return false;

  // Fire-and-forget push
  asyncPush(meetingId, cycleNumber);

  logInfo("meetings-db", `tagPerushChangesIfNeeded: done, push initiated`);
  return true;
}

// ---------------------------------------------------------------------------
// Rollback support
// ---------------------------------------------------------------------------

/**
 * Reset the session branch to a specific cycle's commit.
 * Used during in-meeting rollback.
 */
export async function resetSessionBranchToCycle(
  worktreePath: string,
  targetCycleNumber: number,
): Promise<void> {
  logInfo("meetings-db", `resetSessionBranchToCycle: target cycle ${targetCycleNumber}`);
  if (targetCycleNumber === 0) {
    // Roll back to the initial commit
    const hash = (
      await $`git -C ${worktreePath} log --format=%H --reverse`.quiet()
    ).stdout.toString().trim().split("\n")[0];
    if (hash) {
      logInfo("meetings-db", `resetSessionBranchToCycle: resetting to initial commit ${hash.slice(0, 8)}`);
      await $`git -C ${worktreePath} reset --hard ${hash}`.quiet();
    }
  } else {
    // Find the cycle commit by message pattern
    const message = commitCycleMessage(targetCycleNumber, "");
    // Use grep with partial match (just "Cycle N:")
    const grepPattern = `Cycle ${targetCycleNumber}:`;
    const result = await $`git -C ${worktreePath} log --format=%H --grep=${grepPattern} -1`.quiet();
    const hash = result.stdout.toString().trim();
    if (!hash) throw new Error(`No commit found for cycle ${targetCycleNumber}`);
    logInfo("meetings-db", `resetSessionBranchToCycle: resetting to ${hash.slice(0, 8)}`);
    await $`git -C ${worktreePath} reset --hard ${hash}`.quiet();
  }
}

/**
 * Find all per-cycle main tags for this meeting with cycle number > targetCycleNumber.
 * Returns sorted array of { cycleNumber, tagName } in ascending cycle order.
 */
async function findTagsAfterCycle(
  meetingId: MeetingId,
  targetCycleNumber: number,
): Promise<{ cycleNumber: number; tagName: string }[]> {
  const gitRoot = await getGitRoot();
  const prefix = meetingIdToTagIdPrefix(meetingId);

  try {
    const result = await $`git -C ${gitRoot} tag --list ${prefix}/c*/main`.quiet();
    const output = result.stdout.toString().trim();
    if (!output) return [];

    const parsed: { cycleNumber: number; tagName: string }[] = [];
    for (const tag of output.split("\n")) {
      const match = tag.match(/\/c(\d+)\/main$/);
      if (match) {
        const cycle = parseInt(match[1], 10);
        if (cycle > targetCycleNumber) {
          parsed.push({ cycleNumber: cycle, tagName: tag });
        }
      }
    }

    return parsed.sort((a, b) => a.cycleNumber - b.cycleNumber);
  } catch {
    return [];
  }
}

/**
 * Find the latest per-cycle main tag at or before targetCycleNumber.
 * Returns the tag name, or null if none found.
 */
async function findLatestTagAtOrBefore(
  meetingId: MeetingId,
  targetCycleNumber: number,
): Promise<string | null> {
  const gitRoot = await getGitRoot();
  const prefix = meetingIdToTagIdPrefix(meetingId);

  try {
    const result = await $`git -C ${gitRoot} tag --list ${prefix}/c*/main`.quiet();
    const output = result.stdout.toString().trim();
    if (!output) return null;

    let best: { cycleNumber: number; tagName: string } | null = null;
    for (const tag of output.split("\n")) {
      const match = tag.match(/\/c(\d+)\/main$/);
      if (match) {
        const cycle = parseInt(match[1], 10);
        if (cycle <= targetCycleNumber && (!best || cycle > best.cycleNumber)) {
          best = { cycleNumber: cycle, tagName: tag };
        }
      }
    }

    return best?.tagName ?? null;
  } catch {
    return null;
  }
}

/**
 * Roll back perush files on main to the state at or before a target cycle.
 *
 * Finds per-cycle tags created during this meeting. If any perush changes
 * were committed on main after the target cycle, restores perush files
 * to their state at (or before) the target cycle using `git checkout`.
 * Does NOT rewrite main's history — creates a new commit instead.
 */
export async function rollbackPerushOnMain(
  meetingId: MeetingId,
  targetCycleNumber: number,
): Promise<{ stashed: boolean; rolledBack: boolean }> {
  logInfo("meetings-db", `rollbackPerushOnMain: meeting ${meetingId}, target cycle ${targetCycleNumber}`);
  const gitRoot = await getGitRoot();
  const tagsAfter = await findTagsAfterCycle(meetingId, targetCycleNumber);

  if (tagsAfter.length === 0) {
    logInfo("meetings-db", `rollbackPerushOnMain: no tags after cycle ${targetCycleNumber}, nothing to roll back`);
    return { stashed: false, rolledBack: false };
  }

  logInfo("meetings-db", `rollbackPerushOnMain: ${tagsAfter.length} tag(s) to roll back`, tagsAfter.map(t => t.tagName));

  // Stash uncommitted perush changes if any
  let stashed = false;
  const uncommitted = await detectPerushChanges();
  if (uncommitted.length > 0) {
    logInfo("meetings-db", `rollbackPerushOnMain: stashing ${uncommitted.length} uncommitted file(s)`);
    try {
      await $`git -C ${gitRoot} stash push -m "Pre-rollback stash" -- פירוש/ ניתוחים-לשוניים/`.quiet();
      stashed = true;
    } catch {}
  }

  // Determine which ref to restore perush files from:
  // - A tag at or before the target cycle (the "good" state), OR
  // - The parent of the earliest post-target tag (state before any meeting perush changes)
  const goodTag = await findLatestTagAtOrBefore(meetingId, targetCycleNumber);
  const restoreRef = goodTag ?? `${tagsAfter[0].tagName}~1`;
  logInfo("meetings-db", `rollbackPerushOnMain: restoring from ref ${restoreRef}`);

  try {
    // Restore perush files to the target state (each dir separately for robustness)
    try {
      await $`git -C ${gitRoot} checkout ${restoreRef} -- פירוש/`.quiet();
    } catch {}
    try {
      await $`git -C ${gitRoot} checkout ${restoreRef} -- ניתוחים-לשוניים/`.quiet();
    } catch {}

    // Commit the restored files
    try {
      await $`git -C ${gitRoot} commit -m ${"Rollback perush files to cycle " + targetCycleNumber} --allow-empty`.quiet();
    } catch {}

    // Clean up invalidated tags (post-target, both main and session)
    for (const { tagName } of tagsAfter) {
      const sessionTag = tagName.replace(/\/main$/, "/session");
      try { await $`git -C ${gitRoot} tag -d ${tagName}`.quiet(); } catch {}
      try { await $`git -C ${gitRoot} tag -d ${sessionTag}`.quiet(); } catch {}
    }

    logInfo("meetings-db", `rollbackPerushOnMain: done (stashed=${stashed})`);
    return { stashed, rolledBack: true };
  } catch (err) {
    logError("meetings-db", `rollbackPerushOnMain: failed`, err);
    return { stashed, rolledBack: false };
  }
}
