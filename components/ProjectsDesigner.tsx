'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { designProjects } from '@/lib/data';
import { ArrowUpRight, Globe, Github, Layers, ArrowRight, Sparkles, Cpu, Scale, Lock, Binary } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsDesigner() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Only 5 featured projects on homepage
    const featuredProjects = designProjects.filter(p => p.featured).slice(0, 5);

    const getDesignerIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('foundr')) return <Cpu size={24} className="text-[#5e1010]" />;
        if (t.includes('lawpilot')) return <Scale size={24} className="text-[#5e1010]" />;
        if (t.includes('intra') || t.includes('quiz')) return <Layers size={24} className="text-[#5e1010]" />;
        if (t.includes('shield')) return <Lock size={24} className="text-[#5e1010]" />;
        return <Binary size={24} className="text-[#5e1010]" />;
    };

    return (
        <section id="work" className="relative py-24 px-6 bg-[#ffeccc] theme-designer overflow-hidden">
            {/* Dynamic Background Animations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-[#5e1010]/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -45, 0],
                        x: [0, -50, 0],
                        y: [0, -100, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[5%] w-[50vw] h-[50vw] bg-[#a67c52]/5 rounded-full blur-[100px]"
                />
                <div
                    className="absolute inset-0 bg-[grid-line] opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#5e1010] mb-3 block">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#2d0808] leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                            Featured <span className="text-[#a67c52] italic font-serif">Works</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <span className="px-3.5 py-1.5 rounded-full border border-[#f5d9b3] text-[10px] font-black text-[#a67c52] uppercase tracking-widest bg-white/70 backdrop-blur-sm">
                            Featured: {featuredProjects.length} / {designProjects.length} Total
                        </span>
                        <Link
                            href="/projects"
                            className="px-4 py-2 min-h-[44px] rounded-full bg-[#5e1010] text-[#ffeccc] text-[10px] font-black uppercase tracking-widest hover:bg-[#2d0808] transition-colors flex items-center gap-1.5"
                        >
                            <span>Browse All</span>
                            <ArrowRight size={12} />
                        </Link>
                    </motion.div>
                </div>

                {/* Featured Projects Grid: 5 Featured Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                        >
                            <div className="h-full rounded-2xl sm:rounded-[2rem] bg-white border border-[#f5d9b3] overflow-hidden flex flex-col hover:border-[#5e1010] transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(94,16,16,0.1)]">
                                {/* Visual Area */}
                                <div className={`relative bg-[#fff5e6] overflow-hidden ${index === 0 ? 'h-56' : 'h-48'}`}>
                                    <div className="absolute inset-0 bg-[grid-line] opacity-10" />

                                    {/* Abstract Visual Content */}
                                    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                                        <div className="w-full h-full rounded-xl border border-dashed border-[#5e1010]/15 flex flex-col items-center justify-center text-center gap-3 group-hover:bg-white/40 transition-colors">
                                            <div className="opacity-70 group-hover:scale-110 transition-transform duration-500">
                                                {getDesignerIcon(project.title)}
                                            </div>
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d4a574]">
                                                {project.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Link Overlay */}
                                    <div className="absolute inset-0 bg-[#2d0808]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                                        <Link
                                            href="/projects"
                                            className="px-4 py-2 min-h-[44px] rounded-lg bg-white text-[#2d0808] text-xs font-bold flex items-center gap-2 hover:bg-[#5e1010] hover:text-[#ffeccc] transition-all"
                                        >
                                            <span>Full Case Study</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-5 sm:p-7 space-y-3 flex-grow flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#a67c52]">
                                            {project.category}
                                        </span>
                                        <span className="text-[9px] font-bold text-[#5e1010] font-mono">{project.year}</span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-black text-[#2d0808] tracking-tight group-hover:text-[#5e1010] transition-colors leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                        {project.title}
                                    </h3>

                                    {/* Intent / Description */}
                                    <p className="text-xs font-medium text-[#8b2020] leading-relaxed line-clamp-3">
                                        {project.intent}
                                    </p>

                                    {/* Highlights */}
                                    {project.highlights && (
                                        <div className="space-y-1 pt-2">
                                            {project.highlights.slice(0, 2).map((h, i) => (
                                                <div key={i} className="text-[11px] text-[#2d0808]/80 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5e1010]"></span>
                                                    <span className="line-clamp-1">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-[#f5d9b3]">
                                        <p className="text-[9px] font-bold text-[#d4a574] uppercase tracking-tighter line-clamp-1">
                                            Outcome: {project.outcome}
                                        </p>
                                        <Link
                                            href="/projects"
                                            aria-label={`View details for ${project.title}`}
                                            className="text-[#5e1010] hover:translate-x-1 transition-transform flex items-center gap-1 text-xs font-bold p-1"
                                        >
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* See More Projects Editorial Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] bg-[#2d0808] border border-[#5e1010]/30 text-[#ffeccc] overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center lg:text-left space-y-3">
                            <span className="text-[10px] text-[#d4a574] uppercase tracking-[0.3em] font-black">
                                Complete Project Library
                            </span>
                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                                See remaining projects in the <span className="italic text-[#d4a574]">Dedicated Archive</span>
                            </h4>
                            <p className="text-xs text-[#f5d9b3]/80 leading-relaxed">
                                View all {designProjects.length} projects including <strong>Folder Launcher</strong>, <strong>ARC Advanced WebScan</strong>, and developer productivity tools with exhaustive case studies and source code links.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <Link
                                href="/projects"
                                className="w-full sm:w-auto justify-center min-h-[48px] px-8 py-4 rounded-xl bg-[#ffeccc] text-[#2d0808] font-black text-xs uppercase tracking-[0.15em] shadow-xl hover:bg-[#5e1010] hover:text-[#ffeccc] transition-all duration-300 flex items-center gap-2"
                            >
                                <span>See More Projects ({designProjects.length})</span>
                                <ArrowRight size={16} />
                            </Link>

                            <a
                                href="https://github.com/techabbayi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto justify-center min-h-[48px] px-6 py-4 rounded-xl border border-[#f5d9b3]/30 text-[#ffeccc] font-bold text-xs uppercase tracking-wider hover:border-[#f5d9b3] transition-colors flex items-center gap-2"
                            >
                                <Github size={16} />
                                <span>GitHub Archive</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
