/**
 * @file Expandable process label for the timeline.
 *
 * Each SDK interaction (assessment, orchestrator selection, agent speech) is
 * rendered as a small colored pill that expands on click to show the full
 * prompt, thinking, text output, tool calls, and tool results.
 */

import { speakerColor, setDirectionByContent } from "./utils.js";

/** @typedef {import('../../src/types.ts').AgentId} AgentId */
/** @typedef {import('../../src/types.ts').ProcessEventKind} ProcessEventKind */
/** @typedef {import('../../src/types.ts').ProcessKind} ProcessKind */

/**
 * @typedef {Object} ProcessEventData
 * @property {ProcessEventKind} eventKind
 * @property {string} content
 * @property {string} [toolName]
 * @property {string} [toolInput]
 */

/**
 * A single expandable process label in the conversation timeline.
 */
export class ProcessLabel {
  /**
   * @param {string} processId
   * @param {ProcessKind} processKind
   * @param {AgentId | "orchestrator"} agent
   * @param {string} displayName - Hebrew name for the label
   */
  constructor(processId, processKind, agent, displayName) {
    this.processId = processId;
    this.processKind = processKind;
    this.agent = agent;
    this.displayName = displayName;
    this.expanded = false;

    /** @type {ProcessEventData[]} */
    this.events = [];

    this.el = this._buildElement();
  }

  /**
   * Append a process event and update the UI.
   * @param {ProcessEventKind} eventKind
   * @param {string} content
   * @param {string} [toolName]
   * @param {string} [toolInput]
   */
  addEvent(eventKind, content, toolName, toolInput) {
    // Thinking: accumulate streaming chunks into a single div.
    // During streaming, chunks arrive as small deltas followed by one final
    // complete thinking event. We render a single div that grows, and only
    // push to this.events when the final complete event arrives.
    if (eventKind === "thinking") {
      if (this._activeThinkingEvent) {
        // Subsequent thinking event — accumulate.
        // The server sends N small delta chunks, then one final complete event
        // whose length exceeds the accumulated deltas. Detect the final event
        // by checking if the new content is longer than what we've accumulated
        // (a single delta is always shorter than the full accumulation after 2+ chunks).
        const isFinal = content.length > this._activeThinkingContent.length;
        if (isFinal) {
          // Final complete thinking — replace accumulated text
          this._activeThinkingContent = content;
        } else {
          // Streaming delta — append
          this._activeThinkingContent += content;
        }
        this._activeThinkingEvent.content = this._activeThinkingContent;
        if (this._activeThinkingEl) {
          const span = this._activeThinkingEl.querySelector(".thinking-text");
          if (span) span.textContent = this._activeThinkingContent;
        }
        return;
      }
      // First thinking event — persist immediately to maintain order
      const thinkingEvent = { eventKind, content, toolName, toolInput };
      this.events.push(thinkingEvent);
      this._activeThinkingEvent = thinkingEvent;
      this._activeThinkingContent = content;
      this._updateBadge();
      if (this.expanded) {
        this._appendEventEl(thinkingEvent);
        // _appendEventEl sets this._activeThinkingEl
      }
      return;
    }

    this.events.push({ eventKind, content, toolName, toolInput });
    if (this.expanded) {
      this._appendEventEl(this.events[this.events.length - 1]);
    }
    this._updateBadge();
  }

  /** Mark the process as done (remove spinner). */
  finalize() {
    const spinner = this.el.querySelector(".process-spinner");
    if (spinner) spinner.remove();
    this.el.querySelector(".process-pill")?.classList.remove("animate-pulse");
  }

  /**
   * Load events from persisted data (for sync/reconnect).
   * @param {ProcessEventData[]} events
   */
  loadEvents(events) {
    this.events = events;
    this._updateBadge();
  }

  // ---- Private ---------------------------------------------------------------

  _buildElement() {
    const color = speakerColor(this.agent);
    const el = document.createElement("div");
    el.className = "process-label";
    el.dataset.processId = this.processId;

    // Pill (collapsed view)
    const pill = document.createElement("button");
    pill.className = `process-pill ${color.border} ${color.label} animate-pulse`;
    pill.style.borderWidth = "1.5px";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = this.displayName;
    pill.appendChild(nameSpan);

    // Event count badge
    const badge = document.createElement("span");
    badge.className = "process-badge";
    pill.appendChild(badge);

    // Spinner (while in progress)
    const spinner = document.createElement("span");
    spinner.className = "process-spinner";
    spinner.textContent = "⏳";
    pill.appendChild(spinner);

    pill.addEventListener("click", () => this._toggle());
    el.appendChild(pill);

    // Expansion area (hidden by default)
    const expansion = document.createElement("div");
    expansion.className = "process-expansion hidden";
    expansion.style.borderColor = color.dot;
    expansion.style.backgroundColor = "rgba(0,0,0,0.02)";
    el.appendChild(expansion);

    return el;
  }

