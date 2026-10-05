"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onOpenModal, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="py-16 sm:py-24 border-t border-[#313c2c]/40 first:border-t-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ── Vertically Rectangular Card for Screenshot ── */}
        <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="living-green-card-light w-full max-w-[420px] p-5 sm:p-6 rounded-[38px] flex flex-col justify-between shadow-[0_24px_55px_-10px_rgba(12,17,10,0.35)] border border-[#e1e9db] relative group">
            
            {/* Top Bar of the Vertical Card */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#5c6d56] font-semibold">
                Featured {project.number}
              </span>
              <button
                onClick={() => onOpenModal(project)}
                className="sylva-knob w-9 h-9"
                aria-label={`Expand ${project.title} screenshot`}
              >
                <ArrowUpRight className="w-4 h-4 text-[#182015]" />
              </button>
            </div>

            {/* Inset Plate with Vertical Aspect Ratio */}
            <div
              onClick={() => onOpenModal(project)}
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-[28px] overflow-hidden bg-white border-2 border-[#dce6d6] shadow-sm cursor-pointer"
            >
              <Image
                src={project.image}
                alt={`${project.title} Screenshot`}
                fill
                className="object-contain p-3 sm:p-5 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent pointer-events-none" />

              {/* Bottom overlay pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#182015]/85 backdrop-blur-md text-[#eef4ea] text-[10px] font-mono shadow-sm">
                  {project.role}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#182015] text-[10px] font-medium flex items-center gap-1 shadow-sm border border-[#dce6d6]">
                  <Sparkles className="w-2.5 h-2.5 text-[#4f6e45]" /> Inspect
                </span>
              </div>
            </div>

            {/* Bottom Footer of the Vertical Card */}
            <div className="pt-4 mt-3 border-t border-[#d8e3d2] flex items-center justify-between">
              <div className="text-xs font-semibold text-[#182015]">
                {project.title}
              </div>
              {project.prototypeUrl ? (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#3b6b32] hover:underline flex items-center gap-1"
                >
                  Prototype ↗
                </a>
              ) : project.flowDesignUrl ? (
                <a
                  href={project.flowDesignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#3b6b32] hover:underline flex items-center gap-1"
                >
                  Flow ↗
                </a>
              ) : null}
            </div>

          </div>
        </div>

        {/* ── Case Study Content Written Outside the Card ── */}
        <div className={`lg:col-span-7 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          
          {/* Large Number & Category Badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-editorial italic text-3xl sm:text-4xl text-[#82a379] font-light">
              {project.number.replace(/^0+/, "")}.
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#9eb29a] font-medium font-mono">
              {project.role} • {project.duration}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-3xl sm:text-5xl text-[#f4f7ef] font-bold tracking-tight mb-3">
            {project.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-[#a4b59f] text-base sm:text-lg font-light mb-6 leading-relaxed">
            {project.subtitle}
          </p>

          {/* Overview paragraph */}
          <p className="text-[#c8d7c4] text-sm sm:text-base font-light leading-relaxed mb-8 max-w-2xl">
            {project.overview}
          </p>

          {/* Problem & Solution Written Outside the Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {project.problem && (
              <div className="p-5 rounded-2xl bg-[#20271c]/75 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#e88a8a] mb-2 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  The Problem
                </div>
                {Array.isArray(project.problem) ? (
                  <ul className="space-y-1 text-xs sm:text-sm text-[#b9c8b5] font-light list-disc pl-4">
                    {project.problem.slice(1, 4).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#b9c8b5] font-light leading-relaxed">
                    {project.problem}
                  </p>
                )}
              </div>
            )}

            {project.solution && (
              <div className="p-5 rounded-2xl bg-[#20271c]/75 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#a3c79c] mb-2 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  The Solution
                </div>
                {Array.isArray(project.solution) ? (
                  <ul className="space-y-1 text-xs sm:text-sm text-[#b9c8b5] font-light list-disc pl-4">
                    {project.solution.slice(1, 4).map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-[#b9c8b5] font-light leading-relaxed">
                    {project.solution}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Meta Tags & Action Buttons Outside the Card */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[#313c2c]/50">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#242b20] text-[#c8d7c4] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f4f6ef] text-[#182015] text-xs uppercase tracking-wider font-semibold hover:bg-white hover:scale-105 transition-all shadow-md"
                >
                  <span>Prototype</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.flowDesignUrl && (
                <a
                  href={project.flowDesignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 text-[#edf2e8] text-xs uppercase tracking-wider font-medium hover:border-[#a3c79c] hover:text-[#a3c79c] transition-colors"
                >
                  <span>Flow Design</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={() => onOpenModal(project)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 text-[#edf2e8] text-xs uppercase tracking-wider font-medium hover:border-[#a3c79c] hover:text-[#a3c79c] transition-colors"
              >
                <span>Case Details</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </motion.article>
  );
}
