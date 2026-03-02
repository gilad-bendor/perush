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

## Client → Server Messages

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

// Join a meeting by URL — server auto-detects: if active, sends live sync; if ended, sends read-only sync.
// Primary entry point for URL-based navigation (/meeting/<id>).
{ type: "join-meeting", meetingId: string }

// Director requests the floor — current cycle continues uninterrupted;
// next selection phase will force the manager to choose the Director.
{ type: "attention" }

// Director initiates rollback to a specific human message.
// targetCycleNumber = the cycle containing the human message to roll back to.
// 0 = roll back to the opening prompt (before any cycles).
{ type: "rollback", targetCycleNumber: number }
```

## Reconnection

When the browser disconnects and reconnects (network blip, laptop sleep, page refresh), the client reads the current URL. If on `/meeting/<id>`, it sends `join-meeting` to request the meeting state. The server responds with a `sync` message containing the full `Meeting` state and current phase. The client reconstructs the UI from this state. The orchestrator continues running regardless of browser connection state — the browser is a view, not the process owner.

The server does **not** auto-send sync on WebSocket connect — the client must request it via `join-meeting`.

Client-side reconnection logic: on WebSocket `close` event, attempt reconnect with exponential backoff (1s, 2s, 4s, max 30s). Show a "Reconnecting..." indicator in the UI.

## Multiple Tabs

Multiple browser tabs receive the same broadcast (they're passive viewers). During the Director's turn, all tabs show the input field; whichever submits first wins. The server accepts the first response and broadcasts it.

## Cost Profile Per Cycle

| Phase | Model | Calls | Approx. Cost |
|-------|-------|-------|-------------|
| Assessment | Opus (persistent, cached) | 2-3 (parallel) | ~$0.05-0.10 |
| Selection | Sonnet (persistent, cached) | 1 | ~$0.01 |
| Speech | Opus (persistent, cached + tools) | 1 | ~$0.30-1.00 |
| **Total per cycle** | | **4-5** | **~$0.50** |
| **15-cycle meeting** | | | **~$7.50** |
