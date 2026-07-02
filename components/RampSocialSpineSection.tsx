import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import StickyFigureText from "./StickyFigureText";
import { images, rampSection } from "@/data/project";

const rampPrograms = [
  "Library",
  "Mentoring Room",
  "Seminar Room",
  "Hobby Studio",
  "Co-working Space",
  "Health Care Pocket",
  "Informal Lounge",
];

export default function RampSocialSpineSection() {
  return (
    <section id="ramp" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel
          index="07"
          label="2–3F · Ramp as Social Spine"
          className="mb-20"
        />

        <StickyFigureText
          figureSide="right"
          figure={
            <Figure
              src={images.sectionA.src}
              alt={images.sectionA.alt}
              width={images.sectionA.width}
              height={images.sectionA.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              plate={{
                no: "DWG 03",
                title: "Section A — ramped growth floors",
                scale: "1:200 · A3",
              }}
            />
          }
        >
          <div className="flex flex-col gap-9 lg:pt-6">
            <FadeIn>
              <h2 className="font-serif text-3xl leading-[1.2] text-ink sm:text-4xl">
                “The ramp is not only circulation. It is a social spine where{" "}
                <span className="italic text-accent">
                  movement becomes encounter.
                </span>
                ”
              </h2>
            </FadeIn>
            {rampSection.paragraphs.map((p, i) => (
              <FadeIn key={p.slice(0, 24)} delay={0.1 + i * 0.08}>
                <p className="max-w-xl text-base leading-loose text-ink/90">
                  {p}
                </p>
              </FadeIn>
            ))}
            <FadeIn delay={0.25}>
              <div className="border-t border-accent pt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  Along the ramp
                </p>
                <p className="mt-4 max-w-xl text-sm leading-loose tracking-wide text-muted">
                  {rampPrograms.join("  ·  ")}
                </p>
              </div>
            </FadeIn>
          </div>
        </StickyFigureText>
      </div>
    </section>
  );
}
