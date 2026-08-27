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

/**
 * Returns a real, entity-specific last-modified date derived from git's
 * per-line history (`git log -L`), for content files that hold several
 * independent entities in one file (e.g. content/data/authors.ts — one file
 * per author isn't practical, but each author's own block can still get an
 * honest, individual date this way instead of every entity in the file
 * sharing one file-level timestamp).
 *
 * `anchorText` must be a string unique to one line within the entity's
 * block (a slug is the natural choice) — that line becomes the start of the
 * tracked range; the range ends just before the next line matching
 * `nextEntityLinePattern` (or after a 25-line cap, whichever comes first),
 * so it only covers this one entity's fields.
 *
 * Falls back to the whole file's date (via getFileLastModified) if the
 * anchor can't be found or git's line-range history lookup fails for any
 * reason — never silently returns something worse than the file-level date
 * this replaces.
 */
export function getEntityLastModified(
  relativePath: string,
  anchorText: string,
  nextEntityLinePattern: RegExp,
  fallback: Date
): Date {
  const cacheKey = `${relativePath}::${anchorText}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  let result: Date;
  try {
    // turbopackIgnore: see note in getFileLastModified above.
    const fullPath = path.join(/* turbopackIgnore: true */ process.cwd(), relativePath);
    const lines = fs.readFileSync(fullPath, "utf8").split("\n");
    const startIdx = lines.findIndex((l) => l.includes(anchorText));
    if (startIdx === -1) throw new Error("anchor not found");

    let endIdx = startIdx;
    for (let i = startIdx + 1; i < lines.length && i < startIdx + 25; i++) {
      if (nextEntityLinePattern.test(lines[i])) break;
      endIdx = i;
    }

    const out = execSync(
      `git log -L ${startIdx + 1},${endIdx + 1}:"${relativePath}" --format=%aI -1 --no-patch`,
      { cwd: process.cwd(), stdio: ["ignore", "pipe", "ignore"] }
    )
      .toString()
      .trim()
      .split("\n")[0];

    if (!out) throw new Error("no git history for entity range");
    result = new Date(out);
  } catch {
    result = getFileLastModified(relativePath, fallback);
  }

  cache.set(cacheKey, result);
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
