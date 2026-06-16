"use client";

import { motion } from "motion/react";
import { Award, Globe, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { languages } from "@/data/languages";
import { useClientMotion } from "@/lib/useClientMotion";
import { useLightMotion } from "@/lib/useLightMotion";

export function DossierSection() {
  const { ready } = useClientMotion();
  const lightMotion = useLightMotion();
  const animateBars = ready && !lightMotion;

  return (
    <section id="dossier" className="section-padding border-t border-white/5 scroll-mt-28 sm:scroll-mt-24">
      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20">
        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 bg-nova-purple/10 rounded-lg shrink-0">
              <Globe size={20} className="text-nova-purple" aria-hidden />
            </div>
            <div>
              <h2 className="text-sm font-mono text-label-purple uppercase tracking-[0.3em]">Communication</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Linguistic Matrix</h3>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {languages.map((lang, idx) => (
              <Reveal key={lang.name} delay={idx * 0.05}>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-1 mb-2">
                    <div>
                      <span className="text-lg font-bold mr-2 sm:mr-3">{lang.name}</span>
                      <span className="text-xs font-mono text-label-muted uppercase tracking-widest">{lang.level}</span>
                    </div>
                    <span className="text-xs font-mono text-label-purple">{lang.proficiency}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    {animateBars ? (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ width: `${lang.proficiency}%`, transformOrigin: "left center" }}
                        className="h-full bg-gradient-to-r from-nova-purple to-nova-cyan rounded-full shadow-[0_0_10px_rgba(191,0,255,0.5)]"
                      />
                    ) : (
                      <div
                        className="h-full bg-gradient-to-r from-nova-purple to-nova-cyan rounded-full"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 bg-nova-cyan/10 rounded-lg shrink-0">
              <GraduationCap size={20} className="text-nova-cyan" aria-hidden />
            </div>
            <div>
              <h2 className="text-sm font-mono text-nova-cyan uppercase tracking-[0.3em]">Academic Record</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
            </div>
          </div>

          {education.map((edu) => (
            <Reveal key={edu.institution}>
              <div className="glass-dark p-5 sm:p-6 rounded-2xl border-l-4 border-nova-cyan">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold">{edu.degree}</h4>
                    <p className="text-white/60 text-sm sm:text-base">{edu.institution}</p>
                  </div>
                  <div className="text-sm font-mono text-nova-cyan shrink-0">{edu.period}</div>
                </div>
                <p className="text-sm text-white/50 mb-2">{edu.location}</p>
                {edu.gpa && (
                  <p className="text-sm font-mono text-label-purple mb-4">GPA: {edu.gpa}</p>
                )}
                <ul className="space-y-1">
                  {edu.details.map((detail) => (
                    <li key={detail} className="text-sm text-white/60 leading-relaxed">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 bg-nova-purple/10 rounded-lg shrink-0">
              <Award size={20} className="text-nova-purple" aria-hidden />
            </div>
            <div>
              <h2 className="text-sm font-mono text-label-purple uppercase tracking-[0.3em]">Credentials</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Certifications</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.name} delay={idx * 0.03}>
                <div className="glass p-4 rounded-xl h-full">
                  <p className="font-bold text-sm mb-1 leading-snug">{cert.name}</p>
                  <p className="text-xs font-mono text-label-muted leading-relaxed">{cert.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
