import Link from "next/link";
import { Img, type ImgName } from "./Img";
import { Container } from "./ui";

/**
 * Inner-page header: rounded image band with a breadcrumb and the page title
 * overlaid on a dark scrim — matching the reference's inner-page pattern.
 */
export function PageHero({
  title,
  crumb,
  image,
  imageAlt,
}: {
  title: string;
  crumb: string;
  image: ImgName;
  imageAlt: string;
}) {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[20px]">
        <Img
          name={image}
          alt={imageAlt}
          sizes="(max-width: 1240px) 100vw, 1240px"
          priority
          className="h-[280px] w-full object-cover sm:h-[360px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        <Container className="absolute inset-x-0 bottom-0 pb-8 sm:pb-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-white/70">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-white">{crumb}</li>
            </ol>
          </nav>
          <h1 className="h-display mt-3 text-4xl text-white sm:text-5xl">{title}</h1>
        </Container>
      </div>
    </section>
  );
}
