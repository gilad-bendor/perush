# The Deliberation Room

A multi-agent deliberation system where a configurable set of Participant-Agents and a Director (human scholar) participate in live, turn-managed analysis of biblical commentary, orchestrated by a Orchestrator-Agent. Running as a **web server** with the deliberation UI rendered in the browser.

## The Bigger Picture

This project is a sub-system of the **Perush** project — a methodological allegorical interpretation of the Torah. The full methodology, dictionary, and interpretive framework are documented in `../CLAUDE.md`. Consult that file when:

- You need to understand the dictionary system, the interpretive method, or the quality criteria.
- A design decision requires understanding what the AI-Agents are actually *analyzing*.
- You're working on AI-Agent persona prompts that reference the commentary methodology.

For everything else — architecture, implementation, infrastructure — this file is your primary reference.

## Taxonomy

| Term                   | Who                               | Definition                                                                                                                           |
|------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Participant-Agent**  | milo, shalom, ethan, barak, ...   | AI critic agents who participate in the deliberation. Discovered dynamically from `participant-agents/*.md` (ignoring `_*.md` files) |
| **Orchestrator-Agent** | orchestrator                      | Orchestrates turn-taking and reads the room. Mostly invisible to Participants - except for the "status-read" summary                 |
| **Director**           | the human scholar                 | Steers the conversation, makes final decisions                                                                                       |
| **Participant**        | Participant-Agents + Director     | Everyone who speaks (Orchestrator is NOT a Participant)                                                                              |
| **AI-Agent**           | Participant-Agents + Orchestrator | All AI agents in the system (Participant + Orchestrator-Agent)                                                                       |

**In TypeScript**: `AgentId = string` (from filenames, e.g., `"milo"`). `SpeakerId = AgentId | "human"`. Orchestrator is `"orchestrator"`.

## Architecture

```
┌────────────────────────────────────────────┐
│         SERVER (TypeScript + Bun)          │
│                                            │
│  ┌───────────────┐  ┌──────────────┐       │
│  │ HTTP Server   │  │ WebSocket    │       │
│  │ (static files │  │ Handler      │       │
│  │  + REST API)  │  │ (live I/O)   │       │
│  └──────┬────────┘  └──────┬───────┘       │
│         │                  │               │
│  ┌──────┴──────────────────┴────────────┐  │
│  │              ORCHESTRATOR            │  │
│  │                                      │  │
│  │  ┌──────────────┐  ┌──────────────┐  │  │
│  │  │ Conversation │  │ Session      │  │  │
│  │  │ Store (Git)  │  │ Manager      │  │  │
│  │  │              │  │ (Agent SDK)  │  │  │
│  │  └──────────────┘  └──────────────┘  │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
                 ▲ WebSocket ▼
┌────────────────────────────────────────────┐
│              BROWSER (Frontend)            │
└────────────────────────────────────────────┘
```

**Server**: A single Bun process — HTTP + WebSocket + orchestrator. Only one meeting active at a time.

**Conversation Store**: Git branches as the database. Each meeting on an orphan branch (`sessions/<meeting-id>`). No meeting data on `main` — ever. See [CLAUDE-TOPICS/GIT-PERSISTENCE.md](CLAUDE-TOPICS/GIT-PERSISTENCE.md).

**Session Manager**: Persistent Agent SDK sessions — one per AI-Agent. Participant-Agents use **Opus** with tools; Orchestrator uses **Opus** without tools. Sessions accumulate context across the meeting. See [CLAUDE-TOPICS/PERSONAS.md](CLAUDE-TOPICS/PERSONAS.md) for template system.

### Per-Cycle Flow

```
1. New speech arrives (from Director or Participant-Agent)
         │
         ▼
2. ASSESSMENT — Feed to each Participant-Agent's session (parallel, except last speaker)
   → Two-phase: deep thinking (private, with tools), then free-text assessment for turn management
   → pendingCycle written to meeting.yaml (intermediate persist)
         │
         ▼
3. SELECTION — Feed speech + assessments to Orchestrator's session
   → Returns: { nextSpeaker, statusRead }
   → pendingCycle updated in meeting.yaml (intermediate persist)
         │
         ▼
4. SPEECH — Selected Participant speaks (streamed via WebSocket, with tools)
   OR Director's turn (await WebSocket input)
         │
         ▼
5. pendingCycle assembled into full CycleRecord → commit to session branch → back to step 1
```

