import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';
import { ArtworkVisual } from './ArtworkVisual';

interface FinalCTAProps {
  onStartPlanningClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartPlanningClick }) => {
  return (
    <section className="relative py-32 bg-[#0D0911] text-[#FAF7F2] overflow-hidden border-t border-b border-[#D4AF37]/25">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <ArtworkVisual theme="evening_lawn" overlay={false} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0911] via-[#0D0911]/90 to-[#0D0911]/75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-4">
          Begin Your Celebration
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-6 leading-tight text-balance">
          Let’s Create Something<br />
          <span className="italic gold-text-shimmer font-serif">Worth Celebrating.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#E7DFD3]/90 max-w-xl mx-auto font-light leading-relaxed mb-10 text-balance">
          Tell us about your event and let’s start planning something unforgettable.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartPlanningClick}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-[#800E13] via-[#A31621] to-[#800E13] hover:from-[#951016] text-[#FAF0CA] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-[0_4px_25px_rgba(128,14,19,0.5)] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#F3D082]" />
            <span>Start Planning</span>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-[#140E1B]/80 hover:bg-[#1C1226] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-white text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Phone className="w-4 h-4 text-[#F3D082]" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        {/* Address preview */}
        <p className="mt-8 text-xs text-[#D4AF37]/70 tracking-widest font-light uppercase">
          Nikol, Ahmedabad · Gujarat 380049
        </p>
      </div>
    </section>
  );
};
