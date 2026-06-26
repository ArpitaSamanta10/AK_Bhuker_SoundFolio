import React from 'react';
import { Play, Pause, ArrowRight, MessageSquare, ShieldAlert } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { TRACKS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
  const featuredTrack = TRACKS[0]; // "Visions of the Void" is our flagship track

  const isCurrentFeatured = currentTrack?.id === featuredTrack.id;

  const handlePlayFeatured = () => {
    if (isCurrentFeatured) {
      togglePlay();
    } else {
      playTrack(featuredTrack);
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#070707]"
    >
      {/* Absolute luxury background overlays */}
      <div className="absolute inset-0 z-0">
        {/* Subtle glowing radial gradient in the center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
        
        {/* Background dark grid mesh lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Cinematic ambient gold light flare on the top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-accent/[0.05] rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Content Column (Left) */}
        <div id="hero-content-block" className="lg:col-span-7 flex flex-col items-start gap-6 relative z-10">
          {/* Top category pill */}
          <div className="flex items-center gap-2 px-4 py-1.5 glass-card border border-white/10 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/80 font-bold">
              Now Scoring Feature Films & Games
            </span>
          </div>

          <h1 id="hero-title" className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.9] mt-2">
            <span className="text-brand-accent block font-bold text-lg sm:text-xl tracking-[0.3em] mb-3">Music Composer & Producer</span>
            AK <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">BHUKER</span>
          </h1>

          <p id="hero-description" className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg italic font-serif">
            Sculpting multi-dimensional sound architectures and cinematic arrangements that capture human emotion. From high-suspense thriller cues to majestic symphonic sweeps, I make stories sound unforgettable.
          </p>

          {/* Quick Stats Grid inside Hero */}
          <div id="hero-mini-stats" className="grid grid-cols-3 gap-6 py-6 border-y border-white/10 w-full max-w-lg my-2">
            <div>
              <span className="block font-display font-black text-2xl text-white">10+</span>
              <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Years Exp</span>
            </div>
            <div>
              <span className="block font-display font-black text-2xl text-brand-accent">120+</span>
              <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Tracks Scored</span>
            </div>
            <div>
              <span className="block font-display font-black text-2xl text-white">100%</span>
              <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider font-bold">Licensing</span>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div id="hero-actions-container" className="flex flex-wrap items-center gap-4 mt-2">
            <button
              id="hero-cta-listen-now"
              onClick={() => handleScrollTo('#portfolio')}
              className="py-3.5 px-8 rounded-full bg-brand-accent text-black font-display text-xs uppercase tracking-widest font-bold shadow-[0_4px_20px_rgba(255,123,0,0.3)] hover:shadow-[0_4px_25px_rgba(255,123,0,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-3 group cursor-pointer"
            >
              Explore Portfolio
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button
              id="hero-cta-contact"
              onClick={() => handleScrollTo('#contact')}
              className="py-3.5 px-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Get a Quote
              <MessageSquare size={14} className="text-brand-accent" />
            </button>
          </div>
        </div>

        {/* Cinematic Music Showcase Player Widget (Right) */}
        <div id="hero-showcase-player-card" className="lg:col-span-5 w-full flex justify-center relative z-10">
          <div className="relative w-full max-w-sm rounded-3xl glass-card border border-white/10 p-8 shadow-2xl overflow-hidden group hover:border-brand-accent/30 transition-all duration-500">
            {/* Ambient visual overlay glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-accent/25 transition-all" />

            {/* Cinematic Album Artwork representation */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 group/art shadow-xl border border-white/10">
              <img
                id="hero-featured-cover-img"
                src={featuredTrack.coverUrl}
                alt={featuredTrack.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85" />
              
              {/* Play icon inside the art */}
              <button
                id="hero-featured-player-art-btn"
                onClick={handlePlayFeatured}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-accent text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover/art:scale-100 transition-all duration-300 hover:scale-110"
                aria-label={isPlaying && isCurrentFeatured ? "Pause Track" : "Play Track"}
              >
                {isPlaying && isCurrentFeatured ? (
                  <Pause size={28} fill="currentColor" />
                ) : (
                  <Play size={28} fill="currentColor" className="ml-1" />
                )}
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[9px] uppercase bg-brand-accent text-black font-extrabold px-2 py-0.5 rounded tracking-widest">
                  Featured Composition
                </span>
                <h3 className="font-display font-bold text-lg text-white uppercase mt-1.5 leading-tight">
                  {featuredTrack.title}
                </h3>
              </div>
            </div>

            {/* Tiny progress player stats */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                <span>Duration</span>
                <span className="text-white font-semibold">{featuredTrack.duration} mins</span>
              </div>
              <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                <span>Genre Style</span>
                <span className="text-brand-accent font-semibold uppercase tracking-wider">{featuredTrack.category}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed mt-2 border-t border-white/10 pt-3 italic">
                "{featuredTrack.description}"
              </p>

              {/* Simple play button callout */}
              <button
                id="hero-featured-inline-toggle"
                onClick={handlePlayFeatured}
                className="w-full mt-2 py-2.5 px-4 bg-white/5 hover:bg-brand-accent hover:text-black border border-white/10 hover:border-transparent text-white font-mono text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                {isPlaying && isCurrentFeatured ? (
                  <>
                    <Pause size={14} fill="currentColor" /> Pause Preview
                  </>
                ) : (
                  <>
                    <Play size={14} fill="currentColor" /> Listen Preview Track
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
