import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "../data/portfolioData";

export const TimelineSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[1200px] mx-auto px-6 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Column 1: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-8"
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
            <span>EDUCATION</span>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-surface-variant">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing node */}
                <span className="absolute -left-[27px] top-2 w-4 h-4 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center shadow-[0_0_8px_rgba(0,229,212,0.5)] group-hover:border-border-accent transition-colors">
                  <span className="w-2 h-2 rounded-full bg-border-accent" />
                </span>

                <div className="bg-bg-card border border-border-subtle p-6 rounded-2xl transition-all duration-200 group-hover:translate-x-1.5 group-hover:border-border-accent/40 shadow-sm">
                  <span className="font-mono text-xs text-border-accent uppercase font-medium">
                    {edu.period}
                  </span>
                  <h4 className="font-display text-lg sm:text-xl text-text-primary font-bold mt-1.5">
                    {edu.institution}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-text-secondary mt-1 font-medium">
                    {edu.degree}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-text-secondary mt-1 font-medium">
                    GPA : {edu.gpa}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-text-muted mt-2.5 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-8"
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
            <span>EXPERIENCE</span>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-surface-variant">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing node */}
                <span className="absolute -left-[27px] top-2 w-4 h-4 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center shadow-[0_0_8px_rgba(0,229,212,0.5)] group-hover:border-border-accent transition-colors">
                  <span className="w-2 h-2 rounded-full bg-border-accent" />
                </span>

                <div className="bg-bg-card border border-border-subtle p-6 rounded-2xl transition-all duration-200 group-hover:translate-x-1.5 group-hover:border-border-accent/40 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-border-accent uppercase font-medium">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-container/20 text-border-accent font-mono text-[11px] font-semibold border border-border-accent/30">
                        Current
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-lg sm:text-xl text-text-primary font-bold mt-1.5">
                    {exp.company}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-text-secondary mt-1 font-medium">
                    {exp.role}
                  </p>

                  <ul className="mt-3.5 space-y-2 font-sans text-xs sm:text-sm text-text-muted">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-border-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
