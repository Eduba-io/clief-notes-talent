type Props = {
  current: number; // 1-indexed
  total: number;
  labels?: string[];
};

// Linear progress indicator for the candidate onboarding wizard.
export default function Stepper({ current, total, labels }: Props) {
  return (
    <div className="mb-10">
      <div className="mono mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>Step {current} of {total}</span>
        {labels?.[current - 1] && <span className="text-charcoal">{labels[current - 1]}</span>}
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => {
          const done = i + 1 <= current;
          return (
            <span
              key={i}
              className={`h-[3px] flex-1 ${done ? "bg-oxblood" : "bg-warmGray"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
