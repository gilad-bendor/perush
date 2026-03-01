/**
 * @file Collapsible agent panel with tabs.
 *
 * Renders one tab per meeting participant-agent, showing their
 * latest private assessment, importance badge, and tool activity log.
 */

import { querySelectorMust } from "./utils.js";

/**
 * @typedef {Object} Assessment
 * @property {number} selfImportance  - 1–10, how urgently the agent wants to speak
 * @property {number} humanImportance - 1–10, how important the agent thinks Director input is
 * @property {string} summary         - One-sentence summary of what the agent would say
 */

/**
 * @typedef {Object} ToolActivityEntry
 * @property {string}  toolName - Name of the tool invoked
 * @property {string}  status   - "started" | "completed"
 * @property {string}  [detail] - Optional extra context
 */

export class AgentPanel {
  /**
   * @param {HTMLElement} tabsContainer    - The `#agent-tabs` element (tab buttons)
   * @param {HTMLElement} contentContainer - The `#agent-tab-content` element (tab body)
   * @param {import("./utils.js").AgentDefinition[]} agents - Agents participating in this meeting
   * @param {(id: string) => import("./utils.js").SpeakerColorSet} speakerColor - Resolves agent ID to color set
   */
  constructor(tabsContainer, contentContainer, agents, speakerColor) {
    this.tabsContainer = tabsContainer;
    this.contentContainer = contentContainer;
    this.agents = agents;
    this.speakerColor = speakerColor;

    /** @type {string | null} Currently selected tab's agent ID */
    this.activeTab = null;
    /** @type {Record<string, Assessment>} Latest assessment per agent */
    this.assessments = {};
    /** @type {Record<string, ToolActivityEntry[]>} Tool activity log per agent */
    this.toolActivities = {};

    this._renderTabs();
  }

  /**
   * Stores the latest assessment for an agent, updates its importance badge,
   * and re-renders the content pane if this agent's tab is active.
   * @param {string} agentId
   * @param {Assessment} assessment
   */
  setAssessment(agentId, assessment) {
    this.assessments[agentId] = assessment;
    this._updateBadge(agentId, assessment.selfImportance);
    if (this.activeTab === agentId) {
      this._renderContent(agentId);
    }
  }

  /**
   * Appends a tool-usage entry for an agent and re-renders if their tab is active.
   * @param {string} agentId
   * @param {string} toolName
   * @param {"started" | "completed"} status
   * @param {string} [detail]
   */
  addToolActivity(agentId, toolName, status, detail) {
    if (!this.toolActivities[agentId]) {
      this.toolActivities[agentId] = [];
    }
    this.toolActivities[agentId].push({ toolName, status, detail });
    if (this.activeTab === agentId) {
      this._renderContent(agentId);
    }
  }

  /**
   * Expands the panel (if collapsed) and activates the given agent's tab.
   * @param {string} agentId
   */
  openForAgent(agentId) {
    const panel = querySelectorMust(".agent-panel");
    if (panel.classList.contains("collapsed")) {
      panel.classList.remove("collapsed");
      const btn = document.getElementById("panel-toggle");
      if (btn) btn.textContent = "\u25B6";
    }
    this._switchTab(agentId);
  }

  // ---- Private ---------------------------------------------------------------

  /** Creates tab buttons for all meeting agents and activates the first one. */
  _renderTabs() {
    this.tabsContainer.innerHTML = "";

    for (const agent of this.agents) {
      const tab = document.createElement("button");
      tab.className =
        "agent-tab relative px-3 py-2 text-xs font-medium border-b-2 border-transparent hover:bg-stone-50 transition-colors whitespace-nowrap";
      tab.dataset.agent = agent.id;
      tab.textContent = agent.hebrewName;
      tab.title = `${agent.englishName} — ${agent.roleTitle}`;

      // Importance badge
      const badge = document.createElement("span");
      badge.className = "importance-badge absolute top-1 end-1 w-2 h-2 rounded-full hidden";
      tab.appendChild(badge);

      tab.addEventListener("click", () => this._switchTab(agent.id));
      this.tabsContainer.appendChild(tab);
    }

    // Activate first tab
    if (this.agents.length > 0) {
      this._switchTab(this.agents[0].id);
    }
  }

