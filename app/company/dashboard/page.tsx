"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Sidebar from "@/components/Sidebar";
import { introRequests, placements } from "@/lib/mock-data";

const items = [
  { label: "Browse Candidates", href: "/company/browse" },
  { label: "Intro Requests", href: "/company/dashboard#intros" },
  { label: "Post a Job", href: "/company/post-job" },
  { label: "Placements", href: "/company/dashboard#placements" },
  { label: "Settings", href: "/company/dashboard#settings" },
];

function Inner() {
  const params = useSearchParams();
  const pending = params.get("status") === "pending";

  if (pending) {
    return (
      <main className="container-page py-20">
        <div className="card mx-auto max-w-2xl p-10 text-center">
          <div className="eyebrow mb-3">Account under review</div>
          <h1 className="font-serif text-[32px] leading-tight">Thanks. We&rsquo;ll be in touch within 1–2 business days.</h1>
          <p className="mt-4 text-charcoal/85">
            A real human at Eduba reviews every company application. We&rsquo;ll email{" "}
            <span className="mono text-[13px]">you@your-company.com</span> when your account is
            approved.
          </p>
          <Link href="/company/dashboard" className="btn btn-ghost mt-8">Preview the approved view →</Link>
        </div>
      </main>
    );
  }

  // Approved view (default for demo)
  const myIntros = introRequests.slice(0, 3);
  const myPlacement = placements[0];

  return (
    <main className="container-page flex gap-10 py-10">
      <Sidebar
        title="Company · Hexley & Pratt"
        items={items}
        footer={<div className="mono text-[11px] uppercase tracking-[0.14em]">Plan · <span className="text-charcoal">Standard</span></div>}
      />
      <div className="flex-1 space-y-10">
        <header className="flex items-end justify-between border-b border-warmGray pb-3">
          <div>
            <div className="eyebrow mb-1">Welcome back</div>
            <h1 className="font-serif text-[32px] leading-tight">Diane, here&rsquo;s what&rsquo;s open.</h1>
          </div>
          <Link href="/company/browse" className="btn btn-primary">Browse candidates →</Link>
        </header>

        <div className="grid grid-cols-3 gap-4">
          <Stat n={`${myIntros.length}`} label="Active intro requests" />
          <Stat n="1" label="Placement in progress" />
          <Stat n="$0" label="Fees owed" />
        </div>

        <section id="intros">
          <header className="mb-4 flex items-end justify-between border-b border-warmGray pb-2">
            <h2 className="font-serif text-[22px]">Your intro requests</h2>
            <Link href="/company/browse" className="mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-oxblood">Find more candidates →</Link>
          </header>
          <ul className="space-y-3">
            {myIntros.map((r) => (
              <li key={r.id} className="card flex items-center justify-between p-5">
                <div>
                  <div className="font-serif text-[17px]">{r.candidateName}</div>
                  <div className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {r.createdISO} · Status: {r.status}
                  </div>
                </div>
                <Link href={`/company/candidate/${r.candidateId}`} className="mono text-[11px] uppercase tracking-[0.18em] text-oxblood">
                  View candidate →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="placements">
          <header className="mb-4 flex items-end justify-between border-b border-warmGray pb-2">
            <h2 className="font-serif text-[22px]">Placement in progress</h2>
          </header>
          <div className="card p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif text-[17px]">{myPlacement.candidateName} · {myPlacement.role}</div>
                <div className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Status: {myPlacement.status} · Started {myPlacement.startedISO}
                </div>
              </div>
              <span className="mono text-[12px] uppercase tracking-[0.14em] text-charcoal">
                Fee · ${myPlacement.feeAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="card p-5">
      <div className="font-serif text-[44px] leading-none text-charcoal">{n}</div>
      <div className="mono mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">{label}</div>
    </div>
  );
}

export default function CompanyDashboardPage() {
  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <Suspense fallback={<div className="container-page py-10 mono text-[11px] uppercase tracking-[0.18em] text-muted">Loading…</div>}>
        <Inner />
      </Suspense>
    </>
  );
}
