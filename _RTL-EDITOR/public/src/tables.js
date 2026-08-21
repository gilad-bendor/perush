// Table auto-formatting.
//
// Three input formats are recognised and all of them are rewritten into one canonical
// box-drawing ("NICE") form:
//
//   NICE                REVERSED-NICE          MARKDOWN
//   ┌────┬────┐         ┐────┬────┌            | a | b |
//   │ a  │ b  │         │ a  │ b  │            |---|---|
//   └────┴────┘         ┘────┴────└            | 1 | 2 |
//
// REVERSED-NICE is the same table with its corner/tee characters mirrored. That form is
// what an RTL document needs *in the editor*: a `.rtl.md` file renders with `direction: rtl`,
// so the bidi algorithm mirrors the whole line and the corner that comes first in the text
// is painted on the right. Writing the mirrored characters therefore draws a closed box.
//
// On disk we always keep the un-mirrored form, so the file reads correctly in git and in
// any other tool - the server mirrors on POST and this module mirrors back on load
// (see isRtlFile() / mirrorBoxCharacters()).
//
// Everything here is pure string manipulation with no editor dependency, so it can run both
// in the browser (public/src/markdown-editor.js) and in the server (src/server.ts).


// ---------------------------------------------------------------------------------------
// Character-level helpers
// ---------------------------------------------------------------------------------------

// Hebrew Nikud/Te'amim are combining marks: they are painted on top of the preceding letter
// and take no space of their own, so they must not be counted when padding a cell.
const COMBINING_MARK_REG_EXP = /[\p{Mn}\p{Me}]/u;

/**
 * The number of terminal columns `text` occupies - i.e. its length ignoring combining marks.
 * This is *not* the same as text.length, which is what string offsets are measured in.
 * @param {string} text
 * @returns {number}
 */
export function visualWidth(text) {
    let width = 0;
    for (const character of text) {
        if (!COMBINING_MARK_REG_EXP.test(character)) {
            width++;
        }
    }
    return width;
}

const VERTICAL = '│';
const HORIZONTAL = '─';

// The characters that begin and end a horizontal rule, per rule kind, in un-mirrored order.
const RULE_ENDS = {
    top: ['┌', '┐'],
    middle: ['├', '┤'],
    bottom: ['└', '┘'],
};
// The character a rule uses where a column boundary crosses it.
const RULE_JUNCTIONS = { top: '┬', middle: '┼', bottom: '┴' };

const RULE_END_CHARACTERS = '┌┐├┤└┘';
const RULE_BODY_CHARACTERS = '─┬┼┴';

/** Mirrored counterparts - the only box characters that are not left/right symmetric. */
const MIRRORED_BOX_CHARACTERS = { '┌': '┐', '┐': '┌', '├': '┤', '┤': '├', '└': '┘', '┘': '└' };

/**
 * Swaps every box-drawing character with its left/right mirror image, converting NICE
 * to REVERSED-NICE and back. The transformation is its own inverse.
 * @param {string} text
 * @returns {string}
 */
export function mirrorBoxCharacters(text) {
    return text.replace(/[┌┐├┤└┘]/g, (character) => MIRRORED_BOX_CHARACTERS[character]);
}

/**
 * Is this file AI-generated - `*.ai.md` or `*.ai.rtl.md`?
 *
 * Such a file is a verbatim record of what a model produced, so nothing here may rewrite it:
 * no table is re-laid-out, no box character is mirrored, and the file is never saved back just
 * because its tables are not in the canonical form. It is still displayed like any other file -
 * only its *content* is off limits.
 *
 * @param {string} filePath
 * @returns {boolean}
 */
export function isAiGeneratedFile(filePath) {
    return /\.ai(\.rtl)?\.md$/.test(filePath);
}

/**
 * Is this file laid out right-to-left? Shared by the editor (to pick the mirrored box
 * characters) and by the server (to decide whether to un-mirror on save), so that both
 * sides always agree.
 *
 * Mirrors the rule in _RTL-EDITOR/CLAUDE.md: `*.rtl.md` is always RTL, and any other `*.md`
 * is RTL when its first line containing a letter has Hebrew in it but no English.
 *
 * @param {string} filePath
 * @param {string} [content]
 * @returns {boolean}
 */
