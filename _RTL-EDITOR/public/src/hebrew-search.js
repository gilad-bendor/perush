// A plain (non-RegExp) search that reads Hebrew the way a reader does - see hebrewSearchPattern().
// Plain ESM with no editor dependency, like tables.js, so it can be unit-tested under Bun.

/** A character the search skips over in the text: niqqud, cantillation, maqaf, sof pasuq, geresh/gershayim, varika. */
const SKIPPED = '[\\u0591-\\u05c7\\u05ef-\\u05f4\\ufb1e]';

const SHIN_DOT = '\u05c1';
const SIN_DOT = '\u05c2';

/**
 * Every way a letter can be written as one character: the letter itself, and its precomposed forms
 * (`שׁ` as the single U+FB2A, `בּ` as U+FB31, a wide `א` as U+FB21) - each with the marks it carries.
 * Found by decomposing U+FB1D..U+FB4F; the one ligature of two letters (U+FB4F) is left out.
 * @type {Map<string, {form: string, marks: string}[]>}
 */
const LETTER_FORMS = new Map();
for (let code = 0x05d0; code <= 0x05ea; code++) {
    LETTER_FORMS.set(String.fromCharCode(code), [{ form: String.fromCharCode(code), marks: '' }]);
}
for (let code = 0xfb1d; code <= 0xfb4f; code++) {
    const form = String.fromCharCode(code);
    const decomposed = form.normalize('NFKD');
    if (decomposed !== form && /^[א-ת]\p{Mn}*$/u.test(decomposed)) {
        LETTER_FORMS.get(decomposed[0])?.push({ form, marks: decomposed.slice(1) });
    }
}

/**
 * The RegExp source for a plain search for `query`, compiled with CodeMirror's flags (`u` among them).
 *
 * - Marks in the text are skipped: `נפש` finds `נַפְשֶׁךָ`, and `צהל` finds `צה״ל`.
 * - A mark typed in the query must be on that letter in the text - as a mark of its own or baked into a
 *   precomposed letter, in any order: `בּ` finds `בּ` and U+FB31, but not a plain `ב`.
 * - A shin is a shin unless it says otherwise: `ש` and `שׁ` find `ש` and `שׁ` but never `שׂ`, and `שׂ` finds
 *   `ש` and `שׂ` but never `שׁ`.
 * - With `looseWhitespace`, a run of whitespace matches any run of whitespace - `a b` finds `a` and `b`
 *   with a line break and an indentation between them, the way a terminal recording wraps a line.
 * - Anything else is matched as it is.
 * @param {string} query
 * @param {{looseWhitespace?: boolean}} [options]
 * @returns {string}
 */
export function hebrewSearchPattern(query, { looseWhitespace = false } = {}) {
    /** @type {{letter: string, marks: string} | null} */
    let unit = null;
    let pattern = '';
    const closeUnit = () => {
        if (unit) pattern += letterPattern(unit.letter, unit.marks);
        unit = null;
    };
    let inWhitespace = false;
    for (const char of query) {
        if (looseWhitespace && /^\s$/u.test(char)) {
            closeUnit();
            if (!inWhitespace) pattern += '\\s+';
            inWhitespace = true;
            continue;
        }
        inWhitespace = false;
        const decomposed = /[יִ-ﭏ]/.test(char) ? char.normalize('NFKD') : char;
        if (/^[א-ת]/.test(decomposed)) {
            closeUnit();
            unit = { letter: decomposed[0], marks: decomposed.slice(1) };
        } else if (/^\p{Mn}+$/u.test(decomposed)) {
            if (unit) unit.marks += decomposed;
        } else {
            closeUnit();
            pattern += decomposed.replace(/[\\^$.*+?()[\]{}|/]/g, '\\$&');
        }
    }
    closeUnit();
    return pattern;
}

/**
 * One letter of the query, with the marks typed on it, and whatever marks follow it in the text.
 * @param {string} letter
 * @param {string} marks
 */
function letterPattern(letter, marks) {
    // A shin's dot is not required but excluding: `שׁ` rules out a sin dot and `שׂ` a shin dot, while a dotless
    // `ש` rules out neither. A dotless shin in the text may be either, and is found by all three.
    const hasShinDot = marks.includes(SHIN_DOT), hasSinDot = marks.includes(SIN_DOT);
    const forbidden = letter !== 'ש' || hasShinDot === hasSinDot ? [] : hasShinDot ? [SIN_DOT] : [SHIN_DOT];
    const required = [...new Set(marks)].filter(mark => letter !== 'ש' || (mark !== SHIN_DOT && mark !== SIN_DOT));
    const alternatives = (LETTER_FORMS.get(letter) ?? [])
        .filter(({ marks }) => !forbidden.some(mark => marks.includes(mark)))
        .map(({ form, marks }) =>
            form
            + required.filter(mark => !marks.includes(mark)).map(mark => `(?=${SKIPPED}*${mark})`).join('')
            + (forbidden.length ? `(?!${SKIPPED}*[${forbidden.join('')}])` : ''));
    return `(?:${alternatives.join('|')})${SKIPPED}*`;
}
