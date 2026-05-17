"use client";

import { useState } from "react";
import { toast } from "sonner";
import Modal from "@/components/Modal";
import { placements, Placement } from "@/lib/mock-data";

const statusColor: Record<Placement["status"], string> = {
  "Active": "#2f7a3b",
  "Fee Owed": "#b88a2f",
  "Fee Paid": "#5d2424",
  "Replacement Owed": "#a13b2c",
  "Completed": "#5b5443",
};

export default function AdminPlacementsPage() {
  const [open, setOpen] = useState<Placement | null>(null);
  const [invoiceFor, setInvoiceFor] = useState<Placement | null>(null);

  return (
    <main>
      <header className="mb-6 flex items-end justify-between border-b border-warmGray pb-3">
        <div>
          <div className="eyebrow mb-1">Revenue</div>
          <h1 className="font-serif text-[32px] leading-tight">Placements</h1>
        </div>
        <div className="mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {placements.length} placements · ${placements.reduce((a, p) => a + p.feeAmount, 0).toLocaleString()} total billings
        </div>
      </header>

      <div className="card overflow-hidden">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="border-b border-warmGray bg-cream-deep/50">
              {["Candidate", "Company", "Role", "Fee", "Status", "Started"].map((h) => (
                <th key={h} className="mono px-4 py-3 text-[10px] font-normal uppercase tracking-[0.18em] text-muted">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {placements.map((p) => (
              <tr
                key={p.id}
                className="cursor-pointer border-b border-warmGray last:border-b-0 hover:bg-cream-deep/30"
                onClick={() => setOpen(p)}
              >
                <td className="px-4 py-3 font-serif text-[15px]">{p.candidateName}</td>
                <td className="px-4 py-3 text-charcoal">{p.companyName}</td>
                <td className="px-4 py-3 text-charcoal">{p.role}</td>
                <td className="px-4 py-3 text-charcoal">${p.feeAmount.toLocaleString()}</td>
                <td className="mono px-4 py-3 text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: statusColor[p.status] }}>
                  {p.status}
                </td>
                <td className="mono px-4 py-3 text-[12px] text-muted">{p.startedISO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placement detail modal */}
      <Modal
        open={!!open}
        onClose={() => setOpen(null)}
        title={open ? `${open.candidateName} ↔ ${open.companyName}` : ""}
        width="lg"
        footer={
          <>
            <button onClick={() => setOpen(null)} className="btn btn-ghost">Close</button>
            <button
              onClick={() => { setInvoiceFor(open); setOpen(null); }}
              className="btn btn-primary"
            >
              Generate invoice →
            </button>
          </>
        }
      >
        {open && (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <Mini label="Role" value={open.role} />
              <Mini label="Fee" value={`$${open.feeAmount.toLocaleString()}`} />
              <Mini label="Status" value={open.status} color={statusColor[open.status]} />
            </div>

            <div>
              <div className="label mb-2">Timeline</div>
              <ol className="space-y-2 border-l-2 border-warmGray pl-4">
                {open.timeline.map((e, i) => (
                  <li key={i} className="text-[14px]">
                    <span className="mono mr-3 text-[11px] uppercase tracking-[0.14em] text-muted">{e.dateISO}</span>
                    {e.event}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="label mb-2">Fee breakdown</div>
              <div className="card p-4 text-[14px]">
                <Row label="Engagement type" value={open.role.includes("contract") ? "Contract" : "FT placement"} />
                <Row label="Base fee" value={`$${open.feeAmount.toLocaleString()}`} />
                <Row label="Net (after Stripe 2.9% + 30¢)" value={`$${(open.feeAmount * 0.971 - 0.30).toFixed(2)}`} />
                <Row label="Terms" value="Net 30, ACH preferred" />
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Invoice modal */}
      <Modal
        open={!!invoiceFor}
        onClose={() => { setInvoiceFor(null); }}
        title="Invoice draft"
        width="lg"
        footer={
          <>
            <button onClick={() => setInvoiceFor(null)} className="btn btn-ghost">Cancel</button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(invoiceText(invoiceFor!));
                toast.success("Invoice copied to clipboard.");
                setInvoiceFor(null);
              }}
              className="btn btn-primary"
            >
              Copy & close
            </button>
          </>
        }
      >
        {invoiceFor && (
          <pre className="mono whitespace-pre-wrap border border-warmGray bg-cream-deep/50 p-4 text-[12px] leading-relaxed text-charcoal">
{invoiceText(invoiceFor)}
          </pre>
        )}
      </Modal>
    </main>
  );
}

function Mini({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="card p-3">
      <div className="mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</div>
      <div className="font-serif text-[18px]" style={color ? { color } : undefined}>{value}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-warmGray py-1.5 last:border-b-0">
      <span className="mono text-[11px] uppercase tracking-[0.14em] text-muted">{label}</span>
      <span className="text-charcoal">{value}</span>
    </div>
  );
}

function invoiceText(p: Placement) {
  return `INVOICE — Eduba LLC
────────────────────────────────────
Issued:        ${new Date().toISOString().slice(0, 10)}
Invoice #:     EDU-${p.id.toUpperCase()}-${new Date().getFullYear()}
Bill to:       ${p.companyName}
Re:            Placement of ${p.candidateName} (${p.role})
Engagement start: ${p.startedISO}

Line items
────────────────────────────────────
  Placement fee per terms of service                $${p.feeAmount.toLocaleString()}

  Total due (USD)                                   $${p.feeAmount.toLocaleString()}

Terms: Net 30. ACH preferred (instructions on file).
Make payable to: Eduba LLC.

— Eduba | matt@eduba.io | jake@eduba.io`;
}
