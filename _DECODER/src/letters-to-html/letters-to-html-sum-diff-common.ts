import {HEBREW_LETTER_COUNT} from "../base/mode.ts";
import {BibleLetterInfoByMode} from "../base/bible-text.ts";
import {getPhaseGapOfLetters} from "../base/trend.ts";

/**
 * Shared building-blocks for the "sum" and "diff" visualizers (both the pair flavor and the
 * single-letter flavor):
 * - the renormalization bounds (turn units) for each quantity,
 * - the value functions (SUM of two phases, warp-aware phase-GAP),
 * - the tooltip ("title") builders.
 *
 * SUM is shown on a double-layer ("warp") upper bar; the phase-GAP is already warp-aware, so it is
 * shown on a single-marker upper bar (doubling it would double-count the warp).
 */

// ---- renormalization bounds (turn units) ----

/** SUM of two phases lies in [0, 2) - each phase is in [0, 21/22]. */
export const SUM_MIN = 0;
export const SUM_MAX = 2;
/** Warp-aware phase-GAP lies in (-0.5, +0.5]. */
export const GAP_MIN = -0.5;
export const GAP_MAX = +0.5;
/**
 * doubleDiff "slope" range, F(N,N-p) - F(N-p,N-2p), for both quantities:
 * - the sum-slope telescopes to phase(N) - phase(N-2p), within ±21/22,
 * - the gap-slope is a difference of two gaps each in [-10/22, +11/22].
 * So [-1, +1] bounds both.
 */
export const SLOPE_MIN = -1;
export const SLOPE_MAX = +1;

// ---- values (turn units) ----

/** SUM of two letters' phases. undefined if either letter is missing. */
export function sumPhases(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
    if (!a || !b || (a.phase === undefined) || (b.phase === undefined)) {
        return undefined;
    }
    return a.phase + b.phase;
}

/** Warp-aware phase-GAP between two letters. undefined if either letter is missing. */
export function gapPhases(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
    if (!a || !b || (a.numeric === undefined) || (b.numeric === undefined)) {
        return undefined;
    }
    return getPhaseGapOfLetters(a, b);
}

/** Subtract two optional numbers - undefined if either is undefined. */
export function subtract(x: number | undefined, y: number | undefined): number | undefined {
    return (x === undefined || y === undefined) ? undefined : x - y;
}

// ---- title numerators (1/22 units) ----

/** Phase numerator (numeric - 1, in 1/22 units) of a letter, or undefined. */
export function phaseNumerator(letter: BibleLetterInfoByMode | undefined): number | undefined {
    return (letter?.numeric === undefined) ? undefined : letter.numeric - 1;
}

/** Phase-GAP numerator (in 1/22 units) between two letters, or undefined if either is missing. */
export function gapNumerator(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): number | undefined {
    const gap = gapPhases(a, b);
    return (gap === undefined) ? undefined : Math.round(gap * HEBREW_LETTER_COUNT);
}

// ---- tooltips. φ = phase, Σ = sum, Δ = phase-gap, ′ = slope (the "/22" denominator is implicit) ----

/** SUM tooltip: "{a+b}Σ={a}φ+{b}φ". undefined if either letter is missing. */
export function sumTitle(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): string | undefined {
    const na = phaseNumerator(a);
    const nb = phaseNumerator(b);
    return (na === undefined || nb === undefined) ? undefined : `${na + nb}Σ=${na}φ+${nb}φ`;
}

/** Phase-GAP tooltip: "{g}Δ". undefined if either letter is missing. */
export function gapTitle(a: BibleLetterInfoByMode | undefined, b: BibleLetterInfoByMode | undefined): string | undefined {
    const g = gapNumerator(a, b);
    return (g === undefined) ? undefined : `${g}Δ`;
}

/** Sum-slope tooltip: "{s1-s2}Σ′={s1}Σ-{s2}Σ", where s1=SUM(N,N-p), s2=SUM(N-p,N-2p). */
export function sumSlopeTitle(n: BibleLetterInfoByMode | undefined, np: BibleLetterInfoByMode | undefined, n2p: BibleLetterInfoByMode | undefined): string | undefined {
    const a = phaseNumerator(n);
    const b = phaseNumerator(np);
    const c = phaseNumerator(n2p);
    if (a === undefined || b === undefined || c === undefined) {
        return undefined;
    }
    const s1 = a + b;
    const s2 = b + c;
    return `${s1 - s2}Σ′=${s1}Σ-${s2}Σ`;
}

/** Gap-slope tooltip: "{g1-g2}Δ′={g1}Δ-{g2}Δ", where g1=GAP(N,N-p), g2=GAP(N-p,N-2p). */
export function gapSlopeTitle(n: BibleLetterInfoByMode | undefined, np: BibleLetterInfoByMode | undefined, n2p: BibleLetterInfoByMode | undefined): string | undefined {
    const g1 = gapNumerator(n, np);
    const g2 = gapNumerator(np, n2p);
    if (g1 === undefined || g2 === undefined) {
        return undefined;
    }
    return `${g1 - g2}Δ′=${g1}Δ-${g2}Δ`;
}

/** A single marker <div> for the warp-aware phase-GAP upper bar (or [] when there is no value). */
export function singleMarkerHtml(renormalizedValue: number | undefined): string[] {
    return renormalizedValue === undefined
        ? []
        : [`<div class="bible-column-marker bible-column-marker-1"></div>`];
}
