#!/usr/local/bin/node

// Give every recorded Claude session under "claude-sessions/" a descriptive title:
//     claude-sessions/YYYY-MM-DD--HH-MM-SS.script.rtl.md
//  -> claude-sessions/YYYY-MM-DD--HH-MM-SS--<title>.script.rtl.md
//
// Per file:
// 1. Render the recording exactly as the RTL editor shows it (the very same code -
//    renderScriptFileForEditor() in _RTL-EDITOR/src/terminal-render.ts).
// 2. Ask Claude-Haiku (through the "claude" cli) for a title, in the transcript's main language.
//    A session that was stopped before anything happened gets "SHOULD-PROBABLY-BE-DELETED",
//    and an answer that cannot be parsed gets "UNKNOWN".
// 3. Rename the file. If "_claude-output.script.rtl.md" (see scripts/claude-into-rtl-file.sh)
//    links to it, the link is re-pointed to the new name - the link itself is never renamed.
//
// Usage: name-claude-sessions.js [--max-sessions <max session-files to process>]
//
// Files are processed one at a time, in lexicographical (= chronological) order. The output is
// verbose: under a header per file, every line is prefixed by the section it belongs to:
//     CLAUDE-EXEC:          the full "claude" command
//     TRANSFORMED-SESSION:  the rendered session, as sent to Claude (i.e. after the trimming below)
//     TITLER-OUTPUT:        everything "claude" printed (stdout, then stderr)
//
// Files modified during the last minute are skipped - a session may still be recording into them
// (renaming such a file is harmless - "script" keeps writing into it - but its title would be premature).
// Files that already have a title do not match the name pattern, so re-running the script is safe.

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFile, execFileSync } = require('child_process');

const REPO_ROOT = path.dirname(__dirname);
const SESSIONS_DIR = path.join(REPO_ROOT, 'claude-sessions');
const OUTPUT_LINK = path.join(REPO_ROOT, '_claude-output.script.rtl.md');
const TERMINAL_RENDER = path.join(REPO_ROOT, '_RTL-EDITOR', 'src', 'terminal-render.ts');

const FILE_NAME_REGEXP = /^(\d{4}-\d{2}-\d{2}--\d{2}-\d{2}-\d{2})\.script\.rtl\.md$/;
const MIN_AGE_MS = 60 * 1000;
const MAX_CONTENT_LENGTH = 100 * 1000;
const MAX_TITLE_LENGTH = 80;

const USAGE = 'Usage: name-claude-sessions.js [--max-sessions <max session-files to process>]';

const SYSTEM_PROMPT = `You name transcripts of Claude Code sessions.
The user message is the visible text of one terminal session: the user's prompts (lines starting with "❯") and Claude's answers.
Reply with a single JSON object and nothing else: {"title": "..."}
- The title summarizes what the session was about, in 3-8 words.
- Write the title in the transcript's central language: Hebrew if the conversation is mainly in Hebrew, English otherwise.
- If the session looks "virgin" - no prompt at all, or a prompt that got no real answer (as if the session was stopped prematurely) - the title must be exactly "SHOULD-PROBABLY-BE-DELETED".`;

main().catch(error => {
    console.error(error);
    process.exit(1);
});

async function main() {
    // terminal-render.ts is imported as-is (Node strips its types); silence Node's
    // one-time notice that it had to guess the module's type.
    process.removeAllListeners('warning');
    process.on('warning', warning => warning.code === 'MODULE_TYPELESS_PACKAGE_JSON' || console.warn(warning));
    const { renderScriptFileForEditor } = await import(TERMINAL_RENDER);

    const maxSessions = parseArguments(process.argv.slice(2));

    const now = Date.now();
    const fileNames = fs.readdirSync(SESSIONS_DIR)
        .filter(fileName => FILE_NAME_REGEXP.test(fileName))
        .sort()
        .filter(fileName => {
            const isRecent = now - fs.statSync(path.join(SESSIONS_DIR, fileName)).mtimeMs < MIN_AGE_MS;
            if (isRecent) console.log(`Skipping (modified less than a minute ago): ${fileName}`);
            return !isRecent;
        })
        .slice(0, maxSessions);

    for (const [index, fileName] of fileNames.entries()) {
        printHeader(`[${index + 1}/${fileNames.length}]  ${fileName}`);
        try {
            await nameSession(fileName, renderScriptFileForEditor);
        } catch (error) {
            console.error(`Failed: ${fileName}: ${error.message}`);
        }
    }
}

/** The value of "--max-sessions" (Infinity when absent). */
function parseArguments(args) {
    let maxSessions = Infinity;
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--max-sessions' && /^\d+$/.test(args[i + 1] ?? '')) {
            maxSessions = Number(args[++i]);
        } else {
            console.error(USAGE);
            process.exit(1);
        }
    }
    return maxSessions;
}

