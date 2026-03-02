/**
 * context.ts — AsyncLocalStorage-based request context and console hijacking.
 *
 * Import this module as early as possible (before any other module logs)
 * to ensure all console output is prefixed with the current context's messageId.
 *
 * Imports from: types.ts only.
 */

import {AsyncLocalStorage} from "node:async_hooks";
import type {ClientMessage} from "./types";

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

