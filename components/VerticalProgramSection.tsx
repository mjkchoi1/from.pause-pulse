"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { floorGroups, images } from "@/data/project";

export default function VerticalProgramSection() {
  const [active, setActive] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    groupRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // index reads top-down like the building: 5–7F at the top, 1F at the bottom
  const indexOrder = [...floorGroups].reverse();

  return (
    <section id="program" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="05" label="Vertical Program" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            From promenade to growth,
            <br />
            <span className="italic">from public maru to village.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-loose text-muted">
            The building is organized as a vertical sequence of urban, social,
            productive, wellness, and residential layers — gradually shifting
            from the public city to the intimate village. Read the section from
            the ground up.
          </p>
        </FadeIn>

        <div className="mt-24 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* sticky exploded axonometric with floor index */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="grid grid-cols-[1fr_auto] items-center gap-6">
                <figure className="min-w-0">
                  <Image
                    src={images.exploded.src}
                    alt={images.exploded.alt}
                    width={images.exploded.width}
                    height={images.exploded.height}
                    sizes="(min-width: 1024px) 34vw, 80vw"
                    className="mx-auto h-auto max-h-[78svh] w-auto object-contain lg:max-h-[calc(100svh-9rem)]"
                  />
                  <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.24em] text-muted">
                    Exploded axonometric · 1F – 7F
                  </figcaption>
                </figure>

                {/* floor index — mirrors the stack, follows the reader */}
                <nav
                  aria-label="Floor groups"
                  className="hidden flex-col justify-center gap-10 lg:flex"
                >
                  {indexOrder.map((group) => {
                    const i = floorGroups.findIndex((g) => g.id === group.id);
                    const isActive = i === active;
                    return (
                      <a
                        key={group.id}
                        href={`#fg-${group.id}`}
                        className="group flex items-center gap-3 text-right"
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span
                          aria-hidden
                          className={`h-px transition-all duration-500 ${
                            isActive ? "w-10 bg-accent" : "w-4 bg-line"
                          }`}
                        />
                        <span
                          className={`font-serif text-lg transition-colors duration-500 ${
                            isActive ? "text-ink" : "text-muted/50"
                          }`}
                        >
                          {group.floors}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* scrolling floor groups, ascending like the building */}
          <div className="flex flex-col lg:col-span-7">
            {floorGroups.map((group, i) => (
              <div
                key={group.id}
                id={`fg-${group.id}`}
                data-index={i}
                ref={(el) => {
                  groupRefs.current[i] = el;
                }}
                className={`scroll-mt-28 border-t border-line py-16 transition-opacity duration-700 first:border-t-0 first:pt-0 lg:py-24 ${
                  i === active ? "opacity-100" : "lg:opacity-35"
                }`}
              >
                <FadeIn>
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <span className="font-serif text-6xl text-accent sm:text-7xl">
                      {group.floors}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                        {group.name}
                      </h3>
                      <p className="mt-1 text-xs tracking-[0.2em] text-muted">
                        {group.ko}
                      </p>
                    </div>
                  </div>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/90">
                    {group.description}
                  </p>
                  <p className="mt-6 max-w-xl text-sm leading-loose tracking-wide text-muted">
                    {group.programs.join("  ·  ")}
                  </p>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
