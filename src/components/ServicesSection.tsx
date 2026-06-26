import React from 'react';
import { Film, Tv, Sliders, Volume2, Music, Check, ArrowRight } from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';
import { SectionTitle } from './SectionTitle';

export const ServicesSection: React.FC = () => {
  // Simple icon component mapper
  const renderIcon = (iconName: string) => {
    const iconSize = 24;
    const iconClass = "text-brand-accent";
    switch (iconName) {
      case 'Film':
        return <Film size={iconSize} className={iconClass} />;
      case 'Tv':
        return <Tv size={iconSize} className={iconClass} />;
      case 'Sliders':
        return <Sliders size={iconSize} className={iconClass} />;
      case 'Volume2':
        return <Volume2 size={iconSize} className={iconClass} />;
      case 'Music':
        default:
        return <Music size={iconSize} className={iconClass} />;
    }
  };

  const handleScrollToContact = () => {
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
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-brand-bg border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          id="services-section"
          number="03"
          title="Compositional Services"
          subtitle="Bespoke audio solutions tailor-made for film directors, advertising producers, and visual creative agencies."
        />

        {/* Services Cards Grid */}
        <div id="services-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between group hover:border-brand-accent/30 transition-all duration-500 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Corner decorative light leak */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/[0.02] group-hover:bg-brand-accent/[0.05] rounded-bl-full transition-all duration-500" />

              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-black transition-all duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {renderIcon(srv.iconName)}
                    </span>
                  </div>
                  <h4 id={`service-title-${srv.id}`} className="font-display font-bold text-lg uppercase text-white tracking-wide">
                    {srv.title}
                  </h4>
                </div>

                <p id={`service-desc-${srv.id}`} className="text-gray-400 text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Deliverables List */}
                <div className="mb-8">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold block mb-3.5">
                    Service Deliverables
                  </span>
                  <ul id={`service-deliverables-list-${srv.id}`} className="flex flex-col gap-2.5">
                    {srv.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                        <Check size={14} className="text-brand-accent mt-0.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Turnaround, Pricing & Action */}
              <div className="border-t border-white/5 pt-6 mt-6">
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-gray-500">Turnaround:</span>
                  <span className="text-white font-semibold">{srv.turnaround}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-gray-500">Pricing Tier:</span>
                  <span className="text-brand-accent font-extrabold uppercase tracking-wider">
                    {srv.price}
                  </span>
                </div>

                <button
                  id={`service-card-cta-btn-${srv.id}`}
                  onClick={handleScrollToContact}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-brand-accent hover:text-black text-white font-display text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-transparent cursor-pointer"
                >
                  Consult for Quote
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Quote Promotion Box */}
        <div
          id="services-promo-box"
          className="mt-16 p-8 rounded-3xl glass-card border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-accent/30 transition-all duration-500"
        >
          <div className="text-left">
            <h4 className="font-display font-bold text-lg uppercase text-white mb-1.5 tracking-wide">
              Need a completely custom musical arrangement?
            </h4>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
              I compose tailored audio structures that match precise mathematical timing grids. Reach out directly to schedule a live audio briefing or to request sample stems.
            </p>
          </div>
          <button
            id="services-promo-cta-btn"
            onClick={handleScrollToContact}
            className="py-3 px-8 rounded-full bg-brand-accent text-black font-display text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-[0_0_20px_rgba(255,123,0,0.4)] transition-all duration-300 hover:scale-105 flex-shrink-0 cursor-pointer"
          >
            Start Project Discussion
          </button>
        </div>
      </div>
    </section>
  );
};
