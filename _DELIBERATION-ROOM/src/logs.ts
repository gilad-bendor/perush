/**
 * logs.ts
 *
 * All console output is also written to a log file. The path is taken from
 * process.env.logFilePath, falling back to `./.logs/YYYY-MM-DD--HH-MM-SS-NNN.log`.
 * Logs are fsynced after every write. If the file is deleted while the app is
 * running, it is recreated on the next log.
 */

import {closeSync, fstatSync, fsyncSync, mkdirSync, openSync, statSync, writeSync,} from "node:fs";
import {dirname} from "node:path";
import {getContext} from "./context.ts";
import {prettyLog} from "./utils.ts";

// ---------------------------------------------------------------------------
// Logs Configs
// ---------------------------------------------------------------------------

export const logsConfig = {
    "sdk": true, // Log every sdk call and response
    "sessions": true, // Log sessions state-changes
    "session-manager": true, // Log session-management operations
    "meetings-db": true, // Log meetings-database operations
    "orchestrator": true, // Log meeting-orchestrations
    "server": true, // HTTP-server's life-cycle
} as const;
export type LogCategory = keyof typeof logsConfig;

// ---------------------------------------------------------------------------
// Public Log Functions
// ---------------------------------------------------------------------------

/** Log with level-info by log-category, with an optional value to be logged as YAML */
export function logInfo(logCategory: LogCategory, label: string, data?: unknown): void {
    logByMethod("info", logCategory, label, data);
}

/** Log with level-warn by log-category, with an optional value to be logged as YAML */
export function logWarn(logCategory: LogCategory, label: string, data?: unknown): void {
    logByMethod("warn", logCategory, label, data);
}

/** Log with level-error by log-category, with an optional value to be logged as YAML */
export function logError(logCategory: LogCategory, label: string, data?: unknown): void {
    logByMethod("error", logCategory, label, data);
}

/** Exported for tests / diagnostics. */
export function getLogPath(): string {
    return logFilePath;
}


// ---------------------------------------------------------------------------
// Private Stuff Functions
// ---------------------------------------------------------------------------

/** Log with level-error by log-category, with an optional value to be logged as YAML */
function logByMethod(consoleMethod: "info" | "warn" | "error", logCategory: LogCategory, label: string, data?: unknown): void {
    if (!logsConfig[logCategory]) return;
    const dataAugmentation = (data === undefined)
        ? ""
        : `\n${prettyLog(data).replace(/^/gm, '    ')}`;
    const elapsedMs = Date.now() - fileCreationTime;
    const seconds = Math.floor(elapsedMs / 1000);
    const ms = elapsedMs % 1000;
    const timing = `${String(seconds).padStart(5, "0")}.${String(ms).padStart(3, "0")}`;
    const logLevel = `[${consoleMethod.toUpperCase()}]`.padEnd(7);
    const context = getContext();
    const contextString = context?.messageId ? context.messageId : "N/A";
    const fullLog = `${timing} ${logLevel} [${logCategory}] [${contextString}] ${label}${dataAugmentation}`;
    console[consoleMethod](fullLog);
    writeToLog(fullLog + "\n");
}

/**
 * Return a valid fd for the log file, reopening if the file was deleted
 * or the fd is stale. Returns null on failure (logged once to stderr).
 */
function ensureLogFd(): number | null {
    if (logFd !== null) {
        try {
            const fdStat = fstatSync(logFd);
            const pathStat = statSync(logFilePath);
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
        mkdirSync(dirname(logFilePath), { recursive: true });
        logFd = openSync(logFilePath, "a");
        return logFd;
    } catch (err) {
        console.error("[log-file] Failed to open", logFilePath, err);
        return null;
    }
}

function writeToLog(fullLog: string): void {
    const fd = ensureLogFd();
    if (fd === null) return;
    try {
        writeSync(fd, fullLog);
        fsyncSync(fd);
    } catch {
        // Write/fsync failed — drop fd so next call reopens
        try { if (logFd !== null) closeSync(logFd); } catch { /* ignore */ }
        logFd = null;
    }
}

const fileCreationTime = Date.now();

const logFilePath =
    process.env.LOG_PATH ||
    (() => {
        const now = new Date(fileCreationTime);
        const p = (n: number, w = 2) => String(n).padStart(w, "0");
        const ts = `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}--${p(now.getHours())}-${p(now.getMinutes())}-${p(now.getSeconds())}-${p(now.getMilliseconds(), 3)}`;
        return `.logs/${ts}.log`;
    })();

let logFd: number | null = null;
