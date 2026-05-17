// Mock data for the Clief Notes Talent demo.
// All values here are intentionally hardcoded — there is no backend.

export type Availability = "actively-looking" | "open-to-offers" | "not-looking";
export type RemotePolicy = "remote-only" | "hybrid" | "on-site-ok";
export type Cohort = "Technical" | "Operator" | "Strategy" | "Hybrid";

export type PortfolioItem = {
  id: string;
  title: string;
  kind: "PDF" | "Image" | "Video" | "Link";
  description: string;
};

export type Reference = {
  name: string;
  title: string;
  quote: string;
};

export type Candidate = {
  id: string;
  firstName: string;
  lastInitial: string;
  city: string;
  country: string;
  headline: string;
  photo: string;
  typeOfWork: string[];
  skills: string[];
  availability: Availability;
  salaryMin: number;
  salaryMax: number;
  hourlyMin: number;
  hourlyMax: number;
  remote: RemotePolicy;
  cohort: Cohort;
  featured: boolean;
  status: "Approved" | "In Review" | "Hidden" | "Rejected";
  bio: string;
  videoIntro: string;
  portfolio: PortfolioItem[];
  references: Reference[];
  currentEmployer?: string;
};

export type Company = {
  id: string;
  name: string;
  industry: string;
  size: string;
  website: string;
  status: "Approved" | "In Review" | "Rejected";
  contactName: string;
  contactRole: string;
  joinedISO: string;
  introRequests: number;
  placements: number;
};

export type IntroRequest = {
  id: string;
  companyId: string;
  companyName: string;
  candidateId: string;
  candidateName: string;
  message: string;
  status: "Pending" | "Approved" | "Rejected";
  createdISO: string;
};

export type Placement = {
  id: string;
  candidateId: string;
  candidateName: string;
  companyId: string;
  companyName: string;
  role: string;
  feeAmount: number;
  status: "Active" | "Fee Owed" | "Fee Paid" | "Replacement Owed" | "Completed";
  startedISO: string;
  timeline: { dateISO: string; event: string }[];
};

export type AdminNote = {
  id: string;
  targetId: string;
  targetKind: "candidate" | "company";
  author: "Matt" | "Jake" | "Cleo";
  dateISO: string;
  body: string;
};

// ---------- Candidates ----------

