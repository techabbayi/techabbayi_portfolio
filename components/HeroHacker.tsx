'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Instagram, Hash } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';
import ProfileImg from '@/app/assets/profile/lokeswara_bg.png';

const roles = personalInfo.role.split(' • ');

export default function HeroHacker() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const typingSpeed = isDeleting ? 30 : 60;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Twitter,
        Instagram,
        Mail,
    };

    return (
        <section className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden bg-[var(--bg-primary)]">
            {/* Subtle grid background */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Terminal Content */}
                    <div className="max-w-4xl relative z-20">
                        {/* Terminal prompt */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="terminal-line mb-4"
                        >
                            &gt; whoami
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]"
                            style={{ fontFamily: 'var(--font-sans)' }}
                        >
                            {personalInfo.name}
                        </motion.h1>

                        {/* Typing role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="h-12 md:h-16 mb-2"
                        >
                            <p className="text-xl md:text-2xl font-mono text-[var(--text-secondary)]">
                                I'm <span className="text-[var(--accent-primary)] font-bold">{displayText}</span>
                                <span className="terminal-cursor"></span>
                            </p>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl leading-relaxed"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 mb-16"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-black font-mono text-sm font-medium rounded-md hover:bg-[var(--accent-secondary)] transition-colors"
                            >
                                Decrypt Work
                                <ArrowRight size={16} />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-mono text-sm font-medium rounded-md border border-[var(--border-primary)] hover:border-[var(--border-accent)] transition-colors"
                            >
                                Contact Agent
                            </motion.a>
                        </motion.div>

                        {/* Redesigned Social Dock */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-[var(--accent-primary)] opacity-30" />
                                <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[0.2em]">
                                    Establish_Connection
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => {
                                    const Icon = iconMap[social.icon];
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -4 }}
                                            className="group relative flex items-center justify-center w-12 h-12 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded-lg hover:border-[var(--accent-primary)] transition-all"
                                            aria-label={social.name}
                                        >
                                            {/* Glow Effect on Hover */}
                                            <div className="absolute inset-0 bg-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                                            <Icon size={20} className="text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors relative z-10" />

                                            {/* Technical Tooltip */}
                                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-20">
                                                <div className="bg-black border border-[var(--border-primary)] px-2 py-1 rounded shadow-xl">
                                                    <span className="text-[9px] font-mono text-[var(--accent-primary)] whitespace-nowrap uppercase">
                                                        {social.name}.init()
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Profile Image & Side Scrolling Metadata - Adjusted spacing */}
                    <div className="relative flex items-center justify-start lg:-ml-12 gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group z-10"
                        >
                            <div className="w-[320px] md:w-[400px]">
                                {/* Identification Meta */}
                                <div className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-2 mb-2">
                                    <Hash size={10} className="text-[var(--accent-primary)]" />
                                    USER_ID: techabbayi
                                </div>

                                {/* Profile Image */}
                                <div className="relative aspect-square w-full">
                                    <Image
                                        src={ProfileImg}
                                        alt={personalInfo.name}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                </div>

                                {/* Meta Data */}
                                <div className="mt-4 font-mono text-[10px] text-[var(--text-tertiary)] text-right space-y-1">
                                    <p>COORD: 15.4262' N / 79.0303' E</p>
                                    <p className="text-[var(--accent-primary)]/50 uppercase tracking-widest text-[8px]">Encryption: AES-256-GCM</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Scrolling Code Ticker - Positions on the RIGHT of the image */}
                        <div className="hidden xl:flex h-[400px] overflow-hidden opacity-20 border-l border-[var(--border-primary)] pl-6">
                            <motion.div
                                animate={{ y: ['0%', '-50%'] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="flex flex-col gap-6 font-mono text-[9px] text-[var(--accent-primary)]"
                            >
                                <div className="flex flex-col gap-6">
                                    <p>// INITIALIZING_CORE</p>
                                    <p>0x4F 0x2A 0x88 0xBC</p>
                                    <p>await sys.auth();</p>
                                    <p>git commit -m "fix"</p>
                                    <p>while(locked) {'{'}..{'}'}</p>
                                    <p>const key = 'RSA';</p>
                                    <p>python3 build.py</p>
                                    <p>MAP: Prakasam_DT</p>
                                    <p>STATUS: PROTECTED</p>
                                    <p>01001100 01010111</p>
                                    <p>// REPEATING_DATA</p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <p>// INITIALIZING_CORE</p>
                                    <p>0x4F 0x2A 0x88 0xBC</p>
                                    <p>await sys.auth();</p>
                                    <p>git commit -m "fix"</p>
                                    <p>while(locked) {'{'}..{'}'}</p>
                                    <p>const key = 'RSA';</p>
                                    <p>python3 build.py</p>
                                    <p>MAP: Prakasam_DT</p>
                                    <p>STATUS: PROTECTED</p>
                                    <p>01001100 01010111</p>
                                    <p>// REPEATING_DATA</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
