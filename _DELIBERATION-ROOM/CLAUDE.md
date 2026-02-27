# The Deliberation Room

A multi-agent deliberation system where a configurable set of Participant-Agents and a Director (human scholar) participate in live, turn-managed analysis of biblical commentary, orchestrated by a Conversation-Manager-Agent.
Running as a **web server** with the deliberation UI rendered in the browser.

## The Bigger Picture

This project is a sub-system of the **Perush** project — a methodological allegorical interpretation of the Torah. The full methodology, dictionary, and interpretive framework are documented in `../CLAUDE.md`. Consult that file when:

- You need to understand the dictionary system, the interpretive method, or the quality criteria.
- A design decision requires understanding what the AI-Agents are actually *analyzing*.
- You're working on AI-Agent persona prompts that reference the commentary methodology.

For everything else — architecture, implementation, infrastructure — this file is your primary reference. The deliberation room is a **software engineering project** whose domain happens to be biblical commentary analysis.

## What This System Does

The Director and a **configurable set of Participant-Agents** sit in a live deliberation, analyzing a biblical passage or commentary segment together. The Director selects which Participant-Agents to include when creating a meeting — this selection is immutable for the meeting's duration.

The available Participant-Agent pool is **discovered dynamically** from non-underscore `.md` files in `participant-agents/`. Current agents:

| Participant | Name | Type | How They Participate |
|-------------|------|------|---------------------|
| **milo** (המילונאי) | Milo / מיילו | Participant-Agent: Dictionary Purist | Audits word-level dictionary fidelity |
| **archi** (האדריכל) | Archi / ארצ'י | Participant-Agent: Architect | Assesses structural coherence in the larger narrative |
| **kashia** (המבקר) | Kashia / קשיא | Participant-Agent: Skeptic | Challenges interpretations for honesty and degrees of freedom |
| **barak** (ההברקה) | Barak / ברק | Participant-Agent: Ideator | Divergent insight — rare speaker, breaks analytical frames |
| **human** | The Director / המנחה | Director | Steers the conversation, makes final decisions, provides input |

The conversation flows through a managed turn-taking protocol. The **Conversation-Manager-Agent** (a special AI-Agent, distinct from the Participant-Agents) decides whose voice is most needed at each moment.

### Taxonomy

The following terms are used consistently throughout this document and the codebase:

| Term | Who | Definition |
|------|-----|------------|
| **Participant-Agent** | milo, archi, kashia, barak, ... | The AI critic agents who actively participate in the deliberation — analyzing text, speaking, and assessing. Discovered dynamically from `participant-agents/*.md` |
| **Conversation-Manager-Agent** | manager | The AI-Agent that orchestrates turn-taking and reads the room. Does NOT participate in the conversation itself — it is invisible to the Participants |
| **Director** | the human scholar | Steers the conversation, provides context, makes final decisions. The deliberation exists to serve the Director's work |
| **AI-Agent** | Participant-Agents + Conversation-Manager-Agent | All AI agents in the system (N Participant-Agents + 1 manager) |
| **Participant** | Participant-Agents + Director | Everyone who speaks in the deliberation (N agents + Director). The Conversation-Manager-Agent is NOT a Participant |

**In TypeScript** (see `meeting.json` schema): `AgentId = string` — dynamically derived from persona filenames (e.g., `"milo"`, `"archi"`, `"barak"`). `SpeakerId = AgentId | "human"`. The set of active `AgentId`s is per-meeting (stored in `meeting.participants`). The Conversation-Manager-Agent is referenced as `"manager"` — it has no `AgentId` because it never speaks.

AI-Agent personas are defined in `participant-agents/`. Each `.md` file contains the agent's mandate, personality, conversational style, and engagement guidelines. Two shared prefixes are prepended when creating a session: `_base-prefix.md` (for all AI-Agents — project context, dictionary, common instructions) and `_agents-prefix.md` (for Participant-Agents only — introduces fellow Participants). The personas are designed for live deliberation: dialectical, conversational, and responsive to what others say.

## Architecture

### System Components

```
┌────────────────────────────────────────────────────────────┐
│                SERVER (TypeScript + Bun)                   │
│                                                            │
│  ┌───────────────┐  ┌──────────────┐                       │
│  │ HTTP Server   │  │ WebSocket    │                       │
│  │ (static files │  │ Handler      │                       │
│  │  + REST API)  │  │ (live I/O)   │                       │
│  └──────┬────────┘  └──────┬───────┘                       │
│         │                  │                               │
│  ┌──────┴──────────────────┴─────────────────────┐         │
│  │              ORCHESTRATOR                     │         │
│  │                                               │         │
│  │  ┌──────────────┐  ┌──────────────┐           │         │
│  │  │ Conversation │  │ Session      │           │         │
│  │  │ Store (Git)  │  │ Manager      │           │         │
│  │  │              │  │ (Agent SDK)  │           │         │
│  │  └──────────────┘  └──────────────┘           │         │
│  └───────────────────────────────────────────────┘         │
└────────────────────────────────────────────────────────────┘

         ▲ WebSocket ▼
┌──────────────────────────────────────────────────────────┐
│                  BROWSER (Frontend)                      │
│                                                          │
│  Shared conversation feed, Participant-Agent panels,      │
│  vibe display, meeting lifecycle controls                │
└──────────────────────────────────────────────────────────┘
```

**Server**: A single Bun process that serves static frontend files, handles WebSocket connections, and runs the orchestrator. The server IS the orchestrator — not a proxy to a separate process.

**HTTP Server**: Serves the frontend (HTML/CSS/JS from `public/`), the REST API for meeting management (`/api/meetings`), and handles the WebSocket upgrade.

**WebSocket Handler**: Manages bidirectional real-time communication with the browser — streaming Participant-Agent speeches, broadcasting conversation updates, receiving Director input.

**Orchestrator**: Owns the conversation state, manages the turn-taking cycle, routes between phases. Emits events that the WebSocket handler relays to connected browsers. **Only one meeting can be active at a time** — the most recent meeting. If a `start-meeting` message arrives while a meeting is active, the server rejects it with an error. The Director must `/end` the current meeting before starting a new one.

**Conversation Store**: Manages meeting data using **git branches as the database**. Each meeting lives on its own orphan branch (`sessions/<meeting-id>`), checked out via `git worktree` during active meetings. No meeting data exists on `main` — ever. Active meetings use regular file I/O on the worktree; ended meetings are read via `git show`. Listing meetings = listing `sessions/*` branches.

