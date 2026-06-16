const EQUIVALENT_TAGS: Record<string, string> = {
  "nest js": "nestjs",
  "react.js": "react",
  "html 5": "html",
  "bootstrap 4": "bootstrap",
  "bootstrap 5": "bootstrap",
};

function tagKey(tag: string): string {
  const normalized = tag.toLowerCase().trim();
  return EQUIVALENT_TAGS[normalized] ?? normalized;
}

/** Append tags that are not already present (case-insensitive, with common alias dedup). */
export function mergeTags(existing: string[], incoming: string[]): string[] {
  const seen = new Set(existing.map(tagKey));
  const merged = [...existing];

  for (const tag of incoming) {
    const key = tagKey(tag);
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(tag);
    }
  }

  return merged;
}
