import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, promenadeSection } from "@/data/project";

export default function UrbanPromenadeSection() {
  return (
    <section id="promenade" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel
          index="06"
          label="1F · Urban Promenade"
          className="mb-20"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <h2 className="font-serif text-4xl leading-[1.12] text-ink sm:text-5xl">
              A public ground, <span className="italic">not a lobby.</span>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/90">
              {promenadeSection.copy}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-loose text-muted">
              {promenadeSection.detail}
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-4 lg:col-start-9" delay={0.15}>
            <div className="border-t border-accent pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Ground programs
              </p>
              <p className="mt-5 text-sm leading-loose tracking-wide text-muted">
                {promenadeSection.programs.join("  ·  ")}
              </p>
            </div>
          </FadeIn>
        </div>

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
            caption="The promenade cuts through the ground floor, linking plaza, market, garden, and lawn to café, gallery, cooking studio, and performance hall."
            captionKo="광장에서 이어지는 산책로가 저층부를 관통하며 도시의 흐름을 건물 안으로 끌어들인다."
          />
        </FadeIn>
      </div>
    </section>
  );
}
