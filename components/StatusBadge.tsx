import { Availability, availabilityDot, availabilityLabel } from "@/lib/mock-data";

type Props = {
  availability?: Availability;
  label?: string;
  dotColor?: string;
};

export default function StatusBadge({ availability, label, dotColor }: Props) {
  const text = label ?? (availability ? availabilityLabel(availability) : "Unknown");
  const color = dotColor ?? (availability ? availabilityDot(availability) : "#8a8275");
  return (
    <span className="mono inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] text-charcoal">
      <span
        aria-hidden
        className="inline-block h-[8px] w-[8px] rounded-full"
        style={{ backgroundColor: color }}
      />
      {text}
    </span>
  );
}
