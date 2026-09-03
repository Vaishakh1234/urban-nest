"use client";

import { useState } from "react";
import { Img } from "../components/Img";
import { ArrowCircle } from "../components/ui";
import type { Project } from "../content";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-5 py-2.5 text-sm transition-[transform,color,background-color,border-color] duration-200 ease-out active:scale-[0.98] ${active === c ? "bg-ink text-white shadow-pill" : "border border-line text-text-body hover:border-accent hover:text-accent"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {visible.map((p) => (
          <a key={p.slug} href={`/projects/${p.slug}`} className="group block reveal">
            <div className="relative overflow-hidden rounded-[20px]">
              <Img name={p.image} alt={p.imageAlt || p.title} sizes="(max-width: 640px) 100vw, 580px" className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[330px]" />
              {p.isTransformation ? (
                <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md">
                  Full Transformation
                </span>
              ) : null}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-medium text-accent">{p.category}</span>
                <h2 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">{p.title}</h2>
                <p className="mt-0.5 text-xs text-text-dim">{p.scope} · {p.location}</p>
              </div>
              <ArrowCircle size="h-9 w-9" className="bg-accent text-white transition-transform duration-200 group-hover:rotate-45" />
            </div>
          </a>
        ))}
      </div>

      {visible.length === 0 ? <p className="mt-10 text-sm text-text-body">No projects in this category yet.</p> : null}
    </>
  );
}