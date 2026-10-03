"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect current section in view
      const sections = [
        { id: "contact", navId: "contact" },
        { id: "showcase", navId: "showcase" },
        { id: "projects", navId: "projects" },
        { id: "contents", navId: "who-i-am" },
        { id: "who-i-am", navId: "who-i-am" },
      ];
      const scrollPos = window.scrollY + 220;

      for (const item of sections) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.navId);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "About",
      href: "#who-i-am",
      id: "who-i-am",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 14V9" />
          <path d="M8 9c0-2.4 1.7-4.3 4-4.3.2 2.6-1.6 4.6-4 4.3Z" />
          <path d="M8 10.5C7.9 8.4 6.4 6.8 4.4 6.8 4.3 8.9 5.9 10.6 8 10.5Z" />
        </svg>
      ),
    },
    {
      name: "Works",
      href: "#projects",
      id: "projects",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1.6 12.4c2.4-3.4 4.3-5.1 5.7-5.1 2 0 3 3.6 5 3.6 1.1 0 1.9-.5 2.4-1.4" />
          <path d="M4.3 6.2C5.5 4.4 6.6 3.5 7.6 3.5c1.5 0 2.2 2.4 3.7 2.4" />
        </svg>
      ),
    },
    {
      name: "Showcase",
      href: "#showcase",
      id: "showcase",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2.4h5.3L12 5.1v8.5H4z" />
          <path d="M9.2 2.4V5h2.7" />
          <path d="M6 8.4h4M6 10.8h2.8" />
        </svg>
      ),
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
      icon: (
        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.6 2.5h5.1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6.6" />
          <path d="M2.6 8h6.6" />
          <path d="m7 5.6 2.4 2.4L7 10.4" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 transition-all duration-500 flex flex-col items-center pointer-events-none px-4 opacity-100 translate-y-0"
    >
      {/* ── ThreeUI Sylva Glass Dock Capsule ── */}
      <div
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-[22px] border backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-white/[0.14] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_42%),rgba(27,33,24,0.92)] shadow-[0_18px_40px_rgba(10,14,8,0.55),inset_0_1px_0_rgba(255,255,255,0.14)]"
            : "border-white/[0.10] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_42%),rgba(24,30,22,0.82)] shadow-[0_12px_28px_rgba(10,14,8,0.38),inset_0_1px_0_rgba(255,255,255,0.10)]"
        }`}
      >
        
        {/* Brand / Mark: KV Tile (.dock-mark) — Active on Landing Page */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("hero");
          }}
          className={`h-9 px-3.5 rounded-xl text-xs font-mono font-bold inline-flex items-center justify-center transition-all ${
            activeSection === "hero"
              ? "bg-[#f2f3ef] text-[#1e241b] border border-[#f2f3ef] shadow-md font-black scale-105"
              : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-[#232b1f] hover:border-white/15 border border-transparent font-medium"
          }`}
          aria-label="Kunal Vaishnav — Home"
        >
          <span className="tracking-wider">KV</span>
        </a>

        {/* Center Dock Items (.dock-item) */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`h-9 px-3.5 rounded-xl text-[11px] uppercase tracking-[0.15em] font-mono inline-flex items-center gap-2 transition-all ${
                  isActive
                    ? "bg-[#f2f3ef] text-[#1e241b] border border-[#f2f3ef] shadow-md font-semibold"
                    : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-[#232b1f] hover:border-white/15 border border-transparent font-medium"
                }`}
              >
                <span className={`transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`}>
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Socials & Get In Touch Tile */}
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="w-[1px] h-4 bg-white/10 mx-0.5" />

          {/* Instagram Tile */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#232b1f] text-white/70 hover:text-white border border-transparent hover:border-white/15 flex items-center justify-center transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* LinkedIn Tile */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#232b1f] text-white/70 hover:text-white border border-transparent hover:border-white/15 flex items-center justify-center transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Get In Touch CTA Tile */}
          <a
            href="#contact"
            className="h-9 px-3.5 rounded-xl bg-[#eef1e7] text-[#1a2217] hover:bg-white text-[11px] font-semibold tracking-wider uppercase font-mono shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 ml-1"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#1a2217]" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-xl bg-white/[0.04] text-white/80 hover:text-white flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

      </div>

      {/* ── Mobile Glass Drawer ── */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mt-2 w-full max-w-sm bg-[#1b2218]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <nav className="flex flex-col gap-2">
            <a
              href="#hero"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("hero");
              }}
              className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-[0.14em] font-medium font-mono flex items-center gap-3 transition-all ${
                activeSection === "hero"
                  ? "bg-[#eef1e7] text-[#182015] font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span className="w-5 h-5 rounded-md bg-[#182015] text-[#f2f3ef] flex items-center justify-center font-bold text-[10px]">
                KV
              </span>
              <span>Home</span>
            </a>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-[0.14em] font-medium font-mono flex items-center gap-3 transition-all ${
                    isActive
                      ? "bg-[#eef1e7] text-[#182015] font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="opacity-80">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] text-white/70 flex items-center justify-center"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] text-white/70 flex items-center justify-center"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-1.5 rounded-lg bg-[#eef1e7] text-[#182015] text-[11px] font-semibold uppercase tracking-wider font-mono flex items-center gap-1"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
