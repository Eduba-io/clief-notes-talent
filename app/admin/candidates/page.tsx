"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { candidates, ALL_COHORTS } from "@/lib/mock-data";

export default function AdminCandidatesPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [cohort, setCohort] = useState<string>("all");

  const visible = useMemo(() => {
    return candidates.filter((c) => {
      if (status !== "all" && c.status !== status) return false;
      if (cohort !== "all" && c.cohort !== cohort) return false;
      if (q) {
        const hay = `${c.firstName} ${c.lastInitial} ${c.headline} ${c.skills.join(" ")} ${c.city}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, status, cohort]);

  return (
    <main>
      <header className="mb-6 flex items-end justify-between border-b border-warmGray pb-3">
        <div>
          <div className="eyebrow mb-1">Roster</div>
          <h1 className="font-serif text-[32px] leading-tight">Candidates</h1>
        </div>
        <div className="mono text-[13px] uppercase tracking-[0.18em] text-muted">
          {visible.length} of {candidates.length}
        </div>
      </header>

      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-[1fr_180px_180px]">
        <input
          className="input"
          placeholder="Search by name, skill, city..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All statuses</option>
          <option>Approved</option><option>In Review</option><option>Hidden</option><option>Rejected</option>
        </select>
        <select className="select" value={cohort} onChange={(e) => setCohort(e.target.value)}>
          <option value="all">All cohorts</option>
          {ALL_COHORTS.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-warmGray bg-cream-deep/50">
              {["Name", "Headline", "Cohort", "Skills", "Status", "Featured"].map((h) => (
                <th key={h} className="mono px-4 py-3 text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((c) => (
              <tr key={c.id} className="border-b border-warmGray last:border-b-0 hover:bg-cream-deep/30">
                <td className="px-4 py-3">
                  <Link href={`/admin/candidate/${c.id}`} className="font-serif text-[15px] hover:text-oxblood">
                    {c.firstName} {c.lastInitial}
                  </Link>
                </td>
                <td className="px-4 py-3 text-charcoal">{c.headline}</td>
                <td className="mono px-4 py-3 text-[12px] uppercase tracking-[0.1em] text-charcoal">{c.cohort}</td>
                <td className="mono px-4 py-3 text-[13px] uppercase text-muted">
                  {c.skills.slice(0, 3).join(" · ")}
                </td>
                <td className="mono px-4 py-3 text-[13px] uppercase tracking-[0.14em]">
                  <span className={
                    c.status === "Approved" ? "text-[#2f7a3b]"
                      : c.status === "In Review" ? "text-oxblood"
                      : c.status === "Hidden" ? "text-muted"
                      : "text-charcoal/60 line-through"
                  }>{c.status}</span>
                </td>
                <td className="px-4 py-3">{c.featured ? <span className="mono text-[13px] text-oxblood">★</span> : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
