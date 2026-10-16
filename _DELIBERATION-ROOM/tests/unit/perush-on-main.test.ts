/**
 * perush-on-main.test.ts — The perush-on-main flow (detect → commit → tag → rollback),
 * run against a scratch git repository with the real Hebrew folder names.
 *
 * Regression test: Bun's $`...` turned literal Hebrew into "u05E4u05D9...", so `git add פירוש/`
 * failed silently - and no cycle was ever committed, tagged, or rolled back.
 */

import { describe, test, expect, beforeEach, afterEach } from "bun:test";
import { mkdtemp, mkdir, writeFile, readFile, rm, stat } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import {
  setPerushGitRootForTests,
  detectPerushChanges,
  commitPerushChangesOnMain,
  createCorrelatedTags,
  rollbackPerushOnMain,
  generateMeetingId,
} from "../../src/meetings-db.ts";

const PERUSH_FILE = "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md";
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
  return (await git("show", "-z", "--name-only", "--format=", ref)).split("\0").filter(Boolean).sort();
}

beforeEach(async () => {
  repo = await mkdtemp(join(tmpdir(), "perush-on-main-"));
  await git("init", "-q", "-b", "main");
  await git("config", "user.name", "test");
  await git("config", "user.email", "test@example.com");
  // Deliberately NOT setting core.quotepath=false: detection must not depend on it.
  await write(PERUSH_FILE, "v0\n");
  await write(LINGUAL_FILE, "lingual v0\n");
  await write(OTHER_FILE, "other v0\n");
  await git("add", "-A");
  await git("commit", "-q", "-m", "initial");
  setPerushGitRootForTests(repo);
});

afterEach(async () => {
  setPerushGitRootForTests(undefined);
  await rm(repo, { recursive: true, force: true });
});

describe("detectPerushChanges", () => {
  test("empty when nothing changed", async () => {
    expect(await detectPerushChanges()).toEqual([]);
  });

  test("finds modified, staged and new files under the tracked folders - with unquoted Hebrew paths", async () => {
    await write(PERUSH_FILE, "v1\n");
    await write(LINGUAL_FILE, "lingual v1\n");
    await git("add", LINGUAL_FILE);
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");
    await write(OTHER_FILE, "other v1\n");          // outside the tracked folders - ignored
    expect((await detectPerushChanges()).sort()).toEqual(
      ["בלשנות/ניתוחים-לשוניים/עד.rtl.md", "פירוש/1-בראשית/1040-בראשית-ד_א-ד_יז-הבל_וקין.rtl.md", "פירוש/1-בראשית/חדש.rtl.md"].sort(),
    );
  });

  test("a staged rename reports the new path", async () => {
    await git("mv", PERUSH_FILE, "פירוש/1-בראשית/שם-חדש.rtl.md");
    expect(await detectPerushChanges()).toEqual(["פירוש/1-בראשית/שם-חדש.rtl.md"]);
  });
});

describe("commitPerushChangesOnMain", () => {
  test("commits the perush changes (including new files) - and nothing the user staged elsewhere", async () => {
    await write(OTHER_FILE, "other v1\n");
    await git("add", OTHER_FILE);                    // the user's unrelated staged work
    await write(PERUSH_FILE, "v1\n");
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");

    const hash = await commitPerushChangesOnMain(1, generateMeetingId("פגישת בדיקה", new Date()));

    expect(hash).toMatch(/^[0-9a-f]{40}$/);
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE, "פירוש/1-בראשית/חדש.rtl.md"].sort());
    expect((await git("diff", "--cached", "--name-only")).trim()).toBe(OTHER_FILE);  // still staged
    expect(await detectPerushChanges()).toEqual([]);
  });

  test("returns null when there is nothing to commit", async () => {
    expect(await commitPerushChangesOnMain(1, generateMeetingId("בדיקה", new Date()))).toBeNull();
  });
});

describe("safety under tests", () => {
  test("without a scratch repository, nothing touches the real main (NODE_ENV=test)", async () => {
    setPerushGitRootForTests(undefined);
    expect(await detectPerushChanges()).toEqual([]);
    expect(await commitPerushChangesOnMain(1, generateMeetingId("בדיקה", new Date()))).toBeNull();
    expect(await rollbackPerushOnMain(generateMeetingId("בדיקה", new Date()), 0)).toEqual({ stashed: false, rolledBack: false });
  });

  test("a tracked folder that doesn't exist doesn't break committing the others", async () => {
    await git("rm", "-r", "-q", "בלשנות");
    await git("commit", "-q", "-m", "remove the lingual folder");
    await write(PERUSH_FILE, "v1\n");
    expect(await commitPerushChangesOnMain(1, generateMeetingId("בדיקה", new Date()))).not.toBeNull();
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE]);
  });
});

