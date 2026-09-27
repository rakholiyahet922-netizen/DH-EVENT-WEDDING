import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

interface ContactFormProps {
  initialEventType?: string;
  initialNotes?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialEventType,
  initialNotes,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    venueLocation: '',
    guestCount: '',
    budget: '',
    visionNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialEventType) {
      setFormData((prev) => ({ ...prev, eventType: initialEventType }));
    }
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, visionNotes: initialNotes }));
    }
  }, [initialEventType, initialNotes]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: 'Wedding',
      eventDate: '',
      venueLocation: '',
      guestCount: '',
      budget: '',
      visionNotes: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 bg-[#0D0911] relative overflow-hidden royal-jaali-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Address, WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-3">
                Event Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-4">
                Let’s Plan Your Celebration.
              </h2>
              <p className="text-[#C4B9A9] text-base font-light leading-relaxed">
                Share your initial plans, date ideas, or thoughts. Our planning team in Nikol, Ahmedabad will review your details and connect with you directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-[#D4AF37]/20">
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 royal-card rounded-xs">
                <div className="p-3 rounded-full bg-[#181122] border border-[#D4AF37]/40 text-[#F3D082] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-royal text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                    Direct Phone & Consultation
                  </span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    className="font-serif text-xl text-white font-medium hover:text-[#F3D082] transition-colors"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                  <p className="text-xs text-[#A89F91] mt-0.5 font-light">
                    Available for wedding queries & studio appointments
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 royal-card rounded-xs">
                <div className="p-3 rounded-full bg-[#181122] border border-[#D4AF37]/40 text-[#F3D082] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-royal text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block">
                    Planning Studio Address
                  </span>
                  <p className="text-xs sm:text-sm text-[#E7DFD3] font-light leading-snug mt-1">
                    {BUSINESS_CONFIG.address.line1}, {BUSINESS_CONFIG.address.line2}, {BUSINESS_CONFIG.address.area}, {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Prefer WhatsApp Card */}
            <div className="p-6 bg-[#0E1A14] text-[#FAF7F2] border border-[#25D366]/30 rounded-xs space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="font-royal text-xs uppercase tracking-[0.2em] text-[#25D366] font-semibold">
                  Prefer WhatsApp?
                </span>
              </div>
              <p className="text-xs text-[#C4B9A9] leading-relaxed font-light">
                Connect instantly with our Ahmedabad team for quick availability checks or to send reference pictures.
              </p>
              <a
                href={BUSINESS_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0A160F] text-xs font-semibold tracking-[0.15em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Event Enquiry Form */}
          <div className="lg:col-span-7 bg-[#16101D] p-6 sm:p-10 border border-[#D4AF37]/25 rounded-xs shadow-2xl">
            {isSubmitted ? (
              <div className="py-14 px-4 text-center space-y-6">
                <div className="w-16 h-16 bg-[#16291C] text-[#25D366] rounded-full mx-auto flex items-center justify-center border border-[#25D366]/40 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    Thank You.
                  </h3>
                  <p className="text-base text-[#C4B9A9] max-w-md mx-auto font-light leading-relaxed">
                    Thank you. We’ve received your event details and will be in touch soon.
                  </p>
                </div>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#1F1628] border border-[#D4AF37]/40 text-[#FAF0CA] text-xs font-semibold tracking-[0.15em] uppercase rounded-xs hover:bg-[#2B1E38] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={BUSINESS_CONFIG.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#25D366] text-[#0A160F] text-xs font-semibold tracking-[0.15em] uppercase rounded-xs flex items-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#D4AF37]/15 pb-4 mb-2">
                  <h3 className="font-serif text-2xl text-white font-medium">
                    Event Enquiry
                  </h3>
                  <p className="text-xs text-[#A89F91] mt-1 font-light">
                    Fill in your details below. Fields marked with * are required.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hetal Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#0D0911] border rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37] ${
                        errors.name ? 'border-red-500' : 'border-[#D4AF37]/25'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#0D0911] border rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37] ${
                        errors.phone ? 'border-red-500' : 'border-[#D4AF37]/25'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                    >
                      <option value="Wedding" className="bg-[#120B19]">Wedding</option>
                      <option value="Engagement" className="bg-[#120B19]">Engagement</option>
                      <option value="Reception" className="bg-[#120B19]">Reception</option>
                      <option value="Birthday" className="bg-[#120B19]">Birthday</option>
                      <option value="Corporate Event" className="bg-[#120B19]">Corporate Event</option>
                      <option value="Private Party" className="bg-[#120B19]">Private Party</option>
                      <option value="Other" className="bg-[#120B19]">Other</option>
                    </select>
                  </div>
                </div>

                {/* Event Date & Venue/Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Estimated Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Venue / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nikol, SG Highway, Ahmedabad"
                      value={formData.venueLocation}
                      onChange={(e) => setFormData({ ...formData, venueLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Number of Guests & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Number of Guests
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 200 - 500 guests"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Flexible / Discuss with team"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Tell us about your vision */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-[#D4AF37] mb-1.5">
                    Tell us about your vision
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share any special preferences, ceremony types, theme ideas, or required services..."
                    value={formData.visionNotes}
                    onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0D0911] border border-[#D4AF37]/25 rounded-xs text-sm text-white placeholder:text-[#6C6374] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#800E13] via-[#A31621] to-[#800E13] hover:from-[#951016] text-[#FAF0CA] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-[0_4px_25px_rgba(128,14,19,0.4)] border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-[#F3D082]" />
                  <span>{isSubmitting ? 'Sending Details...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
