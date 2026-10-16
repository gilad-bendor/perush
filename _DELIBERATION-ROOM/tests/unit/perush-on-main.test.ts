/**
 * perush-on-main.test.ts — The perush files on main (detect → commit → rollback), run against a scratch git
 * repository with the real Hebrew folder names.
 *
 * Regression test: Bun's $`...` turned literal Hebrew into "u05E4u05D9...", so `git add פירוש/` failed
 * silently - and nothing was ever committed or rolled back.
 */

import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { mkdtemp, mkdir, writeFile, readFile, rm, stat } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import {
  setPerushGitRootForTests,
  detectPerushChanges,
  commitPerushChanges,
  getPerushHead,
  rollbackPerushOnMain,
  defaultPerushScope,
} from "../../src/meetings-db.ts";
import type { PerushScope } from "../../src/types.ts";

const PERUSH_FILE = "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md";
const OTHER_PERUSH_FILE = "פירוש/1-בראשית/1050-בראשית-ד_יח-ד_כו [טיוטה].rtl.md";   // "[" - not a glob
const APPENDIX_FILE = "נספחים-לפירוש/נספח.rtl.md";
const LINGUAL_FILE = "בלשנות/ניתוחים-לשוניים/עד.rtl.md";
const OTHER_FILE = "scripts/other.txt";

let repo: string;

async function git(...args: string[]): Promise<string> {
  const proc = Bun.spawn(["git", "-C", repo, ...args], { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(), new Response(proc.stderr).text(), proc.exited,
  ]);
  if (exitCode !== 0) throw new Error(`git ${args.join(" ")}: ${stderr}`);
  return stdout;
}

async function write(file: string, content: string): Promise<void> {
  await mkdir(join(repo, file, ".."), { recursive: true });
  await writeFile(join(repo, file), content);
}

async function read(file: string): Promise<string> {
  return readFile(join(repo, file), "utf-8");
}

async function exists(file: string): Promise<boolean> {
  return stat(join(repo, file)).then(() => true, () => false);
}

/** The files changed by a commit (-z: unquoted Hebrew) */
async function filesOfCommit(ref: string): Promise<string[]> {
  return (await git("show", "-z", "--name-only", "--no-renames", "--format=", ref)).split("\0").filter(Boolean).sort();
}

async function staged(): Promise<string[]> {
  return (await git("diff", "--cached", "-z", "--name-only")).split("\0").filter(Boolean).sort();
}

async function changedPaths(scope: PerushScope): Promise<string[]> {
  return (await detectPerushChanges(scope)).map(change => change.path).sort();
}

const byPath = (a: { path: string }, b: { path: string }) => a.path.localeCompare(b.path);

const scope = (ignoredPaths: string[] = []): PerushScope => ({ ...defaultPerushScope(), ignoredPaths });

beforeEach(async () => {
  repo = await mkdtemp(join(tmpdir(), "perush-on-main-"));
  await git("init", "-q", "-b", "main");
  await git("config", "user.name", "test");
  await git("config", "user.email", "test@example.com");
  // Deliberately NOT setting core.quotepath=false: detection must not depend on it.
  for (const file of [PERUSH_FILE, OTHER_PERUSH_FILE, APPENDIX_FILE, LINGUAL_FILE, OTHER_FILE]) {
    await write(file, `${file} v0\n`);
  }
  await git("add", "-A");
  await git("commit", "-q", "-m", "initial");
  setPerushGitRootForTests(repo);
});

afterEach(async () => {
  setPerushGitRootForTests(undefined);
  await rm(repo, { recursive: true, force: true });
});

describe("the default scope", () => {
  test("tracks the commentary, the appendices and the linguistic analyses", () => {
    expect(defaultPerushScope()).toEqual({
      trackedPaths: ["פירוש/", "נספחים-לפירוש/", "בלשנות/ניתוחים-לשוניים/"],
      ignoredPaths: [],
    });
  });
});

describe("detectPerushChanges", () => {
  test("empty when nothing changed", async () => {
    expect(await detectPerushChanges(scope())).toEqual([]);
  });

  test("finds modified, staged and new files in the tracked folders - with unquoted Hebrew paths and status codes", async () => {
    await write(PERUSH_FILE, "v1\n");
    await write(LINGUAL_FILE, "v1\n");
    await git("add", LINGUAL_FILE);
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");
    await write(OTHER_FILE, "v1\n");                                    // outside the tracked folders - ignored
    expect((await detectPerushChanges(scope())).sort(byPath)).toEqual([
      { status: "M ", path: LINGUAL_FILE },
      { status: " M", path: PERUSH_FILE },
      { status: "??", path: "פירוש/1-בראשית/חדש.rtl.md" },
    ].sort(byPath));
  });

  test("a staged rename reports the new path and the original one", async () => {
    await git("mv", PERUSH_FILE, "פירוש/1-בראשית/שם-חדש.rtl.md");
    expect(await detectPerushChanges(scope())).toEqual([
      { status: "R ", path: "פירוש/1-בראשית/שם-חדש.rtl.md", originalPath: PERUSH_FILE },
    ]);
  });

  test("ignored files are left out - even with glob characters in their names", async () => {
    await write(PERUSH_FILE, "v1\n");
    await write(OTHER_PERUSH_FILE, "v1\n");
    expect(await changedPaths(scope([OTHER_PERUSH_FILE]))).toEqual([PERUSH_FILE]);
  });
});

