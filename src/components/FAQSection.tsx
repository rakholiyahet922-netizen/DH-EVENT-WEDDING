import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_CONFIG } from '../data/businessData';

interface FAQSectionProps {
  onAskQuestionClick?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskQuestionClick }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-28 bg-[#120B19] border-b border-[#D4AF37]/20 relative overflow-hidden royal-jaali-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight text-balance">
              Everything You Need to Know Before Planning.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#C4B9A9] font-light leading-relaxed">
              Transparent answers regarding our process, timelines, vendor coordination, and Gujarat coverage.
            </p>
          </div>
        </div>

        {/* Minimalist Royal FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {FAQ_ITEMS.map((item) => {
            const isOpen = Boolean(openItems[item.id]);

            return (
              <div
                key={item.id}
                className="royal-card rounded-xs transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-3 pr-2">
                    {/* Editorial Index Number & Category Pill */}
                    <div className="flex items-center gap-3">
                      <span className="font-royal text-2xl text-[#D4AF37] font-bold">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-royal uppercase tracking-[0.15em] text-[#FAF0CA] font-semibold bg-[#800E13]/60 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Question Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  {/* Minimal Royal Indicator */}
                  <div
                    className={`p-2 rounded-full border shrink-0 transition-colors duration-200 mt-1 ${
                      isOpen
                        ? 'border-[#D4AF37] bg-gradient-to-r from-[#800E13] to-[#AD2831] text-white shadow-md'
                        : 'border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-[#D4AF37]/15 animate-in fade-in-50 duration-200">
                    <p className="text-sm sm:text-base text-[#E7DFD3]/85 font-light leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Query Footnote Box */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181122] border border-[#D4AF37]/30 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#800E13]/30 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3D082] shrink-0 hidden sm:flex">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-white font-medium">
                Have a specific question about your upcoming celebration?
              </h4>
              <p className="text-xs text-[#C4B9A9] mt-0.5 font-light">
                Our team in Nikol, Ahmedabad is happy to answer any questions about dates, venues, or ritual flows.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            {onAskQuestionClick && (
              <button
                onClick={onAskQuestionClick}
                className="flex-1 sm:flex-initial px-5 py-3 bg-gradient-to-r from-[#800E13] to-[#AD2831] hover:from-[#951016] text-[#FAF0CA] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2 border border-[#D4AF37]/40 cursor-pointer shadow-md"
              >
                <span>Ask Our Planners</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F3D082]" />
              </button>
            )}

            <a
              href={BUSINESS_CONFIG.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-3 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/15 text-xs font-semibold tracking-[0.15em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
