import {type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {LettersToHtml_Pair, PairSide} from "./letters-to-html-pair.ts";
import {GAP_MAX, GAP_MIN, gapPhases, gapTitle, singleMarkerHtml} from "./letters-to-html-sum-diff-common.ts";

/**
 * Each column shows a PAIR of letters (letter-1 and letter-2) and their warp-aware phase-GAP on the
 * UPPER bar only (single marker, full height; no lower bar). The two letters share a column, so this
 * advances TWO letters at a time.
 *
 * (Contrast with PairSum, which shows the SUM of the two phases instead of the gap.)
 */
export class LettersToHtml_PairDiff extends LettersToHtml_Pair {
    /** Warp-aware phase-GAP between the pair's two letters. */
    get topTitleHtml(): string {
        return 'Δ';
    }

    constructor(
        options: {
            mode: Mode,
            initialSkipCount: number,
        }
    ) {
        super({
            ...options,
            upperTransformedNormalizedMin: GAP_MIN,
            upperTransformedNormalizedMax: GAP_MAX,
            lowerTransformedNormalizedMin: 0,  // unused - there is no lower bar
            lowerTransformedNormalizedMax: 1,
        });
    }

    /** UPPER bar = warp-aware phase-GAP (first -> second); no lower bar. */
    protected transformLetterNormalized(letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): [number | undefined, number | undefined] {
        return [gapPhases(letterInfos[PairSide.FIRST_UPPER], letterInfos[PairSide.SECOND_LOWER]), undefined];
    }

    /** UPPER tooltip: "{gap}Δ". */
    protected barTitle(pairSide: PairSide, letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): string | undefined {
        return gapTitle(letterInfos[PairSide.FIRST_UPPER], letterInfos[PairSide.SECOND_LOWER]);
    }

    /** The phase-gap is already warp-aware, so the upper bar is a single marker (no doubling). */
    protected upperBarMarkersHtml(renormalizedValue: number | undefined): string[] {
        return singleMarkerHtml(renormalizedValue);
    }

    protected upperBarClasses(): string {
        return 'bible-column-bar bible-column-bar-upper-single';
    }

    /** Only an upper bar (no lower bar). */
    protected hasLowerBar(): boolean {
        return false;
    }

    protected wrapperVariantClass(): string {
        return 'bible-columns-wrapper-only-upper';
    }
}
