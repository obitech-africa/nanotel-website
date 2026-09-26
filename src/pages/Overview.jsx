import React from "react";
import { NavLink } from "react-router-dom";

const MISSION = [
  "Deliver reliable telecommunications, ICT, and digital infrastructure solutions.",
  "Support operators, enterprises, governments, and institutions through quality engineering and technical services.",
  "Provide practical energy and technology solutions for resilient infrastructure operations.",
  "Build strong local technical capacity through innovation, skills development, and knowledge transfer.",
  "Develop long-term partnerships that create value for customers, communities, and stakeholders.",
];

const CAPABILITIES = [
  {
    number: "01",
    eyebrow: "Core Infrastructure",
    title: "Telecom EPC & Infrastructure",
    text: "End-to-end telecommunications infrastructure delivery for network expansion, modernization, and field deployment programs.",
  },
  {
    number: "02",
    eyebrow: "Resilient Power",
    title: "Energy & Power Infrastructure",
    text: "Reliable power infrastructure for telecom, ICT, enterprise, and remote operating environments.",
  },
  {
    number: "03",
    eyebrow: "Digital Systems",
    title: "ICT, Cloud & Digital Infrastructure",
    text: "Enterprise ICT, cloud integration, structured networks, and digital infrastructure that support modern operations.",
  },
  {
    number: "04",
    eyebrow: "Critical Facilities",
    title: "Data Centre Infrastructure",
    text: "Data centre infrastructure design, installation, commissioning, and operational support for reliable digital environments.",
  },
  {
    number: "05",
    eyebrow: "Equipment Ecosystem",
    title: "OEM & Technology Partnerships",
    text: "Technical and delivery support for OEMs, equipment vendors, technology partners, and regional infrastructure programs.",
  },
  {
    number: "06",
    eyebrow: "Operations",
    title: "Managed Services & Field Operations",
    text: "SLA-driven field operations and technical support focused on uptime, quality, safety, and measurable service performance.",
  },
];

const INDUSTRIES = [
  "Telecom Operators",
  "Internet Service Providers",
  "Tower Companies",
  "Government & Public Sector",
  "Enterprises",
  "Development Organizations",
];

const VALUES = [
  "Engineering Excellence",
  "Reliable Delivery",
  "Innovation & Continuous Improvement",
  "Integrity & Transparency",
  "Pan-African Collaboration",
  "Sustainability & Inclusion",
];

export default function Overview() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(16,185,129,0.16),transparent_36%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-18 md:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Company Overview
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Nanotel Africa
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-white/80 md:text-xl">
              Nanotel Africa is a telecommunications and technology infrastructure
              company focused on supporting connectivity, digital transformation,
              and infrastructure development across African markets.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <NavLink
                to="/services"
                className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-white/90"
              >
                Explore Business Lines
              </NavLink>

              <NavLink
                to="/contact"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
              >
                Contact Nanotel
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        {/* COMPANY PROFILE CARDS */}
        <section>
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Company Profile
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                Telecommunications, technology, and infrastructure development across African markets.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                We work with telecom operators, internet service providers, tower
                companies, enterprises, institutions, development organizations, and
                public-sector projects that require dependable infrastructure delivery,
                technical support, and long-term operational reliability.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                Our approach combines engineering discipline, local understanding,
                reliable execution, and responsible partnerships to support practical
                infrastructure solutions for real operating environments.
              </p>
            </article>

            <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-sm md:p-9">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Corporate Focus
              </div>

              <div className="mt-6 grid gap-5">
                <FocusItem title="Connectivity" />
                <FocusItem title="Digital Transformation" />
                <FocusItem title="Infrastructure Development" />
                <FocusItem title="African Markets" />
              </div>
            </aside>
          </div>
        </section>

        {/* VISION + MISSION */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">
              Our Vision
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Trusted infrastructure partner for Africa&apos;s digital growth
            </h2>

            <p className="mt-5 leading-relaxed text-slate-700">
              To be a trusted African telecommunications and digital infrastructure
              company delivering reliable connectivity, technology solutions, and
              sustainable infrastructure that support economic growth and digital
              transformation across the continent.
            </p>
          </article>

          <article className="rounded-3xl border border-blue-100 bg-blue-50/60 p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">
              Our Mission
            </div>

            <ul className="mt-5 grid gap-4">
              {MISSION.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="mt-16">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Core Capabilities
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Business lines supporting infrastructure delivery and operations.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CAPABILITIES.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-extrabold text-slate-400">
                    {item.number}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                    {item.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-emerald-500 transition-all group-hover:w-20" />
              </article>
            ))}
          </div>

          <div className="mt-7">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 font-extrabold text-blue-800 hover:underline"
            >
              View detailed Business Lines
              <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </section>

        {/* MARKETS + VALUES */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Markets We Support
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
              Industries served
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {INDUSTRIES.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Corporate Values
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
              How we work
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                >
                  <span className="font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* CLOSING */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 p-8 text-white shadow-xl md:p-10">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">
              What We Stand For
            </div>

            <h2 className="mt-3 text-3xl font-extrabold">
              Reliable infrastructure is the foundation of digital transformation.
            </h2>

            <p className="mt-4 leading-relaxed text-white/75">
              At Nanotel Africa, we believe reliable infrastructure is the foundation
              of digital transformation. Our work is guided by a commitment to quality,
              practical engineering, responsible partnerships, and long-term value creation.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-white/90"
            >
              View Business Lines
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Partner with Us
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
}

function FocusItem({ title }) {
  return (
    <div className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="font-bold text-white">{title}</span>
      </div>
    </div>
  );
}
