"use client";

import React, { useRef, useEffect, useState, useId } from "react";
import { motion, useInView } from "framer-motion";

export interface StrokeTextProps {
  text: string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: "mount" | "scroll" | "inView" | "hover";
  fillMode?: "wipe" | "fade" | "none";
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  fontFamily?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export default function StrokeText({
  text,
  strokeColor = "#242C22",
  fillColor = "#F8FAFC",
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = "power2.out",
  trigger = "inView",
  fillMode = "wipe",
  fontSize = 64,
  fontWeight = 700,
  letterSpacing = -2,
  fontFamily = "'Syne', -apple-system, sans-serif",
  className = "",
  as: Component = "h2",
}: StrokeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const clipId = `stroke-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [mounted, setMounted] = useState(false);

  // Parse numeric fontSize
  const numSize = typeof fontSize === "number" ? fontSize : parseInt(String(fontSize), 10) || 64;
  const numLetterSpacing = typeof letterSpacing === "number" ? letterSpacing : parseFloat(String(letterSpacing)) || 0;

  // Track in-view trigger
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-60px 0px",
  });

  const shouldAnimate = trigger === "mount" ? mounted : isInView;

  // Compute text metrics
  const [metrics, setMetrics] = useState(() => {
    // Initial SSR estimation
    const estimatedCharWidth = numSize * 0.62;
    const estW = Math.ceil(text.length * (estimatedCharWidth + numLetterSpacing) + 40);
    const estH = Math.ceil(numSize * 1.35 + strokeWidth * 4);
    const estBase = Math.ceil(numSize * 1.02);
    const initialPositions = text.split("").map((_, i) => Math.ceil(i * (estimatedCharWidth + numLetterSpacing) + 10));
    return {
      width: estW,
      height: estH,
      baseline: estBase,
      letterPositions: initialPositions,
    };
  });

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    const measure = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.font = `${fontWeight} ${numSize}px ${fontFamily}`;

        let currentX = strokeWidth * 4;
        const positions: number[] = [];
        const chars = text.split("");

        for (let i = 0; i < chars.length; i++) {
          positions.push(currentX);
          const charW = ctx.measureText(chars[i]).width;
          currentX += charW + numLetterSpacing;
        }

        const totalW = Math.ceil(currentX + strokeWidth * 6);
        const totalH = Math.ceil(numSize * 1.38 + strokeWidth * 4);
        const baseline = Math.ceil(numSize * 1.05 + strokeWidth * 2);

        setMetrics({
          width: Math.max(totalW, 120),
          height: Math.max(totalH, 40),
          baseline,
          letterPositions: positions,
        });
      } catch {
        // Use fallback metrics
      }
    };

    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }
  }, [text, numSize, fontWeight, numLetterSpacing, fontFamily, strokeWidth]);

  const letters = text.split("");
  const totalStaggerDuration = letters.length * stagger;
  const wipeDelay = totalStaggerDuration * 0.65 + fillDelay;

  return (
    <Component className={`relative inline-block leading-none ${className}`}>
      <div ref={containerRef} className="relative block max-w-full overflow-visible">
        {/* Screen Reader Semantic Accessibility */}
        <span className="sr-only">{text}</span>

        <svg
          viewBox={`0 0 ${metrics.width} ${metrics.height}`}
          className="overflow-visible block max-w-full h-auto select-none"
          style={{
            width: `${metrics.width}px`,
            maxWidth: "100%",
            height: "auto",
          }}
          aria-hidden="true"
        >
          <defs>
            {fillMode === "wipe" && (
              <clipPath id={clipId}>
                <motion.rect
                  x="0"
                  y="0"
                  height={metrics.height + 30}
                  initial={{ width: 0 }}
                  animate={shouldAnimate ? { width: metrics.width + 40 } : { width: 0 }}
                  transition={{
                    duration: Math.max(0.7, drawDuration * 0.65),
                    delay: wipeDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </clipPath>
            )}
          </defs>

          {/* ── 1. Animated Stroke Outlines ── */}
          <g>
            {letters.map((char, idx) => {
              const xPos = metrics.letterPositions[idx] ?? (idx * numSize * 0.6);

              return (
                <motion.text
                  key={`stroke-${char}-${idx}`}
                  x={xPos}
                  y={metrics.baseline}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    fontFamily,
                    fontSize: `${numSize}px`,
                    fontWeight,
                  }}
                  initial={{
                    strokeDasharray: 700,
                    strokeDashoffset: 700,
                    opacity: 0,
                  }}
                  animate={
                    shouldAnimate
                      ? { strokeDashoffset: 0, opacity: 1 }
                      : { strokeDashoffset: 700, opacity: 0 }
                  }
                  transition={{
                    strokeDashoffset: {
                      duration: drawDuration,
                      delay: idx * stagger,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.15,
                      delay: idx * stagger,
                    },
                  }}
                >
                  {char}
                </motion.text>
              );
            })}
          </g>

          {/* ── 2. Filled Text Layer (Wipe or Fade) ── */}
          {fillMode !== "none" && (
            <g clipPath={fillMode === "wipe" ? `url(#${clipId})` : undefined}>
              {letters.map((char, idx) => {
                const xPos = metrics.letterPositions[idx] ?? (idx * numSize * 0.6);

                return (
                  <motion.text
                    key={`fill-${char}-${idx}`}
                    x={xPos}
                    y={metrics.baseline}
                    fill={fillColor}
                    stroke="none"
                    style={{
                      fontFamily,
                      fontSize: `${numSize}px`,
                      fontWeight,
                    }}
                    initial={{
                      opacity: fillMode === "fade" ? 0 : 1,
                    }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1 }
                        : { opacity: fillMode === "fade" ? 0 : 1 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: wipeDelay,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.text>
                );
              })}
            </g>
          )}
        </svg>
      </div>
    </Component>
  );
}
