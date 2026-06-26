import React, { useRef, useState } from 'react';
import { BIOGRAPHY } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Calendar, Award, Music, Compass, Star, Play, Pause, ChevronLeft, ChevronRight, Disc, Sparkles } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { motion } from 'motion/react';

// Static assets for the background ambient drifting animation
const particles = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  top: `${10 + Math.sin(i) * 40 + 40}%`,
  left: `${5 + Math.cos(i) * 45 + 45}%`,
  size: (i % 3) * 1.5 + 2,
  duration: 12 + (i % 5) * 4,
  delay: (i % 4) * 2,
}));

const notes = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  char: ['♩', '♪', '♫', '♬', '𝄞', '𝄢'][i % 6],
  top: `${15 + (i * 10) % 70}%`,
  left: `${10 + (i * 12) % 80}%`,
  size: 16 + (i % 4) * 4,
  duration: 15 + (i % 3) * 6,
  delay: (i % 3) * 3,
}));

export const AboutSection: React.FC = () => {
  const { name, tagline, subTagline, aboutText1, aboutText2, influences, stats, timeline } = BIOGRAPHY;
  const scrollRef = useRef<HTMLDivElement>(null);
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 404; // width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const playMilestone = (step: any) => {
    const isCurrentActive = currentTrack?.id === `milestone-${step.year}`;
    if (isCurrentActive) {
      togglePlay();
    } else {
      const track: any = {
        id: `milestone-${step.year}`,
        title: step.title,
        category: 'Film',
        duration: '3:00',
        description: `${step.agency} — ${step.phase}`,
        audioUrl: step.audioUrl,
        coverUrl: step.coverUrl,
        year: step.year,
      };
      playTrack(track);
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-brand-bg border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          id="about-section"
          number="01"
          title="About the Composer"
          subtitle="A deeper look into the creative drive, acoustic philosophy, and classical-electronic heritage of Ak Bhuker."
        />

        {/* Biography Row */}
        <div id="about-bio-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Visual Canvas (Left / Col-5) */}
          <div id="about-photo-wrapper" className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-accent/20 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card aspect-[4/5] shadow-2xl">
              <img
                id="about-composer-portrait"
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
                alt="Ak Bhuker in Recording Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Overlay signature text */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-brand-accent uppercase tracking-widest font-bold">AK BHUKER</span>
                <h4 className="font-display font-bold text-xl text-white mt-1 uppercase">Sculpting Waves of Tension</h4>
                <p className="text-white/60 text-xs mt-1.5 leading-relaxed">
                  "Every scene has a resting heart rate. My responsibility is to accelerate or suspend it."
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Content (Right / Col-7) */}
          <div id="about-narrative-block" className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-brand-accent font-bold">The Sonic Philosopher</span>
              <h3 id="about-title-tagline" className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mt-1 mb-4">
                {tagline}
              </h3>
              <p className="font-display italic text-gray-300 text-base leading-relaxed border-l-2 border-brand-accent pl-4 mb-4">
                "{subTagline}"
              </p>
            </div>

            <div id="about-narrative-paragraphs" className="flex flex-col gap-6 text-white/70 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl">
              <p id="about-para-1" className="border-l-2 border-brand-accent/30 pl-4">{aboutText1}</p>
              <p id="about-para-2" className="border-l-2 border-brand-accent/30 pl-4">{aboutText2}</p>
            </div>

            {/* Influences Panel */}
            <div id="about-influences-wrapper" className="mt-4">
              <h4 className="font-display font-bold text-sm uppercase text-white tracking-widest mb-3 flex items-center gap-2">
                <Compass size={16} className="text-brand-accent" />
                Artistic Influences & Mentors
              </h4>
              <div id="about-influences-list" className="flex flex-wrap gap-2">
                {influences.map((influ, index) => (
                  <span
                    key={influ}
                    id={`influence-badge-${index}`}
                    className="py-1.5 px-4 rounded-full glass-card border border-white/10 hover:border-brand-accent/30 text-white/80 hover:text-white transition-all text-xs font-mono"
                  >
                    {influ}
                  </span>
                ))}
              </div>
            </div>

            {/* Statistics Metrics Grid */}
            <div id="about-stats-grid" className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  id={`stat-panel-${index}`}
                  className="p-4 rounded-2xl glass-card border border-white/10 flex flex-col items-center justify-center text-center shadow-lg hover:border-brand-accent/30 transition-all duration-300"
                >
                  <span className="font-display font-black text-2xl sm:text-3xl text-brand-accent mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 leading-tight font-bold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Milestone Timeline */}
        <div id="about-career-timeline-container" className="mt-32 relative">
          
          {/* Background cinematic radial glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

          {/* Drifting Gold Particles & Floating Notes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-brand-accent/30"
                style={{
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 20, -20, 0],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {notes.map((n) => (
              <motion.span
                key={n.id}
                className="absolute font-sans text-brand-accent/15"
                style={{
                  top: n.top,
                  left: n.left,
                  fontSize: n.size,
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, 25, -25, 0],
                  rotate: [0, 15, -15, 0],
                  opacity: [0.03, 0.2, 0.03],
                }}
                transition={{
                  duration: n.duration,
                  delay: n.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {n.char}
              </motion.span>
            ))}
          </div>

          {/* Section Divider with Orchestra-inspired graphics */}
          <div className="flex flex-col items-center mb-16 relative z-10">
            <div className="flex items-center gap-4 opacity-40">
              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-accent/40 to-brand-accent" />
              <div className="flex gap-2 items-center relative">
                <span className="text-brand-accent text-xs tracking-[0.3em] font-mono font-bold">DISCOGRAPHY</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping absolute -top-1 left-1/2 -translate-x-1/2" />
              </div>
              <div className="h-[1px] w-28 bg-gradient-to-l from-transparent via-brand-accent/40 to-brand-accent" />
            </div>
            
            {/* Elegant Section Title */}
            <h4 id="about-timeline-section-title" className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mt-6 text-center">
              My Musical Evolution
            </h4>
            <p id="about-timeline-section-subtitle" className="text-white/60 text-sm max-w-xl text-center mt-3 font-light leading-relaxed">
              Every project marked a new chapter in shaping my signature sound.
            </p>
          </div>

          {/* Spotify Carousel Controller Navigation (Desktop Only) */}
          <div className="max-w-6xl mx-auto flex justify-end gap-3 mb-6 px-4 z-20 relative">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-brand-accent hover:text-black hover:border-brand-accent text-white transition-all duration-300"
              aria-label="Previous Era"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-brand-accent hover:text-black hover:border-brand-accent text-white transition-all duration-300"
              aria-label="Next Era"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Horizontal Carousel Collection container */}
          <div
            ref={scrollRef}
            id="about-timeline-steps-carousel"
            className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-8 max-w-7xl mx-auto snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10"
          >
            {timeline.map((step, index) => {
              const isCurrentActive = currentTrack?.id === `milestone-${step.year}`;
              const isTrackPlaying = isCurrentActive && isPlaying;

              return (
                <motion.div
                  key={step.year}
                  id={`timeline-card-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="w-[300px] sm:w-[380px] shrink-0 snap-start"
                >
                  <div
                    className="h-full rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 hover:border-brand-accent/30 shadow-2xl relative overflow-hidden group transition-all duration-500 flex flex-col p-6"
                  >
                    {/* Cover Artwork Container (Album style) */}
                    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 group-hover:shadow-[0_8px_30px_rgba(255,123,0,0.15)] transition-all duration-500 flex-shrink-0">
                      <img
                        src={step.coverUrl}
                        alt={step.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      
                      {/* Dark Overlay with Spotify Wrapped style Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Year Indicator Floating Top-Left */}
                      <div className="absolute top-4 left-4 font-mono text-xs font-bold text-brand-accent tracking-widest bg-black/70 backdrop-blur-md py-1.5 px-3 rounded-full border border-brand-accent/30 shadow-lg">
                        {step.year}
                      </div>

                      {/* Interactive Spotify-style green play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          onClick={() => playMilestone(step)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-14 h-14 rounded-full ${
                            isTrackPlaying ? 'bg-red-500 shadow-red-500/30' : 'bg-[#1ed760] shadow-[#1ed760]/30'
                          } text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}
                        >
                          {isTrackPlaying ? (
                            <Pause size={24} fill="currentColor" />
                          ) : (
                            <Play size={24} fill="currentColor" className="ml-1" />
                          )}
                        </motion.button>
                      </div>

                      {/* Playback ripple effect if actively playing */}
                      {isTrackPlaying && (
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-[#1ed760]/10 border border-[#1ed760]/30 backdrop-blur-md px-2.5 py-1 rounded-full text-[#1ed760] text-[10px] font-mono font-bold tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1ed760] animate-ping" />
                          NOW PLAYING
                        </div>
                      )}
                    </div>

                    {/* Metadata description column */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Phase Title (Era style) */}
                        <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-accent/90 uppercase mb-1">
                          {step.phase}
                        </div>

                        {/* Title & Organization */}
                        <h5 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide leading-tight">
                          {step.title}
                        </h5>
                        <div className="text-xs text-white/50 font-mono tracking-wide mt-1 mb-4 flex items-center gap-1.5">
                          <span>{step.agency}</span>
                        </div>

                        {/* Description Story block */}
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light font-sans mb-5 italic border-l border-white/10 pl-3">
                          "{step.desc}"
                        </p>
                      </div>

                      {/* Genre Tags and Achievement Footnote */}
                      <div className="mt-auto pt-4 border-t border-white/5">
                        {/* Genre Tags List */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {step.tags && step.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono uppercase bg-white/5 text-white/60 px-2 py-1 rounded-md border border-white/5 tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Notable Achievement Badge */}
                        {step.achievement && (
                          <div className="flex items-center gap-2 bg-brand-accent/5 rounded-xl border border-brand-accent/10 p-2.5">
                            <Sparkles size={13} className="text-brand-accent shrink-0 animate-pulse" />
                            <div className="min-w-0">
                              <div className="text-[9px] text-brand-accent/60 font-mono uppercase tracking-wider font-bold">NOTABLE ACHIEVEMENT</div>
                              <p className="text-[10px] text-white/80 font-medium truncate">{step.achievement}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Left glowing border slider */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1ed760] group-hover:w-full transition-all duration-500 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Premium Bottom Call to Action */}
          <div id="about-section-cta" className="mt-24 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <h5 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                Ready to Create the Next Masterpiece Together?
              </h5>
              
              <a
                id="about-cta-collaborate-btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 shadow-xl shadow-brand-accent/10 hover:shadow-white/10 transition-all duration-300 group"
              >
                <span>🎵 Let's Collaborate</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
