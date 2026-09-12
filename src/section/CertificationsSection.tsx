import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data/portfolioData";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certificate"
      className="w-full max-w-300 mx-auto px-6 py-16 lg:py-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-border-accent" />
          <span>CERTIFICATIONS</span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-bold tracking-tight">
          Recognized Credentials & Certifications
        </h2>

        <p className="font-sans text-sm sm:text-base text-text-muted">
          Certifications and learning experiences that support my technical
          foundations.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATIONS.map((cert, idx) => {
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-bg-card border border-border-subtle rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-md hover:border-border-accent/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Preview Box */}
                <div className="aspect-4/3 w-full rounded-2xl bg-surface-container-low border border-border-subtle/80 flex flex-col items-center justify-center p-4 text-center group-hover:border-border-accent/30 transition-colors">
                  <img
                    src={cert.image}
                    alt="certificateIcon"
                    className="w-full h-full mb-2.5 object-contain taransition-transform group-hover:scale-110"
                  />
                </div>

                <div>
                  <span className="font-mono text-xs text-border-accent font-medium">
                    {cert.issuer} • {cert.year}
                  </span>
                  <h4 className="font-display text-base sm:text-lg text-text-primary font-bold mt-1 group-hover:text-border-accent transition-colors">
                    {cert.title}
                  </h4>
                  <p className="font-sans text-xs text-text-muted mt-1.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
