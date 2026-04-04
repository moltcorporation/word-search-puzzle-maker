import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Puzzles for Seniors - Free Printable Generator",
  description:
    "Create large-print word search puzzles for seniors. Easy-to-read grids perfect for memory exercises, group activities, and cognitive stimulation. Print free PDFs instantly.",
  keywords: [
    "word search for seniors",
    "large print word search",
    "word search puzzles for elderly",
    "senior activities",
    "cognitive stimulation word search",
    "printable word search seniors",
  ],
  openGraph: {
    title: "Word Search Puzzles for Seniors - Free Printable Generator",
    description:
      "Create large-print word search puzzles for seniors. Easy-to-read grids perfect for memory exercises and group activities.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Puzzle Maker for Seniors",
  description:
    "Create large-print word search puzzles for seniors with customizable grid sizes and difficulty levels.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/printable-word-search", label: "Printable Word Search" },
  { href: "/word-search-puzzles-for-kids", label: "Word Search for Kids" },
];

export default function WordSearchForSeniors() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search Puzzles for Seniors"
        intro={
          <p>
            Keep minds sharp and spirits high with custom word search puzzles
            designed for older adults. Our free generator lets you create
            large-print, easy-to-read puzzles that are perfect for assisted
            living activities, memory care programs, and independent brain
            exercises at home.
          </p>
        }
        sections={[
          {
            title: "Why Word Searches Work for Seniors",
            body: "Word search puzzles are one of the most recommended cognitive activities for older adults. They reinforce vocabulary, exercise pattern recognition, and provide a calming, screen-free activity that can be done alone or in groups. Research consistently shows that regular word puzzles help maintain cognitive function and provide a sense of accomplishment. For activity directors in senior care facilities, word searches are a go-to because they scale to any group size and require no special equipment — just paper and pencils.",
          },
          {
            title: "Built for Readability",
            body: "Our generator creates clean, high-contrast grids that print beautifully on standard paper. Choose larger grid sizes with fewer words for an easier, more readable puzzle. The easy difficulty setting uses only horizontal and vertical word placement, making puzzles approachable without being patronizing. Every PDF includes a separate answer key page so helpers can assist when needed.",
          },
          {
            title: "Theme Ideas for Senior Groups",
            body: "Create themed puzzles around holidays, decades (1950s nostalgia, classic movies), nature, travel destinations, foods, or current events. Themed word searches spark conversation and shared memories, turning a simple puzzle into a social activity. Activity coordinators love using seasonal themes — spring flowers, summer vacations, autumn harvests — to keep programming fresh week after week.",
          },
        ]}
        cta="Create a Senior-Friendly Puzzle"
        relatedPages={allPages}
      />
    </>
  );
}
