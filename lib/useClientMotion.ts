"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- defer motion until after hydration
    setMounted(true);
  }, []);

  return mounted;
}

/**
 * SSR-safe motion helpers. Initial render matches the server (no entrance styles);
 * entrance animations run only after hydration when reduced motion is off.
 */
export function useClientMotion() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const ready = mounted && !prefersReducedMotion;

  function entrance(
    from: Record<string, number>,
    to: Record<string, number> = { opacity: 1 },
    transition?: object
  ) {
    if (!ready) {
      return { initial: false as const, animate: undefined, transition: undefined };
    }
    return { initial: from, animate: to, transition };
  }

  return { ready, prefersReducedMotion: prefersReducedMotion || !mounted, entrance };
}
