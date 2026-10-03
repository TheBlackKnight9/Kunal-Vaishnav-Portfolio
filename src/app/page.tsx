"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Scene from "@/components/effects/sylva-hero/Scene";
import WhoIAm from "@/components/WhoIAm";
import ContentsNav from "@/components/ContentsNav";
import ProjectsSection from "@/components/ProjectsSection";
import VisualShowcase from "@/components/VisualShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("uiux");

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === "sylva-navigate" && e.data?.target) {
        if (e.data.target === "#hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const targetEl = document.querySelector(e.data.target);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <main className="min-h-screen living-green-bg bg-[#1b2019] text-[#edf2e8] flex flex-col selection:bg-[#526a4a]/40 selection:text-[#f4f7f0]">
      {/* Persistent Navigation (reveals when scrolling down past the 3D Hero) */}
      <Navbar />

      {/* Living Green 3D Hero Scene */}
      <section id="hero" className="w-full relative">
        <Scene />
      </section>

      {/* Who I Am (About, Photo, Tools, Contact) */}
      <WhoIAm />

      {/* Contents Section (3 Categorized Navigation Cards) */}
      <ContentsNav
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Selected UI UX Projects Case Studies (RSRTC, NPrep, ExamWali, Hostel Hub) */}
      <ProjectsSection />

      {/* Creative Showcase: Social Media & Brand Marks */}
      <VisualShowcase />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
