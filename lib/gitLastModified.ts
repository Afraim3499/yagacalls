import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Cache within a single build so we don't shell out to git repeatedly for
// the same file when sitemap.ts loops over many routes.
const cache = new Map<string, Date>();

/**
 * Returns the real last-modified date for a file tracked in this repo,
 * derived from its most recent git commit. This is used so sitemap.xml
 * reports honest per-page freshness signals instead of "today, every
 * build" (new Date()).
 *
 * Falls back to the file's on-disk mtime if git isn't available (e.g. a
 * deploy that ships a source snapshot without a .git directory), and
 * finally to the supplied fallback date if the file can't be found at all.
 */
export function getFileLastModified(relativePath: string, fallback: Date): Date {
  const cached = cache.get(relativePath);
  if (cached) return cached;

  let result = fallback;

  try {
    const out = execSync(`git log -1 --format=%aI -- "${relativePath}"`, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    if (out) {
      result = new Date(out);
    } else {
      throw new Error("no git history for file");
    }
  } catch {
    try {
      // turbopackIgnore: this is a dynamic, build-time-only file read (not
      // part of the app's runtime module graph) — without the ignore
      // comment Turbopack tries to statically trace every file this could
      // possibly resolve to, which pulls the whole repo into the trace.
      const stat = fs.statSync(path.join(/* turbopackIgnore: true */ process.cwd(), relativePath));
      result = stat.mtime;
    } catch {
      // Keep fallback.
    }
  }

  cache.set(relativePath, result);
  return result;
}

/** Returns true if app/<slug>/page.tsx exists as its own static folder route. */
export function hasStaticPageFolder(routeSegment: string): boolean {
  try {
    // turbopackIgnore: see note above.
    return fs.existsSync(path.join(/* turbopackIgnore: true */ process.cwd(), "app", routeSegment, "page.tsx"));
  } catch {
    return false;
  }
}
