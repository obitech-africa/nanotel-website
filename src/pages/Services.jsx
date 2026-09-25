import React from "react";
import { NavLink } from "react-router-dom";

const CORE_LINES = [
  {
    title: "Telecom Infrastructure & EPC",
    desc: "End-to-end delivery for telecom rollout, expansion, modernization, and site infrastructure programs.",
    bullets: [
      "Tower construction and upgrades",
      "Telecom site builds and civil works",
      "Fiber deployment and backbone expansion",
      "BTS and network equipment installation",
      "Power integration, testing, and commissioning",
      "Modernization and upgrade programs",
    ],
    icon: <IconTower />,
    image: "images/telecom-1.jpg",
  },
  {
    title: "Network Operations & Managed Services",
    desc: "SLA-driven operations and maintenance focused on uptime, performance, quality, and field execution.",
    bullets: [
      "Preventive and corrective maintenance",
      "Network monitoring and site maintenance",
      "SLA and KPI management",
      "Network optimization",
      "Field operations and reporting",
      "Quality assurance and corrective action",
    ],
    icon: <IconWrench />,
    image: "images/telecom-2.jpg",
  },
  {
    title: "Energy & Power Infrastructure",
    desc: "Power systems for telecom, ICT, and digital infrastructure environments that require reliable, resilient operations.",
    bullets: [
      "Solar and hybrid power systems",
      "Battery and backup systems",
      "Rectifiers and DC power",
      "Generator integration",
      "Energy monitoring",
      "Telecom-site and data-centre power support",
    ],
    icon: <IconBolt />,
    image: "images/solar-site.jpg",
  },
  {
    title: "ICT, Cloud & Digital Infrastructure",
    desc: "Enterprise and operational technology systems that connect infrastructure, users, data, and digital services.",
    bullets: [
      "Enterprise networking",
      "Structured cabling",
      "ICT infrastructure",
      "Cloud integration",
      "Operational dashboards",
      "Systems integration and support",
    ],
    icon: <IconCloud />,
    image: "images/equipment-2.jpg",
  },
  {
    title: "Data Centre Infrastructure",
    desc: "Design support, installation, integration, and commissioning for reliable data-centre and server-room environments.",
    bullets: [
      "Rack layout and installation",
      "Structured cabling",
      "UPS and battery systems",
      "Cooling and power integration",
      "Monitoring systems",
      "Testing, documentation, and commissioning",
    ],
    icon: <IconDataCenter />,
    image: "images/datacenter-1.jpg",
  },
  {
    title: "Connectivity & Remote Infrastructure",
    desc: "Connectivity solutions for rural, remote, enterprise, and hard-to-reach environments.",
    bullets: [
      "Satellite and VSAT deployment",
      "Remote enterprise connectivity",
      "Tower backhaul support",
      "Rural connectivity",
      "Hybrid connectivity solutions",
      "Field maintenance and support",
    ],
    icon: <IconSatellite />,
    image: "images/hero/satellite.jpg",
  },
];

const DELIVERY_CAPABILITIES = [
  {
    title: "OEM & Technology Partnerships",
    text: "Regional deployment, installation, integration, commissioning, documentation, and field support for technology vendors and OEM programs.",
    icon: <IconHandshake />,
  },
  {
    title: "Operator & TowerCo Support",
    text: "Technical delivery and managed support for mobile operators, ISPs, TowerCos, and network infrastructure owners.",
    icon: <IconShield />,
  },
  {
    title: "Technical Workforce & Project Resourcing",
    text: "Deployment-ready engineering and field resources for projects, supervision, quality assurance, and regional delivery requirements.",
    icon: <IconUsers />,
  },
  {
    title: "Equipment Supply & Integration",
    text: "Support for sourcing, supplying, integrating, and commissioning telecom, energy, network, and digital-infrastructure equipment.",
    icon: <IconEquipment />,
  },
];

const EMERGING = [
  {
    title: "AI & Smart Network Intelligence",
    text: "Predictive maintenance, anomaly detection, network analytics, automation, and smart operational monitoring.",
    icon: <IconBrain />,
  },
  {
    title: "EV Charging & Smart Mobility",
    text: "Charging infrastructure planning, power assessment, deployment, monitoring, and operations support.",
    icon: <IconBolt />,
  },
];

