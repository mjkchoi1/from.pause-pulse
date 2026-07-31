"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Media } from "@/data/types";

interface ViewerCtx {
  /** register a drawing so the viewer can step through them in page order */
  register: (m: Media) => void;
  open: (src: string) => void;
}

const Ctx = createContext<ViewerCtx | null>(null);

export function useDrawingViewer() {
  return useContext(Ctx);
}

const ZOOM = 2.5;

export default function DrawingViewerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = useRef<Media[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const register = useCallback((m: Media) => {
    if (!items.current.some((i) => i.src === m.src)) items.current.push(m);
  }, []);

  const open = useCallback((src: string) => {
    const i = items.current.findIndex((m) => m.src === src);
    if (i >= 0) {
      setIndex(i);
      setZoomed(false);
      setOffset({ x: 0, y: 0 });
    }
  }, []);

  const close = useCallback(() => setIndex(null), []);

  const step = useCallback((dir: 1 | -1) => {
    setZoomed(false);
    setOffset({ x: 0, y: 0 });
    setIndex((i) =>
      i === null ? i : (i + dir + items.current.length) % items.current.length,
    );
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const value = useMemo(() => ({ register, open }), [register, open]);
  const current = index === null ? null : items.current[index];

  return (
    <Ctx.Provider value={value}>
      {children}
      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.caption ?? "Drawing"} — enlarged`}
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="page flex shrink-0 items-baseline justify-between gap-4 py-3.5">
            <p className="caption truncate text-muted">
              {current.caption ?? current.alt.slice(0, 80)}
            </p>
            <div className="flex shrink-0 items-baseline gap-5">
              {items.current.length > 1 ? (
                <span className="label tabular-nums text-faint">
                  {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.current.length).padStart(2, "0")}
                </span>
              ) : null}
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                className="label rule-link text-ink"
              >
                Close
              </button>
            </div>
          </div>

          <div
            className="relative min-h-0 flex-1 overflow-hidden"
            style={{ cursor: zoomed ? (drag.current ? "grabbing" : "grab") : "zoom-in" }}
            onPointerDown={(e) => {
              if (!zoomed) return;
              drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const d = drag.current;
              if (!d) return;
              setOffset({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
            }}
            onPointerUp={(e) => {
              const moved =
                drag.current &&
                Math.hypot(e.clientX - drag.current.x, e.clientY - drag.current.y) > 4;
              drag.current = null;
              if (!moved) {
                setZoomed((z) => !z);
                setOffset({ x: 0, y: 0 });
              }
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-[var(--gutter)] transition-transform duration-300 ease-out motion-reduce:transition-none"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoomed ? ZOOM : 1})`,
              }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                className="max-h-full w-auto max-w-full object-contain select-none"
                draggable={false}
                priority
              />
            </div>
          </div>

          <div className="page flex shrink-0 items-baseline justify-between gap-4 py-3.5">
            <p className="label text-faint">
              {zoomed ? "Drag to pan · click to fit" : "Click to zoom"}
            </p>
            {items.current.length > 1 ? (
              <div className="flex gap-5">
                <button type="button" onClick={() => step(-1)} className="label rule-link">
                  Prev
                </button>
                <button type="button" onClick={() => step(1)} className="label rule-link">
                  Next
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </Ctx.Provider>
  );
}
