import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Baby Shower Word Search - Free Printable Game Generator",
  description:
    "Create custom baby shower word search games in seconds. Add baby-themed words, print clean PDFs, and entertain guests with a fun party activity. Free and instant.",
  keywords: [
    "baby shower word search",
    "baby shower games",
    "printable baby shower activities",
    "baby shower puzzle",
    "baby word search game",
    "free baby shower games printable",
  ],
  openGraph: {
    title: "Baby Shower Word Search - Free Printable Game Generator",
    description:
      "Create custom baby shower word search games in seconds. Print clean PDFs for your party guests.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Baby Shower Word Search Generator",
  description:
    "Create and print custom baby shower word search puzzles with your own baby-themed words.",
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
  { href: "/bridal-shower-word-search", label: "Bridal Shower Word Search" },
  { href: "/printable-word-search", label: "Printable Word Search" },
  { href: "/word-search-puzzles-for-kids", label: "Word Search for Kids" },
];

export default function BabyShowerWordSearch() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Baby Shower Word Search"
        intro={
          <p>
            Planning a baby shower? A custom word search is the perfect
            low-effort, high-fun party game. Enter your own baby-themed words —
            from nursery items to the parents&apos; favorite names — and print
            enough copies for every guest in seconds. No downloads, no sign-ups,
            just instant printable fun.
          </p>
        }
        sections={[
          {
            title: "The Perfect Party Game",
            body: "Baby shower word searches are a crowd favorite because they work for every guest — no awkward icebreakers, no complicated rules. Hand out the puzzles with pencils, set a timer, and let guests compete to find all the words first. It fills gaps between activities, keeps early arrivals busy, and gives quieter guests something to enjoy. You can even offer a small prize for the first person to finish.",
          },
          {
            title: "Word Ideas for Your Puzzle",
            body: "Start with classics: BOTTLE, DIAPER, STROLLER, PACIFIER, NURSERY, ONESIE, LULLABY, and BLANKET. Then personalize it — add the baby's name (if known), the parents' names, the nursery theme, or inside jokes. Going with a specific theme like safari animals or fairy tales? Use words that match. The more personal the puzzle, the more memorable the game.",
          },
          {
            title: "Print-Ready in Under a Minute",
            body: "Our generator creates clean, professionally formatted PDFs that look great printed on standard paper. Each puzzle comes with a separate answer key so the host can verify winners quickly. Choose easy difficulty for a quick party game or medium difficulty for a more challenging activity. Print at home, at the office, or at any copy shop — the PDF is optimized for crisp, clean output every time.",
          },
        ]}
        cta="Make a Baby Shower Word Search"
        relatedPages={allPages}
      />
    </>
  );
}
