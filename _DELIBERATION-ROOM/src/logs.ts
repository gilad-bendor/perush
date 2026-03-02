/**
 * logs.ts
 *
 * All console output is also written to a log file. The path is taken from
 * process.env.LOG_PATH, falling back to `./.logs/YYYY-MM-DD--HH-MM-SS-NNN.log`.
 * Logs are fsynced after every write. If the file is deleted while the app is
 * running, it is recreated on the next log.
 */

import {closeSync, fstatSync, fsyncSync, mkdirSync, openSync, statSync, writeSync,} from "node:fs";
import {dirname} from "node:path";
import {format} from "node:util";
import {getContextPrefix} from "./context.ts";
import {prettyLog} from "./utils.ts";

export const logsConfig = {
    "sdk": true, // Log every sdk call and response
    "sessions": true, // Log sessions state-changes
    "session-manager": true, // Log session-management operations
    "meetings-db": true, // Log meetings-database operations
    "orchestrator": true, // Log meeting-orchestrations
    "server": true, // HTTP-server's life-cycle
} as const;
export type LogCategory = keyof typeof logsConfig;

/** Log with level-debug by log-category, with an optional value to be logged as YAML */
export function logDebug(logCategory: LogCategory, label: string, data?: unknown): void {
    if (!logsConfig[logCategory]) return;
    if (data === undefined) {
        console.log(`[${logCategory}] ${label}`);
    } else {
        console.log(`[${logCategory}] ${label}:\n${prettyLog(data).replace(/^/gm, '    ')}`);
    }
}

/** Log with level-warn by log-category, with an optional value to be logged as YAML */
export function logWarn(logCategory: LogCategory, label: string, data?: unknown): void {
    if (!logsConfig[logCategory]) return;
    if (data === undefined) {
        console.warn(`[${logCategory}] ${label}`);
    } else {
        console.warn(`[${logCategory}] ${label}:\n${prettyLog(data).replace(/^/gm, '    ')}`);
    }
}

/** Log with level-error by log-category, with an optional value to be logged as YAML */
export function logError(logCategory: LogCategory, label: string, data?: unknown): void {
    if (!logsConfig[logCategory]) return;
    if (data === undefined) {
        console.error(`[${logCategory}] ${label}`);
    } else {
        console.error(`[${logCategory}] ${label}:\n${prettyLog(data).replace(/^/gm, '    ')}`);
    }
}

export function wrapDanglingPromise(logCategory: LogCategory, promiseDescription: string, promise: Promise<any>) {
    promise.catch(error => logError(logCategory, `Throw in promise ${JSON.stringify(promiseDescription)}: ${error}`));
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
