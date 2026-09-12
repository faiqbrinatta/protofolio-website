import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  PanelTop,
  FileCode2,
  Palette,
  Server,
  Database,
  GitBranch,
  Webhook,
} from "lucide-react";
import { GithubIcon, FigmaIcon } from "../components/common/Icons";
import { TECH_STACK } from "../data/portfolioData";

const ICON_MAP: Record<string, React.ElementType> = {
  Atom,
  PanelTop,
  FileCode2,
  Palette,
  Server,
  Database,
  GitBranch,
  Github: GithubIcon,
  Figma: FigmaIcon,
  Webhook,
};

const COLOR_MAP: Record<string, string> = {
  React: "text-border-accent",
  "Next.js": "text-primary",
  TypeScript: "text-secondary",
  "Tailwind CSS": "text-border-accent",
  Laravel: "text-rose-400",
  MySQL: "text-amber-300",
  Git: "text-primary-fixed",
  GitHub: "text-text-primary",
  Figma: "text-purple-300",
  "REST APIs": "text-primary-fixed-dim",
};

export const TechStackSection: React.FC = () => {
  return (
    <section className="w-full max-w-300 mx-auto px-6 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
          <span>TECH STACK</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold tracking-tight">
          Technologies I Work With
        </h2>

        <p className="font-sans text-sm sm:text-base text-text-muted max-w-lg">
          A curated set of tools and frameworks I use to develop robust,
          user-friendly digital products from end to end.
        </p>
      </motion.div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {TECH_STACK.map((tech, index) => {
          const IconComponent = ICON_MAP[tech.icon] || Atom;
          const iconColor = COLOR_MAP[tech.name] || "text-border-accent";

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="h-[105px] flex flex-col items-center justify-center p-4 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-accent/50 group shadow-sm hover:shadow-[0_0_20px_rgba(0,229,212,0.2)] transition-all cursor-default"
            >
              <IconComponent
                className={`w-7 h-7 ${iconColor} group-hover:scale-110 transition-transform duration-200`}
              />
              <span className="font-sans text-xs sm:text-sm font-medium text-text-primary mt-2 group-hover:text-border-accent transition-colors">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
