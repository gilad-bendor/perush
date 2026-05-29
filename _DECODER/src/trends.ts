import {getTrendCombinations, getTrendOfLetters, Trend, trendToString, trendValues} from "./base/trend.ts";
import {getModeIterator, Mode, modeToString} from "./base/mode.ts";
import {BibleLetterInfoByMode, buildBibleLettersInfoByMode} from "./base/bible-text.ts";
import {fileURLToPath} from "node:url";
import {mkdirSync, writeFileSync} from "node:fs";
import {currentTimeAsString} from "./base/utils.ts";

const LOG_EVERY_MODE_TREND = false;
const LOG_EVERY_TREND_MATCHING = false;

const MIN_TRENDS_DEPTH = 1;
const MAX_TRENDS_DEPTH = 6;

const MIN_OCCURRENCES = 100;

class Statistics {
    get sumUp(): number { return this.sumByTrend[Trend['🔼']]; }
    get sumDown(): number { return this.sumByTrend[Trend['🔽']]; }
    get percentUp(): number { return this.sumUp / (this.sumUp + this.sumDown) * 100; }
    get percentDown(): number { return 100 - this.percentUp; }
    get roundPercentUp(): number { return Math.round(this.percentUp); }
    get roundPercentDown(): number { return 100 - this.roundPercentUp; }
    get percentMax(): number { return Math.max(this.percentUp, this.percentDown); }
    get roundPercentMax(): number { return Math.max(this.roundPercentUp, this.roundPercentDown); }

    private _trendsString?: string;
    private _modeString?: string;

    constructor(
        readonly mode: Mode,
        readonly trendsCombination: Trend[],
        readonly sumByTrend: Record<Trend, number>,
    ) {
    }

    toString(addMode = false, addTrends = true) {
        let modeString = this._modeString;
        if (addMode && !modeString) {
            modeString = modeToString(this.mode, true);
            this._modeString = modeString;
        }

        let trendsString = this._trendsString;
        if (addTrends && !trendsString) {
            trendsString = this.trendsCombination.map(trend => trendToString[trend]).join('') + '  '.repeat(MAX_TRENDS_DEPTH - this.trendsCombination.length);
            this._trendsString = trendsString;
        }

        const asterisksCount = this.roundPercentMax - 50;
        return [
            addMode ? `${this._modeString}\t` : '',
            addTrends ? `${this._trendsString}\t` : '',
            ( addMode || addTrends) ? `  -  ` : '',
            '*'.repeat(asterisksCount),
            '·'.repeat(50 - asterisksCount),
            '  ',
            String(this.sumUp).padStart(8),
            ' up, ',
            String(this.sumDown).padStart(8),
            ' down, ',
            String(this.sumUp + this.sumDown).padStart(8),
            ' total'
        ].join('');
    }
}

// Prepare the logs.
const savedLogsDir = fileURLToPath(new URL('../saved-reports', import.meta.url));
mkdirSync(savedLogsDir, {recursive: true});

// Prepare for examinations.
let examinationsCount = 0;
const allStatistics: Statistics[] = [];
const startTime = Date.now();
function logExaminationProgress() {
    console.log(`[${String(Math.floor((Date.now() - startTime) / 1000)).padStart(8)} ] Examined ${examinationsCount} trends combinations (collected ${allStatistics.length} samples)`);
}

// Loop on the size of the trends-combinations.
for (let trendsDepth = MIN_TRENDS_DEPTH; trendsDepth <= MAX_TRENDS_DEPTH; trendsDepth++) {
    for (const mode of getModeIterator()) {
        console.log(`trendsDepth=${trendsDepth}    mode=${modeToString(mode)}`);
        const bibleText = buildBibleLettersInfoByMode(mode); // not using getBibleLettersInfoByMode() - or else out-of-memory
        for (const trendsCombination of getTrendCombinations(trendsDepth)) {
            const statistics = examineSpecificAspect(bibleText, mode, trendsCombination);
            if (statistics && ((statistics.sumUp + statistics.sumDown) >= MIN_OCCURRENCES)) {
                allStatistics.push(statistics);
                if (LOG_EVERY_MODE_TREND) {
                    console.log(statistics.toString(true, true));
                }
            }
            examinationsCount++;
            if (examinationsCount % 1000 === 0) {
                logExaminationProgress();
            }
        }
    }
    logExaminationProgress();

    // Save the SORTED statistics to a file.
    const saveFileNameSorted = `${savedLogsDir}/${currentTimeAsString()}.depth-${trendsDepth}.rtl.md`;
    console.log(`Saving sorted statistics at ${saveFileNameSorted}`);
    writeFileSync(
        saveFileNameSorted,
        allStatistics.sort((a, b) => b.percentMax - a.percentMax).map(statistics => statistics.toString(true, true)).join('\n'),
        'utf-8');

    console.log(`Done effectiveMaxTrendsDepth=${trendsDepth}.`);
}
console.log('Done All.');


function examineSpecificAspect(bibleText: BibleLetterInfoByMode[], mode: Mode, trendsCombination: Trend[]): Statistics | undefined {
    const trendsString = trendsCombination.map(trend => trendToString[trend]).join('');
    if (LOG_EVERY_TREND_MATCHING) {
        console.log(`\tTrends: ${trendsString}`);
    }

    const sumByTrend: Record<Trend, number> = Object.fromEntries(trendValues.map(trend => [trend, 0])) as Record<Trend, number>;

    // Scan the whole bible, looking for trendsCombination.
    const scanEnd = bibleText.length - trendsCombination.length - trendsCombination.length - 2;
    for (let startingLetterIndex = 0; startingLetterIndex <= scanEnd; startingLetterIndex++) {
        // Check if the letters-sequence starting at startingLetterIndex matches the trendsCombination.
        let trendMatches = true;
        let scanLetterIndex = startingLetterIndex;
        let previousLetterInfo = bibleText[scanLetterIndex];
        scanLetterIndex++;
        for (const trend of trendsCombination) {
            let currentLetterInfo = bibleText[scanLetterIndex];
            scanLetterIndex++;
            if (getTrendOfLetters(previousLetterInfo, currentLetterInfo) !== trend) {
                trendMatches = false;
                break;
            }
            previousLetterInfo = currentLetterInfo;
        }

        // If the trend matches, count the number of occurrences for the last trend.
        if (trendMatches) {
            const lastLetterInfo = bibleText[scanLetterIndex];
            const lastTrend = getTrendOfLetters(previousLetterInfo, lastLetterInfo);
            sumByTrend[lastTrend]++;

            if (LOG_EVERY_TREND_MATCHING) {
                const prefixSnippet = bibleText.slice(Math.max(0, startingLetterIndex - 10), startingLetterIndex).map(letterInfo => letterInfo.text);
                const textSnippet = bibleText.slice(startingLetterIndex, scanLetterIndex + 1).map(letterInfo => letterInfo.text);
                const suffixSnippet = bibleText.slice(scanLetterIndex + 1, scanLetterIndex + 11).map(letterInfo => letterInfo.text);
                console.log(`\t\t${prefixSnippet.join('')}✪${textSnippet.join('')}✪${suffixSnippet.join('')}  ==> ${textSnippet.join(' ✪ ')}  ==>  ${trendToString[lastTrend]}`);
            }
        }
    }

    return new Statistics(mode, trendsCombination, sumByTrend);
}