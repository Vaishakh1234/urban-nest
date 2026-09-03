import Link from "next/link";
import { Img, type ImgName } from "./Img";
import { Container } from "./ui";

export function PageHero({
  title,
  crumb,
  image,
  imageAlt,
  subtitle,
}: {
  title: string;
  crumb: string;
  image: ImgName;
  imageAlt: string;
  subtitle?: string;
}) {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px]">
        <Img
          name={image}
          alt={imageAlt}
          sizes="100vw"
          priority
          className="h-[min(72vh,680px)] min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <Container className="pb-10 sm:pb-14 lg:pb-16">
            <div className="max-w-3xl reveal">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs font-medium text-white/90">
                  <li>
                    <Link href="/" className="transition-colors hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li className="text-white font-semibold">{crumb}</li>
                </ol>
              </nav>

              <h1 className="h-display mt-3 text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem] leading-[1.08]">
                {title}
              </h1>

              {subtitle && (
                <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}