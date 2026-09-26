import React from "react";
import { NavLink } from "react-router-dom";

const MISSION = [
  "Deliver reliable telecommunications and digital infrastructure solutions across African markets.",
  "Support operators, enterprises, institutions, and public-sector projects with quality engineering and technical services.",
  "Provide practical infrastructure solutions for connectivity, energy, ICT, and digital operations.",
  "Promote innovation, operational excellence, and sustainable technology development.",
  "Build long-term partnerships that create value for customers, communities, and stakeholders.",
];

const CAPABILITIES = [
  {
    title: "Telecommunications",
    text: "Network infrastructure, fiber, towers, radio sites, field deployment, modernization, and operations support.",
  },
  {
    title: "Energy Infrastructure",
    text: "Solar, hybrid power, batteries, backup systems, and resilient power solutions for telecom and ICT environments.",
  },
  {
    title: "ICT & Digital Infrastructure",
    text: "Enterprise networks, cloud integration, structured cabling, digital platforms, and technical systems support.",
  },
  {
    title: "Data Centres & Equipment",
    text: "Data centre infrastructure, carrier equipment, OEM coordination, installation, commissioning, and lifecycle support.",
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
  "Integrity & Transparency",
  "Innovation & Continuous Improvement",
  "Pan-African Collaboration",
  "Sustainability & Inclusion",
];

export default function Overview() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.14),transparent_42%),radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.14),transparent_45%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white/80 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Corporate Overview • Africa • Digital Infrastructure
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
            Nanotel Africa
          </h1>

          <p className="mt-5 max-w-3xl text-white/80 text-lg leading-relaxed">
            Nanotel Africa is a telecommunications and technology infrastructure
            company supporting connectivity, digital transformation, and resilient
            infrastructure development across African markets.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="px-6 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Explore Business Lines
            </NavLink>

            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Contact Nanotel
            </NavLink>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14 space-y-14">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Company Snapshot
            </div>

            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
              Infrastructure capability built for real operating environments
            </h2>

            <p className="mt-5 text-slate-700 leading-relaxed">
              We work with telecom operators, internet service providers, tower
              companies, enterprises, institutions, development organizations, and
              public-sector projects that require dependable infrastructure delivery,
              technical support, and long-term operational reliability.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Our approach combines engineering discipline, local market knowledge,
              practical execution, responsible partnerships, and a long-term
              Pan-African growth perspective.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 text-white p-7 md:p-9 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wide text-emerald-300">
              Our Vision
            </div>

            <h2 className="mt-3 text-2xl font-extrabold">
              Trusted infrastructure partner for Africa’s digital growth
            </h2>

            <p className="mt-4 text-white/75 leading-relaxed">
              To support reliable connectivity, technology adoption, sustainable
              infrastructure, and long-term digital development across Africa.
            </p>
          </div>
        </section>

        <section>
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Capabilities
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              What Nanotel Africa supports
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              This overview stays intentionally high-level. Detailed delivery scope,
              technical services, and project visuals are presented under Business Lines.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Our Mission
            </div>

            <ul className="mt-5 grid gap-4 text-slate-700">
              {MISSION.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Corporate Values
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-800"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Markets We Support
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Industries served
              </h2>
            </div>

            <NavLink
              to="/services"
              className="text-sm font-extrabold text-blue-800 hover:underline"
            >
              View detailed Business Lines →
            </NavLink>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-900">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white p-8 md:p-10 shadow-xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wide text-white/65">
              Work with Nanotel Africa
            </div>
            <h2 className="mt-3 text-3xl font-extrabold">
              From strategy to field execution.
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Explore our Business Lines for detailed capabilities, delivery scope,
              and the infrastructure environments we support.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="px-6 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              View Business Lines
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner with Us
            </NavLink>

            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Contact
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
}
