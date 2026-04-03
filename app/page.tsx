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
    icon: "📝",
  },
  {
    title: "Custom Grid Sizes",
    description:
      "From 8x8 quick puzzles to 25x25 challenging grids. Pick the perfect size for your audience.",
    icon: "📋",
  },
  {
    title: "3 Difficulty Levels",
    description:
      "Easy (horizontal/vertical), Medium (adds diagonals), or Hard (all directions including reverse).",
    icon: "🎯",
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean, professional PDFs formatted for A4 and Letter paper. Print at home or at school.",
    icon: "🖨️",
  },
  {
    title: "Answer Key Included",
    description:
      "Every PDF includes an answer key page with highlighted word positions. Perfect for grading.",
    icon: "✓",
  },
  {
    title: "100% Client-Side",
    description:
      "Your words never leave your browser. No account required. No data stored on our servers.",
    icon: "🔒",
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

// Word search grid SVG component
function WordSearchGrid() {
  const words = ["FIND", "PUZZLE", "WORDS", "SEARCH"];
  const gridSize = 10;
  const cellSize = 20;
  const gridLetters = [
    "F I N D W O R D S X",
    "X X P U Z Z L E X X",
    "S X X X X X X X X X",
    "E X X X X X X X X X",
    "A X X X X X X X X X",
    "R X X X X X X X X X",
    "C X X X X X X X X X",
    "H X X X X X X X X X",
    "X X X X X X X X X X",
    "X X X X X X X X X X",
  ];

  return (
    <svg width={gridSize * cellSize + 4} height={gridSize * cellSize + 4} className="mx-auto">
      <rect width="100%" height="100%" fill="white" rx="8" />
      {gridLetters.map((row, y) =>
        row.split(" ").map((letter, x) => (
          <g key={`${x}-${y}`}>
            <rect
              x={x * cellSize + 2}
              y={y * cellSize + 2}
              width={cellSize}
              height={cellSize}
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
            />
            <text
              x={x * cellSize + cellSize / 2 + 2}
              y={y * cellSize + cellSize / 2 + 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="600"
              fill="#059669"
              className="font-mono"
            >
              {letter}
            </text>
          </g>
        ))
      )}
      {/* Highlight first word: FIND */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={`highlight-${i}`}
          x={i * cellSize + 2}
          y={2}
          width={cellSize}
          height={cellSize}
          fill="#10b981"
          fillOpacity="0.2"
        />
      ))}
      {/* Highlight second word: PUZZLE */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <rect
          key={`highlight2-${i}`}
          x={2}
          y={i * cellSize + 2}
          width={cellSize}
          height={cellSize}
          fill="#f59e0b"
          fillOpacity="0.2"
        />
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-slate-950 dark:via-black dark:to-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap');
        .display-font {
          font-family: 'Fredoka', sans-serif;
        }
      `}</style>

      <header className="border-b border-emerald-200 dark:border-emerald-900 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold display-font bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
            🧩 Word Search Puzzle Maker
          </span>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              Create Puzzle
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-5xl font-bold tracking-tight display-font text-slate-900 dark:text-white sm:text-6xl">
                Create Word Search <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">Puzzles in Seconds</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                Enter your words, pick a grid size and difficulty, and download print-ready PDFs with answer keys. Perfect for classrooms, parties, and activities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/editor"
                  className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-sm font-bold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Make a Word Search — Free
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border-2 border-emerald-300 dark:border-emerald-700 px-8 py-4 text-sm font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors text-center"
                >
                  View Pro Plans
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <WordSearchGrid />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold display-font text-slate-900 dark:text-white">
              Everything You Need
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Powerful features to make puzzle creation a breeze
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-900 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold display-font text-slate-900 dark:text-white text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border-y border-emerald-200 dark:border-emerald-900">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-3xl font-bold display-font text-center text-slate-900 dark:text-white mb-12">
              Who Uses Word Search Maker?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <h3 className="font-bold display-font text-slate-900 dark:text-white text-lg">
                    {uc.audience}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-4xl font-bold display-font text-slate-900 dark:text-white">
            Ready to Create?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            No account needed. No signup. Start creating in seconds.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-10 py-4 text-base font-bold text-white hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            Create Your Puzzle Now
          </Link>
        </section>
      </main>

      <footer className="border-t border-emerald-200 dark:border-emerald-900 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                🧩 Word Search Puzzle Maker — Create printable word search puzzles for free.
              </p>
              <nav className="mt-3 flex gap-6 text-sm text-slate-600 dark:text-slate-400">
                <Link href="/editor" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Editor
                </Link>
                <Link href="/pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Pricing
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Popular Searches
              </p>
              <nav className="mt-2 flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-400">
                <Link href="/printable-word-search" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Printable Word Search
                </Link>
                <Link href="/word-search-for-seniors" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Word Search for Seniors
                </Link>
                <Link href="/baby-shower-word-search" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Baby Shower Word Search
                </Link>
                <Link href="/bridal-shower-word-search" className="hover:text-emerald-600 dark:hover:text-emerald-400">
                  Bridal Shower Word Search
                </Link>
                <Link href="/word-search-puzzles-for-kids" className="hover:text-emerald-600 dark:hover:text-emerald-400">
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
