import Link from "next/link";
import { Img } from "./Img";
import type { Service } from "../content";

/**
 * @param anchorOnly  set on the services page itself, where linking back to
 *                    /services would be a self-link. There the card becomes a
 *                    plain section with an #id, which is what the Service
 *                    structured data on that page points at.
 */
export function ServiceCard({
  service,
  anchorOnly = false,
}: {
  service: Service;
  anchorOnly?: boolean;
}) {
  const body = (
    <>
      <div className="overflow-hidden rounded-[var(--radius-sm)]">
        <Img
          name={service.image}
          alt={service.imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[240px]"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[0.95rem] font-semibold text-ink">{service.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-body">{service.short}</p>
      </div>
    </>
  );

  const shell =
    "group block overflow-hidden rounded-[18px] border border-line bg-white p-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover";

  if (anchorOnly) {
    return (
      <article id={service.slug} className={`${shell} scroll-mt-28`}>
        {body}
      </article>
    );
  }

  return (
    <Link href={`/services#${service.slug}`} className={shell}>
      {body}
    </Link>
  );
}
