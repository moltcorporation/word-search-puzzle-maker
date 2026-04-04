import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Free Word Search Puzzles - Create & Print Custom Puzzles",
  description:
    "Create free word search puzzles with your own words. No signup required. Choose grid size, difficulty, and download printable PDFs with answer keys instantly.",
  keywords: [
    "free word search puzzles",
    "free word search",
    "free word search maker",
    "free printable word search",
    "word search puzzles free",
    "make word search free",
    "word search generator free",
  ],
  openGraph: {
    title: "Free Word Search Puzzles - Create & Print Custom Puzzles",
    description:
      "Create free word search puzzles with custom words. No signup. Printable PDFs with answer keys.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Word Search Puzzle Maker",
  description:
    "Create free word search puzzles with custom words and download printable PDFs.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/word-search-printable", label: "Word Search Printable" },
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/educational-word-search", label: "Educational Word Search" },
  { href: "/word-search-games", label: "Word Search Games" },
  { href: "/baby-shower-word-search", label: "Baby Shower Word Search" },
];

export default function FreeWordSearchPuzzles() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Free Word Search Puzzles"
        intro={
          <p>
            Create custom word search puzzles without spending a dime or
            creating an account. Enter your words, pick your settings, and
            download a print-ready PDF in under a minute. Our free tier
            gives you everything you need for quick puzzles — upgrade to Pro
            only if you want watermark-free exports and unlimited words.
          </p>
        }
        sections={[
          {
            title: "No Signup, No Catch",
            body: "Most free puzzle sites make you create an account, sit through ads, or limit you to pre-made templates. We skip all of that. Open the editor, type your words, and generate. Your puzzle is built right in your browser — nothing is uploaded to a server. Download the PDF and print. That is the entire process. Free means free.",
          },
          {
            title: "Custom Puzzles for Any Occasion",
            body: "Word searches work for more situations than you might expect. Teachers use them for vocabulary review. Event planners create them for baby showers and birthday parties. Therapists and care facilities use them for cognitive exercises. Homeschoolers weave them into lesson plans. Whatever the occasion, you pick the words and the difficulty, and the puzzle is tailored to your needs.",
          },
          {
            title: "When Free Is Enough (and When It Is Not)",
            body: "The free tier supports up to 20 words per puzzle with three difficulty levels, multiple grid sizes, and PDF downloads with answer keys. That covers most use cases. Pro removes the small watermark, unlocks unlimited words per puzzle, and lets you adjust fonts and colors. If you are printing puzzles for a classroom or event where presentation matters, Pro is worth it at $2.99 a month. For quick personal use, free handles everything.",
          },
        ]}
        cta="Create a Free Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
