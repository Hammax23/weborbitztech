import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Web Development, Mobile Apps & Digital Solutions",
  description:
    "Explore WebOrbitz's comprehensive digital services: custom web development, mobile app development, UI/UX design, cloud solutions, AI/ML, and enterprise software. Tailored for Canadian businesses in Toronto, Vancouver, Montreal & nationwide.",
  keywords: [
    "web development services Canada",
    "mobile app development Toronto",
    "UI/UX design services Vancouver",
    "cloud solutions Canada",
    "AI ML development",
    "enterprise software development",
    "ecommerce solutions Canada",
  ],
  openGraph: {
    title: "Digital Services - WebOrbitz | Web, Mobile & Enterprise Solutions",
    description:
      "From web development to AI solutions - comprehensive digital services for Canadian businesses.",
    url: "https://weborbitztech.ca/services",
    type: "website",
  },
  alternates: {
    canonical: "https://weborbitztech.ca/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
