import {type Mode} from "../base/mode.ts";
import {BibleLetterInfoByMode, getBibleLettersInfoByMode} from "../base/bible-text.ts";

/**
 * Single "text-item": a very small range inside `biblicalAnnotatedText`
 *  usually containing one or two Hebrew letters (with their Nikud)
 *  that can be used by `IHtmlColumnBuilder`.
 */
export abstract class LettersToHtml_Base {
    readonly mode: Mode;
    readonly allBibleLetterInfos: BibleLetterInfoByMode[];
    private _allColumnsHtml?: string;

    protected constructor(mode: Mode) {
        this.mode = mode;
        this.allBibleLetterInfos = getBibleLettersInfoByMode(mode);
    }

    get allColumnsHtml(): string {
        if (!this._allColumnsHtml) {
            const htmlBuilder: string[] = [];
            htmlBuilder.push(`<div class="bible-columns-wrapper bible-columns-wrapper-${this.constructor.name}">\n`)
            this.addColumnsWrapperHtml(htmlBuilder);
            let columnIndex = 0;
            let scanLetterOffset = 0;
            for (; ;) {
                htmlBuilder.push(`<div class="bible-column" style="--var-index: ${columnIndex}">\n`)
                const originalHtmlBuilderLength = htmlBuilder.length;
                const {handledLettersCount} = this.buildHtmlForLettersInfo(scanLetterOffset, htmlBuilder);
                const anyHtmlAdded = htmlBuilder.length > originalHtmlBuilderLength;
                htmlBuilder.push(`</div>\n`)
                if (handledLettersCount < 1) {
                    throw new Error(`buildHtmlForLettersInfo() returned non-positive "handledLettersCount" for scanLetterOffset=${scanLetterOffset}`);
                }
                scanLetterOffset += handledLettersCount;
                columnIndex++;

                // Prepare to iterate.
                if (scanLetterOffset < this.allBibleLetterInfos.length) {
                    // More letters ahead
                    if (!anyHtmlAdded) {
                        throw new Error(`buildHtmlForLettersInfo() added no HTML for scanLetterOffset=${scanLetterOffset} - but there are more letters ahead. This should never happen.`)
                    }
                } else {
                    // No more letters
                    if (!anyHtmlAdded) {
                        htmlBuilder.pop();
                        htmlBuilder.pop();
                    }
                    break;
                }
            }
            htmlBuilder.push(`</div>\n`)
            this._allColumnsHtml = htmlBuilder.join('');
        }
        return this._allColumnsHtml;
    }

    /**
     * Given an offset into this.allBibleLetterInfos, decide how many letters to handle,
     *  and build the HTML of a "column" (by pushing into htmlBuilder).
     * All these "columns" will then be placed side-by-side to visualize the bible text.
     * Only when reaching the end of this.allBibleLetterInfos - and there are not enough letters left -
     *  no HTML will be added to htmlBuilder.
     */
    abstract buildHtmlForLettersInfo(startLetterOffset: number, htmlBuilder: string[]): { handledLettersCount: number };

    /**
     * Add HTML inside the <div class="bible-columns-wrapper">
     */
    protected addColumnsWrapperHtml(_htmlBuilder: string[]): void {
    }
}