const INDUSTRIES = [
  "Mobile Network Operators",
  "Internet Service Providers",
  "Tower Companies",
  "Enterprises",
  "Government & Public Sector",
  "Utilities",
  "Institutions & Development Organizations",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_50%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Business Lines • Delivery • Innovation
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Business Lines
          </h1>

          <p className="mt-4 max-w-3xl text-base text-white/80 md:text-lg">
            Telecom infrastructure, managed operations, energy systems, digital
            infrastructure, data centres, and connectivity solutions — delivered
            for real operating environments across Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="rounded-2xl bg-white px-5 py-3 font-extrabold text-slate-950 shadow-lg transition hover:bg-white/90"
            >
              Project Inquiry
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Partner with Nanotel
            </NavLink>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-50 p-7 md:grid-cols-[1fr_0.75fr] md:p-10">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Core Business Lines
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                What Nanotel Africa delivers
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                Our commercial focus is organized around six infrastructure and
                technology business lines. Each line is supported by engineering,
                project delivery, operations, integration, and partnership capability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Infrastructure", "Operations", "Energy", "Digital"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/70 p-4 text-center font-extrabold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP LINE */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-xl lg:grid-cols-2">
            <div className="p-7 md:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                {CORE_LINES[0].icon}
              </div>

              <div className="mt-5 text-sm font-bold uppercase tracking-wider text-emerald-300">
                Flagship Business Line
              </div>

              <h2 className="mt-2 text-3xl font-extrabold">
                {CORE_LINES[0].title}
              </h2>

              <p className="mt-4 leading-relaxed text-white/70">
                {CORE_LINES[0].desc}
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                {CORE_LINES[0].bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}${CORE_LINES[0].image}`}
              alt="Telecom infrastructure and EPC delivery"
              className="h-full min-h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE GRID */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {CORE_LINES.slice(1).map((line) => (
              <BusinessLineCard key={line.title} line={line} />
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY CAPABILITIES */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-blue-800">
              Strategic Delivery Capabilities
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              How we extend delivery across projects and markets
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              These capabilities support our core business lines without being treated
              as separate commercial business lines on their own.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {DELIVERY_CAPABILITIES.map((item) => (
              <CapabilityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* EMERGING */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-950 to-emerald-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Emerging & Future Technologies
            </div>
            <h2 className="mt-2 text-3xl font-extrabold">
              Building capability for the next infrastructure cycle
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              We are developing selected capabilities that complement our core
              infrastructure business and position Nanotel for future demand.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {EMERGING.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSEMBLY & MANUFACTURING */}
      <section className="bg-emerald-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Industrial Growth Strategy
              </div>
              <h2 className="mt-2 text-3xl font-extrabold">
                Local Assembly & Manufacturing
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-white/75">
                Nanotel Africa&apos;s long-term industrial strategy includes local
                assembly and, progressively, manufacturing of selected
                telecommunications, energy, and digital-infrastructure equipment
                based on market demand, technical readiness, and partnership
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Telecom equipment",
                "Energy systems",
                "Digital infrastructure",
                "Knowledge transfer",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-blue-800">
              Industries We Serve
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Infrastructure support across critical sectors
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800 shadow-sm"
              >
                <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-950 to-emerald-950 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Work with Nanotel Africa
              </div>
              <h2 className="mt-2 text-3xl font-extrabold">
                Discuss your next infrastructure project
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Talk to us about deployment, modernization, operations, energy,
                digital infrastructure, data centres, connectivity, or partnership opportunities.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="rounded-xl bg-white px-5 py-3 font-extrabold text-slate-950 transition hover:bg-slate-100"
              >
                Project Inquiry
              </NavLink>

              <NavLink
                to="/contact?department=partners"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15"
              >
                Partner with Nanotel
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BusinessLineCard({ line }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img
        src={`${import.meta.env.BASE_URL}${line.image}`}
        alt={line.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
          {line.icon}
        </div>

        <h3 className="mt-5 text-xl font-extrabold text-slate-900">
          {line.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {line.desc}
        </p>

        <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          {line.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CapabilityCard({ item }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
        {item.icon}
      </div>
      <h3 className="mt-5 text-xl font-extrabold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
    </div>
  );
}

function IconTower() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-700">
      <path d="M12 2l3 20H9l3-20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 9a7 7 0 0110 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 12a4 4 0 016 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-800">
      <path d="M21 7a6 6 0 01-8.2 5.6L7 18.4a2 2 0 01-2.8 0l-.6-.6a2 2 0 010-2.8l5.8-5.8A6 6 0 0117 3l-3 3 4 4 3-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 12l2 2a2 2 0 002.8 0l1.4-1.4a2 2 0 012.8 0L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 12l5-5 4 4M22 12l-5-5-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
      <path d="M13 2L3 14h8l-1 8 11-14h-8V2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-400">
      <path d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3v2a3 3 0 002 3v1a3 3 0 003 3h1M15 4a3 3 0 013 3v1a3 3 0 012 3v2a3 3 0 01-2 3v1a3 3 0 01-3 3h-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconSatellite() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-700">
      <path d="M4 20l6-6M14 10l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 15a7 7 0 010-10M13 19a7 7 0 0010 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14l4 4M14 10l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-700">
      <path d="M7 18a4 4 0 010-8 5 5 0 019.7-1.5A4 4 0 1117 18H7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconDataCenter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
      <path d="M4 6h16v5H4V6zM4 13h16v5H4v-5z" stroke="currentColor" strokeWidth="2" />
      <path d="M7 8h.01M10 8h.01M7 15h.01M10 15h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IconEquipment() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
