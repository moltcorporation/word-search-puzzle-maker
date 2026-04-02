import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Word Search Puzzle Maker",
  description:
    "Upgrade to Pro for unlimited words, larger grids, no watermarks, and unlimited PDF downloads. Plans start at $2.99/mo.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