Every SDK interaction in steps 2-4 emits process events (prompt, thinking, text, tool calls, tool results) that are:
- **Streamed live** to the browser via `process-start` / `process-event` / `process-done` WebSocket messages
- **Persisted** in `meeting.yaml` as `ProcessRecord[]` per cycle, so full traces survive reconnect/reload
- **Rendered** in the conversation timeline as expandable colored labels (one per agent per interaction)

**Privacy invariant**: Participant-Agents see only the public conversation. They do NOT see each other's assessments or the Orchestrator's reasoning. However, the **Director (human)** sees everything via the UI's expandable process labels.

### Session Setup

Each AI-Agent runs as a persistent Agent SDK session with `resume: sessionId`. Options set on first `query()` persist across resumes. All sessions use `permissionMode: "bypassPermissions"`, `allowDangerouslySkipPermissions: true`, and `env: getCleanEnv()` (strips `CLAUDECODE` vars to prevent nested-session errors).

| Session | Model | Tools | System Prompt |
|---------|-------|-------|---------------|
| Participant-Agents | Opus | `["Read", "Bash", "Grep", "Glob"]` | `system-prompt-base-prefix.md` (includes dictionary + fellow participants) + resolved persona |
| Orchestrator | Opus | `[]` | Resolved `system-prompt-orchestrator.md` (includes methodology regions from base-prefix via `@include-region` + dictionary + participants) |

### Session Recovery

If a session dies: create a new session, feed the conversation transcript from `meeting.yaml`, capture it (move+symlink into worktree), update `meeting.yaml`. The public conversation is the authoritative record; private reasoning was ephemeral.

## The `meeting.yaml` Schema

```typescript
type AgentId = string;
type SpeakerId = AgentId | "human";
type MeetingId = string;
type FormattedTime = string;  // "YYYY-MM-DD HH:MM:SS (<ms since epoch>)"
type MeetingMode = "Perush-Development";

interface AgentDefinition {
  id: AgentId;
  englishName: string;
  hebrewName: string;
  roleTitle: string;
  filePath: string;
  frontmatterData: Record<string, string>;  // all non-structural frontmatter fields (e.g., introForOthers, noteForOrchestrator)
}

interface ConversationMessage {
  speaker: SpeakerId;
  content: string;
  timestamp: FormattedTime;
}

interface PrivateAssessment {
  agent: AgentId;
  text: string;               // free-form assessment text (no algorithmic parsing)
}

// A cycle = assess previous speech → select next speaker → that speaker speaks.
// `speech` is the speech PRODUCED during this cycle.
interface ProcessEventRecord {
  eventKind: "system-prompt" | "prompt" | "thinking" | "text" | "tool-call" | "tool-result";
  content: string;
  toolName?: string;
  toolInput?: string;
}

interface ProcessRecord {
  processId: string;
  processKind: "assessment" | "orchestrator-selection" | "agent-speech";
  agent: AgentId | "orchestrator";
  events: ProcessEventRecord[];
  costUsd?: number;            // SDK total_cost_usd for this interaction
}

interface PendingCycle {
  cycleNumber: number;
  assessments: Record<AgentId, PrivateAssessment>;
  orchestratorDecision?: OrchestratorDecision;
  processes: ProcessRecord[];
}

interface CycleRecord {
  cycleNumber: number;
  speech: ConversationMessage;
  assessments: Record<AgentId, PrivateAssessment>;
  orchestratorDecision: { nextSpeaker: SpeakerId; statusRead: string };
  processes?: ProcessRecord[];  // full SDK interaction traces (prompts, thinking, tools, output)
}

interface Meeting {
  meetingId: MeetingId;
  mode: MeetingMode;
  title: string;
  openingPrompt?: string;
  participants: AgentId[];    // immutable per-meeting
  cycles: CycleRecord[];
  pendingCycle?: PendingCycle; // partial cycle in progress — persisted after each phase
  startedAt: FormattedTime;
  lastEngagedAt?: FormattedTime;
  sessionIds: Record<AgentId | "orchestrator", string>;
  totalCostEstimate?: number;
}
```

The `participants` array is authoritative: all iteration (assessments, template resolution, speaker selection, UI) uses it. An agent not in the meeting is invisible.

## Execution Context

