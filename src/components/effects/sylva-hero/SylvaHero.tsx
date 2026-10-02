"use client";

import React, { useMemo } from "react";
import {
  LandingPageFrame,
  type LandingPageProps,
} from "@/shaders/landing-pages/LandingPageFrame";
import {
  splitTypographyProps,
  usePageTypography,
  type PageTypographyProps,
} from "@/shaders/landing-pages/pageTypography";
import { SYLVA_TYPOGRAPHY } from "@/shaders/landing-pages/pageRecipes";
import "./styles.css";

export const SYLVA_HERO_VARIANTS = [
  "living-green",
  "sakura-sunset",
  "maple-autumn",
  "sequoia-mist",
] as const;

export type SylvaHeroVariant = (typeof SYLVA_HERO_VARIANTS)[number];

export type SylvaHeroProps = LandingPageProps &
  PageTypographyProps & {
    variant?: SylvaHeroVariant;
  };

const SYLVA_HERO_BASE_URL = "/landing-pages/inner-green-3d.html";

const SYLVA_HERO_TITLES: Record<SylvaHeroVariant, string> = {
  "living-green": "Kunal Vaishnav — Into the living craft",
  "sakura-sunset": "Kunal Vaishnav — Sakura Sunset",
  "maple-autumn": "Kunal Vaishnav — Maple Autumn",
  "sequoia-mist": "Kunal Vaishnav — Sequoia Mist",
};

export function SylvaHero({
  variant = "living-green",
  className = "",
  style,
  ...props
}: SylvaHeroProps) {
  const safeVariant = SYLVA_HERO_VARIANTS.includes(variant)
    ? variant
    : "living-green";
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(SYLVA_TYPOGRAPHY, type);

  return (
    <div className="sylva-hero-container w-full h-full relative">
      <LandingPageFrame
        {...frame}
        key={safeVariant}
        customization={customization}
        title={SYLVA_HERO_TITLES[safeVariant]}
        sourceUrl={SYLVA_HERO_BASE_URL}
        className={className}
        style={style}
      />
    </div>
  );
}

export default SylvaHero;
