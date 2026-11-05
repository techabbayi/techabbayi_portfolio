import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Software Systems Archive',
  description:
    'Comprehensive software systems and open-source archive of Lokeswara Muthumula (techabbayi). Featuring FoundrAI (Autonomous Startup OS), LawPilot AI (Privacy-First Legal Tech), IntraQuiz AI, NeoShieldX Cryptography Vault, NeoShare, Folder Launcher, and ARC Advanced WebScan.',
  keywords: [
    'FoundrAI',
    'Autonomous AI Virtual Co-Founder',
    'FoundrAI Lokeswara Muthumula',
    'LawPilot AI',
    'Privacy-First Legal AI Platform',
    'LawPilot AI techabbayi',
    'IntraQuiz AI',
    'Adaptive Quiz Platform',
    'NeoShieldX',
    'ARC47 HexaCore Cryptography',
    'NeoShare QR File Sharing',
    'Folder Launcher Python',
    'ARC Advanced WebScan',
    'AI-Terminal CheatSheet',
    'Open Source Software by techabbayi',
    'Full Stack Software Projects India',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Software Archive & Flagship Inventions | Lokeswara Muthumula (techabbayi)',
    description:
      'Explore full-stack software systems, autonomous AI agents, security tools, and open-source repositories engineered by Lokeswara Muthumula.',
    url: '/projects',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 800,
        alt: 'Software Systems by Lokeswara Muthumula',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Archive | Lokeswara Muthumula (@techabbayi)',
    description:
      'Explore flagship AI systems, cryptography tools, and open-source software built by Lokeswara Muthumula.',
    images: ['/profile.png'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
