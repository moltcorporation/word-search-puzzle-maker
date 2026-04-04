"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { generatePuzzle, type PuzzleResult } from "../../lib/word-search";
import { downloadPDF } from "../../lib/pdf-export";
import {
  FREE_LIMITS,
  canDownload,
  incrementDownload,
  getDownloadCount,
  verifyPro,
  getProEmail,
  STRIPE_LINKS,
} from "../../lib/free-tier";
import Link from "next/link";

type Difficulty = "easy" | "medium" | "hard";
type PuzzleTheme = "classic" | "chalkboard" | "playful";

const puzzleThemes = {
  classic: {
    label: "Classic",
    gridBg: "bg-white",
    gridBorder: "border-amber-200",
    cellBorder: "border-amber-100",
    cellText: "text-amber-950",
    cellBg: "",
    wordBg: "bg-amber-50",
    wordText: "text-amber-800",
    wordBorder: "border-amber-200",
    titleText: "text-amber-900",
    previewBg: "bg-amber-50/30",
  },
  chalkboard: {
    label: "Chalkboard",
    gridBg: "bg-zinc-900",
    gridBorder: "border-zinc-600",
    cellBorder: "border-zinc-700",
    cellText: "text-green-300",
    cellBg: "",
    wordBg: "bg-zinc-800",
    wordText: "text-green-300",
    wordBorder: "border-zinc-700",
    titleText: "text-green-300",
    previewBg: "bg-zinc-900",
  },
  playful: {
    label: "Playful",
    gridBg: "bg-gradient-to-br from-purple-50 to-pink-50",
    gridBorder: "border-purple-200",
    cellBorder: "border-purple-100",
    cellText: "text-purple-900",
    cellBg: "",
    wordBg: "bg-gradient-to-r from-purple-100 to-pink-100",
    wordText: "text-purple-700",
    wordBorder: "border-purple-200",
    titleText: "text-purple-900",
    previewBg: "bg-purple-50/30",
  },
};

