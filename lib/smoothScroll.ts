const DEFAULT_DURATION = 880;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function getScrollOffset(): number {
  const nav = document.querySelector("nav");
  if (nav) {
    return nav.getBoundingClientRect().bottom + 12;
  }
  return 96;
}

function pulseSection(element: HTMLElement) {
  element.classList.remove("section-arrived");
  // Force reflow so re-triggering the same section works
  void element.offsetWidth;
  element.classList.add("section-arrived");
  window.setTimeout(() => element.classList.remove("section-arrived"), 900);
}

function animateScroll(targetY: number, duration: number, onComplete?: () => void) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const start = performance.now();

  const step = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  };

  requestAnimationFrame(step);
}

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetY = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - getScrollOffset()
  );

  const onArrive = () => pulseSection(element);

  if (reduceMotion) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    onArrive();
    return;
  }

  animateScroll(targetY, DEFAULT_DURATION, onArrive);
}

export function isInPageHash(href: string | null): href is `#${string}` {
  return Boolean(href && href.startsWith("#") && href.length > 1);
}
