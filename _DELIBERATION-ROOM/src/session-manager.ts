/**
 * session-manager.ts — Agent discovery, template resolution, and session lifecycle.
 *
 * Manages the persistent Agent SDK sessions (or stub sessions) for all
 * AI-Agents in a meeting. Handles:
 *   - Discovering available agents from participant-agents/*.md
 *   - Resolving template markers in persona files
 *   - Creating, feeding, and streaming sessions
 *   - Extracting structured data (assessments, selections) from responses
 *
 * Imports from: types.ts, config.ts, context.ts, stub-sdk.ts
 */

import { readdir, readFile } from "fs/promises";
import { join, basename } from "path";
import matter from "gray-matter";
// @ts-ignore — no type declarations for preprocess
import preprocessLib from "preprocess";
import type { AgentDefinition, AgentId, ProcessEventKind } from "./types";
import { AgentDefinitionSchema } from "./types";
import {
  PARTICIPANT_AGENTS_DIR,
  PROMPTS_DIR,
  ROOT_CLAUDE_MD,
  ORCHESTRATOR_FILE,
  PARTICIPANT_MODEL,
  ORCHESTRATOR_MODEL,
  effortForModel,
  PARTICIPANT_TOOLS,
  ORCHESTRATOR_TOOLS,
  MAX_BUDGET_PER_SPEECH,
  MAX_TURNS_SESSION_INIT,
  MAX_TURNS_ASSESSMENT,
  MAX_TURNS_SPEECH,
  USE_STUB_SDK,
  ROOT_PROJECT_DIR,

} from "./config";
import {
  stubQuery,
  type StubQuery,
} from "./stub-sdk";
import type { SDKQueryResult } from "./real-sdk";
import {logInfo, logWarn, logError} from "./logs.ts";

// ---------------------------------------------------------------------------
// Agent Discovery
// ---------------------------------------------------------------------------

/** Cached agent definitions (populated on first call to discoverAgents) */
let cachedAgents: AgentDefinition[] | null = null;

/**
 * Discover all available Participant-Agents by scanning participant-agents/*.md.
 * Excludes underscore-prefixed files (shared prefixes and orchestrator).
 * Results are cached for the server's lifetime.
 */