export default function EditorPage() {
  const [wordInput, setWordInput] = useState("");
  const [title, setTitle] = useState("My Word Search");
  const [gridSize, setGridSize] = useState(12);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [theme, setTheme] = useState<PuzzleTheme>("classic");
  const [puzzle, setPuzzle] = useState<PuzzleResult | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [userIsPro, setUserIsPro] = useState(false);

  useEffect(() => {
    const email = getProEmail();
    if (email) {
      verifyPro(email).then((isValid) => {
        setUserIsPro(isValid);
      });
    } else {
      setUserIsPro(false);
    }
  }, []);

  const words = useMemo(() => {
    return wordInput
      .split(/[\n,]+/)
      .map((w) => w.trim())
      .filter((w) => w.length > 0);
  }, [wordInput]);

  const wordCount = words.length;
  const isOverWordLimit = !userIsPro && wordCount > FREE_LIMITS.maxWords;
  const isOverGridLimit = !userIsPro && gridSize > FREE_LIMITS.maxGridSize;

  const handleGenerate = useCallback(() => {
    const effectiveWords = isOverWordLimit
      ? words.slice(0, FREE_LIMITS.maxWords)
      : words;
    const effectiveSize = isOverGridLimit ? FREE_LIMITS.maxGridSize : gridSize;

    if (effectiveWords.length === 0) return;

    const result = generatePuzzle(
      effectiveWords,
      effectiveSize,
      effectiveSize,
      difficulty
    );
    setPuzzle(result);
  }, [words, gridSize, difficulty, isOverWordLimit, isOverGridLimit]);

  const handleDownload = useCallback(() => {
    if (!puzzle) return;
    if (!canDownload()) {
      setShowUpgrade(true);
      return;
    }
    if (!userIsPro) incrementDownload();
    downloadPDF(puzzle, title, !userIsPro);
  }, [puzzle, title, userIsPro]);

  const t = puzzleThemes[theme];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white dark:from-zinc-950 dark:to-black">
      <header className="border-b border-amber-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-amber-900 dark:text-amber-100"
          >
            Word Search Puzzle Maker
          </Link>
          {userIsPro ? (
            <span className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white">
              Pro
            </span>
          ) : (
            <Link
              href="/pricing"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-5 py-2 text-sm font-bold text-amber-900 hover:shadow-lg transition-all"
            >
              Upgrade to Pro
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Puzzle Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-amber-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter puzzle title"
              />
            </div>

            {/* Word Input */}
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Words{" "}
                <span
                  className={`${
                    isOverWordLimit ? "text-red-500" : "text-amber-500"
                  }`}
                >
                  ({wordCount}
                  {isOverWordLimit
                    ? ` / ${FREE_LIMITS.maxWords} free limit`
                    : ""}
                  )
                </span>
              </label>
              <textarea
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
                rows={8}
                className="w-full rounded-lg border border-amber-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                placeholder={"Enter words, one per line or comma-separated\n\nExample:\nDOLPHIN\nOCEAN\nSURF\nBEACH\nWAVE"}
              />
              {isOverWordLimit && (
                <p className="mt-1 text-xs text-red-500">
                  Free tier limited to {FREE_LIMITS.maxWords} words.{" "}
                  <Link href="/pricing" className="underline">
                    Upgrade to Pro
                  </Link>{" "}
                  for unlimited words.
                </p>
              )}
            </div>

            {/* Grid Size */}
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Grid Size:{" "}
                <span className="font-mono">
                  {gridSize}x{gridSize}
                </span>
                {isOverGridLimit && (
                  <span className="text-red-500 text-xs ml-2">
                    (Free max: {FREE_LIMITS.maxGridSize}x{FREE_LIMITS.maxGridSize})
                  </span>
                )}
              </label>
              <input
                type="range"
                min={8}
                max={25}
                value={gridSize}
                onChange={(e) => setGridSize(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-xs text-amber-500 mt-1">
                <span>8x8</span>
                <span>25x25</span>
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition-colors ${
                      difficulty === d
                        ? "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                        : "border-amber-200 dark:border-zinc-700 text-amber-600 dark:text-zinc-400 hover:border-amber-400"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-amber-500">
                {difficulty === "easy" && "Horizontal & vertical only"}
                {difficulty === "medium" && "Adds diagonal directions"}
                {difficulty === "hard" && "All directions including reverse"}
              </p>
            </div>

            {/* Puzzle Theme */}
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                Puzzle Theme
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(puzzleThemes) as PuzzleTheme[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      theme === key
                        ? "border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                        : "border-amber-200 dark:border-zinc-700 text-amber-600 dark:text-zinc-400 hover:border-amber-400"
                    }`}
                  >
                    {puzzleThemes[key].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={wordCount === 0}
              className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-3 text-sm font-bold text-amber-900 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Generate Puzzle
            </button>

            {puzzle && (
              <button
                onClick={handleDownload}
                className="w-full rounded-xl border-2 border-green-500 px-4 py-3 text-sm font-bold text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950 transition-all"
              >
                {userIsPro
                  ? "Download PDF"
                  : `Download PDF (${FREE_LIMITS.maxDownloads - getDownloadCount()} free remaining)`}
              </button>
            )}
          </div>

          {/* Preview Panel */}
          <div className={`rounded-2xl border-2 ${t.gridBorder} ${t.previewBg} p-6 min-h-[500px] flex flex-col shadow-sm`}>
            {!puzzle ? (
              <div className="flex-1 flex items-center justify-center text-amber-400">
                <div className="text-center">
                  <div className="mx-auto mb-4 text-6xl opacity-40">
                    {theme === "chalkboard" ? "📝" : theme === "playful" ? "🎨" : "🧩"}
                  </div>
                  <p className="text-lg font-medium text-amber-700 dark:text-amber-300">
                    Enter words and click Generate
                  </p>
                  <p className="text-sm mt-1 text-amber-500">
                    Your puzzle preview will appear here
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className={`text-xl font-bold text-center mb-4 ${t.titleText} tracking-wide`}>
                  {title}
                </h3>

                {puzzle.unplacedWords.length > 0 && (
                  <div className="mb-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-3 text-sm text-amber-700 dark:text-amber-300">
                    Could not place: {puzzle.unplacedWords.join(", ")}. Try a
                    larger grid or fewer words.
                  </div>
                )}

                {/* Grid */}
                <div className="flex-1 flex items-start justify-center overflow-auto">
                  <div
                    className={`inline-grid gap-0 border-2 ${t.gridBorder} ${t.gridBg} rounded-lg overflow-hidden shadow-inner`}
                    style={{
                      gridTemplateColumns: `repeat(${puzzle.grid[0].length}, minmax(0, 1fr))`,
                    }}
                  >
                    {puzzle.grid.map((row, r) =>
                      row.map((letter, c) => (
                        <div
                          key={`${r}-${c}`}
                          className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border ${t.cellBorder} ${t.cellBg} text-xs sm:text-sm font-mono font-bold ${t.cellText} select-none`}
                        >
                          {letter}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Word List */}
                <div className={`mt-6 pt-4 border-t-2 ${t.wordBorder}`}>
                  <h4 className={`text-sm font-bold ${t.titleText} mb-3 uppercase tracking-wider`}>
                    Find these words:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {puzzle.placedWords.map((pw) => (
                      <span
                        key={pw.word}
                        className={`rounded-full ${t.wordBg} border ${t.wordBorder} px-3 py-1.5 text-xs font-bold ${t.wordText} tracking-wide`}
                      >
                        {pw.word}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Upgrade Modal */}
        {showUpgrade && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md mx-4 shadow-xl border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                Download Limit Reached
              </h3>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                You&apos;ve used all {FREE_LIMITS.maxDownloads} free downloads
                today. Upgrade to Pro for unlimited downloads, no watermarks,
                larger grids, and more words.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={STRIPE_LINKS.monthly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-2.5 text-sm font-bold text-amber-900 text-center hover:shadow-lg transition-all"
                >
                  Get Pro — $2.99/mo
                </a>
                <a
                  href={STRIPE_LINKS.yearly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border-2 border-green-500 px-4 py-2.5 text-sm font-bold text-green-700 dark:text-green-400 text-center hover:bg-green-50 dark:hover:bg-green-950 transition-all"
                >
                  Get Pro — $19.99/yr (save 44%)
                </a>
                <div className="flex gap-3">
                  <Link
                    href="/pricing"
                    className="flex-1 text-center text-sm text-amber-600 hover:text-amber-800 dark:hover:text-amber-300 py-2"
                  >
                    Compare Plans
                  </Link>
                  <button
                    onClick={() => setShowUpgrade(false)}
                    className="flex-1 text-center text-sm text-amber-600 hover:text-amber-800 dark:hover:text-amber-300 py-2"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
