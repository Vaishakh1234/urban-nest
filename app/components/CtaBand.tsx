import { Img } from "./Img";
import { Button, Container } from "./ui";

export function CtaBand({ title = "Design Your Space With Urbannest", intro = "Share your floor plan and we'll come back with a layout, a 3D walkthrough and a clear, itemised quote — no obligation.", cta = "Book Appointment" }: { title?: string; intro?: string; cta?: string }) {
  return (
    <section className="px-3 pb-10 sm:px-4 sm:pb-14">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[20px]">
        <Img name="kitchen-dining-combo" alt="Bright dining and modular kitchen interior designed by Urbannest" sizes="(max-width: 1240px) 100vw, 1240px" className="h-[280px] w-full object-cover sm:h-[320px] lg:h-[360px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

        <Container className="absolute inset-0 flex items-center">
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-lg">
              <h2 className="h-display text-3xl text-white sm:text-4xl lg:text-[2.75rem]">{title}</h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/90">{intro}</p>
            </div>
            <Button href="/contact" variant="white" size="md" className="shrink-0">{cta}</Button>
          </div>
        </Container>
      </div>
    </section>
  );
}