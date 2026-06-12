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

    /** HTML shown at the top-right of the columns wrapper - a short title/legend for this visualizer. */
    abstract readonly topTitleHtml: string;

    protected constructor(mode: Mode) {
        this.mode = mode;
        this.allBibleLetterInfos = getBibleLettersInfoByMode(mode);
    }

    get allColumnsHtml(): string {
        if (!this._allColumnsHtml) {
            const htmlBuilder: string[] = [];
            htmlBuilder.push(`<div class="bible-columns-wrapper ${this.wrapperVariantClass()} bible-columns-wrapper-${this.constructor.name}">\n`)
            htmlBuilder.push(`<div class="bible-columns-title"><div class="bible-columns-title-text">${this.topTitleHtml}</div></div>\n`)
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

    /**
     * Extra CSS class for the <div class="bible-columns-wrapper">, describing the
     * column layout: "both-sides" (an upper AND a lower bar) by default.
     * Subclasses that render only an upper bar override this with "only-upper".
     */
    protected wrapperVariantClass(): string {
        return 'bible-columns-wrapper-both-sides';
    }

    /**
     * Render the optional tooltip attribute (` title="..."`) for a bar.
     * Returns '' when there is no value (e.g. a space/hyphen bar) - so no tooltip is shown.
     *
     * Native `title` tooltips can't be styled with CSS, so `direction: ltr` cannot be applied to them.
     * Instead we wrap the text in a Unicode LTR isolate (U+2066 … U+2069), which the tooltip's bidi
     * rendering honors - otherwise the page's `direction: rtl` reorders strings like "-18Δ=1φ-19φ".
     */
    protected barTitleAttribute(title: string | undefined): string {
        return title === undefined ? '' : ` title="⁦${title}⁩"`;
    }
}
