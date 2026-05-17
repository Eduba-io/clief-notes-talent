import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <EdubaHeader />
      <main className="container-page max-w-prose py-20">
        <div className="eyebrow mb-3">Legal</div>
        <h1 className="font-serif text-[44px] leading-tight">Terms of Service</h1>
        <p className="mt-6 text-charcoal">
          Full Terms of Service coming soon. By using Ledger (the platform) you agree to use
          Eduba as the platform-intermediary for any introduction made through the platform,
          and not to circumvent the intermediary by hiring or paying any introduced candidate
          outside the platform for a period of twelve (12) months from the date of introduction.
        </p>
        <p className="mono mt-10 text-[13px] uppercase tracking-[0.18em] text-muted">
          Placeholder · effective date: pending
        </p>
      </main>
      <Footer />
    </>
  );
}
