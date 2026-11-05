import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Designer Edition & Manifesto',
  description:
    'Designer edition and creative manifesto of Lokeswara Muthumula (techabbayi). Thoughtful programming, intentional storytelling, and human-centric digital experiences.',
  alternates: {
    canonical: '/designer',
  },
  openGraph: {
    title: 'Designer Edition & Creative Manifesto | Lokeswara Muthumula',
    description:
      'Code as a bridge between imagination and reality. Explore the craft-driven designer perspective of Lokeswara Muthumula (techabbayi).',
    url: '/designer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designer Edition | Lokeswara Muthumula (@techabbayi)',
    description:
      'Thoughtful programming, intentional storytelling, and craft-driven digital experiences by Lokeswara Muthumula.',
  },
};

export default function DesignerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

