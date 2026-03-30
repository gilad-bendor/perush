/**
 * orchestrator.ts — The deliberation loop.
 *
 * Manages the full meeting lifecycle: start → cycles (assess → select → speak) → end.
 * Emits events that the server relays to connected browsers via WebSocket.
 *
 * Imports from: types.ts, config.ts, meetings-db.ts, session-manager.ts
 */

import type {
  Meeting,
  MeetingId,
  AgentId,
  SpeakerId,
  Phase,
  CycleRecord,
  PrivateAssessment,
  OrchestratorDecision,
  ConversationMessage,
  AgentDefinition,
  ProcessKind,
  ProcessEventKind,
  ProcessRecord,
  ProcessEventRecord,
} from "./types";
import { createFormattedTime } from "./types";
import {
  DIRECTOR_TIMEOUT_MS,
  USE_STUB_SDK,
} from "./config";
import { logInfo, logWarn, logError } from "./logs";
import {
  createMeetingWorktree,
  initializeMeeting,
  endMeeting as endMeetingGit,
  resumeMeeting as resumeMeetingGit,
  writeMeetingAtomic,
  readActiveMeeting,
  commitCycle as commitCycleGit,
  commitWithMessage,
  generateMeetingId,
  tagPerushChangesIfNeeded,
  resetSessionBranchToCycle,
  rollbackPerushOnMain,
  detectPerushChanges,
  cleanupDanglingWorktrees,
  ensureGitConfig,
} from "./meetings-db.ts";
import {
  discoverAgents,
  buildSystemPrompt,
  resolvePromptTemplate,
  createSession,
  registerMeeting,
  feedMessage,
  streamSpeech,
  interruptAll,
  clearSessions,
  getAllSessionIds,
  resetCycleCost,
  getCycleCost,
} from "./session-manager";

// ---------------------------------------------------------------------------
// Types for orchestrator events
// ---------------------------------------------------------------------------

export interface OrchestratorEvents {
  onPhaseChange: (phase: Phase, activeSpeaker?: SpeakerId) => void;
  onSpeech: (speaker: SpeakerId, content: string, timestamp: string, cycleCost: number) => void;
  onSpeechChunk: (speaker: SpeakerId, delta: string) => void;
  onSpeechDone: (speaker: SpeakerId) => void;
  onAssessment: (assessment: PrivateAssessment) => void;
  onVibe: (vibe: string, nextSpeaker: SpeakerId) => void;
  onYourTurn: () => void;
  onError: (message: string) => void;
  onSync: (meeting: Meeting, phase: Phase, readOnly?: boolean, editingCycle?: number) => void;
  onProcessStart: (processId: string, processKind: ProcessKind, agent: AgentId | "orchestrator", cycleNumber: number) => void;
  onProcessEvent: (processId: string, eventKind: ProcessEventKind, content: string, toolName?: string, toolInput?: string) => void;
  onProcessDone: (processId: string) => void;
}

// ---------------------------------------------------------------------------
// Orchestrator state
// ---------------------------------------------------------------------------

let currentMeeting: Meeting | null = null;
let currentWorktreePath: string | null = null;
let currentPhase: Phase = "idle";
let attentionRequested = false;
let meetingParticipantDefs: AgentDefinition[] = [];

/** In-progress cycle's processes (not yet persisted to meeting.yaml). */
let pendingProcesses: ProcessRecord[] | null = null;
/** In-progress cycle number (for pending processes). */
let pendingCycleNumber: number | null = null;

/** Event handlers — set by the server */
let events: OrchestratorEvents = createNoopEvents();

/** Promise resolver for human turn (set when waiting for human speech) */
let humanTurnResolver: ((content: string) => void) | null = null;

/** Director timeout timer */
let directorTimeoutId: ReturnType<typeof setTimeout> | null = null;

/** Custom director timeout for testing */
let directorTimeoutOverride: number | null = null;

