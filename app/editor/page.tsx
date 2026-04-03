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

export default function EditorPage() {
  const [wordInput, setWordInput] = useState("");
  const [title, setTitle] = useState("My Word Search");
  const [gridSize, setGridSize] = useState(12);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [puzzle, setPuzzle] = useState<PuzzleResult | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [userIsPro, setUserIsPro] = useState(false);
  const [upgradeEmail, setUpgradeEmail] = useState("");

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

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
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
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
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
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Puzzle Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter puzzle title"
              />
            </div>

            {/* Word Input */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Words{" "}
                <span
                  className={`${
                    isOverWordLimit ? "text-red-500" : "text-zinc-400"
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
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
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
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
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
                className="w-full accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-zinc-400 mt-1">
                <span>8x8</span>
                <span>25x25</span>
              </div>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition-colors ${
                      difficulty === d
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <p className="mt-1 text-xs text-zinc-400">
                {difficulty === "easy" && "Horizontal & vertical only"}
                {difficulty === "medium" && "Adds diagonal directions"}
                {difficulty === "hard" && "All directions including reverse"}
              </p>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={wordCount === 0}
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Generate Puzzle
            </button>

            {puzzle && (
              <button
                onClick={handleDownload}
                className="w-full rounded-lg border-2 border-indigo-600 px-4 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
              >
                {userIsPro
                  ? "Download PDF"
                  : `Download PDF (${FREE_LIMITS.maxDownloads - getDownloadCount()} free remaining)`}
              </button>
            )}
          </div>

          {/* Preview Panel */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 min-h-[500px] flex flex-col">
            {!puzzle ? (
              <div className="flex-1 flex items-center justify-center text-zinc-400">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-zinc-300 dark:text-zinc-700 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    Enter words and click Generate
                  </p>
                  <p className="text-sm mt-1">
                    Your puzzle preview will appear here
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
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
                    className="inline-grid gap-0 border border-zinc-300 dark:border-zinc-700"
                    style={{
                      gridTemplateColumns: `repeat(${puzzle.grid[0].length}, minmax(0, 1fr))`,
                    }}
                  >
                    {puzzle.grid.map((row, r) =>
                      row.map((letter, c) => (
                        <div
                          key={`${r}-${c}`}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm font-mono font-bold text-zinc-800 dark:text-zinc-200 select-none"
                        >
                          {letter}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Word List */}
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Find these words:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {puzzle.placedWords.map((pw) => (
                      <span
                        key={pw.word}
                        className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300"
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
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md mx-4 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Download Limit Reached
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                You&apos;ve used all {FREE_LIMITS.maxDownloads} free downloads
                today. Upgrade to Pro for unlimited downloads, no watermarks,
                larger grids, and more words.
              </p>
              <div className="mt-6 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={upgradeEmail}
                    onChange={(e) => setUpgradeEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && upgradeEmail) {
                        const returnUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/pro/success?email=${encodeURIComponent(upgradeEmail)}`;
                        window.location.href = `${STRIPE_LINKS.monthly.url}${STRIPE_LINKS.monthly.url.includes("?") ? "&" : "?"}return_url=${encodeURIComponent(returnUrl)}`;
                      }
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => {
                    if (upgradeEmail) {
                      const returnUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/pro/success?email=${encodeURIComponent(upgradeEmail)}`;
                      window.location.href = `${STRIPE_LINKS.monthly.url}${STRIPE_LINKS.monthly.url.includes("?") ? "&" : "?"}return_url=${encodeURIComponent(returnUrl)}`;
                    }
                  }}
                  disabled={!upgradeEmail}
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white text-center hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Get Pro — $2.99/mo
                </button>
                <button
                  onClick={() => {
                    if (upgradeEmail) {
                      const returnUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/pro/success?email=${encodeURIComponent(upgradeEmail)}`;
                      window.location.href = `${STRIPE_LINKS.yearly.url}${STRIPE_LINKS.yearly.url.includes("?") ? "&" : "?"}return_url=${encodeURIComponent(returnUrl)}`;
                    }
                  }}
                  disabled={!upgradeEmail}
                  className="w-full rounded-lg border-2 border-indigo-600 px-4 py-2.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 text-center hover:bg-indigo-50 dark:hover:bg-indigo-950 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Get Pro — $19.99/yr (save 44%)
                </button>
                <div className="flex gap-3">
                  <Link
                    href="/pricing"
                    className="flex-1 text-center text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 py-2"
                  >
                    Compare Plans
                  </Link>
                  <button
                    onClick={() => {
                      setShowUpgrade(false);
                      setUpgradeEmail("");
                    }}
                    className="flex-1 text-center text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 py-2"
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
