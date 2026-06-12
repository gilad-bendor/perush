import {type Mode} from "../base/mode.ts";
import {PairSide} from "./letters-to-html-pair.ts";
import {LettersToHtml_PairSum} from "./letters-to-html-pair-sum.ts";
import {SLOPE_MAX, SLOPE_MIN, subtract, sumPhases, sumSlopeTitle, sumTitle} from "./letters-to-html-sum-diff-common.ts";

/**
 * Each column shows a single letter (N), advancing ONE letter at a time, together with the SUM of its
 * phase and that of an earlier letter (N - previousLetterOffset), on the UPPER bar only.
 *
 * Two options tune what is shown (see the constructor):
 * - previousLetterOffset (p, default 1): pair N with N-p instead of N-1.
 * - doubleDiff (default false): show the "slope" of the sum - SUM(N,N-p) - SUM(N-p,N-2p).
 *
 * (Contrast with PairSum, which combines the two letters sharing a column and advances two letters
 * at a time; and with SimpleDiff, which shows the phase-GAP instead of the sum.)
 */
export class LettersToHtml_SimpleSum extends LettersToHtml_PairSum {
    /** Pair the current letter N with the letter `previousLetterOffset` positions earlier. */
    readonly previousLetterOffset: number;
    /** When true, the bar shows the slope SUM(N,N-p) - SUM(N-p,N-2p) instead of just SUM(N,N-p). */
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
            this.transformLetterNormalizedMin[PairSide.FIRST_UPPER] = SLOPE_MIN;
            this.transformLetterNormalizedMax[PairSide.FIRST_UPPER] = SLOPE_MAX;
        }
    }

    /**
     * One column = one letter (the current letter N), advancing a single letter at a time.
     * With p = previousLetterOffset, the upper bar relates N to N-p (and, when doubleDiff, also N-2p):
     * - UPPER = SUM, or its slope SUM(N,N-p) - SUM(N-p,N-2p).
     * The bar is omitted whenever any letter it needs is missing (e.g. near the start of the text).
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const current = this.allBibleLetterInfos[startLetterOffset];
        if (current) {
            const p = this.previousLetterOffset;
            const previous = this.allBibleLetterInfos[startLetterOffset - p];
            const earlier = this.allBibleLetterInfos[startLetterOffset - 2 * p];

            const value = this.doubleDiff
                ? subtract(sumPhases(current, previous), sumPhases(previous, earlier))
                : sumPhases(current, previous);
            const title = this.doubleDiff
                ? sumSlopeTitle(current, previous, earlier)
                : sumTitle(current, previous);

            const normalized = this.renormalizeTransformedPair([current, undefined], [value, undefined]);
            this.buildHtmlForSingleLetterUpperBar(current, normalized[PairSide.FIRST_UPPER], title, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }
}
