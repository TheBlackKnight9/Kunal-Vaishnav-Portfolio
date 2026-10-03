"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin } from "lucide-react";
import { ScrollTextReveal } from "./scroll-text-reveal-animation/scroll-text-reveal";

export default function WhoIAm() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="who-i-am" className="py-24 sm:py-32 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Living Green Profile Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="living-green-card-light p-8 sm:p-14 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#e2eddc]/70 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Text & Skills & Contact */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#5d7354]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#5c6b56] font-medium">
                  Product Designer • Rajasthan, India
                </span>
              </div>

              <ScrollTextReveal
                headline="Thoughtful by design."
                paragraph="I'm a UI/UX and Product Designer dedicated to building thoughtful digital experiences that inspire and connect. By combining human-centered design principles with AI-powered productivity, I transform complex workflows into elegant, functional, and impactful products."
                headlineClassName="text-4xl sm:text-5xl md:text-6xl text-[#182015] mb-6"
                paragraphClassName="text-[#43523e] text-base sm:text-lg mb-8 max-w-xl"
                scatterIntensity={0.65}
                targetRef={cardRef}
              />

              {/* Software Tool Chips */}
              <div className="mb-10">
                <div className="text-xs uppercase tracking-[0.18em] text-[#6b7b65] font-medium mb-3">
                  Core Toolkit
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {softwareIcons.map((tool) => (
                    <div
                      key={tool.name}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#e3ecdc] text-[#1c2419] border border-[#d2ded0] shadow-sm hover:scale-105 transition-transform"
                    >
                      <span className={`w-5 h-5 rounded-full ${tool.bg} ${tool.color} flex items-center justify-center font-bold text-[10px]`}>
                        {tool.symbol}
                      </span>
                      <span className="text-xs font-medium tracking-wide">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Inquiries & Quick Action */}
              <div className="border-t border-[#d8e3d2] pt-6 flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#6b7b65] font-medium mb-1">
                    Direct Contact
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#182015]">
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
              </div>

            </div>

            {/* Right Column: Kunal's Photo inside Inset Living Green Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-[32px] overflow-hidden bg-[#242b20] border-4 border-[#e3ebdc] shadow-xl group">
                <Image
                  src="/assets/Modern Minimalist Portrait Banner.png"
                  alt="Kunal Vaishnav — UI UX & Product Designer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
        </motion.div>

      </div>
    </section>
  );
}
