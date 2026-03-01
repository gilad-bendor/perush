/**
 * types.ts — Zod schemas and TypeScript types for the Deliberation Room.
 *
 * This is the lowest-level module: no imports from other src/ files.
 * All other modules import types from here.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Branded string types
// ---------------------------------------------------------------------------

/** Agent ID — derived from persona filename without .md (e.g., "milo", "archi") */
export type AgentId = string;

/** Speaker ID — an agent or the human director */
export type SpeakerId = AgentId | "human";

/** Meeting ID — slug derived from title + timestamp */
export type MeetingId = string;

// ---------------------------------------------------------------------------
// FormattedTime — display string + epoch ms
// ---------------------------------------------------------------------------

/**
 * Format: "YYYY-MM-DD HH:MM:SS (<ms since epoch>)"
 * When parsing — use the epoch ms inside parentheses.
 */
export type FormattedTime = string;

/** Create a FormattedTime from a Date (or now). */
export function createFormattedTime(date: Date = new Date()): FormattedTime {
  const y = date.getFullYear();
  const mo = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const h = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  return `${y}-${mo}-${d} ${h}:${mi}:${s} (${date.getTime()})`;
}

/** Parse a FormattedTime → Date. Uses the epoch ms in parentheses. */
export function parseFormattedTime(ft: FormattedTime): Date {
  const match = ft.match(/\((\d+)\)/);
  if (!match) throw new Error(`Invalid FormattedTime: ${ft}`);
  return new Date(Number(match[1]));
}

// ---------------------------------------------------------------------------
// Meeting mode
// ---------------------------------------------------------------------------

export const MeetingModeSchema = z.enum(["Perush-Development"]);
export type MeetingMode = z.infer<typeof MeetingModeSchema>;

// ---------------------------------------------------------------------------
// AgentDefinition — discovered from participant-agents/*.md
// ---------------------------------------------------------------------------

export const AgentDefinitionSchema = z.object({
  id: z.string(),
  englishName: z.string(),
  hebrewName: z.string(),
  roleTitle: z.string(),
  managerIntro: z.string(),
  managerTip: z.string(),
  filePath: z.string(),
});
export type AgentDefinition = z.infer<typeof AgentDefinitionSchema>;

// ---------------------------------------------------------------------------
// Conversation message
// ---------------------------------------------------------------------------

export const ConversationMessageSchema = z.object({
  speaker: z.string(), // SpeakerId
  content: z.string(),
  timestamp: z.string(), // FormattedTime
});
export type ConversationMessage = z.infer<typeof ConversationMessageSchema>;

// ---------------------------------------------------------------------------
// Private assessment (per participant-agent, per cycle)
// ---------------------------------------------------------------------------

export const PrivateAssessmentSchema = z.object({
  agent: z.string(), // AgentId
  selfImportance: z.number().int().min(1).max(10),
  humanImportance: z.number().int().min(1).max(10),
  summary: z.string(),
});
export type PrivateAssessment = z.infer<typeof PrivateAssessmentSchema>;

// ---------------------------------------------------------------------------
// Manager decision
// ---------------------------------------------------------------------------

export const ManagerDecisionSchema = z.object({
  nextSpeaker: z.string(), // SpeakerId — validated against meeting participants at runtime
  vibe: z.string(),
});
export type ManagerDecision = z.infer<typeof ManagerDecisionSchema>;

// ---------------------------------------------------------------------------
// Cycle record
// ---------------------------------------------------------------------------

export const CycleRecordSchema = z.object({
  cycleNumber: z.number().int().positive(),
  speech: ConversationMessageSchema,
  assessments: z.record(z.string(), PrivateAssessmentSchema),
  managerDecision: ManagerDecisionSchema,
});
export type CycleRecord = z.infer<typeof CycleRecordSchema>;

// ---------------------------------------------------------------------------
// Meeting — the full meeting.yaml schema
// ---------------------------------------------------------------------------

export const MeetingSchema = z.object({
  meetingId: z.string(),
  mode: MeetingModeSchema,
  title: z.string(),
  openingPrompt: z.string(),
  participants: z.array(z.string()).min(1), // AgentId[]
  cycles: z.array(CycleRecordSchema),
  startedAt: z.string(), // FormattedTime
  lastEngagedAt: z.string().optional(), // FormattedTime
  sessionIds: z.record(z.string(), z.string()), // Record<AgentId | "manager", sessionId>
  totalCostEstimate: z.number().optional(),
});
export type Meeting = z.infer<typeof MeetingSchema>;

// ---------------------------------------------------------------------------
// Meeting summary (for listing)
// ---------------------------------------------------------------------------

