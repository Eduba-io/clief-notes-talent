import { candidates } from "@/lib/mock-data";
import CandidateProfile from "./CandidateProfile";

// Pre-render a static page for every candidate at build time.
export function generateStaticParams() {
  return candidates.map((c) => ({ id: c.id }));
}

export default function CompanyCandidatePage({ params }: { params: { id: string } }) {
  return <CandidateProfile id={params.id} mode="company" />;
}
