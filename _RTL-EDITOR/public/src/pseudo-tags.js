// The pseudo-tags that have no closing tag - `<כלול-בהדפסה>`, the way HTML's own `<img>` has none.
//
// Plain ESM with no editor dependency, like tables.js and links.js, because both sides need the
// same answer: markdown-editor.js in the browser, where an opening tag that joined the stack and
// never left it would colour the rest of the file, and md-to-html.ts in Bun, where a tag with no
// closing line below it is plain text.
//
// Which tag names these are cannot be worked out from the text - `<img>` is void because the HTML
// spec says so, not because of how it is written - so this list is the definition.
const VOID_PSEUDO_TAGS = new Set(["כלול-בהדפסה"]);

/**
 * Is this pseudo-tag one that stands alone on its line, with no closing tag?
 *
 * @param {string} name  a tag's name, without the angle brackets or its attributes
 * @returns {boolean}
 */
export function isVoidPseudoTag(name) {
    return VOID_PSEUDO_TAGS.has(name);
}