describe("commitPerushChanges", () => {
  test("commits the scope's changes (including new files) - and nothing the user staged elsewhere", async () => {
    await write(OTHER_FILE, "v1\n");
    await git("add", OTHER_FILE);                                       // the user's unrelated staged work
    await write(PERUSH_FILE, "v1\n");
    await write(APPENDIX_FILE, "v1\n");
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");

    const hash = await commitPerushChanges(scope(), "Cycle 1: perush update by milo (פגישה)");

    expect(hash).toMatch(/^[0-9a-f]{40}$/);
    expect(await filesOfCommit("HEAD")).toEqual([APPENDIX_FILE, PERUSH_FILE, "פירוש/1-בראשית/חדש.rtl.md"].sort());
    expect((await git("log", "-1", "--format=%s")).trim()).toBe("Cycle 1: perush update by milo (פגישה)");
    expect(await staged()).toEqual([OTHER_FILE]);                      // still staged
    expect(await detectPerushChanges(scope())).toEqual([]);
  });

  test("never commits an ignored file", async () => {
    await write(PERUSH_FILE, "v1\n");
    await write(OTHER_PERUSH_FILE, "v1\n");
    await commitPerushChanges(scope([OTHER_PERUSH_FILE]), "cycle");
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE]);
    expect(await read(OTHER_PERUSH_FILE)).toBe("v1\n");                 // untouched, still uncommitted
  });

  test("onlyPaths commits exactly those files - including a deletion and both sides of a rename", async () => {
    await write(PERUSH_FILE, "v1\n");
    await rm(join(repo, APPENDIX_FILE));
    await git("mv", LINGUAL_FILE, "בלשנות/ניתוחים-לשוניים/עד-חדש.rtl.md");
    await write(OTHER_PERUSH_FILE, "v1\n");                             // not chosen - stays uncommitted

    await commitPerushChanges(scope(), "Pre-meeting state",
        [PERUSH_FILE, APPENDIX_FILE, "בלשנות/ניתוחים-לשוניים/עד-חדש.rtl.md", LINGUAL_FILE]);

    expect(await filesOfCommit("HEAD")).toEqual(
        [APPENDIX_FILE, LINGUAL_FILE, "בלשנות/ניתוחים-לשוניים/עד-חדש.rtl.md", PERUSH_FILE].sort());
    expect(await changedPaths(scope())).toEqual([OTHER_PERUSH_FILE]);
  });

  test("returns null when there is nothing to commit", async () => {
    expect(await commitPerushChanges(scope(), "nothing")).toBeNull();
  });
});

describe("safety", () => {
  test("without a scratch repository, nothing touches the real main (NODE_ENV=test)", async () => {
    setPerushGitRootForTests(undefined);
    expect(await detectPerushChanges(scope())).toEqual([]);
    expect(await commitPerushChanges(scope(), "x")).toBeNull();
    expect(await getPerushHead()).toBeNull();
    expect(await rollbackPerushOnMain(scope(), "HEAD", "x", "y")).toEqual({ checkpointed: false, rolledBack: false });
  });

  test("a tracked folder that doesn't exist doesn't break committing the others", async () => {
    await git("rm", "-r", "-q", "בלשנות");
    await git("commit", "-q", "-m", "remove the lingual folder");
    await write(PERUSH_FILE, "v1\n");
    expect(await commitPerushChanges(scope(), "cycle")).not.toBeNull();
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE]);
  });

  test("with no tracked folder at all, never commits the user's staged files (\"commit --\" would commit the whole index)", async () => {
    await git("rm", "-r", "-q", "פירוש", "נספחים-לפירוש", "בלשנות");
    await git("commit", "-q", "-m", "remove the tracked folders");
    await write(OTHER_FILE, "v1\n");
    await git("add", OTHER_FILE);
    const head = await getPerushHead();

    expect(await commitPerushChanges(scope(), "cycle")).toBeNull();
    expect(await rollbackPerushOnMain(scope(), head!, "x", "y")).toEqual({ checkpointed: false, rolledBack: false });
    expect(await getPerushHead()).toBe(head);
    expect(await staged()).toEqual([OTHER_FILE]);
  });
});

