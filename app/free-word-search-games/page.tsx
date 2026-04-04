import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Free Word Search Games - Play & Print Custom Puzzles",
  description:
    "Play and print free word search games online. Create your own puzzles with custom words, themes, and difficulty levels. No sign-up required — just pick your words and play.",
  keywords: [
    "free word search games",
    "word search games free",
    "free word search puzzles online",
    "play word search free",
    "printable word search games",
    "word search games for free",
    "free word search game maker",
  ],
  openGraph: {
    title: "Free Word Search Games - Play & Print Custom Puzzles",
    description:
      "Create and print free word search games with custom words and themes. No sign-up required.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Word Search Games",
  description:
    "Create free word search games with custom words, print as PDFs, and share with friends and family.",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const relatedPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/word-search-games", label: "Word Search Games" },
  { href: "/word-search-for-seniors", label: "Word Search for Seniors" },
];

export default function FreeWordSearchGames() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Free Word Search Games"
        intro={
          <p>
            Build a word search game around any theme you can think of — movies,
            holidays, animals, inside jokes with friends — and print it out or
            share the PDF. No account, no paywall, no ads. Just pick your words,
            choose a grid size, and your puzzle is ready in seconds.
          </p>
        }
        sections={[
          {
            title: "Your Words, Your Game",
            body: "Most free word search sites give you someone else's puzzle. Ours lets you build your own from scratch. Hosting a Halloween party? Make a spooky word search with candy, costume, and cauldron. Running a team-building session? Hide everyone's name in the grid. Planning a baby shower? Create a puzzle with baby-themed words for guests to race through. You choose every word, so every game feels personal and on-theme.",
          },
          {
            title: "Print Stacks for Any Occasion",
            body: "Word search games are the ultimate low-prep group activity. Print twenty copies for a birthday party, slip one into a care package, or leave a stack in a waiting room. They work for every age — kids love the colorful grids, adults enjoy the mental break, and seniors appreciate the focus exercise. Each puzzle exports as a sharp PDF that looks great on paper, not like a blurry screenshot from the internet.",
          },
          {
            title: "Free Tier, No Strings",
            body: "The free tier gives you full access to the puzzle generator with grids up to 15x15 and ten words per puzzle. No watermarks, no sign-up walls, no time limits. When you need bigger grids, more words, or batch printing for large events, Pro unlocks everything for less than the cost of a puzzle book. But for casual games and one-off fun, free covers it.",
          },
        ]}
        cta="Make a Free Word Search"
        relatedPages={relatedPages}
      />
    </>
  );
}
