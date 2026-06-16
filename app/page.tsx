import { BackgroundAura } from "@/components/BackgroundAura";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { DossierSection } from "@/components/DossierSection";
import { Footer } from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SmoothScrollEnhancer } from "@/components/SmoothScrollEnhancer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <JsonLd />
      <SmoothScrollEnhancer />
      <BackgroundAura />
      <Navbar />

      <div className="relative z-10 w-full">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <DossierSection />
        <Footer />
      </div>

      <div className="fixed inset-0 pointer-events-none z-[30] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </main>
  );
}
