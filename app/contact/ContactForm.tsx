"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919526851964";

const serviceOptions = [
  "Full home interior",
  "Modular kitchen",
  "Wardrobes & carpentry",
  "False ceiling & lighting",
  "Wall paneling & decor",
  "Commercial / office",
  "Something else",
];

const budgets = [
  "Under ₹3 lakhs",
  "₹3 – 6 lakhs",
  "₹6 – 12 lakhs",
  "Above ₹12 lakhs",
];

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-sm text-ink outline-none transition-all duration-200 placeholder:text-text-dim/60 focus:border-accent focus:ring-2 focus:ring-accent/10";
const labelClass = "mb-2 block text-xs font-semibold text-ink tracking-wide";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [budget, setBudget] = useState(budgets[0]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `Hello Urbannest Interiors, I'd like to enquire about my project.`,
      ``,
      `👤 Name: ${data.get("name")}`,
      `📞 Phone: ${data.get("phone")}`,
      `📍 Location: ${data.get("location") || "—"}`,
      `🏠 Service: ${data.get("service")}`,
      `💰 Budget: ${budget}`,
      `🏗 Stage: ${data.get("stage") || "—"}`,
      ``,
      `📝 Details:`,
      `${data.get("message") || "—"}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n").trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50/60 px-8 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">WhatsApp opened!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-body">
          Your enquiry details have been pre-filled in WhatsApp. Just hit <strong>Send</strong> and we&apos;ll reply within a few hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 — Name + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      {/* Row 2 — Location + Service */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className={labelClass}>
            Project location
          </label>
          <input
            id="location"
            name="location"
            className={inputClass}
            placeholder="Town or district"
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2355504b%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[position:right_16px_center] bg-no-repeat pr-10`}
            defaultValue={serviceOptions[0]}
          >
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3 — Construction stage */}
      <div>
        <label htmlFor="stage" className={labelClass}>
          Current stage of construction
        </label>
        <select
          id="stage"
          name="stage"
          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2355504b%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[position:right_16px_center] bg-no-repeat pr-10`}
          defaultValue=""
        >
          <option value="" disabled>Select stage</option>
          <option>Planning / pre-construction</option>
          <option>Structure complete (plastering done)</option>
          <option>Painting stage</option>
          <option>Ready for interior work</option>
          <option>Renovation / remodelling</option>
        </select>
      </div>

      {/* Budget chips */}
      <div>
        <span className={labelClass}>Approximate budget</span>
        <div className="mt-1 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                budget === b
                  ? "border-accent bg-accent text-white shadow-sm"
                  : "border-line bg-white text-text-body hover:border-accent/50 hover:text-ink"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your space
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Number of rooms, special requirements, preferred style, timeline…"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(101,96,66,0.28)] transition-all duration-200 hover:bg-accent-hover active:scale-[0.97]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.18-1.238-6.167-3.488-8.414" />
          </svg>
          Send via WhatsApp
        </button>
        <p className="text-xs leading-relaxed text-text-dim sm:max-w-[220px] sm:text-right">
          Opens WhatsApp with your details pre-filled. Just hit send.
        </p>
      </div>
    </form>
  );
}