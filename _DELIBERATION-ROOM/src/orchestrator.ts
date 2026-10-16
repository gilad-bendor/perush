/**
 * orchestrator.ts — The deliberation loop.
 *
 * Manages the full meeting lifecycle: start → cycles (assess → select → speak) → end.
 * Emits events that the server relays to connected browsers via WebSocket.
 *
 * Imports from: types.ts, config.ts, meetings-db.ts, session-manager.ts
 */

import type {
  PerushChange,
  PerushFileDecision,
  PerushScope,
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
  commitPerushDirectorEdits,
  commitPerushPreMeeting,
  commitPerushOnResume,
  commitPerushUpdate,
  commitPerushBeforeRollback,
  commitPerushRollback,
} from "./config";
import { logInfo, logWarn, logError } from "./logs";
import {
  createMeetingWorktree,
  initializeMeeting,
  endMeeting as endMeetingGit,
  resumeMeeting as resumeMeetingGit,
  writeMeetingAtomic,
  readActiveMeeting,
  readEndedMeeting,
  commitCycle as commitCycleGit,
  commitWithMessage,
  generateMeetingId,
  resetSessionBranchToCycle,
  rollbackPerushOnMain,
  detectPerushChanges,
  commitPerushChanges,
  getPerushHead,
  defaultPerushScope,
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
} from "./session-manager";

// ---------------------------------------------------------------------------
// Types for orchestrator events
// ---------------------------------------------------------------------------

export interface OrchestratorEvents {
  onPhaseChange: (phase: Phase, activeSpeaker?: SpeakerId) => void;
  onSpeech: (speaker: SpeakerId, content: string, timestamp: string) => void;
  onSpeechChunk: (speaker: SpeakerId, delta: string) => void;
  onSpeechDone: (speaker: SpeakerId) => void;
  onAssessment: (assessment: PrivateAssessment) => void;
  onStatusRead: (statusRead: string, nextSpeaker: SpeakerId) => void;
  onYourTurn: () => void;
  onError: (message: string) => void;
  onSync: (meeting: Meeting, phase: Phase, readOnly?: boolean, editingCycle?: number) => void;
  onProcessStart: (processId: string, processKind: ProcessKind, agent: AgentId | "orchestrator", cycleNumber: number) => void;
  onProcessEvent: (processId: string, eventKind: ProcessEventKind, content: string, toolName?: string, toolInput?: string) => void;
  onProcessDone: (processId: string, costUsd?: number) => void;
}

// ---------------------------------------------------------------------------
// Orchestrator state
// ---------------------------------------------------------------------------

let currentMeeting: Meeting | null = null;
let currentWorktreePath: string | null = null;
let currentPhase: Phase = "idle";
let currentActiveSpeaker: SpeakerId | undefined = undefined;
let attentionRequested = false;
let meetingParticipantDefs: AgentDefinition[] = [];

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
    onStatusRead: () => {},
    onYourTurn: () => {},
    onError: () => {},
    onSync: () => {},
    onProcessStart: () => {},
    onProcessEvent: () => {},
    onProcessDone: () => {},
  };
}

// ---------------------------------------------------------------------------
// Perush files on main
// ---------------------------------------------------------------------------

/** What the current meeting commits and rolls back on main (meetings created before it existed: the default) */
function meetingPerushScope(): PerushScope {
  return currentMeeting?.perushScope ?? defaultPerushScope();
}

/**
 * Thrown when a meeting can't start or resume yet: the meeting's perush scope has uncommitted changes, and the
 * Director hasn't decided about all of them. The server sends them to the Director (`uncommitted-changes`).
 */
export class UndecidedPerushChangesError extends Error {
  constructor(readonly changes: PerushChange[], readonly scope: PerushScope) {
    super(`${changes.length} uncommitted perush file(s) need the Director's decision`);
  }
}

/**
 * Apply the Director's decisions to the uncommitted changes of a scope: the paths to commit now ("include") and
 * the paths to leave out of the meeting ("ignore") - a rename's original path goes with it.
 * Throws UndecidedPerushChangesError if any change has no decision.
 */
