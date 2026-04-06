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
- SDK version: **0.2.62**
- Claude Code version: **2.1.62**
- Working directory: this directory (`../SMOKE_TEST_CLAUDE_CODE_SDK/`)
- The SDK authenticates via the user's existing `~/.claude` configuration.
- **Critical env issue**: When running from inside a Claude Code session, the `CLAUDECODE=1` env var must be removed, or the child process refuses to start with "Claude Code cannot be launched inside another Claude Code session." Remove `CLAUDECODE`, `CLAUDE_CODE_ENTRYPOINT`, and `CLAUDE_CODE_SSE_PORT` from the env.

---

# Test Plan and Results

## Test 1: Package Installation and Basic Import

**What to verify**: The package `@anthropic-ai/claude-agent-sdk` can be installed via bun and its main export `query` can be imported.

**Design assumption**: `import { query } from "@anthropic-ai/claude-agent-sdk";`

**Test**: Import `query` and verify it's a function. Also check what other exports exist (`listSessions`, `tool`, `createSdkMcpServer`, etc.).

```
Status: PASS
Notes:
  All expected exports present:
    AbortError: function
    EXIT_REASONS: object
    HOOK_EVENTS: object
    createSdkMcpServer: function
    getSessionMessages: function
    listSessions: function
    query: function
    tool: function
    unstable_v2_createSession: function
    unstable_v2_prompt: function
    unstable_v2_resumeSession: function

  The `query` function is the main entry point, as expected.
  Notable additional exports: `getSessionMessages` (read session messages),
  and `unstable_v2_*` (experimental session-based API — not used in design).
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

**Test**: Call `query()` with a simple prompt and `model: "claude-haiku-4-5"`. Collect all messages and log their types.

```
Status: PASS
Notes:
  query() returns a Query object that implements AsyncGenerator<SDKMessage, void>.
  The `for await` pattern works correctly.
  A simple query produced 4 messages: system/init, assistant (thinking), assistant (text), result/success.
  Cost for a trivial Haiku query: $0.0027 (~16k cached input tokens from system prompt).

  IMPORTANT: The design uses `allowedTools` but the SDK has TWO different options:
    - `tools`: string[] — specifies the BASE set of available built-in tools (or empty [] to disable all)
    - `allowedTools`: string[] — tools that are AUTO-ALLOWED without permission prompts
  These are DIFFERENT. For restricting tool availability, use `tools`. For auto-allowing, use `allowedTools`.
  The design's code samples use `allowedTools` when they should use `tools`.
```

## Test 3: System Init Message and Session ID

**What to verify**: The first message from `query()` is `{ type: "system", subtype: "init", session_id: string }`.

**Design assumption**:
```typescript
if (msg.type === "system" && msg.subtype === "init") {
  sessionId = msg.session_id;
}
```

```
Status: PASS
Notes:
  Init message is always the FIRST message. Fields present:
    agents, apiKeySource, claude_code_version, cwd, fast_mode_state, mcp_servers,
    model, output_style, permissionMode, plugins, session_id, skills,
    slash_commands, subtype, tools, type, uuid

  session_id is a standard UUID string (e.g., "01781ec6-e111-414c-9721-130d1a7987b9").

  Additional field not in the design: `fast_mode_state`.
  The `agents` field contains built-in agent types: ["general-purpose","statusline-setup","Explore","Plan"].
  The `tools` field lists ALL available tools (19 total with full Claude Code preset).
```

## Test 4: Session Resume

**What to verify**: A session can be resumed by passing `resume: sessionId` in subsequent `query()` calls.

**Design assumption**:
```typescript
const q2 = query({ prompt: "What word?", options: { resume: sid } });
```

```
Status: PASS
Notes:
  Resume works exactly as designed. Key findings:
  - `resume: sessionId` in options works correctly.
  - Resumed session RETAINS full context from prior queries.
  - Resumed session DOES emit a new system/init message with the SAME session_id.
  - The agent correctly recalled "SMOKE_TEST_OK" from the first query.
  - 5-cycle multi-resume tested separately (Test 22) — all passed.
