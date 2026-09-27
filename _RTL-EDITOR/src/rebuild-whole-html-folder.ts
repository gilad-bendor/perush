// Brings the whole HTML mirror - and the PDF mirror printed from it - up to date once, without
// starting the server:  bun run rebuild-whole-html-folder
// The server does the same at startup and keeps it up to date while it runs - see html-mirror.ts.

import { snapshotOfTree } from "./fs-changes";
import { HtmlMirror } from "./html/html-mirror";
import { PdfMirror } from "./html/pdf-mirror";
import { getMarkdownFiles, MARKDOWN_DIR } from "./markdown-tree";

const started = performance.now();
const mirror = await HtmlMirror.create(MARKDOWN_DIR);
const pdfMirror = await PdfMirror.create(MARKDOWN_DIR);
mirror.companion = pdfMirror;
const { rendered, removed, indexes } = await mirror.syncTree(snapshotOfTree(await getMarkdownFiles(MARKDOWN_DIR)));
console.log(`HTML mirror: ${rendered} page(s) rendered, ${removed} removed, ${indexes} folder index(es) updated,`
    + ` in ${Math.round(performance.now() - started)} ms`);
await pdfMirror.idle();
await pdfMirror.close();
console.log(`PDF mirror: up to date, in ${Math.round(performance.now() - started)} ms`);
