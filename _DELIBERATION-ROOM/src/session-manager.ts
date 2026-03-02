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
import type { AgentDefinition, AgentId, PrivateAssessment, ManagerDecision } from "./types";
import { AgentDefinitionSchema, PrivateAssessmentSchema, ManagerDecisionSchema } from "./types";
import {
  PARTICIPANT_AGENTS_DIR,
  ROOT_CLAUDE_MD,
  BASE_PREFIX_FILE,
  AGENTS_PREFIX_FILE,
  CONVERSATION_MANAGER_FILE,
  DICTIONARY_INJECTION_POINT,
  PARTICIPANT_MODEL,
  MANAGER_MODEL,
  PARTICIPANT_TOOLS,
  MANAGER_TOOLS,
  MAX_BUDGET_PER_SPEECH,
  MAX_TURNS_PER_SPEECH,
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
 * Read a file from participant-agents/, stripping YAML frontmatter.
 * Returns just the Markdown body.
 */
async function readAgentFileBody(filename: string): Promise<string> {
  const filePath = join(PARTICIPANT_AGENTS_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  const { content } = matter(raw);
  return content.trim();
}

/**
 * Read a file's frontmatter as a Record.
 */
async function readAgentFrontmatter(filename: string): Promise<Record<string, string>> {
  const filePath = join(PARTICIPANT_AGENTS_DIR, filename);
  const raw = await readFile(filePath, "utf-8");
  const { data } = matter(raw);
  return data as Record<string, string>;
}

/**
 * Resolve ${include:<filename>} markers — inline included file content (without frontmatter).
 */
function resolveIncludes(text: string, fileContents: Map<string, string>): string {
  return text.replace(/\$\{include:([^}]+)}/g, (_match, filename: string) => {
    return fileContents.get(filename.trim()) ?? `<!-- include not found: ${filename} -->`;
  });
}

/**
 * Resolve ${VariableName} markers from a frontmatter record.
 */
function resolveVariables(text: string, vars: Record<string, string>): string {
  return text.replace(/\$\{(\w+)}/g, (_match, key: string) => {
    // Only resolve known frontmatter keys (not iterator/computed markers)
    if (key === "each" || key === "speakerIds") return _match;
    return vars[key] ?? "";
  });
}

/**
 * Resolve ${each:participant}...${/each:participant} blocks.
 * Repeats the enclosed template once per participant agent.
 */
function resolveIterators(
  text: string,
  participants: AgentDefinition[],
): string {
  const iteratorRegex = /\$\{each:participant}([\s\S]*?)\$\{\/each:participant}/g;

  return text.replace(iteratorRegex, (_match, template: string) => {
    return participants
      .map(agent => {
        let resolved = template;
        resolved = resolved.replace(/\$\{EnglishName}/g, agent.englishName);
        resolved = resolved.replace(/\$\{HebrewName}/g, agent.hebrewName);
        resolved = resolved.replace(/\$\{managerIntro}/g, agent.managerIntro);
        resolved = resolved.replace(/\$\{managerTip}/g, agent.managerTip);
        resolved = resolved.replace(/\$\{roleTitle}/g, agent.roleTitle);
        return resolved;
      })
      .join("");
  });
}

/**
 * Resolve ${speakerIds} computed marker.
 * Produces a list like: "Milo" | "Archi" | "Kashia" | "Director"
 */
function resolveSpeakerIds(text: string, participants: AgentDefinition[]): string {
  const ids = participants.map(a => `"${a.englishName}"`);
  ids.push(`"Director"`);
  const speakerIdsStr = ids.join(" | ");
  return text.replace(/\$\{speakerIds}/g, speakerIdsStr);
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
 * Inject the dictionary content at the DICTIONARY_INJECTION_POINT marker.
 */
function injectDictionary(text: string, dictionary: string): string {
  return text.replace(DICTIONARY_INJECTION_POINT, dictionary);
}

/**
 * Full template resolution pipeline for an agent file.
 *
 * Resolution order:
 * 1. Include markers (${include:filename})
 * 2. Variable markers (${EnglishName}, ${HebrewName}, etc.)
 * 3. Iterator blocks (${each:participant}...${/each:participant})
 * 4. Computed markers (${speakerIds})
 */
export async function resolveTemplate(
  filename: string,
  meetingParticipants: AgentDefinition[],
  /** Exclude this agent ID from the participant list (for the agent's own template) */
  excludeAgentId?: AgentId,
): Promise<string> {
  // Read the target file
  const body = await readAgentFileBody(filename);
  const frontmatter = await readAgentFrontmatter(filename);

  // Prepare include cache
  const includeCache = new Map<string, string>();

  // Step 1: Resolve includes
  const includeMatches = body.matchAll(/\$\{include:([^}]+)}/g);
  for (const match of includeMatches) {
    const includeName = match[1].trim();
    if (!includeCache.has(includeName)) {
      try {
        const content = await readAgentFileBody(includeName);
        includeCache.set(includeName, content);
      } catch {
        includeCache.set(includeName, `<!-- include not found: ${includeName} -->`);
      }
    }
  }
  let resolved = resolveIncludes(body, includeCache);

  // Step 2: Resolve iterators BEFORE variables (iterator blocks handle their
  // own internal variable resolution; file-level variables would clobber them)
  const filteredParticipants = excludeAgentId
    ? meetingParticipants.filter(a => a.id !== excludeAgentId)
    : meetingParticipants;
  resolved = resolveIterators(resolved, filteredParticipants);

  // Step 3: Resolve file-level variables from frontmatter (for any remaining markers)
  const vars: Record<string, string> = {
    EnglishName: frontmatter.englishName ?? "",
    HebrewName: frontmatter.hebrewName ?? "",
    managerIntro: frontmatter.managerIntro ?? "",
    managerTip: frontmatter.managerTip ?? "",
  };
  resolved = resolveVariables(resolved, vars);

  // Step 4: Resolve computed markers
  resolved = resolveSpeakerIds(resolved, meetingParticipants);

  return resolved;
}

/**
 * Build the complete system prompt for an agent.
 *
 * Participant-Agents: _base-prefix.md (with dictionary) + _agents-prefix.md (resolved) + resolved persona
 * Conversation-Manager: _base-prefix.md (with dictionary) + resolved _conversation-manager.md
 */
export async function buildSystemPrompt(
  agentId: AgentId | "manager",
  meetingParticipants: AgentDefinition[],
): Promise<string> {
  logInfo("session-manager", `buildSystemPrompt: ${agentId}`);
  // Read and inject dictionary into base prefix
  const basePrefix = await readAgentFileBody(BASE_PREFIX_FILE);
  const dictionary = await extractDictionary();
  const basePrefixWithDict = injectDictionary(basePrefix, dictionary);

  if (agentId === "manager") {
    // Manager: base prefix + resolved conversation-manager.md
    const managerBody = await resolveTemplate(
      CONVERSATION_MANAGER_FILE,
      meetingParticipants,
    );
    return `${basePrefixWithDict}\n\n${managerBody}`;
  }

  // Participant-Agent: base prefix + agents prefix + resolved persona
  const agentsPrefixBody = await readAgentFileBody(AGENTS_PREFIX_FILE);
  // Resolve the agents prefix with the meeting's participants (excluding self)
  const agentsPrefixResolved = resolveIterators(
    agentsPrefixBody,
    meetingParticipants.filter(a => a.id !== agentId),
  );

  const agentDef = meetingParticipants.find(a => a.id === agentId);
  const filename = agentDef ? basename(agentDef.filePath) : `${agentId}.md`;
  const personaResolved = await resolveTemplate(
    filename,
    meetingParticipants,
    agentId,
  );

  return `${basePrefixWithDict}\n\n${agentsPrefixResolved}\n\n${personaResolved}`;
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
let _realQueryFn: ((params: { prompt: string; options?: Record<string, unknown> }) => AnyQuery) | null = null;

async function getRealQueryFn(): Promise<(params: { prompt: string; options?: Record<string, unknown> }) => AnyQuery> {
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
async function getQueryFn(): Promise<(params: { prompt: string; options?: Record<string, unknown> }) => AnyQuery> {
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
): Promise<{ sessionId: string; responseText: string }> {
  const model = agentId === "manager" ? MANAGER_MODEL : PARTICIPANT_MODEL;
  const tools = agentId === "manager" ? MANAGER_TOOLS : PARTICIPANT_TOOLS;

  logInfo("sessions", `createSession START for ${agentId} (model=${model}, stub=${USE_STUB_SDK})`);

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt: initialPrompt,
    options: {
      model,
      systemPrompt,
      tools,
      cwd: ROOT_PROJECT_DIR,
      maxTurns: agentId === "manager" ? 1 : MAX_TURNS_PER_SPEECH,
      maxBudgetUsd: agentId === "manager" ? 0.10 : MAX_BUDGET_PER_SPEECH,
    },
  });

  let sessionId = "";
  let responseText = "";

  for await (const msg of query) {
    if (msg.type === "system" && (msg as any).subtype === "init") {
      sessionId = (msg as any).session_id;
    }
    if (msg.type === "result" && (msg as any).subtype === "success") {
      responseText = (msg as any).result ?? "";
    }
  }

  if (!sessionId) throw new Error(`Failed to create session for ${agentId}`);

  sessionRegistry.set(agentId, sessionId);
  logInfo("sessions", `createSession DONE for ${agentId} (sessionId=${sessionId}), registry=[${[...sessionRegistry.keys()].join(', ')}]`);
  return { sessionId, responseText };
}

/**
 * Feed a message into an existing session and get the full response.
 * Uses the resume pattern with the session's ID.
 */
export async function feedMessage(
  agentId: AgentId | "manager",
  prompt: string,
): Promise<string> {
  const sessionId = sessionRegistry.get(agentId);
  if (!sessionId) {
    logError("session-manager", `feedMessage: no session for ${agentId}`, { registry: [...sessionRegistry.keys()] });
    throw new Error(`No session found for ${agentId}`);
  }

  logInfo("session-manager", `feedMessage: ${agentId} (session=${sessionId})`);
  const model = agentId === "manager" ? MANAGER_MODEL : PARTICIPANT_MODEL;

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt,
    options: {
      resume: sessionId,
      model,
      maxTurns: 1,
      cwd: ROOT_PROJECT_DIR,
    },
  });

  activeQueries.set(agentId, query);

  let responseText = "";
  for await (const msg of query) {
    if (msg.type === "result" && (msg as any).subtype === "success") {
      responseText = (msg as any).result ?? "";
    }
  }

  activeQueries.delete(agentId);
  logInfo("session-manager", `feedMessage: ${agentId} done (${responseText.length} chars)`);
  return responseText;
}

