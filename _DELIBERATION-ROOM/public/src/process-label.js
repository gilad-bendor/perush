/**
 * @file Expandable process label for the timeline.
 *
 * Each SDK interaction (assessment, manager selection, agent speech) is
 * rendered as a small colored pill that expands on click to show the full
 * prompt, thinking, text output, tool calls, and tool results.
 */

import { speakerColor } from "./utils.js";

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
   * @param {AgentId | "manager"} agent
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
    el.className = "process-label inline-block";
    el.dataset.processId = this.processId;

    // Pill (collapsed view)
    const pill = document.createElement("button");
    pill.className = `process-pill inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs font-medium cursor-pointer transition-colors ${color.border} ${color.label} hover:${color.bg} animate-pulse`;
    pill.style.borderWidth = "1.5px";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = this.displayName;
    pill.appendChild(nameSpan);

    // Event count badge
    const badge = document.createElement("span");
    badge.className = "process-badge text-[10px] opacity-60 hidden";
    pill.appendChild(badge);

    // Spinner (while in progress)
    const spinner = document.createElement("span");
    spinner.className = "process-spinner text-[10px] opacity-40";
    spinner.textContent = "\u23F3";
    pill.appendChild(spinner);

    pill.addEventListener("click", () => this._toggle());
    el.appendChild(pill);

    // Expansion area (hidden by default)
    const expansion = document.createElement("div");
    expansion.className = "process-expansion hidden mt-1 border rounded p-2 text-xs space-y-1 max-h-96 overflow-y-auto";
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
    }
  }

  /**
   * @param {ProcessEventData} evt
   */
  _appendEventEl(evt) {
    const expansion = this.el.querySelector(".process-expansion");
    if (!expansion) return;

    const div = document.createElement("div");
    div.style.unicodeBidi = "plaintext";

    switch (evt.eventKind) {
      case "prompt":
        div.className = "text-stone-400 border-b border-stone-200 pb-1 mb-1";
        div.innerHTML = `<span class="font-semibold">\u25B6 Prompt:</span>`;
        const promptText = document.createElement("pre");
        promptText.className = "whitespace-pre-wrap mt-0.5 text-[11px] max-h-40 overflow-y-auto";
        promptText.textContent = evt.content;
        div.appendChild(promptText);
        break;
      case "thinking":
        div.className = "italic text-stone-500 bg-stone-50 rounded px-1.5 py-0.5";
        div.innerHTML = `<span class="font-semibold not-italic text-stone-400">\u{1F4AD}</span> `;
        const thinkText = document.createElement("span");
        thinkText.className = "whitespace-pre-wrap";
        thinkText.textContent = evt.content.length > 500 ? evt.content.slice(0, 500) + "\u2026" : evt.content;
        div.appendChild(thinkText);
        break;
      case "text":
        div.className = "text-stone-800 whitespace-pre-wrap";
        div.textContent = evt.content;
        break;
      case "tool-call":
        div.className = "font-mono text-indigo-700 bg-indigo-50 rounded px-1.5 py-0.5";
        div.innerHTML = `<span class="font-semibold">\u{1F527} ${evt.toolName || "tool"}:</span>`;
        const inputPre = document.createElement("pre");
        inputPre.className = "whitespace-pre-wrap text-[11px] mt-0.5 max-h-32 overflow-y-auto";
        inputPre.textContent = evt.toolInput || evt.content;
        div.appendChild(inputPre);
        break;
      case "tool-result":
        div.className = "font-mono text-teal-700 bg-teal-50 rounded px-1.5 py-0.5";
        div.innerHTML = `<span class="font-semibold">\u2705 ${evt.toolName || "result"}:</span>`;
        const resultPre = document.createElement("pre");
        resultPre.className = "whitespace-pre-wrap text-[11px] mt-0.5 max-h-32 overflow-y-auto";
        resultPre.textContent = evt.content.length > 1000 ? evt.content.slice(0, 1000) + "\u2026" : evt.content;
        div.appendChild(resultPre);
        break;
    }

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
    const container = this.el.querySelector(".assessment-labels");
    if (container) {
      container.appendChild(label.el);
    }
  }

  _buildElement() {
    const el = document.createElement("div");
    el.className = "assessment-group border border-stone-300 rounded p-2 mb-2";

    const header = document.createElement("div");
    header.className = "text-[10px] text-stone-400 mb-1 font-medium";
    header.textContent = `\u{1F4CA} \u05D4\u05E2\u05E8\u05DB\u05D5\u05EA \u2014 \u05DE\u05D7\u05D6\u05D5\u05E8 ${this.cycleNumber}`;
    el.appendChild(header);

    const labels = document.createElement("div");
    labels.className = "assessment-labels flex flex-wrap gap-1.5";
    el.appendChild(labels);

    return el;
  }
}
