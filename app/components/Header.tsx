"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { nav, site } from "../site";
import { ContactProfileModal } from "./ContactProfileModal";


export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Monitor scroll for subtle shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled
            ? "border-b border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-0.5"
            : "border-b border-stone-200/50 shadow-xs"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between gap-4 sm:h-[84px] lg:h-[88px]">
            {/* Logo Section */}
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="group flex items-center gap-3 rounded-2xl py-1 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Logo imgClassName="h-11 sm:h-13 md:h-14 lg:h-[58px]" />
            </Link>

            {/* Desktop Navigation - Modern Active Pill Capsule */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center justify-center gap-1 rounded-full border border-stone-200/80 bg-stone-50/80 p-1.5 shadow-xs backdrop-blur-xs lg:flex"
            >
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-accent text-white shadow-[0_2px_10px_rgba(101,96,66,0.3)] font-semibold"
                        : "text-stone-600 hover:bg-stone-200/60 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop & Mobile Right Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Direct "Call" Button (Desktop/Tablet) - Opens Instagram Profile Modal */}
              <button
                type="button"
                onClick={() => setCallModalOpen(true)}
                className="hidden xl:inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold text-stone-800 shadow-xs transition-all duration-200 hover:border-accent hover:text-accent hover:bg-stone-50 hover:shadow-sm"
                aria-label="Call Urbannest Interiors options"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call</span>
              </button>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_rgba(101,96,66,0.28)] transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_6px_20px_rgba(101,96,66,0.38)] active:scale-95"
              >
                <span>Get a Quote</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" />
                </svg>
              </Link>

              {/* Quick Call Icon (Mobile Only) - Opens Bottom Sheet */}
              <button
                type="button"
                onClick={() => setCallModalOpen(true)}
                aria-label="Call options"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200/80 bg-stone-50 text-accent transition-colors hover:bg-accent hover:text-white lg:hidden"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>

              {/* Hamburger Button (Mobile Only) */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 lg:hidden ${
                  open
                    ? "border-accent bg-accent text-white shadow-md rotate-90"
                    : "border-stone-200/80 bg-stone-50 text-stone-800 hover:border-accent hover:text-accent"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {open ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="17" x2="20" y2="17" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Instagram Profile Contact Modal & Mobile Bottom Sheet */}
      <ContactProfileModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />

      {/* Mobile Application Navigation Side Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Full Height Right Slide-Over Side Drawer */}
          <div className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-[340px] sm:max-w-[380px] flex-col justify-between bg-[#111113] text-stone-100 shadow-2xl border-l border-stone-800/80 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-stone-800/80 px-6 py-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <Logo dark eager={false} imgClassName="h-9 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-stone-400 hover:border-stone-700 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Notion-Style Minimal Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3">
                Navigation
              </p>
              <nav className="space-y-1">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 ${
                        active
                          ? "bg-stone-800/90 text-white font-semibold"
                          : "text-stone-300 hover:bg-stone-900 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-all ${
                            active ? "bg-accent scale-110" : "bg-stone-700 group-hover:bg-stone-500"
                          }`}
                        />
                        <span className="text-base">{item.label}</span>
                      </div>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${
                          active
                            ? "text-accent translate-x-0.5"
                            : "text-stone-600 group-hover:text-stone-400 group-hover:translate-x-0.5"
                        }`}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  );
                })}
              </nav>

              {/* Pathanamthitta Badge */}
              <div className="mt-8 px-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/80 px-3.5 py-1.5 text-xs text-stone-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Serving Pathanamthitta & Kerala</span>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Bar — ONLY ONE CTA BUTTON */}
            <div className="border-t border-stone-800/80 bg-stone-950/90 p-5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
