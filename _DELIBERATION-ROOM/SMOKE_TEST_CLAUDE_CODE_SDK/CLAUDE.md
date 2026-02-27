# Claude Agent SDK Smoke Test

You are running a **live smoke test** of the `@anthropic-ai/claude-agent-sdk` npm package. Your job is to verify that every SDK feature assumed by the Deliberation Room project (in the parent folder - see `../CLAUDE.md`) actually works as expected.

**Critical instruction**: As you work through each test, update **this file** (`CLAUDE.md`) with your findings. Mark each test with a status: `PASS`, `FAIL`, or `PARTIAL`. Add notes on any discrepancies, unexpected behavior, or API differences. The Director will review this file to understand what works and what doesn't.

## How to Work

1. First, run `bun init -y && bun add @anthropic-ai/claude-agent-sdk` to set up the project.
2. Create test files (e.g., `test-01-basic-query.ts`, `test-02-session-resume.ts`, etc.) for each test category.
3. Run each test with `bun run <file>`.
4. After each test, come back here and update the results section below.
5. If a test fails, note the exact error, the expected vs. actual behavior, and any workarounds.
6. Keep tests minimal — just enough to verify the feature works. Don't build a full application.

## Important: What We're Testing For

The Deliberation Room (`../CLAUDE.md`) makes specific assumptions about this SDK. Each test below corresponds to a concrete assumption from that design document. If a test reveals that the SDK works **differently** from what the design assumes, that's the most valuable finding — document it precisely.

## Environment

- Runtime: **Bun** (not Node)
- Working directory: this directory (`../SMOKE_TEST_CLAUDE_CODE_SDK/`)
- The SDK should authenticate via the user's existing `~/.claude` configuration or `ANTHROPIC_API_KEY` env var.
- Keep costs minimal — use short prompts, use Haiku where possible, and stop early when a feature is verified.

---

# Test Plan and Results

## Test 1: Package Installation and Basic Import

**What to verify**: The package `@anthropic-ai/claude-agent-sdk` can be installed via bun and its main export `query` can be imported.

**Design assumption**: `import { query } from "@anthropic-ai/claude-agent-sdk";`

**Test**: Import `query` and verify it's a function. Also check what other exports exist (`listSessions`, `tool`, `createSdkMcpServer`, etc.).

```
Status: PENDING
Notes:
```

## Test 2: Basic `query()` Call

**What to verify**: `query()` returns an async iterable of messages when called with `{ prompt, options }`.

**Design assumption**:
```typescript
const response = query({
  prompt: "some prompt",
  options: { model: "claude-opus-4-6", allowedTools: ["Read", "Bash", "Grep", "Glob"] }
});
for await (const msg of response) { ... }
```

**Test**: Call `query()` with a simple prompt (e.g., "What is 2+2?") and `model: "claude-haiku-4-5-20251001"` (cheapest). Collect all messages and log their types. Verify the async iterable pattern works.

**Key questions**:
- Does `query()` accept `{ prompt, options }` as shown?
- What is the return type — an `AsyncGenerator`?
- Are messages received one at a time via `for await`?

```
Status: PENDING
Notes:
```

## Test 3: System Init Message and Session ID

**What to verify**: The first message from `query()` is `{ type: "system", subtype: "init", session_id: string }`.

**Design assumption**:
```typescript
if (msg.type === "system" && msg.subtype === "init") {
  sessionId = msg.session_id;
}
```

**Test**: In the basic query from Test 2, check if the first message has `type === "system"` and `subtype === "init"`. Extract `session_id`. Log ALL fields on this message (the design also expects `tools`, `model`, `cwd`, etc.).

**Key questions**:
- Is `session_id` a UUID string?
- What other fields does the init message contain? (The SDK docs show: `uuid`, `session_id`, `agents`, `apiKeySource`, `betas`, `claude_code_version`, `cwd`, `tools`, `mcp_servers`, `model`, `permissionMode`, `slash_commands`, `output_style`, `skills`, `plugins`)
- Is this message always first?

```
Status: PENDING
Notes:
```

## Test 4: Session Resume

**What to verify**: A session can be resumed by passing `resume: sessionId` in subsequent `query()` calls. The resumed session has access to the full prior context.

**Design assumption**:
```typescript
// First query creates session
const q1 = query({ prompt: "Remember the word 'elephant'", options: { model: "..." } });
let sid; for await (const m of q1) { if (m.type === "system" && m.subtype === "init") sid = m.session_id; }

// Second query resumes
const q2 = query({ prompt: "What word did I ask you to remember?", options: { resume: sid } });
for await (const m of q2) { /* should mention "elephant" */ }
```

**Test**: Create a session, give it a unique secret word, end the query. Then resume with `resume: sessionId` and ask for the secret word.

