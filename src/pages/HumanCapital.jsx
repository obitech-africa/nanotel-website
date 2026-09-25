import React from "react";

const PILLARS = [
  {
    title: "Engineering Excellence",
    text: "Build strong technical capability in telecommunications, ICT, energy, and digital infrastructure delivery.",
  },
  {
    title: "Technical Training & Certification",
    text: "Support continuous learning through practical training, industry standards, and relevant professional certifications.",
  },
  {
    title: "Graduate & Early-Career Development",
    text: "Create pathways for emerging talent to gain practical exposure, mentorship, and real project experience.",
  },
  {
    title: "Leadership & Management Development",
    text: "Develop engineers and professionals who can grow into project, operational, technical, and organizational leadership roles.",
  },
  {
    title: "Research, Innovation & R&D Talent",
    text: "Encourage problem-solving, applied research, and innovation around infrastructure, connectivity, energy, and emerging technologies.",
  },
  {
    title: "Local Skills & Knowledge Transfer",
    text: "Strengthen African technical capacity by embedding skills transfer into projects, partnerships, and long-term operations.",
  },
];

const SKILLS = [
  "Telecom infrastructure",
  "Fiber optics",
  "RF & network systems",
  "Tower & site engineering",
  "Solar & hybrid energy",
  "Data centres",
  "Cloud & ICT systems",
  "Network monitoring",
  "AI & smart infrastructure",
  "Equipment assembly & manufacturing",
];

const CULTURE = [
  "Integrity",
  "Safety",
  "Innovation",
  "Collaboration",
  "Accountability",
  "Continuous Learning",
];

const PARTNERS = [
  {
    title: "Universities & Technical Institutes",
    text: "Industrial training, internships, graduate exposure, applied research, and technical talent development.",
  },
  {
    title: "OEMs & Technology Partners",
    text: "Product training, certification, equipment knowledge, deployment standards, and practical skills transfer.",
  },
  {
    title: "Certification Bodies",
    text: "Structured pathways for professional and technical certification as capability grows.",
  },
  {
    title: "Research Institutions",
    text: "Collaboration on innovation, infrastructure challenges, energy systems, connectivity, and emerging technologies.",
  },
];

export default function HumanCapital() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.22),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Talent • Skills • Leadership • Innovation
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Building the People Behind Africa&apos;s Digital Infrastructure
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
              Nanotel Africa believes the continent&apos;s infrastructure future depends
              not only on equipment and capital, but on skilled African engineers,
              technicians, innovators, and leaders who can design, deploy, operate,
              maintain, and eventually manufacture the technologies that power Africa.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}team/engineering-team.jpg`}
              alt="Engineering and technical workforce"
              className="h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-50 p-7 shadow-sm md:p-10">
          <div className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Our Human Capital Mission
          </div>

          <h2 className="mt-2 max-w-4xl text-3xl font-extrabold text-slate-900">
            Grow the business while strengthening African technical capability
          </h2>

          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Our approach to human capital is built around practical skills,
            continuous development, local knowledge transfer, and long-term career
            growth. As Nanotel expands its infrastructure, technology, energy,
            assembly, manufacturing, and R&amp;D activities, we aim to develop the
            people needed to support that growth sustainably.
          </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Six Development Pillars
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-white">
              How we build technical and leadership capacity
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 text-sm font-extrabold text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-950 to-emerald-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Technical Skills
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-white">
              Capability aligned to Nanotel&apos;s real work
            </h2>

            <p className="mt-4 leading-relaxed text-white/70">
              Our talent development priorities are connected to the systems,
              infrastructure, and technologies we work with today and plan to expand
              into over time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-sm"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="font-semibold text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PATH */}
      <section className="bg-slate-100 py-14 text-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-blue-800">
              Learning & Career Pathway
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              A pathway from entry-level talent to technical leadership
            </h2>

            <p className="mt-3 leading-relaxed text-slate-600">
              This pathway reflects Nanotel Africa&apos;s intended talent-development
              model as the company grows. Specific opportunities will depend on
              business needs, active projects, and available programs.
            </p>
          </div>

          <div className="mt-10 hidden md:block">
            <div className="relative">
              <div className="absolute left-[10%] right-[10%] top-5 h-0.5 bg-gradient-to-r from-blue-700 via-emerald-500 to-blue-700" />
              <div className="relative grid grid-cols-5 gap-4">
                {[
                  "Graduate / Trainee",
                  "Field Engineer / Technician",
                  "Technical Specialist",
                  "Project Lead",
                  "Technical / Operations Leadership",
                ].map((stage, index) => (
                  <div key={stage} className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-950 text-xs font-extrabold text-white shadow">
                      {index + 1}
                    </div>
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 font-extrabold text-slate-900 shadow-sm">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:hidden">
            {[
              "Graduate / Trainee",
              "Field Engineer / Technician",
              "Technical Specialist",
              "Project Lead",
              "Technical / Operations Leadership",
            ].map((stage, index) => (
              <div key={stage} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-white">
                  {index + 1}
                </div>
                <div className="font-extrabold text-slate-900">{stage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE + INCLUSION */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-800">
                People & Culture
              </div>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                The culture we want to build
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                We want a culture where people can learn, take responsibility,
                collaborate across disciplines, work safely, and contribute ideas
                that improve how infrastructure is delivered.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {CULTURE.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-800"
                  >
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-emerald-50 p-7">
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                Diversity & Inclusion
              </div>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Opportunity across backgrounds, disciplines, and markets
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Nanotel Africa values talent from different countries,
                universities, technical institutes, professional backgrounds, and
                disciplines. Diverse perspectives strengthen engineering,
                problem-solving, innovation, leadership, and our ability to work
                effectively across African markets.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                We aim to expand participation in technical, operational,
                commercial, research, and leadership roles as the organization
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION / PARTNERS */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Future Skills Partnerships
          </div>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Working with institutions that help build technical capability
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600">
            As Nanotel grows, we intend to work with education, technology, and
            research partners to create practical pathways for skills development,
            certification, industrial exposure, and knowledge transfer.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PARTNERS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Join Nanotel Africa
            </div>

            <h2 className="mt-2 text-3xl font-extrabold">
              Build your career around Africa&apos;s infrastructure future
            </h2>

            <p className="mt-4 leading-relaxed text-white/75">
              We welcome interest from professionals and emerging talent who want
              to contribute to telecommunications, energy, ICT, digital
              infrastructure, innovation, and future manufacturing capability.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <CareerCard
              title="Experienced Professionals"
              text="Engineers, project managers, operations professionals, technical specialists, and business talent."
            />

            <CareerCard
              title="Graduates & Early Career"
              text="Internships, industrial training, graduate exposure, and early-career opportunities when available."
            />

            <CareerCard
              title="Technical Specialists"
              text="Telecom, fiber, power, ICT, cloud, data centre, network, and infrastructure specialists."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:careers@nanotel.net"
              className="inline-flex rounded-xl bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-slate-100"
            >
              Send Your CV
            </a>

            <span className="text-sm text-white/70">careers@nanotel.net</span>
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/55">
            Submitting a CV does not represent an offer of employment. Specific
            roles, internships, training programs, and graduate opportunities are
            communicated when available.
          </p>
        </div>
      </section>
    </div>
  );
}

function CareerCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
      <h3 className="text-lg font-extrabold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
    </div>
  );
}
