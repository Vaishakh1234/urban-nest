import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "../site";
import { services } from "../content";

export function Footer() {
  return (
    <footer className="bg-ink text-on-dark-dim">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              We design calm, functional interiors for homes and workspaces across
              Kerala — from the first drawing to the final handover.
            </p>
            <div className="mt-6 flex gap-2.5">
              <Social href={site.instagram} label="Instagram">
                <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 6.27a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94Zm4.84-6.42a.89.89 0 1 1-1.77 0 .89.89 0 0 1 1.77 0ZM19.5 8.06c-.05-1.18-.32-2.23-1.19-3.09-.86-.86-1.9-1.13-3.09-1.19-1.22-.07-4.88-.07-6.1 0-1.18.05-2.22.32-3.09 1.18-.86.87-1.13 1.91-1.19 3.1-.07 1.22-.07 4.87 0 6.09.06 1.19.33 2.23 1.2 3.1.86.86 1.9 1.13 3.08 1.18 1.22.07 4.88.07 6.1 0 1.19-.05 2.23-.32 3.09-1.19.87-.86 1.14-1.9 1.19-3.09.07-1.22.07-4.87 0-6.09Zm-1.58 7.4a2.5 2.5 0 0 1-1.41 1.41c-.97.39-3.29.3-4.37.3-1.08 0-3.4.08-4.37-.3a2.5 2.5 0 0 1-1.41-1.41c-.39-.98-.3-3.3-.3-4.38 0-1.08-.08-3.4.3-4.37A2.5 2.5 0 0 1 7.77 5.3c.98-.39 3.3-.3 4.37-.3 1.08 0 3.4-.08 4.37.3a2.5 2.5 0 0 1 1.41 1.41c.39.98.3 3.3.3 4.37 0 1.08.09 3.4-.3 4.38Z" />
              </Social>
              <Social href={site.youtube} label="YouTube">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
              </Social>
              <Social href={`mailto:${site.email}`} label="Email">
                <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.9 2 7.1 5.2L19.1 7H4.9Zm14.1 1.7-6.4 4.7a1 1 0 0 1-1.2 0L5 8.7V17h14V8.7Z" />
              </Social>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-on-dark">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-on-dark">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition-colors hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-on-dark">Stay Connected</h3>
            <p className="mt-5 text-sm leading-relaxed">
              Tell us about your project and we&apos;ll get back to you — usually
              the same day.
            </p>
            {/* Navigates to the contact page; the input carries no name so the
                address never lands in the URL. */}
            <form action="/contact" className="mt-5">
              <div className="flex items-center gap-2 rounded-full border border-line-dark py-1.5 pl-5 pr-1.5 transition-colors duration-200 focus-within:border-accent/60">
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Enter your Email Address"
                  className="w-full min-w-0 bg-transparent text-sm text-on-dark placeholder:text-on-dark-dim focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Contact us"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-hover"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M3.5 10.5 10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Serving {site.serviceAreas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer noopener"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line-dark transition-colors hover:border-accent hover:text-accent"
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
