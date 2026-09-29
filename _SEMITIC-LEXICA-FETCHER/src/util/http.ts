/**
 * Polite HTTP client: one request at a time per host, minimum delay per host,
 * robots.txt compliance, retries with exponential back-off, on-disk cache.
 *
 * Design rule: this client never sends credentials, never follows "borrow"/DRM
 * flows and never spoofs a browser. It identifies itself and gives a contact.
 */
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { crawlDelayFor, isAllowed, parseRobots, type RobotsRules } from './robots.js';

export interface HttpClientOptions {
  userAgent?: string;
  /** Minimum gap between two requests to the same host. Default 2000 ms. */
  minDelayMs?: number;
  maxRetries?: number;
  cacheDir?: string;
  respectRobots?: boolean;
  timeoutMs?: number;
}

export interface HttpResponse {
  url: string;
  status: number;
  headers: Record<string, string>;
  body: Buffer;
  fromCache: boolean;
  text(): string;
  json<T = unknown>(): T;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class RobotsDisallowed extends Error {
  constructor(url: string) { super(`robots.txt disallows ${url}`); }
}

export class PoliteHttpClient {
  readonly userAgent: string;
  private readonly minDelayMs: number;
  private readonly maxRetries: number;
  private readonly cacheDir: string;
  private readonly respectRobots: boolean;
  private readonly timeoutMs: number;
  private readonly lastAt = new Map<string, number>();
  private readonly hostQueue = new Map<string, Promise<unknown>>();
  private readonly robots = new Map<string, RobotsRules | null>();

  constructor(opts: HttpClientOptions = {}) {
    const contact = process.env.SLF_CONTACT ?? 'contact-not-set';
    this.userAgent = opts.userAgent ?? `semitic-lexica-fetcher/0.1 (+research use; ${contact})`;
    this.minDelayMs = opts.minDelayMs ?? 2000;
    this.maxRetries = opts.maxRetries ?? 3;
    this.cacheDir = opts.cacheDir ?? (process.env.SLF_CACHE_DIR ?? path.resolve('cache'));
    this.respectRobots = opts.respectRobots ?? true;
    this.timeoutMs = opts.timeoutMs ?? 60_000;
  }

  /** GET with cache. `accept` narrows the Accept header (e.g. 'application/json'). */
  async get(url: string, opts: { accept?: string; noCache?: boolean } = {}): Promise<HttpResponse> {
    const key = createHash('sha1').update(url).digest('hex');
    const cacheBody = path.join(this.cacheDir, key + '.body');
    const cacheMeta = path.join(this.cacheDir, key + '.json');
    if (!opts.noCache) {
      try {
        const meta = JSON.parse(await fs.readFile(cacheMeta, 'utf8')) as { status: number; headers: Record<string, string> };
        const body = await fs.readFile(cacheBody);
        return this.wrap(url, meta.status, meta.headers, body, true);
      } catch { /* miss */ }
    }
    const u = new URL(url);
    if (this.respectRobots && !(await this.allowedByRobots(u))) throw new RobotsDisallowed(url);

    const res = await this.serialized(u.host, () => this.fetchWithRetry(url, opts.accept));
    if (res.status >= 200 && res.status < 300) {
      await fs.mkdir(this.cacheDir, { recursive: true });
      await fs.writeFile(cacheBody, res.body);
      await fs.writeFile(cacheMeta, JSON.stringify({ status: res.status, headers: res.headers, url }));
    }
    return res;
  }

  private wrap(url: string, status: number, headers: Record<string, string>, body: Buffer, fromCache: boolean): HttpResponse {
    return {
      url, status, headers, body, fromCache,
      text: () => body.toString('utf8'),
      json: <T,>() => JSON.parse(body.toString('utf8')) as T,
    };
  }

  private async serialized<T>(host: string, fn: () => Promise<T>): Promise<T> {
    const prev = this.hostQueue.get(host) ?? Promise.resolve();
    const run = prev.catch(() => undefined).then(async () => {
      const delay = await this.delayFor(host);
      const wait = (this.lastAt.get(host) ?? 0) + delay - Date.now();
      if (wait > 0) await sleep(wait);
      try { return await fn(); } finally { this.lastAt.set(host, Date.now()); }
    });
    this.hostQueue.set(host, run);
    return run;
  }

  private async delayFor(host: string): Promise<number> {
    const rules = this.robots.get(host);
    const cd = rules ? crawlDelayFor(rules, this.userAgent) : undefined;
    return Math.max(this.minDelayMs, cd ? cd * 1000 : 0);
  }

  private async allowedByRobots(u: URL): Promise<boolean> {
    if (u.pathname === '/robots.txt') return true;
    if (!this.robots.has(u.host)) {
      const robotsUrl = `${u.protocol}//${u.host}/robots.txt`;
      try {
        const r = await this.serialized(u.host, () => this.fetchWithRetry(robotsUrl, 'text/plain', 1));
        this.robots.set(u.host, r.status === 200 ? parseRobots(r.text()) : null);
      } catch {
        this.robots.set(u.host, null);
      }
    }
    const rules = this.robots.get(u.host);
    return rules ? isAllowed(rules, this.userAgent, u.pathname + u.search) : true;
  }

  private async fetchWithRetry(url: string, accept?: string, retries = this.maxRetries): Promise<HttpResponse> {
    let lastErr: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), this.timeoutMs);
        try {
          const res = await fetch(url, {
            headers: { 'user-agent': this.userAgent, accept: accept ?? '*/*' },
            redirect: 'follow',
            signal: ctrl.signal,
          });
          const body = Buffer.from(await res.arrayBuffer());
          const headers: Record<string, string> = {};
          res.headers.forEach((v, k) => { headers[k] = v; });
          if ((res.status === 429 || res.status >= 500) && attempt < retries) {
            const ra = Number(res.headers.get('retry-after'));
            await sleep(Number.isFinite(ra) && ra > 0 ? ra * 1000 : 2000 * 2 ** attempt);
            continue;
          }
          return this.wrap(res.url || url, res.status, headers, body, false);
        } finally { clearTimeout(timer); }
      } catch (e) {
        lastErr = e;
        if (attempt < retries) await sleep(2000 * 2 ** attempt);
      }
    }
    throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
  }
}

let shared: PoliteHttpClient | undefined;
export function http(): PoliteHttpClient {
  return (shared ??= new PoliteHttpClient());
}
