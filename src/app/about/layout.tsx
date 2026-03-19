import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Discover WebOrbitz - Canada's trusted digital partner since 2020. Learn about our team, values, and commitment to delivering exceptional web solutions for Canadian businesses across Toronto, Vancouver, Montreal & nationwide.",
  keywords: [
    "about WebOrbitz",
    "Canadian web development company",
    "digital agency Canada",
    "software development team Toronto",
    "tech company Vancouver",
    "IT solutions Montreal",
  ],
  openGraph: {
    title: "About WebOrbitz - Canada's Premier Digital Agency",
    description:
      "Learn about our mission to transform Canadian businesses through innovative web development and digital solutions.",
    url: "https://weborbitztech.ca/about",
    type: "website",
  },
  alternates: {
    canonical: "https://weborbitztech.ca/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
