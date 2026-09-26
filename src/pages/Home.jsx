import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const slides = [
  {
    image: `${import.meta.env.BASE_URL}images/hero/network.jpg`,
    title: "Reliable Infrastructure for a Connected Africa",
    text: "Nanotel Africa provides telecommunications infrastructure, ICT support, energy systems, and digital infrastructure solutions across Africa.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero/data-center.jpg`,
    title: "Digital Infrastructure & ICT Solutions",
    text: "Supporting organizations with data centre environments, cloud integration, network systems, and technical operations.",
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero/satellite.jpg`,
    title: "Connectivity for Every Environment",
    text: "From urban networks to remote locations, we support reliable communications through infrastructure, energy, and connectivity solutions.",
  },
];

const focusAreas = [
  {
    title: "Telecom Infrastructure",
    desc: "Fiber deployment, tower support, base station installation, site upgrades, and network maintenance.",
    icon: <IconTower />,
    accent: "blue",
  },
  {
    title: "Energy Systems",
    desc: "Solar, hybrid power, battery backup, and power systems for telecom and ICT infrastructure.",
    icon: <IconBolt />,
    accent: "amber",
  },
  {
    title: "ICT Infrastructure",
    desc: "Structured cabling, network setup, systems integration, and technical infrastructure support.",
    icon: <IconNetwork />,
    accent: "violet",
  },
  {
    title: "Data Centres",
    desc: "Data centre installation support, server rooms, racks, power, cooling, cabling, and commissioning.",
    icon: <IconDataCentre />,
    accent: "cyan",
  },
  {
    title: "Cloud & Data Platforms",
    desc: "Cloud support, data systems, digital platforms, dashboards, and secure operational visibility.",
    icon: <IconCloud />,
    accent: "emerald",
  },
  {
    title: "Network Operations",
    desc: "Network monitoring, optimization, maintenance planning, and technical operations support.",
    icon: <IconOperations />,
    accent: "indigo",
  },
];

const industries = [
  "Telecom Operators",
  "Internet Service Providers",
  "Tower Companies",
  "Government & Public Sector",
  "Enterprises",
  "Development Organizations",
];

const capabilityStats = [
  { title: "Telecom", label: "Infrastructure" },
  { title: "ICT", label: "Solutions" },
  { title: "Energy", label: "Systems" },
  { title: "Digital", label: "Infrastructure" },
];

const projectSupport = [
  {
    title: "Network Design",
    text: "Telecom planning, site assessment, network architecture, and engineering support.",
  },
  {
    title: "Infrastructure Deployment",
    text: "Fiber works, base station support, tower upgrades, and field operations.",
  },
  {
    title: "Digital Infrastructure",
    text: "Data centre environments, ICT systems, cloud support, and structured cabling.",
  },
  {
    title: "Energy Systems",
    text: "Solar, hybrid power, battery backup, and energy support for infrastructure sites.",
  },
];

const focusStyles = {
  blue: {
    icon: "border-blue-200 bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
    card: "hover:border-blue-300 hover:bg-blue-50/50",
    bar: "bg-blue-600",
  },
  amber: {
    icon: "border-amber-200 bg-amber-50 text-amber-700 group-hover:bg-amber-500 group-hover:text-slate-950",
    card: "hover:border-amber-300 hover:bg-amber-50/50",
    bar: "bg-amber-500",
  },
  violet: {
    icon: "border-violet-200 bg-violet-50 text-violet-700 group-hover:bg-violet-700 group-hover:text-white",
    card: "hover:border-violet-300 hover:bg-violet-50/50",
    bar: "bg-violet-600",
  },
  cyan: {
    icon: "border-cyan-200 bg-cyan-50 text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white",
    card: "hover:border-cyan-300 hover:bg-cyan-50/50",
    bar: "bg-cyan-600",
  },
  emerald: {
    icon: "border-emerald-200 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white",
    card: "hover:border-emerald-300 hover:bg-emerald-50/50",
    bar: "bg-emerald-600",
  },
  indigo: {
    icon: "border-indigo-200 bg-indigo-50 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white",
    card: "hover:border-indigo-300 hover:bg-indigo-50/50",
    bar: "bg-indigo-600",
  },
};

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="relative h-[620px] overflow-hidden">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full scale-105 object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/78 to-emerald-950/60" />

            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/85 backdrop-blur-sm">
                  Telecommunications • ICT • Digital Infrastructure
                </div>

                <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                  {item.title}
                </h1>

                <p className="mt-5 text-lg leading-relaxed text-white/85">
                  {item.text}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <NavLink
                    to="/services"
                    className="rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-white/90"
                  >
                    Our Services
                  </NavLink>

                  <NavLink
                    to="/overview"
                    className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/12"
                  >
                    Company Overview
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/12"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white backdrop-blur-sm transition hover:bg-white/20 md:block"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white backdrop-blur-sm transition hover:bg-white/20 md:block"
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setSlide(index)}
              className={`h-3 rounded-full transition-all ${
                slide === index ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CORPORATE INTRODUCTION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Nanotel Africa
              </div>

              <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                Telecommunications and technology infrastructure supporting Africa&apos;s digital transformation.
              </h2>

              <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-700">
                Nanotel Africa is a telecommunications and technology infrastructure
                company focused on supporting connectivity, digital transformation,
                and infrastructure development across African markets.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <NavLink
                to="/about"
                className="rounded-xl bg-slate-950 px-6 py-3 font-extrabold text-white transition hover:bg-slate-800"
              >
                About Nanotel
              </NavLink>

              <NavLink
                to="/overview"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Company Overview
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="bg-slate-100/80 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Core Focus"
            title="Our Areas of Focus"
            text="Nanotel Africa supports infrastructure projects across telecommunications, energy, ICT systems, data environments, and network operations."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => (
              <FocusCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* AFRICA SECTION */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
              Pan-African Vision
            </div>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Infrastructure Support Across African Markets
            </h2>

            <p className="mt-5 leading-relaxed text-white/80">
              Nanotel Africa is focused on supporting reliable telecommunications
              and digital infrastructure through practical engineering, responsible
              partnerships, and strong technical execution.
            </p>

            <p className="mt-4 leading-relaxed text-white/80">
              Our work supports organizations that need dependable connectivity,
              energy systems, ICT infrastructure, and operational support in
              diverse environments.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {capabilityStats.map((item) => (
                <Stat key={item.title} title={item.title} label={item.label} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}images/hero/africa-infrastructure.jpg`}
              className="h-[430px] w-full object-cover"
              alt="African infrastructure"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-slate-950/65 px-5 py-3 backdrop-blur-md">
              <div className="font-extrabold text-white">
                Reliable infrastructure for digital growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Markets We Support"
            title="Industries We Serve"
            text="We support organizations that require reliable infrastructure, technical delivery, and long-term operational support."
            dark
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <div
                key={item}
                className="group rounded-2xl border border-white/10 bg-white p-6 text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1.5 text-xs font-extrabold text-emerald-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-extrabold">{item}</h3>
                </div>

                <div className="mt-5 h-1 w-10 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SUPPORT — BTS IMAGE */}
      <section className="relative overflow-hidden py-20 text-white">
        <img
          src={`${import.meta.env.BASE_URL}images/bts.jpg`}
          alt="Telecommunications base station infrastructure"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/88 to-blue-950/78" />

        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Project Delivery"
            title="How We Support Projects"
            text="Our work is centered on practical delivery, technical support, and dependable infrastructure outcomes."
            dark
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projectSupport.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white p-6 text-slate-950 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-emerald-500/10 p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
                Work with Nanotel Africa
              </div>

              <h2 className="mt-3 text-3xl font-extrabold">
                Looking for a reliable infrastructure partner?
              </h2>

              <p className="mt-4 leading-relaxed text-white/80">
                Speak with Nanotel Africa about telecom infrastructure, ICT
                systems, energy solutions, and digital infrastructure support.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="rounded-xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-white/90"
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/contact?department=partners"
                className="rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Partner with Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div
          className={`text-sm font-bold uppercase tracking-[0.16em] ${
            dark ? "text-emerald-300" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`mt-3 text-3xl font-extrabold md:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 leading-relaxed ${
          dark ? "text-white/70" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

function FocusCard({ item }) {
  const styles = focusStyles[item.accent];

  return (
    <article
      className={`group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.card}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${styles.icon}`}
      >
        {item.icon}
      </div>

      <h3 className="mt-5 text-lg font-extrabold text-slate-950">
        {item.title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-600">{item.desc}</p>

      <div
        className={`mt-6 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-20 ${styles.bar}`}
      />
    </article>
  );
}

function Stat({ title, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
      <div className="text-xl font-extrabold text-emerald-300 md:text-2xl">
        {title}
      </div>
      <div className="mt-1 text-sm text-white/75">{label}</div>
    </div>
  );
}

function IconTower() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l3 18H9l3-18z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 8a7 7 0 0110 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 11a4 4 0 016 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 10-14h-7V2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8.5" y="15" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 9v3h11V9M12 12v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconDataCentre() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 18a4 4 0 010-8 5 5 0 019.7-1.5A4 4 0 1117 18H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconOperations() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 7l6-4 6 6 4-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
