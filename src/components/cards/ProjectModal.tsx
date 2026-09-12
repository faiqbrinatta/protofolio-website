import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react'
import { GithubIcon } from '../common/Icons'
import type { Project } from '../../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-bg-card border border-border-subtle rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-surface-container text-text-muted hover:text-text-primary hover:bg-surface-container-high transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2 font-mono text-xs text-border-accent uppercase tracking-wider">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-text-muted">{project.year}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              {project.title}
            </h3>
          </div>

          {/* Body Content */}
          <div className="mt-6 space-y-5">
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              {project.detailedDescription || project.description}
            </p>

            {/* Simulated mini preview if Kayutangan */}
            {project.previewData && (
              <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle space-y-3">
                <div className="flex items-center justify-between text-xs text-text-muted font-mono">
                  <span>URL: {project.previewData.browserUrl}</span>
                  <span className="text-border-accent">{project.previewData.badgeText}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {project.previewData.stores.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-bg-card border border-border-subtle/50 flex flex-col gap-1">
                      <span className="font-semibold text-text-primary">{s.name}</span>
                      <span className="text-text-muted">{s.category}</span>
                      <span className="text-border-accent">{s.rating}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase text-text-muted tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-border-accent" />
                <span>Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-container-low border border-border-subtle text-text-secondary font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key highlights / Features */}
            <div className="pt-2 border-t border-border-subtle">
              <h4 className="text-xs font-mono uppercase text-text-muted tracking-wider mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-border-accent shrink-0 mt-0.5" />
                  <span>Modular component architecture with strict TypeScript safety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-border-accent shrink-0 mt-0.5" />
                  <span>Responsive UI tuned for mobile, tablet, and ultra-wide displays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-border-accent shrink-0 mt-0.5" />
                  <span>High Core Web Vitals optimization and low latency runtime.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container text-text-primary hover:text-border-accent transition-colors font-sans text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-border-accent text-on-primary-container hover:brightness-110 font-sans text-sm font-semibold transition-all shadow-[0_0_12px_rgba(0,229,212,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
