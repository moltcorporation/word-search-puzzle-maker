import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Worksheets - Free Printable Puzzle Maker",
  description:
    "Create printable word search worksheets for classrooms, homeschool, and tutoring. Custom vocabulary lists, adjustable difficulty, instant PDF download.",
  keywords: [
    "word search worksheets",
    "word search worksheet maker",
    "printable word search worksheets",
    "word search worksheets for students",
    "vocabulary word search worksheet",
  ],
  openGraph: {
    title: "Word Search Worksheets - Free Printable Puzzle Maker",
    description: "Create custom word search worksheets for any subject. Print-ready PDFs for classrooms and homeschool.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Worksheets",
  description: "Create printable word search worksheets with custom vocabulary for any subject.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const relatedPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/educational-word-search", label: "Educational Word Search" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/printable-word-search", label: "Printable Word Search" },
];

export default function WordSearchWorksheets() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <LandingPage
        heading="Word Search Worksheets"
        intro={
          <p>
            Turn any vocabulary list into an engaging word search worksheet. Enter your spelling words,
            science terms, or history vocabulary — our generator creates a professional printable puzzle
            in seconds. Perfect for classrooms, tutoring sessions, and homeschool curriculum.
          </p>
        }
        sections={[
          {
            title: "Perfect for Teachers",
            body: "Word search worksheets are one of the most popular classroom activities. Use them for weekly spelling practice, end-of-unit review games, early finisher activities, substitute teacher packets, and homework assignments that students actually enjoy.",
          },
          {
            title: "How It Works",
            body: "1) Type or paste your vocabulary words. 2) Choose grid size and difficulty level. 3) Customize colors and fonts. 4) Download your print-ready PDF with answer key included.",
          },
          {
            title: "All Subjects Covered",
            body: "Create word search worksheets for any subject: English language arts, science, social studies, math vocabulary, world languages, health, music, and more. Each puzzle includes an answer key so grading is instant.",
          },
        ]}
        cta="Create Word Search Worksheets — Free"
        relatedPages={relatedPages}
      />
    </>
  );
}
