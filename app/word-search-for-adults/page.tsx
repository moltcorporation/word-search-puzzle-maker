import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search for Adults - Challenging Printable Puzzles",
  description:
    "Create challenging word search puzzles for adults. Large grids, diagonal and backward words, custom themes. Print-ready PDFs for brain training and relaxation.",
  keywords: [
    "word search for adults",
    "adult word search",
    "hard word search puzzles",
    "word search for adults printable",
    "challenging word search",
    "large word search for adults",
  ],
  openGraph: {
    title: "Word Search for Adults - Challenging Printable Puzzles",
    description: "Create challenging word search puzzles for adults. Large grids, custom themes, PDF download.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search for Adults",
  description: "Create challenging word search puzzles for adults with large grids and custom themes.",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const relatedPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/word-search-for-seniors", label: "Word Search for Seniors" },
  { href: "/printable-word-search", label: "Printable Word Search" },
];

export default function WordSearchForAdults() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <LandingPage
        heading="Word Search for Adults"
        intro={
          <p>
            Create challenging word search puzzles with larger grids, diagonal words, and custom vocabulary.
            Perfect for brain training, relaxation, and group activities. Not watered-down kids&apos; puzzles
            — genuinely challenging.
          </p>
        }
        sections={[
          {
            title: "Popular Themes for Adults",
            body: "Wine and cocktails (grape varieties, cocktail names, wine regions), travel destinations (world cities, landmarks), movies and TV (classic films, streaming shows), science and nature (constellations, elements, national parks), food and cooking (spices, cuisines, kitchen terms), and sports (teams, athletes, terminology).",
          },
          {
            title: "Benefits for Brain Health",
            body: "Word search puzzles help maintain cognitive function, reduce stress, and improve pattern recognition. They're a screen-free way to unwind that keeps your brain active. Research suggests regular puzzle solving improves focus, expands vocabulary, and reduces anxiety.",
          },
          {
            title: "Maximum Challenge Settings",
            body: "Use large grids (20x20), enable backward and diagonal word placement, and choose longer, less common words. The Pro tier unlocks the largest grid sizes and custom difficulty settings for serious puzzle enthusiasts.",
          },
        ]}
        cta="Create an Adult Word Search Puzzle"
        relatedPages={relatedPages}
      />
    </>
  );
}
