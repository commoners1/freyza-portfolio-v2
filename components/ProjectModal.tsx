"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, Github, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/types";
import { accentTextClass } from "@/lib/accent";
import { useMounted } from "@/lib/useClientMotion";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

function ModalLinks({ project }: { project: Project }) {
  const primaryGithub = project.githubUrls?.[0];

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center tap-target gap-2 text-sm font-bold bg-nova-cyan text-nova-black rounded-lg hover:brightness-110 active:scale-[0.98] transition-all"
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

function ProjectModalPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  const gallery = project.images ?? [project.image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="relative z-10 w-full sm:max-w-5xl max-h-[92dvh] sm:max-h-[88dvh] glass-dark rounded-t-3xl sm:rounded-3xl border-white/10 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 inline-flex items-center justify-center tap-target p-2 rounded-xl glass hover:bg-white/10 transition-colors"
        aria-label="Close"
      >
        <X size={20} aria-hidden />
      </button>

      <div className="overflow-y-auto overscroll-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 p-5 sm:p-6 md:p-8 pt-14">
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                key={gallery[activeImage]}
                src={gallery[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border transition-all ${
                      activeImage === index
                        ? "border-nova-cyan ring-2 ring-nova-cyan/30"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={activeImage === index}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mt-5 md:mt-0">
            <div>
              <p
                className={`text-xs font-mono uppercase tracking-widest mb-2 ${accentTextClass(project.accent)}`}
              >
                {project.category}
              </p>
              <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold mb-1">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-white/40">{project.organization}</p>
            </div>

            {project.shortDescription && (
              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
                {project.shortDescription}
              </p>
            )}

            {project.description && (
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                {project.description}
              </p>
            )}

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ModalLinks project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const mounted = useMounted();
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={handleClose}
          />

          <ProjectModalPanel key={project.title} project={project} onClose={handleClose} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
