/**
 * context.ts — AsyncLocalStorage-based request context and console hijacking.
 *
 * Import this module as early as possible (before any other module logs)
 * to ensure all console output is prefixed with the current context's messageId.
 *
 * Imports from: types.ts only.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import type { ClientMessage } from "./types";

// ---------------------------------------------------------------------------
// AsyncLocalStorage context
// ---------------------------------------------------------------------------

const asyncLocalStorage = new AsyncLocalStorage<ClientMessage>();

/**
 * Run a function within the context of a ClientMessage.
 * All console output within the function (and its async continuations)
 * will be prefixed with the message's ID.
 */
export function runWithContext<T>(msg: ClientMessage, fn: () => T): T {
  return asyncLocalStorage.run(msg, fn);
}

/** Get the current ClientMessage context (if any). */
export function getContext(): ClientMessage | undefined {
  return asyncLocalStorage.getStore();
}

/** Get the prefix string for the current context: "[C1]" or "[N/A]". */
export function getContextPrefix(): string {
  const ctx = getContext();
  return ctx?.messageId ? `[${ctx.messageId}]` : "[N/A]";
}

// ---------------------------------------------------------------------------
// Console hijacking
// ---------------------------------------------------------------------------

const originalConsole = {
  log: console.log.bind(console),
  error: console.error.bind(console),
  warn: console.warn.bind(console),
  info: console.info.bind(console),
  debug: console.debug.bind(console),
};

/** Access to the original (non-prefixed) console methods. */
export { originalConsole };

console.log = (...args: unknown[]) =>
  originalConsole.log(getContextPrefix(), ...args);
console.error = (...args: unknown[]) =>
  originalConsole.error(getContextPrefix(), ...args);
console.warn = (...args: unknown[]) =>
  originalConsole.warn(getContextPrefix(), ...args);
console.info = (...args: unknown[]) =>
  originalConsole.info(getContextPrefix(), ...args);
console.debug = (...args: unknown[]) =>
  originalConsole.debug(getContextPrefix(), ...args);

// ---------------------------------------------------------------------------
// Pretty-print utility (YAML-like, for WS message logging)
// ---------------------------------------------------------------------------

/**
 * Serializes a value into a compact, human-readable YAML-like string.
 * Mirrors the client-side `prettyLog` in `public/src/utils.js`.
 */
export function prettyLog(value: unknown, maxStringLen = 200): string {
  return _prettyLines(value, 0, maxStringLen)
    .join("\n")
    .replace(/:\n *\|\n/g, ": |\n");
}

function _prettyLines(
  val: unknown,
  depth: number,
  maxStr: number,
): string[] {
  const indent = "  ".repeat(depth);
  if (val === null || val === undefined) return [`${indent}${val}`];
  if (typeof val === "boolean" || typeof val === "number")
    return [`${indent}${val}`];
  if (typeof val === "string") {
    const truncated =
      val.length > maxStr
        ? val.slice(0, maxStr) + `… (${val.length} chars)`
        : val;
    if (truncated.includes("\n")) {
      const lines = truncated.split("\n");
      return [`${indent}|`, ...lines.map((l) => `${indent}  ${l}`)];
    }
    return [`${indent}${truncated}`];
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return [`${indent}[]`];
    const lines: string[] = [];
    for (const item of val) {
      const sub = _prettyLines(item, depth + 1, maxStr);
      sub[0] = `${indent}- ${sub[0].trimStart()}`;
      lines.push(...sub);
    }
    return lines;
  }
  if (typeof val === "object") {
    const keys = Object.keys(val as Record<string, unknown>);
    if (keys.length === 0) return [`${indent}{}`];
    const lines: string[] = [];
    for (const key of keys) {
      const sub = _prettyLines((val as any)[key], depth + 1, maxStr);
      if (
        sub.length === 1 &&
        !sub[0].trimStart().startsWith("|") &&
        !sub[0].trimStart().startsWith("-")
      ) {
        lines.push(`${indent}${key}: ${sub[0].trimStart()}`);
      } else {
        lines.push(`${indent}${key}:`);
        lines.push(...sub);
      }
    }
    return lines;
  }
  return [`${indent}${String(val)}`];
}
