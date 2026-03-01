/**
 * conversation.ts — Git-as-database conversation store.
 *
 * Each meeting lives on its own orphan branch (sessions/<meeting-id>).
 * Active meetings use a git worktree for regular file I/O.
 * Ended meetings are read via `git show`.
 *
 * Imports from: types.ts, config.ts
 */

import { $ } from "bun";
import { join } from "path";
import { readFile, writeFile, rename, stat, mkdir } from "fs/promises";
import { stringify as yamlStringify, parse as yamlParse } from "yaml";
import type { Meeting, MeetingSummary } from "./types";
import { MeetingSchema } from "./types";
import {
  DELIBERATION_DIR,
  MEETINGS_DIR,
  SESSION_BRANCH_PREFIX,
  TAG_PREFIX,
  COMMIT_INITIAL,
  COMMIT_MEETING_ENDED,
  commitCycleMessage,
  commitPerushUpdate,
} from "./config";

// ---------------------------------------------------------------------------
// Meeting ID generation
// ---------------------------------------------------------------------------

/**
 * Generate a meeting ID from the title and start time.
 * Produces a URL-safe slug: lowercase alphanumeric + hyphens.
 */
export function generateMeetingId(title: string, startedAt: Date): string {
  const dateStr = [
    startedAt.getFullYear(),
    String(startedAt.getMonth() + 1).padStart(2, "0"),
    String(startedAt.getDate()).padStart(2, "0"),
  ].join("-");

  const timeStr = [
    String(startedAt.getHours()).padStart(2, "0"),
    String(startedAt.getMinutes()).padStart(2, "0"),
  ].join("-");

  // Slugify: keep Hebrew (as-is), Latin, digits; replace everything else with hyphens
  const slug = title
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-") // replace non-letter/non-digit runs with hyphens
    .replace(/^-+|-+$/g, "")           // strip leading/trailing hyphens
    .toLowerCase();

  return `${dateStr}--${timeStr}--${slug || "meeting"}`;
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
export async function createMeetingWorktree(meetingId: string): Promise<string> {
  const worktreePath = join(MEETINGS_DIR, meetingId);
  const branchName = `${SESSION_BRANCH_PREFIX}${meetingId}`;
  const gitRoot = await getGitRoot();

  // Ensure the meetings directory exists
  await mkdir(MEETINGS_DIR, { recursive: true });

  // Clean up if worktree already exists (idempotent)
  try {
    await stat(worktreePath);
    await $`git -C ${gitRoot} worktree remove --force ${worktreePath}`.quiet();
  } catch {
    // Doesn't exist — good
  }

  // Delete the branch if it already exists (idempotent for re-creation)
  try {
    await $`git -C ${gitRoot} branch -D ${branchName}`.quiet();
  } catch {
    // Doesn't exist — good
  }

  // Create orphan branch + worktree (compatible with git < 2.42 which lacks --orphan)
  // Step 1: Create a detached worktree
  await $`git -C ${gitRoot} worktree add --detach ${worktreePath}`.quiet();
  // Step 2: Switch to an orphan branch inside the worktree (empties the index)
  await $`git -C ${worktreePath} switch --orphan ${branchName}`.quiet();

  return worktreePath;
}

/**
 * Write the initial meeting.yaml and make the first commit.
 */
export async function initializeMeeting(worktreePath: string, meeting: Meeting): Promise<void> {
  await writeMeetingAtomic(worktreePath, meeting);
  await $`git -C ${worktreePath} add -A`.quiet();
  await $`git -C ${worktreePath} commit -m ${COMMIT_INITIAL}`.quiet();
}

/**
 * End a meeting: final commit + remove worktree.
 */
export async function endMeeting(meetingId: string, worktreePath: string): Promise<void> {
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
}

/**
 * Resume a meeting: re-attach the worktree to the existing branch.
 * Returns the worktree path.
 */
export async function resumeMeeting(meetingId: string): Promise<string> {
  const worktreePath = join(MEETINGS_DIR, meetingId);
  const branchName = `${SESSION_BRANCH_PREFIX}${meetingId}`;
  const gitRoot = await getGitRoot();

  // Ensure the meetings directory exists
  await mkdir(MEETINGS_DIR, { recursive: true });

  // Clean up if worktree already exists (crash recovery)
  try {
    await stat(worktreePath);
    await $`git -C ${gitRoot} worktree remove --force ${worktreePath}`.quiet();
  } catch {
    // Doesn't exist — good
  }

  // Re-attach worktree to the existing branch
  await $`git -C ${gitRoot} worktree add ${worktreePath} ${branchName}`.quiet();

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
  await rename(tempPath, targetPath);
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
export async function readEndedMeeting(meetingId: string): Promise<Meeting> {
  const branchName = `${SESSION_BRANCH_PREFIX}${meetingId}`;
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
  speaker: string,
): Promise<void> {
  await $`git -C ${worktreePath} add -A`.quiet();
  const message = commitCycleMessage(cycleNumber, speaker);
  try {
    await $`git -C ${worktreePath} commit -m ${message}`.quiet();
  } catch {
    // Nothing to commit — that's fine (idempotent)
  }
}

// ---------------------------------------------------------------------------
// Meeting listing
// ---------------------------------------------------------------------------

/**
 * Check if a meeting is currently active (has a worktree on disk).
 */
export async function isMeetingActive(meetingId: string): Promise<boolean> {
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

    const meetingId = branch.replace(SESSION_BRANCH_PREFIX, "");

    // Try to read meeting metadata from the branch
    let title: string | undefined;
    let cycleCount: number | undefined;
    let participants: string[] | undefined;

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

  return summaries;
}

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------

/**
 * Remove dangling worktrees from previous crashes.
 */
export async function cleanupDanglingWorktrees(): Promise<void> {
  const gitRoot = await getGitRoot();
  await $`git -C ${gitRoot} worktree prune`.quiet();
}

// ---------------------------------------------------------------------------
// Commit with custom message (for rollback, recovery, etc.)
// ---------------------------------------------------------------------------

/**
 * Commit with a custom message (for rollback, recovery, shutdown, etc.)
 */
export async function commitWithMessage(worktreePath: string, message: string): Promise<void> {
  await $`git -C ${worktreePath} add -A`.quiet();
  try {
    await $`git -C ${worktreePath} commit -m ${message} --allow-empty`.quiet();
  } catch {
    // Nothing to commit
  }
}

/**
 * Get the commit hash for a specific cycle on the session branch.
 * Returns the commit hash, or null if not found.
 */
export async function findCycleCommit(
  worktreePath: string,
  cycleNumber: number,
  speaker: string,
): Promise<string | null> {
  const message = commitCycleMessage(cycleNumber, speaker);
  try {
    const result = await $`git -C ${worktreePath} log --all --format=%H --grep=${message} -1`.quiet();
    const hash = result.stdout.toString().trim();
    return hash || null;
  } catch {
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
    return lines.filter(
      f => f.startsWith("פירוש/") || f.startsWith("ניתוחים-לשוניים/"),
    );
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
  meetingId: string,
): Promise<string | null> {
  const gitRoot = await getGitRoot();
  const message = commitPerushUpdate(cycleNumber, meetingId);

  try {
    await $`git -C ${gitRoot} add פירוש/ ניתוחים-לשוניים/`.quiet();
    await $`git -C ${gitRoot} commit -m ${message}`.quiet();
    return (await $`git -C ${gitRoot} rev-parse HEAD`.quiet()).stdout.toString().trim();
  } catch {
    return null;
  }
}

/**
 * Generate a tag ID for cross-branch correlation.
 * Format: session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-id>
 */
export function generateTagId(meetingId: string, now?: Date): string {
  const d = now ?? new Date();
  const ts = [
    d.getFullYear(),
    "-",
    String(d.getMonth() + 1).padStart(2, "0"),
    "-",
    String(d.getDate()).padStart(2, "0"),
    "--",
    String(d.getHours()).padStart(2, "0"),
    "-",
    String(d.getMinutes()).padStart(2, "0"),
    "-",
    String(d.getSeconds()).padStart(2, "0"),
  ].join("");

  return `${TAG_PREFIX}${ts}--${meetingId}`;
}

/**
 * Create correlated tags on both main and the session branch.
 * Tags: <tag-id>/main → HEAD of main, <tag-id>/session → HEAD of session branch.
 */
export async function createCorrelatedTags(
  worktreePath: string,
  meetingId: string,
): Promise<string | null> {
  const gitRoot = await getGitRoot();
  const tagId = generateTagId(meetingId);

  try {
    // Tag main's HEAD
    await $`git -C ${gitRoot} tag ${tagId}/main HEAD`.quiet();

    // Tag session branch's HEAD
    const sessionHead = (
      await $`git -C ${worktreePath} rev-parse HEAD`.quiet()
    ).stdout.toString().trim();
    await $`git -C ${gitRoot} tag ${tagId}/session ${sessionHead}`.quiet();

    return tagId;
  } catch (err) {
    console.error(`Failed to create correlated tags: ${err}`);
    return null;
  }
}

/**
 * Async push tags and branches to remote (fire-and-forget).
 * Does NOT block the deliberation loop. Failures are logged but not thrown.
 */
export function asyncPush(tagId: string, meetingId: string): void {
  (async () => {
    try {
      const gitRoot = await getGitRoot();
      const branchName = `${SESSION_BRANCH_PREFIX}${meetingId}`;
      await $`git -C ${gitRoot} push origin ${tagId}/main ${tagId}/session main ${branchName}`.quiet();
    } catch (err) {
      console.error(`Async push failed for ${tagId}: ${err}`);
    }
  })();
}

/**
 * Full cross-branch tagging flow after a cycle.
 * Detects perush changes → commits on main → creates correlated tags → async push.
 * Returns the tag ID if tagging occurred, null otherwise.
 */
export async function tagPerushChangesIfNeeded(
  worktreePath: string,
  cycleNumber: number,
  meetingId: string,
): Promise<string | null> {
  const changedFiles = await detectPerushChanges();
  if (changedFiles.length === 0) return null;

  const commitHash = await commitPerushChangesOnMain(cycleNumber, meetingId);
  if (!commitHash) return null;

  const tagId = await createCorrelatedTags(worktreePath, meetingId);
  if (!tagId) return null;

  // Fire-and-forget push
  asyncPush(tagId, meetingId);

  return tagId;
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
  if (targetCycleNumber === 0) {
    // Roll back to the initial commit
    const hash = (
      await $`git -C ${worktreePath} log --format=%H --reverse`.quiet()
    ).stdout.toString().trim().split("\n")[0];
    if (hash) {
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
    await $`git -C ${worktreePath} reset --hard ${hash}`.quiet();
  }
}

/**
 * Find all correlated tags for a meeting that are after a given cycle.
 * Returns tag IDs sorted chronologically.
 */
export async function findTagsAfterCycle(
  meetingId: string,
  afterCycleNumber: number,
): Promise<string[]> {
  const gitRoot = await getGitRoot();
  try {
    const result = await $`git -C ${gitRoot} tag --list ${TAG_PREFIX}*--${meetingId}/*`.quiet();
    const allTags = result.stdout.toString().trim().split("\n").filter(Boolean);

    // Extract unique tag base IDs (without /main or /session suffix)
    const tagBaseSet = new Set<string>();
    for (const tag of allTags) {
      const base = tag.replace(/\/(main|session)$/, "");
      tagBaseSet.add(base);
    }

    return Array.from(tagBaseSet).sort();
  } catch {
    return [];
  }
}

/**
 * Roll back perush files on main to the state before a specific tag.
 * Stashes any uncommitted perush changes first.
 */
export async function rollbackPerushOnMain(
  meetingId: string,
  targetCycleNumber: number,
): Promise<{ stashed: boolean; rolledBack: boolean }> {
  const gitRoot = await getGitRoot();
  const tags = await findTagsAfterCycle(meetingId, targetCycleNumber);

  if (tags.length === 0) {
    return { stashed: false, rolledBack: false };
  }

  // Stash uncommitted perush changes if any
  let stashed = false;
  const uncommitted = await detectPerushChanges();
  if (uncommitted.length > 0) {
    try {
      await $`git -C ${gitRoot} stash push -m "Pre-rollback stash" -- פירוש/ ניתוחים-לשוניים/`.quiet();
      stashed = true;
    } catch {}
  }

  // Find the earliest tag (the one at or before the target cycle)
  // and reset main to that point
  // For simplicity: the first tag in sorted order is the earliest
  const firstTag = tags[0];
  try {
    await $`git -C ${gitRoot} reset --hard ${firstTag}/main`.quiet();
    return { stashed, rolledBack: true };
  } catch {
    return { stashed, rolledBack: false };
  }
}
