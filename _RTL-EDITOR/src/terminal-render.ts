// Renders the raw contents of a file produced by `script -F <file> <command>`
// (a "typescript" file: raw terminal output, including ANSI/VT escape sequences)
// into the plain text lines that were actually *visible* in the terminal.
//
// This is not a regex clean-up: the recorded stream is a full VT100/xterm control
// stream that moves the cursor around, erases lines and repaints regions in place
// (Claude Code's TUI redraws its prompt box dozens of times per second). The only
// correct way to recover "what the user saw" is to replay the stream through a
// terminal emulator and read out the resulting screen + scrollback.
//
// We replay through @xterm/headless - the same VT parser xterm.js uses in the browser.

import { Terminal } from "@xterm/headless";

export type RenderTerminalOptions = {
    /**
     * Terminal width in columns. When omitted we take it from the geometry header
     * the recording may start with (see parseGeometryHeader()), and failing that
     * infer it from the stream (see detectColumns()).
     */
    cols?: number;

    /**
     * Terminal height in rows. Same sources as cols, falling back to detectRows().
     *
     * Rows matter less than columns - the output below is the flattened
     * scrollback + screen, so scrolling itself is invisible - but a TUI that
     * repaints from the home position (ESC[H) depends on where the top of the
     * screen was, so a wrong value can make repainted frames overwrite earlier
     * transcript lines.
     */
    rows?: number;

    /**
     * Re-join lines that the terminal hard-wrapped at the right margin, so one
     * logical line stays one output line. Default: true.
     */
    joinWrappedLines?: boolean;

    /** Drop the "Script started on ..." / "Script done on ..." banner. Default: true. */
    stripScriptBanner?: boolean;

    /** Collapse runs of blank lines into at most this many. 0 disables. Default: 0. */
    maxConsecutiveBlankLines?: number;
};

const DEFAULT_COLS = 80;
const DEFAULT_ROWS = 24;

/**
 * Replays a `script` recording through a terminal emulator and returns the visible
 * text, one entry per terminal line (scrollback first, then the final screen).
 */
export async function renderTerminalLines(
    content: string,
    options: RenderTerminalOptions = {},
): Promise<string[]> {
    const {
        joinWrappedLines = true,
        stripScriptBanner = true,
        maxConsecutiveBlankLines = 0,
    } = options;

    let stream = content;

    // scripts/claude-into-rtl-file.sh records the real geometry on a first line,
    // ahead of the appended recording. Older recordings simply don't have it.
    const geometry = parseGeometryHeader(stream);
    if (geometry) {
        stream = geometry.rest;
    }

    if (stripScriptBanner) {
        stream = stream
            .replace(/^Script started on .*\r?\n(?:Command: .*\r?\n)?/, "")
            .replace(/(?:\r?\n)*Script done on .*(?:\r?\n)*$/, "")
            // Only written when the recorded command has already exited.
            .replace(/(?:\r?\n)*Command exit status: \d+(?:\r?\n)*$/, "");
    }

    const cols = options.cols ?? geometry?.cols ?? detectColumns(stream);
    const rows = options.rows ?? geometry?.rows ?? detectRows(stream);

    const terminal = new Terminal({
        cols,
        rows,
        // Everything that scrolls off the top must be kept - it is the transcript.
        scrollback: Math.max(1000, countLineFeeds(stream) + rows),
        allowProposedApi: true,
    });

    try {
        // xterm parses asynchronously in chunks; the callback fires once this write
        // has been fully consumed by the parser.
        await new Promise<void>(resolve => terminal.write(stream, resolve));

        const buffer = terminal.buffer.active;
        const lines: string[] = [];

        for (let y = 0; y < buffer.length; y++) {
            const line = buffer.getLine(y);
            if (!line) continue;
            // translateToString(true) trims trailing whitespace (i.e. the cells the
            // app padded with spaces to paint a background colour).
            const text = line.translateToString(true);
            if (joinWrappedLines && line.isWrapped && lines.length > 0) {
                lines[lines.length - 1] += text;
            } else {
                lines.push(text);
            }
        }

        // The screen is a fixed-size grid, so it always ends with blank filler rows.
        while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
            lines.pop();
        }

        return maxConsecutiveBlankLines > 0
            ? collapseBlankLines(lines, maxConsecutiveBlankLines)
            : lines;
    } finally {
        terminal.dispose();
    }
}

/** Convenience wrapper around renderTerminalLines() returning a single string. */
export async function renderTerminalOutput(
    content: string,
    options: RenderTerminalOptions = {},
): Promise<string> {
    return (await renderTerminalLines(content, options)).join("\n");
}

