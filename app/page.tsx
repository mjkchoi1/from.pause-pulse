import Link from "next/link";
import HomeImage from "@/components/HomeImage";
import { selectedWork } from "@/data/projects";
import { site } from "@/data/site";
import type { Project } from "@/data/types";

/** The line that identifies a project wherever it appears on the home page. */
function Caption({
  project,
  n,
  align = "start",
}: {
  project: Project;
  n: number;
  align?: "start" | "end";
}) {
  return (
    <div className={align === "end" ? "text-right" : undefined}>
      <span className="label text-faint">{String(n).padStart(2, "0")}</span>
      <h3 className="mt-1.5 text-[1.375rem] leading-tight font-normal tracking-[-0.01em] md:text-[1.75rem]">
        <Link href={`/work/${project.slug}`} className="rule-link">
          {project.title}
        </Link>
      </h3>
      <p className="label mt-1.5 text-muted">
        {project.category}
        {project.location ? ` · ${project.location}` : ""}
        {project.year ? ` · ${project.year}` : ""}
      </p>
    </div>
  );
}

export default function Home() {
  // Compositions belong to positions, not to particular projects: reordering
  // `order` in data/projects moves a project into the next composition.
  const [first, second, third, fourth, fifth] = selectedWork;

  return (
    <>
      {/* Identity — a name and two facts, then straight into the work. */}
      <section className="page grid12 pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-[2rem] leading-[1.05] font-normal tracking-[-0.025em] sm:text-[2.75rem] md:text-[3.5rem]">
            {site.name}
          </h1>
          <p className="mt-1 text-[1.125rem] text-muted md:text-[1.375rem]">{site.nameKo}</p>
        </div>
        <div className="col-span-12 mt-6 self-end md:col-span-4 md:col-start-9 md:mt-0">
          <p className="label text-muted">{site.discipline}</p>
          <p className="label mt-1 text-faint">{site.school}</p>
        </div>
      </section>

      <div className="page">
        <h2 className="label border-t border-line-strong pt-3 text-ink">Selected Work</h2>
      </div>

      {/* 01 — the graduation project takes the full width of the page. */}
      <section className="mt-8 md:mt-10">
        <HomeImage media={first.hero!} sizes="100vw" priority />
        <div className="page grid12 mt-4">
          <div className="col-span-12 md:col-span-5">
            <Caption project={first} n={1} />
          </div>
          <p className="col-span-12 mt-4 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted md:col-span-6 md:col-start-7 md:mt-0">
            {first.summary}
          </p>
        </div>
      </section>

      {/* 02 — held back to eight columns, caption in the margin. */}
      <section className="page grid12 mt-24 md:mt-40">
        <div className="col-span-12 md:col-span-4 md:pt-2 lg:col-span-3">
          <Caption project={second} n={2} />
          <p className="mt-4 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted">
            {second.summary}
          </p>
        </div>
        <div className="col-span-12 mt-6 md:col-span-7 md:col-start-6 md:mt-0 lg:col-span-8 lg:col-start-5">
          <HomeImage media={second.hero!} sizes="(min-width: 768px) 62vw, 100vw" />
        </div>
      </section>

      {/* 03 — full bleed, caption beneath at the right. */}
      <section className="mt-24 md:mt-40">
        <HomeImage media={third.hero!} sizes="100vw" />
        <div className="page grid12 mt-4">
          <p className="order-2 col-span-12 mt-4 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted md:order-1 md:col-span-6 md:mt-0">
            {third.summary}
          </p>
          <div className="order-1 col-span-12 md:order-2 md:col-span-4 md:col-start-9">
            <Caption project={third} n={3} align="end" />
          </div>
        </div>
      </section>

      {/* 04 — the square board sits left, its caption in the right margin. */}
      <section className="page grid12 mt-24 md:mt-40">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <HomeImage media={fourth.hero!} sizes="(min-width: 768px) 55vw, 100vw" />
        </div>
        <div className="col-span-12 mt-6 self-center md:col-span-5 md:col-start-8 md:mt-0 lg:col-span-4 lg:col-start-9">
          <Caption project={fourth} n={4} />
          <p className="mt-4 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted">
            {fourth.summary}
          </p>
        </div>
      </section>

      {/* 05 — the competition board, contained. */}
      <section className="page grid12 mt-24 md:mt-40">
        <div className="col-span-12 md:col-span-4 md:pt-2 lg:col-span-3">
          <Caption project={fifth} n={5} />
          <p className="mt-4 max-w-[var(--measure)] text-[0.9375rem] leading-[1.7] text-muted">
            {fifth.summary}
          </p>
        </div>
        <div className="col-span-12 mt-6 md:col-span-8 md:col-start-5 md:mt-0 lg:col-span-9 lg:col-start-4">
          <HomeImage media={fifth.hero!} sizes="(min-width: 768px) 68vw, 100vw" />
        </div>
      </section>

      <div className="page mt-20 md:mt-28">
        <div className="border-t border-line-strong pt-3">
          <Link href="/work" className="label rule-link">
            All work
          </Link>
          <p className="caption mt-1 text-faint">
            Client work, research and technical study
          </p>
        </div>
      </div>
    </>
  );
}
