import React from 'react';

export interface VisualProps {
  theme: 'mandap_royal' | 'reception_grand' | 'ceremony_rituals' | 'evening_lawn' | 'engagement_ring' | 'corporate_gala' | 'birthday_luxe' | 'table_ambiance';
  className?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  overlay?: boolean;
}

export const ArtworkVisual: React.FC<VisualProps> = ({
  theme,
  className = '',
  aspect = 'landscape',
  overlay = true,
}) => {
  // Render bespoke high-end Indian wedding architectural and celebratory visual art
  const renderVisual = () => {
    switch (theme) {
      case 'mandap_royal':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="skyMandap" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E1428" />
                <stop offset="50%" stopColor="#351B2E" />
                <stop offset="85%" stopColor="#5E2632" />
                <stop offset="100%" stopColor="#8A4234" />
              </linearGradient>
              <radialGradient id="mandapGlow" cx="50%" cy="65%" r="45%">
                <stop offset="0%" stopColor="#F5D084" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#E5A642" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#B34B36" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#1E1428" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="goldPillar" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#875E26" />
                <stop offset="40%" stopColor="#E4BA68" />
                <stop offset="65%" stopColor="#FDEBC2" />
                <stop offset="100%" stopColor="#9C6F30" />
              </linearGradient>
              <linearGradient id="floralCream" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFDF7" />
                <stop offset="100%" stopColor="#E2CEB1" />
              </linearGradient>
              <linearGradient id="roseBlush" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F9D4D8" />
                <stop offset="100%" stopColor="#C95F6F" />
              </linearGradient>
            </defs>

            {/* Twilight Lawn Sky */}
            <rect width="800" height="600" fill="url(#skyMandap)" />

            {/* Glowing Mandap Aura */}
            <rect width="800" height="600" fill="url(#mandapGlow)" />

            {/* Distant Royal Palms & Garden Silhouettes */}
            <path d="M0 480 Q120 450 240 470 T480 460 T720 475 T800 465 L800 600 L0 600 Z" fill="#140E1B" />
            <path d="M50 490 Q70 410 100 490 M90 495 Q130 380 150 495 M720 480 Q760 390 790 480" stroke="#1C1224" strokeWidth="18" strokeLinecap="round" opacity="0.6" />

            {/* Mandap Base Stage */}
            <path d="M120 490 L680 490 L740 560 L60 560 Z" fill="#2E1A29" stroke="#E4BA68" strokeWidth="1.5" />
            <path d="M160 505 L640 505" stroke="#E4BA68" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

            {/* Sacred Mandap Pillars (Bespoke Carved Jali Look) */}
            <rect x="220" y="240" width="28" height="250" rx="3" fill="url(#goldPillar)" />
            <rect x="552" y="240" width="28" height="250" rx="3" fill="url(#goldPillar)" />
            <rect x="290" y="270" width="20" height="220" rx="2" fill="url(#goldPillar)" opacity="0.85" />
            <rect x="490" y="270" width="20" height="220" rx="2" fill="url(#goldPillar)" opacity="0.85" />

            {/* Ornate Indian Mandap Arch & Dome */}
            <path d="M200 240 C200 240 320 160 400 160 C480 160 600 240 600 240 L580 255 C580 255 470 185 400 185 C330 185 220 255 220 255 Z" fill="url(#goldPillar)" />
            <path d="M360 160 C360 120 400 90 400 90 C400 90 440 120 440 160 Z" fill="url(#goldPillar)" />
            {/* Kalash on Peak */}
            <circle cx="400" cy="85" r="9" fill="#FDEBC2" stroke="#875E26" strokeWidth="2" />
            <path d="M400 70 L400 80" stroke="#FDEBC2" strokeWidth="3" />

            {/* Cascading Floral Canopy (Orchids, Roses, Jasmine) */}
            <path d="M190 235 Q295 210 400 220 Q505 210 610 235" stroke="url(#floralCream)" strokeWidth="26" strokeLinecap="round" />
            <path d="M210 248 Q305 228 400 235 Q495 228 590 248" stroke="url(#roseBlush)" strokeWidth="18" strokeLinecap="round" />
            
            {/* Hanging Floral Garlands & Chandeliers */}
            <g opacity="0.85">
              <line x1="260" y1="240" x2="260" y2="330" stroke="#FFFDF7" strokeWidth="3" strokeDasharray="3 5" />
              <circle cx="260" cy="336" r="5" fill="#E5A642" />
              <line x1="330" y1="220" x2="330" y2="300" stroke="#FFFDF7" strokeWidth="3" strokeDasharray="3 5" />
              <circle cx="330" cy="306" r="5" fill="#E5A642" />
              <line x1="400" y1="215" x2="400" y2="360" stroke="#FDEBC2" strokeWidth="2" />
              {/* Grand Crystal Chandelier */}
              <circle cx="400" cy="365" r="16" fill="#FDEBC2" fillOpacity="0.8" />
              <circle cx="400" cy="365" r="32" fill="#F5D084" fillOpacity="0.25" />
              <line x1="470" y1="220" x2="470" y2="300" stroke="#FFFDF7" strokeWidth="3" strokeDasharray="3 5" />
              <circle cx="470" cy="306" r="5" fill="#E5A642" />
              <line x1="540" y1="240" x2="540" y2="330" stroke="#FFFDF7" strokeWidth="3" strokeDasharray="3 5" />
              <circle cx="540" cy="336" r="5" fill="#E5A642" />
            </g>

            {/* Sacred Havankund / Diya Glow on Stage */}
            <rect x="365" y="470" width="70" height="22" rx="2" fill="#7C3B24" stroke="#E4BA68" strokeWidth="1.5" />
            <circle cx="400" cy="460" r="14" fill="#FDEBC2" opacity="0.9" />
            <circle cx="400" cy="460" r="45" fill="#F59E0B" opacity="0.35" />

            {/* Candlelit Aisle Deepams */}
            <circle cx="160" cy="535" r="8" fill="#FDEBC2" />
            <circle cx="160" cy="535" r="22" fill="#F59E0B" opacity="0.35" />
            <circle cx="640" cy="535" r="8" fill="#FDEBC2" />
            <circle cx="640" cy="535" r="22" fill="#F59E0B" opacity="0.35" />
            <circle cx="280" cy="550" r="6" fill="#FDEBC2" />
            <circle cx="280" cy="550" r="18" fill="#F59E0B" opacity="0.3" />
            <circle cx="520" cy="550" r="6" fill="#FDEBC2" />
            <circle cx="520" cy="550" r="18" fill="#F59E0B" opacity="0.3" />

            {/* Warm Starlight Sparkles */}
            <circle cx="140" cy="110" r="2" fill="#FFFDF7" opacity="0.7" />
            <circle cx="220" cy="80" r="1.5" fill="#FFFDF7" opacity="0.8" />
            <circle cx="680" cy="95" r="2.5" fill="#FFFDF7" opacity="0.6" />
            <circle cx="600" cy="60" r="1.5" fill="#FFFDF7" opacity="0.8" />
            <circle cx="400" cy="40" r="2" fill="#FFFDF7" opacity="0.9" />
          </svg>
        );

      case 'reception_grand':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgReception" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14111E" />
                <stop offset="50%" stopColor="#241B2D" />
                <stop offset="100%" stopColor="#3C212E" />
              </linearGradient>
              <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B3873D" />
                <stop offset="50%" stopColor="#F5DC9C" />
                <stop offset="100%" stopColor="#8C5C21" />
              </linearGradient>
              <radialGradient id="stageChandelierGlow" cx="50%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#FEEBC5" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#E9B969" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#14111E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="600" fill="url(#bgReception)" />
            <rect width="800" height="600" fill="url(#stageChandelierGlow)" />

            {/* Backlit Sculptural Arches */}
            <path d="M150 480 C150 210 260 140 400 140 C540 140 650 210 650 480" stroke="url(#goldRibbon)" strokeWidth="6" fill="none" />
            <path d="M220 480 C220 260 300 190 400 190 C500 190 580 260 580 480" stroke="url(#goldRibbon)" strokeWidth="3" strokeDasharray="8 6" fill="none" opacity="0.7" />

            {/* Lush Cascading Floral Arches */}
            <path d="M130 480 Q250 160 400 170 Q550 160 670 480" stroke="#FFF7ED" strokeWidth="28" strokeLinecap="round" opacity="0.95" />
            <path d="M140 460 Q260 180 400 185 Q540 180 660 460" stroke="#DDA8B1" strokeWidth="18" strokeLinecap="round" opacity="0.8" />

            {/* Grand Chandelier Multi-Tiers */}
            <circle cx="400" cy="190" r="28" fill="#FEEBC5" />
            <circle cx="400" cy="190" r="70" fill="#F6C56F" opacity="0.25" />
            <line x1="400" y1="0" x2="400" y2="170" stroke="#C5A059" strokeWidth="2.5" />
            {/* Crystal strings */}
            <path d="M370 190 L380 240 M400 190 L400 255 M430 190 L420 240" stroke="#FFF7ED" strokeWidth="2.5" strokeDasharray="3 3" />
            <circle cx="400" cy="260" r="5" fill="#FEEBC5" />

            {/* Royal Velvet Stage Sofa / Lounge */}
            <rect x="310" y="420" width="180" height="45" rx="8" fill="#751829" stroke="#B3873D" strokeWidth="2" />
            <path d="M300 410 C300 380 340 375 400 375 C460 375 500 380 500 410" fill="#621422" stroke="#B3873D" strokeWidth="2" />

            {/* Floor Lighting & Reflections */}
            <rect x="0" y="475" width="800" height="125" fill="#120D17" />
            <ellipse cx="400" cy="485" rx="280" ry="25" fill="#F6C56F" opacity="0.2" />
          </svg>
        );

      case 'ceremony_rituals':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgRitual" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#250E14" />
                <stop offset="60%" stopColor="#45141D" />
                <stop offset="100%" stopColor="#1E0B10" />
              </linearGradient>
              <radialGradient id="flameGlow" cx="50%" cy="52%" r="40%">
                <stop offset="0%" stopColor="#FFF2B8" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#B91C1C" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#250E14" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="600" height="800" fill="url(#bgRitual)" />
            <rect width="600" height="800" fill="url(#flameGlow)" />

            {/* Brass Urli & Diya Basin */}
            <ellipse cx="300" cy="540" rx="190" ry="55" fill="#6E4413" stroke="#E5A642" strokeWidth="4" />
            <ellipse cx="300" cy="535" rx="180" ry="48" fill="#3D1D09" />

            {/* Floating Crimson Petals & Orange Marigolds */}
            <circle cx="230" cy="530" r="14" fill="#EA580C" />
            <circle cx="260" cy="545" r="12" fill="#F59E0B" />
            <circle cx="340" cy="540" r="15" fill="#EA580C" />
            <circle cx="370" cy="525" r="13" fill="#F59E0B" />
            <circle cx="300" cy="550" r="11" fill="#DC2626" />
            <circle cx="210" cy="525" r="8" fill="#DC2626" />
            <circle cx="390" cy="535" r="9" fill="#DC2626" />

            {/* Center Sacred Diya Lamp */}
            <path d="M275 510 C275 480 325 480 325 510 Z" fill="#E5A642" stroke="#FFF0B3" strokeWidth="1.5" />
            {/* Luminous Flame */}
            <path d="M300 440 C285 470 292 490 300 495 C308 490 315 470 300 440 Z" fill="#FFFBEB" />
            <circle cx="300" cy="470" r="18" fill="#F59E0B" opacity="0.75" />
            <circle cx="300" cy="470" r="48" fill="#F59E0B" opacity="0.3" />

            {/* Elegant Silk Drapes & Garland Borders */}
            <path d="M0 0 Q150 120 300 40 Q450 120 600 0" stroke="#7B2433" strokeWidth="48" strokeLinecap="round" opacity="0.85" />
            <path d="M0 20 Q150 140 300 60 Q450 140 600 20" stroke="#C5A059" strokeWidth="6" strokeDasharray="8 6" />
            {/* Hanging Bells & Jasmine Strings */}
            <line x1="120" y1="70" x2="120" y2="280" stroke="#FFFBEB" strokeWidth="3" strokeDasharray="4 6" />
            <circle cx="120" cy="290" r="9" fill="#E5A642" />
            <line x1="480" y1="70" x2="480" y2="280" stroke="#FFFBEB" strokeWidth="3" strokeDasharray="4 6" />
            <circle cx="480" cy="290" r="9" fill="#E5A642" />
          </svg>
        );

      case 'evening_lawn':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgLawn" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B131E" />
                <stop offset="60%" stopColor="#122426" />
                <stop offset="100%" stopColor="#1E3127" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#bgLawn)" />

            {/* Glowing Fairy Light Canopy */}
            <g opacity="0.85">
              <path d="M0 120 Q200 170 400 130 Q600 170 800 120" stroke="#FDE68A" strokeWidth="1.5" />
              <path d="M0 160 Q200 210 400 170 Q600 210 800 160" stroke="#FDE68A" strokeWidth="1.5" />
              <path d="M0 200 Q200 250 400 210 Q600 250 800 200" stroke="#FDE68A" strokeWidth="1.5" />
              {/* Fairy Bulbs */}
              {[40, 90, 150, 220, 290, 360, 440, 520, 590, 670, 740].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={140 + (i % 3) * 35} r="3" fill="#FFFBEB" />
                  <circle cx={x} cy={140 + (i % 3) * 35} r="10" fill="#F59E0B" opacity="0.4" />
                </g>
              ))}
            </g>

            {/* Banquet Long Tables */}
            <path d="M120 460 L680 460 L740 550 L60 550 Z" fill="#F3EAD8" opacity="0.9" />
            <path d="M140 475 L660 475" stroke="#2D5A43" strokeWidth="12" strokeLinecap="round" />
            {/* Candle Clusters */}
            {[200, 320, 440, 560].map((x, i) => (
              <g key={i}>
                <rect x={x - 4} y="440" width="8" height="22" fill="#FFFDF7" />
                <circle cx={x} cy="434" r="3.5" fill="#FBBF24" />
                <circle cx={x} cy="434" r="12" fill="#FBBF24" opacity="0.45" />
              </g>
            ))}

            {/* Silhouetted Trees & Lawn Ground */}
            <path d="M0 520 L800 520 L800 600 L0 600 Z" fill="#0E1E17" />
          </svg>
        );

      case 'engagement_ring':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ringBg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4A1822" />
                <stop offset="60%" stopColor="#2A0B12" />
                <stop offset="100%" stopColor="#140407" />
              </radialGradient>
              <linearGradient id="goldBand" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5A642" />
                <stop offset="50%" stopColor="#FFF2B8" />
                <stop offset="100%" stopColor="#9C6B1C" />
              </linearGradient>
            </defs>
            <rect width="600" height="600" fill="url(#ringBg)" />

            {/* Soft Botanical Velvet Shadows */}
            <circle cx="300" cy="300" r="180" fill="#380F18" stroke="#C5A059" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

            {/* Interlocking Golden Bands */}
            <circle cx="270" cy="290" r="85" stroke="url(#goldBand)" strokeWidth="12" fill="none" />
            <circle cx="340" cy="310" r="85" stroke="url(#goldBand)" strokeWidth="12" fill="none" />

            {/* Brilliant Solitaire Highlight */}
            <circle cx="230" cy="230" r="9" fill="#FFFFFF" />
            <circle cx="230" cy="230" r="28" fill="#FDE68A" opacity="0.65" />
            <path d="M230 205 L230 255 M205 230 L255 230" stroke="#FFFFFF" strokeWidth="2.5" />

            {/* Floating Warm Bokeh Particles */}
            <circle cx="160" cy="140" r="30" fill="#E5A642" opacity="0.12" />
            <circle cx="440" cy="420" r="45" fill="#E5A642" opacity="0.1" />
            <circle cx="460" cy="180" r="20" fill="#FFFFFF" opacity="0.15" />
          </svg>
        );

      case 'corporate_gala':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgGala" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="60%" stopColor="#1C2541" />
                <stop offset="100%" stopColor="#080C1A" />
              </linearGradient>
            </defs>
            <rect width="600" height="600" fill="url(#bgGala)" />
            {/* Architectural Beams of Light */}
            <polygon points="100,0 220,0 350,600 150,600" fill="#3A86FF" opacity="0.12" />
            <polygon points="500,0 380,0 250,600 450,600" fill="#C5A059" opacity="0.18" />
            {/* Modern Staging Podium */}
            <path d="M120 440 L480 440 L520 540 L80 540 Z" fill="#111B35" stroke="#C5A059" strokeWidth="2" />
            <line x1="160" y1="460" x2="440" y2="460" stroke="#60A5FA" strokeWidth="3" opacity="0.8" />
            {/* Award Plaque / Silhouette */}
            <rect x="270" y="360" width="60" height="75" rx="3" fill="#E5A642" stroke="#FFF" strokeWidth="1" />
            <circle cx="300" cy="350" r="16" fill="#FDE68A" />
          </svg>
        );

      case 'birthday_luxe':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgBirthday" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22111E" />
                <stop offset="50%" stopColor="#3B1828" />
                <stop offset="100%" stopColor="#1A0D15" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#bgBirthday)" />
            {/* Cascading Golden & Champagne Organic Balloon Arch */}
            <g opacity="0.9">
              {[
                { cx: 200, cy: 380, r: 42, fill: '#E5A642' },
                { cx: 240, cy: 320, r: 48, fill: '#FDE68A' },
                { cx: 280, cy: 260, r: 52, fill: '#C5A059' },
                { cx: 340, cy: 220, r: 56, fill: '#FDE68A' },
                { cx: 420, cy: 200, r: 54, fill: '#E5A642' },
                { cx: 500, cy: 230, r: 50, fill: '#FDE68A' },
                { cx: 560, cy: 280, r: 48, fill: '#C5A059' },
                { cx: 600, cy: 350, r: 44, fill: '#E5A642' },
              ].map((b, i) => (
                <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.fill} stroke="#FFF" strokeWidth="0.5" opacity="0.9" />
              ))}
            </g>
            {/* Center Cake Pedestal & Ambient Warm Glow */}
            <rect x="360" y="380" width="80" height="120" rx="4" fill="#5C2538" stroke="#E5A642" strokeWidth="2" />
            <circle cx="400" cy="350" r="12" fill="#FBBF24" />
            <circle cx="400" cy="350" r="40" fill="#F59E0B" opacity="0.3" />
          </svg>
        );

      case 'table_ambiance':
      default:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgTable" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#121814" />
                <stop offset="60%" stopColor="#1E2A22" />
                <stop offset="100%" stopColor="#0D1310" />
              </linearGradient>
            </defs>
            <rect width="600" height="800" fill="url(#bgTable)" />
            {/* Hanging Lanterns & Warm Ambience */}
            <line x1="200" y1="0" x2="200" y2="320" stroke="#C5A059" strokeWidth="2" />
            <rect x="175" y="320" width="50" height="75" rx="6" fill="#2E3D33" stroke="#E5A642" strokeWidth="2.5" />
            <circle cx="200" cy="355" r="14" fill="#FDE68A" />
            <circle cx="200" cy="355" r="45" fill="#F59E0B" opacity="0.35" />

            <line x1="420" y1="0" x2="420" y2="240" stroke="#C5A059" strokeWidth="2" />
            <rect x="395" y="240" width="50" height="75" rx="6" fill="#2E3D33" stroke="#E5A642" strokeWidth="2.5" />
            <circle cx="420" cy="275" r="14" fill="#FDE68A" />
            <circle cx="420" cy="275" r="45" fill="#F59E0B" opacity="0.35" />

            {/* Botanical Foliage & Table */}
            <path d="M0 640 L600 640 L600 800 L0 800 Z" fill="#1A261F" />
            <ellipse cx="300" cy="670" rx="140" ry="25" fill="#E5A642" opacity="0.25" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      {renderVisual()}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
