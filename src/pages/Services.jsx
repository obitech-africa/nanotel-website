import React from "react";
import { NavLink } from "react-router-dom";

const asset = (path) => `${import.meta.env.BASE_URL}images/${path}`;

const FEATURED_LINES = [
  {
    title: "Telecom EPC & Infrastructure",
    eyebrow: "Core Infrastructure",
    desc: "End-to-end telecommunications infrastructure delivery for network expansion, modernization, and field deployment programs.",
    bullets: [
      "Fiber rollout and backbone expansion",
      "Civil works, tower construction, and site modernization",
      "Base station installation and integration",
      "Network testing, commissioning, and acceptance",
      "Site surveys, upgrades, and field engineering support",
    ],
    images: [
      { src: asset("gallery-1.jpg"), alt: "Telecommunications infrastructure environment" },
      { src: asset("telecom-1.jpg"), alt: "Telecom field infrastructure" },
      { src: asset("telecom-2.jpg"), alt: "Telecom network deployment" },
      { src: asset("telecom-3.jpg"), alt: "Telecom infrastructure project" },
      { src: asset("gallery-2.jpg"), alt: "Network deployment environment" },
    ],
  },
  {
    title: "Energy & Power Infrastructure",
    eyebrow: "Resilient Power",
    desc: "Reliable power infrastructure for telecom, ICT, enterprise, and remote operating environments.",
    bullets: [
      "Solar-powered telecom and ICT sites",
      "Hybrid energy systems",
      "Battery backup and power resilience",
      "Power monitoring and protection systems",
      "Energy efficiency and remote-site power support",
    ],
    images: [
      { src: asset("gallery-3.jpg"), alt: "Energy and power infrastructure" },
      { src: asset("energy-1.jpg"), alt: "Telecom energy infrastructure" },
      { src: asset("energy-2.jpg"), alt: "Renewable energy system" },
      { src: asset("energy-3.jpg"), alt: "Power infrastructure environment" },
    ],
  },
  {
    title: "ICT, Cloud & Digital Infrastructure",
    eyebrow: "Digital Systems",
    desc: "Enterprise ICT, cloud integration, structured networks, and digital infrastructure that support modern operations.",
    bullets: [
      "Enterprise network architecture and deployment",
      "Cloud readiness, integration, and technical support",
      "Structured cabling and systems integration",
      "Data platforms, dashboards, and operational visibility",
      "Security, access governance, and technical lifecycle support",
    ],
    images: [
      { src: asset("gallery-4.jpg"), alt: "ICT cloud and digital infrastructure" },
    ],
  },
  {
    title: "Data Centre Infrastructure",
    eyebrow: "Critical Facilities",
    desc: "Data centre infrastructure design, installation, commissioning, and operational support for reliable digital environments.",
    bullets: [
      "Rack layout and structured cabling",
      "Power, UPS, batteries, and monitoring",
      "Cooling and environmental infrastructure",
      "Equipment installation and integration",
      "Testing, documentation, commissioning, and support",
    ],
    images: [
      { src: asset("datacenter-3.jpg"), alt: "Data centre technical environment" },
      { src: asset("datacenter-1.jpg"), alt: "Data centre installation environment" },
      { src: asset("datacenter-2.jpg"), alt: "Data centre racks and infrastructure" },
      { src: asset("gallery-5.jpg"), alt: "Data centre infrastructure project" },
    ],
  },
  {
    title: "OEM & Technology Partnerships",
    eyebrow: "Equipment Ecosystem",
    desc: "Technical and delivery support for OEMs, equipment vendors, technology partners, and regional infrastructure programs.",
    bullets: [
      "Equipment sourcing and technical alignment",
      "OEM coordination and local deployment support",
      "Installation, integration, and commissioning",
      "Acceptance testing and documentation",
      "Maintenance and after-sales technical support",
    ],
    images: [
      { src: asset("equipment-1.jpg"), alt: "Telecommunications equipment" },
      { src: asset("equipment-2.jpg"), alt: "Network equipment infrastructure" },
      { src: asset("equipment-3.jpg"), alt: "Carrier equipment environment" },
    ],
  },
  {
    title: "Managed Services & Field Operations",
    eyebrow: "Operations",
    desc: "SLA-driven field operations and technical support focused on uptime, quality, safety, and measurable service performance.",
    bullets: [
      "Preventive and corrective maintenance",
      "Field service management",
      "Network optimization and KPI support",
      "Quality assurance and reporting",
      "Multi-vendor technical operations",
    ],
    images: [
      { src: asset("gallery-6.jpg"), alt: "Telecom field operations environment" },
    ],
  },
];

