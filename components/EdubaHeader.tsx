import Link from "next/link";

type Props = {
  // When set, the right-side action becomes a link to /signin etc.
  rightSlot?: "signin" | "dashboard" | "none";
};

export default function EdubaHeader({ rightSlot = "signin" }: Props) {
  return (
    <header className="border-b border-warmGray bg-cream">
      <div className="container-page flex items-center justify-between py-5">
        <Link href="/" className="mono text-[11px] uppercase tracking-[0.22em] text-charcoal">
          Eduba
          <span className="mx-2 text-warmGrayDark">/</span>
          <span className="text-muted">Talent</span>
        </Link>
        <Link href="/" className="font-serif text-[15px] tracking-tight text-charcoal hover:text-oxblood">
          Clief Notes Talent
        </Link>
        {rightSlot === "signin" && (
          <Link href="/signin" className="mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-oxblood">
            Sign in →
          </Link>
        )}
        {rightSlot === "dashboard" && (
          <Link href="/candidate/dashboard" className="mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-oxblood">
            Dashboard →
          </Link>
        )}
        {rightSlot === "none" && <span className="w-16" />}
      </div>
    </header>
  );
}
