'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import ProfileImg from '@/app/assets/profile/lokeswara_bg.png';

export default function HeroHackerV2() {
    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Twitter,
        Instagram,
        Mail,
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[var(--bg-primary)]">
            {/* Matrix-like background effect (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none font-mono text-[10px] text-[var(--accent-primary)] leading-tight overflow-hidden whitespace-nowrap">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="animate-matrix-rain" style={{ animationDelay: `${i * 0.5}s` }}>
                        {Array.from({ length: 50 }).map((_, j) => (
                            <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content: Text */}
                <div className="flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-sm bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] font-mono text-xs mb-6">
                            SYSTEM_AUTH: SUCCESSFUL
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold text-[var(--text-primary)] leading-tight tracking-tighter">
                            {personalInfo.name}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col space-y-4"
                    >
                        <p className="text-2xl md:text-3xl font-mono text-[var(--text-secondary)]">
                            &gt; <span className="text-[var(--accent-primary)]">Programmer</span> || Cyber Activist || Writer
                        </p>
                        <p className="text-lg text-[var(--text-tertiary)] max-w-xl leading-relaxed italic border-l-2 border-[var(--border-primary)] pl-6">
                            "{personalInfo.tagline}"
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-5"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-[var(--accent-primary)] text-black font-bold uppercase tracking-widest text-xs flex items-center gap-3"
                        >
                            Initialize Work <ArrowRight size={16} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border border-[var(--border-primary)] text-[var(--text-primary)] font-bold uppercase tracking-widest text-xs hover:bg-[var(--text-primary)] hover:text-black transition-all"
                        >
                            Contact Agent
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex gap-6 mt-4"
                    >
                        {socialLinks.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
                                    aria-label={social.name}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Right Content: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 w-full aspect-square max-w-[500px] ml-auto overflow-hidden grayscale contrast-125 border border-[var(--border-primary)] shadow-2xl group">
                        <Image
                            src={ProfileImg}
                            alt={personalInfo.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {/* Scanline overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-scanlines opacity-20" />
                        <div className="absolute inset-0 border-[20px] border-black/10 mix-blend-overlay" />
                    </div>

                    {/* Decorative frame elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[var(--accent-primary)]/40 pointer-events-none" />
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[var(--accent-primary)]/40 pointer-events-none" />

                    {/* Coordinate system decoration */}
                    <div className="absolute -bottom-10 right-0 font-mono text-[10px] text-[var(--accent-primary)]/30 select-none">
                        LAT: 15.4262° N | LON: 79.0303° E
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
