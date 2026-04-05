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
export const AgentIdSchema = z.string();
export type AgentId =
    | "archi"
    | "barak"
    | "kashia"
    | "milo"
    | (string & {});

/** Speaker ID — an agent or the human director */
export const SpeakerIdSchema = z.string();
export type SpeakerId = AgentId | "human";

/** Meeting ID — slug derived from title + timestamp */
export const MeetingIdSchema = z.string() as z.ZodType<MeetingId>;
export type MeetingId = `${number}-${number}-${number}--${number}-${number}--${string}`;

/** Git Tag ID — "session-cycle/<meeting-id> */
export const TagIdPrefixSchema = z.string() as z.ZodType<TagIdPrefix>;
export type TagIdPrefix = `${typeof TAG_PREFIX}${MeetingId}`;

/** Git Tag ID — "session-cycle/<meeting-id>/c<N>/main */
export const TagIdMainSchema = z.string() as z.ZodType<TagIdMain>;
export type TagIdMain = `${typeof TAG_PREFIX}${MeetingId}/c${number}/main`;

/** Git Tag ID — "session-cycle/<meeting-id>/c<N>/session */
export const TagIdSessionSchema = z.string() as z.ZodType<TagIdSession>;
export type TagIdSession = `${typeof TAG_PREFIX}${MeetingId}/c${number}/session`;

/** Git Branch Name — "sessions/<meeting-id> */
export const BranchNameSchema = z.string() as z.ZodType<BranchName>;
export type BranchName = `${typeof SESSION_BRANCH_PREFIX}${MeetingId}`;

/** Message ID — "C<number>" for client-messages, or "S<number>" for server messages */
export const MessageIdSchema = z.string() as z.ZodType<MessageId>;
export type MessageId = `${"S"|"C"}${number}`;

// ---------------------------------------------------------------------------
// Git Branch-Name / Tag-Id
// ---------------------------------------------------------------------------

/** Branch prefix for meeting branches */
export const SESSION_BRANCH_PREFIX = "sessions/";

/** Tag prefix for cross-branch rollback tags */
export const TAG_PREFIX = "session-cycle/";

/** Tag suffix for "main" tag-ids */
export const TAG_SUFFIX_MAIN = "/main";

/** Tag suffix for "session" tag-ids */
export const TAG_SUFFIX_SESSION = "/session";

export function meetingIdToBranchName(meetingId: MeetingId): BranchName {
  return `${SESSION_BRANCH_PREFIX}${meetingId}`;
}
export function branchNameToMeetingId(branchName: BranchName): MeetingId {
  if (!branchName.startsWith(SESSION_BRANCH_PREFIX)) {
    throw new Error(`Invalid branch name ${JSON.stringify(branchName)}`);
  }
  return branchName.replace(SESSION_BRANCH_PREFIX, "") as MeetingId;
}

export function meetingIdToTagIdPrefix(meetingId: MeetingId): TagIdPrefix {
  return `${TAG_PREFIX}${meetingId}`;
}

export function cycleTagMain(meetingId: MeetingId, cycleNumber: number): TagIdMain {
  return `${TAG_PREFIX}${meetingId}/c${cycleNumber}${TAG_SUFFIX_MAIN}` as TagIdMain;
}

export function cycleTagSession(meetingId: MeetingId, cycleNumber: number): TagIdSession {
  return `${TAG_PREFIX}${meetingId}/c${cycleNumber}${TAG_SUFFIX_SESSION}` as TagIdSession;
}


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
  id: AgentIdSchema,
  englishName: z.string(),
  hebrewName: z.string(),
  roleTitle: z.string(),
  filePath: z.string(),
  frontmatterData: z.record(z.string(), z.string()),
});
export type AgentDefinition = {
  id: AgentId;
  englishName: string;
  hebrewName: string;
  roleTitle: string;
  filePath: string;
  /** All non-structural frontmatter fields (e.g., introForOthers, noteForOrchestrator). */
  frontmatterData: Record<string, string>;
};
assertZodTypeMatch<AgentDefinition, typeof AgentDefinitionSchema>(true);

// ---------------------------------------------------------------------------
// Conversation message
// ---------------------------------------------------------------------------

export const ConversationMessageSchema = z.object({
  speaker: SpeakerIdSchema,
  content: z.string(),
  timestamp: z.string(), // FormattedTime
});
export type ConversationMessage = {
  speaker: SpeakerId;
  content: string;
  timestamp: FormattedTime;
};
assertZodTypeMatch<ConversationMessage, typeof ConversationMessageSchema>(true);