/**
 * Feed a message and stream the response as an async generator of text chunks.
 * Used for Participant-Agent speeches.
 */
export async function* streamSpeech(
  agentId: AgentId,
  prompt: string,
): AsyncGenerator<{ type: "chunk"; text: string } | { type: "done"; fullText: string }> {
  const sessionId = sessionRegistry.get(agentId);
  if (!sessionId) throw new Error(`No session found for ${agentId}`);

  logInfo("session-manager", `streamSpeech: ${agentId} (session=${sessionId})`);


  const model = PARTICIPANT_MODEL;
  const tools = PARTICIPANT_TOOLS;

  const queryFn = await getQueryFn();
  const query = queryFn({
    prompt,
    options: {
      resume: sessionId,
      model,
      tools,
      includePartialMessages: true,
      maxTurns: MAX_TURNS_PER_SPEECH,
      maxBudgetUsd: MAX_BUDGET_PER_SPEECH,
      cwd: ROOT_PROJECT_DIR,
    },
  });

  activeQueries.set(agentId, query);

  let fullText = "";
  for await (const msg of query) {
    if (msg.type === "stream_event") {
      const delta = (msg as any).event?.delta?.text;
      if (delta) {
        fullText += delta;
        yield { type: "chunk", text: delta };
      }
    }
    if (msg.type === "result" && (msg as any).subtype === "success") {
      fullText = (msg as any).result ?? fullText;
    }
  }

  activeQueries.delete(agentId);
  logInfo("session-manager", `streamSpeech: ${agentId} done (${fullText.length} chars)`);
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

/** Clear all sessions (for testing or meeting end). */
export function clearSessions(): void {
  logInfo("sessions", `clearSessions (had ${sessionRegistry.size} sessions)`);
  sessionRegistry.clear();
  activeQueries.clear();
}

/** Register an existing session ID (for meeting resume). */
export function registerSession(agentId: AgentId | "manager", sessionId: string): void {
  sessionRegistry.set(agentId, sessionId);
}
