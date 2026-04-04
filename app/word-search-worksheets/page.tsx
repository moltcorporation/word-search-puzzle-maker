import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Worksheets - Printable Puzzles for Classrooms & Home",
  description:
    "Download and print word search worksheets for any subject. Create custom vocabulary puzzles for classrooms, homeschool, tutoring, or self-study. Free online generator.",
  keywords: [
    "word search worksheets",
    "printable word search worksheets",
    "word search worksheet maker",
    "word search worksheets for students",
    "vocabulary word search worksheets",
    "free word search worksheets",
    "word search worksheet generator",
  ],
  openGraph: {
    title: "Word Search Worksheets - Printable Puzzles for Classrooms & Home",
    description:
      "Create and print custom word search worksheets for any subject. Perfect for classrooms, homeschool, and tutoring.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Worksheets",
  description:
    "Create printable word search worksheets with custom vocabulary lists for education and self-study.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const relatedPages = [
  { href: "/word-search-for-kids", label: "Word Search for Kids" },
  { href: "/free-word-search-games", label: "Free Word Search Games" },
  { href: "/word-search-for-adults", label: "Word Search for Adults" },
  { href: "/educational-word-search", label: "Educational Word Search" },
  { href: "/free-word-search-puzzles", label: "Free Word Search Puzzles" },
];

export default function WordSearchWorksheets() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search Worksheets"
        intro={
          <p>
            Turn any vocabulary list into a polished word search worksheet ready
            for the printer. Whether you teach third-grade science, tutor ESL
            students, or homeschool your own kids, a custom puzzle takes less
            than a minute to build and keeps learners focused while reinforcing
            the exact terms they need to know.
          </p>
        }
        sections={[
          {
            title: "Worksheets That Match Your Curriculum",
            body: "Premade worksheets never quite fit. The vocabulary is wrong, the grid is too easy, or the font is too small. With our generator you type the words that matter — your spelling list, your unit terms, your foreign-language vocab — and the puzzle builds itself around them. Choose the grid size, toggle answer keys, and print as many copies as you need. Every worksheet is unique, so students sitting next to each other get different puzzles from the same word list.",
          },
          {
            title: "From Bell-Ringer to Take-Home Activity",
            body: "Teachers use word search worksheets as five-minute warm-ups, early-finisher packets, review stations, and substitute-day plans. Tutors hand them out for low-stress vocabulary practice between sessions. Homeschool parents slot them into lesson plans as a screen-free break that still counts as learning. The format works because it is self-directed: students work at their own pace, no explanation needed, no grading required.",
          },
          {
            title: "Professional-Quality PDFs in Seconds",
            body: "Every worksheet exports as a clean, high-resolution PDF with clear gridlines and readable fonts. Print on standard letter paper or A4. Include the answer key on a separate page so you have it when you need it. The free tier lets you create worksheets with up to ten words and no watermark — upgrade to Pro for unlimited words, larger grids, and batch generation for the whole semester.",
          },
        ]}
        cta="Create a Worksheet"
        relatedPages={relatedPages}
      />
    </>
  );
}
