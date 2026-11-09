// Widths of text on the printed page, computed on the server - with no browser - from the font files the page is
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
import type { Measure, PageSettings } from "./layout-schema.ts";
import { PRINT_FONT_SIZE_PT, PRINT_MARGIN_INLINE_MM } from "./line-rows.ts";

export const FONTS_DIR = join(import.meta.dirname, "../../fonts");

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

// ------------------------------------------------------------------------------------------------
// Footnote references
//
// On paper a reference (`[^1]`) is a superscript box of a fixed width (md-to-html.ts, footnotes.ts): the PDF
// numbers the notes of every sheet from 1 (pdf-sheets.ts), and a number written into a box of its own width moves
// nothing - the trick the index's page numbers use. So a line's width on paper does not depend on the number.

/** A reference's size, relative to the text around it. */
export const FOOTNOTE_REF_SCALE = 0.75;

const round = (em: number) => Math.round(em * 1000) / 1000;

/**
 * The box a reference reserves on paper, in em of its own (smaller) size, on a right-to-left page - in the page's
 * fonts: room for two digits (no sheet has 99 notes), and for a further reference to a note on an earlier sheet,
 * `99 (עמ' 999)`. A little air after it, too. A left-to-right page is set in the machine's fonts, which these were
 * not measured in - it gets a fifth more.
 */
export const FOOTNOTE_REF_EM = {
    first: round(textWidthEm("99") + 0.1),
    again: round(textWidthEm("99 (עמ' 999)") + 0.1),
    firstLtr: round((textWidthEm("99") + 0.1) * 1.2),
    againLtr: round((textWidthEm("99 (p. 999)") + 0.1) * 1.2),
};

/** `[^label]` - a footnote reference, as Markdown writes it. */
const FOOTNOTE_REF = /\[\^([^\]\s]+)\]/g;

/**
 * A reference's width on paper, in em of the line: a note referred to more than once reserves the room of a
 * reference to an earlier sheet at every reference - its first included, which reserves less on paper (only its
 * further ones do), but a line is measured alone, and does not say which reference it holds.
 */
function footnoteRefWidthEm(label: string, repeated: ReadonlySet<string>): number {
    return (repeated.has(label) ? FOOTNOTE_REF_EM.again : FOOTNOTE_REF_EM.first) * FOOTNOTE_REF_SCALE;
}

/**
 * The width of a line's Markdown as the page sets it, in em: `**bold**` in the bold face, `*italic*` in
 * the italic one, whitespace collapsed and trimmed as a browser does. Code is set in the regular face -
 * a page's code is in another font, which lines of a translation hardly ever hold.
 */
export function markdownWidthEm(markdown: string, repeatedNotes: ReadonlySet<string> = new Set()): number {
    // A footnote reference is the box it is on paper, whatever its label.
    let references = 0;
    markdown = markdown.replace(FOOTNOTE_REF, (_, label: string) => {
        references += footnoteRefWidthEm(label, repeatedNotes);
        return "";
    });
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
    return pieces.reduce((sum, piece) => sum + textWidthEm(piece.text, piece.face), 0) + references;
}

const PX_PER_MM = 96 / 25.4;
const PX_PER_PT = 96 / 72;

/** A row fits when it leaves at least this much of itself - sub-pixel rounding is not to be trusted. */
export const ROW_SAFETY_PX = 1;

/**
 * Widths on the printed page at these settings, as the page's CSS sets them (md-to-html.ts, line-rows.ts) -
 * in CSS pixels. See layout-schema.ts's Measure.
 *
 * @param repeatedNotes  the labels of the notes the file refers to more than once - see footnoteRefWidthEm()
 */
export function measureAt(page?: PageSettings, repeatedNotes: ReadonlySet<string> = new Set()): Measure {
    const em = (page?.fontSize ?? PRINT_FONT_SIZE_PT) * PX_PER_PT;
    const column = (210 - 2 * (page?.marginInline ?? PRINT_MARGIN_INLINE_MM)) * PX_PER_MM;
    const ch = textWidthEm("0") * em;
    const widths = new Map<string, number>();
    return {
        text: markdown => {
            let width = widths.get(markdown);
            if (width === undefined) widths.set(markdown, width = markdownWidthEm(markdown, repeatedNotes) * em);
            return width;
        },
        // The margin: `--margin-width` - the widest note's characters × 1.1 ch - and 0.5 em beside it.
        row: notes => column - (Number((Math.max(0, ...notes.map(note => note.length)) * 1.1).toFixed(1)) * ch + 0.5 * em),
        separator: 1 + 0.65 * em,
        gap: textWidthEm(" ") * em,
        safety: ROW_SAFETY_PX,
    };
}
