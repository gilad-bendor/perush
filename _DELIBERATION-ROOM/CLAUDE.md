# The Deliberation Room

A multi-agent deliberation system where a configurable set of Participant-Agents and a Director (human scholar) participate in live, turn-managed analysis of biblical commentary, orchestrated by a Conversation-Manager-Agent. Running as a **web server** with the deliberation UI rendered in the browser.

## The Bigger Picture

This project is a sub-system of the **Perush** project — a methodological allegorical interpretation of the Torah. The full methodology, dictionary, and interpretive framework are documented in `../CLAUDE.md`. Consult that file when:

- You need to understand the dictionary system, the interpretive method, or the quality criteria.
- A design decision requires understanding what the AI-Agents are actually *analyzing*.
- You're working on AI-Agent persona prompts that reference the commentary methodology.

For everything else — architecture, implementation, infrastructure — this file is your primary reference.

## Taxonomy

| Term | Who | Definition |
|------|-----|------------|
| **Participant-Agent** | milo, archi, kashia, barak, ... | AI critic agents who participate in the deliberation. Discovered dynamically from `participant-agents/*.md` |
| **Conversation-Manager-Agent** | manager | Orchestrates turn-taking and reads the room. Does NOT speak — invisible to Participants |
| **Director** | the human scholar | Steers the conversation, makes final decisions |
| **AI-Agent** | Participant-Agents + Manager | All AI agents in the system |
| **Participant** | Participant-Agents + Director | Everyone who speaks (Manager is NOT a Participant) |

**In TypeScript**: `AgentId = string` (from filenames, e.g., `"milo"`). `SpeakerId = AgentId | "human"`. Manager is `"manager"`.

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

**Session Manager**: Persistent Agent SDK sessions — one per AI-Agent. Participant-Agents use **Opus** with tools; Manager uses **Sonnet** without tools. Sessions accumulate context across the meeting. See [CLAUDE-TOPICS/PERSONAS.md](CLAUDE-TOPICS/PERSONAS.md) for template system.

### Per-Cycle Flow

```
1. New speech arrives (from Director or Participant-Agent)
         │
         ▼
2. ASSESSMENT — Feed to each Participant-Agent's session (parallel, except last speaker)
   → Each returns: { selfImportance, humanImportance, summary }
         │
         ▼
3. SELECTION — Feed speech + assessments to Manager's session
   → Returns: { nextSpeaker, vibe }
         │
         ▼
4. SPEECH — Selected Participant speaks (streamed via WebSocket, with tools)
   OR Director's turn (await WebSocket input)
         │
         ▼
5. Speech added to conversation → commit to session branch → back to step 1
```

**Privacy invariant**: Participant-Agents see only the public conversation. They do NOT see each other's assessments or the Manager's reasoning.

### Session Setup

Each AI-Agent runs as a persistent Agent SDK session with `resume: sessionId`. Options set on first `query()` persist across resumes. All sessions use `permissionMode: "bypassPermissions"`, `allowDangerouslySkipPermissions: true`, and `env: getCleanEnv()` (strips `CLAUDECODE` vars to prevent nested-session errors).

| Session | Model | Tools | System Prompt |
|---------|-------|-------|---------------|
| Participant-Agents | Opus | `["Read", "Bash", "Grep", "Glob"]` | `_base-prefix.md` + dictionary + `_agents-prefix.md` + resolved persona |
| Manager | Sonnet | `[]` | `_base-prefix.md` + dictionary + resolved `_conversation-manager.md` |

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
  roleTitle: string;          // Hebrew, from first # heading (e.g., "המילונאי")
  managerIntro: string;
  managerTip: string;
  filePath: string;
}

interface ConversationMessage {
  speaker: SpeakerId;
  content: string;
  timestamp: FormattedTime;
}

interface PrivateAssessment {
  agent: AgentId;
  selfImportance: number;     // 1-10
  humanImportance: number;    // 1-10
  summary: string;
}

// A cycle = assess previous speech → select next speaker → that speaker speaks.
// `speech` is the speech PRODUCED during this cycle.
interface CycleRecord {
  cycleNumber: number;
  speech: ConversationMessage;
  assessments: Record<AgentId, PrivateAssessment>;
  managerDecision: { nextSpeaker: SpeakerId; vibe: string };
}