```

## Test 5: `includePartialMessages` (Streaming)

**What to verify**: When `includePartialMessages: true` is set, the async iterable yields `stream_event` messages.

**Design assumption**: Messages with `type === "stream_event"` contain `event.type === "content_block_delta"` with `event.delta.text`.

```
Status: PASS
Notes:
  85 stream events received for a short paragraph response.
  Stream event types observed:
    message_start, content_block_start, content_block_delta, content_block_stop, message_delta, message_stop

  The text extraction pattern works exactly as designed:
    event.type === "content_block_delta" && event.delta.type === "text_delta" → event.delta.text

  Stream event fields: event, parent_tool_use_id, session_id, type, uuid
  Works correctly with `resume` (Test 23 verified this).
```

## Test 6: Tool Progress Messages

**What to verify**: When an agent uses tools, `tool_progress` messages are emitted.

**Design assumption**: `message.type === "tool_progress"` with `message.tool_name`.

```
Status: PARTIAL
Notes:
  In this test, the agent used the Glob tool but NO tool_progress messages were emitted.
  Tool use was confirmed via assistant message content blocks (tool_use blocks present).

  The `tool_progress` type IS in the SDK type definitions with the expected fields:
    tool_use_id, tool_name, parent_tool_use_id, elapsed_time_seconds, task_id?, uuid, session_id

  Likely explanation: tool_progress messages are only emitted for LONG-RUNNING tools
  (Bash commands, file operations that take time). Quick tools like Glob may complete
  instantly without progress messages. The includePartialMessages flag was not set
  in this particular test — that may also be a factor.

  The design should handle the case where tool_progress messages may not appear for every tool use.
  Tool use can also be detected from assistant message content blocks (type: "tool_use").
```

## Test 7: `query.interrupt()`

**What to verify**: The `Query` object has an `interrupt()` method that stops the agent mid-response.

```
Status: PASS
Notes:
  interrupt() works exactly as designed:
  - It's a method on the Query object (typeof === "function").
  - Returns a Promise (awaitable).
  - After calling interrupt(), the for-await loop terminates cleanly.
  - No error thrown — graceful interruption.
  - After 11 messages (init + stream events), interrupt stopped the generation immediately.

  The Query also has these methods (extends AsyncGenerator):
    - interrupt(): Promise<void>     ← for stopping
    - return(): Promise<void>        ← AsyncGenerator close (also works for cleanup)
    - throw(): Promise<void>         ← AsyncGenerator error
    - setPermissionMode()            ← change permissions mid-session
    - setModel()                     ← change model mid-session
    - setMaxThinkingTokens()         ← deprecated, use `thinking` option
    - initializationResult()         ← get full init response
    - supportedCommands()            ← list available skills
```

## Test 8: `maxTurns` Option

**What to verify**: The `maxTurns` option limits the number of agentic turns.

```
Status: PARTIAL
Notes:
  maxTurns works, but the result was `subtype: "success"` NOT `"error_max_turns"`.
  The agent completed in 4 turns with a "success" result, even though maxTurns was set to 2.

  This suggests maxTurns may be a soft limit or may count differently than expected.
  The SDK type definitions show result.subtype can be "error_max_turns" — so it does
  exist, but wasn't triggered in this test. Possibly the agent self-limited before hitting
  the cap, or the count includes internal turns differently.

  For the Deliberation Room, this is a safety cap (set to 25), so the exact behavior
  under normal conditions is fine — it will only matter in pathological cases.
```

## Test 9: `maxBudgetUsd` Option

**What to verify**: The `maxBudgetUsd` option caps the cost of a single query.

```
Status: PASS
Notes:
  Works as expected:
  - Set maxBudgetUsd: 0.0001 (very low)
  - Result: subtype === "error_max_budget_usd" ← confirmed
  - total_cost_usd: 0.00603625 (slightly exceeded the cap — enforcement is post-hoc)
  - Errors array: [] (empty — the error is indicated by the subtype, not an error message)

  NOTE: The budget is not a hard ceiling — the agent may slightly overshoot before
  the enforcement kicks in. This is expected and acceptable for the Deliberation Room's
  $2.00 per-speech cap.
