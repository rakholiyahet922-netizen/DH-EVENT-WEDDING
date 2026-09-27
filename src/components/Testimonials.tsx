import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/businessData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DEMO_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DEMO_TESTIMONIALS.length) % DEMO_TESTIMONIALS.length);
  };

  const activeTestimonial = DEMO_TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 bg-[#0D0911] border-b border-[#D4AF37]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Section Header */}
        <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
          Client Words
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-14">
          Memories We Cherish.
        </h2>

        {/* Testimonial Stage */}
        <div className="relative royal-card p-8 sm:p-14 rounded-xs shadow-2xl max-w-4xl mx-auto border border-[#D4AF37]/30">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#181122] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3D082] shadow-inner">
              <Quote className="w-6 h-6" />
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light italic leading-snug mb-8 min-h-[90px] flex items-center justify-center text-balance">
            “{activeTestimonial.quote}”
          </blockquote>

          {/* Attributions */}
          <div className="space-y-1">
            <p className="font-royal text-sm font-semibold tracking-[0.2em] uppercase text-[#F3D082]">
              {activeTestimonial.coupleOrClient}
            </p>
            <p className="text-xs text-[#C4B9A9] tracking-wide">
              {activeTestimonial.eventType} · {activeTestimonial.location}
            </p>
          </div>

          {/* Demo Note Indicator for the Business Owner */}
          <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 inline-block">
            <span className="text-[11px] text-[#A89F91] tracking-wider uppercase font-medium">
              Demo Testimonial Structure · Ready to update with real client reviews
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-[#F3D082]" />
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {DEMO_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-gradient-to-r from-[#D4AF37] to-[#F3D082]'
                      : 'w-2 bg-[#3A2A47] hover:bg-[#D4AF37]/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-[#F3D082]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
