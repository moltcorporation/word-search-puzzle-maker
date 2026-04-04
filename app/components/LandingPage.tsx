import type { ReactNode } from "react";
import Link from "next/link";

interface LandingPageProps {
  heading: string;
  intro: ReactNode;
  sections: { title: string; body: string }[];
  cta: string;
  relatedPages: { href: string; label: string }[];
}

export default function LandingPage({
  heading,
  intro,
  sections,
  cta,
  relatedPages,
}: LandingPageProps) {
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
          <nav className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-sm text-slate-600 hover:text-slate-900 font-medium px-3 py-2"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 transition-all"
            >
              Create Puzzle
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          {heading}
        </h1>

        <div className="mt-6 text-lg text-slate-600 leading-relaxed">
          {intro}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/editor"
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 transition-all"
          >
            {cta}
          </Link>
          <Link
            href="/pricing"
            className="rounded-xl border-2 border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
          >
            View Plans
          </Link>
        </div>

        {sections.map((s) => (
          <section key={s.title} className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900">
              {s.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}

        <section className="mt-16 rounded-2xl border border-indigo-100 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Start Making Your Word Search
          </h2>
          <p className="mt-3 text-slate-500">
            No account needed. Create and print in under a minute.
          </p>
          <Link
            href="/editor"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 transition-all"
          >
            {cta}
          </Link>
        </section>

        <nav className="mt-12 border-t border-slate-200 pt-8">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            More Word Search Tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-4">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            Word Search Puzzle Maker — Create printable word search puzzles for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-slate-500">
            <Link
              href="/editor"
              className="hover:text-indigo-600 transition-colors"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-indigo-600 transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
