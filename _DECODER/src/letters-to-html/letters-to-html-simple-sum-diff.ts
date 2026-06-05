import {type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {PairSide} from "./letters-to-html-pair.ts";
import {LettersToHtml_PairSumDiff} from "./letters-to-html-pair-sum-diff.ts";

/**
 * Like LettersToHtml_PairSumDiff (upper bar = SUM, lower bar = DIFF, with BOTH
 * bars rendered) - but a "Simple"-style, single-letter-per-column visualization:
 * each column shows ONE letter (the current letter N) and advances one letter at
 * a time. The two bars relate that letter to its immediate predecessor:
 *   - upper bar = SUM  of letter N and letter N-1
 *   - lower bar = DIFF of letter N and letter N-1
 *
 * Contrast with LettersToHtml_PairSumDiff, whose sum/diff combine the two letters
 * that share a column (N and N+1), advancing two letters at a time. Here the
 * column's own letter (N) is combined with the *previous* column's letter (N-1).
 *
 * The sum/diff transform and its bounds (sum 0..2, diff -1..+1) are inherited
 * unchanged from LettersToHtml_PairSumDiff, with PairSide.FIRST_UPPER mapped to
 * the current letter N and PairSide.SECOND_LOWER to the previous letter N-1.
 */
export class LettersToHtml_SimpleSumDiff extends LettersToHtml_PairSumDiff {
    constructor(
        options: {
            mode: Mode,
        }
    ) {
        super({
            ...options,
            skipOneLetter: false,
        });
    }

    /**
     * One column = one letter (the current letter N), advancing a single letter
     * at a time. The pair fed to the inherited sum/diff transform is
     * [current N, previous N-1] - mapped onto [FIRST_UPPER, SECOND_LOWER] - so
     * the upper bar shows N+(N-1) and the lower bar shows N-(N-1).
     * The very first letter has no predecessor, so it renders with no bars.
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const current = this.allBibleLetterInfos[startLetterOffset];
        if (current) {
            const previous = this.allBibleLetterInfos[startLetterOffset - 1];
            const letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode | undefined] = [current, previous];
            const transformedNormalizedPair = this.transformLetterNormalized([
                current.normalized,
                previous?.normalized,
            ]);
            const renormalized = this.renormalizeTransformedPair(letterInfos, transformedNormalizedPair);
            this.buildHtmlForSingleLetterTwoBars(current, renormalized, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }

    /**
     * Build a column showing a SINGLE letter (the current letter, on top) with
     * both an upper bar (SUM) and a lower bar (DIFF). The lower letter slot is
     * left blank so the column height matches the "both-sides" wrapper layout.
     */
    protected buildHtmlForSingleLetterTwoBars(
        letterInfo: BibleLetterInfoByMode,
        normalizedValues: [number | undefined, number | undefined],
        htmlBuilder: string[],
    ) {
        htmlBuilder.push(
            // Upper bar (SUM)
            `<div class="bible-column-bar bible-column-bar-upper" style="--var-0-to-1: ${normalizedValues[PairSide.FIRST_UPPER]}" data-letter="${letterInfo.text}">`,
            ...(normalizedValues[PairSide.FIRST_UPPER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
            ]),
            `</div>`,
            // The single (current) letter on top; blank slot below - one letter per column.
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfo.text}">${letterInfo.text}</div>`,
            `<div class="bible-column-letter bible-column-letter-lower" data-letter="${letterInfo.text}">&nbsp;</div>`,
            // Lower bar (DIFF)
            `<div class="bible-column-bar bible-column-bar-lower" style="--var-0-to-1: ${normalizedValues[PairSide.SECOND_LOWER]}" data-letter="${letterInfo.text}">`,
            ...(normalizedValues[PairSide.SECOND_LOWER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
            ]),
            `</div>`,
        );
    }
}
