"use client";

import { useState } from "react";

export function InteractiveDemo() {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const grid = [
    "P A R T Y Z E N O S".split(" "),
    "L C E L E B R A T E".split(" "),
    "A F U N F I E S T A".split(" "),
    "Y A N I M A L S P Z".split(" "),
    "G A M E S D O O R D".split(" "),
  ];

  const words = ["PARTY", "CELEBRATE", "FUN", "FIESTA", "ANIMALS", "GAMES"];
  const hiddenWord = "PARTY";

  const toggleWord = (word: string) => {
    setSelectedWords((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-4 border-indigo-200 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10">
        <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">
          Try It Now
        </h3>

        {/* Interactive Grid */}
        <div className="mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 font-mono text-sm leading-7 text-indigo-900 font-bold tracking-wider border-2 border-indigo-200">
          <div className="inline-block">
            {grid.map((row, i) => (
              <div key={i} className="flex gap-1">
                {row.map((letter, j) => (
                  <span
                    key={`${i}-${j}`}
                    className={`w-5 h-5 flex items-center justify-center rounded transition-all ${
                      letter === "P" || letter === "A" || letter === "R"
                        ? "bg-indigo-500 text-white font-bold scale-110"
                        : "text-indigo-700"
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Word List */}
        <div className="mb-6">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">
            Find these words:
          </p>
          <div className="flex flex-wrap gap-2">
            {words.map((word) => (
              <button
                key={word}
                onClick={() => toggleWord(word)}
                className={`px-3 py-1 rounded-lg font-semibold text-xs transition-all ${
                  selectedWords.includes(word)
                    ? "bg-indigo-500 text-white scale-105 shadow-lg"
                    : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Message */}
        <p className="text-xs text-indigo-600">
          {selectedWords.includes(hiddenWord)
            ? "✓ Found one! Our tool makes creating these in seconds."
            : "Click to highlight words → Download as PDF"}
        </p>
      </div>
    </div>
  );
}
