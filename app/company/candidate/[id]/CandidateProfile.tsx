"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import EdubaHeader from "@/components/EdubaHeader";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import SkillTag from "@/components/SkillTag";
import StatusBadge from "@/components/StatusBadge";
import {
  candidateById,
  formatSalary,
  formatHourly,
  remoteLabel,
  notesFor,
} from "@/lib/mock-data";

type Props = {
  id: string;
  // The same profile is used for company-facing and admin-facing routes.
  // Admin mode reveals internal notes and toggles; company mode hides them.
  mode: "company" | "admin";
};

export default function CandidateProfile({ id, mode }: Props) {
  const c = candidateById(id);
  const [introOpen, setIntroOpen] = useState(false);
  const [portfolioItem, setPortfolioItem] = useState<string | null>(null);
  const [featured, setFeatured] = useState(c?.featured ?? false);
  const [hidden, setHidden] = useState(false);

  if (!c) {
    return (
      <>
        <EdubaHeader />
        <main className="container-page py-20">
          <h1 className="font-serif text-[32px]">Candidate not found.</h1>
          <Link href="/company/browse" className="btn btn-ghost mt-6">← Back to directory</Link>
        </main>
      </>
    );
  }

  const notes = mode === "admin" ? notesFor(c.id) : [];

  const submitIntro = () => {
    setIntroOpen(false);
    toast.success("Intro request sent to Eduba. We'll review and connect you within 24 hours.");
  };

  return (
    <>
      <EdubaHeader rightSlot="signin" />
      <main className="container-page py-10">
        {/* Breadcrumb */}
        <div className="mono mb-6 text-[13px] uppercase tracking-[0.18em] text-muted">
          <Link href={mode === "admin" ? "/admin/candidates" : "/company/browse"} className="hover:text-oxblood">
            ← {mode === "admin" ? "Candidates" : "Directory"}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <article className="md:col-span-8">
            {/* Header */}
            <header className="flex items-start gap-6 border-b border-warmGray pb-8">
              <img
                src={c.photo}
                alt={`${c.firstName} ${c.lastInitial}`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-full border border-warmGray object-cover grayscale"
              />
              <div className="flex-1">
                <div className="mono text-[13px] uppercase tracking-[0.18em] text-muted">
                  {c.city}, {c.country}
                </div>
                <h1 className="font-serif text-[40px] leading-tight">
                  {c.firstName} {c.lastInitial}
                </h1>
                <p className="mt-2 max-w-prose font-serif text-[18px] text-charcoal">
                  {c.headline}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <StatusBadge availability={c.availability} />
                  <span className="mono text-[13px] uppercase tracking-[0.12em] text-muted">
                    {remoteLabel(c.remote)}
                  </span>
                  <span className="mono text-[13px] uppercase tracking-[0.12em] text-muted">
                    Cohort · <span className="text-charcoal">{c.cohort}</span>
                  </span>
                </div>
              </div>
            </header>

            {/* Skills + work */}
            <section className="border-b border-warmGray py-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <div className="label mb-3">Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.skills.map((s) => <SkillTag key={s}>{s}</SkillTag>)}
                  </div>
                </div>
                <div>
                  <div className="label mb-3">Type of work</div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.typeOfWork.map((t) => <SkillTag key={t} tone="accent">{t}</SkillTag>)}
                  </div>
                </div>
              </div>
            </section>

            {/* Bio */}
            <section className="border-b border-warmGray py-8">
              <div className="label mb-3">Bio</div>
              <p className="max-w-prose font-serif text-[17px] leading-relaxed text-charcoal">
                {c.bio}
              </p>
              {c.currentEmployer && (
                <p className="mono mt-4 text-[13px] uppercase tracking-[0.14em] text-muted">
                  Currently · <span className="text-charcoal">{c.currentEmployer}</span>
                </p>
              )}
            </section>

            {/* Portfolio */}
            <section className="border-b border-warmGray py-8">
              <header className="mb-4 flex items-end justify-between">
                <div className="label">Portfolio</div>
                <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">
                  {c.portfolio.length} items
                </span>
              </header>
              {c.portfolio.length === 0 ? (
                <p className="text-sm text-muted">No portfolio items yet.</p>
              ) : (
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {c.portfolio.map((p) => (
                    <div key={p.id} className="card flex flex-col p-5">
                      <div className="mono mb-2 text-[12px] uppercase tracking-[0.18em] text-oxblood">{p.kind}</div>
                      <div className="font-serif text-[17px] leading-snug">{p.title}</div>
                      <p className="mt-2 flex-1 text-sm text-charcoal">{p.description}</p>
                      <button
                        type="button"
                        onClick={() => setPortfolioItem(p.title)}
                        className="mono mt-4 self-start text-[13px] uppercase tracking-[0.18em] text-oxblood hover:text-oxbloodDark"
                      >
                        View →
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Video intro */}
            <section className="border-b border-warmGray py-8">
              <div className="label mb-3">Video intro</div>
              <div className="aspect-video w-full overflow-hidden border border-warmGray bg-cream-deep">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${c.videoIntro}`}
                  title="Video intro"
                  allow="accelerometer; encrypted-media; picture-in-picture"
                />
              </div>
            </section>

            {/* References */}
            <section className="py-8">
              <div className="label mb-3">References</div>
              {c.references.length === 0 ? (
                <p className="text-sm text-muted">No references published yet.</p>
              ) : (
                <ul className="space-y-5">
                  {c.references.map((r, i) => (
                    <li key={i} className="border-l-2 border-oxblood pl-5">
                      <p className="font-serif text-[17px] italic leading-snug text-charcoal">
                        &ldquo;{r.quote}&rdquo;
                      </p>
                      <div className="mono mt-3 text-[13px] uppercase tracking-[0.14em] text-muted">
                        — <span className="text-charcoal">{r.name}</span> · {r.title} ·{" "}
                        <span className="text-oxblood">Verified by Eduba</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </article>

          {/* Sticky right rail */}
          <aside className="md:col-span-4">
            <div className="sticky top-6 space-y-4">
              {mode === "company" ? (
                <div className="card p-6">
                  <div className="label mb-3">Compensation</div>
                  <Row label="Salary" value={formatSalary(c.salaryMin, c.salaryMax)} />
                  <Row label="Hourly" value={formatHourly(c.hourlyMin, c.hourlyMax)} />
                  <button onClick={() => setIntroOpen(true)} className="btn btn-primary mt-5 w-full">
                    Request Intro →
                  </button>
                  <p className="mono mt-3 text-center text-[12px] uppercase tracking-[0.18em] text-muted">
                    Eduba reviews and connects within 24 hours
                  </p>
                </div>
              ) : (
                <div className="card p-6">
                  <div className="label mb-3">Admin controls</div>
                  <Toggle label="Featured" value={featured} onChange={setFeatured} />
                  <Toggle label="Hidden from directory" value={hidden} onChange={setHidden} />
                  <div className="rule" />
                  <Row label="Status" value={c.status} />
                  <Row label="Cohort" value={c.cohort} />
                  <Row label="Featured" value={featured ? "Yes" : "No"} />
                </div>
              )}

              {mode === "admin" && <InternalNotes notes={notes} />}
              {mode === "admin" && <ActivityLog />}
            </div>
          </aside>
        </div>
      </main>

      {/* Request Intro modal */}
      <Modal
        open={introOpen}
        onClose={() => setIntroOpen(false)}
        title={`Request intro to ${c.firstName} ${c.lastInitial}`}
        footer={
          <>
            <button onClick={() => setIntroOpen(false)} className="btn btn-ghost">Cancel</button>
            <button onClick={submitIntro} className="btn btn-primary">Send request →</button>
          </>
        }
      >
        <p className="mb-4 text-[15px] text-charcoal">
          Tell us why this candidate is a fit for your role. Eduba reviews every request — if
          there&rsquo;s a likely match, we&rsquo;ll connect you both within 24 hours.
        </p>
        <label className="label">Your message</label>
        <textarea className="textarea min-h-[140px]"
          defaultValue={`Hi — we're hiring for a role focused on ${c.typeOfWork[0] ?? "AI engineering"} and ${c.firstName}'s background looks like a strong match. Would love to talk.`}
        />
      </Modal>

      {/* Portfolio item preview modal */}
      <Modal
        open={!!portfolioItem}
        onClose={() => setPortfolioItem(null)}
        title={portfolioItem ?? ""}
        width="lg"
        footer={<button onClick={() => setPortfolioItem(null)} className="btn btn-ghost">Close</button>}
      >
        <div className="flex aspect-video w-full items-center justify-center border border-warmGray bg-cream-deep">
          <span className="mono text-[13px] uppercase tracking-[0.18em] text-muted">
            Preview placeholder — production would render this asset
          </span>
        </div>
      </Modal>

      {mode === "company" && <Footer />}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-warmGray py-2">
      <span className="mono text-[13px] uppercase tracking-[0.14em] text-muted">{label}</span>
      <span className="font-serif text-[15px] text-charcoal">{value}</span>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="mb-2 flex cursor-pointer items-center justify-between">
      <span className="font-serif text-[15px]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`mono inline-flex items-center border px-2 py-0.5 text-[12px] uppercase tracking-[0.18em] ${
          value ? "border-oxblood bg-oxblood text-cream" : "border-warmGray text-muted"
        }`}
      >
        {value ? "On" : "Off"}
      </button>
    </label>
  );
}

function InternalNotes({ notes }: { notes: { id: string; author: string; dateISO: string; body: string }[] }) {
  return (
    <div className="card p-6">
      <div className="label mb-3">Internal notes</div>
      {notes.length === 0 ? (
        <p className="text-sm text-muted">No notes yet.</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((n) => (
            <li key={n.id} className="border-l-2 border-warmGray pl-3">
              <div className="mono text-[12px] uppercase tracking-[0.18em] text-muted">
                <span className="text-charcoal">{n.author}</span> · {n.dateISO}
              </div>
              <p className="mt-1 text-[14px] text-charcoal">{n.body}</p>
            </li>
          ))}
        </ul>
      )}
      <textarea className="textarea mt-4 min-h-[80px]" placeholder="Add a note..." />
      <button className="btn btn-ghost mt-2 w-full text-[13px]">Add note</button>
    </div>
  );
}

function ActivityLog() {
  const events = [
    { iso: "2026-05-15", text: "Profile viewed by Hexley & Pratt" },
    { iso: "2026-05-13", text: "Intro request from Mercator Health (approved)" },
    { iso: "2026-05-10", text: "Profile viewed by Northwind Capital" },
    { iso: "2026-05-02", text: "Profile updated by candidate" },
  ];
  return (
    <div className="card p-6">
      <div className="label mb-3">Activity log</div>
      <ul className="space-y-2">
        {events.map((e, i) => (
          <li key={i} className="mono flex justify-between text-[13px] uppercase tracking-[0.1em] text-charcoal">
            <span>{e.text}</span><span className="text-muted">{e.iso}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
