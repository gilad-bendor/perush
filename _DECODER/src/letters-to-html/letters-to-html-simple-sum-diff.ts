import {HEBREW_LETTER_COUNT, type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {getPhaseGapOfLetters} from "../base/trend.ts";
import {PairSide} from "./letters-to-html-pair.ts";
import {LettersToHtml_PairSumDiff} from "./letters-to-html-pair-sum-diff.ts";

/**
 * Each column shows a single letter (N), advancing ONE letter at a time, together with
 * its relation to an earlier letter (N - previousLetterOffset):
 * - Their SUM on the UPPER bar (double-layer, full height)
 * - Their phase-GAP, getPhaseGapOfLetters(N, N-p), on the LOWER bar (single-layer, half height)
 *
 * Two options tune what is shown (see the constructor):
 * - previousLetterOffset (p, default 1): compare N with N-p instead of N-1.
 * - doubleDiff (default false): show the "slope" of each bar - the difference between
 *   consecutive values, F(N, N-p) - F(N-p, N-2p), where F is the SUM (upper) or the phase-GAP (lower).
 *
 * (Contrast with PairSumDiff, which combines the two letters sharing a column and
 * advances two letters at a time.)
 */
export class LettersToHtml_SimpleSumDiff extends LettersToHtml_PairSumDiff {
    /** Compare the current letter N with the letter `previousLetterOffset` positions earlier. */
    readonly previousLetterOffset: number;
    /** When true, each bar shows the slope F(N,N-p) - F(N-p,N-2p) instead of just F(N,N-p). */
    readonly doubleDiff: boolean;

    constructor(
        options: {
            mode: Mode,
            previousLetterOffset?: number,
            doubleDiff?: boolean,
        }
    ) {
        super({
            mode: options.mode,
            skipOneLetter: false,
        });
        this.previousLetterOffset = options.previousLetterOffset ?? 1;
        this.doubleDiff = options.doubleDiff ?? false;
        if (this.doubleDiff) {
            // Both slopes lie within ±21/22: the sum-slope telescopes to phase(N)-phase(N-2p),
            // and the gap-slope is a difference of two gaps each in [-10/22, +11/22].
            // So [-1, +1] bounds the upper (sum-slope) and lower (gap-slope) bars.
            this.transformLetterNormalizedMin = [-1, -1];
            this.transformLetterNormalizedMax = [+1, +1];
        }
    }

    /**
     * One column = one letter (the current letter N), advancing a single letter at a time.
     * With p = previousLetterOffset, the bars relate N to N-p (and, when doubleDiff, also to N-2p):
     * - UPPER = SUM,       or its slope SUM(N,N-p) - SUM(N-p,N-2p)
     * - LOWER = phase-GAP, or its slope GAP(N,N-p) - GAP(N-p,N-2p)
     * A bar is omitted whenever any letter it needs is missing (e.g. near the start of the text).
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const current = this.allBibleLetterInfos[startLetterOffset];
        if (current) {
            const p = this.previousLetterOffset;
            const previous = this.allBibleLetterInfos[startLetterOffset - p];
            const earlier = this.allBibleLetterInfos[startLetterOffset - 2 * p];

            let upper: number | undefined;
            let lower: number | undefined;
            if (!this.doubleDiff) {
                upper = this.sumPhases(current, previous);
                lower = this.gapPhases(current, previous);
            } else {
                upper = subtract(this.sumPhases(current, previous), this.sumPhases(previous, earlier));
                lower = subtract(this.gapPhases(current, previous), this.gapPhases(previous, earlier));
            }

            const renormalized = this.renormalizeTransformedPair([current, previous], [upper, lower]);
            const titles: [string | undefined, string | undefined] = [
                this.upperBarTitle(current, previous, earlier),
                this.lowerBarTitle(current, previous, earlier),
            ];
            this.buildHtmlForSingleLetterTwoBars(current, renormalized, titles, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }

    /** SUM of two letters' phases (turn units). undefined if either letter is missing. */
    private sumPhases(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
        if (!a || !b || (a.phase === undefined) || (b.phase === undefined)) {
            return undefined;
        }
        return a.phase + b.phase;
    }

    /** Phase-GAP between two letters (turn units). undefined if either letter is missing. */
    private gapPhases(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
        if (!a || !b || (a.numeric === undefined) || (b.numeric === undefined)) {
            return undefined;
        }
        return getPhaseGapOfLetters(a, b);
    }

    /**
     * Build a column showing a SINGLE letter (the current letter, on top) with an upper bar and a
     * lower bar. The lower letter slot is left blank so the column height matches the wrapper layout.
     */
    protected buildHtmlForSingleLetterTwoBars(
        letterInfo: BibleLetterInfoByMode,
        normalizedValues: [number | undefined, number | undefined],
        titles: [string | undefined, string | undefined],
        htmlBuilder: string[],
    ) {
        htmlBuilder.push(
            // Upper bar (SUM / sum-slope) - double-layer, full height
            `<div class="bible-column-bar bible-column-bar-upper"${this.barTitleAttribute(titles[PairSide.FIRST_UPPER])} style="--var-0-to-1: ${normalizedValues[PairSide.FIRST_UPPER]}" data-letter="${letterInfo.text}">`,
            ...(normalizedValues[PairSide.FIRST_UPPER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
            ]),
            `</div>`,
            // The single (current) letter on top; blank slot below - one letter per column.
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfo.text}">${letterInfo.text}</div>`,
            `<div class="bible-column-letter bible-column-letter-lower" data-letter="${letterInfo.text}">&nbsp;</div>`,
            // Lower bar (phase-gap / gap-slope) - single-layer, half height (see the hooks in PairSumDiff)
            `<div class="${this.lowerBarClasses()}"${this.barTitleAttribute(titles[PairSide.SECOND_LOWER])} style="--var-0-to-1: ${normalizedValues[PairSide.SECOND_LOWER]}" data-letter="${letterInfo.text}">`,
            ...this.lowerBarMarkersHtml(normalizedValues[PairSide.SECOND_LOWER]),
            `</div>`,
        );
    }

    /**
     * Tooltip for the UPPER (sum) bar. φ = phase, Σ = sum, Σ′ = slope-of-sum (the "/22" is implicit):
     *   plain      -> "{a+b}Σ={a}φ+{b}φ"
     *   doubleDiff -> "{s1-s2}Σ′={s1}Σ-{s2}Σ"
     */
    private upperBarTitle(n: BibleLetterInfoByMode | undefined, np: BibleLetterInfoByMode | undefined, n2p: BibleLetterInfoByMode | undefined): string | undefined {
        const a = phaseNumerator(n);
        const b = phaseNumerator(np);
        if ((a === undefined) || (b === undefined)) {
            return undefined;
        }
        if (!this.doubleDiff) {
            return `${a + b}Σ=${a}φ+${b}φ`;
        }
        const c = phaseNumerator(n2p);
        if (c === undefined) {
            return undefined;
        }
        const s1 = a + b;
        const s2 = b + c;
        return `${s1 - s2}Σ′=${s1}Σ-${s2}Σ`;
    }

    /**
     * Tooltip for the LOWER (phase-gap) bar. Δ = gap, Δ′ = slope-of-gap (the "/22" is implicit):
     *   plain      -> "{g}Δ"
     *   doubleDiff -> "{g1-g2}Δ′={g1}Δ-{g2}Δ"
     */
    private lowerBarTitle(n: BibleLetterInfoByMode | undefined, np: BibleLetterInfoByMode | undefined, n2p: BibleLetterInfoByMode | undefined): string | undefined {
        const g1 = gapNumerator(n, np);
        if (g1 === undefined) {
            return undefined;
        }
        if (!this.doubleDiff) {
            return `${g1}Δ`;
        }
        const g2 = gapNumerator(np, n2p);
        if (g2 === undefined) {
            return undefined;
        }
        return `${g1 - g2}Δ′=${g1}Δ-${g2}Δ`;
    }
}

/** Subtract two optional numbers - undefined if either is undefined. */
function subtract(x: number | undefined, y: number | undefined): number | undefined {
    return (x === undefined || y === undefined) ? undefined : x - y;
}

/** Phase numerator (numeric - 1, in 1/22 units) of a letter, or undefined. */
function phaseNumerator(letter: BibleLetterInfoByMode | undefined): number | undefined {
    return (letter?.numeric === undefined) ? undefined : letter.numeric - 1;
}

/** Phase-GAP numerator (in 1/22 units) between two letters, or undefined if either is missing. */
function gapNumerator(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
    if (!a || !b || (a.numeric === undefined) || (b.numeric === undefined)) {
        return undefined;
    }
    return Math.round(getPhaseGapOfLetters(a, b)! * HEBREW_LETTER_COUNT);
}
