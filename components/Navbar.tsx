"use client";

import { Terminal, Github, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Entrance } from "@/components/Reveal";
import { site } from "@/data/site";

const navItems = [
  { name: "Identity", href: "#id" },
  { name: "Archives", href: "#projects" },
  { name: "Timeline", href: "#experience" },
  { name: "Nexus", href: "#nexus" },
  { name: "Dossier", href: "#dossier" },
  { name: "Signal", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (mq.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onResize);
    return () => mq.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-40 w-[94%] sm:w-[90%] max-w-4xl" aria-label="Main navigation">
      <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-2xl flex items-center justify-between gap-3">
        <a href="#id" className="flex items-center gap-2 font-mono font-bold text-nova-cyan shrink-0">
          <Terminal size={20} aria-hidden />
          <span className="tracking-tighter text-sm sm:text-base">FREYZA_DEV</span>
        </a>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, idx) => (
            <Entrance key={item.name} delay={idx * 0.04}>
              <a
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-nova-cyan transition-colors py-2 block"
              >
                {item.name}
              </a>
            </Entrance>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 border-l border-white/10 pl-4 ml-1">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center justify-center tap-target p-2"
          >
            <Github size={18} className="text-white/50 hover:text-white" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Send email" className="inline-flex items-center justify-center tap-target p-2">
            <Mail size={18} className="text-white/50 hover:text-white" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex lg:hidden items-center justify-center min-h-11 p-2 text-white"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-0 bg-black/60 -z-10"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <Entrance className="lg:hidden absolute top-full mt-2 w-full glass rounded-2xl p-3 sm:p-4 flex flex-col gap-1 max-h-[min(70vh,28rem)] overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="inline-flex items-center justify-center tap-target text-base font-medium text-white/80 hover:text-nova-cyan hover:bg-white/5 rounded-xl transition-colors px-4"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-2 pt-3 mt-2 border-t border-white/10">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center tap-target flex-1 gap-2 glass rounded-xl text-sm font-medium"
                onClick={closeMenu}
              >
                <Github size={18} aria-hidden /> GitHub
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center tap-target flex-1 gap-2 glass rounded-xl text-sm font-medium"
                onClick={closeMenu}
              >
                <Mail size={18} aria-hidden /> Email
              </a>
            </div>
          </Entrance>
        </>
      )}
    </nav>
  );
}
