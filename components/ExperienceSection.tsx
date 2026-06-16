"use client";

import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { accentBorderClass } from "@/lib/accent";
import { Reveal } from "@/components/Reveal";

function ExperienceCard({
  exp,
  alignRight = false,
}: {
  exp: (typeof experiences)[number];
  alignRight?: boolean;
}) {
  return (
    <div
      className={`glass-dark p-5 sm:p-6 rounded-2xl border-l-4 ${accentBorderClass(exp.accent)} hover:bg-white/5 transition-colors`}
    >
      <div
        className={`text-xs font-mono mb-2 uppercase tracking-widest ${
          exp.accent === "cyan" ? "text-nova-cyan" : "text-nova-purple"
        }`}
      >
        {exp.period}
      </div>
      <h4 className="text-xl sm:text-2xl font-bold mb-2">{exp.role}</h4>
      <div
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-white/50 text-sm mb-4 ${
          alignRight ? "lg:justify-end" : ""
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          <Briefcase size={14} aria-hidden /> {exp.company}
        </span>
        <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={14} aria-hidden /> {exp.location}
        </span>
      </div>
      <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
      <div className={`flex flex-wrap gap-2 ${alignRight ? "lg:justify-end" : ""}`}>
        {exp.tech.map((t) => (
          <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-white/40">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto scroll-mt-28 sm:scroll-mt-24">
      <div className="mb-10 sm:mb-16">
        <h2 className="text-sm font-mono text-nova-cyan uppercase tracking-[0.3em] mb-4">Historical Data</h2>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Experience Timeline</h3>
      </div>

      <div className="relative border-l border-white/10 ml-3 sm:ml-4 lg:ml-0 lg:grid lg:grid-cols-[1fr_2px_1fr] lg:border-none">
        {experiences.map((exp, idx) => (
          <div key={`${exp.company}-${exp.role}`} className="relative mb-10 sm:mb-12 lg:mb-0 lg:contents">
            {idx % 2 === 0 ? (
              <>
                <Reveal fromLeft className="lg:text-right lg:pr-12 pb-10 sm:pb-12">
                  <ExperienceCard exp={exp} alignRight />
                </Reveal>
                <div className="hidden lg:flex flex-col items-center relative">
                  <div className="w-[2px] h-full bg-white/10" />
                  <div
                    className={`absolute top-8 w-4 h-4 rounded-full ${
                      exp.accent === "cyan"
                        ? "bg-nova-cyan shadow-[0_0_15px_rgba(0,245,255,0.8)]"
                        : "bg-nova-purple shadow-[0_0_15px_rgba(191,0,255,0.8)]"
                    }`}
                  />
                </div>
                <div className="hidden lg:block" />
              </>
            ) : (
              <>
                <div className="hidden lg:block" />
                <div className="hidden lg:flex flex-col items-center relative">
                  <div className="w-[2px] h-full bg-white/10" />
                  <div
                    className={`absolute top-8 w-4 h-4 rounded-full ${
                      exp.accent === "cyan"
                        ? "bg-nova-cyan shadow-[0_0_15px_rgba(0,245,255,0.8)]"
                        : "bg-nova-purple shadow-[0_0_15px_rgba(191,0,255,0.8)]"
                    }`}
                  />
                </div>
                <Reveal className="lg:pl-12 pb-10 sm:pb-12">
                  <ExperienceCard exp={exp} />
                </Reveal>
              </>
            )}

            <div className="lg:hidden absolute top-8 -left-[9px] w-4 h-4 rounded-full bg-white/20 border-2 border-nova-black" />
          </div>
        ))}
      </div>
    </section>
  );
}
