'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { designProjects } from '@/lib/data';
import { ArrowUpRight, Globe, Github, Layers, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProjectsDesigner() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
                <div className="absolute inset-0 bg-[grid-line] opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header: Compact & Modern */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#5e1010] mb-3 block">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#2d0808] leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                            Selected <span className="text-[#a67c52] italic font-serif">Works</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex gap-4"
                    >
                        <span className="px-3 py-1.5 rounded-full border border-[#f5d9b3] text-[9px] font-black text-[#a67c52] uppercase tracking-widest bg-white/50 backdrop-blur-sm">
                            Index: {designProjects.length}
                        </span>
                    </motion.div>
                </div>

                {/* Projects Grid: 3-Column Compact Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {designProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative"
                        >
                            <div className="h-full rounded-[2rem] bg-white border border-[#f5d9b3] overflow-hidden flex flex-col hover:border-[#5e1010] transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(94,16,16,0.1)]">
                                {/* Visual Area - Scaled Down */}
                                <div className="h-48 relative bg-[#fff5e6] overflow-hidden">
                                    <div className="absolute inset-0 bg-[grid-line] opacity-10" />

                                    {/* Abstract Visual Content */}
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="w-full h-full rounded-xl border border-dashed border-[#5e1010]/10 flex flex-col items-center justify-center text-center gap-3 group-hover:bg-white/40 transition-colors">
                                            <Layers size={24} className="text-[#5e1010] opacity-30 group-hover:scale-110 transition-transform duration-500" />
                                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#d4a574]">Archive_{index + 1}</p>
                                        </div>
                                    </div>

                                    {/* Link Overlay */}
                                    <div className="absolute inset-0 bg-[#2d0808]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                                        <button className="w-10 h-10 rounded-lg bg-white text-[#2d0808] flex items-center justify-center hover:bg-[#5e1010] hover:text-[#ffeccc] transition-all">
                                            <Globe size={18} />
                                        </button>
                                        <button className="w-10 h-10 rounded-lg bg-white text-[#2d0808] flex items-center justify-center hover:bg-[#5e1010] hover:text-[#ffeccc] transition-all">
                                            <Github size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Content Area - Refined Padding */}
                                <div className="p-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#a67c52]">
                                            {project.category}
                                        </span>
                                        <span className="text-[9px] font-bold text-[#5e1010] font-mono">{project.year}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-[#2d0808] tracking-tight group-hover:text-[#5e1010] transition-colors leading-tight">
                                        {project.title}
                                    </h3>

                                    {/* Description Container - Fixed height with smooth opacity fade */}
                                    <div className="h-14 overflow-hidden relative">
                                        <motion.div
                                            initial={{ opacity: 0.6 }}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0.6,
                                                y: hoveredIndex === index ? 0 : 2
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <p className={`text-xs font-medium leading-relaxed ${hoveredIndex === index ? 'text-[#8b2020]' : 'text-[#8b2020]/60'} line-clamp-3`}>
                                                {project.intent}
                                            </p>
                                        </motion.div>
                                    </div>

                                    <div className="pt-3 flex items-center justify-between border-t border-[#f5d9b3]">
                                        <p className="text-[8px] font-bold text-[#d4a574] uppercase tracking-tighter">
                                            Outcome: {project.outcome.split(' ').slice(0, 2).join(' ')}...
                                        </p>
                                        <motion.button
                                            whileHover={{ x: 3 }}
                                            className="text-[#5e1010]"
                                        >
                                            <ArrowRight size={16} />
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Updated Modern GitHub CTA Section - Fixed Hover Visibility */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 relative p-8 md:p-10 rounded-[2.5rem] bg-[#2d0808] border border-[#5e1010]/30 text-[#ffeccc] overflow-hidden group/cta shadow-2xl"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute -top-32 -right-32 w-80 h-80 bg-[#5e1010] rounded-full blur-[100px] pointer-events-none"
                    />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-md text-center md:text-left space-y-2">
                            <h4 className="text-3xl md:text-4xl font-black leading-none tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                                See more works on <span className="italic text-[#d4a574]">GitHub</span>
                            </h4>
                            <p className="text-[10px] text-[#a67c52] uppercase tracking-[0.2em] font-bold">
                                Comprehensive Code Archive
                            </p>
                        </div>

                        <motion.a
                            href="https://github.com/techabbayi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative px-8 py-4 rounded-xl bg-[#ffeccc] text-[#2d0808] font-black text-[10px] uppercase tracking-[0.15em] shadow-xl border border-[#ffeccc] hover:border-[#5e1010] transition-all duration-500 flex items-center gap-3 overflow-hidden"
                        >
                            {/* Hover Reveal: Now using Burgundy (#5e1010) to contrast with Black (#2d0808) background */}
                            <div className="absolute inset-0 flex">
                                <div className="w-0 group-hover/btn:w-full h-full bg-[#5e1010] transition-all duration-500" />
                            </div>

                            <span className="relative z-10 flex items-center gap-3 group-hover/btn:text-[#ffeccc] transition-colors duration-500">
                                <Github size={16} className="group-hover/btn:rotate-[360deg] transition-transform duration-700" />
                                Explore Profile
                            </span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
