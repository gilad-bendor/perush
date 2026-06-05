import {type Mode} from "../base/mode.ts";
import {LettersToHtml_Pair, PairSide} from "./letters-to-html-pair.ts";

/**
 * Each column shows a PAIR of letters (letter-1 and letter-2) and the relations between them:
 * - Their SUM  on the UPPER bar
 * - Their DIFF on the LOWER bar
 * The two letters share a column, so this advances TWO letters at a time.
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
