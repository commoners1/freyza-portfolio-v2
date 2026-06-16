"use client";

import { Github, Linkedin, ArrowUpRight, Download, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const locationLine = `${site.location.city}, ${site.location.region}, ${site.location.country}`;

  return (
    <footer id="contact" className="section-padding border-t border-white/5 relative overflow-hidden scroll-mt-28 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 mb-12 sm:mb-20">
          <div>
            <h2 className="text-sm font-mono text-nova-cyan uppercase tracking-[0.3em] mb-4">Transmission</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">Ready to sync?</h3>
            <p className="text-base sm:text-xl text-white/50 leading-relaxed mb-8 sm:mb-10">
              Open to full-stack roles, technical leadership, and AI-powered product collaborations.
              Drop a signal to start the protocol.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-start sm:items-center gap-3 sm:gap-4 text-xl sm:text-2xl lg:text-3xl font-medium hover:text-nova-cyan transition-colors border-b border-white/20 pb-2 break-all"
            >
              <span>{site.email}</span>
              <ArrowUpRight size={28} className="shrink-0 mt-1 sm:mt-0" aria-hidden />
            </a>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center justify-center tap-target gap-2 glass rounded-lg text-sm font-medium hover:bg-white/10 active:scale-[0.98] transition-colors"
              >
                <Download size={16} aria-hidden /> Download Resume
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center tap-target gap-2 glass rounded-lg text-sm font-medium hover:bg-white/10 active:scale-[0.98] transition-colors"
              >
                <Phone size={16} aria-hidden /> {site.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-label-muted mb-4 sm:mb-6 underline underline-offset-4 decoration-nova-cyan/30">
                Connect
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center tap-target gap-2 text-white/70 hover:text-white transition-colors group -ml-2"
                  >
                    <Github size={18} className="group-hover:text-nova-cyan transition-colors" aria-hidden /> GitHub
                  </a>
                </li>
                {site.social.linkedin && (
                  <li>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center tap-target gap-2 text-white/70 hover:text-white transition-colors group -ml-2"
                    >
                      <Linkedin size={18} className="group-hover:text-nova-cyan transition-colors" aria-hidden /> LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-label-muted mb-4 sm:mb-6 underline underline-offset-4 decoration-nova-purple/30">
                Location
              </div>
              <p className="text-white/70">{site.location.city}</p>
              <p className="text-white/70">{site.location.region}, {site.location.country}</p>
              <p className="text-label-muted text-xs font-mono mt-4 uppercase tracking-widest">FREYZA_NODE</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-white/5 text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/55 text-center sm:text-left">
          <p>© {new Date().getFullYear()} FREYZA_DEV // {locationLine}</p>
          <a href={site.resumePath} download className="inline-flex items-center justify-center tap-target hover:text-white transition-colors">
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
