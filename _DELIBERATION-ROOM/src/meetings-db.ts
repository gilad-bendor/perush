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
import { readFile, writeFile, rename, unlink, stat, mkdir, realpath } from "fs/promises";
import { stringify as yamlStringify, parse as yamlParse } from "yaml";
import {
  AgentId,
  BranchName,
  branchNameToMeetingId,
  Meeting,
  MeetingId,
  meetingIdToBranchName,
  meetingIdToTagIdPrefix,
  MeetingSummary,
  PerushChange,
  PerushScope,
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
  PERUSH_TRACKED_PATHS,
  PERUSH_ON_MAIN_DISABLED,
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

  const mo = String(startedAt.getMonth() + 1).padStart(2, "0");
  const dd = String(startedAt.getDate()).padStart(2, "0");
  const hh = String(startedAt.getHours()).padStart(2, "0");
  const mi = String(startedAt.getMinutes()).padStart(2, "0");
  return `${startedAt.getFullYear()}-${mo}-${dd}--${hh}-${mi}--${slug || "meeting"}-${rand}` as MeetingId;
}

// ---------------------------------------------------------------------------
// Git helpers
// ---------------------------------------------------------------------------

/** Get the root of the git repository (parent of _DELIBERATION-ROOM) */
async function getGitRoot(): Promise<string> {
  const result = await $`git -C ${DELIBERATION_DIR} rev-parse --show-toplevel`.quiet();
  return result.stdout.toString().trim();
}

/**
 * Run git with an argument list, and return its stdout (throws on a non-zero exit).
 *
 * Use this - not Bun's $`...` - whenever an argument is written as a literal in the code and may contain
 * non-ASCII text: Bun's shell turns literal Hebrew into "u05E4u05D9..." (Bun 1.3.8), so
 * $`git add פירוש/` fails, while interpolated ${values} are fine.
 */
