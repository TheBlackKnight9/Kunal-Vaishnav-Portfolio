"use client";

import React, { useRef, useEffect } from "react";
import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const notifyVisibility = (visible: boolean) => {
      const iframe = el.querySelector("iframe");
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          { type: "sylva-visibility", visible },
          "*"
        );
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        notifyVisibility(entry.isIntersecting);
      },
      { threshold: 0.02 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="shader-frame relative w-full h-screen min-h-[800px] overflow-hidden"
    >
      <SylvaHero
        variant="living-green"
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
  );
}

export default Scene;
