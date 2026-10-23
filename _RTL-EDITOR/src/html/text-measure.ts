// Widths of text on the printed page, computed in Bun - with no browser - from the font files the page is
// printed in (fonts/, which every right-to-left page loads - RenderOptions.fonts in md-to-html.ts).
//
// Two fonts, so that no character is left to whatever the machine has: David CLM (Culmus), and for what
// it lacks - accented Latin (š, ā, ḫ), Greek, `§`, ⟨⟩, subscript digits - GNU FreeSerif, whose Latin is
// the same URW design as David CLM's. A page names them in that order, and a browser takes a character
// from the second only when the first has none; measuring does the same. Last of all comes FreeSerif's
// regular face for every weight and style (LAST_RESORT), as its bold and italic faces lack a few of its
// characters (⟨⟩) - the browser slants or thickens it itself.
//
// A layout module (layout-schema.ts) decides its rows while the page is being made, long before any
// browser has seen it, so it cannot ask one. It need not: a Hebrew line is a row of glyphs whose widths
// are in the font, and fontkit sets them as Chromium does - kerning and all, the vowel points taking no
// width. Checked against Chromium to a hundredth of a pixel; the layout tool's `check`, which measures in
// Chromium itself, is the last word. A character neither font has is given half an em.

import * as fontkit from "fontkit";
import MarkdownIt from "markdown-it";
import { join } from "path";

export const FONTS_DIR = join(import.meta.dir, "../../fonts");

/** The faces of the page's two fonts, by file - regular, bold, italic, bold italic. */
export const FONT_FACES = {
    regular: { main: "DavidCLM-Medium.otf", fallback: "FreeSerif.otf" },
    bold: { main: "DavidCLM-Bold.otf", fallback: "FreeSerifBold.otf" },
    italic: { main: "DavidCLM-MediumItalic.otf", fallback: "FreeSerifItalic.otf" },
    boldItalic: { main: "DavidCLM-BoldItalic.otf", fallback: "FreeSerifBoldItalic.otf" },
} as const;
export type FontFace = keyof typeof FONT_FACES;
export type FontRole = "main" | "fallback";

/** What the page's CSS calls the two fonts. */
export const FONT_FAMILIES: Record<FontRole, string> = { main: "Perush David", fallback: "Perush Serif" };

/** The font for a character neither face has - in any weight and style - and what the CSS calls it. */
export const LAST_RESORT = { file: "FreeSerif.otf", family: "Perush Serif Any" } as const;

/** Every file of fonts/ - the faces, and the fonts' licences, which ask to travel with them. */
export const FONT_FILES = [
    ...Object.values(FONT_FACES).flatMap(face => [face.main, face.fallback]),
    "Culmus-LICENSE", "Culmus-GNU-GPL", "FreeFont-README", "FreeFont-COPYING",
];

type Font = {
    unitsPerEm: number,
    hasGlyphForCodePoint(codePoint: number): boolean,
    layout(text: string): { advanceWidth: number, glyphs: { id: number }[] },
};

const fonts = new Map<string, Font>();
function font(file: string): Font {
    let loaded = fonts.get(file);
    if (!loaded) {
        loaded = fontkit.openSync(join(FONTS_DIR, file)) as unknown as Font;
        fonts.set(file, loaded);
    }
    return loaded;
}

/**
 * The width of `text` in one face, in em: each stretch in the font that has its characters - the main
 * one first, as a browser goes down the page's font list.
 */
export function textWidthEm(text: string, face: FontFace = "regular"): number {
    if (!text) return 0;
    const choices = [font(FONT_FACES[face].main), font(FONT_FACES[face].fallback), font(LAST_RESORT.file)];
    const pieces: { font: Font, text: string }[] = [];
    for (const character of text) {
        const codePoint = character.codePointAt(0)!;
        const chosen = choices.find(f => f.hasGlyphForCodePoint(codePoint)) ?? choices[0];
        const last = pieces[pieces.length - 1];
        if (last?.font === chosen) last.text += character;
        else pieces.push({ font: chosen, text: character });
    }
    let width = 0;
    for (const piece of pieces) {
        const run = piece.font.layout(piece.text);
        const missing = run.glyphs.filter(glyph => glyph.id === 0).length;
        width += run.advanceWidth / piece.font.unitsPerEm + missing * 0.5;
    }
    return width;
}

const inline = new MarkdownIt({ html: false, breaks: true, linkify: false, typographer: false });

/**
 * The width of a line's Markdown as the page sets it, in em: `**bold**` in the bold face, `*italic*` in
 * the italic one, whitespace collapsed and trimmed as a browser does. Code is set in the regular face -
 * a page's code is in another font, which lines of a translation hardly ever hold.
 */
export function markdownWidthEm(markdown: string): number {
    const pieces: { text: string, face: FontFace }[] = [];
    let bold = 0, italic = 0;
    const faceNow = (): FontFace => bold && italic ? "boldItalic" : bold ? "bold" : italic ? "italic" : "regular";
    for (const token of inline.parseInline(markdown, {})[0]?.children ?? []) {
        switch (token.type) {
            case "strong_open": bold++; break;
            case "strong_close": bold--; break;
            case "em_open": italic++; break;
            case "em_close": italic--; break;
            case "softbreak": case "hardbreak": pieces.push({ text: " ", face: faceNow() }); break;
            case "text": case "code_inline": pieces.push({ text: token.content, face: faceNow() }); break;
            case "image": pieces.push({ text: token.content, face: faceNow() }); break;
        }
    }
    // Collapse the whitespace across pieces, then trim the ends - the browser's white-space: normal.
    let previousSpace = true;
    for (const piece of pieces) {
        piece.text = piece.text.replace(/\s+/g, " ");
        if (previousSpace) piece.text = piece.text.replace(/^ /, "");
        if (piece.text) previousSpace = piece.text.endsWith(" ");
    }
    for (let i = pieces.length - 1; i >= 0; i--) {
        if (!pieces[i].text) continue;
        pieces[i].text = pieces[i].text.replace(/ $/, "");
        if (pieces[i].text) break;
    }
    return pieces.reduce((sum, piece) => sum + textWidthEm(piece.text, piece.face), 0);
}

const PX_PER_MM = 96 / 25.4;
const PX_PER_PT = 96 / 72;

/** The page geometry of a run of numbered lines, as verse-runs.ts's CSS makes it - in pixels. */
export type RunGeometry = {
    /** The font size. */
    em: number;
    /** What a row of the run may hold: the column less the margin its numbers stand in. */
    row: number;
    /** A line's separator: 1px and its margins of 0.45em and 0.2em. */
    separator: number;
    /** Between two lines of a row: the space the page has there (verse-runs.ts writes one). */
    gap: number;
};

/** A row fits when it leaves at least this much of itself - sub-pixel rounding is not to be trusted. */
export const ROW_SAFETY_PX = 1;

/**
 * @param widestLabel  the length of the longest number of the paragraph, which sets its margin
 *                     (`--label-width`, in verse-runs.ts)
 */
export function runGeometry(fontSizePt: number, marginInlineMm: number, widestLabel: number): RunGeometry {
    const em = fontSizePt * PX_PER_PT;
    const column = (210 - 2 * marginInlineMm) * PX_PER_MM;
    const ch = textWidthEm("0") * em;
    const labelWidth = Number((widestLabel * 1.1).toFixed(1)) * ch;
    return { em, row: column - (labelWidth + 0.5 * em), separator: 1 + 0.65 * em, gap: textWidthEm(" ") * em };
}
