"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#313c2c]/40 bg-[#161a13] py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start">
            <span className="w-7 h-7 rounded-full bg-[#20271c] border border-white/10 text-[#d4e2d0] flex items-center justify-center font-bold text-xs">
              KV
            </span>
            <span className="font-display font-semibold text-base text-[#f4f7ef]">
              Kunal Vaishnav
            </span>
          </div>
          <span className="text-xs text-[#8e9e8b] font-mono">
            UI/UX & Product Design
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-[#7d8d7a]">
            © {new Date().getFullYear()} • Thoughtful Digital Experiences
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#20271c] border border-white/10 text-xs uppercase tracking-widest text-[#a8cca2] hover:text-white transition-all shadow-sm"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
