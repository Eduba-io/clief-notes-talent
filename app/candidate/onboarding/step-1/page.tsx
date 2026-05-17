"use client";

import { useRouter } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Stepper from "@/components/Stepper";

const labels = ["Basics", "Story", "Craft", "Availability", "Portfolio"];

export default function Step1() {
  const router = useRouter();
  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page max-w-3xl py-14">
        <Stepper current={1} total={5} labels={labels} />
        <div className="eyebrow mb-3">Basics</div>
        <h1 className="font-serif text-[36px] leading-tight">Tell us who you are.</h1>
        <p className="mt-3 max-w-prose text-charcoal">Just the cover sheet — we&rsquo;ll get to the work in a moment.</p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push("/candidate/onboarding/step-2"); }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <Field label="First name"><input className="input" defaultValue="" /></Field>
          <Field label="Last name"><input className="input" defaultValue="" /></Field>
          <Field label="City"><input className="input" placeholder="Austin" /></Field>
          <Field label="Country"><input className="input" placeholder="USA" /></Field>
          <Field label="Current employer (or 'Independent')"><input className="input" /></Field>
          <Field label="Profile photo">
            <div className="flex h-[42px] items-center justify-between border border-warmGray bg-[#faf7ef] px-3 text-[13px] text-muted">
              <span className="mono text-[11px] uppercase tracking-[0.14em]">No file selected</span>
              <button type="button" className="btn btn-ghost px-3 py-1 text-[10px]">Upload</button>
            </div>
          </Field>

          <div className="col-span-full mt-6 flex justify-end">
            <button type="submit" className="btn btn-primary">Continue →</button>
          </div>
        </form>
      </main>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
    </label>
  );
}
