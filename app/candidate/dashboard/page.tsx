"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Sidebar from "@/components/Sidebar";
import SkillTag from "@/components/SkillTag";

const items = [
  { label: "Profile", href: "/candidate/dashboard" },
  { label: "Activity", href: "/candidate/dashboard#activity" },
  { label: "Placements", href: "/candidate/dashboard#placements" },
  { label: "Settings", href: "/candidate/dashboard#settings" },
];

function Inner() {
  const params = useSearchParams();
  const status = params.get("status") ?? "approved";
  const pending = status === "pending";

  return (
    <main className="container-page flex gap-10 py-10">
      <Sidebar
        title="Candidate"
        items={items}
        footer={
          <div className="mono text-[11px] uppercase tracking-[0.14em]">
            Signed in as <br />
            <span className="text-charcoal">sarah.k@independent</span>
          </div>
        }
      />
      <div className="flex-1 space-y-8">
        {/* Status banner */}
        <div
          className={`flex items-center justify-between border-l-4 px-5 py-4 ${
            pending ? "border-l-oxblood bg-cream-deep" : "border-l-[#2f7a3b] bg-cream-deep"
          }`}
        >
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.22em] text-muted">
              Profile status
            </div>
            <div className="font-serif text-[18px]">
              {pending
                ? "Your profile is under review. We'll email you within 2–3 business days."
                : "Your profile is live. You're discoverable to verified companies."}
            </div>
          </div>
          <a href="#" className="mono text-[11px] uppercase tracking-[0.18em] text-oxblood hover:text-oxbloodDark">
            Edit profile →
          </a>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-4">
          <Stat n="47" label="Profile views (30d)" />
          <Stat n="3" label="Active intro requests" />
          <Stat n="1" label="Engagements in progress" />
        </div>

        {/* Intro requests */}
        <section>
          <header className="mb-4 flex items-end justify-between border-b border-warmGray pb-2">
            <h2 className="font-serif text-[22px]">Active intro requests</h2>
            <span className="mono text-[11px] uppercase tracking-[0.14em] text-muted">3 pending</span>
          </header>
          <ul className="space-y-3">
            {INTRO_REQS.map((r) => (
              <li key={r.id} className="card flex items-center justify-between p-5">
                <div className="min-w-0">
                  <div className="font-serif text-[17px]">{r.company}</div>
                  <p className="mt-1 text-sm text-charcoal/80">{r.role}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => <SkillTag key={t}>{t}</SkillTag>)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted">{r.received}</div>
                  <div className="mt-3 flex gap-2">
                    <button className="btn btn-ghost px-3 py-1 text-[10px]">Decline</button>
                    <button className="btn btn-primary px-3 py-1 text-[10px]">Accept</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Active + past placements */}
        <div id="placements" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section>
            <h2 className="mb-3 border-b border-warmGray pb-2 font-serif text-[20px]">
              Active engagements
            </h2>
            <div className="card p-5">
              <div className="font-serif text-[17px]">In discussion with Series B fintech</div>
              <p className="mt-2 text-sm text-charcoal/80">
                Contract-to-hire · 6-month engagement &middot; Eduba is coordinating second-round
                interviews this week.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <SkillTag tone="accent">In progress</SkillTag>
                <SkillTag>Remote</SkillTag>
              </div>
            </div>
          </section>
          <section>
            <h2 className="mb-3 border-b border-warmGray pb-2 font-serif text-[20px]">
              Past placements
            </h2>
            <div className="card flex h-full items-center justify-center p-8 text-center">
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted">Nothing yet</div>
                <p className="mt-2 font-serif text-[15px] text-charcoal/85">
                  Your first placement will appear here. The intro process usually takes 2–4 weeks
                  end-to-end.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const INTRO_REQS = [
  {
    id: "r1",
    company: "AI startup in NYC (Series A)",
    role: "Senior agent engineer · contract-to-hire · $160–200k base",
    tags: ["Agent building", "RAG", "Remote"],
    received: "Received 2 days ago",
  },
  {
    id: "r2",
    company: "Public manufacturer in Texas",
    role: "Fractional AI lead · 20 hrs/week · 6 months",
    tags: ["Strategy", "On-site OK"],
    received: "Received 5 days ago",
  },
  {
    id: "r3",
    company: "Boutique law firm",
    role: "Contract-review automation · 3-month engagement",
    tags: ["Legal", "Agent building", "Remote"],
    received: "Received 8 days ago",
  },
];

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="card p-5">
      <div className="font-serif text-[44px] leading-none text-charcoal">{n}</div>
      <div className="mono mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">{label}</div>
    </div>
  );
}

export default function CandidateDashboardPage() {
  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <Suspense fallback={<div className="container-page py-10 mono text-[11px] uppercase tracking-[0.18em] text-muted">Loading…</div>}>
        <Inner />
      </Suspense>
    </>
  );
}
