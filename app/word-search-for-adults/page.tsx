import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search for Adults - Challenging Printable Puzzles",
  description:
    "Create challenging word search puzzles designed for adults. Large grids, hidden words in all directions, and custom themes. Print high-quality PDFs for relaxation, brain training, or group events.",
  keywords: [
    "word search for adults",
    "adult word search puzzles",
    "hard word search puzzles",
    "challenging word search",
    "word search for adults printable",
    "large word search puzzles",
    "difficult word search maker",
  ],
  openGraph: {
    title: "Word Search for Adults - Challenging Printable Puzzles",
    description:
      "Create challenging word search puzzles for adults with large grids, custom themes, and print-ready PDFs.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search for Adults",
  description:
    "Generate challenging word search puzzles for adults with large grids, reverse words, and diagonal placement.",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const relatedPages = [
  { href: "/word-search-for-seniors", label: "Word Search for Seniors" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/word-search-printable", label: "Word Search Printable" },
];

export default function WordSearchForAdults() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search for Adults"
        intro={
          <p>
            Word searches are not just for kids. Build puzzles with twenty-plus
            words, large grids, reverse placement, and diagonal hiding — the
            kind of challenge that actually holds your attention. Pick a theme
            that interests you, print a crisp PDF, and settle in with a coffee
            and a pencil.
          </p>
        }
        sections={[
          {
            title: "Real Challenge, Not Busywork",
            body: "Most word search generators cap out at easy. Ours lets you push difficulty as high as you want: bigger grids, more words, words running backward and diagonally, and overlapping letters that force you to look twice. Use long, complex vocabulary — medical terms, wine regions, classic literature titles — and the puzzle becomes a genuine brain workout instead of a five-minute distraction.",
          },
          {
            title: "Relaxation That Doesn't Need a Screen",
            body: "Puzzles are one of the few solo activities that feel productive and relaxing at the same time. Therapists recommend them for stress relief and focus. Retirement communities use them to keep minds sharp. Book clubs print themed puzzles as icebreakers. Whatever your reason, a printed word search is a calm, focused twenty minutes away from notifications and blue light.",
          },
          {
            title: "Themed Puzzles for Every Interest",
            body: "Build puzzles around topics you actually care about: classic rock bands, national parks, cooking techniques, architectural styles, philosophy terms. Because you control the word list, every puzzle reflects your interests — not a random generator's idea of fun. Print a few for yourself, or make a batch for a dinner party, book club, or office break room. Custom themes turn a simple puzzle into something people remember.",
          },
        ]}
        cta="Create an Adult Word Search"
        relatedPages={relatedPages}
      />
    </>
  );
}
