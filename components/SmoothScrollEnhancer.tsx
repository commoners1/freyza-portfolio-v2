"use client";

import { useEffect } from "react";
import { isInPageHash, scrollToSection } from "@/lib/smoothScroll";

export function SmoothScrollEnhancer() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href^='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!isInPageHash(href)) return;

      const section = document.getElementById(href.slice(1));
      if (!section) return;

      event.preventDefault();

      scrollToSection(href);

      requestAnimationFrame(() => {
        if (history.pushState) {
          history.pushState(null, "", href);
        } else {
          window.location.hash = href;
        }
      });
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
