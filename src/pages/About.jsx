import React from "react";
import { NavLink } from "react-router-dom";

const MISSION = [
  "Deliver reliable telecommunications, ICT, and digital infrastructure solutions.",
  "Support operators, enterprises, governments, and institutions through quality engineering and technical services.",
  "Provide practical energy and technology solutions for resilient infrastructure operations.",
  "Build strong local technical capacity through innovation, skills development, and knowledge transfer.",
  "Develop long-term partnerships that create value for customers, communities, and stakeholders.",
];

const GOALS = [
  {
    number: "01",
    title: "Reliable Infrastructure Delivery",
    desc: "Deliver dependable telecom, ICT, energy, and digital infrastructure solutions for real operating environments.",
    className:
      "border-blue-200 bg-blue-50/60 hover:border-blue-400 hover:bg-blue-50",
    numberClass: "text-blue-700",
  },
  {
    number: "02",
    title: "Technical Excellence",
    desc: "Provide quality engineering, deployment, maintenance, and support services across infrastructure projects.",
    className:
      "border-emerald-200 bg-emerald-50/60 hover:border-emerald-400 hover:bg-emerald-50",
    numberClass: "text-emerald-700",
  },
  {
    number: "03",
    title: "Local Capacity Building",
    desc: "Strengthen African technical capability through skills development, knowledge transfer, and practical project experience.",
    className:
      "border-violet-200 bg-violet-50/60 hover:border-violet-400 hover:bg-violet-50",
    numberClass: "text-violet-700",
  },
  {
    number: "04",
    title: "Sustainable Operations",
    desc: "Support responsible infrastructure through energy-efficient systems, hybrid power, and long-term maintenance planning.",
    className:
      "border-amber-200 bg-amber-50/60 hover:border-amber-400 hover:bg-amber-50",
    numberClass: "text-amber-700",
  },
];

const STAND_FOR = [
  {
    title: "Reliability",
    desc: "Delivering dependable infrastructure and technical support that help organizations maintain continuous operations.",
  },
  {
    title: "Innovation",
    desc: "Applying technology, engineering, and practical problem-solving to improve infrastructure outcomes.",
  },
  {
    title: "Partnership",
    desc: "Working collaboratively with customers, partners, and communities to achieve shared goals.",
  },
];

const VALUES = [
  "Engineering Excellence",
  "Reliable Delivery",
  "Innovation & Continuous Improvement",
  "Integrity & Transparency",
  "Pan-African Collaboration",
  "Sustainability & Inclusion",
];

const LEADERSHIP = [
  {
    name: "Bogere Francis",
    title: "Founder & CEO",
    bio: "Telecom infrastructure and network systems leadership focused on practical delivery, partnerships, and Pan-African growth.",
    image: `${import.meta.env.BASE_URL}team/founder.jpg`,
  },
  {
    name: "Mukiibi Fauzi Ssemakula",
    title: "Chief Technology Officer",
    bio: "Focused on network architecture, technical systems, infrastructure planning, and technology operations.",
    image: `${import.meta.env.BASE_URL}team/cto.jpg`,
  },
  {
    name: "Nalubega Lynnette",
    title: "Strategy & Investment",
    bio: "Supporting business strategy, partnerships, capital planning, and organizational development.",
    image: `${import.meta.env.BASE_URL}team/cfo.jpg`,
  },
  {
    name: "Dr. Nannyanzi Jovin",
    title: "Head of R&D",
    bio: "Leading research, innovation, energy solutions, and smart network development.",
    image: `${import.meta.env.BASE_URL}team/rnd.jpg`,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_36%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              About Nanotel Africa
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
              Building Reliable Telecom & Digital Infrastructure
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
              Nanotel Africa provides telecommunications infrastructure, ICT support,
              energy systems, and digital infrastructure services for operators,
              enterprises, institutions, and communities across Africa.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <NavLink
                to="/services"
                className="rounded-xl bg-white px-6 py-3 font-extrabold text-slate-950 transition hover:bg-white/90"
              >
                Explore Our Services
              </NavLink>

              <NavLink
                to="/contact"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* WHO WE ARE */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Who We Are
            </div>

            <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Telecommunications and technology infrastructure supporting Africa&apos;s digital transformation.
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
        </section>

        {/* PURPOSE */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Our Purpose
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Supporting reliable infrastructure for long-term digital growth.
              </h2>
            </div>

            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-lg md:p-9">
              <p className="text-lg leading-relaxed text-white/80">
                At Nanotel Africa, we believe reliable infrastructure is the foundation
                of digital transformation. Our work is guided by a commitment to quality,
                practical engineering, responsible partnerships, and long-term value creation.
              </p>
            </div>
          </div>
        </section>

        {/* VISION + MISSION */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7 shadow-sm md:p-9">
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

            <article className="rounded-3xl border border-blue-200 bg-blue-50/60 p-7 shadow-sm md:p-9">
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
          </div>
        </section>

        {/* GOALS */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Our Goals
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Focused on practical infrastructure delivery and long-term capability.
              </h2>

              <p className="mt-4 leading-relaxed text-white/70">
                Nanotel Africa&apos;s goals are focused on practical infrastructure delivery,
                reliable technical support, local capacity building, and sustainable
                technology solutions for organizations across Africa.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {GOALS.map((goal) => (
                <article
                  key={goal.title}
                  className={`rounded-3xl border p-6 text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${goal.className}`}
                >
                  <div className={`text-sm font-extrabold ${goal.numberClass}`}>
                    {goal.number}
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">{goal.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {goal.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE STAND FOR */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              What We Stand For
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Principles that guide how we work.
            </h2>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {STAND_FOR.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="h-1 w-12 rounded-full bg-emerald-500" />
                <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Leadership & Team
              </div>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Leadership guiding strategy, technology, research, partnerships, and growth.
              </h2>

              <p className="mt-4 leading-relaxed text-slate-600">
                Nanotel Africa is led by a team focused on telecommunications
                infrastructure, technology systems, partnerships, research, and
                long-term operational growth.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERSHIP.map((person) => (
                <LeaderCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              Corporate Values
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
              Values shaping how Nanotel Africa operates.
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-slate-800">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 py-14 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">
                Work with Nanotel Africa
              </div>

              <h2 className="mt-3 text-3xl font-extrabold">
                Explore our capabilities or start a conversation.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
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

              <NavLink
                to="/contact?department=partners"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
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

function LeaderCard({ person }) {
  const initials = person.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.18),transparent_45%)]" />

        <img
          src={person.image}
          alt={person.name}
          className="relative h-36 w-36 rounded-full object-cover ring-4 ring-white/20 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            const parent = event.currentTarget.parentElement;
            const fallback = parent.querySelector("[data-fallback]");
            if (fallback) fallback.style.display = "flex";
          }}
        />

        <div
          data-fallback
          className="relative hidden h-36 w-36 items-center justify-center rounded-full bg-white/10 text-3xl font-extrabold text-white ring-4 ring-white/20"
        >
          {initials}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-extrabold text-slate-950">{person.name}</h3>
        <div className="mt-1 text-sm font-bold text-emerald-700">
          {person.title}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          {person.bio}
        </p>
      </div>
    </article>
  );
}
