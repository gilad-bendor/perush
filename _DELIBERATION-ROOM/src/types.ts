/**
 * types.ts — Zod schemas and TypeScript types for the Deliberation Room.
 *
 * This is the lowest-level module: no imports from other src/ files.
 * All other modules import types from here.
 *
 * ## Type Declaration Methodology
 *
 * We avoid `z.infer<typeof XSchema>` entirely. IDEs (especially VS Code)
 * often struggle to resolve `z.infer<>` — hovering a type shows an opaque
 * alias or a deeply nested Zod utility type instead of the actual shape.
 * This makes development harder: autocomplete is less useful, hover tooltips
 * are unreadable, and "go to definition" lands on Zod internals.
 *
 * Instead, every Zod schema has a **manually written TypeScript type** with
 * the full definition, followed by a compile-time assertion:
 *
 *     export const FooSchema = z.object({ bar: z.string() });
 *     export type Foo = { bar: string };
 *     assertZodTypeMatch<Foo, typeof FooSchema>(true);
 *
 * The `assertZodTypeMatch` call (from `types-asserts.ts`) is a zero-runtime
 * utility: it compiles to nothing, but produces a type error if the manual
 * type and the Zod schema ever diverge — including mismatched property names,
 * missing fields, or optional/required mismatches.
 *
 * This gives us the best of both worlds: Zod for runtime validation at
 * boundaries, and clean explicit types for everything else.
 */

import { z } from "zod";
import {assertZodTypeMatch} from "./types-asserts.ts";

// ---------------------------------------------------------------------------
// Branded string types
// ---------------------------------------------------------------------------

/**
 * Agent ID — derived from persona filename without .md (e.g., "milo", "archi").
 *
 * The `(string & {})` arm lets any string be assigned to AgentId without casting,
 * while the literal members still surface in IDE autocomplete suggestions.
 * Agent IDs are dynamic (discovered from persona files), so this must accept any string.
 */
export type AgentId =
    | "archi"
    | "barak"
    | "kashia"
    | "milo";

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
export type MeetingMode = "Perush-Development";
assertZodTypeMatch<MeetingMode, typeof MeetingModeSchema>(true);

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
export type AgentDefinition = {
  id: string; // AgentId
  englishName: string;
  hebrewName: string;
  roleTitle: string;
  managerIntro: string;
  managerTip: string;
  filePath: string;
};
assertZodTypeMatch<AgentDefinition, typeof AgentDefinitionSchema>(true);

// ---------------------------------------------------------------------------
// Conversation message
// ---------------------------------------------------------------------------

export const ConversationMessageSchema = z.object({
  speaker: z.string(), // SpeakerId
  content: z.string(),
  timestamp: z.string(), // FormattedTime
});
export type ConversationMessage = {
  speaker: string; // SpeakerId — kept as string for Zod compatibility
  content: string;
  timestamp: FormattedTime;
};
assertZodTypeMatch<ConversationMessage, typeof ConversationMessageSchema>(true);

// ---------------------------------------------------------------------------
// Private assessment (per participant-agent, per cycle)
// ---------------------------------------------------------------------------

export const PrivateAssessmentSchema = z.object({
  agent: z.string(), // AgentId
  selfImportance: z.number().int().min(1).max(10),
  humanImportance: z.number().int().min(1).max(10),
  summary: z.string(),
});
export type PrivateAssessment = {
  agent: string; // AgentId
  selfImportance: number;
  humanImportance: number;
  summary: string;
};
assertZodTypeMatch<PrivateAssessment, typeof PrivateAssessmentSchema>(true);

// ---------------------------------------------------------------------------
// Manager decision
// ---------------------------------------------------------------------------

export const ManagerDecisionSchema = z.object({
  nextSpeaker: z.string(), // SpeakerId — validated against meeting participants at runtime
  vibe: z.string(),
});
export type ManagerDecision = {
  nextSpeaker: string; // SpeakerId — validated at runtime against meeting participants
  vibe: string;
};
assertZodTypeMatch<ManagerDecision, typeof ManagerDecisionSchema>(true);

// ---------------------------------------------------------------------------
// Cycle record
// ---------------------------------------------------------------------------