export async function discoverAgents(): Promise<AgentDefinition[]> {
  if (cachedAgents) return cachedAgents;

  logInfo("session-manager", `discoverAgents: scanning ${PARTICIPANT_AGENTS_DIR}`);
  const files = await readdir(PARTICIPANT_AGENTS_DIR);
  const agentFiles = files.filter(f => f.endsWith(".md") && !f.startsWith("_"));

  const agents: AgentDefinition[] = [];

  for (const file of agentFiles) {
    const filePath = join(PARTICIPANT_AGENTS_DIR, file);
    const raw = await readFile(filePath, "utf-8");
    const { data: frontmatter, content } = matter(raw);

    const id = basename(file, ".md");

    // Extract roleTitle from first # heading: e.g., "# The Dictionary Purist (המילונאי)"
    const headingMatch = content.match(/^#\s+.*?\(([^)]+)\)/m);
    const roleTitle = headingMatch?.[1] ?? "";

    // Separate structural fields from dynamic frontmatter data
    const { englishName, hebrewName, ...restFrontmatter } = frontmatter;
    const frontmatterData: Record<string, string> = {};
    for (const [key, value] of Object.entries(restFrontmatter)) {
      if (typeof value === "string") {
        frontmatterData[key] = value;
      }
    }

    const agent = AgentDefinitionSchema.parse({
      id,
      englishName: englishName ?? "",
      hebrewName: hebrewName ?? "",
      roleTitle,
      filePath,
      frontmatterData,
    });

    agents.push(agent);
  }

  // Sort alphabetically by ID for deterministic ordering
  agents.sort((a, b) => a.id.localeCompare(b.id));
  cachedAgents = agents;
  logInfo("session-manager", `discoverAgents: found [${agents.map(a => a.id).join(", ")}]`);
  return agents;
}

/** Return cached agent definitions (throws if discoverAgents hasn't been called). */
export function getAgentDefinitions(): AgentDefinition[] {
  if (!cachedAgents) throw new Error("discoverAgents() must be called first");
  return cachedAgents;
}

/** Look up an agent by ID. Returns undefined if not found. */
export function getAgentById(id: AgentId): AgentDefinition | undefined {
  if (!cachedAgents) throw new Error("discoverAgents() must be called first");
  return cachedAgents.find(a => a.id === id);
}

/** Reset the agent cache (for testing). */
export function resetAgentCache(): void {
  cachedAgents = null;
}

// ---------------------------------------------------------------------------
// Template Resolution
// ---------------------------------------------------------------------------

/**
 * Custom `@foreach-agent` directive — resolves BEFORE the preprocess library.
 *
 * Syntax:
 *   <!-- @foreach-agent $var in contextKey -->
 *   ... $var.fieldName ... $var.englishName ...
 *   <!-- @endfor-agent -->
 *
 * `contextKey` maps to an array of AgentDefinition objects. Within the loop
 * body, `$var.fieldName` is replaced with the agent's property value. Supported
 * properties: `id`, `englishName`, `hebrewName`, `roleTitle`, and any key
 * present in `frontmatterData` (e.g., `$var.introForOthers`).
 */
function resolveForEachAgent(
  content: string,
  agentArrays: Record<string, AgentDefinition[]>,
): string {
  const directiveRe = /<!-- @foreach-agent (\$\w+) in (\w+) -->([\s\S]*?)<!-- @endfor-agent -->/g;

  return content.replace(directiveRe, (_match, varName: string, contextKey: string, body: string) => {
    const agents = agentArrays[contextKey];
    if (!agents) return "";

    // Build a regex that matches $var.anyProperty
    const varDotRe = new RegExp(
      varName.replace("$", "\\$") + "\\.(\\w+)",
      "g",
    );

    return agents.map(agent => {
      return body.replace(varDotRe, (_m: string, field: string) => {
        // Check typed fields first, then frontmatterData
        if (field in agent && field !== "frontmatterData" && field !== "filePath") {
          return (agent as any)[field] as string;
        }
        return agent.frontmatterData[field] ?? "";
      });
    }).join("");
  });
}

/**
 * Build the preprocess context for a given agent file.
 *
 * - `frontmatter`: parsed YAML from the agent's .md file
 * - `dictionary`: extracted dictionary text from ../CLAUDE.md
 *
 * Note: frontmatter values from the current agent's file are exposed
 * directly as `@echo` variables (e.g., `<!-- @echo introForOthers -->`).
 */
function buildPreprocessContext(
  frontmatter: Record<string, string>,
  dictionary: string,
): Record<string, string> {
  const ctx: Record<string, string> = {
    EnglishName:  frontmatter.englishName  ?? "",
    HebrewName:   frontmatter.hebrewName   ?? "",
    dictionary,
  };

  // Expose all frontmatter keys as @echo variables
  for (const [key, value] of Object.entries(frontmatter)) {
    if (!(key in ctx) && typeof value === "string") {
      ctx[key] = value;
    }
  }

  return ctx;
}

/**
 * Extract the dictionary section from ../CLAUDE.md.
 * Returns everything between "# The Dictionary" heading and the next top-level heading.
 */
export async function extractDictionary(): Promise<string> {
  const claudeMd = await readFile(ROOT_CLAUDE_MD, "utf-8");

  // Find "# The Dictionary" or "# המילון" section
  const dictStart = claudeMd.search(/^# The Dictionary/m);
  if (dictStart === -1) {
    // Try Hebrew
    const hebrewStart = claudeMd.search(/^# המילון/m);
    if (hebrewStart === -1) return "<!-- Dictionary not found in CLAUDE.md -->";
    const nextHeading = claudeMd.slice(hebrewStart + 1).search(/^# /m);
    return nextHeading === -1
      ? claudeMd.slice(hebrewStart)
      : claudeMd.slice(hebrewStart, hebrewStart + 1 + nextHeading);
  }

  const afterStart = claudeMd.slice(dictStart + 1);
  const nextHeading = afterStart.search(/^# /m);
  return nextHeading === -1
    ? claudeMd.slice(dictStart)
    : claudeMd.slice(dictStart, dictStart + 1 + nextHeading);
}

/**
 * Resolve all template directives in an agent file.
 *
 * Two-phase resolution:
 * 1. **Custom `@foreach-agent`** — resolves `<!-- @foreach-agent $var in key -->`
 *    loops with dot-access on AgentDefinition properties (including frontmatterData).
 * 2. **preprocess library** — resolves standard directives: `@include`, `@echo`,
 *    `@foreach`, `@ifdef`, etc.
 *
 * Included files (`@include`) are resolved by the preprocess library recursively.
 * Since `@foreach-agent` runs first on the top-level content only, included files
 * that use `@foreach-agent` must be inlined manually before this function is called,
 * OR those included files should use the standard `@foreach` directive instead.
 *
 * In practice: `@foreach-agent` is used in participant-agent persona files and
 * the orchestrator prompt (top-level), while `system-prompt-base-prefix.md`
 * (included via `@include`) also uses `@foreach-agent` — so we resolve
 * `@include` first, then `@foreach-agent`, then the remaining preprocess pass.
 */
export async function resolveTemplate(
  filename: string,
  meetingParticipants: AgentDefinition[],
  /** Exclude this agent from participant loops */
  excludeAgentId: AgentId | undefined,
  /** Base directory for the template file (defaults to PARTICIPANT_AGENTS_DIR) */
  baseDir: string,
): Promise<string> {
  const filePath = join(baseDir, filename);
  const raw = await readFile(filePath, "utf-8");
  const { content, data: frontmatter } = matter(raw);

  const filteredParticipants = excludeAgentId
    ? meetingParticipants.filter(a => a.id !== excludeAgentId)
    : meetingParticipants;

  const dictionary = await extractDictionary();
  const context = buildPreprocessContext(
    frontmatter as Record<string, string>,
    dictionary,
  );

  // Agent arrays available to @foreach-agent directives
  const agentArrays: Record<string, AgentDefinition[]> = {
    participantAgents: filteredParticipants,
  };

  // Phase 1: Let preprocess resolve @include directives (and standard @echo/@foreach)
  // so that included files are inlined before @foreach-agent runs.
  const afterPreprocess = preprocessLib.preprocess(content, context, {
    type: "html",
    srcDir: baseDir,
  });

  // Phase 2: Resolve @foreach-agent directives on the fully-inlined content
  const afterAgentLoops = resolveForEachAgent(afterPreprocess, agentArrays);

  return afterAgentLoops.trim();
}

/**
 * Resolve a prompt template file with arbitrary context variables.
 *
 * Unlike resolveTemplate() (which builds full system prompts with frontmatter,
 * dictionary, and participant loops), this is a lightweight resolver for
 * per-cycle prompts (assessment, speech, selection, etc.).
 *
 * Template files live in prompts/ and use the same preprocess
 * directives: <!-- @echo varName -->, <!-- @ifdef varName -->...<!-- @endif -->.
 */
export async function resolvePromptTemplate(
  filename: string,
  context: Record<string, string>,
): Promise<string> {
  const filePath = join(PROMPTS_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  return preprocessLib.preprocess(raw, context, {
    type: "html",
    srcDir: PROMPTS_DIR,
  }).trim();
}

/**
 * Build the complete system prompt for an agent.
 *
 * Each agent persona file starts with:
 *   <!-- @include ../prompts/system-prompt-base-prefix.md -->
 *
 * system-prompt-orchestrator.md (in prompts/) starts with:
 *   <!-- @include system-prompt-base-prefix.md -->
 *
 * A single resolveTemplate() call handles all includes, variables, and loops.
 */
export async function buildSystemPrompt(
  agentId: AgentId | "orchestrator",
  meetingParticipants: AgentDefinition[],
): Promise<string> {
  logInfo("session-manager", `buildSystemPrompt: ${agentId}`);
  if (agentId === "orchestrator") {
    return resolveTemplate(ORCHESTRATOR_FILE, meetingParticipants, undefined, PROMPTS_DIR);
  }
  const agentDef = meetingParticipants.find(a => a.id === agentId);
  const filename = agentDef ? basename(agentDef.filePath) : `${agentId}.md`;
  return resolveTemplate(filename, meetingParticipants, agentId, PARTICIPANT_AGENTS_DIR);
}

// ---------------------------------------------------------------------------
// SDK Selection: Stub vs Real
// ---------------------------------------------------------------------------

/** Common query type — both stub and real SDK satisfy this. */
type AnyQuery = SDKQueryResult | StubQuery;

/**
 * Lazily load and cache the real SDK query function.
 * This avoids importing the real SDK when USE_STUB_SDK is true
 * (which would trigger env cleanup and SDK initialization unnecessarily).
 */
let _realQueryFn: ((params: { prompt: string; options: Record<string, unknown> }) => AnyQuery) | null = null;

async function getRealQueryFn(): Promise<(params: { prompt: string; options: Record<string, unknown> }) => AnyQuery> {
  if (!_realQueryFn) {
    const mod = await import("./real-sdk");
    _realQueryFn = mod.realQuery as any;
  }
  return _realQueryFn!;
}

/**
 * Get the appropriate query function based on configuration.
 * Returns stubQuery when USE_STUB_SDK is true, realQuery otherwise.
 */
async function getQueryFn(): Promise<(params: { prompt: string; options: Record<string, unknown> }) => AnyQuery> {
  if (USE_STUB_SDK) {
    return stubQuery as any;
  }
  return getRealQueryFn();
}

// ---------------------------------------------------------------------------
// Session Lifecycle
// ---------------------------------------------------------------------------

/** Track active sessions: agentId/orchestrator → sessionId */
const sessionRegistry = new Map<AgentId | "orchestrator", string>();

/** Track active queries for interrupt support */
const activeQueries = new Map<AgentId | "orchestrator", AnyQuery>();

// ---------------------------------------------------------------------------
// Meeting Context (for lazy session creation)
// ---------------------------------------------------------------------------

/** Meeting title — used for priming prompts when creating sessions lazily. */
let meetingTitle: string = "";

/** Participant definitions for the current meeting — needed by ensureSession. */
let meetingParticipantDefs: AgentDefinition[] = [];

/**
 * Register the current meeting's context so sessions can be created lazily.
 * Called by the orchestrator at meeting start (before any cycles).
 */
export function registerMeeting(title: string, participantDefs: AgentDefinition[]): void {
  meetingTitle = title;
  meetingParticipantDefs = participantDefs;
  logInfo("session-manager", `registerMeeting: "${title}" with [${participantDefs.map(d => d.id).join(", ")}]`);
}


/**
 * Accumulated cost (USD) from SDK interactions since the last reset.
 * The orchestrator calls resetCycleCost() at cycle start and
 * getCycleCost() at cycle end to get actual spend per cycle.
 */
let cycleCostAccumulator = 0;

/** Reset the per-cycle cost accumulator. Call at the start of each cycle. */
export function resetCycleCost(): void { cycleCostAccumulator = 0; }

/** Get the accumulated cost since the last reset. */
export function getCycleCost(): number { return cycleCostAccumulator; }

/** Extract total_cost_usd from an SDK result message and add to accumulator. */
function accumulateCost(msg: any): void {
  if (msg.type === "result" && typeof (msg as any).total_cost_usd === "number") {
    cycleCostAccumulator += (msg as any).total_cost_usd;
  }
}

/**
 * Create a new session for an agent and return the session ID.
 * The session is created via an initial query() call.
 *
 * Uses the stub SDK when USE_STUB_SDK is true, real SDK otherwise.
 */
export async function createSession(
  agentId: AgentId | "orchestrator",
  systemPrompt: string,
  initialPrompt: string,
  onEvent?: ProcessEventCallback,
): Promise<{ sessionId: string; responseText: string }> {
  const model = agentId === "orchestrator" ? ORCHESTRATOR_MODEL : PARTICIPANT_MODEL;
  const tools = agentId === "orchestrator" ? ORCHESTRATOR_TOOLS : PARTICIPANT_TOOLS;

  const effort = effortForModel(model);
  logInfo("sessions", `createSession START for ${agentId} (model=${model}, effort=${effort}, stub=${USE_STUB_SDK})`);

  if (onEvent) {
    onEvent("system-prompt", systemPrompt);
    onEvent("prompt", initialPrompt);
  }

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt: initialPrompt,
    options: {
      title: `${agentId} | create-session`,
      model,
      effort,
      systemPrompt,
      tools,
      cwd: ROOT_PROJECT_DIR,
      maxTurns: agentId === "orchestrator" ? MAX_TURNS_ASSESSMENT : MAX_TURNS_SESSION_INIT,
      maxBudgetUsd: agentId === "orchestrator" ? 0.10 : MAX_BUDGET_PER_SPEECH,
    },
  });

  let sessionId = "";
  let responseText = "";

  for await (const msg of query) {
    if (onEvent) {
      emitProcessEvents(msg, onEvent);
    }
    if (msg.type === "system" && (msg as any).subtype === "init") {
      sessionId = (msg as any).session_id;
    }
    if (msg.type === "result" && (msg as any).subtype === "success") {
      responseText = (msg as any).result ?? "";
    }
    accumulateCost(msg);
  }

  if (!sessionId) throw new Error(`Failed to create session for ${agentId}`);

  sessionRegistry.set(agentId, sessionId);
  logInfo("sessions", `createSession DONE for ${agentId} (sessionId=${sessionId}), registry=[${[...sessionRegistry.keys()].join(', ')}]`);
  return { sessionId, responseText };
}

/** Callback for process events emitted during SDK interactions. */
export type ProcessEventCallback = (eventKind: ProcessEventKind, content: string, toolName?: string, toolInput?: string) => void;

/**
 * Feed a message into a session and get the full response.
 *
 * On the first call for an agent (no session yet), creates the session using
 * the real prompt — no priming prompt. The session ID is captured from the
 * SDK's system-init event and stored for subsequent calls (resume).
 *
 * If `onEvent` is provided, all intermediate SDK events (thinking, text,
 * tool calls, tool results) are forwarded through it.
 */
export async function feedMessage(
  agentId: AgentId | "orchestrator",
  prompt: string,
  onEvent?: ProcessEventCallback,
): Promise<string> {
  const existingSessionId = sessionRegistry.get(agentId);
  const model = agentId === "orchestrator" ? ORCHESTRATOR_MODEL : PARTICIPANT_MODEL;
  const tools = agentId === "orchestrator" ? ORCHESTRATOR_TOOLS : PARTICIPANT_TOOLS;
  const effort = effortForModel(model);
  logInfo("session-manager", `feedMessage: ${agentId} (session=${existingSessionId ?? "none"}, effort=${effort})`);

  const queryOptions: Record<string, unknown> = {
    title: `${agentId} | feed-message`,
    model,
    effort,
    maxTurns: MAX_TURNS_ASSESSMENT,
    cwd: ROOT_PROJECT_DIR,
  };

  if (existingSessionId) {
    queryOptions.resume = existingSessionId;
  } else {
    // First interaction: create session with the real prompt (no throwaway priming)
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    queryOptions.systemPrompt = systemPrompt;
    queryOptions.tools = tools;
    queryOptions.maxBudgetUsd = agentId === "orchestrator" ? 0.10 : MAX_BUDGET_PER_SPEECH;
    if (onEvent) onEvent("system-prompt", systemPrompt);
  }

  if (onEvent) onEvent("prompt", prompt);

  const queryFn = await getQueryFn();
  const query = queryFn({ prompt, options: queryOptions });
  activeQueries.set(agentId, query);

  let responseText = "";
  for await (const msg of query) {
    if (onEvent) emitProcessEvents(msg, onEvent);
    if (msg.type === "system" && (msg as any).subtype === "init" && !existingSessionId) {
      const newSessionId = (msg as any).session_id;
      if (newSessionId) {
        sessionRegistry.set(agentId, newSessionId);
        logInfo("sessions", `feedMessage: created session for ${agentId} (sessionId=${newSessionId})`);
      }
    }
    if (msg.type === "result" && (msg as any).subtype === "success") {
      responseText = (msg as any).result ?? "";
    }
    accumulateCost(msg);
  }

  activeQueries.delete(agentId);
  logInfo("session-manager", `feedMessage: ${agentId} done (${responseText.length} chars)`);
  return responseText;
}

/** Event types yielded by streamSpeech */
export type SpeechStreamEvent =
  | { type: "chunk"; text: string }
  | { type: "thinking-chunk"; text: string }
  | { type: "thinking"; text: string }
  | { type: "tool-call"; toolName: string; input: string }
  | { type: "tool-result"; toolName: string; output: string }
  | { type: "done"; fullText: string };

/**
 * Feed a message and stream the response as an async generator of events.
 * Used for Participant-Agent speeches.
 * Yields text chunks, thinking blocks, tool calls/results, and a final done event.
 *
 * On the first call for an agent (no session yet), creates the session using
 * the real prompt — no throwaway priming prompt.
 */
export async function* streamSpeech(
  agentId: AgentId,
  prompt: string,
): AsyncGenerator<SpeechStreamEvent> {
  const existingSessionId = sessionRegistry.get(agentId);
  const model = PARTICIPANT_MODEL;
  const effort = effortForModel(model);
  logInfo("session-manager", `streamSpeech: ${agentId} (session=${existingSessionId ?? "none"}, effort=${effort})`);

  const queryOptions: Record<string, unknown> = {
    title: `${agentId} | speech (streamed)`,
    model,
    effort,
    tools: PARTICIPANT_TOOLS,
    includePartialMessages: true,
    maxTurns: MAX_TURNS_SPEECH,
    maxBudgetUsd: MAX_BUDGET_PER_SPEECH,
    cwd: ROOT_PROJECT_DIR,
  };

  if (existingSessionId) {
    queryOptions.resume = existingSessionId;
  } else {
    // First interaction: create session with the real prompt (no throwaway priming)
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    queryOptions.systemPrompt = systemPrompt;
  }

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt,
    options: queryOptions,
  });

  activeQueries.set(agentId, query);

  let fullText = "";
  let thinkingAccumulator = "";
  for await (const msg of query) {
    // Capture session ID on first interaction
    if (msg.type === "system" && (msg as any).subtype === "init" && !existingSessionId) {
      const newSessionId = (msg as any).session_id;
      if (newSessionId) {
        sessionRegistry.set(agentId, newSessionId);
        logInfo("sessions", `streamSpeech: created session for ${agentId} (sessionId=${newSessionId})`);
      }
    }
    // Stream text deltas
    if (msg.type === "stream_event") {
      const event = (msg as any).event;
      const delta = event?.delta;
      if (delta?.type === "text_delta" && delta.text) {
        fullText += delta.text;
        yield { type: "chunk", text: delta.text };
      } else if (delta?.type === "thinking_delta" && delta.thinking) {
        thinkingAccumulator += delta.thinking;
        yield { type: "thinking-chunk", text: delta.thinking };
      }
    }
    // Full assistant message — extract tool_use blocks.
    // Thinking blocks are skipped here: we already accumulated them from thinking_delta events.
    // If no deltas arrived (e.g. streaming disabled), fall back to the assistant block.
    if (msg.type === "assistant") {
      const content = (msg as any).message?.content;
      if (Array.isArray(content)) {
        for (const block of content) {
          if (block.type === "thinking" && block.thinking && !thinkingAccumulator) {
            thinkingAccumulator = block.thinking;
          } else if (block.type === "tool_use") {
            yield {
              type: "tool-call",
              toolName: block.name ?? "unknown",
              input: typeof block.input === "string" ? block.input : JSON.stringify(block.input),
            };
          }
        }
      }
    }
    // Tool results
    if (msg.type === "tool_progress" || msg.type === "tool_use_summary") {
      const toolName = (msg as any).tool_name ?? (msg as any).name ?? "unknown";
      const output = (msg as any).content ?? (msg as any).result ?? "";
      yield {
        type: "tool-result",
        toolName,
        output: typeof output === "string" ? output : JSON.stringify(output),
      };
    }
    if (msg.type === "result" && (msg as any).subtype === "success") {
      fullText = (msg as any).result ?? fullText;
    }
    accumulateCost(msg);
  }

  activeQueries.delete(agentId);
  logInfo("session-manager", `streamSpeech: ${agentId} done (${fullText.length} chars)`);
  if (thinkingAccumulator) {
    yield { type: "thinking", text: thinkingAccumulator };
  }
  yield { type: "done", fullText };
}

/**
 * Interrupt an active speech query for an agent.
 */
export async function interruptSpeech(agentId: AgentId | "orchestrator"): Promise<void> {
  const query = activeQueries.get(agentId);
  if (query) {
    logInfo("session-manager", `interruptSpeech: ${agentId}`);
    await query.interrupt();
    activeQueries.delete(agentId);
  }
}

/**
 * Interrupt all active queries (for meeting end, rollback, etc.)
 */
export async function interruptAll(): Promise<void> {
  if (activeQueries.size > 0) {
    logInfo("session-manager", `interruptAll: interrupting ${activeQueries.size} query(ies) [${[...activeQueries.keys()].join(", ")}]`);
  }
  const promises = [...activeQueries.entries()].map(async ([_id, query]) => {
    await query.interrupt();
  });
  await Promise.all(promises);
  activeQueries.clear();
}

// ---------------------------------------------------------------------------
// SDK Event → ProcessEvent normalization
// ---------------------------------------------------------------------------

/**
 * Extract process events from a raw SDK message and forward via callback.
 * Called for non-streaming interactions (assessments, orchestrator selection).
 */
function emitProcessEvents(msg: any, onEvent: ProcessEventCallback): void {
  // Full assistant message — extract text, thinking, tool_use blocks
  if (msg.type === "assistant") {
    const content = msg.message?.content;
    if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === "thinking" && block.thinking) {
          onEvent("thinking", block.thinking);
        } else if (block.type === "text" && block.text) {
          onEvent("text", block.text);
        } else if (block.type === "tool_use") {
          onEvent("tool-call", typeof block.input === "string" ? block.input : JSON.stringify(block.input), block.name ?? "unknown", typeof block.input === "string" ? block.input : JSON.stringify(block.input));
        } else if (block.type === "tool_result") {
          const output = typeof block.content === "string" ? block.content : JSON.stringify(block.content);
          onEvent("tool-result", output, block.tool_use_id ?? "unknown");
        }
      }
    }
  }

  // Tool progress / summary
  if (msg.type === "tool_progress" || msg.type === "tool_use_summary") {
    const toolName = msg.tool_name ?? msg.name ?? "unknown";
    const output = msg.content ?? msg.result ?? "";
    onEvent("tool-result", typeof output === "string" ? output : JSON.stringify(output), toolName);
  }
}

// ---------------------------------------------------------------------------
// Session Management Utilities
// ---------------------------------------------------------------------------

/** Get the session ID for an agent. */
export function getSessionId(agentId: AgentId | "orchestrator"): string | undefined {
  return sessionRegistry.get(agentId);
}

/** Get all registered session IDs. */
export function getAllSessionIds(): Record<string, string> {
  return Object.fromEntries(sessionRegistry.entries());
}

/** Clear all sessions and meeting context (for testing or meeting end). */
export function clearSessions(): void {
  logInfo("sessions", `clearSessions (had ${sessionRegistry.size} sessions)`);
  sessionRegistry.clear();
  activeQueries.clear();
  meetingTitle = "";
  meetingParticipantDefs = [];
}

/** Register an existing session ID (for meeting resume). */
export function registerSession(agentId: AgentId | "orchestrator", sessionId: string): void {
  sessionRegistry.set(agentId, sessionId);
}
