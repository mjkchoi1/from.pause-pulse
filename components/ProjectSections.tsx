import Figure from "./Figure";
import type { Media, Section } from "@/data/types";

/** Tall images are held narrower so they don't overrun the viewport height. */
const isTall = (m: Media) => m.height / m.width > 1.25;

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="label text-muted">{children}</h2>;
}

function TextSection({ s }: { s: Extract<Section, { type: "text" }> }) {
  return (
    <section className="grid12">
      <div className="col-span-12 md:col-span-3">
        {s.heading ? <SectionHeading>{s.heading}</SectionHeading> : null}
        {s.ko ? <p className="label mt-1 text-faint">{s.ko}</p> : null}
      </div>
      <div className="prose-arch col-span-12 mt-3 text-[0.9375rem] leading-[1.7] md:col-span-8 md:col-start-4 md:mt-0 md:text-base">
        {s.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function ListSection({ s }: { s: Extract<Section, { type: "list" }> }) {
  return (
    <section className="grid12">
      <div className="col-span-12 md:col-span-3">
        {s.heading ? <SectionHeading>{s.heading}</SectionHeading> : null}
      </div>
      <dl className="col-span-12 mt-3 md:col-span-9 md:mt-0">
        {s.rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-1 gap-x-6 border-t border-line py-3 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] md:grid-cols-[13rem_1fr]"
          >
            <dt className="label pt-0.5">{r.label}</dt>
            <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted sm:mt-0">
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function ProjectSections({ sections }: { sections: Section[] }) {
  return (
    <div className="page">
      {sections.map((s, i) => {
        // Text blocks that follow imagery need more air above them than
        // images that continue a sequence.
        const prev = sections[i - 1];
        const gap =
          i === 0
            ? ""
            : s.type === "text" || s.type === "list"
              ? "mt-20 md:mt-32"
              : prev?.type === "text" || prev?.type === "list"
                ? "mt-8 md:mt-12"
                : "mt-16 md:mt-24";

        if (s.type === "text") {
          return (
            <div key={i} className={gap}>
              <TextSection s={s} />
            </div>
          );
        }

        if (s.type === "list") {
          return (
            <div key={i} className={gap}>
              <ListSection s={s} />
            </div>
          );
        }

        if (s.type === "image") {
          const size = s.size ?? "wide";
          const tall = isTall(s.media);
          if (size === "full") {
            return (
              <div key={i} className={`${gap} mx-[calc(var(--gutter)*-1)]`}>
                <Figure media={s.media} sizes="100vw" className="[&_figcaption]:page" />
              </div>
            );
          }
          if (size === "inset") {
            return (
              <div key={i} className={`${gap} grid12`}>
                <Figure
                  media={s.media}
                  sizes={tall ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 66vw, 100vw"}
                  className={
                    tall
                      ? "col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-6 md:col-start-4"
                      : "col-span-12 md:col-span-8 md:col-start-3"
                  }
                />
              </div>
            );
          }
          return (
            <div key={i} className={gap}>
              <Figure media={s.media} sizes="100vw" />
            </div>
          );
        }

        if (s.type === "pair") {
          return (
            <div
              key={i}
              className={`${gap} grid grid-cols-1 gap-x-[clamp(0.75rem,1.6vw,1.75rem)] gap-y-8 md:grid-cols-2`}
            >
              {s.items.map((m) => (
                <Figure key={m.src} media={m} sizes="(min-width: 768px) 50vw, 100vw" />
              ))}
            </div>
          );
        }

        // sequence
        const cols = s.columns ?? 1;
        return (
          <section key={i} className={gap}>
            {s.heading || s.intro ? (
              <div className="grid12 mb-7 md:mb-10">
                <div className="col-span-12 md:col-span-3">
                  {s.heading ? <SectionHeading>{s.heading}</SectionHeading> : null}
                </div>
                {s.intro ? (
                  <p className="col-span-12 mt-3 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted md:col-span-8 md:col-start-4 md:mt-0">
                    {s.intro}
                  </p>
                ) : null}
              </div>
            ) : null}
            <div
              className={
                cols === 2
                  ? "grid grid-cols-1 gap-x-[clamp(0.75rem,1.6vw,1.75rem)] gap-y-8 md:grid-cols-2"
                  : "flex flex-col gap-10 md:gap-14"
              }
            >
              {s.items.map((m) => (
                <Figure
                  key={m.src}
                  media={m}
                  sizes={cols === 2 ? "(min-width: 768px) 50vw, 100vw" : "100vw"}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
