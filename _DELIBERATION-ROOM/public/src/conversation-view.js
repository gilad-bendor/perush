/**
 * @file Conversation feed rendering.
 *
 * Manages the scrolling message list: adding completed speeches,
 * appending streaming chunks, auto-scrolling, rollback icons,
 * edit-after-rollback, and message fading for rollback preview.
 */

import {querySelectorMust, setDirectionByContent} from "./utils.js";
import { ProcessLabel, AssessmentGroup } from "./process-label.js";

/** @typedef {import('../../src/types.ts').Meeting} Meeting */
/** @typedef {import('../../src/types.ts').SpeakerId} SpeakerId */

/**
 * @typedef {Object} MessageEntry
 * @property {HTMLElement} el         - The DOM element for this message
 * @property {SpeakerId}   speaker    - Speaker ID ("human" | agent ID)
 * @property {number}      cycleNumber - Index in the messages array (0 = opening prompt)
 * @property {string}      content    - Accumulated text content
 */

export class ConversationView {
  /**
   * @param {HTMLElement} container - The `#conversation-messages` element
   * @param {Object}      options
   * @param {(id: SpeakerId) => string}  options.speakerDisplayName - Resolves speaker ID to Hebrew display name
   * @param {(id: SpeakerId) => import("./utils.js").SpeakerColorSet} options.speakerColor - Resolves speaker ID to color set
   * @param {boolean}                 [options.readOnly=false]   - Disables rollback icons when true
   * @param {((cycle: number, preview: string, total: number) => void) | null} [options.onRollback=null] - Rollback request callback
   */
  constructor(container, options) {
    this.container = container;
    this.speakerDisplayName = options.speakerDisplayName;
    this.speakerColor = options.speakerColor;
    this.readOnly = options.readOnly || false;
    this.onRollback = options.onRollback || null;

    /** @type {MessageEntry[]} */
    this.messages = [];
    /** @type {HTMLElement | null} Currently streaming message element */
    this.streamingMessage = null;
    /** @type {boolean} True if user has scrolled up from the bottom */
    this.userScrolled = false;

    /** @type {(id: import('../../src/types.ts').AgentId | "orchestrator") => string} Resolves agent ID to Hebrew display name */
    this.agentDisplayName = options.agentDisplayName || ((id) => id);

    /** @type {Map<string, ProcessLabel>} processId → ProcessLabel */
    this.processLabels = new Map();
    /** @type {Map<number, AssessmentGroup>} cycleNumber → AssessmentGroup */
    this.assessmentGroups = new Map();

    this.container.innerHTML = "";

    // Disable auto-scroll when the user scrolls up.
    // NOTE: This listener is never removed. Acceptable for a single-user desktop app
    // where ConversationView is rarely recreated within a session.
    const feed = this.container.closest(".conversation-feed");
    if (feed) {
      feed.addEventListener("scroll", () => {
        const atBottom =
          feed.scrollHeight - feed.scrollTop - feed.clientHeight < 50;
        this.userScrolled = !atBottom;
      });
    }
  }

  /**
   * Adds a completed speech to the feed.
   * @param {SpeakerId} speaker - Speaker ID
   * @param {string} content   - Full speech text
   * @param {string} timestamp - FormattedTime string (display only)
   */
  addSpeech(speaker, content, timestamp) {
    // Finalize any active streaming first
    if (this.streamingMessage) {
      this._finalizeStreaming();
    }

    // If the last message was a finalized streaming message from the same speaker,
    // update it in place instead of creating a duplicate.
    const last = this.messages[this.messages.length - 1];
    if (last && last.speaker === speaker && last.el.dataset.wasStreaming === "true") {
      const contentEl = querySelectorMust(".message-content", last.el);
      contentEl.textContent = content;
      last.content = content;
      this._scrollToBottom();
      return;
    }

    const cycleNumber = this.messages.length; // 0 = opening prompt
    const el = this._createMessageEl(speaker, content, cycleNumber);
    this.container.appendChild(el);
    this.messages.push({ el, speaker, cycleNumber, content });
    this._scrollToBottom();
  }

