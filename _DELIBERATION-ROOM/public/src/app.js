/**
 * @file Frontend entry point.
 *
 * Owns the WebSocket connection, dispatches server messages,
 * manages page routing (landing ↔ deliberation ↔ view-only),
 * and wires up all user interactions (meeting creation, human input,
 * attention, rollback, panel toggle).
 */

/** @typedef {import('../../src/types.ts').ServerMessage} ServerMessage */
/** @typedef {import('../../src/types.ts').ClientMessage} ClientMessage */
/** @typedef {Extract<ServerMessage, {type: "sync"}>} WsSync */
/** @typedef {Extract<ServerMessage, {type: "phase"}>} WsPhase */
/** @typedef {Extract<ServerMessage, {type: "vibe"}>} WsVibe */
/** @typedef {Extract<ServerMessage, {type: "rollback-progress"}>} WsRollbackProgress */
/** @typedef {import('../../src/types.ts').Meeting} Meeting */
/** @typedef {import('../../src/types.ts').AgentDefinition} AgentDefinition */
/** @typedef {import('../../src/types.ts').PrivateAssessment} PrivateAssessment */
/** @typedef {import('../../src/types.ts').MeetingSummary} MeetingSummary */
/** @typedef {import('../../src/types.ts').Phase} Phase */
/** @typedef {import('../../src/types.ts').AgentId} AgentId */
/** @typedef {import('../../src/types.ts').SpeakerId} SpeakerId */
/** @typedef {import('../../src/types.ts').MeetingId} MeetingId */

import { ConversationView } from "./conversation-view.js";
import { AgentPanel } from "./agent-panel.js";
import { speakerColor, phaseDisplayName, querySelectorMust, prettyLog } from "./utils.js";

// ---- Constants --------------------------------------------------------------

/** @type {number} Page load timestamp for elapsed-time logging. */
const WS_LOG_EPOCH = performance.now();

/**
 * Log a WebSocket message.
 * @param {'server --> client'|'client --> server'} arrow
 * @param {ServerMessage|ClientMessage} msg
 * @returns {string}
 */
function logWsMessage(arrow, msg) {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const ms = String(now.getMilliseconds()).padStart(3, "0");
  const elapsed = String(Math.round(performance.now() - WS_LOG_EPOCH)).padStart(6, " ");
  console.groupCollapsed(`[ WS ${arrow} ${hh}:${mm}:${ss}.${ms} ${elapsed}ms ${msg.messageId} ${msg.type} ]`, msg);
  console.log(prettyLog(msg));
  console.groupEnd();
}

/** @type {number} Client message sequence counter for messageId ("C1", "C2", ...). */
let clientMessageSeq = 0;

/** @type {number} Initial reconnection delay (ms), doubles on each failure. */
const WS_RECONNECT_BASE = 1000;
/** @type {number} Maximum reconnection delay (ms). */
const WS_RECONNECT_MAX = 30000;

// ---- Application State ------------------------------------------------------

/** @type {WebSocket | null} */
let ws = null;
/** @type {number} Current reconnection backoff (ms). */
let reconnectDelay = WS_RECONNECT_BASE;
/** @type {ReturnType<typeof setTimeout> | null} */
let reconnectTimer = null;
/** @type {"landing" | "deliberation" | "view-only"} */
let pageState = "landing";
/** @type {Meeting | null} The active/viewed meeting object from the server. */
let currentMeeting = null;
/** @type {string} Current cycle phase. */
let currentPhase = "idle";
/** @type {boolean} True when viewing a past meeting (no input). */
let readOnly = false;
/** @type {number | null} Cycle number being edited after rollback. */
let editingCycle = null;
/** @type {AgentDefinition[]} Cached agent definitions from `/api/agents`. */
let agentDefinitions = [];
/** @type {ConversationView | null} */
let conversationView = null;
/** @type {AgentPanel | null} */
let agentPanel = null;

// ---- DOM References ---------------------------------------------------------

