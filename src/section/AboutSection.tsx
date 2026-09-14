import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-300 mx-auto px-6 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Profile Quick Info Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="bg-bg-card border border-border-subtle rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center relative shadow-xl">
            {/* Avatar */}
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden mb-6 shadow-[0_0_24px_rgba(0,229,212,0.2)] border border-border-accent/40">
              <img
                src="/images/foto-profil.jpeg"
                alt={PERSONAL_INFO.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-display text-xl sm:text-2xl text-text-primary font-bold">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="font-sans text-sm text-border-accent mt-1.5 font-medium">
              Fullstack Developer
            </p>

            <div className="w-full my-6 bg-surface-variant h-px" />

            {/* Quick Details */}
            <div className="w-full space-y-3.5 text-left font-sans text-sm">
              <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
                <span className="text-text-muted flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-text-secondary" /> Location
                </span>
                <span className="text-text-primary font-medium">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-border-subtle/40">
                <span className="text-text-muted flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-text-secondary" />{" "}
                  Degree
                </span>
                <span className="text-text-primary font-medium">
                  {PERSONAL_INFO.degree}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-text-muted flex items-center gap-2">
                  <Mail className="w-4 h-4 text-text-secondary" /> Email
                </span>
                <span className="text-text-primary font-medium truncate max-w-42.5">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://drive.google.com/file/d/1xtI3NA1LrTcmbgSJdcEvy4uvY9W040mI/view?usp=sharing"
              target="_blank"
              className="mt-6 w-full py-3 rounded-xl bg-surface-container hover:bg-border-accent hover:text-on-primary-container text-text-primary font-sans text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-border-subtle shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>View CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Narrative (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold tracking-tight">
            {PERSONAL_INFO.headline}
          </h2>

          <div className="space-y-4 font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
            {PERSONAL_INFO.aboutNarrative.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Metric Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {PERSONAL_INFO.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-bg-card border border-border-subtle shadow-sm hover:border-border-accent/40 transition-colors"
              >
                <div
                  className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold ${metric.highlight}`}
                >
                  {metric.value}
                </div>
                <div className="font-sans text-xs sm:text-sm text-text-muted mt-1.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
