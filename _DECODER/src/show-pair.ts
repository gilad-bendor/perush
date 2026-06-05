import {HeyMode, type Mode, ShinSinMode, SpacingMode, VavMode, YudMode} from "./base/mode.ts";
import {LettersToHtml_Pair} from "./letters-to-html/letters-to-html-pair.ts";
import {openHtmlInBrowser} from "./base/utils.ts";
import {LettersToHtml_PairSumDiff} from "./letters-to-html/letters-to-html-pair-sum-diff.ts";

const mode: Mode = {
    spacingMode: SpacingMode.NO_SPACING_NOR_HYPHENS,
    shinSinMode: ShinSinMode.SHIN_SIN_OFF,
    heyMode: HeyMode.SKIP_HEY,
    vavMode: VavMode.SKIP_VAV,
    yudMode: YudMode.SKIP_YUD,
}

const html = [
    // --------------------------------------------------------------------------------
    new LettersToHtml_Pair(       { mode, skipOneLetter: false }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairSumDiff({ mode, skipOneLetter: false }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairSumDiff({ mode, skipOneLetter: true  }).allColumnsHtml,
    // --------------------------------------------------------------------------------
].join('\n<hr>\n');
openHtmlInBrowser(html);

console.log('Done.');
