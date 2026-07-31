import Image from "next/image";
import Reveal from "./Reveal";
import type { Media } from "@/data/types";

/**
 * Home-page imagery. Boards and drawings sit on the field colour so their own
 * white ground reads as a sheet; renders and photographs run to their edges.
 */
export default function HomeImage({
  media,
  sizes,
  priority = false,
}: {
  media: Media;
  sizes: string;
  priority?: boolean;
}) {
  const plate =
    media.kind === "board" || media.kind === "drawing" || media.kind === "diagram";
  return (
    <Reveal>
      <div className={plate ? "bg-field p-4 sm:p-7 md:p-10" : undefined}>
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
      </div>
    </Reveal>
  );
}
