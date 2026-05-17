"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";
import { ALL_SKILLS } from "@/lib/mock-data";

export default function PostJobPage() {
  const router = useRouter();
  const [type, setType] = useState("full-time");
  const [musts, setMusts] = useState<string[]>(["Claude"]);
  const [nices, setNices] = useState<string[]>([]);

  const toggle = (arr: string[], set: (a: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Job posted successfully. Eduba will surface relevant candidates to you within 48 hours.");
    setTimeout(() => router.push("/company/dashboard"), 800);
  };

  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <main className="container-page max-w-4xl py-12">
        <div className="eyebrow mb-3">Post a role</div>
        <h1 className="font-serif text-[40px] leading-tight">Tell us what you&rsquo;re hiring for.</h1>
        <p className="mt-3 max-w-prose text-charcoal">
          Eduba reads every job and surfaces the two to four candidates most likely to be a fit.
          Be specific — the more pointed the role, the better the match.
        </p>

        <form onSubmit={submit} className="mt-10 space-y-8">
          <label className="block">
            <span className="label">Role title</span>
            <input className="input" placeholder="Senior AI Engineer — Contract Intake" required />
          </label>

          <div>
            <div className="label">Engagement type</div>
            <div className="flex flex-wrap gap-3">
              {[
                ["full-time", "Full-time"],
                ["contract", "Contract"],
                ["fractional", "Fractional"],
              ].map(([val, txt]) => (
                <label key={val} className="mono flex cursor-pointer items-center gap-2 border border-warmGray px-3 py-1.5 text-[11px] uppercase tracking-[0.1em]">
                  <input type="radio" name="type" checked={type === val} onChange={() => setType(val)} className="accent-oxblood" />
                  {txt}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block"><span className="label">Salary / rate min</span>
              <input className="input" placeholder={type === "full-time" ? "$140,000" : "$100/hr"} />
            </label>
            <label className="block"><span className="label">Salary / rate max</span>
              <input className="input" placeholder={type === "full-time" ? "$180,000" : "$150/hr"} />
            </label>
            <label className="block"><span className="label">Location</span>
              <input className="input" placeholder="Austin, TX (or 'Remote')" />
            </label>
            <label className="block"><span className="label">Remote policy</span>
              <select className="select"><option>Remote only</option><option>Hybrid</option><option>On-site</option></select>
            </label>
          </div>

          <ChipGroup label="Must-have skills" options={ALL_SKILLS} selected={musts} onToggle={(v) => toggle(musts, setMusts, v)} />
          <ChipGroup label="Nice-to-have skills" options={ALL_SKILLS} selected={nices} onToggle={(v) => toggle(nices, setNices, v)} tone="muted" />

          <label className="block"><span className="label">Job description</span>
            <textarea className="textarea min-h-[200px]" required />
          </label>

          <label className="block"><span className="label">Why specifically from Clief Notes?</span>
            <textarea className="textarea min-h-[120px]" required placeholder="What about this role makes Clief Notes the right place to source it? (We read this.)" />
          </label>

          <label className="block"><span className="label">Custom application question (optional)</span>
            <input className="input" placeholder="What's the most interesting agent you've shipped, and what broke?" />
          </label>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">Cancel</button>
            <button type="submit" className="btn btn-primary">Post role →</button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

function ChipGroup({
  label, options, selected, onToggle, tone = "default",
}: { label: string; options: string[]; selected: string[]; onToggle: (v: string) => void; tone?: "default" | "muted" }) {
  return (
    <div>
      <div className="label">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={`mono border px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] transition-colors ${
                active
                  ? tone === "muted"
                    ? "border-charcoal bg-charcoal text-cream"
                    : "border-oxblood bg-oxblood text-cream"
                  : "border-warmGray text-charcoal hover:border-charcoal"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
