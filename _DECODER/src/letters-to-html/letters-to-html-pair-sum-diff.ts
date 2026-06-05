import {HEBREW_LETTER_COUNT, type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {getPhaseGapOfLetters} from "../base/trend.ts";
import {LettersToHtml_Pair, PairSide} from "./letters-to-html-pair.ts";

/**
 * Each column shows a PAIR of letters (letter-1 and letter-2) and the relations between them:
 * - Their SUM on the UPPER bar (double-layer, full height)
 * - Their phase-GAP (getPhaseGapOfLetters) on the LOWER bar (single-layer, half height)
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
            lowerTransformedNormalizedMin: -0.5,  // phase-gap range is (-0.5, +0.5]
            lowerTransformedNormalizedMax: +0.5,
        });
    }

    /**
     * Map the pair of letters to the [UPPER, LOWER] bar values:
     * - UPPER = SUM of the two phases
     * - LOWER = the warped phase-gap from the first letter to the second (getPhaseGapOfLetters).
     *   The gap is already warp-aware, so the lower bar is rendered as a single layer (see the hooks below).
     */
    protected transformLetterNormalized(letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): [number | undefined, number | undefined] {
        const first = letterInfos[PairSide.FIRST_UPPER];
        const second = letterInfos[PairSide.SECOND_LOWER];
        if (!first || !second || (first.phase === undefined) || (second.phase === undefined)) {
            return [undefined, undefined];
        }
        return [
            first.phase + second.phase,           // UPPER bar: SUM
            getPhaseGapOfLetters(first, second),  // LOWER bar: warped phase-gap (first -> second)
        ];
    }

    /**
     * Tooltip text. Each number is tagged by kind - φ = phase, Σ = sum, Δ = phase-gap
     * (the "/22" denominator is implicit):
     *   upper (SUM)       -> "{a+b}Σ={a}φ+{b}φ"   (a = upper letter, b = lower letter)
     *   lower (phase-gap) -> "{gap}Δ"             (gap = getPhaseGapOfLetters, in 1/22 units)
     * undefined unless both letters have a value.
     */
    protected barTitle(pairSide: PairSide, letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): string | undefined {
        const first = letterInfos[PairSide.FIRST_UPPER];
        const second = letterInfos[PairSide.SECOND_LOWER];
        if (!first || !second || (first.numeric === undefined) || (second.numeric === undefined)) {
            return undefined;
        }
        if (pairSide === PairSide.FIRST_UPPER) {
            const a = first.numeric - 1;
            const b = second.numeric - 1;
            return `${a + b}Σ=${a}φ+${b}φ`;  // SUM
        }
        const gapSteps = Math.round(getPhaseGapOfLetters(first, second)! * HEBREW_LETTER_COUNT);
        return `${gapSteps}Δ`;  // warp-aware phase-gap
    }

    /** The lower bar is a single half-height layer (the phase-gap is already warp-aware - no doubling needed). */
    protected lowerBarClasses(): string {
        return 'bible-column-bar bible-column-bar-lower-single';
    }

    protected lowerBarMarkersHtml(renormalizedValue: number | undefined): string[] {
        return renormalizedValue === undefined
            ? []
            : [`<div class="bible-column-marker bible-column-marker-1"></div>`];
    }
}