async function resolvePerushDecisions(
  scope: PerushScope,
  decisions: Record<string, PerushFileDecision> = {},
): Promise<{ includePaths: string[]; ignorePaths: string[] }> {
  const changes = await detectPerushChanges(scope);
  if (changes.some(change => !decisions[change.path])) {
    throw new UndecidedPerushChangesError(changes, scope);
  }
  const includePaths: string[] = [];
  const ignorePaths: string[] = [];
  for (const change of changes) {
    const paths = change.originalPath ? [change.path, change.originalPath] : [change.path];
    (decisions[change.path] === "include" ? includePaths : ignorePaths).push(...paths);
  }
  return { includePaths, ignorePaths };
}

/** The perush scope a meeting will have when it resumes: its saved scope (or the default, for older meetings) */
async function scopeOfStoredMeeting(meetingId: MeetingId): Promise<PerushScope> {
  return (await readEndedMeeting(meetingId)).perushScope ?? defaultPerushScope();
}

/**
 * Check - before anything else happens - that the Director decided about every uncommitted perush file of a meeting
 * about to resume. Throws UndecidedPerushChangesError if not. Does nothing if the meeting is already active.
 */
export async function checkPerushDecisionsForResume(
  meetingId: MeetingId,
  decisions?: Record<string, PerushFileDecision>,
): Promise<void> {
  if (currentMeeting) {
    if (currentMeeting.meetingId === meetingId) return;
    throw new Error("A meeting is already active. End it before resuming another.");   // before asking about files
  }
  await resolvePerushDecisions(await scopeOfStoredMeeting(meetingId), decisions);
}

/**
 * Commit the uncommitted perush changes of the meeting's scope. A failure is reported to the Director, never fatal.
 * Returns false if the commit failed.
 */
