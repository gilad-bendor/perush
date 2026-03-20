/**
 * utils.ts - placeholder for infrastructural utilities
 */


// ---------------------------------------------------------------------------
// Pretty-print utility (YAML-like, for WS message logging)
// ---------------------------------------------------------------------------

import {LogCategory, logError} from "./logs.ts";

/**
 * Serializes a value into a compact, human-readable YAML-like string.
 * Mirrors the client-side `prettyLog` in `public/src/utils.js`.
 */
export function prettyLog(value: unknown): string {
    return _prettyLines(value, 0)
        .join("\n")
        .replace(/:\n *\|\n/g, ": |\n");
}

function _prettyLines(val: unknown, depth: number): string[] {
    const indent = "  ".repeat(depth);
    if (val === null || val === undefined) return [`${indent}${val}`];
    if (typeof val === "boolean" || typeof val === "number")
        return [`${indent}${val}`];
    if (typeof val === "string") {
        if (val.includes("\n")) {
            const lines = val.split("\n");
            return [`${indent}|`, ...lines.map((l) => `${indent}  ${l}`)];
        }
        return [`${indent}${val}`];
    }
    if (Array.isArray(val)) {
        if (val.length === 0) return [`${indent}[]`];
        const lines: string[] = [];
        for (const item of val) {
            const sub = _prettyLines(item, depth + 1);
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
            const sub = _prettyLines((val as any)[key], depth + 1);
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

export function wrapDanglingPromise(logCategory: LogCategory, promiseDescription: string, promise: Promise<any>) {
    promise.catch(error => logError(logCategory, `Throw in promise ${JSON.stringify(promiseDescription)}: ${error}`));
}