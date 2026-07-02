import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, sectionsGallery } from "@/data/project";

export default function SectionsGallery() {
  return (
    <section id="sections" className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="11" label="Sections" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-3xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl">
            Two cuts through <span className="italic">one vertical life.</span>
          </h2>
        </FadeIn>

        <div className="mt-20 flex flex-col gap-24">
          <FadeIn delay={0.1}>
            <Figure
              src={images.sectionA.src}
              alt={images.sectionA.alt}
              width={images.sectionA.width}
              height={images.sectionA.height}
              sizes="(min-width: 1024px) 90vw, 100vw"
              plate={{
                no: "DWG 03",
                title: "Section A",
                scale: "1:200 · A3",
              }}
              caption={sectionsGallery.a}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Figure
              src={images.sectionB.src}
              alt={images.sectionB.alt}
              width={images.sectionB.width}
              height={images.sectionB.height}
              sizes="(min-width: 1024px) 90vw, 100vw"
              plate={{
                no: "DWG 04",
                title: "Section B",
                scale: "1:200 · A3",
              }}
              caption={sectionsGallery.b}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
