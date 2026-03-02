# Git Persistence & Session Lifecycle

> **Spin-out from `CLAUDE.md`.** Read when working on `conversation.ts`, `session-manager.ts`, or debugging git-related issues.

## Session File Persistence (Git Worktrees + Move+Symlink)

Agent SDK sessions produce JSONL files (one JSON object per line, appended incrementally) stored under `~/.claude/projects/`. These files contain the AI-Agent's **full internal state** — not just the public conversation, but tool usage, internal reasoning, and context evolution across cycles. By default, these files live outside the project and are not version-controlled.

We make them git-tracked using two complementary strategies:

1. **Git worktrees with orphan branches**: Each meeting gets its own orphan branch (`sessions/<meeting-id>`) with a worktree checked out at `_DELIBERATION-ROOM/meetings/<meeting-id>/`. All meeting data — `meeting.yaml`, session JSONL files, session directories — lives on this branch, **never on `main`**. The session manager controls all commits to the branch at well-defined safe points (after each cycle).

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
  <session-uuid-2>.jsonl          ← archi's session transcript
  ...
```

**On disk during an active meeting**:

```
_DELIBERATION-ROOM/
  meetings/                       ← gitignored on main (worktree mount point)
    bereshit-2-4-eden/            ← worktree for sessions/2026-02-01--10-41--bereshit-2-4-eden branch
      meeting.yaml
      <session-uuid>.jsonl        ← real file (symlinked from ~/.claude/projects/...)
      <session-uuid>/
      ...
```

### Creating a Meeting Worktree

At meeting start, after generating the meeting ID:

```typescript
import { $ } from "bun";

async function createMeetingWorktree(meetingId: MeetingId): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, "meetings", meetingId);
  const branchName = `sessions/${meetingId}`;

  // Create orphan branch + worktree in one command (requires git 2.42+)
  await $`git worktree add --orphan -b ${meetingIdToBranchName(meetingId)} ${worktreePath}`;

  return worktreePath;
}
```

This creates:
- A new orphan branch `sessions/<meeting-id>` (no parent commits, no shared history with `main`).
- A worktree at `_DELIBERATION-ROOM/meetings/<meeting-id>/` checked out on that branch.
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

  // Move: ~/.claude/projects/<project>/<session-id> → meetings/<meeting-id>/<session-id>
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
  await $`git -C ${worktreePath} add -A`;
  await $`git -C ${worktreePath} commit -m ${"Cycle " + cycleNumber + ": " + speaker}`;
}
```

Each commit is an atomic snapshot of the meeting state after one cycle. **Timing**: Commits happen **between** cycles — after all writes are complete and before the next cycle begins. Since the session manager is the only process that commits to this branch, and it does so sequentially, there's no risk of committing mid-write. No lock files needed.

### Cross-Branch Tagging and Rollback

Participant-Agents have tool access during their speech phase and can modify commentary files under `פירוש/` or `ניתוחים-לשוניים/` (on `main`). To support rollback of these changes, the system creates **correlated tags** across both `main` and the session branch after any cycle that alters perush files.

**Detection**: After each cycle's session-branch commit, the orchestrator checks `git diff --name-only` on the main working tree. If any files under `פירוש/` or `ניתוחים-לשוניים/` have changed, the tagging procedure is triggered.

Two git tags are created per cycle (when perush files change):
- `session-cycle/<meeting-id>/c<N>/main`    = `session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-title>/c<N>/main`    → points to the commit on `main` that includes the perush changes
- `session-cycle/<meeting-id>/c<N>/session` = `session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-title>/c<N>/session` → points to the corresponding cycle commit on `sessions/<meeting-id>`

The Tag-ID-Prefix is: `session-cycle/<meeting-id>` = `session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-title>`

