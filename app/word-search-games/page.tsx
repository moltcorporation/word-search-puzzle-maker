import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Games - Make Your Own Printable Puzzles",
  description:
    "Create word search games with custom words for parties, classrooms, family game nights, and events. Print clean PDFs with adjustable difficulty and answer keys.",
  keywords: [
    "word search games",
    "word search game maker",
    "word search puzzle game",
    "make word search game",
    "printable word search game",
    "word search activity",
    "custom word search game",
  ],
  openGraph: {
    title: "Word Search Games - Make Your Own Printable Puzzles",
    description:
      "Create word search games with custom words for parties, classrooms, and events. Print PDFs instantly.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Game Maker",
  description:
    "Create custom word search games with your own words and print them as PDFs.",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/educational-word-search", label: "Educational Word Search" },
];

export default function WordSearchGames() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search Games"
        intro={
          <p>
            Turn any word list into a game people actually enjoy. Our word
            search maker lets you create custom puzzle games for parties,
            classrooms, team-building events, or a quiet evening at home.
            Adjust the grid size and difficulty, print the PDF, and let the
            competition begin. No app download needed.
          </p>
        }
        sections={[
          {
            title: "Party Games That Write Themselves",
            body: "Hosting a baby shower? Fill the grid with baby-related words. Running a company icebreaker? Use team members' names and inside jokes. Planning a holiday gathering? Build a seasonal word search everyone can race through. Custom word searches are the easiest party activity to prepare — five minutes of setup, printed in seconds, and guests of all ages can play. Hand out pencils and watch the room get competitive.",
          },
          {
            title: "Classroom Game Time",
            body: "Word search games turn review sessions into something students look forward to. Use them as timed challenges where the first student to find all words wins. Create team competitions with different word lists. Build end-of-unit review puzzles that cover key vocabulary. The game format keeps students engaged longer than flashcards or worksheets, and the puzzle format naturally reinforces spelling and pattern recognition.",
          },
          {
            title: "Solo or Competitive — You Decide",
            body: "Word searches work just as well for solo relaxation as they do for group competition. Print a stack for a quiet afternoon with coffee, or set a timer and race a friend. Create themed puzzle sets — one per day of the week, or one per topic in a study guide. The flexibility of custom words means every puzzle is fresh. No two games are the same when you control the content.",
          },
        ]}
        cta="Create a Word Search Game"
        relatedPages={allPages}
      />
    </>
  );
}
