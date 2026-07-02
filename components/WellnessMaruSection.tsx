import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import StickyFigureText from "./StickyFigureText";
import { images, maruSection } from "@/data/project";

export default function WellnessMaruSection() {
  return (
    <section id="maru" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel
          index="08"
          label="4F · Public Living Room / Wellness Maru"
          className="mb-20"
        />

        <StickyFigureText
          figure={
            <Figure
              src={images.sectionB.src}
              alt={images.sectionB.alt}
              width={images.sectionB.width}
              height={images.sectionB.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              plate={{
                no: "DWG 04",
                title: "Section B — the open wellness floor",
                scale: "1:200 · A3",
              }}
            />
          }
        >
          <div className="flex flex-col gap-9 lg:pt-6">
            <FadeIn>
              <h2 className="font-serif text-3xl leading-[1.2] text-ink sm:text-4xl">
                “The fourth floor becomes an urban living room —{" "}
                <span className="italic text-accent">
                  open, civic, and shared.
                </span>
                ”
              </h2>
            </FadeIn>
            {maruSection.paragraphs.map((p, i) => (
              <FadeIn key={p.slice(0, 24)} delay={0.1 + i * 0.08}>
                <p className="max-w-xl text-base leading-loose text-ink/90">
                  {p}
                </p>
              </FadeIn>
            ))}
            <FadeIn delay={0.25}>
              <div className="border-t border-accent pt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                  On the maru
                </p>
                <p className="mt-4 max-w-xl text-sm leading-loose tracking-wide text-muted">
                  {maruSection.programs.join("  ·  ")}
                </p>
              </div>
            </FadeIn>
          </div>
        </StickyFigureText>
      </div>
    </section>
  );
}
