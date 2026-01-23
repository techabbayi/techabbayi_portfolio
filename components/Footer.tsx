'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram, Shield, Terminal, Globe, ArrowUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { socialLinks, personalInfo } from '@/lib/data';

export default function Footer() {
    const pathname = usePathname();
    const isDesignerMode = pathname === '/designer';

    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Twitter,
        Instagram,
        Mail,
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isDesignerMode) {
        return (
            <footer className="py-24 px-6 bg-[#fff5e6] border-t border-[#f5d9b3] mt-0">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                        {/* Brand Column */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-[#2d0808] font-sans uppercase tracking-tight">techabbayi</span>
                            </div>
                            <p className="text-[#8b2020] leading-relaxed">
                                {personalInfo.tagline}
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = iconMap[social.icon] || Mail;
                                    return (
                                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#a67c52] hover:text-[#5e1010] transition-colors">
                                            <Icon size={20} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-sm font-bold text-[#2d0808] uppercase tracking-widest mb-6">Explore</h4>
                            <ul className="space-y-4">
                                {['about', 'work', 'contact'].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link}`} className="text-[#a67c52] hover:text-[#5e1010] transition-colors capitalize font-medium">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-sm font-bold text-[#2d0808] uppercase tracking-widest mb-6">Contact</h4>
                            <ul className="space-y-4">
                                <li className="flex flex-col">
                                    <span className="text-xs text-[#d4a574] uppercase tracking-widest mb-1">Email Me</span>
                                    <span className="text-[#2d0808] font-bold">{personalInfo.email}</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="text-xs text-[#d4a574] uppercase tracking-widest mb-1">Location</span>
                                    <span className="text-[#2d0808] font-bold font-serif italic">Andhra Pradesh, India</span>
                                </li>
                            </ul>
                        </div>

                        {/* Status/Back to Top */}
                        <div>
                            <h4 className="text-sm font-bold text-[#2d0808] uppercase tracking-widest mb-6">Status</h4>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffeedd] border border-[#f5d9b3]">
                                <span className="w-2 h-2 rounded-full bg-[#5e1010] animate-pulse" />
                                <span className="text-xs font-bold text-[#5e1010] uppercase tracking-widest">Available for hire</span>
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="mt-8 flex items-center gap-2 text-[#a67c52] hover:text-[#5e1010] transition-colors group"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
                                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-[#f5d9b3] flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[#a67c52]">© {new Date().getFullYear()} {personalInfo.name}. Built with Precision & Soul.</p>
                        <div className="flex gap-8">
                            <a href="#" className="text-xs text-[#a67c52] hover:text-[#2d0808] transition-colors uppercase font-bold tracking-widest">Privacy</a>
                            <a href="#" className="text-xs text-[#a67c52] hover:text-[#2d0808] transition-colors uppercase font-bold tracking-widest">Legal</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="py-16 px-6 relative overflow-hidden bg-[#050505] border-t border-[var(--border-primary)]">
            {/* Background scanline effect */}
            <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

                    {/* Brand / Root Directory */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[var(--accent-primary)] mb-2">
                            <Terminal size={18} />
                            <span className="font-mono text-sm font-bold tracking-tight uppercase">Root_Level</span>
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">
                            {personalInfo.name.toLowerCase().replace(/\s+/g, '.')}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xs italic">
                            {personalInfo.tagline}
                        </p>
                    </div>

                    {/* Directory Structure (Nav) */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[var(--accent-primary)]/70 mb-2">
                            <Globe size={16} />
                            <span className="font-mono text-[10px] uppercase tracking-widest">Navigation_Links</span>
                        </div>
                        <ul className="space-y-2 font-mono text-xs">
                            {['about', 'skills', 'projects', 'certificates', 'contact'].map((link) => (
                                <li key={link} className="flex items-center gap-2 group">
                                    <span className="text-[var(--accent-primary)] opacity-40 group-hover:opacity-100 transition-opacity">└─</span>
                                    <a
                                        href={`#${link}`}
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all uppercase tracking-tighter"
                                    >
                                        {link}.sys
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connection Endpoints */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[var(--accent-primary)]/70 mb-2">
                            <Shield size={16} />
                            <span className="font-mono text-[10px] uppercase tracking-widest">Connect_Endpoints</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon];
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, backgroundColor: 'var(--accent-primary)', color: '#000' }}
                                        className="aspect-square rounded-sm border border-[var(--border-primary)] flex items-center justify-center text-[var(--accent-primary)] transition-all bg-[var(--bg-tertiary)]/20 shadow-lg shadow-black/50"
                                        aria-label={social.name}
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Strip */}
                <div className="pt-10 mt-10 border-t border-[var(--border-primary)]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-6">
                            <p className="uppercase tracking-[0.2em]">
                                © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}
                            </p>
                            <span className="hidden md:block opacity-30">|</span>
                            <p className="uppercase tracking-widest">
                                Build_Hash: <span className="text-[var(--accent-primary)]">8F2D1A9C</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-4 px-4 py-1.5 bg-[var(--bg-tertiary)]/30 border border-[var(--border-primary)] rounded-full">
                            <span className="text-[9px] font-mono text-[var(--accent-primary)] uppercase tracking-wider font-bold">
                                Local_Session: ACTIVE
                            </span>
                            <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
