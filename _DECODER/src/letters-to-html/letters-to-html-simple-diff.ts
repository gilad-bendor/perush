import {type Mode} from "../base/mode.ts";
import {PairSide} from "./letters-to-html-pair.ts";
import {LettersToHtml_PairDiff} from "./letters-to-html-pair-diff.ts";
import {gapPhases, gapSlopeTitle, gapTitle, SLOPE_MAX, SLOPE_MIN, subtract} from "./letters-to-html-sum-diff-common.ts";

/**
 * Each column shows a single letter (N), advancing ONE letter at a time, together with the warp-aware
 * phase-GAP between it and an earlier letter (N - previousLetterOffset), on the UPPER bar only.
 *
 * Two options tune what is shown (see the constructor):
 * - previousLetterOffset (p, default 1): compare N with N-p instead of N-1.
 * - doubleDiff (default false): show the "slope" of the gap - GAP(N,N-p) - GAP(N-p,N-2p).
 *
 * (Contrast with PairDiff, which combines the two letters sharing a column and advances two letters
 * at a time; and with SimpleSum, which shows the SUM of the two phases instead of the gap.)
 */
export class LettersToHtml_SimpleDiff extends LettersToHtml_PairDiff {
    /** Compare the current letter N with the letter `previousLetterOffset` positions earlier. */
    readonly previousLetterOffset: number;
    /** When true, the bar shows the slope GAP(N,N-p) - GAP(N-p,N-2p) instead of just GAP(N,N-p). */
    readonly doubleDiff: boolean;

    /** Phase-GAP (or its slope, Δ′, when doubleDiff), between N and N-p. */
    get topTitleHtml(): string {
        return `${this.doubleDiff ? 'Δ′' : 'Δ'} · p=${this.previousLetterOffset}`;
    }

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
            this.transformLetterNormalizedMin[PairSide.FIRST_UPPER] = SLOPE_MIN;
            this.transformLetterNormalizedMax[PairSide.FIRST_UPPER] = SLOPE_MAX;
        }
    }

    /**
     * One column = one letter (the current letter N), advancing a single letter at a time.
     * With p = previousLetterOffset, the upper bar relates N to N-p (and, when doubleDiff, also N-2p):
     * - UPPER = phase-GAP, or its slope GAP(N,N-p) - GAP(N-p,N-2p).
     * The bar is omitted whenever any letter it needs is missing (e.g. near the start of the text).
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const current = this.allBibleLetterInfos[startLetterOffset];
        if (current) {
            const p = this.previousLetterOffset;
            const previous = this.allBibleLetterInfos[startLetterOffset - p];
            const earlier = this.allBibleLetterInfos[startLetterOffset - 2 * p];

            const value = this.doubleDiff
                ? subtract(gapPhases(current, previous), gapPhases(previous, earlier))
                : gapPhases(current, previous);
            const title = this.doubleDiff
                ? gapSlopeTitle(current, previous, earlier)
                : gapTitle(current, previous);

            const normalized = this.renormalizeTransformedPair([current, undefined], [value, undefined]);
            this.buildHtmlForSingleLetterUpperBar(current, normalized[PairSide.FIRST_UPPER], title, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }
}
