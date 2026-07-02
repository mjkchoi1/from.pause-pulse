import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { concept, images } from "@/data/project";

export default function PauseConnectPulseSection() {
  return (
    <section id="concept" className="bg-blush">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel
          index="04"
          label="Pause · Connect · Pulse"
          className="mb-20"
        />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            From stacked separation
            <br />
            <span className="italic text-accent">
              to connected circulation.
            </span>
          </h2>
        </FadeIn>

        {/* the three words — the conceptual refrain of the project */}
        <div className="mt-24 border-t border-line">
          {concept.steps.map((step, i) => (
            <FadeIn key={step.key} delay={i * 0.15}>
              <div className="grid grid-cols-1 gap-y-4 border-b border-line py-12 sm:py-14 lg:grid-cols-12 lg:items-baseline">
                <span className="font-serif text-sm italic text-accent lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`font-serif text-5xl sm:text-6xl lg:col-span-4 lg:text-7xl ${
                    step.key === "pulse" ? "italic text-accent" : "text-ink"
                  }`}
                >
                  {step.title}
                </h3>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-md text-lg leading-relaxed text-ink/90">
                    {step.text}
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-loose text-muted">
                    {step.ko}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24" delay={0.1}>
          <Figure
            src={images.pauseConnectPulse.src}
            alt={images.pauseConnectPulse.alt}
            width={images.pauseConnectPulse.width}
            height={images.pauseConnectPulse.height}
            sizes="(min-width: 1024px) 90vw, 100vw"
            plate={{
              no: "DIA 01",
              title: "Concept sections — Pause / Connect / Pulse",
            }}
            caption="From a stacked, separated senior facility to an open building whose circulation pulses with the city."
            captionKo="층별로 분리된 시니어 시설에서, 동선이 도시와 함께 박동하는 열린 건축으로."
          />
        </FadeIn>

        <FadeIn className="mt-20" delay={0.1}>
          <p className="max-w-3xl text-base leading-loose text-muted">
            {concept.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