function createNoopEvents(): OrchestratorEvents {
  return {
    onPhaseChange: () => {},
    onSpeech: () => {},
    onSpeechChunk: () => {},
    onSpeechDone: () => {},
    onAssessment: () => {},
    onVibe: () => {},
    onYourTurn: () => {},
    onError: () => {},
    onSync: () => {},
    onProcessStart: () => {},
    onProcessEvent: () => {},
    onProcessDone: () => {},
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Set the event handlers (called by the server on startup). */
export function setEventHandlers(handlers: Partial<OrchestratorEvents>): void {
  events = { ...createNoopEvents(), ...handlers };
}

/** Get the current phase. */
export function getPhase(): Phase {
  return currentPhase;
}

/** Get the current meeting (or null if no meeting active). */
export function getMeeting(): Meeting | null {
  return currentMeeting;
}

/** Get the current worktree path (or null). */
export function getWorktreePath(): string | null {
  return currentWorktreePath;
}

/** Get processes from the in-progress cycle (not yet written to meeting.yaml). */
export function getPendingProcesses(): { processes: ProcessRecord[]; cycleNumber: number } | null {
  if (!pendingProcesses || pendingCycleNumber == null) return null;
  return { processes: pendingProcesses, cycleNumber: pendingCycleNumber };
}

/** Override the director timeout (for testing). */
export function setDirectorTimeout(ms: number): void {
  directorTimeoutOverride = ms;
}

function getDirectorTimeoutMs(): number {
  return directorTimeoutOverride ?? DIRECTOR_TIMEOUT_MS;
}

// ---------------------------------------------------------------------------
// Meeting Lifecycle
// ---------------------------------------------------------------------------

/**
 * Start a new meeting.
 *
 * Creates git infrastructure and commits the initial state.
 * Sessions are created lazily on first use (during the first cycle).
 */
export async function startMeeting(
  title: string,
  participantIds: AgentId[],
): Promise<Meeting> {
  logInfo("orchestrator", `startMeeting: "${title}" with [${participantIds.join(", ")}]`);
  if (currentMeeting) {
    throw new Error("A meeting is already active. End it before starting a new one.");
  }

  // Git state preconditions
  await ensureGitConfig();
  await cleanupDanglingWorktrees();
  const uncommittedPerush = await detectPerushChanges();
  if (uncommittedPerush.length > 0) {
    events.onError(
      `אזהרה: יש שינויים לא שמורים בקבצי הפירוש (${uncommittedPerush.length} קבצים). ` +
      `שינויים שיבוצעו על ידי סוכנים עלולים לכלול אותם בטעות.`,
    );
  }

  // Discover available agents
  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a => participantIds.includes(a.id));

  if (meetingParticipantDefs.length === 0) {
    throw new Error("No valid participants selected");
  }

  // Register meeting context in session-manager for lazy session creation
  registerMeeting(title, meetingParticipantDefs);

  // Generate meeting ID
  const meetingId = generateMeetingId(title, new Date());

  // Create git worktree
  const worktreePath = await createMeetingWorktree(meetingId);
  currentWorktreePath = worktreePath;

  // Build the meeting record (no openingPrompt yet — set when first human speech arrives)
  const meeting: Meeting = {
    meetingId,
    mode: "Perush-Development",
    title,
    participants: participantIds,
    cycles: [],
    startedAt: createFormattedTime(),
    sessionIds: {},
  };

  setPhase("idle");

  // Persist and commit
  currentMeeting = meeting;
  await initializeMeeting(worktreePath, meeting);

  logInfo("orchestrator", `startMeeting: done → ${meetingId}`);
  return meeting;
}

/**
 * Set the opening prompt on the current meeting.
 * Called when the first human speech arrives.
 */
export function setOpeningPrompt(content: string): void {
  if (currentMeeting && !currentMeeting.openingPrompt) {
    currentMeeting.openingPrompt = content;
  }
}

/**
 * Run a single deliberation cycle.
 *
 * 1. Assessment phase: each participant (except last speaker) assesses
 * 2. Selection phase: orchestrator picks next speaker + vibe
 * 3. Speech phase: selected participant speaks (or human turn)
 * 4. Update meeting.yaml and commit
 */
export async function runCycle(
  lastSpeaker: SpeakerId,
  lastContent: string,
): Promise<CycleRecord | null> {
  if (!currentMeeting || !currentWorktreePath) {
    throw new Error("No active meeting");
  }

  const cycleNumber = currentMeeting.cycles.length + 1;
  resetCycleCost();
  logInfo("orchestrator", `runCycle ${cycleNumber}: lastSpeaker=${lastSpeaker}`);

  // Track all process records for this cycle
  const processes: ProcessRecord[] = [];
  pendingProcesses = processes;
  pendingCycleNumber = cycleNumber;

  // Helper: create a process record and emit start/event/done
  function createProcessTracker(processKind: ProcessKind, agent: AgentId | "orchestrator") {
    const processId = `c${cycleNumber}-${processKind}-${agent}`;
    const processEvents: ProcessEventRecord[] = [];
    const record: ProcessRecord = { processId, processKind, agent, events: processEvents };
    processes.push(record);

    events.onProcessStart(processId, processKind, agent, cycleNumber);

    return {
      processId,
      emit(eventKind: ProcessEventKind, content: string, toolName?: string, toolInput?: string) {
        processEvents.push({ eventKind, content, toolName, toolInput });
        events.onProcessEvent(processId, eventKind, content, toolName, toolInput);
      },
      done() {
        events.onProcessDone(processId);
      },
    };
  }

  // ------ ASSESSMENT PHASE ------
  setPhase("assessing");

  // Get the vibe from the previous cycle (if any) — agents see it before the speech
  const prevCycle = currentMeeting.cycles[currentMeeting.cycles.length - 1];
  const prevVibe = prevCycle?.orchestratorDecision?.vibe;

  const assessments: Record<string, PrivateAssessment> = {}; // keyed by AgentId

  // Assess in parallel (all participants except last speaker)
  const assessmentPromises = currentMeeting.participants
    .filter(id => id !== lastSpeaker)
    .map(async (agentId) => {
      const tracker = createProcessTracker("assessment", agentId);
      try {
        const prompt = await buildAssessmentPrompt(lastSpeaker, lastContent, prevVibe);
        const response = await feedMessage(agentId, prompt, (eventKind, content, toolName, toolInput) => {
          tracker.emit(eventKind, content, toolName, toolInput);
        });
        const assessmentText = extractAssessmentText(response);
        const assessment: PrivateAssessment = { agent: agentId, text: assessmentText ?? response };
        assessments[agentId] = assessment;
        events.onAssessment(assessment);
      } catch (err) {
        // Assessment failure is non-fatal — proceed with partial assessments
        logWarn("orchestrator", `runCycle ${cycleNumber}: assessment failed for ${agentId}`, err);
        events.onError(`Assessment failed for ${agentId}: ${err}`);
      } finally {
        tracker.done();
      }
    });

  await Promise.all(assessmentPromises);
  logInfo("orchestrator", `runCycle ${cycleNumber}: ${Object.keys(assessments).length} assessment(s) collected`);

  // ------ SELECTION PHASE ------
  setPhase("selecting");

  let decision: OrchestratorDecision | null;

  const orchestratorTracker = createProcessTracker("orchestrator-selection", "orchestrator");
  try {
    const selectionPrompt = await buildSelectionPrompt(lastSpeaker, lastContent, assessments);
    const orchestratorResponse = await feedMessage("orchestrator", selectionPrompt, (eventKind, content, toolName, toolInput) => {
      orchestratorTracker.emit(eventKind, content, toolName, toolInput);
    });

    decision = parseOrchestratorResponse(orchestratorResponse);

    // Retry once if parsing failed
    if (!decision) {
      const result = extractRecommendation(orchestratorResponse);
      const reason = "error" in result ? result.error : `שם המשתתף "${result.nextSpeakerRaw}" לא מוכר`;
      logWarn("orchestrator", `runCycle ${cycleNumber}: orchestrator selection parse failed, retrying: ${reason}`);

      const retryPrompt = await buildSelectionRetryPrompt(reason);
      const retryResponse = await feedMessage("orchestrator", retryPrompt, (eventKind, content, toolName, toolInput) => {
        orchestratorTracker.emit(eventKind, content, toolName, toolInput);
      });

      decision = parseOrchestratorResponse(retryResponse);
    }

    // Final fallback if retry also failed
    if (!decision) {
      logWarn("orchestrator", `runCycle ${cycleNumber}: orchestrator selection retry also failed, falling back to Director`);
      decision = {
        nextSpeaker: pickFallbackSpeaker(lastSpeaker),
        vibe: "לא הצלחתי לקרוא את האווירה.",
      };
    }
  } catch (err) {
    decision = {
      nextSpeaker: pickFallbackSpeaker(lastSpeaker),
      vibe: "שגיאה בבחירת דובר.",
    };
    events.onError(`Selection failed: ${err}`);
  } finally {
    orchestratorTracker.done();
  }

  // Apply attention override
  if (attentionRequested) {
    logInfo("orchestrator", `runCycle ${cycleNumber}: attention override → human`);
    decision = { ...decision, nextSpeaker: "human" };
    attentionRequested = false;
  }

  logInfo("orchestrator", `runCycle ${cycleNumber}: selected → ${decision.nextSpeaker} (vibe: "${decision.vibe}")`);
  events.onVibe(decision.vibe, decision.nextSpeaker);

  // ------ SPEECH PHASE ------
  const nextSpeaker = decision.nextSpeaker;
  let speech: ConversationMessage;

  if (nextSpeaker === "human") {
    // Human turn
    setPhase("human-turn");
    events.onYourTurn();

    const humanContent = await waitForHumanSpeech();
    speech = {
      speaker: "human",
      content: humanContent,
      timestamp: createFormattedTime(),
    };
    events.onSpeech("human", humanContent, speech.timestamp, getCycleCost());
  } else {
    // Agent speech
    setPhase("speaking", nextSpeaker);

    const speechPrompt = await buildSpeechPrompt(decision.vibe);
    let fullText = "";

    const speechTracker = createProcessTracker("agent-speech", nextSpeaker);
    speechTracker.emit("prompt", speechPrompt);

    try {
      for await (const event of streamSpeech(nextSpeaker, speechPrompt)) {
        if (event.type === "chunk") {
          events.onSpeechChunk(nextSpeaker, event.text);
          // Text chunks are accumulated; we'll emit a single "text" event at done
        } else if (event.type === "thinking-chunk") {
          // Stream to UI live but don't persist — the complete thinking comes later
          events.onProcessEvent(speechTracker.processId, "thinking", event.text);
        } else if (event.type === "thinking") {
          // Complete thinking block — persist this one
          speechTracker.emit("thinking", event.text);
        } else if (event.type === "tool-call") {
          speechTracker.emit("tool-call", event.input, event.toolName, event.input);
        } else if (event.type === "tool-result") {
          speechTracker.emit("tool-result", event.output, event.toolName);
        } else if (event.type === "done") {
          fullText = event.fullText;
          speechTracker.emit("text", fullText);
        }
      }
    } catch (err) {
      fullText = `[שגיאה: ${err}]`;
      logError("orchestrator", `runCycle ${cycleNumber}: speech failed for ${nextSpeaker}`, err);
      events.onError(`Speech failed for ${nextSpeaker}: ${err}`);
    } finally {
      speechTracker.done();
    }

    speech = {
      speaker: nextSpeaker,
      content: fullText,
      timestamp: createFormattedTime(),
    };
    events.onSpeechDone(nextSpeaker);
    events.onSpeech(nextSpeaker, fullText, speech.timestamp, getCycleCost());
  }

  // ------ RECORD & COMMIT ------
  const cycle: CycleRecord = {
    cycleNumber,
    speech,
    assessments,
    orchestratorDecision: decision,
    processes,
  };

  currentMeeting.cycles.push(cycle);
  currentMeeting.lastEngagedAt = speech.timestamp;
  const cycleCost = getCycleCost();
  currentMeeting.totalCostEstimate =
    (currentMeeting.totalCostEstimate ?? 0) + cycleCost;

  // Sync session IDs from registry (sessions may have been created lazily)
  Object.assign(currentMeeting.sessionIds, getAllSessionIds());

  pendingProcesses = null;
  pendingCycleNumber = null;

  await writeMeetingAtomic(currentWorktreePath, currentMeeting);
  await commitCycleGit(currentWorktreePath, cycleNumber, speech.speaker);

  // Check for perush file changes and create cross-branch tags if needed
  try {
    await tagPerushChangesIfNeeded(
      currentWorktreePath,
      cycleNumber,
      currentMeeting.meetingId,
    );
  } catch (err) {
    // Tagging failure is non-fatal
    logWarn("orchestrator", `runCycle ${cycleNumber}: tagging failed`, err);
    events.onError(`Tagging failed: ${err}`);
  }

  logInfo("orchestrator", `runCycle ${cycleNumber}: done (speaker=${speech.speaker}, cost≈$${currentMeeting.totalCostEstimate?.toFixed(2)})`);
  setPhase("idle");
  return cycle;
}

/**
 * End the current meeting.
 */
export async function endCurrentMeeting(): Promise<void> {
  if (!currentMeeting || !currentWorktreePath) {
    throw new Error("No active meeting");
  }

  logInfo("orchestrator", `endCurrentMeeting: ${currentMeeting.meetingId} (${currentMeeting.cycles.length} cycles)`);

  // Interrupt any active queries
  await interruptAll();

  // Cancel any pending human turn
  cancelHumanTurn();

  // Commit and remove worktree
  await endMeetingGit(currentMeeting.meetingId, currentWorktreePath);

  // Clear state
  clearSessions();
  currentMeeting = null;
  currentWorktreePath = null;
  meetingParticipantDefs = [];
  setPhase("idle");
  logInfo("orchestrator", `endCurrentMeeting: done`);
}

/**
 * Handle the Director's speech during their turn.
 */
export function handleHumanSpeech(content: string): void {
  if (humanTurnResolver) {
    cancelDirectorTimeout();
    humanTurnResolver(content);
    humanTurnResolver = null;
    humanTurnRejecter = null;
  }
}

/**
 * Handle the attention request from the Director.
 */
export function handleAttention(): void {
  attentionRequested = true;
}

/** Check if attention is currently requested (for testing). */
export function isAttentionRequested(): boolean {
  return attentionRequested;
}

/**
 * Handle in-meeting rollback to a specific cycle.
 *
 * 6-phase flow:
 * 1. Abort active queries
 * 2. Reset session branch to target cycle's commit
 * 3. Roll back perush files on main if needed
 * 4. Session recovery for all agents
 * 5. Commit rollback
 * 6. Return sync with editingCycle for the UI
 */
export async function handleRollback(
  targetCycleNumber: number,
  onProgress?: (step: string, detail?: string) => void,
): Promise<void> {
  if (!currentMeeting || !currentWorktreePath) {
    throw new Error("No active meeting");
  }

  const meetingId = currentMeeting.meetingId;
  logInfo("orchestrator", `handleRollback: meeting ${meetingId}, target cycle ${targetCycleNumber} (current: ${currentMeeting.cycles.length})`);

  // Phase 1: Abort active queries
  setPhase("rolling-back");
  onProgress?.("aborting", "מפסיק שאילתות פעילות...");
  await interruptAll();
  cancelHumanTurn();

  // Phase 2: Reset session branch
  onProgress?.("git-reset", `מאפס לנקודת מחזור ${targetCycleNumber}...`);
  await resetSessionBranchToCycle(currentWorktreePath, targetCycleNumber);

  // Re-read the rolled-back meeting.yaml
  currentMeeting = await readActiveMeeting(currentWorktreePath);

  // Phase 3: Roll back perush files on main if needed
  onProgress?.("perush-rollback", "בודק שינויים בפירוש...");
  const { stashed, rolledBack } = await rollbackPerushOnMain(
    meetingId,
    targetCycleNumber,
  );
  if (stashed) {
    onProgress?.("perush-rollback", "שינויים לא שמורים בפירוש הועברו ל-stash.");
  }

  // Phase 4: Session recovery — recreate all agent sessions from rolled-back transcript
  logInfo("orchestrator", `handleRollback: recovering sessions for ${currentMeeting.participants.length} participants + orchestrator`);
  onProgress?.("session-recovery", "משחזר סשנים...");
  clearSessions();

  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a =>
    currentMeeting!.participants.includes(a.id),
  );

  // Re-register meeting context for lazy session creation
  registerMeeting(currentMeeting.title, meetingParticipantDefs);

  // Recreate participant sessions
  for (const agentId of currentMeeting.participants) {
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    const transcript = await buildTranscriptPrompt(currentMeeting);
    const { sessionId } = await createSession(
      agentId,
      systemPrompt,
      transcript,
    );
    currentMeeting.sessionIds[agentId] = sessionId;
  }

  // Recreate orchestrator session
  const orchestratorSystemPrompt = await buildSystemPrompt("orchestrator", meetingParticipantDefs);
  const orchestratorTranscript = await buildTranscriptPrompt(currentMeeting);
  const { sessionId: orchestratorSessionId } = await createSession(
    "orchestrator",
    orchestratorSystemPrompt,
    orchestratorTranscript,
  );
  currentMeeting.sessionIds.orchestrator = orchestratorSessionId;

  // Phase 5: Commit the rollback
  onProgress?.("complete", "שחזור הושלם.");
  await writeMeetingAtomic(currentWorktreePath, currentMeeting);
  const { commitRollback } = await import("./config");
  await commitWithMessage(currentWorktreePath, commitRollback(targetCycleNumber));

  // Phase 6: Send sync with editingCycle (done by the caller — server.ts)
  logInfo("orchestrator", `handleRollback: done → meeting now has ${currentMeeting.cycles.length} cycles`);
  setPhase("idle");
  events.onSync(currentMeeting, "idle", false, targetCycleNumber);
}