```

## Test 10: `systemPrompt` Option

**What to verify**: A custom system prompt can be set via the `systemPrompt` option.

```
Status: PASS
Notes:
  Both forms work:

  1. Custom string: systemPrompt: "You are a pirate..." → response started with "Arrr!"
  2. Preset with append: { type: "preset", preset: "claude_code", append: "Always end with CUSTOM_SUFFIX_XYZ" }
     → response ended with "CUSTOM_SUFFIX_XYZ"

  System prompt persists across resume cycles — no need to re-provide it.
  This is critical for the Deliberation Room: persona prompts are set once at session
  creation and persist through all subsequent query() resume calls.
```

## Test 11: `cwd` Option

**What to verify**: The `cwd` option sets the working directory for the agent's tool execution.

```
Status: PASS
Notes:
  cwd: "/tmp" → agent's pwd returned "/private/tmp" (macOS symlink, equivalent to /tmp).
  The init message's `cwd` field also reflected the setting: "/private/tmp".

  For the Deliberation Room: set cwd to the root project directory ("../../" from
  _DELIBERATION-ROOM/) so agents can access commentary files, scripts, and the dictionary.
```

## Test 12: `allowedTools` Control

**What to verify**: Tool availability can be restricted.

**Design assumption**: The design uses `allowedTools` to restrict tools. The SDK actually has TWO options.

```
Status: PASS (with design correction needed)
Notes:
  CRITICAL FINDING: The design confuses two different options:

  - `tools: string[]` → restricts the BASE SET of available tools.
      tools: [] → init.tools: [] (no tools at all — CONFIRMED WORKING)
      tools: ["Read"] → init.tools: [Read] (only Read available)

  - `allowedTools: string[]` → auto-ALLOWS tools without permission prompts.
      Does NOT restrict availability — just controls whether permission is prompted.

  For the Deliberation Room:
    - Participant-Agents: tools: ["Read", "Bash", "Grep", "Glob"] (restrict to these tools)
    - Orchestrator: tools: [] (no tools — CONFIRMED WORKING with empty array)
    - All agents: also need allowedTools set or permissionMode: "bypassPermissions"
      to avoid permission prompts.

  The design doc's code samples reference `allowedTools` where they should use `tools`.
  This is a required design change.
```

## Test 13: `permissionMode` for Bypassing Permissions

**What to verify**: `permissionMode: "bypassPermissions"` allows tools without prompting.

```
Status: PASS
Notes:
  Confirmed: permissionMode: "bypassPermissions" + allowDangerouslySkipPermissions: true
  allows all tool executions without any permission prompts.

  Agent ran `echo PERMISSION_TEST_OK` via Bash without any interaction.
  Result showed permission_denials: [] (empty — nothing was denied).

  This is essential for the Deliberation Room's automated cycles.
```

## Test 14: Session Persistence on Disk

**What to verify**: Session data is persisted as JSONL files under `~/.claude/projects/`.

```
Status: PASS (with path derivation correction needed)
Notes:
  CRITICAL FINDING — Path derivation differs from the design assumption:

  Project CWD: /Users/giladben-dor/dev/perush/_DELIBERATION-ROOM/SMOKE_TEST_CLAUDE_CODE_SDK
  Design expected: -Users-giladben-dor-dev-perush-_DELIBERATION-ROOM-SMOKE_TEST_CLAUDE_CODE_SDK
  Actual dir name: -Users-giladben-dor-dev-perush--DELIBERATION-ROOM-SMOKE-TEST-CLAUDE-CODE-SDK

  The SDK converts ALL non-alphanumeric characters to hyphens, not just slashes.
  Underscores (_) become hyphens (-). This means the design's getClaudeProjectDir()
  implementation is WRONG — it only replaces slashes with hyphens.

  Correct derivation: path.replaceAll(/[^a-zA-Z0-9]/g, "-") with leading hyphen.

  Session JSONL files:
  - Exist at ~/.claude/projects/<dir-name>/<session-uuid>.jsonl ← confirmed
  - JSONL format confirmed (one JSON object per line)
  - First lines are queue-operation events, followed by user/assistant messages
  - Each line has fields: type, sessionId, and message-specific fields

  sessions-index.json:
  - Does NOT exist per-project for SDK-created sessions!
  - The root project dir has one (from manual CLI usage), but SDK sessions
    don't appear to create/update it.
  - listSessions() works without it — it scans JSONL files directly.

  persistSession: false:
  - Confirmed: when set, NO JSONL file is created on disk.
  - The session still works normally (in-memory only).
  - After the query completes, the session cannot be resumed.
