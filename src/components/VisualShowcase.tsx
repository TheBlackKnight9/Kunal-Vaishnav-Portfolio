"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Sparkles } from "lucide-react";
import StrokeText from "./StrokeText";

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
            <StrokeText
              text="Brand & Visuals"
              strokeColor="#82a379"
              fillColor="#f4f7ef"
              strokeWidth={1.4}
              drawDuration={1.6}
              fillDelay={0.2}
              stagger={0.04}
              ease="power2.out"
              trigger="inView"
              fillMode="wipe"
              fontSize={60}
              fontWeight={700}
              letterSpacing={-1.8}
              className="font-display"
            />
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Media Plate */}
              <div className="lg:col-span-7 flex">
                <a
                  href="https://www.behance.net/kunalvaishnav3/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[380px] lg:min-h-[520px] lg:h-full rounded-[28px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-md block group cursor-pointer"
                  title="Click to view projects on Behance"
                >
                  <Image
                    src="/assets/new4.jpeg"
                    alt="Social Media Creatives"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#182015]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-montserrat font-medium flex items-center gap-1.5 shadow-lg">
                    <span>See Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9ec297]" />
                  </div>
                </a>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono mb-2">
                    Visual Systems
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#182015] font-bold tracking-tight mb-3">
                    Social Media Creatives
                  </h3>
                  <p className="text-[#3c4a37] text-base leading-relaxed font-light">
                    High-impact visual campaigns, social banners, and promotional assets combining 3D product rendering, layout balance, and strong visual hierarchy.
                  </p>
                </div>

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

                <div className="pt-2">
                  <a
                    href="https://www.behance.net/kunalvaishnav3/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#182015] hover:bg-[#283523] text-[#f4f7ef] text-xs uppercase tracking-wider font-montserrat font-semibold shadow-md hover:shadow-lg transition-all group"
                  >
                    <span>See Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9ec297] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Media Plate */}
              <div className="lg:col-span-7 flex">
                <a
                  href="https://www.behance.net/kunalvaishnav3/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto min-h-[380px] lg:min-h-[520px] lg:h-full rounded-[28px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-md block group cursor-pointer"
                  title="Click to view projects on Behance"
                >
                  <Image
                    src="/assets/new5.jpeg"
                    alt="Logo and Brand Marks"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#182015]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-montserrat font-medium flex items-center gap-1.5 shadow-lg">
                    <span>See Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9ec297]" />
                  </div>
                </a>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono mb-2">
                    Identity Design
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-[#182015] font-bold tracking-tight mb-3">
                    Logo & Identity Systems
                  </h3>
                  <p className="text-[#3c4a37] text-base leading-relaxed font-light">
                    Distinct visual marks, emblems, and corporate identities engineered for longevity and cross-medium clarity across digital and physical touchpoints.
                  </p>
                </div>

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

                <div className="pt-2">
                  <a
                    href="https://www.behance.net/kunalvaishnav3/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#182015] hover:bg-[#283523] text-[#f4f7ef] text-xs uppercase tracking-wider font-montserrat font-semibold shadow-md hover:shadow-lg transition-all group"
                  >
                    <span>See Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9ec297] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
