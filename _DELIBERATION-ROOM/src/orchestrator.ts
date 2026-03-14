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
  ManagerDecision,
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
} from "./meetings-db.ts";
import {
  discoverAgents,
  buildSystemPrompt,
  createSession,
  feedMessage,
  streamSpeech,
  interruptAll,
  extractAssessment,
  extractManagerDecision,
  clearSessions,
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
  onProcessStart: (processId: string, processKind: ProcessKind, agent: AgentId | "manager", cycleNumber: number) => void;
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
 * Creates git infrastructure, builds system prompts, initializes AI-Agent
 * sessions, and commits the initial state.
 */
export async function startMeeting(
  title: string,
  openingPrompt: string,
  participantIds: AgentId[],
): Promise<Meeting> {
  logInfo("orchestrator", `startMeeting: "${title}" with [${participantIds.join(", ")}]`);
  if (currentMeeting) {
    throw new Error("A meeting is already active. End it before starting a new one.");
  }

  // Git state preconditions
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

  // Generate meeting ID
  const meetingId = generateMeetingId(title, new Date());

  // Create git worktree
  const worktreePath = await createMeetingWorktree(meetingId);
  currentWorktreePath = worktreePath;

  // Build the meeting record
  const meeting: Meeting = {
    meetingId,
    mode: "Perush-Development",
    title,
    openingPrompt,
    participants: participantIds,
    cycles: [],
    startedAt: createFormattedTime(),
    sessionIds: {} as Meeting['sessionIds'],
  };

  // Create sessions for each participant + manager
  setPhase("idle");

  for (const agentId of participantIds) {
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    const { sessionId } = await createSession(
      agentId,
      systemPrompt,
      `פתיחת דיון: ${openingPrompt}\n\n---stub-response---\ntext: מוכן לדיון.\n---end-stub-response---`,
    );
    meeting.sessionIds[agentId] = sessionId;
  }

  // Create manager session
  const managerSystemPrompt = await buildSystemPrompt("manager", meetingParticipantDefs);
  const { sessionId: managerSessionId } = await createSession(
    "manager",
    managerSystemPrompt,
    `פתיחת דיון. הנושא: ${title}\n\n---stub-response---\ntext: מוכן לנהל.\n---end-stub-response---`,
  );
  meeting.sessionIds.manager = managerSessionId;

  // Persist and commit
  currentMeeting = meeting;
  await initializeMeeting(worktreePath, meeting);

  logInfo("orchestrator", `startMeeting: done → ${meetingId}`);
  return meeting;
}

/**
 * Run a single deliberation cycle.
 *
 * 1. Assessment phase: each participant (except last speaker) assesses
 * 2. Selection phase: manager picks next speaker + vibe
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

  // Helper: create a process record and emit start/event/done
  function createProcessTracker(processKind: ProcessKind, agent: AgentId | "manager") {
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

  const assessments: Record<string, PrivateAssessment> = {}; // keyed by AgentId

  // Assess in parallel (all participants except last speaker)
  const assessmentPromises = currentMeeting.participants
    .filter(id => id !== lastSpeaker)
    .map(async (agentId) => {
      const tracker = createProcessTracker("assessment", agentId);
      try {
        const prompt = buildAssessmentPrompt(lastSpeaker, lastContent);
        tracker.emit("prompt", prompt);
        const response = await feedMessage(agentId, prompt, (eventKind, content, toolName, toolInput) => {
          tracker.emit(eventKind, content, toolName, toolInput);
        });
        const assessment = extractAssessment(agentId, response);
        if (assessment) {
          assessments[agentId] = assessment;
          events.onAssessment(assessment);
        }
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

  let decision: ManagerDecision;

  const managerTracker = createProcessTracker("manager-selection", "manager");
  try {
    const selectionPrompt = buildSelectionPrompt(lastSpeaker, lastContent, assessments);
    managerTracker.emit("prompt", selectionPrompt);
    const managerResponse = await feedMessage("manager", selectionPrompt, (eventKind, content, toolName, toolInput) => {
      managerTracker.emit(eventKind, content, toolName, toolInput);
    });
    const parsed = extractManagerDecision(managerResponse);

    if (!parsed) {
      // Fallback: pick the agent with the highest selfImportance, or human
      decision = {
        nextSpeaker: pickFallbackSpeaker(lastSpeaker, assessments),
        vibe: "לא הצלחתי לקרוא את האווירה.",
      };
    } else {
      decision = parsed;
    }
  } catch (err) {
    decision = {
      nextSpeaker: pickFallbackSpeaker(lastSpeaker, assessments),
      vibe: "שגיאה בבחירת דובר.",
    };
    events.onError(`Selection failed: ${err}`);
  } finally {
    managerTracker.done();
  }

  // Apply attention override
  if (attentionRequested) {
    logInfo("orchestrator", `runCycle ${cycleNumber}: attention override → human`);
    decision = { ...decision, nextSpeaker: "human" };
    attentionRequested = false;
  }

  // Resolve speaker name to ID
  const nextSpeakerId = resolveNextSpeaker(decision.nextSpeaker);
  logInfo("orchestrator", `runCycle ${cycleNumber}: selected → ${nextSpeakerId} (vibe: "${decision.vibe}")`);
  events.onVibe(decision.vibe, nextSpeakerId);

  // ------ SPEECH PHASE ------
  let speech: ConversationMessage;

  if (nextSpeakerId === "human") {
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
    setPhase("speaking", nextSpeakerId);

    const speechPrompt = "נבחרת לדבר. הנה תגובתך.\n\n---stub-response---\ntext: תגובת הסוכן.\n---end-stub-response---";
    let fullText = "";

    const speechTracker = createProcessTracker("agent-speech", nextSpeakerId);
    speechTracker.emit("prompt", speechPrompt);

    try {
      for await (const event of streamSpeech(nextSpeakerId, speechPrompt)) {
        if (event.type === "chunk") {
          events.onSpeechChunk(nextSpeakerId, event.text);
          // Text chunks are accumulated; we'll emit a single "text" event at done
        } else if (event.type === "thinking") {
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
      logError("orchestrator", `runCycle ${cycleNumber}: speech failed for ${nextSpeakerId}`, err);
      events.onError(`Speech failed for ${nextSpeakerId}: ${err}`);
    } finally {
      speechTracker.done();
    }

    speech = {
      speaker: nextSpeakerId,
      content: fullText,
      timestamp: createFormattedTime(),
    };
    events.onSpeechDone(nextSpeakerId);
    events.onSpeech(nextSpeakerId, fullText, speech.timestamp, getCycleCost());
  }

  // ------ RECORD & COMMIT ------
  const cycle: CycleRecord = {
    cycleNumber,
    speech,
    assessments,
    managerDecision: decision,
    processes,
  };

  currentMeeting.cycles.push(cycle);
  currentMeeting.lastEngagedAt = speech.timestamp;
  const cycleCost = getCycleCost();
  currentMeeting.totalCostEstimate =
    (currentMeeting.totalCostEstimate ?? 0) + cycleCost;

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
  logInfo("orchestrator", `handleRollback: recovering sessions for ${currentMeeting.participants.length} participants + manager`);
  onProgress?.("session-recovery", "משחזר סשנים...");
  clearSessions();

  const allAgents = await discoverAgents();
  meetingParticipantDefs = allAgents.filter(a =>
    currentMeeting!.participants.includes(a.id),
  );

  // Recreate participant sessions
  for (const agentId of currentMeeting.participants) {
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    const transcript = buildTranscriptPrompt(currentMeeting);
    const { sessionId } = await createSession(
      agentId,
      systemPrompt,
      transcript,
    );
    currentMeeting.sessionIds[agentId] = sessionId;
  }

  // Recreate manager session
  const managerSystemPrompt = await buildSystemPrompt("manager", meetingParticipantDefs);
  const managerTranscript = buildTranscriptPrompt(currentMeeting);
  const { sessionId: managerSessionId } = await createSession(
    "manager",
    managerSystemPrompt,
    managerTranscript,
  );
  currentMeeting.sessionIds.manager = managerSessionId;

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

  for (const agentId of currentMeeting.participants) {
    const systemPrompt = await buildSystemPrompt(agentId, meetingParticipantDefs);
    const transcript = buildTranscriptPrompt(currentMeeting);
    const { sessionId } = await createSession(
      agentId,
      systemPrompt,
      transcript,
    );
    currentMeeting.sessionIds[agentId] = sessionId;
  }

  // Recreate manager session
  const managerSystemPrompt = await buildSystemPrompt("manager", meetingParticipantDefs);
  const managerTranscript = buildTranscriptPrompt(currentMeeting);
  const { sessionId: managerSessionId } = await createSession(
    "manager",
    managerSystemPrompt,
    managerTranscript,
  );
  currentMeeting.sessionIds.manager = managerSessionId;

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

function setPhase(phase: Phase, activeSpeaker?: SpeakerId): void {
  logInfo("orchestrator", `phase: ${currentPhase} → ${phase}${activeSpeaker ? ` (speaker: ${activeSpeaker})` : ""}`);
  currentPhase = phase;
  events.onPhaseChange(phase, activeSpeaker);
}

/**
 * Build a transcript prompt from a meeting's conversation history.
 * Used for session recovery — feeds the full public conversation into a new session.
 */
function buildTranscriptPrompt(meeting: Meeting): string {
  const parts: string[] = [];
  parts.push(`פתיחת דיון: ${meeting.openingPrompt}`);

  for (const cycle of meeting.cycles) {
    const speakerLabel = cycle.speech.speaker === "human" ? "המנחה" : cycle.speech.speaker;
    parts.push(`\n${speakerLabel}: ${cycle.speech.content}`);
  }

  parts.push(
    "\n\n---stub-response---\ntext: שחזור סשן — מוכן להמשיך.\n---end-stub-response---",
  );

  return parts.join("\n");
}

function buildAssessmentPrompt(lastSpeaker: SpeakerId, lastContent: string): string {
  const speakerLabel = lastSpeaker === "human" ? "המנחה" : lastSpeaker;
  return `הודעה חדשה מ-${speakerLabel}: ${lastContent}\n\nמה ההערכה שלך?\n\nהחזר JSON:\n{"selfImportance": <1-10>, "humanImportance": <1-10>, "summary": "<משפט אחד>"}\n\n---stub-response---\nselfImportance: 5\nhumanImportance: 3\nsummary: "הערכה ראשונית"\n---end-stub-response---`;
}

function buildSelectionPrompt(
  lastSpeaker: SpeakerId,
  lastContent: string,
  assessments: Record<string, PrivateAssessment>,
): string {
  const speakerLabel = lastSpeaker === "human" ? "המנחה" : lastSpeaker;
  const assessmentsJson = JSON.stringify(assessments, null, 2);

  const attentionLine = attentionRequested
    ? "\n\n** המנחה ביקש את רשות הדיבור. עליך לבחור \"Director\" כדובר הבא. **\n"
    : "";

  return `הודעה חדשה מ-${speakerLabel}: ${lastContent}\n\nהנה ההערכות:\n${assessmentsJson}${attentionLine}\n\nמי מדבר הבא? החזר JSON:\n{"nextSpeaker": "<name>", "vibe": "<משפט בעברית>"}\n\n---stub-response---\nnextSpeaker: "Milo"\nvibe: "הדיון זורם."\n---end-stub-response---`;
}

function pickFallbackSpeaker(
  lastSpeaker: SpeakerId,
  assessments: Record<string, PrivateAssessment>, // keyed by AgentId
): SpeakerId {
  // Pick the agent with the highest selfImportance, excluding last speaker
  let best: { id: AgentId; score: number } | null = null; // id is AgentId
  for (const [id, assessment] of Object.entries(assessments) as unknown as [AgentId, PrivateAssessment][]) {
    if (id === lastSpeaker) continue;
    if (!best || assessment.selfImportance > best.score) {
      best = { id, score: assessment.selfImportance };
    }
  }
  return best?.id ?? "human";
}

/**
 * Resolve a nextSpeaker value (English name or "Director") to a SpeakerId.
 */
function resolveNextSpeaker(nextSpeaker: string): SpeakerId {
  if (nextSpeaker === "Director" || nextSpeaker === "human") return "human";

  // Look up by English name
  const agent = meetingParticipantDefs.find(
    a => a.englishName.toLowerCase() === nextSpeaker.toLowerCase(),
  );
  return agent?.id ?? "human";
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
