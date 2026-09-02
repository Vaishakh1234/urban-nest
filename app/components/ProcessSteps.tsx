import { process } from "../content";

/** One accent-coloured line icon per step, drawn in the reference's outlined style. */
const icons = [
  /* Initial Consultation — speech bubble */
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12h.01M12 12h.01M15.5 12h.01"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>,
  /* Concept Development — pencil over paper */
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L17 5a2.1 2.1 0 0 0-3 0L3.5 15.5 4 20Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="m13 6.5 4.5 4.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  /* Design Execution — tools */
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
  /* Final Reveal — sparkle */
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3.5 14 9.5l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
];

/**
 * The four-step process row from the reference: centred columns with an accent-coloured
 * outlined icon each, joined by a dashed connector line on desktop.
 */
export function ProcessSteps() {
  return (
    <div className="relative mt-14">
      <div
        aria-hidden
        className="absolute inset-x-12 top-6 hidden border-t border-dashed border-line lg:block"
      />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <div key={p.title} className="flex flex-col items-center text-center">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-accent">
              {icons[i]}
            </span>
            <h3 className="mt-5 text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2.5 max-w-[260px] text-sm leading-relaxed text-text-body">
              {p.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
