import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const PersistentAudioPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    progress,
    currentTime,
    duration,
    volume,
    togglePlay,
    setVolumeState,
    seek,
    playNext,
    playPrevious,
  } = useAudio();

  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.8);
  const [isExpanded, setIsExpanded] = useState(false);

  // If no track is loaded, keep the player hidden to preserve negative space
  if (!currentTrack) return null;

  // Helper to format time (e.g. 125 seconds -> "02:05")
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const paddedSeconds = seconds.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = (clickX / width) * 100;
    seek(percentage);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolumeState(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolumeState(0);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolumeState(vol);
    if (vol > 0 && isMuted) {
      setIsMuted(false);
    } else if (vol === 0 && !isMuted) {
      setIsMuted(true);
    }
  };

  return (
    <div
      id="persistent-audio-player-container"
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isExpanded ? 'h-auto md:h-28 border-t border-brand-accent/30' : 'h-24 border-t border-white/10'
      } glass-nav shadow-[0_-15px_40px_rgba(0,0,0,0.85)] px-6 md:px-12 py-3 flex flex-col justify-center`}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        
        {/* Track Details & Cover Info (Left Column) */}
        <div id="player-track-info-section" className="flex items-center gap-4 w-full md:w-1/4">
          <div className="relative flex-shrink-0">
            <img
              id="player-track-cover"
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              referrerPolicy="no-referrer"
              className={`w-14 h-14 rounded-xl object-cover border border-white/10 shadow-lg ${
                isPlaying ? 'animate-pulse' : ''
              }`}
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center gap-0.5">
                <span className="w-1 h-4 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-1 h-3 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                <span className="w-1 h-5 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h5 id="player-track-title" className="font-display font-semibold text-white truncate text-sm hover:text-brand-accent transition-colors">
                {currentTrack.title}
              </h5>
              <span id="player-track-year" className="text-[10px] font-mono text-white/50 glass-card px-1.5 py-0.5 rounded border border-white/10">
                {currentTrack.year}
              </span>
            </div>
            <p id="player-track-description" className="text-white/40 text-xs truncate max-w-xs mt-0.5">
              {currentTrack.description}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span id="player-track-category" className="text-[10px] uppercase font-mono text-brand-accent tracking-widest font-bold">
                {currentTrack.category}
              </span>
              <span className="text-gray-600 text-xs">•</span>
              <span id="player-track-duration" className="text-[10px] font-mono text-gray-500">
                {currentTrack.duration} mins
              </span>
            </div>
          </div>
        </div>

        {/* Master Audio Controls & Timeline Scrubber (Center Column) */}
        <div id="player-playback-controls-section" className="flex flex-col gap-2 w-full md:w-2/4 items-center">
          {/* Controls Trigger Bar */}
          <div className="flex items-center gap-6">
            <button
              id="player-control-prev"
              onClick={playPrevious}
              className="p-1.5 rounded-full text-gray-400 hover:text-brand-accent hover:bg-white/5 transition-all"
              aria-label="Previous Track"
            >
              <SkipBack size={18} />
            </button>

            <button
              id="player-control-play-pause"
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-brand-accent text-black hover:scale-105 flex items-center justify-center shadow-[0_0_15px_rgba(255,123,0,0.3)] hover:shadow-[0_0_20px_rgba(255,123,0,0.5)] transition-all"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
            </button>

            <button
              id="player-control-next"
              onClick={playNext}
              className="p-1.5 rounded-full text-gray-400 hover:text-brand-accent hover:bg-white/5 transition-all"
              aria-label="Next Track"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Scrubbable Timeline Track */}
          <div id="player-timeline-container" className="flex items-center gap-3 w-full">
            <span id="player-time-current" className="text-[10px] font-mono text-gray-500 w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <div
              id="player-progress-bar-rail"
              onClick={handleProgressBarClick}
              className="h-1.5 flex-1 bg-white/10 rounded-full cursor-pointer relative group transition-all hover:h-2"
            >
              {/* Colored active level */}
              <div
                id="player-progress-bar-fill"
                className="h-full bg-gradient-to-r from-brand-accent to-amber-500 rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                {/* Visual glow indicator handle */}
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,123,0,1)] transition-opacity" />
              </div>
            </div>

            <span id="player-time-total" className="text-[10px] font-mono text-gray-500 w-10 text-left">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Dynamic Volume Slider & Fullscreen Options (Right Column) */}
        <div id="player-options-volume-section" className="hidden md:flex items-center justify-end gap-4 w-full md:w-1/4">
          {/* Mute and volume slider */}
          <div className="flex items-center gap-2 group/volume">
            <button
              id="player-control-mute"
              onClick={toggleMute}
              className="p-2 text-gray-400 hover:text-brand-accent transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              id="player-volume-slider-input"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-brand-accent h-1 bg-white/10 rounded-lg appearance-none cursor-pointer group-hover/volume:w-24 transition-all duration-300"
              aria-label="Volume level"
            />
          </div>

          <div className="h-4 w-[1px] bg-white/10" />

          {/* Quick collapse/expand indicator */}
          <button
            id="player-expand-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-400 hover:text-brand-accent transition-colors hidden lg:block"
            title={isExpanded ? "Collapse Player" : "Expand Player"}
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Expanded Details Pane (Optional - if isExpanded) */}
      {isExpanded && (
        <div id="player-expanded-metadata-pane" className="hidden lg:flex items-center justify-center border-t border-white/5 mt-3 pt-3 text-xs text-gray-400 font-mono gap-6 animate-fade-in">
          <span>Composer: <strong className="text-white">Ak Bhuker</strong></span>
          <span>•</span>
          <span>Sample Rate: <strong className="text-brand-accent">24-bit / 96kHz Lossless</strong></span>
          <span>•</span>
          <span>Licensing: <strong className="text-white">Exclusive Rights Available</strong></span>
        </div>
      )}
    </div>
  );
};
