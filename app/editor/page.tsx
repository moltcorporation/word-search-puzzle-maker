"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { generatePuzzle, type PuzzleResult } from "../../lib/word-search";
import { downloadPDF } from "../../lib/pdf-export";
import {
  FREE_LIMITS,
  canDownload,
  incrementDownload,
  getDownloadCount,
  isPro,
  STRIPE_LINKS,
} from "../../lib/free-tier";
import Link from "next/link";

type Difficulty = "easy" | "medium" | "hard";
type PuzzleTheme = "classic" | "chalkboard" | "playful";

const puzzleThemes = {
  classic: {
    label: "Classic",
    gridBg: "bg-white",
    gridBorder: "border-indigo-200",
    cellBorder: "border-slate-100",
    cellText: "text-slate-800",
    cellBg: "",
    wordBg: "bg-indigo-50",
    wordText: "text-indigo-700",
    wordBorder: "border-indigo-100",
    titleText: "text-slate-900",
    previewBg: "bg-slate-50/50",
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
    gridBg: "bg-gradient-to-br from-violet-50 to-pink-50",
    gridBorder: "border-violet-200",
    cellBorder: "border-violet-100",
    cellText: "text-violet-900",
    cellBg: "",
    wordBg: "bg-gradient-to-r from-violet-100 to-pink-100",
    wordText: "text-violet-700",
    wordBorder: "border-violet-200",
    titleText: "text-violet-900",
    previewBg: "bg-violet-50/30",
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
    setUserIsPro(isPro());
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
    <div className="min-h-screen bg-[#fafbff]">
      <header className="border-b border-indigo-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
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
          {userIsPro ? (
            <span className="rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Pro
            </span>
          ) : (
            <Link
              href="/pricing"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 transition-all"
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
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Puzzle Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="Enter puzzle title"
              />
            </div>

            {/* Word Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Words{" "}
                <span
                  className={`font-normal ${
                    isOverWordLimit ? "text-rose-500" : "text-slate-400"
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
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono transition-shadow"
                placeholder={"Enter words, one per line or comma-separated\n\nExample:\nDOLPHIN\nOCEAN\nSURF\nBEACH\nWAVE"}
              />
              {isOverWordLimit && (
                <p className="mt-1.5 text-xs text-rose-500">
                  Free tier limited to {FREE_LIMITS.maxWords} words.{" "}
                  <Link href="/pricing" className="underline font-medium">
                    Upgrade to Pro
                  </Link>{" "}
                  for unlimited words.
                </p>
              )}
            </div>

            {/* Grid Size */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Grid Size:{" "}
                <span className="font-mono text-indigo-600">
                  {gridSize}×{gridSize}
                </span>
                {isOverGridLimit && (
                  <span className="text-rose-500 text-xs ml-2 font-normal">
                    (Free max: {FREE_LIMITS.maxGridSize}×{FREE_LIMITS.maxGridSize})
                  </span>
                )}
              </label>
              <input
                type="range"
                min={8}
                max={25}
                value={gridSize}
                onChange={(e) => setGridSize(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>8×8</span>
                <span>25×25</span>
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium capitalize transition-all ${
                      difficulty === d
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm"
                        : "border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-slate-700"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                {difficulty === "easy" && "Horizontal & vertical only"}
                {difficulty === "medium" && "Adds diagonal directions"}
                {difficulty === "hard" && "All directions including reverse"}
              </p>
            </div>

            {/* Puzzle Theme */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Puzzle Theme
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(puzzleThemes) as PuzzleTheme[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                      theme === key
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm"
                        : "border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-slate-700"
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
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Generate Puzzle
            </button>

            {puzzle && (
              <button
                onClick={handleDownload}
                className="w-full rounded-xl border-2 border-emerald-500 px-4 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-all"
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
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-slate-500">
                    Enter words and click Generate
                  </p>
                  <p className="text-sm mt-1 text-slate-400">
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
                  <div className="mb-4 rounded-lg bg-amber-50 border border-amber-200 p-3 text-sm text-amber-700">
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
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-indigo-100">
              <h3 className="text-xl font-bold text-slate-900">
                Download Limit Reached
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                You&apos;ve used all {FREE_LIMITS.maxDownloads} free downloads
                today. Upgrade to Pro for unlimited downloads, no watermarks,
                larger grids, and more words.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={STRIPE_LINKS.monthly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white text-center hover:shadow-lg hover:shadow-indigo-200 transition-all"
                >
                  Get Pro — $2.99/mo
                </a>
                <a
                  href={STRIPE_LINKS.yearly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border-2 border-emerald-500 px-4 py-3 text-sm font-semibold text-emerald-700 text-center hover:bg-emerald-50 transition-all"
                >
                  Get Pro — $19.99/yr (save 44%)
                </a>
                <div className="flex gap-3">
                  <Link
                    href="/pricing"
                    className="flex-1 text-center text-sm text-slate-500 hover:text-indigo-600 py-2 font-medium"
                  >
                    Compare Plans
                  </Link>
                  <button
                    onClick={() => setShowUpgrade(false)}
                    className="flex-1 text-center text-sm text-slate-500 hover:text-indigo-600 py-2 font-medium"
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
