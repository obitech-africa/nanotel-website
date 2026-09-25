// src/components/Navbar.jsx
import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { to: "/", label: "Home", end: true },
      { to: "/overview", label: "Overview" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Business Lines" },
      { to: "/human-capital", label: "Human Capital" },
      { to: "/ethics", label: "Ethics" },
    ],
    []
  );

  const linkBase =
    "px-3 py-2 rounded-xl text-sm font-semibold tracking-wide text-white/90 hover:text-white hover:bg-white/15 transition";
  const linkActive = "bg-white/20 text-white";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
  <img
    src={`${import.meta.env.BASE_URL}logo.png`}
    alt="Nanotel Logo"
  className="h-16 w-auto object-contain scale-110" draggable={false} />

  <div className="leading-tight">
    <div className="font-extrabold tracking-wide text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
      NANOTEL
    </div>
    <div className="text-xs text-white/80">
      Open Networks • Pan-African
    </div>
  </div>
</NavLink>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/contact"
            className="hidden sm:inline-flex bg-white text-slate-900 font-extrabold px-5 py-2 rounded-full hover:bg-white/90 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center h-16 w-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/40 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-white/90 hover:bg-white/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-3 rounded-xl bg-white text-slate-900 font-extrabold"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}