import {type Mode} from "../base/mode.ts";
import {LettersToHtml_Base} from "./letters-to-html-base.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";

/**
 * Each column shows a single letter, with its numeric-value visualized on the UPPER bar (no lower bar).
 */
export class LettersToHtml_Simple extends LettersToHtml_Base {
    protected transformLetterNormalizedMin: number;
    protected transformLetterNormalizedMax: number;

    constructor(
        options: {
            mode: Mode,
        } & (
            {
            } | {
                transformedNormalizedMin: number,
                transformedNormalizedMax: number,
            }
        )
    ) {
        super(options.mode);
        // @ts-ignore
        this.transformLetterNormalizedMin = options.transformedNormalizedMin ?? 0;
        // @ts-ignore
        this.transformLetterNormalizedMax = options.transformedNormalizedMax ?? 1;
    }

    /**
     * Given an offset into this.allBibleLetterInfos, use a SINGLE letter,
     * visualized with an UPPER bar in the HTML column.
     */
    buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number } {
        const letterInfo: BibleLetterInfoByMode = this.allBibleLetterInfos[startLetterOffset];
        if (letterInfo) {
            let renormalized: number | undefined = undefined;  // the CSS value - between 0 (min) and 1 (max)
            // Transform the letter's phase
            const phase = letterInfo.phase;
            if (phase !== undefined) {
                const transformedNormalized = this.transformLetterNormalized(phase, startLetterOffset);
                if (transformedNormalized !== undefined) {
                    const min = this.transformLetterNormalizedMin;
                    const max = this.transformLetterNormalizedMax;
                    if (transformedNormalized < min) {
                        throw new Error(`${this.constructor.name}.transformLetterNormalized(${phase}) returned ${transformedNormalized} - which is lower than the minimum ${min}`);
                    }
                    if (transformedNormalized > max) {
                        throw new Error(`${this.constructor.name}.transformLetterNormalized(${phase}) returned ${transformedNormalized} - which is higher than the maximum ${max}`);
                    }
                    // Re-normalize the transformed value.
                    renormalized = (transformedNormalized - min) / (max - min);
                }
            }

            // Build the HTML.
            this.buildHtmlForLetter(letterInfo, renormalized, htmlBuilder);
        }
        return {handledLettersCount: 1};
    }

    /**
     * Build the "X" inside:
     *     <div class="bible-columns-wrapper" style="height: ...">
     *         <div class="bible-column" style="--var-index: ...">
     *             X
     *         </div>
     *     </div>
     */
    protected buildHtmlForLetter(
        letterInfo: BibleLetterInfoByMode,
        normalizedValue: number | undefined,
        htmlBuilder: string[],
    ) {
        htmlBuilder.push(
            // Upper bar
            `<div class="bible-column-bar bible-column-bar-upper"${this.barTitleAttribute(this.barTitle(letterInfo))} style="--var-0-to-1: ${normalizedValue}" data-letter="${letterInfo.text}">`,
            ...(normalizedValue === undefined ? [] : [
                `<div class="bible-column-marker bible-column-marker-2"></div>`,
                `<div class="bible-column-marker bible-column-marker-1"></div>`,
            ]),
            `</div>`,
            // The letter
            `<div class="bible-column-letter bible-column-letter-upper" data-letter="${letterInfo.text}">${letterInfo.text}</div>`,
        );
    }

    /** Tooltip text for the bar: the letter's phase, as "Nφ". undefined for space/hyphen/end-of-verse. */
    protected barTitle(letterInfo: BibleLetterInfoByMode): string | undefined {
        const numeric = letterInfo.numeric;
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
        const htmlParts: string[] = [];
        for (let partIndex = 0; partIndex < partsColors.length; partIndex++) {
            htmlParts.push(`<div class="bible-column-split" style="--var-0-to-1: ${partIndex / (partsColors.length - 1)}; --var-color: ${partsColors[partIndex]}"></div>`);
        }

        htmlBuilder.push(
            `<div class="bible-column">`,
                // Upper bar
                `<div class="bible-column-bar bible-column-bar-upper" data-letter="SPLIT">`,
                ...htmlParts,
                `</div>`,
                // The letter
                `<div class="bible-column-letter bible-column-letter-upper" data-letter="SPLIT">&nbsp;</div>`,
            `</div>`,
        );
    }

    /**
     * Transform a letter's `phase`.
     * `letterOffset` is the offset (into this.allBibleLetterInfos) of the letter
     * being transformed - so subclasses can reach neighboring letters (e.g. N-1).
     */
    protected transformLetterNormalized(phase: number | undefined, letterOffset: number): number | undefined {
        return phase;
    }

    /**
     * The upper bar is visually split to this many parts.
     * These are the CSS colors of the splits.
     */
    protected horizontalSplitPartsColors(): string[] {
        return ['#888', '#eee', '#ddd', '#eee', '#888'];
    }

    /** Only an upper bar (no lower bar). */
    protected wrapperVariantClass(): string {
        return 'bible-columns-wrapper-only-upper';
    }
}
