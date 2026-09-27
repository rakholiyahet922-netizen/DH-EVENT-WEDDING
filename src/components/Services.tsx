import React, { useState } from 'react';
import {
  HeartHandshake,
  CalendarCheck,
  Palette,
  Compass,
  Briefcase,
  Gift,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/businessData';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'wedding-planning':
        return <HeartHandshake className="w-5 h-5 text-[#F3D082]" />;
      case 'event-management':
        return <CalendarCheck className="w-5 h-5 text-[#F3D082]" />;
      case 'wedding-decor':
        return <Palette className="w-5 h-5 text-[#F3D082]" />;
      case 'venue-vendor':
        return <Compass className="w-5 h-5 text-[#F3D082]" />;
      case 'corporate-social':
        return <Briefcase className="w-5 h-5 text-[#F3D082]" />;
      case 'special-celebrations':
      default:
        return <Gift className="w-5 h-5 text-[#F3D082]" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-[#0D0911] relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Decorative subtle texture */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E1020]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
            Services & Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
            Everything Your Celebration Needs.
          </h2>
          <p className="text-[#C4B9A9] text-base sm:text-lg font-light leading-relaxed">
            From the first idea to the final farewell, every detail deserves thoughtful planning.
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => onSelectService(service)}
              className="group relative royal-card p-8 rounded-xs flex flex-col justify-between cursor-pointer"
            >
              {/* Card Top: Number & Minimal Line Icon */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D4AF37]/15">
                  <span className="font-royal text-2xl text-[#D4AF37] font-bold">
                    {service.number}
                  </span>
                  <div className="p-2.5 rounded-full bg-[#181122] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:bg-[#251532] transition-colors shadow-inner">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3 group-hover:text-[#F3D082] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#C4B9A9] font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 pt-2 mb-6 border-t border-[#D4AF37]/10">
                  {service.deliverables.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#FAF0CA]/85 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Action */}
              <div className="pt-4 border-t border-[#D4AF37]/10 flex items-center justify-between text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-white transition-colors">
                <span>Inquire About Service</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3D082] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
