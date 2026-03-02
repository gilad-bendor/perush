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

export function wrapDanglingPromise(logCategory: LogCategory, promiseDescription: string, promise: Promise<any>) {
    promise.catch(error => logError(logCategory, `Throw in promise ${JSON.stringify(promiseDescription)}: ${error}`));
}