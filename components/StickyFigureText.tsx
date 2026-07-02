import type { ReactNode } from "react";

type StickyFigureTextProps = {
  /** the figure that stays pinned while text scrolls */
  figure: ReactNode;
  children: ReactNode;
  /** which side the sticky figure sits on, on desktop */
  figureSide?: "left" | "right";
  className?: string;
};

/**
 * Two-column scrollytelling layout: the figure stays sticky within the
 * section while the text column scrolls past. Collapses to a stacked
 * layout (figure first) on small screens.
 */
export default function StickyFigureText({
  figure,
  children,
  figureSide = "left",
  className = "",
}: StickyFigureTextProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 ${className}`}
    >
      <div
        className={`lg:col-span-6 ${
          figureSide === "right" ? "lg:order-2" : ""
        }`}
      >
        <div className="lg:sticky lg:top-24">{figure}</div>
      </div>
      <div
        className={`lg:col-span-6 ${
          figureSide === "right" ? "lg:order-1" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
