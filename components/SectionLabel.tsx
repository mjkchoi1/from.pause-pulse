type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
};

export default function SectionLabel({
  index,
  label,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-baseline gap-4 ${className}`}>
      <span className="font-serif text-sm italic text-accent">{index}</span>
      <span className="text-[11px] uppercase tracking-[0.28em] text-muted">
        {label}
      </span>
      <span aria-hidden className="h-px flex-1 self-center bg-line" />
    </div>
  );
}
