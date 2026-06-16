"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useMounted } from "@/lib/useClientMotion";

/** Skip heavy scroll/entrance animations on touch devices and reduced-motion prefs. */
export function useLightMotion() {
  const mounted = useMounted();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [isTouchLike, setIsTouchLike] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setIsTouchLike(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!mounted) return false;

  return prefersReducedMotion || isTouchLike;
}