**Session Manager**: Manages persistent Agent SDK sessions — one per AI-Agent (N Participant-Agents as selected for the meeting + 1 Conversation-Manager-Agent). Each session maintains accumulated context across the entire meeting. Handles session creation, message feeding, response streaming, crash recovery, and **session file persistence** (move+symlink from `~/.claude/projects/` into the meeting's worktree, sessions-index management).

### The Persistent Session Architecture

Each AI-Agent — the meeting's selected Participant-Agents and the Conversation-Manager-Agent — runs as a **persistent Agent SDK session** for the duration of a meeting. Instead of making fresh API calls with the full conversation context each cycle, the orchestrator feeds new messages into existing sessions that accumulate context naturally.

#### Why Persistent Sessions

The original design used a hybrid strategy: raw Anthropic API calls (Sonnet) for assessments and speaker selection, Agent SDK (Opus) for speech. Persistent sessions replace this with a unified approach:

1. **Token efficiency**: Sessions accumulate context naturally. Prompt caching gives ~90% discount on the stable prefix (persona + dictionary + conversation history), making Opus input costs competitive with Sonnet for meetings beyond a few cycles. Context compression kicks in for long meetings, automatically summarizing old turns — a benefit that stateless calls never get.

2. **AI-Agent continuity**: Each AI-Agent "lives through" the deliberation — remembering not just the conversation transcript, but their own reasoning, their previous observations, and the patterns they've noticed. A stateless call reconstructs understanding from scratch each cycle; a persistent session deepens it.

3. **Simpler architecture**: One invocation pattern (Agent SDK) instead of two (raw API + Agent SDK). The orchestrator manages sessions, not heterogeneous API calls.

4. **The Conversation-Manager-Agent benefits most**: It accumulates understanding of conversation dynamics — who tends to agree with whom, which topics keep resurfacing, when energy is dropping. A stateless call infers this from the transcript each time; a persistent session *remembers* it.

#### Session Setup

At meeting start, AI-Agent sessions are created — one per selected Participant-Agent plus the Conversation-Manager-Agent. The table below is illustrative (actual sessions depend on which agents the Director selects):

| Session | Name | Model | Tools | System Prompt |
|---------|------|-------|-------|---------------|
| milo | Milo / מיילו | Opus | Read, Bash, Grep, Glob | `_base-prefix.md` + dictionary + `_agents-prefix.md` + resolved `milo.md` |
| archi | Archi / ארצ'י | Opus | Read, Bash, Grep, Glob | `_base-prefix.md` + dictionary + `_agents-prefix.md` + resolved `archi.md` |
| kashia | Kashia / קשיא | Opus | Read, Bash, Grep, Glob | `_base-prefix.md` + dictionary + `_agents-prefix.md` + resolved `kashia.md` |
| barak | Barak / ברק | Opus | Read, Bash, Grep, Glob | `_base-prefix.md` + dictionary + `_agents-prefix.md` + resolved `barak.md` |
| manager | *(unnamed)* | Sonnet | *(none)* | `_base-prefix.md` + dictionary + resolved `_conversation-manager.md` |

The Participant-Agent sessions use **Opus** for both assessments and speeches. This might seem wasteful for assessments (small output, no tools needed), but:
- With prompt caching, Opus cached input ($1.50/MTok) is cheaper than Sonnet uncached input ($3/MTok). After the first cycle, most of the context is cached.
- Assessment output tokens are small (~100-200 tokens), so the 5× output price difference is negligible in absolute terms (~$0.01 per assessment).
- The Participant-Agent produces better assessments with Opus-level reasoning AND its own accumulated context from prior cycles.

The Conversation-Manager-Agent session uses **Sonnet** — it never needs tools, never gives speeches, and its structured JSON output doesn't benefit from Opus-level depth.

#### Per-Cycle Flow

```
1. New speech arrives (from Director or Participant-Agent)
         │
         ▼
2. ASSESSMENT — Feed to each Participant-Agent's persistent session (parallel):
   "הודעה חדשה מ-[speaker]: [content]. מה ההערכה שלך?"
   → Each returns: { selfImportance, humanImportance, summary }
   (The last speaker's session is skipped.)
         │
         ▼
3. SELECTION — Feed speech + assessments to Conversation-Manager-Agent's persistent session:
   "הודעה חדשה מ-[speaker]: [content]\n\nהנה ההערכות: [assessments JSON]. מי מדבר הבא?"
   → Returns: { nextSpeaker, vibe }
         │
         ▼
4. SPEECH — Feed selection to chosen Participant-Agent's persistent session:
   "נבחרת לדבר. הנה תגובתך."
   → Participant-Agent uses tools, streams speech via WebSocket.
   (Other Participant-Agents' sessions are idle — they don't see the
    assessments or the Conversation-Manager-Agent's reasoning.)
         │
         ▼
5. Speech is added to conversation → back to step 1
```

**Key privacy invariant**: Participant-Agents see only the public conversation. They do NOT see each other's private assessments or the Conversation-Manager-Agent's reasoning. The orchestrator enforces this by controlling what messages are fed into each session.

#### Session Resumption via `query()` Calls

Each interaction with a session is a `query()` call using the `resume: sessionId` pattern. The Agent SDK manages the full conversation transcript internally — we don't reconstruct it manually.

```typescript
// Meeting start — initial query creates the session
const query1 = agent.query({
  prompt: buildOpeningContext(meeting.openingPrompt),
  options: { model: "claude-opus-4-6", includePartialMessages: true }
});

let sessionId: string;
for await (const msg of query1) {
  if (msg.type === "system" && msg.subtype === "init") sessionId = msg.session_id;
  // ... process initial response
}

// Each subsequent cycle — resume the same session
const assessmentQuery = agent.query({
  prompt: `הודעה חדשה מ-${speaker}: ${content}\n\nמה ההערכה שלך?`,
  options: { resume: sessionId, includePartialMessages: true }
});
for await (const msg of assessmentQuery) {
  // ... extract assessment JSON
}
```

Each `query()` call adds to the session's accumulated context. The session ID is the only state the orchestrator needs to track per agent.

#### Speech Streaming

When a Participant-Agent is selected to speak, the `query()` call enables streaming with tool access:

```typescript
const speechQuery = agent.query({
  prompt: "נבחרת לדבר. הנה תגובתך.",
  options: {
    resume: sessionId,
    includePartialMessages: true,
    maxTurns: 25,
    maxBudgetUsd: 2.00
  }
});

for await (const message of speechQuery) {
  if (message.type === "stream_event") {
    const event = message.event;
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      ws.send(JSON.stringify({ type: "speech-chunk", speaker: agentId, delta: event.delta.text }));
    }
  } else if (message.type === "tool_progress") {
    ws.send(JSON.stringify({ type: "tool-activity", agent: agentId, toolName: message.tool_name, status: "started" }));
  }
}
```

**Interruption**: When the Director sends `/end` during a Participant-Agent's speech, the orchestrator calls `speechQuery.interrupt()` to stop the Agent SDK immediately.

**Generous cap**: `maxTurns: 25`, `maxBudgetUsd: 2.00` per speech. The goal is to never cut a Participant-Agent short mid-analysis — the cap is a safety net, not a constraint. Tool access lets Participant-Agents ground their analysis in actual file contents — checking cross-references via `hebrew-grep`, reading neighboring segments, searching for established definitions — instead of guessing or hallucinating.

#### Session Recovery

If a persistent session dies (crash, network error, context overflow):

1. Create a new session for that AI-Agent (same persona, same model).
2. Feed the conversation transcript from `meeting.json` (in the worktree) as initial context.
3. Capture the new session (move+symlink into the meeting's worktree) and update `meeting.json` with the new session ID.
4. Commit to the session branch: `"Session recovery: <agent-id>"`.
5. The AI-Agent loses its internal reasoning from prior cycles but regains the full public conversation.
6. The meeting continues from where it left off.

The old session's JSONL file remains in the worktree — it's a historical artifact of the failed session, valuable for debugging (and visible in the branch's git history). The new session starts fresh alongside it.

This is acceptable — the public conversation captures what mattered; private reasoning was ephemeral. The `meeting.json` is the authoritative record; sessions are its ephemeral workers.

#### Session File Persistence (Git Worktrees + Move+Symlink)

Agent SDK sessions produce JSONL files (one JSON object per line, appended incrementally) stored under `~/.claude/projects/`. These files contain the AI-Agent's **full internal state** — not just the public conversation, but tool usage, internal reasoning, and context evolution across cycles. By default, these files live outside the project and are not version-controlled.

We make them git-tracked using two complementary strategies:

1. **Git worktrees with orphan branches**: Each meeting gets its own orphan branch (`sessions/<meeting-id>`) with a worktree checked out at `_DELIBERATION-ROOM/meetings/<meeting-id>/`. All meeting data — `meeting.json`, session JSONL files, session directories — lives on this branch, **never on `main`**. The session manager controls all commits to the branch at well-defined safe points (after each cycle).

2. **Move+symlink**: After a session is created, its directory is moved from `~/.claude/projects/` into the meeting's worktree, and a symlink is placed at the original location. Claude Code follows symlinks transparently (standard `fs.readFile`/`fs.appendFile` behavior), so it continues operating normally — while the actual file lives in the worktree under git control.

**Why this eliminates lock files and pre-commit hooks**: Session files live on an orphan branch, not `main`. The session manager is the only process that commits to the session branch, and it does so at well-defined safe points (between cycles, never during an active `query()`). Normal `git commit` on `main` never touches session files — they're on a different branch in a different directory. No coordination needed.

##### How Claude Code Stores Sessions

Claude Code stores session data under `~/.claude/projects/`, with one subdirectory per project. The subdirectory name is derived from the project's absolute path (slashes replaced with hyphens):

```
~/.claude/projects/
  -Users-giladben-dor-dev-perush/           ← project directory (derived from /Users/giladben-dor/dev/perush)
    sessions-index.json                      ← quick index of all sessions
    <session-uuid>.jsonl                     ← session transcript (JSONL)
    <session-uuid>/                          ← session directory (may contain subagents/)
      ...
```

The `sessions-index.json` provides a fast lookup with summaries, timestamps, message counts, and git branch — without parsing every JSONL file. Its `entries` array contains one object per session, each with a `sessionId`, `fullPath`, `firstPrompt`, `summary`, and other metadata.

Each JSONL line in a session file is a **message event** with fields:
- `uuid` / `parentUuid` — message chain
- `sessionId` — session identifier
- `type` — "user" or "assistant"
- `message` — the actual content
- `cwd`, `gitBranch`, `timestamp`, `version`
- File history snapshots for crash recovery

##### Git Worktree Architecture

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

sessions/bereshit-2-4-eden branch (orphan):
  meeting.json                    ← meeting record (conversation, assessments, decisions)
  <session-uuid-1>.jsonl          ← milo's session transcript
  <session-uuid-1>/              ← milo's session directory
  <session-uuid-2>.jsonl          ← archi's session transcript
  ...

sessions/bereshit-3-1-nachash branch (orphan):
  meeting.json
  <session-uuid-5>.jsonl
  ...
```

**On disk during an active meeting**:

```
_DELIBERATION-ROOM/
  meetings/                       ← gitignored on main (worktree mount point)
    bereshit-2-4-eden/            ← worktree for sessions/bereshit-2-4-eden branch
      meeting.json
      <session-uuid>.jsonl        ← real file (symlinked from ~/.claude/projects/...)
      <session-uuid>/
      ...
```

##### Creating a Meeting Worktree

At meeting start, after generating the meeting ID:

```typescript
import { $ } from "bun";

async function createMeetingWorktree(meetingId: string): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, "meetings", meetingId);
  const branchName = `sessions/${meetingId}`;

  // Create orphan branch + worktree in one command (requires git 2.42+)
  await $`git worktree add --orphan -b ${branchName} ${worktreePath}`;

  return worktreePath;
}
```

This creates:
- A new orphan branch `sessions/<meeting-id>` (no parent commits, no shared history with `main`).
- A worktree at `_DELIBERATION-ROOM/meetings/<meeting-id>/` checked out on that branch.
- The worktree is a fully functional git working directory — `git -C <path> add/commit` works naturally.

##### The Move+Symlink Operation

After a session is created and the first `query()` returns (giving us the `sessionId`), the session manager moves the session files into the meeting's worktree:

```typescript
import { rename, symlink, realpath, stat, mkdir } from "fs/promises";
import { join } from "path";

async function captureSession(sessionId: string, worktreePath: string): Promise<void> {
  const claudeProjectDir = getClaudeProjectDir();  // → ~/.claude/projects/-Users-giladben-dor-dev-perush
  const sourcePath = join(claudeProjectDir, sessionId);  // the session directory
  const targetPath = join(worktreePath, sessionId);       // in the meeting worktree

  // Move: ~/.claude/projects/<project>/<session-id> → meetings/<meeting-id>/<session-id>
  await rename(sourcePath, targetPath);

  // Symlink back: ~/.claude/projects/<project>/<session-id> → realpath of target
  await symlink(await realpath(targetPath), sourcePath);

  // Also handle the .jsonl file if it exists separately from the directory
  const jsonlSource = sourcePath + ".jsonl";
  const jsonlTarget = targetPath + ".jsonl";
  try {
    await stat(jsonlSource);  // check if separate .jsonl file exists
    await rename(jsonlSource, jsonlTarget);
    await symlink(await realpath(jsonlTarget), jsonlSource);
  } catch {
    // .jsonl may be inside the directory — that's fine
  }
}
```

**`getClaudeProjectDir()`** derives the Claude project directory from the project's CWD. Since the deliberation runs from the root project directory (`../`), the function resolves `realpath("../")` and converts slashes to hyphens:

```typescript
function getClaudeProjectDir(): string {
  const projectPath = resolve("../");  // the root perush directory
  const dirName = projectPath.replaceAll("/", "-").replace(/^-/, "");
  // e.g., "/Users/giladben-dor/dev/perush" → "Users-giladben-dor-dev-perush"
  // Claude Code adds a leading hyphen: "-Users-giladben-dor-dev-perush"
  return join(homedir(), ".claude", "projects", `-${dirName}`);
}
```

**Cross-machine note**: The derived directory name is machine-specific (different absolute paths produce different names). The symlink creation must be performed on each machine. The session files themselves (in the worktree / on the branch) are portable and git-tracked; the symlinks are local and ephemeral.

##### Ensuring Sessions-Index Consistency

Before each `query()` call, the session manager ensures the session entry exists in `sessions-index.json`. This is a pre-step that keeps Claude Code's index consistent with our moved files:

```typescript
async function ensureSessionInIndex(sessionId: string, agentId: AgentId | "manager"): Promise<void> {
  const claudeProjectDir = getClaudeProjectDir();
  const indexPath = join(claudeProjectDir, "sessions-index.json");

  let index: SessionsIndex;
  try {
    index = JSON.parse(await readFile(indexPath, "utf-8"));
  } catch {
    // Index doesn't exist yet — create it
    index = { version: 1, entries: [], originalPath: resolve("../") };
  }

  const exists = index.entries.some(e => e.sessionId === sessionId);
  if (!exists) {
    index.entries.push({
      sessionId,
      fullPath: join(claudeProjectDir, sessionId + ".jsonl"),  // points to the symlink
      firstPrompt: `Deliberation agent: ${agentId}`,
      summary: `Deliberation session for ${agentId}`,
      messageCount: 0,
      created: new Date().toISOString(),
      modified: new Date().toISOString(),
      gitBranch: "main",
      projectPath: resolve("../"),
      isSidechain: false,
    });
    await writeFileAtomic(indexPath, JSON.stringify(index, null, 2));
  }
}
```

This ensures sessions appear in `claude --resume` listings, enabling manual inspection of an AI-Agent's session via the CLI if needed for debugging.

##### Per-Cycle Git Commits

After each deliberation cycle completes (speech delivered, assessments recorded, `meeting.json` updated), the session manager commits to the session branch:

```typescript
async function commitCycle(worktreePath: string, cycleNumber: number, speaker: SpeakerId): Promise<void> {
  await $`git -C ${worktreePath} add -A`;
  await $`git -C ${worktreePath} commit -m ${"Cycle " + cycleNumber + ": " + speaker}`;
}
```

Each commit is an atomic snapshot of the meeting state after one cycle. This creates a natural timeline:

```
$ git log sessions/bereshit-2-4-eden --oneline
a1b2c3d Cycle 7: human
e4f5g6h Cycle 6: kashia
i7j8k9l Cycle 5: archi
m0n1o2p Cycle 4: milo
q3r4s5t Cycle 3: human
u6v7w8x Cycle 2: archi
y9z0a1b Cycle 1: milo
c2d3e4f Initial: meeting created
```

**Timing**: Commits happen **between** cycles — after all writes are complete and before the next cycle begins. Since the session manager is the only process that commits to this branch, and it does so sequentially, there's no risk of committing mid-write. No lock files needed.

##### Cross-Branch Tagging and Rollback

Participant-Agents have tool access during their speech phase and can modify commentary files under `פירוש/` or `ניתוחים-לשוניים/` (on `main`). To support rollback of these changes, the system creates **correlated tags** across both `main` and the session branch after any cycle that alters perush files.

**Detection**: After each cycle's session-branch commit, the orchestrator checks `git diff --name-only` on the main working tree. If any files under `פירוש/` or `ניתוחים-לשוניים/` have changed, the tagging procedure is triggered. If no perush files changed, the cycle ends normally — no tag, no main commit.

**Tag ID format**: `session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-id>`

This is a conceptual identifier. Two git tags are created from it:
- `<tag-id>/main` → points to the commit on `main` that includes the perush changes
- `<tag-id>/session` → points to the corresponding cycle commit on `sessions/<meeting-id>`

**Procedure** (after a cycle that altered perush files):

```typescript
async function tagPerushChanges(meetingId: string, worktreePath: string, cycleNumber: number): Promise<void> {
  // 1. Check if any perush files were modified on main
  const diff = await $`git diff --name-only`;
  const lines = diff.stdout.toString().trim().split("\n");
  const perushChanged = lines.some(f => f.startsWith("פירוש/") || f.startsWith("ניתוחים-לשוניים/"));

  if (!perushChanged) return;

  // 2. Commit perush changes on main
  await $`git add פירוש/ ניתוחים-לשוניים/`;
  await $`git commit -m ${"Cycle " + cycleNumber + ": perush update (" + meetingId + ")"}`;

  // 3. Generate tag ID
  const now = new Date();
  const ts = now.toISOString().replace(/T/, "--").replace(/:/g, "-").replace(/\..+/, ""); // YYYY-MM-DD--HH-MM-SS
  const tagId = `session-cycle/${ts}--${meetingId}`;

  // 4. Create correlated tags
  await $`git tag ${tagId}/main HEAD`;
  const sessionHead = (await $`git -C ${worktreePath} rev-parse HEAD`).stdout.toString().trim();
  await $`git tag ${tagId}/session ${sessionHead}`;

  // 5. Async push to remote (fire-and-forget — does NOT block the next cycle)
  pushAsync(tagId, meetingId);
}

function pushAsync(tagId: string, meetingId: string): void {
  $`git push origin ${tagId}/main ${tagId}/session main sessions/${meetingId}`.catch(err => {
    console.error(`Async push failed for ${tagId}:`, err);
    // Non-fatal — tags and commits exist locally; push can be retried
  });
}
```

**Two commit streams**: The system now produces commits on two branches:
- **Session branch** (`sessions/<meeting-id>`): every cycle — meeting state, assessments, session files.
- **Main branch**: only cycles that alter perush files — commentary changes.

The tags correlate the two, creating synchronized snapshots.

**Rollback** is always performed via git, using a tag ID:

```bash
# List available rollback points for a meeting
git tag --list "session-cycle/*--bereshit-2-4-eden/*"

# Roll back main to a specific tag
git reset --hard session-cycle/2026-02-27--14-30-00--bereshit-2-4-eden/main

# Roll back the session branch to the correlated tag
git -C meetings/bereshit-2-4-eden reset --hard session-cycle/2026-02-27--14-30-00--bereshit-2-4-eden/session
```

Rollback can be performed in two ways:
- **In-meeting rollback** (automated): The Director clicks a rollback button on any past human message in the UI. The system handles the full flow — aborting active cycles, resetting the session branch, recovering sessions, and presenting the message for editing. See "In-Meeting Rollback" section for the full mechanism.
- **Manual rollback** (out-of-meeting): The Director uses standard git commands (`git reset --hard <tag>`) outside the deliberation for more complex recovery scenarios.

**Async push details**: The push is fire-and-forget — it runs in the background and does NOT block the next deliberation cycle. It pushes:
- Both tags (`<tag-id>/main`, `<tag-id>/session`)
- The `main` branch (with the new perush commit)
- The session branch (with the corresponding cycle commit)

If the push fails (no remote configured, network issues), the tags and commits still exist locally. A failed push is logged but not treated as an error — the deliberation continues. The Director can manually push later with `git push origin --tags`.

##### Git as the Meeting Database

With meeting data on branches, git itself becomes the database:

```typescript
// List all meetings (sorted by most recent activity)
async function listMeetings(): Promise<MeetingSummary[]> {
  const result = await $`git branch --list "sessions/*" --sort=-committerdate --format="%(refname:short)|%(committerdate:iso)|%(subject)"`;
  return result.stdout.toString().trim().split("\n").map(line => {
    const [branch, date, lastCommitMsg] = line.split("|");
    const meetingId = branch.replace("sessions/", "");
    return { meetingId, branch, lastActivity: date, lastCommitMsg };
  });
}

// Read an ended meeting (no worktree needed)
async function readEndedMeeting(meetingId: string): Promise<Meeting> {
  const result = await $`git show sessions/${meetingId}:meeting.json`;
  return JSON.parse(result.stdout.toString());
}

// Read an active meeting (regular file I/O on worktree)
async function readActiveMeeting(worktreePath: string): Promise<Meeting> {
  return JSON.parse(await readFile(join(worktreePath, "meeting.json"), "utf-8"));
}

// Check if a meeting is currently active (has a worktree)
async function isMeetingActive(meetingId: string): Promise<boolean> {
  const worktreePath = join(DELIBERATION_DIR, "meetings", meetingId);
  try {
    await stat(worktreePath);
    return true;
  } catch {
    return false;
  }
}
```

**Two modes for the conversation store**:
- **Active meeting**: Regular file I/O on the worktree (`readFile`, `writeFile` on `meetings/<meeting-id>/meeting.json`). Fast, familiar, no git overhead for reads.
- **Ended meeting**: `git show sessions/<meeting-id>:meeting.json`. The worktree has been removed; data lives only on the branch. Read-only — which is exactly right for ended meetings.

##### Ending a Meeting (Worktree Removal)

When the Director sends `/end`:

```typescript
async function endMeeting(meetingId: string, worktreePath: string): Promise<void> {
  // Final commit with all remaining changes
  await $`git -C ${worktreePath} add -A`;
  await $`git -C ${worktreePath} commit -m "Meeting ended" --allow-empty`;

  // Remove the worktree (the branch persists)
  await $`git worktree remove ${worktreePath}`;
}
```

After removal:
- The branch `sessions/<meeting-id>` still exists with full commit history.
- The directory `meetings/<meeting-id>/` is gone from disk.
- All data is accessible via `git show sessions/<meeting-id>:<file>`.
- Symlinks in `~/.claude/projects/` now point to non-existent paths — harmless, they'll be cleaned up or recreated if needed.

##### Resuming a Meeting (Worktree Re-attach)

When a meeting is resumed:

```typescript
async function resumeMeeting(meetingId: string): Promise<string> {
  const worktreePath = join(DELIBERATION_DIR, "meetings", meetingId);
  const branchName = `sessions/${meetingId}`;

  // Re-attach worktree to the existing branch
  await $`git worktree add ${worktreePath} ${branchName}`;

  // Recreate symlinks for session files (they may be broken after worktree removal)
  const meeting = await readActiveMeeting(worktreePath);
  for (const [agentId, sessionId] of Object.entries(meeting.sessionIds)) {
    await recreateSymlink(sessionId, worktreePath);
  }

  return worktreePath;
}

async function recreateSymlink(sessionId: string, worktreePath: string): Promise<void> {
  const claudeProjectDir = getClaudeProjectDir();
  const symlinkPath = join(claudeProjectDir, sessionId);
  const targetPath = join(worktreePath, sessionId);

  // Remove broken symlink if it exists
  try { await unlink(symlinkPath); } catch {}

  // Create fresh symlink
  try {
    await stat(targetPath);  // verify target exists
    await symlink(await realpath(targetPath), symlinkPath);
  } catch {
    // Session directory doesn't exist — will need session recovery
  }

  // Same for .jsonl
  const jsonlSymlink = symlinkPath + ".jsonl";
  const jsonlTarget = targetPath + ".jsonl";
  try { await unlink(jsonlSymlink); } catch {}
  try {
    await stat(jsonlTarget);
    await symlink(await realpath(jsonlTarget), jsonlSymlink);
  } catch {}
}
```

##### What Gets Git-Tracked (and Where)

| What | Where | Branch |
|------|-------|--------|
| Source code, frontend, CLAUDE.md | `_DELIBERATION-ROOM/` | `main` |
| `meeting.json` (public conversation, assessments, decisions) | `meetings/<meeting-id>/meeting.json` | `sessions/<meeting-id>` |
| AI-Agent session JSONL (internal reasoning, tool usage) | `meetings/<meeting-id>/<session-id>.jsonl` | `sessions/<meeting-id>` |
| AI-Agent session directories (subagents) | `meetings/<meeting-id>/<session-id>/` | `sessions/<meeting-id>` |
| Symlinks to session files | `~/.claude/projects/...` | *(not tracked — local, ephemeral)* |

Add to `_DELIBERATION-ROOM/.gitignore` (on `main`):
```
meetings/
public/style.css
```

The `meetings/` directory on `main` is just a mount point for worktrees — it should never contain tracked files on `main`.

##### The Complete Session Lifecycle

```
MEETING START
│
├─ 1. Generate meeting ID (from title + timestamp)
├─ 2. Create orphan branch + worktree:
│     git worktree add --orphan -b "sessions/<meeting-id>" "meetings/<meeting-id>"
├─ 3. Create initial meeting.json in the worktree
├─ 4. Create AI-Agent sessions for selected participants + manager (initial query())
├─ 5. Capture session IDs from init messages
├─ 6. For each session:
│     a. Move ~/.claude/projects/.../<session-id> → meetings/<meeting-id>/<session-id>
│     b. Symlink original paths back to the moved files
│     c. Ensure entry in sessions-index.json
├─ 7. Save session IDs in meeting.json (sessionIds field)
├─ 8. Commit: "Initial: meeting created"
│
▼
EACH CYCLE
│
├─ 1. Ensure session entries in sessions-index.json (idempotent)
├─ 2. Run assessment phase (parallel query() calls to Participant-Agent sessions)
├─ 3. Run selection phase (query() to Conversation-Manager-Agent session)
├─ 4. Run speech phase (query() to selected Participant-Agent, streamed via WebSocket)
│     — OR Director turn (await WebSocket input)
├─ 5. Update meeting.json with cycle record
├─ 6. Commit to session branch: "Cycle N: <speaker>"
├─ 7. IF perush files altered on main:
│     a. Commit perush changes on main
│     b. Create correlated tags (<tag-id>/main + <tag-id>/session)
│     c. Async push to remote (fire-and-forget)
│
▼
MEETING END (/end command)
│
├─ 1. Final commit: "Meeting ended"
├─ 2. Remove worktree: git worktree remove "meetings/<meeting-id>"
├─ 3. Branch persists — data accessible via git show
├─ 4. Symlinks in ~/.claude/projects/ become dangling — harmless
│
▼
MEETING RESUME
│
├─ 1. Re-attach worktree: git worktree add "meetings/<meeting-id>" "sessions/<meeting-id>"
├─ 2. Read meeting.json — extract saved sessionIds
├─ 3. Recreate symlinks for all session files
├─ 4. For each AI-Agent:
│     a. Try to resume session via query({ resume: sessionId })
│     b. If resume fails: create new session, apply session recovery
│        (feed conversation transcript), capture new session, update meeting.json
├─ 5. Commit: "Meeting resumed"
├─ 6. Resume the cycle from where it left off
│
▼
SESSION RECOVERY (mid-meeting, single AI-Agent)
│
├─ 1. Create new session for the failed AI-Agent (same persona, same model)
├─ 2. Feed conversation transcript from meeting.json as initial context
├─ 3. Capture the new session (move+symlink into worktree)
├─ 4. Update meeting.json with the new session ID
├─ 5. Commit: "Session recovery: <agent-id>"
├─ 6. Continue the cycle
```

### Communication Protocol: WebSocket

The browser connects to the server via a single WebSocket connection. Traffic is predominantly server→client (streaming speeches, status updates, assessments), with occasional client→server messages (human input, commands).

#### Server → Client Messages

```typescript
// A completed speech added to the conversation
{ type: "speech", speaker: SpeakerId, content: string, timestamp: FormattedTime }

// A streaming chunk of an in-progress speech
{ type: "speech-chunk", speaker: SpeakerId, delta: string }

// Speech streaming completed (final content is in the preceding "speech" message)
{ type: "speech-done", speaker: SpeakerId }

// A Participant-Agent's private assessment (shown in that agent's panel)
{ type: "assessment", agent: AgentId, selfImportance: number, humanImportance: number, summary: string }

// Tool activity during Participant-Agent speech (shown in that agent's panel)
{ type: "tool-activity", agent: AgentId, toolName: string, status: "started" | "completed", detail?: string }

// The Conversation-Manager-Agent's vibe + next speaker decision
{ type: "vibe", vibe: string, nextSpeaker: SpeakerId }

// Current phase of the cycle
{ type: "phase", phase: "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back", activeSpeaker?: SpeakerId }

// Signal that it's the Director's turn
{ type: "your-turn" }

// Full meeting state (sent on connect/reconnect)
// readOnly: true for view-only mode (past meetings)
// editingCycle: set after rollback — signals the client to show an editable textarea for that cycle's human message
{ type: "sync", meeting: Meeting, currentPhase: string, readOnly?: boolean, editingCycle?: number }

// Error
{ type: "error", message: string }

// Server confirms the Director's attention request was registered
{ type: "attention-ack" }

// Progress updates during a rollback operation
{ type: "rollback-progress", step: "aborting" | "git-reset" | "perush-rollback" | "session-recovery" | "complete", detail?: string }
```

#### Client → Server Messages

```typescript
// Director's speech during their turn
{ type: "human-speech", content: string }

// Slash commands (available at any time, not just during human turn)
{ type: "command", command: "/end" }

// Start a new meeting (participants = selected agent IDs from the pool)
{ type: "start-meeting", title: string, openingPrompt: string, participants: AgentId[] }

// Resume a previous meeting
{ type: "resume-meeting", meetingId: string }

// View a past meeting in read-only mode
{ type: "view-meeting", meetingId: string }

// Director requests the floor — current cycle continues uninterrupted;
// next selection phase will force the manager to choose the Director.
// See "Attention Button" section for full mechanism.
{ type: "attention" }

// Director initiates rollback to a specific human message.
// targetCycleNumber = the cycle containing the human message to roll back to.
// 0 = roll back to the opening prompt (before any cycles).
// See "In-Meeting Rollback" section for full flow.
{ type: "rollback", targetCycleNumber: number }
```

#### Reconnection

When the browser disconnects and reconnects (network blip, laptop sleep, page refresh), the server sends a `sync` message with the full `Meeting` state and current phase. The client reconstructs the UI from this state. The orchestrator continues running regardless of browser connection state — the browser is a view, not the process owner.

Client-side reconnection logic: on WebSocket `close` event, attempt reconnect with exponential backoff (1s, 2s, 4s, max 30s). Show a "Reconnecting..." indicator in the UI.

#### Multiple Tabs

Multiple browser tabs receive the same broadcast (they're passive viewers). During the Director's turn, all tabs show the input field; whichever submits first wins. The server accepts the first response and broadcasts it.

### Cost Profile Per Cycle

| Phase | Model | Calls | Approx. Cost |
|-------|-------|-------|-------------|
| Assessment | Opus (persistent, cached) | 2-3 (parallel) | ~$0.05-0.10 |
| Selection | Sonnet (persistent, cached) | 1 | ~$0.01 |
| Speech | Opus (persistent, cached + tools) | 1 | ~$0.30-1.00 |
| **Total per cycle** | | **4-5** | **~$0.50** |
| **15-cycle meeting** | | | **~$7.50** |

Cost is roughly comparable to the stateless approach for short meetings. For long meetings (10+ cycles), persistent sessions are **cheaper** due to context compression — old conversation turns are automatically summarized, reducing input tokens in later cycles. Prompt caching provides ~90% discount on the stable prefix (persona + dictionary + early conversation), which constitutes the majority of input tokens.

## The Turn-Taking Protocol

### Each Cycle

```
1. Someone speaks (a new message enters the conversation)
         │
         ▼
2. Message is broadcast to all connected browsers via WebSocket
         │
         ▼
3. ASSESSMENT PHASE (parallel, private)
   The new speech is fed into each Participant-Agent's persistent session (except last speaker).
   Each produces: { selfImportance, humanImportance, summary }
   Sent to the browser for display in each Participant-Agent's private panel.
         │
         ▼
4. SPEAKER SELECTION
   The new speech content + assessments are fed into the Conversation-Manager-Agent's persistent session → picks next Participant.
   The Manager sees the actual speech (not just summaries) so it can judge thread development, circling, and disagreement quality.
   Also produces a "vibe" comment (see below).
         │
         ▼
5. THE SELECTED PARTICIPANT SPEAKS
   If Participant-Agent → "you've been selected" is fed into their persistent session;
                          speech streamed live via WebSocket, with tool access.
   If Director → browser signals "your turn," orchestrator awaits Director input via WebSocket
         │
         ▼
6. Speech is added to conversation, meeting.json updated
         │
         ▼
7. COMMIT to session branch: "Cycle N: <speaker>"
   (atomic snapshot of meeting state after this cycle)
         │
         ▼
8. IF perush files were altered on main:
   a. Commit changes on main
   b. Create correlated tags: <tag-id>/main + <tag-id>/session
   c. Async push to remote (fire-and-forget — does NOT block)
         │
         ▼
9. Back to step 2
```

### The "Vibe of the Room"

When the Conversation-Manager-Agent selects the next Participant, it also produces a short atmospheric comment — a one-sentence read of the room's state. This is a **stage direction**, not a conversation message. It serves the Director: a quick read of where things stand, without having to parse all the private assessments.

Examples:
- *"נראה שמתגבשת הסכמה — אולי הגיע הזמן לסכם."*
- *"קשיא העלה אתגר שטרם נענה — מתח באוויר."*
- *"הדיון חוזר על עצמו. פרספקטיבה חדשה נדרשת."*
- *"הצעה קונקרטית על השולחן — ממתינים להכרעתך."*

### Ending a Meeting

The meeting ends **only when the Director decides** — by sending the `/end` command. The Conversation-Manager-Agent does NOT end meetings autonomously. However, its "vibe" comments may signal that convergence has been reached, which helps the Director decide when to close.

The `/end` command can be sent at any time — including during a Participant-Agent's speech. If a Participant-Agent is mid-speech, the orchestrator calls `query.interrupt()` to stop the Agent SDK, then ends the meeting.

### The Opening Move

The Director provides an **initial prompt** that sets the context and scope. This is the first message in the conversation. It typically includes:
- The biblical passage under discussion (verses).
- Optionally, a draft commentary or specific questions.
- Any constraints or focus areas.

After the opening prompt, the normal cycle begins: all Participant-Agents assess, the Conversation-Manager-Agent picks the first Participant, and the deliberation proceeds.

### Director Input Timing

When it's the Director's turn, the orchestrator `await`s a Promise that resolves when the WebSocket receives a `human-speech` message. This is the natural async pattern — the orchestrator suspends, the browser shows the input field as active, the Director types and submits.

**Timeout**: If no Director input arrives within 10 minutes, the orchestrator pauses the meeting (saves state, notifies the browser). When the Director returns and submits input, the meeting resumes from where it left off.

**Always-active commands**: The input field accepts the `/end` command at any time — not just during the Director's turn. Regular speech text is only accepted during the Director's turn.

## Web UI

### Layout

The UI is designed for the Director reading Hebrew text, thinking carefully, and occasionally intervening — an **academic seminar**, not a fast chat app. The shared conversation is the primary artifact; Participant-Agent private panels are secondary.

```
┌──────────────────────────────────────────┬──────────────┐
│                                          │ Agent Panel   │
│          SHARED CONVERSATION             │ (collapsible) │
│      (scrolling feed, RTL, color-coded   │               │
│       by speaker)                        │  ┌──────────┐ │
│                                          │  │ Tabs:    │ │
│                                          │  │ מילונאי  │ │
│  [streaming indicator: milo typing…]  │  │ אדריכל   │ │
│                                          │  │ מבקר     │ │
│                                          │  └──────────┘ │
├──────────────────────────────────────────┤              │
│  ✦ vibe: הדיון זורם — כל צד מוסיף שכבה. │  [assessment] │
│    next: האדריכל  ·  phase: speaking     │  [tool usage] │
├──────────────────────────────────────────┤              │
│  > Human input                     [↵]   │              │
└──────────────────────────────────────────┴──────────────┘
```

**Conversation area** (main, left): Scrolling feed of all public messages. Each message is labeled with the Participant's name and color-coded. When a Participant-Agent is speaking, text streams in real-time with a typing indicator. This area takes the majority of the screen width.

**Vibe bar** (sticky, between conversation and input): The Conversation-Manager-Agent's atmospheric comment, the next Participant's name, and the current phase. Always visible — does not scroll with the conversation. Subtle fade-transition (300ms) when the vibe updates. When it's the Director's turn, the vibe bar changes visually (accent border, different background) to signal clearly.

**Director input** (sticky bottom): A textarea for the Director's speech or commands. Always visible. During the Director's turn, the field is highlighted and focused. At other times, it's dimmed but still accepts `/end`.

**Participant-Agent panel** (right side, collapsible): A single panel with tabs — one per Participant-Agent (milo, archi, kashia). Shows private assessments, tool activity during speech, and internal reasoning. The panel:
- Is **collapsed by default** (a thin strip with agent-name badges).
- **Opens automatically** when a Participant-Agent is speaking (showing that agent's tool activity).
- Can be **toggled manually** by the Director at any time.
- Shows **importance badges** on each tab: a colored dot reflecting the Participant-Agent's `selfImportance` score (green = low, yellow = medium, red = high urgency). This lets the Director see at a glance who has something to say — without opening the panel.

### RTL Design

The deliberation is in Hebrew. This is not "RTL support" — it's **RTL-first design**.

1. **`dir="rtl"` on the `<html>` element.** The entire page is RTL by default. The conversation flows right-to-left. The agent panel is on the left (the "end" side in RTL).

2. **Tailwind logical properties** throughout — never physical `left`/`right`:
   - `ms-4` not `ml-4` (margin-inline-start)
   - `pe-2` not `pr-2` (padding-inline-end)
   - `start-0` not `left-0` (inset-inline-start)
   - `border-s` not `border-l` (border-inline-start)
   Tailwind v3.3+ has full CSS logical property support. Use logical utilities exclusively — physical direction utilities (`ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`) are forbidden.

3. **CSS Grid with named areas** for the main layout (not Flexbox). Defined in `public/input.css` (not Tailwind utilities — grid-template-areas is too complex for utility classes):
   ```css
   .deliberation-room {
     display: grid;
     grid-template-areas: "conversation sidebar";
     grid-template-columns: 1fr 300px;
     /* In RTL, "conversation" is on the right, "sidebar" on the left — automatic */
   }
   ```
   CSS Grid respects `direction: rtl` automatically — columns flip without extra code.

4. **Mixed-direction text**: Biblical quotes are Hebrew, but occasional English terms (theory names, scholar names) appear. Use `unicode-bidi: plaintext` on text containers to let the bidi algorithm handle mixed content naturally.

5. **Input field**: `dir="auto"` — Hebrew input is RTL, English commands like `/end` are LTR, auto-detected by the first strong character.

6. **Font stack**: `'David', 'Narkisim', 'Times New Roman', serif` — consistent with `../_RTL-EDITOR`. David and Narkisim are Hebrew-optimized fonts; Times New Roman is the cross-platform fallback.

### Speaker Color-Coding

Each Participant gets a distinct, accessible color in the conversation feed:

| Participant | Name | Color | Rationale |
|-------------|------|-------|-----------|
| milo | Milo / מיילו | — | TBD during implementation |
| archi | Archi / ארצ'י | — | TBD during implementation |
| kashia | Kashia / קשיא | — | TBD during implementation |
| barak | Barak / ברק | — | TBD during implementation |
| human | The Director / המנחה | — | TBD during implementation |

Colors should be distinguishable, work on both light backgrounds and potential dark mode, and not clash with Hebrew text readability. Final palette to be decided during implementation with visual testing.

### Meeting Lifecycle in the Browser

**Landing page** (shown when no meeting is active):

```
┌──────────────────────────────────────────────────────────────────┐
│                            חדר הדיונים                            │
│                                                                    │
│  ┌── פגישה חדשה ────────────────────────────────────────────┐     │
│  │                                                          │     │
│  │  כותרת: [______________________________________________] │     │
│  │                                                          │     │
│  │  פרומפט פתיחה:                                           │     │
│  │  ┌──────────────────────────────────────────────────────┐ │     │
│  │  │  (multi-line textarea, 4-5 lines visible)            │ │     │
│  │  └──────────────────────────────────────────────────────┘ │     │
│  │                                                          │     │
│  │  משתתפים:                                                │     │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐      │     │
│  │  │ [✓] מיילו   │ │ [✓] ארצ'י   │ │ [✓] קשיא    │      │     │
│  │  │ Milo         │ │ Archi        │ │ Kashia       │      │     │
│  │  │ המילונאי     │ │ האדריכל      │ │ המבקר        │      │     │
│  │  └──────────────┘ └──────────────┘ └──────────────┘      │     │
│  │  ┌──────────────┐                                        │     │
│  │  │ [ ] ברק     │                                        │     │
│  │  │ Barak        │                                        │     │
│  │  │ ההברקה       │                                        │     │
│  │  └──────────────┘                                        │     │
│  │                                                          │     │
│  │                        [ התחל דיון ]                     │     │
│  └──────────────────────────────────────────────────────────┘     │
│                                                                    │
│  ┌── פגישות ────────────────────────────────────────────────┐     │
│  │                                                          │     │
│  │  ┌─ MOST RECENT ─────────────────────────────────────┐   │     │
│  │  │  גן עדן — בראשית ב:ד-ב:יז                        │   │     │
│  │  │  27.02.2026 14:30  ·  7 מחזורים  ·  3 משתתפים     │   │     │
│  │  │  מיילו  ארצ'י  קשיא                               │   │     │
│  │  │       [ המשך דיון ]         [ צפייה בלבד ]         │   │     │
│  │  └────────────────────────────────────────────────────┘   │     │
│  │                                                          │     │
│  │  ┌────────────────────────────────────────────────────┐   │     │
│  │  │  הנחש — בראשית ג:א       [ צפייה בלבד ]          │   │     │
│  │  │  21.02.2026 09:00  ·  12 מחזורים  ·  4 משתתפים    │   │     │
│  │  │  מיילו  ארצ'י  קשיא  ברק                          │   │     │
│  │  └────────────────────────────────────────────────────┘   │     │
│  │                                                          │     │
│  └──────────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────────┘
```

**Creating a meeting**: The Director provides a title, an opening prompt, and selects which Participant-Agents to include from the discovered agent pool (see "Agent Discovery" section). Participant selection uses **toggle cards** — one per available agent, showing Hebrew name (bold), English name (smaller), and role title. **All agents are selected by default** — the Director deselects ones they don't want. At least 1 Participant-Agent must be selected. The selection is sent in the `start-meeting` WebSocket message as a `participants` array and is **immutable** for the meeting's duration.

**Meeting list**: Previous meetings are listed by querying `git branch --list "sessions/*"` — the server reads each branch's `meeting.json` via `git show` to populate the list with titles, dates, cycle counts, and participant names (as Hebrew-name badges). Most recent meeting first.

**Continue vs. View-only**: The **most recent meeting** is visually prominent, with two buttons: **"המשך דיון"** (Continue) and **"צפייה בלבד"** (View Only). All other meetings show only **"צפייה בלבד"**. Rationale: continuing a meeting involves re-attaching worktrees, recreating symlinks, and potentially resuming Agent SDK sessions — restricting to the most recent avoids complexity and matches the natural workflow.

**Empty state**: When no meetings exist, the "פגישות" section shows "אין פגישות קודמות" in muted text.

**Active meeting detection**: If the server detects that a worktree already exists for a meeting (e.g., server was restarted mid-meeting), the most recent meeting shows "המשך דיון" with a "(פגישה פעילה)" indicator.

### View-Only Mode

When the Director clicks "צפייה בלבד", the server loads the meeting data (via `git show` for ended meetings) and sends a `sync` message with `readOnly: true`. The browser renders the **full deliberation UI** with these differences:

- The human input textarea is **hidden** (not just disabled — removed from the DOM).
- The vibe bar shows the last vibe, with a static "מצב צפייה — דיון מתאריך DD.MM.YYYY" banner.
- No "Attention" or "Rollback" buttons.
- The agent panel works normally (can browse assessments and tool activity from any cycle).
- A persistent banner at the top of the conversation area identifies the mode.

**Resume**: When the most recent meeting is resumed ("המשך דיון"), the server re-attaches the worktree (`git worktree add`), reads `meeting.json` from the worktree, recreates symlinks for session files, sends the full state via WebSocket `sync` message, and the browser reconstructs the conversation feed. The orchestrator resumes from the last completed cycle.

## Agent Discovery

Participant-Agents are **discovered dynamically** from the `participant-agents/` directory — not hardcoded. This means adding a new Participant-Agent requires only creating a new `.md` file with proper frontmatter; no code changes needed.

### Discovery Mechanism

At server start, the session manager scans `participant-agents/` for all non-underscore `.md` files (excluding `_conversation-manager.md` which has `role: conversation-manager` in frontmatter). For each file:

1. Parse the YAML frontmatter to extract `englishName`, `hebrewName`, `managerIntro`, `managerTip`.
2. Extract the `roleTitle` by finding the first `# ` heading and pulling the parenthesized Hebrew text — e.g., from `# The Dictionary Purist (המילונאי)` extract `המילונאי`.
3. Derive the `id` from the filename without `.md` (e.g., `milo.md` → `"milo"`).
4. Build an `AgentDefinition` object (see `meeting.json` schema) and cache it.

The result is cached for the server's lifetime (re-read on server restart, not per-request).

### REST Endpoint

```
GET /api/agents
```

Returns the cached agent definitions as a JSON array. Used by the landing page to populate participant selection cards. Example response:

```json
[
  {
    "id": "milo",
    "englishName": "Milo",
    "hebrewName": "מיילו",
    "roleTitle": "המילונאי",
    "managerIntro": "The Dictionary Purist. Audits word-level dictionary fidelity..."
  },
  {
    "id": "barak",
    "englishName": "Barak",
    "hebrewName": "ברק",
    "roleTitle": "ההברקה",
    "managerIntro": "The Ideator. Makes unexpected connections across distant passages..."
  }
]
```

### Impact on Template Resolution

When building system prompts for a meeting's agents, the `${each:participant}` iterator and `${speakerIds}` computed marker are scoped to `meeting.participants` — not the full discovered pool. An agent not in the meeting is not introduced to other agents, and the Conversation-Manager-Agent cannot select them.

## Attention Button

The Attention button is the Director's way of saying "I want to speak next" without interrupting the current flow. It is a gentle signal, not a hard interrupt — like raising your hand in a meeting while someone else is speaking.

### UI Placement and Behavior

The Attention button lives **in the vibe bar**, at the inline-end side (left side in RTL). It is always visible during an active meeting, alongside the vibe text and phase indicator.

```
┌─────────────────────────────────────────────────────────────────┐
│  ✦ הדיון זורם — כל צד מוסיף שכבה.  ·  הבא: ארצ'י  ·  🎤      │
│                                                  [ ✋ תשומת לב ] │
└─────────────────────────────────────────────────────────────────┘
```

**Three states**:
1. **Idle** (default): `[ ✋ תשומת לב ]` — subtle, muted border, no fill.
2. **Activated**: `[ ✋ תשומת לב ✓ ]` — amber/gold fill, checkmark, button disabled. A single pulse animation (600ms) confirms the click.
3. **Consumed**: Returns to idle automatically when the Director's turn begins (after the forced selection takes effect). No manual reset needed.

**Visibility rules**:
- **Hidden** during `human-turn` phase (no point raising your hand when you already have the floor).
- **Hidden** in view-only mode.
- **Idempotent** — clicking when already activated does nothing (button is disabled).

### Mechanism

1. Client sends `{ type: "attention" }` via WebSocket — fire-and-forget.
2. Server sets an in-memory flag `attentionRequested = true` and broadcasts `{ type: "attention-ack" }`.
3. The current cycle **continues uninterrupted**. No effect on the active speech or assessment.
4. At the next **selection phase** (after assessments are collected), the orchestrator checks `attentionRequested`:
   - If `true`: Assessments are still fed to the Conversation-Manager-Agent, but the prompt is augmented:
     ```
     ** המנחה ביקש את רשות הדיבור. עליך לבחור "Director" כדובר הבא. **
     ```
   - The Conversation-Manager-Agent still produces `vibe` normally — the vibe read is still valuable even when the speaker choice is forced.
5. **Defense-in-depth**: The orchestrator **overrides** `nextSpeaker` to `"Director"` if `attentionRequested` is true, regardless of the manager's response. The vibe is kept as-is.
6. After the Director speaks, the flag resets: `attentionRequested = false`.

**Not persisted**: The flag is ephemeral in-memory state. It does NOT appear in `meeting.json`. If the server restarts, the flag is lost — the Director can click again.

### Edge Cases

- **Director is chosen anyway**: The manager might have selected the Director independently. The flag is consumed regardless.
- **`/end` sent before the Director's turn**: The meeting ends; the flag is discarded.
- **Assessment failure prevents selection**: The flag survives and is honored in the next successful selection phase.

## In-Meeting Rollback

Rollback allows the Director to rewind the deliberation to any past human message, discard everything after it, optionally edit the message, and resume from there. It is the most complex feature — touching the UI, WebSocket protocol, orchestrator, session manager, and git layer.

### UI: Per-Message Rollback Icon

Every human message in the conversation feed has a **rollback icon** (`↩`) that appears **on hover**. It sits at the inline-start edge (right side in RTL) of the message, vertically centered with the first line of text.

```
Normal state (no hover):
┌──────────────────────────────────────────────────────────┐
│ המנחה:                                                   │
│ הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן             │
│ שונה מהשימוש בבראשית א:כא                                │
└──────────────────────────────────────────────────────────┘

Hover state:
┌──────────────────────────────────────────────────────────┐
│ המנחה:                                            [↩]    │
│ הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן             │
│ שונה מהשימוש בבראשית א:כא                                │
└──────────────────────────────────────────────────────────┘
```

- The **opening prompt** (the very first human message) also has a rollback button — rolling back to it discards the entire conversation.
- **Hidden** in view-only mode.
- **Clickable during active agent speech** — triggers immediate interrupt followed by the rollback flow.

### Confirmation Dialog

Clicking the rollback icon opens a **modal dialog** overlaid on the deliberation UI. The dialog clearly communicates the consequences:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    חזרה לנקודה קודמת                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ ההודעה שנבחרה:                                        │  │
│  │                                                        │  │
│  │ "הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן        │  │
│  │  שונה מהשימוש בבראשית א:כא"                           │  │
│  │                                                        │  │
│  │ (מחזור 3 מתוך 7)                                      │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ⚠ פעולה זו תמחק 4 מחזורים (מחזורים 4-7)                   │
│                                                              │
│  לאחר החזרה תוכל לערוך את ההודעה ולהמשיך משם.               │
│                                                              │
│           [ ביטול ]              [ אישור חזרה ]              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- **Cancel** has default focus (safety).
- **Enter key does NOT trigger Confirm** — deliberate safety design; must click explicitly.
- During the dialog, messages after the target cycle get `opacity: 0.3` to visually preview what will be discarded.

### Rollback Flow (6 Phases)

**Phase 1 — Immediate Abort** (client-side, < 100ms):
- Client sends `{ type: "rollback", targetCycleNumber: number }`.
- Client transitions to "rolling back" state: fades messages after target, shows spinner, disables all buttons.

**Phase 2 — Server-Side Abort** (< 1s):
- If any `query()` calls are active (speech, assessments, selection), the orchestrator calls `.interrupt()` on each.
- Broadcasts `{ type: "phase", phase: "rolling-back" }`.

**Phase 3 — Git Rollback** (session branch, < 5s):
- Find the target cycle's commit on the session branch (commit message format: `"Cycle N: <speaker>"`).
- Reset: `git -C <worktree> reset --hard <commit>`.
- Re-read `meeting.json` from the now-reset worktree.

**Phase 4 — Perush File Rollback** (main branch, if needed):
- Check for correlated tags (`session-cycle/*--<meeting-id>/*`) for cycles after the target.
- If perush changes exist after the rollback point: stash any uncommitted main changes (`git stash push -m "Pre-rollback stash" -- פירוש/ ניתוחים-לשוניים/`), then `git reset --hard <tag>/main` to the most recent tag at or before the target cycle.
- If no perush changes after target: main is left untouched.
- Notify the Director via `rollback-progress` if changes were stashed.

**Phase 5 — Session Recovery**:
- **All agent sessions are recreated** — not just the ones that spoke after the rollback point. All sessions have accumulated invalid context (private assessments, manager decisions, internal reasoning from discarded cycles). Clean sessions from the rolled-back transcript are the safest approach.
- For each agent (all Participant-Agents + Conversation-Manager-Agent):
  1. Create a new Agent SDK session (same persona, same model).
  2. Feed the conversation transcript from the rolled-back `meeting.json` as initial context.
  3. Capture the new session (move+symlink into worktree).
  4. Update `meeting.json.sessionIds`.
- Commit to session branch: `"Rollback to cycle N + session recovery"`.

**Phase 6 — Edit-After-Rollback**:
- Server sends `sync` with `editingCycle: targetCycleNumber`.
- Browser renders the rolled-back conversation. The target human message is displayed in an **editable textarea** — inline, replacing the static message text.

```
┌──────────────────────────────────────────────────────────┐
│ המנחה (עריכה):                                           │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן        │  │
│ │ שונה מהשימוש בבראשית א:כא                           │  │
│ └─────────────────────────────────────────────────────┘  │
│         [ שלח כמו שהוא ]           [ שלח ]               │
└──────────────────────────────────────────────────────────┘
```

- **"שלח כמו שהוא"** (Send as-is): submits the original text unchanged. For cases where the Director wanted to discard what came after, not change the prompt itself.
- **"שלח"** (Send): submits the edited text.
- Either button sends the text as a normal `human-speech` message. The cycle proceeds from there as usual.

**Special case — rollback to opening prompt (cycle 0)**: There is no "cycle 0 commit" — the initial commit is "Initial: meeting created." The rollback resets to this initial commit. The `meeting.json` at this point has an empty `cycles` array. The `editingCycle: 0` signal tells the browser to render the `openingPrompt` as editable. When submitted, the orchestrator updates `meeting.json.openingPrompt` with the new text and feeds it to all newly-recovered sessions as the opening context.

### Schema Impact

Rollback does **not** add new fields to `meeting.json`. Instead, it **truncates** the `cycles` array to the target cycle and updates `sessionIds` for the recovered sessions. The git history preserves what was discarded (pre-rollback commits remain in the reflog). The rollback commit message (`"Rollback to cycle N + session recovery"`) serves as the audit trail.

### Edge Cases

- **Rollback during assessment/selection phase**: All active `query()` calls are interrupted.
- **Uncommitted perush changes on main**: Stashed with a `rollback-progress` notification to the Director.
- **Session recovery failure for one agent**: Rollback is still considered successful (git state is correct). The failed agent is logged; recovery retried on the next cycle that needs it.
- **Rapid successive rollbacks**: All UI buttons are disabled during the `rolling-back` phase. A second rollback cannot start until the first completes.
- **No "undo rollback"**: Discarded cycles exist in the git reflog but there is no UI for recovering them. This is acceptable for a single-user local tool where the Director has full git access.

## Conversation State and Persistence

### Git Branches as the Meeting Database

Each meeting lives on its own **orphan branch** (`sessions/<meeting-id>`). There are no meeting files on `main` — ever. Git branches are the meeting database.

**Listing meetings** = listing `sessions/*` branches:
```bash
git branch --list "sessions/*" --sort=-committerdate
```

**Reading an ended meeting** = `git show`:
```bash
git show sessions/bereshit-2-4-eden:meeting.json
```

**Reading an active meeting** = regular file I/O on the worktree:
```typescript
readFile("meetings/bereshit-2-4-eden/meeting.json", "utf-8")
```

**Browsing meeting history** = `git log`:
```bash
git log sessions/bereshit-2-4-eden --oneline
# a1b2c3d Meeting ended
# e4f5g6h Cycle 7: human
# i7j8k9l Cycle 6: kashia
# ...
# c2d3e4f Initial: meeting created
```

**Inspecting a specific cycle** = `git show` at a commit:
```bash
git show i7j8k9l:meeting.json  # meeting state after cycle 6
```

### The `meeting.json` Schema

Each meeting's `meeting.json` lives in the meeting's worktree (and, after the meeting ends, on the session branch). It contains the full deliberative record.

```typescript
type AgentId = string;        // Dynamically derived from persona filenames (e.g., "milo", "barak")
type SpeakerId = AgentId | "human";
type MeetingId = string;
type FormattedTime = string;  // Format: "YYYY-MM-DD HH:MM:SS (<ms since epoch>)"
                              // When reading/parsing — use the <ms since epoch>.
                              // Utility create/parse functions should be written.
type MeetingMode = "Perush-Development"; // Only value for now. TBD: "Make-Reader-Friendly"

// The available agent pool is discovered dynamically from participant-agents/*.md
// (see "Agent Discovery" section). Each meeting selects a subset.

interface AgentDefinition {
  id: AgentId;                // filename without .md (e.g., "milo")
  englishName: string;        // from frontmatter
  hebrewName: string;         // from frontmatter
  roleTitle: string;          // Hebrew role name, extracted from first # heading (e.g., "המילונאי")
  managerIntro: string;       // from frontmatter — one-sentence profile for the manager
  managerTip: string;         // from frontmatter — when to bring this agent in
  filePath: string;           // full path to the .md file
}

interface ConversationMessage {
  speaker: SpeakerId;
  content: string;            // the public speech
  timestamp: FormattedTime;
}

interface PrivateAssessment {
  agent: AgentId;
  selfImportance: number;     // 1-10
  humanImportance: number;    // 1-10
  summary: string;            // what they'd say (1 sentence)
}

// A cycle = one complete round: assess the previous speech → select next speaker → that speaker speaks.
// The `speech` field contains the speech PRODUCED during this cycle (the selected speaker's output),
// NOT the speech that triggered the assessment. The triggering speech is either the previous cycle's
// `speech` or (for cycle 1) the `openingPrompt`.
interface CycleRecord {
  cycleNumber: number;
  speech: ConversationMessage;                       // the speech delivered by the selected speaker
  assessments: Record<AgentId, PrivateAssessment>;   // assessments of the PREVIOUS speech (only the meeting's active participants)
  managerDecision: {
    nextSpeaker: SpeakerId;
    vibe: string;
  };
}

interface Meeting {
  meetingId: MeetingId;
  mode: MeetingMode;
  title: string;              // specified by the Director when creating the meeting
  openingPrompt: string;      // Director's initial context-setting message
  participants: AgentId[];    // selected Participant-Agent IDs for this meeting — set at creation, IMMUTABLE
  cycles: CycleRecord[];
  startedAt: FormattedTime;
  lastEngagedAt?: FormattedTime;  // timestamp of the last ConversationMessage
  sessionIds: Record<AgentId | "manager", string>;  // AI-Agent session IDs for this meeting's participants + manager
                                                     // Updated on session creation and recovery
  totalCostEstimate?: number;  // accumulated estimated API cost in USD (updated per-cycle)
}
```

This schema records everything: the public conversation, the private assessments, the manager's decisions and vibes. The full deliberative process is preserved for audit.

**The `participants` array** is the authoritative list of agents for a meeting. All code that iterates over agents — assessment phase, template resolution for `_agents-prefix.md`, speaker selection, UI rendering — uses `meeting.participants` instead of a global constant. This means:
- Template resolution for `${each:participant}` and `${speakerIds}` is **scoped to the meeting's participants** — an agent not in the room is not introduced to other agents.
- The Conversation-Manager-Agent only knows about the meeting's selected participants — it cannot select an agent that is not in the meeting.

### Atomic File Writes

`meeting.json` is written atomically using the temp-file-then-rename pattern (as in `../_RTL-EDITOR/src/server.ts`): write to a temporary file in the worktree, then `rename()` to the final path. This prevents corruption if the server crashes mid-write. The subsequent `git commit` on the session branch happens only after the write is confirmed.

## AI-Agent Personas

All AI-Agent personas live in `participant-agents/`:

| File | Name | Type | Role |
|------|------|------|------|
| `_base-prefix.md` | — | *(shared prefix)* | Prepended to ALL AI-Agents — project context, common instructions, dictionary injection point |
| `_agents-prefix.md` | — | *(shared prefix)* | Prepended to Participant-Agents only — introduces fellow Participants using `${each:participant}` markers |
| `milo.md` | **Milo / מיילו** | Participant-Agent | Dictionary Purist (המילונאי) — word-level dictionary fidelity |
| `archi.md` | **Archi / ארצ'י** | Participant-Agent | Architect (האדריכל) — structural coherence across the narrative |
| `kashia.md` | **Kashia / קשיא** | Participant-Agent | Skeptic (המבקר) — intellectual honesty, degrees of freedom, reverse-engineering test |
| `barak.md` | **Barak / ברק** | Participant-Agent | Ideator (ההברקה) — divergent insight, rare speaker by design |
| `_conversation-manager.md` | — | Conversation-Manager-Agent | The orchestration logic (not a Participant) |

**Naming convention**:
- Files with an `_` prefix are special (shared prefix, orchestration logic). They are NOT direct agent files — they serve as includes or shared content.
- Files without `_` are agent files that undergo template processing and have YAML frontmatter.
- Each Participant-Agent has an **English name** and a **Hebrew name** (phonetically similar) by which they are known to everyone in the deliberation.
- The Conversation-Manager-Agent has no public name — it "lives in the shadows."
- The Director is known as **"The Director"** / **"המנחה"**.

### Frontmatter

Each non-underscore agent file has YAML frontmatter with metadata:

```yaml
---
englishName: Milo
hebrewName: מיילו
managerIntro: "The Dictionary Purist. Audits word-level dictionary fidelity — catches untranslated words, loose synonyms, and narrative drift. Direct, factual, tends to speak frequently with short, pointed observations"
managerTip: "Bring in when specific words need dictionary checking, when the discussion is drifting from the text, or when dictionary evidence could settle a dispute"
---
```

Fields:
- **`englishName`** / **`hebrewName`**: The agent's display names, used for speaker labels, UI, and template resolution.
- **`managerIntro`**: A one-sentence profile of the agent — used by the Conversation Manager to understand who each participant is. Written from the manager's perspective.
- **`managerTip`**: Guidance for the manager on when this agent is most valuable. Written as a stage direction.
- **`role`** (optional): Special role identifier. Currently only `_conversation-manager.md` uses `role: conversation-manager`.

The session manager parses this frontmatter and uses it for template marker resolution, agent metadata (display names in the UI, speaker labels), and dynamic prompt construction.

### Template Marker Resolution

Non-underscore agent files undergo **marker resolution** before being used as system prompts. The session manager processes markers in this order:

1. **Include markers** — `${include:<filename>}` is replaced with the contents of the referenced file (from `participant-agents/`) without the frontmatter. This enables composition.

2. **Variable markers** — `${EnglishName}`, `${HebrewName}`, and any future frontmatter-derived variables are replaced with values from the **current file's** frontmatter.

3. **Iterator blocks** — `${each:participant}...${/each:participant}` repeats the enclosed template once per participant agent (all non-underscore files excluding the file currently being resolved). Inside the block, variable markers (`${EnglishName}`, `${HebrewName}`, `${managerIntro}`, `${managerTip}`) resolve against **each participant's** frontmatter in turn.

4. **Computed markers** — Dynamic values derived from the agent registry:
   - `${speakerIds}` — resolves to a JSON-style list of valid `nextSpeaker` values, e.g., `"Milo" | "Archi" | "Kashia" | "Director"`. Used in the manager's output schema so the LLM knows the exact valid values.

**Resolution order matters**: includes are resolved first (so included content can contain variable and iterator markers), then variables, then iterators, then computed markers.

**Example flow** for `milo.md`:
```
1. Read milo.md → parse frontmatter: { englishName: "Milo", hebrewName: "מיילו", managerIntro: "...", managerTip: "..." }
2. Resolve ${include:...} markers (if any) → inline included file contents
3. Resolve ${EnglishName} → "Milo", ${HebrewName} → "מיילו"
4. No iterator blocks or computed markers in milo.md → skip
5. Resolve _agents-prefix.md: expand ${each:participant} block with the meeting's selected participants' frontmatter
6. Prepend _base-prefix.md (with dictionary injected at <!-- DICTIONARY_INJECTION_POINT -->) + resolved _agents-prefix.md
7. Result = complete system prompt for the milo session
```

**Example flow** for `_conversation-manager.md`:
```
1. Read _conversation-manager.md → parse frontmatter: { role: "conversation-manager" }
3. Resolve ${EnglishName}, ${HebrewName} → empty (manager has no public name)
4. Resolve ${each:participant}...${/each:participant} blocks:
   - Load frontmatter from the meeting's selected participants (e.g., milo.md, archi.md, kashia.md, barak.md)
   - For each: expand the block template with that agent's ${EnglishName}, ${HebrewName}, ${managerIntro}, ${managerTip}
   - Result: a concrete participant list with all names and descriptions inline
5. Resolve ${speakerIds} → e.g., "Milo" | "Archi" | "Kashia" | "Barak" | "Director" (based on selected participants)
6. Prepend _base-prefix.md (with dictionary) — NO _agents-prefix.md for the manager
7. Result = complete system prompt for the conversation manager session
```

### System Prompt Construction (Summary)

```
Participant agents:       _base-prefix.md (with dictionary) + _agents-prefix.md (with markers resolved) + resolved agent file
Conversation manager:     _base-prefix.md (with dictionary) + resolved _conversation-manager.md
```

- `_base-prefix.md` includes `<!-- DICTIONARY_INJECTION_POINT -->` where the session manager injects the full dictionary from `../CLAUDE.md` at runtime.
- `_agents-prefix.md` includes `${each:participant}` markers that are resolved with the **meeting's selected participants'** frontmatter — introducing only the agents who are actually in the room (plus the Director) to this agent.
- The conversation manager does NOT get `_agents-prefix.md` — it has its own participant introductions inside `_conversation-manager.md` (with `${managerTip}` fields that are manager-specific). These are also scoped to the meeting's participants.

### Design Principles

The Participant-Agents follow a **primary mandate / secondary engagement** structure:

- **Primary mandate** (strict): Each agent has a domain they're uniquely qualified to observe. This is their core contribution and the lens through which they see everything.
- **Secondary engagement** (dialectical): Agents CAN and SHOULD engage with what others said — but always through their own lens. Milo doesn't judge structural coherence, but can say "ומנקודת מבט מילונית, הנקודה המבנית של ארצ'י מקבלת חיזוק — המילה כל כאן מאשרת את הרצף."

This produces genuine conversation — not three parallel monologues — while keeping each voice distinct and valuable.

### Language

Participant-Agents **speak in Hebrew**. The persona files themselves are in English (instructions for the LLM), but the output — everything the Participant-Agent says in the deliberation — is in Hebrew. Biblical words, root analysis, cross-references all stay in their natural language.

### Speech Rhythm

No hard length constraint. The guidance is conversational: deliver your point well, but keep it dynamic. Pass the ball. If you have multiple things to say, pick the most important — you'll get more turns. Forcing a contribution when you have nothing important to say is worse than a brief "אין לי הערות כאן."

### The Conversation-Manager-Agent

The Conversation-Manager-Agent (`_conversation-manager.md`) is fundamentally different from the Participant-Agents:
- It does NOT analyze biblical text or participate in the conversation — it is NOT a Participant.
- It receives private assessments each cycle → outputs a Participant selection + vibe comment.
- It runs as a **persistent Sonnet session** (not Opus) — it never needs tools, and its structured JSON output doesn't require Opus-level depth. But it benefits greatly from session persistence: it accumulates understanding of who tends to agree with whom, which topics recur, and when the Director is losing patience.
- Its heuristics prioritize: productive disagreement, balance across Participants, Director heartbeat (don't let 3+ Participant-Agent turns pass without Director input), and honest vibe readings.

## Execution Context

**Critical distinction**: This project (`_DELIBERATION-ROOM/`) is where the deliberation software is **developed**. But the software **runs** from the root project directory (`../`), because the agents need access to:
- `../CLAUDE.md` — the dictionary and interpretive methodology (injected into agent system prompts)
- `../פירוש/` — the commentary segments (accessed by agents via tools)
- `../scripts/hebrew-grep` — the Hebrew search tool (used by agents via Bash)

The server will be launched from the root directory (or will resolve paths relative to it). Keep this in mind when writing file paths in the code.

## Technology Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| Runtime | **Bun** | Consistent with the project ecosystem (see `../_RTL-EDITOR`); native WebSocket support in `Bun.serve()` |
| Language | **TypeScript** | Type safety for the complex message schemas; consistent with the project |
| Web server | **Bun.serve()** | HTTP + WebSocket in a single API; no external server framework needed |
| Frontend | **Vanilla HTML/JS + Tailwind CSS** | No JS framework, no bundling. Tailwind provides utility-first CSS with RTL logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`). Single-page application. |
| Agent sessions | **@anthropic-ai/claude-agent-sdk** | All phases — persistent sessions for agents (Opus) and manager (Sonnet), with tools and streaming via `includePartialMessages` |
| Validation | **zod** | Runtime schema validation at every boundary: WebSocket messages, AI-Agent assessment/selection output, meeting.json deserialization, frontmatter parsing. Defines TypeScript types from the same schema — single source of truth for shapes. |
| Frontmatter | **gray-matter** | Parses YAML frontmatter from persona `.md` files (extract frontmatter + content body in one call) |
| Persistence | **Git branches (worktrees)** | Each meeting on an orphan branch; `meeting.json` + session files committed per-cycle; zero meeting data on `main`; git itself is the database (`git branch --list`, `git show`, `git log`) |
| Unit tests | **bun:test** | Built into Bun, Jest-compatible API, zero config. Every module gets a `.test.ts` companion. |
| E2E tests | **Playwright** | Browser automation for visual/UI testing — especially RTL layout, streaming text, and WebSocket-driven state transitions |

### Key Dependencies

```json
{
  "@anthropic-ai/claude-agent-sdk": "...",
  "zod": "...",
  "gray-matter": "...",
  "tailwindcss": "...",
  "playwright": "..."
}
```

Minimal dependency footprint. No multi-agent frameworks (no LangChain, no AutoGen, no CrewAI), no frontend frameworks (no React), no server frameworks (no Express). The orchestrator and frontend are custom-built because:
1. A small number of AI-Agents per meeting — framework overhead is not justified.
2. The turn-taking protocol is our core innovation — frameworks would constrain it.
3. The private/public separation requires custom architecture.
4. The frontend is a single page with straightforward DOM manipulation — no framework needed.

## Project Structure

```
_DELIBERATION-ROOM/
├── .gitignore             ← includes "meetings/" (worktree mount point, not tracked on main)
├── CLAUDE.md              ← this file (development guide)
├── package.json
├── tsconfig.json
├── tailwind.config.ts     ← Tailwind configuration (RTL, font stack, custom colors)
├── playwright-test.ts     ← Playwright browser testing helper
├── participant-agents/    ← AI-Agent persona files (loaded by session manager to build system prompts)
│   ├── _base-prefix.md            ← shared prefix prepended to ALL AI-Agents (dictionary, common instructions)
│   ├── _agents-prefix.md          ← Participant-Agent-only prefix (introduces fellow Participants via markers)
│   ├── _conversation-manager.md   ← Conversation-Manager-Agent orchestration logic (not a Participant)
│   ├── milo.md                 ← Dictionary Purist (Participant-Agent)
│   ├── archi.md                ← Architect (Participant-Agent)
│   ├── kashia.md                 ← Skeptic (Participant-Agent)
│   ├── barak.md                   ← Ideator (Participant-Agent)
├── src/
│   ├── server.ts          ← Bun web server (HTTP + WebSocket), main entry point
│   ├── orchestrator.ts    ← the deliberation loop, phase management
│   ├── session-manager.ts ← persistent Agent SDK sessions (creation, feeding, streaming, recovery,
│   │                         move+symlink, worktree management, sessions-index management)
│   ├── conversation.ts    ← conversation state management (git-as-database: worktree I/O + git show)
│   ├── types.ts           ← shared TypeScript interfaces and zod schemas
│   ├── config.ts          ← ALL configurable values (see "Configuration" section below)
│   ├── stub-sdk.ts        ← Agent SDK stub for testing (see "Stub Agent SDK" section below)
│   ├── server.test.ts     ← unit tests for server
│   ├── orchestrator.test.ts      ← unit tests for orchestrator
│   ├── session-manager.test.ts   ← unit tests for session manager
│   ├── conversation.test.ts      ← unit tests for conversation store
│   ├── types.test.ts      ← unit tests for zod schemas and type utilities
│   └── config.test.ts     ← unit tests for config utilities
├── public/
│   ├── index.html         ← main interface (landing page + deliberation UI)
│   ├── input.css          ← Tailwind input file (@tailwind directives)
│   ├── style.css          ← Tailwind-generated output (gitignored, built by tailwindcss CLI)
│   └── src/
│       ├── app.js         ← frontend entry point, WebSocket client, DOM orchestration
│       ├── conversation-view.js  ← conversation feed rendering, streaming display
│       └── agent-panel.js        ← agent panel tabs, assessment display, tool activity
├── tests/
│   └── e2e/
│       ├── landing-page.test.ts      ← Playwright: meeting creation, list, resume
│       ├── conversation.test.ts      ← Playwright: streaming, RTL, phase transitions
│       └── mock-ws-server.ts         ← Mock WebSocket server for deterministic frontend E2E tests
└── meetings/              ← worktree mount point (gitignored on main, NEVER tracked on main)
    └── <meeting-id>/      ← worktree for sessions/<meeting-id> branch (exists only while active)
        ├── meeting.json           ← meeting record (conversation, assessments, decisions)
        ├── <session-id>.jsonl     ← agent JSONL transcript (symlinked from ~/.claude/projects/)
        └── <session-id>/          ← session directory (may contain subagents/)
```

AI-Agent personas live in `participant-agents/` (see "AI-Agent Personas" section above).

## Development Guidelines

### Running the System

```bash
# From the _DELIBERATION-ROOM directory:

# Install dependencies
bun install

# Start the server (port 4100) + Tailwind watcher
bun run dev

# Or run components separately:
bun run dev:server    # Bun server with --watch
bun run dev:css       # Tailwind CSS watcher

# Run unit tests
bun test

# Run unit tests in watch mode
bun test --watch

# Open in browser
open http://localhost:4100
```

**`package.json` scripts**:
```json
{
  "scripts": {
    "dev": "bun run dev:css & bun run dev:server",
    "dev:server": "lsof -ti:4100 | xargs kill -9 2>/dev/null; bun --watch src/server.ts",
    "dev:css": "bunx tailwindcss -i public/input.css -o public/style.css --watch",
    "build:css": "bunx tailwindcss -i public/input.css -o public/style.css --minify",
    "test": "bun test",
    "test:e2e": "bun run tests/e2e/landing-page.test.ts && bun run tests/e2e/conversation.test.ts"
  }
}
```

Meeting lifecycle (create, resume, end) is managed entirely through the browser UI — no CLI arguments needed.

### First-Run Preconditions

Before `bun run dev` works for the first time:

1. **`bun install`** — install all dependencies.
2. **`meetings/` directory** — created automatically if missing, but listed in `.gitignore`. Will not exist after a fresh clone.
3. **Claude SDK authentication** — the `claude` CLI must be installed and authenticated (`claude` should work from the terminal). Required for real Agent SDK sessions (not for stub mode).
4. **Git config** — set `core.quotepath=false` to prevent Hebrew filenames from being escaped to octal in `git status`/`git branch` output, which would break our branch listing parser:
   ```bash
   git config core.quotepath false
   ```
5. **Tailwind build** — run `bun run build:css` once (or `bun run dev` which does it automatically) to generate `public/style.css` from `public/input.css`.

### Configuration

**All configurable values live in `src/config.ts`** — this is the single source of truth for every tweakable number, string, path, timeout, model name, cost cap, and behavioral parameter in the system. This file must be well-documented with JSDoc comments explaining what each value controls and its valid range.

Categories of configuration:

| Category | Examples |
|----------|---------|
| **Network** | Server port, WebSocket reconnection intervals, Director input timeout |
| **Models** | Participant-Agent model (`claude-opus-4-6`), Manager model (`claude-sonnet-4-6`), model IDs for stub mode |
| **Cost caps** | `maxBudgetUsd` per speech, `maxTurns` per speech |
| **Paths** | `DELIBERATION_DIR`, `PARTICIPANT_AGENTS_DIR`, `MEETINGS_DIR`, root project dir, `getClaudeProjectDir()` |
| **Git** | Session branch prefix (`sessions/`), tag prefix (`session-cycle/`), commit message templates |
| **Timing** | Director input timeout (10 min), WebSocket reconnection backoff (1s/2s/4s/max 30s), vibe bar fade duration (300ms), attention button pulse duration (600ms) |
| **UI** | Speaker color palette, font stack, panel collapse defaults |
| **Assessment** | selfImportance/humanImportance scale (1-10), assessment prompt templates |
| **Stub mode** | Whether to use the stub SDK (see below), default stub response delay |

**Design rule**: If a value appears as a magic number or hardcoded string anywhere in the codebase, it belongs in `config.ts`. When implementing a feature, extract all constants to `config.ts` immediately — do not leave them inline "for now."

### Testing

**Mandatory rule: every implementation task must be accompanied by tests.** Code without tests is incomplete code. When implementing a feature:

1. **Write unit tests** (`bun:test`) for the module being implemented. Every `.ts` file in `src/` should have a companion `.test.ts` file.
2. **Write E2E tests** (Playwright) when the feature has a visible UI component — landing page interactions, conversation rendering, streaming display, phase transitions.
3. **Run tests before considering a task done.** A feature that passes manual inspection but has no automated tests is not finished.

#### Unit Tests (`bun:test`)

Test each module in isolation. Use the stub SDK (see below) to avoid API calls in tests.

**What to test per module**:

1. **`types.ts`**: Zod schema validation — valid inputs pass, invalid inputs fail with expected errors. `FormattedTime` create/parse round-trip. Type utilities.
2. **`config.ts`**: `getClaudeProjectDir()` path derivation for various CWDs. Config value types and defaults.
3. **`conversation.ts`**: Meeting CRUD via git branches. Atomic file writes. Meeting listing from branches. Reading ended meetings via `git show`. Worktree creation/removal. Cycle truncation for rollback.
4. **`session-manager.ts`**: Session creation (via stub). Message feeding and assessment extraction. Speech streaming. Session recovery after simulated crash. Move+symlink capture. `ensureSessionInIndex`. Template marker resolution (includes, variables, iterators, computed markers). Frontmatter parsing.
5. **`orchestrator.ts`**: Full cycle with stub SDK — assessment → selection → speech. Attention flag mechanics. Phase transitions. Graceful shutdown. Director timeout handling.
6. **`server.ts`**: WebSocket message routing. HTTP endpoint responses. Reconnection/sync behavior.

**Test patterns**:
```typescript
import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { createStubSDK } from "./stub-sdk";

describe("session-manager", () => {
  test("extractAssessment parses valid JSON from agent response", () => {
    // ...
  });

  test("extractAssessment throws on malformed response", () => {
    // ...
  });
});
```

#### E2E Tests (Playwright)

Located in `tests/e2e/`. Use `mock-ws-server.ts` to replay canned WebSocket event sequences — this avoids API costs and makes tests deterministic.

**What to test**:
1. **Landing page**: Meeting creation form, participant selection toggles, meeting list rendering, empty state.
2. **Conversation**: Message rendering, RTL layout, streaming text appending, phase indicator updates, speaker color-coding.
3. **Agent panel**: Tab switching, assessment display, importance badges, collapse/expand.
4. **Interactions**: Attention button states, rollback dialog, vibe bar transitions, Director input submission.

#### Stub Agent SDK

`src/stub-sdk.ts` provides a **drop-in replacement for the Agent SDK** with the same interface — but the caller explicitly provides the expected response (as YAML or structured data) within the query prompt itself.

**Purpose**: Fast, deterministic, cost-free testing — both unit tests and UI E2E tests. The stub is the foundation that makes test-driven development practical for this project.

**How it works**:

1. The stub implements the same `query()` interface as the real Agent SDK — returning an async iterable of messages with the same type signatures (`system/init`, `assistant`, `result`, etc.).
2. When calling `query()`, the prompt includes a YAML block that specifies the expected response:
   ```
   הודעה חדשה מ-milo: ...content...
   מה ההערכה שלך?

   ---stub-response---
   selfImportance: 7
   humanImportance: 4
   summary: "יש כאן בעיה מילונית חמורה עם המילה 'נחש'"
   ---end-stub-response---
   ```
3. The stub parses the YAML between the markers and returns it as if the AI-Agent had produced that response — with proper message type wrapping, session ID generation, and optional streaming simulation.
4. For speech responses, the stub supports multi-chunk streaming with configurable delay between chunks.

**Activation**: Controlled by a config flag in `src/config.ts` (`USE_STUB_SDK`). When `true`, the session manager instantiates the stub instead of the real SDK. The orchestrator and all other code are unaware of the difference — the interface is identical.

**The stub must be maintained alongside the real SDK interface.** When the real SDK interface changes (new message types, new fields), the stub must be updated to match. This is a small cost for the enormous benefit of fast, free, deterministic tests.

```typescript
// Usage in tests:
import { createStubSDK } from "./stub-sdk";

const sdk = createStubSDK();
const query = sdk.query({
  prompt: `...actual prompt...\n\n---stub-response---\nselfImportance: 8\nhumanImportance: 3\nsummary: "test"\n---end-stub-response---`,
  options: { model: "claude-opus-4-6" }
});

for await (const msg of query) {
  // Same message types as the real SDK
}
```

### Error Handling

- **Session failure**: If an AI-Agent's persistent session dies (network error, context overflow, API error), apply session recovery: create a new session, feed the conversation transcript from `meeting.json`, capture the new session (move+symlink into worktree), update `meeting.json` with the new session ID, commit to the session branch, and resume. Notify the browser that the session was recovered (shown in the Participant-Agent's panel, if applicable). If recovery also fails, send the error to the browser and signal the Director to decide.
- **Assessment failure**: If a single Participant-Agent's assessment fails, proceed with the remaining assessments. The Conversation-Manager-Agent can make a selection with 1-2 assessments instead of 3.
- If a Participant-Agent's speech hits the turn or budget cap (which should be rare given the generous limits), the Agent SDK will stop it. Display whatever partial output was generated and note the truncation.
- If the browser disconnects during the Director's turn, the orchestrator waits (up to 10 minutes). When the browser reconnects, the "your turn" state is restored. Persistent sessions continue running regardless of browser state.
- If the server restarts mid-meeting, all persistent sessions are lost (Agent SDK state is in-memory). The last completed cycle is recovered from `meeting.json` in the worktree (or via `git show` if the worktree was removed). The session manager re-attaches the worktree if needed, recreates symlinks, and attempts to resume existing sessions (using saved session IDs); if that fails, new sessions are created, fed the conversation transcript, and captured (move+symlink into worktree). The meeting resumes from the last saved state when the browser reconnects. This is acceptable for a local single-user tool.
- **Worktree conflicts**: If `git worktree add` fails because a worktree already exists at the path (e.g., from a previous crash), the session manager runs `git worktree remove --force` first, then retries. If the branch already exists but has no worktree, `git worktree add <path> <branch>` re-attaches it.

### Graceful Shutdown

The server must handle `SIGINT` (Ctrl+C) and `SIGTERM` gracefully — especially during development when the server is restarted frequently:

1. **Interrupt active queries**: If any Agent SDK `query()` calls are in progress, call `.interrupt()` on each.
2. **Commit current state**: If a meeting is active with pending changes, commit whatever state exists to the session branch (`"Server shutdown: partial cycle"`).
3. **Remove worktree cleanly**: Call `git worktree remove` for the active meeting's worktree.
4. **Close WebSocket connections**: Send an `{ type: "error", message: "Server shutting down" }` to all connected clients before closing.
5. **Exit**: Process exits cleanly.

Without graceful shutdown, repeated server restarts during development accumulate broken state: dangling worktrees, uncommitted session files, orphaned symlinks. This is implemented via `process.on("SIGINT", ...)` and `process.on("SIGTERM", ...)`.

### Git State Preconditions

At meeting start, the system should check for potential conflicts:

- **Uncommitted perush changes on `main`**: If `git diff --name-only` shows modified files under `פירוש/` or `ניתוחים-לשוניים/`, warn the Director before proceeding. Agent-initiated perush changes during the meeting could conflict with or accidentally include these unrelated modifications.
- **Dirty worktree state**: If `meetings/` contains leftover directories from a previous crash, clean them up (`git worktree remove --force`) before creating new worktrees.

### Cost Tracking

The system tracks estimated API costs per meeting. The `meeting.json` schema includes a `totalCostEstimate` field (added by the orchestrator after each cycle, based on approximate input/output token counts × model rates). This estimate is displayed in the vibe bar during active meetings and in the meeting list on the landing page.

This is an **estimate**, not an exact accounting — the real cost depends on prompt caching hit rates which vary. But it provides essential visibility when a meeting could spend $10+.

### Idempotency Principle

**Every operation that mutates state must be idempotent — safe to retry after a crash.** This is a foundational design principle, not an optimization. Key implications:

- `captureSession` must check if the file is already in the worktree before moving.
- `ensureSessionInIndex` must check if the entry already exists before adding.
- `recreateSymlink` must handle existing symlinks (remove and recreate).
- `commitCycle` must handle "nothing to commit" gracefully.
- `createMeetingWorktree` must handle "worktree already exists" (remove and recreate).

When implementing any function that creates, moves, or writes files: first check if the target state already exists.

### Import Dependency Graph

Circular imports are a structural problem that must be prevented. The dependency graph between `src/` modules flows strictly downward:

```
types.ts          ← no imports from src/ (only external: zod)
config.ts         ← imports only types.ts
conversation.ts   ← imports types.ts, config.ts
session-manager.ts ← imports types.ts, config.ts, conversation.ts, stub-sdk.ts
orchestrator.ts   ← imports all above
server.ts         ← imports orchestrator.ts, types.ts, config.ts
stub-sdk.ts       ← imports only types.ts
```

**No upward arrows.** If `conversation.ts` ever needs something from `orchestrator.ts`, that's a design smell — extract the shared logic into a lower-level module.

### `sessions-index.json` Concurrent Access

The server writes to `sessions-index.json` (under `~/.claude/projects/`); Claude Code also reads and writes this file during normal operation. Concurrent access can corrupt the file.

**Mitigation**: Use a read-modify-write pattern with a retry loop (read, parse, check if entry exists, write atomically). Accept that the index is best-effort — the JSONL session files are the authoritative source of truth. If the index is corrupted, the system should recover by scanning JSONL files, not by crashing.

### Session Branch Cleanup

After many meetings, `git branch --list "sessions/*"` accumulates branches. The system does not auto-delete branches (meetings are valuable historical artifacts). However:

- The landing page meeting list should handle many branches gracefully (show only the N most recent, with a "show all" option).
- Document how to manually prune old branches: `git branch -D sessions/<old-meeting-id>`.

### Code Style

- Follow the patterns established in `../_RTL-EDITOR` for Bun/TypeScript conventions.
- Keep the orchestrator loop readable — it's the heart of the system and should read like pseudocode.
- Design for extensibility: adding a new Participant-Agent should require only adding a persona file with proper frontmatter — no code changes. Agent-specific logic should be driven by the persona files and the `meeting.participants` array — never by hardcoded agent IDs.
- The frontend is vanilla JS — no transpilation, no bundling. Keep it simple and readable. Use ES modules (`import`/`export`) loaded directly by the browser (same pattern as `../_RTL-EDITOR`).
- **Desktop-only**: The UI is designed for desktop browsers. No responsive/mobile layout. Do not add responsive breakpoints.
- **Use zod schemas at every boundary**: WebSocket messages (both directions), AI-Agent responses (assessment JSON, selection JSON), `meeting.json` deserialization, frontmatter parsing. Define schemas in `types.ts` and validate at the point of ingestion. When parsing AI output, use `.safeParse()` — never trust that the agent returned valid JSON.

## Testing & Debugging with Playwright

The project includes `playwright-test.ts` for browser automation and debugging. Playwright is the **primary tool for investigating visual/UI bugs** in the deliberation room — especially RTL layout, streaming text rendering, and WebSocket-driven UI updates.

### Quick-start CLI usage

```bash
# Open browser and keep it open for inspection (headed mode)
bun run playwright-test.ts --url=http://localhost:4100

# Take a screenshot
bun run playwright-test.ts --url=http://localhost:4100 --screenshot=debug.png

# Log browser console messages
bun run playwright-test.ts --url=http://localhost:4100 --console

# Click on an element
bun run playwright-test.ts --url=http://localhost:4100 --click=".start-meeting-btn"

# Evaluate JavaScript in the browser
bun run playwright-test.ts --url=http://localhost:4100 --eval="document.querySelector('.conversation-feed').children.length"

# Headless mode (for automated checks)
bun run playwright-test.ts --url=http://localhost:4100 --headless --screenshot=test.png
```

### CLI Options
- `--url=<url>` - URL to open (default: http://localhost:4100)
- `--headless` - Run without visible browser window
- `--screenshot=<path>` - Save screenshot to file
- `--wait=<ms>` - Wait time before screenshot (default: 1000)
- `--click=<selector>` - Click element matching CSS selector
- `--type=<text>` - Type text (use with --selector)
- `--selector=<sel>` - Selector for type action
- `--console` - Log browser console messages
- `--eval=<code>` - Execute JavaScript in browser context

### Writing custom Playwright diagnostic scripts

For complex visual bugs (RTL layout, streaming text, WebSocket state, etc.), write a **custom TypeScript Playwright script** and run it with `bun run <script.ts>`. This is much more powerful than the CLI flags above.

**Prerequisites:** The dev server must be running (`bun run dev` on port 4100).

**Key patterns for custom scripts:**

1. **Waiting for WebSocket events** — the deliberation UI is event-driven. Use `page.waitForSelector()` or `page.waitForFunction()` to wait for specific UI state:
   ```js
   // Wait for a speech to appear in the conversation
   await page.waitForSelector('.message[data-speaker="milo"]');

   // Wait for the "your turn" indicator
   await page.waitForSelector('.vibe-bar.human-turn');

   // Wait for streaming text to reach a certain length
   await page.waitForFunction(() => {
     const streaming = document.querySelector('.message.streaming');
     return streaming && streaming.textContent.length > 100;
   });
   ```

2. **Submitting human input**:
   ```js
   await page.fill('.human-input textarea', 'הנה נקודה מעניינת לגבי הנחש...');
   await page.click('.human-input .submit-btn');
   ```

3. **Inspecting agent panels**:
   ```js
   // Open the agent panel
   await page.click('.agent-panel-toggle');
   // Switch to a specific agent tab
   await page.click('.agent-tab[data-agent="kashia"]');
   // Read assessment data
   const assessment = await page.evaluate(() => {
     return document.querySelector('.agent-tab-content.active .assessment')?.textContent;
   });
   ```

4. **Taking screenshots with visual markers** (useful for layout debugging):
   ```js
   await page.evaluate(({x, y}) => {
     const marker = document.createElement('div');
     marker.style.cssText = `position:fixed; left:${x}px; top:${y-15}px; width:2px; height:30px; background:red; z-index:99999; pointer-events:none;`;
     document.body.appendChild(marker);
   }, { x: clickX, y: clickY });
   await page.screenshot({ path: 'debug.png' });
   ```

5. **Headed mode** — launches a real visible Chrome window for manual inspection:
   ```ts
   const browser = await chromium.launch({ headless: false, slowMo: 200 });
   ```
   Use `await page.waitForTimeout(30000)` to keep it open for observation.

### Useful CSS Selectors for Debugging

- `.deliberation-room` - Main layout container
- `.conversation-feed` - Scrolling conversation area
- `.message` - Individual conversation message
- `.message[data-speaker="milo"]` - Messages by specific Participant
- `.message.streaming` - Currently streaming message
- `.vibe-bar` - Vibe/status bar
- `.vibe-bar.human-turn` - Vibe bar in "Director's turn" state
- `.human-input` - Director input area
- `.human-input textarea` - The actual textarea
- `.agent-panel` - Participant-Agent side panel container
- `.agent-panel.collapsed` - Collapsed state
- `.agent-tab` - Individual Participant-Agent tab
- `.agent-tab[data-agent="..."]` - Specific Participant-Agent tab
- `.agent-tab-content` - Tab content area
- `.assessment` - Assessment display
- `.tool-activity` - Tool usage display
- `.importance-badge` - selfImportance indicator on tab
- `.landing-page` - Meeting creation/resume page
- `.meeting-list` - Previous meetings list
- `.participant-card` - Participant selection toggle card (landing page)
- `.participant-card.selected` - Selected participant card
- `.attention-btn` - Attention button in vibe bar
- `.attention-btn.activated` - Attention button after click (amber fill, disabled)
- `.rollback-icon` - Per-message rollback icon (hover-visible on human messages)
- `.rollback-modal` - Rollback confirmation dialog
- `.rollback-modal .preview` - The selected message preview in the dialog
- `.message.editing` - Human message in editable state (post-rollback)
- `.message.faded` - Messages after rollback target (opacity: 0.3 during confirmation)
- `.view-only-banner` - Persistent banner in view-only mode

### Known RTL quirks

- **CSS Logical Properties are essential**: Physical `left`/`right` will break in RTL. Always use logical properties.
- **Grid column order**: CSS Grid with `dir="rtl"` automatically flips column order. This is correct behavior — don't fight it.
- **Mixed bidi text**: Messages with both Hebrew and English (e.g., "ביטוי כמו Reverse-Engineering Test") need `unicode-bidi: plaintext` to render correctly.
- **Font fallback**: Hebrew content uses `'David', 'Narkisim', 'Times New Roman', serif`. David and Narkisim are not standard macOS fonts — Playwright's Chromium will likely fall back to Times New Roman, which may produce different character metrics than the user's browser.

### Deliberation-specific testing challenges

Unlike the static RTL-EDITOR, the deliberation UI is **event-driven and asynchronous**. Key testing considerations:

- **Timing**: Messages arrive at unpredictable times via WebSocket. Tests must use `waitForSelector`/`waitForFunction` rather than fixed delays.
- **Streaming text**: Verify that streaming chunks append correctly, maintain RTL direction, and scroll properly.
- **State transitions**: The UI cycles through phases (assessing → selecting → speaking → human-turn). Tests should verify that phase transitions update the UI correctly.
- **Mock server for frontend testing**: Use `tests/e2e/mock-ws-server.ts` — a mock WebSocket server that replays canned event sequences. This avoids API costs and makes tests deterministic. The stub SDK (see `src/stub-sdk.ts`) handles the backend side; the mock WS server handles the frontend side.

## Key Design Decisions (Settled)

These decisions were reached through deliberation and should not be revisited without strong reason:

1. **Persistent session architecture**: Each AI-Agent runs as a persistent Agent SDK session for the duration of a meeting. Participant-Agents use Opus (for both assessments and speeches); the Conversation-Manager-Agent uses Sonnet. Rationale: (a) AI-Agent continuity — agents accumulate understanding across cycles instead of being cold-started each time; (b) token efficiency — prompt caching on the stable session prefix makes Opus competitive with Sonnet on input costs, and context compression reduces tokens for long meetings; (c) simpler architecture — one invocation pattern (Agent SDK `query()` with `resume: sessionId`) instead of two (raw API + Agent SDK).

2. **Git branches as the meeting database**: Each meeting lives on its own orphan branch (`sessions/<meeting-id>`) — no meeting data on `main`, ever. `meeting.json` + session JSONL files are committed per-cycle, creating a natural timeline. Listing meetings = listing branches; reading an ended meeting = `git show`. Rationale: (a) audit trail with per-cycle granularity; (b) `main` stays clean — no meeting data cluttering the source history; (c) git provides the database operations (list, read, history, diff) without additional tooling; (d) session files live on the branch alongside `meeting.json`, giving a complete record (public conversation + agent internal reasoning) in one place.

3. **Director-controlled ending**: Only the Director ends a meeting. The Conversation-Manager-Agent signals readiness through "vibe" comments but never terminates autonomously.

4. **Director opens**: The Director provides the initial prompt that sets context and scope. The Participant-Agents respond to this opening.

5. **TypeScript + Bun**: Consistent with the project ecosystem. Bun provides native WebSocket support in `Bun.serve()` — no external WebSocket library needed.

6. **No JS framework (backend or frontend)**: Custom orchestrator, vanilla HTML/JS frontend with Tailwind CSS. The system has a small, configurable set of Participants with a specific protocol — JS frameworks add complexity without proportional value. The frontend is a single page with straightforward DOM manipulation. Tailwind handles CSS (see #24); no JS framework needed (see #25).

7. **"Vibe" comments**: The Conversation-Manager-Agent produces a short atmospheric comment with each Participant selection, displayed in a sticky bar as a stage direction (not a conversation message). This helps the Director read the room quickly.

8. **Dialectical Participant-Agents with primary mandates**: Participant-Agents engage with each other's points (agree, challenge, extend) but always through their own lens. Each has a strict primary mandate that keeps their voice distinct. This produces genuine conversation, not parallel monologues.

9. **Hebrew speech**: Participant-Agents speak in Hebrew during deliberation. The persona files are in English (LLM instructions), but all output is Hebrew. To be A/B tested against English in the future.

10. **Natural speech rhythm**: No hard word-count constraint on Participant-Agent speeches. The guidance is conversational: deliver your point well, pass the ball, keep it dynamic. Participant-Agents are explicitly allowed to say "nothing to add" — silence is better than noise.

11. **Personas in `participant-agents/` with template system**: AI-Agent personas live in `_DELIBERATION-ROOM/participant-agents/`. Non-underscore files are AI-Agent entry points with YAML frontmatter (containing `englishName`, `hebrewName`, `managerIntro`, `managerTip`) and undergo template marker resolution (`${include:...}`, `${EnglishName}`, `${HebrewName}`, `${each:participant}`, `${speakerIds}`). Underscore-prefix files serve special roles: `_base-prefix.md` (shared prefix for ALL AI-Agents — dictionary, common instructions), `_agents-prefix.md` (Participant-Agent-only prefix — introduces fellow Participants via `${each:participant}` markers), `_conversation-manager.md` (orchestration logic). System prompt construction: Participant-Agents get `_base-prefix.md` + `_agents-prefix.md` + resolved agent file; the Conversation-Manager-Agent gets `_base-prefix.md` + resolved `_conversation-manager.md`. Current Participant-Agent names: **Milo/מיילו** (Dictionary Purist), **Archi/ארצ'י** (Architect), **Kashia/קשיא** (Skeptic), **Barak/ברק** (Ideator). The Director is **The Director/המנחה**. The Conversation-Manager-Agent is unnamed.

12. **Execution from root directory**: The deliberation software is developed here (`_DELIBERATION-ROOM/`) but accesses the root project directory (`../`), giving agents access to commentary files, scripts, and the full CLAUDE.md. The ClaudeCode processes should have `../` as their CWD.

13. **Web server, not tmux**: The deliberation UI runs in the browser, served by a Bun web server on port 4100. Rationale: (a) tmux cannot render Hebrew RTL text correctly — for a Hebrew-language deliberation system, this is a fundamental blocker; (b) the browser provides proper font rendering, streaming text display, collapsible panels, and visual richness that tmux cannot; (c) the browser-based landing page replaces CLI arguments for meeting lifecycle management.

14. **WebSocket for communication**: A single WebSocket connection handles all real-time communication between server and browser. Rationale: the deliberation has clear bidirectional needs (server streams speeches, browser sends human input), and WebSocket provides a unified channel. Bun's native WebSocket support makes this zero-dependency.

15. **RTL-first design**: The entire page is `dir="rtl"`. CSS uses logical properties exclusively. The layout is designed for Hebrew from the ground up — not adapted from an LTR design.

16. **Streaming Participant-Agent speech**: Participant-Agent speeches are streamed to the browser in real-time via the Agent SDK's `includePartialMessages` option on the persistent session's `query()` call + WebSocket forwarding. Rationale: Opus + tool use can take 30-90 seconds per speech. Watching the analysis develop in real-time is both better UX and better for the deliberation dynamic (the Director starts forming responses while the Participant-Agent is still speaking).

17. **Collapsible Participant-Agent panel with tabs**: Participant-Agent private assessments and tool activity are shown in a single collapsible side panel with one tab per Participant-Agent — not in three always-visible panels. Rationale: the Director doesn't read three private assessments simultaneously. The panel opens automatically when relevant and stays out of the way otherwise.

18. **Port 4100**: Separate from RTL-EDITOR's port 4000. The two tools run independently and simultaneously — the scholar can have both open in different browser tabs.

19. **Cross-branch tagging for rollback**: When a cycle alters perush files (on `main`), the system commits the changes on `main`, then creates correlated tags (`<tag-id>/main` + `<tag-id>/session`) capturing the synchronized state of both branches. Tag ID format: `session-cycle/YYYY-MM-DD--HH-MM-SS--<meeting-id>`. Tags and branch updates are pushed to the remote asynchronously (fire-and-forget — never blocks the deliberation). Rollback is supported both in-meeting (via the UI rollback button — see #23) and manually (via `git reset --hard <tag>` for complex recovery scenarios). Rationale: (a) Participant-Agents can modify commentary files via tool access during speech, so rollback must be possible; (b) correlated tags ensure `main` and the session branch can be rolled back in sync; (c) async push keeps the remote up-to-date without slowing the deliberation; (d) git-native rollback avoids building custom undo infrastructure.

20. **Git worktrees for session isolation + move+symlink for session capture**: Each meeting gets an orphan branch (`sessions/<meeting-id>`) with a worktree checked out at `meetings/<meeting-id>/`. AI-Agent session files are moved from `~/.claude/projects/` into the worktree and symlinked back. The session manager commits to the branch after each cycle. No lock files, no pre-commit hooks — the session manager is the only process that touches the session branch, and it commits only at safe points between cycles. Rationale: (a) session JSONL files contain valuable data (AI-Agent reasoning across cycles) that would otherwise be ephemeral; (b) orphan branches keep meeting data completely separate from `main`; (c) git provides natural per-cycle history via commits; (d) the symlink trick is transparent to Claude Code — no modifications needed; (e) worktrees eliminate all coordination problems between `main` commits and session writes.

21. **Dynamic participant selection per meeting**: Participant-Agents are discovered dynamically from `participant-agents/*.md` (non-underscore files). The Director selects which agents to include when creating a meeting — this selection is stored in `meeting.participants` and is **immutable** for the meeting's duration. All agents are selected by default; the Director deselects ones they don't want. At least 1 must be selected. Template resolution (`${each:participant}`, `${speakerIds}`) is scoped to the meeting's participants. Adding a new agent requires only creating a `.md` file with proper frontmatter — no code changes. Rationale: (a) not every meeting benefits from every agent — a focused discussion might want only Milo and Kashia; (b) the rare-by-design Barak should be an explicit choice, not always present; (c) future agents can be added without modifying the system.

22. **Attention button**: A UI button in the vibe bar that lets the Director request the floor without interrupting the current cycle. The mechanism is a simple in-memory flag (`attentionRequested`) that forces the Conversation-Manager-Agent to select the Director at the next selection phase. The manager still produces its vibe comment. The flag is ephemeral (not persisted) and consumed after the Director speaks. Defense-in-depth: the orchestrator overrides the manager's response if the flag is set. Rationale: the Director should never feel locked out of their own deliberation — but shouldn't have to interrupt valuable agent analysis to get in.

23. **Per-message in-meeting rollback**: Every human message in the conversation feed has a hover-visible rollback button (`↩`). Clicking it opens a confirmation dialog showing what will be discarded, then executes a 6-phase rollback: (1) abort active cycles, (2) reset the session branch to the target cycle's commit, (3) roll back perush files on main if needed (using correlated tags), (4) recreate all agent sessions from the rolled-back transcript, (5) commit the recovery, (6) present the human message for inline editing with "send as-is" or "send edited" options. All sessions are recreated (not just post-rollback speakers) because all have accumulated invalid context. Rollback to the opening prompt (cycle 0) is supported. No undo — discarded cycles exist in the git reflog for manual recovery only. Rationale: (a) the Director frequently wants to "retry from here" after a conversation takes a wrong turn; (b) per-message buttons (like AI chat apps) are more intuitive than a separate rollback UI; (c) the confirmation dialog prevents accidents; (d) the edit-after-rollback flow lets the Director course-correct precisely.

24. **Tailwind CSS (not vanilla CSS)**: Utility-first CSS with built-in RTL logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`). Eliminates the risk of physical `left`/`right` properties. Requires a build step (`tailwindcss` CLI), handled by the dev script. Rationale: (a) Claude Code generates Tailwind classes fluently — one of the best-represented CSS frameworks in training data; (b) logical properties for RTL are built-in, not opt-in; (c) eliminates a growing custom `style.css` file.

25. **Vanilla JS (not HTMX or any frontend framework)**: The frontend uses explicit DOM manipulation with vanilla JS, receiving JSON messages over WebSocket. Rationale for choosing vanilla JS over HTMX: (a) the WebSocket protocol is already well-specified with JSON messages — converting to HTMX's HTML-over-the-wire model would fight the spec; (b) Claude Code handles explicit DOM manipulation more reliably than HTMX's declarative attribute-driven behavior when debugging; (c) the streaming speech use case (the core UX) needs custom JS regardless; (d) every line is explicit and inspectable — no framework magic to reason about.

26. **zod for validation at every boundary**: Zod schemas define the shape of WebSocket messages, AI-Agent responses (assessments, selections), `meeting.json`, and persona frontmatter. TypeScript types are inferred from the same schemas — single source of truth. Rationale: (a) AI output parsing is the most fragile boundary in the system — agents can return malformed JSON, and zod catches this at ingestion; (b) zod schemas serve as machine-readable contracts that Claude Code can read and implement against during vibe-coding; (c) eliminates an entire class of "data shape mismatch" bugs.

27. **Stub Agent SDK for testing**: A drop-in replacement (`src/stub-sdk.ts`) with the same `query()` interface as the real Agent SDK, where expected responses are embedded in the prompt as YAML blocks. Activated via config flag (`USE_STUB_SDK`). Rationale: (a) unit tests and E2E tests must run without API calls — no cost, no latency, deterministic; (b) the same stub works for both `bun:test` unit tests and Playwright E2E tests; (c) maintaining the stub alongside the real interface is a small cost for the enormous benefit of test-driven development.

28. **Test-driven development**: Every implementation task must be accompanied by unit tests (`bun:test`) and, when there is a visible UI component, E2E tests (Playwright). Code without tests is incomplete code. The stub SDK makes this practical by eliminating API cost and latency from the test loop.

29. **Centralized configuration**: All configurable values (numbers, strings, paths, timeouts, model names, cost caps) live in `src/config.ts` with JSDoc documentation. No magic numbers or hardcoded strings in other modules. This is the first place to look when tuning the system's behavior.

## Open Design Questions (To Be Resolved)

These are deliberately left open for future sessions:

1. ~~**The dictionary in system prompts**~~: **Resolved.** Include the full dictionary in every session's system prompt.

2. ~~**Human input mechanism**~~: **Resolved.** WebSocket.

3. **Meeting branch naming**: The Director specifies a `title` when creating a meeting. The branch name is `sessions/<slug>` where `<slug>` is derived from `startedAt` + `title` (slugified). The same slug is used as the `meetingId` and the worktree directory name. Exact slugification rules (handling Hebrew characters, max length, collision avoidance) to be decided during implementation.

4. ~~**Resume capability**~~: **Resolved.** Must-have for the web version.

5. **Hebrew A/B testing**: The current decision is Participant-Agents speak in Hebrew. This may be revisited — an English mode may produce better analytical reasoning. The system should eventually support both for comparison.

6. **Participant colors**: The color palette for the Participants in the conversation feed. Needs visual testing with Hebrew text on different backgrounds. Must scale to N participants (not hardcoded to 4).

7. **Participant-Agent panel auto-open behavior**: The current spec says the panel opens automatically when a Participant-Agent speaks. This might be distracting. Needs user testing — the alternative is manual-only with badge indicators.
