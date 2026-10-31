#!/usr/bin/env node
// quota-related-instructions.ts - when may Claude use the user's shared quota for long background work, and how much?
// A single executable: run it as-is (`claude/quota-related-instructions.ts ...`) - the shebang runs node, and node
// (22.18+) runs a .ts file directly, with no flags. Keep the .ts extension: node decides by it that the file is TypeScript.
//
// The user's Claude subscription is shared by every session they run. Long background work (e.g. the ancient-texts
// translations) may use it only in two time ranges a week, when the user does not work:
//   A - Shabbat: from 1 hour before Shabbat enters until 4 hours before it exits (Tel Aviv times).
//       The 5-hour limit may be used up; the weekly limit must stay below its warning level. 1 agent at a time.
//   B - Monday night: from Monday 00:00 Israel time until the weekly limit resets (Monday 07:00 UTC).
//       Everything left may be used, warnings included. Up to 3 agents at a time.
// Outside them: no such work at all. Generic - not tied to one project. Its output is written for Claude.
//
// Usage:
//   claude/quota-related-instructions.ts                    the instructions (prompt-like): the rules, the coming ranges, now
//   claude/quota-related-instructions.ts check INFO         the gate: one verdict line, "GO ..." (exit 0) or "WAIT <UTC> ..." (exit 3)
//        INFO = the `rate_limit_info` object of `get_session` (no session id), as JSON, e.g.
//               '{"status":"allowed","rateLimitType":"five_hour","resetsAt":1793364000,"isUsingOverage":false}'
//               (the whole get_session JSON works too), or positional: STATUS [TYPE [RESETS_AT [OVERAGE]]]
//   claude/quota-related-instructions.ts ranges [N]         the next N time ranges (default 6)
//   claude/quota-related-instructions.ts at ISO-UTC [INFO]  "check" (or, without INFO, "ranges") at another moment - for tests
//   claude/quota-related-instructions.ts selftest           the verdict logic on fixed cases
//
// Shabbat times: a local sunset calculation for Tel Aviv (enter = candle lighting = sunset - 18 min; exit = havdalah =
// the sun 8.5 degrees below the horizon). Within a few minutes of the published times - enough: the ranges' own edges
// (1 hour, 4 hours) are rough anyway. No network.

// ------------------------------------------------------------------------------------------------ the rules
const MIN = 60_000;
const HOUR = 60 * MIN;
const SHABBAT_START_BEFORE = 1 * HOUR;      // range A starts 1 hour before Shabbat enters
const SHABBAT_END_BEFORE = 4 * HOUR;        // ... and ends 4 hours before it exits
const WEEKLY_RESET_UTC = { weekday: 1, hour: 7 };   // the weekly limit resets on Monday 07:00 UTC (weekday: 0 = Sunday)
const AGENTS = { A: 1, B: 3 } as const;     // Claude agents working at the same time, per range
const AGENTS_NEAR_LIMIT = 1;                // range B, when `utilization` (reported only near a threshold) >= NEAR_LIMIT
const NEAR_LIMIT = 0.9;
const END_MARGIN = 15 * MIN;                // less than this left in a range: start no new heavy step
const RESUME_AFTER_RESET = 3 * MIN;         // wake up this long after a limit's resetsAt

const TZ = "Asia/Jerusalem";
const LAT = 32.08088, LON = 34.78057;       // Tel Aviv
const CANDLES_BEFORE_SUNSET = 18 * MIN;
const HAVDALAH_SUN_ALTITUDE = -8.5;

type Kind = keyof typeof AGENTS;
const NAMES: Record<Kind, string> = { A: "A - Shabbat", B: "B - Monday night, before the weekly reset" };
type Range = { kind: Kind; start: number; end: number; enter?: number; exit?: number };
type Info = { status?: string; rateLimitType?: string; resetsAt?: number | string; isUsingOverage?: boolean | string; utilization?: number | string };
type Verdict = { go: boolean; when: number; kind: Kind; agents: number; why: string };

