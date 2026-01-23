'use client';

import Header from '@/components/Header';
import HeroDesigner from '@/components/HeroDesigner';
import AboutDesigner from '@/components/AboutDesigner';
import SkillsDesigner from '@/components/SkillsDesigner';
import ProjectsDesigner from '@/components/ProjectsDesigner';
import CertificatesDesigner from '@/components/CertificatesDesigner';
import ContactDesigner from '@/components/ContactDesigner';
import Footer from '@/components/Footer';

export default function DesignerPage() {
    return (
        <div className="min-h-screen theme-designer">
            <Header />
            <main>
                <HeroDesigner />
                <AboutDesigner />
                <SkillsDesigner />
                <ProjectsDesigner />
                <CertificatesDesigner />
                <ContactDesigner />
            </main>
            <Footer />
        </div>
    );
}
