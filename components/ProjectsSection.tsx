"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ChevronDown, ExternalLink, Github, Info } from "lucide-react";
import React, { useRef, useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { accentGlow, accentTextClass } from "@/lib/accent";
import { useCanHover } from "@/lib/useCanHover";
import { useMounted } from "@/lib/useClientMotion";

const MOBILE_PREVIEW_COUNT = 3;

function ProjectLinks({
  project,
  onInfo,
}: {
  project: Project;
  onInfo: () => void;
}) {
  const primaryGithub = project.githubUrls?.[0];

  return (
    <div className="project-actions flex flex-wrap gap-2 sm:gap-3">
      <button
        type="button"
        onClick={onInfo}
        className="inline-flex items-center justify-center tap-target gap-2 text-sm font-bold glass rounded-lg hover:bg-white/10 active:scale-[0.98] transition-colors border border-white/10"
        aria-label={`View details for ${project.title}`}
      >
        <Info size={16} aria-hidden /> Details
      </button>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center tap-target gap-2 text-sm font-bold bg-white text-black rounded-lg hover:bg-nova-cyan active:scale-[0.98] transition-colors"
        >
          <ExternalLink size={16} aria-hidden /> {project.liveLabel ?? "Live Site"}
        </a>
      )}
      {primaryGithub && (
        <a
          href={primaryGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center tap-target gap-2 text-sm font-bold glass rounded-lg hover:bg-white/10 active:scale-[0.98] transition-colors"
        >
          <Github size={16} aria-hidden /> Source
        </a>
      )}
      {project.extraLinks?.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center tap-target gap-2 text-sm font-bold glass rounded-lg hover:bg-white/10 active:scale-[0.98] transition-colors"
        >
          <ExternalLink size={16} aria-hidden /> {link.label}
        </a>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  onInfo,
}: {
  project: Project;
  onInfo: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();
  const mounted = useMounted();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  const glow = accentGlow(project.accent);
  const enableTilt = canHover && mounted;
  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([cx, cy]) =>
      `radial-gradient(600px circle at ${cx}px ${cy}px, ${glow}, transparent 40%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    x.set(mouseXPos / rect.width - 0.5);
    y.set(mouseYPos / rect.height - 0.5);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const visibleTags = project.tags.slice(0, 6);

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
      className={`group relative flex flex-col overflow-hidden rounded-3xl glass-dark border-white/5 ${
        enableTilt ? "perspective-1000 min-h-[480px]" : ""
      }`}
    >
      {enableTilt && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}

      <div className="relative z-0 h-44 sm:h-52 md:h-56 w-full shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nova-black via-nova-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-10" />

      <div className="relative z-20 flex flex-col flex-1 p-4 sm:p-6 gap-3 sm:gap-4">
        <div>
          <p className={`text-xs font-mono mb-1.5 sm:mb-2 uppercase tracking-widest ${accentTextClass(project.accent)}`}>
            {project.category}
          </p>
          <h4 className="text-xl sm:text-3xl font-bold mb-1 group-hover:text-nova-cyan transition-colors">
            {project.title}
          </h4>
          <p className="text-xs font-mono text-label-muted mb-2 sm:mb-3">{project.organization}</p>
          {project.shortDescription && (
            <p
              className={`text-sm text-white/50 mb-2 sm:mb-3 max-lg:line-clamp-1 lg:line-clamp-2`}
            >
              {project.shortDescription}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {visibleTags.map((tag, tagIdx) => (
              <span
                key={tag}
                className={`px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/60 ${
                  tagIdx >= 3 ? "hidden lg:inline-flex" : ""
                }`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2.5 py-1 text-[10px] text-label-muted lg:hidden">
                +{project.tags.length - 3} more
              </span>
            )}
            {project.tags.length > 6 && (
              <span className="px-2.5 py-1 text-[10px] text-label-muted hidden lg:inline">
                +{project.tags.length - 6} more
              </span>
            )}
          </div>
        </div>

        <ProjectLinks project={project} onInfo={onInfo} />
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const hasMoreOnMobile = projects.length > MOBILE_PREVIEW_COUNT;

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto scroll-mt-28 sm:scroll-mt-24">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-16 gap-3 sm:gap-6">
        <div>
          <h2 className="text-sm font-mono text-nova-cyan uppercase tracking-[0.3em] mb-3 sm:mb-4 underline decoration-nova-cyan/30 underline-offset-8">
            Selected Missions
          </h2>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Featured Works</h3>
        </div>
        <p className="hidden sm:block max-w-md text-white/50 text-sm sm:text-base">
          Production systems, client deliverables, and personal builds — from ERP platforms and nonprofit
          fundraising to tour sites, HR systems, and mobile apps.
        </p>
        <p className="sm:hidden text-label-muted text-sm max-w-sm">
          Production systems, client work & personal builds.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {projects.map((project, idx) => {
            const hiddenOnMobile = idx >= MOBILE_PREVIEW_COUNT && !mobileExpanded;

            return (
              <div
                key={project.title}
                className={hiddenOnMobile ? "max-lg:hidden" : undefined}
              >
                <Reveal delay={idx * 0.05}>
                  <motion.div
                    initial={idx >= MOBILE_PREVIEW_COUNT && mobileExpanded ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard
                      project={project}
                      onInfo={() => setSelectedProject(project)}
                    />
                  </motion.div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {hasMoreOnMobile && !mobileExpanded && (
          <div className="lg:hidden absolute inset-x-0 bottom-8 pointer-events-none">
            <div className="h-40 bg-gradient-to-t from-nova-black via-nova-black/90 to-transparent" />
          </div>
        )}

        {hasMoreOnMobile && (
          <div className={`lg:hidden relative z-10 ${mobileExpanded ? "mt-6" : "-mt-2"}`}>
            {!mobileExpanded ? (
              <button
                type="button"
                onClick={() => setMobileExpanded(true)}
                className="w-full inline-flex items-center justify-center gap-2 tap-target text-sm font-mono font-medium text-nova-cyan hover:text-white transition-colors"
                aria-expanded={false}
              >
                Show more projects
                <ChevronDown size={18} aria-hidden />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMobileExpanded(false)}
                className="w-full inline-flex items-center justify-center gap-2 tap-target text-sm font-mono text-label-muted hover:text-white/80 transition-colors"
                aria-expanded={true}
              >
                Show less
                <ChevronDown size={18} aria-hidden className="rotate-180" />
              </button>
            )}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
