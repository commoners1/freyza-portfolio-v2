"use client";

import { motion } from "motion/react";
import { useClientMotion } from "@/lib/useClientMotion";
import { useCanHover } from "@/lib/useCanHover";

export function BackgroundAura() {
  const { ready } = useClientMotion();
  const canHover = useCanHover();
  const animate = ready && canHover;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {animate ? (
        <>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-nova-cyan/10 blur-[72px] lg:blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-nova-purple/10 blur-[80px] lg:blur-[150px]"
          />
        </>
      ) : (
        <>
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-nova-cyan/10 blur-[72px] lg:blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-nova-purple/10 blur-[80px] lg:blur-[150px]" />
        </>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,7,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-soft-light" />
    </div>
  );
}