// ---------------------------------------------------------------------------
// Private assessment (per participant-agent, per cycle)
// Free-form text extracted from the agent's response between delimiters.
// No algorithmic parsing — the orchestrator LLM reads these directly.
// ---------------------------------------------------------------------------

export const PrivateAssessmentSchema = z.object({
  agent: AgentIdSchema,
  text: z.string(),
});
export type PrivateAssessment = {
  agent: AgentId;
  text: string;
};
assertZodTypeMatch<PrivateAssessment, typeof PrivateAssessmentSchema>(true);

// ---------------------------------------------------------------------------
// Orchestrator decision
// ---------------------------------------------------------------------------

export const OrchestratorDecisionSchema = z.object({
  nextSpeaker: SpeakerIdSchema, // validated against meeting participants at runtime
  statusRead: z.string(),
});
export type OrchestratorDecision = {
  nextSpeaker: SpeakerId;
  statusRead: string;
};
assertZodTypeMatch<OrchestratorDecision, typeof OrchestratorDecisionSchema>(true);

// ---------------------------------------------------------------------------
// Process records — full SDK interaction traces per cycle
// ---------------------------------------------------------------------------

export const ProcessEventKindSchema = z.enum(["system-prompt", "prompt", "thinking", "text", "tool-call", "tool-result"]);
export type ProcessEventKind = "system-prompt" | "prompt" | "thinking" | "text" | "tool-call" | "tool-result";
assertZodTypeMatch<ProcessEventKind, typeof ProcessEventKindSchema>(true);

export const ProcessKindSchema = z.enum(["assessment", "orchestrator-selection", "agent-speech"]);
export type ProcessKind = "assessment" | "orchestrator-selection" | "agent-speech";
assertZodTypeMatch<ProcessKind, typeof ProcessKindSchema>(true);

export const ProcessEventRecordSchema = z.object({
  eventKind: ProcessEventKindSchema,
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.string().optional(),
});
export type ProcessEventRecord = {
  eventKind: ProcessEventKind;
  content: string;
  toolName?: string;
  toolInput?: string;
};
assertZodTypeMatch<ProcessEventRecord, typeof ProcessEventRecordSchema>(true);

export const ProcessRecordSchema = z.object({
  processId: z.string(),
  processKind: ProcessKindSchema,
  agent: z.string(), // AgentId | "orchestrator"
  events: z.array(ProcessEventRecordSchema),
});
export type ProcessRecord = {
  processId: string;
  processKind: ProcessKind;
  agent: AgentId | "orchestrator";
  events: ProcessEventRecord[];
};
assertZodTypeMatch<ProcessRecord, typeof ProcessRecordSchema>(true);

// ---------------------------------------------------------------------------
// Cycle record
// ---------------------------------------------------------------------------

export const CycleRecordSchema = z.object({
  cycleNumber: z.number().int().positive(),
  speech: ConversationMessageSchema,
  assessments: z.record(z.string(), PrivateAssessmentSchema),
  orchestratorDecision: OrchestratorDecisionSchema,
  processes: z.array(ProcessRecordSchema).optional(),
});
export type CycleRecord = {
  cycleNumber: number;
  speech: ConversationMessage;
  assessments: Record<string, PrivateAssessment>;
  orchestratorDecision: OrchestratorDecision;
  processes?: ProcessRecord[];
};
assertZodTypeMatch<CycleRecord, typeof CycleRecordSchema>(true);

// ---------------------------------------------------------------------------
// Meeting — the full meeting.yaml schema
// ---------------------------------------------------------------------------

export const MeetingSchema = z.object({
  meetingId: MeetingIdSchema,
  mode: MeetingModeSchema,
  title: z.string(),
  openingPrompt: z.string().optional(),
  participants: z.array(AgentIdSchema).min(1), // AgentId[]
  cycles: z.array(CycleRecordSchema),
  startedAt: z.string(), // FormattedTime
  lastEngagedAt: z.string().optional(), // FormattedTime
  sessionIds: z.record(z.string(), z.string()),
  totalCostEstimate: z.number().optional(),
});
export type Meeting = {
  meetingId: MeetingId;
  mode: MeetingMode;
  title: string;
  openingPrompt?: string;
  participants: AgentId[];
  cycles: CycleRecord[];
  startedAt: FormattedTime;
  lastEngagedAt?: FormattedTime;
  sessionIds: Record<string, string>;
  totalCostEstimate?: number;
};
assertZodTypeMatch<Meeting, typeof MeetingSchema>(true);

// ---------------------------------------------------------------------------
// Meeting summary (for listing)
// ---------------------------------------------------------------------------