```typescript
async function tagPerushChanges(meetingId: MeetingId, worktreePath: string, cycleNumber: number): Promise<void> {
  const diff = await $`git diff --name-only`;
  const lines = diff.stdout.toString().trim().split("\n");
  const perushChanged = lines.some(f => f.startsWith("פירוש/") || f.startsWith("ניתוחים-לשוניים/"));

  if (!perushChanged) return;

  await $`git add פירוש/ ניתוחים-לשוניים/`;
  await $`git commit -m ${"Cycle " + cycleNumber + ": perush update (" + meetingId + ")"}`;

  // Tag main's HEAD: session-cycle/<meeting-id>/c<N>/main
  await $`git tag ${cycleTagMain(meetingId, cycleNumber)} HEAD`;
  // Tag session branch's HEAD: session-cycle/<meeting-id>/c<N>/session
  const sessionHead = (await $`git -C ${worktreePath} rev-parse HEAD`).stdout.toString().trim();
  await $`git tag ${cycleTagSession(meetingId, cycleNumber)} ${sessionHead}`;

  // Async push (fire-and-forget — does NOT block the next cycle)
  asyncPush(meetingId, cycleNumber);
}
```

**Rollback** via git:

```bash
# List available rollback points for a meeting
git tag --list "session-cycle/2026-02-01--10-41--bereshit-2-4-eden/c*/main"

# Roll back main to a specific cycle's tag (e.g., cycle 3)
git reset --hard session-cycle/2026-02-01--10-41--bereshit-2-4-eden/c3/main

# Roll back the session branch to the correlated tag
git -C meetings/bereshit-2-4-eden reset --hard session-cycle/2026-02-01--10-41--bereshit-2-4-eden/c3/session
```

### Git as the Meeting Database

With meeting data on branches, git itself becomes the database:

```typescript
// List all meetings (sorted by most recent activity)
async function listMeetings(): Promise<MeetingSummary[]> {
  const result = await $`git branch --list "sessions/*" --sort=-committerdate --format="%(refname:short)|%(committerdate:iso)|%(subject)"`;
  // ... parse output
}

// Read an ended meeting (no worktree needed)
async function readEndedMeeting(meetingId: MeetingId): Promise<Meeting> {
  const result = await $`git show ${meetingIdToBranchName(meetingId)}:meeting.yaml`;
  return yamlParse(result.stdout.toString());
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
  await $`git -C ${worktreePath} add -A`;
  await $`git -C ${worktreePath} commit -m "Meeting ended" --allow-empty`;
  await $`git worktree remove ${worktreePath}`;
}
```

After removal: the branch persists with full commit history; the directory is gone from disk; symlinks in `~/.claude/projects/` become dangling (harmless).

### Resuming a Meeting (Worktree Re-attach)

```typescript
async function resumeMeeting(meetingId: MeetingId): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, "meetings", meetingId);

  await $`git worktree add ${worktreePath} ${meetingIdToBranchName(meetingId)}`;

  const meeting = await readActiveMeeting(worktreePath);
  for (const [agentId, sessionId] of Object.entries(meeting.sessionIds)) {
    await recreateSymlink(sessionId, worktreePath);
  }

  return worktreePath;
}
```

### What Gets Git-Tracked (and Where)

| What | Where | Branch |
|------|-------|--------|
| Source code, frontend, CLAUDE.md | `_DELIBERATION-ROOM/` | `main` |
| `meeting.yaml` (conversation, assessments, decisions) | `meetings/<meeting-id>/meeting.yaml` | `sessions/<meeting-id>` |
| AI-Agent session JSONL (internal reasoning, tool usage) | `meetings/<meeting-id>/<session-id>.jsonl` | `sessions/<meeting-id>` |
| AI-Agent session directories (subagents) | `meetings/<meeting-id>/<session-id>/` | `sessions/<meeting-id>` |
| Symlinks to session files | `~/.claude/projects/...` | *(not tracked — local, ephemeral)* |

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
├─ 2. Selection phase (query() to manager)
├─ 3. Speech phase (query() to selected agent, streamed via WebSocket)
├─ 4. Update meeting.yaml with cycle record
├─ 5. Commit to session branch: "Cycle N: <speaker>"
├─ 6. IF perush files altered: commit on main + create correlated tags + async push

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