export const CycleRecordSchema = z.object({
  cycleNumber: z.number().int().positive(),
  speech: ConversationMessageSchema,
  assessments: z.record(z.string(), PrivateAssessmentSchema),
  managerDecision: ManagerDecisionSchema,
});
export type CycleRecord = {
  cycleNumber: number;
  speech: ConversationMessage;
  assessments: Record<string, PrivateAssessment>; // Record<AgentId, PrivateAssessment>
  managerDecision: ManagerDecision;
};
assertZodTypeMatch<CycleRecord, typeof CycleRecordSchema>(true);

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
export type Meeting = {
  meetingId: MeetingId;
  mode: MeetingMode;
  title: string;
  openingPrompt: string;
  participants: string[]; // AgentId[] — kept as string[] for Zod compatibility
  cycles: CycleRecord[];
  startedAt: FormattedTime;
  lastEngagedAt?: FormattedTime;
  sessionIds: Record<string, string>; // Record<AgentId | "manager", string>
  totalCostEstimate?: number;
};
assertZodTypeMatch<Meeting, typeof MeetingSchema>(true);

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
export type MeetingSummary = {
  meetingId: MeetingId;
  branch: string;
  lastActivity: string;
  lastCommitMsg: string;
  title?: string;
  cycleCount?: number;
  participants?: string[]; // AgentId[]
};
assertZodTypeMatch<MeetingSummary, typeof MeetingSummarySchema>(true);

// ---------------------------------------------------------------------------
// Server → Client WebSocket messages
// ---------------------------------------------------------------------------

export const WsSpeechSchema = z.object({
  type: z.literal("speech"),
  messageId: z.string(),
  speaker: z.string(),
  content: z.string(),
  timestamp: z.string(),
});
export type WsSpeech = {
  type: "speech";
  messageId: string;
  speaker: string; // SpeakerId
  content: string;
  timestamp: FormattedTime;
};
assertZodTypeMatch<WsSpeech, typeof WsSpeechSchema>(true);

export const WsSpeechChunkSchema = z.object({
  type: z.literal("speech-chunk"),
  messageId: z.string(),
  speaker: z.string(),
  delta: z.string(),
});
export type WsSpeechChunk = {
  type: "speech-chunk";
  messageId: string;
  speaker: string; // SpeakerId
  delta: string;
};
assertZodTypeMatch<WsSpeechChunk, typeof WsSpeechChunkSchema>(true);

export const WsSpeechDoneSchema = z.object({
  type: z.literal("speech-done"),
  messageId: z.string(),
  speaker: z.string(),
});
export type WsSpeechDone = {
  type: "speech-done";
  messageId: string;
  speaker: string; // SpeakerId
};
assertZodTypeMatch<WsSpeechDone, typeof WsSpeechDoneSchema>(true);

export const WsAssessmentSchema = z.object({
  type: z.literal("assessment"),
  messageId: z.string(),
  agent: z.string(),
  selfImportance: z.number(),
  humanImportance: z.number(),
  summary: z.string(),
});
export type WsAssessment = {
  type: "assessment";
  messageId: string;
  agent: string; // AgentId
  selfImportance: number;
  humanImportance: number;
  summary: string;
};
assertZodTypeMatch<WsAssessment, typeof WsAssessmentSchema>(true);

export const WsToolActivitySchema = z.object({
  type: z.literal("tool-activity"),
  messageId: z.string(),
  agent: z.string(),
  toolName: z.string(),
  status: z.enum(["started", "completed"]),
  detail: z.string().optional(),
});
export type WsToolActivity = {
  type: "tool-activity";
  messageId: string;
  agent: string; // AgentId
  toolName: string;
  status: "started" | "completed";
  detail?: string;
};
assertZodTypeMatch<WsToolActivity, typeof WsToolActivitySchema>(true);

export const WsVibeSchema = z.object({
  type: z.literal("vibe"),
  messageId: z.string(),
  vibe: z.string(),
  nextSpeaker: z.string(),
});
export type WsVibe = {
  type: "vibe";
  messageId: string;
  vibe: string;
  nextSpeaker: string; // SpeakerId
};
assertZodTypeMatch<WsVibe, typeof WsVibeSchema>(true);

export const WsPhaseSchema = z.object({
  type: z.literal("phase"),
  messageId: z.string(),
  phase: z.enum(["assessing", "selecting", "speaking", "human-turn", "idle", "rolling-back"]),
  activeSpeaker: z.string().optional(),
});
export type WsPhase = {
  type: "phase";
  messageId: string;
  phase: "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back";
  activeSpeaker?: string; // SpeakerId
};
assertZodTypeMatch<WsPhase, typeof WsPhaseSchema>(true);

export const WsYourTurnSchema = z.object({
  type: z.literal("your-turn"),
  messageId: z.string(),
});
export type WsYourTurn = {
  type: "your-turn";
  messageId: string;
};
assertZodTypeMatch<WsYourTurn, typeof WsYourTurnSchema>(true);

export const WsSyncSchema = z.object({
  type: z.literal("sync"),
  messageId: z.string(),
  meeting: MeetingSchema,
  currentPhase: z.string(),
  readOnly: z.boolean().optional(),
  editingCycle: z.number().optional(),
});
export type WsSync = {
  type: "sync";
  messageId: string;
  meeting: Meeting;
  currentPhase: string;
  readOnly?: boolean;
  editingCycle?: number;
};
assertZodTypeMatch<WsSync, typeof WsSyncSchema>(true);

