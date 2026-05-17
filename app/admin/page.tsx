"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { candidates, companies, introRequests } from "@/lib/mock-data";

type Tab = "candidates" | "companies" | "intros";

const tabLabels: Record<Tab, string> = {
  candidates: "Candidates Pending",
  companies: "Companies Pending",
  intros: "Intro Requests Pending",
};

export default function AdminQueuePage() {
  const [tab, setTab] = useState<Tab>("candidates");

  const initialCandidates = candidates.filter((c) => c.status === "In Review");
  const initialCompanies = companies.filter((c) => c.status === "In Review");
  const initialIntros = introRequests;

  const [pendingCandidates, setPendingCandidates] = useState(initialCandidates);
  const [pendingCompanies, setPendingCompanies] = useState(initialCompanies);
  const [pendingIntros, setPendingIntros] = useState(initialIntros);

  const counts = {
    candidates: pendingCandidates.length,
    companies: pendingCompanies.length,
    intros: pendingIntros.length,
  };

  const handle = (kind: Tab, id: string, action: "Approved" | "Rejected") => {
    if (kind === "candidates") setPendingCandidates((prev) => prev.filter((c) => c.id !== id));
    if (kind === "companies") setPendingCompanies((prev) => prev.filter((c) => c.id !== id));
    if (kind === "intros") setPendingIntros((prev) => prev.filter((c) => c.id !== id));
    toast.success(
      `${action}. ${kind === "intros" ? "Intro queued for delivery." : "Notification sent."}`
    );
  };

  return (
    <main>
      <header className="mb-6 flex items-end justify-between border-b border-warmGray pb-3">
        <div>
          <div className="eyebrow mb-1">Operations</div>
          <h1 className="font-serif text-[32px] leading-tight">Approval queue</h1>
        </div>
        <div className="mono text-[13px] uppercase tracking-[0.18em] text-muted">
          {counts.candidates + counts.companies + counts.intros} items pending
        </div>
      </header>

      {/* Tabs */}
      <div className="mb-6 flex border-b border-warmGray">
        {(["candidates", "companies", "intros"] as Tab[]).map((t) => {
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`mono -mb-px border-b-2 px-4 py-2 text-[13px] uppercase tracking-[0.18em] ${
                active ? "border-oxblood text-oxblood" : "border-transparent text-muted hover:text-charcoal"
              }`}
            >
              {tabLabels[t]} <span className="ml-2 text-charcoal/60">({counts[t]})</span>
            </button>
          );
        })}
      </div>

      {tab === "candidates" && (
        <Table
          headers={["Name", "Headline", "City", "Cohort", "Applied"]}
          rows={pendingCandidates.map((c) => ({
            id: c.id,
            href: `/admin/candidate/${c.id}`,
            cells: [`${c.firstName} ${c.lastInitial}`, c.headline, c.city, c.cohort, "Past 7 days"],
          }))}
          onApprove={(id) => handle("candidates", id, "Approved")}
          onReject={(id) => handle("candidates", id, "Rejected")}
          emptyText="Inbox zero. Nice."
        />
      )}

      {tab === "companies" && (
        <Table
          headers={["Company", "Industry", "Size", "Contact", "Applied"]}
          rows={pendingCompanies.map((c) => ({
            id: c.id,
            href: `#`,
            cells: [c.name, c.industry, c.size, `${c.contactName} · ${c.contactRole}`, c.joinedISO],
          }))}
          onApprove={(id) => handle("companies", id, "Approved")}
          onReject={(id) => handle("companies", id, "Rejected")}
          emptyText="No company applications pending."
        />
      )}

      {tab === "intros" && (
        <Table
          headers={["Company → Candidate", "Message", "Submitted"]}
          rows={pendingIntros.map((r) => ({
            id: r.id,
            href: `/admin/candidate/${r.candidateId}`,
            cells: [
              `${r.companyName} → ${r.candidateName}`,
              r.message.length > 80 ? r.message.slice(0, 80) + "…" : r.message,
              r.createdISO,
            ],
          }))}
          onApprove={(id) => handle("intros", id, "Approved")}
          onReject={(id) => handle("intros", id, "Rejected")}
          emptyText="No intro requests pending."
        />
      )}
    </main>
  );
}

function Table({
  headers, rows, onApprove, onReject, emptyText,
}: {
  headers: string[];
  rows: { id: string; href: string; cells: string[] }[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  emptyText: string;
}) {
  if (rows.length === 0) {
    return (
      <div className="card p-10 text-center">
        <div className="mono text-[13px] uppercase tracking-[0.18em] text-muted">Queue empty</div>
        <p className="mt-2 font-serif text-[18px]">{emptyText}</p>
      </div>
    );
  }
  return (
    <div className="card overflow-hidden">
      <table className="w-full border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-b border-warmGray bg-cream-deep/50">
            {headers.map((h) => (
              <th key={h} className="mono px-4 py-3 text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
                {h}
              </th>
            ))}
            <th className="mono px-4 py-3 text-right text-[12px] font-normal uppercase tracking-[0.18em] text-muted">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-warmGray last:border-b-0 hover:bg-cream-deep/30">
              {r.cells.map((c, i) => (
                <td key={i} className="px-4 py-3 align-top text-charcoal">
                  {i === 0 ? (
                    <Link href={r.href} className="font-serif text-[15px] text-charcoal hover:text-oxblood">
                      {c}
                    </Link>
                  ) : (
                    c
                  )}
                </td>
              ))}
              <td className="px-4 py-3 text-right">
                <div className="inline-flex gap-2">
                  <button onClick={() => onReject(r.id)} className="btn btn-ghost px-3 py-1 text-[12px]">Reject</button>
                  <button onClick={() => onApprove(r.id)} className="btn btn-primary px-3 py-1 text-[12px]">Approve</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
