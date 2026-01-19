'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Fingerprint, Activity, Terminal, Lock, Globe, Mail, Phone, GraduationCap, Quote } from 'lucide-react';

export default function AboutHacker() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 border-b border-[var(--border-primary)] pb-8"
                >
                    <div className="flex items-center gap-3 text-[var(--accent-primary)] font-mono text-xs mb-4">
                        <Terminal size={14} />
                        <span>FILE: /mnt/usr/lokeswara/biography.sys</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] uppercase tracking-tighter">
                        System Manifest
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Bio & RELOCATED Quote (Col 1-7) */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Decorative Quote Mark */}
                            <div className="absolute -top-10 -left-6 text-9xl text-[var(--accent-primary)]/10 font-serif pointer-events-none">"</div>

                            <div className="space-y-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed relative z-10 transition-colors duration-300">
                                <p>
                                    Hey there! I’m <span className="text-[var(--text-primary)] font-bold italic tracking-tight underline decoration-[var(--accent-primary)]/30 underline-offset-8 decoration-2">Lokeswara Muthumula</span>. I’m a Web Developer, Figma Designer, and Programmer with a passion for creativity and problem-solving. With expertise in Python, C++, and JavaScript,
                                </p>
                                <p>
                                    I bring ideas to life through code, designing user-friendly web applications and visually appealing interfaces. My skills in Figma designing help me craft intuitive designs that enhance user experiences.
                                </p>
                                <p>
                                    I also have a strong interest in <span className="text-[var(--accent-primary)]">Cybersecurity</span> where I explore ways to build secure systems and protect data in the ever-changing digital landscape. Beyond technology, I’m a storyteller at heart, weaving words into captivating tales that spark imagination.
                                </p>

                                <p className="font-mono text-[var(--accent-primary)] text-sm pt-4">
                                    &gt; Let’s connect and create something amazing together!
                                </p>
                            </div>
                        </motion.div>

                        {/* Relocated Mission/Quote Block (Replacing Directives) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="py-4 px-6 border-l-4 border-[var(--accent-primary)] bg-[var(--accent-primary)]/5 relative group max-w-2xl"
                        >
                            <Quote className="absolute top-3 right-3 text-[var(--accent-primary)]/20" size={24} />
                            <p className="text-base md:text-lg font-mono text-[var(--text-primary)] italic leading-relaxed">
                                "{personalInfo.quote}"
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                <div className="h-0.5 w-6 bg-[var(--accent-primary)]" />
                                <span className="text-[9px] font-mono text-[var(--accent-primary)] uppercase tracking-[0.3em]">Core_Philosophy.init()</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Technical Stats & Meta (Col 8-12) */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-8 rounded-sm relative overflow-hidden group"
                        >
                            {/* Scanline Overlay */}
                            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none transition-opacity group-hover:opacity-20" />

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-3">
                                    <Fingerprint size={24} className="text-[var(--accent-primary)]" />
                                    <h3 className="font-mono text-sm font-bold tracking-[0.2em] uppercase">Identity_Profile</h3>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { icon: Globe, label: 'Geo_Origin', value: personalInfo.location },
                                        { icon: Mail, label: 'Secure_COM', value: personalInfo.email },
                                        { icon: Phone, label: 'Direct_Line', value: personalInfo.phone },
                                        {
                                            icon: GraduationCap,
                                            label: 'Education',
                                            value: (
                                                <span>
                                                    B.Tech (<a
                                                        href="https://apollouniversity.edu.in/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[var(--accent-primary)] hover:text-white transition-colors underline decoration-dotted underline-offset-4"
                                                    >
                                                        The Apollo University
                                                    </a>)
                                                </span>
                                            )
                                        },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col gap-1 border-b border-[var(--border-primary)] pb-4 last:border-0 last:pb-0">
                                            <div className="flex items-center gap-2 text-[9px] font-mono text-[var(--accent-primary)]/60 uppercase">
                                                <stat.icon size={10} />
                                                {stat.label}
                                            </div>
                                            <div className="text-xs font-mono text-[var(--text-primary)] tracking-wide">
                                                {stat.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Animated Uptime Bar */}
                                <div className="pt-4 space-y-2">
                                    <div className="flex justify-between text-[8px] font-mono text-[var(--text-tertiary)] uppercase tracking-tighter">
                                        <span>System_Uptime</span>
                                        <span className="text-[var(--accent-primary)]">99.98%</span>
                                    </div>
                                    <div className="h-1 bg-[var(--bg-tertiary)] w-full rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '99.98%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-[var(--accent-primary)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