**Key questions**:
- Does `resume` work as a direct option?
- Does the resumed session retain context from the first query?
- Does the resumed session emit a new `system/init` message with the same `session_id`?
- Or does it NOT emit a new init (we just keep using the old session ID)?
- Can we resume multiple times (3+ cycles)?

```
Status: PENDING
Notes:
```

## Test 5: `includePartialMessages` (Streaming)

**What to verify**: When `includePartialMessages: true` is set, the async iterable yields `stream_event` messages containing Anthropic API content block deltas.

**Design assumption**:
```typescript
const q = query({
  prompt: "Write a short paragraph",
  options: { includePartialMessages: true, model: "..." }
});
for await (const msg of q) {
  if (msg.type === "stream_event") {
    const event = msg.event;
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      process.stdout.write(event.delta.text); // streaming text
    }
  }
}
```

**Test**: Call `query()` with `includePartialMessages: true` and a prompt that will produce text output. Collect all `stream_event` messages. Verify:
- Messages with `type === "stream_event"` are produced.
- Each has an `event` field.
- `event.type === "content_block_delta"` exists.
- `event.delta.type === "text_delta"` exists.
- `event.delta.text` contains text chunks.

**Also check**: What other `event.type` values appear? (`message_start`, `content_block_start`, `content_block_stop`, `message_stop`, etc.)

```
Status: PENDING
Notes:
```

## Test 6: Tool Progress Messages

**What to verify**: When an agent uses tools, `tool_progress` messages are emitted.

**Design assumption**:
```typescript
if (message.type === "tool_progress") {
  // message.tool_name exists
  ws.send(JSON.stringify({ type: "tool-activity", agent: agentId, toolName: message.tool_name }));
}
```

**Test**: Call `query()` with a prompt that forces tool use (e.g., "List the files in the current directory" with `allowedTools: ["Bash", "Glob"]`). Check for messages with `type === "tool_progress"`.

**Key questions**:
- Does `tool_progress` have `tool_name` field?
- What other fields? (SDK docs show: `tool_use_id`, `tool_name`, `parent_tool_use_id`, `elapsed_time_seconds`, `task_id?`, `uuid`, `session_id`)
- When exactly are these emitted — during tool execution?

```
Status: PENDING
Notes:
```

## Test 7: `query.interrupt()`

**What to verify**: The `Query` object has an `interrupt()` method that stops the agent mid-response.

**Design assumption**:
```typescript
const speechQuery = query({ prompt: "Write a very long essay...", options: { resume: sid, includePartialMessages: true } });

setTimeout(async () => {
  await speechQuery.interrupt(); // stops immediately
}, 2000);

for await (const msg of speechQuery) { ... } // loop ends after interrupt
```

**Test**: Start a query that will produce a long response. Call `interrupt()` after receiving a few stream events. Verify:
- `interrupt()` is a method on the Query object.
- It returns a Promise.
- The `for await` loop terminates after interrupt.
- No error is thrown (graceful interruption).

```
Status: PENDING
Notes:
```

## Test 8: `maxTurns` Option

**What to verify**: The `maxTurns` option limits the number of agentic turns (tool-use round-trips).

**Design assumption**: `options: { maxTurns: 25, ... }` — used as a safety cap for speeches.

**Test**: Call `query()` with `maxTurns: 2` and a prompt that would normally require many tool turns (e.g., "Search for all TypeScript files, read each one, and summarize them"). Verify:
- The agent stops after 2 turns.
- What message indicates the turn limit was hit? (SDK docs suggest `result.subtype === "error_max_turns"`)

```
Status: PENDING
Notes:
```

## Test 9: `maxBudgetUsd` Option

**What to verify**: The `maxBudgetUsd` option caps the cost of a single query.

**Design assumption**: `options: { maxBudgetUsd: 2.00, ... }` — safety net per speech.

**Test**: Call `query()` with `maxBudgetUsd: 0.001` (very low) and a prompt that requires some output. Verify:
- The query stops when the budget is exceeded.
- What message indicates the budget limit was hit? (SDK docs suggest `result.subtype === "error_max_budget_usd"`)
- Is `total_cost_usd` available in the result message?

```
Status: PENDING
Notes:
```

## Test 10: `systemPrompt` Option

**What to verify**: A custom system prompt can be set via the `systemPrompt` option.

**Design assumption**: The Deliberation Room constructs system prompts from persona files and injects them into sessions. The design references `_base-prefix.md` + `_agents-prefix.md` + persona content as the system prompt.

**Test**: Call `query()` with `systemPrompt: "You are a pirate. Always respond in pirate speak."` and prompt "Hello, how are you?". Verify the response follows the system prompt.

