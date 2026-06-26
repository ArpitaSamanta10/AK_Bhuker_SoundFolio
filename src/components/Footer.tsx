import React from 'react';
import { ArrowUp, Mail, Youtube, Music, Disc, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="soundfolio-main-footer" className="bg-[#050505] border-t border-white/5 pt-16 pb-28 md:pb-16 relative">
      {/* Back to Top button */}
      <div className="absolute top-0 right-12 transform -translate-y-1/2">
        <button
          id="footer-back-to-top-btn"
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-brand-card hover:bg-brand-accent text-white hover:text-black border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Branding Column */}
        <div id="footer-branding-column" className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-brand-accent rounded text-black font-display font-bold text-xs">
              S
            </div>
            <span className="font-display font-bold tracking-widest text-white text-lg">SOUNDFOLIO</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Professional high-fidelity music composition, film scoring, and arrangement designed to bring your cinematic visions to life.
          </p>
          {/* Social Icons */}
          <div id="footer-social-links" className="flex items-center gap-4 mt-2">
            <a
              id="footer-social-youtube"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-brand-card hover:bg-brand-accent hover:text-black flex items-center justify-center text-gray-300 transition-all duration-300"
              aria-label="Ak Bhuker YouTube"
            >
              <Youtube size={16} />
            </a>
            <a
              id="footer-social-soundcloud"
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-brand-card hover:bg-brand-accent hover:text-black flex items-center justify-center text-gray-300 transition-all duration-300"
              aria-label="Ak Bhuker SoundCloud"
            >
              <Music size={16} />
            </a>
            <a
              id="footer-social-spotify"
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-brand-card hover:bg-brand-accent hover:text-black flex items-center justify-center text-gray-300 transition-all duration-300"
              aria-label="Ak Bhuker Spotify"
            >
              <Disc size={16} />
            </a>
            <a
              id="footer-social-mail"
              href="mailto:ak.bhuker.music@gmail.com"
              className="w-9 h-9 rounded-full bg-brand-card hover:bg-brand-accent hover:text-black flex items-center justify-center text-gray-300 transition-all duration-300"
              aria-label="Email Ak Bhuker"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div id="footer-quick-links-column" className="flex flex-col gap-4">
          <h4 className="font-display font-semibold tracking-wider text-sm uppercase text-white border-l-2 border-brand-accent pl-3">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:text-brand-accent transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand-accent transition-colors duration-200">
                About Composer
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-brand-accent transition-colors duration-200">
                Music Portfolio
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Premium Services
              </a>
            </li>
            <li>
              <a href="#client-work" className="hover:text-brand-accent transition-colors duration-200">
                Client Showcase
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-accent transition-colors duration-200">
                Contact & Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Services List Column */}
        <div id="footer-services-column" className="flex flex-col gap-4">
          <h4 className="font-display font-semibold tracking-wider text-sm uppercase text-white border-l-2 border-brand-accent pl-3">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Full-Length Film Scoring
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Commercial Jingles & Ads
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Orchestral Arrangement
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Stereo Mixing & Engineering
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent transition-colors duration-200">
                Interactive Game Audio
              </a>
            </li>
          </ul>
        </div>

        {/* Business Email & Availability Column */}
        <div id="footer-contact-info-column" className="flex flex-col gap-4">
          <h4 className="font-display font-semibold tracking-wider text-sm uppercase text-white border-l-2 border-brand-accent pl-3">
            Composer Office
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Available for worldwide remote scoring projects, theatrical commissions, and high-end mixing consultations.
          </p>
          <div className="flex flex-col gap-1.5 mt-1">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Business Inquiries</span>
            <a
              id="footer-email-link"
              href="mailto:ak.bhuker.music@gmail.com"
              className="text-white hover:text-brand-accent text-sm font-mono font-medium flex items-center gap-2 group transition-colors"
            >
              <Mail size={14} className="text-brand-accent group-hover:scale-110 transition-transform" />
              ak.bhuker.music@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono">
              Accepting New Projects
            </span>
          </div>
        </div>
      </div>

      {/* Underline copyright banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-mono">
        <span id="footer-copyright-banner">
          &copy; {currentYear} SoundFolio. Developed for Ak Bhuker. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <ShieldAlert size={12} className="text-brand-accent" />
            Terms of Use
          </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};
