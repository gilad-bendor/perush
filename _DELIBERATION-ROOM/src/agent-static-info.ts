/**
 * agent-static-info.ts — Agent discovery and static identity data.
 *
 * Discovers available Participant-Agents from participant-agents/*.md,
 * caches them for the server's lifetime, and exposes lookup helpers.
 * This module is intentionally low-dependency so any layer can import it
 * without pulling in session or orchestrator logic.
 *
 * Imports from: types.ts, config.ts, logs.ts
 */

import { readdir, readFile } from "fs/promises";
import { join, basename } from "path";
import matter from "gray-matter";
import type { AgentDefinition, AgentId } from "./types";
import { AgentDefinitionSchema } from "./types";
import { PARTICIPANT_AGENTS_DIR } from "./config";
import { logInfo } from "./logs";

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

  logInfo("agent-static-info", `discoverAgents: scanning ${PARTICIPANT_AGENTS_DIR}`);
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
  logInfo("agent-static-info", `discoverAgents: found [${agents.map(a => a.id).join(", ")}]`);
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
