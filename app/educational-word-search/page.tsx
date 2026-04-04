import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Educational Word Search - Custom Vocabulary Puzzle Maker",
  description:
    "Create educational word search puzzles for any subject. Reinforce vocabulary in science, history, language arts, and more. Print PDFs for classrooms and homeschool.",
  keywords: [
    "educational word search",
    "educational word search maker",
    "vocabulary word search",
    "school word search",
    "teacher word search maker",
    "learning word search",
    "word search for students",
  ],
  openGraph: {
    title: "Educational Word Search - Custom Vocabulary Puzzle Maker",
    description:
      "Create educational word search puzzles for any subject. Printable PDFs for classrooms and homeschool.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Educational Word Search Maker",
  description:
    "Create educational word search puzzles with custom vocabulary for any subject area.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const allPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
  { href: "/word-search-printable", label: "Word Search Printable" },
  { href: "/word-search-games", label: "Word Search Games" },
];

export default function EducationalWordSearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Educational Word Search"
        intro={
          <p>
            Word searches are one of the simplest ways to reinforce vocabulary
            across any subject. Type in the terms your students are learning,
            choose a difficulty that matches their level, and print a classroom
            set in under a minute. Works for science, history, language arts,
            foreign languages, and anything else with words worth remembering.
          </p>
        }
        sections={[
          {
            title: "Aligned to What You Are Teaching",
            body: "Pre-made educational puzzles are never quite right — the words are too easy, too hard, or from the wrong unit. Our maker lets you type the exact terms from your curriculum. Teaching the water cycle? Use evaporation, condensation, precipitation, and runoff. Covering the Civil War? Add key battles, leaders, and dates. Every puzzle matches your lesson plan because you build it from your own word list.",
          },
          {
            title: "Works Across Grade Levels",
            body: "Adjust difficulty and grid size to match any grade. Early readers benefit from small grids with horizontal-only word placement. Upper elementary students handle diagonals and medium grids. Middle and high schoolers can tackle large grids with reverse placement and overlapping words. The same tool serves kindergarten through twelfth grade — just change the settings and the vocabulary.",
          },
          {
            title: "More Than Just Busywork",
            body: "Research supports word searches as a legitimate vocabulary reinforcement tool. Scanning letter grids for target words strengthens orthographic processing — the ability to recognize letter patterns quickly. Students encounter each word multiple times as they search, building familiarity without rote repetition. Pair puzzles with definitions on the back for a self-checking study tool, or use them as low-stakes assessments to see which terms students recognize instantly versus which ones take searching.",
          },
        ]}
        cta="Make an Educational Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