async function commitPerushSafely(message: string): Promise<boolean> {
  try {
    await commitPerushChanges(meetingPerushScope(), message);
    return true;
  } catch (err) {
    logWarn("orchestrator", `commitPerushSafely: "${message}" failed`, err);
    events.onError(`שמירת קבצי הפירוש ב-git נכשלה ("${message}"): ${err}`);
    return false;
  }
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

/** Get the active speaker (only meaningful during "speaking" phase). */
export function getActiveSpeaker(): SpeakerId | undefined {
  return currentActiveSpeaker;
}

/** Get the current meeting (or null if no meeting active). */
export function getMeeting(): Meeting | null {
  return currentMeeting;
}

/** Get the current worktree path (or null). */
export function getWorktreePath(): string | null {
  return currentWorktreePath;
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
  perushFileDecisions?: Record<string, PerushFileDecision>,
): Promise<Meeting> {
  logInfo("orchestrator", `startMeeting: "${title}" with [${participantIds.join(", ")}]`);
  if (currentMeeting) {
    throw new Error("A meeting is already active. End it before starting a new one.");
  }

  // Git state preconditions
  await ensureGitConfig();
  await cleanupDanglingWorktrees();

  // Discover available agents
  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a => participantIds.includes(a.id));

  if (meetingParticipantDefs.length === 0) {
    throw new Error("No valid participants selected");
  }

  // Uncommitted perush files: the Director decided about each (or UndecidedPerushChangesError is thrown).
  // The included ones are committed now - the meeting's starting point; the ignored ones are left out of the meeting.
  const perushScope = defaultPerushScope();
  const { includePaths, ignorePaths } = await resolvePerushDecisions(perushScope, perushFileDecisions);
  perushScope.ignoredPaths = ignorePaths;
  const meetingId = generateMeetingId(title, new Date());
  if (includePaths.length > 0) {
    await commitPerushChanges(perushScope, commitPerushPreMeeting(meetingId), includePaths);
  }

  // Register meeting context in session-manager for lazy session creation
  registerMeeting(title, meetingParticipantDefs);

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
    perushScope,
    perushBaseline: (await getPerushHead()) ?? undefined,
  };

  setPhase("human-turn");

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
 * 2. Selection phase: orchestrator picks next speaker + statusRead
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
  let cycleCostAccumulator = 0;
  logInfo("orchestrator", `runCycle ${cycleNumber}: lastSpeaker=${lastSpeaker}`);

  // Initialize pending cycle on the meeting object (persisted between phases)
  currentMeeting.pendingCycle = { cycleNumber, assessments: {}, processes: [] };

  // Helper: create a process record and emit start/event/done
  function createProcessTracker(processKind: ProcessKind, agent: AgentId | "orchestrator") {
    const processId = `c${cycleNumber}-${processKind}-${agent}`;
    const processEvents: ProcessEventRecord[] = [];
    const record: ProcessRecord = { processId, processKind, agent, events: processEvents };
    currentMeeting!.pendingCycle!.processes.push(record);

    events.onProcessStart(processId, processKind, agent, cycleNumber);

    return {
      processId,
      emit(eventKind: ProcessEventKind, content: string, toolName?: string, toolInput?: string) {
        processEvents.push({ eventKind, content, toolName, toolInput });
        events.onProcessEvent(processId, eventKind, content, toolName, toolInput);
      },
      done(costUsd: number = 0) {
        record.costUsd = costUsd > 0 ? costUsd : undefined;
        cycleCostAccumulator += costUsd;
        events.onProcessDone(processId, record.costUsd);
      },
    };
  }

  // ------ ASSESSMENT PHASE ------
  setPhase("assessing");

  // Get the status-read from the previous cycle (if any) — agents see it before the speech
  const prevCycle = currentMeeting.cycles[currentMeeting.cycles.length - 1];
  const prevStatusRead = prevCycle?.orchestratorDecision?.statusRead;

  const assessments: Record<string, PrivateAssessment> = {}; // keyed by AgentId

  // Assess in parallel (all participants except last speaker)
  const assessmentPromises = currentMeeting.participants
    .filter(id => id !== lastSpeaker)
    .map(async (agentId) => {
      const tracker = createProcessTracker("assessment", agentId);
      try {
        const prompt = await buildAssessmentPrompt(lastSpeaker, lastContent, prevStatusRead);
        const { text: response, costUsd } = await feedMessage(agentId, prompt, (eventKind, content, toolName, toolInput) => {
          tracker.emit(eventKind, content, toolName, toolInput);
        });
        const assessmentText = extractAssessmentText(response);
        const assessment: PrivateAssessment = { agent: agentId, text: assessmentText ?? response };
        assessments[agentId] = assessment;
        events.onAssessment(assessment);
        tracker.done(costUsd);
      } catch (err) {
        // Assessment failure is non-fatal — proceed with partial assessments
        logWarn("orchestrator", `runCycle ${cycleNumber}: assessment failed for ${agentId}`, err);
        events.onError(`Assessment failed for ${agentId}: ${err}`);
        tracker.done();
      }
    });

  await Promise.all(assessmentPromises);
  logInfo("orchestrator", `runCycle ${cycleNumber}: ${Object.keys(assessments).length} assessment(s) collected`);

  // Persist after assessment phase
  currentMeeting.pendingCycle!.assessments = assessments;
  await writeMeetingAtomic(currentWorktreePath, currentMeeting);

  // ------ SELECTION PHASE ------
  setPhase("selecting");

  let decision: OrchestratorDecision | null;

  const orchestratorTracker = createProcessTracker("orchestrator-selection", "orchestrator");
  let orchestratorCost = 0;
  try {
    const selectionPrompt = await buildSelectionPrompt(lastSpeaker, lastContent, assessments);
    const { text: orchestratorResponse, costUsd } = await feedMessage("orchestrator", selectionPrompt, (eventKind, content, toolName, toolInput) => {
      orchestratorTracker.emit(eventKind, content, toolName, toolInput);
    });
    orchestratorCost += costUsd;

    decision = parseOrchestratorResponse(orchestratorResponse);

    // Retry once if parsing failed
    if (!decision) {
      const result = extractRecommendation(orchestratorResponse);
      const reason = "error" in result ? result.error : `שם המשתתף "${result.nextSpeakerRaw}" לא מוכר`;
      logWarn("orchestrator", `runCycle ${cycleNumber}: orchestrator selection parse failed, retrying: ${reason}`);

      const retryPrompt = await buildSelectionRetryPrompt(reason);
      const { text: retryResponse, costUsd: retryCost } = await feedMessage("orchestrator", retryPrompt, (eventKind, content, toolName, toolInput) => {
        orchestratorTracker.emit(eventKind, content, toolName, toolInput);
      });
      orchestratorCost += retryCost;

      decision = parseOrchestratorResponse(retryResponse);
    }

    // Final fallback if retry also failed
    if (!decision) {
      logWarn("orchestrator", `runCycle ${cycleNumber}: orchestrator selection retry also failed, falling back to Director`);
      decision = {
        nextSpeaker: pickFallbackSpeaker(lastSpeaker),
        statusRead: "לא הצלחתי לקרוא את מצב הדיון.",
      };
    }
  } catch (err) {
    decision = {
      nextSpeaker: pickFallbackSpeaker(lastSpeaker),
      statusRead: "שגיאה בבחירת דובר.",
    };
    events.onError(`Selection failed: ${err}`);
  } finally {
    orchestratorTracker.done(orchestratorCost);
  }

  // Apply attention override
  if (attentionRequested) {
    logInfo("orchestrator", `runCycle ${cycleNumber}: attention override → human`);
    decision = { ...decision, nextSpeaker: "human" };
    attentionRequested = false;
  }

  logInfo("orchestrator", `runCycle ${cycleNumber}: selected → ${decision.nextSpeaker} (statusRead: "${decision.statusRead}")`);
  events.onStatusRead(decision.statusRead, decision.nextSpeaker);

  // Persist after selection phase
  currentMeeting.pendingCycle!.orchestratorDecision = decision;
  await writeMeetingAtomic(currentWorktreePath, currentMeeting);

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
    events.onSpeech("human", humanContent, speech.timestamp);
  } else {
    // The Director's edits so far are committed first - so the agent's commit holds only its own edits
    await commitPerushSafely(commitPerushDirectorEdits(cycleNumber, currentMeeting.meetingId));

    // Agent speech
    setPhase("speaking", nextSpeaker);

    const speechPrompt = await buildSpeechPrompt(decision.statusRead);
    let fullText = "";

    const speechTracker = createProcessTracker("agent-speech", nextSpeaker);
    speechTracker.emit("prompt", speechPrompt);
    let speechCost = 0;

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
          speechCost = event.costUsd;
          speechTracker.emit("text", fullText);
        }
      }
    } catch (err) {
      fullText = `[שגיאה: ${err}]`;
      logError("orchestrator", `runCycle ${cycleNumber}: speech failed for ${nextSpeaker}`, err);
      events.onError(`Speech failed for ${nextSpeaker}: ${err}`);
    } finally {
      speechTracker.done(speechCost);
    }

    speech = {
      speaker: nextSpeaker,
      content: fullText,
      timestamp: createFormattedTime(),
    };
    events.onSpeechDone(nextSpeaker);
    events.onSpeech(nextSpeaker, fullText, speech.timestamp);
  }

  // ------ RECORD & COMMIT ------
  // The cycle was interrupted (a rollback or the meeting's end replaced the meeting while the speaker spoke)
  if (!currentMeeting || currentMeeting.pendingCycle?.cycleNumber !== cycleNumber) {
    logWarn("orchestrator", `runCycle ${cycleNumber}: interrupted - not recording the cycle`);
    return null;
  }

  // The speaker's perush edits are committed on main, and main's commit is recorded - a rollback to this cycle
  // restores it. If the commit failed, nothing is recorded: main's commit would lack the speaker's edits.
  const meeting = currentMeeting;
  const isPerushCommitted = await commitPerushSafely(commitPerushUpdate(cycleNumber, speech.speaker, meeting.meetingId));
  const perushCommit = isPerushCommitted ? await getPerushHead().catch(() => null) : null;
  if (currentMeeting !== meeting) {                    // replaced during the git work above
    logWarn("orchestrator", `runCycle ${cycleNumber}: interrupted - not recording the cycle`);
    return null;
  }

  const pending = currentMeeting.pendingCycle!;
  const cycle: CycleRecord = {
    cycleNumber,
    speech,
    assessments: pending.assessments,
    orchestratorDecision: pending.orchestratorDecision!,
    processes: pending.processes,
    ...(perushCommit ? { perushCommit } : {}),
  };

  currentMeeting.cycles.push(cycle);
  currentMeeting.lastEngagedAt = speech.timestamp;
  currentMeeting.totalCostEstimate =
    (currentMeeting.totalCostEstimate ?? 0) + cycleCostAccumulator;

  // Sync session IDs from registry (sessions may have been created lazily)
  Object.assign(currentMeeting.sessionIds, getAllSessionIds());

  // Clear pending cycle — it's now a committed cycle
  delete currentMeeting.pendingCycle;

  await writeMeetingAtomic(currentWorktreePath, currentMeeting);
  await commitCycleGit(currentWorktreePath, cycleNumber, speech.speaker);

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
  const perushScope = meetingPerushScope();
  await resetSessionBranchToCycle(currentWorktreePath, targetCycleNumber);

  // Re-read the rolled-back meeting.yaml - keeping the current perush scope: files the Director chose to ignore
  // later (on resume) must stay ignored - the rollback must not commit or restore them
  currentMeeting = await readActiveMeeting(currentWorktreePath);
  currentMeeting.perushScope = perushScope;

  // Phase 3: Roll back the perush files on main - to the commit recorded at the end of the target cycle
  onProgress?.("perush-rollback", "משחזר את קבצי הפירוש...");
  const restoreCommit = targetCycleNumber === 0
    ? currentMeeting.perushBaseline
    : currentMeeting.cycles[targetCycleNumber - 1]?.perushCommit;
  if (!restoreCommit) {
    logWarn("orchestrator", `handleRollback: no recorded perush commit for cycle ${targetCycleNumber} - perush files not rolled back`);
    onProgress?.("perush-rollback",
        "לא נשמר מצב קבצי הפירוש של מחזור זה (פגישה ישנה, או ששמירת הקבצים נכשלה באותו מחזור) - קבצי הפירוש לא שוחזרו.");
  } else {
    const { checkpointed, rolledBack } = await rollbackPerushOnMain(
      meetingPerushScope(),
      restoreCommit,
      commitPerushBeforeRollback(targetCycleNumber, meetingId),
      commitPerushRollback(targetCycleNumber, meetingId),
    );
    if (checkpointed) {
      onProgress?.("perush-rollback", "שינויים שלא נשמרו בקבצי הפירוש נשמרו ב-commit לפני השחזור.");
    }
    if (!rolledBack) {
      events.onError("שחזור קבצי הפירוש נכשל, והם נשארו כפי שהיו - ראה את הלוג.");
    }
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
export async function resumeMeetingById(
  meetingId: MeetingId,
  perushFileDecisions?: Record<string, PerushFileDecision>,
): Promise<Meeting> {
  logInfo("orchestrator", `resumeMeetingById: ${meetingId}`);
  if (currentMeeting) {
    if (currentMeeting.meetingId === meetingId) {
      logInfo("orchestrator", `resumeMeetingById: meeting ${meetingId} is already active — returning it`);
      return currentMeeting;
    }
    throw new Error("A meeting is already active. End it before resuming another.");
  }

  // Uncommitted perush files: the Director decided about each (or UndecidedPerushChangesError is thrown).
  // The included ones are committed now; the ignored ones are added to the meeting's scope (below).
  const perushScope = await scopeOfStoredMeeting(meetingId);
  const { includePaths, ignorePaths } = await resolvePerushDecisions(perushScope, perushFileDecisions);
  if (includePaths.length > 0) {
    await commitPerushChanges(perushScope, commitPerushOnResume(meetingId), includePaths);
  }

  // Re-attach worktree
  const worktreePath = await resumeMeetingGit(meetingId);
  currentWorktreePath = worktreePath;

  // Read meeting state
  currentMeeting = await readActiveMeeting(worktreePath);
  const isPerushScopeChanged = !currentMeeting.perushScope || ignorePaths.length > 0;
  currentMeeting.perushScope = { ...perushScope, ignoredPaths: [...perushScope.ignoredPaths, ...ignorePaths] };

  // If a pending cycle exists (interrupted mid-cycle), account for its costs and discard
  if (currentMeeting.pendingCycle) {
    const pendingCosts = currentMeeting.pendingCycle.processes
      .reduce((sum, p) => sum + (p.costUsd ?? 0), 0);
    if (pendingCosts > 0) {
      currentMeeting.totalCostEstimate =
        (currentMeeting.totalCostEstimate ?? 0) + pendingCosts;
      logInfo("orchestrator", `resumeMeetingById: accounting for interrupted cycle costs: $${pendingCosts.toFixed(4)}`);
    }
    delete currentMeeting.pendingCycle;
  }

  // Discover agents and restore participant defs
  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a =>
    currentMeeting!.participants.includes(a.id),
  );

  // Attempt to recover sessions — create fresh ones from transcript
  clearSessions();

  // Re-register meeting context for lazy session creation
  registerMeeting(currentMeeting.title, meetingParticipantDefs);

  // Only create sessions if the meeting has history to replay.
  // An empty meeting (no cycles, no openingPrompt) is waiting for the first human prompt —
  // sessions will be created lazily when the deliberation loop starts, just like startMeeting.
  const hasHistory = currentMeeting.cycles.length > 0 || !!currentMeeting.openingPrompt;
  if (hasHistory) {
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
  }
  if (hasHistory || isPerushScopeChanged) {
    // Save updated session IDs (and perush scope) and commit
    await writeMeetingAtomic(worktreePath, currentMeeting);
    await commitWithMessage(worktreePath, "Meeting resumed");
  }

  // Determine correct phase: if the last cycle's orchestrator selected "human",
  // the meeting was waiting for human input when it was interrupted — restore that state.
  const lastCycle = currentMeeting.cycles[currentMeeting.cycles.length - 1];
  const wasWaitingForHuman = lastCycle?.orchestratorDecision?.nextSpeaker === "human";
  // Also treat no-cycles-no-openingPrompt as human-turn (waiting for first prompt)
  const waitingForFirstPrompt = !lastCycle && !currentMeeting.openingPrompt;

  if (wasWaitingForHuman || waitingForFirstPrompt) {
    logInfo("orchestrator", `resumeMeetingById: restoring human-turn phase`);
    setPhase("human-turn");
  } else {
    setPhase("idle");
  }

  logInfo("orchestrator", `resumeMeetingById: done (${currentMeeting.cycles.length} cycles restored)`);
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
  currentActiveSpeaker = activeSpeaker;
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
 * Returns { nextSpeakerRaw, statusRead } or null with a reason string.
 */
function extractRecommendation(response: string): { nextSpeakerRaw: string; statusRead: string } | { error: string } {
  const startIdx = response.indexOf(RECOMMENDATION_START_DELIMITER);
  const endIdx = response.indexOf(RECOMMENDATION_END_DELIMITER);
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return { error: "לא נמצא בלוק המלצה בין הסימנים המתאימים" };
  }

  const block = response.slice(startIdx + RECOMMENDATION_START_DELIMITER.length, endIdx).trim();
  const lines = block.split("\n");

  // Parse first line: "הדובר הבא: <name>"
  let firstLine = lines[0]?.trim() ?? "";
  firstLine = firstLine.replace(/\*/g, ''); // removing Markdown emphasis for more lenient parsing
  const speakerMatch = firstLine.match(/הדובר.*?:\s*(.+)/);
  if (!speakerMatch) {
    return { error: `השורה הראשונה לא בפורמט הנכון (צפוי: "הדובר הבא: <שם>"): "${firstLine}"` };
  }
  const nextSpeakerRaw = speakerMatch[1].trim();

  let statusRead = lines.slice(1).join("\n").trim();
  statusRead = statusRead.replace(/^(\*\*קריאת מצב:?\*\*|\*קריאת מצב:?\*|\[קריאת מצב:?]):?\s*|/, ""); // removing redundant LLM-generated "קריאת מצב" line

  return { nextSpeakerRaw, statusRead };
}