// ------------------------------------------------------------------------------------------------ time helpers
const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", weekday: "short",
});
function local(t: number) {
    const p = Object.fromEntries(parts.formatToParts(new Date(t)).map(x => [x.type, x.value]));
    return { y: +p.year, mo: +p.month, d: +p.day, h: +p.hour, mi: +p.minute, wd: p.weekday as string };
}
function offset(t: number): number {          // local - UTC, in ms
    const l = local(t);
    return Date.UTC(l.y, l.mo - 1, l.d, l.h, l.mi) - Math.floor(t / MIN) * MIN;
}
function localToUtc(y: number, mo: number, d: number, h = 0, mi = 0): number {
    const wall = Date.UTC(y, mo - 1, d, h, mi);
    let t = wall - offset(wall);
    t = wall - offset(t);
    return t;
}
const pad = (n: number) => String(n).padStart(2, "0");
function fmt(t: number): string {
    const l = local(t), u = new Date(t);
    const mon = new Date(Date.UTC(l.y, l.mo - 1, l.d)).toLocaleString("en-GB", { month: "short", timeZone: "UTC" });
    return `${l.wd} ${pad(l.d)} ${mon} ${pad(l.h)}:${pad(l.mi)} Israel (${pad(u.getUTCHours())}:${pad(u.getUTCMinutes())} UTC)`;
}
const iso = (t: number) => new Date(Math.floor(t / MIN) * MIN).toISOString().replace(/:00\.000Z$/, ":00Z");
function left(ms: number): string {
    const m = Math.floor(ms / MIN);
    return m >= 1440 ? `${Math.floor(m / 1440)}d ${Math.floor((m % 1440) / 60)}h ${m % 60}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
}

// ------------------------------------------------------------------------------------------------ Shabbat times
const rad = (x: number) => (x * Math.PI) / 180, deg = (x: number) => (x * 180) / Math.PI;
/** The evening moment (UTC ms) when the sun goes down past `altitude` degrees, on the local date y-mo-d (NOAA formulas). */
function sunDown(y: number, mo: number, d: number, altitude: number): number {
    let t = localToUtc(y, mo, d, 12);
    for (let i = 0; i < 2; i++) {
        const jc = (t / 86_400_000 + 2440587.5 - 2451545) / 36525;
        const l0 = (280.46646 + jc * (36000.76983 + jc * 0.0003032)) % 360;
        const m = 357.52911 + jc * (35999.05029 - 0.0001537 * jc);
        const e = 0.016708634 - jc * (0.000042037 + 0.0000001267 * jc);
        const c = Math.sin(rad(m)) * (1.914602 - jc * (0.004817 + 0.000014 * jc)) + Math.sin(rad(2 * m)) * (0.019993 - 0.000101 * jc) + Math.sin(rad(3 * m)) * 0.000289;
        const lambda = l0 + c - 0.00569 - 0.00478 * Math.sin(rad(125.04 - 1934.136 * jc));
        const eps = 23 + (26 + (21.448 - jc * (46.815 + jc * (0.00059 - jc * 0.001813))) / 60) / 60 + 0.00256 * Math.cos(rad(125.04 - 1934.136 * jc));
        const dec = deg(Math.asin(Math.sin(rad(eps)) * Math.sin(rad(lambda))));
        const yy = Math.tan(rad(eps / 2)) ** 2;
        const eqt = 4 * deg(yy * Math.sin(2 * rad(l0)) - 2 * e * Math.sin(rad(m)) + 4 * e * yy * Math.sin(rad(m)) * Math.cos(2 * rad(l0))
            - 0.5 * yy * yy * Math.sin(4 * rad(l0)) - 1.25 * e * e * Math.sin(2 * rad(m)));
        const cosH = (Math.sin(rad(altitude)) - Math.sin(rad(LAT)) * Math.sin(rad(dec))) / (Math.cos(rad(LAT)) * Math.cos(rad(dec)));
        const ha = deg(Math.acos(Math.max(-1, Math.min(1, cosH))));
        t = Date.UTC(y, mo - 1, d) + (720 - 4 * LON - eqt + 4 * ha) * MIN;
    }
    return Math.round(t / MIN) * MIN;
}

// ------------------------------------------------------------------------------------------------ the ranges
function ranges(now: number): Range[] {
    const out: Range[] = [];
    for (let i = -10; i < 70; i++) {
        const day = new Date(now + i * 86_400_000);
        const l = local(day.getTime());
        if (l.wd === "Fri") {
            const sat = local(day.getTime() + 86_400_000);
            const enter = sunDown(l.y, l.mo, l.d, -0.833) - CANDLES_BEFORE_SUNSET;
            const exit = sunDown(sat.y, sat.mo, sat.d, HAVDALAH_SUN_ALTITUDE);
            out.push({ kind: "A", start: enter - SHABBAT_START_BEFORE, end: exit - SHABBAT_END_BEFORE, enter, exit });
        }
        if (day.getUTCDay() === WEEKLY_RESET_UTC.weekday) {
            const reset = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), WEEKLY_RESET_UTC.hour);
            const r = local(reset);                       // Monday 00:00 local, of the reset's local date
            out.push({ kind: "B", start: localToUtc(r.y, r.mo, r.d), end: reset });
        }
    }
    return out.filter(r => r.end > r.start).sort((a, b) => a.start - b.start);
}
const weeklyResets = (rs: Range[]) => rs.filter(r => r.kind === "B").map(r => r.end);
const current = (rs: Range[], t: number) => rs.find(r => r.start <= t && t < r.end);
/** The first moment >= t inside a range, with room for a heavy step before the range's end. */
function resumeAt(rs: Range[], t: number): { when: number; r: Range } {
    const r = rs.find(r => r.end - END_MARGIN > t);
    if (!r) throw new Error("no range found in the coming weeks - check the script");
    return { when: Math.max(t, r.start), r };
}

// ------------------------------------------------------------------------------------------------ the verdict
function parseInfo(args: string[]): Info {
    if (!args.length) return {};
    if (args[0].trim().startsWith("{")) {
        const find = (o: any): any => {
            if (!o || typeof o !== "object") return undefined;
            if ("rate_limit_info" in o) return o.rate_limit_info;
            if ("status" in o && ("rateLimitType" in o || "resetsAt" in o)) return o;
            for (const v of Object.values(o)) { const f = find(v); if (f) return f; }
            return undefined;
        };
        const o = JSON.parse(args[0]);
        return find(o) ?? o;
    }
    const [status, rateLimitType, resetsAt, isUsingOverage] = args;
    return { status, rateLimitType, resetsAt, isUsingOverage };
}
const truthy = (v: unknown) => ["true", "1", "yes"].includes(String(v).toLowerCase());
function utilization(info: Info): number | undefined {
    const u = Number(info.utilization);
    if (info.utilization === undefined || info.utilization === "" || Number.isNaN(u)) return undefined;
    return u > 1.5 ? u / 100 : u;
}

function verdict(now: number, info: Info, rs: Range[]): Verdict {
    const status = info.status, type = String(info.rateLimitType ?? "").toLowerCase();
    const resets = info.resetsAt !== undefined && info.resetsAt !== "" ? Math.floor(Number(info.resetsAt)) * 1000 : undefined;
    const wait = (t: number, why: (r: Range) => string): Verdict => { const { when, r } = resumeAt(rs, t); return { go: false, when, kind: r.kind, agents: 0, why: why(r) }; };
    const r = current(rs, now);
    if (!r) return wait(now, n => `outside the time ranges; the next one is range ${NAMES[n.kind]}`);
    const { kind, end } = r;
    if (end - now < END_MARGIN) return wait(end, () => `range ${kind} ends in ${left(end - now)}: start no new heavy step`);
    if (!status) return { go: false, when: now, kind, agents: 0, why: "the quota state is unknown: call get_session (no session id) and pass its rate_limit_info" };
    if (truthy(info.isUsingOverage))
        return wait((resets ?? end) + RESUME_AFTER_RESET, () => "isUsingOverage is true - paid extra usage is never used: stop until the limit resets");
    const weekly = type.startsWith("seven_day");
    const go = (agents: number, why: string): Verdict => ({ go: true, when: now, kind, agents, why });
    if (status === "allowed") return go(AGENTS[kind], "quota allowed");
    if (status === "allowed_warning") {
        if (kind === "B") {
            const u = utilization(info);
            if (u !== undefined && u >= NEAR_LIMIT)
                return go(AGENTS_NEAR_LIMIT, `${type || "a"} warning, utilization ${Math.round(u * 100)}%: go on, one agent only (near the limit, a stop should cut only one effort)`);
            return go(AGENTS.B, `${type || "a"} warning: range B uses everything that is left - go on`);
        }
        if (type && !weekly) return go(AGENTS.A, "5-hour warning: range A may use up the 5-hour limit - go on");
        return wait(end, n => `${weekly ? "weekly warning" : "a warning of an unknown limit type (treated as weekly)"}: range A stops at the weekly warning - resume in range ${NAMES[n.kind]}`);
    }
    if (status === "rejected") {
        if (resets === undefined) return wait(end, () => "rejected, with no resetsAt: resume in the next range");
        return wait(resets + RESUME_AFTER_RESET, n => `${type || "the limit"} rejected until ${fmt(resets)}: resume ${n.start === r.start ? "later in this range" : `in range ${NAMES[n.kind]}`}`);
    }
    return { go: false, when: now, kind, agents: 0, why: `unknown status ${JSON.stringify(status)}: expected allowed / allowed_warning / rejected` };
}

// ------------------------------------------------------------------------------------------------ output
const rangeLine = (r: Range) =>
    `- Range ${NAMES[r.kind]}: ${fmt(r.start)} - ${fmt(r.end)}${r.kind === "A" ? `; Shabbat ${fmt(r.enter!)} - ${fmt(r.exit!)}` : ""}; agents at a time: ${AGENTS[r.kind]}`;

function printCheck(now: number, info: Info, rs: Range[]): number {
    const v = verdict(now, info, rs);
    if (v.go) {
        const end = current(rs, now)!.end;
        console.log(`GO range=${v.kind} agents=${v.agents} until=${iso(end)} left=${left(end - now).replace(/ /g, "")} - ${v.why}; ` +
            `at most ${v.agents} Claude agent${v.agents > 1 ? "s" : ""} at a time, scripts without limit; range ${v.kind} ends ${fmt(end)}`);
        return 0;
    }
    console.log(`WAIT ${iso(v.when)} - ${v.why} - resume at ${fmt(v.when)}${v.when > now ? "" : " (then check again)"}`);
    if (String(info.rateLimitType ?? "").startsWith("seven_day") && info.resetsAt) {
        const r = Number(info.resetsAt) * 1000;
        if (weeklyResets(rs).every(w => Math.abs(r - w) > 30 * MIN))
            console.log(`NOTE: the weekly resetsAt (${fmt(r)}) is not on the script's weekly boundary (Monday 07:00 UTC): ` +
                `tell the user, so that WEEKLY_RESET_UTC in claude/quota-related-instructions.ts is updated`);
    }
    return 3;
}