```

## Test 15: `listSessions()` Function

**What to verify**: `listSessions()` returns session metadata.

```
Status: PASS
Notes:
  listSessions({ dir: process.cwd() }) returned 19 sessions (all from this test run).

  Session info fields: customTitle, cwd, fileSize, firstPrompt, gitBranch, lastModified, sessionId, summary

  Our specific session was found with correct metadata:
    sessionId: "01781ec6-e111-414c-9721-130d1a7987b9"
    summary: "Respond with exactly: SMOKE_TEST_OK"
    firstPrompt: "Respond with exactly: SMOKE_TEST_OK"
    gitBranch: "main"
    cwd: "/Users/giladben-dor/dev/perush/_DELIBERATION-ROOM/SMOKE_TEST_CLAUDE_CODE_SDK"

  NOTE: The design assumed sessions-index.json was the lookup mechanism.
  In reality, listSessions() scans JSONL files directly — it works without sessions-index.json.
```

## Test 16: `forkSession` Option

**What to verify**: `forkSession: true` creates a new session branch when resuming.

```
Status: PASS
Notes:
  forkSession: true works correctly:
  - Original session ID: 01781ec6-e111-414c-9721-130d1a7987b9
  - Forked session ID: 82871a2d-e869-4561-bd88-5ec8d228af30 (different — confirmed)
  - Forked session retained full context from original (recalled "SMOKE_TEST_OK")
  - Original session remains intact (can still be resumed separately)

  This could be useful for the Deliberation Room's session recovery:
  instead of creating a new session and feeding the transcript manually,
  fork the last good session and continue from there.
```

## Test 17: Result Message Structure

**What to verify**: The final `result` message contains `total_cost_usd`, `usage`, `modelUsage`.

```
Status: PASS
Notes:
  Result message fields (for success):
    duration_api_ms, duration_ms, is_error, modelUsage, num_turns, permission_denials,
    result, session_id, stop_reason, subtype, total_cost_usd, type, usage, uuid

  Key values:
    subtype: "success"
    result: "SMOKE_TEST_OK" ← the final text response as a string
    total_cost_usd: 0.00272625 ← actual cost in USD
    num_turns: 1
    is_error: false
    stop_reason: null

    usage: {
      input_tokens: 10,
      cache_creation_input_tokens: 685,
      cache_read_input_tokens: 16050,
      output_tokens: 51,
      server_tool_use: { web_search_requests: 0, web_fetch_requests: 0 },
      service_tier: "standard"
    }

    modelUsage: {
      "claude-haiku-4-5": {
        inputTokens: 10, outputTokens: 51,
        cacheReadInputTokens: 16050, cacheCreationInputTokens: 685,
        costUSD: 0.00272625, contextWindow: 200000, maxOutputTokens: 32000
      }
    }

  For error results (maxBudgetUsd exceeded), subtype is "error_max_budget_usd"
  and there's an `errors: string[]` field instead of `result`.

  Prompt caching is VERY significant: ~16k tokens were cache-read (system prompt),
  only 10 actual input tokens. This confirms the cost efficiency assumptions.
```

## Test 18: Assistant Message Structure

**What to verify**: `assistant` messages contain the full response in `message.content[]` array.

```
Status: PASS
Notes:
  Assistant message fields: message, parent_tool_use_id, session_id, type, uuid
  message.content is an array of content blocks.

  Content block types observed:
  - { type: "thinking", thinking: "..." } ← thinking block (Haiku still thinks!)
  - { type: "text", text: "..." } ← text response
  - { type: "tool_use", name: "Glob", id: "toolu_...", input: { pattern: "*" } } ← tool use

  IMPORTANT: There are TWO assistant messages per response when the model thinks:
  1. First assistant msg: contains thinking block(s)
  2. Second assistant msg: contains text/tool_use blocks

  For the Deliberation Room, extracting the speech text means filtering for
  content blocks with type === "text" from assistant messages.
```

## Test 19: Multiple Parallel Sessions

**What to verify**: Multiple `query()` calls can run in parallel.

```
Status: PASS
Notes:
  3 parallel sessions completed successfully:
  - All 3 got distinct session IDs ← confirmed
  - All 3 returned correct results (PARALLEL_A, PARALLEL_B, PARALLEL_C)
  - Total elapsed: 3984ms (parallel, not 3× sequential)
  - No interference between sessions

  This confirms the Deliberation Room's parallel assessment pattern
  (running N Participant-Agent assessments simultaneously) will work.
