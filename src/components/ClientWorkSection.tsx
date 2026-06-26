import React from 'react';
import { CLIENT_WORK, TESTIMONIALS } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';
import { Star, ShieldCheck, Film, Briefcase, Activity } from 'lucide-react';

export const ClientWorkSection: React.FC = () => {
  return (
    <section
      id="client-work"
      className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          id="client-work-section"
          number="04"
          title="Client Showcase"
          subtitle="A history of theatrical score delivery, commercial brand identity campaigns, and AAA gaming projects."
        />

        {/* Brand Trust Bar */}
        <div id="client-trust-logo-bar" className="mb-16 text-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold block mb-6">
            Trusted by Creators & Industry Leaders
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
            <span className="font-display font-bold text-lg text-white tracking-widest uppercase">NEBULA PICTURES</span>
            <span className="font-display font-light text-lg text-white tracking-[0.2em] uppercase">AURA LUXURY MOTORS</span>
            <span className="font-display font-extrabold text-lg text-white tracking-wider uppercase">ZENITH GAMES</span>
            <span className="font-display font-bold text-lg text-white tracking-widest uppercase">NORDIC WAVES</span>
          </div>
        </div>

        {/* Client Projects Grid */}
        <div id="client-projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CLIENT_WORK.map((proj) => (
            <div
              key={proj.id}
              id={`client-project-card-${proj.id}`}
              className="rounded-3xl glass-card border border-white/10 overflow-hidden shadow-2xl flex flex-col sm:flex-row hover:border-brand-accent/30 transition-all duration-500 group"
            >
              {/* Cover Image representation */}
              <div className="w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto sm:h-full relative overflow-hidden flex-shrink-0">
                <img
                  id={`client-project-img-${proj.id}`}
                  src={proj.imageUrl}
                  alt={proj.projectName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Project Card details body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold">
                      {proj.type}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">{proj.year}</span>
                  </div>

                  <h4 id={`client-project-name-${proj.id}`} className="font-display font-bold text-lg uppercase text-white tracking-wide group-hover:text-brand-accent transition-colors duration-300">
                    {proj.projectName}
                  </h4>
                  <h5 className="text-xs text-gray-400 font-mono mb-4">
                    Client: {proj.client}
                  </h5>

                  <p id={`client-project-desc-${proj.id}`} className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Status bar */}
                <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Project Status:</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      proj.status === 'Released' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                    }`} />
                    <span className={proj.status === 'Released' ? 'text-emerald-400' : 'text-amber-400'}>
                      {proj.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Review Section */}
        <div id="testimonials-reviews-wrapper" className="pt-8 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-accent font-bold block mb-2">
              Collaborator Endorsements
            </span>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-white tracking-tight">
              Feedback from the Directors Bar
            </h3>
          </div>

          <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((tst) => (
              <div
                key={tst.id}
                id={`testimonial-bubble-${tst.id}`}
                className="p-8 rounded-3xl glass-card border border-white/10 relative group hover:border-brand-accent/30 transition-all duration-300 flex flex-col justify-between text-left shadow-xl"
              >
                {/* Visual quote accent mark */}
                <span className="absolute top-6 right-8 text-6xl font-display text-white/5 select-none pointer-events-none group-hover:text-brand-accent/5 transition-colors">
                  “
                </span>

                <div>
                  {/* Star rating illustration */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-accent" fill="currentColor" />
                    ))}
                  </div>

                  <p id={`testimonial-quote-text-${tst.id}`} className="text-gray-300 text-xs sm:text-sm leading-relaxed italic relative z-10">
                    "{tst.text}"
                  </p>
                </div>

                {/* Direct User Meta profile detail */}
                <div className="flex items-center gap-4 mt-8 border-t border-white/5 pt-5">
                  <img
                    id={`testimonial-avatar-${tst.id}`}
                    src={tst.avatarUrl}
                    alt={tst.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                      {tst.name}
                    </h5>
                    <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                      {tst.role} • <strong className="text-gray-300">{tst.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials and Permission Statement */}
        <div id="client-work-permission-note" className="mt-16 text-center max-w-xl mx-auto flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl glass-card border border-white/10">
          <ShieldCheck size={18} className="text-brand-accent flex-shrink-0" />
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider leading-relaxed">
            All listed materials displayed are with express legal permission and broadcast license consent of respective producers.
          </span>
        </div>
      </div>
    </section>
  );
};
