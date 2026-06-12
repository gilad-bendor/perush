import {type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {LettersToHtml_Pair, PairSide} from "./letters-to-html-pair.ts";
import {SUM_MAX, SUM_MIN, sumPhases, sumTitle} from "./letters-to-html-sum-diff-common.ts";

/**
 * Each column shows a PAIR of letters (letter-1 and letter-2) and their SUM on the UPPER bar only
 * (double-layer "warp" visualization, full height; no lower bar). The two letters share a column, so
 * this advances TWO letters at a time.
 *
 * (Contrast with PairDiff, which shows the warp-aware phase-GAP instead of the sum.)
 */
export class LettersToHtml_PairSum extends LettersToHtml_Pair {
    /** SUM of the pair's two phases. */
    get topTitleHtml(): string {
        return 'Σ = φ + φ';
    }

    constructor(
        options: {
            mode: Mode,
            initialSkipCount: number,
        }
    ) {
        super({
            ...options,
            upperTransformedNormalizedMin: SUM_MIN,
            upperTransformedNormalizedMax: SUM_MAX,
            lowerTransformedNormalizedMin: 0,  // unused - there is no lower bar
            lowerTransformedNormalizedMax: 1,
        });
    }

    /** UPPER bar = SUM of the two phases; no lower bar. */
    protected transformLetterNormalized(letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): [number | undefined, number | undefined] {
        return [sumPhases(letterInfos[PairSide.FIRST_UPPER], letterInfos[PairSide.SECOND_LOWER]), undefined];
    }

    /** UPPER tooltip: "{a+b}Σ={a}φ+{b}φ". */
    protected barTitle(pairSide: PairSide, letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): string | undefined {
        return sumTitle(letterInfos[PairSide.FIRST_UPPER], letterInfos[PairSide.SECOND_LOWER]);
    }

    /** Only an upper bar (no lower bar). */
    protected hasLowerBar(): boolean {
        return false;
    }

    protected wrapperVariantClass(): string {
        return 'bible-columns-wrapper-only-upper';
    }
}
