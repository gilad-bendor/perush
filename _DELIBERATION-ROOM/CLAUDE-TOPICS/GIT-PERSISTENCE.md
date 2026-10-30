# Git Persistence & Session Lifecycle

> **Spin-out from `CLAUDE.md`.** Read when working on `meetings-db.ts`, `session-manager.ts`, or debugging git-related issues.

## Session File Persistence (Git Worktrees + Move+Symlink)

Agent SDK sessions produce JSONL files (one JSON object per line, appended incrementally) stored under `~/.claude/projects/`. These files contain the AI-Agent's **full internal state** — not just the public conversation, but tool usage, internal reasoning, and context evolution across cycles. By default, these files live outside the project and are not version-controlled.

We make them git-tracked using two complementary strategies:

1. **Git worktrees with orphan branches**: Each meeting gets its own orphan branch (`sessions/<meeting-id>`) with a worktree checked out at `_DELIBERATION-ROOM/.meetings/<meeting-id>/`. All meeting data — `meeting.yaml`, session JSONL files, session directories — lives on this branch, **never on `main`**. The session manager controls all commits to the branch at well-defined safe points (after each cycle).

2. **Move+symlink**: After a session is created, its directory is moved from `~/.claude/projects/` into the meeting's worktree, and a symlink is placed at the original location. Claude Code follows symlinks transparently (standard `fs.readFile`/`fs.appendFile` behavior), so it continues operating normally — while the actual file lives in the worktree under git control.

**Why this eliminates lock files and pre-commit hooks**: Session files live on an orphan branch, not `main`. The session manager is the only process that commits to the session branch, and it does so at well-defined safe points (between cycles, never during an active `query()`). Normal `git commit` on `main` never touches session files — they're on a different branch in a different directory. No coordination needed.

### How Claude Code Stores Sessions

Claude Code stores session data under `~/.claude/projects/`, with one subdirectory per project. The subdirectory name is derived from the project's absolute path (**all non-alphanumeric characters** replaced with hyphens):

```
~/.claude/projects/
  -Users-giladben-dor-dev-perush/           ← project directory (derived from /Users/giladben-dor/dev/perush)
    <session-uuid>.jsonl                     ← session transcript (JSONL)
    ...
```

**Note**: The SDK does not create or maintain a `sessions-index.json` for programmatic sessions. Session lookup is done via `listSessions({ dir })` and `getSessionMessages(sessionId, { dir })`, which scan JSONL files directly.

Each JSONL line in a session file is a **message event** with fields:
- `uuid` / `parentUuid` — message chain
- `sessionId` — session identifier
- `type` — "user" or "assistant"
- `message` — the actual content
- `cwd`, `gitBranch`, `timestamp`, `version`
- File history snapshots for crash recovery

### Git Worktree Architecture

Each meeting gets its own **orphan branch** and **worktree**. Orphan branches share no history with `main` — they're independent commit trees within the same repository.

**Why orphan branches**: Meeting data (conversation records, session files) is fundamentally different from source code. It changes at a different cadence (per-cycle vs per-feature), has different retention needs, and would clutter `main`'s history. Orphan branches keep the data in the same repo (accessible via `git show`, `git log`, `git branch`) while keeping `main` clean.

**Why worktrees**: `git worktree` lets us check out a different branch into a different directory — simultaneously with `main`. The session manager reads and writes meeting files using regular file I/O on the worktree directory, then commits at safe points. No `git checkout` or branch switching needed.

```
Repository structure (conceptual):

main branch:
  _DELIBERATION-ROOM/src/...     ← source code
  _DELIBERATION-ROOM/public/...  ← frontend
  _DELIBERATION-ROOM/CLAUDE.md   ← this file
  (NO meeting data)

sessions/2026-02-01--10-41--bereshit-2-4-eden branch (orphan):
  meeting.yaml                    ← meeting record (conversation, assessments, decisions)
  <session-uuid-1>.jsonl          ← milo's session transcript
  <session-uuid-1>/              ← milo's session directory
  <session-uuid-2>.jsonl          ← shalom's session transcript
  ...
```

**On disk during an active meeting**:

```
_DELIBERATION-ROOM/
  .meetings/                      ← gitignored on main (worktree mount point)
    bereshit-2-4-eden/            ← worktree for sessions/2026-02-01--10-41--bereshit-2-4-eden branch
      meeting.yaml
      <session-uuid>.jsonl        ← real file (symlinked from ~/.claude/projects/...)
      <session-uuid>/
      ...
```

### Creating a Meeting Worktree

At meeting start, after generating the meeting ID:

