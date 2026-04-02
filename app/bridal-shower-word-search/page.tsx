import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Bridal Shower Word Search - Free Printable Wedding Game",
  description:
    "Create custom bridal shower word search puzzles with wedding-themed words. Print beautiful party games for your guests instantly. Free online generator, no account needed.",
  keywords: [
    "bridal shower word search",
    "bridal shower games",
    "wedding word search",
    "printable bridal shower games",
    "bridal shower activities",
    "free bridal shower games",
  ],
  openGraph: {
    title: "Bridal Shower Word Search - Free Printable Wedding Game",
    description:
      "Create custom bridal shower word search puzzles with wedding-themed words. Print instantly for your party.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Bridal Shower Word Search Generator",
  description:
    "Create and print custom bridal shower word search puzzles with wedding-themed words.",
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
  { href: "/printable-word-search", label: "Printable Word Search" },
  { href: "/word-search-puzzles-for-kids", label: "Word Search for Kids" },
];

export default function BridalShowerWordSearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Bridal Shower Word Search"
        intro={
          <p>
            Add a fun, personalized touch to any bridal shower with a custom
            word search puzzle. Fill the grid with wedding-themed words, the
            couple&apos;s story details, or romantic vocabulary — then print
            copies for every guest. It&apos;s the easiest bridal shower game to
            set up and one of the most enjoyed.
          </p>
        }
        sections={[
          {
            title: "A Game Everyone Enjoys",
            body: "Bridal shower games can be hit or miss — but word searches always land. They require no preparation beyond printing, no explaining beyond \"find the words,\" and no awkward moments. Guests of all ages can play, from the bride's college friends to her grandmother. Set a five-minute timer for a quick competition, or let guests work through it at their own pace between other activities.",
          },
          {
            title: "Personalize Your Puzzle",
            body: "Start with classic wedding words: BOUQUET, VEIL, HONEYMOON, CHAMPAGNE, RECEPTION, VOWS, BRIDESMAID, and GROOM. Then make it personal — add the couple's names, the proposal city, their wedding venue, the wedding date, or their pet's name. You can also build themed puzzles around travel destinations, love songs, or romantic movies. The personal touches are what make guests smile.",
          },
          {
            title: "Beautiful, Clean Printouts",
            body: "Our generator produces professional-quality PDFs that look polished on any printer. The clean grid layout and readable fonts mean your word search looks like something you bought, not something thrown together last minute. Print on colored cardstock to match your party theme, or keep it simple on white paper. Every puzzle includes an answer key on a separate page for easy judging.",
          },
        ]}
        cta="Create a Bridal Shower Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
