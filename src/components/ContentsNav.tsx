"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

interface ContentsNavProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ContentsNav({ activeCategory, onSelectCategory }: ContentsNavProps) {
  // Map category cards to actual project screenshots
  const categoryMeta: Record<string, { image: string; tag: string }> = {
    uiux: {
      image: "/assets/rsrtc_phones.jpg",
      tag: "Discipline 01 • Case Studies",
    },
    social: {
      image: "/assets/cat_social.jpg",
      tag: "Discipline 02 • Campaigns",
    },
    logo: {
      image: "/assets/cat_logo.jpg",
      tag: "Discipline 03 • Brand Marks",
    },
  };

  return (
    <section id="contents" className="py-24 sm:py-32 px-6 sm:px-12 relative border-t border-[#313c2c]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#82a379]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#9eb29a] font-medium font-mono">
                Index of Work
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-[#f4f7ef] font-bold tracking-tight">
              Contents
            </h2>
          </div>
          <p className="text-[#a4b59f] text-sm sm:text-base font-light max-w-md">
            Structured case studies spanning mobile transit systems, EdTech profile redesigns, web applications, and brand identities.
          </p>
        </div>

        {/* 3 Living Green Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.categories.map((cat, idx) => {
            const meta = categoryMeta[cat.id] || { image: cat.image, tag: `Discipline 0${idx + 1}` };

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const target = document.getElementById(cat.id === "uiux" ? "projects" : "showcase");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="living-green-card-light p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              >
                {/* Upper: Inset Media Plate with real project screenshot */}
                <div className="relative aspect-[4/3] w-full rounded-[26px] overflow-hidden bg-[#1f261c] border border-[#dce6d6] shadow-sm mb-6">
                  <Image
                    src={meta.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141a12]/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Number Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#f4f6ef]/90 backdrop-blur-md border border-[#d2dfce] text-[#182015] font-mono text-xs font-semibold">
                    {cat.number}
                  </div>
                </div>

                {/* Lower: Content and Action Knob */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#6b7b65] font-medium mb-1.5">
                    {meta.tag}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#182015] font-semibold tracking-tight mb-2 group-hover:text-[#436e38] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[#4e5e49] text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#d8e3d2]">
                    <span className="text-xs font-medium text-[#5c6d56] group-hover:text-[#182015] transition-colors uppercase tracking-wider">
                      Explore category
                    </span>
                    <div className="sylva-knob group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 text-[#182015]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
