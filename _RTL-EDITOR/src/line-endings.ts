// A file's line endings, kept over an edit.
//
// The editor holds `\n` only - CodeMirror splits a document on `\r\n` as well, and joins it back
// with `\n` - so a CRLF file read as it is would differ from the editor's text on every poll, and
// be written back as LF on the first save. The GET handler therefore hands out `\n` text
// (toLf()), and the POST handler writes the line ending the file on disk already has
// (lineEndingOf() + withLineEnding()).

export type LineEnding = "\r\n" | "\n";

/** The text with every `\r\n` turned into `\n`. A lone `\r` is left as it is. */
export function toLf(text: string): string {
    return text.replace(/\r\n/g, "\n");
}

/**
 * The line ending a file is written with: `\r\n` when most of its line breaks are, `\n` otherwise.
 * A mixed file is thus normalised to its majority on the next save, and a tie - or a text with no
 * line break at all - goes to `\n`, the convention of everything else in the tree.
 */
export function lineEndingOf(text: string): LineEnding {
    const crlf = text.match(/\r\n/g)?.length ?? 0;
    const lf = (text.match(/\n/g)?.length ?? 0) - crlf;
    return crlf > lf ? "\r\n" : "\n";
}

/** `\n` text written with the given line ending. */
export function withLineEnding(lfText: string, lineEnding: LineEnding): string {
    return lineEnding === "\n" ? lfText : lfText.replace(/\n/g, "\r\n");
}
