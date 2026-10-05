"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Mail, Phone } from "lucide-react";
import { ScrollTextReveal } from "./scroll-text-reveal-animation/scroll-text-reveal";

export default function WhoIAm() {
  const [copied, setCopied] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  // Track scroll through the 250vh pinned track
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const softwareIcons = [
    { name: "Figma", label: "Figma", bg: "bg-[#182015]", color: "text-[#F24E1E]", symbol: "Fg" },
    { name: "Adobe XD", label: "Xd", bg: "bg-[#182015]", color: "text-[#FF61F6]", symbol: "Xd" },
    { name: "Photoshop", label: "Ps", bg: "bg-[#182015]", color: "text-[#31A8FF]", symbol: "Ps" },
    { name: "Illustrator", label: "Ai", bg: "bg-[#182015]", color: "text-[#FF9A00]", symbol: "Ai" },
  ];

  // Subtle opacity reveal for tools and contact as text reveal finishes
  const bottomDetailsOpacity = useTransform(scrollYProgress, [0.55, 0.78], [0.35, 1]);

  // Dynamic progress indicator values
  const progressPercent = useTransform(scrollYProgress, [0.05, 0.78], ["0%", "100%"]);

  return (
    <section
      id="who-i-am"
      ref={trackRef}
      className={reducedMotion ? "relative py-24 sm:py-32 px-6 sm:px-12" : "relative h-[250vh] sm:h-[280vh]"}
    >
      <div
        className={
          reducedMotion
            ? "max-w-6xl mx-auto"
            : "sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-6 overflow-hidden"
        }
      >
        <div className="max-w-6xl w-full mx-auto relative">
          
          {/* Living Green Profile Card */}
          <div className="living-green-card-light p-6 sm:p-10 lg:p-12 relative overflow-hidden rounded-[32px] sm:rounded-[36px] shadow-2xl border border-[#dce6d6]">
            {/* Subtle Ambient Radial Highlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#e2eddc]/70 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Text & Skills & Contact */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#5d7354]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#5c6b56] font-medium">
                    Product Designer • Rajasthan, India
                  </span>
                </div>

                <ScrollTextReveal
                  headline="Thoughtful by design."
                  paragraph="I'm a UI/UX and Product Designer dedicated to building thoughtful digital experiences that inspire and connect. By combining human-centered design principles with AI-powered productivity, I transform complex workflows into elegant, functional, and impactful products."
                  headlineClassName="text-3xl sm:text-5xl md:text-6xl text-[#182015] mb-4 sm:mb-6"
                  paragraphClassName="text-[#43523e] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl"
                  scatterIntensity={0.7}
                  externalProgress={scrollYProgress}
                  headlineWindow={[0.05, 0.38]}
                  paragraphWindow={[0.26, 0.75]}
                />

                {/* Software Tool Chips */}
                <motion.div
                  className="mb-6 sm:mb-8"
                  style={{ opacity: reducedMotion ? 1 : bottomDetailsOpacity }}
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-[#6b7b65] font-medium mb-3">
                    Core Toolkit
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {softwareIcons.map((tool) => (
                      <div
                        key={tool.name}
                        className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#e3ecdc] text-[#1c2419] border border-[#d2ded0] shadow-sm hover:scale-105 transition-transform"
                      >
                        <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${tool.bg} ${tool.color} flex items-center justify-center font-bold text-[9px] sm:text-[10px]`}>
                          {tool.symbol}
                        </span>
                        <span className="text-xs font-medium tracking-wide">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Direct Inquiries & Quick Action */}
                <motion.div
                  className="border-t border-[#d8e3d2] pt-4 sm:pt-6 flex flex-wrap items-center justify-between gap-4 sm:gap-6"
                  style={{ opacity: reducedMotion ? 1 : bottomDetailsOpacity }}
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#6b7b65] font-medium mb-1">
                      Direct Contact
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-[#182015]">
                      <a
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        className="hover:text-[#436e38] transition-colors flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#5d7354]" />
                        {PORTFOLIO_DATA.contact.email}
                      </a>
                      <a
                        href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                        className="hover:text-[#436e38] transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#5d7354]" />
                        {PORTFOLIO_DATA.contact.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#182015] text-[#f4f6ef] text-xs uppercase tracking-wider font-medium hover:bg-[#2b3525] transition-all shadow-md"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#a8cca2]" />
                        Copied Email
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Email
                      </>
                    )}
                  </button>
                </motion.div>

                {/* Dynamic Scroll Progress Bar */}
                {!reducedMotion && (
                  <div className="mt-4 pt-3 border-t border-[#d8e3d2]/60 flex items-center justify-end">
                    <div className="w-24 sm:w-36 h-1 rounded-full bg-[#d8e3d2] overflow-hidden">
                      <motion.div
                        className="h-full bg-[#5d7354] rounded-full"
                        style={{ width: progressPercent }}
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Kunal's Photo inside Inset Living Green Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[3/4] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#242b20] border-4 border-[#e3ebdc] shadow-xl group">
                  <Image
                    src="/assets/kunal potrait new.png"
                    alt="Kunal Vaishnav — UI UX & Product Designer"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                  />
                  
                  {/* Floating Action Knob */}
                  <div className="absolute bottom-5 right-5 z-20">
                    <a
                      href="#projects"
                      className="sylva-knob"
                      aria-label="View selected works"
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#182015]" />
                    </a>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#141a12]/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 z-10">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#eef3ea] font-medium drop-shadow-md">
                      Kunal Vaishnav
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
