// A translation's numbered lines - what they are, and which of them run on.
//
// A translation of an ancient text is written a line of the tablet per line of the file, each opening
// with its number: `**1** כאשר אָנוּ הנעלה,`, `**2** מלך הָאֲנוּנָּכִּי,`. A tablet's line is often two
// words, so on the page consecutive numbered lines share printed rows (translation-layout.ts asks the
// editor for that - its `groups`). Which lines may share rows is decided here:
//
// - **A numbered line** opens with a bold label: a digit, no Hebrew or Arabic letter but for one right after
//   its last digit, at most 24 characters, then a space (isNumberLabel()).
// - **A run** is a stretch of numbered lines, one right below the other in one paragraph, whose numbering
//   goes on (continuesLabel()): `o iii 12` → `o iii 13`; a manuscript's extra line, a letter after the
//   number, `363` → `363א` → `364`; a range standing for its ends, `65` → `66–67` → `68`. A new column
//   (`A.i.30` → `A.ii.1`) or a gap breaks it. Only a run's lines share rows; a line in no run stands alone.
// - **A line's key** is its label, or `label#n` for the n-th line with that label - the numbering starts
//   over in every tablet. A layout names lines by it.
// - **A repeated passage** (echoesOf()): lines that repeat, word for word (or nearly - `"similar"`), an earlier passage of two lines or
//   more, in the same order.
//
// Pure, and imports nothing that runs but files of this folder: a layout module bundles it.

import type { LayoutFile } from "../../../_RTL-EDITOR/src/html/layout-schema";

/** A numbered line of the file: `**12** text`. */
export type NumberedLine = {
    /** The name a layout knows it by: its label, or `label#n` for the n-th line with that label. */
    readonly key: string;
    /** The bold text the line opens with: `12`, `A.i.5`, `363א`. */
    readonly label: string;
    /** The rest of the line, as Markdown - what is printed for it. */
    readonly text: string;
    /** Its 0-based line in the file. */
    readonly index: number;
    /** How many characters of it, after its indentation and `>` markers, are its label - `**12**` - the margin note. */
    readonly labelLength: number;
};

/**
 * A line number as a list of pieces - the numbers and what stands between them - which concatenate
 * back to the label: `A.i.5` → `["A.i.", "5"]`, `12 II 712x7` → `["12", " II ", "712", "x", "7"]`.
 */
export function labelPieces(label: string): string[] {
    return label.split(/(\d+)/).filter(piece => piece !== "");
}

/**
 * Whether `next` is the line right after `previous`: the same label, but for one number that went up
 * by exactly one. `o iii 12` → `o iii 13` is; `A.i.30` → `A.ii.1` (a new column), `12–14` → `15–17`
 * (a range that is not next) and `5` → `7` (a gap) are not - and those are just the places a reader should see a break.
 *
 * A letter after the number - Hebrew, or a lowercase Latin one - marks a line that only some manuscripts
 * have, read after the line of that number: `363` → `363א` → `363ב` → … → `364` is a run too, and so is
 * `E 78` → `E 78a` → `E 79`. A range is a line standing for several: `65` → `66–67` → `68`.
 */
export function continuesLabel(previous: string, next: string): boolean {
    const a = splitVariant(rangeEnds(previous)[1]);
    const b = splitVariant(rangeEnds(next)[0]);
    if (!a.letter && !b.letter) return numbersContinue(a.base, b.base);
    const letters = (a.letter ?? b.letter)!.match(/[a-z]/) ? LATIN_LETTERS : HEBREW_LETTERS;
    if (a.letter && b.letter) return a.base === b.base && letters.includes(b.letter) && letters.indexOf(b.letter) === letters.indexOf(a.letter) + 1;
    if (!a.letter && b.letter) return a.base === b.base && b.letter === letters[0];
    return numbersContinue(a.base, b.base);
}

const HEBREW_LETTERS = "אבגדהוזחטיכלמנסעפצקרשת";
const LATIN_LETTERS = "abcdefghijklmnopqrstuvwxyz";

/** `363ב` → `363` and `ב`, `E 78a` → `E 78` and `a`; a label with no such letter is all base. */
function splitVariant(label: string): { base: string, letter: string | null } {
    const match = /^(.*\d)([א-תa-z])$/.exec(label);
    return match ? { base: match[1], letter: match[2] } : { base: label, letter: null };
}

/** A range stands for its first line and its last: `E 66–67` → `E 66`, `E 67`. Any other label for both. */
function rangeEnds(label: string): [string, string] {
    const match = /^(.*?)(\d+)[–-](\d+)(\D*)$/.exec(label);
    if (!match || Number(match[3]) <= Number(match[2])) return [label, label];
    return [match[1] + match[2] + match[4], match[1] + match[3] + match[4]];
}

