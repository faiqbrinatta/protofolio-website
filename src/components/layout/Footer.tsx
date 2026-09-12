import React from 'react'
import { PERSONAL_INFO } from '../../data/portfolioData'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-bg-secondary border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-subtle">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-display text-lg sm:text-xl text-text-primary font-bold tracking-tight">
              {PERSONAL_INFO.fullName}
            </span>
            <span className="font-sans text-sm text-text-muted">
              Frontend Developer & Computational Architect
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-sans text-sm text-on-surface-variant">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Fa'iq Zhafran. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-border-accent animate-pulse" />
            <span className="font-mono text-text-secondary uppercase tracking-wider text-[11px]">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
