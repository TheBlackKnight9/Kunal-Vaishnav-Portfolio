"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Layers, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0f140d]/85 backdrop-blur-md"
        />

        {/* Modal Window in Living Green Light Card Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#f4f6ef] text-[#182015] border border-[#dce6d6] rounded-[36px] shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#dce6d6] bg-[#f4f6ef] sticky top-0 z-20">
            <div className="flex items-baseline gap-3">
              <span className="font-editorial italic text-2xl text-[#82a379] font-light">
                {project.number.replace(/^0+/, "")}.
              </span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#182015] font-bold">
                  {project.title}
                </h3>
                <p className="text-xs text-[#5f7059] mt-0.5">
                  {project.role} • {project.duration}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white border border-[#d0ded0] flex items-center justify-center text-[#182015] hover:scale-105 transition-transform shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
            
            {/* Primary Mockup Image */}
            <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4 sm:p-8"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#182015] text-[#f4f6ef] text-xs uppercase tracking-wider font-medium hover:bg-[#2b3726] transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Prototype</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.flowDesignUrl && (
                <a
                  href={project.flowDesignUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#182015]/25 text-[#182015] text-xs uppercase tracking-wider font-medium hover:bg-[#182015]/5 transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Flow Design</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Overview */}
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono mb-2">
                Overview
              </div>
              <p className="text-[#3c4a37] text-base leading-relaxed font-light">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#dce6d6]">
                {project.problem && (
                  <div className="p-5 rounded-2xl bg-[#ebf2e4] border border-[#dce6d6]">
                    <h4 className="font-display text-xl text-[#182015] font-semibold mb-3">
                      Problem
                    </h4>
                    {Array.isArray(project.problem) ? (
                      <div className="text-[#3c4a37] text-sm font-light space-y-1.5 leading-relaxed">
                        <p className="text-[#182015] font-medium mb-1">{project.problem[0]}</p>
                        <ul className="space-y-1 pl-4 list-disc list-outside text-[#485743]">
                          {project.problem.slice(1).map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-[#3c4a37] text-sm font-light leading-relaxed">
                        {project.problem}
                      </p>
                    )}
                  </div>
                )}

                {project.solution && (
                  <div className="p-5 rounded-2xl bg-[#ebf2e4] border border-[#dce6d6]">
                    <h4 className="font-display text-xl text-[#182015] font-semibold mb-3">
                      Solution
                    </h4>
                    {Array.isArray(project.solution) ? (
                      <div className="text-[#3c4a37] text-sm font-light space-y-1.5 leading-relaxed">
                        <p className="text-[#182015] font-medium mb-1">{project.solution[0]}</p>
                        <ul className="space-y-1 pl-4 list-disc list-outside text-[#485743]">
                          {project.solution.slice(1).map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-[#3c4a37] text-sm font-light leading-relaxed">
                        {project.solution}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Secondary Mockup (if exists) */}
            {project.secondaryImage && (
              <div className="pt-4 border-t border-[#dce6d6]">
                <div className="text-xs uppercase tracking-[0.2em] text-[#6b7b65] font-mono mb-3">
                  Design System & Details
                </div>
                <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-[#1c2319] border-2 border-[#dce6d6] shadow-sm">
                  <Image
                    src={project.secondaryImage}
                    alt={`${project.title} Design Architecture`}
                    fill
                    className="object-contain p-4 sm:p-8"
                  />
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
