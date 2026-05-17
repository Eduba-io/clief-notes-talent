import EdubaHeader from "@/components/EdubaHeader";
import Sidebar from "@/components/Sidebar";

const items = [
  { label: "Approval Queue", href: "/admin" },
  { label: "Candidates", href: "/admin/candidates" },
  { label: "Companies", href: "/admin/companies" },
  { label: "Placements", href: "/admin/placements" },
  { label: "Settings", href: "/admin#settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EdubaHeader rightSlot="none" />
      <div className="container-page flex gap-10 py-10">
        <Sidebar
          title="Eduba · Admin"
          items={items}
          footer={
            <div className="mono text-[11px] uppercase tracking-[0.14em]">
              Signed in as <br />
              <span className="text-charcoal">matt@eduba.io</span>
            </div>
          }
        />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