export function isRtlFile(filePath, content) {
    if (filePath.endsWith('.rtl.md')) {
        return true;
    }
    if (content && filePath.endsWith('.md')) {
        for (const line of content.split('\n')) {
            const trimmed = line.trim();
            if (!trimmed) {
                continue;
            }
            const hasHebrew = /[֐-׿]/.test(trimmed);
            const hasEnglish = /[a-zA-Z]/.test(trimmed);
            if (hasHebrew || hasEnglish) {
                return hasHebrew && !hasEnglish;
            }
        }
    }
    return false;
}


// ---------------------------------------------------------------------------------------
// Line classification
// ---------------------------------------------------------------------------------------

/**
 * @typedef {{ indent: string, body: string }} SplitLine
 * A line split into its leading whitespace and the rest.
 */

/**
 * @param {string} line
 * @returns {SplitLine}
 */
function splitIndent(line) {
    const withoutCarriageReturn = line.endsWith('\r') ? line.slice(0, -1) : line;
    const indent = /^[ \t]*/.exec(withoutCarriageReturn)[0];
    return { indent, body: withoutCarriageReturn.slice(indent.length) };
}

/**
 * Which kind of horizontal rule is this, if any? Works on both the NICE and the
 * REVERSED-NICE spelling, because the *pair* of end characters identifies the kind
 * regardless of which way round they are.
 * @param {string} body
 * @returns {'top' | 'middle' | 'bottom' | null}
 */
function ruleKind(body) {
    if (body.length < 2) {
        return null;
    }
    const first = body[0];
    const last = body[body.length - 1];
    if (!RULE_END_CHARACTERS.includes(first) || !RULE_END_CHARACTERS.includes(last)) {
        return null;
    }
    for (let i = 1; i < body.length - 1; i++) {
        if (!RULE_BODY_CHARACTERS.includes(body[i])) {
            return null;
        }
    }
    for (const kind of /** @type {const} */ (['top', 'middle', 'bottom'])) {
        const [left, right] = RULE_ENDS[kind];
        if ((first === left || first === right) && (last === left || last === right)) {
            return kind;
        }
    }
    return null;
}

/**
 * Is this whole line one of a table's horizontal rules - "┌───┬───┐", "├───┼───┤", "└───┴───┘"
 * or any of their mirrored spellings? Used by the editor to give those lines a much tighter
 * line-height than the rows they separate.
 *
 * @param {string} line   A full document line, indentation and all.
 * @returns {boolean}
 */
export function isTableRuleLine(line) {
    return ruleKind(splitIndent(line).body) !== null;
}

/** @param {string} body @returns {boolean} */
function isBoxDataLine(body) {
    return body.length >= 2 && body.startsWith(VERTICAL) && body.endsWith(VERTICAL);
}

/**
 * Offsets of the "|" characters that actually separate cells - i.e. every one that is not
 * escaped as "\|", which Markdown uses to put a literal pipe inside a cell.
 * @param {string} body
 * @returns {number[]}
 */
function cellSeparatorPositions(body) {
    /** @type {number[]} */ const positions = [];
    for (let i = 0; i < body.length; i++) {
        if (body[i] === '|' && body[i - 1] !== '\\') {
            positions.push(i);
        }
    }
    return positions;
}

/**
 * Is this a Markdown table row?
 *
 * The rule is deliberately narrow - the line must both start and end with an unescaped "|"
 * and hold at least three of them (i.e. two or more cells), with something other than spaces
 * in between. Prose that merely mentions "|" (a TypeScript union type, say) never starts
 * and ends with one, so it is not mistaken for a table.
 *
 * @param {string} body
 * @returns {boolean}
 */
function isMarkdownRow(body) {
    if (body.length < 3) {
        return false;
    }
    const positions = cellSeparatorPositions(body);
    return positions.length >= 3
        && positions[0] === 0
        && positions[positions.length - 1] === body.length - 1
        && body.slice(1, -1).trim() !== '';
}

/**
 * A Markdown separator row - "|---|:--:|---:|". It becomes a rule in the box format, and its
 * alignment markers are dropped - every cell is start-aligned.
 * @param {string} body
 * @returns {boolean}
 */
function isMarkdownSeparatorRow(body) {
    return isMarkdownRow(body)
        && markdownCellBounds(body).every(({ start, end }) => /^\s*:?-+:?\s*$/.test(body.slice(start, end)));
}

/**
 * The half-open bounds of each cell in a Markdown row, relative to `body`.
 * @param {string} body
 * @returns {CellRange[]}
 */
function markdownCellBounds(body) {
    const positions = cellSeparatorPositions(body);
    /** @type {CellRange[]} */ const bounds = [];
    for (let i = 0; i < positions.length - 1; i++) {
        bounds.push({ start: positions[i] + 1, end: positions[i + 1] });
    }
    return bounds;
}


