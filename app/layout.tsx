import type { Metadata, Viewport } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import StructuredData from "@/components/StructuredData";
import SecurityGuard from "@/components/SecurityGuard";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techabbayi.com';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lokeswara Muthumula | Programmer, Cyber Activist & Founder — techabbayi',
    template: '%s | Lokeswara Muthumula — techabbayi',
  },
  description:
    'Official portfolio of Lokeswara Muthumula (techabbayi). Founder of AKMULTIVISION Multimedia Services & Diksuchi EdTech, Creator of Sr Digital Telugu, MyGov Campus Ambassador, AI systems engineer, and cybersecurity practitioner based in Andhra Pradesh, India.',
  keywords: [
    // Identity & Monikers
    'Lokeswara Muthumula',
    'techabbayi',
    'Lokeswara',
    'Muthumula Lokeswara',
    'techabbayi portfolio',
    // Flagship Projects & Inventions
    'FoundrAI',
    'FoundrAI Startup OS',
    'Autonomous AI Virtual Co-Founder',
    'LawPilot AI',
    'LawPilot AI Legal Intelligence',
    'Privacy-First AI Legal Tech',
    'IntraQuiz AI',
    'Dynamic AI Quiz Platform',
    'NeoShieldX',
    'ARC47 HexaCore Engine',
    'Hybrid Cryptographic File Vault',
    'NeoShare',
    'NeoShare QR File Sharing',
    'Folder Launcher',
    'Folder Launcher Python',
    'ARC Advanced WebScan',
    'Web Vulnerability Scanner',
    'AI-Terminal CheatSheet',
    'CLI AI Cheatsheet',
    // Ventures & Organizations
    'AKMULTIVISION Multimedia Services',
    'AKMULTIVISION',
    'Diksuchi EdTech',
    'Diksuchi EduLabs Private Limited',
    'Sr Digital Telugu',
    'Sr Software Solutions',
    // Key Roles, Milestones & Accreditations
    'MyGov Campus Ambassador',
    'Government of India Youth Ambassador',
    'HackSphere Hackathon Jury Member',
    'SITAMS Guest of Honour',
    'Apple WWDC26 Developer Participant',
    'Google for Developers techabbayi',
    'T-Hub Enterprise AI Google for Startups',
    'The Apollo University Programmer',
    'Cyber Activist India',
    'Full Stack Developer Andhra Pradesh',
    'Python AI Engineer India',
    'Autonomous AI Agents Architect',
  ],
  authors: [{ name: 'Lokeswara Muthumula', url: 'https://github.com/techabbayi' }],
  creator: 'Lokeswara Muthumula',
  publisher: 'Lokeswara Muthumula',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'Lokeswara Muthumula | Programmer, Cyber Activist & Founder — techabbayi',
    description:
      'Explore full-stack AI platforms (FoundrAI, LawPilot AI, IntraQuiz AI), cybersecurity tools (NeoShieldX), and tech initiatives engineered by Lokeswara Muthumula (techabbayi).',
    siteName: 'techabbayi.engineering',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Lokeswara Muthumula — techabbayi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lokeswara Muthumula (@techabbayi)',
    description:
      'Programmer • Cyber Activist • Founder of AKMULTIVISION & Diksuchi • Creator of Sr Digital Telugu • Developer of FoundrAI & LawPilot AI.',
    creator: '@techabbayi',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className="antialiased overflow-x-hidden select-none">
        <SecurityGuard />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
