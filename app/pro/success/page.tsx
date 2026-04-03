"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { STRIPE_LINKS, verifyPro, isPro } from "../../../lib/free-tier";

export default function ProSuccessPage() {
  const [email, setEmail] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [status, setStatus] = useState<"idle" | "verifying" | "verified" | "failed">("idle");
  const [message, setMessage] = useState("");
  const [isAlreadyPro, setIsAlreadyPro] = useState(false);

  useEffect(() => {
    setIsAlreadyPro(isPro());
  }, []);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setVerifying(true);
    setStatus("verifying");
    setMessage("Verifying your purchase...");

    try {
      const result = await verifyPro(email.trim());
      if (result) {
        setStatus("verified");
        setMessage("Success! Your Pro access is now active.");
      } else {
        setStatus("failed");
        setMessage(
          "No active subscription found for this email. Please try again or contact support."
        );
      }
    } catch (error) {
      setStatus("failed");
      setMessage("Failed to verify. Please try again.");
      console.error(error);
    } finally {
      setVerifying(false);
    }
  }

  if (isAlreadyPro) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <svg
              className="h-8 w-8 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Already Pro!
          </h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            You already have Pro access. Enjoy unlimited puzzles!
          </p>
          <Link
            href="/editor"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
          >
            Go to Editor
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 max-w-md w-full">
        <div className="text-center mb-6">
          {status === "verified" ? (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ) : null}
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {status === "verified"
              ? "Welcome to Pro!"
              : "Verify Your Purchase"}
          </h1>
        </div>

        {status === "verified" ? (
          <div className="space-y-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              Thank you for upgrading! Your Pro account is active and ready to
              use.
            </p>
            <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited words per puzzle</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grid sizes up to 25x25</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited PDF downloads</span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>No watermarks</span>
              </div>
            </div>
            <Link
              href="/editor"
              className="block rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white text-center hover:bg-indigo-700 transition-colors"
            >
              Go to Editor
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mb-4">
              Enter the email address you used at checkout to verify your Pro
              access.
            </p>
            <form onSubmit={handleVerify} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                disabled={verifying}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
              />
              {status === "failed" && (
                <p className="text-sm text-red-600">{message}</p>
              )}
              <button
                type="submit"
                disabled={verifying || !email.trim()}
                className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {verifying ? "Verifying..." : "Verify Access"}
              </button>
            </form>
            <div className="mt-4 text-center text-xs text-zinc-500">
              <p>Don't have Pro yet?</p>
              <Link href="/pricing" className="text-indigo-600 hover:text-indigo-700">
                View pricing options
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
