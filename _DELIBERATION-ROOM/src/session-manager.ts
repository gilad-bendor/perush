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
import type { AgentDefinition, AgentId, PrivateAssessment, ManagerDecision, ProcessEventKind } from "./types";
import { AgentDefinitionSchema, PrivateAssessmentSchema, ManagerDecisionSchema } from "./types";
import {
  PARTICIPANT_AGENTS_DIR,
  ROOT_CLAUDE_MD,
  AGENTS_PREFIX_FILE,
  CONVERSATION_MANAGER_FILE,
  PARTICIPANT_MODEL,
  MANAGER_MODEL,
  effortForModel,
  PARTICIPANT_TOOLS,
  MANAGER_TOOLS,
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
 * Excludes underscore-prefixed files (shared prefixes and manager).
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

    const agent = AgentDefinitionSchema.parse({
      id,
      englishName: frontmatter.englishName ?? "",
      hebrewName: frontmatter.hebrewName ?? "",
      roleTitle,
      managerIntro: frontmatter.managerIntro ?? "",
      managerTip: frontmatter.managerTip ?? "",
      filePath,
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
 * Encode a string array for use with preprocess's `@foreach` directive.
 *
 * preprocess parses context values as:
 *   - JSON (if the value contains `{...}`) → JSON.parse
 *   - Otherwise → naive comma-split (BROKEN for strings containing commas)
 *
 * To safely pass an array of arbitrary strings, encode as a JSON *object*
 * keyed by index: `{"0":"entry0","1":"entry1"}`. This triggers `JSON.parse`,
 * which handles commas inside values correctly, and `Object.keys` preserves
 * insertion order (numeric string keys sort ascending in modern JS).
 */
function toForEachContext(entries: string[]): string {
  return JSON.stringify(Object.fromEntries(entries.map((e, i) => [i, e])));
}

/**
 * Build the preprocess context for a given agent file.
 *
 * - `frontmatter`: parsed YAML from the agent's .md file
 * - `filteredParticipants`: meeting participants with the current agent excluded (for loops)
 * - `allParticipants`: full meeting participant list (for speakerIds)
 * - `dictionary`: extracted dictionary text from ../CLAUDE.md
 */
function buildPreprocessContext(
  frontmatter: Record<string, string>,
  filteredParticipants: AgentDefinition[],
  allParticipants: AgentDefinition[],
  dictionary: string,
): Record<string, string> {
  // Agent-specific frontmatter values (used by @echo in agent persona files)
  const ctx: Record<string, string> = {
    EnglishName:  frontmatter.englishName  ?? "",
    HebrewName:   frontmatter.hebrewName   ?? "",
    managerIntro: frontmatter.managerIntro ?? "",
    managerTip:   frontmatter.managerTip   ?? "",
    dictionary,
  };

  // Participant entries for @foreach in _agents-prefix.md
  ctx.participantAgentEntries = toForEachContext(
    filteredParticipants.map(p =>
      `- **${p.englishName} / ${p.hebrewName}**: ${p.managerIntro}`
    )
  );

  // Participant entries for @foreach in _conversation-manager.md
  ctx.participantManagerEntries = toForEachContext(
    filteredParticipants.map(p =>
      `- **${p.englishName} / ${p.hebrewName}**: ${p.managerIntro}. *${p.managerTip}.*`
    )
  );

  // speakerIds uses the *full* participant list (unfiltered)
  const ids = allParticipants.map(a => `"${a.englishName}"`);
  ids.push('"Director"');
  ctx.speakerIds = ids.join(" | ");

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
 * Resolve all template directives in an agent file via a single preprocess pass.
 *
 * The file may use any preprocess HTML directives:
 *   <!-- @include filename.md -->        — inline another file from participant-agents/
 *   <!-- @echo EnglishName -->           — substitute a frontmatter variable
 *   <!-- @echo dictionary -->            — inject the full dictionary text
 *   <!-- @foreach $p in participantAgentEntries -->$p\n<!-- @endfor -->
 *   <!-- @foreach $p in participantManagerEntries -->$p\n<!-- @endfor -->
 *   <!-- @echo speakerIds -->            — JSON-union of valid nextSpeaker values
 *
 * Included files are processed recursively with the same context, so
 * _base-prefix.md and _agents-prefix.md can be included from agent persona files
 * and will have full access to all context variables.
 */
export async function resolveTemplate(
  filename: string,
  meetingParticipants: AgentDefinition[],
  /** Exclude this agent from participantAgentEntries / participantManagerEntries loops */
  excludeAgentId?: AgentId,
): Promise<string> {
  const filePath = join(PARTICIPANT_AGENTS_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  const { content, data: frontmatter } = matter(raw);

  const filteredParticipants = excludeAgentId
    ? meetingParticipants.filter(a => a.id !== excludeAgentId)
    : meetingParticipants;

  const dictionary = await extractDictionary();
  const context = buildPreprocessContext(
    frontmatter as Record<string, string>,
    filteredParticipants,
    meetingParticipants,
    dictionary,
  );

  return preprocessLib.preprocess(content, context, {
    type: "html",
    srcDir: PARTICIPANT_AGENTS_DIR,
  }).trim();
}

/**
 * Build the complete system prompt for an agent.
 *
 * Each agent persona file starts with:
 *   <!-- @include _base-prefix.md -->
 *   <!-- @include _agents-prefix.md -->   (Participant-Agents only)
 *
 * _conversation-manager.md starts with:
 *   <!-- @include _base-prefix.md -->
 *
 * A single resolveTemplate() call handles all includes, variables, and loops.
 */
export async function buildSystemPrompt(
  agentId: AgentId | "manager",
  meetingParticipants: AgentDefinition[],
): Promise<string> {
  logInfo("session-manager", `buildSystemPrompt: ${agentId}`);
  if (agentId === "manager") {
    return resolveTemplate(CONVERSATION_MANAGER_FILE, meetingParticipants);
  }
  const agentDef = meetingParticipants.find(a => a.id === agentId);
  const filename = agentDef ? basename(agentDef.filePath) : `${agentId}.md`;
  return resolveTemplate(filename, meetingParticipants, agentId);
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

/** Track active sessions: agentId/manager → sessionId */
const sessionRegistry = new Map<AgentId | "manager", string>();

/** Track active queries for interrupt support */
const activeQueries = new Map<AgentId | "manager", AnyQuery>();

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
 * Ensure a session exists for the given agent, creating it lazily if needed.
 * Returns the session ID.
 */
async function ensureSession(agentId: AgentId | "manager", onEvent?: ProcessEventCallback): Promise<string> {
  const existing = sessionRegistry.get(agentId);
  if (existing) return existing;

  logInfo("session-manager", `ensureSession: creating session for ${agentId} (lazy)`);
  const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
  const primingPrompt = agentId === "manager"
    ? `פתיחת דיון. הנושא: ${meetingTitle}\n\n---stub-response---\ntext: מוכן לנהל.\n---end-stub-response---`
    : `פתיחת דיון: ${meetingTitle}\n\n---stub-response---\ntext: מוכן לדיון.\n---end-stub-response---`;
  const { sessionId } = await createSession(agentId, systemPrompt, primingPrompt, onEvent);
  return sessionId;
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
  agentId: AgentId | "manager",
  systemPrompt: string,
  initialPrompt: string,
  onEvent?: ProcessEventCallback,
): Promise<{ sessionId: string; responseText: string }> {
  const model = agentId === "manager" ? MANAGER_MODEL : PARTICIPANT_MODEL;
  const tools = agentId === "manager" ? MANAGER_TOOLS : PARTICIPANT_TOOLS;

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
      maxTurns: agentId === "manager" ? MAX_TURNS_ASSESSMENT : MAX_TURNS_SESSION_INIT,
      maxBudgetUsd: agentId === "manager" ? 0.10 : MAX_BUDGET_PER_SPEECH,
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
 * Feed a message into an existing session and get the full response.
 * Uses the resume pattern with the session's ID.
 *
 * If `onEvent` is provided, all intermediate SDK events (thinking, text,
 * tool calls, tool results) are forwarded through it.
 */
export async function feedMessage(
  agentId: AgentId | "manager",
  prompt: string,
  onEvent?: ProcessEventCallback,
): Promise<string> {
  const sessionId = await ensureSession(agentId, onEvent);

  const model = agentId === "manager" ? MANAGER_MODEL : PARTICIPANT_MODEL;
  const effort = effortForModel(model);
  logInfo("session-manager", `feedMessage: ${agentId} (session=${sessionId}, effort=${effort})`);

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt,
    options: {
      title: `${agentId} | feed-message`,
      resume: sessionId,
      model,
      effort,
      maxTurns: MAX_TURNS_ASSESSMENT,
      cwd: ROOT_PROJECT_DIR,
    },
  });

  activeQueries.set(agentId, query);

  let responseText = "";
  for await (const msg of query) {
    if (onEvent) {
      emitProcessEvents(msg, onEvent);
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
 */
export async function* streamSpeech(
  agentId: AgentId,
  prompt: string,
): AsyncGenerator<SpeechStreamEvent> {
  const sessionId = await ensureSession(agentId);

  const model = PARTICIPANT_MODEL;
  const effort = effortForModel(model);
  logInfo("session-manager", `streamSpeech: ${agentId} (session=${sessionId}, effort=${effort})`);

  const tools = PARTICIPANT_TOOLS;

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt,
    options: {
      title: `${agentId} | speech (streamed)`,
      resume: sessionId,
      model,
      effort,
      tools,
      includePartialMessages: true,
      maxTurns: MAX_TURNS_SPEECH,
      maxBudgetUsd: MAX_BUDGET_PER_SPEECH,
      cwd: ROOT_PROJECT_DIR,
    },
  });

  activeQueries.set(agentId, query);

  let fullText = "";
  let thinkingAccumulator = "";
  for await (const msg of query) {
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
export async function interruptSpeech(agentId: AgentId | "manager"): Promise<void> {
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
// Response Parsing
// ---------------------------------------------------------------------------

/**
 * Extract a PrivateAssessment from an agent's response text.
 * The response should contain JSON with selfImportance, humanImportance, summary.
 * Uses zod safeParse for robust validation.
 */
export function extractAssessment(
  agentId: AgentId,
  responseText: string,
): PrivateAssessment | null {
  try {
    // Try to find JSON in the response (it might be wrapped in text)
    const jsonMatch = responseText.match(/\{[\s\S]*}/);
    if (!jsonMatch) {
      logWarn("session-manager", `extractAssessment: no JSON found for ${agentId}`);
      return null;
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const result = PrivateAssessmentSchema.safeParse({
      agent: agentId,
      selfImportance: parsed.selfImportance,
      humanImportance: parsed.humanImportance,
      summary: parsed.summary,
    });

    if (!result.success) {
      logWarn("session-manager", `extractAssessment: zod validation failed for ${agentId}`, result.error.issues);
    } else {
      logInfo("session-manager", `extractAssessment: ${agentId} → self=${result.data.selfImportance}, human=${result.data.humanImportance}`);
    }
    return result.success ? result.data : null;
  } catch (err) {
    logWarn("session-manager", `extractAssessment: parse error for ${agentId}`, err);
    return null;
  }
}

/**
 * Extract a ManagerDecision from the manager's response text.
 * The response should contain JSON with nextSpeaker and vibe.
 */
export function extractManagerDecision(responseText: string): ManagerDecision | null {
  try {
    const jsonMatch = responseText.match(/\{[\s\S]*}/);
    if (!jsonMatch) {
      logWarn("session-manager", `extractManagerDecision: no JSON found`);
      return null;
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const result = ManagerDecisionSchema.safeParse({
      nextSpeaker: parsed.nextSpeaker,
      vibe: parsed.vibe,
    });

    if (!result.success) {
      logWarn("session-manager", `extractManagerDecision: zod validation failed`, result.error.issues);
    } else {
      logInfo("session-manager", `extractManagerDecision: nextSpeaker="${result.data.nextSpeaker}"`);
    }
    return result.success ? result.data : null;
  } catch (err) {
    logWarn("session-manager", `extractManagerDecision: parse error`, err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// SDK Event → ProcessEvent normalization
// ---------------------------------------------------------------------------

/**
 * Extract process events from a raw SDK message and forward via callback.
 * Called for non-streaming interactions (assessments, manager selection).
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
export function getSessionId(agentId: AgentId | "manager"): string | undefined {
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
export function registerSession(agentId: AgentId | "manager", sessionId: string): void {
  sessionRegistry.set(agentId, sessionId);
}
