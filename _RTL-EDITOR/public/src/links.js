// Markdown links - the parsing behind Cmd+click-to-open in the editor.
//
// Plain ESM with no editor dependency, like tables.js, so that it can be unit-tested on its own
// (tests/links.test.ts) rather than only through the browser.

// A [text](target) link. The target may contain one level of nested parentheses, because a file
// name is allowed to hold a pair of them; an unbalanced "(" simply ends the match early.
const LINK_REGEXP = /\[([^\]\n]*)]\(([^()\n]*(?:\([^()\n]*\)[^()\n]*)*)\)/g;

// A target that is not a path at all: a scheme ("https:", "mailto:") or a protocol-relative URL.
const EXTERNAL_TARGET_REGEXP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * Every [text](target) link in a single line of text.
 *
 * @param {string} lineText
 * @returns {{ from: number, to: number, text: string, rawTarget: string }[]}
 *          `from`/`to` are offsets within the line, and span the whole "[...](...)" construct.
 */
export function markdownLinksInLine(lineText) {
    /** @type {{ from: number, to: number, text: string, rawTarget: string }[]} */
    const links = [];
    LINK_REGEXP.lastIndex = 0;
    let match;
    while ((match = LINK_REGEXP.exec(lineText))) {
        links.push({
            from: match.index,
            to: match.index + match[0].length,
            text: match[1],
            rawTarget: match[2],
        });
    }
    return links;
}

/**
 * The link covering `offsetInLine`, if there is one.
 *
 * The end offset is excluded: a click in the empty space of a line lands on the line's start or end
 * offset (in an RTL line, either can be the *left* edge), and should not count as a click on a link
 * that happens to sit there.
 *
 * @param {string} lineText
 * @param {number} offsetInLine
 * @returns {{ from: number, to: number, text: string, rawTarget: string } | null}
 */
export function markdownLinkAt(lineText, offsetInLine) {
    return markdownLinksInLine(lineText)
        .find(link => offsetInLine >= link.from && offsetInLine < link.to) ?? null;
}

/**
 * The path a link points at, resolved against the file that holds it.
 *
 * A path is relative to the linking file's own directory (or, if it starts with "/", to the root of
 * the served tree - which is what the file tree and the /api/file paths are relative to as well).
 * Anything that is not a path within that tree - an http(s) address, a "../" that climbs out of the
 * root - is reported as such rather than turned into a file path.
 *
 * A "#somewhere" names a heading - of the linking file itself when it stands alone, of the file
 * before it otherwise - and comes back as `anchor`, decoded; headingLineOfAnchor() finds it.
 *
 * @param {string} fromFilePath  the file the link was clicked in, as the server names it
 * @param {string} rawTarget     the text between the link's parentheses
 * @returns {{ kind: 'file', path: string, anchor?: string } | { kind: 'external', url: string } | null}
 */
export function resolveMarkdownLink(fromFilePath, rawTarget) {
    let target = rawTarget.trim();

    // "<a path with spaces>", optionally followed by a title.
    if (target.startsWith('<')) {
        const end = target.indexOf('>');
        if (end < 0) return null;
        target = target.slice(1, end).trim();
    } else {
        // A title after the path:  path "title"  /  path 'title'  /  path (title)
        const withTitle = target.match(/^(\S+)\s+["'(]/);
        if (withTitle) target = withTitle[1];
    }

    if (!target) return null;
    if (EXTERNAL_TARGET_REGEXP.test(target)) return { kind: 'external', url: target };

    // "#somewhere" points inside the current file; "file.md#somewhere" at a place in another one.
    const hash = target.indexOf('#');
    const anchor = hash >= 0 ? decodeTarget(target.slice(hash + 1)) : '';
    if (hash >= 0) target = target.slice(0, hash);
    if (!target) return anchor ? { kind: 'file', path: fromFilePath, anchor } : null;
    target = decodeTarget(target);

    // "dir/", "." and ".." name a directory, and there is no tab to open for one.
    if (target.endsWith('/') || /(^|\/)\.\.?$/.test(target)) return null;

    const segments = target.startsWith('/') ? [] : fromFilePath.split('/').slice(0, -1);
    for (const segment of target.split('/')) {
        if (segment === '' || segment === '.') continue;
        if (segment === '..') {
            if (!segments.length) return null;       // climbs out of the served tree
            segments.pop();
            continue;
        }
        segments.push(segment);
    }
    if (!segments.length) return null;
    return anchor ? { kind: 'file', path: segments.join('/'), anchor } : { kind: 'file', path: segments.join('/') };
}

/** A link target's %-escapes decoded - or the target as it was written, if a stray "%" is not one. */
function decodeTarget(target) {
    try {
        return decodeURIComponent(target);
    } catch {
        return target;
    }
}

/**
 * A heading's id: its words joined by a single "-", with the punctuation and niqqud gone.
 *
 * This is the id the HTML mirror gives the heading (md-to-html.ts calls it too), and so the anchor
 * a link to it is written with.
 *
 * @param {string} text  the heading's text, its Markdown syntax already gone
 * @returns {string}
 */
export function headingSlug(text) {
    return text
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .replace(/[^\p{L}\p{N}\s_-]/gu, "")
        .trim()
        .replace(/[\s-]+/g, "-")
        .toLowerCase();
}

/**
 * The 0-based line of the heading an "#anchor" names, or -1 if none does.
 *
 * Headings get the ids the HTML mirror gives them - "-2", "-3" for repeats included. An anchor is
 * first looked up exactly, and then loosely, with runs of "-" squeezed and niqqud and punctuation
 * ignored: an anchor written by another tool (GitHub turns "א — ב" into "א--ב") still finds its
 * heading. Only ATX headings ("## x") outside a code fence are seen.
 *
 * @param {string} text    the whole file
 * @param {string} anchor  the anchor, without its "#" and already decoded
 * @returns {number}
 */
export function headingLineOfAnchor(text, anchor) {
    /** @type {{ line: number, id: string }[]} */
    const headings = [];
    const usedIds = new Set();
    let fence = null;
    text.split('\n').forEach((line, index) => {
        const fenceMatch = line.match(/^ {0,3}(`{3,}|~{3,})/);
        if (fenceMatch) {
            if (!fence) fence = fenceMatch[1];
            else if (fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null;
            return;
        }
        if (fence) return;
        const heading = line.match(/^ {0,3}#{1,6}(?:\s+(.*?))?(?:\s+#+)?\s*$/);
        if (!heading) return;
        const plain = (heading[1] ?? '').replace(/!?\[([^\]\n]*)]\([^)\n]*\)/g, '$1');
        const base = headingSlug(plain) || 'section';
        let id = base;
        for (let n = 2; usedIds.has(id); n++) id = `${base}-${n}`;
        usedIds.add(id);
        headings.push({ line: index, id });
    });

    const exact = headings.find(heading => heading.id === anchor);
    if (exact) return exact.line;
    const loose = headingSlug(anchor);
    return headings.find(heading => headingSlug(heading.id) === loose)?.line ?? -1;
}
