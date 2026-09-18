// The pseudo-tags that have no closing tag - `<כלול-בהדפסה>`, the way HTML's own `<img>` has none.
//
// Plain ESM with no editor dependency, like tables.js and links.js, because both sides need the
// same answer: markdown-editor.js in the browser, where an opening tag that joined the stack and
// never left it would colour the rest of the file, and md-to-html.ts in Bun, where a tag with no
// closing line below it is plain text.
//
// Which tag names these are cannot be worked out from the text - `<img>` is void because the HTML
// spec says so, not because of how it is written - so this list is the definition.
/**
 * The tag that embeds another Markdown file into this one - void because it has no content of its
 * own to close over. What it *does* is src/html/includes.ts's business, and only the HTML mirror's:
 * the editor shows the line itself, as it shows every other pseudo-tag.
 */
export const INCLUDE_TAG_NAME = "כלול-בהדפסה";

/**
 * The tag that marks where the page's index of headings goes - void for the same reason, and like
 * the include tag it is the HTML mirror that acts on it (renderIndex() in src/html/md-to-html.ts),
 * while the editor shows the line itself. A file with no such line gets no index.
 */
export const INDEX_TAG_NAME = "תוכן-העניינים";

const VOID_PSEUDO_TAGS = new Set([INCLUDE_TAG_NAME, INDEX_TAG_NAME]);

/**
 * Is this pseudo-tag one that stands alone on its line, with no closing tag?
 *
 * @param {string} name  a tag's name, without the angle brackets or its attributes
 * @returns {boolean}
 */
export function isVoidPseudoTag(name) {
    return VOID_PSEUDO_TAGS.has(name);
}