async function buildAssessmentPrompt(lastSpeaker: SpeakerId, lastContent: string, statusRead?: string): Promise<string> {
  const speakerLabel = lastSpeaker === "human" ? "המנחה" : lastSpeaker;
  const ctx: Record<string, string> = {
    speakerLabel,
    lastContent,
    assessmentStartDelimiter: ASSESSMENT_START_DELIMITER,
    assessmentEndDelimiter: ASSESSMENT_END_DELIMITER,
  };
  if (statusRead) ctx.statusRead = statusRead;
  const prompt = await resolvePromptTemplate("agent-assessment-prompt.md", ctx);
  return withStubResponse(prompt, `חשבתי על הנקודה הזו לעומק.\n\n---התחלת הערכה להמשך הדיון---\nאני: 5\nיש לי כמה הערות לגבי המילון.\n---סיום הערכה להמשך הדיון---`);
}

async function buildSpeechPrompt(statusRead: string): Promise<string> {
  const prompt = await resolvePromptTemplate("agent-speech-prompt.md", { statusRead });
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
 * Extracts the recommendation block, resolves the speaker name, extracts the status-read.
 */
function parseOrchestratorResponse(response: string): OrchestratorDecision | null {
  const result = extractRecommendation(response);
  if ("error" in result) return null;

  const resolved = resolveNextSpeaker(result.nextSpeakerRaw);
  if (!resolved) return null;

  return { nextSpeaker: resolved, statusRead: result.statusRead || "הדיון ממשיך." };
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
  _lastSpeaker: SpeakerId,
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
