import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Printable - Free Custom Puzzle PDF Generator",
  description:
    "Generate printable word search puzzles with your own words. Download high-quality PDFs with clean layouts and optional answer keys. No account needed.",
  keywords: [
    "word search printable",
    "printable word search",
    "word search PDF",
    "print word search puzzle",
    "word search download",
    "free printable word search",
    "custom printable word search",
  ],
  openGraph: {
    title: "Word Search Printable - Free Custom Puzzle PDF Generator",
    description:
      "Generate printable word search puzzles with your own words. Download high-quality PDFs instantly.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Printable Generator",
  description:
    "Generate and download printable word search puzzles as high-quality PDFs.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/printable-word-search", label: "Printable Word Search" },
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/word-search-for-seniors", label: "Word Search for Seniors" },
  { href: "/word-search-games", label: "Word Search Games" },
];

export default function WordSearchPrintable() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search Printable"
        intro={
          <p>
            Need a word search you can actually print? Type your words, pick
            a grid size and difficulty, and download a crisp PDF in seconds.
            Every puzzle is generated with clean spacing and readable fonts
            designed for paper — not screens. Print one copy or fifty. Answer
            keys included.
          </p>
        }
        sections={[
          {
            title: "PDFs That Print Beautifully",
            body: "Unlike screenshots of online puzzles, our PDFs are built for print from the start. Letters are evenly spaced, grids align to the page, and fonts are chosen for readability at any size. Whether you are printing on standard letter paper or A4, the layout adjusts automatically. No blurry text, no cut-off edges, no wasted ink on ads or navigation bars — just the puzzle.",
          },
          {
            title: "Your Words, Your Puzzle",
            body: "Pre-made puzzles are fine, but they rarely match what you actually need. Our generator lets you type in any list of words and builds a puzzle around them. Studying Spanish vocabulary? Reviewing anatomy terms? Planning a themed party? The puzzle matches your list exactly. Choose from three difficulty levels and multiple grid sizes to dial in the challenge for any audience.",
          },
          {
            title: "Answer Keys on Demand",
            body: "Every puzzle can include an answer key on a separate page — perfect for teachers grading activities, parents checking homework, or anyone who gets stuck. Toggle the answer key on or off before downloading. Print the puzzle pages for students and keep the answer key for yourself. Pro users can also remove the watermark for a polished handout.",
          },
        ]}
        cta="Generate a Printable Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
