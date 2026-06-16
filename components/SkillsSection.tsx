"use client";

import type { ReactNode } from "react";
import {
  Brain,
  Database,
  Layers,
  Layout,
  Shield,
  Wrench,
} from "lucide-react";
import { NexusOrbit } from "@/components/NexusOrbit";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/skills";
import type { SkillIcon } from "@/data/types";

const iconMap: Record<SkillIcon, ReactNode> = {
  frontend: <Layout className="text-nova-cyan" />,
  backend: <Layers className="text-nova-purple" />,
  database: <Database className="text-nova-cyan" />,
  devops: <Shield className="text-nova-purple" />,
  ai: <Brain className="text-nova-cyan" />,
  tools: <Wrench className="text-nova-purple" />,
};

export function SkillsSection() {
  return (
    <section id="nexus" className="section-padding bg-nova-dark/50 scroll-mt-28 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-sm font-mono text-nova-purple uppercase tracking-[0.3em] mb-4">Tech Matrix</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">The Nexus of My Ecosystem</h3>
          <p className="text-white/50 mb-6 sm:mb-8 text-base sm:text-lg">
            Six years building secure, scalable web systems — from REST APIs and payment gateways
            to AI-powered platforms and DevOps pipelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {skills.map((skill, idx) => (
              <Reveal key={skill.name} delay={idx * 0.05}>
                <div className="p-4 sm:p-5 glass rounded-2xl group hover:border-nova-purple/50 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                      {iconMap[skill.icon]}
                    </div>
                    <span className="font-bold text-sm">{skill.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-2 py-1 bg-white/5 rounded-md text-[10px] font-mono text-white/40">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <NexusOrbit />
      </div>
    </section>
  );
}
