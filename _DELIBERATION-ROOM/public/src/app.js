/**
 * @file Frontend entry point.
 *
 * Owns the WebSocket connection, dispatches server messages,
 * manages page routing (landing / deliberation / view-only),
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
/** @type {boolean} Whether the deliberation loop is paused. */
let isPaused = true;
/** @type {boolean} Whether the pause is actively blocking a new cycle. */
let pauseBlocking = false;
/** @type {ConversationView | null} */
let conversationView = null;

// ---- URL Routing ------------------------------------------------------------

/**
 * Extract the meeting ID from the current URL, or null if on landing.
 * Matches: /meeting/<id>
 * @returns {string | null}
 */
function getMeetingIdFromUrl() {
  const match = location.pathname.match(/^\/meeting\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Navigate to a URL and update the page state.
 * @param {string} path - The URL path to navigate to
 * @param {boolean} [replace=false] - Use replaceState instead of pushState
 */
function navigateTo(path, replace = false) {
  if (replace) {
    history.replaceState(null, "", path);
  } else {
    history.pushState(null, "", path);
  }
  routeFromUrl();
}

/**
 * Read the current URL and set up the correct page state.
 * If on /meeting/<id>, sends join-meeting over WebSocket.
 * If on /, shows the landing page.
 */
function routeFromUrl() {
  const meetingId = getMeetingIdFromUrl();
  if (meetingId) {
    // We're on /meeting/<id> — request meeting data from server
    if (ws && ws.readyState === WebSocket.OPEN) {
      sendWs({ type: "join-meeting", meetingId });
    }
    // If WS isn't ready, the open handler will send join-meeting.
  } else {
    // We're on / — show landing
    currentMeeting = null;
    readOnly = false;
    conversationView = null;
    showLanding();
  }
}

window.addEventListener("popstate", () => {
  routeFromUrl();
});

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
const $pauseBtn = document.getElementById("pause-btn");
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
  if (speakerId === "human") return "\u05D4\u05DE\u05E0\u05D7\u05D4";
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

    // If we're on a meeting URL, request its state
    const meetingId = getMeetingIdFromUrl();
    if (meetingId) {
      sendWs({ type: "join-meeting", meetingId });
    }
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
 * @param {Omit<ClientMessage, 'messageId'>} msg
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
      // Update client-side cost from server-reported actual cost
      if (currentMeeting && msg.cycleCost != null) {
        currentMeeting.totalCostEstimate = (currentMeeting.totalCostEstimate || 0) + msg.cycleCost;
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
      // Assessments now visible via process labels; no separate panel
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
    case "meeting-ended":
      handleMeetingEnded();
      break;
    case "process-start":
      conversationView?.startProcess(msg.processId, msg.processKind, msg.agent, msg.cycleNumber);
      break;
    case "process-event":
      conversationView?.addProcessEvent(msg.processId, msg.eventKind, msg.content, msg.toolName, msg.toolInput);
      break;
    case "process-done":
      conversationView?.endProcess(msg.processId);
      break;
    case "pause-state":
      handlePauseState(msg.paused, msg.blocking);
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

  // Restore pause state from sync
  if (msg.paused != null) {
    handlePauseState(msg.paused, false);
  }

  if (currentMeeting) {
    // Ensure URL reflects the meeting we're viewing
    const expectedPath = `/meeting/${encodeURIComponent(currentMeeting.meetingId)}`;
    if (location.pathname !== expectedPath) {
      history.pushState(null, "", expectedPath);
    }
    showDeliberation();
    renderMeetingState();

    // New meeting with no cycles and no opening prompt: enable input for first prompt
    if (!currentMeeting.openingPrompt && currentMeeting.cycles.length === 0 && !readOnly) {
      enableHumanInput();
    }
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
  $vibeNext.textContent = msg.nextSpeaker ? `\u05D4\u05D1\u05D0: ${speakerDisplayName(msg.nextSpeaker)}` : "";
}

/** Activates the Director's input field and highlights the vibe bar. */
function handleYourTurn() {
  enableHumanInput();
  // Visual emphasis on vibe bar
  const vibeBar = querySelectorMust(".vibe-bar");
  vibeBar.classList.add("vibe-bar--human-turn");
}

/** Shows a server error as a system message in the conversation feed. */
function handleError(message) {
  // Show error in conversation as a system message
  conversationView?.addSystemMessage(message, "error");

  // If we're on a meeting URL but have no meeting loaded, the meeting doesn't exist
  if (getMeetingIdFromUrl() && !currentMeeting) {
    setTimeout(() => navigateTo("/", true), 2000);
  }
}

/** Transitions the attention button to its activated (amber) state. */
function handleAttentionAck() {
  $attentionBtn.textContent = "\u270B \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D1 \u2713";
  $attentionBtn.classList.add("btn-attention--acknowledged");
  $attentionBtn.disabled = true;
  // Pulse animation
  $attentionBtn.classList.add("animate-pulse");
  setTimeout(() => $attentionBtn.classList.remove("animate-pulse"), 600);
}

/** Handles meeting-ended: resets state and navigates to landing. */
function handleMeetingEnded() {
  currentMeeting = null;
  readOnly = false;
  editingCycle = null;
  conversationView = null;
  navigateTo("/");
}

/**
 * Displays rollback progress steps as system messages.
 * @param {WsRollbackProgress} msg
 */
function handleRollbackProgress(msg) {
  conversationView?.addSystemMessage(`\u05D7\u05D6\u05E8\u05D4: ${msg.step}${msg.detail ? " \u2014 " + msg.detail : ""}`, "info");
}

// ---- Phase UI Updates -------------------------------------------------------

/**
 * Applies visual changes to the vibe bar, input field, and agent panel
 * based on the current cycle phase.
 * @param {Phase}  phase           - Current phase identifier
 * @param {SpeakerId} [_activeSpeaker] - Agent ID of the current speaker (if speaking phase)
 */
function updatePhaseUI(phase, _activeSpeaker) {
  $vibePhase.textContent = phaseDisplayName(phase);

  const vibeBar = querySelectorMust(".vibe-bar");

  // Reset vibe bar styling
  vibeBar.classList.remove("vibe-bar--human-turn");

  switch (phase) {
    case "human-turn":
      enableHumanInput();
      vibeBar.classList.add("vibe-bar--human-turn");
      $attentionBtn.classList.add("hidden");
      break;
    case "speaking":
      disableHumanInput();
      $attentionBtn.classList.remove("hidden");
      break;
    case "idle":
      disableHumanInput();
      // Reset attention button
      $attentionBtn.textContent = "\u270B \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D1";
      $attentionBtn.classList.remove("btn-attention--acknowledged");
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
  $humanInput.focus();
}

/** Disables the Director's textarea and submit button. */
function disableHumanInput() {
  $humanInput.disabled = true;
  $humanSubmit.disabled = true;
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
    $pauseBtn.classList.add("hidden");
  } else {
    $viewOnlyBanner.classList.add("hidden");
    querySelectorMust(".human-input").classList.remove("hidden");
    $attentionBtn.classList.remove("hidden");
    $pauseBtn.classList.remove("hidden");
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
    agentDisplayName: (id) => {
      if (id === "manager") return "\u05DE\u05E0\u05D4\u05DC";
      return speakerDisplayName(id);
    },
  });

  // Render opening prompt as first message (if set — new meetings start without one)
  if (currentMeeting.openingPrompt) {
    conversationView.addSpeech(
      "human",
      currentMeeting.openingPrompt,
      currentMeeting.startedAt
    );
  }

  // Render all existing cycles with their process records
  for (const cycle of currentMeeting.cycles) {
    // Render persisted process labels (assessments, manager, speech)
    if (cycle.processes && cycle.processes.length > 0) {
      conversationView.renderPersistedProcesses(cycle.processes, cycle.cycleNumber);
    }
    // Render the public speech
    conversationView.addSpeech(
      cycle.speech.speaker,
      cycle.speech.content,
      cycle.speech.timestamp
    );
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
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    agentDefinitions = await res.json();
    renderParticipantCards();
  } catch (err) {
    console.error("Failed to load agents:", err);
    $participantCards.innerHTML =
      '<p class="form-error-inline">\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05E1\u05D5\u05DB\u05E0\u05D9\u05DD</p>';
  }
}

/** Renders toggle cards for each available agent (all selected by default). */
function renderParticipantCards() {
  $participantCards.innerHTML = "";

  for (const agent of agentDefinitions) {
    const card = document.createElement("div");
    card.className = "participant-card selected";
    card.dataset.agentId = agent.id;

    card.innerHTML = `
      <input type="checkbox" class="sr-only" name="participant" value="${agent.id}" checked />
      <div class="participant-card-name">${agent.hebrewName}</div>
      <div class="participant-card-english">${agent.englishName}</div>
      <div class="participant-card-role">${agent.roleTitle}</div>
    `;

    const checkbox = querySelectorMust("input", card);

    function updateCardStyle() {
      if (checkbox.checked) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
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
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    /** @type {MeetingSummary[]} */ const meetings = await res.json();
    renderMeetingList(meetings);
  } catch (err) {
    console.error("Failed to load meetings:", err);
    $meetingList.innerHTML =
      '<p class="form-error-inline">\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05D8\u05E2\u05D9\u05E0\u05EA \u05D4\u05E4\u05D2\u05D9\u05E9\u05D5\u05EA</p>';
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
      '<p class="loading-text">\u05D0\u05D9\u05DF \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05E7\u05D5\u05D3\u05DE\u05D5\u05EA</p>';
    return;
  }

  $meetingList.innerHTML = "";

  meetings.forEach((meeting, index) => {
    const card = document.createElement("div");
    card.className = index === 0 ? "meeting-card meeting-card--recent" : "meeting-card";

    const title = meeting.title || meeting.meetingId;
    const date = meeting.lastActivity
      ? new Date(meeting.lastActivity).toLocaleDateString("he-IL")
      : "";
    const cycles = meeting.cycleCount != null ? `${meeting.cycleCount} \u05DE\u05D7\u05D6\u05D5\u05E8\u05D9\u05DD` : "";
    const participants = meeting.participants
      ? meeting.participants
          .map((id) => {
            const a = agentDefinitions.find((d) => d.id === id);
            return a ? a.hebrewName : id;
          })
          .join("  ")
      : "";

    // Count how many meetings share this title (for showing bulk-delete button)
    const sameTitleCount = meetings.filter(m => (m.title || m.meetingId) === title).length;

    card.innerHTML = `
      <div class="meeting-card-title">${title}</div>
      <div class="meeting-card-meta">${[date, cycles].filter(Boolean).join("  \u00B7  ")}</div>
      ${participants ? `<div class="meeting-card-participants">${participants}</div>` : ""}
      <div class="meeting-card-actions">
        ${index === 0 ? `<button class="btn-meeting-resume" data-meeting-id="${meeting.meetingId}">\u05D4\u05DE\u05E9\u05DA \u05D3\u05D9\u05D5\u05DF</button>` : ""}
        <button class="btn-meeting-view" data-meeting-id="${meeting.meetingId}">\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05DC\u05D1\u05D3</button>
        ${sameTitleCount > 1 ? `<button class="btn-meeting-delete" data-title="${title.replace(/"/g, '&quot;')}" data-count="${sameTitleCount}">\u05DE\u05D7\u05E7 ${sameTitleCount} &laquo;${title}&raquo;</button>` : ""}
      </div>
    `;

    // Event handlers
    const resumeBtn = card.querySelector(".btn-meeting-resume");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        sendWs({ type: "resume-meeting", meetingId: meeting.meetingId });
      });
    }

    const viewBtn = querySelectorMust(".btn-meeting-view", card);
    viewBtn.addEventListener("click", () => {
      navigateTo(`/meeting/${encodeURIComponent(meeting.meetingId)}`);
    });

    const deleteBtn = card.querySelector(".btn-meeting-delete");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", async () => {
        const meetingTitle = deleteBtn.dataset.title;

        deleteBtn.disabled = true;
        deleteBtn.textContent = "\u05DE\u05D5\u05D7\u05E7...";
        try {
          const res = await fetch(`/api/meetings?title=${encodeURIComponent(meetingTitle)}`, { method: "DELETE" });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          await loadMeetingList();
        } catch (err) {
          console.error("Failed to delete meetings:", err);
          deleteBtn.textContent = "\u05E9\u05D2\u05D9\u05D0\u05D4";
        }
      });
    }

    $meetingList.appendChild(card);
  });
}

// ---- Form Submission --------------------------------------------------------

$newMeetingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("meeting-title").value.trim();
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
  vibeBar.classList.remove("vibe-bar--human-turn");
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

// ---- Play/Pause Button ------------------------------------------------------

$pauseBtn.addEventListener("click", () => {
  sendWs({ type: "toggle-pause" });
});

/**
 * Updates the play/pause button state.
 * @param {boolean} newPaused   - Whether the loop is paused
 * @param {boolean} newBlocking - Whether the pause is actively preventing a new cycle
 */
function handlePauseState(newPaused, newBlocking) {
  isPaused = newPaused;
  pauseBlocking = newBlocking;
  updatePauseButton();
}

/** Renders the pause button based on current state. */
function updatePauseButton() {
  if (isPaused) {
    $pauseBtn.innerHTML = "&#x25B6; \u05D4\u05DE\u05E9\u05DA"; // Play
    if (pauseBlocking) {
      $pauseBtn.classList.add("btn-vibe-control--blocking");
    } else {
      $pauseBtn.classList.remove("btn-vibe-control--blocking");
    }
  } else {
    $pauseBtn.innerHTML = "&#x23F8; \u05D4\u05E9\u05D4\u05D4"; // Pause
    $pauseBtn.classList.remove("btn-vibe-control--blocking");
  }
}

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
    navigateTo("/");
  } else {
    // Active meeting — confirm
    if (confirm("\u05D9\u05E9 \u05E4\u05D2\u05D9\u05E9\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4. \u05D1\u05D7\u05E8 /end \u05DB\u05D3\u05D9 \u05DC\u05E1\u05D9\u05D9\u05DD \u05D0\u05D5\u05EA\u05D4 \u05EA\u05D7\u05D9\u05DC\u05D4.")) {
      // Do nothing — they need to /end first
    }
  }
});

// ---- Post-Rollback Edit Submission ------------------------------------------

document.addEventListener("human-edit-submit", (e) => {
  sendWs({ type: "human-speech", content: e.detail.content });
});

// ---- Initialize -------------------------------------------------------------

/** Loads agents, opens the WebSocket connection, and routes based on URL. */
async function init() {
  await loadAgents();
  connectWs();
  // Route based on current URL — if on /, shows landing (which loads meeting list);
  // if on /meeting/<id>, the WS open handler will send join-meeting.
  routeFromUrl();
}

init().catch(console.error);

// Export for testing
export { speakerDisplayName };
