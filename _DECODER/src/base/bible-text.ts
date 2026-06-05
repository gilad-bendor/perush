import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {HEBREW_LETTER_COUNT, hebrewLetterToNumeric, HeyMode, type Mode, modeToString, normalizeHebrewChar, VavMode, YudMode} from "./mode.ts";

/**
 * Biblical annotated text - line-per-verse. Verse/line sample:    `בְּרֵאשִׁית בָּרָא אֱלהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א)
 * Never contains "ש" (no dot) - only "שׁ" (Shin) and "שׂ" (Sin).
 */
export type BiblicalAnnotatedText = string;
export const biblicalAnnotatedText: BiblicalAnnotatedText = readFileSync(
    fileURLToPath(new URL('../../data/biblical-annotated-text.txt', import.meta.url)),
    'utf-8',
);

/**
 * Immutable info of a single letter in a specific index in the biblical text.
 */
export class BibleLetterInfoByMode {
    /** A return value of normalizeHebrewChar(hebrewChar, mode) */
    readonly letter: string;

    /** A value in hebrewLetterToNumeric. undefined for space/hyphen/end-of-verse */
    readonly numeric: number | undefined;

    /**
     * The letter's position on the cyclic alphabet, as a fraction of a full turn - a "phase" (angle):
     * (numeric - 1) / HEBREW_LETTER_COUNT. So א=0, ב=1/22, ... ת=21/22, and a full turn (22/22 ≡ 0)
     * wraps back to א - matching the warped/cyclic scale in trend.ts (where א and ת are neighbours).
     * Fixed by the alphabet (not by which letters appear in the data).
     * undefined for space/hyphen/end-of-verse.
     */
    readonly phase: number | undefined;

    /** Range into biblicalAnnotatedText. The range is always a few characters long: the letter and its Nikud. */
    readonly rangeInBible: readonly [number, number];

    /** The region from biblicalAnnotatedText: biblicalAnnotatedText.substring(startIndex, endIndex) */
    readonly text: string;

    constructor(startIndex: number, endIndex: number, mode: Mode) {
        this.rangeInBible = [startIndex, endIndex];
        this.text = biblicalAnnotatedText.substring(startIndex, endIndex);
        const letter = normalizeHebrewChar(this.text[0], mode);
        if (!letter) {
            throw new Error(`Invalid Hebrew character ${JSON.stringify(this.text[0])} at bible-range [${startIndex},${endIndex}] with mode ${modeToString(mode)}`);
        }
        this.letter = letter;
        const numeric = hebrewLetterToNumeric.get(letter);
        if (numeric === undefined) {
            this.numeric = undefined;
            this.phase = undefined;
        } else {
            if (typeof numeric !== 'number') {
                throw new Error(`Invalid numeric for Hebrew character ${JSON.stringify(this.text[0])} at bible-range [${startIndex},${endIndex}] with mode ${modeToString(mode)}`);
            }
            this.numeric = numeric;
            // Cyclic phase - depends only on `numeric`, so it can be set right here. See the field doc.
            this.phase = (numeric - 1) / HEBREW_LETTER_COUNT;
        }
    }
}

/**
 * Like buildBibleLettersInfoByMode() - but with cache.
 */
export function getBibleLettersInfoByMode(mode: Mode): BibleLetterInfoByMode[] {
    const modeDescription = modeToString(mode);
    const cache = perModeBibleLettersInfoCache.get(modeDescription);
    if (cache) {
        return cache;
    }
    const result = buildBibleLettersInfoByMode(mode);
    perModeBibleLettersInfoCache.set(modeDescription, result);
    return result;
}
const perModeBibleLettersInfoCache: Map<string, BibleLetterInfoByMode[]> = new Map();

/**
 * Get a sequence of all the letters in the bible - with their info - according to a Mode.
 */
export function buildBibleLettersInfoByMode(mode: Mode): BibleLetterInfoByMode[] {
    // First - build a BibleLetterInfoByMode[] - ignoring mode.xMode === XMode.SKIP_X
    let lettersInfo = _buildBibleLettersInfoByMode_Basic(mode);

    // Transform a BibleLetterInfoByMode[]: 'וֹ' and 'וּ' are treated as a Nikud of the previous letter
    // Only if Mode is VavMode.SKIP_VAV
    lettersInfo = _buildBibleLettersInfoByMode_TreatVavAsNikud(mode, lettersInfo);

    // Transform a BibleLetterInfoByMode[]: 'י' is treated as a Nikud of the previous letter
    // Only if Mode is YudMode.SKIP_YUD
    lettersInfo = _buildBibleLettersInfoByMode_TreatYudAsNikud(mode, lettersInfo);

    // Transform a BibleLetterInfoByMode[]: 'ה' at end of a word is treated as a Nikud of the previous letter
    // Only if Mode is HeyMode.SKIP_HEY
    lettersInfo = _buildBibleLettersInfoByMode_TreatTerminalHeyAsNikud(mode, lettersInfo);

    // Note: `phase` is set per-letter in the constructor (it depends only on `numeric`),
    // so no global pass is needed here.
    return lettersInfo;
}

/**
 * Build a BibleLetterInfoByMode[] - ignoring mode.xMode === XMode.SKIP_X
 */
