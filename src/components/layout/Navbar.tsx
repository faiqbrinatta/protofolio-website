import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "home" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certificate", href: "#certificate", id: "certificate" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-3 sm:pt-4 px-3 sm:px-4 transition-all duration-300 ${
          scrolled ? "pt-2" : ""
        }`}
      >
        <div className="h-16 w-full max-w-[1200px] bg-nav-glass backdrop-blur-md border border-border-subtle rounded-full px-4 sm:px-6 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {/* Brand / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="FZ Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg text-text-primary tracking-tight font-bold leading-none">
                Fa'iq <span className="text-border-accent"> Brinatta</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-sans text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-all py-1 duration-200 relative ${
                    isActive
                      ? "text-primary font-semibold shadow-[0_0_12px_rgba(0,229,212,0.25)] border-b border-primary"
                      : "text-on-surface-variant hover:text-on-surface hover:text-text-primary"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https:/wa.me/6285854438393"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full border border-border-accent text-border-accent hover:bg-border-accent hover:text-on-primary-container transition-all duration-200 font-sans text-xs sm:text-sm font-semibold shadow-[0_0_12px_rgba(0,229,212,0.15)] hover:shadow-[0_0_16px_rgba(0,229,212,0.35)]"
            >
              Hire Me
            </a>

            {/* Profile Avatar Circle */}
            <a
              href="#about"
              className="h-9 w-9 rounded-full border border-border-subtle p-0.5 flex items-center justify-center hover:border-border-accent transition-colors"
            >
              <img
                src="/images/foto-profil.jpeg"
                alt="Profile Avatar"
                className="w-full h-full rounded-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-text-secondary hover:text-border-accent hover:bg-surface-container transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 bg-bg-card/95 backdrop-blur-xl border border-border-subtle rounded-3xl p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-xl transition-colors ${
                    activeSection === link.id
                      ? "bg-surface-container text-border-accent font-semibold"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-border-accent text-on-primary-container text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,212,0.3)]"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
