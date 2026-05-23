import {Mode, ShinSinMode, SpacingMode, VavMode, YudMode} from "./mode.ts";
import {LettersToHtml_Pair} from "./letters-to-html/letters-to-html-pair";
import {openHtmlInBrowser} from "./utils";
import {LettersToHtml_PairSumDiff} from "./letters-to-html/letters-to-html-pair-sum-diff";

const mode: Mode = {
    spacingMode: SpacingMode.SPACES_EVEN_WHEN_HYPHEN,
    shinSinMode: ShinSinMode.SHIN_SIN_OFF,
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
