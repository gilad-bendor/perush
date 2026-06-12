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
    new LettersToHtml_Pair(    { mode, skipOneLetter: false }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairDiff({ mode, skipOneLetter: false }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairDiff({ mode, skipOneLetter: true  }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairSum( { mode, skipOneLetter: false }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_PairSum( { mode, skipOneLetter: true  }).allColumnsHtml,
    // --------------------------------------------------------------------------------
].join('\n<hr>\n');
openHtmlInBrowser(html);

console.log('Done.');
