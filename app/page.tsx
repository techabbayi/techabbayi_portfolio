'use client';

import { useState } from 'react';
import BootSequence from '@/components/BootSequence';
import Header from '@/components/Header';
import HeroHacker from '@/components/HeroHacker';
import AboutHacker from '@/components/AboutHacker';
import SkillsHacker from '@/components/SkillsHacker';
import ProjectsHacker from '@/components/ProjectsHacker';
import CertificatesHacker from '@/components/CertificatesHacker';
import ContactHacker from '@/components/ContactHacker';
import Footer from '@/components/Footer';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      {bootComplete && (
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroHacker />
            <AboutHacker />
            <SkillsHacker />
            <ProjectsHacker />
            <CertificatesHacker />
            <ContactHacker />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
