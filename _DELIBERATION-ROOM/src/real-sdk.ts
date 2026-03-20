/**
 * real-sdk.ts — Adapter wrapping the real @anthropic-ai/claude-agent-sdk.
 *
 * ## What this module does
 *
 * Wraps the Agent SDK's `query()` into `realQuery()`, which has the same
 * call signature as `stubQuery()` so the two are interchangeable. The
 * session-manager (`session-manager.ts`) selects which one to use based
 * on the `USE_STUB_SDK` config flag — this module is never imported directly
 * by other code.
 *
 * ## How sessions work (query → iterate → resume)
 *
 * The Agent SDK operates as a stateless request/response loop over persistent
 * server-side sessions. Each `realQuery()` call spawns a Claude Code
 * subprocess, sends it a prompt, and returns an **async iterator** of
 * messages. The caller drives the conversation by:
 *
 * 1. **Creating a session** — call `realQuery({ prompt, options })` without
 *    `resume`. Iterate the result; the first `{ type: "system", subtype: "init" }`
 *    message contains the `session_id`. The final `{ type: "result",
 *    subtype: "success" }` message contains the response text.
 *
 * 2. **Resuming a session** — call `realQuery({ prompt, options: { resume: sessionId } })`.
 *    The SDK reconnects to the existing session (preserving full context)
 *    and the new prompt is appended as the next user turn.
 *
 * 3. **Interrupting** — call `result.interrupt()` on the returned object to
 *    abort a running query mid-stream.
 *
 * Intermediate messages (thinking, text chunks, tool calls, tool results)
 * are yielded between init and result, enabling streaming and process tracing.
 *
 * ## Where the full orchestration lives
 *
 * This module is a thin I/O adapter. The session lifecycle (create, feed,
 * stream, interrupt, recover) is managed by `session-manager.ts`. The
 * deliberation loop that decides *what* to send is in `orchestrator.ts`.
 * For prompt construction and persona templates, see CLAUDE-TOPICS/PERSONAS.md.
 *
 * Imports from: config.ts, logs.ts
 */

import {Options, query as sdkQuery} from "@anthropic-ai/claude-agent-sdk";
import {SDK_ENV_VARS_TO_STRIP} from "./config";
import {logInfo, logError, logsConfig, logWarn} from "./logs.ts";

// ---------------------------------------------------------------------------
// Environment cleanup
// ---------------------------------------------------------------------------

/**
 * Strip env vars that prevent nested Claude Code sessions.
 *
 * When the deliberation server runs inside a Claude Code session (during
 * development), these vars cause child SDK processes to refuse to start.
 * Stripping them at import time ensures all subsequent SDK calls work.
 */
for (const key of SDK_ENV_VARS_TO_STRIP) {
  delete process.env[key];
}

let queryCounter = 0;

// ---------------------------------------------------------------------------
// Stub-response block stripping
// ---------------------------------------------------------------------------

const STUB_RESPONSE_START = "---stub-response---";
const STUB_RESPONSE_END = "---end-stub-response---";

/**
 * Remove stub response blocks from prompts.
 *
 * The orchestrator embeds `---stub-response---` blocks in prompts for the
 * stub SDK. When using the real SDK, these blocks are noise — strip them
 * so the LLM only sees the actual prompt.
 */
function stripStubResponseBlocks(prompt: string): string {
  let result = prompt;
  while (true) {
    const startIdx = result.indexOf(STUB_RESPONSE_START);
    if (startIdx === -1) break;
    const endIdx = result.indexOf(STUB_RESPONSE_END, startIdx);
    if (endIdx === -1) break;
    result =
      result.slice(0, startIdx).trimEnd() +
      result.slice(endIdx + STUB_RESPONSE_END.length);
  }
  return result.trim();
}

// ---------------------------------------------------------------------------
// Query function
// ---------------------------------------------------------------------------

/** Options accepted by realQuery — matches stubQuery's interface. */
export interface RealQueryOptions {
  title: string;
  resume?: string;
  model?: string;
  effort?: "low" | "medium" | "high";
  systemPrompt?: string;
  includePartialMessages?: boolean;
  maxTurns?: number;
  maxBudgetUsd?: number;
  cwd?: string;
  tools?: string[];
  permissionMode?: string;
  allowDangerouslySkipPermissions?: boolean;
  [key: string]: unknown;
}

/**
 * Query result — an async iterable of messages with interrupt() support.
 * Both stubQuery and realQuery return objects satisfying this interface.
 */
export interface SDKQueryResult {
  [Symbol.asyncIterator](): AsyncIterableIterator<any>;
  next(...args: [] | [undefined]): Promise<IteratorResult<any, void>>;
  return?(value?: void): Promise<IteratorResult<any, void>>;
  throw?(e?: unknown): Promise<IteratorResult<any, void>>;
  interrupt(): Promise<void>;
}

