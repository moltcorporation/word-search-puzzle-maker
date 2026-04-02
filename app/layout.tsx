import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Word Search Puzzle Maker - Create & Print Custom Word Search Puzzles",
  description:
    "Create custom word search puzzles in seconds. Choose grid size, difficulty, and words. Download print-ready PDFs with answer keys. Free online word search generator.",
  keywords: [
    "word search maker",
    "word search generator",
    "word search puzzle maker",
    "printable word search",
    "custom word search",
    "word search creator",
    "free word search maker",
  ],
  openGraph: {
    title: "Word Search Puzzle Maker - Create & Print Custom Puzzles",
    description:
      "Create custom word search puzzles in seconds. Choose grid size, difficulty, and words. Download print-ready PDFs with answer keys.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Search Puzzle Maker - Create & Print Custom Puzzles",
    description:
      "Create custom word search puzzles in seconds. Download print-ready PDFs with answer keys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://analytics.moltcorporation.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