/**
 * Handle meeting resume.
 *
 * Re-attaches the worktree, reads the meeting state, and attempts to
 * resume or recover agent sessions.
 */
export async function resumeMeetingById(meetingId: MeetingId): Promise<Meeting> {
  logInfo("orchestrator", `resumeMeetingById: ${meetingId}`);
  if (currentMeeting) {
    if (currentMeeting.meetingId === meetingId) {
      logInfo("orchestrator", `resumeMeetingById: meeting ${meetingId} is already active — returning it`);
      return currentMeeting;
    }
    throw new Error("A meeting is already active. End it before resuming another.");
  }

  // Re-attach worktree
  const worktreePath = await resumeMeetingGit(meetingId);
  currentWorktreePath = worktreePath;

  // Read meeting state
  currentMeeting = await readActiveMeeting(worktreePath);

  // Discover agents and restore participant defs
  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a =>
    currentMeeting!.participants.includes(a.id),
  );

  // Attempt to recover sessions — create fresh ones from transcript
  clearSessions();

  // Re-register meeting context for lazy session creation
  registerMeeting(currentMeeting.title, meetingParticipantDefs);

  for (const agentId of currentMeeting.participants) {
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    const transcript = await buildTranscriptPrompt(currentMeeting);
    const { sessionId } = await createSession(
      agentId,
      systemPrompt,
      transcript,
    );
    currentMeeting.sessionIds[agentId] = sessionId;
  }

  // Recreate orchestrator session
  const orchestratorSystemPrompt = await buildSystemPrompt("orchestrator", meetingParticipantDefs);
  const orchestratorTranscript = await buildTranscriptPrompt(currentMeeting);
  const { sessionId: orchestratorSessionId } = await createSession(
    "orchestrator",
    orchestratorSystemPrompt,
    orchestratorTranscript,
  );
  currentMeeting.sessionIds.orchestrator = orchestratorSessionId;

  // Save updated session IDs and commit
  await writeMeetingAtomic(worktreePath, currentMeeting);
  await commitWithMessage(worktreePath, "Meeting resumed");

  logInfo("orchestrator", `resumeMeetingById: done (${currentMeeting.cycles.length} cycles restored)`);
  setPhase("idle");
  return currentMeeting;
}