  /**
   * Appends a streaming text chunk. Creates a new streaming message if needed.
   * @param {SpeakerId} speaker - Speaker ID
   * @param {string} delta     - Text fragment to append
   */
  appendChunk(speaker, delta) {
    if (!this.streamingMessage || this.streamingMessage.dataset.speaker !== speaker) {
      // Start a new streaming message
      if (this.streamingMessage) {
        this._finalizeStreaming();
      }
      const cycleNumber = this.messages.length;
      const el = this._createMessageEl(speaker, "", cycleNumber);
      el.classList.add("streaming");
      el.dataset.wasStreaming = "true";
      this.container.appendChild(el);
      this.streamingMessage = el;
      this.messages.push({ el, speaker, cycleNumber, content: "" });
    }

    // Append delta to content
    const contentEl = querySelectorMust(".message-content", this.streamingMessage);
    contentEl.textContent += delta;
    // Update tracked content
    const entry = this.messages[this.messages.length - 1];
    if (entry) entry.content += delta;

    this._scrollToBottom();
  }

  /**
   * Marks a streaming speech as finalized (removes streaming indicator).
   * @param {SpeakerId} speaker - Speaker ID whose stream has ended
   */
  finalizeSpeech(speaker) {
    if (this.streamingMessage && this.streamingMessage.dataset.speaker === speaker) {
      this._finalizeStreaming();
    }
  }

  /**
   * Adds a non-conversation system message (error or informational).
   * @param {string} text
   * @param {"info" | "error"} [level="info"]
   */
  addSystemMessage(text, level = "info") {
    const el = document.createElement("div");
    const levelClass = level === "error" ? "system-message--error" : "system-message--info";
    el.className = `system-message ${levelClass}`;
    el.textContent = text;
    setDirectionByContent(el)
    this.container.appendChild(el);
    this._scrollToBottom();
  }

  /**
   * Dims all messages after a given cycle (rollback preview).
   * @param {number} cycleNumber - Messages with `cycleNumber > this` are faded
   */
  fadeAfter(cycleNumber) {
    for (const msg of this.messages) {
      if (msg.cycleNumber > cycleNumber) {
        msg.el.classList.add("faded");
        msg.el.style.opacity = "0.3";
      }
    }
  }

  /** Restores full opacity on all messages (cancels rollback preview). */
  unfadeAll() {
    for (const msg of this.messages) {
      msg.el.classList.remove("faded");
      msg.el.style.opacity = "";
    }
  }

  /**
   * Replaces a message's content with an editable textarea (post-rollback).
   * Dispatches a `"human-edit-submit"` CustomEvent on submit.
   * @param {number} cycleNumber - The cycle whose human message to make editable
   * @param {Meeting} meeting    - Current meeting state (used for opening prompt fallback)
   */
  enableEditing(cycleNumber, meeting) {
    const entry = this.messages.find((m) => m.cycleNumber === cycleNumber);
    if (!entry) return;

    const contentEl = querySelectorMust(".message-content", entry.el);

    entry.el.classList.add("editing");

    const originalContent = cycleNumber === 0
      ? meeting.openingPrompt
      : entry.content;

    contentEl.innerHTML = `
      <textarea class="edit-textarea" dir="auto">${originalContent}</textarea>
      <div class="edit-actions">
        <button class="edit-send-asis btn-edit-secondary">שלח כמו שהוא</button>
        <button class="edit-send btn-edit-primary">שלח</button>
      </div>
    `;

    const textarea = querySelectorMust(".edit-textarea", contentEl);
    textarea.focus();

    querySelectorMust(".edit-send-asis", contentEl).addEventListener("click", () => {
      this._submitEdit(entry, originalContent);
    });

    querySelectorMust(".edit-send", contentEl).addEventListener("click", () => {
      this._submitEdit(entry, textarea.value.trim() || originalContent);
    });
  }

  // ---- Process Labels --------------------------------------------------------

  /**
   * Start tracking a new process (live mode).
   * @param {string} processId
   * @param {import('../../src/types.ts').ProcessKind} processKind
   * @param {import('../../src/types.ts').AgentId | "orchestrator"} agent
   * @param {number} cycleNumber
   */
  startProcess(processId, processKind, agent, cycleNumber) {
    const displayName = this.agentDisplayName(agent);
    const label = new ProcessLabel(processId, processKind, agent, displayName);
    this.processLabels.set(processId, label);

    // All process kinds go into the same cycle group
    if (!this.assessmentGroups.has(cycleNumber)) {
      const group = new AssessmentGroup(cycleNumber);
      this.assessmentGroups.set(cycleNumber, group);
      this.container.appendChild(group.el);
    }
    this.assessmentGroups.get(cycleNumber).addLabel(label);
    this._scrollToBottom();
  }

