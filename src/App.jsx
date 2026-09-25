// src/App.jsx
// src/App.jsx
import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import HumanCapital from "./pages/HumanCapital.jsx";
import Ethics from "./pages/Ethics.jsx";
import Contact from "./pages/Contact.jsx";
import Overview from "./pages/Overview.jsx";
import NotFound from "./pages/NotFound.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminMessages from "./pages/AdminMessages.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import { socials } from "./data/socials";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <TopBar />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partnerships" element={<Navigate to="/contact?department=partners" replace />} />
            <Route path="/investors" element={<Navigate to="/contact?department=partners" replace />} />
            <Route path="/human-capital" element={<HumanCapital />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/messages"
              element={
                <ProtectedRoute>
                  <AdminMessages />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

function TopBar() {
  return (
    <div className="bg-emerald-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <span className="font-semibold">
          Empowering the Future of Open Networks
        </span>

        <div className="flex gap-4 opacity-95">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          <a
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>

          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}