import React from 'react';
import { WHY_DH_VALUES } from '../data/businessData';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const WhyDH: React.FC = () => {
  return (
    <section className="py-28 bg-[#120B19] border-b border-[#D4AF37]/20 relative overflow-hidden royal-jaali-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
              The Planning Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight text-balance">
              Why Families Trust DH Event & Wedding Planner.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#C4B9A9] font-light leading-relaxed">
              We focus on substance, attentiveness, and transparent management so you can celebrate without stress.
            </p>
          </div>
        </div>

        {/* 4 Believable Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_DH_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="royal-card p-8 sm:p-10 rounded-xs relative group"
            >
              {/* Subtle numeral watermark / index */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D4AF37]/15">
                <span className="font-royal text-3xl sm:text-4xl text-[#D4AF37] font-bold">
                  0{idx + 1}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase text-[#FAF0CA] font-semibold bg-[#800E13]/60 border border-[#D4AF37]/30 px-3 py-1 rounded-xs">
                  {val.accent}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3 group-hover:text-[#F3D082] transition-colors">
                {val.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-[#D4AF37] font-medium mb-3">
                {val.summary}
              </p>

              {/* Description */}
              <p className="text-sm text-[#C4B9A9] font-light leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