export const candidates: Candidate[] = [
  {
    id: "sarah-k",
    firstName: "Sarah",
    lastInitial: "K.",
    city: "Austin, TX",
    country: "USA",
    headline: "Builds AI agents for legal and compliance teams",
    photo: "https://i.pravatar.cc/240?img=47",
    typeOfWork: ["agent building", "RAG", "evals"],
    skills: ["Claude", "LangChain", "Python", "Pinecone", "Postgres"],
    availability: "actively-looking",
    salaryMin: 145000,
    salaryMax: 185000,
    hourlyMin: 120,
    hourlyMax: 175,
    remote: "remote-only",
    cohort: "Technical",
    featured: true,
    status: "Approved",
    currentEmployer: "Independent (ex-Stripe risk)",
    bio:
      "Built a contract-review agent that took a 12-person legal ops team from 40 hours of review per week down to four. Spent six years writing rules engines at Stripe before going independent. Cares deeply about evals — every agent she ships has a 200+ case test suite she runs in CI.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Contract-Review Agent — Case Study", kind: "PDF", description: "How a Series C fintech cut 36 hours of weekly legal review with a Claude-powered intake agent." },
      { id: "p2", title: "Eval Harness Walkthrough", kind: "Video", description: "10-minute screencast of the test infrastructure she built around it." },
      { id: "p3", title: "Open-source RAG starter", kind: "Link", description: "Forked 1.2k times. The starter most of her clients begin with." },
      { id: "p4", title: "Architecture diagram", kind: "Image", description: "System design for the contract intake pipeline." },
    ],
    references: [
      { name: "Daniel Voss", title: "VP Legal Ops, Mercator Health", quote: "Sarah is the only AI contractor we've worked with who shipped something we still use a year later." },
      { name: "Priya Shenoy", title: "Eng Manager, Stripe (former)", quote: "If I were starting a company tomorrow and needed one AI hire, it would be Sarah." },
    ],
  },
  {
    id: "marcus-c",
    firstName: "Marcus",
    lastInitial: "C.",
    city: "Brooklyn, NY",
    country: "USA",
    headline: "RAG and search infrastructure for content-heavy products",
    photo: "https://i.pravatar.cc/240?img=12",
    typeOfWork: ["RAG", "agent building"],
    skills: ["Claude", "ChatGPT", "Python", "TypeScript", "Weaviate", "Postgres"],
    availability: "open-to-offers",
    salaryMin: 160000,
    salaryMax: 210000,
    hourlyMin: 135,
    hourlyMax: 200,
    remote: "hybrid",
    cohort: "Technical",
    featured: true,
    status: "Approved",
    currentEmployer: "Senior Engineer, mid-size media company",
    bio:
      "Spent the last 18 months building the recommendation and semantic-search layer for a national news publication. Previously shipped infra at Spotify. Likes problems where the data is messy and the user's intent is ambiguous.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Semantic search rebuild", kind: "PDF", description: "Write-up of how he replaced Elasticsearch with a hybrid retrieval stack." },
      { id: "p2", title: "Latency benchmarks", kind: "Image", description: "Side-by-side p95 latency vs legacy system." },
      { id: "p3", title: "Talk: 'When not to use RAG'", kind: "Video", description: "30-min conference talk from late 2025." },
    ],
    references: [
      { name: "Rachel Mendez", title: "CTO, Beacon Media", quote: "Marcus is the first engineer I've worked with who treats retrieval as an engineering problem, not a model problem." },
    ],
  },
  {
    id: "priya-p",
    firstName: "Priya",
    lastInitial: "P.",
    city: "Toronto, ON",
    country: "Canada",
    headline: "Computer-use automations for back-office ops",
    photo: "https://i.pravatar.cc/240?img=49",
    typeOfWork: ["computer use", "agent building", "content automation"],
    skills: ["Claude", "Playwright", "TypeScript", "n8n", "Cursor"],
    availability: "actively-looking",
    salaryMin: 130000,
    salaryMax: 165000,
    hourlyMin: 110,
    hourlyMax: 150,
    remote: "remote-only",
    cohort: "Hybrid",
    featured: true,
    status: "Approved",
    currentEmployer: "Independent",
    bio:
      "Replaces tedious back-office workflows with computer-use agents. Recent wins: a 4-hour weekly invoice reconciliation collapsed into a 12-minute job. Comes from an industrial-engineering background, which shows up in how methodically she instruments and monitors what she ships.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Invoice reconciliation case study", kind: "PDF", description: "Before/after on a 4-hour weekly task that became a 12-minute cron." },
      { id: "p2", title: "Computer-use demo", kind: "Video", description: "Two-minute screencast of the agent in action." },
      { id: "p3", title: "Monitoring dashboard", kind: "Image", description: "Grafana board she ships with every project." },
    ],
    references: [
      { name: "Alex Cho", title: "Head of Ops, Lattice Logistics", quote: "She found three workflows we didn't even realize were costing us money." },
      { name: "Marie Lefebvre", title: "Director, AP Automation", quote: "Calm, careful, ships what she says she'll ship." },
    ],
  },
  {
    id: "jordan-r",
    firstName: "Jordan",
    lastInitial: "R.",
    city: "Denver, CO",
    country: "USA",
    headline: "AI ops + workflow automation for non-technical teams",
    photo: "https://i.pravatar.cc/240?img=33",
    typeOfWork: ["no-code", "content automation", "agent building"],
    skills: ["ChatGPT", "Claude", "n8n", "Zapier", "Airtable"],
    availability: "open-to-offers",
    salaryMin: 95000,
    salaryMax: 130000,
    hourlyMin: 85,
    hourlyMax: 125,
    remote: "remote-only",
    cohort: "Operator",
    featured: false,
    status: "Approved",
    currentEmployer: "AI Ops Lead, fast-growing DTC brand",
    bio:
      "Operator who learned to build. Designs and ships internal AI tools that marketing, support, and ops teams will actually use. Quietly responsible for ~$300k of annual labor savings at her current employer.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Internal tools tour", kind: "Video", description: "Walkthrough of 4 internal tools, redacted." },
      { id: "p2", title: "Adoption write-up", kind: "PDF", description: "How she got 80% of the marketing team to use a new content tool in 3 weeks." },
    ],
    references: [
      { name: "Maya Trent", title: "VP Marketing", quote: "I'd hire Jordan again at twice the rate." },
    ],
  },
  {
    id: "david-a",
    firstName: "David",
    lastInitial: "A.",
    city: "Seattle, WA",
    country: "USA",
    headline: "Fine-tuning and model evaluation for regulated industries",
    photo: "https://i.pravatar.cc/240?img=15",
    typeOfWork: ["fine-tuning", "evals"],
    skills: ["Python", "PyTorch", "Claude", "Weights & Biases", "Postgres"],
    availability: "actively-looking",
    salaryMin: 180000,
    salaryMax: 240000,
    hourlyMin: 150,
    hourlyMax: 225,
    remote: "hybrid",
    cohort: "Technical",
    featured: false,
    status: "Approved",
    currentEmployer: "Independent (ex-Anthropic researcher)",
    bio:
      "ML research background. Currently focused on small-model fine-tuning and rigorous offline evaluation for healthcare and finance customers where they can't ship anything they can't explain.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Eval framework", kind: "Link", description: "Open-source eval harness for domain-specific QA." },
      { id: "p2", title: "Healthcare fine-tune writeup", kind: "PDF", description: "Anonymized case study from a payer client." },
    ],
    references: [
      { name: "Dr. Lena Park", title: "Chief Medical Officer", quote: "He was the only candidate who pushed back on our metric choice — and he was right." },
    ],
  },
  {
    id: "ana-l",
    firstName: "Ana",
    lastInitial: "L.",
    city: "Mexico City",
    country: "Mexico",
    headline: "Multilingual customer-support agents",
    photo: "https://i.pravatar.cc/240?img=44",
    typeOfWork: ["agent building", "RAG"],
    skills: ["Claude", "ChatGPT", "TypeScript", "Postgres", "n8n"],
    availability: "open-to-offers",
    salaryMin: 110000,
    salaryMax: 145000,
    hourlyMin: 95,
    hourlyMax: 135,
    remote: "remote-only",
    cohort: "Technical",
    featured: false,
    status: "Approved",
    currentEmployer: "Independent",
    bio:
      "Builds support agents for products with users across 5+ languages. Cares about handoff to human agents being graceful, which most builders neglect. Fluent in Spanish, English, Portuguese.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Trilingual agent in production", kind: "Video", description: "Recorded calls (anonymized) of the agent handling EN/ES/PT." },
      { id: "p2", title: "Handoff playbook", kind: "PDF", description: "When and how to hand off to a human." },
    ],
    references: [
      { name: "Rafael Souza", title: "Head of CX", quote: "Cut our average response time in half without making our CSAT drop." },
    ],
  },
  {
    id: "tom-h",
    firstName: "Tom",
    lastInitial: "H.",
    city: "London",
    country: "UK",
    headline: "Internal AI tooling for engineering teams",
    photo: "https://i.pravatar.cc/240?img=68",
    typeOfWork: ["agent building", "no-code"],
    skills: ["Cursor", "Claude", "TypeScript", "Python", "GitHub Actions"],
    availability: "actively-looking",
    salaryMin: 120000,
    salaryMax: 160000,
    hourlyMin: 100,
    hourlyMax: 145,
    remote: "hybrid",
    cohort: "Hybrid",
    featured: false,
    status: "Approved",
    currentEmployer: "Staff Engineer, fintech scale-up",
    bio:
      "Specializes in the unglamorous internal tooling that makes other engineers 10–20% faster — PR review assistants, on-call summarizers, incident postmortem drafts. Has the ear of senior engineers because he's one of them.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "PR review bot postmortem", kind: "PDF", description: "What worked, what didn't, after 6 months in production." },
    ],
    references: [
      { name: "Aoife Doyle", title: "Director of Engineering", quote: "Tom built things our platform team had wanted to build for two years and never got around to." },
    ],
  },
  {
    id: "yuki-t",
    firstName: "Yuki",
    lastInitial: "T.",
    city: "San Francisco, CA",
    country: "USA",
    headline: "Voice agents and real-time AI interfaces",
    photo: "https://i.pravatar.cc/240?img=25",
    typeOfWork: ["agent building", "computer use"],
    skills: ["Claude", "OpenAI Realtime", "TypeScript", "WebRTC", "Postgres"],
    availability: "open-to-offers",
    salaryMin: 170000,
    salaryMax: 220000,
    hourlyMin: 140,
    hourlyMax: 200,
    remote: "on-site-ok",
    cohort: "Technical",
    featured: true,
    status: "Approved",
    currentEmployer: "Founding engineer, stealth voice AI startup",
    bio:
      "One of a small number of builders shipping production voice agents that don't sound like 2018. Background in audio DSP. Will tell you very honestly when voice is the wrong choice, which is more often than vendors admit.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Voice latency teardown", kind: "PDF", description: "Where the 400ms goes and how to claw it back." },
      { id: "p2", title: "Demo: appointment scheduling agent", kind: "Video", description: "End-to-end call with a real voice agent." },
    ],
    references: [
      { name: "Hannah Reyes", title: "Founder", quote: "Yuki is the rare AI engineer who also has taste." },
    ],
  },
  {
    id: "kemi-o",
    firstName: "Kemi",
    lastInitial: "O.",
    city: "Lagos",
    country: "Nigeria",
    headline: "Content automation for media and creator businesses",
    photo: "https://i.pravatar.cc/240?img=29",
    typeOfWork: ["content automation", "agent building", "no-code"],
    skills: ["Claude", "ChatGPT", "Python", "n8n", "Airtable"],
    availability: "actively-looking",
    salaryMin: 75000,
    salaryMax: 110000,
    hourlyMin: 65,
    hourlyMax: 105,
    remote: "remote-only",
    cohort: "Operator",
    featured: false,
    status: "Approved",
    currentEmployer: "Independent",
    bio:
      "Runs a one-person agency that does content production pipelines for creators with 100k+ audiences. Knows the difference between AI content that gets engagement and AI content that gets unsubscribed.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Newsletter pipeline", kind: "Image", description: "Diagram of a creator's weekly content stack." },
      { id: "p2", title: "Engagement results", kind: "PDF", description: "Before/after for three creator clients." },
    ],
    references: [
      { name: "Tope Adekunle", title: "Creator, 240k newsletter", quote: "Kemi quintupled my output without changing my voice." },
    ],
  },
  {
    id: "ben-w",
    firstName: "Ben",
    lastInitial: "W.",
    city: "Chicago, IL",
    country: "USA",
    headline: "AI strategy for non-technical executives",
    photo: "https://i.pravatar.cc/240?img=53",
    typeOfWork: ["evals", "no-code"],
    skills: ["ChatGPT", "Claude", "Notion AI"],
    availability: "open-to-offers",
    salaryMin: 150000,
    salaryMax: 200000,
    hourlyMin: 200,
    hourlyMax: 350,
    remote: "hybrid",
    cohort: "Strategy",
    featured: false,
    status: "Approved",
    currentEmployer: "Fractional, multiple",
    bio:
      "Former McKinsey, now a fractional AI strategist for mid-market companies. Job is mostly translating between the executives writing the checks and the builders doing the work. Rarely writes code but always knows when the code is wrong.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "AI roadmap template", kind: "PDF", description: "The deck he uses to align an exec team in one workshop." },
    ],
    references: [
      { name: "Marshall Pike", title: "CEO, $200M industrial co.", quote: "Ben kept us from burning 18 months on the wrong thing." },
    ],
  },
  {
    id: "elena-v",
    firstName: "Elena",
    lastInitial: "V.",
    city: "Berlin",
    country: "Germany",
    headline: "Evaluation, observability, and AI quality engineering",
    photo: "https://i.pravatar.cc/240?img=20",
    typeOfWork: ["evals", "RAG", "agent building"],
    skills: ["Python", "Claude", "OpenTelemetry", "Postgres", "Braintrust"],
    availability: "actively-looking",
    salaryMin: 140000,
    salaryMax: 180000,
    hourlyMin: 120,
    hourlyMax: 170,
    remote: "remote-only",
    cohort: "Technical",
    featured: false,
    status: "Approved",
    currentEmployer: "Independent",
    bio:
      "If you have an AI feature in production and you don't know whether it's getting worse, Elena is the person. Spent four years at a fintech making sure regulators were happy with model behavior. Now does the same for AI products.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "Eval-as-CI talk", kind: "Video", description: "How to treat evals like tests." },
      { id: "p2", title: "Observability checklist", kind: "PDF", description: "The 18 questions she asks before signing a contract." },
    ],
    references: [
      { name: "Stefan Bauer", title: "VP Eng", quote: "Elena found three silent regressions in our agent in her first week." },
    ],
  },
  {
    id: "raj-s",
    firstName: "Raj",
    lastInitial: "S.",
    city: "Bangalore",
    country: "India",
    headline: "Full-stack AI products from prototype to ship",
    photo: "https://i.pravatar.cc/240?img=60",
    typeOfWork: ["agent building", "RAG", "no-code"],
    skills: ["TypeScript", "Next.js", "Claude", "Postgres", "Vercel"],
    availability: "open-to-offers",
    salaryMin: 100000,
    salaryMax: 140000,
    hourlyMin: 80,
    hourlyMax: 130,
    remote: "remote-only",
    cohort: "Technical",
    featured: false,
    status: "Approved",
    currentEmployer: "Founding engineer, YC-backed seed-stage startup",
    bio:
      "Built six AI products end-to-end in the last 18 months — some for clients, three of his own. Fast, opinionated, ships. The kind of person you hire when you have an idea on Monday and need a working prototype by Friday.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [
      { id: "p1", title: "AI product gallery", kind: "Link", description: "Live links to six shipped products." },
      { id: "p2", title: "How I ship in a week", kind: "PDF", description: "His personal playbook." },
    ],
    references: [
      { name: "Ishaan Verma", title: "Co-founder", quote: "Raj is the closest thing to a 10x engineer I've actually worked with." },
    ],
  },
  // ---- Extra candidates (admin-only states) ----
  {
    id: "noor-h",
    firstName: "Noor",
    lastInitial: "H.",
    city: "Dubai",
    country: "UAE",
    headline: "Vertical AI for property management",
    photo: "https://i.pravatar.cc/240?img=41",
    typeOfWork: ["agent building", "RAG"],
    skills: ["Claude", "Python", "Postgres"],
    availability: "actively-looking",
    salaryMin: 110000,
    salaryMax: 145000,
    hourlyMin: 95,
    hourlyMax: 135,
    remote: "hybrid",
    cohort: "Technical",
    featured: false,
    status: "In Review",
    bio: "Applied last week. Pending Skool verification.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [],
    references: [],
  },
  {
    id: "leon-d",
    firstName: "Leon",
    lastInitial: "D.",
    city: "Paris",
    country: "France",
    headline: "Generative design tooling for product teams",
    photo: "https://i.pravatar.cc/240?img=51",
    typeOfWork: ["agent building", "content automation"],
    skills: ["Claude", "TypeScript", "Figma API"],
    availability: "open-to-offers",
    salaryMin: 130000,
    salaryMax: 170000,
    hourlyMin: 110,
    hourlyMax: 155,
    remote: "remote-only",
    cohort: "Hybrid",
    featured: false,
    status: "In Review",
    bio: "Applied 3 days ago. Cohort match looks strong; reference check in progress.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [],
    references: [],
  },
  {
    id: "hannah-b",
    firstName: "Hannah",
    lastInitial: "B.",
    city: "Boston, MA",
    country: "USA",
    headline: "Evals for clinical decision support",
    photo: "https://i.pravatar.cc/240?img=10",
    typeOfWork: ["evals"],
    skills: ["Python", "Claude"],
    availability: "actively-looking",
    salaryMin: 165000,
    salaryMax: 200000,
    hourlyMin: 140,
    hourlyMax: 185,
    remote: "remote-only",
    cohort: "Technical",
    featured: false,
    status: "In Review",
    bio: "Pending compliance review.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [],
    references: [],
  },
  {
    id: "samir-q",
    firstName: "Samir",
    lastInitial: "Q.",
    city: "Houston, TX",
    country: "USA",
    headline: "AI ops for industrial supply chains",
    photo: "https://i.pravatar.cc/240?img=58",
    typeOfWork: ["agent building", "no-code"],
    skills: ["ChatGPT", "n8n"],
    availability: "not-looking",
    salaryMin: 0,
    salaryMax: 0,
    hourlyMin: 0,
    hourlyMax: 0,
    remote: "hybrid",
    cohort: "Operator",
    featured: false,
    status: "Hidden",
    bio: "Hidden at candidate's request — accepted a full-time role.",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [],
    references: [],
  },
  {
    id: "claire-m",
    firstName: "Claire",
    lastInitial: "M.",
    city: "Atlanta, GA",
    country: "USA",
    headline: "(Profile rejected)",
    photo: "https://i.pravatar.cc/240?img=24",
    typeOfWork: [],
    skills: [],
    availability: "actively-looking",
    salaryMin: 0,
    salaryMax: 0,
    hourlyMin: 0,
    hourlyMax: 0,
    remote: "remote-only",
    cohort: "Operator",
    featured: false,
    status: "Rejected",
    bio: "Rejected — did not pass Skool verification (not a Premium or VIP member).",
    videoIntro: "dQw4w9WgXcQ",
    portfolio: [],
    references: [],
  },
];

