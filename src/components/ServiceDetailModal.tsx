import React from 'react';
import { X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { ServiceItem, BUSINESS_CONFIG } from '../data/businessData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
    >
      <div className="relative max-w-xl w-full bg-[#160E1F] border border-[#D4AF37]/40 p-6 sm:p-8 rounded-xs shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-200 text-[#FAF7F2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 p-2 rounded-full text-[#C4B9A9] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-royal text-3xl text-[#D4AF37] block mb-1">
            {service.number}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
            {service.title}
          </h3>
          <p className="text-sm text-[#F3D082] font-medium mt-1">
            {service.shortDescription}
          </p>
        </div>

        {/* Extended Description */}
        <p className="text-sm text-[#E7DFD3]/85 font-light leading-relaxed mb-6">
          {service.extendedDescription}
        </p>

        {/* Deliverables Checklist */}
        <div className="bg-[#100917] border border-[#D4AF37]/20 p-4 rounded-xs mb-8">
          <h4 className="font-royal text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] mb-3">
            What is Included:
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF0CA]">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#F3D082] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onInquire(service);
            }}
            className="w-full sm:flex-1 py-3 bg-gradient-to-r from-[#800E13] via-[#A31621] to-[#800E13] hover:from-[#951016] text-[#FAF0CA] text-xs font-semibold tracking-[0.2em] uppercase rounded-xs transition-colors flex items-center justify-center gap-2 border border-[#D4AF37]/40 shadow-lg cursor-pointer"
          >
            <span>Inquire For This Service</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F3D082]" />
          </button>

          <a
            href={BUSINESS_CONFIG.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/15 text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