/**
 * Reset all orchestrator state (for testing).
 */
export function resetOrchestrator(): void {
  currentMeeting = null;
  currentWorktreePath = null;
  currentPhase = "idle";
  attentionRequested = false;
  meetingParticipantDefs = [];
  humanTurnResolver = null;
  humanTurnRejecter = null;
  directorTimeoutOverride = null;
  cancelDirectorTimeout();
  clearSessions();
  events = createNoopEvents();
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Append a stub-response block to a prompt — only when running in stub mode.
 * In production (real SDK), the LLM never sees these blocks.
 */
function withStubResponse(prompt: string, stubText: string): string {
  if (!USE_STUB_SDK) return prompt;
  if (stubText.includes("\n")) {
    const indented = stubText.split("\n").map(l => `  ${l}`).join("\n");
    return `${prompt}\n\n---stub-response---\ntext: |\n${indented}\n---end-stub-response---`;
  }
  return `${prompt}\n\n---stub-response---\ntext: ${stubText}\n---end-stub-response---`;
}

function setPhase(phase: Phase, activeSpeaker?: SpeakerId): void {
  logInfo("orchestrator", `phase: ${currentPhase} → ${phase}${activeSpeaker ? ` (speaker: ${activeSpeaker})` : ""}`);
  currentPhase = phase;
  events.onPhaseChange(phase, activeSpeaker);
}

/**
 * Build a transcript prompt from a meeting's conversation history.
 * Used for session recovery — feeds the full public conversation into a new session.
 */
async function buildTranscriptPrompt(meeting: Meeting): Promise<string> {
  const parts: string[] = [];
  if (meeting.openingPrompt) {
    parts.push(`פתיחת דיון: ${meeting.openingPrompt}`);
  } else {
    parts.push(`פתיחת דיון: ${meeting.title}`);
  }

  for (const cycle of meeting.cycles) {
    const speakerLabel = cycle.speech.speaker === "human" ? "המנחה" : cycle.speech.speaker;
    parts.push(`\n${speakerLabel}: ${cycle.speech.content}`);
  }

  const prompt = parts.join("\n");
  return withStubResponse(prompt, "שחזור סשן — מוכן להמשיך.");
}

const ASSESSMENT_START_DELIMITER = "---התחלת הערכה להמשך הדיון---";
const ASSESSMENT_END_DELIMITER = "---סיום הערכה להמשך הדיון---";
const RECOMMENDATION_START_DELIMITER = "---התחלת המלצה להמשך הדיון---";
const RECOMMENDATION_END_DELIMITER = "---סיום המלצה להמשך הדיון---";

/**
 * Extract the assessment block from an agent's response.
 * Returns the text between the delimiters, or null if not found.
 */
function extractAssessmentText(response: string): string | null {
  const startIdx = response.indexOf(ASSESSMENT_START_DELIMITER);
  const endIdx = response.indexOf(ASSESSMENT_END_DELIMITER);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) return null;
  return response.slice(startIdx + ASSESSMENT_START_DELIMITER.length, endIdx).trim();
}

