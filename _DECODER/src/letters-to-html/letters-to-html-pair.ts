import {type Mode} from "../base/mode.ts";
import {LettersToHtml_Base} from "./letters-to-html-base.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";

export enum PairSide {
    FIRST_UPPER,    // visualized UPPER in the HTML column
    SECOND_LOWER,   // visualized LOWER in the HTML column
}
export const pairSideToString = ['FIRST_UPPER', 'SECOND_LOWER'];

/**
 * Each column shows a PAIR of letters (letter-1 and letter-2), with each letter's numeric-value visualized:
 * - Letter-1 on the UPPER bar
 * - Letter-2 on the LOWER bar
 */
export class LettersToHtml_Pair extends LettersToHtml_Base {
    readonly initialSkipCount: number;
    protected transformLetterNormalizedMin: [number, number];
    protected transformLetterNormalizedMax: [number, number];

    /** Each letter's own phase - the upper letter and the lower letter. */
    get topTitleHtml(): string {
        return 'φ φ';
    }

    constructor(
        options: {
            mode: Mode,
            initialSkipCount: number,
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
        this.initialSkipCount = options.initialSkipCount;
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
        startLetterOffset += this.initialSkipCount;
        const letterInfos: [BibleLetterInfoByMode, BibleLetterInfoByMode] = [
            this.allBibleLetterInfos[startLetterOffset],
            this.allBibleLetterInfos[startLetterOffset + 1],
        ];
        if (letterInfos[PairSide.FIRST_UPPER] && letterInfos[PairSide.SECOND_LOWER]) {
            const transformedNormalizedPair = this.transformLetterNormalized(letterInfos);
            const renormalized = this.renormalizeTransformedPair(letterInfos, transformedNormalizedPair);

            // Build the HTML.
            this.buildHtmlForPairOfLetters(letterInfos, renormalized, htmlBuilder);
        }
        return {handledLettersCount: 2};
    }

    /**
     * Re-normalize each transformed value of a pair into the 0..1 range expected
     * by the HTML/CSS, using this visualizer's per-side [min, max] bounds.
     * A side is left `undefined` when its letter (or its transformed value) is
     * missing - so callers that may lack one side (e.g. a missing predecessor)
     * can pass `undefined` safely.
     */
    protected renormalizeTransformedPair(
        letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined],
        transformedNormalizedPair: [number | undefined, number | undefined],
    ): [number | undefined, number | undefined] {
        const renormalized: [number | undefined, number | undefined] = [undefined, undefined];  // the CSS value - between 0 (min) and 1 (max)
        for (let pairSide = PairSide.FIRST_UPPER; pairSide <= PairSide.SECOND_LOWER; pairSide++) {
            // The letter's phase
            const phase = letterInfos[pairSide]?.phase;
            if (phase === undefined) {
                continue;
            }
            const transformedNormalized = transformedNormalizedPair[pairSide];
            if (transformedNormalized === undefined) {
                continue;
            }
            const min = this.transformLetterNormalizedMin[pairSide];
            const max = this.transformLetterNormalizedMax[pairSide];
            if (transformedNormalized < min) {
                throw new Error(`${this.constructor.name}: side "${pairSideToString[pairSide]}" (letter phase ${phase}) produced ${transformedNormalized} - which is lower than the minimum ${min}`);
            }
            if (transformedNormalized > max) {
                throw new Error(`${this.constructor.name}: side "${pairSideToString[pairSide]}" (letter phase ${phase}) produced ${transformedNormalized} - which is higher than the maximum ${max}`);
            }
            // Re-normalize the transformed value.
            renormalized[pairSide] = (transformedNormalized - min) / (max - min);
        }
        return renormalized;
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
            `<div class="${this.upperBarClasses()}"${this.barTitleAttribute(this.barTitle(PairSide.FIRST_UPPER, letterInfos))} style="--var-0-to-1: ${normalizedValues[PairSide.FIRST_UPPER]}" data-letter="${letterInfos[PairSide.FIRST_UPPER ].text}">`,
            ...this.upperBarMarkersHtml(normalizedValues[PairSide.FIRST_UPPER]),
            `</div>`,
            // The pair of letters
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfos[PairSide.FIRST_UPPER ].text}">${letterInfos[PairSide.FIRST_UPPER ].text}</div>`,
            `<div class="bible-column-letter bible-column-letter-lower" data-letter="${letterInfos[PairSide.SECOND_LOWER].text}">${letterInfos[PairSide.SECOND_LOWER].text}</div>`,
        );
        if (this.hasLowerBar()) {
            htmlBuilder.push(
                // Lower bar
                `<div class="${this.lowerBarClasses()}"${this.barTitleAttribute(this.barTitle(PairSide.SECOND_LOWER, letterInfos))} style="--var-0-to-1: ${normalizedValues[PairSide.SECOND_LOWER]}" data-letter="${letterInfos[PairSide.SECOND_LOWER].text}">`,
                ...this.lowerBarMarkersHtml(normalizedValues[PairSide.SECOND_LOWER]),
                `</div>`,
            );
        }
    }

    /**
     * Build a column showing a SINGLE letter with only an upper bar (no lower bar) - used by the
     * "simple" sum/diff visualizers, which advance one letter at a time. The upper bar reuses this
     * visualizer's own upper-bar hooks, so its style (double "sum" markers vs. single "diff" marker)
     * matches the corresponding pair visualizer.
     */
    protected buildHtmlForSingleLetterUpperBar(
        letterInfo: BibleLetterInfoByMode,
        normalizedValue: number | undefined,
        title: string | undefined,
        htmlBuilder: string[],
    ) {
        htmlBuilder.push(
            // Upper bar
            `<div class="${this.upperBarClasses()}"${this.barTitleAttribute(title)} style="--var-0-to-1: ${normalizedValue}" data-letter="${letterInfo.text}">`,
            ...this.upperBarMarkersHtml(normalizedValue),
            `</div>`,
            // The single letter
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfo.text}">${letterInfo.text}</div>`,
        );
    }

    /** Whether this visualizer renders a LOWER bar in addition to the upper bar. */
    protected hasLowerBar(): boolean {
        return true;
    }

    /** CSS classes for the UPPER bar's <div>. */
    protected upperBarClasses(): string {
        return 'bible-column-bar bible-column-bar-upper';
    }

    /** Marker <div>s inside the UPPER bar - two layers by default (the doubled "warp" visualization). */
    protected upperBarMarkersHtml(renormalizedValue: number | undefined): string[] {
        if (renormalizedValue === undefined) {
            return [];
        }
        return [
            `<div class="bible-column-marker bible-column-marker-2"></div>`,
            `<div class="bible-column-marker bible-column-marker-1"></div>`,
        ];
    }

    /** CSS classes for the LOWER bar's <div>. */
    protected lowerBarClasses(): string {
        return 'bible-column-bar bible-column-bar-lower';
    }

    /** Marker <div>s inside the LOWER bar - two layers by default (the doubled "warp" visualization). */
    protected lowerBarMarkersHtml(renormalizedValue: number | undefined): string[] {
        if (renormalizedValue === undefined) {
            return [];
        }
        return [
            `<div class="bible-column-marker bible-column-marker-1"></div>`,
            `<div class="bible-column-marker bible-column-marker-2"></div>`,
        ];
    }

    /**
     * Tooltip text for a bar: the phase of the letter on that side, as "Nφ".
     * undefined when that side has no letter value (space/hyphen/end-of-verse).
     * Overridden by sum/diff subclasses, where the bars show a relation between the two letters.
     */
    protected barTitle(pairSide: PairSide, letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): string | undefined {
        const numeric = letterInfos[pairSide]?.numeric;
        if (numeric === undefined) {
            return undefined;
        }
        return `${numeric - 1}φ`;
    }

    /**
     * Add HTML inside the <div class="bible-columns-wrapper">
     */
    protected addColumnsWrapperHtml(htmlBuilder: string[]): void {
        const partsColors = this.horizontalSplitPartsColors();
        function addParts(pairSide: PairSide): string[] {
            const htmlParts: string[] = [];
            for (let partIndex = 0; partIndex < partsColors[pairSide].length; partIndex++) {
                htmlParts.push(`<div class="bible-column-split" style="--var-0-to-1: ${partIndex / (partsColors[pairSide].length - 1)}; --var-color: ${partsColors[pairSide][partIndex]}"></div>`);
            }
            return htmlParts;
        }

        htmlBuilder.push(
            `<div class="bible-column">`,
                // Upper bar
                `<div class="${this.upperBarClasses()}" data-letter="SPLIT">`,
                ...addParts(PairSide.FIRST_UPPER),
                `</div>`,
                // The pair of letters
                `<div class="bible-column-letter bible-column-letter-upper" data-letter="SPLIT">&nbsp;</div>`,
                `<div class="bible-column-letter bible-column-letter-lower" data-letter="SPLIT">&nbsp;</div>`,
        );
        if (this.hasLowerBar()) {
            htmlBuilder.push(
                // Lower bar (matches the letter columns' lower-bar geometry)
                `<div class="${this.lowerBarClasses()}" data-letter="SPLIT">`,
                ...addParts(PairSide.SECOND_LOWER),
                `</div>`,
            );
        }
        htmlBuilder.push(
            `</div>`,
        );
    }

    /** Map the pair of letters to the [UPPER, LOWER] bar values. By default: each letter's own phase. */
    protected transformLetterNormalized(letterInfos: [BibleLetterInfoByMode | undefined, BibleLetterInfoByMode | undefined]): [number | undefined, number | undefined] {
        return [letterInfos[PairSide.FIRST_UPPER]?.phase, letterInfos[PairSide.SECOND_LOWER]?.phase];
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
