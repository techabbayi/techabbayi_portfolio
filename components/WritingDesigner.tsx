'use client';

import { motion } from 'framer-motion';
import { writings } from '@/lib/data';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';

export default function WritingDesigner() {
    return (
        <section id="writing" className="relative py-32 px-6 overflow-hidden bg-[#ffeccc] theme-designer">
            {/* Structural Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, #5e1010 1px, transparent 1px)',
                        backgroundSize: '100% 120px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-12"
                    >
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010] mb-6 block">Publications</span>
                            <h2 className="text-6xl md:text-9xl font-black text-[#2d0808] leading-[0.8] tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                                Thoughts <br /> & <span className="text-[#a67c52] italic font-serif">Logs</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-right">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4a574]">Knowledge Base</span>
                            <span className="text-sm font-bold text-[#2d0808]">Articles / Research / Insights</span>
                        </div>
                    </motion.div>
                </div>

                {/* Writings List - High-end Editorial Layout */}
                <div className="divide-y divide-[#f5d9b3]">
                    {writings.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group py-16 grid lg:grid-cols-12 gap-12 relative overflow-hidden"
                        >
                            {/* Hover Reveal Decoration */}
                            <div className="absolute inset-0 bg-[#5e1010]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />

                            <div className="lg:col-span-3 space-y-4 relative z-10">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black text-[#5e1010] uppercase tracking-widest font-mono">
                                        {(index + 1).toString().padStart(2, '0')}.
                                    </span>
                                    <span className="text-[10px] font-bold text-[#d4a574] uppercase underline decoration-[#f5d9b3] underline-offset-4">
                                        {article.category}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-[#a67c52]">
                                    <Clock size={12} />
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">{article.readTime}</span>
                                </div>
                            </div>

                            <div className="lg:col-span-7 relative z-10">
                                <h3 className="text-3xl md:text-5xl font-black text-[#2d0808] mb-6 group-hover:text-[#5e1010] transition-colors leading-[1.1] tracking-tight">
                                    {article.title}
                                </h3>
                                <p className="text-lg text-[#8b2020] font-medium leading-relaxed max-w-2xl mb-8 group-hover:text-[#2d0808] transition-colors">
                                    {article.excerpt}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 rounded-full bg-[#fff5e6] border border-[#f5d9b3] text-[10px] font-black uppercase tracking-widest text-[#a67c52] group-hover:bg-white group-hover:border-[#5e1010] transition-all">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2 flex items-start lg:justify-end relative z-10 pt-4">
                                <motion.a
                                    href={`#`}
                                    whileHover={{ scale: 1.1, rotate: 45 }}
                                    className="w-16 h-16 rounded-[2rem] bg-[#5e1010] text-[#ffeccc] flex items-center justify-center shadow-xl group-hover:bg-[#8b2020] transition-all"
                                >
                                    <ArrowUpRight size={24} />
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Footer Invite */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-16 rounded-[4rem] bg-[#2d0808] text-[#ffeccc] relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#5e1010] rounded-full blur-[150px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-1000" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="max-w-xl text-center md:text-left">
                            <h4 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                Want more <span className="italic">insights</span>?
                            </h4>
                            <p className="text-lg text-[#d4a574] font-medium whitespace-pre-wrap">Subscribe to my monthly digest of design, code, and creative architecture.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <button className="px-12 py-6 rounded-3xl bg-[#ffeccc] text-[#2d0808] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#5e1010] hover:text-[#ffeccc] transition-all">
                                Subscribe / RSS
                            </button>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a67c52]">No Spam, Only Logic.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
