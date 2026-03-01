/**
 * @file Shared constants and pure utility functions.
 *
 * Speaker color palettes, phase display names, and DOM query helpers.
 */

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
};

/** @type {SpeakerColorSet} Neutral fallback for dynamically discovered agents not in the palette. */
export const FALLBACK_COLOR = { bg: "bg-stone-50", border: "border-stone-300", text: "text-stone-900", label: "text-stone-700", dot: "#78716c" };

/**
 * Returns the color set for a speaker, falling back to {@link FALLBACK_COLOR}.
 * @param {string} speakerId
 * @returns {SpeakerColorSet}
 */
export function speakerColor(speakerId) {
  return SPEAKER_COLORS[speakerId] || FALLBACK_COLOR;
}

/**
 * Maps a cycle phase identifier to its Hebrew display name.
 * @param {string} phase - One of "idle" | "assessing" | "selecting" | "speaking" | "human-turn" | "rolling-back"
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
