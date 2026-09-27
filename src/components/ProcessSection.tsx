import React from 'react';
import { PROCESS_STEPS } from '../data/businessData';
import { Check, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#0D0911] text-[#FAF7F2] relative overflow-hidden border-y border-[#D4AF37]/20">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
            The DH Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4 text-balance">
            More Than Planning.<br />
            <span className="italic font-light gold-text-shimmer font-serif">It’s Peace of Mind.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#C4B9A9] font-light max-w-lg mx-auto leading-relaxed">
            Our four-stage planning methodology ensures every nuance of your celebration is handled with care and intention.
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="group relative royal-card p-6 sm:p-7 rounded-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Indicator Node */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#181122] border border-[#D4AF37]/60 flex items-center justify-center font-royal text-lg text-[#F3D082] group-hover:scale-105 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all shadow-inner">
                      {step.step}
                    </div>
                    <span className="font-royal text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]/60 font-semibold">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-white font-medium mb-3 group-hover:text-[#F3D082] transition-colors">
                    {step.title}
                  </h3>

                  {/* Short prompt-specified text */}
                  <p className="text-sm text-[#F3D082] font-medium leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Extended explanation */}
                  <p className="text-xs text-[#C4B9A9] font-light leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/15 flex items-center gap-1.5 text-[10px] font-royal uppercase tracking-wider text-[#FAF0CA]/60 group-hover:text-[#F3D082] transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Curated by DH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