export const MeetingSummarySchema = z.object({
  meetingId: MeetingIdSchema,
  branch: z.string(),
  lastActivity: z.string(),
  lastCommitMsg: z.string(),
  title: z.string().optional(),
  cycleCount: z.number().optional(),
  participants: z.array(AgentIdSchema).optional(),
});
export type MeetingSummary = {
  meetingId: MeetingId;
  branch: string;
  lastActivity: string;
  lastCommitMsg: string;
  title?: string;
  cycleCount?: number;
  participants?: AgentId[];
};
assertZodTypeMatch<MeetingSummary, typeof MeetingSummarySchema>(true);

// ---------------------------------------------------------------------------
// Server → Client WebSocket messages
// ---------------------------------------------------------------------------

export const WsSpeechSchema = z.object({
  type: z.literal("speech"),
  messageId: MessageIdSchema,
  speaker: SpeakerIdSchema,
  content: z.string(),
  timestamp: z.string(),
  cycleCost: z.number().optional(),
});
export type WsSpeech = {
  type: "speech";
  messageId: MessageId;
  speaker: SpeakerId;
  content: string;
  timestamp: FormattedTime;
  cycleCost?: number;
};
assertZodTypeMatch<WsSpeech, typeof WsSpeechSchema>(true);

export const WsSpeechChunkSchema = z.object({
  type: z.literal("speech-chunk"),
  messageId: MessageIdSchema,
  speaker: SpeakerIdSchema,
  delta: z.string(),
});
export type WsSpeechChunk = {
  type: "speech-chunk";
  messageId: MessageId;
  speaker: SpeakerId;
  delta: string;
};
assertZodTypeMatch<WsSpeechChunk, typeof WsSpeechChunkSchema>(true);

export const WsSpeechDoneSchema = z.object({
  type: z.literal("speech-done"),
  messageId: MessageIdSchema,
  speaker: SpeakerIdSchema,
});
export type WsSpeechDone = {
  type: "speech-done";
  messageId: MessageId;
  speaker: SpeakerId;
};
assertZodTypeMatch<WsSpeechDone, typeof WsSpeechDoneSchema>(true);

export const WsAssessmentSchema = z.object({
  type: z.literal("assessment"),
  messageId: MessageIdSchema,
  agent: AgentIdSchema,
  text: z.string(),
});
export type WsAssessment = {
  type: "assessment";
  messageId: MessageId;
  agent: AgentId;
  text: string;
};
assertZodTypeMatch<WsAssessment, typeof WsAssessmentSchema>(true);

export const WsStatusReadSchema = z.object({
  type: z.literal("status-read"),
  messageId: MessageIdSchema,
  statusRead: z.string(),
  nextSpeaker: SpeakerIdSchema,
});
export type WsStatusRead = {
  type: "status-read";
  messageId: MessageId;
  statusRead: string;
  nextSpeaker: SpeakerId;
};
assertZodTypeMatch<WsStatusRead, typeof WsStatusReadSchema>(true);

export const WsPhaseSchema = z.object({
  type: z.literal("phase"),
  messageId: MessageIdSchema,
  phase: z.enum(["assessing", "selecting", "speaking", "human-turn", "idle", "rolling-back"]),
  activeSpeaker: SpeakerIdSchema.optional(),
});
export type WsPhase = {
  type: "phase";
  messageId: MessageId;
  phase: "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back";
  activeSpeaker?: SpeakerId;
};
assertZodTypeMatch<WsPhase, typeof WsPhaseSchema>(true);

export const WsYourTurnSchema = z.object({
  type: z.literal("your-turn"),
  messageId: MessageIdSchema,
});
export type WsYourTurn = {
  type: "your-turn";
  messageId: MessageId;
};
assertZodTypeMatch<WsYourTurn, typeof WsYourTurnSchema>(true);

export const WsSyncSchema = z.object({
  type: z.literal("sync"),
  messageId: MessageIdSchema,
  meeting: MeetingSchema,
  currentPhase: z.string(),
  readOnly: z.boolean().optional(),
  editingCycle: z.number().optional(),
  paused: z.boolean().optional(),
  pendingProcesses: z.array(ProcessRecordSchema).optional(),
  pendingCycleNumber: z.number().optional(),
});
export type WsSync = {
  type: "sync";
  messageId: MessageId;
  meeting: Meeting;
  currentPhase: string;
  readOnly?: boolean;
  editingCycle?: number;
  paused?: boolean;
  pendingProcesses?: ProcessRecord[];
  pendingCycleNumber?: number;
};
assertZodTypeMatch<WsSync, typeof WsSyncSchema>(true);

