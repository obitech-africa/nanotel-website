import React from "react";
import { NavLink } from "react-router-dom";

const CAPABILITIES = [
  {
    number: "01",
    title: "Telecommunications Infrastructure",
    text: "Network deployment, fiber, radio sites, tower support, modernization, and field operations.",
  },
  {
    number: "02",
    title: "Energy Infrastructure",
    text: "Solar, hybrid power, battery systems, backup power, and resilient energy solutions for critical sites.",
  },
  {
    number: "03",
    title: "ICT & Digital Infrastructure",
    text: "Enterprise networks, structured cabling, cloud integration, digital systems, and technical support.",
  },
  {
    number: "04",
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
  "Innovation",
  "Pan-African Collaboration",
  "Sustainability",
];

export default function Overview() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.15),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(16,185,129,0.18),transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Company Overview
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Building dependable infrastructure for Africa&apos;s connected future.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/78 md:text-xl">
              Nanotel Africa is a telecommunications and technology infrastructure
              company delivering practical solutions across connectivity, energy,
              ICT, data centres, and digital infrastructure.
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
        {/* COMPANY PROFILE */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.5fr_0.8fr] lg:items-start">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Who We Are
              </div>

              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                An African infrastructure company focused on reliable execution.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
                We support telecom operators, internet service providers, tower
                companies, enterprises, institutions, development organizations,
                and public-sector projects that require dependable infrastructure,
                technical delivery, and long-term operational support.
              </p>

              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                Our approach combines engineering discipline, local market
                understanding, responsible partnerships, and practical execution
                across diverse operating environments.
              </p>
            </div>

            <aside className="border-l-4 border-emerald-500 bg-white p-6 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                At a Glance
              </div>

              <dl className="mt-5 divide-y divide-slate-200">
                <ProfileRow label="Focus" value="Telecom & digital infrastructure" />
                <ProfileRow label="Market" value="African markets" />
                <ProfileRow label="Clients" value="Operators, enterprises & institutions" />
                <ProfileRow label="Model" value="Engineering, deployment & support" />
              </dl>
            </aside>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mx-auto max-w-6xl px-4 py-18 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Core Capabilities
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Infrastructure capability across four core areas.
            </h2>

            <p className="mt-4 text-slate-600">
              Detailed scope, project environments, and service delivery are presented
              under Business Lines.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 border-t border-slate-200 md:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[52px_1fr] gap-4 border-b border-slate-200 py-7"
              >
                <div className="text-sm font-extrabold text-emerald-700">
                  {item.number}
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VISION + MISSION */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:py-20">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Vision
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                A trusted infrastructure partner for Africa&apos;s digital growth.
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-white/70">
                To support reliable connectivity, technology adoption, sustainable
                infrastructure, and long-term digital development across Africa.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
                Mission
              </div>

              <div className="mt-5 space-y-5">
                <MissionItem>
                  Deliver dependable telecommunications, ICT, energy, and digital
                  infrastructure solutions.
                </MissionItem>
                <MissionItem>
                  Support customers with quality engineering, technical services,
                  and disciplined project execution.
                </MissionItem>
                <MissionItem>
                  Build long-term partnerships and local capability that contribute
                  to sustainable infrastructure development.
                </MissionItem>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETS + VALUES */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Markets We Support
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Industries served
              </h2>

              <div className="mt-7 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
                {INDUSTRIES.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                How We Work
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                Corporate values
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">
                {VALUES.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                Work with Nanotel Africa
              </div>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                Explore our capabilities or start a conversation.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/services"
                className="rounded-xl bg-slate-950 px-6 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                View Business Lines
              </NavLink>

              <NavLink
                to="/contact?department=partners"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Partner with Us
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-4 py-3 first:pt-0 last:pb-0">
      <dt className="text-sm font-semibold text-slate-500">{label}</dt>
      <dd className="text-sm font-bold text-slate-900">{value}</dd>
    </div>
  );
}

function MissionItem({ children }) {
  return (
    <div className="flex gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
      <p className="leading-relaxed text-white/75">{children}</p>
    </div>
  );
}
