'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, Instagram, ChevronRight, Hash } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import ProfileImg from '@/app/assets/profile/lokeswara_bg.png';

export default function HeroHackerV3() {
    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Twitter,
        Instagram,
        Mail,
    };

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 bg-[#050505] relative overflow-hidden">
            {/* Structural Grid - Static and clean */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            {/* Vertical Data Stream (Subtle) */}
            <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent-primary)]/20 to-transparent hidden lg:block" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Main Content Area (Column 1-7) */}
                    <div className="lg:col-span-8 flex flex-col space-y-12">

                        {/* System Status Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-[var(--accent-primary)]/70 uppercase"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                            STATUS: SECURE_CORE // V3.0
                        </motion.div>

                        {/* Large Name - Raw & Powerful */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h1 className="text-7xl md:text-9xl font-black text-[var(--text-primary)] leading-[0.85] tracking-tighter uppercase">
                                {personalInfo.name.split(' ')[0]}<br />
                                <span className="text-outline-thin text-transparent">{personalInfo.name.split(' ')[1]}</span>
                            </h1>
                        </motion.div>

                        {/* Expertise Grid - Technical visualization */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl"
                        >
                            {[
                                { label: 'ROLE', value: 'PROGRAMMER' },
                                { label: 'FOCUS', value: 'CYBER SECURITY' },
                                { label: 'AUTH', value: 'SYSTEMS_ARCH' }
                            ].map((item, i) => (
                                <div key={i} className="border-l border-[var(--border-primary)] pl-4 py-2">
                                    <p className="text-[10px] font-mono text-[var(--text-tertiary)] mb-1">{item.label}</p>
                                    <p className="text-sm font-mono font-bold text-[var(--text-secondary)]">{item.value}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Action Group */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap items-center gap-8"
                        >
                            <a
                                href="#projects"
                                className="group flex items-center gap-4 text-sm font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full border border-[var(--border-primary)] group-hover:border-[var(--accent-primary)] flex items-center justify-center transition-all group-hover:scale-110">
                                    <ChevronRight size={20} />
                                </div>
                                DECRYPT WORK
                            </a>

                            <div className="h-px w-24 bg-[var(--border-primary)] hidden md:block" />

                            <div className="flex gap-6">
                                {socialLinks.map((social) => {
                                    const Icon = iconMap[social.icon];
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-all transform hover:-translate-y-1"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Identification Area (Column 8-12) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4 relative group"
                    >
                        {/* Identification Meta */}
                        <div className="absolute -top-6 left-0 text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-2">
                            <Hash size={10} className="text-[var(--accent-primary)]" />
                            USER_ID: LOKESWARA_01
                        </div>

                        {/* Profile Image - Technical Frame */}
                        <div className="relative aspect-[4/5] bg-[var(--bg-secondary)] border border-[var(--border-primary)] overflow-hidden">
                            <Image
                                src={ProfileImg}
                                alt={personalInfo.name}
                                fill
                                className="object-cover grayscale brightness-90 contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                                priority
                            />

                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--accent-primary)]/40" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--accent-primary)]/40" />

                            {/* Vertical Progress Bar Decoration */}
                            <div className="absolute left-4 top-1/4 bottom-1/4 w-0.5 bg-[var(--accent-primary)]/10">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70%' }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                    className="w-full bg-[var(--accent-primary)]/40"
                                />
                            </div>
                        </div>

                        {/* Location Data */}
                        <div className="mt-6 font-mono text-[10px] text-[var(--text-tertiary)] text-right space-y-1">
                            <p>COORD: 15.4262' N / 79.0303' E</p>
                            <p className="text-[var(--accent-primary)]/50">ENCRYPTION: AES-256-GCM</p>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Decorative Snippet */}
            <div className="absolute left-10 bottom-10 hidden xl:block">
                <pre className="text-[9px] font-mono text-[var(--text-muted)] leading-tight opacity-40">
                    {`01001100 01001111 01001011 01000101\n01010011 01010111 01000001 01010010\n01000001 01001101 01010101 01010100`}
                </pre>
            </div>
        </section>
    );
}