export const WsErrorSchema = z.object({
  type: z.literal("error"),
  messageId: MessageIdSchema,
  message: z.string(),
});
export type WsError = {
  type: "error";
  messageId: MessageId;
  message: string;
};
assertZodTypeMatch<WsError, typeof WsErrorSchema>(true);

export const WsAttentionAckSchema = z.object({
  type: z.literal("attention-ack"),
  messageId: MessageIdSchema,
});
export type WsAttentionAck = {
  type: "attention-ack";
  messageId: MessageId;
};
assertZodTypeMatch<WsAttentionAck, typeof WsAttentionAckSchema>(true);

export const WsRollbackProgressSchema = z.object({
  type: z.literal("rollback-progress"),
  messageId: MessageIdSchema,
  step: z.enum(["aborting", "git-reset", "perush-rollback", "session-recovery", "complete"]),
  detail: z.string().optional(),
});
export type WsRollbackProgress = {
  type: "rollback-progress";
  messageId: MessageId;
  step: "aborting" | "git-reset" | "perush-rollback" | "session-recovery" | "complete";
  detail?: string;
};
assertZodTypeMatch<WsRollbackProgress, typeof WsRollbackProgressSchema>(true);

export const WsMeetingEndedSchema = z.object({
  type: z.literal("meeting-ended"),
  messageId: MessageIdSchema,
});
export type WsMeetingEnded = {
  type: "meeting-ended";
  messageId: MessageId;
};
assertZodTypeMatch<WsMeetingEnded, typeof WsMeetingEndedSchema>(true);

export const WsProcessStartSchema = z.object({
  type: z.literal("process-start"),
  messageId: MessageIdSchema,
  processId: z.string(),
  processKind: ProcessKindSchema,
  agent: z.string(), // AgentId | "orchestrator"
  cycleNumber: z.number().int().positive(),
});
export type WsProcessStart = {
  type: "process-start";
  messageId: MessageId;
  processId: string;
  processKind: ProcessKind;
  agent: AgentId | "orchestrator";
  cycleNumber: number;
};
assertZodTypeMatch<WsProcessStart, typeof WsProcessStartSchema>(true);

export const WsProcessEventSchema = z.object({
  type: z.literal("process-event"),
  messageId: MessageIdSchema,
  processId: z.string(),
  eventKind: ProcessEventKindSchema,
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.string().optional(),
});
export type WsProcessEvent = {
  type: "process-event";
  messageId: MessageId;
  processId: string;
  eventKind: ProcessEventKind;
  content: string;
  toolName?: string;
  toolInput?: string;
};
assertZodTypeMatch<WsProcessEvent, typeof WsProcessEventSchema>(true);

export const WsProcessDoneSchema = z.object({
  type: z.literal("process-done"),
  messageId: MessageIdSchema,
  processId: z.string(),
});
export type WsProcessDone = {
  type: "process-done";
  messageId: MessageId;
  processId: string;
};
assertZodTypeMatch<WsProcessDone, typeof WsProcessDoneSchema>(true);

export const WsPauseStateSchema = z.object({
  type: z.literal("pause-state"),
  messageId: MessageIdSchema,
  paused: z.boolean(),
  blocking: z.boolean(),
});
export type WsPauseState = {
  type: "pause-state";
  messageId: MessageId;
  paused: boolean;
  blocking: boolean;
};
assertZodTypeMatch<WsPauseState, typeof WsPauseStateSchema>(true);

/** Discriminated union of all server→client messages */
export const ServerMessageSchema = z.discriminatedUnion("type", [
  WsSpeechSchema,
  WsSpeechChunkSchema,
  WsSpeechDoneSchema,
  WsAssessmentSchema,
  WsStatusReadSchema,
  WsPhaseSchema,
  WsYourTurnSchema,
  WsSyncSchema,
  WsErrorSchema,
  WsAttentionAckSchema,
  WsRollbackProgressSchema,
  WsMeetingEndedSchema,
  WsProcessStartSchema,
  WsProcessEventSchema,
  WsProcessDoneSchema,
  WsPauseStateSchema,
]);
export type ServerMessage =
  | WsSpeech
  | WsSpeechChunk
  | WsSpeechDone
  | WsAssessment
  | WsStatusRead
  | WsPhase
  | WsYourTurn
  | WsSync
  | WsError
  | WsAttentionAck
  | WsRollbackProgress
  | WsMeetingEnded
  | WsProcessStart
  | WsProcessEvent
  | WsProcessDone
  | WsPauseState;
