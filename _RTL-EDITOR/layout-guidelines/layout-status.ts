// What needs a layout session: every Markdown file whose layout is missing, obsolete, unread or broken.
//
//     bun run layout-status [folder] [--check]      (in _RTL-EDITOR)
//     bun layout-status.ts [folder] [--check]       (here)
//
// It asks every file's chain of layout modules (layout-schema.ts) and lists:
//   NO LAYOUT    the chain says the file should have a layout of its own (`output: "laid-out"`), and it has none
//   OBSOLETE     the file has changed since its own layout was made (its `sourceMd5` is not the file's)
//   REVIEW       its own layout lists rows a tool made that no session has read (`review`)
//   BROKEN       a module of its chain does not load, throws, or answers in the wrong shape - listed once a module
// A file the chain does not want laid out is not listed - unless it has a layout of its own all the same,
// which is then kept up like any other.
//
// --check: for every OBSOLETE file, run the rows tool's `check` regardless of the MD5. When its rows still
// fit, the change did not touch the layout, and the only thing left to do is the new `sourceMd5`, printed.
//
// Nothing here needs a browser (but --check), so the whole tree takes a second or two. Exit 1 when
// anything is listed.

import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { spawnSync } from "child_process";
import { layoutFileOf, layoutPathFor, md5Of, runChain } from "../src/html/layout-module";
import { markdownFiles, REPO_ROOT } from "./tree";

const args = process.argv.slice(2);
if (args.includes("--help")) {
    const source = readFileSync(import.meta.path, "utf-8").split("\n");
    console.log(source.slice(0, source.findIndex(line => !line.startsWith("//"))).map(line => line.slice(3)).join("\n"));
    process.exit(0);
}
const target = args.find(arg => !arg.startsWith("--"));
const folder = target && (existsSync(resolve(target)) ? resolve(target) : resolve(REPO_ROOT, target));
const check = args.includes("--check");

const listed: string[] = [];
const broken = new Map<string, { message: string, files: number }>();
let laidOut = 0, withLayout = 0;

for (const path of await markdownFiles(folder)) {
    const read = () => readFileSync(join(REPO_ROOT, path), "utf-8");
    const chain = await runChain(REPO_ROOT, layoutFileOf(path, read));
    for (const problem of chain.problems) {
        const known = broken.get(problem.file);
        broken.set(problem.file, { message: problem.message, files: (known?.files ?? 0) + 1 });
    }
    const hasOwn = existsSync(join(REPO_ROOT, layoutPathFor(path)));
    const wanted = chain.merged.output === "laid-out";
    if (wanted) laidOut++;
    if (hasOwn) withLayout++;

    if (wanted && !hasOwn) {
        listed.push(`NO LAYOUT   ${path}`);
        continue;
    }
    if (!chain.own) continue;                       // none, or a broken one - listed below
    const md5 = md5Of(read());
    if (chain.own.sourceMd5 !== md5) {
        let note = "";
        if (check) {
            const result = spawnSync("bun", [join(import.meta.dir, "verse-layout-tool.ts"), "check", path, "--ignore-md5"], { encoding: "utf-8" });
            note = result.status === 0 ? ` - its rows still fit: only its sourceMd5 needs to become "${md5}"` : " - its rows need a session";
        }
        listed.push(`OBSOLETE    ${path}${note}`);
    }
    if (chain.own.review?.length) listed.push(`REVIEW      ${path}: ${chain.own.review.length} rows not read yet`);
}
for (const [module, { message, files }] of broken) listed.push(`BROKEN      ${module} (for ${files} file${files === 1 ? "" : "s"}): ${message}`);

for (const line of listed) console.log(line);
console.log(`\n${listed.length ? listed.length : "nothing"} to do; ${laidOut} files should have a layout of their own, ${withLayout} have one`);
process.exit(listed.length ? 1 : 0);
