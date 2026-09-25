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
    icon: "📡",
  },
  {
    title: "Energy Systems",
    desc: "Solar, hybrid power, battery backup, and power systems for telecom and ICT infrastructure.",
    icon: "⚡",
  },
  {
    title: "ICT Infrastructure",
    desc: "Structured cabling, network setup, systems integration, and technical infrastructure support.",
    icon: "🖧",
  },
  {
    title: "Data Centres",
    desc: "Data centre installation support, server rooms, racks, power, cooling, cabling, and commissioning.",
    icon: "🏢",
  },
  {
    title: "Cloud & Data Platforms",
    desc: "Cloud support, data systems, digital platforms, dashboards, and secure operational visibility.",
    icon: "☁️",
  },
  {
    title: "Network Operations",
    desc: "Network monitoring, optimization, maintenance planning, and technical operations support.",
    icon: "📊",
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
  {
    title: "Telecom",
    label: "Infrastructure",
  },
  {
    title: "ICT",
    label: "Solutions",
  },
  {
    title: "Energy",
    label: "Systems",
  },
  {
    title: "Digital",
    label: "Infrastructure",
  },
];

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
              className="absolute inset-0 h-full w-full object-cover scale-105"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-1200/90 via-slate-900/75 to-emerald-950/60" />

            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/85">
                   Telecommunication • ICT • Digital Infrastructure
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
                    className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                  >
                    Company Overview
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
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
          className="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 md:block"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white transition hover:bg-white/20 md:block"
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
              className={`h-3 w-3 rounded-full transition ${
                slide === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            title="Our Areas of Focus"
            text="Nanotel Africa supports infrastructure projects across telecommunications, energy, ICT systems, data environments, and network operations."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => (
              <TechCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AFRICA SECTION */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">
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

            <div className="mt-8 grid grid-cols-2 gap-6">
              {capabilityStats.map((item) => (
                <Stat key={item.title} title={item.title} label={item.label} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/hero/africa-infrastructure.jpg`}
                className="h-[380px] w-full object-cover opacity-85"
                alt="African infrastructure"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-white/20 bg-black/40 px-6 py-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold">Pan-African Vision</div>
                <div className="mt-1 text-sm text-white/80">
                  Reliable infrastructure for digital growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            title="Industries We Serve"
            text="We support organizations that require reliable infrastructure, technical delivery, and long-term operational support."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
                  <h3 className="font-bold text-slate-900">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeader
          title="How We Support Projects"
          text="Our work is centered on practical delivery, technical support, and dependable infrastructure outcomes."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Card
            title="Network Design"
            text="Telecom planning, site assessment, network architecture, and engineering support."
          />

          <Card
            title="Infrastructure Deployment"
            text="Fiber works, base station support, tower upgrades, and field operations."
          />

          <Card
            title="Digital Infrastructure"
            text="Data centre environments, ICT systems, cloud support, and structured cabling."
          />

          <Card
            title="Energy Systems"
            text="Solar, hybrid power, battery backup, and energy support for infrastructure sites."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold">
                Looking for a reliable infrastructure partner?
              </h2>

              <p className="mt-4 text-white/80 leading-relaxed">
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
                className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
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

function SectionHeader({ title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function TechCard({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>

      <div className="mt-4 h-1 w-0 bg-emerald-500 transition-all group-hover:w-12" />
    </div>
  );
}

function Stat({ title, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-extrabold text-emerald-400">{title}</div>
      <div className="mt-1 text-sm text-white/80">{label}</div>
    </div>
  );
}