/** Terminal geometry read off a recording's first line, plus the rest of the recording. */
export type GeometryHeader = { cols: number; rows: number; rest: string };

/**
 * Reads a leading "rows=<n> columns=<n>" line, as written by
 * scripts/claude-into-rtl-file.sh before it hands the file to `script -Fa`.
 *
 * Deliberately forgiving, and returns null on anything unexpected: recordings made
 * before this line existed - or by a plain `script` invocation - are still valid
 * input, they just fall back to detectColumns()/detectRows(). The line is only
 * consumed when it parses, so a recording that happens to start with real text
 * keeps that text.
 */
export function parseGeometryHeader(content: string): GeometryHeader | null {
    const newlineIndex = content.indexOf("\n");
    if (newlineIndex < 0) return null;
    const firstLine = content.slice(0, newlineIndex).replace(/\r$/, "").trim();

    // The whole line must be geometry assignments and nothing else, so that a
    // recording whose first line is ordinary text is never swallowed.
    if (!/^(?:rows|columns|cols)=\d+(?:[ \t]+(?:rows|columns|cols)=\d+)*$/i.test(firstLine)) return null;

    const rowsMatch = /\brows=(\d+)/i.exec(firstLine);
    const colsMatch = /\bcol(?:umn)?s=(\d+)/i.exec(firstLine);
    if (!rowsMatch || !colsMatch) return null;

    const rows = parseInt(rowsMatch[1], 10);
    const cols = parseInt(colsMatch[1], 10);
    // A nonsensical size would be worse than guessing.
    if (!isSaneDimension(rows) || !isSaneDimension(cols)) return null;

    return { cols, rows, rest: content.slice(newlineIndex + 1) };
}

function isSaneDimension(value: number): boolean {
    return Number.isFinite(value) && value >= 2 && value <= 10000;
}

/**
 * Infers the terminal width from the stream.
 *
 * A TUI that draws full-width rules or positions the cursor by absolute column
 * (CSI n G) reveals the width it was told about: the widest such column, and the
 * longest run of horizontal box-drawing characters, are both bounded by - and in
 * practice equal to - the terminal width.
 */
export function detectColumns(stream: string): number {
    let width = 0;

    for (const match of stream.matchAll(/\x1b\[(\d*)G/g)) {
        width = Math.max(width, parseInt(match[1] || "1", 10));
    }
    for (const match of stream.matchAll(/[─━═][─━═]+/g)) {
        width = Math.max(width, match[0].length);
    }

    // CSI n G lands *on* a column, so the width is at least that; a rule usually
    // spans the whole width. Fall back to the classic 80 when the stream says nothing.
    return width > 0 ? width : DEFAULT_COLS;
}

/**
 * Infers the terminal height from the stream, from two lower bounds:
 *
 * 1. A repainting TUI never moves the cursor above the top of the screen, so the
 *    largest "cursor up" distance is a lower bound on the height.
 * 2. A full-screen repaint homes the cursor (ESC[H) and then erases the previous
 *    frame one line at a time (ESC[2K ESC[1B ...). Such a repaint only happens
 *    when the frame fills the screen, so the longest of those erase runs is a
 *    lower bound too - and in practice an exact match.
 *
 * Getting this wrong is not fatal, but too *large* a value makes home-positioned
 * repaints land above where the screen really started, overwriting transcript
 * lines that the user did see.
 */
export function detectRows(stream: string): number {
    let maxUp = 0;
    for (const match of stream.matchAll(/\x1b\[(\d*)A/g)) {
        // +1 for the row the cursor moved up *from*.
        maxUp = Math.max(maxUp, parseInt(match[1] || "1", 10) + 1);
    }

    let maxRepaint = 0;
    for (const match of stream.matchAll(/\x1b\[H((?:\x1b\[2K\x1b\[1?B)+)/g)) {
        const erasedLines = match[1].match(/\x1b\[2K/g)!.length;
        maxRepaint = Math.max(maxRepaint, erasedLines);
    }

    return Math.max(DEFAULT_ROWS, maxUp, maxRepaint);
}

function countLineFeeds(stream: string): number {
    let count = 0;
    for (let i = 0; i < stream.length; i++) {
        if (stream.charCodeAt(i) === 10) count++;
    }
    return count;
}

function collapseBlankLines(lines: string[], max: number): string[] {
    const result: string[] = [];
    let blanks = 0;
    for (const line of lines) {
        if (line.trim() === "") {
            if (++blanks > max) continue;
        } else {
            blanks = 0;
        }
        result.push(line);
    }
    return result;
}