/**
 * Extract the orchestrator's recommendation block from response text.
 * Returns { nextSpeakerRaw, vibe } or null with a reason string.
 */
function extractRecommendation(response: string): { nextSpeakerRaw: string; vibe: string } | { error: string } {
  const startIdx = response.indexOf(RECOMMENDATION_START_DELIMITER);
  const endIdx = response.indexOf(RECOMMENDATION_END_DELIMITER);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return { error: "לא נמצא בלוק המלצה בין הסימנים המתאימים" };
  }

  const block = response.slice(startIdx + RECOMMENDATION_START_DELIMITER.length, endIdx).trim();
  const lines = block.split("\n");

  // Parse first line: "הדובר הבא: <name>"
  const firstLine = lines[0]?.trim()?.replace(/\*/g, '') ?? ""; // removing Markdown emphasis for more lenient parsing
  const speakerMatch = firstLine.match(/הדובר.*?:\s*(.+)/);
  if (!speakerMatch) {
    return { error: `השורה הראשונה לא בפורמט הנכון (צפוי: "הדובר הבא: <שם>"): "${firstLine}"` };
  }

  const nextSpeakerRaw = speakerMatch[1].trim();
  const vibe = lines.slice(1).join("\n").trim();

  return { nextSpeakerRaw, vibe };
}