export const WsErrorSchema = z.object({
  type: z.literal("error"),
  messageId: z.string(),
  message: z.string(),
});
export type WsError = {
  type: "error";
  messageId: string;
  message: string;
};
assertZodTypeMatch<WsError, typeof WsErrorSchema>(true);

export const WsAttentionAckSchema = z.object({
  type: z.literal("attention-ack"),
  messageId: z.string(),
});
export type WsAttentionAck = {
  type: "attention-ack";
  messageId: string;
};
assertZodTypeMatch<WsAttentionAck, typeof WsAttentionAckSchema>(true);

export const WsRollbackProgressSchema = z.object({
  type: z.literal("rollback-progress"),
  messageId: z.string(),
  step: z.enum(["aborting", "git-reset", "perush-rollback", "session-recovery", "complete"]),
  detail: z.string().optional(),
});
export type WsRollbackProgress = {
  type: "rollback-progress";
  messageId: string;
  step: "aborting" | "git-reset" | "perush-rollback" | "session-recovery" | "complete";
  detail?: string;
};
assertZodTypeMatch<WsRollbackProgress, typeof WsRollbackProgressSchema>(true);

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
export type ServerMessage =
  | WsSpeech
  | WsSpeechChunk
  | WsSpeechDone
  | WsAssessment
  | WsToolActivity
  | WsVibe
  | WsPhase
  | WsYourTurn
  | WsSync
  | WsError
  | WsAttentionAck
  | WsRollbackProgress;
assertZodTypeMatch<ServerMessage, typeof ServerMessageSchema>(true);

// ---------------------------------------------------------------------------
// Client → Server WebSocket messages
// ---------------------------------------------------------------------------

export const WsHumanSpeechSchema = z.object({
  type: z.literal("human-speech"),
  messageId: z.string(),
  content: z.string(),
});
export type WsHumanSpeech = {
  type: "human-speech";
  messageId: string;
  content: string;
};
assertZodTypeMatch<WsHumanSpeech, typeof WsHumanSpeechSchema>(true);

export const WsCommandSchema = z.object({
  type: z.literal("command"),
  messageId: z.string(),
  command: z.string(),
});
export type WsCommand = {
  type: "command";
  messageId: string;
  command: string;
};
assertZodTypeMatch<WsCommand, typeof WsCommandSchema>(true);

export const WsStartMeetingSchema = z.object({
  type: z.literal("start-meeting"),
  messageId: z.string(),
  title: z.string().min(1),
  openingPrompt: z.string().min(1),
  participants: z.array(z.string()).min(1),
});
export type WsStartMeeting = {
  type: "start-meeting";
  messageId: string;
  title: string;
  openingPrompt: string;
  participants: string[]; // AgentId[]
};
assertZodTypeMatch<WsStartMeeting, typeof WsStartMeetingSchema>(true);

export const WsResumeMeetingSchema = z.object({
  type: z.literal("resume-meeting"),
  messageId: z.string(),
  meetingId: z.string(),
});
export type WsResumeMeeting = {
  type: "resume-meeting";
  messageId: string;
  meetingId: MeetingId;
};
assertZodTypeMatch<WsResumeMeeting, typeof WsResumeMeetingSchema>(true);

export const WsViewMeetingSchema = z.object({
  type: z.literal("view-meeting"),
  messageId: z.string(),
  meetingId: z.string(),
});
export type WsViewMeeting = {
  type: "view-meeting";
  messageId: string;
  meetingId: MeetingId;
};
assertZodTypeMatch<WsViewMeeting, typeof WsViewMeetingSchema>(true);

export const WsAttentionSchema = z.object({
  type: z.literal("attention"),
  messageId: z.string(),
});
export type WsAttention = {
  type: "attention";
  messageId: string;
};
assertZodTypeMatch<WsAttention, typeof WsAttentionSchema>(true);

export const WsRollbackSchema = z.object({
  type: z.literal("rollback"),
  messageId: z.string(),
  targetCycleNumber: z.number().int().min(0),
});
export type WsRollback = {
  type: "rollback";
  messageId: string;
  targetCycleNumber: number;
};
assertZodTypeMatch<WsRollback, typeof WsRollbackSchema>(true);

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
export type ClientMessage =
  | WsHumanSpeech
  | WsCommand
  | WsStartMeeting
  | WsResumeMeeting
  | WsViewMeeting
  | WsAttention
  | WsRollback;
assertZodTypeMatch<ClientMessage, typeof ClientMessageSchema>(true);

// ---------------------------------------------------------------------------
// Phase type (extracted for reuse)
// ---------------------------------------------------------------------------

export type Phase = "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back";
