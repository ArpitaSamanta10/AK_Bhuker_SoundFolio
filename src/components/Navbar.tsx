import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentTrack, isPlaying, togglePlay } = useAudio();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Client Work', href: '#client-work' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          id="nav-logo-link"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-brand-accent rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <span className="font-display font-bold text-black text-lg">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-brand-accent transition-colors duration-300">
              AK BHUKER
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-gray-400">
              Cinematic Composer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div id="desktop-menu-links" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={`font-display text-sm uppercase tracking-widest transition-all duration-300 relative py-1 hover:text-brand-accent ${
                activeSection === link.href.substring(1)
                  ? 'text-brand-accent font-medium'
                  : 'text-gray-300'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent" />
              )}
            </a>
          ))}
        </div>

        {/* Live Audio Indicator Control in Navbar */}
        <div className="hidden sm:flex items-center gap-4">
          {currentTrack && (
            <button
              id="navbar-audio-toggle-btn"
              onClick={togglePlay}
              className="flex items-center gap-2 py-1.5 px-3 bg-brand-card/80 border border-white/5 rounded-full hover:border-brand-accent/30 hover:bg-black/40 transition-all duration-300 text-xs text-gray-300 hover:text-brand-accent"
              title={isPlaying ? "Pause Player" : "Resume Player"}
            >
              <div className="flex items-center gap-1 h-3 w-4">
                <span className={`block w-[2px] bg-brand-accent rounded-full ${isPlaying ? 'animate-pulse h-3' : 'h-1'}`} />
                <span className={`block w-[2px] bg-brand-accent rounded-full delay-100 ${isPlaying ? 'animate-pulse h-2' : 'h-1.5'}`} />
                <span className={`block w-[2px] bg-brand-accent rounded-full delay-200 ${isPlaying ? 'animate-pulse h-3.5' : 'h-1'}`} />
              </div>
              <span className="font-mono max-w-[110px] truncate text-[11px]">
                {isPlaying ? 'Now Playing' : 'Paused'}
              </span>
            </button>
          )}

          <a
            id="nav-cta-hire-button"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="py-2.5 px-6 rounded-full border border-brand-accent text-brand-accent font-display text-xs uppercase tracking-widest font-semibold hover:bg-brand-accent hover:text-black hover:shadow-[0_0_15px_rgba(255,123,0,0.3)] transition-all duration-300"
          >
            Hire Ak
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-4">
          {currentTrack && (
            <button
              id="mobile-nav-audio-indicator"
              onClick={togglePlay}
              className="p-2 text-brand-accent bg-brand-card/50 border border-white/5 rounded-full"
            >
              {isPlaying ? <Volume2 size={16} className="animate-pulse" /> : <VolumeX size={16} />}
            </button>
          )}
          <button
            id="mobile-hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:text-brand-accent transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-0 top-[72px] bg-brand-bg/95 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col justify-center items-center lg:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div id="mobile-menu-links-container" className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`font-display text-xl uppercase tracking-widest hover:text-brand-accent transition-colors duration-300 ${
                activeSection === link.href.substring(1) ? 'text-brand-accent font-medium' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            id="mobile-nav-cta-hire-button"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="mt-4 py-3 px-8 rounded-full bg-brand-accent text-black font-display text-sm uppercase tracking-widest font-bold shadow-[0_4px_15px_rgba(255,123,0,0.3)] transition-all duration-300 hover:scale-105"
          >
            Hire Ak Bhuker
          </a>
        </div>
      </div>
    </nav>
  );
};
