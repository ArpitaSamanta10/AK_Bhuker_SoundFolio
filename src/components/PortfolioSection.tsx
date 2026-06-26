import React, { useState } from 'react';
import { Search, Play, Pause, Disc, Clock, Music, ArrowUpRight } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { TRACKS, Track } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';

export const PortfolioSection: React.FC = () => {
  const { currentTrack, isPlaying, playTrack, pauseTrack } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Film', 'Jingles', 'Arrangement', 'Background Score', 'Mixing'];

  // Handle Play/Pause at individual track card level
  const handleTrackToggle = (track: Track) => {
    if (currentTrack?.id === track.id && isPlaying) {
      pauseTrack();
    } else {
      playTrack(track);
    }
  };

  // Filter and Search Logic
  const filteredTracks = TRACKS.filter((track) => {
    const matchesCategory = selectedCategory === 'All' || track.category === selectedCategory;
    const matchesSearch =
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Highlight flagship composition
  const flagshipTrack = TRACKS[0];

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          id="portfolio-section"
          number="02"
          title="Composition Portfolio"
          subtitle="A curated selection of original orchestral film cues, advertising branding, and spatial stereo arrangements."
        />

        {/* Flagship Featured Track Showcase Banner */}
        <div
          id="portfolio-featured-composition-banner"
          className="mb-16 rounded-3xl glass-card border border-white/10 overflow-hidden relative p-8 md:p-10 flex flex-col lg:flex-row items-center gap-8 hover:border-brand-accent/30 transition-all duration-500"
        >
          {/* Subtle accent corner flag */}
          <span className="absolute top-0 right-0 bg-brand-accent text-black font-mono font-extrabold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
            Composer Selected
          </span>

          <div className="w-full lg:w-1/3 aspect-[16/10] md:aspect-[16/9] lg:aspect-square rounded-xl overflow-hidden relative border border-white/5 flex-shrink-0">
            <img
              id="flagship-banner-cover"
              src={flagshipTrack.coverUrl}
              alt={flagshipTrack.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button
                id="flagship-banner-play-btn"
                onClick={() => handleTrackToggle(flagshipTrack)}
                className="w-16 h-16 rounded-full bg-brand-accent hover:bg-brand-accent/90 text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 duration-300"
                aria-label={isPlaying && currentTrack?.id === flagshipTrack.id ? "Pause" : "Play"}
              >
                {isPlaying && currentTrack?.id === flagshipTrack.id ? (
                  <Pause size={24} fill="currentColor" />
                ) : (
                  <Play size={24} fill="currentColor" className="ml-1" />
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full text-left">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-brand-accent font-extrabold uppercase tracking-widest bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/20">
                Flagship Work
              </span>
              <span className="text-gray-500 text-xs font-mono">• {flagshipTrack.category}</span>
            </div>

            <h3 id="flagship-banner-title" className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-white mt-4 mb-3 tracking-tight">
              {flagshipTrack.title}
            </h3>

            <p id="flagship-banner-desc" className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              {flagshipTrack.description} This composition stands as a benchmark for premium hybrid scoring, featuring live organic orchestrations layered with state-of-the-art modular synthesis textures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-4 border-t border-white/5 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-brand-accent" />
                <span>Duration: <strong>{flagshipTrack.duration} mins</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Music size={14} className="text-brand-accent" />
                <span>Format: <strong>WAV Stereo HD</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Disc size={14} className="text-brand-accent" />
                <span>Year: <strong>{flagshipTrack.year}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Interface */}
        <div
          id="portfolio-controls-bar"
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8"
        >
          {/* Categories Tab Selectors */}
          <div
            id="portfolio-category-filter-tabs"
            className="flex items-center gap-2.5 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-none"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full font-display text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-accent border-brand-accent text-black font-semibold shadow-[0_0_15px_rgba(255,123,0,0.25)]'
                    : 'glass-card border-white/10 text-white/50 hover:text-white hover:border-brand-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar inputs */}
          <div id="portfolio-search-wrapper" className="relative w-full md:w-80">
            <input
              id="portfolio-search-query-input"
              type="text"
              placeholder="Search compositions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent transition-all duration-300 font-mono"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Tracks Grid */}
        {filteredTracks.length > 0 ? (
          <div id="portfolio-tracks-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map((track) => {
              const isActive = currentTrack?.id === track.id;
              const isCurrentPlaying = isActive && isPlaying;

              return (
                <div
                  key={track.id}
                  id={`track-card-${track.id}`}
                  className="rounded-3xl glass-card border border-white/10 overflow-hidden shadow-2xl group/card hover:border-brand-accent/30 transition-all duration-500 flex flex-col"
                >
                  {/* Track Artwork and Play trigger */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg border-b border-white/5 flex-shrink-0">
                    <img
                      id={`track-card-art-${track.id}`}
                      src={track.coverUrl}
                      alt={track.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 brightness-90 group-hover/card:brightness-100"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        id={`track-card-art-play-btn-${track.id}`}
                        onClick={() => handleTrackToggle(track)}
                        className="w-12 h-12 rounded-full bg-brand-accent text-black flex items-center justify-center transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-300 shadow-2xl hover:scale-115"
                        aria-label={isCurrentPlaying ? "Pause Track" : "Play Track"}
                      >
                        {isCurrentPlaying ? (
                          <Pause size={18} fill="currentColor" />
                        ) : (
                          <Play size={18} fill="currentColor" className="ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Left top category label */}
                    <span className="absolute top-4 left-4 bg-black/85 border border-white/5 text-gray-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
                      {track.category}
                    </span>

                    {/* Right top duration label */}
                    <span className="absolute top-4 right-4 bg-black/85 border border-white/5 text-gray-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1">
                      <Clock size={10} className="text-brand-accent" />
                      {track.duration}
                    </span>
                  </div>

                  {/* Card Content body */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          id={`track-card-title-${track.id}`}
                          onClick={() => handleTrackToggle(track)}
                          className={`font-display font-bold text-base uppercase tracking-wide cursor-pointer hover:text-brand-accent transition-colors ${
                            isActive ? 'text-brand-accent' : 'text-white'
                          }`}
                        >
                          {track.title}
                        </h4>
                        <span className="font-mono text-[10px] text-gray-500">{track.year}</span>
                      </div>
                      <p id={`track-card-desc-${track.id}`} className="text-gray-400 text-xs leading-relaxed mt-2.5 line-clamp-3">
                        {track.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                      {/* Playback status */}
                      <button
                        id={`track-card-footer-trigger-${track.id}`}
                        onClick={() => handleTrackToggle(track)}
                        className={`text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors ${
                          isActive ? 'text-brand-accent' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {isCurrentPlaying ? (
                          <>
                            <span className="flex items-center gap-0.5 h-3">
                              <span className="w-[1.5px] h-3 bg-brand-accent animate-pulse" />
                              <span className="w-[1.5px] h-2 bg-brand-accent animate-pulse delay-75" />
                              <span className="w-[1.5px] h-2.5 bg-brand-accent animate-pulse delay-150" />
                            </span>
                            Playing Now
                          </>
                        ) : isActive ? (
                          <>
                            <Play size={12} fill="currentColor" /> Loaded / Paused
                          </>
                        ) : (
                          <>
                            <Play size={12} fill="currentColor" /> Preview Composition
                          </>
                        )}
                      </button>

                      {/* Micro Link indicator */}
                      <span className="text-gray-600 group-hover/card:text-brand-accent transition-colors duration-300">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div id="portfolio-no-results" className="text-center py-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <Disc size={48} className="text-gray-600 animate-spin-slow mx-auto mb-4" />
            <h4 className="font-display font-semibold text-lg text-white mb-1">No compositions matched</h4>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              Try adjusting your search queries or category filters to find the right sound.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
