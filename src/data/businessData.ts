/**
 * Central configuration and content repository for DH EVENT & WEDDING PLANNER.
 * Easily update contact details, services, portfolio, and testimonials here.
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  deliverables: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Engagements' | 'Birthdays' | 'Corporate Events' | 'Private Celebrations';
  location: string;
  description: string;
  imageTheme: 'mandap_royal' | 'reception_grand' | 'ceremony_rituals' | 'evening_lawn' | 'engagement_ring' | 'corporate_gala' | 'birthday_luxe' | 'table_ambiance';
  aspect: 'portrait' | 'landscape' | 'square';
  highlight: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface EventTypeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageTheme: 'mandap_royal' | 'engagement_ring' | 'reception_grand' | 'birthday_luxe' | 'corporate_gala' | 'evening_lawn';
}

export interface ValueProposition {
  id: string;
  title: string;
  summary: string;
  description: string;
  accent: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  coupleOrClient: string;
  eventType: string;
  location: string;
  isDemoNote?: boolean;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_CONFIG = {
  name: "DH EVENT & WEDDING PLANNER",
  tagline: "Creating celebrations that stay with you.",
  heroEyebrow: "DH EVENT & WEDDING PLANNER",
  heroHeading: "Moments Worth\nRemembering.",
  heroSupportingText: "Thoughtfully planned weddings and celebrations, beautifully brought to life across Ahmedabad and Gujarat.",
  
  phone: "+91 96645 56766",
  phoneRaw: "+919664556766",
  email: "contact@dheventplanner.com",
  
  address: {
    line1: "Shop No. 13, Shyamved Residency",
    line2: "Manmohan Cross Rd, near Nr",
    area: "Nikol",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380049",
    full: "Shop No. 13, Shyamved Residency, Manmohan Cross Rd, near Nr, Nikol, Ahmedabad, Gujarat 380049",
  },
  
  whatsapp: {
    number: "919664556766",
    defaultMessage: "Hi DH Event & Wedding Planner, I would like to discuss an event.",
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    }
  },
  
  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "WhatsApp", url: "https://wa.me/919664556766" },
  ],
  
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "wedding-planning",
    number: "01",
    title: "Wedding Planning",
    shortDescription: "From intimate ceremonies to grand celebrations, we help coordinate every important detail.",
    extendedDescription: "Complete conceptualization, timelines, ritual coordination, and day-of management to give families pure peace of mind.",
    deliverables: ["Ceremony & Ritual Flow", "Vendor Briefing & Management", "Run-of-Show Schedules", "Guest Hospitality Flow"]
  },
  {
    id: "event-management",
    number: "02",
    title: "Event Management",
    shortDescription: "Seamless planning and execution for celebrations of every kind.",
    extendedDescription: "End-to-end production logistics, sound & lighting setup, stage design, and flawless on-site coordination.",
    deliverables: ["Logistics & Production", "Technical Audio/Visual", "Safety & Crowd Flow", "On-site Team Direction"]
  },
  {
    id: "wedding-decor",
    number: "03",
    title: "Wedding Décor",
    shortDescription: "Beautiful spaces designed around your theme, mood and vision.",
    extendedDescription: "From bespoke traditional mandaps to contemporary cocktail lounge aesthetics, crafted with floral artistry and architectural lighting.",
    deliverables: ["Mandap & Stage Architecture", "Floral Concept & Execution", "Table Setting & Entrance Portals", "Atmospheric Lighting"]
  },
  {
    id: "venue-vendor",
    number: "04",
    title: "Venue & Vendor Coordination",
    shortDescription: "Helping bring together the right venue, vendors and event details.",
    extendedDescription: "Curating and synchronizing catering teams, photographers, musical artists, and venue managers under one cohesive plan.",
    deliverables: ["Venue Sourcing & Scouting", "Catering Synchronization", "Artist & Entertainment Liaison", "Contract & Schedule Alignment"]
  },
  {
    id: "corporate-social",
    number: "05",
    title: "Corporate & Social Events",
    shortDescription: "Professional event planning for corporate gatherings, parties and special occasions.",
    extendedDescription: "Executive gala dinners, annual conferences, product unveilings, and milestone celebrations executed with polished precision.",
    deliverables: ["Corporate Galas & Summits", "Audio-Visual & Staging", "Branded Stage Backdrop", "VIP Protocol & Hospitality"]
  },
  {
    id: "special-celebrations",
    number: "06",
    title: "Special Celebrations",
    shortDescription: "Birthdays, anniversaries, engagements and celebrations made memorable.",
    deliverables: ["Milestone Birthdays", "Engagement Ceremonies", "Golden Anniversaries", "Festive Themed Gatherings"],
    extendedDescription: "Intimate family gatherings or lively festive soirees designed with personal warmth, creative decor, and heartfelt touches."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "work-1",
    title: "The Regal Twilight Mandap",
    category: "Weddings",
    location: "Ahmedabad Lawns",
    description: "Architectural carved mandap framed with pure white orchids, brass deepams, and warm candlelit pathways.",
    imageTheme: "mandap_royal",
    aspect: "landscape",
    highlight: "Floral Architecture"
  },
  {
    id: "work-2",
    title: "Grand Sangeet & Reception Stage",
    category: "Weddings",
    location: "SG Highway, Ahmedabad",
    description: "Opulent dual-arched floral backdrop with crystal teardrop chandeliers and ambient warm amber lighting.",
    imageTheme: "reception_grand",
    aspect: "portrait",
    highlight: "Sangeet Production"
  },
  {
    id: "work-3",
    title: "Intimate Ring Ceremony Soirée",
    category: "Engagements",
    location: "Bespoke Residence, Ahmedabad",
    description: "A romantic botanical setting with delicate peach flora, glowing fairy-light canopies, and mirrored tables.",
    imageTheme: "engagement_ring",
    aspect: "square",
    highlight: "Intimate Engagement"
  },
  {
    id: "work-4",
    title: "Traditional Sacred Varmala Setup",
    category: "Weddings",
    location: "Heritage Venue, Gujarat",
    description: "Timeless ritual decor featuring cascading marigolds, bell hangings, and handcrafted crimson fabric canopies.",
    imageTheme: "ceremony_rituals",
    aspect: "portrait",
    highlight: "Sacred Rituals"
  },
  {
    id: "work-5",
    title: "Lawn Banquet Tablescape",
    category: "Private Celebrations",
    location: "Nikol, Ahmedabad",
    description: "Curated long-table dining under starlit lighting with botanical runners and personalized place settings.",
    imageTheme: "evening_lawn",
    aspect: "landscape",
    highlight: "Dining Design"
  },
  {
    id: "work-6",
    title: "Silver Jubilee Gala Dinner",
    category: "Corporate Events",
    location: "Ahmedabad City Club",
    description: "Sleek contemporary staging with architectural LED profiling, acoustic balancing, and executive lounge spaces.",
    imageTheme: "corporate_gala",
    aspect: "square",
    highlight: "Corporate Production"
  },
  {
    id: "work-7",
    title: "Milestone Golden Birthday Pavilion",
    category: "Birthdays",
    location: "Private Courtyard, Nikol",
    description: "Elegant champagne and gold balloon cascades paired with fresh eucalyptus, velvet seating, and live acoustic stage.",
    imageTheme: "birthday_luxe",
    aspect: "landscape",
    highlight: "Milestone Celebration"
  },
  {
    id: "work-8",
    title: "Candlelit Garden Cocktail Evening",
    category: "Private Celebrations",
    location: "Palatial Farmhouse, Gujarat",
    description: "Warm glowing lantern clusters, floating lily ponds, and acoustic lounge seating for an unforgettable evening.",
    imageTheme: "table_ambiance",
    aspect: "portrait",
    highlight: "Evening Atmosphere"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "We listen to your vision, preferences and priorities.",
    details: "Every great celebration begins with an unhurried conversation. We learn your family traditions, preferred aesthetics, and what matters most to you."
  },
  {
    step: "02",
    title: "Design",
    description: "We shape the celebration around your style and occasion.",
    details: "We translate your ideas into bespoke floor layouts, stage concepts, color palettes, and vendor curation tailored to your exact setting."
  },
  {
    step: "03",
    title: "Coordinate",
    description: "We bring together the details, vendors and timelines.",
    details: "Behind the scenes, we manage technical vendors, sound, lighting, catering timings, and family ritual cues with surgical precision."
  },
  {
    step: "04",
    title: "Celebrate",
    description: "You enjoy the moment while we handle the details.",
    details: "On the day of your event, you are fully present with loved ones and guests while our on-site team oversees every transition seamlessly."
  }
];

export const EVENT_TYPES: EventTypeItem[] = [
  {
    id: "weddings",
    title: "Wedding Celebrations",
    subtitle: "Sacred & Grand",
    description: "From Haldi and Mehendi to Baraat, Varmala, and Grand Receptions, we craft weddings that honor tradition with effortless contemporary grace.",
    imageTheme: "mandap_royal"
  },
  {
    id: "engagements",
    title: "Engagements",
    subtitle: "Romantic Beginnings",
    description: "Intimate and radiant ring ceremony settings crafted with delicate floral architecture, custom backdrops, and heartfelt hospitality.",
    imageTheme: "engagement_ring"
  },
  {
    id: "receptions",
    title: "Reception",
    subtitle: "Glamour & Elegance",
    description: "Stately stages, grand entry concepts, dramatic lighting, and seamless coordination designed to make an indelible impression.",
    imageTheme: "reception_grand"
  },
  {
    id: "birthdays",
    title: "Birthday Celebrations",
    subtitle: "Milestones & Joy",
    description: "Creative thematic decor, dynamic entertainment, and memorable setups for milestone birthdays and multi-generational celebrations.",
    imageTheme: "birthday_luxe"
  },
  {
    id: "corporate",
    title: "Corporate Events",
    subtitle: "Polished & Punctual",
    description: "Annual meetings, product launches, award nights, and gala dinners delivered with corporate polish and punctual stage management.",
    imageTheme: "corporate_gala"
  },
  {
    id: "private-parties",
    title: "Private Parties",
    subtitle: "Warm & Memorable",
    description: "Anniversaries, family reunions, cocktail evenings, and festive get-togethers where every detail is taken care of with care.",
    imageTheme: "evening_lawn"
  }
];

export const WHY_DH_VALUES: ValueProposition[] = [
  {
    id: "personal-attention",
    title: "Personal Attention",
    summary: "Dedicated focus on your family's distinct vision.",
    description: "We work with a select number of events so our core planning team remains closely accessible to you and your family throughout the entire journey.",
    accent: "Direct Partner Involvement"
  },
  {
    id: "thoughtful-planning",
    title: "Thoughtful Planning",
    summary: "Clear timelines and proactive coordination.",
    description: "From vendor contracts to ritual schedules, we organize every stage beforehand so nothing is rushed or left to chance.",
    accent: "Structured Timelines"
  },
  {
    id: "beautiful-execution",
    title: "Beautiful Execution",
    summary: "Refined aesthetics without visual clutter.",
    description: "We believe in authentic Indian wedding beauty: balanced floral palettes, warm lighting, and purposeful stage designs that photograph beautifully.",
    accent: "Authentic Design"
  },
  {
    id: "stress-free",
    title: "Stress-Free Celebrations",
    summary: "Full on-site management so you can be a guest.",
    description: "Our on-ground coordinators handle the unexpected, synchronize vendors, and guide family members smoothly through every ritual.",
    accent: "Pure Peace of Mind"
  }
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Every detail felt beautifully coordinated. We could actually enjoy our celebration instead of worrying about what was happening behind the scenes.",
    coupleOrClient: "Wedding Celebration",
    eventType: "Mandap & Reception Planning",
    location: "Ahmedabad, Gujarat",
    isDemoNote: true
  },
  {
    id: "t2",
    quote: "From the first meeting, the planning team understood exactly what we wanted for our engagement. The stage decor and lighting were stunning.",
    coupleOrClient: "Engagement Ceremony",
    eventType: "Decor & Event Management",
    location: "Nikol, Ahmedabad",
    isDemoNote: true
  },
  {
    id: "t3",
    quote: "Having an organized coordination team made a tremendous difference for our family. Everything flowed on time without any frantic rushing.",
    coupleOrClient: "Family Celebration",
    eventType: "Full-day Coordination",
    location: "Gujarat",
    isDemoNote: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "When should we begin planning our wedding or celebration with DH?",
    answer: "For grand Gujarati weddings and multi-day celebrations, we recommend beginning conversations 4 to 9 months in advance to secure desirable venues, auspicious dates (muhurat), and preferred dates. For intimate ring ceremonies, birthdays, or corporate events, 4 to 8 weeks is typically sufficient.",
    category: "Timeline & Booking"
  },
  {
    id: "faq-2",
    number: "02",
    question: "Do you handle both wedding décor and complete event coordination?",
    answer: "Yes. We offer both integrated full-service planning (décor, vendor synchronization, timeline flow, and day-of management) as well as standalone design or coordination packages depending on what your family has already arranged.",
    category: "Scope of Services"
  },
  {
    id: "faq-3",
    number: "03",
    question: "Do you coordinate events outside Nikol and across Gujarat?",
    answer: "While our planning studio is based in Nikol, Ahmedabad, our team regularly coordinates weddings and social gatherings across Ahmedabad, Gandhinagar, and throughout Gujarat, including lawn venues, banquet halls, and private residences.",
    category: "Coverage & Locations"
  },
  {
    id: "faq-4",
    number: "04",
    question: "Can we collaborate with our own family vendors or caterers?",
    answer: "Absolutely. Many Gujarati families have trusted caterers, family jewelers, or preferred photographers. We gladly integrate and brief your selected vendors into our master timeline, ensuring seamless coordination on the ground without friction.",
    category: "Vendor Collaboration"
  },
  {
    id: "faq-5",
    number: "05",
    question: "How does the pricing and budgeting process work?",
    answer: "We do not believe in opaque or inflated estimates. During our initial consultation, we discuss your expected scale, guest count, and design vision. We then prepare a structured, transparent scope breakdown tailored to your budget parameters.",
    category: "Budget & Transparency"
  },
  {
    id: "faq-6",
    number: "06",
    question: "What is the role of the DH on-site team on the day of the celebration?",
    answer: "Our lead planners and coordinators remain on-site from initial vendor setup until the final farewell. We manage backstage timing, family ritual cues, guest hospitality flow, and technical audio-visual elements so you and your family can be true guests at your own celebration.",
    category: "Day-of Management"
  }
];