function printInstructions(now: number, rs: Range[]) {
    const r = current(rs, now);
    const upcoming = rs.filter(x => x.end > now).slice(0, 4);
    const state = r
        ? `**Now (${fmt(now)}) is inside range ${NAMES[r.kind]}**, until ${fmt(r.end)} (${left(r.end - now)} left).`
        : `**Now (${fmt(now)}) is outside the time ranges.** The next: range ${NAMES[upcoming[0].kind]}, from ${fmt(upcoming[0].start)} (in ${left(upcoming[0].start - now)}).`;
    console.log(`# Quota-related instructions
(The output of \`claude/quota-related-instructions.ts\`.)

The user's Claude subscription is shared by all their sessions, and has two limits: a **5-hour** one, and a **weekly**
one that resets on **Monday 07:00 UTC**. Long background work (work the user did not start at this moment, such as a
multi-session process) may use the quota **only inside two time ranges**, when the user does not work - so that the
user's own Claude use is never short. Outside them it does not work at all, whatever the quota says.

${state}

## The time ranges (Israel time, UTC in brackets)
${upcoming.map(rangeLine).join("\n")}

| | Range A - Shabbat | Range B - Monday night |
|---|---|---|
| When | 1 hour before Shabbat enters, until 4 hours before it exits | Monday 00:00 Israel time, until the weekly reset |
| \`allowed\` | go on | go on |
| 5-hour \`allowed_warning\` | go on (the 5-hour limit may be used up) | go on |
| weekly \`allowed_warning\` | **stop** until range B (the user needs the rest of the week's margin) | go on (use everything left) |
| \`rejected\` | wait for its \`resetsAt\` if that is still inside the range, else the next range | the same |
| Agents at a time | **1** | **up to 3** (1 when \`utilization\` >= 90%) |

## Reading the quota state
\`get_session\` (claude-code-remote MCP, **no** session id) -> \`external_metadata.rate_limit_info\`: \`status\`
(\`allowed\` / \`allowed_warning\` / \`rejected\`), \`rateLimitType\` (\`five_hour\` / \`seven_day\`), \`resetsAt\` (epoch seconds),
\`isUsingOverage\`, and - only near a threshold - \`utilization\`. It shows **one** limit at a time (the most pressing):
a 5-hour warning may hide a weekly one, so check again at every gate. \`isUsingOverage: true\` means paid extra usage:
**never** go on with it - stop until the limit resets.

## The gate
Before every heavy step (a sub-agent, a child session, a long part of the work) and on every wake-up:
1. \`get_session\` (no id) -> copy \`rate_limit_info\` as JSON;
2. \`claude/quota-related-instructions.ts check '<that JSON>'\` (run it as-is - its shebang runs node; the path is from the repo root);
3. \`GO range=<A|B> agents=<n> until=<time> ...\` -> go on, with at most \`<n>\` Claude agents working at a time;
   \`WAIT <UTC time> ...\` -> save your work (commit; push as your project says), schedule \`send_later\` (\`at\` = that
   time) with a message that says exactly what to resume, and **end the turn**. On waking: the gate again.
A step that is already running finishes its part (it should save as it goes); the next gate stops the work. Fewer
than 15 minutes left in a range: the gate says WAIT - start nothing heavy, save, and wait for the next range.

## Agents at a time, and phasing the work
"Agents" are Claude agents producing tokens at the same time: sessions and sub-agents, counted over the whole tree of
sessions doing the work (a session that ended its turn, or only waits for its sub-agent, does not count). Scripts,
downloads and builds are **not** agents: run them in parallel without limit. So phase the work:
1. **Think** - read, plan, decide (one agent).
2. **Write the scripts** and test each on a small sample (one agent).
3. **Run them** - all at once, in the background (\`&\` / \`xargs -P\` / \`run_in_background\`); wait without polling (end
   the turn and be woken when they finish, or use Monitor) - never a \`sleep\` loop.
4. **Process the results** (one agent; in range B up to three, on independent parts).
In range B the extra agents go to **independent** tracks only (e.g. different texts or tasks, each saving its own
files); never two agents on one file. Near a limit, prefer fewer agents: a stop then cuts one effort, not three.

## Pausing and waking up
- A WAIT whose time is **inside the same range** (a 5-hour reset): the session schedules its own wake-up.
- A WAIT into **another** range: a child session (one started by another session) does not wake itself - it tells
  its parent, who decides who resumes, within the next range's agents; the top session schedules its own wake-up at
  the range's start. A parent always leaves a \`send_later\` behind when it ends its turn.
- Never keep a script running to wait (a foreground command stops at 10 minutes, a background one at 2 hours, and a
  VM can be reclaimed); \`send_later\` survives all of these.`);
}

