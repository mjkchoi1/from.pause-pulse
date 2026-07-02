"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/project";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-paper/85 text-ink backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-surface"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          className="shrink-0 font-serif text-base tracking-wide sm:text-lg"
        >
          From <span className="italic">Pause</span> to{" "}
          <span className="italic">Pulse</span>
        </a>
        <nav
          aria-label="Sections"
          className="nav-scroll -mx-1 flex items-center gap-5 overflow-x-auto px-1 text-[11px] uppercase tracking-[0.18em] sm:gap-7"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap py-2 opacity-60 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
