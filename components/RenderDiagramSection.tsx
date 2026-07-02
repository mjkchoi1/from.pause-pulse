import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, renderSection } from "@/data/project";

export default function RenderDiagramSection() {
  return (
    <section id="render" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel
          index="12"
          label="Render · Exploded Diagram"
          className="mb-20"
        />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl">
            The render shows the experiential image;{" "}
            <span className="italic text-accent">
              the exploded diagram shows the architectural system.
            </span>
          </h2>
        </FadeIn>

        <FadeIn className="mt-20" delay={0.1}>
          <Figure
            src={images.hero.src}
            alt={images.hero.alt}
            width={images.hero.width}
            height={images.hero.height}
            sizes="(min-width: 1024px) 90vw, 100vw"
            caption={renderSection.renderCaption}
          />
        </FadeIn>

        <div className="mt-24 grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <Figure
              src={images.exploded.src}
              alt={images.exploded.alt}
              width={images.exploded.width}
              height={images.exploded.height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              plate={{
                no: "DIA 02",
                title: "Exploded axonometric — vertical sequence",
              }}
              caption={renderSection.diagramCaption}
            />
          </FadeIn>
          <FadeIn className="lg:col-span-5 lg:col-start-7 lg:pt-10" delay={0.2}>
            <p className="border-l border-accent pl-6 text-lg leading-relaxed text-ink/90">
              Atmosphere and logic belong together: the bright civic ground of
              the render is the lived surface of the vertical system the
              diagram describes — promenade, growth, maru, and village stacked
              into one continuous everyday rhythm.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
