import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-warmGray">
      <div className="container-page grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="mono mb-3 text-[11px] uppercase tracking-[0.22em] text-muted">Eduba</div>
          <p className="text-sm text-charcoal">
            Veteran-owned AI consulting and training. Build. Teach. Govern.
          </p>
          <p className="mt-3 text-sm text-muted">contact@eduba.io</p>
        </div>
        <div>
          <div className="mono mb-3 text-[11px] uppercase tracking-[0.22em] text-muted">The Platform</div>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/candidate/signup" className="hover:text-oxblood">For candidates</Link></li>
            <li><Link href="/company/signup" className="hover:text-oxblood">For companies</Link></li>
            <li><Link href="/signin" className="hover:text-oxblood">Sign in</Link></li>
          </ul>
        </div>
        <div>
          <div className="mono mb-3 text-[11px] uppercase tracking-[0.22em] text-muted">Legal</div>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/terms" className="hover:text-oxblood">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-oxblood">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-warmGray">
        <div className="container-page mono flex items-center justify-between py-4 text-[10px] uppercase tracking-[0.22em] text-muted">
          <span>© 2026 Eduba LLC</span>
          <span>Clief Notes Talent · v0.1 · demo</span>
        </div>
      </div>
    </footer>
  );
}