async function buildAssessmentPrompt(lastSpeaker: SpeakerId, lastContent: string, vibe?: string): Promise<string> {
  const speakerLabel = lastSpeaker === "human" ? "המנחה" : lastSpeaker;
  const ctx: Record<string, string> = {
    speakerLabel,
    lastContent,
    assessmentStartDelimiter: ASSESSMENT_START_DELIMITER,
    assessmentEndDelimiter: ASSESSMENT_END_DELIMITER,
  };
  if (vibe) ctx.vibe = vibe;
  const prompt = await resolvePromptTemplate("agent-assessment-prompt.md", ctx);
  return withStubResponse(prompt, `חשבתי על הנקודה הזו לעומק.\n\n---התחלת הערכה להמשך הדיון---\nאני: 5\nיש לי כמה הערות לגבי המילון.\n---סיום הערכה להמשך הדיון---`);
}

async function buildSpeechPrompt(vibe: string): Promise<string> {
  const prompt = await resolvePromptTemplate("agent-speech-prompt.md", { vibe });
  return withStubResponse(prompt, "תגובת הסוכן.");
}

async function buildSelectionPrompt(
  lastSpeaker: SpeakerId,
  lastContent: string,
  assessments: Record<string, PrivateAssessment>,
): Promise<string> {
  const speakerLabel = lastSpeaker === "human" ? "המנחה" : lastSpeaker;

  // Build per-agent delimited assessment blocks
  const assessmentBlocks = Object.entries(assessments)
    .map(([agentId, assessment]) => {
      const agentDef = meetingParticipantDefs.find(a => a.id === agentId);
      const agentLabel = agentDef?.hebrewName ?? agentId;
      return `---התחלת הערכה של ${agentLabel} להמשך הדיון---\n${assessment.text}\n---סיום הערכה של ${agentLabel} להמשך הדיון---`;
    })
    .join("\n\n");

  // Build the valid speaker names for the output format hint
  const speakerOptions = [
    ...meetingParticipantDefs.map(a => a.hebrewName),
    "המנחה",
  ].join("/");

  // First stub agent's Hebrew name for the stub response
  const firstAgentHebrew = meetingParticipantDefs[0]?.hebrewName ?? "מיילו";

  const ctx: Record<string, string> = {
    speakerLabel,
    lastContent,
    assessmentBlocks,
    speakerOptions,
    recommendationStartDelimiter: RECOMMENDATION_START_DELIMITER,
    recommendationEndDelimiter: RECOMMENDATION_END_DELIMITER,
  };
  if (attentionRequested) ctx.attentionLine = "true";

  const prompt = await resolvePromptTemplate("orchestrator-select-agent-prompt.md", ctx);
  return withStubResponse(prompt, `נראה שיש התלבטות בין כמה משתתפים.\n\n${RECOMMENDATION_START_DELIMITER}\nהדובר הבא: ${firstAgentHebrew}\nהדיון זורם — כל צד מוסיף שכבה.\n${RECOMMENDATION_END_DELIMITER}`);
}

