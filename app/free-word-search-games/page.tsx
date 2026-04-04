import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Free Word Search Games - Play & Print Puzzles Online",
  description:
    "Create free word search games to play and print. Custom themes, adjustable difficulty, and instant PDF download. Fun for all ages — no signup required.",
  keywords: [
    "free word search games",
    "free word search",
    "word search games free",
    "free printable word search games",
    "word search game maker",
  ],
  openGraph: {
    title: "Free Word Search Games - Play & Print Puzzles Online",
    description: "Create free word search games with custom words. Print or play online.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free Word Search Games",
  description: "Create free word search games to play and print.",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const relatedPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/word-search-worksheets", label: "Word Search Worksheets" },
  { href: "/word-search-games", label: "Word Search Games" },
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
];

export default function FreeWordSearchGames() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <LandingPage
        heading="Free Word Search Games"
        intro={
          <p>
            Create custom word search games for free. Choose your own words, pick a theme, and
            download a printable puzzle — no account needed. Perfect for party games, family
            activities, classroom fun, and brain training.
          </p>
        }
        sections={[
          {
            title: "Great for Every Occasion",
            body: "Party games (baby showers, bridal showers, birthdays), family game night, classroom activities, brain training, and screen-free entertainment for waiting rooms and travel.",
          },
          {
            title: "100% Free to Use",
            body: "Create and download word search games for free. No account, no credit card, no limits on how many puzzles you make. Pro users get additional features like custom fonts, colors, and larger grid sizes.",
          },
          {
            title: "How to Create a Word Search Game",
            body: "1) Enter your list of words or choose a pre-made theme. 2) Select grid size: small (10x10), medium (15x15), or large (20x20). 3) Pick difficulty: easy (forward only) or hard (all directions). 4) Download your PDF and print.",
          },
        ]}
        cta="Make a Free Word Search Game"
        relatedPages={relatedPages}
      />
    </>
  );
}
