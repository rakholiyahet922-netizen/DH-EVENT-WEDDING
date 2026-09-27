import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface MobileActionBarProps {
  onEnquireClick: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onEnquireClick }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0911]/95 backdrop-blur-xl border-t border-[#D4AF37]/30 py-2.5 px-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#1A1124] hover:bg-[#281838] text-white rounded-xs border border-[#D4AF37]/25 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#F3D082]" />
          <span className="text-[10px] font-royal uppercase font-semibold tracking-wider text-[#FAF0CA]">
            Call
          </span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={BUSINESS_CONFIG.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-[#0E1E15] hover:bg-[#153022] text-white rounded-xs border border-[#25D366]/40 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-royal uppercase font-semibold tracking-wider text-[#25D366]">
            WhatsApp
          </span>
        </a>

        {/* Enquire Action */}
        <button
          onClick={onEnquireClick}
          className="flex flex-col items-center justify-center gap-1 py-1.5 px-1 bg-gradient-to-r from-[#800E13] to-[#AD2831] hover:from-[#951016] text-[#FAF0CA] rounded-xs shadow-md border border-[#D4AF37]/40 active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#F3D082]" />
          <span className="text-[10px] font-royal uppercase font-semibold tracking-wider text-white">
            Enquire
          </span>
        </button>
      </div>
    </aside>
  );
};
