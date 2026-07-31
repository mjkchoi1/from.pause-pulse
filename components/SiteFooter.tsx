import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="page mt-28 border-t border-line py-6 md:mt-40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <p className="label text-muted">
          {site.name} · {site.nameKo}
        </p>
        <p className="label text-faint">{site.school}</p>
        {site.email ? (
          <a href={`mailto:${site.email}`} className="label rule-link text-muted">
            {site.email}
          </a>
        ) : null}
      </div>
    </footer>
  );
}
