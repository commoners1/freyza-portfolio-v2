"use client";

import { motion } from "motion/react";
import { ChevronRight, Cpu, Download, Globe } from "lucide-react";
import { Entrance } from "@/components/Reveal";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { site } from "@/data/site";
import { useClientMotion } from "@/lib/useClientMotion";

export function HeroSection() {
  const { ready } = useClientMotion();

  return (
    <section
      id="id"
      className="relative min-h-[100dvh] flex flex-col px-4 sm:px-6 pb-6 sm:pb-20 hero-nav-offset text-center overflow-hidden scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="flex flex-1 w-full flex-col items-center justify-center sm:justify-start">
      <Entrance
        from={{ opacity: 0, scale: 0.92 }}
        className="mb-4 sm:mb-8 flex flex-col items-center gap-3 sm:gap-4"
      >
        <ProfileAvatar size="lg" className="sm:scale-100 scale-110" />
        <div className="px-3 sm:px-4 py-1.5 rounded-full border border-nova-cyan/20 bg-nova-cyan/5 text-nova-cyan text-[10px] sm:text-xs font-mono uppercase tracking-[0.12em] sm:tracking-[0.2em] flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full bg-nova-cyan ${ready ? "animate-pulse" : ""}`} />
          {site.availableForWork ? "Available for Work" : "System Online"}
        </div>
      </Entrance>

      <Entrance
        delay={0.1}
        className="hidden sm:block text-xs sm:text-sm font-mono text-label-purple uppercase tracking-[0.15em] sm:tracking-[0.25em] mb-3 sm:mb-4 px-2"
      >
        {site.title}
      </Entrance>

      <Entrance delay={0.15} className="sm:hidden text-[10px] font-mono text-label-purple uppercase tracking-[0.2em] mb-2 px-2">
        {site.role}
      </Entrance>

      <Entrance delay={0.2} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-6 px-2 leading-[1.1]">
        {site.shortName}
        <br />
        <span className="bg-gradient-to-r from-nova-cyan to-nova-purple bg-clip-text text-transparent">
          {site.tagline}
        </span>
      </Entrance>

      <Entrance delay={0.3} className="sm:hidden max-w-xs text-sm text-white/55 mb-6 leading-relaxed px-2">
        {site.mobileSummary ?? site.summary}
      </Entrance>

      <Entrance delay={0.35} className="hidden sm:block max-w-3xl text-base sm:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed px-2">
        {site.summary}
      </Entrance>

      <Entrance
        delay={0.45}
        className="flex flex-col w-full max-w-xs sm:max-w-none sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-2.5 sm:gap-4 mb-0 sm:mb-20 px-2"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center tap-target w-full sm:w-auto gap-2 bg-nova-cyan text-nova-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all"
        >
          Get in Touch <ChevronRight size={18} aria-hidden />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center justify-center tap-target w-full sm:w-auto glass text-white font-medium rounded-xl hover:bg-white/10 active:scale-[0.98] transition-colors"
        >
          View Projects
        </a>
        <a
          href={site.resumePath}
          download
          className="hidden sm:inline-flex items-center justify-center tap-target w-full sm:w-auto gap-2 glass text-white font-medium rounded-xl hover:bg-white/10 active:scale-[0.98] transition-colors"
        >
          <Download size={18} aria-hidden /> Resume
        </a>
      </Entrance>
      </div>

      <div className="hidden sm:flex absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">Scroll to Explore</span>
        {ready && (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[2px] h-10 bg-gradient-to-b from-nova-cyan to-transparent"
          />
        )}
      </div>

      {ready && (
        <>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute left-[12%] top-1/2 glass px-4 py-3 rounded-xl border-nova-cyan/20"
          >
            <Cpu size={24} className="text-nova-cyan mb-2" aria-hidden />
            <div className="text-[10px] font-mono text-label-muted uppercase">Core Stack</div>
            <div className="text-xs font-bold">NestJS / React</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden xl:block absolute right-[12%] top-[60%] glass px-4 py-3 rounded-xl border-nova-purple/20"
          >
            <Globe size={24} className="text-nova-purple mb-2" aria-hidden />
            <div className="text-[10px] font-mono text-label-muted uppercase">Based In</div>
            <div className="text-xs font-bold">{site.location.city}</div>
          </motion.div>
        </>
      )}
    </section>
  );
}