// ---------- Companies ----------

export const companies: Company[] = [
  { id: "co1", name: "Hexley & Pratt", industry: "Legal Tech", size: "51–200", website: "hexley.com", status: "Approved", contactName: "Diane Reagan", contactRole: "Head of People", joinedISO: "2026-02-11", introRequests: 4, placements: 1 },
  { id: "co2", name: "Lattice Logistics", industry: "Logistics", size: "200–500", website: "latticelogistics.com", status: "Approved", contactName: "Alex Cho", contactRole: "VP Operations", joinedISO: "2026-01-22", introRequests: 6, placements: 2 },
  { id: "co3", name: "Beacon Media", industry: "Media", size: "201–500", website: "beaconmedia.com", status: "Approved", contactName: "Rachel Mendez", contactRole: "CTO", joinedISO: "2026-03-04", introRequests: 3, placements: 1 },
  { id: "co4", name: "Mercator Health", industry: "Healthcare", size: "501–1k", website: "mercatorhealth.com", status: "Approved", contactName: "Daniel Voss", contactRole: "VP Legal Ops", joinedISO: "2025-11-18", introRequests: 8, placements: 1 },
  { id: "co5", name: "Northwind Capital", industry: "Finance", size: "11–50", website: "northwindcap.com", status: "Approved", contactName: "Marcus Reid", contactRole: "COO", joinedISO: "2026-04-02", introRequests: 2, placements: 0 },
  { id: "co6", name: "Forge & Co.", industry: "Manufacturing", size: "1k+", website: "forge-co.com", status: "Approved", contactName: "Susan Mei", contactRole: "Chief Digital Officer", joinedISO: "2026-02-26", introRequests: 5, placements: 0 },
  { id: "co7", name: "Stack Studio", industry: "Software", size: "11–50", website: "stackstudio.dev", status: "In Review", contactName: "Owen Tran", contactRole: "Founder", joinedISO: "2026-05-10", introRequests: 0, placements: 0 },
  { id: "co8", name: "Pillar Insurance", industry: "Insurance", size: "501–1k", website: "pillarins.com", status: "In Review", contactName: "Helena Marsh", contactRole: "Head of Innovation", joinedISO: "2026-05-12", introRequests: 0, placements: 0 },
];