/**
 * Parse an orchestrator response into an OrchestratorDecision, or return null.
 * Extracts the recommendation block, resolves the speaker name, extracts the vibe.
 */
function parseOrchestratorResponse(response: string): OrchestratorDecision | null {
  const result = extractRecommendation(response);
  if ("error" in result) return null;

  const resolved = resolveNextSpeaker(result.nextSpeakerRaw);
  if (!resolved) return null;

  return { nextSpeaker: resolved, vibe: result.vibe || "הדיון ממשיך." };
}

async function buildSelectionRetryPrompt(reason: string): Promise<string> {
  const speakerOptions = [
    ...meetingParticipantDefs.map(a => a.hebrewName),
    "המנחה",
  ].join("/");

  const prompt = await resolvePromptTemplate("orchestrator-select-agent-prompt-retry.md", {
    reason,
    speakerOptions,
    recommendationStartDelimiter: RECOMMENDATION_START_DELIMITER,
    recommendationEndDelimiter: RECOMMENDATION_END_DELIMITER,
  });
  const fallbackName = meetingParticipantDefs[0]?.hebrewName ?? "המנחה";
  return withStubResponse(prompt, `${RECOMMENDATION_START_DELIMITER}\nהדובר הבא: ${fallbackName}\nהדיון זורם.\n${RECOMMENDATION_END_DELIMITER}`);
}

