import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Search Puzzle Maker - Create & Print Custom Word Search Puzzles",
  description:
    "Create custom word search puzzles in seconds. Choose grid size, difficulty, and words. Download print-ready PDFs with answer keys. Free online word search generator for teachers, parents, and event planners.",
};

const features = [
  {
    title: "Easy Word Input",
    description:
      "Type or paste your words, one per line or comma-separated. We handle the rest.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    ),
  },
  {
    title: "Custom Grid Sizes",
    description:
      "From 8x8 quick puzzles to 25x25 challenging grids. Pick the perfect size for your audience.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    ),
  },
  {
    title: "3 Difficulty Levels",
    description:
      "Easy (horizontal/vertical), Medium (adds diagonals), or Hard (all directions including reverse).",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean, professional PDFs formatted for A4 and Letter paper. Print at home or at school.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
      />
    ),
  },
  {
    title: "Answer Key Included",
    description:
      "Every PDF includes an answer key page with highlighted word positions. Perfect for grading.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "100% Client-Side",
    description:
      "Your words never leave your browser. No account required. No data stored on our servers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
];

const useCases = [
  { audience: "Teachers", use: "Vocabulary practice, spelling review, themed classroom activities" },
  { audience: "Parents", use: "Educational screen-free activities, rainy day entertainment" },
  { audience: "Event Planners", use: "Baby showers, bridal showers, birthday parties" },
  { audience: "Senior Care", use: "Cognitive stimulation, group activities, memory exercises" },
  { audience: "Churches", use: "Sunday school activities, Bible study word searches" },
  { audience: "Homeschoolers", use: "Custom curriculum supplements, learning reinforcement" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-black dark:text-white">
            Word Search Puzzle Maker
          </span>
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

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Create Custom Word Search Puzzles
            <br />
            <span className="text-indigo-600">in Seconds</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Enter your words, pick a grid size and difficulty, and download a
            print-ready PDF with answer key. Perfect for classrooms, parties,
            and activities.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/editor"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Make a Word Search — Free
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
            Everything You Need to Make Word Searches
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
              Who Uses Word Search Puzzle Maker?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {uc.audience}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Ready to Make Your Word Search?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            No account needed. Start creating in seconds.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Create Your Puzzle Now
          </Link>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-sm text-zinc-500">
                Word Search Puzzle Maker — Create printable word search puzzles for free.
              </p>
              <nav className="mt-3 flex gap-6 text-sm text-zinc-500">
                <Link href="/editor" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Editor
                </Link>
                <Link href="/pricing" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Pricing
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                Word Searches For
              </p>
              <nav className="mt-2 flex flex-col gap-1.5 text-sm text-zinc-500">
                <Link href="/printable-word-search" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Printable Word Search
                </Link>
                <Link href="/word-search-for-seniors" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Word Search for Seniors
                </Link>
                <Link href="/baby-shower-word-search" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Baby Shower Word Search
                </Link>
                <Link href="/bridal-shower-word-search" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Bridal Shower Word Search
                </Link>
                <Link href="/word-search-puzzles-for-kids" className="hover:text-zinc-700 dark:hover:text-zinc-300">
                  Word Search for Kids
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