**Key questions**:
- Does `systemPrompt` work as a plain string?
- Does the preset form `{ type: 'preset', preset: 'claude_code' }` work?
- Can we use `systemPrompt` together with `resume`?
- If we resume a session, does the original system prompt persist (or do we need to re-provide it)?

```
Status: PENDING
Notes:
```

## Test 11: `cwd` Option

**What to verify**: The `cwd` option sets the working directory for the agent's tool execution.

**Design assumption**: The Deliberation Room runs from the root project directory (`../../` - this smoke-test is at `../../_DELIBERATION-ROOM/SMOKE_TEST_CLAUDE_CODE_SDK/`), so agents need `cwd` set to access commentary files.

**Test**: Call `query()` with `cwd: "/tmp"` and ask the agent to list files. Verify it lists `/tmp` contents, not the current directory.

```
Status: PENDING
Notes:
```

## Test 12: `allowedTools` Control

**What to verify**: The `allowedTools` array restricts which tools the agent can use.

**Design assumption**: Participant-Agents get `["Read", "Bash", "Grep", "Glob"]`. The Conversation-Manager-Agent gets no tools (none).

**Test**:
1. Call `query()` with `allowedTools: ["Read"]` and ask to run a bash command. Verify it cannot use Bash.
2. Call `query()` with `allowedTools: []` (empty) and verify the agent has no tool access.

**Key question**: Can we set `allowedTools: []` to create a tool-less agent? Or does the SDK require at least one tool?

```
Status: PENDING
Notes:
```

## Test 13: `permissionMode` for Bypassing Permissions

**What to verify**: `permissionMode: "bypassPermissions"` allows tools without prompting.

**Design assumption**: The Deliberation Room needs agents to use tools autonomously (no human approval during automated cycles).

**Test**: Call `query()` with `permissionMode: "bypassPermissions"` and `allowDangerouslySkipPermissions: true`, and a prompt that uses tools. Verify it runs without permission prompts.

```
Status: PENDING
Notes:
```

## Test 14: Session Persistence on Disk

**What to verify**: After a `query()` call, session data is persisted as JSONL files under `~/.claude/projects/`.

**Design assumption**: Session files exist at `~/.claude/projects/-<project-path>/<session-uuid>.jsonl` and can be moved/symlinked.

**Test**: After running a basic query:
1. Check if `~/.claude/projects/` contains a directory matching this project's path.
2. Look for a `.jsonl` file matching the session ID.
3. Verify the file is JSONL format (one JSON object per line).
4. Check if `sessions-index.json` exists and contains the session entry.

**Key questions**:
- What is the exact directory naming convention? (Our assumption: path with slashes → hyphens, leading hyphen)
- Does the `persistSession: false` option prevent file creation?
- Can we use `persistSession: true` (default) and then safely move+symlink the files?

```
Status: PENDING
Notes:
```

## Test 15: `listSessions()` Function

**What to verify**: `listSessions()` returns session metadata without parsing JSONL files.

**Design assumption**: Not directly used in the Deliberation Room, but useful for verification.

**Test**: After creating a session, call `listSessions({ dir: process.cwd() })` and verify the session appears.

```
Status: PENDING
Notes:
```

## Test 16: `forkSession` Option

**What to verify**: `forkSession: true` creates a new session branch when resuming.

