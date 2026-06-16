function pulseSection(element: HTMLElement) {
  element.classList.remove("section-arrived");
  void element.offsetWidth;
  element.classList.add("section-arrived");
  window.setTimeout(() => element.classList.remove("section-arrived"), 480);
}

function scheduleArrivalPulse(element: HTMLElement) {
  let fired = false;

  const fire = () => {
    if (fired) return;
    fired = true;
    pulseSection(element);
  };

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", fire, { once: true });
  }

  const distance = Math.abs(element.getBoundingClientRect().top);
  const estimateMs = Math.min(520, Math.max(280, distance * 0.35));
  window.setTimeout(fire, estimateMs);
}

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    element.scrollIntoView({ block: "start" });
    pulseSection(element);
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  scheduleArrivalPulse(element);
}

export function isInPageHash(href: string | null): href is `#${string}` {
  return Boolean(href && href.startsWith("#") && href.length > 1);
}