/**
 * Wrapper around the real Agent SDK's query() function.
 *
 * Call signature matches `stubQuery()` so the two are interchangeable.
 * Differences from the stub:
 *   - Strips `---stub-response---` blocks from prompts
 *   - Passes options through to the real SDK (systemPrompt, tools, etc.)
 *   - Always sets bypassPermissions (agents run autonomously)
 *   - Strips SDK_ENV_VARS_TO_STRIP from process.env (done at module load)
 *   - Logs every SDK call and response when logsConfig.sdk is enabled
 */
export function realQuery(params: {
  prompt: string;
  options: RealQueryOptions;
}): SDKQueryResult {
  const { prompt: rawPrompt, options } = params;

  // Strip stub response blocks from the prompt
  const prompt = stripStubResponseBlocks(rawPrompt);

  // Build SDK options
  const sdkOptions: Options = {};

  if (options.model) sdkOptions.model = options.model;
  if (options.effort) sdkOptions.effort = options.effort;
  if (options.resume) sdkOptions.resume = options.resume;
  if (options.systemPrompt) sdkOptions.systemPrompt = options.systemPrompt;
  if (options.includePartialMessages) sdkOptions.includePartialMessages = true;
  if (options.maxTurns != null) sdkOptions.maxTurns = options.maxTurns;
  if (options.maxBudgetUsd != null) sdkOptions.maxBudgetUsd = options.maxBudgetUsd;
  if (options.cwd) sdkOptions.cwd = options.cwd;

  // Tool configuration: `tools` restricts available tools (SDK-confirmed behavior)
  // `tools: []` = no tools (manager). `tools: ["Read", "Bash", ...]` = only those tools.
  if (options.tools) {
    sdkOptions.tools = options.tools;
  }

  // Always bypass permissions — agents run autonomously within the deliberation
  sdkOptions.permissionMode = "bypassPermissions";
  sdkOptions.allowDangerouslySkipPermissions = true;

  // Assign a query ID for correlating log lines
  const qid = ++queryCounter;

  // Log the request
  logInfo("sdk", `Q${qid} >>> ${JSON.stringify(options.title)}`, {
    options: {
      model: sdkOptions.model,
      effort: sdkOptions.effort,
      resume: sdkOptions.resume,
      includePartialMessages: sdkOptions.includePartialMessages,
      maxTurns: sdkOptions.maxTurns,
      maxBudgetUsd: sdkOptions.maxBudgetUsd,
      cwd: sdkOptions.cwd,
      tools: sdkOptions.tools,
    },
    systemPrompt: sdkOptions.systemPrompt ? `${"-".repeat(80)}\n\x1b[32m\n${sdkOptions.systemPrompt}\n\x1b[0m\n${"-".repeat(80)}` : undefined,
    prompt: `${"-".repeat(80)}\n\x1b[32m\n${prompt}\n\x1b[0m\n${"-".repeat(80)}`,
  });

  // Call the real SDK
  const q = sdkQuery({ prompt, options: sdkOptions });

  // Wrap the iterator to log every yielded message
  return wrapWithLogging(q as unknown as SDKQueryResult, qid, options.title);
}

/**
 * Wrap an SDKQueryResult to log every message it yields.
 * Preserves the interrupt() method and async iterable protocol.
 */
function wrapWithLogging(inner: SDKQueryResult, qid: number, title: string): SDKQueryResult {
  if (!logsConfig.sdk) return inner;

  let msgIndex = 0;

  const wrapper: SDKQueryResult = {
    [Symbol.asyncIterator]() {
      return wrapper;
    },

    async next(...args: [] | [undefined]) {
      const result = await inner.next(...args);
      if (!result.done) {
        const msg = result.value;
        const idx = ++msgIndex;

        // Log every message with its type/subtype for traceability
        const msgType = msg?.type ?? "unknown";
        const msgSubtype = msg?.subtype ? `.${msg.subtype}` : "";
        logInfo("sdk", `Q${qid} <<< ${JSON.stringify(title)} - MSG #${idx} (${msgType}${msgSubtype})`, msg);
      } else {
        logInfo("sdk", `Q${qid} <<< ${JSON.stringify(title)} - DONE (${msgIndex} messages total)`);
      }
      return result;
    },

    async return(value?: void) {
      logInfo("sdk", `Q${qid} <<< ${JSON.stringify(title)} - RETURN (iterator closed after ${msgIndex} messages)`);
      return inner.return ? inner.return(value) : { done: true as const, value: undefined };
    },

    async throw(e?: unknown) {
      logError("sdk", `Q${qid} <<< ${JSON.stringify(title)} - THROW`, { error: String(e) });
      return inner.throw ? inner.throw(e) : { done: true as const, value: undefined };
    },

    async interrupt() {
      logWarn("sdk", `Q${qid} <<< ${JSON.stringify(title)} - INTERRUPT (after ${msgIndex} messages)`);
      return inner.interrupt();
    },
  };

  return wrapper;
}

// Re-export for testing
export { stripStubResponseBlocks as _stripStubResponseBlocks };
