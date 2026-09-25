import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socials } from "../data/socials";

export default function Footer() {
  return (
    <footer className="mt-16 text-white bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950">

      <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400"></div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Nanotel Logo"
            className="h-16 w-auto object-contain"
          />

          <div className="text-white font-bold text-lg mt-3">
            Nanotel Africa
          </div>

          <p className="mt-2 text-sm text-white/70 leading-relaxed">
           Nanotel Africa is a telecommunications and technology company focused on supporting connectivity, digital transformation and Infrastructure
         development across Africa.
            
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-sm">
          <div className="text-white font-semibold">Explore</div>

          <div className="mt-3 grid gap-2">
            <NavLink to="/overview" className="text-white/80 hover:text-white hover:underline">Company Overview</NavLink>
            <NavLink to="/about" className="text-white/80 hover:text-white hover:underline">About Nanotel</NavLink>
            <NavLink to="/services" className="text-white/80 hover:text-white hover:underline">Business Lines</NavLink>
            <NavLink to="/contact" className="text-white/80 hover:text-white hover:underline">Contact</NavLink>
          </div>
        </div>

        {/* CONTACT */}
        <div className="text-sm">
          <div className="text-white font-semibold">Contact</div>

          <div className="mt-3 space-y-2 text-white/85">
            <p>
              <span className="text-white/60">General:</span>{" "}
              <a href="mailto:info@nanotel.net" className="hover:underline">
                info@nanotel.net
              </a>
            </p>

            <p>
              <span className="text-white/60">Partners:</span>{" "}
              <a href="mailto:partnerships@nanotel.net" className="hover:underline">
                partnerships@nanotel.net
              </a>
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-6 flex gap-4 text-lg">

            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaXTwitter />
            </a>

            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-white/70 flex justify-between gap-3 flex-wrap">
          <span>
            © {new Date().getFullYear()} Nanotel Africa. All rights reserved.
          </span>

          <span>
            Empowering the Future of Open Networks
          </span>
        </div>
      </div>
    </footer>
  );
}