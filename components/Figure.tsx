"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDrawingViewer } from "./DrawingViewer";
import Reveal from "./Reveal";
import type { Media } from "@/data/types";

const enlargeable = (m: Media) =>
  m.kind === "drawing" || m.kind === "diagram" || m.kind === "board";

export default function Figure({
  media,
  sizes = "100vw",
  priority = false,
  className = "",
  captionAlign = "start",
}: {
  media: Media;
  sizes?: string;
  priority?: boolean;
  className?: string;
  captionAlign?: "start" | "end";
}) {
  const viewer = useDrawingViewer();
  const canEnlarge = enlargeable(media) && !!viewer;

  useEffect(() => {
    if (canEnlarge) viewer?.register(media);
  }, [canEnlarge, viewer, media]);

  const image = (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className="h-auto w-full"
    />
  );

  return (
    <figure className={className}>
      <Reveal>
        {canEnlarge ? (
          <button
            type="button"
            onClick={() => viewer?.open(media.src)}
            aria-label={`Enlarge — ${media.alt}`}
            className="block w-full cursor-zoom-in bg-field p-3 sm:p-5 md:p-7"
          >
            {image}
          </button>
        ) : (
          image
        )}
      </Reveal>
      {media.caption ? (
        <figcaption
          className={`caption mt-2.5 text-muted ${captionAlign === "end" ? "text-right" : ""}`}
        >
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
