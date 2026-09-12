import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  RotateCw,
  Smartphone,
  Award,
  CheckCircle2,
  BarChart3,
  Building2,
} from "lucide-react";
import { GithubIcon } from "../components/common/Icons";
import {
  FEATURED_PROJECT,
  OTHER_PROJECTS,
  MOBILE_PROJECT,
} from "../data/portfolioData";
import type { Project } from "../types/portfolio";
import kayutanganImage from "../assets/kayutangan.png";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const PROJECT_ICONS: Record<string, React.ElementType> = {
  Award,
  CheckCircle2,
  BarChart3,
  Building2,
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section
      id="projects"
      className="w-full max-w-300 mx-auto px-6 py-16 lg:py-24"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
          <span>SELECTED PROJECTS</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold tracking-tight">
          Built with scalable architecture and modern web standards.
        </h2>

        <p className="font-sans text-sm sm:text-base text-text-muted">
          A collection of production-ready applications, commercial portals, and
          interactive digital products.
        </p>
      </motion.div>

      {/* FEATURED PROJECT: UMKM KAYUTANGAN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-bg-card border border-border-subtle rounded-3xl p-6 lg:p-10 mb-10 shadow-xl relative group overflow-hidden"
      >
        {/* Ambient Corner Glow */}
        <div className="absolute -right-24 -top-24 w-80 h-80 bg-primary-container/10 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-border-accent text-on-primary-container font-mono text-xs font-bold tracking-wide uppercase shadow-[0_0_12px_rgba(0,229,212,0.3)]">
                FEATURED PROJECT
              </span>
              <span className="font-mono text-xs text-text-muted">
                {FEATURED_PROJECT.category}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold">
              {FEATURED_PROJECT.title}
            </h3>

            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {FEATURED_PROJECT.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-surface-container-low border border-border-subtle text-border-accent font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectProject(FEATURED_PROJECT)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-border-accent text-on-primary-container hover:brightness-110 transition-all font-sans text-xs sm:text-sm font-semibold shadow-[0_0_14px_rgba(0,229,212,0.25)] cursor-pointer"
              >
                <span>[ View Details ]</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-surface-container hover:text-border-accent text-text-primary transition-all font-sans text-xs sm:text-sm font-semibold border border-border-subtle"
              >
                <span>[ GitHub ]</span>
                <GithubIcon className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Simulated Browser Mockup Preview (6 cols) */}
          <div className="lg:col-span-6">
            <div
              onClick={() => onSelectProject(FEATURED_PROJECT)}
              className="bg-surface-container-lowest border border-border-subtle rounded-2xl overflow-hidden shadow-2xl cursor-pointer group/browser hover:border-border-accent/60 transition-all duration-300"
            >
              {/* Browser Window Header */}
              <div className="h-10 bg-surface-container-low px-4 flex items-center justify-between text-text-muted border-b border-border-subtle">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant group-hover/browser:bg-rose-500/80 transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant group-hover/browser:bg-amber-500/80 transition-colors" />
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant group-hover/browser:bg-emerald-500/80 transition-colors" />
                </div>
                <div className="px-3.5 py-0.5 rounded-md bg-surface-container-high font-mono text-[11px] text-text-secondary truncate max-w-55">
                  umkm-kayutangan
                </div>
                <RotateCw className="w-3.5 h-3.5 text-text-muted group-hover/browser:rotate-180 transition-transform duration-500" />
              </div>
              <div className="relative aspect-video overflow-hidden bg-surface-container">
                <img
                  src={kayutanganImage}
                  alt="Kayutangan Heritage"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/browser:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* OTHER PROJECTS (2-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OTHER_PROJECTS.map((project, idx) => {
          const IconComponent = PROJECT_ICONS[project.iconName] || Award;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-bg-card border border-border-subtle rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-md group hover:border-border-accent/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Visual Banner Container */}
                {/* Visual Banner Container */}
                <div className="aspect-video w-full rounded-2xl bg-surface-container-low border border-border-subtle/80 overflow-hidden relative group-hover:border-border-accent/30 transition-colors">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Project title */}
                      <div className="absolute inset-x-0 bottom-0 p-4 z-20">
                        <div className="flex items-center gap-2">
                          <IconComponent
                            className={`w-5 h-5 ${
                              project.color || "text-border-accent"
                            }`}
                          />

                          <span className="font-display text-base sm:text-lg font-bold text-white">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4 z-20 space-y-2">
                      <IconComponent
                        className={`w-10 h-10 ${
                          project.color || "text-border-accent"
                        } transition-transform group-hover:scale-110`}
                      />

                      <span className="font-display text-base sm:text-lg font-bold text-text-primary">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-border-accent font-medium">
                    {project.subtitle}
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    {project.year}
                  </span>
                </div>

                <h4 className="font-display text-lg sm:text-xl text-text-primary font-bold group-hover:text-border-accent transition-colors">
                  {project.title}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle/50 space-y-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-surface-container-low border border-border-subtle text-text-muted font-mono text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Action */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-sans text-xs sm:text-sm text-border-accent hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-border-accent transition-colors" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Extra Mobile App Project Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 bg-bg-card border border-border-subtle rounded-3xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md hover:border-border-accent/40 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-surface-container border border-border-subtle flex items-center justify-center text-border-accent shrink-0 shadow-sm">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-display text-base sm:text-lg text-text-primary font-bold">
                {MOBILE_PROJECT.title}
              </h4>
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low border border-border-subtle text-border-accent font-mono text-[11px]">
                {MOBILE_PROJECT.category}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-text-muted mt-1">
              {MOBILE_PROJECT.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
          <span className="font-mono text-xs text-text-secondary px-3.5 py-1.5 rounded-full bg-surface-container border border-border-subtle">
            {MOBILE_PROJECT.tech}
          </span>
          <a
            href={MOBILE_PROJECT.url}
            className="p-2.5 rounded-xl bg-surface-container hover:text-border-accent hover:bg-surface-container-high text-text-primary transition-colors border border-border-subtle"
            aria-label="View Mobile Project"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