assertZodTypeMatch<ServerMessage, typeof ServerMessageSchema>(true);

// ---------------------------------------------------------------------------
// Client → Server WebSocket messages
// ---------------------------------------------------------------------------

export const WsHumanSpeechSchema = z.object({
  type: z.literal("human-speech"),
  messageId: MessageIdSchema,
  content: z.string(),
});
export type WsHumanSpeech = {
  type: "human-speech";
  messageId: MessageId;
  content: string;
};
assertZodTypeMatch<WsHumanSpeech, typeof WsHumanSpeechSchema>(true);

export const WsCommandSchema = z.object({
  type: z.literal("command"),
  messageId: MessageIdSchema,
  command: z.string(),
});
export type WsCommand = {
  type: "command";
  messageId: MessageId;
  command: string;
};
assertZodTypeMatch<WsCommand, typeof WsCommandSchema>(true);

export const WsStartMeetingSchema = z.object({
  type: z.literal("start-meeting"),
  messageId: MessageIdSchema,
  title: z.string().min(1),
  participants: z.array(AgentIdSchema).min(1),
});
export type WsStartMeeting = {
  type: "start-meeting";
  messageId: MessageId;
  title: string;
  participants: AgentId[]
};
assertZodTypeMatch<WsStartMeeting, typeof WsStartMeetingSchema>(true);

export const WsResumeMeetingSchema = z.object({
  type: z.literal("resume-meeting"),
  messageId: MessageIdSchema,
  meetingId: MeetingIdSchema,
});
export type WsResumeMeeting = {
  type: "resume-meeting";
  messageId: MessageId;
  meetingId: MeetingId;
};
assertZodTypeMatch<WsResumeMeeting, typeof WsResumeMeetingSchema>(true);

export const WsViewMeetingSchema = z.object({
  type: z.literal("view-meeting"),
  messageId: MessageIdSchema,
  meetingId: MeetingIdSchema,
});
export type WsViewMeeting = {
  type: "view-meeting";
  messageId: MessageId;
  meetingId: MeetingId;
};
assertZodTypeMatch<WsViewMeeting, typeof WsViewMeetingSchema>(true);

export const WsJoinMeetingSchema = z.object({
  type: z.literal("join-meeting"),
  messageId: MessageIdSchema,
  meetingId: MeetingIdSchema,
});
export type WsJoinMeeting = {
  type: "join-meeting";
  messageId: MessageId;
  meetingId: MeetingId;
};
assertZodTypeMatch<WsJoinMeeting, typeof WsJoinMeetingSchema>(true);

export const WsAttentionSchema = z.object({
  type: z.literal("attention"),
  messageId: MessageIdSchema,
});
export type WsAttention = {
  type: "attention";
  messageId: MessageId;
};
assertZodTypeMatch<WsAttention, typeof WsAttentionSchema>(true);

export const WsRollbackSchema = z.object({
  type: z.literal("rollback"),
  messageId: MessageIdSchema,
  targetCycleNumber: z.number().int().min(0),
});
export type WsRollback = {
  type: "rollback";
  messageId: MessageId;
  targetCycleNumber: number;
};
assertZodTypeMatch<WsRollback, typeof WsRollbackSchema>(true);

export const WsTogglePauseSchema = z.object({
  type: z.literal("toggle-pause"),
  messageId: MessageIdSchema,
});
export type WsTogglePause = {
  type: "toggle-pause";
  messageId: MessageId;
};
assertZodTypeMatch<WsTogglePause, typeof WsTogglePauseSchema>(true);

/** Discriminated union of all client→server messages */
export const ClientMessageSchema = z.discriminatedUnion("type", [
  WsHumanSpeechSchema,
  WsCommandSchema,
  WsStartMeetingSchema,
  WsResumeMeetingSchema,
  WsViewMeetingSchema,
  WsJoinMeetingSchema,
  WsAttentionSchema,
  WsRollbackSchema,
  WsTogglePauseSchema,
]);
export type ClientMessage =
  | WsHumanSpeech
  | WsCommand
  | WsStartMeeting
  | WsResumeMeeting
  | WsViewMeeting
  | WsJoinMeeting
  | WsAttention
  | WsRollback
  | WsTogglePause;
assertZodTypeMatch<ClientMessage, typeof ClientMessageSchema>(true);

// ---------------------------------------------------------------------------
// Phase type (extracted for reuse)
// ---------------------------------------------------------------------------

export type Phase = "assessing" | "selecting" | "speaking" | "human-turn" | "idle" | "rolling-back";
