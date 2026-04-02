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
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
          >
            Word Search Puzzle Maker
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Create Puzzle
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {heading}
        </h1>

        <div className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {intro}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href="/editor"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            {cta}
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            View Plans
          </Link>
        </div>

        {sections.map((s) => (
          <section key={s.title} className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {s.title}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}

        <section className="mt-16 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Start Making Your Word Search
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            No account needed. Create and print in under a minute.
          </p>
          <Link
            href="/editor"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            {cta}
          </Link>
        </section>

        <nav className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">
            More Word Search Tools
          </h3>
          <ul className="mt-4 flex flex-wrap gap-4">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            Word Search Puzzle Maker — Create printable word search puzzles for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500">
            <Link
              href="/editor"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
