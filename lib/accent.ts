import type { Accent } from "@/data/types";

export function accentTextClass(accent: Accent) {
  return accent === "cyan" ? "text-nova-cyan" : "text-nova-purple";
}

export function accentBorderClass(accent: Accent) {
  return accent === "cyan" ? "border-nova-cyan" : "border-nova-purple";
}

export function accentGlow(accent: Accent) {
  return accent === "cyan"
    ? "rgba(0, 245, 255, 0.15)"
    : "rgba(191, 0, 255, 0.15)";
}