const SPECIALIST_LINES = [
  {
    title: "Operators & TowerCos Support",
    desc: "Infrastructure services, upgrades, multi-vendor support, SLA maintenance, and technical delivery for operators and tower companies.",
    icon: <IconShield />,
  },
  {
    title: "Satellite & Remote Connectivity",
    desc: "VSAT, satellite backhaul, and connectivity support for rural, remote, and hard-to-reach locations.",
    icon: <IconSatellite />,
  },
  {
    title: "AI & Smart Network Intelligence",
    desc: "Analytics, automation, anomaly detection, dashboards, and predictive maintenance support for network operations.",
    icon: <IconBrain />,
  },
  {
    title: "EV Charging & Smart Mobility",
    desc: "EV charging infrastructure planning, deployment, monitoring, and support for cities, fleets, and transport corridors.",
    icon: <IconBolt />,
  },
  {
    title: "Workforce & Training",
    desc: "Technical workforce scaling, training, certification support, supervision, and deployment-ready field teams.",
    icon: <IconUsers />,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_75%_25%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white/80 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Business Lines • Delivery • Infrastructure • Innovation
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
            Business Lines
          </h1>

          <p className="mt-5 max-w-3xl text-white/80 text-lg leading-relaxed">
            Nanotel Africa combines telecommunications, power, ICT, data centre,
            equipment, and field-operations capability to support infrastructure
            projects from planning through deployment and long-term operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Request a Proposal
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner with Us
            </NavLink>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <section>
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Delivery Portfolio
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Infrastructure capabilities
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Each business line combines practical engineering, field execution,
              technical documentation, quality control, and long-term support.
            </p>
          </div>

          <div className="mt-10 grid gap-10">
            {FEATURED_LINES.map((item) => (
              <ServiceSection key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Specialist Capabilities
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Extending the infrastructure ecosystem
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              These capabilities complement our core delivery portfolio and support
              evolving connectivity, mobility, workforce, and digital operations needs.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SPECIALIST_LINES.map((item) => (
              <SpecialistCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-slate-900 text-white p-8 md:p-10 shadow-xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wide text-white/60">
              Project Delivery
            </div>
            <h2 className="mt-3 text-3xl font-extrabold">
              Let’s scope the right infrastructure solution.
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              We support operators, TowerCos, enterprises, governments, institutions,
              OEMs, investors, and development partners across the infrastructure lifecycle.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Contact
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner & Investment Inquiries
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
}

function ServiceSection({ title, eyebrow, desc, bullets, images }) {
  const [lead, ...supporting] = images;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 md:p-9">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
            {eyebrow}
          </div>

          <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {desc}
          </p>

          <ul className="mt-6 grid gap-3 text-slate-700">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-h-[300px] bg-slate-100">
          <SafeImage
            src={lead.src}
            alt={lead.alt}
            className="h-full min-h-[300px] w-full object-cover"
          />
        </div>
      </div>

      {supporting.length > 0 && (
        <div className="border-t border-slate-200 bg-slate-50 p-5">
          <div className={`grid gap-4 ${
            supporting.length === 1
              ? "grid-cols-1"
              : supporting.length === 2
              ? "sm:grid-cols-2"
              : supporting.length === 3
              ? "sm:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}>
            {supporting.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <SafeImage
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function SpecialistCard({ title, desc, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function SafeImage({ src, alt, className }) {
  const [ok, setOk] = React.useState(true);

  if (!ok) {
    return (
      <div className="h-full min-h-[160px] w-full bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 flex items-center justify-center">
        <span className="text-sm font-semibold text-slate-500">
          Nanotel Infrastructure
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setOk(false)}
    />
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

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
      <path d="M13 2L3 14h8l-1 8 11-14h-8V2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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
