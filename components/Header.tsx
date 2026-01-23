'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Terminal, Palette, Menu, X } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const isDesignerMode = pathname === '/designer';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDesignerMode) {
            router.push('/');
        } else {
            router.push('/designer');
        }
    };

    const nameSlug = personalInfo.name.toLowerCase().split(' ').slice(0, 2).join('.');

    const hackerLinks = ['about', 'skills', 'projects', 'certificates', 'contact'];
    const designerLinks = ['about', 'work', 'contact'];
    const links = isDesignerMode ? designerLinks : hackerLinks;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled
                    ? 'py-3 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-primary)] shadow-sm'
                    : 'py-6 bg-transparent'
                }
            `}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => router.push(isDesignerMode ? '/designer' : '/')}
                    className="cursor-pointer group flex items-center gap-2"
                >
                    {!isDesignerMode && (
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--accent-primary)] text-black">
                            <Terminal size={20} />
                        </div>
                    )}
                    <span className={`
                        font-bold text-lg tracking-tight
                        ${isDesignerMode ? 'text-[#5e1010] font-sans uppercase tracking-[0.2em]' : 'text-[var(--text-primary)] font-mono'}
                    `}>
                        {isDesignerMode ? 'techabbayi' : `~/${nameSlug}`}
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {links.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={`
                                    text-sm font-semibold transition-all duration-200 uppercase tracking-widest
                                    ${isDesignerMode
                                        ? 'text-[#a67c52] hover:text-[#5e1010] hover:scale-110'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono'
                                    }
                                `}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className={`h-6 w-px ${isScrolled ? 'bg-[#f5d9b3]' : 'bg-gray-200/20'} mx-2`} />

                    {/* Mode Toggle Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleTheme}
                        className={`
                            group flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300
                            ${isDesignerMode
                                ? 'bg-[#fff5e6] text-[#5e1010] hover:bg-[#5e1010] hover:text-[#ffeccc] border border-[#f5d9b3]'
                                : 'bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)] hover:text-black font-mono shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.2)]'
                            }
                        `}
                    >
                        {isDesignerMode ? (
                            <>
                                <Terminal size={14} className="group-hover:rotate-12 transition-transform" />
                                <span>Switch to Hacker</span>
                            </>
                        ) : (
                            <>
                                <Palette size={14} className="group-hover:rotate-12 transition-transform" />
                                <span>Switch to Designer</span>
                            </>
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${isDesignerMode ? 'text-[#5e1010]' : 'text-[var(--text-primary)]'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                className={`fixed inset-0 z-40 pt-24 px-6 md:hidden ${isDesignerMode ? 'bg-[#ffeccc]' : 'bg-[var(--bg-primary)]'}`}
            >
                <div className="flex flex-col gap-6 items-center italic">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-bold ${isDesignerMode ? 'text-[#5e1010]' : 'text-[var(--accent-primary)] font-mono'}`}
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                        className={`mt-8 px-8 py-4 rounded-full font-bold shadow-2xl transition-all ${isDesignerMode ? 'bg-[#5e1010] text-[#ffeccc]' : 'bg-blue-600 text-white'}`}
                    >
                        Switch Mode
                    </button>
                </div>
            </motion.div>
        </motion.header>
    );
}
