import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
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
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert.image)}
                    className="w-full h-full cursor-zoom-in focus:outline-none"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full mb-2.5 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </button>
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
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute -top-3 -right-3 sm:top-0 sm:right-0 z-10 w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center text-text-primary hover:text-border-accent hover:border-border-accent transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image */}
              <img
                src={selectedCert}
                alt="Certificate preview"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