const $landingPage = document.getElementById("landing-page");
const $deliberationPage = document.getElementById("deliberation-page");
const $newMeetingForm = document.getElementById("new-meeting-form");
const $participantCards = document.getElementById("participant-cards");
const $noParticipantsError = document.getElementById("no-participants-error");
const $meetingList = document.getElementById("meeting-list");
const $vibeText = document.getElementById("vibe-text");
const $vibeNext = document.getElementById("vibe-next");
const $vibePhase = document.getElementById("vibe-phase");
const $vibeCost = document.getElementById("vibe-cost");
const $attentionBtn = document.getElementById("attention-btn");
const $humanInput = document.getElementById("human-input-textarea");
const $humanSubmit = document.getElementById("human-submit-btn");
const $reconnecting = document.getElementById("reconnecting-indicator");
const $viewOnlyBanner = document.getElementById("view-only-banner");
const $backToLanding = document.getElementById("back-to-landing");
const $rollbackModal = document.getElementById("rollback-modal");
const $rollbackPreview = document.getElementById("rollback-preview");
const $rollbackWarning = document.getElementById("rollback-warning");
const $rollbackCancel = document.getElementById("rollback-cancel");
const $rollbackConfirm = document.getElementById("rollback-confirm");

// ---- Utility ----------------------------------------------------------------

/**
 * Resolves a speaker ID to its Hebrew display name.
 * @param {SpeakerId} speakerId - "human" or an agent ID
 * @returns {string}
 */
function speakerDisplayName(speakerId) {
  if (speakerId === "human") return "המנחה";
  const agent = agentDefinitions.find((a) => a.id === speakerId);
  return agent ? agent.hebrewName : speakerId;
}

// ---- WebSocket --------------------------------------------------------------

/** Opens a WebSocket connection and wires up event handlers. */
function connectWs() {
  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  ws = new WebSocket(`${protocol}//${location.host}/ws`);

  ws.addEventListener("open", () => {
    reconnectDelay = WS_RECONNECT_BASE;
    $reconnecting.classList.add("hidden");
    document.documentElement.dataset.wsReady = "true";
  });

  ws.addEventListener("message", (event) => {
    try {
      const msg = /** @type {ServerMessage} */(JSON.parse(event.data));
      logWsMessage("server --> client", msg);
      handleServerMessage(msg);
    } catch (err) {
      console.error("Failed to parse WS message:", err);
    }
  });

  ws.addEventListener("close", () => {
    ws = null;
    scheduleReconnect();
  });

  ws.addEventListener("error", () => {
    // Will trigger close, which handles reconnection
  });
}

/** Schedules a WebSocket reconnection with exponential backoff. */
function scheduleReconnect() {
  if (reconnectTimer) return;
  $reconnecting.classList.remove("hidden");

  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    reconnectDelay = Math.min(reconnectDelay * 2, WS_RECONNECT_MAX);
    connectWs();
  }, reconnectDelay);
}

/**
 * Sends a JSON message over the WebSocket (no-op if disconnected).
 * @param {ClientMessage} msg
 */
function sendWs(msg) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    msg = {
      messageId: `C${++clientMessageSeq}`,
      ...msg,
    };
    logWsMessage("client --> server", msg);
    ws.send(JSON.stringify(msg));
  }
}

// ---- Server Message Dispatch ------------------------------------------------

/**
 * Routes an incoming server message to the appropriate handler.
 * @param {ServerMessage} msg - Parsed JSON from the WebSocket
 */
function handleServerMessage(msg) {
  switch (msg.type) {
    case "sync":
      handleSync(msg);
      break;
    case "phase":
      handlePhase(msg);
      break;
    case "speech":
      conversationView?.addSpeech(msg.speaker, msg.content, msg.timestamp);
      // Increment client-side cost estimate
      if (currentMeeting) {
        currentMeeting.totalCostEstimate = (currentMeeting.totalCostEstimate || 0) + 0.50;
        updateCostDisplay();
      }
      break;
    case "speech-chunk":
      conversationView?.appendChunk(msg.speaker, msg.delta);
      break;
    case "speech-done":
      conversationView?.finalizeSpeech(msg.speaker);
      break;
    case "assessment":
      agentPanel?.setAssessment(msg.agent, {
        selfImportance: msg.selfImportance,
        humanImportance: msg.humanImportance,
        summary: msg.summary,
      });
      break;
    case "vibe":
      handleVibe(msg);
      break;
    case "your-turn":
      handleYourTurn();
      break;
    case "error":
      handleError(msg.message);
      break;
    case "attention-ack":
      handleAttentionAck();
      break;
    case "rollback-progress":
      handleRollbackProgress(msg);
      break;
  }
}