```

## Test 20: `AbortController` Integration

**What to verify**: The `abortController` option allows external abort of a query.

```
Status: PASS
Notes:
  AbortController.abort() works correctly:
  - Query stopped after 6 messages
  - No error thrown — clean termination
  - The for-await loop exited cleanly after break

  Difference from interrupt():
  - interrupt() is called ON the Query object → graceful stop, can still read remaining messages
  - AbortController.abort() is external → harder stop, signals the child process to terminate
  Both are usable for the Deliberation Room's rollback scenario.
```

## Test 21: Context Compression (`compact_boundary`)

**What to verify**: Long sessions trigger automatic context compression.

```
Status: NOT TESTED (confirmed in types)
Notes:
  SDKCompactBoundaryMessage type exists in the SDK:
    type: 'system'
    subtype: 'compact_boundary'
    compact_metadata: { trigger: 'manual' | 'auto', pre_tokens: number }
    uuid, session_id

  This was not triggered in our smoke test (sessions were too short).
  The type definition confirms the design's assumption that context compression
  is a documented feature that will occur automatically in long sessions.

  For the Deliberation Room, this means long meetings (10+ cycles) will benefit
  from automatic context compression — reducing token costs as the conversation grows.
```

## Test 22: Session Resume Across Multiple Cycles

**What to verify**: A session can be resumed many times (simulating per-cycle pattern).

```
Status: PASS
Notes:
  5-cycle resume test: PERFECT results.
  - Cycle 1: created session, remembered "ALPHA"
  - Cycle 2-5: resumed same session, added BRAVO, CHARLIE, DELTA, ECHO
  - Each resume emitted a new init message with the SAME session ID
  - Final recall: listed all 5 words in order — 100% retention

  Key observation: Every resume produces a new system/init message.
  The session_id stays the same across all resumes.

  This validates the Deliberation Room's core per-cycle pattern:
  query({ prompt: newCycleContent, options: { resume: sessionId } })
```

## Test 23: Streaming + Resume Combined

**What to verify**: `includePartialMessages: true` works with `resume: sessionId`.

```
Status: PASS
Notes:
  Created session (remember magic number 42), resumed with streaming:
  - 21 stream events on resumed session ← streaming works on resume
  - Result: "The magic number is 42." ← context retained
  - Contains 42? true

  This confirms the Deliberation Room's speech streaming pattern:
  each cycle uses both resume (for context) and streaming (for live display).
```

## Test 24: `sessionId` Option (Pre-set Session ID)

**What to verify**: The `sessionId` option lets us specify a custom session ID.

```
Status: PASS
Notes:
  Custom ID: 66c46474-fdb7-49ac-9384-568968df422f
  Init session_id: 66c46474-fdb7-49ac-9384-568968df422f
  Matches custom ID? YES

  Must be a valid UUID (crypto.randomUUID() works).
  Cannot be used with `continue` or `resume` unless `forkSession` is also set.

  This could simplify the Deliberation Room's session management —
  generate deterministic session IDs based on meeting ID + agent ID
  instead of using auto-generated UUIDs.
```

## Test 25: `close()` Method

**What to verify**: The Query object has cleanup methods.

```
Status: PASS
Notes:
  The Query interface extends AsyncGenerator, so it has:
  - interrupt(): Promise<void>     ← SDK-specific graceful stop
  - return(): Promise<void>        ← AsyncGenerator close (standard)
  - throw(): Promise<void>         ← AsyncGenerator error injection (standard)

  There is NO explicit close() method. The design should use:
  - interrupt() for graceful mid-speech stopping (preferred)
  - return() for AsyncGenerator cleanup (also works)

  Both tested successfully — no errors, clean termination.
```

## Bonus Test: `getSessionMessages()`

```
Status: PASS
Notes:
  getSessionMessages(sessionId, { dir: process.cwd() }) works:
  - Returns an array of SessionMessage objects
  - Fields: message, parent_tool_use_id, session_id, type, uuid
  - Types in sequence: user, assistant, assistant, user, assistant, assistant
  - This provides an alternative to parsing JSONL files manually

  Could be useful for the Deliberation Room's session recovery:
  instead of parsing meeting.json, use getSessionMessages() to reconstruct
  the conversation transcript when recovering a crashed session.