function pickFallbackSpeaker(
  lastSpeaker: SpeakerId,
): SpeakerId {
  // Fallback when orchestrator fails: hand it to the Director
  return "human";
}

/**
 * Resolve a nextSpeaker value to a SpeakerId.
 * Permissive: accepts Hebrew name, English name, agent ID, "המנחה", "Director", "human".
 * Returns null if no match found.
 */
function resolveNextSpeaker(nextSpeaker: string): SpeakerId | null {
  const normalized = nextSpeaker.trim();

  // Director variants
  if (normalized === "המנחה" || normalized === "Director" || normalized === "director" || normalized === "human") {
    return "human";
  }

  // Try matching against all agent properties (case-insensitive for English)
  const agent = meetingParticipantDefs.find(a =>
    a.id === normalized ||
    a.hebrewName === normalized ||
    a.englishName.toLowerCase() === normalized.toLowerCase()
  );

  return agent?.id ?? null;
}

/**
 * Wait for human speech with a timeout.
 */
function waitForHumanSpeech(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    humanTurnResolver = resolve;
    humanTurnRejecter = reject;

    // Set timeout
    directorTimeoutId = setTimeout(() => {
      if (humanTurnResolver) {
        humanTurnResolver = null;
        humanTurnRejecter = null;
        reject(new Error("Director timeout"));
      }
    }, getDirectorTimeoutMs());
  });
}

/** Resolver to reject the human-turn promise on cancellation */
let humanTurnRejecter: ((err: Error) => void) | null = null;

export function cancelHumanTurn(): void {
  cancelDirectorTimeout();
  if (humanTurnRejecter) {
    humanTurnRejecter(new Error("Meeting ended"));
    humanTurnRejecter = null;
  }
  humanTurnResolver = null;
}

function cancelDirectorTimeout(): void {
  if (directorTimeoutId !== null) {
    clearTimeout(directorTimeoutId);
    directorTimeoutId = null;
  }
}
