"use client";

import { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [cols, setCols] = useState(24);
  const [rows, setRows] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCols(12);
        setRows(24);
      } else {
        setCols(24);
        setRows(14);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">

      {/* GREEN GLOW */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[140px]" />

      {/* GRID */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: cols * rows }).map((_, i) => (
          <div
            key={i}
            className="
              aspect-square
              border
              border-white/[0.06]
              bg-[#050505]
              transition-all
              duration-200
              hover:bg-white/[0.18]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
            "
          />
        ))}
      </div>

      {/* VIGNETTE */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]
        "
      />

    </div>
  );
}