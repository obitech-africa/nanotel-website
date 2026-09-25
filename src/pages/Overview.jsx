import React from "react";
import { NavLink } from "react-router-dom";

export default function Overview() {
  const mission = [
    "Deliver reliable telecommunications and digital infrastructure solutions across African markets.",
    "Support operators, enterprises, institutions, and public-sector projects with quality engineering and technical services.",
    "Provide practical infrastructure solutions for connectivity, energy, ICT, and digital operations.",
    "Promote innovation, operational excellence, and sustainable technology development.",
    "Build long-term partnerships that create value for customers, communities, and stakeholders.",
  ];

  const values = [
    "Engineering Excellence",
    "Reliable Delivery",
    "Integrity & Transparency",
    "Innovation & Continuous Improvement",
    "Pan-African Collaboration",
    "Sustainability & Inclusion",
  ];

  // Put your images inside: /public/images/
  // If an image is missing, it will auto-hide instead of showing a broken image.
  const services = [
    {
      title: "Telecom Infrastructure Deployment",
      bullets: [
        "Tower construction, upgrades, and site modernization",
        "Fiber optic installation and backbone support",
        "Base station deployment and integration",
        "Network testing, optimization, and maintenance",
        "Site surveys and technical assessments",
      ],
      images: [
        `${import.meta.env.BASE_URL}images/telecom-1.jpg`,
        `${import.meta.env.BASE_URL}images/telecom-2.jpg`,
        `${import.meta.env.BASE_URL}images/telecom-3.jpg`,
      ],
      note: "We support telecommunications operators, ISPs, tower companies, enterprises, and public-sector projects with dependable network deployment services.",
      badge: "Core Service",
    },
    {
      title: "Energy & Sustainable Telecom Solutions",
      bullets: [
        "Solar-powered telecom sites",
        "Hybrid energy systems",
        "Battery backup integration",
        "Power monitoring and protection systems",
        "Energy efficiency support for ICT infrastructure",
      ],
      images: [
        `${import.meta.env.BASE_URL}images/energy-1.jpg`,
        `${import.meta.env.BASE_URL}images/energy-2.jpg`,
        `${import.meta.env.BASE_URL}images/energy-3.jpg`,
      ],
      note: "We provide dependable power solutions for telecom and ICT infrastructure, especially in remote, off-grid, and power-challenged environments.",
      badge: "Energy Systems",
    },
    {
      title: "ICT & Digital Infrastructure",
      bullets: [
        "Data centre installation and support",
        "Structured cabling and network setup",
        "Cloud infrastructure support",
        "Enterprise ICT systems integration",
        "Technical operations and maintenance",
      ],
      images: [
        `${import.meta.env.BASE_URL}images/datacenter-1.jpg`,
        `${import.meta.env.BASE_URL}images/datacenter-2.jpg`,
        `${import.meta.env.BASE_URL}images/datacenter-3.jpg`,
      ],
      note: "We help organizations build and maintain reliable digital infrastructure for modern operations.",
      badge: "Digital Infrastructure",
    },
    {
      title: "Carrier Equipment Support",
      bullets: [
        "Telecom equipment sourcing support",
        "OEM coordination and technical alignment",
        "Equipment installation and commissioning support",
        "Testing, maintenance, and after-sales support",
        "Network accessories and field equipment support",
      ],
      images: [
        `${import.meta.env.BASE_URL}images/equipment-1.jpg`,
        `${import.meta.env.BASE_URL}images/equipment-2.jpg`,
        `${import.meta.env.BASE_URL}images/equipment-3.jpg`,
      ],
      note: "We work with trusted partners to support equipment requirements for telecommunications and infrastructure projects.",
      badge: "Equipment Support",
    },
  ];

  const emerging = [
    {
      title: "AI & Smart Network Intelligence",
      desc: "Analytics, automation, anomaly detection, dashboards, and preventive maintenance support for network operations.",
      icon: <IconBrain />,
    },
    {
      title: "Satellite & Remote Connectivity",
      desc: "VSAT, satellite backhaul, and connectivity support for rural, remote, and hard-to-reach locations.",
      icon: <IconSatellite />,
    },
    {
      title: "Cloud & Data Platforms",
      desc: "Cloud support, data pipelines, infrastructure visibility, and secure digital operations support.",
      icon: <IconCloud />,
    },
    {
      title: "Data Centre Design & Installation",
      desc: "Modular and enterprise data centre support including racks, power, cooling, cabling, and commissioning.",
      icon: <IconDataCenter />,
    },
    {
      title: "EV Charging & Smart Mobility",
      desc: "EV charging infrastructure design, installation, monitoring, and operations support.",
      icon: <IconBolt />,
    },
  ];

  const industries = [
    "Telecom Operators",
    "Internet Service Providers",
    "Tower Companies",
    "Enterprises",
    "Government Projects",
    "Institutions & NGOs",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.14),transparent_42%),radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.14),transparent_45%)]" />

        <div className="relative max-w-6xl mx-auto px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white/80 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Telecom Infrastructure • Energy Systems • ICT Support
          </div>

          <h1 className="mt-5 text-white font-extrabold tracking-tight text-3xl md:text-5xl">
            Nanotel Africa
          </h1>

          <p className="mt-4 text-white/80 text-base md:text-lg max-w-3xl">
            Nanotel Africa provides telecommunications infrastructure, energy systems,
            ICT support, and digital infrastructure services for operators, enterprises,
            institutions, and communities across Africa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold shadow-lg hover:bg-white/90 transition"
            >
              Our Services
            </NavLink>

            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Company Overview" icon={<IconBriefcase />}>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Nanotel Africa</span>{" "}
              is a telecommunications and technology infrastructure company focused
              on supporting connectivity, digital transformation, and infrastructure
              development across African markets.
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              We support telecom operators, ISPs, tower companies, enterprises,
              institutions, development organizations, and public-sector projects
              with practical infrastructure and technical services.
            </p>

            <ul className="mt-4 grid gap-2 text-slate-700 list-disc pl-5">
              <li>Telecommunications infrastructure deployment</li>
              <li>Power and energy systems</li>
              <li>ICT and digital infrastructure</li>
              <li>Carrier equipment support</li>
              <li>Data centre installation and support</li>
              <li>Technical operations and maintenance</li>
            </ul>
          </Card>

          <Card title="Our Vision" icon={<IconTarget />}>
            <p className="text-slate-700 leading-relaxed">
              To be a trusted provider of telecommunications and digital
              infrastructure solutions that enable connectivity, innovation,
              and sustainable development across Africa.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Reliable Infrastructure
              </div>
              <div className="mt-1 text-sm text-slate-700">
                Supporting the growth of resilient communication and technology systems.
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Long-Term Development
              </div>
              <div className="mt-1 text-sm text-slate-700">
                Contributing to sustainable digital and infrastructure growth.
              </div>
            </div>
          </Card>

          <Card title="Our Mission" icon={<IconFlag />}>
            <ul className="text-slate-700 leading-relaxed list-disc pl-5 grid gap-2">
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-50 via-emerald-50 to-blue-50 border border-amber-200 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Our Commitment
              </div>
              <div className="mt-1 text-sm text-slate-700">
                Delivering practical, dependable, and sustainable solutions for
                connectivity and digital growth.
              </div>
            </div>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-extrabold text-slate-900">What We Do</h2>
            <span className="text-sm text-slate-600">
              Practical infrastructure for real operating environments
            </span>
          </div>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <Feature
              title="Network Infrastructure"
              desc="We support telecom site deployment, tower upgrades, fiber works, equipment installation, and network maintenance."
            />
            <Feature
              title="Power & Energy Systems"
              desc="We design and support solar, hybrid power, and backup energy systems for telecom and ICT infrastructure."
            />
            <Feature
              title="Technology Support"
              desc="We provide ICT systems, equipment sourcing support, cloud support, data centre installation, and technical operations."
            />
          </div>
        </div>

        {/* Core Service Portfolio */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Core Service Portfolio
          </h2>

          <div className="mt-6 grid gap-8">
            {services.map((s) => (
              <ServiceBlock key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Industries Served
            </h2>
            <span className="text-sm text-slate-600">
              Supporting customers across infrastructure and digital sectors
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <div className="font-semibold text-slate-900">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emerging Technologies */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Emerging Technologies
            </h2>
            <span className="text-sm text-slate-600">
              Future-ready infrastructure and digital systems
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emerging.map((x) => (
              <div
                key={x.title}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {x.icon}
                  </div>

                  <div>
                    <div className="font-extrabold text-slate-900">{x.title}</div>
                    <div className="mt-1 text-slate-700 text-sm leading-relaxed">
                      {x.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900 text-white p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-extrabold text-lg">
                Need a tailored infrastructure solution?
              </div>
              <div className="text-white/80 text-sm">
                We can help scope, design, deploy, and support infrastructure projects.
              </div>
            </div>

            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Project Gallery
          </h2>

          <p className="mt-3 text-slate-600 max-w-3xl">
            A visual overview of telecommunications, energy, ICT, and digital
            infrastructure environments that reflect the type of solutions we support.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-1.jpg`}
              alt="Telecom infrastructure project"
            />
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-2.jpg`}
              alt="Network deployment project"
            />
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-3.jpg`}
              alt="Energy systems project"
            />
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-4.jpg`}
              alt="ICT infrastructure project"
            />
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-5.jpg`}
              alt="Data centre infrastructure project"
            />
            <GalleryImage
              src={`${import.meta.env.BASE_URL}images/gallery-6.jpg`}
              alt="Field operations project"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Corporate Values
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <div className="font-semibold text-slate-900">{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white p-8 md:p-10 shadow-lg">
          <div className="text-sm text-white/70 font-semibold">
            Work with Nanotel Africa
          </div>

          <div className="mt-2 text-2xl md:text-3xl font-extrabold">
            Reliable infrastructure starts with the right technical partner.
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <NavLink
              to="/services"
              className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-extrabold hover:bg-white/90 transition"
            >
              View Services
            </NavLink>

            <NavLink
              to="/contact?department=partners"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Partner with Us
            </NavLink>

            <NavLink
              to="/contact"
              className="px-5 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/15 hover:bg-white/15 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------ UI Components ------------------ */

function Card({ title, children, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-lg p-6">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
          {icon}
        </div>

        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-lg">
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-slate-700 leading-relaxed">{desc}</p>
    </div>
  );
}

function SafeImage({ src, alt }) {
  const [ok, setOk] = React.useState(true);

  if (!src || !ok) {
    return (
      <div className="h-40 w-full bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 flex items-center justify-center">
        <span className="text-slate-500 text-sm font-semibold">Image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-40 w-full object-cover"
      loading="lazy"
      onError={() => setOk(false)}
    />
  );
}

function ServiceBlock({ title, bullets, images = [], note, badge }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>

        <span className="text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
          {badge || "Service"}
        </span>
      </div>

      {images.length > 0 && (
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {images.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50"
            >
              <SafeImage src={src} alt={title} />
            </div>
          ))}
        </div>
      )}

      <ul className="mt-5 list-disc pl-5 text-slate-700 grid gap-2">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {note && (
        <div className="mt-5 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-slate-700">
          {note}
        </div>
      )}
    </div>
  );
}

function GalleryImage({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <SafeImage src={src} alt={alt} />
    </div>
  );
}

/* ------------------ Icons ------------------ */

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
      <path
        d="M13 2L3 14h8l-1 8 11-14h-8V2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-700">
      <path
        d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3v2a3 3 0 002 3v1a3 3 0 003 3h1M15 4a3 3 0 013 3v1a3 3 0 012 3v2a3 3 0 01-2 3v1a3 3 0 01-3 3h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconSatellite() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-700">
      <path d="M4 20l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 15a7 7 0 010-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 19a7 7 0 0010 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 10l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-800">
      <path
        d="M7 18a4 4 0 010-8 5 5 0 019.7-1.5A4 4 0 1117 18H7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDataCenter() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-800">
      <path d="M4 6h16v5H4V6z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 13h16v5H4v-5z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 8h.01M10 8h.01M7 15h.01M10 15h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
      <path d="M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7h16v14H4V7z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
      <path d="M12 22a10 10 0 100-20 10 10 0 000 20z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconFlag() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-900">
      <path d="M6 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 4h12l-2 4 2 4H6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}