// ---------- Intro Requests ----------

export const introRequests: IntroRequest[] = [
  { id: "ir1", companyId: "co1", companyName: "Hexley & Pratt", candidateId: "sarah-k", candidateName: "Sarah K.", message: "We're rebuilding our contract intake and Sarah's case study is exactly the shape of what we need. Could we get on a call?", status: "Pending", createdISO: "2026-05-15" },
  { id: "ir2", companyId: "co3", companyName: "Beacon Media", candidateId: "marcus-c", candidateName: "Marcus C.", message: "We saw the semantic search rebuild writeup. Marcus is already in our industry — would love an intro.", status: "Pending", createdISO: "2026-05-14" },
  { id: "ir3", companyId: "co2", companyName: "Lattice Logistics", candidateId: "priya-p", candidateName: "Priya P.", message: "We have a 6-figure annual back-office workflow we'd like to automate. Priya seems like the right fit.", status: "Pending", createdISO: "2026-05-13" },
  { id: "ir4", companyId: "co5", companyName: "Northwind Capital", candidateId: "yuki-t", candidateName: "Yuki T.", message: "Building a voice-first analyst tool. Need someone who's actually shipped voice agents.", status: "Pending", createdISO: "2026-05-12" },
];

// ---------- Placements ----------

export const placements: Placement[] = [
  {
    id: "pl1",
    candidateId: "sarah-k",
    candidateName: "Sarah K.",
    companyId: "co4",
    companyName: "Mercator Health",
    role: "Senior AI Engineer (contract-to-hire)",
    feeAmount: 28500,
    status: "Active",
    startedISO: "2026-04-22",
    timeline: [
      { dateISO: "2026-04-02", event: "Intro request received" },
      { dateISO: "2026-04-04", event: "Eduba intro made" },
      { dateISO: "2026-04-11", event: "First interview completed" },
      { dateISO: "2026-04-22", event: "Engagement started" },
    ],
  },
  {
    id: "pl2",
    candidateId: "marcus-c",
    candidateName: "Marcus C.",
    companyId: "co3",
    companyName: "Beacon Media",
    role: "Search Infrastructure Lead (fractional)",
    feeAmount: 19000,
    status: "Fee Owed",
    startedISO: "2026-03-15",
    timeline: [
      { dateISO: "2026-02-28", event: "Intro request received" },
      { dateISO: "2026-03-01", event: "Eduba intro made" },
      { dateISO: "2026-03-15", event: "Engagement started" },
      { dateISO: "2026-05-15", event: "Invoice issued — 30 day terms" },
    ],
  },
  {
    id: "pl3",
    candidateId: "priya-p",
    candidateName: "Priya P.",
    companyId: "co2",
    companyName: "Lattice Logistics",
    role: "Automation Engineer (3-month engagement)",
    feeAmount: 14250,
    status: "Fee Paid",
    startedISO: "2026-02-04",
    timeline: [
      { dateISO: "2026-01-20", event: "Intro request received" },
      { dateISO: "2026-01-21", event: "Eduba intro made" },
      { dateISO: "2026-02-04", event: "Engagement started" },
      { dateISO: "2026-03-08", event: "Invoice issued" },
      { dateISO: "2026-03-21", event: "Payment received" },
    ],
  },
  {
    id: "pl4",
    candidateId: "tom-h",
    candidateName: "Tom H.",
    companyId: "co6",
    companyName: "Forge & Co.",
    role: "AI Tooling Engineer (FT)",
    feeAmount: 36000,
    status: "Replacement Owed",
    startedISO: "2026-01-10",
    timeline: [
      { dateISO: "2025-12-12", event: "Intro request received" },
      { dateISO: "2025-12-13", event: "Eduba intro made" },
      { dateISO: "2026-01-10", event: "Engagement started" },
      { dateISO: "2026-04-30", event: "Candidate departed within guarantee window — replacement owed" },
    ],
  },
  {
    id: "pl5",
    candidateId: "jordan-r",
    candidateName: "Jordan R.",
    companyId: "co1",
    companyName: "Hexley & Pratt",
    role: "AI Ops (6-month engagement)",
    feeAmount: 12000,
    status: "Completed",
    startedISO: "2025-10-01",
    timeline: [
      { dateISO: "2025-09-15", event: "Intro request received" },
      { dateISO: "2025-09-17", event: "Eduba intro made" },
      { dateISO: "2025-10-01", event: "Engagement started" },
      { dateISO: "2025-10-30", event: "Invoice issued and paid" },
      { dateISO: "2026-04-01", event: "Engagement completed cleanly" },
    ],
  },
];

