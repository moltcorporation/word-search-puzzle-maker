"use client";

import { useState } from "react";
import Link from "next/link";
import { STRIPE_LINKS, verifyPro, isPro, getProEmail, clearPro } from "../../lib/free-tier";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Great for trying it out",
    features: [
      "Up to 15 words per puzzle",
      "Grid sizes up to 12×12",
      "2 PDF downloads per day",
      "Watermarked PDFs",
      "3 difficulty levels",
    ],
    cta: "Start Free",
    href: "/editor",
    highlighted: false,
    external: false,
  },
  {
    name: "Pro Monthly",
    price: "$2.99",
    period: "/month",
    description: "For teachers and puzzle enthusiasts",
    features: [
      "Unlimited words per puzzle",
      "Grid sizes up to 25×25",
      "Unlimited PDF downloads",
      "No watermarks",
      "All difficulty levels",
      "Answer key included",
      "Print-ready A4 & Letter",
    ],
    cta: "Get Pro Monthly",
    href: STRIPE_LINKS.monthly.url,
    highlighted: true,
    external: true,
  },
  {
    name: "Pro Yearly",
    price: "$19.99",
    period: "/year",
    description: "Best value — save 44%",
    features: [
      "Everything in Pro Monthly",
      "Save $15.89 per year",
      "Priority feature requests",
    ],
    cta: "Get Pro Yearly",
    href: STRIPE_LINKS.yearly.url,
    highlighted: false,
    external: true,
  },
];

export default function PricingPage() {
  const [email, setEmail] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<"success" | "not_found" | null>(null);
  const [proActive, setProActive] = useState(isPro());
  const [proEmail, setProEmail] = useState(getProEmail());

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setVerifying(true);
    setVerifyResult(null);
    const result = await verifyPro(email.trim());
    setVerifying(false);
    if (result) {
      setVerifyResult("success");
      setProActive(true);
      setProEmail(email.trim());
    } else {
      setVerifyResult("not_found");
    }
  }

  function handleClearPro() {
    clearPro();
    setProActive(false);
    setProEmail("");
    setVerifyResult(null);
  }

  return (
    <div className="min-h-screen bg-[#fafbff]">
      <header className="border-b border-indigo-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Word Search Maker
            </span>
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 transition-all"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Create custom word search puzzles for classrooms, parties, or just
            for fun. Start free, upgrade when you need more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? "border-indigo-500 bg-white shadow-xl shadow-indigo-100/50 ring-2 ring-indigo-500 scale-[1.02]"
                  : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold text-slate-900">
                {plan.name}
              </h2>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-slate-400">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.external ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-xl px-4 py-3.5 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-200"
                      : "border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-xl px-4 py-3.5 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-200"
                      : "border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Already Pro? Verify Access */}
        <div className="mt-16 mx-auto max-w-md">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {proActive ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-4">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pro Active
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Verified as {proEmail}
                </p>
                <button
                  onClick={handleClearPro}
                  className="mt-4 text-xs text-slate-400 underline hover:text-slate-600"
                >
                  Sign out of Pro
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-slate-900 text-center">
                  Already Pro?
                </h3>
                <p className="mt-1 text-sm text-slate-500 text-center">
                  Enter the email you used at checkout to verify access.
                </p>
                <form onSubmit={handleVerify} className="mt-4 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  />
                  <button
                    type="submit"
                    disabled={verifying}
                    className="w-full rounded-lg border-2 border-indigo-600 px-4 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 disabled:opacity-50 transition-colors"
                  >
                    {verifying ? "Verifying..." : "Verify Access"}
                  </button>
                </form>
                {verifyResult === "not_found" && (
                  <p className="mt-3 text-sm text-rose-500 text-center">
                    No active subscription found for that email.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
