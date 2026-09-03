"use client";

import { useEffect } from "react";
import { site, primaryPhoneHref, whatsappHref } from "../site";

interface ContactProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactProfileModal({ isOpen, onClose }: ContactProfileModalProps) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Dark Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-stone-950/65 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card / Mobile Bottom Sheet */}
      <div
        className="relative z-[101] w-full max-w-none sm:max-w-[420px] overflow-hidden rounded-t-[28px] sm:rounded-[24px] bg-white p-6 sm:p-7 shadow-2xl border border-stone-200/80 animate-slide-up transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Mobile Pull Indicator Handle */}
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-200 sm:hidden" />

        {/* Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header Title & Subtitle */}
        <div className="pr-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Direct Studio Contact
          </div>
          <h2 id="contact-modal-title" className="text-xl font-bold text-ink tracking-tight">
            Connect with Urbannest
          </h2>
          <p className="mt-1.5 text-xs text-text-body leading-relaxed">
            Reach out directly for project estimates, floor plan consultations, or site visits in Pathanamthitta & Kerala.
          </p>
        </div>

        {/* Primary Hotline Badge */}
        <div className="mt-5 rounded-2xl border border-stone-200/80 bg-stone-50/80 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-xs">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-stone-500 uppercase tracking-wider">Primary Hotline</p>
              <p className="text-sm font-semibold text-ink">{site.phones[0]}</p>
            </div>
          </div>
          <span className="rounded-md bg-stone-200/70 px-2 py-0.5 text-[10px] font-medium text-stone-700">
            Open 24/7
          </span>
        </div>

        {/* Call & WhatsApp Buttons in a Single Row */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={primaryPhoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white py-3.5 px-4 text-xs font-bold text-ink shadow-xs transition-all hover:bg-stone-100 hover:border-stone-400 active:scale-95"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="text-accent">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Us</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 px-4 text-xs font-bold text-white shadow-md transition-all hover:bg-accent-hover active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
