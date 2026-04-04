import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Word Search Puzzle Maker - Create & Print Custom Word Search Puzzles",
  description:
    "Create custom word search puzzles in seconds. Choose grid size, difficulty, and words. Download print-ready PDFs with answer keys. Free online word search generator for teachers, parents, and event planners.",
};

function PencilIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MagnifyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const features = [
  {
    title: "Easy Word Input",
    description:
      "Type or paste your words, one per line or comma-separated. We handle the rest.",
    icon: PencilIcon,
    accent: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    title: "Custom Grid Sizes",
    description:
      "From 8×8 quick puzzles to 25×25 challenging grids. Pick the perfect size.",
    icon: GridIcon,
    accent: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
  },
  {
    title: "3 Difficulty Levels",
    description:
      "Easy (horizontal/vertical), Medium (adds diagonals), or Hard (all directions including reverse).",
    icon: TargetIcon,
    accent: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean, professional PDFs formatted for A4 and Letter paper. Print at home or at school.",
    icon: PrinterIcon,
    accent: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Answer Key Included",
    description:
      "Every PDF includes an answer key page with highlighted word positions. Perfect for grading.",
    icon: KeyIcon,
    accent: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
  },
  {
    title: "100% Private",
    description:
      "Your words never leave your browser. No account required. No data stored on our servers.",
    icon: ShieldIcon,
    accent: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
  },
];

const useCases = [
  { audience: "Teachers", use: "Vocabulary practice, spelling review, themed classroom activities", emoji: "🍎" },
  { audience: "Parents", use: "Educational screen-free activities, rainy day entertainment", emoji: "🏠" },
  { audience: "Event Planners", use: "Baby showers, bridal showers, birthday parties", emoji: "🎉" },
  { audience: "Senior Care", use: "Cognitive stimulation, group activities, memory exercises", emoji: "💜" },
  { audience: "Churches", use: "Sunday school activities, Bible study word searches", emoji: "⛪" },
  { audience: "Homeschoolers", use: "Custom curriculum supplements, learning reinforcement", emoji: "📚" },
];

const heroGrid = [
  ["P", "U", "Z", "Z", "L", "E", "S", "R", "A"],
  ["C", "R", "E", "A", "T", "E", "W", "O", "N"],
  ["S", "E", "A", "R", "C", "H", "X", "F", "D"],
  ["W", "O", "R", "D", "S", "Z", "P", "U", "K"],
  ["P", "R", "I", "N", "T", "Q", "D", "N", "J"],
  ["F", "I", "N", "D", "M", "E", "F", "H", "G"],
  ["G", "R", "I", "D", "S", "C", "A", "L", "E"],
];

const highlightedCells = new Set([
  "0-0", "0-1", "0-2", "0-3", "0-4", "0-5", "0-6",
  "1-0", "1-1", "1-2", "1-3", "1-4", "1-5",
  "2-0", "2-1", "2-2", "2-3", "2-4", "2-5",
  "3-0", "3-1", "3-2", "3-3", "3-4",
  "4-0", "4-1", "4-2", "4-3", "4-4",
  "5-0", "5-1", "5-2", "5-3",
]);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafbff]">
      {/* Header */}
      <header className="border-b border-indigo-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
              <MagnifyIcon />
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

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="mx-auto max-w-6xl px-4 py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-6">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  Free to use — no account needed
                </div>
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Create Word Search Puzzles{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
                    That People Love
                  </span>
                </h1>
                <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
                  The fastest way to make custom, printable word search puzzles.
                  Perfect for classrooms, parties, and family game nights.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/editor"
                    className="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white hover:shadow-xl hover:shadow-indigo-200 transition-all text-center"
                  >
                    Start Creating — It&apos;s Free
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-xl border-2 border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-center"
                  >
                    View Pro Plans
                  </Link>
                </div>
              </div>

              {/* Interactive Hero Grid */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 via-violet-100 to-purple-100 rounded-3xl blur-2xl opacity-60" />
                <div className="relative bg-white rounded-2xl shadow-xl shadow-indigo-100/50 border border-indigo-100 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-medium text-slate-400">preview</span>
                  </div>
                  <div className="inline-grid gap-0 w-full" style={{ gridTemplateColumns: "repeat(9, 1fr)" }}>
                    {heroGrid.map((row, r) =>
                      row.map((letter, c) => {
                        const isHighlighted = highlightedCells.has(`${r}-${c}`);
                        return (
                          <div
                            key={`${r}-${c}`}
                            className={`aspect-square flex items-center justify-center text-sm sm:text-base font-mono font-bold border border-slate-100 transition-colors ${
                              isHighlighted
                                ? "bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700"
                                : "text-slate-400"
                            }`}
                          >
                            {letter}
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["PUZZLES", "CREATE", "SEARCH", "WORDS", "PRINT", "FIND"].map((word) => (
                      <span key={word} className="rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-bold text-indigo-600 tracking-wider">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Make Great Puzzles
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Powerful features wrapped in a simple interface. No design skills required.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${f.accent}`}>
                    <div className="text-slate-700">
                      <f.icon />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-to-b from-indigo-50/50 to-white border-y border-indigo-100">
          <div className="mx-auto max-w-6xl px-4 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Made for People Who Make Things Fun
              </h2>
              <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                From classrooms to celebrations, word search puzzles bring people together.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-2xl bg-white border border-slate-100 p-6 hover:shadow-lg hover:shadow-indigo-50 hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{uc.emoji}</div>
                  <h3 className="font-bold text-lg text-slate-900">
                    {uc.audience}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Steps. One Perfect Puzzle.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Enter Your Words", desc: "Type or paste a list of words. Set your grid size and difficulty level." },
              { step: "2", title: "Generate & Preview", desc: "Click generate to see your puzzle instantly. Tweak settings until it's perfect." },
              { step: "3", title: "Download & Print", desc: "Get a clean PDF with puzzle and answer key. Ready for the printer." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl font-extrabold mx-auto mb-5 shadow-lg shadow-indigo-200">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Create Your First Puzzle?
              </h2>
              <p className="mt-4 text-lg text-indigo-100 max-w-xl mx-auto">
                No account, no email, no hassle. Just open the editor and start making puzzles.
              </p>
              <Link
                href="/editor"
                className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-indigo-700 hover:shadow-2xl transition-all"
              >
                Make Your First Puzzle Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-900">Word Search Puzzle Maker</span>
              </div>
              <p className="mt-2 text-xs text-slate-500 max-w-xs">
                Create and print beautiful, custom word search puzzles for any occasion.
              </p>
              <nav className="mt-4 flex gap-6 text-sm text-slate-500">
                <Link href="/editor" className="hover:text-indigo-600 font-medium transition-colors">
                  Editor
                </Link>
                <Link href="/pricing" className="hover:text-indigo-600 font-medium transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Popular Puzzles
              </p>
              <nav className="flex flex-col gap-2 text-sm text-slate-500">
                <Link href="/printable-word-search" className="hover:text-indigo-600 transition-colors">
                  Printable Word Search
                </Link>
                <Link href="/word-search-for-seniors" className="hover:text-indigo-600 transition-colors">
                  For Seniors
                </Link>
                <Link href="/baby-shower-word-search" className="hover:text-indigo-600 transition-colors">
                  Baby Shower
                </Link>
                <Link href="/bridal-shower-word-search" className="hover:text-indigo-600 transition-colors">
                  Bridal Shower
                </Link>
                <Link href="/word-search-puzzles-for-kids" className="hover:text-indigo-600 transition-colors">
                  For Kids
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} Word Search Puzzle Maker. Built for puzzle lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
