import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WebOrbitz - Data Protection & Privacy Practices',
  description: 'Learn how WebOrbitz Technologies protects your personal information. Our Privacy Policy outlines data collection, usage, security measures, and your rights under PIPEDA and Canadian privacy laws.',
  keywords: [
    'privacy policy',
    'data protection',
    'PIPEDA compliance',
    'personal information protection',
    'WebOrbitz privacy',
    'Canadian privacy law',
    'data security',
    'cookie policy',
    'privacy rights Canada'
  ],
  openGraph: {
    title: 'Privacy Policy | WebOrbitz Technologies',
    description: 'Our commitment to protecting your privacy and personal information under Canadian law.',
    url: 'https://weborbitztech.ca/privacy-policy',
    siteName: 'WebOrbitz',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | WebOrbitz',
    description: 'Learn how WebOrbitz protects your personal information.',
  },
  alternates: {
    canonical: 'https://weborbitztech.ca/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
