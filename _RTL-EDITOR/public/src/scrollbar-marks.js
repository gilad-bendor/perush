// Marks in the scrollbar - as WebStorm draws them: a short coloured bar across the scrollbar's track for every place
// of interest in the whole text (a search match, a TODO...), at the height its line has in the document - so the eye
// finds them, and the scrollbar's thumb is dragged to them.
//
// What is marked is not known here: each *source* says which places of a state it marks, in what colour, and when
// they may have changed. markdown-editor.js lists the sources. The strip is a canvas laid over the scrollbar's track
// (or, where the scrollbar is an overlay that takes no room - macOS by default - over the text's last pixels), letting
// every mouse event through to the scrollbar under it.

import { ViewPlugin } from '@codemirror/view';

/**
 * @typedef {object} ScrollbarMarkSource
 * @property {string} color                 the marks' colour (any CSS colour)
 * @property {number} [priority]            which colour wins where marks of two sources meet - the higher (default 0)
 * @property {(state: import('@codemirror/state').EditorState) => number[]} positions
 *   the document offsets it marks - each stands for its line
 * @property {(update: import('@codemirror/view').ViewUpdate) => boolean} changed
 *   whether its positions may differ after this update
 */

/** The strip's width where the scrollbar takes no room. */
const OVERLAY_STRIP_PX = 8;
/** A mark's height, and the gap left at either side of it across the strip. */
const MARK_HEIGHT_PX = 3;
const MARK_INSET_PX = 2;
/** At most this many marks of a source: beyond it the strip is a solid bar of colour anyway. */
export const MAX_MARKS_PER_SOURCE = 5000;

/**
 * The scrollbar's marks, from these sources.
 *
 * @param {ScrollbarMarkSource[]} sources
 */
export function scrollbarMarks(sources) {
    const ordered = [...sources].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
    return ViewPlugin.fromClass(class {
        constructor(/** @type {import('@codemirror/view').EditorView} */ view) {
            this.view = view;
            this.canvas = document.createElement('canvas');
            this.canvas.className = 'cm-scrollbar-marks';
            this.canvas.setAttribute('aria-hidden', 'true');
            view.dom.appendChild(this.canvas);
            /** @type {number[][]} each source's positions, in `ordered`'s order */
            this.positions = ordered.map(source => source.positions(view.state).slice(0, MAX_MARKS_PER_SOURCE));
            this.scheduleDraw();
        }

        update(/** @type {import('@codemirror/view').ViewUpdate} */ update) {
            let changed = false;
            ordered.forEach((source, i) => {
                if (source.changed(update)) {
                    this.positions[i] = source.positions(update.state).slice(0, MAX_MARKS_PER_SOURCE);
                    changed = true;
                }
            });
            // Where a line stands may move with any change of the text or of the heights CodeMirror knows.
            if (changed || update.docChanged || update.geometryChanged || update.heightChanged || update.viewportChanged) {
                this.scheduleDraw();
            }
        }

        scheduleDraw() {
            this.view.requestMeasure({
                key: this,
                read: (view) => this.measure(view),
                write: (measured) => this.draw(measured),
            });
        }

        /**
         * Where the strip goes, and where on it every mark does - read in the measure phase, as it reads the layout.
         *
         * @param {import('@codemirror/view').EditorView} view
         */
        measure(view) {
            const scroller = view.scrollDOM;
            const editorRect = view.dom.getBoundingClientRect();
            const scrollerRect = scroller.getBoundingClientRect();
            const scrollbarWidth = scroller.offsetWidth - scroller.clientWidth;
            const width = scrollbarWidth > 0 ? scrollbarWidth : OVERLAY_STRIP_PX;
            const height = scroller.clientHeight;
            // The document's top within the scrolled content: the content's own padding, and whatever stands above it.
            const documentOffset = view.documentTop - scrollerRect.top + scroller.scrollTop;
            const scrollHeight = Math.max(scroller.scrollHeight, height, 1);
            const docLength = view.state.doc.length;
            const rows = this.positions.map(positions => positions.map(pos => {
                const block = view.lineBlockAt(Math.min(Math.max(pos, 0), docLength));
                return Math.round((documentOffset + block.top) / scrollHeight * height);
            }));
            return {
                left: scrollerRect.right - editorRect.left - width,
                top: scrollerRect.top - editorRect.top,
                width,
                height,
                rows,
            };
        }

        /** @param {{ left: number, top: number, width: number, height: number, rows: number[][] }} measured */
        draw({ left, top, width, height, rows }) {
            const canvas = this.canvas;
            const ratio = window.devicePixelRatio || 1;
            Object.assign(canvas.style, { left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` });
            canvas.width = Math.round(width * ratio);
            canvas.height = Math.round(height * ratio);
            const context = canvas.getContext('2d');
            if (!context) return;
            context.scale(ratio, ratio);
            context.clearRect(0, 0, width, height);
            const markWidth = Math.max(width - 2 * MARK_INSET_PX, 2);
            ordered.forEach((source, i) => {
                context.fillStyle = source.color;
                let last = -Infinity;
                for (const y of [...rows[i]].sort((a, b) => a - b)) {
                    if (y === last) continue;
                    last = y;
                    const at = Math.min(Math.max(y - Math.floor(MARK_HEIGHT_PX / 2), 0), height - MARK_HEIGHT_PX);
                    context.fillRect(MARK_INSET_PX, at, markWidth, MARK_HEIGHT_PX);
                }
            });
        }

        destroy() {
            this.canvas.remove();
        }
    });
}
