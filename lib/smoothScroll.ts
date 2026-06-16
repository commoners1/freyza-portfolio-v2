let cachedScrollPadding: number | null = null;

function unlockNavMenuScrollLock() {
  const body = document.body;
  if (!body.classList.contains("nav-menu-open")) return;

  const scrollY = Math.abs(Number.parseInt(body.style.top || "0", 10)) || window.scrollY;
  body.classList.remove("nav-menu-open");
  body.style.top = "";
  window.scrollTo(0, scrollY);
}

function getScrollPaddingTop() {
  if (cachedScrollPadding !== null) return cachedScrollPadding;
  cachedScrollPadding =
    Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 104;
  return cachedScrollPadding;
}

function pulseSection(element: HTMLElement) {
  element.classList.remove("section-arrived");
  requestAnimationFrame(() => {
    element.classList.add("section-arrived");
    window.setTimeout(() => element.classList.remove("section-arrived"), 480);
  });
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
    globalThis.setTimeout(fire, 720);
    return;
  }

  globalThis.setTimeout(fire, 420);
}

export function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  unlockNavMenuScrollLock();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - getScrollPaddingTop(),
  );

  window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });

  if (reduceMotion) {
    pulseSection(element);
    return;
  }

  scheduleArrivalPulse(element);
}

export function isInPageHash(href: string | null): href is `#${string}` {
  return Boolean(href && href.startsWith("#") && href.length > 1);
}
