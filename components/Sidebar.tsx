"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = { label: string; href: string };

type Props = {
  title: string;
  items: SidebarItem[];
  footer?: React.ReactNode;
};

// Left-rail nav shared by the candidate dashboard, company dashboard and admin panel.
export default function Sidebar({ title, items, footer }: Props) {
  const pathname = usePathname();
  return (
    <aside className="w-56 shrink-0 border-r border-warmGray pr-6 pt-2">
      <div className="mono mb-5 text-[11px] uppercase tracking-[0.22em] text-muted">{title}</div>
      <nav className="space-y-0.5">
        {items.map((it) => {
          const active = pathname === it.href || (it.href !== "/" && pathname.startsWith(it.href));
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`block border-l-2 px-3 py-1.5 font-serif text-[15px] ${
                active
                  ? "border-oxblood bg-cream-deep text-charcoal"
                  : "border-transparent text-charcoal/85 hover:border-warmGray hover:text-charcoal"
              }`}
            >
              {it.label}
            </Link>
          );
        })}
      </nav>
      {footer && <div className="mt-8 border-t border-warmGray pt-4 text-sm text-muted">{footer}</div>}
    </aside>
  );
}