// ---------- Admin notes ----------

export const adminNotes: AdminNote[] = [
  { id: "n1", targetId: "sarah-k", targetKind: "candidate", author: "Matt", dateISO: "2026-04-30", body: "Got off a call with Sarah. She's our strongest contract-review person right now. Push her to Mercator and Hexley." },
  { id: "n2", targetId: "sarah-k", targetKind: "candidate", author: "Jake", dateISO: "2026-05-10", body: "Confirmed Premium status. Three independent refs check out." },
  { id: "n3", targetId: "marcus-c", targetKind: "candidate", author: "Matt", dateISO: "2026-04-20", body: "Marcus is open to fractional only right now. Don't pitch him on full-time roles." },
  { id: "n4", targetId: "co6", targetKind: "company", author: "Cleo", dateISO: "2026-05-05", body: "Forge & Co. has had two replacement claims — review before next placement." },
];

// ---------- Reference lists for filters / multi-selects ----------

export const ALL_SKILLS = [
  "Claude",
  "ChatGPT",
  "LangChain",
  "n8n",
  "Cursor",
  "Python",
  "TypeScript",
  "Next.js",
  "Postgres",
  "Pinecone",
  "Weaviate",
  "Playwright",
  "PyTorch",
  "OpenAI Realtime",
];