/**
 * Handles a full state sync (sent on connect/reconnect).
 * @param {WsSync} msg
 */
function handleSync(msg) {
  currentMeeting = msg.meeting;
  currentPhase = msg.currentPhase || "idle";
  readOnly = msg.readOnly || false;
  editingCycle = msg.editingCycle ?? null;

  if (currentMeeting) {
    showDeliberation();
    renderMeetingState();
  }
}

/**
 * Updates UI for a cycle-phase transition.
 * @param {WsPhase} msg
 */
function handlePhase(msg) {
  currentPhase = msg.phase;
  updatePhaseUI(msg.phase, msg.activeSpeaker);
}

/**
 * Displays the manager's vibe comment and next-speaker indicator.
 * @param {WsVibe} msg
 */
function handleVibe(msg) {
  $vibeText.textContent = msg.vibe;
  $vibeNext.textContent = msg.nextSpeaker ? `הבא: ${speakerDisplayName(msg.nextSpeaker)}` : "";
}

/** Activates the Director's input field and highlights the vibe bar. */
function handleYourTurn() {
  enableHumanInput();
  // Visual emphasis on vibe bar
  const vibeBar = querySelectorMust(".vibe-bar");
  vibeBar.classList.add("bg-blue-50", "border-blue-200");
  vibeBar.classList.remove("bg-stone-50");
}

/** Shows a server error as a system message in the conversation feed. */
function handleError(message) {
  // Show error in conversation as a system message
  conversationView?.addSystemMessage(message, "error");
}

/** Transitions the attention button to its activated (amber) state. */
function handleAttentionAck() {
  $attentionBtn.textContent = "\u270B \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D1 \u2713";
  $attentionBtn.classList.add("bg-amber-100", "border-amber-600");
  $attentionBtn.disabled = true;
  // Pulse animation
  $attentionBtn.classList.add("animate-pulse");
  setTimeout(() => $attentionBtn.classList.remove("animate-pulse"), 600);
}

/**
 * Displays rollback progress steps as system messages.
 * @param {WsRollbackProgress} msg
 */
function handleRollbackProgress(msg) {
  conversationView?.addSystemMessage(`חזרה: ${msg.step}${msg.detail ? " — " + msg.detail : ""}`, "info");
}

// ---- Phase UI Updates -------------------------------------------------------

/**
 * Applies visual changes to the vibe bar, input field, and agent panel
 * based on the current cycle phase.
 * @param {Phase}  phase           - Current phase identifier
 * @param {SpeakerId} [activeSpeaker] - Agent ID of the current speaker (if speaking phase)
 */
function updatePhaseUI(phase, activeSpeaker) {
  $vibePhase.textContent = phaseDisplayName(phase);

  const vibeBar = querySelectorMust(".vibe-bar");

  // Reset vibe bar styling
  vibeBar.classList.remove("bg-blue-50", "border-blue-200");
  vibeBar.classList.add("bg-stone-50");

  switch (phase) {
    case "human-turn":
      enableHumanInput();
      vibeBar.classList.add("bg-blue-50", "border-blue-200");
      vibeBar.classList.remove("bg-stone-50");
      $attentionBtn.classList.add("hidden");
      break;
    case "speaking":
      disableHumanInput();
      $attentionBtn.classList.remove("hidden");
      if (activeSpeaker) {
        agentPanel?.openForAgent(activeSpeaker);
      }
      break;
    case "idle":
      disableHumanInput();
      // Reset attention button
      $attentionBtn.textContent = "\u270B \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D1";
      $attentionBtn.classList.remove("bg-amber-100", "border-amber-600");
      $attentionBtn.disabled = false;
      break;
    case "assessing":
    case "selecting":
      disableHumanInput();
      $attentionBtn.classList.remove("hidden");
      break;
    case "rolling-back":
      disableHumanInput();
      $attentionBtn.classList.add("hidden");
      break;
  }
}

/** Enables the Director's textarea and submit button. */
function enableHumanInput() {
  $humanInput.disabled = false;
  $humanSubmit.disabled = false;
  $humanInput.classList.remove("bg-stone-100");
  $humanInput.focus();
}