  _toggle() {
    this.expanded = !this.expanded;
    const expansion = this.el.querySelector(".process-expansion");
    if (!expansion) return;

    if (this.expanded) {
      expansion.classList.remove("hidden");
      expansion.innerHTML = "";
      for (const evt of this.events) {
        this._appendEventEl(evt);
      }
    } else {
      expansion.classList.add("hidden");
      this._activeThinkingEl = null; // DOM is gone; will recreate on next expand
      // Note: _activeThinkingEvent stays set — accumulation continues without DOM
    }
  }

  /**
   * @param {ProcessEventData} evt
   */
  _appendEventEl(evt) {
    const expansion = this.el.querySelector(".process-expansion");
    if (!expansion) return;

    const div = document.createElement("div");

    switch (evt.eventKind) {
      case "system-prompt":
        div.className = "process-event-system-prompt";
        div.innerHTML = `<span class="process-event-label">⚙ פרומפט-מערכת:</span>`;
        const sysPromptText = document.createElement("pre");
        sysPromptText.className = "process-event-pre";
        sysPromptText.textContent = evt.content;
        setDirectionByContent(sysPromptText);
        div.appendChild(sysPromptText);
        break;
      case "prompt":
        div.className = "process-event-prompt";
        div.innerHTML = `<span class="process-event-label">✍ פרומפט:</span>`;
        const promptText = document.createElement("pre");
        promptText.className = "process-event-pre";
        promptText.textContent = evt.content;
        setDirectionByContent(promptText);
        div.appendChild(promptText);
        break;
      case "thinking":
        div.className = "process-event-thinking";
        div.innerHTML = `<span class="process-event-thinking-icon">💭</span> `;
        const thinkText = document.createElement("span");
        thinkText.className = "thinking-text";
        thinkText.textContent = evt.content;
        setDirectionByContent(thinkText);
        div.appendChild(thinkText);
        // Track as the active thinking element for streaming accumulation
        this._activeThinkingEl = div;
        this._activeThinkingContent = evt.content;
        break;
      case "text":
        div.className = "process-event-text";
        div.textContent = evt.content;
        setDirectionByContent(div);
        break;
      case "tool-call":
        div.className = "process-event-tool-call";
        const toolLabel = document.createElement("span");
        toolLabel.className = "process-event-label";
        toolLabel.textContent = `🔧 ${evt.toolName || "tool"}:`;
        div.appendChild(toolLabel);
        const inputPre = document.createElement("pre");
        inputPre.className = "process-event-code";
        inputPre.textContent = evt.toolInput || evt.content;
        setDirectionByContent(inputPre);
        div.appendChild(inputPre);
        break;
      case "tool-result":
        div.className = "process-event-tool-result";
        const resultLabel = document.createElement("span");
        resultLabel.className = "process-event-label";
        resultLabel.textContent = `✅ ${evt.toolName || "result"}:`;
        div.appendChild(resultLabel);
        const resultPre = document.createElement("pre");
        resultPre.className = "process-event-code";
        resultPre.textContent = evt.content;
        setDirectionByContent(resultPre);
        div.appendChild(resultPre);
        break;
    }

    setDirectionByContent(div);

    expansion.appendChild(div);
    // Auto-scroll expansion to bottom
    expansion.scrollTop = expansion.scrollHeight;
  }

  _updateBadge() {
    const badge = this.el.querySelector(".process-badge");
    if (!badge) return;
    if (this.events.length > 0) {
      badge.textContent = `(${this.events.length})`;
      badge.classList.remove("hidden");
    }
  }
}

/**
 * A bordered group that contains multiple ProcessLabels for the assessment phase.
 */
export class AssessmentGroup {
  /**
   * @param {number} cycleNumber
   */
  constructor(cycleNumber) {
    this.cycleNumber = cycleNumber;
    /** @type {Map<string, ProcessLabel>} processId → label */
    this.labels = new Map();
    this.el = this._buildElement();
  }

  /**
   * @param {ProcessLabel} label
   */
  addLabel(label) {
    this.labels.set(label.processId, label);
    this.el.appendChild(label.el);
  }

  _buildElement() {
    const el = document.createElement("div");
    el.className = "assessment-group";

    const header = document.createElement("div");
    header.className = "assessment-group-header";
    header.textContent = `מחזור ${this.cycleNumber}`;
    el.appendChild(header);

    return el;
  }
}
