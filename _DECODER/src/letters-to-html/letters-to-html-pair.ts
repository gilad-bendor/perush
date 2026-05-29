import {Mode} from "../base/mode";
import {LettersToHtml_Base} from "./letters-to-html-base";
import {BibleLetterInfoByMode} from "../base/bible-text";

export enum PairSide {
    FIRST_UPPER,    // visualized UPPER in the HTML column
    SECOND_LOWER,   // visualized LOWER in the HTML column
}
export const pairSideToString = ['FIRST_UPPER', 'SECOND_LOWER'];

/**
 * A pair of letters/space.
 */
export class LettersToHtml_Pair extends LettersToHtml_Base {
    readonly skipOneLetter: boolean;
    protected transformLetterNormalizedMin: [number, number];
    protected transformLetterNormalizedMax: [number, number];

    constructor(
        options: {
            mode: Mode,
            skipOneLetter: boolean,
        } & (
            {
            } | {
                transformedNormalizedMin: number, // for both upper and lower
                transformedNormalizedMax: number, // for both upper and lower
            } | {
                upperTransformedNormalizedMin: number,
                upperTransformedNormalizedMax: number,
                lowerTransformedNormalizedMin: number,
                lowerTransformedNormalizedMax: number,
            }
        )
    ) {
        super(options.mode);
        this.skipOneLetter = options.skipOneLetter;
        this.transformLetterNormalizedMin = [
            // @ts-ignore
            options.upperTransformedNormalizedMin ?? options.transformedNormalizedMin ?? 0,
            // @ts-ignore
            options.lowerTransformedNormalizedMin ?? options.transformedNormalizedMin ?? 0,
        ];
        this.transformLetterNormalizedMax = [
            // @ts-ignore
            options.upperTransformedNormalizedMax ?? options.transformedNormalizedMax ?? 1,
            // @ts-ignore
            options.lowerTransformedNormalizedMax ?? options.transformedNormalizedMax ?? 1,
        ];
    }

