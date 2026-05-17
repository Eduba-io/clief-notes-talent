import Link from "next/link";

type Props = {
  rightSlot?: "signin" | "dashboard" | "none";
};

export default function EdubaHeader({ rightSlot = "signin" }: Props) {
  return (
    <header className="border-b border-warmGray bg-cream">
      <div className="container-page flex items-center justify-between py-5">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-serif text-[24px] tracking-tight text-charcoal">Ledger</span>
          <span className="mono text-[12px] uppercase tracking-[0.12em] text-muted">by Eduba</span>
        </Link>
        {rightSlot === "signin" && (
          <Link href="/signin" className="mono text-[13px] uppercase tracking-[0.08em] text-charcoal hover:text-oxblood">
            Sign in
          </Link>
        )}
        {rightSlot === "dashboard" && (
          <Link href="/candidate/dashboard" className="mono text-[13px] uppercase tracking-[0.08em] text-charcoal hover:text-oxblood">
            Dashboard
          </Link>
        )}
        {rightSlot === "none" && <span aria-hidden className="w-16" />}
      </div>
    </header>
  );
}