  /**
   * Append an event to an existing process (live mode).
   * @param {string} processId
   * @param {import('../../src/types.ts').ProcessEventKind} eventKind
   * @param {string} content
   * @param {string} [toolName]
   * @param {string} [toolInput]
   */
  addProcessEvent(processId, eventKind, content, toolName, toolInput) {
    const label = this.processLabels.get(processId);
    if (label) {
      label.addEvent(eventKind, content, toolName, toolInput);
    }
  }

  /**
   * Mark a process as complete (live mode).
   * @param {string} processId
   */
  endProcess(processId) {
    const label = this.processLabels.get(processId);
    if (label) {
      label.finalize();
    }
  }

  /**
   * Render process records from a persisted cycle (sync/reconnect).
   * @param {import('../../src/types.ts').ProcessRecord[]} processes
   * @param {number} cycleNumber
   */
  renderPersistedProcesses(processes, cycleNumber) {
    if (!processes || processes.length === 0) return;

    const group = new AssessmentGroup(cycleNumber);
    for (const proc of processes) {
      const displayName = this.agentDisplayName(proc.agent);
      const label = new ProcessLabel(proc.processId, proc.processKind, proc.agent, displayName);
      label.loadEvents(proc.events);
      label.finalize();
      group.addLabel(label);
      this.processLabels.set(proc.processId, label);
    }
    this.container.appendChild(group.el);
  }

  // ---- Private ---------------------------------------------------------------

  /**
   * Finalizes the edit textarea: replaces it with static text and dispatches submission event.
   * @param {MessageEntry} entry
   * @param {string} content
   */
  _submitEdit(entry, content) {
    // Replace editing UI with the final content
    const contentEl = querySelectorMust(".message-content", entry.el);
    contentEl.textContent = content;
    entry.el.classList.remove("editing");
    entry.content = content;

    // Send via WebSocket (dispatch custom event for app.js to handle)
    const event = new CustomEvent("human-edit-submit", { detail: { content } });
    document.dispatchEvent(event);
  }

  /**
   * Builds the DOM element for a single conversation message.
   * Human messages include a hover-visible rollback button (unless read-only).
   * @param {SpeakerId} speaker
   * @param {string} content
   * @param {number} cycleNumber
   * @returns {HTMLElement}
   */
  _createMessageEl(speaker, content, cycleNumber) {
    const color = this.speakerColor(speaker);
    const el = document.createElement("div");
    el.className = `message message-${speaker} ${color.bg} ${color.border}`;
    el.dataset.speaker = speaker;
    el.dataset.cycleNumber = String(cycleNumber);
    setDirectionByContent(el);

    // Header: speaker name + rollback icon (for human messages)
    const header = document.createElement("div");
    header.className = "message-header";

    const label = document.createElement("span");
    label.className = `message-speaker ${color.label}`;
    label.textContent = this.speakerDisplayName(speaker);
    header.appendChild(label);

    // Rollback icon (only for human messages, not read-only)
    if (speaker === "human" && !this.readOnly && this.onRollback) {
      const rollbackBtn = document.createElement("button");
      rollbackBtn.className = "rollback-icon";
      rollbackBtn.textContent = "↩";
      rollbackBtn.title = "חזרה לנקודה זו";
      rollbackBtn.addEventListener("click", () => {
        const totalCycles = this.messages.length - 1; // -1 for opening prompt
        const preview = content.length > 100 ? content.slice(0, 100) + "..." : content;
        this.onRollback(cycleNumber, preview, totalCycles);
      });
      header.appendChild(rollbackBtn);
    }

    el.appendChild(header);

    // Content
    const contentEl = document.createElement("div");
    contentEl.className = `message-content ${color.text}`;
    setDirectionByContent(contentEl);
    contentEl.textContent = content;
    el.appendChild(contentEl);

    // Show rollback icon on hover
    el.addEventListener("mouseenter", () => {
      const icon = el.querySelector(".rollback-icon");
      if (icon) icon.classList.remove("opacity-0");
    });
    el.addEventListener("mouseleave", () => {
      const icon = el.querySelector(".rollback-icon");
      if (icon) icon.classList.add("opacity-0");
    });

    return el;
  }

  /** Removes the streaming CSS class from the active streaming message. */
  _finalizeStreaming() {
    if (this.streamingMessage) {
      this.streamingMessage.classList.remove("streaming");
      this.streamingMessage = null;
    }
  }

  /** Scrolls the conversation feed to the bottom (skipped if user has scrolled up). */
  _scrollToBottom() {
    if (this.userScrolled) return;
    const feed = this.container.closest(".conversation-feed");
    if (feed) {
      requestAnimationFrame(() => {
        feed.scrollTop = feed.scrollHeight;
      });
    }
  }
}
