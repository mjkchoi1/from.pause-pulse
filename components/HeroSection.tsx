"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { images, project } from "@/data/project";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-svh w-full overflow-hidden">
      {/* slow settling of the render — one quiet cinematic gesture */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* soft warm veil so type stays legible without filtering the render */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#191716]/50 via-transparent to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="max-w-4xl text-surface"
          >
            <p className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-surface/75">
              <span aria-hidden className="h-px w-10 bg-surface/50" />
              {project.projectType} · {project.location} · {project.year}
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
              From <span className="italic">Pause</span>
              <br />
              to <span className="italic">Pulse</span>
            </h1>
            <p className="mt-7 text-base leading-relaxed text-surface/90 sm:text-lg">
              {project.subtitleKo}
            </p>
            <p className="mt-1 font-serif text-sm italic text-surface/70 sm:text-base">
              {project.subtitleEn}
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.24em] text-surface/60">
              {project.designer} — {project.studio}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#prologue"
        aria-label="Scroll to prologue"
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 text-surface/70 sm:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span aria-hidden className="block h-12 w-px bg-surface/50" />
      </motion.a>
    </section>
  );
}
