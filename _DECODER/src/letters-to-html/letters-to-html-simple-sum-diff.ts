import {type Mode} from "../base/mode.ts";
import {LettersToHtml_Simple} from "./letters-to-html-simple.ts";

/**
 * Like LettersToHtml_Simple - but the (single, upper) bar shows the SUM
 * of the current letter (N) and the PREVIOUS letter (N-1).
 *
 * Compare with LettersToHtml_PairSumDiff, which shows BOTH the sum (upper bar)
 * and the diff (lower bar) of the two letters within a column. Since
 * LettersToHtml_Simple has only an upper bar, only the sum survives here - and
 * the operand is the N-1 letter (the immediate predecessor) rather than the
 * in-column partner (which, advancing two letters at a time, sits N-2 apart
 * from the previous column's letter).
 */
export class LettersToHtml_SimpleSumDiff extends LettersToHtml_Simple {
    constructor(
        options: {
            mode: Mode,
        }
    ) {
        super({
            ...options,
            skipOneLetter: true,
            transformedNormalizedMin: 0,
            transformedNormalizedMax: 2,
        });
    }

    /** Transform a BibleLetterInfoByMode.normalized - SUM of letter N and letter N-1. */
    protected transformLetterNormalized(normalizedValue: number | undefined, letterOffset: number): number | undefined {
        const previous = this.allBibleLetterInfos[letterOffset - 1];
        if ((normalizedValue === undefined) || (previous?.normalized === undefined)) {
            return undefined;
        }
        return normalizedValue + previous.normalized;
    }
}
