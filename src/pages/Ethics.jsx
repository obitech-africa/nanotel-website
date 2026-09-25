import React from "react";

const PRINCIPLES = [
  {
    title: "Integrity & Transparency",
    desc: "We act honestly, communicate clearly, and keep accurate records across our projects and business relationships.",
    bullets: [
      "Accurate reporting and documentation",
      "Clear scope, pricing, and change control",
      "No falsification, concealment, or misleading claims",
    ],
    icon: <IconShield />,
  },
  {
    title: "Compliance & Governance",
    desc: "We work within applicable laws, regulatory requirements, contractual obligations, and professional standards.",
    bullets: [
      "Regulatory and contractual discipline",
      "Responsible approvals and record keeping",
      "Audit-ready project and business processes",
    ],
    icon: <IconScale />,
  },
  {
    title: "Safety & Field Responsibility",
    desc: "Our field operations are guided by risk awareness, safe work practices, and accountability for people and sites.",
    bullets: [
      "PPE and site safety procedures",
      "Toolbox talks and hazard awareness",
      "Incident reporting and corrective action",
    ],
    icon: <IconHardHat />,
  },
  {
    title: "Quality & Accountability",
    desc: "We take responsibility for the quality of our work and for correcting issues when standards are not met.",
    bullets: [
      "QA checklists and acceptance controls",
      "Documented KPIs and deliverables",
      "Continuous improvement and corrective action",
    ],
    icon: <IconCheck />,
  },
];

const COMMITMENTS = [
  {
    title: "Anti-Bribery & Fair Dealing",
    text: "We do not support bribery, kickbacks, improper payments, or unfair influence in procurement, contracting, or project execution.",
  },
  {
    title: "Respect & Professional Conduct",
    text: "We expect respectful, non-discriminatory, and professional conduct across teams, partners, suppliers, customers, and communities.",
  },
  {
    title: "Data & Information Responsibility",
    text: "We handle operational, commercial, customer, and partner information with appropriate access control, confidentiality, and security discipline.",
  },
  {
    title: "Fair Partnerships & Procurement",
    text: "We seek transparent, performance-based relationships with suppliers, OEMs, contractors, financiers, and strategic partners.",
  },
  {
    title: "Conflict of Interest",
    text: "Potential conflicts should be disclosed so decisions can be made transparently and in the best interests of the organization and its stakeholders.",
  },
  {
    title: "Sustainability & Community Responsibility",
    text: "We support energy-conscious infrastructure, responsible field practices, and long-term value for the communities and markets where we operate.",
  },
];

export default function Ethics() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Ethics • Compliance • Safety • Accountability
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                Ethics & Compliance
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                Nanotel Africa is committed to responsible business, safe
                infrastructure delivery, transparent partnerships, and
                professional conduct across our operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <HeroStat value="Integrity" label="in decisions" />
              <HeroStat value="Safety" label="in field work" />
              <HeroStat value="Quality" label="in delivery" />
              <HeroStat value="Trust" label="in partnerships" />
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Our Standards
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Principles that guide how we work
          </h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            These principles apply to our teams, projects, partnerships,
            suppliers, contractors, and professional relationships.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PRINCIPLES.map((item) => (
            <PrincipleCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* BUSINESS CONDUCT */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-800">
                Business Conduct
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                What we expect in practice
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Ethics is not only a policy statement. It should be visible in
                how decisions are made, how projects are delivered, how
                suppliers are selected, and how concerns are handled.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="font-extrabold text-emerald-900">
                  No retaliation for good-faith concerns
                </div>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                  Concerns raised honestly should be reviewed responsibly and
                  handled with appropriate confidentiality.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {COMMITMENTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPORTING / CONTACT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <IconShield />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              Ethics & Compliance Inquiries
            </h2>

            <p className="mt-3 leading-relaxed text-slate-600">
              For governance questions, compliance concerns, professional
              conduct matters, or requests for clarification on Nanotel
              Africa's standards, contact our general information channel.
            </p>

            <a
              href="mailto:info@nanotel.net?subject=Ethics%20and%20Compliance%20Inquiry"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-extrabold text-white transition hover:bg-slate-800"
            >
              info@nanotel.net
            </a>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50 p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
              <IconHandshake />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
              Partner Compliance Alignment
            </h2>

            <p className="mt-3 leading-relaxed text-slate-600">
              Partners, OEMs, suppliers, contractors, investors, and
              institutions can use our Partners channel for compliance,
              onboarding, due diligence, and governance alignment.
            </p>

            <a
              href="mailto:partnerships@nanotel.net?subject=Partner%20Compliance%20Alignment"
              className="mt-6 inline-flex rounded-xl bg-emerald-700 px-5 py-3 font-extrabold text-white transition hover:bg-emerald-800"
            >
              partnerships@nanotel.net
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Quality & Trust
              </div>
              <div className="mt-2 text-2xl font-extrabold md:text-3xl">
                We aim to deliver safely, responsibly, and transparently.
              </div>
            </div>

            <a
              href="mailto:info@nanotel.net?subject=Ethics%20and%20Compliance%20Inquiry"
              className="inline-flex w-fit rounded-xl bg-white px-5 py-3 font-extrabold text-slate-950 transition hover:bg-slate-100"
            >
              Contact Compliance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
      <div className="font-extrabold text-emerald-300">{value}</div>
      <div className="mt-1 text-xs text-white/70">{label}</div>
    </div>
  );
}

function PrincipleCard({ title, desc, bullets, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>

          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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

function IconScale() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-800">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 7l-3 6h6l-3-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 7l-3 6h6l-3-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function IconHardHat() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-800">
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 20v-5a6 6 0 0112 0v5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 9V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 11V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 12l2 2a2 2 0 002.8 0l1.4-1.4a2 2 0 012.8 0L20 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 12l5-5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 12l-5-5-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
