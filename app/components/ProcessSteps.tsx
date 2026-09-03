import { process } from "../content";

export function ProcessSteps() {
  return (
    <div className="relative mt-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((p, i) => (
          <div
            key={p.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl reveal"
          >
            {/* Top Row: Badge & Step indicator */}
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-sm font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {p.number || `0${i + 1}`}
                </span>
                <span className="text-[11px] font-bold text-stone-400 tracking-wider uppercase">
                  Step {i + 1} of 6
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="mt-5 text-lg font-bold text-stone-900 group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-stone-600">
                {p.copy}
              </p>
            </div>

            {/* Subtle Bottom Accent Line */}
            <div className="mt-6 h-1 w-full rounded-full bg-stone-100 overflow-hidden">
              <div className="h-full w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}