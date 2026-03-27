import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | WebOrbitz - Service Agreement & Legal Terms',
  description: 'Read WebOrbitz Technologies Terms and Conditions. Understand our service agreements, payment terms, intellectual property rights, warranties, and legal obligations for web development services in Canada.',
  keywords: [
    'terms and conditions',
    'service agreement',
    'legal terms',
    'WebOrbitz terms',
    'web development contract',
    'client agreement',
    'intellectual property',
    'payment terms',
    'Canadian business terms'
  ],
  openGraph: {
    title: 'Terms & Conditions | WebOrbitz Technologies',
    description: 'Our Terms and Conditions outline the legal agreement for WebOrbitz services.',
    url: 'https://weborbitztech.ca/terms-and-conditions',
    siteName: 'WebOrbitz',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | WebOrbitz',
    description: 'Service agreement and legal terms for WebOrbitz Technologies.',
  },
  alternates: {
    canonical: 'https://weborbitztech.ca/terms-and-conditions',
  },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