// ---------------------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------------------

/**
 * @typedef {{ start: number, end: number }} CellRange
 * Half-open offsets, within the *original* line, of a cell's raw text (separators excluded).
 */

/**
 * @typedef {Object} SourceLine
 * @property {number} lineIndex          Index of the line in the original document.
 * @property {CellRange[]} cellRanges    One entry per cell.
 */

/**
 * @typedef {Object} TableRow
 * @property {string[][]} lines          lines[lineIndex][columnIndex] = the cell's trimmed text.
 * @property {SourceLine[]} sourceLines  Parallel to `lines` as parsed - where each line came from.
 *                                     Not maintained once the grid is mutated, because nothing
 *                                     but rendering happens after that.
 */

/**
 * @typedef {Object} TableBlock
 * @property {'table'} type
 * @property {number} firstLine          Index of the block's first line in the original document.
 * @property {number} lineCount          How many original lines the block spans.
 * @property {string} indent             Common leading whitespace, reused on output.
 * @property {TableRow[]} rows
 * @property {Map<number, number>} ruleRows   For each original rule/separator line, how many
 *                                   rows preceded it - which is exactly the index of the rule
 *                                   that replaces it on output (rules are re-derived, so an
 *                                   input rule has no counterpart to be found by position).
 * @property {number} columnCount
 */

/**
 * @typedef {{ type: 'plain', firstLine: number, lineCount: number }} PlainBlock
 */

/** @typedef {TableBlock | PlainBlock} Block */

/**
 * Splits a document into plain stretches and table blocks.
 * @param {string[]} lines
 * @returns {Block[]}
 */
