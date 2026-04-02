import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Printable Word Search Puzzles - Free Generator & PDF Download",
  description:
    "Generate and print custom word search puzzles for free. Choose your words, grid size, and difficulty. Download print-ready PDFs with answer keys. No account required.",
  keywords: [
    "printable word search",
    "printable word search puzzles",
    "free printable word search",
    "word search PDF",
    "print word search",
    "word search download",
    "word search printable free",
  ],
  openGraph: {
    title: "Printable Word Search Puzzles - Free Generator & PDF Download",
    description:
      "Generate and print custom word search puzzles for free. Download print-ready PDFs with answer keys.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Printable Word Search Generator",
  description:
    "Generate and download printable word search puzzles as PDFs with custom words, grid sizes, and difficulty levels.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/word-search-for-seniors", label: "Word Search for Seniors" },
  { href: "/baby-shower-word-search", label: "Baby Shower Word Search" },
  { href: "/bridal-shower-word-search", label: "Bridal Shower Word Search" },
  { href: "/word-search-puzzles-for-kids", label: "Word Search for Kids" },
];

export default function PrintableWordSearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Printable Word Search Puzzles"
        intro={
          <p>
            Need a word search you can print right now? Our free generator
            creates custom, print-ready word search puzzles as clean PDF
            downloads. Enter your own words or use any topic you like, pick your
            grid size and difficulty, and hit download. The PDF is formatted for
            standard paper sizes and prints perfectly every time.
          </p>
        }
        sections={[
          {
            title: "How It Works",
            body: "Creating a printable word search takes under a minute. Type or paste your word list into the editor — one word per line or comma-separated. Choose a grid size from 8x8 up to 25x25 depending on how many words you want to hide. Select your difficulty: easy places words horizontally and vertically, medium adds diagonals, and hard uses all directions including reverse. Click generate, preview your puzzle, and download the PDF. Done.",
          },
          {
            title: "Print-Optimized PDFs",
            body: "Every puzzle downloads as a clean, high-contrast PDF designed for printing. The layout is optimized for both A4 and US Letter paper with proper margins so nothing gets cut off. Letters are sized for easy reading, grid lines are crisp, and the word list appears below the puzzle. A separate answer key page is included so you always have the solution on hand. Print one copy or a hundred — the quality stays consistent.",
          },
          {
            title: "Use Anywhere",
            body: "Printable word searches are one of the most versatile activities you can have on hand. Teachers use them for vocabulary review and early finisher work. Parents print them for road trips and rainy afternoons. Event planners hand them out at parties and showers. Therapists use them for cognitive exercises. Sunday school teachers create Bible-themed puzzles. The possibilities are endless because you control every word in the grid.",
          },
        ]}
        cta="Generate a Printable Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