/** Disables the Director's textarea and submit button. */
function disableHumanInput() {
  $humanInput.disabled = true;
  $humanSubmit.disabled = true;
  $humanInput.classList.add("bg-stone-100");
}

// ---- Page Navigation --------------------------------------------------------

/** Switches to the landing page (meeting list + new meeting form). */
function showLanding() {
  pageState = "landing";
  $landingPage.classList.remove("hidden");
  $deliberationPage.classList.add("hidden");
  $backToLanding.classList.add("hidden");
  $attentionBtn.classList.add("hidden");
  readOnly = false;
  editingCycle = null;
  loadMeetingList().catch(console.error);
}

/** Switches to the deliberation page (conversation feed + agent panel). */
function showDeliberation() {
  pageState = readOnly ? "view-only" : "deliberation";
  $landingPage.classList.add("hidden");
  $deliberationPage.classList.remove("hidden");
  $backToLanding.classList.remove("hidden");

  if (readOnly) {
    $viewOnlyBanner.classList.remove("hidden");
    querySelectorMust(".human-input").classList.add("hidden");
    $attentionBtn.classList.add("hidden");
  } else {
    $viewOnlyBanner.classList.add("hidden");
    querySelectorMust(".human-input").classList.remove("hidden");
    $attentionBtn.classList.remove("hidden");
  }
}

// ---- Render Meeting State from Sync -----------------------------------------

/** Rebuilds the full deliberation UI from `currentMeeting` (called after sync). */
function renderMeetingState() {
  if (!currentMeeting) return;

  // Initialize sub-views
  const messagesContainer = document.getElementById("conversation-messages");
  conversationView = new ConversationView(messagesContainer, {
    speakerDisplayName,
    speakerColor,
    readOnly,
    onRollback: readOnly ? null : handleRollbackRequest,
  });

  // Initialize agent panel with meeting participants
  const tabsContainer = document.getElementById("agent-tabs");
  const contentContainer = document.getElementById("agent-tab-content");
  const meetingAgents = agentDefinitions.filter((a) =>
    currentMeeting.participants.includes(a.id)
  );
  agentPanel = new AgentPanel(tabsContainer, contentContainer, meetingAgents, speakerColor);

  // Render opening prompt as first message
  conversationView.addSpeech(
    "human",
    currentMeeting.openingPrompt,
    currentMeeting.startedAt
  );

  // Render all existing cycles
  for (const cycle of currentMeeting.cycles) {
    conversationView.addSpeech(
      cycle.speech.speaker,
      cycle.speech.content,
      cycle.speech.timestamp
    );
    // Show assessments in agent panel
    for (const [agentId, assessment] of /** @type {[string, PrivateAssessment][]} */ (Object.entries(cycle.assessments))) {
      agentPanel.setAssessment(agentId, assessment);
    }
  }

  // Handle edit-after-rollback
  if (editingCycle !== null) {
    conversationView.enableEditing(editingCycle, currentMeeting);
  }

  // Update vibe from last cycle
  if (currentMeeting.cycles.length > 0) {
    const lastCycle = currentMeeting.cycles[currentMeeting.cycles.length - 1];
    $vibeText.textContent = lastCycle.managerDecision.vibe;
  }

  // Show cost estimate if available
  updateCostDisplay();

  updatePhaseUI(currentPhase);
}

/** Updates the cost estimate shown in the vibe bar. */
function updateCostDisplay() {
  if (currentMeeting?.totalCostEstimate != null && currentMeeting.totalCostEstimate > 0) {
    $vibeCost.textContent = `$${currentMeeting.totalCostEstimate.toFixed(2)}`;
    $vibeCost.classList.remove("hidden");
  } else {
    $vibeCost.classList.add("hidden");
  }
}

// ---- Landing Page: Agents & Meetings ----------------------------------------

/** Fetches agent definitions from the server and renders participant cards. */
async function loadAgents() {
  try {
    const res = await fetch("/api/agents");
    agentDefinitions = await res.json();
    renderParticipantCards();
  } catch (err) {
    console.error("Failed to load agents:", err);
    $participantCards.innerHTML =
      '<p class="text-red-600 text-sm">שגיאה בטעינת הסוכנים</p>';
  }
}

