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
      "Grid sizes up to 12x12",
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
      "Grid sizes up to 25x25",
      "Unlimited PDF downloads",
      "No watermarks",
      "All difficulty levels",
      "Answer key included",
      "Print-ready A4 & Letter",
    ],
    cta: "Get Pro Monthly",
    href: STRIPE_LINKS.monthly.url,
    highlighted: true,
    external: false,
    planType: "monthly" as const,
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
    external: false,
    planType: "yearly" as const,
  },
];

export default function PricingPage() {
  const [email, setEmail] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<"success" | "not_found" | null>(null);
  const [proActive, setProActive] = useState(isPro());
  const [proEmail, setProEmail] = useState(getProEmail());
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly" | null>(null);

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

  function openCheckoutModal(planType: "monthly" | "yearly") {
    setSelectedPlan(planType);
    setCheckoutEmail("");
    setShowCheckoutModal(true);
  }

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (!checkoutEmail.trim() || !selectedPlan) return;

    // Save email to localStorage for later verification
    localStorage.setItem("wspm_checkout_email", checkoutEmail.trim().toLowerCase());

    // Redirect to Stripe payment link with email prefilled and redirect to success page
    const stripeLink =
      selectedPlan === "monthly"
        ? STRIPE_LINKS.monthly.url
        : STRIPE_LINKS.yearly.url;
    const checkoutUrl = `${stripeLink}?prefilled_email=${encodeURIComponent(checkoutEmail.trim())}&success_url=${encodeURIComponent(window.location.origin + "/pro/success")}`;
    window.location.href = checkoutUrl;
  }

  function closeCheckoutModal() {
    setShowCheckoutModal(false);
    setSelectedPlan(null);
    setCheckoutEmail("");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
          >
            Word Search Puzzle Maker
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Create custom word search puzzles for classrooms, parties, or just
            for fun. Start free, upgrade when you need more.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-indigo-500 bg-white dark:bg-zinc-900 shadow-lg ring-2 ring-indigo-500"
                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start rounded-full bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {plan.name}
              </h2>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-zinc-500">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-zinc-500">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
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
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.planType ? (
                <button
                  onClick={() => openCheckoutModal(plan.planType!)}
                  className={`mt-8 w-full block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                </button>
              ) : (
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800"
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
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            {proActive ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Pro Active
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Verified as {proEmail}
                </p>
                <button
                  onClick={handleClearPro}
                  className="mt-4 text-xs text-zinc-400 underline hover:text-zinc-600"
                >
                  Sign out of Pro
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 text-center">
                  Already Pro?
                </h3>
                <p className="mt-1 text-sm text-zinc-500 text-center">
                  Enter the email you used at checkout to verify access.
                </p>
                <form onSubmit={handleVerify} className="mt-4 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    disabled={verifying}
                    className="w-full rounded-lg border-2 border-indigo-600 px-4 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 disabled:opacity-50 transition-colors"
                  >
                    {verifying ? "Verifying..." : "Verify Access"}
                  </button>
                </form>
                {verifyResult === "not_found" && (
                  <p className="mt-3 text-sm text-red-500 text-center">
                    No active subscription found for that email.
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md w-full shadow-xl">
              <button
                onClick={closeCheckoutModal}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {selectedPlan === "monthly" ? "Get Pro Monthly" : "Get Pro Yearly"}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Enter your email to continue with checkout. You'll be able to
                verify your purchase after payment.
              </p>

              <form onSubmit={handleCheckout} className="mt-6 space-y-4">
                <input
                  type="email"
                  value={checkoutEmail}
                  onChange={(e) => setCheckoutEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  <p className="font-medium mb-2">Plan Details:</p>
                  <div className="space-y-1 text-xs">
                    <p>
                      {selectedPlan === "monthly"
                        ? "$2.99 per month"
                        : "$19.99 per year"}
                    </p>
                    <p>Renews {selectedPlan === "monthly" ? "monthly" : "yearly"}</p>
                    <p>Cancel anytime</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!checkoutEmail.trim()}
                  className="w-full rounded-lg bg-indigo-600 text-white py-2.5 px-4 text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Continue to Checkout
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
