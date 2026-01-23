'use client';

import { motion } from 'framer-motion';
import { creatorProjects } from '@/lib/data';
import { ArrowUpRight, Play, Camera, Mic, Code2, Sparkles, Command } from 'lucide-react';

export default function CreatorDesigner() {
    const iconMap: Record<string, any> = {
        Play,
        Camera,
        Mic,
        Code2,
    };

    const gradients = [
        'from-[#5e1010] to-[#8b2020]',
        'from-[#8b2020] to-[#a67c52]',
        'from-[#5e1010] to-[#2d0808]',
        'from-[#a67c52] to-[#5e1010]',
    ];

    return (
        <section id="creator" className="relative py-32 px-6 overflow-hidden bg-[#fff5e6] theme-designer">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)',
                        backgroundSize: '120px 120px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010] mb-6 block">Experimental</span>
                        <h2 className="text-6xl md:text-[8rem] font-black text-[#2d0808] leading-[0.8] tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                            Creative <br /> <span className="text-[#d4a574] italic font-serif">Lab</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col items-end gap-2 text-right hidden md:flex">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#a67c52]">Side Projects</span>
                        <div className="px-5 py-2 rounded-full bg-white border border-[#f5d9b3] flex items-center gap-2 shadow-sm">
                            <Sparkles size={14} className="text-[#5e1010]" />
                            <span className="text-xs font-bold text-[#2d0808] tracking-tight">Active Playground</span>
                        </div>
                    </div>
                </div>

                {/* Creator Grid - High-end Cards */}
                <div className="grid md:grid-cols-2 gap-10">
                    {creatorProjects.map((item, index) => {
                        const IconComponent = iconMap[item.icon] || Command;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-[450px] rounded-[3.5rem] bg-white border border-[#f5d9b3] overflow-hidden flex flex-col p-12 hover:border-[#5e1010]/30 hover:shadow-[0_40px_80px_rgba(94,16,16,0.05)] transition-all duration-700 group">
                                    {/* Abstract Background Decoration */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-1000`} />

                                    <div className="flex justify-between items-start mb-12">
                                        <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-[#ffeccc] shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                            <IconComponent size={32} />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-[#d4a574] uppercase tracking-widest mb-1">Process</p>
                                            <p className="text-sm font-bold text-[#2d0808] uppercase tracking-tighter italic">Iteration_v{index + 1}.0</p>
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-6">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-[#fff5e6] border border-[#f5d9b3] text-[10px] font-black uppercase tracking-widest text-[#a67c52]">
                                                {item.type}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-[#2d0808] group-hover:text-[#5e1010] transition-colors tracking-tight leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-lg text-[#8b2020] font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-[#ffeedd] flex justify-between items-center group-hover:border-[#5e1010] transition-colors">
                                        <span className="text-xs font-black uppercase tracking-widest text-[#d4a574] group-hover:text-[#5e1010] transition-colors">Launch Resource</span>
                                        <div className="w-12 h-12 rounded-full border border-[#f5d9b3] flex items-center justify-center group-hover:bg-[#5e1010] group-hover:text-[#ffeccc] transition-all transform group-hover:rotate-45">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Collaboration Invite Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-32 p-1 rounded-[4rem] bg-gradient-to-r from-[#5e1010] via-[#8b2020] to-[#2d0808] shadow-2xl"
                >
                    <div className="px-12 py-20 rounded-[3.8rem] bg-white flex flex-col items-center text-center gap-8 overflow-hidden relative">
                        {/* Subtle Animated Background for Banner */}
                        <div className="absolute inset-0 bg-[grid-line] opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <div className="relative z-10 max-w-2xl">
                            <h3 className="text-4xl md:text-6xl font-black text-[#2d0808] mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                Got an <span className="text-[#5e1010]">impossible</span> project?
                            </h3>
                            <p className="text-xl text-[#8b2020] font-medium leading-relaxed">
                                I specialize in high-concept experiments that push the limits of digital interaction and visual storytelling.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10 px-12 py-6 rounded-3xl bg-[#2d0808] text-[#ffeccc] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#5e1010] transition-all flex items-center gap-4"
                        >
                            Start a Collaboration <MoveRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const MoveRight = ({ size, className }: { size: number; className?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);
