import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { prologue } from "@/data/project";

export default function PrologueSection() {
  return (
    <section id="prologue" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="01" label="Prologue" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-5xl font-serif text-4xl leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
            {prologue.opening[0]}
            <br />
            <span className="italic text-accent">{prologue.opening[1]}</span>
          </h2>
        </FadeIn>

        <div className="mt-28 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6" delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-ink">
              {prologue.body}
            </p>
            <p className="mt-7 max-w-xl text-sm leading-loose text-muted">
              {prologue.bodyKo}
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-5 lg:col-start-8" delay={0.2}>
            <div className="border-t border-accent pt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                The question
              </p>
              <p className="mt-5 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
                “{prologue.question}”
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
