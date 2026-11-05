'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    Award,
    Briefcase,
    Milestone,
    Sparkles,
    CheckCircle2,
    ExternalLink,
    ChevronRight,
    Layers,
    Folder,
    Cpu,
    Shield,
    Clock,
    Tag,
    Globe,
    Video,
} from 'lucide-react';
import { achievementsAndExperiences, AchievementExperienceItem } from '@/lib/data';

export default function AchievementsExperienceHacker() {
    const [selectedCategory, setSelectedCategory] = useState<'All' | 'Experience' | 'Achievement' | 'Milestone'>('All');
    const [expandedId, setExpandedId] = useState<number | null>(1);

    const filteredItems = selectedCategory === 'All'
        ? achievementsAndExperiences
        : achievementsAndExperiences.filter(item => item.category === selectedCategory);

    const getItemIcon = (iconName: string) => {
        switch (iconName) {
            case 'Layers':
                return <Layers size={18} className="text-[var(--accent-primary)]" />;
            case 'Folder':
                return <Folder size={18} className="text-[var(--accent-primary)]" />;
            case 'Cpu':
                return <Cpu size={18} className="text-[var(--accent-primary)]" />;
            case 'Shield':
                return <Shield size={18} className="text-[var(--accent-primary)]" />;
            case 'Briefcase':
                return <Briefcase size={18} className="text-[var(--accent-primary)]" />;
            case 'Sparkles':
                return <Sparkles size={18} className="text-[var(--accent-primary)]" />;
            case 'Globe':
                return <Globe size={18} className="text-[var(--accent-primary)]" />;
            case 'Video':
                return <Video size={18} className="text-[var(--accent-primary)]" />;
            default:
                return <Award size={18} className="text-[var(--accent-primary)]" />;
        }
    };

    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
            {/* Ambient Background Grid & Matrix Glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-[var(--accent-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal size={20} className="text-[var(--accent-primary)] animate-pulse" />
                        <span className="terminal-line font-mono text-xs tracking-widest uppercase">
                            system.exec("fetch_achievements_and_experiences")
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter">
                                ACHIEVEMENTS<span className="text-[var(--accent-primary)]">&</span>EXP<span className="text-[var(--accent-primary)]">.log</span>
                            </h2>
                            <div className="h-1 w-20 bg-[var(--accent-primary)] mt-3"></div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-1.5 rounded-lg font-mono text-xs">
                            {(['All', 'Experience', 'Achievement', 'Milestone'] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                                        selectedCategory === cat
                                            ? 'bg-[var(--accent-primary)] text-black font-bold shadow-[0_0_12px_rgba(var(--accent-primary-rgb),0.3)]'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Timeline / Cards Container */}
                <div className="space-y-6">
                    {filteredItems.map((item, index) => {
                        const isExpanded = expandedId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                id={`milestone-${item.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative scroll-mt-24"
                            >
                                <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl overflow-hidden group-hover:border-[var(--border-accent)] transition-all duration-300">
                                    {/* Card Header Row */}
                                    <div
                                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                        className="p-4 sm:p-6 md:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[var(--bg-tertiary)]/30 transition-colors"
                                    >
                                        <div className="flex items-start gap-4 flex-1">
                                            {/* Icon Box */}
                                            <div className="w-12 h-12 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-primary)] transition-colors">
                                                {getItemIcon(item.icon)}
                                            </div>

                                            {/* Title & Metadata */}
                                            <div className="space-y-2 flex-1">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                                        {item.badge}
                                                    </span>
                                                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                                                        // {item.category}
                                                    </span>
                                                    <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1">
                                                        <Clock size={11} />
                                                        {item.period}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm font-mono text-[var(--text-secondary)]">
                                                    {item.role} <span className="text-[var(--text-tertiary)]">•</span> {item.organization}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action / Toggle */}
                                        <div className="flex items-center gap-4 lg:self-center">
                                            <span className="text-xs font-mono text-[var(--accent-primary)] hidden md:inline">
                                                {isExpanded ? '[COLLAPSE_LOG]' : '[INSPECT_LOG]'}
                                            </span>
                                            <div className={`w-8 h-8 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-primary)] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                                                <ChevronRight size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Details Body */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-[var(--border-primary)] bg-[var(--bg-tertiary)]/20 px-6 md:px-8 py-6 space-y-6"
                                            >
                                                {/* Summary Terminal Box */}
                                                <div className="p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] font-mono text-sm leading-relaxed text-[var(--text-secondary)]">
                                                    <p className="text-[var(--accent-primary)] text-xs mb-2">
                                                        &gt; cat milestone_brief.md
                                                    </p>
                                                    <p>{item.summary}</p>
                                                </div>

                                                {/* Highlights / Progress Checkpoints */}
                                                <div className="space-y-3">
                                                    <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider flex items-center gap-2">
                                                        <Sparkles size={14} />
                                                        <span>Key Insights & Core Milestones</span>
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-3">
                                                        {item.highlights.map((point, pIndex) => (
                                                            <div
                                                                key={pIndex}
                                                                className="flex items-start gap-3 p-3 rounded bg-[var(--bg-secondary)]/80 border border-[var(--border-primary)] text-xs font-mono text-[var(--text-secondary)]"
                                                            >
                                                                <CheckCircle2 size={14} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                                                                <span>{point}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Tech Stack & External Links Footer */}
                                                <div className="pt-4 border-t border-[var(--border-primary)]/60 flex flex-wrap items-center justify-between gap-4">
                                                    <div className="flex flex-wrap items-center gap-1.5">
                                                        <span className="text-[10px] font-mono text-[var(--text-tertiary)] mr-1 flex items-center gap-1">
                                                            <Tag size={10} /> DOMAIN_STACK:
                                                        </span>
                                                        {item.techStack.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-primary)]"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {item.link && (
                                                        <a
                                                            href={item.link}
                                                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 text-xs font-mono text-[var(--accent-primary)] hover:underline"
                                                        >
                                                            <span>open_external_reference</span>
                                                            <ExternalLink size={12} />
                                                        </a>
                                                    )}
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