describe("no tracked folder at all", () => {
  test("never commits the user's staged files (\"commit --\" with no paths would commit the whole index)", async () => {
    await git("rm", "-r", "-q", "פירוש", "בלשנות");
    await git("commit", "-q", "-m", "remove the tracked folders");
    await write(OTHER_FILE, "other v1\n");
    await git("add", OTHER_FILE);
    const head = (await git("rev-parse", "HEAD")).trim();

    expect(await commitPerushChangesOnMain(1, generateMeetingId("בדיקה", new Date()))).toBeNull();
    expect((await git("rev-parse", "HEAD")).trim()).toBe(head);
    expect((await git("diff", "--cached", "--name-only")).trim()).toBe(OTHER_FILE);
  });
});

describe("tag + rollback", () => {
  test("rollback restores the perush files of the target cycle, removes later files, and drops later tags", async () => {
    const meetingId = generateMeetingId("פגישת בדיקה", new Date());

    // Cycle 1: an agent edits the perush file
    await write(PERUSH_FILE, "v1\n");
    expect(await commitPerushChangesOnMain(1, meetingId)).not.toBeNull();
    expect(await createCorrelatedTags(repo, meetingId, 1)).toBe(true);

    // Cycle 2: an agent edits again, and adds a new file
    await write(PERUSH_FILE, "v2\n");
    await write("פירוש/1-בראשית/חדש.rtl.md", "new\n");
    expect(await commitPerushChangesOnMain(2, meetingId)).not.toBeNull();
    expect(await createCorrelatedTags(repo, meetingId, 2)).toBe(true);
    expect((await git("tag", "--list")).split("\n").filter(Boolean)).toHaveLength(4);

    // The user has unrelated staged work during the rollback
    await write(OTHER_FILE, "other v1\n");
    await git("add", OTHER_FILE);

    const result = await rollbackPerushOnMain(meetingId, 1);

    expect(result).toEqual({ stashed: false, rolledBack: true });
    expect(await read(PERUSH_FILE)).toBe("v1\n");
    expect(await exists("פירוש/1-בראשית/חדש.rtl.md")).toBe(false);
    expect(await filesOfCommit("HEAD")).toEqual([PERUSH_FILE, "פירוש/1-בראשית/חדש.rtl.md"].sort());
    expect((await git("diff", "--cached", "--name-only")).trim()).toBe(OTHER_FILE);  // not swept in
    const tags = (await git("tag", "--list")).split("\n").filter(Boolean);
    expect(tags).toHaveLength(2);
    expect(tags.every(tag => tag.includes("/c1/"))).toBe(true);
  });

  test("rollback to cycle 0 restores the state before the meeting's first perush commit", async () => {
    const meetingId = generateMeetingId("בדיקה", new Date());
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChangesOnMain(1, meetingId);
    await createCorrelatedTags(repo, meetingId, 1);

    expect((await rollbackPerushOnMain(meetingId, 0)).rolledBack).toBe(true);
    expect(await read(PERUSH_FILE)).toBe("v0\n");
  });

  test("uncommitted perush changes (including new files) are stashed before the rollback", async () => {
    const meetingId = generateMeetingId("בדיקה", new Date());
    await write(PERUSH_FILE, "v1\n");
    await commitPerushChangesOnMain(1, meetingId);
    await createCorrelatedTags(repo, meetingId, 1);
    await write(LINGUAL_FILE, "lingual uncommitted\n");
    await write("פירוש/1-בראשית/טיוטה.rtl.md", "draft\n");

    const result = await rollbackPerushOnMain(meetingId, 0);

    expect(result).toEqual({ stashed: true, rolledBack: true });
    expect(await read(PERUSH_FILE)).toBe("v0\n");
    expect(await read(LINGUAL_FILE)).toBe("lingual v0\n");
    expect(await exists("פירוש/1-בראשית/טיוטה.rtl.md")).toBe(false);
    expect((await git("stash", "list")).trim()).toContain("Pre-rollback stash");
  });
});
