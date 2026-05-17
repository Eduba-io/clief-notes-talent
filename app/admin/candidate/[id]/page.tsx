import { candidates } from "@/lib/mock-data";
import CandidateProfile from "../../../company/candidate/[id]/CandidateProfile";

export function generateStaticParams() {
  return candidates.map((c) => ({ id: c.id }));
}

export default function AdminCandidatePage({ params }: { params: { id: string } }) {
  return <CandidateProfile id={params.id} mode="admin" />;
}
