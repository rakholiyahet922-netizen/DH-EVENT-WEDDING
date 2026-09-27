import React from 'react';
import { ArrowRight, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface IntroductionProps {
  onDiscoverClick: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onDiscoverClick }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#120B19] border-b border-[#D4AF37]/20 relative overflow-hidden royal-jaali-bg">
      {/* Subtle luxury ambient glows */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#800E13]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6">
            <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-4">
              The Planning Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.18] font-normal text-balance">
              Your vision.<br />
              <span className="italic gold-text-shimmer font-serif">Our planning.</span><br />
              A celebration you’ll remember.
            </h2>
          </div>

          {/* Right Column: Editorial Paragraph & Brand Values */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[#E7DFD3] text-base sm:text-lg leading-relaxed font-light">
              At <strong className="font-semibold text-white font-serif">{BUSINESS_CONFIG.name}</strong>, we believe every wedding and celebration is a sacred milestone of family, love, and community. We transform your concepts into beautifully coordinated occasions—managing logistics, venue flow, and vendor alignments with calm precision.
            </p>
            <p className="text-[#C4B9A9] text-sm sm:text-base leading-relaxed font-light">
              Based in Nikol, Ahmedabad, our team orchestrates celebrations throughout Gujarat. Whether you envision an intimate family gathering or a lavish multiday Gujarati wedding, our focus remains unwavering: taking care of every operational detail so you and your loved ones can remain truly present in the moment.
            </p>

            {/* Trust markers in luxury glass tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/20">
              <div className="p-3 bg-[#1B1124] rounded-xs border border-[#D4AF37]/15">
                <span className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold block">Location</span>
                <span className="text-xs text-[#FAF0CA] font-medium">Nikol, Ahmedabad</span>
              </div>
              <div className="p-3 bg-[#1B1124] rounded-xs border border-[#D4AF37]/15">
                <span className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold block">Coverage</span>
                <span className="text-xs text-[#FAF0CA] font-medium">Ahmedabad & Gujarat</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 bg-[#1B1124] rounded-xs border border-[#D4AF37]/15">
                <span className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold block">Focus</span>
                <span className="text-xs text-[#FAF0CA] font-medium">Weddings & Celebrations</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onDiscoverClick}
                className="group inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#F3D082] hover:text-white transition-colors cursor-pointer"
              >
                <span>Discover DH Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
