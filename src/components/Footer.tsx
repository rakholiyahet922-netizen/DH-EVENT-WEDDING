import React from 'react';
import { Phone, MapPin, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#08050B] text-[#FAF7F2] border-t border-[#D4AF37]/20 pt-20 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#D4AF37]/15">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-royal text-xl sm:text-2xl text-white font-bold uppercase tracking-[0.2em]">
              {BUSINESS_CONFIG.name}
            </h3>
            <p className="font-serif text-base text-[#F3D082] italic font-light">
              “{BUSINESS_CONFIG.tagline}”
            </p>
            <p className="text-xs text-[#C4B9A9] font-light leading-relaxed max-w-sm">
              Ahmedabad-based wedding and event planning company orchestrating thoughtful ceremonies, luxury decor, and memorable milestone celebrations throughout Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-royal text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-[0.15em] uppercase font-medium">
              {BUSINESS_CONFIG.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="text-[#C4B9A9] hover:text-[#F3D082] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Location & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-royal text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Ahmedabad Studio
            </h4>
            <div className="space-y-3 text-xs text-[#C4B9A9] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {BUSINESS_CONFIG.address.line1},<br />
                  {BUSINESS_CONFIG.address.line2},<br />
                  {BUSINESS_CONFIG.address.area}, {BUSINESS_CONFIG.address.city},<br />
                  {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="font-medium text-white hover:text-[#F3D082] transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="font-royal text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] block mb-2 font-medium">
                Connect
              </span>
              <div className="flex items-center gap-4 text-xs text-[#C4B9A9]">
                {BUSINESS_CONFIG.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F3D082] transition-colors"
                  >
                    {soc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A89F91] font-light gap-4">
          <p>© 2026 DH Event & Wedding Planner. All rights reserved.</p>
          <p className="text-center sm:text-right font-light">
            Crafted for DH Event & Wedding Planner · Nikol, Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
};
