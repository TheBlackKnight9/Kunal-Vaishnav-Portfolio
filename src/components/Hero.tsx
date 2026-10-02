"use client";

import React from "react";
import { motion } from "framer-motion";
import { VideoText } from "@/components/ui/video-text";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 canva-hero-gradient overflow-hidden">
      
      {/* Subtle depth lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#1a51a4]/25 blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
        
        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-editorial text-lg sm:text-2xl text-slate-300 font-normal tracking-[0.05em] mb-4 italic"
        >
          Kunal Vaishnav
        </motion.p>

        {/* MONUMENTAL NAME WITH VIDEO-TEXT EFFECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative h-[120px] sm:h-[180px] md:h-[240px] lg:h-[280px] w-full max-w-5xl mx-auto overflow-hidden my-1 flex items-center justify-center"
        >
          <VideoText
            src="https://cdn.magicui.design/ocean-small.webm"
            fontSize="clamp(42px, 10vw, 130px)"
            fontWeight="900"
            fontFamily="'Syne', sans-serif"
            className="w-full h-full"
          >
            KUNAL VAISHNAV
          </VideoText>
        </motion.div>

        {/* "Portfolio" Title — Direct from Canva Design */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#26c0e9] my-2 select-none"
        >
          Portfolio
        </motion.h1>

        {/* Minimal Oval Role Pills — Exact Canva Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-6 mb-12"
        >
          <div className="editorial-pill px-7 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium tracking-[0.12em] uppercase">
            UI UX Designer
          </div>
          <div className="editorial-pill px-7 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium tracking-[0.12em] uppercase">
            Product Designer
          </div>
        </motion.div>

        {/* Minimalist Down Indicator */}
        <motion.a
          href="#who-i-am"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] text-slate-400 hover:text-[#26c0e9] transition-colors flex items-center gap-2 group"
        >
          <span>Scroll to explore</span>
          <span className="group-hover:translate-y-1 transition-transform">↓</span>
        </motion.a>

      </div>
    </section>
  );
}
