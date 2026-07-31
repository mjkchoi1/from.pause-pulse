import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DrawingViewerProvider from "@/components/DrawingViewer";
import Figure from "@/components/Figure";
import ProjectSections from "@/components/ProjectSections";
import { getNextProject, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jiyeon Lee`,
      description: project.summary,
      images: project.hero ? [project.hero.src] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <DrawingViewerProvider>
      <article>
        {/* Header — title, then the facts, kept to one compact block. */}
        <header className="page grid12 pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-[1.875rem] leading-[1.08] font-normal tracking-[-0.02em] sm:text-[2.5rem] md:text-[3.25rem]">
              {project.title}
            </h1>
            {project.titleKo ? (
              <p className="mt-2 text-[0.9375rem] text-muted md:text-base">
                {project.titleKo}
              </p>
            ) : null}
          </div>
          <dl className="col-span-12 mt-7 self-end md:col-span-4 md:col-start-9 md:mt-0">
            {project.meta.map((m) => (
              <div key={m.label} className="flex gap-3 border-t border-line py-1.5 first:border-t-0">
                <dt className="label w-[5.5rem] shrink-0 pt-px text-faint">{m.label}</dt>
                <dd className="caption text-muted">{m.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {project.hero ? (
          <div className={project.hero.kind === "board" ? "page" : undefined}>
            <Figure media={project.hero} sizes="100vw" priority />
          </div>
        ) : null}

        {/* Introduction */}
        <div className="page grid12 mt-12 md:mt-20">
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            {project.intro.map((p, i) => (
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

        <div className="mt-20 md:mt-32">
          <ProjectSections sections={project.sections} />
        </div>

        {/* Credits */}
        <section className="page mt-24 md:mt-36">
          <div className="grid12">
            <h2 className="label col-span-12 border-t border-line-strong pt-3 text-ink md:col-span-3">
              Project data
            </h2>
            <dl className="col-span-12 mt-2 md:col-span-8 md:col-start-4 md:border-t md:border-line-strong md:pt-3">
              {project.credits.map((c) => (
                <div
                  key={c.label}
                  className="grid grid-cols-1 gap-x-6 border-t border-line py-2.5 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] md:first:border-t-0"
                >
                  <dt className="label pt-0.5 text-faint">{c.label}</dt>
                  <dd className="text-[0.9375rem] text-muted">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Quiet next-project link */}
        {next ? (
          <nav className="page mt-20 md:mt-28" aria-label="Next project">
            <Link href={`/work/${next.slug}`} className="group block border-t border-line pt-3">
              <span className="label text-faint">Next</span>
              <span className="mt-1 block text-[1.25rem] leading-tight tracking-[-0.01em] md:text-[1.5rem]">
                <span className="rule-link">{next.title}</span>
              </span>
            </Link>
          </nav>
        ) : null}
      </article>
    </DrawingViewerProvider>
  );
}
