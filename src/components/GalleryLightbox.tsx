import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { GalleryItem, BUSINESS_CONFIG } from '../data/businessData';
import { ArtworkVisual } from './ArtworkVisual';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onInquireItem: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
  onInquireItem,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF0CA] transition-colors border border-[#D4AF37]/30 cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-[#F3D082] transition-colors border border-[#D4AF37]/30 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-black/90 text-[#F3D082] transition-colors border border-[#D4AF37]/30 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content */}
      <div className="relative max-w-5xl w-full max-h-[92vh] overflow-hidden bg-[#100A17] rounded-xs border border-[#D4AF37]/40 flex flex-col md:flex-row shadow-[0_0_60px_rgba(0,0,0,0.9)]">
        {/* Left Side Visual (Responsive Artwork) */}
        <div className="w-full md:w-3/5 h-72 sm:h-96 md:h-[540px] relative overflow-hidden bg-black flex items-center justify-center">
          <ArtworkVisual theme={item.imageTheme} overlay={false} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-[#120B19]/85 backdrop-blur-md px-3.5 py-1 text-[11px] font-royal uppercase tracking-wider text-[#F3D082] font-semibold border border-[#D4AF37]/40 rounded-xs">
            {item.category}
          </div>
        </div>

        {/* Right Side Editorial Story */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-[#FAF7F2] bg-[#160E1F] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-royal uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F3D082]" />
              <span>{item.highlight}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
              {item.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-[#C4B9A9] mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{item.location}</span>
              <span>·</span>
              <span>{BUSINESS_CONFIG.name}</span>
            </div>

            <div className="border-t border-[#D4AF37]/20 pt-4 mb-6">
              <p className="text-sm text-[#E7DFD3]/90 leading-relaxed font-light mb-4">
                {item.description}
              </p>
              <p className="text-xs text-[#A89F91] italic font-serif">
                Thoughtfully conceived decor and coordination by our Ahmedabad planning studio.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => {
                onClose();
                onInquireItem(item);
              }}
              className="flex-1 py-3 bg-gradient-to-r from-[#800E13] via-[#A31621] to-[#800E13] hover:from-[#951016] text-[#FAF0CA] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-colors text-center border border-[#D4AF37]/40 shadow-md cursor-pointer"
            >
              Plan Similar Event
            </button>
            <a
              href={BUSINESS_CONFIG.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366]/15 text-xs font-semibold tracking-widest uppercase rounded-xs transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
