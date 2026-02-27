# Development Status — The Deliberation Room

> **Current Phase**: Milestone 1 — Foundation & Type System
> **Next Task**: Run `bun install`, then implement `src/types.ts`
> **Last Updated**: 2026-02-27

---

## How to Use This File

This file tracks the implementation progress of The Deliberation Room. It is designed so that a **fresh Claude Code session** can read it and immediately understand:

1. What has been built so far
2. What the current task is
3. What comes after

**For every session**:
- Read this file first
- Read CLAUDE.md for any architectural/design questions (it is the authoritative design reference)
- Find the current milestone (marked 🔨) and the next unchecked task within it
- After completing work, **update this file**: check off tasks, advance the phase, update the "Next Task" line at the top

**Rules**:
- Every implementation task **must** include unit tests (and E2E tests when there's a UI component)
- All configurable values go in `src/config.ts` — no magic numbers in other files
- Use the stub SDK (`src/stub-sdk.ts`) for all testing — never make real API calls in tests
- Follow the import dependency graph strictly (see below) — no circular imports

---

## Architecture Quick Reference

```
server.ts → orchestrator.ts → session-manager.ts → conversation.ts → config.ts → types.ts
                                                  → stub-sdk.ts ────────────────→ types.ts
```

**Import rule**: arrows point to dependencies. No file may import from a file to its left. If shared logic is needed, extract it into a lower-level module.

**Execution context**: The server launches from `_DELIBERATION-ROOM/` but resolves `../` for access to the dictionary (`../CLAUDE.md`), commentary files (`../פירוש/`), and scripts (`../scripts/hebrew-grep`).

---

## Component Status

### Source Files (src/)

| # | Component | File | Milestone | Status | Notes |
|---|-----------|------|-----------|--------|-------|
| 1 | Zod Schemas & Types | `src/types.ts` | M1 | ⬜ | All schemas from CLAUDE.md: Meeting, CycleRecord, ConversationMessage, PrivateAssessment, AgentDefinition, FormattedTime, WS messages (both directions) |
| 2 | Configuration | `src/config.ts` | M1 | ⬜ | Every configurable constant: ports, paths, models, timeouts, cost caps, templates |
| 3 | Stub Agent SDK | `src/stub-sdk.ts` | M1 | ⬜ | Drop-in replacement for Agent SDK; expected responses embedded as YAML in prompt |
| 4 | Conversation Store | `src/conversation.ts` | M2 | ⬜ | Git-as-database: orphan branches, worktrees, meeting CRUD, atomic writes, cycle commits |
| 5 | Session Manager | `src/session-manager.ts` | M3 | ⬜ | Agent discovery, template resolution, session lifecycle, move+symlink, assessment extraction |
| 6 | Orchestrator | `src/orchestrator.ts` | M4 | ⬜ | Deliberation loop: assess → select → speak cycle, phase management, event emission |
| 7 | Server | `src/server.ts` | M5 | ⬜ | Bun.serve() HTTP + WebSocket, static files, REST API, message routing, graceful shutdown |

### Unit Tests (src/*.test.ts)

| # | Test File | Tests For | Milestone | Status |
|---|-----------|-----------|-----------|--------|
| 8 | `src/types.test.ts` | Zod schema validation, FormattedTime round-trip | M1 | ⬜ |
| 9 | `src/config.test.ts` | getClaudeProjectDir(), config values | M1 | ⬜ |
| 10 | `src/stub-sdk.test.ts` | Stub query(), streaming, session IDs | M1 | ⬜ |
| 11 | `src/conversation.test.ts` | Worktree CRUD, meeting listing, atomic writes | M2 | ⬜ |
| 12 | `src/session-manager.test.ts` | Discovery, templates, sessions (via stub) | M3 | ⬜ |
| 13 | `src/orchestrator.test.ts` | Full cycle with stub, phases, attention flag | M4 | ⬜ |
| 14 | `src/server.test.ts` | HTTP routes, WS message routing, reconnection | M5 | ⬜ |

### Frontend (public/)

| # | Component | File | Milestone | Status | Notes |
|---|-----------|------|-----------|--------|-------|
| 15 | HTML Structure | `public/index.html` | M6 | ⬜ | Landing page + deliberation container, RTL-first |
| 16 | Tailwind Input | `public/input.css` | M0 | ✅ | @tailwind directives + grid layout |
| 17 | App Entry Point | `public/src/app.js` | M6 | ⬜ | WebSocket client, page routing, meeting lifecycle |
| 18 | Conversation View | `public/src/conversation-view.js` | M7 | ⬜ | Message feed, streaming, auto-scroll, rollback icons |
| 19 | Agent Panel | `public/src/agent-panel.js` | M7 | ⬜ | Collapsible tabs, assessments, tool activity, badges |

### E2E Tests (tests/e2e/)

| # | Test File | Tests For | Milestone | Status |
|---|-----------|-----------|-----------|--------|
| 20 | `tests/e2e/mock-ws-server.ts` | Deterministic WS server for E2E | M6 | ⬜ |
| 21 | `tests/e2e/landing-page.test.ts` | Meeting creation, list, resume | M6 | ⬜ |
| 22 | `tests/e2e/conversation.test.ts` | Streaming, RTL, phase transitions | M7 | ⬜ |

### Configuration Files (root)

| # | File | Milestone | Status | Notes |
|---|------|-----------|--------|-------|
| 23 | `package.json` | M0 | ✅ | Dependencies, scripts |
| 24 | `tsconfig.json` | M0 | ✅ | TypeScript for Bun |
| 25 | `.gitignore` | M0 | ✅ | meetings/, public/style.css, node_modules/ |
| 26 | `tailwind.config.ts` | M0 | ✅ | RTL, Hebrew fonts, content paths |
| 27 | `playwright-test.ts` | M10 | ⬜ | Playwright CLI helper (from CLAUDE.md spec) |

### AI-Agent Personas (participant-agents/) — Pre-existing, Complete

| # | File | Status |
|---|------|--------|
| 28 | `_base-prefix.md` | ✅ |
| 29 | `_agents-prefix.md` | ✅ |
| 30 | `_conversation-manager.md` | ✅ |
| 31 | `milo.md` | ✅ |
| 32 | `archi.md` | ✅ |
| 33 | `kashia.md` | ✅ |
| 34 | `barak.md` | ✅ |

---

## Milestones

### ✅ Milestone 0: Project Setup & Foundational Files

**Goal**: Repository structure exists, `bun install` can run, Tailwind can build.

**Deliverables**:
- [x] `package.json` — dependencies & scripts
- [x] `tsconfig.json` — TypeScript for Bun
- [x] `.gitignore` — meetings/, style.css, node_modules/
- [x] `tailwind.config.ts` — RTL, Hebrew font stack
- [x] `public/input.css` — Tailwind directives + CSS Grid layout
- [x] Directory structure: `src/`, `public/src/`, `tests/e2e/`
- [x] `DEVELOPMENT-STATUS.md` — this file

**Acceptance**: `bun install` succeeds. `bunx tailwindcss -i public/input.css -o public/style.css` produces output.

---

### 🔨 Milestone 1: Foundation & Type System

**Goal**: Core types, configuration, and stub SDK in place. `bun test` runs and passes.

**Why first**: Every other module imports from these three files. They define the contracts that the entire system operates on.

**Deliverables & Tasks**:

- [ ] **`src/types.ts`** — Zod schemas + inferred TypeScript types
  - `FormattedTime`: create/parse utilities (display string + epoch ms)
  - `AgentId`, `SpeakerId`, `MeetingId` branded string types
  - `MeetingMode` enum (`"Perush-Development"`)
  - `AgentDefinitionSchema` (id, englishName, hebrewName, roleTitle, managerIntro, managerTip, filePath)
  - `ConversationMessageSchema` (speaker, content, timestamp)
  - `PrivateAssessmentSchema` (agent, selfImportance 1-10, humanImportance 1-10, summary)
  - `CycleRecordSchema` (cycleNumber, speech, assessments, managerDecision)
  - `MeetingSchema` (meetingId, mode, title, openingPrompt, participants, cycles, timestamps, sessionIds, totalCostEstimate)
  - Server→Client WS message schemas (speech, speech-chunk, speech-done, assessment, tool-activity, vibe, phase, your-turn, sync, error, attention-ack, rollback-progress)
  - Client→Server WS message schemas (human-speech, command, start-meeting, resume-meeting, view-meeting, attention, rollback)
  - `ManagerSelectionSchema` (nextSpeaker, vibe)

- [ ] **`src/config.ts`** — Centralized configuration with JSDoc
  - Network: SERVER_PORT (4100), WS reconnection intervals, Director input timeout (10 min)
  - Models: PARTICIPANT_MODEL ("claude-opus-4-6"), MANAGER_MODEL ("claude-sonnet-4-6")
  - Cost caps: MAX_BUDGET_PER_SPEECH ($2.00), MAX_TURNS_PER_SPEECH (25)
  - Paths: DELIBERATION_DIR, PARTICIPANT_AGENTS_DIR, MEETINGS_DIR, ROOT_PROJECT_DIR, getClaudeProjectDir()
  - Git: SESSION_BRANCH_PREFIX ("sessions/"), TAG_PREFIX ("session-cycle/"), commit message templates
  - Timing: DIRECTOR_TIMEOUT_MS, WS_RECONNECT_BASE_MS, WS_RECONNECT_MAX_MS, VIBE_FADE_MS, ATTENTION_PULSE_MS
  - Stub mode: USE_STUB_SDK flag, STUB_RESPONSE_DELAY_MS
  - Assessment: IMPORTANCE_SCALE_MIN (1), IMPORTANCE_SCALE_MAX (10)

- [ ] **`src/stub-sdk.ts`** — Stub Agent SDK
  - Same `query()` interface as the real Agent SDK (async iterable of messages)
  - Parses `---stub-response---` / `---end-stub-response---` YAML blocks from the prompt
  - Generates deterministic session IDs
  - Emits proper message types: `system/init`, `assistant`, `result`
  - Supports streaming simulation (multi-chunk with configurable delay)
  - `interrupt()` method on query results

- [ ] **`src/types.test.ts`**
  - Valid inputs pass each schema
  - Invalid inputs fail with expected errors (wrong types, missing fields, out-of-range values)
  - FormattedTime create → parse round-trip
  - Edge cases: empty participants array, very long content strings

- [ ] **`src/config.test.ts`**
  - `getClaudeProjectDir()` produces correct path for the current machine
  - All config values have expected types
  - Path constants resolve to real directories (where applicable)

- [ ] **`src/stub-sdk.test.ts`**
  - Parses valid YAML stub response from prompt
  - Returns proper message sequence (init → assistant → result)
  - Generates unique session IDs per query
  - Streaming mode emits chunks with delays
  - `interrupt()` stops iteration
  - Handles malformed YAML gracefully (error, not crash)

- [ ] Verify: `bun test` passes for all M1 tests

---

### ⬜ Milestone 2: Conversation Store (Git-as-Database)

**Goal**: Full meeting lifecycle via git branches. Can create, read, list, and commit meetings.

**Why second**: The session manager and orchestrator both depend on the conversation store for persistence.

**Deliverables & Tasks**:

- [ ] **`src/conversation.ts`**
  - `createMeetingWorktree(meetingId)` — orphan branch + worktree at `meetings/<id>/`
  - `endMeeting(meetingId, worktreePath)` — final commit + `git worktree remove`
  - `resumeMeeting(meetingId)` — `git worktree add` to re-attach
  - `readActiveMeeting(worktreePath)` — file I/O + zod parse
  - `readEndedMeeting(meetingId)` — `git show` + zod parse
  - `listMeetings()` — `git branch --list "sessions/*"`, parse metadata
  - `writeMeetingAtomic(worktreePath, meeting)` — temp file → rename
  - `commitCycle(worktreePath, cycleNumber, speaker)` — `git -C add -A && commit`
  - `isMeetingActive(meetingId)` — check worktree existence
  - `cleanupDanglingWorktrees()` — remove orphaned worktrees from crashes
  - `generateMeetingId(title, startedAt)` — slugify title + timestamp

- [ ] **`src/conversation.test.ts`**
  - Uses a temporary git repo (created in `beforeEach`, cleaned in `afterEach`)
  - Tests: create → write → read round-trip
  - Tests: list meetings returns correct order
  - Tests: end meeting removes worktree but branch persists
  - Tests: `git show` reads ended meeting correctly
  - Tests: atomic write doesn't corrupt on simulated failure
  - Tests: commitCycle creates proper commit messages
  - Tests: cleanup handles dangling worktrees

- [ ] Verify: `bun test` passes for all M1 + M2 tests

---

### ⬜ Milestone 3: Session Manager

**Goal**: Can discover agents, resolve templates, create/feed/stream sessions (via stub), capture session files.

**Why third**: The orchestrator delegates all AI-Agent interaction to the session manager. This is the most complex single module.

**Deliverables & Tasks**:

- [ ] **`src/session-manager.ts`** — Agent Discovery
  - `discoverAgents()` — scan `participant-agents/*.md` (non-underscore), parse frontmatter with gray-matter, extract roleTitle from first heading, build `AgentDefinition[]`
  - Cache discovered agents for server lifetime
  - `getAgentDefinitions()` — return cached array
  - `getAgentById(id)` — lookup by ID

- [ ] **`src/session-manager.ts`** — Template Resolution
  - `resolveTemplate(filePath, meetingParticipants)` — full marker resolution pipeline:
    1. Parse frontmatter (gray-matter)
    2. Resolve `${include:<filename>}` — inline included file content (without frontmatter)
    3. Resolve `${EnglishName}`, `${HebrewName}` — from current file's frontmatter
    4. Resolve `${each:participant}...${/each:participant}` — iterate over meeting's participants
    5. Resolve `${speakerIds}` — computed from meeting's participants
  - `buildSystemPrompt(agentId, meetingParticipants)` — assemble full prompt:
    - Participant-Agents: `_base-prefix.md` (with dictionary) + `_agents-prefix.md` (resolved) + resolved persona
    - Conversation-Manager-Agent: `_base-prefix.md` (with dictionary) + resolved `_conversation-manager.md`
  - `injectDictionary(basePrefix)` — extract dictionary section from `../CLAUDE.md`, inject at `<!-- DICTIONARY_INJECTION_POINT -->`

- [ ] **`src/session-manager.ts`** — Session Lifecycle
  - `createSession(agentId, systemPrompt, model)` — create via Agent SDK or stub
  - `feedMessage(sessionId, prompt)` — `query()` with `resume: sessionId`
  - `extractAssessment(response)` — parse JSON `{ selfImportance, humanImportance, summary }` from agent response
  - `streamSpeech(sessionId, prompt)` — async generator yielding speech chunks
  - `interruptSpeech(query)` — call `.interrupt()`
  - `captureSession(sessionId, worktreePath)` — move+symlink from `~/.claude/projects/`
  - `recreateSymlink(sessionId, worktreePath)` — for meeting resume
  - `ensureSessionInIndex(sessionId, agentId)` — update `sessions-index.json`
  - `recoverSession(agentId, meetingTranscript, worktreePath)` — create new session, feed transcript

- [ ] **`src/session-manager.test.ts`**
  - Discovery: finds all non-underscore .md files, parses frontmatter correctly
  - Discovery: excludes underscore files, handles missing frontmatter gracefully
  - Templates: `${include:}` inlines file content without frontmatter
  - Templates: `${EnglishName}`, `${HebrewName}` resolve from frontmatter
  - Templates: `${each:participant}` iterates correctly, scoped to meeting participants
  - Templates: `${speakerIds}` produces correct union string
  - Templates: nested markers (include containing variables) resolve in correct order
  - Session: creates via stub, returns valid session ID
  - Session: feedMessage returns parseable response
  - Assessment: extractAssessment parses valid JSON
  - Assessment: extractAssessment handles malformed response (zod safeParse)
  - Speech: streamSpeech yields chunks in order
  - Prompt: buildSystemPrompt assembles all parts correctly
  - Dictionary: injectDictionary finds and injects content at injection point

- [ ] Verify: `bun test` passes for all M1-M3 tests

---

### ⬜ Milestone 4: Orchestrator

**Goal**: Full deliberation cycle works end-to-end with stub SDK. Phase transitions are correct.

**Why fourth**: The orchestrator is the "brain" that ties conversation store and session manager together into the deliberation loop.

**Deliverables & Tasks**:

- [ ] **`src/orchestrator.ts`**
  - `startMeeting(title, openingPrompt, participants)` — create worktree, create sessions, feed opening prompt, commit initial state
  - `resumeMeeting(meetingId)` — re-attach worktree, recreate symlinks, resume/recover sessions
  - `endMeeting()` — interrupt active queries, final commit, remove worktree
  - `runCycle()` — single cycle execution:
    1. Assessment phase: parallel `feedMessage()` to each participant (except last speaker), extract assessments
    2. Selection phase: feed assessments to manager session, extract nextSpeaker + vibe
    3. Speech phase: if agent → `streamSpeech()` yielding events; if human → await input
    4. Record cycle in `meeting.json`, commit to session branch
    5. Check perush file changes → tag if needed
  - Event emission: `onPhaseChange`, `onSpeech`, `onSpeechChunk`, `onAssessment`, `onVibe`, `onYourTurn`, `onError`
  - `handleHumanSpeech(content)` — resolve the human-turn promise
  - `handleAttention()` — set `attentionRequested` flag
  - `handleRollback(targetCycleNumber)` — full 6-phase rollback (M10 detailed implementation; M4 establishes the interface)
  - Director timeout: 10-minute timer during human-turn
  - Phase tracking: `assessing | selecting | speaking | human-turn | idle | rolling-back`

- [ ] **`src/orchestrator.test.ts`**
  - Full cycle with stub SDK: assessment → selection → speech → cycle recorded
  - Phase transitions fire in correct order
  - Attention flag: set before selection → forces human as next speaker
  - Attention flag: consumed after human speaks
  - Director timeout: fires after configured duration (use short timeout in test)
  - End meeting: interrupts active queries, commits, cleans up
  - Multiple cycles: conversation accumulates correctly
  - Assessment failure: cycle continues with partial assessments
  - Skips last speaker in assessment phase

- [ ] Verify: `bun test` passes for all M1-M4 tests

---

### ⬜ Milestone 5: HTTP + WebSocket Server

**Goal**: Server starts on port 4100, serves static files, handles WebSocket connections with full message routing.

**Deliverables & Tasks**:

- [ ] **`src/server.ts`**
  - `Bun.serve()` with fetch handler + WebSocket handler
  - HTTP: serve static files from `public/` (with correct MIME types)
  - HTTP: `GET /api/agents` → return discovered agent definitions as JSON
  - HTTP: `GET /api/meetings` → return meeting list as JSON
  - WebSocket upgrade on `/ws`
  - WS routing: parse incoming JSON → validate with zod → dispatch to orchestrator
    - `start-meeting` → `orchestrator.startMeeting()`
    - `resume-meeting` → `orchestrator.resumeMeeting()`
    - `view-meeting` → send sync with `readOnly: true`
    - `human-speech` → `orchestrator.handleHumanSpeech()`
    - `command` → handle `/end`
    - `attention` → `orchestrator.handleAttention()`
    - `rollback` → `orchestrator.handleRollback()`
  - WS broadcasting: relay orchestrator events to all connected clients
  - Reconnection: send full `sync` message on new WS connection
  - Multiple tabs: broadcast to all, first human-speech wins
  - Graceful shutdown: `process.on("SIGINT")` / `process.on("SIGTERM")`
    - Interrupt active queries
    - Commit partial state
    - Remove worktree
    - Close WS connections with error message
    - Exit

- [ ] **`src/server.test.ts`**
  - Server starts and responds on configured port
  - Static file serving: HTML, JS, CSS with correct content types
  - `/api/agents` returns valid JSON array of AgentDefinition
  - `/api/meetings` returns valid JSON array
  - WebSocket connects and receives sync message
  - WS message routing: valid messages dispatch correctly
  - WS message routing: invalid messages return error
  - Graceful shutdown cleans up resources

- [ ] Verify: `bun test` passes, `bun run src/server.ts` starts without error

---

### ⬜ Milestone 6: Frontend — Landing Page

**Goal**: Landing page renders in RTL, shows meeting list, allows creating a new meeting with participant selection.

**Deliverables & Tasks**:

- [ ] **`public/index.html`**
  - `<html dir="rtl" lang="he">` — RTL-first
  - CSS Grid layout (deliberation-room class defined in input.css)
  - Landing page section: new meeting form + meeting list
  - Deliberation section (hidden initially): conversation + sidebar + vibe bar + input
  - Hebrew font stack, Tailwind utility classes (logical properties only)
  - `<script type="module">` loading app.js

- [ ] **`public/src/app.js`**
  - WebSocket connection management:
    - Connect to `ws://localhost:4100/ws`
    - Reconnection with exponential backoff (1s, 2s, 4s, max 30s)
    - "Reconnecting..." indicator
  - Page state: `landing | deliberation | view-only`
  - Landing page logic:
    - Fetch agents from `/api/agents` → render participant toggle cards (all selected by default)
    - Fetch meetings from `/api/meetings` → render meeting list
    - Handle "start meeting" form submission → send `start-meeting` WS message
    - Handle "resume" button → send `resume-meeting` WS message
    - Handle "view" button → send `view-meeting` WS message
  - WS message routing: dispatch to conversation-view.js and agent-panel.js
  - Handle `sync` message → reconstruct full UI state

- [ ] **Style with Tailwind**
  - RTL logical properties throughout (ms-, me-, ps-, pe-, start-, end-)
  - Hebrew font stack
  - Participant toggle cards (landing page)
  - Meeting list cards
  - Color coding per speaker (define palette)

- [ ] **`tests/e2e/mock-ws-server.ts`**
  - Bun WebSocket server that replays canned event sequences
  - Supports: sync messages, speech sequences, assessment sequences
  - Deterministic timing for test reliability

- [ ] **`tests/e2e/landing-page.test.ts`**
  - Page loads in RTL
  - Agent cards render with Hebrew names
  - Agent cards are toggleable
  - Meeting list renders (with mock data)
  - Create meeting form validates required fields
  - Start meeting transitions to deliberation view

- [ ] Verify: Landing page renders correctly, E2E tests pass

---

### ⬜ Milestone 7: Frontend — Live Deliberation UI

**Goal**: Full deliberation UI with streaming conversation, agent panel, vibe bar, and director input.

**Deliverables & Tasks**:

- [ ] **`public/src/conversation-view.js`**
  - Render messages: speaker label + color + content (RTL)
  - Streaming: append `speech-chunk` deltas to current message element
  - `speech-done`: finalize streaming message
  - Auto-scroll: scroll to bottom on new content (unless user has scrolled up)
  - Mixed bidi text: `unicode-bidi: plaintext` on message containers
  - Rollback icons: `↩` on hover for human messages (sends to app.js)
  - Rollback confirmation dialog (modal)
  - Message fading during rollback preview (opacity: 0.3)
  - Edit-after-rollback: inline editable textarea for target human message

- [ ] **`public/src/agent-panel.js`**
  - Collapsible panel (collapsed by default)
  - Tabs: one per meeting participant (from sync message)
  - Assessment display: selfImportance, humanImportance, summary
  - Importance badges on tabs (colored dot: green/yellow/red)
  - Tool activity display (tool name, status)
  - Auto-open when agent is speaking (show that agent's tab)
  - Manual toggle always available

- [ ] **Vibe bar** (in app.js or conversation-view.js)
  - Sticky between conversation and input
  - Vibe text + next speaker + current phase
  - 300ms fade transition on update
  - Visual change during human-turn (accent border)
  - Attention button (idle / activated / consumed states)

- [ ] **Director input** (in app.js)
  - Sticky bottom textarea
  - `dir="auto"` for mixed Hebrew/English
  - Highlighted during human-turn, dimmed otherwise
  - Submit on Enter (or submit button)
  - Always accepts `/end` command

- [ ] **`tests/e2e/conversation.test.ts`**
  - Messages render in correct RTL direction
  - Streaming text appends correctly
  - Speaker colors are applied
  - Vibe bar updates on vibe message
  - Phase indicator changes
  - Agent panel tabs switch correctly
  - Assessment data displays

- [ ] Verify: Full deliberation UI works with mock WS server

---

### ⬜ Milestone 8: End-to-End Integration (Stub SDK)

**Goal**: Complete flow works: browser → WebSocket → server → orchestrator → stub SDK → UI update.

This milestone has no new source files — it's about connecting M1-M7 and verifying the full loop.

**Tasks**:

- [ ] Start server with stub SDK enabled (`USE_STUB_SDK=true` in config)
- [ ] Create a meeting from the browser landing page
- [ ] Verify: opening prompt triggers assessment → selection → speech cycle
- [ ] Verify: stub agent "speaks" and text streams in the browser
- [ ] Verify: human turn is signaled, human can submit input
- [ ] Verify: multiple cycles work (conversation accumulates)
- [ ] Verify: meeting appears in meeting list after ending
- [ ] Verify: view-only mode shows ended meeting
- [ ] Fix integration bugs discovered during testing
- [ ] Verify: `bun test` still passes (no regressions)

---

### ⬜ Milestone 9: Real Agent SDK Integration

**Goal**: Replace stub with real Agent SDK. A real deliberation works end-to-end.

**Prerequisites**: Claude CLI installed and authenticated (`claude` works from terminal).

**Tasks**:

- [ ] Verify `@anthropic-ai/claude-code` (or the correct package name) is installed and importable
- [ ] Implement real SDK adapter in session-manager.ts (if the interface differs from stub)
- [ ] Test single session creation with one Participant-Agent (Opus)
- [ ] Test single session creation with the Conversation-Manager-Agent (Sonnet)
- [ ] Test `query()` with `resume: sessionId` — verify session continuity
- [ ] Test `includePartialMessages` streaming
- [ ] Test tool access (Read, Bash, Grep, Glob) in Participant-Agent sessions
- [ ] Test move+symlink capture with real session files
- [ ] Run a full meeting (3-5 cycles) with 2-3 Participant-Agents
- [ ] Verify session files are committed to session branch
- [ ] Verify cost estimate tracking
- [ ] Performance profiling: measure cycle latency, identify bottlenecks

---

### ⬜ Milestone 10: Advanced Features & Polish

**Goal**: All CLAUDE.md features implemented. Production-ready for the Director's use.

**Tasks — Attention Button**:
- [ ] UI: button in vibe bar with three states (idle, activated, consumed)
- [ ] Server: `attentionRequested` flag, honored at next selection phase
- [ ] Orchestrator: augment manager prompt + defense-in-depth override
- [ ] Test: full flow (click → flag → forced selection → consumed)

**Tasks — In-Meeting Rollback**:
- [ ] UI: hover `↩` icon on human messages
- [ ] UI: confirmation dialog with message preview and cycle count
- [ ] UI: message fading during confirmation (opacity: 0.3)
- [ ] Server: 6-phase rollback flow
  - Phase 1: abort active queries
  - Phase 2: `git -C <worktree> reset --hard <commit>`
  - Phase 3: perush file rollback on main (correlated tags)
  - Phase 4: session recovery for all agents
  - Phase 5: commit "Rollback to cycle N + session recovery"
  - Phase 6: send sync with `editingCycle` → UI shows editable textarea
- [ ] UI: edit-after-rollback (inline textarea, "send as-is" / "send edited")
- [ ] Test: rollback to mid-conversation, rollback to opening prompt (cycle 0)

**Tasks — Cross-Branch Tagging**:
- [ ] Detect perush file changes after each cycle (`git diff --name-only`)
- [ ] Commit perush changes on main
- [ ] Create correlated tags (`<tag-id>/main` + `<tag-id>/session`)
- [ ] Async push (fire-and-forget)

**Tasks — Session Recovery**:
- [ ] Detect session failure (network error, context overflow)
- [ ] Create new session, feed transcript from `meeting.json`
- [ ] Capture new session (move+symlink), update `meeting.json`
- [ ] Commit "Session recovery: <agent-id>"
- [ ] Notify browser

**Tasks — Meeting Resume**:
- [ ] Re-attach worktree
- [ ] Recreate symlinks
- [ ] Resume or recover sessions
- [ ] Full flow test: end meeting → resume → continue deliberation

**Tasks — Other**:
- [ ] View-only mode (read-only UI, no input, persistent banner)
- [ ] Cost tracking display (vibe bar + meeting list)
- [ ] Graceful shutdown (SIGINT/SIGTERM → interrupt, commit, cleanup, close)
- [ ] `playwright-test.ts` CLI helper
- [ ] Git state preconditions check at meeting start
- [ ] Session branch cleanup documentation
- [ ] Final test coverage review

---

## Dependencies & SDK Notes

The Agent SDK package name in CLAUDE.md is `@anthropic-ai/claude-code`. The exact API surface (especially `query()` with `resume`, `includePartialMessages`, and `interrupt()`) should be verified via the separate SDK smoke test before Milestone 9. The stub SDK (M1) is designed to match the interface described in CLAUDE.md.

---

## Development Log

### 2026-02-27 — Milestone 0: Project Setup

- Created `DEVELOPMENT-STATUS.md` (this file)
- Created `package.json` with dependencies: zod, gray-matter, tailwindcss, playwright, @anthropic-ai/claude-code
- Created `tsconfig.json` (based on `../_RTL-EDITOR/tsconfig.json`, adapted for server-side TypeScript)
- Created `.gitignore` (meetings/, public/style.css, node_modules/, .idea/)
- Created `tailwind.config.ts` (RTL-ready, Hebrew font stack)
- Created `public/input.css` (Tailwind directives + CSS Grid for deliberation layout)
- Created directory structure: `src/`, `public/src/`, `tests/e2e/`
- All participant-agent personas were already complete (pre-existing)
