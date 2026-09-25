import React from "react";
import { NavLink } from "react-router-dom";

export default function Services() {
  // ✅ Business Lines now includes: EVs, AI, Satellite, Cloud, Data Centre
  const lines = [
    {
      title: "Telecom EPC & Infrastructure",
      desc: "End-to-end delivery for telecom build programs, expansions, and modernization.",
      bullets: [
        "Fiber rollout & backbone expansion",
        "Civil works & site builds",
        "Tower construction & upgrade",
        "Power systems & commissioning",
      ],
      icon: <IconTower />,
    },
    {
      title: "Managed Services & Optimization",
      desc: "SLA-based operations and maintenance for performance, uptime, and reliability.",
      bullets: [
        "Preventive & corrective maintenance",
        "Network optimization & KPIs",
        "Field service management",
        "Quality controls & reporting",
      ],
      icon: <IconWrench />,
    },
    {
      title: "OEM & Technology Partnerships",
      desc: "Integration support for equipment vendors and deployment programs across Africa.",
      bullets: [
        "Equipment installation & integration",
        "Acceptance testing & documentation",
        "Rollout support & staffing",
        "Regional delivery coordination",
      ],
      icon: <IconHandshake />,
    },
    {
      title: "Operators & TowerCos Support",
      desc: "Infrastructure services supporting operators, TowerCos, and enterprise networks.",
      bullets: [
        "SLA-based maintenance",
        "Multi-vendor support",
        "Upgrade programs",
        "Compliance & safety practices",
      ],
      icon: <IconShield />,
    },
    {
      title: "Workforce & Training",
      desc: "Certified workforce scaling, training, and deployment support for field execution.",
      bullets: [
        "Training & certifications support",
        "Deployment-ready teams",
        "Supervision & QA checklists",
        "Cross-country resourcing",
      ],
      icon: <IconUsers />,
    },

    // ✅ NEW ADDITIONS:
    {
      title: "EV Charging & Smart Mobility",
      desc: "EV charging infrastructure deployment and monitoring for cities, fleets, and corridors.",
      bullets: [
        "Site planning & installation",
        "Grid connection & load assessment",
        "O&M monitoring & uptime reporting",
        "Fleet & enterprise programs",
      ],
      icon: <IconBolt />,
    },
    {
      title: "AI & Smart Network Intelligence",
      desc: "AI-enabled analytics and automation to improve network performance and reliability.",
      bullets: [
        "Anomaly detection & insights",
        "Predictive maintenance models",
        "Dashboards & service assurance",
        "Workflow automation integration",
      ],
      icon: <IconBrain />,
    },
    {
      title: "Satellite & Remote Connectivity",
      desc: "Satellite backhaul and rural connectivity for remote and hard-to-reach environments.",
      bullets: [
        "VSAT deployment & commissioning",
        "Satellite backhaul for towers",
        "Remote enterprise connectivity",
        "Field maintenance & support",
      ],
      icon: <IconSatellite />,
    },
    {
      title: "Cloud & Data Platforms",
      desc: "Cloud integration, data pipelines, dashboards, and secure operations visibility.",
      bullets: [
        "Cloud readiness & setup",
        "Data pipelines & integration",
        "Reporting dashboards",
        "Security & access governance",
      ],
      icon: <IconCloud />,
    },
    {
      title: "Data Centre Design & Installation",
      desc: "Data centre installation and commissioning: racks, power, cooling, cabling, and monitoring.",
      bullets: [
        "Rack layout & structured cabling",
        "UPS, batteries & monitoring",
        "Cooling & power integration",
        "Testing, documentation & commissioning",
      ],
      icon: <IconDataCenter />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white/80 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Business Lines • Delivery • Innovation
          </div>

          <h1 className="mt-5 text-white font-extrabold tracking-tight text-3xl md:text-5xl">
            Business Lines
          </h1>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-3xl">
            End-to-end telecom infrastructure, sustainable power, and next-generation digital systems —
            delivered reliably across Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold shadow-lg hover:bg-white/90 transition"
            >
              Request a Proposal
            </NavLink>
            <NavLink
              to="/contact?department=partners"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner with Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">What we deliver</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Practical execution, professional standards, and measurable outcomes — from deployment
              to managed operations and emerging technologies.
            </p>
          </div>

          <span className="text-sm text-slate-600">
            Pan-African Delivery • Compliance • KPI Driven
          </span>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lines.map((x) => (
            <div key={x.title} className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {x.icon}
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">{x.title}</div>
                  <div className="mt-1 text-sm text-slate-700 leading-relaxed">{x.desc}</div>
                </div>
              </div>

              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 grid gap-2">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl bg-slate-900 text-white p-8 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-white/70 text-sm font-semibold">Execution-ready</div>
            <div className="mt-1 text-2xl font-extrabold">Let’s scope and deploy your next project.</div>
            <div className="mt-2 text-white/80 text-sm">
              We support operators, TowerCos, governments, and enterprise networks.
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Contact
            </NavLink>
            <NavLink
              to="/contact?department=partners"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner & Investment Inquiries
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------ Icons (no libraries needed) ------------------ */
function IconTower() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-800">
      <path d="M12 2l3 20H9l3-20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 9a7 7 0 0110 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 12a4 4 0 016 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-800">
      <path
        d="M21 7a6 6 0 01-8.2 5.6L7 18.4a2 2 0 01-2.8 0l-.6-.6a2 2 0 010-2.8l5.8-5.8A6 6 0 0117 3l-3 3 4 4 3-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-800">
      <path d="M7 12l2 2a2 2 0 002.8 0l1.4-1.4a2 2 0 012.8 0L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 12l5-5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 12l-5-5-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-900">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
      <path d="M13 2L3 14h8l-1 8 11-14h-8l0-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-700">
      <path
        d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3v2a3 3 0 002 3v1a3 3 0 003 3h1m4-18a3 3 0 013 3v1a3 3 0 012 3v2a3 3 0 01-2 3v1a3 3 0 01-3 3h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconSatellite() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-700">
      <path d="M4 20l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 15a7 7 0 010-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 19a7 7 0 0010 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconCloud() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-800">
      <path
        d="M7 18a4 4 0 010-8 5 5 0 019.7-1.5A4 4 0 1117 18H7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconDataCenter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-800">
      <path d="M4 6h16v5H4V6z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 13h16v5H4v-5z" stroke="currentColor" strokeWidth="2" />
      <path d="M7 8h.01M10 8h.01M7 15h.01M10 15h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}