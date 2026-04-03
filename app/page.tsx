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
    icon: "✏️",
  },
  {
    title: "Custom Grid Sizes",
    description:
      "From 8x8 quick puzzles to 25x25 challenging grids. Pick the perfect size for your audience.",
    icon: "📐",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');
        .font-playful { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <header className="border-b border-amber-100">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-900 font-playful">
            🧩 Word Search Maker
          </span>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-amber-700 hover:text-amber-900 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-5 py-2 text-sm font-bold text-amber-900 hover:shadow-lg transition-all"
            >
              Create Puzzle
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero with Visual */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-amber-900 leading-tight font-playful">
                Create Custom Word Searches
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-600">
                  in Seconds
                </span>
              </h1>
              <p className="mt-6 text-lg text-amber-800 max-w-xl">
                Make printable word search puzzles for classrooms, parties, and fun activities. No design skills needed.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/editor"
                  className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-8 py-4 text-base font-bold text-amber-900 hover:shadow-xl transition-all text-center"
                >
                  Start Creating — Free
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-xl border-2 border-green-500 px-8 py-4 text-base font-bold text-green-700 hover:bg-green-50 transition-all text-center"
                >
                  See Pro Plans
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex gap-8 text-sm">
                <div>
                  <p className="text-2xl font-bold text-green-600 font-playful">50K+</p>
                  <p className="text-amber-700">Monthly Searches</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-500 font-playful">Free</p>
                  <p className="text-amber-700">To Get Started</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-600 font-playful">PDF</p>
                  <p className="text-amber-700">Print Ready</p>
                </div>
              </div>
            </div>

            {/* Visual Hero - Word Search Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-4 font-mono text-sm leading-relaxed text-amber-900 font-bold">
                <div className="inline-block">
                  <div>P A R T Y Z E N O S</div>
                  <div>L C E L E B R A T E</div>
                  <div>A F U N F I E S T A</div>
                  <div>Y A N I M A L S P Z</div>
                  <div>G A M E S D O O R D</div>
                  <div>R I B B O N S N I C</div>
                  <div>O M U S I C S A N K</div>
                  <div>U P L A Y E R S O L</div>
                  <div>P D A N C E J O Y M</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-bold text-amber-700 font-playful">Generate Instant Puzzles</p>
                <p className="text-xs text-amber-600 mt-1">Beautiful, professional grids ready to print</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-16 font-playful">
            Everything You Need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border-2 border-amber-100 hover:border-green-300 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-amber-900 text-lg font-playful">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-amber-700">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 border-y-2 border-green-200">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-4xl font-bold text-center text-green-900 mb-16 font-playful">
              Perfect For Everyone
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl bg-white border-2 border-green-200 p-6 hover:shadow-lg hover:border-green-400 transition-all"
                >
                  <h3 className="font-bold text-lg text-green-700 font-playful">
                    {uc.audience}
                  </h3>
                  <p className="mt-2 text-sm text-green-600">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-4xl font-bold text-amber-900 font-playful">
            Ready to Create?
          </h2>
          <p className="mt-4 text-lg text-amber-700">
            No account, no email. Just pure puzzle-making fun.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-10 py-4 text-lg font-bold text-amber-900 hover:shadow-xl transition-all"
          >
            Make Your First Puzzle Now
          </Link>
        </section>
      </main>

      <footer className="border-t-2 border-amber-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-sm text-amber-800 font-semibold">
                🧩 Word Search Puzzle Maker
              </p>
              <p className="mt-1 text-xs text-amber-700">
                Create and print beautiful word search puzzles.
              </p>
              <nav className="mt-3 flex gap-6 text-sm text-amber-700">
                <Link href="/editor" className="hover:text-amber-900 font-medium">
                  Editor
                </Link>
                <Link href="/pricing" className="hover:text-amber-900 font-medium">
                  Pricing
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                Popular Uses
              </p>
              <nav className="mt-2 flex flex-col gap-1.5 text-sm text-amber-700">
                <Link href="/printable-word-search" className="hover:text-amber-900">
                  Printable Word Search
                </Link>
                <Link href="/word-search-for-seniors" className="hover:text-amber-900">
                  For Seniors
                </Link>
                <Link href="/baby-shower-word-search" className="hover:text-amber-900">
                  Baby Shower
                </Link>
                <Link href="/bridal-shower-word-search" className="hover:text-amber-900">
                  Bridal Shower
                </Link>
                <Link href="/word-search-puzzles-for-kids" className="hover:text-amber-900">
                  For Kids
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-amber-100 text-center text-xs text-amber-600">
            <p>Made with 🧩 for puzzle lovers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
