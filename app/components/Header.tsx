"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui";
import { nav, site } from "../site";

/**
 * Sticky glass-white bar in the site's design language: logo on its accent
 * tile at left, nav centred with a dot marking the active page (echoing the
 * section chips), and the shared accent CTA at right.
 */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="grid h-[68px] grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-[76px]">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="rounded-xl transition-transform duration-200 ease-out hover:scale-[1.02]"
          >
            <Logo />
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
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
                  className={`relative text-sm transition-colors duration-200 hover:text-ink ${
                    active ? "font-medium text-ink" : "text-text-body"
                  }`}
                >
                  {item.label}
                  {/* Active-page dot — the same mark the section chips carry. */}
                  <span
                    aria-hidden
                    className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="col-start-3 flex items-center gap-2">
            {/* Same shared Button as every other CTA, so colour and design stay matched. */}
            <div className="hidden sm:block">
              <Button href="/contact">Get a Quote</Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
                {open ? (
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M2 5h14M2 9h14M2 13h14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <nav className="flex flex-col border-t border-line px-1 pt-2 lg:hidden">
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
                  className={`flex items-center gap-2.5 border-b border-line/70 py-3.5 text-sm last:border-0 ${
                    active ? "font-medium text-ink" : "text-text-body"
                  }`}
                >
                  {active ? (
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                  ) : null}
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="my-3 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-pill"
            >
              Get a Quote
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