**Design assumption**: Not directly used, but potentially useful for session recovery (creating a new session from an existing one's context).

**Test**: Create a session, resume it with `forkSession: true`. Verify:
- A new `session_id` is generated (different from original).
- The new session has context from the original.
- The original session is not modified.

```
Status: PENDING
Notes:
```

## Test 17: Result Message Structure

**What to verify**: The final `result` message contains `total_cost_usd`, `usage`, `modelUsage`, and other metadata.

**Design assumption**: The Deliberation Room tracks `totalCostEstimate` per meeting, presumably from result messages.

**Test**: After a query completes, examine the result message.

**Key questions**:
- Does `result.total_cost_usd` provide actual cost?
- What does `result.usage` contain? (input_tokens, output_tokens, etc.)
- What does `result.modelUsage` contain?
- Is `result.result` a string with the final text response?

```
Status: PENDING
Notes:
```

## Test 18: Assistant Message Structure

**What to verify**: `assistant` messages contain the full response in `message.content[]` array.

**Design assumption**: The Deliberation Room needs to extract text content and potentially JSON from agent responses.

**Test**: Examine `assistant` type messages from a query. Verify:
- `message.content` is an array.
- Text blocks have `type: "text"` and `text: string`.
- Tool use blocks have `type: "tool_use"` with `name`, `input`, `id`.

```
Status: PENDING
Notes:
```

## Test 19: Multiple Parallel Sessions

**What to verify**: Multiple `query()` calls can run in parallel (or at least, multiple sessions can exist simultaneously).

**Design assumption**: The Deliberation Room runs assessment queries in parallel for all Participant-Agents.

**Test**: Create 3 sessions simultaneously (using `Promise.all` or parallel `for await` loops). Verify:
- All 3 get distinct session IDs.
- All 3 complete successfully.
- No interference between sessions.

**Key question**: Is there a limit on concurrent sessions?

```
Status: PENDING
Notes:
```

## Test 20: `AbortController` Integration

**What to verify**: The `abortController` option allows external abort of a query.

**Design assumption**: The Deliberation Room may need to abort queries (e.g., during rollback).

**Test**: Create a query with an `AbortController`, abort it after a short delay. Verify:
- The query terminates cleanly.
- No hanging processes.

**Key question**: Is `abortController` equivalent to `interrupt()`, or different?

```
Status: PENDING
Notes:
```

## Test 21: Context Compression (`compact_boundary`)

**What to verify**: Long sessions trigger automatic context compression, emitting `compact_boundary` messages.

**Design assumption**: The Deliberation Room relies on this for long meetings (10+ cycles).

**Test**: This is hard to trigger in a smoke test (requires a very long context). Instead:
- Check if the `SDKCompactBoundaryMessage` type exists conceptually.
- Verify the `system` message with `subtype: "compact_boundary"` is a documented possibility.
- Optionally: create a session with many resume cycles and very long prompts to try to trigger it.

**Note**: This may not be practically testable in a quick smoke test. Document whether it's documented behavior.

```
Status: PENDING
Notes:
```

## Test 22: Session Resume Across Multiple Cycles

**What to verify**: A session can be resumed many times (simulating the Deliberation Room's per-cycle pattern).

**Design assumption**: Each deliberation cycle does `query({ prompt: "...", options: { resume: sessionId } })`. A 15-cycle meeting = 15+ resumes per agent.

**Test**: Create a session, then resume it 5 times in sequence, each time adding a new piece of information. On the final resume, ask it to recall all 5 pieces. Verify complete context retention.

```
Status: PENDING
Notes:
```

## Test 23: Streaming + Resume Combined

**What to verify**: `includePartialMessages: true` works correctly with `resume: sessionId`.

**Design assumption**: Every cycle uses both — streaming for live speech delivery, resume for session continuity.

**Test**: Create a session with `includePartialMessages: true`. Resume it with both options. Verify stream events are emitted on the resumed query.

```
Status: PENDING
Notes:
```

## Test 24: `sessionId` Option (Pre-set Session ID)

**What to verify**: The `sessionId` option lets us specify a custom session ID instead of auto-generating one.

**Design assumption**: Not directly used, but could simplify session management.

**Test**: Call `query()` with `sessionId: "my-custom-id-12345"`. Verify the init message returns this exact ID.

```
Status: PENDING
Notes:
```

## Test 25: `close()` Method

**What to verify**: The Query object has a `close()` method for cleanup.

**Design assumption**: Needed for graceful shutdown when the server stops mid-meeting.

**Test**: Create a query, call `close()` on it. Verify:
- No error thrown.
- Resources are cleaned up.
- The `for await` loop terminates.

```
Status: PENDING
Notes:
```

---

# Summary of SDK Assumptions vs. Reality

After completing all tests, fill in this summary table:

| Feature | Design Assumption | SDK Reality | Status | Impact |
|---------|------------------|-------------|--------|--------|
| `query()` basic call | `query({ prompt, options })` | | | |
| Session ID from init | `msg.type === "system" && msg.subtype === "init"` → `msg.session_id` | | | |
| Session resume | `options: { resume: sessionId }` | | | |
| Streaming events | `msg.type === "stream_event"` → `msg.event.type === "content_block_delta"` | | | |
| Tool progress | `msg.type === "tool_progress"` → `msg.tool_name` | | | |
| `interrupt()` | `query.interrupt()` stops agent | | | |
| `maxTurns` | Limits tool turns | | | |
| `maxBudgetUsd` | Caps cost per query | | | |
| `systemPrompt` | Custom system prompt string | | | |
| `cwd` | Sets working directory | | | |
| `allowedTools` | Restricts available tools (including empty) | | | |
| `permissionMode` | `"bypassPermissions"` for autonomous use | | | |
| Session files on disk | JSONL at `~/.claude/projects/` | | | |
| Parallel sessions | Multiple concurrent `query()` calls | | | |
| `forkSession` | Fork session on resume | | | |
| Multi-resume cycles | 15+ resumes on same session | | | |
| `close()` cleanup | Graceful query termination | | | |

# Critical Discrepancies

List any differences between the Deliberation Room design and the actual SDK behavior that would require design changes:

1. (none yet — fill in as tests reveal issues)

# Additional Discoveries

Note any SDK features NOT assumed by the design that could be useful:

1. (none yet — fill in as tests reveal features)
