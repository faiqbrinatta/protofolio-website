import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Terminal,
  Share2,
  Camera,
  Mail,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-300 mx-auto px-6 pt-28 pb-16 lg:py-28 flex flex-col justify-center min-h-[90vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: 7 cols (58%) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Label Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-low border border-border-subtle shadow-[0_0_12px_rgba(0,229,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-border-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-border-accent" />
            </span>
            <span className="font-mono text-xs text-border-accent uppercase tracking-widest font-medium">
              {PERSONAL_INFO.tagline}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight font-extrabold uppercase leading-[1.1]">
            Fa'iq Zhafran
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary-fixed to-primary-container">
              Naufal Brinatta.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-lg sm:text-xl text-text-secondary font-medium">
            {PERSONAL_INFO.role}
          </p>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
            {PERSONAL_INFO.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-border-accent border border-border-accent shadow-[0_0_16px_rgba(0,229,212,0.2)] hover:bg-border-accent hover:text-on-primary-container transition-all duration-200 font-sans text-sm font-semibold group"
            >
              <span>[ View Projects ]</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://drive.google.com/file/d/1xtI3NA1LrTcmbgSJdcEvy4uvY9W040mI/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-surface-container text-text-primary hover:text-border-accent hover:bg-surface-container-high transition-all duration-200 font-sans text-sm font-semibold border border-border-subtle"
            >
              <span>[ View CV ]</span>
              <Download className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-text-muted">
            <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
              Connect:
            </span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs sm:text-sm hover:text-border-accent hover:-translate-y-0.5 transition-all"
            >
              <Terminal className="w-4 h-4 text-border-accent" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs sm:text-sm hover:text-border-accent hover:-translate-y-0.5 transition-all"
            >
              <Share2 className="w-4 h-4 text-primary" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-sans text-xs sm:text-sm hover:text-border-accent hover:-translate-y-0.5 transition-all"
            >
              <Camera className="w-4 h-4 text-secondary" />
              <span>Instagram</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              className="flex items-center gap-1.5 font-sans text-xs sm:text-sm hover:text-border-accent hover:-translate-y-0.5 transition-all"
            >
              <Mail className="w-4 h-4 text-tertiary-fixed-dim" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: 5 cols (42%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Ambient decorative backdrop glow */}
          <div className="absolute -inset-4 bg-linear-to-tr from-primary-container/20 to-transparent blur-3xl rounded-3xl -z-10 pointer-events-none" />

          {/* Terminal Card */}
          <div className="relative w-full max-w-md bg-bg-card border border-border-subtle rounded-3xl p-5 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 px-1 text-text-muted border-b border-border-subtle mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-text-secondary">
                <Terminal className="w-3.5 h-3.5 text-border-accent" />
                <span>architect_node.ts</span>
              </div>
              <div className="w-6" />
            </div>

            {/* Developer Photo Frame */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface-container-low group border border-border-subtle/70">
              <img
                src="/images/foto-profil.jpeg"
                alt="Fa'iq Zhafran Naufal Brinatta"
                className="w-full h-full object-cover object-center contrast-110 transition-all duration-500 group-hover:scale-105"
              />
              {/* Subtle cyan scanline vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-bg-card via-transparent to-transparent opacity-70 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Code Snippet Tag Overlay */}
            <div className="mt-4 p-3.5 rounded-2xl bg-surface-container-lowest border border-border-subtle font-mono text-xs flex items-center justify-between">
              <div className="text-text-secondary truncate">
                <span className="text-border-accent">const</span> dev = &#123;
                status:{" "}
                <span className="text-tertiary-fixed-dim">"open to work"</span>,
                role:{" "}
                <span className="text-primary-fixed">
                  "Fullstack web Developer"
                </span>{" "}
                &#125;;
              </div>
              <div className="flex items-center gap-1.5 pl-2 text-border-accent shrink-0">
                <span className="w-2 h-2 rounded-full bg-border-accent animate-pulse" />
                <span className="font-bold tracking-wider text-[11px]">
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
