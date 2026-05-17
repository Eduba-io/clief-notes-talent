import Link from "next/link";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <EdubaHeader />

      {/* Hero */}
      <section className="border-b border-warmGray">
        <div className="container-page grid grid-cols-1 gap-12 py-24 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <div className="eyebrow mb-6">By Eduba · For the Clief Notes community</div>
            <h1 className="font-serif text-[64px] leading-[1.05] tracking-tight text-charcoal md:text-[84px]">
              Hire the builders who&rsquo;ve actually built things.
            </h1>
            <p className="mt-8 max-w-prose text-[18px] leading-relaxed text-charcoal">
              Clief Notes Talent is a private network of operators, engineers, and strategists who
              have shipped real AI work — vetted by Eduba, drawn from the Clief Notes Lyceum and
              broader Premium community, and introduced to companies who pay for outcomes rather
              than promises.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/company/signup" className="btn btn-primary">I&rsquo;m hiring →</Link>
              <Link href="/candidate/signup" className="btn">I&rsquo;m a candidate</Link>
              <Link href="/company/browse" className="mono ml-2 text-[13px] uppercase tracking-[0.18em] text-muted hover:text-oxblood">
                or browse the directory →
              </Link>
            </div>
          </div>

          {/* Editorial side card — a literary-magazine aside */}
          <aside className="md:col-span-4">
            <div className="card sticky top-8 p-6">
              <div className="eyebrow mb-3">Issue 001 · May 2026</div>
              <h3 className="font-serif text-[22px] leading-snug">The Faces of Interface</h3>
              <p className="mt-3 text-sm text-charcoal">
                A reading on the builders behind the AI systems that companies are quietly relying
                on this year — and how Eduba places them.
              </p>
              <div className="rule" />
              <dl className="mono space-y-2 text-[13px] uppercase tracking-[0.12em] text-muted">
                <div className="flex justify-between"><dt>Active candidates</dt><dd className="text-charcoal">12</dd></div>
                <div className="flex justify-between"><dt>Hiring companies</dt><dd className="text-charcoal">6</dd></div>
                <div className="flex justify-between"><dt>Placements YTD</dt><dd className="text-charcoal">5</dd></div>
                <div className="flex justify-between"><dt>Avg. time to intro</dt><dd className="text-charcoal">36 hrs</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-warmGray">
        <div className="container-page py-20">
          <div className="eyebrow mb-3">§ 1 · How it works</div>
          <h2 className="font-serif text-[36px] leading-tight md:text-[44px]">
            Curation over scale.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <Column
              kicker="For candidates"
              title="Get put in front of companies hiring for what you actually do."
              body="Build a portfolio in a 5-step intake, get verified by Eduba against your Skool membership, and we surface you to companies whose roles match the work you&rsquo;ve done."
            />
            <Column
              kicker="For companies"
              title="One vetted shortlist instead of fifty cold applicants."
              body="Tell us the work you need shipped. We introduce you to two to four people from inside the Clief Notes community within 48 hours, with references already checked."
            />
            <Column
              kicker="For both"
              title="An intermediary you can trust to be honest with both sides."
              body="Eduba is the placement layer, the QA layer, and the platform layer. Fees are flat and transparent. The no-circumvention clause keeps the marketplace healthy."
            />
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="border-b border-warmGray">
        <div className="container-page grid grid-cols-1 gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">§ 2 · The difference</div>
            <h2 className="font-serif text-[36px] leading-tight">What makes Clief Notes different.</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[18px] leading-relaxed text-charcoal">
              Most AI talent platforms are job boards. We run a small list of people we know.
              Every candidate on Clief Notes is a Skool Premium or VIP member. We read their
              portfolio. We call their references. Every company signs terms that protect both
              sides of the introduction.
            </p>
            <div className="rule-thick mt-10" />
            <p className="mono mt-4 text-[13px] uppercase tracking-[0.18em] text-muted">
              No resume scraping. No paid placement. No spam. No AI-generated outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Logo wall placeholder */}
      <section className="border-b border-warmGray">
        <div className="container-page py-16 text-center">
          <div className="eyebrow mb-6">§ 3 · Companies we&rsquo;ve placed with</div>
          <p className="mono text-[12px] uppercase tracking-[0.18em] text-muted">
            Coming soon — placements published with permission.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-16 items-center justify-center border border-dashed border-warmGray bg-cream-deep/40"
              >
                <span className="mono text-[12px] uppercase tracking-[0.18em] text-warmGrayDark">
                  Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Column({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="border-t border-charcoal pt-5">
      <div className="mono mb-3 text-[12px] uppercase tracking-[0.22em] text-oxblood">{kicker}</div>
      <h3 className="font-serif text-[22px] leading-snug">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-charcoal">{body}</p>
    </div>
  );
}
