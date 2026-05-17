"use client";

import { useRouter } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function CompanySignupPage() {
  const router = useRouter();
  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <main className="container-page grid min-h-[75vh] grid-cols-1 gap-16 py-16 md:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">For hiring companies</div>
          <h1 className="font-serif text-[44px] leading-tight">
            Tell us what you&rsquo;re building. We&rsquo;ll introduce you to the right people.
          </h1>
          <p className="mt-6 max-w-prose text-charcoal/85">
            We&rsquo;re a small, picky platform. Every company on Clief Notes Talent has been
            verified by Eduba, signed our terms (including the no-circumvention clause), and is
            paying flat placement fees — never per click, never per applicant.
          </p>
          <div className="rule" />
          <div className="space-y-2">
            <Detail label="Approval window" value="1–2 business days" />
            <Detail label="Time to first intro" value="Typically 48 hours" />
            <Detail label="Placement fee" value="20% of first-year comp · flat for contracts" />
            <Detail label="Guarantee" value="90-day candidate replacement window" />
          </div>
        </div>

        <form
          className="card max-w-md self-start p-7"
          onSubmit={(e) => { e.preventDefault(); router.push("/company/dashboard?status=pending"); }}
        >
          <div className="mb-4"><label className="label">Work email</label><input className="input" type="email" required /></div>
          <div className="mb-4"><label className="label">Password</label><input className="input" type="password" required /></div>
          <div className="mb-4"><label className="label">Company name</label><input className="input" required /></div>
          <div className="mb-4"><label className="label">Website</label><input className="input" type="url" placeholder="https://" required /></div>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <label className="block"><span className="label">Industry</span>
              <select className="select">
                <option>Legal Tech</option><option>Healthcare</option><option>Finance</option>
                <option>Logistics</option><option>Media</option><option>Manufacturing</option>
                <option>Insurance</option><option>Other</option>
              </select>
            </label>
            <label className="block"><span className="label">Size</span>
              <select className="select">
                <option>1–10</option><option>11–50</option><option>51–200</option>
                <option>201–500</option><option>501–1k</option><option>1k+</option>
              </select>
            </label>
          </div>
          <div className="mb-4"><label className="label">Your role</label><input className="input" placeholder="VP People, Head of AI, ..." required /></div>
          <div className="mb-5"><label className="label">Why hire from Clief Notes?</label>
            <textarea className="textarea min-h-[100px]" placeholder="What are you trying to build? What's the hiring gap?" required />
          </div>
          <label className="mb-5 flex cursor-pointer items-start gap-3 text-[13px] text-charcoal/90">
            <input type="checkbox" required className="mt-1 accent-oxblood" />
            <span>I agree to the <a className="text-oxblood underline-offset-4 hover:underline" href="/terms">Terms of Service</a> including the no-circumvention clause and platform-as-intermediary terms.</span>
          </label>
          <button type="submit" className="btn btn-primary w-full">Apply for access →</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-warmGray py-2.5">
      <span className="mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</span>
      <span className="font-serif text-[15px] text-charcoal">{value}</span>
    </div>
  );
}
