import {HeyMode, type Mode, ShinSinMode, SpacingMode, VavMode, YudMode} from "./base/mode.ts";
import {LettersToHtml_Pair} from "./letters-to-html/letters-to-html-pair.ts";
import {openHtmlInBrowser} from "./base/utils.ts";
import {LettersToHtml_PairSum} from "./letters-to-html/letters-to-html-pair-sum.ts";
import {LettersToHtml_PairDiff} from "./letters-to-html/letters-to-html-pair-diff.ts";

const mode: Mode = {
    spacingMode: SpacingMode.NO_SPACING_NOR_HYPHENS,
    shinSinMode: ShinSinMode.SHIN_SIN_OFF,
    heyMode: HeyMode.SKIP_HEY,
    vavMode: VavMode.SKIP_VAV,
    yudMode: YudMode.SKIP_YUD,
}

const html = [
    // --------------------------------------------------------------------------------
    new LettersToHtml_Pair(    { mode, initialSkipCount: 0 }).allColumnsHtml,
    new LettersToHtml_PairDiff({ mode, initialSkipCount: 0 }).allColumnsHtml,
    new LettersToHtml_PairDiff({ mode, initialSkipCount: 1 }).allColumnsHtml,
    new LettersToHtml_PairSum( { mode, initialSkipCount: 0 }).allColumnsHtml,
    new LettersToHtml_PairSum( { mode, initialSkipCount: 1 }).allColumnsHtml,
    // --------------------------------------------------------------------------------
].join('\n\n');
openHtmlInBrowser(html);

console.log('Done.');
