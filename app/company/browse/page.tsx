"use client";

import { useMemo, useState } from "react";
import EdubaHeader from "@/components/EdubaHeader";
import CandidateCard from "@/components/CandidateCard";
import FilterSidebar, { Filters } from "@/components/FilterSidebar";
import { publicCandidates, featuredCandidates } from "@/lib/mock-data";

type Sort = "recent-active" | "recent-added" | "alphabetical";

const DEFAULT_FILTERS: Filters = {
  typesOfWork: [],
  skills: [],
  availability: ["actively-looking", "open-to-offers"],
  remote: [],
  cohort: [],
  salaryMin: 50000,
};

export default function BrowsePage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<Sort>("recent-active");

  const featured = useMemo(() => featuredCandidates(), []);
  const all = useMemo(() => publicCandidates(), []);

  const visible = useMemo(() => {
    let list = all.filter((c) => filters.availability.includes(c.availability as any));
    if (filters.typesOfWork.length) list = list.filter((c) => c.typeOfWork.some((t) => filters.typesOfWork.includes(t)));
    if (filters.skills.length) list = list.filter((c) => c.skills.some((s) => filters.skills.includes(s)));
    if (filters.remote.length) list = list.filter((c) => filters.remote.includes(c.remote as any));
    if (filters.cohort.length) list = list.filter((c) => filters.cohort.includes(c.cohort));
    list = list.filter((c) => c.salaryMax >= filters.salaryMin);

    if (sort === "alphabetical") list = [...list].sort((a, b) => a.firstName.localeCompare(b.firstName));
    if (sort === "recent-added") list = [...list].reverse();
    return list;
  }, [all, filters, sort]);

  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <main className="container-page py-10">
        <header className="mb-8 flex items-end justify-between border-b border-warmGray pb-4">
          <div>
            <div className="eyebrow mb-2">The Directory · Issue 001</div>
            <h1 className="font-serif text-[44px] leading-tight">Browse vetted AI builders.</h1>
            <p className="mt-2 max-w-prose text-charcoal/85">
              Twelve people, all of whom have shipped real AI work. Every profile has been read,
              every reference has been called, every Skool membership has been verified.
            </p>
          </div>
          <label className="block">
            <span className="label">Sort</span>
            <select className="select w-56" value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
              <option value="recent-active">Recently active</option>
              <option value="recent-added">Recently added</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </label>
        </header>

        {/* Featured horizontal scroll */}
        <section className="mb-10">
          <header className="mb-3 flex items-end justify-between border-b border-charcoal pb-2">
            <h2 className="font-serif text-[20px]">Featured this issue</h2>
            <span className="mono text-[10px] uppercase tracking-[0.18em] text-muted">{featured.length} candidates</span>
          </header>
          <div className="flex gap-4 overflow-x-auto pb-2 [&>*]:flex-shrink-0 [&>*]:basis-[320px]">
            {featured.map((c) => (
              <CandidateCard key={c.id} candidate={c} variant="featured" />
            ))}
          </div>
        </section>

        <div className="flex gap-8">
          <FilterSidebar filters={filters} setFilters={setFilters} />
          <div className="flex-1">
            <div className="mono mb-4 text-[11px] uppercase tracking-[0.18em] text-muted">
              Showing {visible.length} of {all.length}
            </div>
            {visible.length === 0 ? (
              <div className="card p-10 text-center">
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted">No matches</div>
                <p className="mt-2 font-serif text-[18px]">
                  No candidates match those filters yet.
                </p>
                <button onClick={() => setFilters(DEFAULT_FILTERS)} className="btn btn-ghost mt-4">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {visible.map((c) => (
                  <CandidateCard key={c.id} candidate={c} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