function numbersContinue(previous: string, next: string): boolean {
    const a = labelPieces(previous);
    const b = labelPieces(next);
    if (a.length !== b.length) return false;
    let differing = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) continue;
        if (++differing > 1) return false;
        if (!/^\d+$/.test(a[i]) || !/^\d+$/.test(b[i]) || Number(b[i]) !== Number(a[i]) + 1) return false;
    }
    return differing === 1;
}

/**
 * Whether the bold text a line opens with is a line number: short, holding a digit, and with no
 * Hebrew or Arabic letter - which is what tells `**A.i.5**` from `**1. הצבה פיזית**` or `**ת0.1**` -
 * but for one Hebrew letter right after its last digit, a manuscript's extra line: `**363א**`.
 */
export function isNumberLabel(text: string): boolean {
    const base = splitVariant(text).base;
    return text.length <= 24 && /\d/.test(base) && !/[֐-ࣿיִ-﷿ﹰ-﻿*]/.test(base);
}

/** A numbered line: its lead (indentation, a quotation's `>` markers), then its bold label, then a space. */
const LABELED_LINE = /^((?: {0,3}>)* {0,3} ?)\*\*([^*\n]+)\*\*(?=\s|$)/;

/** Whether a line is a code fence's opening or closing - `` ``` `` or `~~~`, three or more. */
const FENCE = /^ {0,3}(`{3,}|~{3,})/;

/** Every line of the file that opens with a line number - outside code fences. */
export function numberedLines(lines: readonly string[]): NumberedLine[] {
    const seen = new Map<string, number>();
    const result: NumberedLine[] = [];
    let fence: string | null = null;
    lines.forEach((line, index) => {
        const fenceMatch = FENCE.exec(line);
        if (fence) {
            if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null;
            return;
        }
        if (fenceMatch) {
            fence = fenceMatch[1];
            return;
        }
        const match = LABELED_LINE.exec(line);
        if (!match || !isNumberLabel(match[2])) return;
        const label = match[2];
        const occurrence = (seen.get(label) ?? 0) + 1;
        seen.set(label, occurrence);
        result.push({
            key: occurrence === 1 ? label : `${label}#${occurrence}`,
            label,
            text: line.slice(match[0].length).trim(),
            index,
            labelLength: match[0].length - match[1].length,
        });
    });
    return result;
}

/** The runs of the file: numbered lines one right below the other, in one paragraph, whose numbering goes on. */
export function runsOf(file: LayoutFile, lines: readonly NumberedLine[]): NumberedLine[][] {
    const paragraphOf = new Map<number, number>();
    file.paragraphs.forEach((paragraph, p) => {
        for (let index = paragraph.from; index <= paragraph.to; index++) paragraphOf.set(index, p);
    });
    const runs: NumberedLine[][] = [];
    let current: NumberedLine[] = [];
    lines.forEach((line, i) => {
        const previous = lines[i - 1];
        const together = previous && previous.index + 1 === line.index && paragraphOf.get(previous.index) !== undefined
            && paragraphOf.get(previous.index) === paragraphOf.get(line.index) && continuesLabel(previous.label, line.label);
        if (together) {
            current.push(line);
            return;
        }
        if (current.length > 1) runs.push(current);
        current = [line];
    });
    if (current.length > 1) runs.push(current);
    return runs;
}

/** A line's words, as a repetition is told by: no vowel points, punctuation, brackets or footnotes. */
function wordsOf(text: string): string {
    return text.replace(/\[\^[^\]]*\]/g, "").normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();
}

/**
 * Every line of a run that repeats an earlier line, as part of a passage: the line beside it in its run repeats
 * the line beside that one, in the same order - its key → the line it repeats, the first time the words were
 * said. A line alone that happens to recur - "ויאמר" - is no passage.
 *
 * `"exact"` (the default) takes a line to repeat another when their words are the same. `"similar"` also when
 * they are nearly so - a herald's orders said again with a letter or a name changed (`צוו, ויקראו הכרוזים` /
 * `[צו]ו, וקראו [הכרוזים]`, `את נמתר – בקשו את שערו` / `את אדד – בקשו את שערו`): when the letter pairs of the two
 * are mostly the same (lineSimilarity()), at least SIMILAR.
 */
export function echoesOf(runs: readonly (readonly NumberedLine[])[], match: "exact" | "similar" = "exact"): Map<string, NumberedLine> {
    if (match === "similar") return similarEchoes(runs);
    const repeats = exactRepeats(runs);
    const echoes = new Map<string, NumberedLine>();
    for (const run of runs) {
        for (let i = 0; i + 1 < run.length; i++) {
            const a = repeats.get(run[i]), b = repeats.get(run[i + 1]);
            if (!a || !b || b.index !== a.index + 1) continue;
            echoes.set(run[i].key, a);
            echoes.set(run[i + 1].key, b);
        }
    }
    return echoes;
}

