import {HeyMode, type Mode, ShinSinMode, SpacingMode, VavMode, YudMode} from "./base/mode.ts";
import {LettersToHtml_Simple} from "./letters-to-html/letters-to-html-simple.ts";
import {openHtmlInBrowser} from "./base/utils.ts";
import {LettersToHtml_SimpleSum} from "./letters-to-html/letters-to-html-simple-sum.ts";
import {LettersToHtml_SimpleDiff} from "./letters-to-html/letters-to-html-simple-diff.ts";

const mode: Mode = {
    spacingMode: SpacingMode.NO_SPACING_NOR_HYPHENS,
    shinSinMode: ShinSinMode.SHIN_SIN_OFF,
    heyMode: HeyMode.SKIP_HEY,
    vavMode: VavMode.SKIP_VAV,
    yudMode: YudMode.SKIP_YUD,
}

const html = [
    // --------------------------------------------------------------------------------
    new LettersToHtml_Simple(    { mode }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_SimpleDiff({ mode }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_SimpleDiff({ mode, doubleDiff: true }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_SimpleSum( { mode }).allColumnsHtml,
    // --------------------------------------------------------------------------------
    new LettersToHtml_SimpleSum( { mode, doubleDiff: true }).allColumnsHtml,
    // --------------------------------------------------------------------------------
].join('\n<hr>\n');
openHtmlInBrowser(html);

console.log('Done.');
