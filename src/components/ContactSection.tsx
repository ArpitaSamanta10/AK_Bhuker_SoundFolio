import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { Mail, MapPin, Youtube, Disc, Music, Send, CheckCircle, AlertTriangle, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Film Scoring',
    budgetRange: '$5,000 - $10,000',
    timeline: '',
    description: ''
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Flexible / Discuss'
  ];

  const projectTypeOptions = [
    'Film Scoring (Full Length)',
    'Short Film Scoring',
    'Commercial Jingle & Ads',
    'Music Arrangement',
    'Stereo Mixing & Engineering',
    'Atmospheric Sound Design',
    'Video Game Interactive Audio'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ak.bhuker.music@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Field validations
    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim()) {
      setValidationError('Please enter your email address.');
      return;
    }
    // Simple email regex check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.timeline.trim()) {
      setValidationError('Please specify your project timeline.');
      return;
    }
    if (!formData.description.trim()) {
      setValidationError('Please describe your project guidelines.');
      return;
    }

    setFormState('loading');
    setValidationError('');

    // Simulate EmailJS or Formspree transmission latency
    setTimeout(() => {
      setFormState('success');
      // Reset form data on success
      setFormData({
        fullName: '',
        email: '',
        projectType: 'Film Scoring',
        budgetRange: '$5,000 - $10,000',
        timeline: '',
        description: ''
      });
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-brand-bg border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          id="contact-section"
          number="05"
          title="Secure Consultation"
          subtitle="Initiate collaboration briefs. Submit your cinematic guidelines below, and Ak's sound production team will analyze your frequencies."
        />

        <div id="contact-core-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
          
          {/* Studio Meta Contact Details Block (Left / Col-5) */}
          <div id="contact-details-block" className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-extrabold block mb-2">
                Composer Headquarters
              </span>
              <h3 className="font-display font-bold text-2xl uppercase text-white tracking-tight">
                The Acoustic Studio Vault
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Ak Bhuker works from a bespoke, acoustic-treated state-of-the-art studio block. We host direct briefings over high-fidelity zoom or source-connect links.
              </p>
            </div>

            {/* Structured details list */}
            <div className="flex flex-col gap-5">
              {/* Email Detail Row */}
              <div id="contact-detail-email" className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-white/10 hover:border-brand-accent/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-brand-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] uppercase tracking-wider text-white/40 font-mono block font-bold">Direct Mailbox</span>
                  <a href="mailto:ak.bhuker.music@gmail.com" className="text-white hover:text-brand-accent text-sm font-mono truncate block mt-0.5 font-semibold">
                    ak.bhuker.music@gmail.com
                  </a>
                  <button
                    id="copy-email-address-btn"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-[10px] uppercase font-mono text-white/50 hover:text-white mt-1.5 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={10} className="text-emerald-400" />
                        Copied Securely
                      </>
                    ) : (
                      <>
                        <Copy size={10} />
                        Copy to Clipboard
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Detail Row */}
              <div id="contact-detail-location" className="flex items-start gap-4 p-5 rounded-2xl glass-card border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-accent" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-white/40 font-mono block font-bold">Main Studio Block</span>
                  <span className="text-white text-sm font-semibold block mt-0.5">
                    Studio Row 10B, Audio Grid West
                  </span>
                  <span className="text-white/60 text-xs mt-1 block">
                    Los Angeles & Mumbai (Remote Synchronized)
                  </span>
                </div>
              </div>
            </div>

            {/* Cinematic Google Maps placeholder map illustration */}
            <div id="contact-map-panel" className="relative rounded-3xl overflow-hidden border border-white/10 glass-card p-5 shadow-2xl">
              <span className="text-[9px] uppercase tracking-widest text-brand-accent font-mono block mb-2 font-bold">
                Studio Coordinates: 34.0522° N, 118.2437° W
              </span>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/80 flex items-center justify-center border border-white/10 group">
                {/* Custom glowing visual map art */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,123,0,0.15)_0%,transparent_70%)] animate-pulse-slow" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Floating coordinates indicator */}
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-4 h-4 rounded-full bg-brand-accent animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-brand-accent border-2 border-white relative z-10 shadow-lg" />
                  <span className="text-[10px] uppercase font-mono text-white font-bold mt-2 tracking-wider">
                    Ak Bhuker HQ
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                    Analog Sync Grid
                  </span>
                </div>

                {/* Cover overlay button */}
                <a
                  id="contact-map-link-overlay"
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs text-brand-accent uppercase tracking-widest bg-black/80 font-bold"
                >
                  View Coordinates on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Quotation Inquiry Form Block (Right / Col-7) */}
          <div id="contact-form-block" className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card border border-white/10 shadow-2xl relative">
              
              {formState === 'success' ? (
                /* Success Notification State */
                <div id="contact-submit-success-box" className="py-12 px-4 flex flex-col items-center text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="font-display font-bold text-2xl uppercase text-white tracking-wide mb-3">
                    Transmission Authenticated
                  </h4>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
                    Your composition brief has been safely routed to Ak Bhuker's server. We will analyze your guide stems and respond within 24 business hours.
                  </p>
                  <button
                    id="contact-success-reset-btn"
                    onClick={() => setFormState('idle')}
                    className="py-2.5 px-6 rounded-full bg-brand-card border border-white/10 hover:border-brand-accent text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form Screen */
                <form id="contact-secure-quote-form" onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <h4 className="font-display font-bold text-lg text-white uppercase">Project Briefing Terminal</h4>
                    <p className="text-gray-500 text-xs mt-1">Fields marked with * are required for mathematical frequency alignment.</p>
                  </div>

                  {/* ValidationError Indicator */}
                  {validationError && (
                    <div id="contact-validation-error-banner" className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2 font-mono">
                      <AlertTriangle size={14} className="flex-shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Form inputs row: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Elena Rostova"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        disabled={formState === 'loading'}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 placeholder-white/20 font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="elena@siberiafilm.co"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={formState === 'loading'}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 placeholder-white/20 font-mono"
                      />
                    </div>
                  </div>

                  {/* Form inputs row: Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        disabled={formState === 'loading'}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 font-mono accent-brand-card"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budgetRange" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                        Estimated Budget *
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        disabled={formState === 'loading'}
                        className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 font-mono"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Form inputs row: Timeline info */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="timeline" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                      Estimated Project Deadline *
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      name="timeline"
                      placeholder="e.g., September 2026 or 4 Weeks from kickoff"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      disabled={formState === 'loading'}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 placeholder-white/20 font-mono"
                    />
                  </div>

                  {/* Form inputs row: Project Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-bold">
                      Brief Narrative & Sonic Guidelines *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="e.g., Feature film trailer. Needs heavy sub-bass transitions, metallic brass impacts, and organic string sweeps matching high-velocity cut frames..."
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={formState === 'loading'}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-accent focus:bg-white/10 transition-all duration-300 placeholder-white/20 resize-none font-mono"
                    />
                  </div>

                  {/* Submission Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full mt-2 py-3.5 rounded-xl bg-brand-accent text-black font-display text-xs uppercase tracking-widest font-bold shadow-[0_4px_15px_rgba(255,123,0,0.3)] hover:shadow-[0_4px_20px_rgba(255,123,0,0.5)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {formState === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting frequencies...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Transmit Project Brief
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
