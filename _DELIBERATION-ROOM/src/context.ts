/**
 * context.ts — AsyncLocalStorage-based request context and console hijacking.
 *
 * Import this module as early as possible (before any other module logs)
 * to ensure all console output is prefixed with the current context's messageId.
 *
 * All console output is also written to a log file. The path is taken from
 * process.env.LOG_PATH, falling back to `./.logs/YYYY-MM-DD--HH-MM-SS-NNN.log`.
 * Logs are fsynced after every write. If the file is deleted while the app is
 * running, it is recreated on the next log.
 *
 * Imports from: types.ts only.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import {
  mkdirSync,
  openSync,
  writeSync,
  fsyncSync,
  fstatSync,
  statSync,
  closeSync,
} from "node:fs";
import { dirname } from "node:path";
import { format } from "node:util";
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

// ---------------------------------------------------------------------------
// Log file
// ---------------------------------------------------------------------------

const LOG_PATH =
  process.env.LOG_PATH ||
  (() => {
    const now = new Date();
    const p = (n: number, w = 2) => String(n).padStart(w, "0");
    const ts = `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}--${p(now.getHours())}-${p(now.getMinutes())}-${p(now.getSeconds())}-${p(now.getMilliseconds(), 3)}`;
    return `./.logs/${ts}.log`;
  })();

let logFd: number | null = null;

/**
 * Return a valid fd for the log file, reopening if the file was deleted
 * or the fd is stale. Returns null on failure (logged once to stderr).
 */
function ensureLogFd(): number | null {
  if (logFd !== null) {
    try {
      const fdStat = fstatSync(logFd);
      const pathStat = statSync(LOG_PATH);
      // Same inode+device ⇒ same file, fd is still good
      if (fdStat.ino === pathStat.ino && fdStat.dev === pathStat.dev) {
        return logFd;
      }
      // File was replaced — close old fd and fall through to reopen
      try { closeSync(logFd); } catch { /* ignore */ }
      logFd = null;
    } catch {
      // statSync or fstatSync failed — file deleted or fd invalid
      try { if (logFd !== null) closeSync(logFd); } catch { /* ignore */ }
      logFd = null;
    }
  }

  try {
    mkdirSync(dirname(LOG_PATH), { recursive: true });
    logFd = openSync(LOG_PATH, "a");
    return logFd;
  } catch (err) {
    originalConsole.error("[log-file] Failed to open", LOG_PATH, err);
    return null;
  }
}

function writeToLog(level: string, prefix: string, args: unknown[]): void {
  const fd = ensureLogFd();
  if (fd === null) return;

  try {
    const ts = new Date().toISOString();
    const body = format(...args);
    const line = `${ts} [${level}] ${prefix} ${body}\n`;
    writeSync(fd, line);
    fsyncSync(fd);
  } catch {
    // Write/fsync failed — drop fd so next call reopens
    try { if (logFd !== null) closeSync(logFd); } catch { /* ignore */ }
    logFd = null;
  }
}

/** Exported for tests / diagnostics. */
export function getLogPath(): string {
  return LOG_PATH;
}

// ---------------------------------------------------------------------------
// Console hijacking (prefix + log file)
// ---------------------------------------------------------------------------

console.log = (...args: unknown[]) => {
  const pfx = getContextPrefix();
  originalConsole.log(pfx, ...args);
  writeToLog("LOG", pfx, args);
};
console.error = (...args: unknown[]) => {
  const pfx = getContextPrefix();
  originalConsole.error(pfx, ...args);
  writeToLog("ERR", pfx, args);
};
console.warn = (...args: unknown[]) => {
  const pfx = getContextPrefix();
  originalConsole.warn(pfx, ...args);
  writeToLog("WRN", pfx, args);
};
console.info = (...args: unknown[]) => {
  const pfx = getContextPrefix();
  originalConsole.info(pfx, ...args);
  writeToLog("INF", pfx, args);
};
console.debug = (...args: unknown[]) => {
  const pfx = getContextPrefix();
  originalConsole.debug(pfx, ...args);
  writeToLog("DBG", pfx, args);
};

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
