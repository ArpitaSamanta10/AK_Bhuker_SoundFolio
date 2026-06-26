/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AudioProvider } from './context/AudioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientWorkSection } from './components/ClientWorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PersistentAudioPlayer } from './components/PersistentAudioPlayer';
import { Disc, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading] = useState(true);

  // Cinematic Theater Loading Overlay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll-spy active state synchronization
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'portfolio', 'services', 'client-work', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          threshold: 0.15,
          rootMargin: '-80px 0px -40% 0px' // adjust for sticky navbar offset
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, [loading]);

  if (loading) {
    return (
      <div
        id="cinematic-theatre-loader"
        className="fixed inset-0 bg-[#070707] z-999 flex flex-col items-center justify-center text-center font-mono"
      >
        {/* Glow core */}
        <div className="absolute w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <Disc size={44} className="text-brand-accent animate-spin-slow" style={{ animationDuration: '4s' }} />
            <Sparkles size={16} className="text-brand-accent absolute -top-1 -right-1 animate-bounce" />
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <span className="font-display font-bold text-xl tracking-widest text-white uppercase">
              SOUNDFOLIO
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">
              Ak Bhuker • Composer Portfolio
            </span>
          </div>

          {/* Micro loading tracker steps */}
          <div className="flex items-center gap-2 mt-4 px-3 py-1 bg-brand-card rounded border border-white/5 text-[10px] text-brand-accent font-semibold uppercase tracking-wider animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
            Tuning Acoustic Grids...
          </div>
        </div>
      </div>
    );
  }

  return (
    <AudioProvider>
      <div id="soundfolio-root-viewport" className="min-h-screen bg-brand-bg text-white relative overflow-hidden selection:bg-brand-accent selection:text-black">
        {/* Atmospheric Background Gradients for Frosted Glass Theme */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff7b00]/8 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00D4FF]/4 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-[40%] right-[-15%] w-[50%] h-[50%] bg-[#ff7b00]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[40%] left-[-15%] w-[50%] h-[50%] bg-[#00D4FF]/3 blur-[150px] rounded-full pointer-events-none z-0"></div>

        {/* Sticky Header */}
        <Navbar activeSection={activeSection} />

        {/* Cinematic Main Section Panels */}
        <main id="soundfolio-scrolling-container" className="relative z-10">
          {/* Home Segment */}
          <Hero />

          {/* About Segment */}
          <AboutSection />

          {/* Portfolio Segment */}
          <PortfolioSection />

          {/* Services Segment */}
          <ServicesSection />

          {/* Client Work Segment */}
          <ClientWorkSection />

          {/* Contact Segment */}
          <ContactSection />
        </main>

        {/* Common Cinematic Footer */}
        <Footer />

        {/* Floating Minimized Persistent Interactive Audio Bar */}
        <PersistentAudioPlayer />
      </div>
    </AudioProvider>
  );
}