function printHeader(text) {
    const line = '█'.repeat(100);
    // Bold, on the terminal's inverse colours.
    console.log(`\n\n\x1b[1m${line}\n${line}\n██\x1b[7m   ${text.padEnd(92)} \x1b[27m██\n${line}\n${line}\x1b[0m\n`);
}

/** Prints every line of `text` prefixed by `prefix`. */
function printSection(prefix, text) {
    console.log(text.replace(/\n$/, '').split('\n').map(line => `${prefix}: ${line}`).join('\n'));
}

async function nameSession(fileName, renderScriptFileForEditor) {
    const filePath = path.join(SESSIONS_DIR, fileName);
    const rendered = await renderScriptFileForEditor(fs.readFileSync(filePath, 'utf-8'));
    // The title can be deduced from the beginning of the session.
    const content = rendered.slice(0, MAX_CONTENT_LENGTH);
    printSection('TRANSFORMED-SESSION', content);

    const title = sanitizeTitle(parseTitle(await askHaiku(content))) || 'UNKNOWN';
    const newFileName = fileName.replace(FILE_NAME_REGEXP, `$1--${title}.script.rtl.md`);
    const newFilePath = path.join(SESSIONS_DIR, newFileName);
    if (fs.existsSync(newFilePath)) throw new Error(`"${newFileName}" already exists`);

    const how = renameFile(filePath, newFilePath);
    console.log(`${fileName}  ->  ${newFileName}  (${how})`);
    repointOutputLink(filePath, newFilePath);
}

/** Renames with "git mv" - so git sees a rename - and falls back to a plain rename (e.g. for an untracked file). */
function renameFile(oldFilePath, newFilePath) {
    try {
        execFileSync('git', ['mv', oldFilePath, newFilePath], { cwd: REPO_ROOT, stdio: 'pipe' });
        return 'git mv';
    } catch (error) {
        fs.renameSync(oldFilePath, newFilePath);
        return `plain rename - git mv failed: ${error.stderr?.toString().trim() || error.message}`;
    }
}

function askHaiku(content) {
    return new Promise((resolve, reject) => {
        const args = [
            '--print',
            '--model', 'haiku',
            '--system-prompt', SYSTEM_PROMPT,
            '--tools', '',
            '--strict-mcp-config',
            '--setting-sources', '',
            '--no-session-persistence',
        ];
        printSection('CLAUDE-EXEC', `cd ${os.tmpdir()} && claude ${args.map(shellQuote).join(' ')} < <TRANSFORMED-SESSION>`);
        const child = execFile('claude', args, {
            // Away from the repo, so that its CLAUDE.md is not loaded into the conversation.
            cwd: os.tmpdir(),
            maxBuffer: 10 * 1024 * 1024,
        }, (error, stdout, stderr) => {
            printSection('TITLER-OUTPUT', stdout + stderr);
            if (error) reject(new Error(`claude failed: ${stderr.trim() || error.message}`));
            else resolve(stdout);
        });
        child.stdin.end(content);
    });
}

function shellQuote(arg) {
    return /^[\w@%+=:,./-]+$/.test(arg) ? arg : `'${arg.replace(/'/g, `'\\''`)}'`;
}

/** The title from Haiku's `{"title": "..."}` answer (tolerating text around the JSON), or "" if there is none. */
function parseTitle(answer) {
    const json = answer.match(/\{[\s\S]*\}/);
    if (!json) return '';
    try {
        const { title } = JSON.parse(json[0]);
        return typeof title === 'string' ? title : '';
    } catch {
        return '';
    }
}

/** Every run of characters that are problematic in a file name (spaces, slashes, quotes, etc.) becomes a single "_". */
function sanitizeTitle(title) {
    return title
        .replace(/[^\p{L}\p{M}\p{N}-]+/gu, '_')
        .slice(0, MAX_TITLE_LENGTH)
        .replace(/^_+|_+$/g, '');
}

/** If "_claude-output.script.rtl.md" links to the renamed file - link it to the file's new name. */
function repointOutputLink(oldFilePath, newFilePath) {
    let target;
    try {
        target = fs.readlinkSync(OUTPUT_LINK);
    } catch {
        return; // No such link (or not a link).
    }
    if (path.resolve(REPO_ROOT, target) !== oldFilePath) return;

    // Create the new link aside and rename it over the old one, so the link never goes missing.
    const temporaryLink = `${OUTPUT_LINK}.tmp`;
    fs.rmSync(temporaryLink, { force: true });
    fs.symlinkSync(path.relative(REPO_ROOT, newFilePath), temporaryLink);
    fs.renameSync(temporaryLink, OUTPUT_LINK);
    console.log(`Re-pointed ${path.basename(OUTPUT_LINK)}  ->  ${path.relative(REPO_ROOT, newFilePath)}`);
}
