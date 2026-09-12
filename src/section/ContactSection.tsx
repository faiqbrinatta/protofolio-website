import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Copy, Check } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      })
    } else {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  return (
    <section
      id="contact"
      className="w-full max-w-[1200px] mx-auto px-6 py-16 lg:py-24 mb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-b from-bg-card to-surface-container-low border border-border-subtle rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Glow ambient behind CTA */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container border border-border-subtle font-mono text-xs text-border-accent uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-border-accent animate-pulse" />
            <span>GET IN TOUCH</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary font-extrabold uppercase tracking-tight leading-tight">
            LET'S BUILD SOMETHING TOGETHER.
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed">
            Have a project in mind, collaboration idea, or frontend developer job opportunity? Feel free to reach out and let's craft something remarkable.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.socials.email}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-border-accent text-on-primary-container hover:brightness-110 font-sans text-sm font-semibold shadow-[0_0_20px_rgba(0,229,212,0.3)] transition-all duration-200"
            >
              <span>[ Send Email / Contact Me ]</span>
              <Send className="ml-2 w-4 h-4" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-surface-container hover:text-border-accent hover:bg-surface-container-high text-text-primary font-sans text-sm font-semibold border border-border-subtle transition-all duration-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="mr-2 w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="mr-2 w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Animated Copied Feedback */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="font-mono text-xs text-border-accent flex items-center gap-1.5"
              >
                <span>✓ Email copied to clipboard:</span>
                <span className="font-semibold">{PERSONAL_INFO.email}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Icons Row */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-text-muted">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-border-accent transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <span>GitHub</span>
            </a>
            <span className="text-surface-variant">•</span>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-border-accent transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <span>LinkedIn</span>
            </a>
            <span className="text-surface-variant">•</span>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-border-accent transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
