import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { ProcessSection } from './components/ProcessSection';
import { WeddingTypes } from './components/WeddingTypes';
import { WhyDH } from './components/WhyDH';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem, GalleryItem, EventTypeItem } from './data/businessData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [enquiryEventType, setEnquiryEventType] = useState<string>('Wedding');
  const [enquiryNotes, setEnquiryNotes] = useState<string>('');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleInquireFromService = (service: ServiceItem) => {
    setSelectedService(null);
    setEnquiryEventType(service.title.includes('Wedding') ? 'Wedding' : 'Other');
    setEnquiryNotes(`Inquiry for service: ${service.title} (${service.shortDescription})`);
    scrollToContact();
  };

  const handleInquireFromGallery = (item: GalleryItem) => {
    setEnquiryEventType(
      item.category === 'Weddings' ? 'Wedding' :
      item.category === 'Engagements' ? 'Engagement' :
      item.category === 'Birthdays' ? 'Birthday' :
      item.category === 'Corporate Events' ? 'Corporate Event' : 'Private Party'
    );
    setEnquiryNotes(`Inspired by portfolio item: "${item.title}" (${item.highlight})`);
    scrollToContact();
  };

  const handleSelectEventType = (type: EventTypeItem) => {
    setEnquiryEventType(
      type.id === 'weddings' ? 'Wedding' :
      type.id === 'engagements' ? 'Engagement' :
      type.id === 'receptions' ? 'Reception' :
      type.id === 'birthdays' ? 'Birthday' :
      type.id === 'corporate' ? 'Corporate Event' : 'Private Party'
    );
    setEnquiryNotes(`Interested in planning: ${type.title} - ${type.description}`);
    scrollToContact();
  };

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      scrollToContact();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0911] text-[#FAF7F2] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onPlanEventClick={scrollToContact} />

      <main className="flex-1">
        {/* SECTION 1 — Cinematic Hero */}
        <Hero
          onPlanEventClick={scrollToContact}
          onExploreWorkClick={scrollToWork}
        />

        {/* SECTION 2 — Editorial Introduction */}
        <Introduction onDiscoverClick={scrollToServices} />

        {/* SECTION 3 — 6 Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* SECTION 4 — Featured Work & Gallery */}
        <FeaturedWork onInquireItem={handleInquireFromGallery} />

        {/* SECTION 5 — The DH Experience (Dark & Luxurious) */}
        <ProcessSection />

        {/* SECTION 6 — Wedding & Celebration Types */}
        <WeddingTypes onSelectEventType={handleSelectEventType} />

        {/* SECTION 7 — Why DH (Believable Value Propositions) */}
        <WhyDH />

        {/* SECTION 8 — Testimonials Carousel */}
        <Testimonials />

        {/* SECTION 9 — Minimalist Editorial FAQ */}
        <FAQSection onAskQuestionClick={scrollToContact} />

        {/* SECTION 10 — Final Dramatic CTA */}
        <FinalCTA onStartPlanningClick={scrollToContact} />

        {/* SECTION 10 — Comprehensive Event Enquiry Form */}
        <ContactForm
          initialEventType={enquiryEventType}
          initialNotes={enquiryNotes}
        />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileActionBar onEnquireClick={scrollToContact} />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromService}
      />
    </div>
  );
}
