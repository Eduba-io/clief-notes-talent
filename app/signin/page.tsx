"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // Demo-only routing: pick a destination based on the email contents
  // so a stakeholder can click into any of the three role-flavored dashboards.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lower = email.toLowerCase();
    if (lower.includes("admin")) router.push("/admin");
    else if (lower.includes("company")) router.push("/company/dashboard");
    else router.push("/candidate/dashboard");
  };

  return (
    <>
      <EdubaHeader rightSlot="none" />
      <main className="container-page grid min-h-[70vh] grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <div className="eyebrow mb-3">Sign in</div>
          <h1 className="font-serif text-[44px] leading-tight">Welcome back.</h1>
          <p className="mt-4 max-w-prose text-charcoal/85">
            Sign in to your candidate, company, or admin account. New here?{" "}
            <a href="/candidate/signup" className="text-oxblood underline-offset-4 hover:underline">
              Apply as a candidate
            </a>{" "}
            or{" "}
            <a href="/company/signup" className="text-oxblood underline-offset-4 hover:underline">
              create a company account
            </a>.
          </p>
          <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-muted">
            Demo hint · use any email; we route by keyword (admin / company / candidate)
          </p>
        </div>
        <form onSubmit={onSubmit} className="card max-w-md self-start p-7">
          <div className="mb-4">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="label" htmlFor="pw">Password</label>
            <input id="pw" type="password" className="input" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn btn-primary w-full">Sign in →</button>
          <div className="mono mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-muted">
            <a href="#" className="hover:text-oxblood">Forgot password?</a>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
