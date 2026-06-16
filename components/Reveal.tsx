"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useMounted } from "@/lib/useClientMotion";
import { useLightMotion } from "@/lib/useLightMotion";

function RevealAnimated({
  children,
  fromLeft = false,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  fromLeft?: boolean;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.12 });
  const show = !mounted || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        show
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: fromLeft ? -28 : 28, y: 32 }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  fromLeft = false,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  fromLeft?: boolean;
  className?: string;
  delay?: number;
}) {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion() ?? false;
  const lightMotion = useLightMotion();

  if (!mounted || lightMotion || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <RevealAnimated fromLeft={fromLeft} className={className} delay={delay}>
      {children}
    </RevealAnimated>
  );
}

export function Entrance({
  children,
  className = "",
  delay = 0,
  from = { opacity: 0, y: 28 },
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: { opacity: number; y?: number; scale?: number };
}) {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion() ?? false;
  const lightMotion = useLightMotion();

  if (!mounted || reduceMotion || lightMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={from}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
