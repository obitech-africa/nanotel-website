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
    eyebrowClass: "text-blue-800 bg-blue-50 border-blue-100 group-hover:bg-blue-700 group-hover:text-white group-active:bg-blue-800",
    cardClass: "hover:border-blue-300 hover:bg-blue-50/40 active:bg-blue-50",
    barClass: "bg-blue-600",
  },
  {
    number: "02",
    eyebrow: "Resilient Power",
    title: "Energy & Power Infrastructure",
    text: "Reliable power infrastructure for telecom, ICT, enterprise, and remote operating environments.",
    eyebrowClass: "text-amber-800 bg-amber-50 border-amber-100 group-hover:bg-amber-500 group-hover:text-slate-950 group-active:bg-amber-600",
    cardClass: "hover:border-amber-300 hover:bg-amber-50/40 active:bg-amber-50",
    barClass: "bg-amber-500",
  },
  {
    number: "03",
    eyebrow: "Digital Systems",
    title: "ICT, Cloud & Digital Infrastructure",
    text: "Enterprise ICT, cloud integration, structured networks, and digital infrastructure that support modern operations.",
    eyebrowClass: "text-violet-800 bg-violet-50 border-violet-100 group-hover:bg-violet-700 group-hover:text-white group-active:bg-violet-800",
    cardClass: "hover:border-violet-300 hover:bg-violet-50/40 active:bg-violet-50",
    barClass: "bg-violet-600",
  },
  {
    number: "04",
    eyebrow: "Critical Facilities",
    title: "Data Centre Infrastructure",
    text: "Data centre infrastructure design, installation, commissioning, and operational support for reliable digital environments.",
    eyebrowClass: "text-cyan-800 bg-cyan-50 border-cyan-100 group-hover:bg-cyan-700 group-hover:text-white group-active:bg-cyan-800",
    cardClass: "hover:border-cyan-300 hover:bg-cyan-50/40 active:bg-cyan-50",
    barClass: "bg-cyan-600",
  },
  {
    number: "05",
    eyebrow: "Equipment Ecosystem",
    title: "OEM & Technology Partnerships",
    text: "Technical and delivery support for OEMs, equipment vendors, technology partners, and regional infrastructure programs.",
    eyebrowClass: "text-emerald-800 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white group-active:bg-emerald-800",
    cardClass: "hover:border-emerald-300 hover:bg-emerald-50/40 active:bg-emerald-50",
    barClass: "bg-emerald-600",
  },
  {
    number: "06",
    eyebrow: "Operations",
    title: "Managed Services & Field Operations",
    text: "SLA-driven field operations and technical support focused on uptime, quality, safety, and measurable service performance.",
    eyebrowClass: "text-rose-800 bg-rose-50 border-rose-100 group-hover:bg-rose-700 group-hover:text-white group-active:bg-rose-800",
    cardClass: "hover:border-rose-300 hover:bg-rose-50/40 active:bg-rose-50",
    barClass: "bg-rose-600",
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

      <main>
        {/* COMPANY OVERVIEW */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Company Overview
            </div>

            <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Nanotel Africa is a telecommunications and technology infrastructure company.
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-700">
              Nanotel Africa is a telecommunications and technology infrastructure
              company focused on supporting connectivity, digital transformation,
              and infrastructure development across African markets.
            </p>

            <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
              Our approach combines engineering discipline, local understanding,
              reliable execution, and responsible partnerships to support practical
              infrastructure solutions for real operating environments.
            </p>
          </article>

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
        </section>

        {/* CORE CAPABILITIES */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
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
                  className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 ${item.cardClass}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm font-extrabold text-slate-400 transition-colors group-hover:text-slate-700">
                      {item.number}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${item.eyebrowClass}`}
                    >
                      {item.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.text}
                  </p>

                  <div
                    className={`mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24 ${item.barClass}`}
                  />
                </article>
              ))}
            </div>

            <div className="mt-8">
              <NavLink
                to="/services"
                className="inline-flex items-center gap-2 font-extrabold text-blue-800 hover:underline"
              >
                View detailed Business Lines
                <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </section>

        {/* INDUSTRIES SERVED */}
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Markets We Support
              </div>

              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Industries served
              </h2>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white px-5 py-5 text-slate-950 shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="font-extrabold">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATE VALUES */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Corporate Values
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
              How we work
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <span className="font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </article>

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
        </section>
      </main>
    </div>
  );
}
