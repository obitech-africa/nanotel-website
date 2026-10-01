import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/auth";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/messages");
    } catch (err) {
      console.error("firebase login error", err);
      console.error("Error code:", err.code);
        console.error("Error message:", err.message);
        setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-lg p-8">
        <h1 className="text-2xl font-extrabold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-slate-600 text-sm">
          Secure access to Nanotel dashboard
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 text-white py-3 font-bold hover:bg-slate-800 transition"
          >
            Sign In
          </button>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
}