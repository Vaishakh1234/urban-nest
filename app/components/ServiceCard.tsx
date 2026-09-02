import Link from "next/link";
import { Img } from "./Img";
import type { Service } from "../content";

/**
 * Service card from the reference: white card with a hairline border, the
 * photo inset with padding and its own radius, and a centred title below.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href="/services"
      className="group block rounded-[18px] border border-line bg-white p-2.5 transition-transform duration-200 ease-out hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-[12px]">
        <Img
          name={service.image}
          alt={service.imageAlt}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="py-3.5 text-center text-[0.95rem] font-medium text-ink">
        {service.title}
      </p>
    </Link>
  );
}
