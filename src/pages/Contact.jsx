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
  if (!values.department) errors.department = "Please choose an inquiry type.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
}

function ContactOption({ active, title, subtitle, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        active
          ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-100"
          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40"
      }`}
      aria-pressed={active}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            active ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          {icon}
        </div>

        <div>
          <div className="font-extrabold text-slate-900">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-slate-600">
            {subtitle}
          </div>
        </div>
      </div>
    </button>
  );
}

function ReachCard({ tone = "blue", icon, title, description, email }) {
  const toneClass =
    tone === "green"
      ? "from-emerald-50 to-green-100/80 border-emerald-200"
      : "from-blue-50 to-cyan-100/70 border-blue-200";

  const iconClass =
    tone === "green"
      ? "bg-emerald-600 text-white"
      : "bg-blue-700 text-white";

  return (
    <div className={`rounded-3xl border bg-gradient-to-br p-6 shadow-sm ${toneClass}`}>
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}>
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-blue-800 hover:underline"
          >
            <MailIcon />
            {email}
          </a>
        </div>
      </div>
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

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    const requestedDepartment = new URLSearchParams(location.search).get("department");

    if (requestedDepartment === "partners") {
      setValues((prev) => ({ ...prev, department: "partners" }));
    }
  }, [location.search]);

  const errors = useMemo(() => validate(values), [values]);

  function shouldShowError(field) {
    return Boolean((touched[field] || submitted) && errors[field]);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  function handleBlur(e) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  function selectDepartment(department) {
    setValues((prev) => ({ ...prev, department }));
    setTouched((prev) => ({ ...prev, department: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const currentErrors = validate(values);

    if (Object.keys(currentErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please review the highlighted fields and try again.",
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
        message: "Message sent successfully. Our team will get back to you.",
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

      setTouched({});
      setSubmitted(false);
    } catch (error) {
      console.error("Submit error:", error);
      setStatus({
        type: "error",
        message:
          "We could not send your message. Please try again or use the direct email shown on this page.",
      });
    }
  }

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
      shouldShowError(field)
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-300 focus:border-blue-500 focus:ring-blue-100"
    }`;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <img
          src={`${import.meta.env.BASE_URL}images/tower.jpg`}
          alt="Telecommunications infrastructure"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/88 to-emerald-950/55" />
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_35%_35%,rgba(34,197,94,0.28),transparent_34%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.24),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
              <span className="h-0.5 w-9 bg-emerald-400" />
              Connecting Africa's Possibilities
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Contact <span className="text-emerald-400">Us</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Talk to Nanotel Africa about telecommunications, digital
              infrastructure, technical services, strategic partnerships, and
              investment collaboration.
            </p>

            <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              <HeroPoint icon={<SignalIcon />} title="Infrastructure" />
              <HeroPoint icon={<PeopleIcon />} title="Partnerships" />
              <HeroPoint icon={<AfricaIcon />} title="Pan-African Growth" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.09),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.10),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1.35fr_0.8fr] lg:py-16">
          {/* FORM */}
          <div className="rounded-3xl border border-white/80 bg-white/95 p-6 shadow-xl shadow-slate-300/30 backdrop-blur md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                  Send Us a Message
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                  Complete the form and choose the inquiry route that best fits
                  your request.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs leading-relaxed text-blue-900">
                Validation appears only after you interact with a field or submit the form.
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Full Name"
                  required
                  error={shouldShowError("fullName") ? errors.fullName : ""}
                >
                  <input
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                    className={inputClass("fullName")}
                  />
                </Field>

                <Field
                  label="Email Address"
                  required
                  error={shouldShowError("email") ? errors.email : ""}
                >
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@company.com"
                    className={inputClass("email")}
                  />
                </Field>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Organization" optional>
                  <input
                    name="organization"
                    value={values.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your organization"
                    className={inputClass("organization")}
                  />
                </Field>

                <Field label="Country" optional>
                  <input
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your country"
                    className={inputClass("country")}
                  />
                </Field>
              </div>

              <Field
                label="Inquiry Type"
                required
                error={shouldShowError("department") ? errors.department : ""}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <ContactOption
                    active={values.department === "info"}
                    title="Info"
                    subtitle="General inquiries, services, infrastructure projects, and company information."
                    icon={<InfoIcon />}
                    onClick={() => selectDepartment("info")}
                  />

                  <ContactOption
                    active={values.department === "partners"}
                    title="Partners"
                    subtitle="Partnerships, OEMs, investors, financiers, institutions, and expansion opportunities."
                    icon={<HandshakeIcon />}
                    onClick={() => selectDepartment("partners")}
                  />
                </div>
              </Field>

              <Field
                label="Subject"
                required
                error={shouldShowError("subject") ? errors.subject : ""}
              >
                <input
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Brief subject of your inquiry"
                  className={inputClass("subject")}
                />
              </Field>

              <Field
                label="Message"
                required
                error={shouldShowError("message") ? errors.message : ""}
              >
                <textarea
                  name="message"
                  rows="6"
                  maxLength={1000}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us more about your inquiry..."
                  className={inputClass("message")}
                />
                <div className="mt-1 text-right text-xs text-slate-400">
                  {values.message.length}/1000
                </div>
              </Field>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-6 py-3.5 font-extrabold text-white shadow-lg shadow-emerald-200/50 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              >
                <SendIcon />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status.type !== "idle" && (
                <div
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : status.type === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "border-slate-200 bg-slate-50 text-slate-700"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* DIRECT CONTACT */}
          <aside>
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-800">
                Direct Contact
              </div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                Other Ways to Reach Us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Prefer email? Contact the relevant Nanotel Africa team directly.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <ReachCard
                icon={<InfoIcon />}
                title="General Information"
                description="For company information, service inquiries, infrastructure projects, technical services, and general business matters."
                email="info@nanotel.net"
              />

              <ReachCard
                tone="green"
                icon={<HandshakeIcon />}
                title="Partnership Opportunities"
                description="For strategic partnerships, OEM relationships, investment inquiries, financing, institutional collaboration, and market expansion."
                email="partnerships@nanotel.net"
              />

              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <LocationIcon />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      Kampala, Uganda
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Nanotel Africa is based in Kampala, supporting infrastructure
                      and technology opportunities across African markets.
                    </p>

                    <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 p-5 text-white">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                        Our Focus
                      </div>
                      <div className="mt-2 font-extrabold">
                        Infrastructure • Technology • Partnerships
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, optional, error, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
        {optional && (
          <span className="ml-2 font-normal text-slate-400">(Optional)</span>
        )}
      </label>

      {children}

      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function HeroPoint({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
      <div className="text-emerald-300">{icon}</div>
      <span className="text-sm font-bold text-white/90">{title}</span>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 5h16v14H4V5z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 11l-4-4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12l3 3a2 2 0 002.8 0l2.2-2.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 13l5 5 2-2M22 13l-5 5-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-6.1 7-13A7 7 0 105 9c0 6.9 7 13 7 13z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 18h2v2H4v-2zM9 14h2v6H9v-6zM14 10h2v10h-2V10zM19 6h2v14h-2V6z" fill="currentColor" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="9" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20v-2a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 15a4 4 0 016 3.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AfricaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2c5 0 9 4 9 9s-4 9-9 11C7 20 3 16 3 11s4-9 9-9z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7l3 1 2-2 3 3-1 3 2 2-3 2-1 4-3-2-1-3-2-1 1-3-2-2 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
