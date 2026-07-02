import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { activeSenior } from "@/data/project";

export default function ActiveSeniorSection() {
  return (
    <section id="senior" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="03" label="Active Senior" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl">
            Not the end of a career —{" "}
            <span className="italic">the beginning of a second life.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/90">
            {activeSenior.definition}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-loose text-muted">
            {activeSenior.definitionKo}
          </p>
        </FadeIn>

        <FadeIn className="mt-24" delay={0.1}>
          <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-muted">
            Five conditions of self-sustaining life
          </p>
          <ol className="border-t border-line">
            {activeSenior.needs.map((need) => (
              <li
                key={need.no}
                className="grid grid-cols-1 gap-y-2 border-b border-line py-8 sm:grid-cols-12 sm:items-baseline sm:gap-x-6"
              >
                <span className="font-serif text-sm italic text-accent sm:col-span-1">
                  {need.no}
                </span>
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-2xl text-ink">{need.title}</h3>
                  <p className="mt-1 text-xs tracking-[0.18em] text-muted">
                    {need.ko}
                  </p>
                </div>
                <p className="text-sm leading-loose text-muted sm:col-span-6 sm:col-start-7">
                  {need.description}
                </p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
