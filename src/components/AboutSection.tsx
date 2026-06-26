import React from 'react';
import { BIOGRAPHY } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Calendar, Award, Music, Compass, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { name, tagline, subTagline, aboutText1, aboutText2, influences, stats, timeline } = BIOGRAPHY;

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

            <div id="about-narrative-paragraphs" className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">
              <p id="about-para-1">{aboutText1}</p>
              <p id="about-para-2">{aboutText2}</p>
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

        {/* Career Milestone Timeline (Horizontal or vertical step) */}
        <div id="about-career-timeline-container" className="mt-20">
          <h4 className="font-display font-bold text-xl uppercase tracking-wider text-white text-center mb-12 flex items-center justify-center gap-2">
            <Calendar size={18} className="text-brand-accent" />
            Musical Journey & Milestones
          </h4>

          <div id="about-timeline-steps-wrapper" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, index) => (
              <div
                key={step.year}
                id={`timeline-card-${index}`}
                className="p-6 rounded-3xl glass-card border border-white/10 relative group hover:border-brand-accent/30 transition-all duration-300"
              >
                {/* Year tag indicator */}
                <span className="font-mono text-xs font-extrabold text-brand-accent tracking-widest bg-brand-accent/10 py-1.5 px-3 rounded-full inline-block mb-4">
                  {step.year}
                </span>

                <h5 className="font-display font-bold text-base text-white uppercase mb-1">
                  {step.title}
                </h5>
                <h6 className="text-xs text-white/50 font-mono mb-3">
                  {step.agency}
                </h6>
                <p className="text-white/40 text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Animated progress underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-accent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action inside About Section */}
        <div id="about-section-cta" className="mt-16 text-center">
          <a
            id="about-cta-link-to-services"
            href="#services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brand-accent hover:text-white transition-colors duration-300 group"
          >
            Explore compositional service deliverables
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
