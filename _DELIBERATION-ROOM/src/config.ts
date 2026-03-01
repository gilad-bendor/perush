/**
 * config.ts — Centralized configuration for the Deliberation Room.
 *
 * Every configurable value lives here. No magic numbers or hardcoded
 * strings in other modules. When tuning the system, this is the
 * first place to look.
 *
 * Imports only from: types.ts
 */

import { resolve, join } from "path";
import { homedir } from "os";

// ---------------------------------------------------------------------------
// Network
// ---------------------------------------------------------------------------

/** HTTP + WebSocket server port (env-overridable for testing) */
export const SERVER_PORT = Number(process.env.SERVER_PORT) || 4100;

/** WebSocket reconnection base interval (ms) — client-side */
export const WS_RECONNECT_BASE_MS = 1000;

/** WebSocket reconnection max interval (ms) — client-side */
export const WS_RECONNECT_MAX_MS = 30_000;

/** Director input timeout before meeting pauses (ms) — 10 minutes */
export const DIRECTOR_TIMEOUT_MS = 10 * 60 * 1000;

// ---------------------------------------------------------------------------
// Models
// ---------------------------------------------------------------------------

/** Model for Participant-Agent sessions (env-overridable for testing with Haiku) */
export const PARTICIPANT_MODEL = process.env.PARTICIPANT_MODEL || "claude-opus-4-6";

/** Model for Conversation-Manager-Agent session (env-overridable for testing with Haiku) */
export const MANAGER_MODEL = process.env.MANAGER_MODEL || "claude-sonnet-4-6";

// ---------------------------------------------------------------------------
// Cost caps
// ---------------------------------------------------------------------------

/** Max budget per speech query (USD) — generous safety net, not a constraint */
export const MAX_BUDGET_PER_SPEECH = 2.0;

/** Max agentic turns per speech query — generous safety net */
export const MAX_TURNS_PER_SPEECH = 25;

/** Estimated cost per deliberation cycle (USD) — for display purposes */
export const ESTIMATED_COST_PER_CYCLE = 0.50;

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

/** This directory: _DELIBERATION-ROOM/ */
export const DELIBERATION_DIR = resolve(import.meta.dir, "..");

/** Root project directory: perush/ (parent of _DELIBERATION-ROOM) */
export const ROOT_PROJECT_DIR = resolve(DELIBERATION_DIR, "..");

/** Participant-agent persona files */
export const PARTICIPANT_AGENTS_DIR = join(DELIBERATION_DIR, "participant-agents");

/** Worktree mount point for active meetings (gitignored on main) */
export const MEETINGS_DIR = join(DELIBERATION_DIR, "meetings");

/** Main CLAUDE.md with dictionary and methodology */
export const ROOT_CLAUDE_MD = join(ROOT_PROJECT_DIR, "CLAUDE.md");

/**
 * Derive the Claude Code projects directory for this project.
 *
 * Claude Code stores session data under ~/.claude/projects/ with one
 * subdirectory per project. The name is the project's absolute path
 * with ALL non-alphanumeric characters replaced by hyphens, prefixed
 * with a leading hyphen.
 *
 * SDK smoke test confirmed: underscores, slashes, and all other
 * non-alphanumeric chars become hyphens.
 *
 * Example: /Users/giladben-dor/dev/perush → -Users-giladben-dor-dev-perush
 */
export function getClaudeProjectDir(): string {
  const dirName = ROOT_PROJECT_DIR.replace(/[^a-zA-Z0-9]/g, "-").replace(/^-/, "");
  return join(homedir(), ".claude", "projects", `-${dirName}`);
}

// ---------------------------------------------------------------------------
// SDK environment cleanup
// ---------------------------------------------------------------------------

/**
 * Environment variables to strip when spawning Agent SDK sessions.
 *
 * When the deliberation server runs inside a Claude Code session (during
 * development), these vars prevent child SDK processes from starting.
 * SDK smoke test confirmed: "Claude Code cannot be launched inside
 * another Claude Code session."
 */