```typescript
async function createMeetingWorktree(meetingId: MeetingId): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, ".meetings", meetingId);
  const branchName = `sessions/${meetingId}`;
  const gitRoot = await getGitRoot();

  // Two steps instead of `worktree add --orphan` (which needs git 2.42+)
  await git(gitRoot, "worktree", "add", "--detach", "--no-checkout", worktreePath);
  await git(worktreePath, "switch", "--orphan", branchName);

  return worktreePath;
}
```

**`--no-checkout` is essential for speed**: without it, step 1 checks out all of `main` (~2,100 files, ~200 MB, mostly the generated `docs/`), only for `switch --orphan` to delete it all again. That took ~6–7s per meeting; with `--no-checkout` it's ~0.1s.

This creates:
- A new orphan branch `sessions/<meeting-id>` (no parent commits, no shared history with `main`).
- A worktree at `_DELIBERATION-ROOM/.meetings/<meeting-id>/` checked out on that branch.
- The worktree is a fully functional git working directory — `git -C <path> add/commit` works naturally.

### The Move+Symlink Operation

After a session is created and the first `query()` returns (giving us the `sessionId`), the session manager moves the session files into the meeting's worktree:

```typescript
import { rename, symlink, realpath, stat, mkdir } from "fs/promises";
import { join } from "path";

async function captureSession(sessionId: string, worktreePath: string): Promise<void> {
  const claudeProjectDir = getClaudeProjectDir();
  const sourcePath = join(claudeProjectDir, sessionId);
  const targetPath = join(worktreePath, sessionId);

  // Move: ~/.claude/projects/<project>/<session-id> → ./.meetings/<meeting-id>/<session-id>
  await rename(sourcePath, targetPath);

  // Symlink back: ~/.claude/projects/<project>/<session-id> → realpath of target
  await symlink(await realpath(targetPath), sourcePath);

  // Also handle the .jsonl file if it exists separately from the directory
  const jsonlSource = sourcePath + ".jsonl";
  const jsonlTarget = targetPath + ".jsonl";
  try {
    await stat(jsonlSource);
    await rename(jsonlSource, jsonlTarget);
    await symlink(await realpath(jsonlTarget), jsonlSource);
  } catch {
    // .jsonl may be inside the directory — that's fine
  }
}
```

**`getClaudeProjectDir()`** derives the Claude project directory from the project's CWD. Since the deliberation runs from the root project directory (`../`), the function resolves `realpath("../")` and replaces **all non-alphanumeric characters** with hyphens (matching the SDK's actual behavior):

```typescript
function getClaudeProjectDir(): string {
  const projectPath = resolve("../");
  const dirName = projectPath.replace(/[^a-zA-Z0-9]/g, "-").replace(/^-/, "");
  return join(homedir(), ".claude", "projects", `-${dirName}`);
}
```

**Important**: The SDK replaces ALL non-alphanumeric characters — including underscores, dots, and spaces — not just slashes.

**Cross-machine note**: The derived directory name is machine-specific (different absolute paths produce different names). The symlink creation must be performed on each machine. The session files themselves (in the worktree / on the branch) are portable and git-tracked; the symlinks are local and ephemeral.

### Per-Cycle Git Commits

After each deliberation cycle completes (speech delivered, assessments recorded, `meeting.yaml` updated), the session manager commits to the session branch:

```typescript
async function commitCycle(worktreePath: string, cycleNumber: number, speaker: SpeakerId): Promise<void> {
  await assertMeetingWorktree(worktreePath);  // see "Worktree guard" below
  await git(worktreePath, "add", "-A");
  await git(worktreePath, "commit", "-m", `Cycle ${cycleNumber}: ${speaker}`);
}
```

Each commit is an atomic snapshot of the meeting state after one cycle. **Timing**: Commits happen **between** cycles — after all writes are complete and before the next cycle begins. Since the session manager is the only process that commits to this branch, and it does so sequentially, there's no risk of committing mid-write. No lock files needed.

**Worktree guard (`assertMeetingWorktree`)**: `.meetings/<id>` lives *inside* the main repo's working tree. If that directory exists but is no longer (or never was) a worktree, `git -C <path>` silently walks up to the **main repo**, and `add -A` / `commit` / `reset --hard` would act on `main` and the user's uncommitted work. This happened once: an orphaned async `initializeMeeting` left behind by a timed-out test committed the whole working tree to `main` as "Initial: meeting created". So every mutating worktree-scoped function (`initializeMeeting`, `endMeeting`, `commitCycle`, `commitWithMessage`, `resetSessionBranchToCycle`) first checks that the path is its own `--show-toplevel` and is on a `sessions/*` branch, and throws otherwise. Any new function that writes via `git(worktreePath, ...)` must call it too.

### The Perush Files on Main