function _buildBibleLettersInfoByMode_Basic(mode: Mode): BibleLetterInfoByMode[] {
    const lettersInfoPhase1: BibleLetterInfoByMode[] = [];
    let scanIndex = 0;
    for (const biblicalAnnotatedLine of biblicalAnnotatedText.split('\n')) {
        const lineMatch = /^(`)(.*)(` \(.*\))$/.exec(biblicalAnnotatedLine)!;
        if (lineMatch) {
            const [_wholeLine, prefix, verse, suffix] = lineMatch;
            scanIndex += prefix.length;
            let startIndex: number | undefined = undefined;
            for (let verseIndex = 0; verseIndex <= verse.length; verseIndex++) {
                const hebrewChar = biblicalAnnotatedText[scanIndex];
                const letter = normalizeHebrewChar(hebrewChar, mode);
                if (letter || (verseIndex === verse.length)) {
                    // Flush current letter-info and start a new one.
                    if (startIndex !== undefined) {
                        const letterInfo = new BibleLetterInfoByMode(startIndex, scanIndex, mode);
                        lettersInfoPhase1.push(letterInfo);
                    }

                    // Start a new letter-info.
                    startIndex = scanIndex;
                }
                scanIndex++;
            }
            scanIndex += suffix.length;  // +1 for the newline, but also -1 because of the "verseIndex <= verse.length" above
        } else {
            scanIndex += biblicalAnnotatedLine.length + 1;  // +1 for the newline
        }
    }
    return lettersInfoPhase1;
}

/**
 * Transform a BibleLetterInfoByMode[]: 'וֹ' and 'וּ' are treated as a Nikud of the previous letter
 * Only if Mode is VavMode.SKIP_VAV
 */
function _buildBibleLettersInfoByMode_TreatVavAsNikud(mode: Mode, lettersInfo: BibleLetterInfoByMode[]): BibleLetterInfoByMode[] {
    if (mode.vavMode !== VavMode.SKIP_VAV) {
        return lettersInfo;
    }

    const lintedLettersInfo: BibleLetterInfoByMode[] = [];
    for (const currentLetterInfo of lettersInfo) {
        const currentLetterTextTrimmed = trimEndOfWord(currentLetterInfo.text);
        if ((lintedLettersInfo.length > 0) && ((currentLetterTextTrimmed === 'וֹ') || (currentLetterTextTrimmed === 'וּ'))) {
            _appendToLastLetterInfoText(lintedLettersInfo, currentLetterInfo.text);
        } else {
            lintedLettersInfo.push(currentLetterInfo);
        }
    }
    return lintedLettersInfo;
}

/**
 * Transform a BibleLetterInfoByMode[]: 'י' is treated as a Nikud of the previous letter
 * Only if Mode is YudMode.SKIP_YUD
 */
function _buildBibleLettersInfoByMode_TreatYudAsNikud(mode: Mode, lettersInfo: BibleLetterInfoByMode[]): BibleLetterInfoByMode[] {
    if (mode.yudMode !== YudMode.SKIP_YUD) {
        return lettersInfo;
    }

    const lintedLettersInfo: BibleLetterInfoByMode[] = [];
    for (const currentLetterInfo of lettersInfo) {
        const currentLetterTextTrimmed = trimEndOfWord(currentLetterInfo.text);
        if ((lintedLettersInfo.length > 0) && (currentLetterTextTrimmed === 'י') && (lintedLettersInfo.at(-1)!.text.includes('ִ'))) {
            _appendToLastLetterInfoText(lintedLettersInfo, currentLetterInfo.text);
        } else {
            lintedLettersInfo.push(currentLetterInfo);
        }
    }
    return lintedLettersInfo;
}

/**
 * Transform a BibleLetterInfoByMode[]: 'ה' at the end of a word is treated as a Nikud of the previous letter
 * Only if Mode is HeyMode.SKIP_HEY
 */
function _buildBibleLettersInfoByMode_TreatTerminalHeyAsNikud(mode: Mode, lettersInfo: BibleLetterInfoByMode[]): BibleLetterInfoByMode[] {
    if (mode.heyMode !== HeyMode.SKIP_HEY) {
        return lettersInfo;
    }

    const lintedLettersInfo: BibleLetterInfoByMode[] = [];
    for (const currentLetterInfo of lettersInfo) {
        const currentLetterTextTrimmed = trimEndOfWord(currentLetterInfo.text);
        if ((lintedLettersInfo.length > 0) && (currentLetterTextTrimmed === 'ה') && (currentLetterTextTrimmed !== currentLetterInfo.text)) {
            _appendToLastLetterInfoText(lintedLettersInfo, currentLetterInfo.text);
        } else {
            lintedLettersInfo.push(currentLetterInfo);
        }
    }
    return lintedLettersInfo;

}

function _appendToLastLetterInfoText(lettersInfo: BibleLetterInfoByMode[], appendedText: string) {
    const lastLetterInfo = lettersInfo[lettersInfo.length - 1];
    lettersInfo[lettersInfo.length - 1] = {
        ...lastLetterInfo,
        text: lastLetterInfo.text + appendedText,
        rangeInBible: [lastLetterInfo.rangeInBible[0], lastLetterInfo.rangeInBible[1] + appendedText.length],
    };
}

function trimEndOfWord(text: string): string {
    if (text.endsWith(' ') || text.endsWith('׃') || text.endsWith('־')) {
        return text.substring(0, text.length - 1);
    } else {
        return text;
    }
}