**Critical**: This project is **developed** in `_DELIBERATION-ROOM/` but **runs** from the root project directory (`../`), because agents need access to:
- `../CLAUDE.md` — the dictionary (injected into system prompts)
- `../פירוש/` — the commentary segments (accessed by agents via tools)
- `../scripts/hebrew-grep` — the Hebrew search tool

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Runtime | **Bun** (native WebSocket in `Bun.serve()`) |
| Language | **TypeScript** |
| Frontend | **Vanilla HTML/JS + Tailwind CSS** (RTL logical properties, no framework) |
| Agent sessions | **@anthropic-ai/claude-agent-sdk** (persistent sessions with `resume`) |
| Validation | **zod** (every boundary: WS messages, AI responses, meeting.yaml, frontmatter) |
| Frontmatter | **gray-matter** |
| Meeting serialization | **yaml** (human-readable meeting.yaml with block scalars) |
| Persistence | **Git branches (worktrees)** |
| Tests | **bun:test** (unit) + **Playwright** (E2E) |

## Project Structure

```
_DELIBERATION-ROOM/
├── CLAUDE.md                                      ← this file
├── CLAUDE-TOPICS/                                 ← spin-out detail files (see below)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── playwright-test.ts                             ← Playwright CLI helper
├── participant-agents/                            ← AI-Agent persona files
│   ├── milo.md                                    ← The Dictionary Purist
│   ├── shalom.md                                  ← The Holistic
│   ├── ethan.md                                   ← The Pedantic
│   └── barak.md                                   ← The Ideator
├── prompts/                                       ← Prompt templates (resolved by preprocess)
│   ├── README.md
│   ├── system-prompt-base-prefix.md               ← shared prefix for ALL AI-Agents (includes fellow participants)
│   ├── system-prompt-orchestrator.md              ← Orchestrator system prompt
│   ├── agent-assessment-prompt.md                 ← per-cycle assessment prompt
│   ├── agent-speech-prompt.md                     ← per-cycle speech prompt
│   ├── orchestrator-select-agent-prompt.md        ← orchestrator selection prompt
│   └── orchestrator-select-agent-prompt-retry.md  ← orchestrator selection retry
├── scripts/
│   ├── active-logs-path.sh                        ← path to most recent log file
│   ├── active-logs-full.sh                        ← print/follow full log content
│   ├── active-logs-short.sh                       ← print/follow header lines only
│   └── DANGER-DELETE-ALL-MEETINGS.sh
├── src/
│   ├── server.ts                                  ← Bun web server (HTTP + WebSocket), entry point
│   ├── orchestrator.ts                            ← deliberation loop, phase management
│   ├── agent-static-info.ts                       ← agent discovery and static identity data (globally importable)
│   ├── session-manager.ts                         ← Agent SDK sessions, template resolution
│   ├── meetings-db.ts                             ← git-as-database: worktrees, meeting CRUD
│   ├── types.ts                                   ← zod schemas and TypeScript types
│   ├── types-asserts.ts                           ← compile-time Zod↔TS type alignment checks
│   ├── config.ts                                  ← ALL configurable values
│   ├── logs.ts                                    ← logging (console + file), category toggles
│   ├── context.ts                                 ← AsyncLocalStorage for request context (messageId)
│   ├── utils.ts                                   ← shared utilities (prettyLog, wrapDanglingPromise)
│   ├── stub-sdk.ts                                ← Agent SDK stub for testing
│   └── real-sdk.ts                                ← Real Agent SDK adapter
├── public/
│   ├── index.html                                 ← landing page + deliberation UI
│   ├── input.css                                  ← Tailwind input
│   ├── compiled-style.css                         ← Tailwind output (gitignored)
│   └── src/
│       ├── app.js                                 ← WebSocket client, page routing
│       ├── conversation-view.js                   ← message feed, streaming, process labels
│       ├── process-label.js                       ← expandable process labels
│       └── utils.js                               ← frontend utilities
├── tests/
│   ├── unit/                                      ← unit tests (one per src/ module)
│   │   ├── config.test.ts
│   │   ├── meetings-db.test.ts
│   │   ├── orchestrator.test.ts
│   │   ├── real-sdk.test.ts
│   │   ├── server.test.ts
│   │   ├── session-manager.test.ts
│   │   ├── stub-sdk.test.ts
│   │   └── types.test.ts
│   ├── real-sdk-smoke.test.ts                     ← real SDK smoke test (~$0.10)
│   └── e2e/
│       ├── landing-page.test.ts
│       ├── conversation.test.ts
│       ├── integration.test.ts
│       └── mock-ws-server.ts
└── .meetings/                                     ← worktree mount point (gitignored)
```

