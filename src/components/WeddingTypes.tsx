import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EVENT_TYPES, EventTypeItem } from '../data/businessData';
import { ArtworkVisual } from './ArtworkVisual';

interface WeddingTypesProps {
  onSelectEventType: (item: EventTypeItem) => void;
}

export const WeddingTypes: React.FC<WeddingTypesProps> = ({ onSelectEventType }) => {
  return (
    <section className="py-28 bg-[#0D0911] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
            Celebration Portfolios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
            Curated For Every Occasion.
          </h2>
          <p className="text-[#C4B9A9] text-base sm:text-lg font-light leading-relaxed">
            From intimate sacred rituals to high-energy wedding receptions and bespoke milestones.
          </p>
        </div>

        {/* 6 Visually Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_TYPES.map((type) => (
            <div
              key={type.id}
              onClick={() => onSelectEventType(type)}
              className="group relative h-[440px] rounded-xs overflow-hidden border border-[#D4AF37]/25 shadow-xl hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] hover:border-[#D4AF37]/70 transition-all duration-500 cursor-pointer flex flex-col justify-end p-7"
            >
              {/* Visual Background with Subtle Hover Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-[#18121E]">
                <ArtworkVisual
                  theme={type.imageTheme}
                  overlay={false}
                  className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Editorial Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A060E] via-[#0A060E]/50 to-black/30" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 text-[#FAF7F2]">
                <span className="font-royal text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                  {type.subtitle}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-3">
                  {type.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E7DFD3]/85 font-light leading-relaxed mb-5 line-clamp-3">
                  {type.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#F3D082] group-hover:text-white transition-colors border-t border-[#D4AF37]/25 pt-3.5 w-full justify-between">
                  <span>Plan This Event</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