function selftest(): number {
    const t = (s: string) => Date.parse(s + ":00Z");
    const rs = ranges(t("2026-10-30T09:00"));
    const A = rs.find(r => r.kind === "A" && r.end > t("2026-10-30T09:00"))!;
    const B = rs.find(r => r.kind === "B" && r.start > A.end)!;
    const A2 = rs.find(r => r.kind === "A" && r.start > B.end)!;
    let bad = 0;
    const near = (a: number, b: number, tol: number, what: string) => {
        const ok = Math.abs(a - b) <= tol;
        if (!ok) bad++;
        console.log(`${ok ? "ok  " : "FAIL"} ${what}: ${fmt(a)} (expected ${fmt(b)} +-${tol / MIN} min)`);
    };
    // Hebcal, Tel Aviv: candles 2026-10-30 16:32, havdalah 2026-10-31 17:29 (+02:00); 2027-04-23 18:55 / 04-24 19:54 (+03:00)
    near(A.enter!, t("2026-10-30T14:32"), 3 * MIN, "Shabbat enters");
    near(A.exit!, t("2026-10-31T15:29"), 3 * MIN, "Shabbat exits");
    const sA = ranges(t("2027-04-21T09:00")).filter(r => r.kind === "A").find(r => r.enter! > t("2027-04-22T00:00"))!;
    near(sA.enter!, t("2027-04-23T15:55"), 3 * MIN, "Shabbat enters (summer time)");
    near(sA.exit!, t("2027-04-24T16:54"), 3 * MIN, "Shabbat exits (summer time)");
    near(B.start, t("2026-11-01T22:00"), 0, "range B starts (winter: Monday 00:00 = Sunday 22:00 UTC)");
    near(B.end, t("2026-11-02T07:00"), 0, "range B ends (the weekly reset)");
    const cases: [number, Info, boolean, number | null, number][] = [
        [t("2026-10-30T09:00"), { status: "allowed" }, false, A.start, 0],
        [A.start + 30 * MIN, { status: "allowed", rateLimitType: "five_hour" }, true, null, 1],
        [A.start + 30 * MIN, { status: "allowed_warning", rateLimitType: "five_hour" }, true, null, 1],
        [A.start + 30 * MIN, { status: "allowed_warning", rateLimitType: "seven_day" }, false, B.start, 0],
        [A.start + 30 * MIN, { status: "allowed_warning" }, false, B.start, 0],
        [A.start + 30 * MIN, { status: "rejected", rateLimitType: "five_hour", resetsAt: (A.start + 3 * HOUR) / 1000 }, false, A.start + 3 * HOUR + RESUME_AFTER_RESET, 0],
        [A.end - 2 * HOUR, { status: "rejected", rateLimitType: "five_hour", resetsAt: (A.end + HOUR) / 1000 }, false, B.start, 0],
        [A.end - 10 * MIN, { status: "allowed" }, false, B.start, 0],
        [A.end + HOUR, { status: "allowed" }, false, B.start, 0],
        [B.start + HOUR, { status: "allowed_warning", rateLimitType: "seven_day" }, true, null, 3],
        [B.start + HOUR, { status: "allowed_warning", rateLimitType: "seven_day", utilization: 0.95 }, true, null, 1],
        [B.start + HOUR, { status: "allowed_warning", rateLimitType: "seven_day", utilization: 95 }, true, null, 1],
        [B.start + HOUR, { status: "rejected", rateLimitType: "seven_day", resetsAt: B.end / 1000 }, false, A2.start, 0],
        [B.start + HOUR, { status: "allowed", isUsingOverage: true, rateLimitType: "five_hour", resetsAt: (B.start + 3 * HOUR) / 1000 }, false, B.start + 3 * HOUR + RESUME_AFTER_RESET, 0],
        [B.end + HOUR, { status: "allowed" }, false, A2.start, 0],
    ];
    for (const [now, info, go, when, agents] of cases) {
        const v = verdict(now, info, rs);
        const ok = v.go === go && v.agents === agents && (when === null || v.when === when);
        if (!ok) bad++;
        console.log(`${ok ? "ok  " : "FAIL"} ${fmt(now)} ${JSON.stringify(info)} -> ${v.go ? "GO" : "WAIT"} ${fmt(v.when)} agents=${v.agents} - ${v.why}`);
    }
    // the gate's argument forms
    const full = JSON.stringify({ ccr: { external_metadata: { rate_limit_info: { status: "allowed", rateLimitType: "five_hour", resetsAt: 1 } } } });
    const forms = [parseInfo([full]).status, parseInfo(['{"status":"rejected","resetsAt":5}']).status, parseInfo(["allowed_warning", "seven_day"]).rateLimitType];
    const okForms = forms.join() === "allowed,rejected,seven_day";
    if (!okForms) bad++;
    console.log(`${okForms ? "ok  " : "FAIL"} argument forms: ${forms.join(", ")}`);
    console.log(`selftest: ${bad ? `${bad} failed` : "all passed"}`);
    return bad ? 1 : 0;
}

function main(a: string[]): number {
    let now = Math.floor(Date.now() / MIN) * MIN;
    if (a[0] === "selftest") return selftest();
    if (a[0] === "at") {
        if (!a[1]) { console.error("usage: at ISO-UTC [INFO]"); return 2; }
        now = Date.parse(/Z|[+-]\d\d:?\d\d$/.test(a[1]) ? a[1] : a[1] + "Z");
        a = a.length > 2 ? ["check", ...a.slice(2)] : ["ranges"];
    }
    const rs = ranges(now);
    if (!a.length || a[0] === "instructions") { printInstructions(now, rs); return 0; }
    if (a[0] === "check") return printCheck(now, parseInfo(a.slice(1)), rs);
    if (a[0] === "ranges") {
        const r = current(rs, now);
        console.log(`now ${fmt(now)}: ${r ? `INSIDE range ${r.kind} (until ${fmt(r.end)})` : "outside the ranges"}`);
        rs.filter(x => x.end > now).slice(0, Number(a[1] ?? 6)).forEach(x => console.log(rangeLine(x)));
        return 0;
    }
    console.error("usage: see the header of claude/quota-related-instructions.ts");
    return 2;
}

process.exit(main(process.argv.slice(2)));
