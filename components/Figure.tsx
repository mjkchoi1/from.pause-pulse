import Image from "next/image";

type Plate = {
  /** drawing number, e.g. "DWG 03" */
  no: string;
  title: string;
  /** scale / sheet notation, e.g. "1:200 · A3" */
  scale?: string;
};

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  captionKo?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** wrap the image on a white drawing sheet with a hairline border */
  sheet?: boolean;
  /** technical title block rendered inside the sheet, below the drawing */
  plate?: Plate;
};

export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  captionKo,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  sheet = false,
  plate,
}: FigureProps) {
  const onSheet = sheet || Boolean(plate);

  return (
    <figure className={className}>
      <div
        className={
          onSheet ? "border border-line bg-surface p-3 sm:p-6" : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`h-auto w-full ${imgClassName}`}
        />
        {plate && (
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line pt-3 sm:mt-5 sm:pt-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted">
              <span className="text-accent">{plate.no}</span>
              <span aria-hidden> — </span>
              {plate.title}
            </span>
            {plate.scale && (
              <span className="text-[10px] uppercase tracking-[0.24em] text-muted/70">
                {plate.scale}
              </span>
            )}
          </div>
        )}
      </div>
      {(caption || captionKo) && (
        <figcaption className="mt-4 max-w-2xl">
          {caption && (
            <span className="block text-sm leading-relaxed text-muted">
              {caption}
            </span>
          )}
          {captionKo && (
            <span className="mt-1 block text-xs leading-relaxed text-muted/75">
              {captionKo}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
