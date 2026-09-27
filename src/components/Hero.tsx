import React from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';
import { ArtworkVisual } from './ArtworkVisual';

interface HeroProps {
  onPlanEventClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanEventClick,
  onExploreWorkClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#140E1B] text-[#FAF7F2]"
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <ArtworkVisual theme="mandap_royal" overlay={false} className="w-full h-full transform scale-105 transition-transform duration-1000 ease-out" />
        {/* Editorial Vignette & Warm Tint Overlays */}
        <div className="absolute inset-0 bg-radial-[at_50%_60%] from-transparent via-[#140E1B]/50 to-[#140E1B]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140E1B] via-transparent to-[#140E1B]/60" />
      </div>

      {/* Decorative Traditional Indian Arch Hairline */}
      <div className="absolute inset-x-8 top-28 bottom-28 border border-[#C5A059]/20 pointer-events-none hidden xl:block rounded-t-full rounded-b-sm" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#160E1F]/70 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="font-royal text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-[#F3D082] uppercase">
            {BUSINESS_CONFIG.heroEyebrow}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {/* Cinematic Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-6 max-w-4xl text-balance">
          Moments Worth<br />
          <span className="italic font-light gold-text-shimmer font-serif">Remembering.</span>
        </h1>

        {/* Supporting Text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F2E8DC]/85 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          {BUSINESS_CONFIG.heroSupportingText}
        </p>

        {/* Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onPlanEventClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#800E13] via-[#A31621] to-[#800E13] hover:from-[#951016] hover:to-[#800E13] text-[#FAF0CA] text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase rounded-xs transition-all duration-300 shadow-[0_4px_25px_rgba(128,14,19,0.5)] border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#F3D082]" />
            <span>Plan Your Event</span>
          </button>

          <button
            onClick={onExploreWorkClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#140E1B]/60 hover:bg-[#1C1226] text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase rounded-xs transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="w-4 h-4 text-[#F3D082]" />
            <span>Explore Our Work</span>
          </button>
        </div>

        {/* Location Subtext Indicator */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#D4AF37]/80 uppercase font-light">
          <span>✦</span>
          <span>Nikol, Ahmedabad · Gujarat</span>
          <span>✦</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.25em] text-[#E4BA68] uppercase font-medium">
          Scroll to explore
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-[#E4BA68] animate-bounce" />
      </div>
    </section>
  );
};