    /**
     * Given an offset into this.allBibleLetterInfos, use TWO letters:
     * - the first  is visualized UPPER in the HTML column
     * - the second is visualized LOWER in the HTML column
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        if (this.skipOneLetter) {
            startLetterOffset++;
        }
        const letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode] = [
            this.allBibleLetterInfos[startLetterOffset],
            this.allBibleLetterInfos[startLetterOffset + 1],
        ];
        if (letterInfos[PairSide.FIRST_UPPER] && letterInfos[PairSide.SECOND_LOWER]) {
            const transformedNormalizedPair = this.transformLetterNormalized([
                letterInfos[PairSide.FIRST_UPPER].normalized,
                letterInfos[PairSide.SECOND_LOWER].normalized,
            ]);
            const renormalized: [number | undefined, number | undefined] = [undefined, undefined];  // "normalized" is between 0 (min value) to 1 (max value)
            for (let pairSide = PairSide.FIRST_UPPER; pairSide <= PairSide.SECOND_LOWER; pairSide++) {
                // Transform the BibleLetterInfoByMode.normalized
                const normalized = letterInfos[pairSide].normalized;
                if (normalized !== undefined) {
                    const transformedNormalized = transformedNormalizedPair[pairSide];
                    if (transformedNormalized !== undefined) {
                        const min = this.transformLetterNormalizedMin[pairSide];
                        const max = this.transformLetterNormalizedMax[pairSide];
                        if (transformedNormalized < min) {
                            throw new Error(`${this.constructor.name}.transformLetterNormalized(${normalized}, "${pairSideToString[pairSide]}") returned ${transformedNormalized} - which is lower than the minimum ${min}`);
                        }
                        if (transformedNormalized > max) {
                            throw new Error(`${this.constructor.name}.transformLetterNormalized(${normalized}, "${pairSideToString[pairSide]}") returned ${transformedNormalized} - which is higher than the maximum ${max}`);
                        }
                        // Re-normalize the transformed value.
                        renormalized[pairSide] = (transformedNormalized - min) / (max - min);
                    }
                }
            }

            // Build the HTML.
            this.buildHtmlForPairOfLetters(letterInfos, renormalized, htmlBuilder);
        }
        return {handledLettersCount: 2};
    }

    /**
     * Build the "X" inside:
     *     <div class="bible-columns-wrapper" style="height: ...">
     *         <div class="bible-column" style="--var-index: ...">
     *             X
     *         </div>
     *     </div>
     */
    protected buildHtmlForPairOfLetters(
        letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode],
        normalizedValues: [number | undefined, number | undefined],
        htmlBuilder: string[],
    ) {
        htmlBuilder.push(
            // Upper bar
            `<div class="bible-column-pair-extension bible-column-pair-upper" style="--var-0-to-1: ${normalizedValues[PairSide.FIRST_UPPER]}" data-letter="${letterInfos[PairSide.FIRST_UPPER ].text}">`,
            ...(normalizedValues[PairSide.FIRST_UPPER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
            ]),
            `</div>`,
            // The pair of letters
            `<div class="bible-column-pair-letter bible-column-pair-first-letter"  data-letter="${letterInfos[PairSide.FIRST_UPPER ].text}">${letterInfos[PairSide.FIRST_UPPER ].text}</div>`,
            `<div class="bible-column-pair-letter bible-column-pair-second-letter" data-letter="${letterInfos[PairSide.SECOND_LOWER].text}">${letterInfos[PairSide.SECOND_LOWER].text}</div>`,
            // Lower bar
            `<div class="bible-column-pair-extension bible-column-pair-lower" style="--var-0-to-1: ${normalizedValues[PairSide.SECOND_LOWER]}" data-letter="${letterInfos[PairSide.SECOND_LOWER].text}">`,
            ...(normalizedValues[PairSide.SECOND_LOWER] === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
            ]),
            `</div>`,
        );
    }

    /**
     * Add HTML inside the <div class="bible-columns-wrapper">
     */
    protected addColumnsWrapperHtml(htmlBuilder: string[]): void {
        const partsColors = this.horizontalSplitPartsColors();
        function addParts(pairSide: PairSide): string[] {
            const htmlParts: string[] = [];
            for (let partIndex = 0; partIndex < partsColors[pairSide].length; partIndex++) {
                htmlParts.push(`<div class="bible-column-pair-split" style="--var-0-to-1: ${partIndex / (partsColors[pairSide].length - 1)}; --var-color: ${partsColors[pairSide][partIndex]}"></div>`);
            }
            return htmlParts;
        }

        htmlBuilder.push(
            `<div class="bible-column">`,
                // Upper bar
                `<div class="bible-column-pair-extension bible-column-pair-upper" data-letter="SPLIT">`,
                ...addParts(PairSide.FIRST_UPPER),
                `</div>`,
                // The pair of letters
                `<div class="bible-column-pair-letter bible-column-pair-first-letter"  data-letter="SPLIT">&nbsp;</div>`,
                `<div class="bible-column-pair-letter bible-column-pair-second-letter" data-letter="SPLIT">&nbsp;</div>`,
                // Lower bar
                `<div class="bible-column-pair-extension bible-column-pair-lower" data-letter="SPLIT">`,
                ...addParts(PairSide.SECOND_LOWER),
                `</div>`,
            `</div>`,
        );
    }

    /** Transform a BibleLetterInfoByMode.normalized */
    protected transformLetterNormalized(normalizedValues: [number | undefined, number | undefined]): [number | undefined, number | undefined] {
        return normalizedValues;
    }

    /**
     * Upper and lower halves are visually split to this many parts.
     * These are the CSS colors of the splits.
     */
    protected horizontalSplitPartsColors(): [string[], string[]] {
        return [
            ['#888', '#eee', '#ddd', '#eee', '#888'],
            ['#888', '#eee', '#ddd', '#eee', '#888'],
        ];
    }
}
