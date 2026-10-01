// src/App.jsx
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import Seo from "./components/Seo.jsx";

import { socials } from "./data/socials";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <TopBar />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Seo
                    title="Nanotel Africa | Telecommunications & Technology Across Africa"
                    description="Nanotel Africa is a telecommunications and technology company focused on supporting connectivity, digital transformation and infrastructure development across Africa."
                    path="/"
                  />
                  <Home />
                </>
              }
            />

            <Route
              path="/overview"
              element={
                <>
                  <Seo
                    title="Company Overview | Nanotel Africa"
                    description="Explore Nanotel Africa's telecommunications, ICT, energy and digital infrastructure capabilities supporting connectivity and technology development across Africa."
                    path="/overview"
                  />
                  <Overview />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Seo
                    title="About Nanotel Africa | Telecommunications & Technology"
                    description="Learn about Nanotel Africa, our mission, infrastructure focus, technical capabilities and commitment to supporting Africa's digital transformation."
                    path="/about"
                  />
                  <About />
                </>
              }
            />

            <Route
              path="/services"
              element={
                <>
                  <Seo
                    title="Telecommunications & Digital Infrastructure Services | Nanotel Africa"
                    description="Explore Nanotel Africa's telecommunications, ICT, energy, data centre, equipment and field operations services supporting infrastructure projects across Africa."
                    path="/services"
                  />
                  <Services />
                </>
              }
            />

            <Route
              path="/partnerships"
              element={<Navigate to="/contact?department=partners" replace />}
            />

            <Route
              path="/investors"
              element={<Navigate to="/contact?department=partners" replace />}
            />

            <Route
              path="/human-capital"
              element={
                <>
                  <Seo
                    title="Human Capital | Nanotel Africa"
                    description="Discover Nanotel Africa's approach to engineering excellence, technical training, professional development and building local technology capability."
                    path="/human-capital"
                  />
                  <HumanCapital />
                </>
              }
            />

            <Route
              path="/ethics"
              element={
                <>
                  <Seo
                    title="Ethics & Governance | Nanotel Africa"
                    description="Learn about Nanotel Africa's commitment to integrity, transparency, compliance, professional standards, safety and responsible infrastructure delivery."
                    path="/ethics"
                  />
                  <Ethics />
                </>
              }
            />

            <Route
              path="/admin/login"
              element={
                <>
                  <Seo
                    title="Administration | Nanotel Africa"
                    description="Nanotel Africa administration portal."
                    path="/admin/login"
                    noindex
                  />
                  <AdminLogin />
                </>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <>
                  <Seo
                    title="Administration | Nanotel Africa"
                    description="Nanotel Africa administration portal."
                    path="/admin/messages"
                    noindex
                  />
                  <ProtectedRoute>
                    <AdminMessages />
                  </ProtectedRoute>
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Seo
                    title="Contact Nanotel Africa | Telecom & Infrastructure Enquiries"
                    description="Contact Nanotel Africa about telecommunications, ICT, digital infrastructure, technical services, strategic partnerships and infrastructure projects."
                    path="/contact"
                  />
                  <Contact />
                </>
              }
            />

            <Route
              path="*"
              element={
                <>
                  <Seo
                    title="Page Not Found | Nanotel Africa"
                    description="The requested Nanotel Africa page could not be found."
                    path={window.location.pathname}
                    noindex
                  />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function TopBar() {
  return (
    <div className="bg-emerald-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-2 text-sm flex items-center justify-between">
        <span className="font-semibold">
          Empowering the Future of Open Network Access
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
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
}