/** Renders toggle cards for each available agent (all selected by default). */
function renderParticipantCards() {
  $participantCards.innerHTML = "";

  for (const agent of agentDefinitions) {
    const card = document.createElement("div");
    card.className =
      "participant-card selected cursor-pointer border-2 border-amber-400 bg-amber-50 rounded-lg p-3 min-w-[120px] text-center transition-colors";
    card.dataset.agentId = agent.id;

    card.innerHTML = `
      <input type="checkbox" class="sr-only" name="participant" value="${agent.id}" checked />
      <div class="font-bold text-base">${agent.hebrewName}</div>
      <div class="text-xs text-stone-500">${agent.englishName}</div>
      <div class="text-xs text-stone-400 mt-1">${agent.roleTitle}</div>
    `;

    const checkbox = querySelectorMust("input", card);

    function updateCardStyle() {
      if (checkbox.checked) {
        card.classList.add("selected", "border-amber-400", "bg-amber-50");
        card.classList.remove("border-stone-200", "bg-white");
      } else {
        card.classList.remove("selected", "border-amber-400", "bg-amber-50");
        card.classList.add("border-stone-200", "bg-white");
      }
      $noParticipantsError.classList.add("hidden");
    }

    card.addEventListener("click", (e) => {
      // Don't double-toggle if the checkbox itself was clicked
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      updateCardStyle();
    });

    $participantCards.appendChild(card);
  }
}

/** Fetches the meeting list from the server and renders it. */
async function loadMeetingList() {
  try {
    const res = await fetch("/api/meetings");
    const meetings = await res.json();
    renderMeetingList(meetings);
  } catch (err) {
    console.error("Failed to load meetings:", err);
    $meetingList.innerHTML =
      '<p class="text-red-600 text-sm">שגיאה בטעינת הפגישות</p>';
  }
}

/**
 * Renders meeting cards in the landing page list.
 * The most recent meeting gets a prominent "resume" button.
 * @param {MeetingSummary[]} meetings - Sorted by most recent first
 */
function renderMeetingList(meetings) {
  if (!meetings || meetings.length === 0) {
    $meetingList.innerHTML =
      '<p class="text-stone-400 text-sm">אין פגישות קודמות</p>';
    return;
  }

  $meetingList.innerHTML = "";

  meetings.forEach((meeting, index) => {
    const card = document.createElement("div");
    card.className = `border border-stone-200 rounded-lg p-4 ${index === 0 ? "border-amber-300 bg-amber-50/30" : ""}`;

    const title = meeting.title || meeting.meetingId;
    const date = meeting.lastActivity
      ? new Date(meeting.lastActivity).toLocaleDateString("he-IL")
      : "";
    const cycles = meeting.cycleCount != null ? `${meeting.cycleCount} מחזורים` : "";
    const participants = meeting.participants
      ? meeting.participants
          .map((id) => {
            const a = agentDefinitions.find((d) => d.id === id);
            return a ? a.hebrewName : id;
          })
          .join("  ")
      : "";

    card.innerHTML = `
      <div class="font-semibold mb-1">${title}</div>
      <div class="text-xs text-stone-500 mb-2">${[date, cycles].filter(Boolean).join("  ·  ")}</div>
      ${participants ? `<div class="text-xs text-stone-400 mb-3">${participants}</div>` : ""}
      <div class="flex gap-2">
        ${index === 0 ? `<button class="resume-btn text-sm border border-amber-500 text-amber-700 rounded px-3 py-1 hover:bg-amber-50 transition-colors" data-meeting-id="${meeting.meetingId}">המשך דיון</button>` : ""}
        <button class="view-btn text-sm border border-stone-300 text-stone-600 rounded px-3 py-1 hover:bg-stone-50 transition-colors" data-meeting-id="${meeting.meetingId}">צפייה בלבד</button>
      </div>
    `;

    // Event handlers
    const resumeBtn = card.querySelector(".resume-btn");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        sendWs({ type: "resume-meeting", meetingId: meeting.meetingId });
      });
    }

    const viewBtn = querySelectorMust(".view-btn", card);
    viewBtn.addEventListener("click", () => {
      sendWs({ type: "view-meeting", meetingId: meeting.meetingId });
    });

    $meetingList.appendChild(card);
  });
}

// ---- Form Submission --------------------------------------------------------

$newMeetingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("meeting-title").value.trim();
  const openingPrompt = document.getElementById("opening-prompt").value.trim();
  const selectedParticipants = Array.from(
    document.querySelectorAll('input[name="participant"]:checked')
  ).map((cb) => cb.value);

  if (selectedParticipants.length === 0) {
    $noParticipantsError.classList.remove("hidden");
    return;
  }

  sendWs({
    type: "start-meeting",
    title,
    openingPrompt,
    participants: selectedParticipants,
  });
});

// ---- Human Input ------------------------------------------------------------

/** Sends the Director's text (or `/end` command) over WebSocket and clears the field. */
function submitHumanInput() {
  const content = $humanInput.value.trim();
  if (!content) return;

  if (content === "/end") {
    sendWs({ type: "command", command: "/end" });
    $humanInput.value = "";
    disableHumanInput();
    return;
  }

  sendWs({ type: "human-speech", content });
  $humanInput.value = "";
  disableHumanInput();

  // Reset vibe bar
  const vibeBar = querySelectorMust(".vibe-bar");
  vibeBar.classList.remove("bg-blue-50", "border-blue-200");
  vibeBar.classList.add("bg-stone-50");
}

$humanSubmit.addEventListener("click", submitHumanInput);

$humanInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submitHumanInput();
  }
});

// ---- Attention Button -------------------------------------------------------

$attentionBtn.addEventListener("click", () => {
  sendWs({ type: "attention" });
});

// ---- Rollback ---------------------------------------------------------------

/** @type {number | null} Cycle number awaiting confirmation in the rollback modal. */
let pendingRollbackCycle = null;

/**
 * Opens the rollback confirmation modal and fades messages after the target.
 * @param {number} cycleNumber    - Target cycle to roll back to
 * @param {string} messagePreview - Truncated text of the target human message
 * @param {number} totalCycles    - Total number of cycles in the meeting
 */
function handleRollbackRequest(cycleNumber, messagePreview, totalCycles) {
  pendingRollbackCycle = cycleNumber;
  $rollbackPreview.textContent = messagePreview;
  const discardCount = totalCycles - cycleNumber;
  $rollbackWarning.textContent = `\u26A0 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D6\u05D5 \u05EA\u05DE\u05D7\u05E7 ${discardCount} \u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05DD (\u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05DD ${cycleNumber + 1}-${totalCycles})`;

  // Fade messages after target
  conversationView?.fadeAfter(cycleNumber);

  $rollbackModal.classList.remove("hidden");
  $rollbackCancel.focus();
}

$rollbackCancel.addEventListener("click", () => {
  $rollbackModal.classList.add("hidden");
  conversationView?.unfadeAll();
  pendingRollbackCycle = null;
});

$rollbackConfirm.addEventListener("click", () => {
  if (pendingRollbackCycle !== null) {
    sendWs({ type: "rollback", targetCycleNumber: pendingRollbackCycle });
  }
  $rollbackModal.classList.add("hidden");
  pendingRollbackCycle = null;
});

// ---- Back to Landing --------------------------------------------------------

$backToLanding.addEventListener("click", () => {
  // Only allow going back if read-only or no active meeting
  if (readOnly || !currentMeeting) {
    currentMeeting = null;
    readOnly = false;
    conversationView = null;
    agentPanel = null;
    showLanding();
  } else {
    // Active meeting — confirm
    if (confirm("יש פגישה פעילה. בחר /end כדי לסיים אותה תחילה.")) {
      // Do nothing — they need to /end first
    }
  }
});

// ---- Panel Toggle -----------------------------------------------------------

document.getElementById("panel-toggle").addEventListener("click", () => {
  const panel = querySelectorMust(".agent-panel");
  panel.classList.toggle("collapsed");
  const btn = document.getElementById("panel-toggle");
  btn.textContent = panel.classList.contains("collapsed") ? "\u25C0" : "\u25B6";
});

// ---- Post-Rollback Edit Submission ------------------------------------------

document.addEventListener("human-edit-submit", (e) => {
  sendWs({ type: "human-speech", content: e.detail.content });
});

// ---- Initialize -------------------------------------------------------------

/** Loads agents and meetings, then opens the WebSocket connection. */
async function init() {
  await loadAgents();
  await loadMeetingList();
  connectWs();
}

init().catch(console.error);

// Export for testing
export { speakerDisplayName };
