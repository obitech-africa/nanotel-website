import React, { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../lib/firestore";

export default function AdminMessages() {
  const [activeTab, setActiveTab] = useState("contact");

  const [contactMessages, setContactMessages] = useState([]);
  const [investorInquiries, setInvestorInquiries] = useState([]);
  const [partnershipInquiries, setPartnershipInquiries] = useState([]);

  const [loadingContact, setLoadingContact] = useState(true);
  const [loadingInvestors, setLoadingInvestors] = useState(true);
  const [loadingPartnerships, setLoadingPartnerships] = useState(true);

  useEffect(() => {
    const contactQuery = query(
      collection(db, "contactMessages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribeContact = onSnapshot(
      contactQuery,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "contact",
          ...doc.data(),
        }));
        setContactMessages(items);
        setLoadingContact(false);
      },
      (error) => {
        console.error("Contact messages error:", error);
        setLoadingContact(false);
      }
    );

    const investorQuery = query(
      collection(db, "investorInquiries"),
      orderBy("createdAt", "desc")
    );

    const unsubscribeInvestors = onSnapshot(
      investorQuery,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "investor",
          ...doc.data(),
        }));
        setInvestorInquiries(items);
        setLoadingInvestors(false);
      },
      (error) => {
        console.error("Investor inquiries error:", error);
        setLoadingInvestors(false);
      }
    );

    const partnershipQuery = query(
      collection(db, "partnershipInquiries"),
      orderBy("createdAt", "desc")
    );

    const unsubscribePartnerships = onSnapshot(
      partnershipQuery,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: "partnership",
          ...doc.data(),
        }));
        setPartnershipInquiries(items);
        setLoadingPartnerships(false);
      },
      (error) => {
        console.error("Partnership inquiries error:", error);
        setLoadingPartnerships(false);
      }
    );

    return () => {
      unsubscribeContact();
      unsubscribeInvestors();
      unsubscribePartnerships();
    };
  }, []);

  const loading = loadingContact || loadingInvestors || loadingPartnerships;

  const visibleItems = useMemo(() => {
    if (activeTab === "contact") return contactMessages;
    if (activeTab === "investor") return investorInquiries;
    return partnershipInquiries;
  }, [activeTab, contactMessages, investorInquiries, partnershipInquiries]);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-950 to-emerald-950 text-white p-8">
          <div className="text-sm text-white/70 font-semibold">
            Nanotel Admin
          </div>
          <h1 className="mt-2 text-3xl font-extrabold">
            Messages Dashboard
          </h1>
          <p className="mt-2 text-white/80">
            View website submissions from contact, investor, and partnership forms.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <SummaryCard
            title="Contact Messages"
            count={contactMessages.length}
            tone="blue"
          />
          <SummaryCard
            title="Investor Inquiries"
            count={investorInquiries.length}
            tone="emerald"
          />
          <SummaryCard
            title="Partnership Inquiries"
            count={partnershipInquiries.length}
            tone="slate"
          />
        </div>

        {/* Main panel */}
        <div className="mt-6 rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Inbox</h2>
              <p className="mt-1 text-sm text-slate-500">
                Monitor inbound submissions across the Nanotel platform.
              </p>
            </div>

            <div className="flex flex-wrap rounded-2xl bg-slate-100 p-1 gap-1">
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  activeTab === "contact"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Contact
              </button>

              <button
                onClick={() => setActiveTab("investor")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  activeTab === "investor"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Investors
              </button>

              <button
                onClick={() => setActiveTab("partnership")}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  activeTab === "partnership"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Partnerships
              </button>
            </div>
          </div>

          {loading ? (
            <div className="p-6 text-slate-600">Loading dashboard...</div>
          ) : visibleItems.length === 0 ? (
            <div className="p-6 text-slate-600">
              No {activeTab} submissions yet.
            </div>
          ) : (
            <div className="divide-y divide-slate-200">
              {visibleItems.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-lg font-extrabold text-slate-900">
                        {item.subject ||
                          item.interestType ||
                          item.partnershipType ||
                          "Untitled submission"}
                      </div>

                      <div className="mt-1 text-sm text-slate-600">
                        {item.fullName ||
                          item.contactName ||
                          "Unknown"}{" "}
                        • {item.email || "No email"}
                      </div>

                      {item.company && (
                        <div className="mt-1 text-sm text-slate-500">
                          Company: {item.company}
                        </div>
                      )}

                      {item.country && (
                        <div className="mt-1 text-sm text-slate-500">
                          Country: {item.country}
                        </div>
                      )}

                      {item.investmentRange && (
                        <div className="mt-1 text-sm text-slate-500">
                          Investment Range: {item.investmentRange}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                        {item.status || "new"}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold capitalize">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-slate-700 whitespace-pre-wrap">
                      {item.message || "No message provided."}
                    </p>
                  </div>

                  <div className="mt-4 text-xs text-slate-500">
                    {item.createdAt?.seconds
                      ? new Date(item.createdAt.seconds * 1000).toLocaleString()
                      : "Pending timestamp"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, count, tone }) {
  const toneClass =
    tone === "emerald"
      ? "from-emerald-500/10 to-emerald-100 border-emerald-200 text-emerald-900"
      : tone === "slate"
      ? "from-slate-400/10 to-slate-100 border-slate-200 text-slate-900"
      : "from-blue-500/10 to-blue-100 border-blue-200 text-blue-900";

  return (
    <div className={`rounded-3xl border p-6 bg-gradient-to-br ${toneClass}`}>
      <div className="text-sm font-semibold opacity-80">{title}</div>
      <div className="mt-2 text-3xl font-extrabold">{count}</div>
    </div>
  );
}