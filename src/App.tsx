import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./section/HeroSection";
import { AboutSection } from "./section/AboutSection";
import { TechStackSection } from "./section/TechStackSection";
import { TimelineSection } from "./section/TimelineSection";
import { ProjectsSection } from "./section/ProjectsSection";
import { SkillsSection } from "./section/SkillsSection";
import { CertificationsSection } from "./section/CertificationsSection";
import { ContactSection } from "./section/ContactSection";
import { ProjectModal } from "./components/cards/ProjectModal";
import type { Project } from "./types/portfolio";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "experience",
      "projects",
      "certificate",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col selection:bg-border-accent/30 selection:text-primary-fixed overflow-x-hidden">
      {/* Subtle ambient lighting effect in the background */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary-container/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Floating Pill Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <TimelineSection />
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
