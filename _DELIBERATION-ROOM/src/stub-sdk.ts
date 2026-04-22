/**
 * stub-sdk.ts — Drop-in replacement for @anthropic-ai/claude-agent-sdk.
 *
 * The caller embeds the expected response as a YAML block in the prompt:
 *
 *   ---stub-response---
 *   key: value
 *   ---end-stub-response---
 *
 * The stub parses this block and returns it as if the AI-Agent produced it,
 * emitting the same message types as the real SDK.
 *
 * Imports only from: types.ts (no other src/ imports)
 */

import { STUB_RESPONSE_DELAY_MS } from "./config";

// ---------------------------------------------------------------------------
// Types matching the real SDK interface (subset we use)
// ---------------------------------------------------------------------------

export interface StubSDKSystemMessage {
  type: "system";
  subtype: "init";
  session_id: string;
  model: string;
  cwd: string;
  tools: string[];
  uuid: string;
  [key: string]: unknown;
}

export interface StubSDKAssistantMessage {
  type: "assistant";
  message: {
    content: Array<{ type: "text"; text: string }>;
    role: "assistant";
    model: string;
    stop_reason: string;
  };
  parent_tool_use_id: null;
  uuid: string;
  session_id: string;
}

export interface StubSDKStreamEvent {
  type: "stream_event";
  event: {
    type: "content_block_delta";
    index: number;
    delta: { type: "text_delta"; text: string };
  };
  parent_tool_use_id: null;
  uuid: string;
  session_id: string;
}

export interface StubSDKResultSuccess {
  type: "result";
  subtype: "success";
  result: string;
  duration_ms: number;
  duration_api_ms: number;
  is_error: false;
  num_turns: number;
  stop_reason: string;
  total_cost_usd: number;
  usage: { input_tokens: number; output_tokens: number };
  modelUsage: Record<string, unknown>;
  permission_denials: never[];
  uuid: string;
  session_id: string;
}

export type StubSDKMessage =
  | StubSDKSystemMessage
  | StubSDKAssistantMessage
  | StubSDKStreamEvent
  | StubSDKResultSuccess;

export interface StubQueryOptions {
  title: string;
  resume?: string;
  model?: string;
  systemPrompt?: string;
  includePartialMessages?: boolean;
  maxTurns?: number;
  maxBudgetUsd?: number;
  cwd?: string;
  tools?: string[] | { type: "preset"; preset: "claude_code" };
  permissionMode?: string;
  allowDangerouslySkipPermissions?: boolean;
  [key: string]: unknown;
}

export interface StubQuery extends AsyncGenerator<StubSDKMessage, void> {
  /** Gracefully stop the query mid-response (matches real SDK) */
  interrupt(): Promise<void>;
}

// ---------------------------------------------------------------------------
// YAML-like parser for stub responses
// ---------------------------------------------------------------------------

const STUB_RESPONSE_START = "---stub-response---";
const STUB_RESPONSE_END = "---end-stub-response---";

/**
 * Extract the stub response block from a prompt string.
 * Returns the raw text between the markers, or null if not found.
 */
export function extractStubResponseBlock(prompt: string): string | null {
  const startIdx = prompt.indexOf(STUB_RESPONSE_START);
  if (startIdx === -1) return null;
  const contentStart = startIdx + STUB_RESPONSE_START.length;
  const endIdx = prompt.indexOf(STUB_RESPONSE_END, contentStart);
  if (endIdx === -1) return null;
  return prompt.slice(contentStart, endIdx).trim();
}

/**
 * Parse a simple YAML-like block into a key-value record.
 * Supports:
 *   - key: value (string)
 *   - key: 123 (number)
 *   - key: true/false (boolean)
 *   - key: "quoted string" (strips quotes)
 *   - Multiline text block starting with key: | (subsequent indented lines)
 */
export function parseStubYaml(text: string): Record<string, string | number | boolean> {
  const result: Record<string, string | number | boolean> = {};
  const lines = text.split("\n");

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^([\w\p{L}]+)\s*:\s*(.*)/u);
    if (match) {
      const key = match[1];
      let value = match[2].trim();

      // Multiline block: key: |
      if (value === "|") {
        const blockLines: string[] = [];
        i++;
        while (i < lines.length && (lines[i].startsWith("  ") || lines[i].trim() === "")) {
          blockLines.push(lines[i].replace(/^  /, ""));
          i++;
        }
        result[key] = blockLines.join("\n").trim();
        continue;
      }

      // Strip surrounding quotes and unescape \n
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1).replace(/\\n/g, "\n");
      }

      // Try number
      if (/^-?\d+(\.\d+)?$/.test(value)) {
        result[key] = Number(value);
      }
      // Try boolean
      else if (value === "true") {
        result[key] = true;
      } else if (value === "false") {
        result[key] = false;
      }
      // String
      else {
        result[key] = value;
      }
    }
    i++;
  }

  return result;
}

// ---------------------------------------------------------------------------
// Session ID generation
// ---------------------------------------------------------------------------

let sessionCounter = 0;

/** Generate a deterministic session ID for testing */
export function generateStubSessionId(): string {
  sessionCounter++;
  return `stub-session-${String(sessionCounter).padStart(4, "0")}`;
}

