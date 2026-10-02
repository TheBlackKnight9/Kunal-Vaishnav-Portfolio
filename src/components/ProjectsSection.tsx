"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 relative border-t border-[#313c2c]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#82a379]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#9eb29a] font-medium font-mono">
                Shipped Systems & Apps
              </span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#f4f7ef] font-bold tracking-tight">
              Selected Works
            </h2>
          </div>
          <p className="text-[#a4b59f] text-sm sm:text-base font-light max-w-md">
            Four end-to-end design case studies combining research, UI systems, and interactive Figma prototypes.
          </p>
        </div>

        {/* Project List */}
        <div>
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
