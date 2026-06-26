import React from 'react';

interface SectionTitleProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  id,
  number,
  title,
  subtitle,
  align = 'center',
}) => {
  const isLeft = align === 'left';

  return (
    <div
      id={`section-heading-container-${id}`}
      className={`mb-12 md:mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}
    >
      {/* Mini counter section */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-brand-accent tracking-[0.25em] uppercase font-bold">
          {number}
        </span>
        <span className="h-[1px] w-6 bg-brand-accent/40" />
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          Soundscape
        </span>
      </div>

      {/* Main cinematic heading */}
      <h2
        id={`section-title-${id}`}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4 leading-none"
      >
        {title}
      </h2>

      {/* Optional descriptive subtitle */}
      {subtitle && (
        <p
          id={`section-subtitle-${id}`}
          className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed"
        >
          {subtitle}
        </p>
      )}

      {/* Underline divider accent */}
      <div className={`h-[2px] w-12 bg-brand-accent mt-6 rounded-full ${isLeft ? '' : 'mx-auto'}`} />
    </div>
  );
};
