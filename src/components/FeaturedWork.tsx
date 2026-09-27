import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/businessData';
import { ArtworkVisual } from './ArtworkVisual';
import { GalleryLightbox } from './GalleryLightbox';

interface FeaturedWorkProps {
  onInquireItem: (item: GalleryItem) => void;
}

const CATEGORIES = [
  'All',
  'Weddings',
  'Engagements',
  'Birthdays',
  'Corporate Events',
  'Private Celebrations',
] as const;

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onInquireItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleNext = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="work" className="py-28 bg-[#120B19] relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight">
              Celebrations We’ve Imagined.
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1B1124] rounded-xs border border-[#D4AF37]/25 shadow-lg">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase rounded-xs transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#800E13] to-[#AD2831] text-[#FAF0CA] border border-[#D4AF37]/50 shadow-md'
                    : 'text-[#C4B9A9] hover:text-[#F3D082] hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {filteredItems.map((item, index) => {
            // Asymmetric editorial spans: alternating marquee spans
            const isMarquee = index % 5 === 0;
            const isMedium = index % 5 === 1 || index % 5 === 2;
            const colSpan = isMarquee
              ? 'md:col-span-8'
              : isMedium
              ? 'md:col-span-4'
              : 'md:col-span-6';

            const heightClass = isMarquee
              ? 'h-80 sm:h-96 md:h-[460px]'
              : isMedium
              ? 'h-80 sm:h-96 md:h-[460px]'
              : 'h-80 sm:h-96 md:h-[400px]';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className={`${colSpan} group relative overflow-hidden rounded-xs border border-[#D4AF37]/20 cursor-pointer shadow-xl hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500`}
              >
                {/* Visual Canvas Container */}
                <div className={`w-full ${heightClass} relative overflow-hidden bg-[#0D0911]`}>
                  <ArtworkVisual
                    theme={item.imageTheme}
                    className="transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-royal uppercase tracking-[0.2em] text-[#FAF0CA] font-semibold bg-[#120B19]/80 backdrop-blur-md px-3 py-1 border border-[#D4AF37]/40 rounded-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A060E] via-[#0A060E]/70 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-end">
                    <span className="font-royal text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                      {item.highlight}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2 text-balance">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#E7DFD3]/85 font-light mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#F3D082] group-hover:text-white transition-colors">
                      <Eye className="w-4 h-4 text-[#D4AF37]" />
                      <span>View Story →</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        onInquireItem={onInquireItem}
      />
    </section>
  );
};