  /**
   * Highlights the selected tab and renders its content pane.
   * @param {string} agentId
   */
  _switchTab(agentId) {
    this.activeTab = agentId;

    // Update tab styling
    for (const tab of this.tabsContainer.querySelectorAll(".agent-tab")) {
      if (tab.dataset.agent === agentId) {
        tab.classList.add("border-amber-500", "text-amber-700");
        tab.classList.remove("border-transparent");
      } else {
        tab.classList.remove("border-amber-500", "text-amber-700");
        tab.classList.add("border-transparent");
      }
    }

    this._renderContent(agentId);
  }

  /**
   * Renders the content pane for the given agent (assessment + tool activity).
   * @param {string} agentId
   */
  _renderContent(agentId) {
    const agent = this.agents.find((a) => a.id === agentId);
    if (!agent) {
      this.contentContainer.innerHTML =
        '<p class="text-stone-400">סוכן לא נמצא</p>';
      return;
    }

    const assessment = this.assessments[agentId];
    const activities = this.toolActivities[agentId] || [];
    const color = this.speakerColor(agentId);

    let html = `
      <div class="mb-3">
        <span class="font-semibold ${color.label}">${agent.hebrewName}</span>
        <span class="text-stone-400 text-xs ms-1">${agent.roleTitle}</span>
      </div>
    `;

    if (assessment) {
      html += `
        <div class="assessment bg-stone-50 rounded p-2 mb-3 text-xs space-y-1">
          <div class="flex justify-between">
            <span class="text-stone-500">חשיבות עצמית:</span>
            <span class="font-semibold">${this._renderImportance(assessment.selfImportance)}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-500">חשיבות למנחה:</span>
            <span class="font-semibold">${this._renderImportance(assessment.humanImportance)}</span>
          </div>
          <div class="text-stone-600 mt-1 pt-1 border-t border-stone-200" style="unicode-bidi: plaintext">
            ${assessment.summary}
          </div>
        </div>
      `;
    } else {
      html += '<p class="text-stone-400 text-xs mb-3">אין הערכה עדיין</p>';
    }

    if (activities.length > 0) {
      html += '<div class="text-xs space-y-1">';
      html += '<div class="font-medium text-stone-500 mb-1">פעילות כלים:</div>';
      for (const act of activities.slice(-5)) {
        // Show last 5
        const icon = act.status === "started" ? "\u23F3" : "\u2705";
        html += `<div class="tool-activity text-stone-500">${icon} ${act.toolName}${act.detail ? ": " + act.detail : ""}</div>`;
      }
      html += "</div>";
    }

    this.contentContainer.innerHTML = html;
  }

  /**
   * Updates the colored dot on an agent's tab (green ≤3, yellow ≤6, red >6).
   * @param {string} agentId
   * @param {number} selfImportance - 1–10
   */
  _updateBadge(agentId, selfImportance) {
    const tab = this.tabsContainer.querySelector(
      `.agent-tab[data-agent="${agentId}"]`
    );
    if (!tab) return;

    const badge = tab.querySelector(".importance-badge");
    if (!badge) return;

    badge.classList.remove("hidden", "bg-green-400", "bg-yellow-400", "bg-red-400");

    if (selfImportance <= 3) {
      badge.classList.add("bg-green-400");
    } else if (selfImportance <= 6) {
      badge.classList.add("bg-yellow-400");
    } else {
      badge.classList.add("bg-red-400");
    }
  }

  /**
   * Returns an HTML bar-chart string for a 1–10 importance value.
   * @param {number} value
   * @returns {string} HTML with filled/empty blocks and numeric label
   */
  _renderImportance(value) {
    const filled = Math.round(value);
    const empty = 10 - filled;
    return `<span class="text-amber-500">${"\u2588".repeat(filled)}</span><span class="text-stone-200">${"\u2588".repeat(empty)}</span> ${value}/10`;
  }
}
