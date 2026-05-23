import {Mode} from "../mode";
import {LettersToHtml_Pair, PairSide} from "./letters-to-html-pair";

/**
 * Like LettersToHtml_Pair - but:
 *   - upper = SUM
 *   - lower = DIFF
 */
export class LettersToHtml_PairSumDiff extends LettersToHtml_Pair {
    constructor(
        options: {
            mode: Mode,
            skipOneLetter: boolean,
        }
    ) {
        super({
            ...options,
            upperTransformedNormalizedMin: 0,
            upperTransformedNormalizedMax: 2,
            lowerTransformedNormalizedMin: -1,
            lowerTransformedNormalizedMax: +1,
        });
    }

    /** Transform a BibleLetterInfoByMode.normalized */
    protected transformLetterNormalized(normalizedValues: [number | undefined, number | undefined]): [number | undefined, number | undefined] {
        if ((normalizedValues[PairSide.FIRST_UPPER] === undefined) || (normalizedValues[PairSide.SECOND_LOWER] === undefined)) {
            return [undefined, undefined];
        }
        return [
            normalizedValues[PairSide.FIRST_UPPER] + normalizedValues[PairSide.SECOND_LOWER],
            normalizedValues[PairSide.FIRST_UPPER] - normalizedValues[PairSide.SECOND_LOWER],
        ];
    }
}
