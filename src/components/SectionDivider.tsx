"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <section className="relative min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden border-y border-[#313c2c]/50">
      {/* Living Green Atmosphere & Organic Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/mesh_banner.jpg"
          alt="UI UX Design Section Banner"
          fill
          className="object-cover opacity-25 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b2019] via-[#21281e]/80 to-[#1b2019]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(158,194,151,0.12),transparent_80%)]" />
      </div>

      {/* Typography with Living Green Aesthetic */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center select-none"
        >
          <span className="font-display text-5xl sm:text-7xl md:text-8xl text-[#edf2e8] font-bold tracking-[0.16em] uppercase">
            UI UX
          </span>
          <span className="font-editorial text-4xl sm:text-6xl md:text-7xl italic text-[#a3c79c] font-normal -mt-3 sm:-mt-5 tracking-[0.03em]">
            selected case studies
          </span>
        </motion.div>
      </div>
    </section>
  );
}
