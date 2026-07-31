"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/types";

function Row({
  project,
  n,
  onHover,
}: {
  project: Project;
  n: number;
  onHover: (p: Project | null) => void;
}) {
  return (
    <li className="border-t border-line last:border-b">
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={() => onHover(project)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(project)}
        onBlur={() => onHover(null)}
        className="group grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-x-3 py-4 md:grid-cols-[2.25rem_minmax(0,1fr)_auto] md:py-5"
      >
        <span className="label text-faint">{String(n).padStart(2, "0")}</span>
        <span className="min-w-0">
          <span className="block text-[1.0625rem] leading-snug tracking-[-0.01em] md:text-xl">
            <span className="rule-link">{project.title}</span>
          </span>
          {project.titleKo ? (
            <span className="label mt-1 block text-faint">{project.titleKo}</span>
          ) : null}
          <span className="label mt-1.5 block text-muted md:hidden">
            {project.category}
            {project.location ? ` · ${project.location}` : ""}
            {project.year ? ` · ${project.year}` : ""}
          </span>
        </span>
        <span className="label hidden shrink-0 text-right text-muted md:block">
          {project.category}
          {project.location ? ` · ${project.location}` : ""}
          {project.year ? (
            <span className="ml-3 inline-block w-9 text-right tabular-nums text-faint">
              {project.year}
            </span>
          ) : (
            <span className="ml-3 inline-block w-9" />
          )}
        </span>
      </Link>

      {/* Narrower screens get a contained thumbnail — there is no preview
          column to rely on, and a full-width image per row would destroy the
          density that makes this an index. */}
      {project.hero ? (
        <Link href={`/work/${project.slug}`} className="mb-4 block xl:hidden" tabIndex={-1}>
          <Image
            src={project.hero.src}
            alt=""
            width={project.hero.width}
            height={project.hero.height}
            sizes="50vw"
            loading="lazy"
            className="h-auto max-h-36 w-auto"
          />
        </Link>
      ) : null}
    </li>
  );
}

export default function WorkIndex({
  selected,
  other,
}: {
  selected: Project[];
  other: Project[];
}) {
  const [preview, setPreview] = useState<Project | null>(null);
  const shown = preview ?? selected[0];

  return (
    <div className="grid12">
      <div className="col-span-12 xl:col-span-7">
        <h2 className="label border-t border-line-strong pt-3 text-ink">Selected Work</h2>
        <ol className="mt-2">
          {selected.map((p, i) => (
            <Row key={p.slug} project={p} n={i + 1} onHover={setPreview} />
          ))}
        </ol>

        <h2 className="label mt-16 border-t border-line-strong pt-3 text-ink md:mt-24">
          Other Work
        </h2>
        <p className="label mt-2 text-faint">Client work · Research · Technical study</p>
        <ol className="mt-2">
          {other.map((p, i) => (
            <Row key={p.slug} project={p} n={selected.length + i + 1} onHover={setPreview} />
          ))}
        </ol>
      </div>

      {/* Wide-screen preview — follows the row under the cursor. Below 1280
          the list needs the full width, so each row carries its own
          thumbnail instead. */}
      <div className="col-span-4 col-start-9 hidden xl:block">
        <div className="sticky top-24">
          {shown?.hero ? (
            <>
              <div
                className={
                  shown.hero.kind === "board" || shown.hero.kind === "drawing"
                    ? "bg-field p-4"
                    : undefined
                }
              >
                <Image
                  key={shown.hero.src}
                  src={shown.hero.src}
                  alt=""
                  width={shown.hero.width}
                  height={shown.hero.height}
                  sizes="33vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="label mt-2.5 text-faint">{shown.title}</p>
            </>
          ) : (
            <p className="label text-faint">{shown?.title}</p>
          )}
        </div>
      </div>
    </div>
  );
}
