import {type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {PairSide} from "./letters-to-html-pair.ts";
import {LettersToHtml_PairSumDiff} from "./letters-to-html-pair-sum-diff.ts";

/**
 * Each column shows a single letter (N), advancing ONE letter at a time, and its
 * relation to the PREVIOUS letter (N-1):
 * - Their SUM on the UPPER bar (double-layer, full height)
 * - Their phase-GAP, getPhaseGapOfLetters(N, N-1), on the LOWER bar (single-layer, half height)
 * (Contrast with PairSumDiff, which combines the two letters sharing a column and
 * advances two letters at a time.)
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
     * at a time. The pair fed to the inherited sum/gap transform is
     * [current N, previous N-1] - mapped onto [FIRST_UPPER, SECOND_LOWER] - so the
     * upper bar shows the SUM and the lower bar shows getPhaseGapOfLetters(N, N-1).
     * The very first letter has no predecessor, so it renders with no bars.
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const current = this.allBibleLetterInfos[startLetterOffset];
        if (current) {
            const previous = this.allBibleLetterInfos[startLetterOffset - 1];
            const letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode | undefined] = [current, previous];
            const transformedNormalizedPair = this.transformLetterNormalized(letterInfos);
            const renormalized = this.renormalizeTransformedPair(letterInfos, transformedNormalizedPair);
            this.buildHtmlForSingleLetterTwoBars(letterInfos, renormalized, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }

    /**
     * Build a column showing a SINGLE letter (the current letter, on top) with an
     * upper bar (SUM) and a lower bar (phase-gap). The lower letter slot is left
     * blank so the column height matches the "both-sides" wrapper layout.
     */
    protected buildHtmlForSingleLetterTwoBars(
        letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode | undefined],
        normalizedValues: [number | undefined, number | undefined],
        htmlBuilder: string[],
    ) {
        const letterInfo = letterInfos[PairSide.FIRST_UPPER];  // the current letter (N)
        htmlBuilder.push(
            // Upper bar (SUM)
            `<div class="bible-column-bar bible-column-bar-upper"${this.barTitleAttribute(this.barTitle(PairSide.FIRST_UPPER, letterInfos))} style="--var-0-to-1: ${normalizedValues[PairSide.FIRST_UPPER]}" data-letter="${letterInfo.text}">`,
            ...(normalizedValues[PairSide.FIRST_UPPER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
            ]),
            `</div>`,
            // The single (current) letter on top; blank slot below - one letter per column.
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfo.text}">${letterInfo.text}</div>`,
            `<div class="bible-column-letter bible-column-letter-lower" data-letter="${letterInfo.text}">&nbsp;</div>`,
            // Lower bar (phase-gap) - single-layer, half height (see the hooks in PairSumDiff)
            `<div class="${this.lowerBarClasses()}"${this.barTitleAttribute(this.barTitle(PairSide.SECOND_LOWER, letterInfos))} style="--var-0-to-1: ${normalizedValues[PairSide.SECOND_LOWER]}" data-letter="${letterInfo.text}">`,
            ...this.lowerBarMarkersHtml(normalizedValues[PairSide.SECOND_LOWER]),
            `</div>`,
        );
    }
}
