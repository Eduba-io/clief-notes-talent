type Props = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
};

// Bordered, courier-mono pill. The signature tag style for the platform.
export default function SkillTag({ children, tone = "default" }: Props) {
  const toneClass =
    tone === "accent"
      ? "border-oxblood text-oxblood"
      : tone === "muted"
      ? "border-warmGray text-muted"
      : "border-charcoal text-charcoal";
  return (
    <span
      className={`mono inline-flex items-center border ${toneClass} bg-transparent px-2 py-[3px] text-[11px] uppercase tracking-[0.08em] leading-none`}
    >
      {children}
    </span>
  );
}