export const MeetingSummarySchema = z.object({
  meetingId: z.string(),
  branch: z.string(),
  lastActivity: z.string(),
  lastCommitMsg: z.string(),
  title: z.string().optional(),
  cycleCount: z.number().optional(),
  participants: z.array(z.string()).optional(),
});
export type MeetingSummary = z.infer<typeof MeetingSummarySchema>;

// ---------------------------------------------------------------------------
// Server → Client WebSocket messages
// ---------------------------------------------------------------------------

export const WsSpeechSchema = z.object({
  type: z.literal("speech"),
  speaker: z.string(),
  content: z.string(),
  timestamp: z.string(),
});

export const WsSpeechChunkSchema = z.object({
  type: z.literal("speech-chunk"),
  speaker: z.string(),
  delta: z.string(),
});

export const WsSpeechDoneSchema = z.object({
  type: z.literal("speech-done"),
  speaker: z.string(),
});

export const WsAssessmentSchema = z.object({
  type: z.literal("assessment"),
  agent: z.string(),
  selfImportance: z.number(),
  humanImportance: z.number(),
  summary: z.string(),
});

export const WsToolActivitySchema = z.object({
  type: z.literal("tool-activity"),
  agent: z.string(),
  toolName: z.string(),
  status: z.enum(["started", "completed"]),
  detail: z.string().optional(),
});

export const WsVibeSchema = z.object({
  type: z.literal("vibe"),
  vibe: z.string(),
  nextSpeaker: z.string(),
});

export const WsPhaseSchema = z.object({
  type: z.literal("phase"),
  phase: z.enum(["assessing", "selecting", "speaking", "human-turn", "idle", "rolling-back"]),
  activeSpeaker: z.string().optional(),
});

export const WsYourTurnSchema = z.object({
  type: z.literal("your-turn"),
});

export const WsSyncSchema = z.object({
  type: z.literal("sync"),
  meeting: MeetingSchema,
  currentPhase: z.string(),
  readOnly: z.boolean().optional(),
  editingCycle: z.number().optional(),
});

export const WsErrorSchema = z.object({
  type: z.literal("error"),
  message: z.string(),
});

export const WsAttentionAckSchema = z.object({
  type: z.literal("attention-ack"),
});

export const WsRollbackProgressSchema = z.object({
  type: z.literal("rollback-progress"),
  step: z.enum(["aborting", "git-reset", "perush-rollback", "session-recovery", "complete"]),
  detail: z.string().optional(),
});

/** Discriminated union of all server→client messages */
export const ServerMessageSchema = z.discriminatedUnion("type", [
  WsSpeechSchema,
  WsSpeechChunkSchema,
  WsSpeechDoneSchema,
  WsAssessmentSchema,
  WsToolActivitySchema,
  WsVibeSchema,
  WsPhaseSchema,
  WsYourTurnSchema,
  WsSyncSchema,
  WsErrorSchema,
  WsAttentionAckSchema,
  WsRollbackProgressSchema,
]);
export type ServerMessage = z.infer<typeof ServerMessageSchema>;

// ---------------------------------------------------------------------------
// Client → Server WebSocket messages
// ---------------------------------------------------------------------------

export const WsHumanSpeechSchema = z.object({
  type: z.literal("human-speech"),
  content: z.string(),
});

export const WsCommandSchema = z.object({
  type: z.literal("command"),
  command: z.string(),
});

export const WsStartMeetingSchema = z.object({
  type: z.literal("start-meeting"),
  title: z.string().min(1),
  openingPrompt: z.string().min(1),
  participants: z.array(z.string()).min(1),
});

export const WsResumeMeetingSchema = z.object({
  type: z.literal("resume-meeting"),
  meetingId: z.string(),
});

export const WsViewMeetingSchema = z.object({
  type: z.literal("view-meeting"),
  meetingId: z.string(),
});

export const WsAttentionSchema = z.object({
  type: z.literal("attention"),
});

export const WsRollbackSchema = z.object({
  type: z.literal("rollback"),
  targetCycleNumber: z.number().int().min(0),
});

/** Discriminated union of all client→server messages */
export const ClientMessageSchema = z.discriminatedUnion("type", [
  WsHumanSpeechSchema,
  WsCommandSchema,
  WsStartMeetingSchema,
  WsResumeMeetingSchema,
  WsViewMeetingSchema,
  WsAttentionSchema,
  WsRollbackSchema,
]);
export type ClientMessage = z.infer<typeof ClientMessageSchema>;

// ---------------------------------------------------------------------------
// Phase type (extracted for reuse)
// ---------------------------------------------------------------------------

export type Phase = "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back";
