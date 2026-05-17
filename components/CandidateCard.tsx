import Link from "next/link";
import { Candidate, formatSalary } from "@/lib/mock-data";
import SkillTag from "./SkillTag";
import StatusBadge from "./StatusBadge";

type Props = {
  candidate: Candidate;
  href?: string;
  variant?: "default" | "featured";
};

export default function CandidateCard({ candidate, href, variant = "default" }: Props) {
  const profileHref = href ?? `/company/candidate/${candidate.id}`;
  return (
    <article
      className={`card flex h-full flex-col gap-4 p-5 transition-colors hover:border-charcoal ${
        variant === "featured" ? "min-w-[280px]" : ""
      }`}
    >
      <header className="flex items-start gap-3">
        <img
          src={candidate.photo}
          alt={`${candidate.firstName} ${candidate.lastInitial}`}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border border-warmGray object-cover grayscale"
        />
        <div className="min-w-0 flex-1">
          <div className="font-serif text-[18px] leading-snug">
            {candidate.firstName} {candidate.lastInitial}
          </div>
          <div className="mono text-[13px] uppercase tracking-[0.12em] text-muted">
            {candidate.city}
          </div>
        </div>
        {candidate.featured && variant === "featured" && (
          <span className="mono border border-oxblood px-1.5 py-0.5 text-[9px] uppercase tracking-[0.18em] text-oxblood">
            Featured
          </span>
        )}
      </header>

      <p className="font-serif text-[15px] leading-snug text-charcoal">
        {candidate.headline}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {candidate.skills.slice(0, 3).map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>

      <div className="mt-auto flex items-end justify-between border-t border-warmGray pt-4">
        <div>
          <StatusBadge availability={candidate.availability} />
          <div className="mono mt-1.5 text-[13px] uppercase tracking-[0.08em] text-muted">
            {formatSalary(candidate.salaryMin, candidate.salaryMax)}
          </div>
        </div>
        <Link
          href={profileHref}
          className="mono text-[13px] uppercase tracking-[0.16em] text-oxblood hover:text-oxbloodDark"
        >
          View Profile →
        </Link>
      </div>
    </article>
  );
}
