"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyPro, isPro } from "@/lib/free-tier";
import Link from "next/link";

function ProSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      const email = searchParams.get("email");
      if (!email) {
        setStatus("error");
        setMessage("No email provided. Please try again.");
        return;
      }

      try {
        const isVerified = await verifyPro(email);
        if (isVerified) {
          setStatus("success");
          setMessage("Payment verified! Redirecting to editor...");
          // Redirect to editor after 2 seconds
          setTimeout(() => {
            router.push("/editor");
          }, 2000);
        } else {
          setStatus("error");
          setMessage(
            "Payment verification failed. Please contact support if this persists."
          );
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred during verification. Please try again.");
      }
    };

    verify();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {status === "verifying" && (
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4 animate-spin">
              <div className="w-8 h-8 rounded-full border-2 border-indigo-300 border-t-indigo-600"></div>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
              Verifying Payment
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Please wait while we confirm your purchase...
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
              Welcome to Pro!
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              {message}
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Go to Editor
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 mb-4">
              <svg
                className="w-6 h-6 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
              Verification Failed
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              {message}
            </p>
            <Link
              href="/editor"
              className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
            >
              Back to Editor
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 animate-spin">
              <div className="w-8 h-8 rounded-full border-2 border-indigo-300 border-t-indigo-600"></div>
            </div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-4">
              Loading...
            </h1>
          </div>
        </div>
      }
    >
      <ProSuccessContent />
    </Suspense>
  );
}