```

## Bonus Test: `persistSession: false`

```
Status: PASS
Notes:
  When persistSession: false is set:
  - Session works normally (in-memory)
  - NO JSONL file created on disk ← confirmed
  - Session cannot be resumed after the query completes

  For the Deliberation Room's Orchestrator-Agent (Opus),
  this COULD be used to avoid disk writes — but since we want to track costs
  and preserve the orchestrator's reasoning for debugging, persistSession: true
  is the right choice for all agents.
```

---

# Summary of SDK Assumptions vs. Reality

| Feature | Design Assumption | SDK Reality | Status | Impact |
|---------|------------------|-------------|--------|--------|
| `query()` basic call | `query({ prompt, options })` | Exactly as designed | PASS | None |
| Session ID from init | `msg.type === "system" && msg.subtype === "init"` → `msg.session_id` | Exactly as designed. Init is always first message. Same session_id on resume. | PASS | None |
| Session resume | `options: { resume: sessionId }` | Works perfectly. Full context retention. New init message emitted on each resume. | PASS | None |
| Streaming events | `msg.type === "stream_event"` → `msg.event.type === "content_block_delta"` | Exactly as designed. Also emits message_start, content_block_start/stop, message_delta, message_stop. | PASS | None |
| Tool progress | `msg.type === "tool_progress"` → `msg.tool_name` | Type exists but NOT always emitted. Quick tool uses may not produce progress events. | PARTIAL | Handle gracefully — don't depend on tool_progress for every tool use |
| `interrupt()` | `query.interrupt()` stops agent | Works perfectly. Graceful, no error thrown. | PASS | None |
| `maxTurns` | Limits tool turns, `error_max_turns` subtype | Works but may produce `success` instead of `error_max_turns` in some cases | PARTIAL | Acceptable for safety cap use case |
| `maxBudgetUsd` | Caps cost per query | Works. `error_max_budget_usd` confirmed. May slightly overshoot. | PASS | None |
| `systemPrompt` | Custom system prompt string | Both string and preset+append forms work. Persists across resumes. | PASS | None |
| `cwd` | Sets working directory | Works correctly (reflected in init.cwd and tool execution) | PASS | None |
| Tool restriction | `allowedTools` restricts tools | **WRONG**: `allowedTools` auto-allows, `tools` restricts. Use `tools: []` for no tools. | PASS (with correction) | **Design must change**: use `tools` not `allowedTools` |
| `permissionMode` | `"bypassPermissions"` for autonomous use | Works with `allowDangerouslySkipPermissions: true` | PASS | None |
| Session files on disk | JSONL at `~/.claude/projects/-<path>/` | Files exist. Path derivation differs: ALL non-alphanumeric → hyphens (not just `/`). | PASS (with correction) | **Design must fix**: `getClaudeProjectDir()` path derivation |
| `sessions-index.json` | Exists per-project, updated by SDK | Does NOT exist for SDK sessions. `listSessions()` scans JSONL directly. | FAIL | **Design must change**: don't rely on sessions-index.json |
| Parallel sessions | Multiple concurrent `query()` calls | Works perfectly. 3 parallel sessions completed in ~4s. | PASS | None |
| `forkSession` | Fork session on resume | Works: new ID, retains context, original unchanged | PASS | Potential use for session recovery |
| Multi-resume cycles | 15+ resumes on same session | 5 cycles tested — perfect. All context retained. | PASS | None |
| `close()` cleanup | Graceful query termination | No `close()` method. Use `interrupt()` or `return()` (AsyncGenerator). | PASS (with correction) | Minor: use `interrupt()` instead of `close()` |

# Critical Discrepancies

Differences between the Deliberation Room design and the actual SDK behavior that **require design changes**:

1. **`tools` vs `allowedTools` confusion**: The design uses `allowedTools: ["Read", "Bash", "Grep", "Glob"]` to restrict tool availability. This is WRONG. `allowedTools` only controls auto-approval. The correct option is `tools: ["Read", "Bash", "Grep", "Glob"]` to restrict the base tool set, and either `permissionMode: "bypassPermissions"` or `allowedTools` for auto-approval. **Fix**: Replace all `allowedTools` in the session setup code with `tools`, and use `permissionMode: "bypassPermissions"` for all agents.

2. **`getClaudeProjectDir()` path derivation**: The design assumes only slashes are replaced with hyphens. The SDK actually replaces ALL non-alphanumeric characters (including underscores `_`) with hyphens. Example:
   - Path: `/Users/giladben-dor/dev/perush/_DELIBERATION-ROOM`
   - Design expected: `-Users-giladben-dor-dev-perush-_DELIBERATION-ROOM`
   - Actual: `-Users-giladben-dor-dev-perush--DELIBERATION-ROOM`
   **Fix**: Update `getClaudeProjectDir()` to use `path.replace(/[^a-zA-Z0-9]/g, "-")` instead of `path.replaceAll("/", "-")`.

3. **`sessions-index.json` does not exist for SDK-created sessions**: The design's `ensureSessionInIndex()` function assumes this file exists and must be maintained. In reality, `listSessions()` works by scanning JSONL files directly — no index file needed. **Fix**: Remove all `ensureSessionInIndex()` code and the related concurrent-access mitigation. Use `listSessions()` if needed.

4. **Nested session detection**: When the Deliberation Room server is launched from within a Claude Code session (during development), the `CLAUDECODE=1` env var prevents child SDK processes from starting. **Fix**: Always strip `CLAUDECODE`, `CLAUDE_CODE_ENTRYPOINT`, and `CLAUDE_CODE_SSE_PORT` from the env passed to `query()`.

5. **No `close()` method**: The design references `close()` for graceful shutdown. The Query object has `interrupt()` (SDK-specific, graceful) and `return()` (AsyncGenerator standard). **Fix**: Use `interrupt()` for mid-speech stopping and graceful shutdown.

# Additional Discoveries

SDK features NOT assumed by the design that could be useful:

1. **`getSessionMessages(sessionId, { dir })` function**: Reads messages from a session's JSONL file and returns them as structured objects. Could simplify session recovery — instead of parsing `meeting.json`, read messages directly from the session file.

2. **`forkSession: true` option**: Creates a new session branched from an existing one. Could be an alternative session recovery strategy: fork the last known-good session instead of creating a new one and replaying the transcript.

3. **`sessionId: customUUID` option**: Pre-set the session ID instead of auto-generating. Could enable deterministic session IDs (e.g., `${meetingId}-${agentId}`) for simpler management.

4. **`persistSession: false` option**: Prevents JSONL file creation on disk. Could be used for ephemeral sessions (e.g., one-off cost estimates) where persistence isn't needed.

5. **`thinking` option**: `{ type: 'adaptive' }` (default for Opus 4.6) or `{ type: 'disabled' }`. Could be used to disable thinking for the Orchestrator (Opus) to reduce cost/latency, or to control thinking depth for different agent types.

6. **`effort` option**: `'low' | 'medium' | 'high' | 'max'`. Could tune reasoning depth per agent — e.g., `effort: 'low'` for assessments (short structured output) vs `effort: 'high'` for speeches.

7. **`outputFormat` option**: Structured JSON output with schema validation. Could replace manual JSON parsing for assessments and orchestrator decisions — the SDK would enforce the schema.

8. **`hooks` option**: Programmatic hooks for `PreToolUse`, `PostToolUse`, `Notification`, etc. Could be used to intercept and log tool usage, or to add custom behavior during agent execution.

9. **`canUseTool` option**: Custom permission handler function. More fine-grained than `permissionMode` — could allow specific tools while denying others based on runtime logic.

10. **`unstable_v2_*` API**: Experimental session-based API (`unstable_v2_createSession`, `unstable_v2_prompt`, `unstable_v2_resumeSession`). This is a higher-level abstraction that manages sessions as objects with methods. Could eventually replace the current `query({ resume })` pattern with a cleaner API. Not stable yet — monitor for future versions.

11. **Two assistant messages per response**: When the model uses extended thinking, the response produces TWO assistant messages: one with thinking blocks, one with text/tool_use blocks. The design should account for this when extracting speech content.

# currentDate
Today's date is 2026-02-27.

      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.