function parseBlocks(lines) {
    /** @type {Block[]} */ const blocks = [];
    let insideFencedCode = false;

    for (let i = 0; i < lines.length; ) {
        const { indent, body } = splitIndent(lines[i]);

        // Never touch anything inside a ``` fence - a table drawn there is sample text.
        if (/^(```|~~~)/.test(body)) {
            insideFencedCode = !insideFencedCode;
            appendPlainLine(blocks, i);
            i++;
            continue;
        }
        if (insideFencedCode) {
            appendPlainLine(blocks, i);
            i++;
            continue;
        }

        const isBoxLine = ruleKind(body) !== null || isBoxDataLine(body);
        const isMarkdownLine = !isBoxLine && isMarkdownRow(body);
        if (!isBoxLine && !isMarkdownLine) {
            appendPlainLine(blocks, i);
            i++;
            continue;
        }

        // Extend the block over the following lines of the same kind and indentation.
        let end = i + 1;
        while (end < lines.length) {
            const next = splitIndent(lines[end]);
            if (next.indent !== indent) {
                break;
            }
            const nextIsBoxLine = ruleKind(next.body) !== null || isBoxDataLine(next.body);
            if (nextIsBoxLine !== isBoxLine || (!isBoxLine && !isMarkdownRow(next.body))) {
                break;
            }
            end++;
        }

        blocks.push(isBoxLine
            ? parseBoxTable(lines, i, end, indent)
            : parseMarkdownTable(lines, i, end, indent));
        i = end;
    }

    return blocks;
}

/**
 * Appends a single line to the trailing plain block, starting one if needed.
 * @param {Block[]} blocks
 * @param {number} lineIndex
 */
function appendPlainLine(blocks, lineIndex) {
    const last = blocks[blocks.length - 1];
    if (last && last.type === 'plain') {
        last.lineCount++;
    } else {
        blocks.push({ type: 'plain', firstLine: lineIndex, lineCount: 1 });
    }
}

/**
 * @param {string[]} lines
 * @param {number} from
 * @param {number} to
 * @param {string} indent
 * @returns {TableBlock}
 */
function parseBoxTable(lines, from, to, indent) {
    /** @type {TableRow[]} */ const rows = [];
    /** @type {Map<number, number>} */ const ruleRows = new Map();
    /** @type {TableRow | null} */ let currentRow = null;

    for (let i = from; i < to; i++) {
        const { body } = splitIndent(lines[i]);
        if (ruleKind(body) !== null) {
            ruleRows.set(i, rows.length);
            currentRow = null;
            continue;
        }
        // A data line: its cells are the stretches between the "│" characters.
        /** @type {CellRange[]} */ const cellRanges = [];
        /** @type {string[]} */ const cells = [];
        let cellStart = indent.length + 1;   // just after the leading "│"
        for (let offset = 1; offset < body.length; offset++) {
            if (body[offset] !== VERTICAL) {
                continue;
            }
            const end = indent.length + offset;
            cellRanges.push({ start: cellStart, end });
            cells.push(lines[i].slice(cellStart, end).trim());
            cellStart = end + 1;
        }
        if (!currentRow) {
            currentRow = { lines: [], sourceLines: [] };
            rows.push(currentRow);
        }
        currentRow.lines.push(cells);
        currentRow.sourceLines.push({ lineIndex: i, cellRanges });
    }

    return finishTable(rows, ruleRows, from, to, indent);
}

/**
 * @param {string[]} lines
 * @param {number} from
 * @param {number} to
 * @param {string} indent
 * @returns {TableBlock}
 */
function parseMarkdownTable(lines, from, to, indent) {
    /** @type {TableRow[]} */ const rows = [];
    /** @type {Map<number, number>} */ const ruleRows = new Map();

    for (let i = from; i < to; i++) {
        const { body } = splitIndent(lines[i]);
        if (isMarkdownSeparatorRow(body)) {
            ruleRows.set(i, rows.length);
            continue;
        }
        // Every Markdown row is a row of its own - a cell cannot span lines in that format.
        /** @type {CellRange[]} */ const cellRanges = [];
        /** @type {string[]} */ const cells = [];
        for (const { start, end } of markdownCellBounds(body)) {
            const range = { start: indent.length + start, end: indent.length + end };
            cellRanges.push(range);
            cells.push(lines[i].slice(range.start, range.end).trim());
        }
        rows.push({ lines: [cells], sourceLines: [{ lineIndex: i, cellRanges }] });
    }

    return finishTable(rows, ruleRows, from, to, indent);
}

/**
 * Pads every line out to the table's column count, so that later stages never have to
 * deal with ragged rows (which is what a half-typed edit looks like).
 * @param {TableRow[]} rows
 * @param {Map<number, number>} ruleRows
 * @param {number} from
 * @param {number} to
 * @param {string} indent
 * @returns {TableBlock}
 */
function finishTable(rows, ruleRows, from, to, indent) {
    let columnCount = 1;
    for (const row of rows) {
        for (const line of row.lines) {
            columnCount = Math.max(columnCount, line.length);
        }
    }
    for (const row of rows) {
        for (const line of row.lines) {
            while (line.length < columnCount) {
                line.push('');
            }
        }
    }
    return { type: 'table', firstLine: from, lineCount: to - from, indent, rows, ruleRows, columnCount };
}


// ---------------------------------------------------------------------------------------
// Cursor descriptors
// ---------------------------------------------------------------------------------------

/**
 * Where a cursor sits, expressed against the parsed structure rather than against raw text,
 * so that it survives the table being re-laid-out.
 *
 * @typedef {Object} CursorDescriptor
 * @property {'plain' | 'cell' | 'rule'} kind
 * @property {number} [lineIndex]      'plain'/'rule': the original line.
 * @property {number} [column]         'plain'/'rule': offset within that line.
 * @property {number} [blockIndex]     'cell'/'rule'.
 * @property {number} [rowsBefore]     'rule': how many rows precede the rule.
 * @property {number} [rowIndex]       'cell'.
 * @property {number} [lineInRow]      'cell'.
 * @property {number} [columnIndex]    'cell'.
 * @property {number} [offset]         'cell': string offset inside the cell's trimmed text.
 * @property {number} [padding]        'cell': how far past the text's end the cursor sat.
 *                                     This is what keeps a just-typed trailing space useful:
 *                                     the space itself is trimmed away, but the cursor stays
 *                                     one position further on, inside the cell's padding.
 */

/**
 * @param {number} blockIndex
 * @param {number} rowIndex
 * @param {number} lineInRow
 * @param {CellRange[]} cellRanges
 * @param {string[]} cells
 * @param {string} rawLine
 * @param {number} column
 * @returns {CursorDescriptor}
 */
function describeCellCursorAtColumn(blockIndex, rowIndex, lineInRow, cellRanges, cells, rawLine, column) {
    for (let columnIndex = 0; columnIndex < cellRanges.length; columnIndex++) {
        const { start, end } = cellRanges[columnIndex];
        // A cursor sitting exactly on a separator belongs to the cell that follows it.
        if (column > end && columnIndex < cellRanges.length - 1) {
            continue;
        }
        const raw = rawLine.slice(start, end);
        const leading = raw.length - raw.trimStart().length;
        const text = cells[columnIndex] ?? '';
        const rawOffset = Math.max(0, Math.min(column - start, raw.length));
        if (rawOffset <= leading) {
            return { kind: 'cell', blockIndex, rowIndex, lineInRow, columnIndex, offset: 0, padding: 0 };
        }
        if (rawOffset <= leading + text.length) {
            return { kind: 'cell', blockIndex, rowIndex, lineInRow, columnIndex, offset: rawOffset - leading, padding: 0 };
        }
        return {
            kind: 'cell', blockIndex, rowIndex, lineInRow, columnIndex,
            offset: text.length,
            padding: rawOffset - leading - text.length,
        };
    }
    return { kind: 'cell', blockIndex, rowIndex, lineInRow, columnIndex: 0, offset: 0, padding: 0 };
}

/**
 * @param {number[]} lineStarts
 * @param {number} position
 * @returns {number}
 */
function binarySearchLine(lineStarts, position) {
    let low = 0;
    let high = lineStarts.length - 1;
    while (low < high) {
        const middle = (low + high + 1) >> 1;
        if (lineStarts[middle] <= position) {
            low = middle;
        } else {
            high = middle - 1;
        }
    }
    return low;
}


// ---------------------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------------------

/**
 * Lays a parsed table out again.
 *
 * Every cell is start-aligned behind a single padding space; column widths fit the content -
 * one padding space either side of the widest cell, never less than two columns - and nothing
 * is ever re-wrapped, so a cell already split across lines stays split exactly where it was.
 *
 * @param {TableBlock} block
 * @param {number} blockIndex
 * @param {boolean} isRtl
 * @param {CursorDescriptor[]} descriptors
 * @param {number} outputFirstLine     Index the block's first line will have in the output.
 * @returns {{ lines: string[], resolve: (descriptor: CursorDescriptor) => { line: number, column: number } | null }}
 */
function renderTable(block, blockIndex, isRtl, descriptors, outputFirstLine) {
    const { rows, columnCount, indent } = block;

    // Every row is laid out the same way - there is no header row. A box table gives no way to
    // mark one, so treating the first row specially could not survive a round-trip anyway.

    // One padding space on each side of the widest cell, and never narrower than two columns.
    /** @type {number[]} */ const widths = new Array(columnCount).fill(2);
    for (const row of rows) {
        for (const line of row.lines) {
            for (let c = 0; c < columnCount; c++) {
                widths[c] = Math.max(widths[c], 2 + visualWidth(line[c]));
            }
        }
    }

    // Make room for a cursor that is sitting in a cell's padding - that is what lets the
    // user press space at the end of a cell and have the next character land after it.
    for (const descriptor of descriptors) {
        if (descriptor.kind !== 'cell' || descriptor.blockIndex !== blockIndex || !descriptor.padding) {
            continue;
        }
        const c = descriptor.columnIndex;
        const width = visualWidth(rows[descriptor.rowIndex].lines[descriptor.lineInRow][c]);
        widths[c] = Math.max(widths[c], 1 + width + descriptor.padding);
    }

    /** @type {string[]} */ const out = [];
    /** @type {Map<string, {line: number, column: number}>} */ const cellPositions = new Map();
    /** @type {number[]} */ const rulePositions = [];

    /** @param {'top' | 'middle' | 'bottom'} kind */
    const pushRule = (kind) => {
        let [left, right] = RULE_ENDS[kind];
        if (isRtl) {
            [left, right] = [right, left];
        }
        const junction = RULE_JUNCTIONS[kind];
        rulePositions.push(outputFirstLine + out.length);
        out.push(indent + left + widths.map((width) => HORIZONTAL.repeat(width)).join(junction) + right);
    };

    pushRule('top');
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (rowIndex > 0) {
            pushRule('middle');
        }
        const row = rows[rowIndex];
        for (let lineInRow = 0; lineInRow < row.lines.length; lineInRow++) {
            const cells = row.lines[lineInRow];
            let text = indent + VERTICAL;
            for (let c = 0; c < columnCount; c++) {
                text += ' ';
                cellPositions.set(`${rowIndex}:${lineInRow}:${c}`, {
                    line: outputFirstLine + out.length,
                    column: text.length,
                });
                text += cells[c] + ' '.repeat(widths[c] - 1 - visualWidth(cells[c])) + VERTICAL;
            }
            out.push(text);
        }
    }
    pushRule('bottom');

    return {
        lines: out,
        resolve: (descriptor) => {
            if (descriptor.blockIndex !== blockIndex) {
                return null;
            }
            if (descriptor.kind === 'rule') {
                // rulePositions[i] is the rule drawn before row i, and the last entry is the
                // bottom rule - the same indexing the descriptor's rowsBefore uses.
                const line = rulePositions[Math.min(descriptor.rowsBefore, rulePositions.length - 1)];
                return { line, column: Math.min(descriptor.column, out[line - outputFirstLine].length) };
            }
            if (descriptor.kind !== 'cell') {
                return null;
            }
            const anchor = cellPositions.get(`${descriptor.rowIndex}:${descriptor.lineInRow}:${descriptor.columnIndex}`);
            if (!anchor) {
                return null;
            }
            return { line: anchor.line, column: anchor.column + descriptor.offset + descriptor.padding };
        },
    };
}


// ---------------------------------------------------------------------------------------
// The entry point
// ---------------------------------------------------------------------------------------

/**
 * Rewrites every table in `content` into the canonical box format, aligned for `isRtl`,
 * and maps `positions` (absolute document offsets) onto the rewritten text.
 *
 * The function is idempotent: formatting already-formatted content returns it unchanged,
 * which is what lets the editor run it after every keystroke.
 *
 * @param {string} content
 * @param {boolean} isRtl
 * @param {number[]} [positions]
 * @returns {{ content: string, positions: number[] }}
 */
export function formatTables(content, isRtl, positions = []) {
    // Cheap bail-out for the overwhelming majority of documents and keystrokes.
    if (!content.includes(VERTICAL) && !content.includes('|')) {
        return { content, positions: positions.slice() };
    }

    const lines = content.split('\n');
    const blocks = parseBlocks(lines);
    if (!blocks.some((block) => block.type === 'table')) {
        return { content, positions: positions.slice() };
    }

    const lineStarts = computeLineStarts(lines);
    const descriptors = positions.map((position) =>
        describeCursorAt(blocks, lineStarts, lines, clamp(position, 0, content.length)));

    return renderDocument(lines, blocks, isRtl, descriptors);
}

/**
 * Renders a parsed document back to text, resolving each cursor descriptor as it goes.
 * @param {string[]} lines
 * @param {Block[]} blocks
 * @param {boolean} isRtl
 * @param {CursorDescriptor[]} descriptors
 * @returns {{ content: string, positions: number[] }}
 */
function renderDocument(lines, blocks, isRtl, descriptors) {
    /** @type {string[]} */ const out = [];
    /** @type {Map<number, number>} */ const plainLineMap = new Map();
    /** @type {((descriptor: CursorDescriptor) => {line: number, column: number} | null)[]} */
    const resolvers = [];

    for (let blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
        const block = blocks[blockIndex];
        if (block.type === 'plain') {
            for (let i = 0; i < block.lineCount; i++) {
                plainLineMap.set(block.firstLine + i, out.length);
                out.push(lines[block.firstLine + i]);
            }
            continue;
        }
        const rendered = renderTable(block, blockIndex, isRtl, descriptors, out.length);
        resolvers.push(rendered.resolve);
        out.push(...rendered.lines);
    }

    const content = out.join('\n');
    const outLineStarts = computeLineStarts(out);

    const positions = descriptors.map((descriptor) => {
        if (descriptor.kind === 'plain') {
            const line = plainLineMap.get(descriptor.lineIndex);
            if (line === undefined) {
                return clamp(descriptor.column, 0, content.length);
            }
            return outLineStarts[line] + Math.min(descriptor.column, out[line].length);
        }
        for (const resolve of resolvers) {
            const resolved = resolve(descriptor);
            if (resolved) {
                return clamp(outLineStarts[resolved.line] + resolved.column, 0, content.length);
            }
        }
        return 0;
    });

    return { content, positions };
}

/**
 * @param {string[]} lines
 * @returns {number[]}
 */
function computeLineStarts(lines) {
    const starts = new Array(lines.length);
    let offset = 0;
    for (let i = 0; i < lines.length; i++) {
        starts[i] = offset;
        offset += lines[i].length + 1;   // + the "\n"
    }
    return starts;
}

/** @param {number} value @param {number} low @param {number} high @returns {number} */
function clamp(value, low, high) {
    return Math.max(low, Math.min(value, high));
}

/**
 * @param {Block[]} blocks
 * @param {number[]} lineStarts
 * @param {string[]} lines
 * @param {number} position
 * @returns {CursorDescriptor}
 */
function describeCursorAt(blocks, lineStarts, lines, position) {
    const lineIndex = binarySearchLine(lineStarts, position);
    const column = position - lineStarts[lineIndex];

    for (let blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
        const block = blocks[blockIndex];
        if (block.type !== 'table' || lineIndex < block.firstLine || lineIndex >= block.firstLine + block.lineCount) {
            continue;
        }
        const rowsBefore = block.ruleRows.get(lineIndex);
        if (rowsBefore !== undefined) {
            return { kind: 'rule', blockIndex, rowsBefore, column };
        }
        for (let rowIndex = 0; rowIndex < block.rows.length; rowIndex++) {
            const row = block.rows[rowIndex];
            for (let lineInRow = 0; lineInRow < row.sourceLines.length; lineInRow++) {
                if (row.sourceLines[lineInRow].lineIndex !== lineIndex) {
                    continue;
                }
                return describeCellCursorAtColumn(
                    blockIndex, rowIndex, lineInRow,
                    row.sourceLines[lineInRow].cellRanges, row.lines[lineInRow],
                    lines[lineIndex], column);
            }
        }
        break;
    }

    return { kind: 'plain', lineIndex, column };
}


// ---------------------------------------------------------------------------------------
// Table-aware editing
// ---------------------------------------------------------------------------------------

/**
 * Applies a structural edit at the cursor, if the cursor is inside a table.
 *
 * These are the operations that plain text editing cannot express, because a cell spans
 * only part of a line:
 *
 *   'split'          Enter inside a cell breaks that *cell* in two, adding a line to the
 *                    row. The other cells of the row gain an empty line at that point.
 *   'addRow'         Cmd/Ctrl+Enter starts a whole new row below the current one. Any text
 *                    after the cursor moves into it, so at the end of a cell it is empty.
 *   'deleteForward'  Delete at the end of a cell's line joins it with the cell's next line.
 *   'deleteBackward' Backspace at the start of a cell's line joins it with the previous one.
 *
 * After a merge, a row whose last line has gone empty in *every* column loses that line -
 * which is what makes a split undo-able by a single Backspace.
 *
 * There are three outcomes, and the caller must tell them apart:
 *
 *   a changed document   the operation applied - dispatch it.
 *   null                 the operation does not apply here, so ordinary editing should happen
 *                        instead. Deleting a character from the middle of a cell is the common
 *                        case: it is a plain Delete/Backspace, and the auto-formatter realigns
 *                        the table afterwards. The cursor being outside any table lands here too.
 *   the same document    the keystroke would have damaged the grid - Backspace on the opening
 *                        "│", say - so it must be swallowed rather than passed on.
 *
 * @param {string} content
 * @param {boolean} isRtl
 * @param {number} position
 * @param {'split' | 'addRow' | 'deleteForward' | 'deleteBackward'} operation
 * @returns {{ content: string, positions: number[] } | null}
 */
export function editTableAtCursor(content, isRtl, position, operation) {
    const lines = content.split('\n');
    const blocks = parseBlocks(lines);
    if (!blocks.some((block) => block.type === 'table')) {
        return null;
    }

    const lineStarts = computeLineStarts(lines);
    const descriptor = describeCursorAt(blocks, lineStarts, lines, clamp(position, 0, content.length));
    if (descriptor.kind === 'plain') {
        return null;
    }
    // On a rule line there is nothing to split or join, and the default keystroke would
    // eat a box character - so absorb it.
    if (descriptor.kind !== 'cell') {
        return { content, positions: [position] };
    }

    const block = /** @type {TableBlock} */ (blocks[descriptor.blockIndex]);
    const row = block.rows[descriptor.rowIndex];
    const { lineInRow, columnIndex } = descriptor;
    const text = row.lines[lineInRow][columnIndex];

    /** @type {CursorDescriptor} */ let target;

    if (operation === 'split') {
        row.lines[lineInRow][columnIndex] = text.slice(0, descriptor.offset);
        const inserted = new Array(block.columnCount).fill('');
        inserted[columnIndex] = text.slice(descriptor.offset);
        row.lines.splice(lineInRow + 1, 0, inserted);
        target = { kind: 'cell', blockIndex: descriptor.blockIndex, rowIndex: descriptor.rowIndex,
                   lineInRow: lineInRow + 1, columnIndex, offset: 0, padding: 0 };

    } else if (operation === 'addRow') {
        row.lines[lineInRow][columnIndex] = text.slice(0, descriptor.offset);
        const started = new Array(block.columnCount).fill('');
        started[columnIndex] = text.slice(descriptor.offset);
        block.rows.splice(descriptor.rowIndex + 1, 0, { lines: [started], sourceLines: [] });
        target = { kind: 'cell', blockIndex: descriptor.blockIndex, rowIndex: descriptor.rowIndex + 1,
                   lineInRow: 0, columnIndex, offset: 0, padding: 0 };

    } else if (operation === 'deleteForward') {
        if (descriptor.offset !== text.length) {
            return null;    // in the middle of the text - an ordinary Delete, not a join
        }
        // "At the end of the cell" includes anywhere in its padding. With no line below to
        // join, the next character is the cell's "│", so the keystroke has to be absorbed.
        if (lineInRow + 1 >= row.lines.length) {
            return { content, positions: [position] };
        }
        row.lines[lineInRow][columnIndex] = text + row.lines[lineInRow + 1][columnIndex];
        shiftColumnUp(row, lineInRow + 1, columnIndex);
        target = { kind: 'cell', blockIndex: descriptor.blockIndex, rowIndex: descriptor.rowIndex,
                   lineInRow, columnIndex, offset: text.length, padding: 0 };

    } else {
        // Anywhere but the very start of the text - including its trailing padding, where a
        // Backspace usefully walks the cursor back towards the text - is an ordinary Backspace.
        if (descriptor.offset !== 0 || descriptor.padding !== 0) {
            return null;
        }
        // At the start, with no line above to join onto, the previous character is the cell's
        // padding or its "│", so the keystroke has to be absorbed.
        if (lineInRow === 0) {
            return { content, positions: [position] };
        }
        const previous = row.lines[lineInRow - 1][columnIndex];
        row.lines[lineInRow - 1][columnIndex] = previous + text;
        shiftColumnUp(row, lineInRow, columnIndex);
        target = { kind: 'cell', blockIndex: descriptor.blockIndex, rowIndex: descriptor.rowIndex,
                   lineInRow: lineInRow - 1, columnIndex, offset: previous.length, padding: 0 };
    }

    // A merge leaves a hole at the bottom of the column; if every other column is empty
    // there too, the row has simply lost a line.
    if ((operation === 'deleteForward' || operation === 'deleteBackward') && row.lines.length > 1
            && row.lines[row.lines.length - 1].every((cell) => cell === '')) {
        row.lines.pop();
    }

    return renderDocument(lines, blocks, isRtl, [target]);
}

/**
 * Moves one column's lines up by one from `fromLine`, leaving the last line empty.
 * Only this column moves - the rest of the row keeps its own line breaks.
 * @param {TableRow} row
 * @param {number} fromLine
 * @param {number} columnIndex
 */
function shiftColumnUp(row, fromLine, columnIndex) {
    for (let i = fromLine; i < row.lines.length - 1; i++) {
        row.lines[i][columnIndex] = row.lines[i + 1][columnIndex];
    }
    row.lines[row.lines.length - 1][columnIndex] = '';
}


/**
 * The smallest single replacement that turns `oldText` into `newText`, as a CodeMirror
 * change spec. Re-writing a whole document instead would invalidate every decoration and
 * every stored position on every keystroke, so the common prefix and suffix are kept.
 *
 * @param {string} oldText
 * @param {string} newText
 * @returns {{ from: number, to: number, insert: string }}
 */
export function minimalReplacement(oldText, newText) {
    const shortest = Math.min(oldText.length, newText.length);
    let from = 0;
    while (from < shortest && oldText[from] === newText[from]) {
        from++;
    }
    let oldEnd = oldText.length;
    let newEnd = newText.length;
    while (oldEnd > from && newEnd > from && oldText[oldEnd - 1] === newText[newEnd - 1]) {
        oldEnd--;
        newEnd--;
    }
    // Never cut a surrogate pair in half - the halves are not valid text on their own.
    if (isLowSurrogate(oldText[from]) || isLowSurrogate(newText[from])) {
        from--;
    }
    if (isLowSurrogate(oldText[oldEnd]) || isLowSurrogate(newText[newEnd])) {
        oldEnd++;
        newEnd++;
    }
    return { from, to: oldEnd, insert: newText.slice(from, newEnd) };
}

/** @param {string | undefined} character @returns {boolean} */
function isLowSurrogate(character) {
    if (character === undefined) {
        return false;
    }
    const code = character.charCodeAt(0);
    return code >= 0xdc00 && code <= 0xdfff;
}
