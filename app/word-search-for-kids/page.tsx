import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search for Kids - Free Printable Puzzle Maker",
  description:
    "Make custom word search puzzles for kids of all ages. Easy, medium, and hard difficulty. Print colorful PDFs for classroom activities, homeschool, or family fun.",
  keywords: [
    "word search for kids",
    "kids word search maker",
    "word search for children",
    "easy word search for kids",
    "printable word search kids",
    "word search for kindergarten",
    "word search for first graders",
  ],
  openGraph: {
    title: "Word Search for Kids - Free Printable Puzzle Maker",
    description:
      "Make custom word search puzzles for kids of all ages. Print PDFs for classrooms, homeschool, or family fun.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search for Kids",
  description:
    "Create printable word search puzzles for kids with custom words and adjustable difficulty.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/educational-word-search", label: "Educational Word Search" },
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
];

export default function WordSearchForKids() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search for Kids"
        intro={
          <p>
            Keep kids entertained and learning with custom word search puzzles
            built around the words they know. Pick an easy grid for little ones
            just learning to read, or dial up the challenge for older kids.
            Every puzzle prints as a clean PDF — perfect for classrooms,
            waiting rooms, road trips, or rainy Saturday afternoons.
          </p>
        }
        sections={[
          {
            title: "Built for Every Age Group",
            body: "Kindergartners need simple 8x8 grids with horizontal-only words. Third graders can handle diagonals and a bigger grid. Middle schoolers want reverse words and tricky overlaps. Our difficulty settings and grid sizes let you match the puzzle to the child — not the other way around. You control the word list, so every puzzle reinforces exactly what they are studying this week.",
          },
          {
            title: "Classroom-Ready in 60 Seconds",
            body: "Teachers love word searches because they work as warm-ups, early finisher activities, vocabulary reviews, and reward activities. Type in your spelling list or unit vocabulary, choose a difficulty, and hit print. No login required, no watermarks on the free tier. Need answer keys? Toggle them on and print a separate sheet for yourself. One puzzle, thirty copies, five minutes of focused quiet.",
          },
          {
            title: "Screen-Free Fun at Home",
            body: "Parents and homeschoolers use our puzzles as a break from screens that still keeps brains active. Create puzzles around topics kids love — dinosaurs, space, animals, sports teams — and watch them race to find every word. Print a stack for car trips or doctor visits. Pair them with coloring or other printables for a complete activity pack. Because you pick the words, every puzzle feels personal.",
          },
        ]}
        cta="Make a Kids Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
