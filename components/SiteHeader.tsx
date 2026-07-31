"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="page sticky top-0 z-40 bg-paper/92 backdrop-blur-[2px]">
      <div className="flex items-baseline justify-between border-b border-line py-3.5">
        <Link href="/" className="label rule-link">
          {site.name}
        </Link>
        <nav className="flex gap-6" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/work"
                ? pathname === "/work" || pathname.startsWith("/work/")
                : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`label rule-link ${active ? "text-ink" : "text-muted"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