interface Meeting {
  meetingId: MeetingId;
  mode: MeetingMode;
  title: string;
  openingPrompt: string;
  participants: AgentId[];    // immutable per-meeting
  cycles: CycleRecord[];
  startedAt: FormattedTime;
  lastEngagedAt?: FormattedTime;
  sessionIds: Record<AgentId | "manager", string>;
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
├── CLAUDE.md              ← this file
├── CLAUDE-TOPICS/         ← spin-out detail files (see below)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── playwright-test.ts     ← Playwright CLI helper
├── participant-agents/    ← AI-Agent persona files
│   ├── _base-prefix.md            ← shared prefix for ALL AI-Agents
│   ├── _agents-prefix.md          ← Participant-Agent prefix (introduces fellow Participants)
│   ├── _conversation-manager.md   ← Manager orchestration logic
│   ├── milo.md                    ← Dictionary Purist
│   ├── archi.md                   ← Architect
│   ├── kashia.md                  ← Skeptic
│   └── barak.md                   ← Ideator
├── src/
│   ├── server.ts          ← Bun web server (HTTP + WebSocket), entry point
│   ├── orchestrator.ts    ← deliberation loop, phase management
│   ├── session-manager.ts ← Agent SDK sessions, template resolution, agent discovery
│   ├── meetings-db.ts    ← git-as-database: worktrees, meeting CRUD
│   ├── types.ts           ← zod schemas and TypeScript types
│   ├── config.ts          ← ALL configurable values
│   ├── stub-sdk.ts        ← Agent SDK stub for testing
│   ├── real-sdk.ts        ← Real Agent SDK adapter
│   └── *.test.ts          ← unit tests (one per module)
├── public/
│   ├── index.html         ← landing page + deliberation UI
│   ├── input.css          ← Tailwind input
│   ├── style.css          ← Tailwind output (gitignored)
│   └── src/
│       ├── app.js         ← WebSocket client, page routing
│       ├── conversation-view.js  ← message feed, streaming
│       └── agent-panel.js        ← collapsible panel, tabs, assessments
├── tests/
│   └── e2e/
│       ├── landing-page.test.ts
│       ├── meetings-db.test.ts
│       ├── integration.test.ts
│       └── mock-ws-server.ts
└── .meetings/              ← worktree mount point (gitignored)
```

## Development Guidelines

### Running the System

```bash
# Install dependencies
bun install

# Start the server (port 4100) + Tailwind watcher
bun run dev

# Run unit tests
bun test

# Run real SDK smoke test (costs ~$0.10, requires claude CLI auth)
bun run test:smoke

# Open in browser
open http://localhost:4100
```

### First-Run Preconditions

1. `bun install`
2. Claude CLI installed and authenticated (for real SDK sessions)
3. `git config core.quotepath false` (Hebrew filenames in branch listings)
4. `bun run build:css` (or `bun run dev` which runs it automatically)

### Configuration

**All configurable values live in `src/config.ts`** — the single source of truth. Categories: network, models, cost caps, paths, git templates, timing, UI, assessment, SDK environment, stub mode. **No magic numbers in other files.**

Key env-overridable values: `PARTICIPANT_MODEL`, `MANAGER_MODEL`, `SERVER_PORT`, `LOG_PATH`.

### Log File

All `console.log/error/warn/info/debug` output is automatically written to a log file by `src/context.ts`. The log includes the context prefix (`[C1]`, `[N/A]`) and a level tag (`LOG`, `ERR`, `WRN`, `INF`, `DBG`).

- **Path**: `process.env.LOG_PATH`, or `./.logs/YYYY-MM-DD--HH-MM-SS-NNN.log` (timestamped at app startup).
- **Durability**: fsynced after every write.
- **Resilience**: if the file is deleted while the app is running, it is recreated on the next log.
- **Debugging**: use `tail -f .logs/*.log` to watch logs in real time while the server runs. This is especially useful during Playwright debugging sessions — you can read the log file to see server-side events without restarting the server.

### Import Dependency Graph

```
types.ts          ← no src/ imports (only zod)
config.ts         ← types.ts
context.ts        ← types.ts (+ node:fs, node:util)
meetings-db.ts   ← types.ts, config.ts
stub-sdk.ts       ← types.ts
session-manager.ts ← types.ts, config.ts, meetings-db.ts, stub-sdk.ts
orchestrator.ts   ← all above
server.ts         ← orchestrator.ts, types.ts, config.ts, context.ts
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

### Error Handling

- **Session failure**: Apply session recovery (new session, feed transcript, capture, update `meeting.yaml`). If recovery fails too, notify the Director.
- **Assessment failure**: Proceed with remaining assessments. Manager can select with partial data.
- **Browser disconnect**: Orchestrator waits (up to 10 min). Sessions continue regardless of browser state.
- **Server restart**: Sessions are lost. Meeting resumes from last `meeting.yaml` state via session recovery.
- **Worktree conflicts**: `git worktree remove --force` first, then retry.

### Graceful Shutdown

`SIGINT`/`SIGTERM` → interrupt active queries → commit current state → remove worktree → close WebSocket connections → exit.

### Testing

Every implementation task must include tests. Unit tests use the stub SDK. E2E tests use mock WS server or real server + stub SDK. For full testing guidelines, see [CLAUDE-TOPICS/TESTING.md](CLAUDE-TOPICS/TESTING.md).

## Spin-Out Detail Files

These files contain detailed specifications that are **not needed in every session**. Consult them when working on the relevant area:

| File | When to Read |
|------|-------------|
| [CLAUDE-TOPICS/GIT-PERSISTENCE.md](CLAUDE-TOPICS/GIT-PERSISTENCE.md) | Working on `meetings-db.ts`, `session-manager.ts`, or debugging git/worktree/symlink issues |
| [CLAUDE-TOPICS/PROTOCOL.md](CLAUDE-TOPICS/PROTOCOL.md) | Working on WebSocket layer, adding message types, or debugging communication |
| [CLAUDE-TOPICS/TESTING.md](CLAUDE-TOPICS/TESTING.md) | Writing or debugging tests, using Playwright, CSS selectors for debugging |
| [CLAUDE-TOPICS/ROLLBACK.md](CLAUDE-TOPICS/ROLLBACK.md) | Working on the rollback feature (6-phase flow, edge cases, UI) |
| [CLAUDE-TOPICS/DESIGN-DECISIONS.md](CLAUDE-TOPICS/DESIGN-DECISIONS.md) | Before revisiting any settled architectural decision |
| [CLAUDE-TOPICS/PERSONAS.md](CLAUDE-TOPICS/PERSONAS.md) | Working on template resolution, system prompt construction, or adding new agents |
| [CLAUDE-TOPICS/UI.md](CLAUDE-TOPICS/UI.md) | Working on frontend layout, RTL design, attention button, or meeting lifecycle UI |
| [CLAUDE-TOPICS/PLAYWRIGHT-DEBUGGING.md](CLAUDE-TOPICS/PLAYWRIGHT-DEBUGGING.md) | Simulating the app via Playwright, interactive debugging, diagnosing UI/server issues |

## Open Design Questions

3. **Meeting branch naming**: Exact slugification rules (Hebrew characters, max length, collision avoidance) to be decided.

5. **Hebrew A/B testing**: Participant-Agents currently speak in Hebrew. English mode may produce better analytical reasoning. Support both for comparison.

6. **Participant colors**: Current palette (blue, emerald, violet, rose, amber) needs visual testing. Must scale to N participants.

7. **Panel auto-open**: May be distracting. Needs user testing.

8. **`outputFormat`**: SDK supports constrained JSON output for assessments/selections. Could eliminate malformed-JSON errors.

9. **`effort` option**: `"low"` for assessments, `"high"` for speeches. Could reduce latency/cost.

10. **`forkSession`**: Simplified session recovery that retains internal reasoning (not just public transcript).

11. **`hooks` option**: Programmatic `PostToolUse` hooks for reliable tool activity logging.
