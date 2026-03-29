# Key Design Decisions (Settled)

> **Spin-out from `CLAUDE.md`.** Consult before revisiting any settled design choice.

1. **Persistent session architecture**: Each AI-Agent runs as a persistent Agent SDK session for the duration of a meeting. Participant-Agents use Opus (for both assessments and speeches); the Conversation-Manager-Agent uses Sonnet. Rationale: (a) AI-Agent continuity — agents accumulate understanding across cycles instead of being cold-started each time; (b) token efficiency — prompt caching on the stable session prefix makes Opus competitive with Sonnet on input costs, and context compression reduces tokens for long meetings; (c) simpler architecture — one invocation pattern (Agent SDK `query()` with `resume: sessionId`) instead of two (raw API + Agent SDK).

2. **Git branches as the meeting database**: Each meeting lives on its own orphan branch (`sessions/<meeting-id>`) — no meeting data on `main`, ever. `meeting.yaml` + session JSONL files are committed per-cycle, creating a natural timeline. Listing meetings = listing branches; reading an ended meeting = `git show`. Rationale: (a) audit trail with per-cycle granularity; (b) `main` stays clean; (c) git provides the database operations without additional tooling; (d) session files live on the branch alongside `meeting.yaml`.

3. **Director-controlled ending**: Only the Director ends a meeting. The Conversation-Manager-Agent signals readiness through "vibe" comments but never terminates autonomously.

4. **Director opens**: The Director provides the initial prompt that sets context and scope. The Participant-Agents respond to this opening.

5. **TypeScript + Bun**: Consistent with the project ecosystem. Bun provides native WebSocket support in `Bun.serve()`.

6. **No JS framework (backend or frontend)**: Custom orchestrator, vanilla HTML/JS frontend with Tailwind CSS. The system has a small, configurable set of Participants with a specific protocol — JS frameworks add complexity without proportional value.

7. **"Vibe" comments**: The Conversation-Manager-Agent produces a short atmospheric comment with each Participant selection, displayed in a sticky bar as a stage direction (not a conversation message).

8. **Dialectical Participant-Agents with primary mandates**: Participant-Agents engage with each other's points but always through their own lens. Each has a strict primary mandate that keeps their voice distinct.

9. **Hebrew speech**: Participant-Agents speak in Hebrew during deliberation. The persona files are in English (LLM instructions), but all output is Hebrew. To be A/B tested against English in the future.

10. **Natural speech rhythm**: No hard word-count constraint. The guidance is conversational: deliver your point well, pass the ball, keep it dynamic. Silence is better than noise.

11. **Personas in `participant-agents/` with template system**: Non-underscore files are AI-Agent entry points with YAML frontmatter and undergo template marker resolution (`@include`, `@echo`, `@foreach`). Underscore-prefix files serve special roles. System prompt construction: Participant-Agents get `_base-prefix.md` + `_agents-prefix.md` + resolved agent file; the Conversation-Manager-Agent gets `_base-prefix.md` + resolved `_conversation-manager.md`.

12. **Execution from root directory**: The deliberation software is developed here (`_DELIBERATION-ROOM/`) but accesses the root project directory (`../`), giving agents access to commentary files, scripts, and the full CLAUDE.md.

13. **Web server, not tmux**: The deliberation UI runs in the browser on port 4100. Rationale: (a) tmux cannot render Hebrew RTL text correctly; (b) the browser provides proper font rendering, streaming text display, collapsible panels; (c) the browser-based landing page replaces CLI arguments.

14. **WebSocket for communication**: A single WebSocket connection handles all real-time communication. Bun's native WebSocket support makes this zero-dependency.

15. **RTL-first design**: The entire page is `dir="rtl"`. CSS uses logical properties exclusively. The layout is designed for Hebrew from the ground up.

16. **Streaming Participant-Agent speech**: Speeches are streamed to the browser in real-time via the Agent SDK's `includePartialMessages` option + WebSocket forwarding. Opus + tool use can take 30-90 seconds per speech.

17. **Collapsible Participant-Agent panel with tabs**: Private assessments and tool activity in a single collapsible side panel with one tab per Participant-Agent. Opens automatically when relevant.

18. **Port 4100**: Separate from RTL-EDITOR's port 4000.

19. **Cross-branch tagging for rollback**: Correlated tags (`session-cycle/<meeting-id>/c<N>/main` + `session-cycle/<meeting-id>/c<N>/session`) capture synchronized state of both branches when perush files are altered. Tags pushed async (fire-and-forget).

20. **Git worktrees for session isolation + move+symlink for session capture**: Each meeting gets an orphan branch with a worktree. Session files moved from `~/.claude/projects/` and symlinked back. No lock files, no pre-commit hooks.

21. **Dynamic participant selection per meeting**: Participant-Agents discovered dynamically from `participant-agents/*.md`. Director selects per-meeting, selection is immutable. Adding a new agent requires only a `.md` file.

22. **Attention button**: In-memory flag (`attentionRequested`) that forces the Director as next speaker. Defense-in-depth: orchestrator overrides the manager's response if the flag is set.

23. **Per-message in-meeting rollback**: 6-phase rollback flow: (1) abort active cycles, (2) git reset session branch, (3) perush rollback on main, (4) recreate all agent sessions, (5) commit recovery, (6) inline edit. All sessions recreated because all have accumulated invalid context.

24. **Tailwind CSS (not vanilla CSS)**: Utility-first CSS with built-in RTL logical properties.

25. **Vanilla JS (not HTMX or any frontend framework)**: Explicit DOM manipulation with vanilla JS, receiving JSON over WebSocket.

26. **zod for validation at every boundary**: Schemas define shapes of WebSocket messages, AI-Agent responses, `meeting.yaml`, and persona frontmatter. TypeScript types inferred from the same schemas.

27. **Stub Agent SDK for testing**: Drop-in replacement with expected responses embedded as YAML in prompts. Activated via `USE_STUB_SDK` config flag.

28. **Test-driven development**: Every implementation task must be accompanied by unit tests and, when there is a UI component, E2E tests.

29. **Centralized configuration**: All configurable values live in `src/config.ts` with JSDoc documentation.

30. **SDK smoke test validated**: The Agent SDK (`@anthropic-ai/claude-agent-sdk@0.2.62`) was validated via a 25-test smoke test. Five design corrections applied: (a) `tools` option for restriction; (b) `getClaudeProjectDir()` replaces all non-alphanumeric chars; (c) `sessions-index.json` removed; (d) `env` stripping for nested-session prevention; (e) `interrupt()` confirmed as only termination method.