async function git(gitRoot: string, ...args: string[]): Promise<string> {
  const proc = Bun.spawn(["git", "-C", gitRoot, ...args], { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);
  if (exitCode !== 0) {
    throw new Error(`git ${args.join(" ")} failed (exit ${exitCode}): ${(stderr || stdout).trim()}`);
  }
  return stdout;
}

// ---------------------------------------------------------------------------
// Perush on main - the repository the meetings commit, tag and roll back the perush files in
// ---------------------------------------------------------------------------

/** A scratch repository that tests point the perush-on-main functions at */
let perushGitRootForTests: string | undefined;
export function setPerushGitRootForTests(gitRoot: string | undefined): void {
  perushGitRootForTests = gitRoot;
}

/**
 * The root of the repository whose perush files the meetings commit, tag and roll back - or null when
 * this is disabled: under tests (NODE_ENV=test), unless a test set a scratch repository.
 * Tests run real cycles - and must never commit to the real main.
 */
async function getPerushGitRoot(): Promise<string | null> {
  if (perushGitRootForTests) return perushGitRootForTests;
  if (PERUSH_ON_MAIN_DISABLED) return null;
  return getGitRoot();
}

/** The default scope of a new meeting: PERUSH_TRACKED_PATHS, nothing ignored */
export function defaultPerushScope(): PerushScope {
  return { trackedPaths: [...PERUSH_TRACKED_PATHS], ignoredPaths: [] };
}

/**
 * The git pathspec of a scope: its tracked folders (those holding files git knows or would add - a pathspec
 * that matches nothing fails the whole git command), minus its ignored files.
 * Empty when no tracked folder is left - and callers must then do nothing: "commit --" with no paths
 * would commit the whole index.
 */
async function scopePathspec(gitRoot: string, scope: PerushScope): Promise<string[]> {
  const paths: string[] = [];
  for (const trackedPath of scope.trackedPaths) {
    // Files in the index, or new files that aren't gitignored - a folder with neither matches nothing
    const known = (await git(gitRoot, "ls-files", "-z", "--", trackedPath)).length > 0
        || (await git(gitRoot, "ls-files", "-z", "--others", "--exclude-standard", "--", trackedPath)).length > 0;
    if (known) paths.push(trackedPath);
  }
  if (paths.length === 0) return [];
  // "literal": file names are not globs (a name may contain "[" or "*")
  return [...paths, ...scope.ignoredPaths.map(ignoredPath => `:(exclude,literal)${ignoredPath}`)];
}

/**
 * Throw unless `worktreePath` is the root of its own worktree, on a session branch.
 *
 * `.meetings/<id>` lives inside the main repo's working tree, so if the worktree
 * was removed (or never created) but the directory exists, a `git -C <path>`
 * silently resolves to the MAIN repo — and `add -A` / `commit` / `reset --hard`
 * would then act on `main` and the user's uncommitted work. Call this before
 * every mutating git command scoped to a meeting worktree.
 */
async function assertMeetingWorktree(worktreePath: string): Promise<void> {
  const expected = await realpath(worktreePath);
  const toplevel = (await $`git -C ${worktreePath} rev-parse --show-toplevel`.quiet()).stdout.toString().trim();
  const branch = (await $`git -C ${worktreePath} symbolic-ref --short -q HEAD`.quiet().nothrow()).stdout.toString().trim();
  if (toplevel !== expected || !branch.startsWith(SESSION_BRANCH_PREFIX)) {
    const msg = `Refusing git write: ${worktreePath} is not a meeting worktree (toplevel: ${toplevel}, branch: ${branch || "<detached>"})`;
    logError("meetings-db", msg);
    throw new Error(msg);
  }
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
  // Step 1: Create a detached worktree. --no-checkout: step 2 empties the tree anyway,
  // so checking out all of main (~200 MB, mostly docs/) would be pure waste (~6s).
  await $`git -C ${gitRoot} worktree add --detach --no-checkout ${worktreePath}`.quiet();
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
  await assertMeetingWorktree(worktreePath);
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
  await assertMeetingWorktree(worktreePath);
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
  await assertMeetingWorktree(worktreePath);
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

  // Use Bun.spawn because Bun's shell template interprets %(...) as syntax
  const formatStr = "%(refname:short)|%(committerdate:iso)|%(subject)";
  const proc = Bun.spawn(
    ["git", "-C", gitRoot, "branch", "--list", `${SESSION_BRANCH_PREFIX}*`, "--sort=-committerdate", `--format=${formatStr}`],
    { stdout: "pipe", stderr: "pipe" },
  );
  const stdoutText = await new Response(proc.stdout).text();
  await proc.exited;

  const output = stdoutText.trim();
  if (!output) return [];

  // Parse branch listing into raw entries
  const rawEntries = output.split("\n")
    .map(line => {
      const [branch, date, lastCommitMsg] = line.split("|");
      if (!branch) return null;
      return { branch, date: date || "", lastCommitMsg: lastCommitMsg || "" };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);

  // Batch-read all meeting.yaml files in a SINGLE git process using cat-file --batch.
  // This avoids spawning N separate `git show` processes (which was the bottleneck).
  const batchInput = rawEntries.map(e => `${e.branch}:meeting.yaml`).join("\n") + "\n";
  const catFileProc = Bun.spawn(
    ["git", "-C", gitRoot, "cat-file", "--batch"],
    { stdin: "pipe", stdout: "pipe", stderr: "pipe" },
  );
  catFileProc.stdin.write(batchInput);
  catFileProc.stdin.end();
  const batchOutput = Buffer.from(await new Response(catFileProc.stdout).arrayBuffer());
  await catFileProc.exited;

  // Parse batch output: each entry is "<sha> blob <size>\n<content>\n" or "<ref> missing\n"
  const yamlContents = new Map<string, string>();
  let pos = 0;
  for (const entry of rawEntries) {
    const ref = `${entry.branch}:meeting.yaml`;
    // Read the header line
    const headerEnd = batchOutput.indexOf(0x0a, pos); // \n
    if (headerEnd === -1) break;
    const header = batchOutput.subarray(pos, headerEnd).toString();
    pos = headerEnd + 1;

    if (header.endsWith("missing")) continue;

    // Parse "<sha> blob <size>"
    const sizeStr = header.split(" ").pop();
    const size = sizeStr ? parseInt(sizeStr, 10) : 0;
    if (size > 0) {
      yamlContents.set(ref, batchOutput.subarray(pos, pos + size).toString());
      pos += size + 1; // +1 for the trailing \n after content
    }
  }

  // Build summaries using the batch-read YAML content
  const summaries: MeetingSummary[] = rawEntries.map(({ branch, date, lastCommitMsg }) => {
    const meetingId = branchNameToMeetingId(branch as BranchName);
    let title: string | undefined;
    let cycleCount: number | undefined;
    let participants: AgentId[] | undefined;
    let totalCostEstimate: number | undefined;

    const raw = yamlContents.get(`${branch}:meeting.yaml`);
    if (raw) {
      // Extract fields with regex — avoids full YAML parse (meeting.yaml can be huge)
      const titleMatch = raw.match(/^title:\s*(.+)$/m);
      title = titleMatch?.[1]?.trim().replace(/^["']|["']$/g, "");

      const partMatch = raw.match(/^participants:\n((?:\s+-\s+.+\n)*)/m);
      if (partMatch) {
        participants = [...partMatch[1].matchAll(/^\s+-\s+(.+)$/gm)].map(m => m[1].trim() as AgentId);
      }

      // Count cycles by counting "- cycleNumber:" entries (much faster than parsing full YAML)
      const cycleMatches = raw.match(/^  - cycleNumber:/gm);
      cycleCount = cycleMatches?.length;

      // Extract totalCostEstimate
      const costMatch = raw.match(/^totalCostEstimate:\s*(.+)$/m);
      if (costMatch) {
        const parsed = parseFloat(costMatch[1]);
        if (!isNaN(parsed)) totalCostEstimate = parsed;
      }
    }

    return {
      meetingId,
      branch,
      lastActivity: date,
      lastCommitMsg,
      title,
      cycleCount,
      participants,
      totalCostEstimate,
    };
  });

  logInfo("meetings-db", `listMeetings: found ${summaries.length} meeting(s)`);
  return summaries;
}

// ---------------------------------------------------------------------------
// Delete meetings by title
// ---------------------------------------------------------------------------

/**
 * Delete all meetings whose title matches the given string.
 * Removes worktrees, branches, and associated tags.
 * Returns the number of meetings deleted.
 */
export async function deleteMeetingsByTitle(title: string): Promise<number> {
  logInfo("meetings-db", `deleteMeetingsByTitle: "${title}"`);
  const gitRoot = await getGitRoot();
  const meetings = await listMeetings();
  const matching = meetings.filter(m => m.title === title);

  if (matching.length === 0) {
    logInfo("meetings-db", `deleteMeetingsByTitle: no meetings found with title "${title}"`);
    return 0;
  }

  logInfo("meetings-db", `deleteMeetingsByTitle: found ${matching.length} meeting(s) to delete`);

  for (const meeting of matching) {
    const worktreePath = join(MEETINGS_DIR, meeting.meetingId);
    const branchName = meeting.branch;

    // Remove worktree if it exists
    try {
      await stat(worktreePath);
      await $`git -C ${gitRoot} worktree remove --force ${worktreePath}`.quiet();
      logInfo("meetings-db", `deleteMeetingsByTitle: removed worktree ${worktreePath}`);
    } catch {
      // No worktree — fine
    }

    // Delete associated tags
    const tagPrefix = meetingIdToTagIdPrefix(meeting.meetingId);
    try {
      // Not $`...`: Bun's shell would expand the literal "*" as a filename glob (and fail - no file matches)
      const tags = (await git(gitRoot, "tag", "--list", `${tagPrefix}/*`)).trim().split("\n").filter(Boolean);
      for (const tag of tags) {
        try { await $`git -C ${gitRoot} tag -d ${tag}`.quiet(); } catch {}
      }
    } catch {}

    // Delete the branch
    try {
      await $`git -C ${gitRoot} branch -D ${branchName}`.quiet();
      logInfo("meetings-db", `deleteMeetingsByTitle: deleted branch ${branchName}`);
    } catch {
      logWarn("meetings-db", `deleteMeetingsByTitle: failed to delete branch ${branchName}`);
    }
  }

  // Prune worktrees
  await $`git -C ${gitRoot} worktree prune`.quiet();

  logInfo("meetings-db", `deleteMeetingsByTitle: deleted ${matching.length} meeting(s)`);
  return matching.length;
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
  await assertMeetingWorktree(worktreePath);
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
// Perush files on main: detect, commit
// ---------------------------------------------------------------------------

/**
 * The uncommitted changes (modified, staged, deleted or new) in the scope's files on main.
 * Empty when the perush-on-main flow is disabled (under tests).
 */
export async function detectPerushChanges(scope: PerushScope): Promise<PerushChange[]> {
  const gitRoot = await getPerushGitRoot();
  if (!gitRoot) return [];
  const pathspec = await scopePathspec(gitRoot, scope);
  if (pathspec.length === 0) return [];
  // -z: paths as they are (never quoted), whatever core.quotepath is.
  // Each entry is "XY path"; a rename/copy entry is followed by its original path as a separate entry.
  const entries = (await git(gitRoot, "status", "--porcelain", "-z", "--untracked-files=all", "--", ...pathspec))
    .split("\0").filter(Boolean);
  const changes: PerushChange[] = [];
  for (let i = 0; i < entries.length; i++) {
    const change: PerushChange = { status: entries[i].slice(0, 2), path: entries[i].slice(3) };
    if (/^[RC]/.test(entries[i])) change.originalPath = entries[++i];
    changes.push(change);
  }
  if (changes.length > 0) {
    logInfo("meetings-db", `detectPerushChanges: ${changes.length} file(s) changed`, changes.map(change => change.path));
  }
  return changes;
}

/**
 * Commit the uncommitted changes in the scope's files on main - or only in `onlyPaths` (files inside the scope).
 * The pathspec keeps out whatever else the user happens to have staged.
 * Returns the commit hash, or null if there was nothing to commit (nothing changed, or the flow is disabled).
 * Throws when git fails (e.g. another process holds the index lock) - callers must not mistake that for "nothing to commit".
 */
export async function commitPerushChanges(
  scope: PerushScope,
  message: string,
  onlyPaths?: string[],
): Promise<string | null> {
  const gitRoot = await getPerushGitRoot();
  if (!gitRoot) return null;
  const pathspec = onlyPaths
    ? onlyPaths.map(onlyPath => `:(literal)${onlyPath}`)
    : await scopePathspec(gitRoot, scope);
  if (pathspec.length === 0) return null;              // "commit --" with no paths would commit the whole index

  const changes = onlyPaths ? onlyPaths : (await detectPerushChanges(scope)).map(change => change.path);
  if (changes.length === 0) return null;

  // `add` fails on a path that is neither on disk nor in the index (the original path of a staged rename) -
  // while `commit` needs it (to commit the rename's deletion side)
  const addPathspec = onlyPaths ? await literalPathsKnownToGit(gitRoot, onlyPaths) : pathspec;
  if (addPathspec.length > 0) await git(gitRoot, "add", "--all", "--", ...addPathspec);
  await git(gitRoot, "commit", "-m", message, "--", ...pathspec);
  const hash = (await git(gitRoot, "rev-parse", "HEAD")).trim();
  logInfo("meetings-db", `commitPerushChanges: ${hash.slice(0, 8)} "${message}"`);
  return hash;
}

/** `:(literal)` pathspecs of the paths that exist on disk or in the index */
async function literalPathsKnownToGit(gitRoot: string, paths: string[]): Promise<string[]> {
  const literals = paths.map(path => `:(literal)${path}`);
  const inIndex = new Set((await git(gitRoot, "ls-files", "-z", "--", ...literals)).split("\0").filter(Boolean));
  const known: string[] = [];
  for (const path of paths) {
    if (inIndex.has(path) || await stat(join(gitRoot, path)).then(() => true, () => false)) {
      known.push(`:(literal)${path}`);
    }
  }
  return known;
}

/** The current commit of main - or null when the perush-on-main flow is disabled (under tests) */
export async function getPerushHead(): Promise<string | null> {
  const gitRoot = await getPerushGitRoot();
  if (!gitRoot) return null;
  return (await git(gitRoot, "rev-parse", "HEAD")).trim();
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
  await assertMeetingWorktree(worktreePath);
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
 * Roll back the scope's files on main to their state at `restoreCommit` (the commit recorded at the end of
 * the target cycle, or the meeting's baseline). Ignored files are never touched.
 *
 * Uncommitted changes in the scope are first committed (`checkpointMessage`) - so nothing is lost, and
 * nothing is hidden in a stash. Then the files are restored - files added after `restoreCommit` are removed -
 * and committed (`rollbackMessage`). Main's history is never rewritten.
 */
export async function rollbackPerushOnMain(
  scope: PerushScope,
  restoreCommit: string,
  checkpointMessage: string,
  rollbackMessage: string,
): Promise<{ checkpointed: boolean; rolledBack: boolean }> {
  logInfo("meetings-db", `rollbackPerushOnMain: restoring from ${restoreCommit.slice(0, 8)}`);
  const gitRoot = await getPerushGitRoot();
  if (!gitRoot) return { checkpointed: false, rolledBack: false };
  const pathspec = await scopePathspec(gitRoot, scope);
  if (pathspec.length === 0) {                         // "commit --" with no paths would commit the whole index
    logWarn("meetings-db", `rollbackPerushOnMain: none of the tracked folders exists - nothing to roll back`);
    return { checkpointed: false, rolledBack: false };
  }

  // Never restore over uncommitted edits that could not be committed first - they would be lost
  let checkpointed: boolean;
  try {
    checkpointed = (await commitPerushChanges(scope, checkpointMessage)) !== null;
  } catch (err) {
    logError("meetings-db", `rollbackPerushOnMain: committing the uncommitted changes failed - not rolling back`, err);
    return { checkpointed: false, rolledBack: false };
  }

  let rollbackCommit: string | null;
  try {
    // `restore` (unlike `checkout <ref> -- path`) also removes files that were added after restoreCommit
    await git(gitRoot, "restore", `--source=${restoreCommit}`, "--staged", "--worktree", "--", ...pathspec);
    rollbackCommit = await commitPerushChanges(scope, rollbackMessage);
  } catch (err) {
    logError("meetings-db", `rollbackPerushOnMain: restoring failed`, err);
    return { checkpointed, rolledBack: false };
  }
  logInfo("meetings-db", `rollbackPerushOnMain: done (checkpointed=${checkpointed}, ` +
      `${rollbackCommit ? `committed ${rollbackCommit.slice(0, 8)}` : "nothing changed"})`);
  return { checkpointed, rolledBack: true };
}
