"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import EdubaHeader from "@/components/EdubaHeader";
import Stepper from "@/components/Stepper";
import { ALL_SKILLS, ALL_TYPES_OF_WORK } from "@/lib/mock-data";

const labels = ["Basics", "Story", "Craft", "Availability", "Portfolio"];

export default function Step3() {
  const router = useRouter();
  const [skills, setSkills] = useState<string[]>(["Claude", "Python"]);
  const [types, setTypes] = useState<string[]>(["agent building"]);

  const toggle = (arr: string[], set: (a: string[]) => void, v: string) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page max-w-3xl py-14">
        <Stepper current={3} total={5} labels={labels} />
        <div className="eyebrow mb-3">Your craft</div>
        <h1 className="font-serif text-[36px] leading-tight">What do you actually do?</h1>
        <p className="mt-3 max-w-prose text-charcoal">
          Tell us the work and the tools. We use this to match you to roles companies post.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push("/candidate/onboarding/step-4"); }}
          className="mt-10 space-y-10"
        >
          <ChipGroup label="Type of work" options={ALL_TYPES_OF_WORK} selected={types}
            onToggle={(v) => toggle(types, setTypes, v)} />
          <ChipGroup label="Tools & skills" options={ALL_SKILLS} selected={skills}
            onToggle={(v) => toggle(skills, setSkills, v)} />

          <div className="flex justify-between">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">← Back</button>
            <button type="submit" className="btn btn-primary">Continue →</button>
          </div>
        </form>
      </main>
    </>
  );
}

function ChipGroup({
  label, options, selected, onToggle,
}: { label: string; options: string[]; selected: string[]; onToggle: (v: string) => void }) {
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
                  ? "border-oxblood bg-oxblood text-cream"
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