## Development Guidelines

### Running the System

```bash
# Install dependencies
bun install

# Start the server (port 4100) + Tailwind watcher
bun run dev-model-default   # Costly: only the user is allowed to execute this 
bun run dev-model-haiku     # ClaudeCode is allowed to execute this

# Run unit tests — ALWAYS use this exact pattern (captures full output for investigation without re-running):
TMP=$(mktemp /tmp/bun-test.XXXXX); bun test 2>&1 | tee "$TMP" | tail -5; echo "Full output file: $TMP"

# Run real SDK smoke test (costs ~$0.10, requires claude CLI auth)
bun run test:smoke

# Open in browser
open http://localhost:4100
```

### First-Run Preconditions

1. `bun install`
2. Claude CLI installed and authenticated (for real SDK sessions)
3. `git config core.quotepath false` (Hebrew filenames in branch listings)
4. `bun run build:css` (or `bun run dev-model-default` / `bun run dev-model-haiku` which run it automatically)

### Configuration

**All configurable values live in `src/config.ts`** — the single source of truth. Categories: network, models, cost caps, paths, git templates, timing, UI, assessment, SDK environment, stub mode. **No magic numbers in other files.**

Key env-overridable values: `PARTICIPANT_MODEL`, `ORCHESTRATOR_MODEL`, `SERVER_PORT`, `LOG_PATH`.

### Log File

All logging goes through `src/logs.ts` via `logInfo()`, `logWarn()`, `logError()`. Log format, helper scripts, and debugging tips: see [CLAUDE-TOPICS/LOGGING.md](CLAUDE-TOPICS/LOGGING.md).

### Import Dependency Graph

```
types.ts             ← types-asserts.ts (compile-time only), zod
config.ts            ← types.ts
context.ts           ← types.ts (+ node:async_hooks)
utils.ts             ← (no src/ imports)
logs.ts              ← context.ts, utils.ts (+ node:fs, node:path)
meetings-db.ts       ← types.ts, config.ts, logs.ts
stub-sdk.ts          ← config.ts
real-sdk.ts          ← config.ts, logs.ts
agent-static-info.ts ← types.ts, config.ts, logs.ts
session-manager.ts   ← types.ts, config.ts, agent-static-info.ts, stub-sdk.ts, real-sdk.ts, logs.ts
orchestrator.ts      ← types.ts, config.ts, meetings-db.ts, session-manager.ts, agent-static-info.ts, logs.ts
server.ts            ← types.ts, config.ts, context.ts, orchestrator.ts, session-manager.ts, agent-static-info.ts, meetings-db.ts, utils.ts, logs.ts
```

**No upward arrows.** No circular imports.

### Code Style & Conventions

