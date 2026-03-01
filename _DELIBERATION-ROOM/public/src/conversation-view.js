/**
 * @file Conversation feed rendering.
 *
 * Manages the scrolling message list: adding completed speeches,
 * appending streaming chunks, auto-scrolling, rollback icons,
 * edit-after-rollback, and message fading for rollback preview.
 */

import { querySelectorMust } from "./utils.js";

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

    this.container.innerHTML = "";

    // Disable auto-scroll when the user scrolls up
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
    const colorClass = level === "error"
      ? "bg-red-50 border-red-200 text-red-700"
      : "bg-stone-100 border-stone-200 text-stone-600";
    el.className = `text-sm px-3 py-2 rounded border ${colorClass}`;
    el.textContent = text;
    el.style.unicodeBidi = "plaintext";
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
      <textarea class="edit-textarea w-full border border-amber-300 rounded px-3 py-2 text-base resize-y min-h-[4rem]" dir="auto">${originalContent}</textarea>
      <div class="flex gap-2 mt-2">
        <button class="edit-send-asis text-sm border border-stone-300 rounded px-3 py-1 hover:bg-stone-50 transition-colors">שלח כמו שהוא</button>
        <button class="edit-send text-sm bg-amber-600 text-white rounded px-3 py-1 hover:bg-amber-700 transition-colors">שלח</button>
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
    el.className = `message p-3 rounded border-s-4 ${color.bg} ${color.border}`;
    el.dataset.speaker = speaker;
    el.dataset.cycleNumber = String(cycleNumber);
    el.style.unicodeBidi = "plaintext";

    // Header: speaker name + rollback icon (for human messages)
    const header = document.createElement("div");
    header.className = "flex items-center gap-2 mb-1";

    const label = document.createElement("span");
    label.className = `font-semibold text-sm ${color.label}`;
    label.textContent = this.speakerDisplayName(speaker);
    header.appendChild(label);

    // Rollback icon (only for human messages, not read-only)
    if (speaker === "human" && !this.readOnly && this.onRollback) {
      const rollbackBtn = document.createElement("button");
      rollbackBtn.className =
        "rollback-icon opacity-0 hover:opacity-100 focus:opacity-100 text-stone-400 hover:text-amber-600 transition-opacity text-sm ms-auto";
      rollbackBtn.textContent = "\u21A9";
      rollbackBtn.title = "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05E0\u05E7\u05D5\u05D3\u05D4 \u05D6\u05D5";
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
    contentEl.className = `message-content text-base ${color.text} whitespace-pre-wrap`;
    contentEl.style.unicodeBidi = "plaintext";
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