export const SDK_ENV_VARS_TO_STRIP = [
  "CLAUDECODE",
  "CLAUDE_CODE_ENTRYPOINT",
  "CLAUDE_CODE_SSE_PORT",
];

/**
 * Return a cleaned copy of process.env suitable for Agent SDK sessions.
 */
export function getCleanEnv(): Record<string, string> {
  const env = { ...process.env } as Record<string, string>;
  for (const key of SDK_ENV_VARS_TO_STRIP) {
    delete env[key];
  }
  return env;
}

// ---------------------------------------------------------------------------
// Git
// ---------------------------------------------------------------------------

/** Branch prefix for meeting branches */
export const SESSION_BRANCH_PREFIX = "sessions/";

/** Tag prefix for cross-branch rollback tags */
export const TAG_PREFIX = "session-cycle/";

/** Commit message for initial meeting creation */
export const COMMIT_INITIAL = "Initial: meeting created";

/** Commit message template for a cycle: `Cycle N: <speaker>` */
export function commitCycleMessage(cycleNumber: number, speaker: string): string {
  return `Cycle ${cycleNumber}: ${speaker}`;
}

/** Commit message for meeting end */
export const COMMIT_MEETING_ENDED = "Meeting ended";

/** Commit message for server shutdown mid-meeting */
export const COMMIT_SERVER_SHUTDOWN = "Server shutdown: partial cycle";

/** Commit message template for session recovery */
export function commitSessionRecovery(agentId: string): string {
  return `Session recovery: ${agentId}`;
}

/** Commit message template for rollback */
export function commitRollback(targetCycle: number): string {
  return `Rollback to cycle ${targetCycle} + session recovery`;
}

/** Commit message template for perush update on main */
export function commitPerushUpdate(cycleNumber: number, meetingId: string): string {
  return `Cycle ${cycleNumber}: perush update (${meetingId})`;
}

/** Commit message for meeting resume */
export const COMMIT_MEETING_RESUMED = "Meeting resumed";

// ---------------------------------------------------------------------------
// Timing / UI
// ---------------------------------------------------------------------------

/** Vibe bar fade-transition duration (ms) — client-side */
export const VIBE_FADE_MS = 300;

/** Attention button pulse animation duration (ms) — client-side */
export const ATTENTION_PULSE_MS = 600;

// ---------------------------------------------------------------------------
// Stub SDK
// ---------------------------------------------------------------------------

/** When true, use the stub SDK instead of the real Agent SDK */
export const USE_STUB_SDK = process.env.USE_STUB_SDK === "true" || process.env.NODE_ENV === "test";

/** Delay between streaming chunks in stub mode (ms) */
export const STUB_RESPONSE_DELAY_MS = 50;

// ---------------------------------------------------------------------------
// Assessment
// ---------------------------------------------------------------------------

/** Minimum value for importance scores */
export const IMPORTANCE_SCALE_MIN = 1;

/** Maximum value for importance scores */
export const IMPORTANCE_SCALE_MAX = 10;

// ---------------------------------------------------------------------------
// Agent persona files
// ---------------------------------------------------------------------------

/** Shared prefix prepended to ALL AI-Agents */
export const BASE_PREFIX_FILE = "_base-prefix.md";

/** Participant-Agent-only prefix (introduces fellow participants) */
export const AGENTS_PREFIX_FILE = "_agents-prefix.md";

/** Conversation-Manager-Agent file */
export const CONVERSATION_MANAGER_FILE = "_conversation-manager.md";

/** Dictionary injection marker in _base-prefix.md */
export const DICTIONARY_INJECTION_POINT = "<!-- DICTIONARY_INJECTION_POINT -->";

// ---------------------------------------------------------------------------
// Participant tools
// ---------------------------------------------------------------------------

/** Tools available to Participant-Agent sessions */
export const PARTICIPANT_TOOLS: string[] = ["Read", "Bash", "Grep", "Glob"];

/** Tools available to Conversation-Manager-Agent session (none) */
export const MANAGER_TOOLS: string[] = [];
