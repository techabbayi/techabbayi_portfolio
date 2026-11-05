'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    Briefcase,
    Sparkles,
    CheckCircle2,
    ExternalLink,
    ChevronDown,
    Layers,
    Folder,
    Cpu,
    Shield,
    Clock,
    ArrowUpRight,
    Globe,
    Video,
} from 'lucide-react';
import { achievementsAndExperiences, AchievementExperienceItem } from '@/lib/data';

export default function AchievementsExperienceDesigner() {
    const [activeCategory, setActiveCategory] = useState<'All' | 'Experience' | 'Achievement' | 'Milestone'>('All');
    const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

    const filteredItems = activeCategory === 'All'
        ? achievementsAndExperiences
        : achievementsAndExperiences.filter(item => item.category === activeCategory);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Layers':
                return <Layers size={20} className="text-[#5e1010]" />;
            case 'Folder':
                return <Folder size={20} className="text-[#5e1010]" />;
            case 'Cpu':
                return <Cpu size={20} className="text-[#5e1010]" />;
            case 'Shield':
                return <Shield size={20} className="text-[#5e1010]" />;
            case 'Briefcase':
                return <Briefcase size={20} className="text-[#5e1010]" />;
            case 'Sparkles':
                return <Sparkles size={20} className="text-[#5e1010]" />;
            case 'Globe':
                return <Globe size={20} className="text-[#5e1010]" />;
            case 'Video':
                return <Video size={20} className="text-[#5e1010]" />;
            default:
                return <Award size={20} className="text-[#5e1010]" />;
        }
    };

    return (
        <section id="experience" className="relative py-28 px-6 bg-[#ffeccc] theme-designer overflow-hidden">
            {/* Ambient Background Decorative Blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 w-80 h-80 bg-[#5e1010]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#a67c52]/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#5e1010] mb-3 block">
                            Milestones & Impact
                        </span>
                        <h2
                            className="text-3xl sm:text-4xl md:text-6xl font-black text-[#2d0808] leading-tight tracking-tighter"
                            style={{ fontFamily: 'var(--font-serif)' }}
                        >
                            Achievements <span className="text-[#a67c52] italic font-serif">& Experiences</span>
                        </h2>
                    </motion.div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {(['All', 'Experience', 'Achievement', 'Milestone'] as const).map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeCategory === cat
                                        ? 'bg-[#5e1010] text-[#ffeccc] shadow-md shadow-[#5e1010]/20'
                                        : 'bg-white/80 border border-[#f5d9b3] text-[#8b2020] hover:bg-white hover:text-[#5e1010]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline / Editorial Cards */}
                <div className="space-y-6">
                    {filteredItems.map((item, index) => {
                        const isOpen = activeAccordion === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="bg-white border border-[#f5d9b3] rounded-2xl sm:rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-[#5e1010] hover:shadow-[0_20px_40px_-10px_rgba(94,16,16,0.08)]">
                                    {/* Main Row */}
                                    <div
                                        onClick={() => setActiveAccordion(isOpen ? null : item.id)}
                                        className="p-5 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#fff5e6]/40 transition-colors"
                                    >
                                        <div className="flex items-start gap-4 sm:gap-5 flex-1">
                                            {/* Icon */}
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#fff5e6] border border-[#f5d9b3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5e1010] group-hover:text-[#ffeccc] transition-colors duration-500">
                                                {getIcon(item.icon)}
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-2">
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#5e1010]/10 text-[#5e1010]">
                                                        {item.badge}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-[#a67c52] flex items-center gap-1 font-mono">
                                                        <Clock size={12} />
                                                        {item.period}
                                                    </span>
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-[#d4a574]">
                                                        {item.organization}
                                                    </span>
                                                </div>

                                                <h3
                                                    className="text-xl sm:text-2xl md:text-3xl font-black text-[#2d0808] group-hover:text-[#5e1010] transition-colors leading-tight"
                                                    style={{ fontFamily: 'var(--font-serif)' }}
                                                >
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm font-medium text-[#8b2020]">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Toggle Action */}
                                        <div className="flex items-center gap-4 self-end lg:self-center">
                                            <span className="text-xs font-bold text-[#5e1010] uppercase tracking-wider hidden md:inline">
                                                {isOpen ? 'Close' : 'View Details'}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full border border-[#f5d9b3] flex items-center justify-center text-[#5e1010] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#5e1010] text-[#ffeccc]' : 'bg-[#fff5e6]'}`}>
                                                <ChevronDown size={18} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Content Drawer */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                className="border-t border-[#f5d9b3] bg-[#fff5e6]/30 px-5 sm:px-8 py-6"
                                            >
                                                <div className="space-y-6">
                                                    <p className="text-sm text-[#2d0808]/90 leading-relaxed max-w-4xl">
                                                        {item.summary}
                                                    </p>

                                                    {/* Key Highlights / Deliverables */}
                                                    {item.highlights && item.highlights.length > 0 && (
                                                        <div className="space-y-3">
                                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#a67c52]">
                                                                Key Outcomes & Deliverables
                                                            </span>
                                                            <div className="grid sm:grid-cols-2 gap-2.5">
                                                                {item.highlights.map((hl, i) => (
                                                                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#2d0808]">
                                                                        <CheckCircle2 size={14} className="text-[#5e1010] flex-shrink-0 mt-0.5" />
                                                                        <span>{hl}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Tech Stack & Action Link */}
                                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#f5d9b3]/50">
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {item.techStack.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white border border-[#f5d9b3] text-[#8b2020]"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {item.link && (
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 text-xs font-black text-[#5e1010] uppercase tracking-wider hover:underline"
                                                            >
                                                                <span>Explore Link</span>
                                                                <ArrowUpRight size={14} />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
