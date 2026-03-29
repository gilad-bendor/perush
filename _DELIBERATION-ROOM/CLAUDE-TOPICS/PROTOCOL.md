# WebSocket Communication Protocol

> **Spin-out from `CLAUDE.md`.** Read when working on the WebSocket layer (`server.ts`, `public/src/app.js`) or adding new message types.

The browser connects to the server via a single WebSocket connection. Traffic is predominantly server→client (streaming speeches, status updates, assessments), with occasional client→server messages (human input, commands).

## Server → Client Messages

```typescript
// A completed speech added to the conversation
{ type: "speech", speaker: SpeakerId, content: string, timestamp: FormattedTime }

// A streaming chunk of an in-progress speech
{ type: "speech-chunk", speaker: SpeakerId, delta: string }

// Speech streaming completed (final content is in the preceding "speech" message)
{ type: "speech-done", speaker: SpeakerId }

// A Participant-Agent's private assessment (free-form text, shown in process labels)
{ type: "assessment", agent: AgentId, text: string }

// The Orchestrator-Agent's vibe + next speaker decision
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

// Signals start of an SDK process (assessment, orchestrator selection, or agent speech)
{ type: "process-start", processId: string, processKind: "assessment" | "orchestrator-selection" | "agent-speech", agent: AgentId | "orchestrator", cycleNumber: number }

// A single event within a process (prompt, thinking, text output, tool call, tool result)
{ type: "process-event", processId: string, eventKind: "prompt" | "thinking" | "text" | "tool-call" | "tool-result", content: string, toolName?: string, toolInput?: string }

// Signals end of a process
{ type: "process-done", processId: string }

// Pause state update (paused = toggle state, blocking = pause is actively preventing next cycle)
{ type: "pause-state", paused: boolean, blocking: boolean }
```

## Client → Server Messages

```typescript
// Director's speech during their turn
{ type: "human-speech", content: string }

// Slash commands (available at any time, not just during human turn)
{ type: "command", command: "/end" }

// Start a new meeting (participants = selected agent IDs from the pool)
{ type: "start-meeting", title: string, openingPrompt: string, participants: AgentId[] }

// Resume a previous meeting. If the meeting is already active, returns it without
// restarting the deliberation loop — safe to call from any browser tab at any time.
{ type: "resume-meeting", meetingId: string }

// View a past meeting in read-only mode
{ type: "view-meeting", meetingId: string }

// Join a meeting by URL — server auto-detects: if active, sends live sync (readOnly: false,
// enabling the Director's input); if ended, sends read-only sync. Primary entry point for
// URL-based navigation (/meeting/<id>).
{ type: "join-meeting", meetingId: string }

// Director requests the floor — current cycle continues uninterrupted;
// next selection phase will force the orchestrator to choose the Director.
{ type: "attention" }

// Director initiates rollback to a specific human message.
// targetCycleNumber = the cycle containing the human message to roll back to.
// 0 = roll back to the opening prompt (before any cycles).
{ type: "rollback", targetCycleNumber: number }

// Toggle play/pause — pauses/resumes the deliberation loop (doesn't interrupt running cycles)
{ type: "toggle-pause" }
```

## Reconnection

When the browser disconnects and reconnects (network blip, laptop sleep, page refresh), the client reads the current URL. If on `/meeting/<id>`, it sends `join-meeting` to request the meeting state. The server responds with a `sync` message containing the full `Meeting` state and current phase. The client reconstructs the UI from this state. The orchestrator continues running regardless of browser connection state — the browser is a view, not the process owner.

The server does **not** auto-send sync on WebSocket connect — the client must request it via `join-meeting`.

Client-side reconnection logic: on WebSocket `close` event, attempt reconnect with exponential backoff (1s, 2s, 4s, max 30s). Show a "Reconnecting..." indicator in the UI.

## Multiple Tabs

Multiple browser tabs receive the same broadcast. All tabs viewing the active meeting get full editing capabilities (not read-only). During the Director's turn, all tabs show the input field; whichever submits first wins. The server accepts the first response and broadcasts it. Tabs can freely navigate between the landing page and any meeting without affecting the server-side meeting state.

## Cost Profile Per Cycle

| Phase | Model | Calls | Approx. Cost |
|-------|-------|-------|-------------|
| Assessment | Opus (persistent, cached) | 2-3 (parallel) | ~$0.05-0.10 |
| Selection | Sonnet (persistent, cached) | 1 | ~$0.01 |
| Speech | Opus (persistent, cached + tools) | 1 | ~$0.30-1.00 |
| **Total per cycle** | | **4-5** | **~$0.50** |
| **15-cycle meeting** | | | **~$7.50** |
