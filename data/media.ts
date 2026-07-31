import dimensions from "./asset-dimensions.json";
import type { Media, MediaKind } from "./types";

const dims = dimensions as Record<string, number[]>;

/** Build a Media entry from a published asset path, reading real dimensions. */
export function img(
  src: string,
  kind: MediaKind,
  alt: string,
  caption?: string,
): Media {
  const d = dims[src];
  if (!d) {
    throw new Error(`No dimensions recorded for ${src} — run scripts/gen-dimensions.py`);
  }
  return { src, width: d[0], height: d[1], alt, kind, caption };
}
