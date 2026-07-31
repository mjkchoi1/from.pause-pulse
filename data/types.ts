export type MediaKind = "render" | "drawing" | "diagram" | "photo" | "board";

export interface Media {
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: MediaKind;
  caption?: string;
}

/**
 * Section types are deliberately few. Renders/photos display as figures
 * (cover-style, may bleed); drawings/diagrams display contained on a quiet
 * background and open in the drawing viewer.
 */
export type Section =
  | {
      type: "text";
      heading?: string;
      body: string[];
      /** optional korean line shown under the heading */
      ko?: string;
    }
  | {
      type: "image";
      media: Media;
      /** full = edge-to-edge, wide = content width, inset = 8/12 cols */
      size?: "full" | "wide" | "inset";
    }
  | { type: "pair"; items: [Media, Media] }
  | {
      /** ordered diagrams or drawings with an optional shared heading */
      type: "sequence";
      heading?: string;
      intro?: string;
      items: Media[];
      /** columns at desktop: 1 stacks, 2 pairs */
      columns?: 1 | 2;
    }
  | {
      /** program/fact list rendered as a quiet table */
      type: "list";
      heading?: string;
      rows: { label: string; value: string }[];
    };

export interface Project {
  slug: string;
  title: string;
  titleKo?: string;
  /** display year, omit when unverified */
  year?: string;
  category: string;
  location?: string;
  status: "selected" | "other";
  /** ordering inside its group */
  order: number;
  /** short line for indexes */
  summary: string;
  meta: { label: string; value: string }[];
  intro: string[];
  /** absent for text-led entries such as the research essay */
  hero?: Media;
  sections: Section[];
  credits: { label: string; value: string }[];
}
