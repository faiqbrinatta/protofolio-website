import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Wrench,
};

export const SkillsSection: React.FC = () => {
  return (
    <section className="w-full max-w-300 mx-auto px-6 py-16 lg:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
          <span>SKILLS</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold tracking-tight">
          Engineered competencies & workflows
        </h2>

        <p className="font-sans text-sm sm:text-base text-text-muted max-w-lg">
          Structured strictly by technical domain without arbitrary percentage
          sliders.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => {
          const IconComponent = ICON_MAP[category.icon] || Monitor;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-bg-card border border-border-subtle rounded-3xl p-6 sm:p-7 flex flex-col space-y-6 shadow-sm hover:border-border-accent/40 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-surface-container border border-border-subtle">
                  <IconComponent
                    className={`w-6 h-6 ${category.accentColor}`}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-text-muted">
                    {category.subtitle}
                  </span>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-surface-container-low border border-border-subtle text-text-primary font-sans text-xs sm:text-sm hover:text-border-accent hover:border-border-accent/50 hover:bg-surface-container transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
