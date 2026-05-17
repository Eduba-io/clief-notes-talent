"use client";

import { useRouter } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Stepper from "@/components/Stepper";

const labels = ["Basics", "Story", "Craft", "Availability", "Portfolio"];

export default function Step2() {
  const router = useRouter();
  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page max-w-3xl py-14">
        <Stepper current={2} total={5} labels={labels} />
        <div className="eyebrow mb-3">Your story</div>
        <h1 className="font-serif text-[36px] leading-tight">A headline and a bio.</h1>
        <p className="mt-3 max-w-prose text-charcoal">
          The headline is what companies see first. Be specific. &ldquo;Builds AI agents for legal
          teams&rdquo; lands better than &ldquo;AI engineer.&rdquo;
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); router.push("/candidate/onboarding/step-3"); }}
          className="mt-10 space-y-6"
        >
          <label className="block">
            <span className="label">Headline (one line)</span>
            <input className="input" maxLength={120} placeholder="Builds AI agents for legal teams" />
            <span className="mono mt-1 block text-[10px] uppercase tracking-[0.14em] text-muted">
              Max 120 characters
            </span>
          </label>

          <label className="block">
            <span className="label">Bio (2–4 short paragraphs)</span>
            <textarea
              className="textarea min-h-[180px]"
              placeholder="What's the most interesting thing you've shipped? What kind of problems do you like? Who would benefit from working with you?"
            />
          </label>

          <div className="flex justify-between pt-2">
            <button type="button" onClick={() => router.back()} className="btn btn-ghost">← Back</button>
            <button type="submit" className="btn btn-primary">Continue →</button>
          </div>
        </form>
      </main>
    </>
  );
}
