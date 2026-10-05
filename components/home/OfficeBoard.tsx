"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeContent } from "@/lib/cms/home";
import { reducedMotion } from "@/lib/gsap";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Split-flap cell text: scrambles once when the board enters view, then settles.
function Flap({ text, delay, go }: { text: string; delay: number; go: boolean }) {
  const [shown, setShown] = useState(text);
  useEffect(() => {
    if (!go || reducedMotion()) return;
    let frame = 0;
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      if (now < start) return (raf = requestAnimationFrame(tick));
      frame++;
      const settled = Math.floor(frame / 2);
      setShown(
        text
          .split("")
          .map((c, i) => (i < settled || c === " " ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join(""),
      );
      if (settled < text.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [go, text, delay]);
  return <span aria-hidden>{shown}</span>;
}

function Row({ o, i, go }: { o: HomeContent["footer"]["offices"][number]; i: number; go: boolean }) {
  return (
    <tr className="border-b border-line-soft align-top">
      <td className="py-3 pr-4 text-text">
        <span className="sr-only">{o.city}</span>
        <Flap text={o.city.toUpperCase()} delay={i * 90} go={go} />
        {o.address && (
          <address className="mt-1 font-sans text-sm leading-snug tracking-normal text-text-2 normal-case not-italic">
            {o.address}
          </address>
        )}
      </td>
      <td className="py-3 text-right whitespace-nowrap text-lamp">{o.type?.toUpperCase()}</td>
    </tr>
  );
}

export default function OfficeBoard({ offices }: { offices: HomeContent["footer"]["offices"] }) {
  const ref = useRef<HTMLTableElement>(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setGo(true), io.disconnect()), { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <table ref={ref} className="w-full border-t border-line-soft font-mono text-[13px] uppercase tracking-[0.06em]">
      <caption className="sr-only">Bakervaughn offices</caption>
      <thead className="sr-only">
        <tr>
          <th>Office</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {offices.map((o, i) => (
          <Row key={i} o={o} i={i} go={go} />
        ))}
      </tbody>
    </table>
  );
}