/** Every line whose words were said before - the line → the first that said them. */
function exactRepeats(runs: readonly (readonly NumberedLine[])[]): Map<NumberedLine, NumberedLine> {
    const first = new Map<string, NumberedLine>();
    const repeats = new Map<NumberedLine, NumberedLine>();
    for (const run of runs) {
        for (const line of run) {
            const words = wordsOf(line.text);
            if (words.length < 3) continue;
            const earlier = first.get(words);
            if (earlier) repeats.set(line, earlier);
            else first.set(words, line);
        }
    }
    return repeats;
}

/** How alike two lines must be for `"similar"` (lineSimilarity()) - and one of a passage's two, CLOSE. */
export const SIMILAR = 0.6;
export const CLOSE = 0.75;

/** A line without an editor's `{note}` - `{נוסח אשורי}`, which says whose the line is, not what it says. */
const withoutNotes = (text: string) => text.replace(/\{[^}]*\}/g, "");

/** A line's letter pairs: its words' letters, two by two, within a word - an editor's `{note}` left out. */
function letterPairs(text: string): Set<string> {
    const pairs = new Set<string>();
    for (const word of wordsOf(withoutNotes(text)).split(" ")) {
        for (let i = 0; i + 1 < word.length; i++) pairs.add(word.slice(i, i + 2));
    }
    return pairs;
}

/** How alike two lines are, 0 to 1: the share of their letter pairs they have in common (Dice). */
export function lineSimilarity(a: string, b: string): number {
    return dice(letterPairs(a), letterPairs(b));
}

function dice(a: ReadonlySet<string>, b: ReadonlySet<string>): number {
    if (!a.size || !b.size) return 0;
    let shared = 0;
    for (const pair of a) if (b.has(pair)) shared++;
    return 2 * shared / (a.size + b.size);
}

/**
 * The repeated passages, nearly the same words allowed. Two neighbours of a run repeat two neighbours said
 * before when each is alike (SIMILAR) its counterpart, and one of them closely (CLOSE) - or is the same words
 * (`"exact"`'s test); a passage once begun goes on with the next pair of lines
 * where it can, and otherwise the earliest passage that fits is taken - the first time the words were said. The
 * earlier passage must end before the later begins.
 * A line of fewer than four letter pairs repeats nothing but the same words.
 */
function similarEchoes(runs: readonly (readonly NumberedLine[])[]): Map<string, NumberedLine> {
    const all = runs.flat();
    const pairs = all.map(line => letterPairs(line.text));
    const place = new Map(all.map((line, k) => [line, k]));
    const byIndex = new Map(all.map(line => [line.index, line]));
    const byPair = new Map<string, number[]>();
    const sameWords = new Map<string, number[]>();
    // alike[k]: the earlier lines alike line k, by their place in `all` → how alike (1 for the same words).
    const alike: Map<number, number>[] = all.map((line, k) => {
        const found = new Map<number, number>();
        const words = wordsOf(withoutNotes(line.text));
        if (words.length >= 3) {
            for (const o of sameWords.get(words) ?? []) found.set(o, 1);
            sameWords.set(words, [...sameWords.get(words) ?? [], k]);
        }
        if (pairs[k].size >= 4) {
            const shared = new Map<number, number>();
            for (const pair of pairs[k]) for (const o of byPair.get(pair) ?? []) shared.set(o, (shared.get(o) ?? 0) + 1);
            for (const [o, count] of shared) {
                const score = 2 * count / (pairs[k].size + pairs[o].size);
                if (score >= SIMILAR && !found.has(o)) found.set(o, score);
            }
            for (const pair of pairs[k]) {
                const ids = byPair.get(pair);
                if (ids) ids.push(k);
                else byPair.set(pair, [k]);
            }
        }
        return found;
    });
    const echoes = new Map<string, NumberedLine>();
    for (const run of runs) {
        for (let i = 0; i + 1 < run.length; i++) {
            const k = place.get(run[i])!, kNext = place.get(run[i + 1])!;
            const fits = (o: number) => {
                const after = byIndex.get(all[o].index + 1);
                // The earlier passage ends before this one begins: a litany is no repetition of itself.
                if (after === undefined || after.index >= run[i].index) return false;
                const first = alike[k].get(o), second = alike[kNext].get(place.get(after) ?? -1);
                return first !== undefined && second !== undefined && Math.max(first, second) >= CLOSE;
            };
            const going = echoes.get(run[i].key);
            const o = going && fits(place.get(going)!) ? place.get(going)! : [...alike[k].keys()].sort((x, y) => x - y).find(fits);
            if (o === undefined) continue;
            echoes.set(run[i].key, all[o]);
            echoes.set(run[i + 1].key, byIndex.get(all[o].index + 1)!);
        }
    }
    return echoes;
}
