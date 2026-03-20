/**
 * @file Shared constants and pure utility functions.
 *
 * Speaker color palettes, phase display names, and DOM query helpers.
 */

/** @typedef {import('../../src/types.ts').Phase} Phase */
/** @typedef {import('../../src/types.ts').AgentId} AgentId */
/** @typedef {import('../../src/types.ts').SpeakerId} SpeakerId */

/**
 * @typedef {Object} SpeakerColorSet
 * @property {string} bg    - Tailwind background class
 * @property {string} border - Tailwind border class
 * @property {string} text   - Tailwind text class (message body)
 * @property {string} label  - Tailwind text class (speaker name)
 * @property {string} dot    - Hex color for dot/badge indicators
 */

/** @type {Record<string, SpeakerColorSet>} Color palettes per known speaker, readable on light backgrounds. */
export const SPEAKER_COLORS = {
  human: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-900", label: "text-blue-700", dot: "#3b82f6" },
  milo: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-900", label: "text-emerald-700", dot: "#10b981" },
  archi: { bg: "bg-violet-50", border: "border-violet-300", text: "text-violet-900", label: "text-violet-700", dot: "#8b5cf6" },
  kashia: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-900", label: "text-rose-700", dot: "#f43f5e" },
  barak: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-900", label: "text-amber-700", dot: "#f59e0b" },
  manager: { bg: "bg-stone-100", border: "border-stone-800", text: "text-stone-900", label: "text-stone-800", dot: "#292524" },
};

/** @type {SpeakerColorSet} Neutral fallback for dynamically discovered agents not in the palette. */
export const FALLBACK_COLOR = { bg: "bg-stone-50", border: "border-stone-300", text: "text-stone-900", label: "text-stone-700", dot: "#78716c" };

/**
 * Returns the color set for a speaker, falling back to {@link FALLBACK_COLOR}.
 * @param {SpeakerId} speakerId
 * @returns {SpeakerColorSet}
 */
export function speakerColor(speakerId) {
  return SPEAKER_COLORS[speakerId] || FALLBACK_COLOR;
}

/**
 * Maps a cycle phase identifier to its Hebrew display name.
 * @param {Phase} phase
 * @returns {string}
 */
export function phaseDisplayName(phase) {
  const names = {
    idle: "המתנה",
    assessing: "הערכה",
    selecting: "בחירה",
    speaking: "דיבור",
    "human-turn": "תורך",
    "rolling-back": "חזרה",
  };
  return names[phase] || phase;
}

/**
 * Like `querySelector`, but throws if the element is missing or not an HTMLElement.
 * @param {string} selector - CSS selector
 * @param {Document | HTMLElement} [root=document] - Root to search within
 * @returns {HTMLElement}
 * @throws {Error} If no matching HTMLElement is found
 */
export function querySelectorMust(selector, root = document) {
  const element = root.querySelector(selector);
  if (!element) {
    throw new Error(`Could not find element with selector ${JSON.stringify(selector)}`);
  }

  if (!(element instanceof HTMLElement)) {
    throw new Error(`Element with selector ${JSON.stringify(selector)} is not an HTMLElement`);
  }

  return element;
}

/**
 * Serializes a value into a compact, human-readable YAML-like string for console logging.
 * Objects and arrays are indented;
 * @param {any} value - Any JSON-serializable value
 * @returns {string}
 */
export function prettyLog(value) {
  return _prettyLines(value, 0).join("\n").replace(/:\n *\|\n/g, ": |\n");
}

/**
 * @param {*} val
 * @param {number} depth
 * @returns {string[]}
 */
function _prettyLines(val, depth) {
  const indent = "  ".repeat(depth);
  if (val === null || val === undefined) return [`${indent}${val}`];
  if (typeof val === "boolean" || typeof val === "number") return [`${indent}${val}`];
  if (typeof val === "string") {
    // Multi-line strings get a block-scalar style
    if (val.includes("\n")) {
      const lines = val.split("\n");
      return [`${indent}|`, ...lines.map((l) => `${indent}  ${l}`)];
    }
    return [`${indent}${val}`];
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return [`${indent}[]`];
    const lines = [];
    for (const item of val) {
      const sub = _prettyLines(item, depth + 1);
      sub[0] = `${indent}- ${sub[0].trimStart()}`;
      lines.push(...sub);
    }
    return lines;
  }
  if (typeof val === "object") {
    const keys = Object.keys(val);
    if (keys.length === 0) return [`${indent}{}`];
    const lines = [];
    for (const key of keys) {
      const sub = _prettyLines(val[key], depth + 1);
      if (sub.length === 1 && !sub[0].trimStart().startsWith("|") && !sub[0].trimStart().startsWith("-")) {
        // Inline: key: value
        lines.push(`${indent}${key}: ${sub[0].trimStart()}`);
      } else {
        // Block: key on its own line, value indented below
        lines.push(`${indent}${key}:`);
        lines.push(...sub);
      }
    }
    return lines;
  }
  return [`${indent}${String(val)}`];
}
