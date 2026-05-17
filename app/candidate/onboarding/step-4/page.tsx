"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import EdubaHeader from "@/components/EdubaHeader";
import Stepper from "@/components/Stepper";

const labels = ["Basics", "Story", "Craft", "Availability", "Portfolio"];

export default function Step4() {
  const router = useRouter();
  const [salary, setSalary] = useState([120, 170]);
  const [hourly, setHourly] = useState([100, 150]);

  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page max-w-3xl py-14">
        <Stepper current={4} total={5} labels={labels} />
        <div className="eyebrow mb-3">Availability</div>
        <h1 className="font-serif text-[36px] leading-tight">What are you open to?</h1>
        <p className="mt-3 max-w-prose text-charcoal">
          Only companies that match your stated availability will see you. You can change this anytime.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push("/candidate/onboarding/step-5"); }}
          className="mt-10 space-y-8"
        >
          <div>
            <div className="label">Status</div>
            <div className="space-y-2">
              {[
                ["actively-looking", "Actively looking — please send me intros"],
                ["open-to-offers", "Open to the right thing — surface me selectively"],
                ["not-looking", "Not currently looking — hide my profile"],
              ].map(([val, txt]) => (
                <label key={val} className="flex cursor-pointer items-center gap-3 text-[15px]">
                  <input type="radio" name="availability" defaultChecked={val === "actively-looking"} className="accent-oxblood" />
                  {txt}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RangeField
              label={`Salary range  $${salary[0]}k – $${salary[1]}k`}
              minVal={salary[0]} maxVal={salary[1]} bound={[50, 300]}
              onChange={(min, max) => setSalary([min, max])}
            />
            <RangeField
              label={`Hourly range  $${hourly[0]}/hr – $${hourly[1]}/hr`}
              minVal={hourly[0]} maxVal={hourly[1]} bound={[50, 300]}
              onChange={(min, max) => setHourly([min, max])}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block">
              <span className="label">Remote policy</span>
              <select className="select">
                <option>Remote only</option>
                <option>Hybrid (1–2 days on-site)</option>
                <option>On-site OK for the right role</option>
              </select>
            </label>
            <label className="block">
              <span className="label">Blocklist (companies you don&rsquo;t want to see you)</span>
              <input className="input" placeholder="Acme Co, Globex" />
            </label>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">← Back</button>
            <button type="submit" className="btn btn-primary">Continue →</button>
          </div>
        </form>
      </main>
    </>
  );
}

function RangeField({
  label, minVal, maxVal, bound, onChange,
}: { label: string; minVal: number; maxVal: number; bound: [number, number]; onChange: (min: number, max: number) => void; }) {
  return (
    <div>
      <span className="label">{label}</span>
      <div className="space-y-2">
        <input
          type="range" min={bound[0]} max={bound[1]} value={minVal}
          onChange={(e) => onChange(Math.min(parseInt(e.target.value), maxVal - 5), maxVal)}
          className="w-full accent-oxblood"
        />
        <input
          type="range" min={bound[0]} max={bound[1]} value={maxVal}
          onChange={(e) => onChange(minVal, Math.max(parseInt(e.target.value), minVal + 5))}
          className="w-full accent-oxblood"
        />
      </div>
    </div>
  );
}
