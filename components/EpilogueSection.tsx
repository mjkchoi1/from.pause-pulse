import Image from "next/image";
import FadeIn from "./FadeIn";
import { epilogue, images, project } from "@/data/project";

export default function EpilogueSection() {
  return (
    <section id="closing" className="relative">
      <div className="relative flex min-h-svh items-center overflow-hidden">
        <Image
          src={images.hero.src}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-paper/85 via-paper/60 to-blush/75"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-36 text-center sm:px-8 lg:px-12">
          <FadeIn>
            <p className="font-serif text-2xl italic text-muted sm:text-3xl">
              From Pause
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-12 max-w-3xl">
              {epilogue.koLines.map((line) => (
                <p
                  key={line}
                  className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl sm:leading-[1.7]"
                >
                  {line}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-12 font-serif text-4xl italic text-accent sm:text-5xl">
              To Pulse.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <p className="mx-auto mt-14 max-w-xl text-sm leading-relaxed text-muted">
              {epilogue.en}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* credits */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Project
            </p>
            <p className="mt-3 font-serif text-lg text-ink">{project.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">
              {project.subtitleKo}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Design
            </p>
            <p className="mt-3 text-sm text-ink">
              {project.designer} {project.designerEn}
            </p>
            <p className="mt-1 text-xs text-muted">{project.studio}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Site
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {project.site}
            </p>
            <p className="mt-1 text-xs text-muted">{project.locationKo}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Exhibition
            </p>
            <p className="mt-3 text-sm text-ink">
              {project.projectType}, {project.year}
            </p>
            <p className="mt-1 text-xs text-muted">{project.proposal}</p>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-[11px] tracking-[0.18em] text-muted sm:px-8 lg:px-12">
            <span>
              © {project.year} {project.designer} — From Pause to Pulse
            </span>
            <a
              href="#hero"
              className="uppercase transition-colors hover:text-ink"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