- Follow `../_RTL-EDITOR` patterns for Bun/TypeScript.
- Keep the orchestrator loop readable — it should read like pseudocode.
- **Agent-extensible**: adding a new Participant-Agent requires only a `.md` file with frontmatter — no code changes. Never hardcode agent IDs.
- Frontend is vanilla JS with ES modules. **Desktop-only** — no responsive breakpoints.
- **Use zod `.safeParse()` at every boundary** — especially when parsing AI output.
- **Idempotency**: every state-mutating operation must be safe to retry after a crash.
- **Atomic writes**: `meeting.yaml` written via temp-file-then-rename.
- **RTL-first**: Tailwind logical properties only (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`). Physical `left`/`right` is **forbidden**.

### Keeping Documentation Up to Date

**After every change**, evaluate whether `CLAUDE.md` or any `CLAUDE-TOPICS/*.md` file needs updating. These files are the project's source of truth — stale documentation causes compounding errors across sessions.

**You MUST update documentation when a change:**
- Adds, removes, or renames files, modules, or directories referenced in the project structure.
- Changes architecture, data flow, schemas, or the import dependency graph.
- Introduces new conventions, configuration values, or environment variables.
- Alters the WebSocket protocol, meeting lifecycle, or session management behavior.
- Modifies the testing approach or adds new test categories.
- Resolves or introduces an open design question.

**Where to update:**
- **`CLAUDE.md`**: for changes to architecture, project structure, taxonomy, schemas, development guidelines, or anything in the main reference.
- **`CLAUDE-TOPICS/*.md`**: for changes scoped to a specific topic (protocol, git persistence, testing, UI, etc.).

**Do not let documentation drift.** A code change without a corresponding doc update (when warranted) is incomplete.

### Error Handling

- **Session failure**: Apply session recovery (new session, feed transcript, capture, update `meeting.yaml`). If recovery fails too, notify the Director.
- **Assessment failure**: Proceed with remaining assessments. Orchestrator can select with partial data.
- **Browser disconnect/navigate away**: Orchestrator waits (up to 10 min). Sessions continue regardless of browser state. The Director can navigate to the landing page and back without affecting the active meeting. Resuming an already-active meeting is a no-op (returns the active meeting without restarting sessions or the loop).
- **Server restart**: Sessions are lost. Meeting resumes from last `meeting.yaml` state via session recovery.
- **Worktree conflicts**: `git worktree remove --force` first, then retry.

### Graceful Shutdown

`SIGINT`/`SIGTERM` → interrupt active queries → commit current state → remove worktree → close WebSocket connections → exit.

### No Memory — Use Git-Tracked Docs Instead

**Do not use Claude Code's memory feature** (`~/.claude/projects/.../memory/`). All persistent knowledge belongs in `CLAUDE.md` or `CLAUDE-TOPICS/*.md` — these are in git, so they survive cloning to a new location. When you learn something that should persist across sessions, update the relevant doc file directly without asking.

### Testing

Every implementation task must include tests. Unit tests use the stub SDK. E2E tests use mock WS server or real server + stub SDK. For full testing guidelines, see [CLAUDE-TOPICS/TESTING.md](CLAUDE-TOPICS/TESTING.md).

## Spin-Out Detail Files

These files contain detailed specifications that are **not needed in every session**. Consult them when working on the relevant area:

| File                                                                           | When to Read                                                                                |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [CLAUDE-TOPICS/GIT-PERSISTENCE.md](CLAUDE-TOPICS/GIT-PERSISTENCE.md)           | Working on `meetings-db.ts`, `session-manager.ts`, or debugging git/worktree/symlink issues |
| [CLAUDE-TOPICS/PROTOCOL.md](CLAUDE-TOPICS/PROTOCOL.md)                         | Working on WebSocket layer, adding message types, or debugging communication                |
| [CLAUDE-TOPICS/TESTING.md](CLAUDE-TOPICS/TESTING.md)                           | Writing or debugging tests, using Playwright, CSS selectors for debugging                   |
| [CLAUDE-TOPICS/ROLLBACK.md](CLAUDE-TOPICS/ROLLBACK.md)                         | Working on the rollback feature (6-phase flow, edge cases, UI)                              |
| [CLAUDE-TOPICS/DESIGN-DECISIONS.md](CLAUDE-TOPICS/DESIGN-DECISIONS.md)         | Before revisiting any settled architectural decision                                        |
| [CLAUDE-TOPICS/PERSONAS.md](CLAUDE-TOPICS/PERSONAS.md)                         | Working on template resolution, system prompt construction, or adding new agents            |
| [CLAUDE-TOPICS/UI.md](CLAUDE-TOPICS/UI.md)                                     | Working on frontend layout, RTL design, attention button, or meeting lifecycle UI           |
| [CLAUDE-TOPICS/PLAYWRIGHT-DEBUGGING.md](CLAUDE-TOPICS/PLAYWRIGHT-DEBUGGING.md) | Simulating the app via Playwright, interactive debugging, diagnosing UI/server issues       |
| [CLAUDE-TOPICS/LOGGING.md](CLAUDE-TOPICS/LOGGING.md)                           | Log format, helper scripts (`active-logs-*.sh`), and debugging tips                         |

## Open Design Questions

3. **Meeting branch naming**: Exact slugification rules (Hebrew characters, max length, collision avoidance) to be decided.

5. **Hebrew A/B testing**: Participant-Agents currently speak in Hebrew. English mode may produce better analytical reasoning. Support both for comparison.

6. **Participant colors**: Current palette (blue, emerald, violet, rose, amber) needs visual testing. Must scale to N participants.

7. **Panel auto-open**: May be distracting. Needs user testing.

8. **`outputFormat`**: SDK supports constrained JSON output for assessments/selections. Could eliminate malformed-JSON errors.

9. ~~**`effort` option**~~: **Implemented** — auto-derived from model: haiku→low, sonnet→medium, opus→high. See `effortForModel()` in `config.ts`.

10. **`forkSession`**: Simplified session recovery that retains internal reasoning (not just public transcript).

11. **`hooks` option**: Programmatic `PostToolUse` hooks for reliable tool activity logging.
