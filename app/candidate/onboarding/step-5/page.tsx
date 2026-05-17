"use client";

import { useRouter } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Stepper from "@/components/Stepper";

const labels = ["Basics", "Story", "Craft", "Availability", "Portfolio"];

export default function Step5() {
  const router = useRouter();
  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page max-w-3xl py-14">
        <Stepper current={5} total={5} labels={labels} />
        <div className="eyebrow mb-3">Portfolio</div>
        <h1 className="font-serif text-[36px] leading-tight">Show us the work.</h1>
        <p className="mt-3 max-w-prose text-charcoal">
          Up to ten items — case studies, demos, code, writing. The strongest profiles have one
          deep case study plus two or three supporting pieces. A short video intro helps too.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push("/candidate/dashboard?status=pending"); }}
          className="mt-10 space-y-8"
        >
          <div>
            <div className="label">Portfolio items (up to 10)</div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card flex items-center justify-between p-4">
                  <div className="min-w-0">
                    <div className="mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      Slot {i + 1}
                    </div>
                    <div className="truncate font-serif text-[14px] text-muted">Empty</div>
                  </div>
                  <button type="button" className="btn btn-ghost px-3 py-1 text-[10px]">Add</button>
                </div>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="label">Video intro (YouTube or Loom URL)</span>
            <input className="input" placeholder="https://www.youtube.com/watch?v=..." />
          </label>

          <label className="block">
            <span className="label">References (name + email, comma separated)</span>
            <textarea className="textarea min-h-[100px]" placeholder="Jane Smith jane@company.com, ..." />
            <span className="mono mt-1 block text-[10px] uppercase tracking-[0.14em] text-muted">
              Eduba contacts references before your profile goes live.
            </span>
          </label>

          <div className="flex justify-between">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">← Back</button>
            <button type="submit" className="btn btn-primary">Submit for review →</button>
          </div>
        </form>
      </main>
    </>
  );
}
