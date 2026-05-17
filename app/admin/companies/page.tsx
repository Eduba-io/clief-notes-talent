"use client";

import { companies } from "@/lib/mock-data";

export default function AdminCompaniesPage() {
  return (
    <main>
      <header className="mb-6 flex items-end justify-between border-b border-warmGray pb-3">
        <div>
          <div className="eyebrow mb-1">Roster</div>
          <h1 className="font-serif text-[32px] leading-tight">Companies</h1>
        </div>
        <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {companies.length} accounts
        </div>
      </header>

      <div className="card overflow-hidden">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-warmGray bg-cream-deep/50">
              {["Company", "Industry", "Size", "Contact", "Joined", "Intros", "Placements", "Status"].map((h) => (
                <th key={h} className="mono px-4 py-3 text-[10px] font-normal uppercase tracking-[0.18em] text-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id} className="border-b border-warmGray last:border-b-0 hover:bg-cream-deep/30">
                <td className="px-4 py-3">
                  <div className="font-serif text-[15px]">{c.name}</div>
                  <a className="mono text-[10px] uppercase tracking-[0.14em] text-muted" href={`https://${c.website}`}>
                    {c.website} ↗
                  </a>
                </td>
                <td className="px-4 py-3 text-charcoal/85">{c.industry}</td>
                <td className="mono px-4 py-3 text-[12px] uppercase text-charcoal/85">{c.size}</td>
                <td className="px-4 py-3">
                  <div className="text-charcoal/90">{c.contactName}</div>
                  <div className="mono text-[10px] uppercase tracking-[0.14em] text-muted">{c.contactRole}</div>
                </td>
                <td className="mono px-4 py-3 text-[12px] text-muted">{c.joinedISO}</td>
                <td className="px-4 py-3 text-charcoal/90">{c.introRequests}</td>
                <td className="px-4 py-3 text-charcoal/90">{c.placements}</td>
                <td className="mono px-4 py-3 text-[11px] uppercase tracking-[0.14em]">
                  <span className={c.status === "Approved" ? "text-[#2f7a3b]" : "text-oxblood"}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
