import {HeyMode, type Mode, ShinSinMode, SpacingMode, VavMode, YudMode} from "./base/mode.ts";
import {LettersToHtml_Simple} from "./letters-to-html/letters-to-html-simple.ts";
import {HORIZONTAL_MAIN_SEPARATOR, openHtmlInBrowser} from "./base/utils.ts";
import {LettersToHtml_SimpleSum} from "./letters-to-html/letters-to-html-simple-sum.ts";
import {LettersToHtml_SimpleDiff} from "./letters-to-html/letters-to-html-simple-diff.ts";

const mode: Mode = {
    spacingMode: SpacingMode.NO_SPACING_NOR_HYPHENS,
    shinSinMode: ShinSinMode.SHIN_SIN_OFF,
    heyMode: HeyMode.SKIP_HEY,
    vavMode: VavMode.SKIP_VAV,
    yudMode: YudMode.SKIP_YUD,
}

const html = [];

// --------------------------------------------------------------------------------
html.push(new LettersToHtml_Simple(    { mode }).allColumnsHtml);
// html.push(HORIZONTAL_MAIN_SEPARATOR);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 1, skipLettersCount:1, initialSkipCount: 0 }).allColumnsHtml);
// html.push(HORIZONTAL_MAIN_SEPARATOR);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 2, skipLettersCount:2, initialSkipCount: 0 }).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 2, skipLettersCount:2, initialSkipCount: 1 }).allColumnsHtml);
// html.push(HORIZONTAL_MAIN_SEPARATOR);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 3, skipLettersCount:3, initialSkipCount: 0 }).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 3, skipLettersCount:3, initialSkipCount: 1 }).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 3, skipLettersCount:3, initialSkipCount: 2 }).allColumnsHtml);
// html.push(HORIZONTAL_MAIN_SEPARATOR);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 4, skipLettersCount:4, initialSkipCount: 0}).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 4, skipLettersCount:4, initialSkipCount: 1}).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 4, skipLettersCount:4, initialSkipCount: 2}).allColumnsHtml);
// html.push(new LettersToHtml_SimpleDiff({ mode, previousLetterOffset: 4, skipLettersCount:4, initialSkipCount: 3}).allColumnsHtml);
// --------------------------------------------------------------------------------


for (let i = 1; i <= 8; i++) {
    html.push(HORIZONTAL_MAIN_SEPARATOR);
    for (let j = 0; j < i; j++) {
        html.push(new LettersToHtml_SimpleDiff({
            mode,
            previousLetterOffset: i,
            skipLettersCount: i,
            initialSkipCount: j,
        }).allColumnsHtml);
    }
}


openHtmlInBrowser(html.join('\n\n'));

console.log('Done.');
