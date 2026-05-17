"use client";

import { ALL_SKILLS, ALL_TYPES_OF_WORK, ALL_COHORTS } from "@/lib/mock-data";

export type Filters = {
  typesOfWork: string[];
  skills: string[];
  availability: ("actively-looking" | "open-to-offers")[];
  remote: ("remote-only" | "hybrid" | "on-site-ok")[];
  cohort: string[];
  salaryMin: number;
};

type Props = {
  filters: Filters;
  setFilters: (f: Filters) => void;
};

function toggleIn<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-warmGray pb-5">
      <div className="mono mb-3 text-[10px] uppercase tracking-[0.22em] text-muted">{label}</div>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="mono flex cursor-pointer items-center gap-2 text-[12px] uppercase tracking-[0.06em] text-charcoal">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3 w-3 accent-oxblood"
      />
      {label}
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters }: Props) {
  return (
    <aside className="w-60 shrink-0 space-y-6 border-r border-warmGray pr-6">
      <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted">Filter</div>

      <Group label="Type of work">
        {ALL_TYPES_OF_WORK.map((t) => (
          <Check
            key={t}
            label={t}
            checked={filters.typesOfWork.includes(t)}
            onChange={() => setFilters({ ...filters, typesOfWork: toggleIn(filters.typesOfWork, t) })}
          />
        ))}
      </Group>

      <Group label="Skills">
        {ALL_SKILLS.slice(0, 7).map((s) => (
          <Check
            key={s}
            label={s}
            checked={filters.skills.includes(s)}
            onChange={() => setFilters({ ...filters, skills: toggleIn(filters.skills, s) })}
          />
        ))}
      </Group>

      <Group label="Availability">
        <Check
          label="Actively looking"
          checked={filters.availability.includes("actively-looking")}
          onChange={() => setFilters({ ...filters, availability: toggleIn(filters.availability, "actively-looking") })}
        />
        <Check
          label="Open to offers"
          checked={filters.availability.includes("open-to-offers")}
          onChange={() => setFilters({ ...filters, availability: toggleIn(filters.availability, "open-to-offers") })}
        />
      </Group>

      <Group label="Min. salary">
        <input
          type="range"
          min={50000}
          max={250000}
          step={5000}
          value={filters.salaryMin}
          onChange={(e) => setFilters({ ...filters, salaryMin: parseInt(e.target.value, 10) })}
          className="w-full accent-oxblood"
        />
        <div className="mono text-[11px] tracking-[0.08em] text-muted">
          ≥ ${(filters.salaryMin / 1000).toFixed(0)}k
        </div>
      </Group>

      <Group label="Remote policy">
        {(["remote-only", "hybrid", "on-site-ok"] as const).map((r) => (
          <Check
            key={r}
            label={r === "remote-only" ? "Remote only" : r === "hybrid" ? "Hybrid" : "On-site OK"}
            checked={filters.remote.includes(r)}
            onChange={() => setFilters({ ...filters, remote: toggleIn(filters.remote, r) })}
          />
        ))}
      </Group>

      <Group label="Lyceum cohort">
        {ALL_COHORTS.map((c) => (
          <Check
            key={c}
            label={c}
            checked={filters.cohort.includes(c)}
            onChange={() => setFilters({ ...filters, cohort: toggleIn(filters.cohort, c) })}
          />
        ))}
      </Group>
    </aside>
  );
}
