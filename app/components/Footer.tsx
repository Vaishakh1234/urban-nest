import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site, whatsappHref } from "../site";
import { services } from "../content";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1.1fr_1.3fr] lg:gap-14">
          {/* Col 1: Studio Brand & About */}
          <div>
            <Logo dark eager={false} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-dim">
              Urbannest Interiors is a residential interior design & build studio based in Vallicode, Pathanamthitta. One accountable team handling 3D design, custom carpentry, false ceiling, and complete turnkey site execution across Kerala.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Social href={site.instagram} label="Instagram">
                <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm0 6.27a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94Zm4.84-6.42a.89.89 0 1 1-1.77 0 .89.89 0 0 1 1.77 0ZM19.5 8.06c-.05-1.18-.32-2.23-1.19-3.09-.86-.86-1.9-1.13-3.09-1.19-1.22-.07-4.88-.07-6.1 0-1.18.05-2.22.32-3.09 1.18-.86.87-1.13 1.91-1.19 3.1-.07 1.22-.07 4.87 0 6.09.06 1.19.33 2.23 1.2 3.1.86.86 1.9 1.13 3.08 1.18 1.22.07 4.88.07 6.1 0 1.19-.05 2.23-.32 3.09-1.19.87-.86 1.14-1.9 1.19-3.09.07-1.22.07-4.87 0-6.09Zm-1.58 7.4a2.5 2.5 0 0 1-1.41 1.41c-.97.39-3.29.3-4.37.3-1.08 0-3.4.08-4.37-.3a2.5 2.5 0 0 1-1.41-1.41c-.39-.98-.3-3.3-.3-4.38 0-1.08-.08-3.4.3-4.37A2.5 2.5 0 0 1 7.77 5.3c.98-.39 3.3-.3 4.37-.3 1.08 0 3.4-.08 4.37.3a2.5 2.5 0 0 1 1.41 1.41c.39.98.3 3.3.3 4.37 0 1.08.09 3.4-.3 4.38Z" />
              </Social>
              <Social href={site.youtube} label="YouTube">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
              </Social>
              <Social href={whatsappHref} label="WhatsApp">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
              </Social>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-dark">Navigation</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent text-on-dark-dim">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Interior Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-dark">Interior Services</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="transition-colors hover:text-accent text-on-dark-dim">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact & WhatsApp */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-dark">Direct Studio Contact</h3>
            <p className="mt-4 text-xs leading-relaxed text-on-dark-dim">
              {site.address.full}
            </p>
            <div className="mt-4 space-y-2 text-sm text-on-dark-dim">
              {site.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{phone}</span>
                </a>
              ))}
            </div>

            {/* Direct WhatsApp Callout Button */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 flex items-center justify-center gap-2.5 rounded-full bg-accent px-5 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-accent-hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
              </svg>
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-on-dark-dim">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-on-dark-dim">Serving {site.serviceAreas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer noopener" className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-on-dark-dim transition-colors hover:border-accent hover:text-accent">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </a>
  );
}