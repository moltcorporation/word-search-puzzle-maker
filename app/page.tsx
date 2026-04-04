import type { Metadata } from "next";
import Link from "next/link";
import {
  PencilIcon,
  GridIcon,
  MagnifyingGlassIcon,
  SettingsIcon,
  FileIcon,
  CheckmarkIcon,
  LockIcon,
} from "./components/FeatureIcons";
import { InteractiveDemo } from "./components/InteractiveDemo";

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
    icon: PencilIcon,
  },
  {
    title: "Custom Grid Sizes",
    description:
      "From 8x8 quick puzzles to 25x25 challenging grids. Pick the perfect size for your audience.",
    icon: GridIcon,
  },
  {
    title: "3 Difficulty Levels",
    description:
      "Easy (horizontal/vertical), Medium (adds diagonals), or Hard (all directions including reverse).",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean, professional PDFs formatted for A4 and Letter paper. Print at home or at school.",
    icon: FileIcon,
  },
  {
    title: "Answer Key Included",
    description:
      "Every PDF includes an answer key page with highlighted word positions. Perfect for grading.",
    icon: CheckmarkIcon,
  },
  {
    title: "100% Client-Side",
    description:
      "Your words never leave your browser. No account required. No data stored on our servers.",
    icon: LockIcon,
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .font-puzzle { font-family: 'Poppins', sans-serif; }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        .grid-animate {
          animation: gridPulse 8s ease-in-out infinite;
        }
      `}</style>

      <header className="border-b border-indigo-100 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-900 font-puzzle flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg grid grid-cols-2 gap-1 p-1">
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
              <div className="bg-white rounded-sm"></div>
            </div>
            Word Search Maker
          </span>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-indigo-600 hover:text-indigo-900 font-semibold transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-bold text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Create Puzzle
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero with Interactive Demo */}
        <section className="relative mx-auto max-w-5xl px-4 py-16 overflow-hidden">
          {/* Animated grid background */}
          <div
            className="absolute -top-40 -right-40 w-80 h-80 opacity-5 grid-animate"
            style={{
              backgroundImage:
                "linear-gradient(0deg, #4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-indigo-900 leading-tight font-puzzle">
                Create Custom
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Word Searches
                </span>
                <span className="block text-indigo-900">in Seconds</span>
              </h1>
              <p className="mt-6 text-lg text-indigo-700 max-w-xl leading-relaxed">
                Make printable word search puzzles for classrooms, parties, and fun activities. Professional grids, zero complexity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/editor"
                  className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-bold text-white hover:shadow-xl hover:scale-105 transition-all duration-200 text-center"
                >
                  Start Creating — Free
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border-2 border-indigo-300 px-8 py-4 text-base font-bold text-indigo-600 hover:bg-indigo-50 transition-all text-center"
                >
                  View Pro Features
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex gap-8 text-sm">
                <div>
                  <p className="text-2xl font-bold text-indigo-600 font-puzzle">50K+</p>
                  <p className="text-indigo-600 text-sm">Monthly Searches</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600 font-puzzle">Free</p>
                  <p className="text-indigo-600 text-sm">To Start</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-600 font-puzzle">PDF</p>
                  <p className="text-indigo-600 text-sm">Print Ready</p>
                </div>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="lg:pl-6">
              <InteractiveDemo />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-16 font-puzzle">
            Powerful Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const IconComponent = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-6 border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-default"
                >
                  <div className="mb-4 p-3 bg-indigo-50 rounded-lg w-fit group-hover:bg-indigo-100 transition-colors">
                    <IconComponent />
                  </div>
                  <h3 className="font-bold text-indigo-900 text-lg font-puzzle">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-700">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-y-2 border-indigo-200">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-4xl font-bold text-center text-indigo-900 mb-16 font-puzzle">
              Perfect For Everyone
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl bg-white border-2 border-indigo-200 p-6 hover:shadow-lg hover:border-purple-400 hover:scale-105 transition-all duration-300"
                >
                  <h3 className="font-bold text-lg text-indigo-700 font-puzzle">
                    {uc.audience}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-600">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-4xl font-bold text-indigo-900 font-puzzle">
            Ready to Create?
          </h2>
          <p className="mt-4 text-lg text-indigo-700">
            No account, no email. Just pure puzzle-making fun — and instant PDFs.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg font-bold text-white hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Make Your First Puzzle Now
          </Link>
        </section>
      </main>

      <footer className="border-t-2 border-indigo-200 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-sm text-indigo-900 font-bold font-puzzle flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded grid grid-cols-2 gap-0.5 p-0.5">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
                Word Search Puzzle Maker
              </p>
              <p className="mt-1 text-xs text-indigo-700">
                Create and print beautiful word search puzzles.
              </p>
              <nav className="mt-3 flex gap-6 text-sm text-indigo-600">
                <Link href="/editor" className="hover:text-indigo-900 font-medium transition-colors">
                  Editor
                </Link>
                <Link href="/pricing" className="hover:text-indigo-900 font-medium transition-colors">
                  Pricing
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold text-indigo-900 uppercase tracking-wide">
                Popular Uses
              </p>
              <nav className="mt-2 flex flex-col gap-1.5 text-sm text-indigo-600">
                <Link href="/printable-word-search" className="hover:text-indigo-900 transition-colors">
                  Printable Word Search
                </Link>
                <Link href="/word-search-for-seniors" className="hover:text-indigo-900 transition-colors">
                  For Seniors
                </Link>
                <Link href="/baby-shower-word-search" className="hover:text-indigo-900 transition-colors">
                  Baby Shower
                </Link>
                <Link href="/bridal-shower-word-search" className="hover:text-indigo-900 transition-colors">
                  Bridal Shower
                </Link>
                <Link href="/word-search-puzzles-for-kids" className="hover:text-indigo-900 transition-colors">
                  For Kids
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-indigo-200 text-center text-xs text-indigo-600">
            <p>Made with ✨ for puzzle lovers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
