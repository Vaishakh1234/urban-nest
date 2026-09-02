"use client";

import { useState } from "react";
import { ArrowCircle } from "../components/ui";

/**
 * No backend exists yet, so the form composes an enquiry and hands it to
 * WhatsApp — the channel this client already runs on. Swap the submit handler
 * for a server action once a mailbox or CRM is available.
 *
 * Keeping this client-side also means the contact page stays fully static:
 * no serverless function is invoked on submit, which matters on Vercel Hobby.
 */
const WHATSAPP_NUMBER = "919526851964";

const serviceOptions = [
  "Full home interior",
  "Modular kitchen",
  "Wardrobes & carpentry",
  "False ceiling",
  "Commercial / office",
  "Something else",
];

const budgets = ["Under ₹3 lakhs", "₹3 – 6 lakhs", "₹6 – 12 lakhs", "Above ₹12 lakhs"];

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-text-dim focus:border-accent";

const labelClass = "mb-2 block text-xs font-medium text-text-body";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      `Hello Urbannest Interiors, I'd like to enquire.`,
      ``,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Location: ${data.get("location") || "—"}`,
      `Service: ${data.get("service")}`,
      `Budget: ${data.get("budget") || "—"}`,
      ``,
      `${data.get("message") || ""}`,
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n").trim()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name *
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
          Phone number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="+91"
        />
      </div>

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
          className={inputClass}
          defaultValue={serviceOptions[0]}
        >
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <span className={labelClass}>Approximate budget</span>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b, i) => (
            <label
              key={b}
              className="cursor-pointer rounded-full border border-line px-5 py-2.5 text-sm text-text-body transition-colors hover:border-accent has-checked:border-ink has-checked:bg-ink has-checked:text-white"
            >
              <input
                type="radio"
                name="budget"
                value={b}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Tell us about the space
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Number of rooms, current stage of construction, timeline…"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 rounded-full bg-accent py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Send enquiry via WhatsApp
          <ArrowCircle
            size="h-8 w-8"
            className="bg-white/20 text-white transition-transform duration-200 group-hover:rotate-45"
          />
        </button>
        <p className="mt-4 text-xs leading-relaxed text-text-dim" aria-live="polite">
          {sent
            ? "Your enquiry has been opened in WhatsApp — hit send there and we'll reply shortly."
            : "This opens WhatsApp with your details filled in. Prefer email? Write to us directly at the address alongside."}
        </p>
      </div>
    </form>
  );
}
