import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, tinyTownSection } from "@/data/project";

export default function TinyTownSection() {
  return (
    <section id="tinytown" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="09" label="5–7F · Tiny Town" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.15] text-ink sm:text-5xl">
            “Above the public layers, housing becomes a small village:{" "}
            <span className="italic text-accent">
              private enough to remain independent, shared enough to avoid
              isolation.
            </span>
            ”
          </h2>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="flex max-w-xl flex-col gap-7 text-base leading-loose text-ink/90">
              {tinyTownSection.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-12 border-t border-accent pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Village rooms
              </p>
              <p className="mt-4 max-w-xl text-sm leading-loose tracking-wide text-muted">
                {tinyTownSection.programs.join("  ·  ")}
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.18}>
            <Figure
              src={images.sectionA.src}
              alt={images.sectionA.alt}
              width={images.sectionA.width}
              height={images.sectionA.height}
              sizes="(min-width: 1024px) 55vw, 100vw"
              plate={{
                no: "DWG 03",
                title: "Section A — the village floors",
              }}
              caption="Short-stay units, communal kitchen, and duplex co-living under the pitched roofs."
              captionKo="단기 체류 유닛과 공용 부엌, 박공지붕 아래의 듀플렉스 코리빙."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
