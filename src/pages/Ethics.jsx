import React from "react";

export default function Ethics() {
  const principles = [
    {
      title: "Integrity & Transparency",
      desc: "We act honestly, communicate clearly, and maintain transparent delivery reporting.",
      bullets: ["Accurate reporting & documentation", "Zero tolerance for fraud", "Clear scope and change control"],
      icon: <IconShield />,
    },
    {
      title: "Compliance & Governance",
      desc: "We align to applicable national ICT/telecom frameworks and professional standards.",
      bullets: ["Regulatory awareness", "Contract and SLA discipline", "Audit-ready processes"],
      icon: <IconScale />,
    },
    {
      title: "Safety First",
      desc: "Field operations are guided by safety discipline, training, and risk management.",
      bullets: ["Site safety procedures", "PPE and toolbox talks", "Incident reporting and prevention"],
      icon: <IconHardHat />,
    },
    {
      title: "Quality & Accountability",
      desc: "We deliver consistent quality with measurable KPIs and strong documentation.",
      bullets: ["QA checklists & acceptance", "KPI tracking", "Corrective actions and continuous improvement"],
      icon: <IconCheck />,
    },
  ];

  const commitments = [
    {
      title: "Anti-Bribery & Fair Dealing",
      desc: "We do not support bribery, kickbacks, improper payments, or unfair influence in procurement, contracting, or project execution.",
    },
    {
      title: "Respect & Professional Conduct",
      desc: "We promote respectful, professional, and non-discriminatory collaboration across teams, clients, partners, suppliers, and communities.",
    },
    {
      title: "Data Responsibility",
      desc: "We apply appropriate access control, confidentiality, and security discipline to protect operational, commercial, customer, and partner information.",
    },
    {
      title: "Fair Partnerships & Procurement",
      desc: "We engage suppliers, OEMs, contractors, financiers, and strategic partners based on transparency, capability, compliance, performance, and mutual value.",
    },
    {
      title: "Conflicts of Interest",
      desc: "Potential conflicts should be disclosed so business decisions can be made transparently and in the best interests of Nanotel Africa and its stakeholders.",
    },
    {
      title: "Sustainability & Community Responsibility",
      desc: "We support energy-aware infrastructure, responsible field practices, and long-term value for the communities and markets where we operate.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.14),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.14),transparent_50%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-white/80 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Ethics • Compliance • Safety • Quality
          </div>

          <h1 className="mt-5 text-white font-extrabold tracking-tight text-3xl md:text-5xl">
            Ethics & Compliance
          </h1>

          <p className="mt-4 text-white/80 max-w-3xl text-base md:text-lg leading-relaxed">
            Nanotel Africa operates with integrity, compliance-first discipline, fair business practices,
            and professional delivery standards—supporting safe, secure, and reliable infrastructure execution across Africa.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Principles */}
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Our ethical principles
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              These principles guide how we work with clients, partners, communities, and each other.
            </p>
          </div>
          <span className="text-sm text-slate-600">Professional standards • Audit-ready processes</span>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-slate-700 leading-relaxed">{p.desc}</p>

                  <ul className="mt-4 list-disc pl-5 text-slate-700 grid gap-2">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="mt-14 rounded-3xl bg-white border border-slate-200 shadow-lg p-8 md:p-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold text-slate-900">Our commitments</h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We aim to build trust through consistent behavior, strong governance, responsible delivery, and clear accountability across our business relationships.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {commitments.map((c) => (
                  <div key={c.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                    <div className="font-extrabold text-slate-900">{c.title}</div>
                    <div className="mt-1 text-sm text-slate-700 leading-relaxed">{c.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="font-extrabold text-emerald-900">
                  Raising concerns in good faith
                </div>
                <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                  Ethics, safety, compliance, fraud, bribery, data handling, or professional conduct concerns
                  should be raised promptly and reviewed responsibly. Good-faith concerns should be handled
                  with appropriate confidentiality and without retaliation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 w-full md:w-[360px]">
              <div className="text-sm font-extrabold text-slate-900">Ethics contact</div>
              <p className="mt-2 text-sm text-slate-700">
                For governance inquiries, compliance alignment, professional conduct matters, or good-faith ethics concerns:
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div className="text-slate-700">
                  <span className="text-slate-500">General:</span>{" "}
                  <a className="font-semibold text-blue-800 hover:underline" href="mailto:info@nanotel.net">
                    info@nanotel.net
                  </a>
                </div>
                <div className="text-slate-700">
                  <span className="text-slate-500">Partners:</span>{" "}
                  <a className="font-semibold text-blue-800 hover:underline" href="mailto:partnerships@nanotel.net">
                    partnerships@nanotel.net
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href="mailto:info@nanotel.net?subject=Ethics%20and%20Compliance%20Inquiry"
                  className="w-full block text-center px-5 py-3 rounded-2xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition"
                >
                  Send Ethics Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white p-8 md:p-10 shadow-xl">
          <div className="text-sm text-white/70 font-semibold">Quality & Trust</div>
          <div className="mt-2 text-2xl md:text-3xl font-extrabold">
            We deliver with discipline—safely, fairly, compliantly, and transparently.
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:info@nanotel.net?subject=Ethics%20and%20Compliance%20Inquiry"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Contact Compliance
            </a>
            <a
              href="mailto:partnerships@nanotel.net?subject=Compliance%20Alignment%20Request"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/15 transition"
            >
              Partners Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------ Icons (no deps) ------------------ */

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
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
      <path
        d="M6 20v-5a6 6 0 0112 0v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
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