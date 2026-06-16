"use client";

import { motion } from "motion/react";
import { site } from "@/data/site";
import { useMounted } from "@/lib/useClientMotion";

const ORBIT_DURATION = 22;

export function NexusOrbit() {
  const mounted = useMounted();

  return (
    <div className="relative max-w-md mx-auto w-full lg:max-w-none">
      <div className="aspect-square relative flex items-center justify-center max-h-[22rem] sm:max-h-none mx-auto">
        <div
          className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-nova-cyan/20 to-nova-purple/20 blur-2xl"
          aria-hidden
        />

        {/* Static orbit paths */}
        <div
          className="absolute inset-0 rounded-full border border-nova-cyan/25"
          aria-hidden
        />
        <div
          className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-nova-purple/20"
          aria-hidden
        />

        {/* Single orbiting planet */}
        {mounted ? (
          <motion.div
            className="absolute inset-0 z-[1] pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-nova-cyan shadow-[0_0_20px_rgba(0,245,255,1)]" />
          </motion.div>
        ) : (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] w-4 h-4 rounded-full bg-nova-cyan/80" aria-hidden />
        )}

        <motion.div
          initial={false}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 glass p-8 sm:p-10 rounded-3xl"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-mono font-bold text-nova-cyan mb-2">
              {String(site.yearsExperience).padStart(2, "0")}+
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/40">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