export const ALL_TYPES_OF_WORK = [
  "agent building",
  "RAG",
  "content automation",
  "computer use",
  "fine-tuning",
  "evals",
  "no-code",
];

export const ALL_COHORTS: Cohort[] = ["Technical", "Operator", "Strategy", "Hybrid"];

export const availabilityLabel = (a: Availability) =>
  a === "actively-looking" ? "Actively looking"
    : a === "open-to-offers" ? "Open to offers"
    : "Not looking";

export const availabilityDot = (a: Availability) =>
  a === "actively-looking" ? "#2f7a3b"
    : a === "open-to-offers" ? "#b88a2f"
    : "#8a8275";

export const remoteLabel = (r: RemotePolicy) =>
  r === "remote-only" ? "Remote only"
    : r === "hybrid" ? "Hybrid"
    : "On-site OK";

export const formatSalary = (min: number, max: number) =>
  min === 0 && max === 0
    ? "—"
    : `$${(min / 1000).toFixed(0)}k – $${(max / 1000).toFixed(0)}k`;

export const formatHourly = (min: number, max: number) =>
  min === 0 && max === 0 ? "—" : `$${min}/hr – $${max}/hr`;

export const featuredCandidates = () => candidates.filter((c) => c.featured && c.status === "Approved");
export const publicCandidates = () => candidates.filter((c) => c.status === "Approved");
export const candidateById = (id: string) => candidates.find((c) => c.id === id);
export const companyById = (id: string) => companies.find((c) => c.id === id);
export const placementById = (id: string) => placements.find((p) => p.id === id);
export const notesFor = (targetId: string) => adminNotes.filter((n) => n.targetId === targetId);