describe("when git fails", () => {
  test("a failed commit throws - it is never mistaken for \"nothing to commit\"", async () => {
    await write(PERUSH_FILE, "v1\n");
    await writeFile(join(repo, ".git/index.lock"), "");                 // e.g. an IDE's git holds the lock
    await expect(commitPerushChanges(scope(), "cycle")).rejects.toThrow("index.lock");
  });

  test("rollback aborts - without touching the uncommitted edits - when they can't be committed first", async () => {
    const baseline = (await getPerushHead())!;
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChanges(scope(), "cycle 1");
    await write(LINGUAL_FILE, "the Director's uncommitted edit\n");
    await writeFile(join(repo, ".git/index.lock"), "");

    const result = await rollbackPerushOnMain(scope(), baseline, "before rollback", "rollback");

    expect(result).toEqual({ checkpointed: false, rolledBack: false });
    expect(await read(LINGUAL_FILE)).toBe("the Director's uncommitted edit\n");
    expect(await read(PERUSH_FILE)).toBe("v1\n");
  });
});

describe("a tracked folder that git doesn't know", () => {
  test("holding only gitignored files - is skipped, instead of failing every git command", async () => {
    await git("rm", "-r", "-q", "נספחים-לפירוש");
    await git("commit", "-q", "-m", "remove the appendices");
    await write(".gitignore", ".DS_Store\n");
    await git("add", ".gitignore");
    await git("commit", "-q", "-m", "gitignore");
    await write("נספחים-לפירוש/.DS_Store", "junk");
    await write(PERUSH_FILE, "v1\n");

    expect(await changedPaths(scope())).toEqual([PERUSH_FILE]);
    expect(await commitPerushChanges(scope(), "cycle")).not.toBeNull();
  });

  test("holding new files - is included", async () => {
    await git("rm", "-r", "-q", "נספחים-לפירוש");
    await git("commit", "-q", "-m", "remove the appendices");
    await write("נספחים-לפירוש/חדש.rtl.md", "new\n");
    expect(await changedPaths(scope())).toEqual(["נספחים-לפירוש/חדש.rtl.md"]);
  });
});

describe("rollbackPerushOnMain", () => {
  test("restores the files of the recorded commit, removes later files, and keeps the user's other staged work", async () => {
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChanges(scope(), "cycle 1");
    const cycle1 = (await getPerushHead())!;

    await write(PERUSH_FILE, "v2\n");
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");
    await commitPerushChanges(scope(), "cycle 2");

    await write(OTHER_FILE, "v1\n");
    await git("add", OTHER_FILE);

    const result = await rollbackPerushOnMain(scope(), cycle1, "before rollback", "rollback to cycle 1");

    expect(result).toEqual({ checkpointed: false, rolledBack: true });
    expect(await read(PERUSH_FILE)).toBe("v1\n");
    expect(await exists("פירוש/1-בראשית/חדש.rtl.md")).toBe(false);
    expect((await git("log", "-1", "--format=%s")).trim()).toBe("rollback to cycle 1");
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE, "פירוש/1-בראשית/חדש.rtl.md"].sort());
    expect(await staged()).toEqual([OTHER_FILE]);                      // not swept in
    expect(await detectPerushChanges(scope())).toEqual([]);
  });

  test("uncommitted changes are committed first (nothing lost, no stash) - then rolled back", async () => {
    const baseline = (await getPerushHead())!;
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChanges(scope(), "cycle 1");
    await write(LINGUAL_FILE, "the Director's uncommitted edit\n");
    await write("פירוש/1-בראשית/טיוטה.rtl.md", "draft\n");

    const result = await rollbackPerushOnMain(scope(), baseline, "before rollback", "rollback to cycle 0");

    expect(result).toEqual({ checkpointed: true, rolledBack: true });
    expect(await read(PERUSH_FILE)).toBe(`${PERUSH_FILE} v0\n`);
    expect(await read(LINGUAL_FILE)).toBe(`${LINGUAL_FILE} v0\n`);
    expect(await exists("פירוש/1-בראשית/טיוטה.rtl.md")).toBe(false);
    expect((await git("log", "-2", "--format=%s")).trim().split("\n")).toEqual(["rollback to cycle 0", "before rollback"]);
    expect(await git("show", `HEAD~1:${LINGUAL_FILE}`)).toBe("the Director's uncommitted edit\n");   // kept in history
    expect((await git("stash", "list")).trim()).toBe("");
  });

  test("ignored files are never touched - not committed, not restored", async () => {
    const baseline = (await getPerushHead())!;
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChanges(scope(), "cycle 1");
    await write(OTHER_PERUSH_FILE, "the Director's unrelated work\n");

    await rollbackPerushOnMain(scope([OTHER_PERUSH_FILE]), baseline, "before rollback", "rollback");

    expect(await read(PERUSH_FILE)).toBe(`${PERUSH_FILE} v0\n`);
    expect(await read(OTHER_PERUSH_FILE)).toBe("the Director's unrelated work\n");
    expect(await changedPaths(scope())).toEqual([OTHER_PERUSH_FILE]);
  });
});
