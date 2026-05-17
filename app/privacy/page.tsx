import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <EdubaHeader />
      <main className="container-page max-w-prose py-20">
        <div className="eyebrow mb-3">Legal</div>
        <h1 className="font-serif text-[44px] leading-tight">Privacy Policy</h1>
        <p className="mt-6 text-charcoal">
          Full Privacy Policy coming soon. Ledger collects only what is needed to make
          introductions on your behalf. We show candidate profiles to verified companies only.
          We never sell candidate data. We never let an introduced company contact a candidate
          outside the platform.
        </p>
        <p className="mono mt-10 text-[13px] uppercase tracking-[0.18em] text-muted">
          Placeholder · effective date: pending
        </p>
      </main>
      <Footer />
    </>
  );
}