Participant-Agents can modify commentary files during their speech phase (their prompt forbids it during private assessments, which run in parallel), only through `<הצעת-קלוד>` sections. The Director edits them too, during the meeting. Each meeting tracks these edits on `main` - within its **scope** (`perushScope` in `meeting.yaml`, saved when the meeting is created):
- `trackedPaths`: the folders - `PERUSH_TRACKED_PATHS` in `config.ts` at the time the meeting was created (`פירוש/`, `נספחים-לפירוש/`, `בלשנות/ניתוחים-לשוניים/`). Fixed for the meeting's lifetime, so rollback always uses the folders its commits used.
- `ignoredPaths`: files inside them that the Director chose to leave out of the meeting - never committed, restored or stashed by it. Every git command gets them as `:(exclude,literal)<path>` pathspecs (`literal`: a file name may contain `[` or `*`).

Meetings created before the scope existed use the default scope.

**Commits on main** (`commitPerushChanges()` in `meetings-db.ts`; messages in `config.ts`, each naming the meeting):
- **Meeting start / resume**: the Director decides about every uncommitted file in the scope (see [PROTOCOL.md](PROTOCOL.md#uncommitted-perush-files)): the included ones are committed (`Pre-meeting state (<meeting-id>)` / `Meeting resumed: Director's edits (<meeting-id>)`), the ignored ones are added to `ignoredPaths`. Then, at start, `perushBaseline` in `meeting.yaml` = main's commit.
- **Before an agent speaks**: the Director's edits so far → `Cycle N: Director's edits (<meeting-id>)`.
- **After the speech**: the speaker's edits → `Cycle N: perush update by <speaker> (<meeting-id>)` (`by the Director` after a human turn). Then main's commit is recorded in the cycle record (`perushCommit`), *before* the cycle is committed to the session branch.

```typescript
// Detect: git status --porcelain -z --untracked-files=all -- <scope pathspec>
//         (modified, staged, deleted and new files; -z keeps Hebrew paths unquoted whatever core.quotepath is)
// Commit - the pathspec keeps out whatever else the user happens to have staged
await git(gitRoot, "add", "--all", "--", ...pathspec);
await git(gitRoot, "commit", "-m", message, "--", ...pathspec);
```

Edits the Director makes *while* an agent speaks can't be told apart from the agent's - they are credited to the agent.

An empty pathspec (no tracked folder holds files git knows or would add) means *do nothing*: `git commit --` with no paths would commit the whole index. `commitPerushChanges()` returns null only when there is nothing to commit, and **throws when git fails** (e.g. an IDE's git holds `.git/index.lock`): the Director is told, and the cycle records no `perushCommit` - main's commit would lack the speaker's edits. Nothing is ever pushed - pushing `main` is left to the Director.

**Rollback** to cycle T (`rollbackPerushOnMain()`): restores the scope's files from the commit recorded at the end of cycle T (`cycles[T-1].perushCommit`, or `perushBaseline` for T = 0) - including the Director's own edits made after T. First, uncommitted changes in the scope are committed (`Before rollback to cycle T: Director's edits (<meeting-id>)`) - nothing is lost, and nothing is hidden in a stash. If that commit fails, the rollback of the perush files is aborted (restoring would overwrite the uncommitted edits), and the Director is told. Then `git restore --source=<commit> --staged --worktree -- <scope pathspec>` (which also removes files added after `<commit>`), committed as `Rollback perush files to cycle T (<meeting-id>)`. Main's history is never rewritten. A meeting created before `perushCommit` existed has nothing recorded - its perush files are not rolled back, and the Director is told so.

(Meetings created before this design have `session-cycle/<meeting-id>/c<N>/{main,session}` tags; they are no longer created or used - `deleteMeetingsByTitle()` still deletes them.)

**Git is always run through `git()` / `gitResult()` in `meetings-db.ts`** - `git(root, ...args)` returns stdout and throws on a non-zero exit; `gitResult()` returns `{ stdout, stderr, exitCode }` and leaves the exit code to the caller. Both pass an **argument list** (`spawn`, no shell), so literal Hebrew (`פירוש/`), a literal `*` (`sessions/*`), `%(...)` formats and commit messages reach git exactly as written - nothing on the way quotes, mangles or globs them. A shell command line once did both - Hebrew passed as `u05E4u05D9.../`, a `*` expanded as a filename glob - and the whole flow (commit, tags, rollback) failed silently; `tests/unit/perush-on-main.test.ts` runs it against a scratch repo with the real Hebrew folder names.

**Under tests (`NODE_ENV=test`) the whole flow is disabled** (`PERUSH_ON_MAIN_DISABLED` in `config.ts`): tests run real cycles, and must never commit to the real `main`. `perush-on-main.test.ts` enables it on a scratch repo via `setPerushGitRootForTests()`.

### Git as the Meeting Database

With meeting data on branches, git itself becomes the database:

```typescript
// List all meetings (sorted by most recent activity)
async function listMeetings(): Promise<MeetingSummary[]> {
  const out = await git(await getGitRoot(), "branch", "--list", "sessions/*", "--sort=-committerdate", "--format=%(refname:short)|%(committerdate:iso)|%(subject)");
  // ... parse output
}

// Read an ended meeting (no worktree needed)
async function readEndedMeeting(meetingId: MeetingId): Promise<Meeting> {
  return yamlParse(await git(await getGitRoot(), "show", `${meetingIdToBranchName(meetingId)}:meeting.yaml`));
}

// Read an active meeting (regular file I/O on worktree)
async function readActiveMeeting(worktreePath: string): Promise<Meeting> {
  return yamlParse(await readFile(join(worktreePath, "meeting.yaml"), "utf-8"));
}
```

**Two modes**: Active meetings use regular file I/O on the worktree; ended meetings use `git show`.

### Ending a Meeting (Worktree Removal)

```typescript
async function endMeeting(meetingId: MeetingId, worktreePath: string): Promise<void> {
  await git(worktreePath, "add", "-A");
  await git(worktreePath, "commit", "-m", "Meeting ended", "--allow-empty");
  await git(await getGitRoot(), "worktree", "remove", worktreePath);
}
```

After removal: the branch persists with full commit history; the directory is gone from disk; symlinks in `~/.claude/projects/` become dangling (harmless).

### Resuming a Meeting (Worktree Re-attach)

```typescript
async function resumeMeeting(meetingId: MeetingId): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, ".meetings", meetingId);

  await git(await getGitRoot(), "worktree", "add", worktreePath, meetingIdToBranchName(meetingId));

  const meeting = await readActiveMeeting(worktreePath);
  for (const [agentId, sessionId] of Object.entries(meeting.sessionIds)) {
    await recreateSymlink(sessionId, worktreePath);
  }

  return worktreePath;
}
```

### What Gets Git-Tracked (and Where)

| What | Where                                       | Branch |
|------|---------------------------------------------|--------|
| Source code, frontend, CLAUDE.md | `_DELIBERATION-ROOM/`                       | `main` |
| `meeting.yaml` (conversation, assessments, decisions) | `.meetings/<meeting-id>/meeting.yaml`       | `sessions/<meeting-id>` |
| AI-Agent session JSONL (internal reasoning, tool usage) | `.meetings/<meeting-id>/<session-id>.jsonl` | `sessions/<meeting-id>` |
| AI-Agent session directories (subagents) | `.meetings/<meeting-id>/<session-id>/`      | `sessions/<meeting-id>` |
| Symlinks to session files | `~/.claude/projects/...`                    | *(not tracked — local, ephemeral)* |

### The Complete Session Lifecycle

```
MEETING START
├─ 1. Generate meeting ID (from title + timestamp)
├─ 2. Create orphan branch + worktree
├─ 3. Create initial meeting.yaml in the worktree
├─ 4. Create AI-Agent sessions (initial query())
├─ 5. Capture session IDs from init messages
├─ 6. For each session: move + symlink
├─ 7. Save session IDs in meeting.yaml
├─ 8. Commit: "Initial: meeting created"

EACH CYCLE
├─ 1. Assessment phase (parallel query() calls)
├─ 2. Selection phase (query() to orchestrator)
├─ 3. Speech phase (query() to selected agent, streamed via WebSocket)
│     - before an agent speaks: commit the Director's perush edits on main
├─ 4. Commit the speaker's perush edits on main; record main's commit (perushCommit)
├─ 5. Update meeting.yaml with cycle record
├─ 6. Commit to session branch: "Cycle N: <speaker>"

MEETING END (/end command)
├─ 1. Final commit: "Meeting ended"
├─ 2. Remove worktree (branch persists)
├─ 3. Symlinks become dangling (harmless)

MEETING RESUME
├─ 1. Re-attach worktree
├─ 2. Read meeting.yaml — extract saved sessionIds
├─ 3. Recreate symlinks for all session files
├─ 4. Resume/recover each AI-Agent session
├─ 5. Commit: "Meeting resumed"

SESSION RECOVERY (mid-meeting, single AI-Agent)
├─ 1. Create new session (same persona, same model)
├─ 2. Feed conversation transcript from meeting.yaml
├─ 3. Capture new session (move+symlink)
├─ 4. Update meeting.yaml with new session ID
├─ 5. Commit: "Session recovery: <agent-id>"
```

### Session Branch Cleanup

After many meetings, `git branch --list "sessions/*"` accumulates branches. The system does not auto-delete branches (meetings are valuable historical artifacts). Manual pruning: `git branch -D sessions/<old-meeting-id>`.
