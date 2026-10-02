"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 relative border-t border-[#313c2c]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Living Green Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="living-green-card-light p-8 sm:p-14 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#e5f0df]/70 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#597350]" />
                  <span className="text-xs uppercase tracking-[0.22em] text-[#5c6d56] font-medium font-mono">
                    Open for Opportunities
                  </span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl text-[#182015] font-bold tracking-tight">
                  Get In Touch
                </h2>
                <p className="text-[#43523e] text-base font-light mt-3 leading-relaxed">
                  Available for full-time product design roles, UX systems consulting, and selective design partnerships.
                </p>
              </div>

              <div className="space-y-5 pt-4 border-t border-[#d8e3d2]">
                {/* Email */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-1">
                    Direct Email
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                      className="text-base sm:text-lg text-[#182015] font-medium hover:text-[#436e38] transition-colors"
                    >
                      {PORTFOLIO_DATA.contact.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3ecdc] text-[#1c2419] text-xs uppercase tracking-wider font-medium hover:bg-[#d6e5cf] transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-[#3e6935]" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-1">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                    className="text-base sm:text-lg text-[#182015] font-medium hover:text-[#436e38] transition-colors"
                  >
                    {PORTFOLIO_DATA.contact.phone}
                  </a>
                </div>

                {/* Social Network */}
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-2">
                    Network
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#e3ecdc] text-[#1c2419] text-xs font-medium hover:bg-[#d6e5cf] transition-colors"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-[#e3ecdc] text-[#1c2419] text-xs font-medium hover:bg-[#d6e5cf] transition-colors"
                    >
                      Instagram ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Living Green Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-2xl bg-[#ebf2e4] border border-[#dce6d6] text-[#182015] placeholder-[#7d8f76] text-sm focus:outline-none focus:border-[#4d7043] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#ebf2e4] border border-[#dce6d6] text-[#182015] placeholder-[#7d8f76] text-sm focus:outline-none focus:border-[#4d7043] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-[#6b7b65] font-mono mb-2">
                    Message / Opportunity
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, or open role..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#ebf2e4] border border-[#dce6d6] text-[#182015] placeholder-[#7d8f76] text-sm focus:outline-none focus:border-[#4d7043] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#182015] text-[#f4f6ef] text-xs uppercase tracking-wider font-medium hover:bg-[#2b3726] transition-all shadow-md group"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
