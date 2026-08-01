"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useDrawingViewer } from "./DrawingViewer";
import Reveal from "./Reveal";
import type { Media } from "@/data/types";

const enlargeable = (m: Media) =>
  m.kind === "drawing" || m.kind === "diagram" || m.kind === "board";

/*
  What the register says. Renders and photographs are left unmarked — nobody
  mistakes a render for a measured drawing, and marking them would be noise.
*/
const REGISTER: Partial<Record<Media["kind"], string>> = {
  drawing: "Drawing",
  diagram: "Diagram",
  board: "Sheet",
};

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
  const register = canEnlarge ? REGISTER[media.kind] : undefined;

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
      {media.caption || register ? (
        <figcaption
          className={`mt-2.5 flex gap-x-4 gap-y-1 ${
            captionAlign === "end" ? "flex-row-reverse" : ""
          } ${register ? "flex-wrap justify-between" : ""}`}
        >
          {media.caption ? (
            <span
              className={`caption text-muted ${captionAlign === "end" ? "text-right" : ""}`}
            >
              {media.caption}
            </span>
          ) : (
            <span />
          )}
          {register ? (
            <span className="register mt-px text-faint">{register}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
