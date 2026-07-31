import type { Metadata } from "next";
import { about } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro[0],
};

function Entries({
  heading,
  rows,
}: {
  heading: string;
  rows: readonly { period: string; title: string; detail: string }[];
}) {
  return (
    <section className="grid12 mt-14 md:mt-20">
      <h2 className="label col-span-12 border-t border-line-strong pt-3 text-ink md:col-span-3">
        {heading}
      </h2>
      <dl className="col-span-12 mt-2 md:col-span-9 md:mt-0 md:border-t md:border-line-strong md:pt-3">
        {rows.map((r) => (
          <div
            key={r.title}
            className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-t border-line py-3 first:border-t-0 first:pt-0 md:grid-cols-[5rem_1fr]"
          >
            <dt className="label tabular-nums text-faint">{r.period}</dt>
            <dd>
              <span className="block text-[0.9375rem] leading-snug md:text-base">
                {r.title}
              </span>
              <span className="caption mt-1 block text-muted">{r.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="page pt-10 pb-4 md:pt-16">
      <header className="grid12">
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-[1.875rem] leading-[1.08] font-normal tracking-[-0.02em] sm:text-[2.5rem] md:text-[3.25rem]">
            {site.name}
          </h1>
          <p className="mt-1.5 text-[1.0625rem] text-muted md:text-[1.25rem]">
            {site.nameKo}
          </p>
        </div>
      </header>

      <div className="grid12 mt-10 md:mt-14">
        <div className="col-span-12 md:col-span-8 md:col-start-4">
          {about.intro.map((p, i) => (
            <p
              key={i}
              className={`max-w-[42rem] text-base leading-[1.65] md:text-[1.0625rem] ${
                i === 0 ? "" : "mt-4"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <Entries heading="Education" rows={about.education} />
      <Entries heading="Studio & coursework" rows={about.studios} />
      <Entries heading="Competition & other" rows={about.other} />

      <section className="grid12 mt-14 md:mt-20">
        <h2 className="label col-span-12 border-t border-line-strong pt-3 text-ink md:col-span-3">
          Tools
        </h2>
        <p className="col-span-12 mt-2 text-[0.9375rem] text-muted md:col-span-9 md:mt-0 md:border-t md:border-line-strong md:pt-3">
          {about.tools.join(" · ")}
        </p>
      </section>

      {site.email ? (
        <section className="grid12 mt-14 md:mt-20">
          <h2 className="label col-span-12 border-t border-line-strong pt-3 text-ink md:col-span-3">
            Contact
          </h2>
          <p className="col-span-12 mt-2 md:col-span-9 md:mt-0 md:border-t md:border-line-strong md:pt-3">
            <a href={`mailto:${site.email}`} className="rule-link text-[0.9375rem]">
              {site.email}
            </a>
          </p>
        </section>
      ) : null}
    </div>
  );
}
