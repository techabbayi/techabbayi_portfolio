'use client';

import { motion } from 'framer-motion';
import { designerInfo, personalInfo } from '@/lib/data';
import { ArrowUpRight, Shield, Zap, Target, Sparkles, Command } from 'lucide-react';

export default function AboutDesigner() {
    return (
        <section id="about" className="relative py-32 px-6 overflow-hidden bg-[#ffeccc] theme-designer">
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Artistic Bio Section */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <span className="h-px w-12 bg-[#5e1010]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010]">Architect Manifesto</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-[#2d0808] leading-[0.85] tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                                The Vision <br /> <span className="text-[#a67c52] italic font-serif">& The Voice</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <p className="text-2xl md:text-4xl font-bold text-[#8b2020] leading-tight tracking-tight border-l-4 border-[#5e1010] pl-8 py-4">
                                {personalInfo.tagline}
                            </p>
                            <div className="mt-12 space-y-6 text-lg text-[#2d0808]/80 font-medium leading-relaxed max-w-xl">
                                <p>{designerInfo.bio}</p>
                                <p className="text-sm font-black uppercase tracking-widest text-[#5e1010] flex items-center gap-4">
                                    <Command size={16} /> Based in Andhra Pradesh, India
                                </p>
                            </div>
                        </motion.div>

                        {/* Interactive Highlights (Replacing Cards) */}
                        <div className="flex flex-wrap gap-12 pt-8 border-t border-[#f5d9b3]">
                            {[
                                { icon: Shield, label: "Cyber Activism" },
                                { icon: Target, label: "Precision Systems" },
                                { icon: Sparkles, label: "Creative Logic" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-10 h-10 rounded-full bg-white border border-[#f5d9b3] flex items-center justify-center text-[#a67c52] group-hover:bg-[#5e1010] group-hover:text-[#ffeccc] transition-all">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#2d0808]">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Modern Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Designer Philosophy Block - Ultra Modern Integration */}
                        <div className="relative z-10 bg-white border border-[#f5d9b3] rounded-[4rem] p-12 md:p-20 shadow-[0_50px_100px_-20px_rgba(94,16,16,0.06)] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#fff5e6] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                            <div className="space-y-12 relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d4a574]">Our Philosophy</span>
                                <div className="space-y-8">
                                    {designerInfo.philosophy.map((text, i) => (
                                        <div key={i} className="group cursor-default">
                                            <div className="flex items-start gap-6">
                                                <span className="text-lg font-serif italic text-[#d4a574] group-hover:text-[#5e1010] transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                                                <p className="text-xl md:text-2xl font-black text-[#2d0808] leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                                    {text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <motion.a
                                    href="https://www.linkedin.com/in/lokeswaramuthumula/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 10 }}
                                    className="pt-12 border-t border-[#f5d9b3] flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#5e1010]"
                                >
                                    Explore the full index <ArrowUpRight size={14} />
                                </motion.a>
                            </div>
                        </div>

                        {/* Abstract Design Sigil (Replacing text card for better aesthetics) */}
                        <div className="absolute -top-12 -left-12 w-48 h-48 pointer-events-none hidden lg:block z-0">
                            {/* Inner Rotating Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[#5e1010]/20 rounded-full"
                            />
                            {/* Outer Static Frame */}
                            <div className="absolute inset-6 border border-[#a67c52]/20 rounded-[2.5rem] rotate-12" />

                            {/* Center Sigil Core */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        rotate: [12, 15, 12]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 bg-[#2d0808] rounded-[2rem] flex items-center justify-center shadow-2xl"
                                >
                                    <Command size={28} className="text-[#ffeccc]" />
                                </motion.div>
                            </div>

                            {/* Decorative Sparkles */}
                            <motion.div
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-4 right-4"
                            >
                                <Sparkles size={16} className="text-[#a67c52]" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
