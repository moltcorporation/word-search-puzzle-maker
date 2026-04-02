import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - Word Search Puzzle Maker",
  description:
    "Upgrade to Pro for unlimited words, larger grids, no watermarks, and unlimited PDF downloads. Plans start at $2.99/mo.",
};

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
    href: "#pro-monthly",
    highlighted: true,
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
    href: "#pro-yearly",
    highlighted: false,
  },
];

export default function PricingPage() {
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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