/** Reset session counter (for test isolation) */
export function resetStubSessionCounter(): void {
  sessionCounter = 0;
}

// ---------------------------------------------------------------------------
// UUID generation (simplified for stub)
// ---------------------------------------------------------------------------

let uuidCounter = 0;

function stubUuid(): string {
  uuidCounter++;
  return `00000000-0000-0000-0000-${String(uuidCounter).padStart(12, "0")}`;
}

// ---------------------------------------------------------------------------
// The stub query function
// ---------------------------------------------------------------------------

/** Map of resumed session IDs to their model/tools state */
const sessionRegistry = new Map<string, { model: string; tools: string[] }>();

/**
 * Stub replacement for the Agent SDK's `query()` function.
 *
 * Usage:
 * ```
 * const q = stubQuery({
 *   prompt: `Some prompt...\n\n---stub-response---\nkey: value\n---end-stub-response---`,
 *   options: { model: "claude-opus-4-7" }
 * });
 * for await (const msg of q) { ... }
 * ```
 */
export function stubQuery(params: {
  prompt: string;
  options: StubQueryOptions;
}): StubQuery {
  const { prompt, options } = params;
  let interrupted = false;

  // Determine session ID (resume existing or create new)
  const sessionId = options.resume || generateStubSessionId();
  const model = options.model || sessionRegistry.get(sessionId)?.model || "stub-model";

  // Register the session
  const tools = Array.isArray(options.tools) ? options.tools : ["Read", "Bash", "Grep", "Glob"];
  sessionRegistry.set(sessionId, { model, tools });

  // Parse the stub response from the prompt
  const responseBlock = extractStubResponseBlock(prompt);
  const responseData = responseBlock ? parseStubYaml(responseBlock) : {};

  // Build the text response
  // If there's a "text" key, use it as the response. Otherwise, JSON-stringify the parsed data.
  const responseText = typeof responseData.text === "string"
    ? responseData.text
    : JSON.stringify(responseData);

  const streaming = options.includePartialMessages ?? false;
  const delayMs = STUB_RESPONSE_DELAY_MS;

  // Create the async generator
  async function* generate(): AsyncGenerator<StubSDKMessage, void> {
    // 1. System init message
    const initMsg: StubSDKSystemMessage = {
      type: "system",
      subtype: "init",
      session_id: sessionId,
      model,
      cwd: options.cwd || process.cwd(),
      tools,
      uuid: stubUuid(),
      claude_code_version: "stub-0.0.0",
      apiKeySource: "user",
      permissionMode: (options.permissionMode as string) || "default",
      slash_commands: [],
      output_style: "default",
      skills: [],
      plugins: [],
      mcp_servers: [],
    };
    yield initMsg;

    if (interrupted) return;

    // 2. Streaming chunks (if enabled)
    if (streaming && responseText.length > 0) {
      // Split into chunks of ~20 chars
      const chunkSize = 20;
      for (let i = 0; i < responseText.length; i += chunkSize) {
        if (interrupted) break;
        const chunk = responseText.slice(i, i + chunkSize);
        const streamMsg: StubSDKStreamEvent = {
          type: "stream_event",
          event: {
            type: "content_block_delta",
            index: 0,
            delta: { type: "text_delta", text: chunk },
          },
          parent_tool_use_id: null,
          uuid: stubUuid(),
          session_id: sessionId,
        };
        yield streamMsg;
        if (delayMs > 0) {
          await new Promise(resolve => setTimeout(resolve, delayMs));
        }
      }
    }

    if (interrupted) return;

    // 3. Assistant message (the full response)
    const assistantMsg: StubSDKAssistantMessage = {
      type: "assistant",
      message: {
        content: [{ type: "text", text: responseText }],
        role: "assistant",
        model,
        stop_reason: "end_turn",
      },
      parent_tool_use_id: null,
      uuid: stubUuid(),
      session_id: sessionId,
    };
    yield assistantMsg;

    if (interrupted) return;

    // 4. Result message (always last)
    const resultMsg: StubSDKResultSuccess = {
      type: "result",
      subtype: "success",
      result: responseText,
      duration_ms: 100,
      duration_api_ms: 80,
      is_error: false,
      num_turns: 1,
      stop_reason: "end_turn",
      total_cost_usd: 0.001,
      usage: { input_tokens: 100, output_tokens: responseText.length },
      modelUsage: {},
      permission_denials: [],
      uuid: stubUuid(),
      session_id: sessionId,
    };
    yield resultMsg;
  }

  // Wrap the generator to add interrupt() (matching real SDK Query interface)
  const gen = generate();
  const query: StubQuery = {
    [Symbol.asyncIterator]() {
      return query;
    },
    async next(...args: [] | [undefined]) {
      if (interrupted) return { value: undefined, done: true } as any;
      return gen.next(...args);
    },
    async return(value?: void) {
      interrupted = true;
      return gen.return(value as void);
    },
    async throw(e?: unknown) {
      return gen.throw(e);
    },
    async [Symbol.asyncDispose]() {
      await this.return();
    },
    async interrupt() {
      interrupted = true;
    },
  };

  return query;
}

/**
 * Clear the session registry (for test isolation).
 */
export function resetStubState(): void {
  sessionRegistry.clear();
  resetStubSessionCounter();
  uuidCounter = 0;
}
