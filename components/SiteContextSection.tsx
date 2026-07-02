import FadeIn from "./FadeIn";
import Figure from "./Figure";
import SectionLabel from "./SectionLabel";
import { images, siteSection } from "@/data/project";

export default function SiteContextSection() {
  return (
    <section id="site" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-44 lg:px-12">
        <SectionLabel index="02" label="Site as Pause" className="mb-20" />

        <FadeIn>
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
            A dormant commercial site becomes{" "}
            <span className="italic text-accent">
              a civic threshold for new social growth.
            </span>
          </h2>
        </FadeIn>

        <FadeIn className="mt-20" delay={0.1}>
          <Figure
            src={images.siteAnalysis.src}
            alt={images.siteAnalysis.alt}
            width={images.siteAnalysis.width}
            height={images.siteAnalysis.height}
            sizes="(min-width: 1024px) 90vw, 100vw"
            plate={{
              no: "MAP 01",
              title: "Urban context — central Cheongju",
            }}
            caption="The site between the Seongan-gil youth district and the Jungang Park senior district, facing the Yongdusa-ji Cheoldanggan plaza."
            captionKo="청년 상권(성안길)과 시니어 거점(중앙공원) 사이, 용두사지 철당간 광장과 마주하는 결절점."
          />
        </FadeIn>

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <dl className="flex flex-col divide-y divide-line border-y border-line">
              {siteSection.facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-3 gap-4 py-5">
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="col-span-2 text-sm leading-relaxed text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn className="lg:col-span-7 lg:col-start-6" delay={0.15}>
            <div className="flex max-w-2xl flex-col gap-7 text-base leading-loose text-ink/90">
              {siteSection.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 sm:grid-cols-3">
              {siteSection.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-serif text-5xl text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
