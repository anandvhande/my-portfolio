"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Site = {
  x: number;
  y: number;
  phase: number;
  speed: number;
};

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function TriangularPercolation() {
  const durationMs = 10000;
  const columns = 20;
  const rows = 14;
  const spacing = 22;
  const radius = 6.5;
  const verticalSpacing = spacing * Math.sqrt(3) / 2;
  const padding = 16;

  const width = padding * 2 + (columns - 1) * spacing + spacing / 2;
  const height = padding * 2 + (rows - 1) * verticalSpacing + radius * 2;

  const sites = useMemo(() => {
    const rand = mulberry32(123456);
    const pts: Site[] = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const offset = row % 2 === 0 ? 0 : spacing / 2;
        pts.push({
          x: padding + col * spacing + offset,
          y: padding + row * verticalSpacing,
          phase: rand() * Math.PI * 2,
          speed: 0.6 + rand() * 1.8,
        });
      }
    }

    return pts;
  }, []);

  const [timeMs, setTimeMs] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = (timestamp - start) % durationMs;
      setTimeMs(elapsed);
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const t = timeMs / 1000;

  return (
    <div
      style={{
        marginTop: 20,
        border: "1px solid #dbeafe",
        borderRadius: 18,
        background:
          "linear-gradient(180deg, rgba(239,246,255,0.9) 0%, rgba(255,255,255,1) 100%)",
        padding: 14,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
      }}
    >
      <div
        style={{
          fontSize: "0.95rem",
          color: "#475569",
          marginBottom: 10,
        }}
      >
        Site percolation on the triangular lattice
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        aria-label="Animated site percolation on the triangular lattice"
        role="img"
      >
        {sites.map((site, i) => {
          const signal = Math.sin(site.phase + site.speed * t);
          const filled = signal > 0;

          return (
            <circle
              key={i}
              cx={site.x}
              cy={site.y}
              r={radius}
              fill={filled ? "#0f172a" : "#ffffff"}
              stroke={filled ? "#0f172a" : "#94a3b8"}
              strokeWidth={1.2}
            />
          );
        })}
      </svg>
    </div>
  );
}