"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function VisualShowcase() {
  const [activeTab, setActiveTab] = useState<"social" | "logo">("social");

  return (
    <section id="showcase" className="py-24 sm:py-32 px-6 sm:px-12 relative border-t border-[#313c2c]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#82a379]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#9eb29a] font-medium font-mono">
                Visual Disciplines
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#f4f7ef] font-bold tracking-tight">
              Brand & Visuals
            </h2>
          </div>

          {/* Living Green Pill Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#20271c] border border-white/10 shadow-inner">
            <button
              onClick={() => setActiveTab("social")}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === "social"
                  ? "bg-[#f4f6ef] text-[#182015] shadow-md"
                  : "text-[#a4b59f] hover:text-white"
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveTab("logo")}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === "logo"
                  ? "bg-[#f4f6ef] text-[#182015] shadow-md"
                  : "text-[#a4b59f] hover:text-white"
              }`}
            >
              Logo & Identity
            </button>
          </div>
        </div>

        {/* Tab 1: Social Media Creative Showcase Card */}
        {activeTab === "social" && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="living-green-card-light p-6 sm:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Media Plate */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-md">
                <Image
                  src="/assets/cat_social.jpg"
                  alt="Social Media Creatives"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono">
                  Visual Systems
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#182015] font-bold tracking-tight">
                  Social Media Creatives
                </h3>
                <p className="text-[#3c4a37] text-base leading-relaxed font-light">
                  High-impact visual campaigns, social banners, and promotional assets combining 3D product rendering, layout balance, and strong visual hierarchy.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#d8e3d2]">
                  {PORTFOLIO_DATA.socialMediaShowcase.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#ebf2e4] border border-[#dce6d6]">
                      <div className="text-sm font-semibold text-[#182015] mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#52634d] font-light">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Logo & Brand Marks Card */}
        {activeTab === "logo" && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="living-green-card-light p-6 sm:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Media Plate */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-md">
                <Image
                  src="/assets/cat_logo.jpg"
                  alt="Logo and Brand Marks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono">
                  Identity Design
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-[#182015] font-bold tracking-tight">
                  Logo & Identity Systems
                </h3>
                <p className="text-[#3c4a37] text-base leading-relaxed font-light">
                  Distinct visual marks, emblems, and corporate identities engineered for longevity and cross-medium clarity across digital and physical touchpoints.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#d8e3d2]">
                  {PORTFOLIO_DATA.logoShowcase.map((logo, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#ebf2e4] border border-[#dce6d6]">
                      <div className="font-display text-lg text-[#182015] font-semibold">
                        {logo.name}
                      </div>
                      <div className="text-xs text-[#52634d] mt-0.5">
                        {logo.industry}
                      </div>
                      <div className="text-[11px] text-[#3e6935] font-medium mt-1 font-mono">
                        {logo.style}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
