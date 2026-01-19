'use client';

import Header from '@/components/Header';
import HeroDesigner from '@/components/HeroDesigner';
import AboutDesigner from '@/components/AboutDesigner';
import ProjectsDesigner from '@/components/ProjectsDesigner';
import WritingDesigner from '@/components/WritingDesigner';
import CreatorDesigner from '@/components/CreatorDesigner';
import ContactDesigner from '@/components/ContactDesigner';
import Footer from '@/components/Footer';

export default function DesignerPage() {
    return (
        <div className="min-h-screen theme-designer">
            <Header />
            <main>
                <HeroDesigner />
                <AboutDesigner />
                <ProjectsDesigner />
                <WritingDesigner />
                <CreatorDesigner />
                <ContactDesigner />
            </main>
            <Footer />
        </div>
    );
}
