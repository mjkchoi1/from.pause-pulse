import Image from "next/image";
import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, plansSection } from "@/data/project";

export default function PlansGallery() {
  return (
    <section id="plans" className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="10" label="Plans" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl">
            Drawings, <span className="italic">floor by floor.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-loose text-muted">
            {plansSection.intro}
          </p>
        </FadeIn>

        {/* drawing index */}
        <FadeIn className="mt-16" delay={0.1}>
          <ol className="border-t border-line">
            {plansSection.list.map((plan, i) => (
              <li
                key={plan.floor + plan.name}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-line py-4"
              >
                <span className="col-span-2 text-[10px] uppercase tracking-[0.24em] text-muted/70 sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-3 font-serif text-xl text-accent sm:col-span-2">
                  {plan.floor}
                </span>
                <span className="col-span-7 text-sm leading-relaxed text-ink sm:col-span-9">
                  {plan.name}
                </span>
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn className="mt-20" delay={0.1}>
          <Figure
            src={images.plan1f.src}
            alt={images.plan1f.alt}
            width={images.plan1f.width}
            height={images.plan1f.height}
            sizes="(min-width: 1024px) 90vw, 100vw"
            plate={{
              no: "DWG 01",
              title: "1F Site Plan — Urban Promenade",
              scale: "1:200 · A3",
            }}
          />
        </FadeIn>

        <FadeIn className="mt-24" delay={0.1}>
          <div className="border border-line bg-surface p-3 sm:p-6">
            <div
              className="drawing-scroll overflow-x-auto"
              role="group"
              aria-label="Horizontal viewer for the 2F to 7F floor plan strip"
              tabIndex={0}
            >
              <Image
                src={images.floorPlanStrip.src}
                alt={images.floorPlanStrip.alt}
                width={images.floorPlanStrip.width}
                height={images.floorPlanStrip.height}
                sizes="200vw"
                className="h-[420px] w-auto max-w-none sm:h-[540px] lg:h-[620px]"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line pt-3 sm:mt-5 sm:pt-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-muted">
                <span className="text-accent">DWG 02</span> — 2F–7F Plans:
                Lifelong Growth Hub · Active Living Zone · Residential Zone
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-muted/70">
                Scroll sideways to read →
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
