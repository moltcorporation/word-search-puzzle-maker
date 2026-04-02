import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

export const metadata: Metadata = {
  title: "Word Search Puzzles for Kids - Free Printable Generator",
  description:
    "Create fun, educational word search puzzles for kids. Choose age-appropriate difficulty, custom vocabulary words, and print clean PDFs. Perfect for classrooms and homeschool.",
  keywords: [
    "word search puzzles for kids",
    "kids word search",
    "word search for children",
    "educational word search",
    "classroom word search",
    "homeschool word search",
    "printable word search for kids",
  ],
  openGraph: {
    title: "Word Search Puzzles for Kids - Free Printable Generator",
    description:
      "Create fun, educational word search puzzles for kids. Custom vocabulary, age-appropriate difficulty, and instant PDF downloads.",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Word Search Puzzle Maker for Kids",
  description:
    "Create educational word search puzzles for children with custom vocabulary words and age-appropriate difficulty levels.",
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
  { href: "/bridal-shower-word-search", label: "Bridal Shower Word Search" },
  { href: "/printable-word-search", label: "Printable Word Search" },
];

export default function WordSearchForKids() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LandingPage
        heading="Word Search Puzzles for Kids"
        intro={
          <p>
            Turn vocabulary practice into a game kids actually want to play.
            Our free word search generator lets parents, teachers, and
            homeschoolers create custom puzzles with exactly the words their
            kids are learning. Choose an easy difficulty for younger children or
            crank it up for older students. Print and go — no screens required.
          </p>
        }
        sections={[
          {
            title: "Learning Disguised as Fun",
            body: "Word searches reinforce spelling, build pattern recognition, and expand vocabulary — all while kids think they're just playing a game. Teachers use them as warm-up exercises, spelling practice, and early finisher activities. Parents love them as a screen-free alternative that keeps kids engaged on road trips, at restaurants, or on rainy afternoons. Because you control the word list, every puzzle is perfectly aligned with what your child is learning right now.",
          },
          {
            title: "Age-Appropriate Difficulty",
            body: "Our three difficulty levels let you match the puzzle to the child. Easy mode places words only horizontally and vertically — ideal for younger kids just learning to read. Medium adds diagonal placement for an extra challenge. Hard mode uses all directions including reverse, which is great for older students and advanced readers. Pair difficulty with grid size: smaller grids (8x8 or 10x10) for beginners, larger grids for kids who want a real challenge.",
          },
          {
            title: "Ideas for Every Subject",
            body: "Spelling words of the week are the obvious choice, but word searches work for any subject. Create science puzzles with vocabulary from the current unit — planets, weather terms, animal classifications. Build history puzzles around a time period or event. Use them for foreign language practice with translated vocabulary. Seasonal themes like Halloween, Thanksgiving, and back-to-school keep things fresh. Homeschoolers can integrate them into any curriculum as a fun review tool.",
          },
        ]}
        cta="Make a Word Search for Kids"
        relatedPages={allPages}
      />
    </>
  );
}
