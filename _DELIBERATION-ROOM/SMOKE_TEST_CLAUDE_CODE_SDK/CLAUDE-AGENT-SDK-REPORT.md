# Claude Agent SDK Smoke Test Report

**Date**: 2026-02-27
**SDK**: `@anthropic-ai/claude-agent-sdk@0.2.62`
**Claude Code**: v2.1.62
**Runtime**: Bun 1.3.8 (macOS arm64)
**Test model**: `claude-haiku-4-5-20251001` (cost minimization)

---

## Executive Summary

25 tests were planned. 22 passed, 2 passed partially, 1 was not runnable (type-confirmed only). The SDK is **fully viable** for the Deliberation Room architecture. The core interaction pattern — persistent sessions with `resume`, streaming with `includePartialMessages`, parallel assessment queries, `interrupt()` for stopping mid-speech — all work exactly as the design assumes.

**Five discrepancies require design changes** before implementation begins. None are architectural blockers — all are localized fixes (wrong option name, wrong path derivation, removal of unnecessary code). See [Required Design Changes](#required-design-changes) below.

---

## Test Results at a Glance

| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 1 | Package install + import | **PASS** | `query`, `listSessions`, `getSessionMessages`, `tool`, `createSdkMcpServer` all available |
| 2 | Basic `query()` call | **PASS** | `query({ prompt, options })` returns `AsyncGenerator<SDKMessage>` |
| 3 | System init message | **PASS** | Always first message; `session_id` is UUID string |
| 4 | Session resume | **PASS** | `resume: sessionId` retains full context; same `session_id` on resume |
| 5 | Streaming (`includePartialMessages`) | **PASS** | `stream_event` messages with `content_block_delta` / `text_delta` |
| 6 | Tool progress messages | **PARTIAL** | Type exists but not emitted for quick tools; don't depend on it |
| 7 | `interrupt()` | **PASS** | Graceful, no error, loop terminates cleanly |
| 8 | `maxTurns` | **PARTIAL** | Works but may produce `success` instead of `error_max_turns` |
| 9 | `maxBudgetUsd` | **PASS** | `error_max_budget_usd` confirmed; slight overshoot possible |
| 10 | `systemPrompt` | **PASS** | String and preset+append both work; persists across resumes |
| 11 | `cwd` | **PASS** | Reflected in init message and tool execution |
| 12 | Tool restriction (`tools` option) | **PASS** | `tools: []` disables all tools; `tools: ["Read"]` restricts to Read only |
| 13 | `permissionMode: "bypassPermissions"` | **PASS** | Autonomous tool execution confirmed |
| 14 | Session persistence on disk | **PASS** | JSONL files at `~/.claude/projects/<derived-dir>/`; path derivation differs from design |
| 15 | `listSessions()` | **PASS** | Returns metadata without `sessions-index.json` |
| 16 | `forkSession` | **PASS** | New ID, retains context, original untouched |
| 17 | Result message structure | **PASS** | `total_cost_usd`, `usage`, `modelUsage` all present |
| 18 | Assistant message structure | **PASS** | `message.content[]` with `text`, `thinking`, `tool_use` blocks |
| 19 | Parallel sessions | **PASS** | 3 concurrent queries, 3 distinct session IDs, ~4s total |
| 20 | `AbortController` | **PASS** | Clean termination, no hanging processes |
| 21 | Context compression | **NOT TESTED** | `SDKCompactBoundaryMessage` type confirmed in SDK definitions |
| 22 | Multi-resume cycles | **PASS** | 5 cycles, 100% context retention |
| 23 | Streaming + resume combined | **PASS** | Both work together; streaming on resumed session confirmed |
| 24 | `sessionId` (pre-set) | **PASS** | Custom UUID honored exactly |
| 25 | Cleanup methods | **PASS** | No `close()`; use `interrupt()` or `return()` |
| Bonus | `getSessionMessages()` | **PASS** | Reads session JSONL as structured objects |
| Bonus | `persistSession: false` | **PASS** | No JSONL file created; in-memory only |

---

## Validated Core Patterns

These patterns, central to the Deliberation Room's architecture, are confirmed working exactly as designed.

### 1. Persistent Session with Resume

The fundamental per-cycle interaction pattern works perfectly:

```typescript
// Cycle 1: create session
const q1 = query({ prompt: openingPrompt, options: { model, systemPrompt, ... } });
let sessionId: string;
for await (const msg of q1) {
  if (msg.type === "system" && msg.subtype === "init") sessionId = msg.session_id;
  // ... process response
}

// Cycle 2+: resume same session
const q2 = query({ prompt: cyclePrompt, options: { resume: sessionId } });
for await (const msg of q2) { /* full prior context available */ }
```

**Key behaviors**:
- Every `query()` call (including resumes) emits a `system/init` message first.
- The `session_id` remains the same across all resumes.
- Context retention is complete — tested with 5 sequential resumes, all 5 pieces of information recalled perfectly.
- System prompt set on the first call persists across all resumes (no need to re-provide).

### 2. Speech Streaming

```typescript
const q = query({
  prompt: "...",
  options: { resume: sessionId, includePartialMessages: true }
});
for await (const msg of q) {
  if (msg.type === "stream_event") {
    const event = msg.event;
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      // Forward event.delta.text to WebSocket → browser
    }
  }
}
```

**Verified**: 85 stream events for a short paragraph. Stream event types: `message_start`, `content_block_start`, `content_block_delta`, `content_block_stop`, `message_delta`, `message_stop`. Works correctly when combined with `resume`.

### 3. Parallel Assessment Queries

```typescript
const [a1, a2, a3] = await Promise.all([
  collectMessages(query({ prompt: assessmentPrompt, options: { resume: agent1Sid } })),
  collectMessages(query({ prompt: assessmentPrompt, options: { resume: agent2Sid } })),
  collectMessages(query({ prompt: assessmentPrompt, options: { resume: agent3Sid } })),
]);
```

**Verified**: 3 parallel sessions completed in ~4 seconds. All received distinct session IDs. No interference.

### 4. Interrupting Mid-Speech

```typescript
const q = query({ prompt: "...", options: { resume: sid, includePartialMessages: true } });
// ... after some messages ...
await q.interrupt(); // graceful, no error, loop terminates
```

**Verified**: `interrupt()` returned immediately, `for await` loop terminated cleanly, no error thrown.

### 5. Tool-less Agent (Conversation Manager)

```typescript
const managerQuery = query({
  prompt: "...",
  options: {
    model: "claude-sonnet-4-6",
    tools: [],  // ← no tools
    permissionMode: "bypassPermissions",
    allowDangerouslySkipPermissions: true,
  }
});
```

**Verified**: `tools: []` produces `init.tools: []`. The agent operates without any tool access.

---

## Required Design Changes

These are differences between the design document (`../CLAUDE.md`) and actual SDK behavior that **must be corrected** before implementation.

### 1. `tools` vs `allowedTools` — Different Options

**The problem**: The design uses `allowedTools: ["Read", "Bash", "Grep", "Glob"]` in session setup tables and code samples, intending to restrict which tools the agent can use. But `allowedTools` only controls **auto-approval** (skip permission prompts). It does NOT restrict tool availability.

**The fix**: Use `tools` to restrict the tool set, and `permissionMode: "bypassPermissions"` for autonomous execution.

| Session | Design (wrong) | Correct |
|---------|----------------|---------|
| Participant-Agents | `allowedTools: ["Read", "Bash", "Grep", "Glob"]` | `tools: ["Read", "Bash", "Grep", "Glob"]` |
| Manager | *implied: no tools* | `tools: []` |

Both also need:
```typescript
permissionMode: "bypassPermissions",
allowDangerouslySkipPermissions: true,
```

**Affected design sections**: "Session Setup" table, code samples throughout.

### 2. `getClaudeProjectDir()` Path Derivation

**The problem**: The design assumes only slashes (`/`) are replaced with hyphens when deriving the Claude project directory name from the CWD. The SDK actually replaces **all non-alphanumeric characters** — including underscores (`_`), dots (`.`), spaces, etc.

**Example**:
```
Path:     /Users/giladben-dor/dev/perush/_DELIBERATION-ROOM
Design:   -Users-giladben-dor-dev-perush-_DELIBERATION-ROOM     ← WRONG
Actual:   -Users-giladben-dor-dev-perush--DELIBERATION-ROOM     ← CORRECT
```

**The fix**: Replace the design's:
```typescript
const dirName = projectPath.replaceAll("/", "-").replace(/^-/, "");
```
With:
```typescript
const dirName = projectPath.replace(/[^a-zA-Z0-9]/g, "-").replace(/^-/, "");
```

**Impact**: Affects `captureSession()`, `recreateSymlink()`, `ensureSessionInIndex()`, and any code that locates session files on disk.

### 3. Remove `sessions-index.json` Management

**The problem**: The design includes an `ensureSessionInIndex()` function and a section on "Ensuring Sessions-Index Consistency" that manages `~/.claude/projects/<dir>/sessions-index.json`. The SDK **does not create or maintain this file** for programmatic sessions. `listSessions()` works by scanning JSONL files directly.

**The fix**: Remove all of the following from the design:
- The `ensureSessionInIndex()` function and its description.
- The "Ensuring Sessions-Index Consistency" section.
- The "sessions-index.json Concurrent Access" section.
- References to `sessions-index.json` in the session lifecycle diagrams.
- The step "Ensure entry in sessions-index.json" from the per-cycle flow.

`listSessions({ dir })` and `getSessionMessages(sessionId, { dir })` are the SDK-provided alternatives for any session lookup needs.

### 4. Nested Session Environment Variables

**The problem**: When the Deliberation Room server is started from within a Claude Code session (the normal development scenario), the child SDK process inherits `CLAUDECODE=1` and refuses to start with: *"Claude Code cannot be launched inside another Claude Code session."*

**The fix**: Always strip these environment variables before passing `env` to `query()`:

```typescript
function cleanEnvForSDK(): Record<string, string | undefined> {
  const env = { ...process.env };
  delete env.CLAUDECODE;
  delete env.CLAUDE_CODE_ENTRYPOINT;
  delete env.CLAUDE_CODE_SSE_PORT;
  return env;
}

// In every query() call:
query({ prompt, options: { env: cleanEnvForSDK(), ... } });
```

**Affected design sections**: Add this to `config.ts` or `session-manager.ts`. Must be applied to **every** `query()` call — assessments, selections, and speeches alike.

### 5. No `close()` Method — Use `interrupt()`

**The problem**: The design references `speechQuery.interrupt()` (correct) but also mentions `close()` in the context of graceful shutdown. The `Query` object has no `close()` method.

**The fix**: Use `interrupt()` for all graceful termination scenarios:
- Stopping a Participant-Agent mid-speech (when Director sends `/end`).
- Aborting active queries during rollback.
- Server shutdown (SIGINT/SIGTERM handler).

The `Query` extends `AsyncGenerator`, so `return()` also works for cleanup, but `interrupt()` is the SDK-native way and is preferred.

---

## Message Type Reference

The SDK emits messages via the `AsyncGenerator<SDKMessage>`. The message types observed during testing, in the order relevant to the Deliberation Room:

### `system` / `init` — Session Start

Always the first message. Emitted on every `query()` call, including resumes.

```typescript
{
  type: "system",
  subtype: "init",
  session_id: "01781ec6-...",           // UUID — stable across resumes
  uuid: "957f85e4-...",                 // unique per message
  model: "claude-haiku-4-5-20251001",
  cwd: "/Users/.../perush",
  tools: ["Read", "Bash", "Grep", "Glob"],  // reflects the `tools` option
  permissionMode: "bypassPermissions",
  claude_code_version: "2.1.62",
  agents: ["general-purpose", ...],
  mcp_servers: [],
  slash_commands: [...],
  output_style: "default",
  skills: [...],
  plugins: [],
  fast_mode_state: ...,
  apiKeySource: ...
}
```

### `assistant` — Agent Response

Contains the model's response. **Two assistant messages per response** when thinking is enabled:

1. First: `message.content` contains `{ type: "thinking", thinking: "..." }` blocks.
2. Second: `message.content` contains `{ type: "text", text: "..." }` and/or `{ type: "tool_use", name, input, id }` blocks.

```typescript
{
  type: "assistant",
  message: {
    content: [
      { type: "text", text: "The analysis shows..." },
      { type: "tool_use", name: "Grep", id: "toolu_01...", input: { pattern: "..." } }
    ],
    // ... other Anthropic API message fields
  },
  parent_tool_use_id: null,   // non-null when inside a tool use chain
  uuid: "f9877cce-...",
  session_id: "01781ec6-..."
}
```

### `stream_event` — Streaming Chunk (only with `includePartialMessages: true`)

```typescript
{
  type: "stream_event",
  event: {
    type: "content_block_delta",
    delta: { type: "text_delta", text: "chunk of text" },
    index: 0
  },
  parent_tool_use_id: null,
  uuid: "30e9adaa-...",
  session_id: "6fe830a1-..."
}
```

Other `event.type` values: `message_start`, `content_block_start`, `content_block_stop`, `message_delta`, `message_stop`.

### `tool_progress` — Tool Execution Progress

Emitted during long-running tool executions. **Not emitted for quick tools** (Glob, Read).

```typescript
{
  type: "tool_progress",
  tool_use_id: "toolu_01...",
  tool_name: "Bash",
  parent_tool_use_id: null,
  elapsed_time_seconds: 2.5,
  task_id: undefined,
  uuid: "...",
  session_id: "..."
}
```

### `result` — Query Complete

Final message. Two variants:

**Success**:
```typescript
{
  type: "result",
  subtype: "success",
  result: "The final text response",       // string
  total_cost_usd: 0.00272625,              // actual cost
  num_turns: 1,
  duration_ms: 2035,
  duration_api_ms: 1800,
  is_error: false,
  stop_reason: null,
  usage: {
    input_tokens: 10,
    cache_creation_input_tokens: 685,
    cache_read_input_tokens: 16050,
    output_tokens: 51,
    // ...
  },
  modelUsage: {
    "claude-haiku-4-5-20251001": {
      inputTokens: 10, outputTokens: 51,
      cacheReadInputTokens: 16050, cacheCreationInputTokens: 685,
      costUSD: 0.00272625, contextWindow: 200000, maxOutputTokens: 32000
    }
  },
  permission_denials: [],
  uuid: "...",
  session_id: "..."
}
```

**Error** (budget exceeded, max turns, execution error):
```typescript
{
  type: "result",
  subtype: "error_max_budget_usd",    // or "error_max_turns", "error_during_execution"
  errors: [],                          // string array (may be empty; subtype is the signal)
  total_cost_usd: 0.006,
  // ... same fields as success minus `result`
}
```

### `system` / `compact_boundary` — Context Compression

Emitted when the session's context is automatically compressed (long meetings).

```typescript
{
  type: "system",
  subtype: "compact_boundary",
  compact_metadata: { trigger: "auto", pre_tokens: 95000 },
  uuid: "...",
  session_id: "..."
}
```

Not triggered during smoke testing (sessions too short). Type confirmed in SDK definitions.

---

## Session File Architecture

### Location

Sessions are stored under `~/.claude/projects/<derived-dir-name>/`.

**Directory name derivation**: The project's absolute CWD path with **all non-alphanumeric characters replaced by hyphens**, prefixed with a hyphen.

```
CWD:  /Users/giladben-dor/dev/perush
Dir:  -Users-giladben-dor-dev-perush

CWD:  /Users/giladben-dor/dev/perush/_DELIBERATION-ROOM
Dir:  -Users-giladben-dor-dev-perush--DELIBERATION-ROOM
                                     ^^
                             (underscore → hyphen, slash → hyphen → double hyphen)
```

### File Structure

```
~/.claude/projects/-Users-giladben-dor-dev-perush/
  01781ec6-e111-414c-9721-130d1a7987b9.jsonl      ← session transcript
  0e099870-6218-4c6c-9f6c-d0231cbe75de.jsonl
  ...
```

- **No `sessions-index.json`** for SDK-created sessions.
- **No session directory** (no `<session-id>/` subdirectory) for simple sessions. Subdirectories appear only when subagents are used (the `Task` tool spawns them).

### JSONL Format

Each line is a JSON object. The first lines are internal bookkeeping:

```json
{"type":"queue-operation","operation":"enqueue","timestamp":"2026-02-27T15:01:24.792Z","sessionId":"01781ec6-..."}
{"type":"queue-operation","operation":"dequeue","timestamp":"2026-02-27T15:01:24.794Z","sessionId":"01781ec6-..."}
```

Followed by conversation messages:

```json
{"parentUuid":null,"isSidechain":false,"userType":"external","cwd":"...","sessionId":"...","version":"2.1.62","gitBranch":"main","type":"user","message":{"role":"user","content":[{"type":"text","text":"Respond with exactly: SMOKE_TEST_OK"}]},"uuid":"add2c919-...","timestamp":1772204484000}
{"parentUuid":"add2c919-...","type":"assistant","message":{"role":"assistant","content":[...]},...}
```

### `persistSession: false`

When set, no JSONL file is created. The session works in-memory only. Cannot be resumed after the query completes.

### `listSessions()` and `getSessionMessages()`

```typescript
// List all sessions for a project directory
const sessions = await listSessions({ dir: "/path/to/project" });
// Returns: Array<{ sessionId, summary, firstPrompt, lastModified, fileSize, gitBranch, cwd, customTitle }>

// Read messages from a specific session
const messages = await getSessionMessages("01781ec6-...", { dir: "/path/to/project" });
// Returns: Array<{ type, message, parent_tool_use_id, session_id, uuid }>
```

Both functions scan JSONL files directly. No index file required.

---

## The `Options` Interface — Full Reference

All options accepted by `query()`. Grouped by relevance to the Deliberation Room.

### Essential for Deliberation Room

| Option | Type | Description | Tested |
|--------|------|-------------|--------|
| `model` | `string` | Model ID (e.g., `"claude-opus-4-6"`, `"claude-sonnet-4-6"`) | Yes |
| `systemPrompt` | `string \| { type: "preset", preset: "claude_code", append?: string }` | System prompt. Persists across resumes. | Yes |
| `resume` | `string` | Session ID to resume. Full context retained. | Yes |
| `tools` | `string[] \| { type: "preset", preset: "claude_code" }` | Base tool set. `[]` = no tools. | Yes |
| `cwd` | `string` | Working directory for tool execution. | Yes |
| `includePartialMessages` | `boolean` | Enable streaming (`stream_event` messages). | Yes |
| `maxTurns` | `number` | Max agentic turns (safety cap). | Yes |
| `maxBudgetUsd` | `number` | Max cost in USD (safety cap). | Yes |
| `permissionMode` | `"bypassPermissions" \| ...` | Permission handling. | Yes |
| `allowDangerouslySkipPermissions` | `boolean` | Required with `bypassPermissions`. | Yes |
| `env` | `Record<string, string \| undefined>` | Environment variables for child process. **Must strip `CLAUDECODE`**. | Yes |
| `abortController` | `AbortController` | External abort signal. | Yes |

### Potentially Useful

| Option | Type | Description | Tested |
|--------|------|-------------|--------|
| `sessionId` | `string (UUID)` | Pre-set session ID instead of auto-generated. | Yes |
| `forkSession` | `boolean` | Fork on resume — new ID, retains context. | Yes |
| `persistSession` | `boolean` | `false` = no JSONL file created. Default `true`. | Yes |
| `outputFormat` | `{ type: "json_schema", schema: ... }` | Structured JSON output. Enforces schema. | No |
| `effort` | `"low" \| "medium" \| "high" \| "max"` | Reasoning depth. | No |
| `thinking` | `ThinkingConfig` | Control thinking behavior. `{ type: "disabled" }` turns it off. | No |
| `hooks` | `Record<HookEvent, HookCallbackMatcher[]>` | Programmatic hooks. | No |
| `agents` | `Record<string, AgentDefinition>` | Custom subagents for Task tool. | No |

### Not Needed

| Option | Type | Description |
|--------|------|-------------|
| `allowedTools` | `string[]` | Auto-allow tools (not restriction). Already using `bypassPermissions`. |
| `continue` | `boolean` | Continue most recent session. We use explicit `resume`. |
| `mcpServers` | `Record<string, McpServerConfig>` | MCP server configs. Not needed. |
| `sandbox` | `SandboxSettings` | Sandbox execution. Not needed for trusted agents. |
| `settingSources` | `SettingSource[]` | Which settings files to load. |
| `plugins` | `SdkPluginConfig[]` | Plugin configs. |

---

## The `Query` Interface — Methods

The `Query` object returned by `query()` implements `AsyncGenerator<SDKMessage, void>` plus SDK-specific methods:

| Method | Returns | Description | Use Case |
|--------|---------|-------------|----------|
| `interrupt()` | `Promise<void>` | Graceful stop. Loop terminates cleanly. | Stop mid-speech, rollback, shutdown. |
| `return()` | `Promise<void>` | AsyncGenerator close. Also terminates loop. | Alternative cleanup. |
| `throw()` | `Promise<void>` | AsyncGenerator error injection. | Not needed. |
| `setPermissionMode(mode)` | `Promise<void>` | Change permissions mid-session. | Not needed (using bypass). |
| `setModel(model)` | `Promise<void>` | Change model mid-session. | Not needed. |
| `initializationResult()` | `Promise<SDKControlInitializeResponse>` | Full init data. | Not needed (use init message). |
| `supportedCommands()` | `Promise<SlashCommand[]>` | List available skills. | Not needed. |

---

## Prompt Caching Observations

The smoke test confirmed significant prompt caching effects:

```
First query:
  cache_creation_input_tokens: 685
  cache_read_input_tokens: 16050    ← system prompt already cached
  input_tokens: 10                  ← only the user message
```

Even on the first query, ~16k tokens were cache-read (the Claude Code system prompt). By the second resume cycle, the entire system prompt + prior conversation will be cached, making Opus input costs competitive with Sonnet (as the design document predicted).

For a Deliberation Room meeting with a 5k-token persona prompt and growing conversation:
- **Cycle 1**: ~5k tokens cache-created (persona), ~16k cache-read (built-in prompt).
- **Cycle 2+**: ~21k+ tokens cache-read. Only the new cycle's prompt is fresh input.
- **Effective input cost with 90% caching**: Opus ($1.50/MTok cached) vs Sonnet ($0.30/MTok cached) — ~5x difference but on small absolute amounts (~$0.03 vs ~$0.005 per assessment).

---

## Discovered SDK Features Worth Considering

### 1. `outputFormat` for Structured Assessment/Selection Output

```typescript
const assessmentQuery = query({
  prompt: assessmentPrompt,
  options: {
    resume: agentSessionId,
    outputFormat: {
      type: "json_schema",
      schema: {
        type: "object",
        properties: {
          selfImportance: { type: "number", minimum: 1, maximum: 10 },
          humanImportance: { type: "number", minimum: 1, maximum: 10 },
          summary: { type: "string" }
        },
        required: ["selfImportance", "humanImportance", "summary"]
      }
    }
  }
});
```

This would replace manual JSON parsing with `.safeParse()` and eliminate malformed-JSON errors entirely. The SDK enforces the schema at the model level (constrained decoding). Worth testing with actual assessment prompts.

### 2. `effort` for Tiered Reasoning

```typescript
// Assessments: quick, structured, low reasoning needed
options: { effort: "low" }

// Speeches: deep analysis, tool use, high reasoning needed
options: { effort: "high" }  // or "max" for Opus 4.6
```

Could reduce assessment latency and cost without degrading quality (assessments are simple structured output).

### 3. `forkSession` for Simplified Session Recovery

Instead of the design's session recovery flow (create new session → feed transcript → capture), use:

```typescript
// Fork the last known-good session
const recoveredQuery = query({
  prompt: "Session recovered. Continue from where we left off.",
  options: { resume: lastGoodSessionId, forkSession: true }
});
```

This preserves the agent's full internal context from before the failure, not just the public transcript. The new session gets a different ID but all prior reasoning is retained.

### 4. `hooks` for Tool Use Logging

```typescript
options: {
  hooks: {
    PostToolUse: [{
      hooks: [async (input) => {
        logToolUse(input.tool_name, input.tool_input, input.tool_result);
        return { continue: true };
      }]
    }]
  }
}
```

Could replace the `tool_progress` message approach for tracking tool activity in the agent panel. More reliable (fires for every tool use, not just long-running ones).

---

## Operational Notes

### Environment Variable Stripping

When the server runs inside a Claude Code session (normal during development), child SDK processes fail. A `cleanEnvForSDK()` utility function should be the first thing implemented:

```typescript
export function cleanEnvForSDK(): Record<string, string | undefined> {
  const env = { ...process.env };
  delete env.CLAUDECODE;
  delete env.CLAUDE_CODE_ENTRYPOINT;
  delete env.CLAUDE_CODE_SSE_PORT;
  return env;
}
```

### Two Assistant Messages Per Response

When thinking is enabled (default for all models), each model response produces TWO `assistant` messages:
1. Thinking blocks only.
2. Text and/or tool_use blocks.

Speech extraction must filter for `type === "text"` content blocks, typically from the second assistant message. The `result.result` field contains the final text response directly — simpler for non-streaming extraction.

### Session File Location for `cwd` Set to Root Project

The Deliberation Room sets `cwd` to the root project dir (`../../` from `_DELIBERATION-ROOM/`). This means session files will live under:

```
~/.claude/projects/-Users-giladben-dor-dev-perush/
```

(The root project directory, not the `_DELIBERATION-ROOM` subdirectory.) This is the **same directory** used by manual Claude Code sessions on the root project. The move+symlink architecture for capturing session files into git worktrees remains valid — but the `getClaudeProjectDir()` function must use the corrected path derivation.

### Cost Baseline

From the smoke test (Haiku, trivial prompts):

| Query type | Cost |
|------------|------|
| Simple text response (Haiku) | $0.003 |
| With tool use (Haiku) | $0.005-0.01 |
| Budget-capped error | $0.006 |

For Opus with longer prompts (persona + conversation), expect 10-50x more per query. The design's per-cycle estimate of ~$0.50 (with Opus cached prefix) appears reasonable.
