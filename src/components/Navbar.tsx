import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface NavbarProps {
  onPlanEventClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onPlanEventClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link spy
      const sections = ['home', 'services', 'work', 'about', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#contact') {
      onPlanEventClick();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E0914]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#08050B]/95 via-[#0A060E]/75 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Zone 1: Distinct Brand Logo & Monogram Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="DH Event & Wedding Planner Home"
          >
            {/* Elegant Royal Monogram Crest */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-gradient-to-br from-[#241530] to-[#120B19] border border-[#D4AF37]/50 group-hover:border-[#D4AF37] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
              <span className="font-royal text-sm sm:text-base font-bold text-[#F3D082] tracking-wider">
                DH
              </span>
            </div>

            {/* Structured 2-line Brand Typography (prevents crowding) */}
            <div className="flex flex-col">
              <span className="font-royal text-xs sm:text-sm lg:text-[15px] font-bold tracking-[0.22em] text-white uppercase group-hover:text-[#F3D082] transition-colors whitespace-nowrap">
                DH EVENT & WEDDING
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
                PLANNER · AHMEDABAD
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links with Proper Spacing & Visual Rhythm */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-xs tracking-[0.18em] uppercase font-medium">
            {BUSINESS_CONFIG.navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1.5 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#F3D082] font-semibold'
                      : 'text-[#D8CEBE] hover:text-[#FAF0CA]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Fallback for medium screens (lg to xl): tighter spacing so it never collides */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4 text-[11px] tracking-[0.14em] uppercase font-medium">
            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#D8CEBE] hover:text-[#F3D082] transition-colors py-1 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Call & Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Direct Phone Quick Link */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="hidden 2xl:inline-flex items-center gap-1.5 text-xs text-[#FAF0CA]/80 hover:text-[#F3D082] transition-colors px-2 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wider">{BUSINESS_CONFIG.phone}</span>
            </a>

            {/* Primary Event Planner Button */}
            <button
              onClick={onPlanEventClick}
              className="hidden sm:inline-flex items-center gap-2 px-4.5 lg:px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-xs transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-[#800E13] via-[#AD2831] to-[#800E13] hover:from-[#951016] text-[#FAF0CA] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:shadow-[0_0_22px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Plan Your Event</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F3D082]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2.5 rounded-xs transition-colors text-[#FAF0CA] hover:bg-white/10 border border-[#D4AF37]/30 bg-[#160E1F]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#F3D082]" /> : <Menu className="w-5 h-5 text-[#F3D082]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bg-[#0E0914]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 shadow-2xl p-6 transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2 text-center max-w-sm mx-auto">
            {BUSINESS_CONFIG.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-3 text-xs tracking-[0.25em] uppercase font-semibold text-[#FAF0CA] hover:text-[#F3D082] border-b border-[#D4AF37]/15 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onPlanEventClick();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#800E13] via-[#AD2831] to-[#800E13] text-[#FAF0CA] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs border border-[#D4AF37]/40 shadow-lg cursor-pointer"
              >
                Plan Your Event
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full py-3 border border-[#D4AF37]/40 text-[#FAF0CA] text-xs font-semibold tracking-[0.18em] uppercase rounded-xs flex items-center justify-center gap-2 hover:bg-[#D4AF37]/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3D082]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
