import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import emailjs from "@emailjs/browser";

const DEPARTMENT_EMAILS = {
  info: "info@nanotel.net",
  partners: "partnerships@nanotel.net",
};

const DEPARTMENT_LABELS = {
  info: "Info",
  partners: "Partners",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  if (!values.department) errors.department = "Please choose a contact route.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
}

function ContactCard({ title, email, description, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-extrabold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      {items?.length > 0 && (
        <ul className="mt-4 grid gap-2 text-sm text-slate-600">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        className="mt-4 inline-block text-sm font-extrabold text-blue-800 hover:underline"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
}

export default function Contact() {
  const location = useLocation();

  const [values, setValues] = useState({
    fullName: "",
    organization: "",
    email: "",
    country: "",
    department: "info",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    const requestedDepartment = new URLSearchParams(location.search).get("department");

    if (requestedDepartment === "partners") {
      setValues((prev) => ({ ...prev, department: "partners" }));
    }
  }, [location.search]);

  const errors = useMemo(() => validate(values), [values]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentErrors = validate(values);

    if (Object.keys(currentErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please complete all required fields correctly.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });

    const selectedEmail = DEPARTMENT_EMAILS[values.department];
    const departmentLabel = DEPARTMENT_LABELS[values.department];

    try {
      await addDoc(collection(db, "contactMessages"), {
        fullName: values.fullName.trim(),
        organization: values.organization.trim(),
        email: values.email.trim(),
        country: values.country.trim(),
        department: values.department,
        departmentLabel,
        toEmail: selectedEmail,
        subject: values.subject.trim(),
        message: values.message.trim(),
        createdAt: serverTimestamp(),
        status: "new",
      });

      await emailjs.send(
        "service_0559uuf",
        "template_y01satd",
        {
          to_email: selectedEmail,
          name: values.fullName.trim(),
          email: values.email.trim(),
          department: departmentLabel,
          subject: values.subject.trim(),
          message: [
            `Organization: ${values.organization.trim() || "Not provided"}`,
            `Country: ${values.country.trim() || "Not provided"}`,
            `Contact route: ${departmentLabel}`,
            "",
            values.message.trim(),
          ].join("\n"),
          time: new Date().toLocaleString(),
        },
        "Ar9B8fLy3Kiaqf5n5"
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setValues({
        fullName: "",
        organization: "",
        email: "",
        country: "",
        department: values.department,
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setStatus({
        type: "error",
        message:
          "We could not send your message. Please try again or email the selected contact directly.",
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Contact Nanotel
        </h1>

        <p className="mt-2 max-w-3xl text-slate-600">
          Use one contact form for all Nanotel Africa inquiries. Choose Info for
          general business and project matters, or Partners for strategic
          partnerships, investment, financing, and institutional collaboration.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <ContactCard
              title="Info"
              email="info@nanotel.net"
              description="For general company information, service inquiries, infrastructure projects, enterprise telecommunications, ICT, energy systems, and digital infrastructure support."
              items={[
                "Telecom and ICT project inquiries",
                "Infrastructure and technical services",
                "Company information and general requests",
                "Enterprise and public-sector opportunities",
              ]}
            />

            <ContactCard
              title="Partners"
              email="partnerships@nanotel.net"
              description="For organizations and capital partners that want to build, finance, supply, expand, or innovate with Nanotel Africa."
              items={[
                "Strategic, OEM, technology, and infrastructure partnerships",
                "Investors, financiers, infrastructure funds, and development finance",
                "Manufacturing, equipment, energy, and supply partnerships",
                "Market expansion, institutional, research, and innovation collaboration",
              ]}
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-700">
                One form, two routes
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Investor and partnership inquiries are now handled through the
                Partners route. All other inquiries are handled through Info.
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8"
          >
            <div>
              <input
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <input
              name="organization"
              placeholder="Company / Organization (optional)"
              value={values.organization}
              onChange={handleChange}
              className={inputClass}
            />

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <input
              name="country"
              placeholder="Country (optional)"
              value={values.country}
              onChange={handleChange}
              className={inputClass}
            />

            <div>
              <select
                name="department"
                value={values.department}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="info">Info</option>
                <option value="partners">Partners</option>
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">{errors.department}</p>
              )}
            </div>

            <div>
              <input
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell us about your inquiry"
                rows="6"
                value={values.message}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full rounded-xl bg-blue-700 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.type !== "idle" && (
              <div
                className={`text-sm ${
                  status.type === "error"
                    ? "text-red-600"
                    : status.type === "success"
                    ? "text-green-600"
                    : "text-slate-700"
                }`}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
