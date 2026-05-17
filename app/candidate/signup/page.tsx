"use client";

import { useRouter } from "next/navigation";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function CandidateSignupPage() {
  const router = useRouter();
  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <main className="container-page grid min-h-[75vh] grid-cols-1 gap-16 py-16 md:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">Apply as a candidate</div>
          <h1 className="font-serif text-[44px] leading-tight">
            We&rsquo;ll verify you, then put you in front of the right companies.
          </h1>
          <p className="mt-6 max-w-prose text-charcoal">
            Every candidate is verified as a Clief Notes Premium or VIP member before their
            profile goes live. Approval typically takes 2–3 business days. Once you&rsquo;re in,
            introductions come to you — you don&rsquo;t cold-apply.
          </p>
          <div className="rule" />
          <ul className="space-y-3 text-[15px] text-charcoal">
            <li>· <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">Step 1</span> &nbsp;Create your account</li>
            <li>· <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">Step 2</span> &nbsp;Five-step intake to build your profile</li>
            <li>· <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">Step 3</span> &nbsp;Eduba reviews and approves</li>
            <li>· <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">Step 4</span> &nbsp;Companies see you. Intros begin.</li>
          </ul>
        </div>
        <form
          className="card max-w-md self-start p-7"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/candidate/onboarding/step-1");
          }}
        >
          <div className="mb-4">
            <label className="label" htmlFor="email">Email</label>
            <input id="email" type="email" className="input" required />
          </div>
          <div className="mb-4">
            <label className="label" htmlFor="pw">Password</label>
            <input id="pw" type="password" className="input" required />
          </div>
          <div className="mb-4">
            <label className="label" htmlFor="pw2">Confirm password</label>
            <input id="pw2" type="password" className="input" required />
          </div>
          <div className="mb-6">
            <label className="label" htmlFor="skool">Skool account email</label>
            <input id="skool" type="email" className="input" placeholder="The email on your Skool account" required />
          </div>
          <p className="mb-6 text-[13px] text-muted">
            We verify every candidate is a Clief Notes <span className="text-charcoal">Premium</span>{" "}
            or <span className="text-charcoal">VIP</span> member before approving your profile.
          </p>
          <button type="submit" className="btn btn-primary w-full">Create account →</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
