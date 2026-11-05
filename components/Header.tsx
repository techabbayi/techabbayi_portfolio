'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Terminal, Menu, X } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const isDesignerMode = pathname === '/designer';
    const isProjectsPage = pathname === '/projects';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nameSlug = personalInfo.name.toLowerCase().split(' ').slice(0, 2).join('.');

    const hackerLinks = [
        { name: 'about', label: 'about' },
        { name: 'skills', label: 'skills' },
        { name: 'projects', label: 'projects' },
        { name: 'experience', label: 'experience' },
        { name: 'certificates', label: 'certificates' },
        { name: 'contact', label: 'contact' },
    ];

    const designerLinks = [
        { name: 'about', label: 'about' },
        { name: 'work', label: 'work' },
        { name: 'experience', label: 'experience' },
        { name: 'certificates', label: 'certificates' },
        { name: 'contact', label: 'contact' },
    ];

    const links = isDesignerMode ? designerLinks : hackerLinks;

    const getLinkHref = (name: string) => {
        if (isProjectsPage) {
            return isDesignerMode ? `/designer#${name}` : `/#${name}`;
        }
        return `#${name}`;
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled
                    ? 'py-3 bg-[var(--bg-primary)]/85 backdrop-blur-lg border-b border-[var(--border-primary)] shadow-sm'
                    : 'py-5 bg-transparent'
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
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--accent-primary)] text-black font-bold">
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
                <div className="hidden lg:flex items-center gap-6">
                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={getLinkHref(item.name)}
                            className={`
                                text-xs font-semibold transition-all duration-200 uppercase tracking-widest
                                ${isDesignerMode
                                    ? 'text-[#a67c52] hover:text-[#5e1010] hover:scale-105'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-mono'
                                }
                            `}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    className={`lg:hidden min-w-[48px] min-h-[48px] p-2 flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] ${isDesignerMode ? 'text-[#5e1010]' : 'text-[var(--text-primary)]'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                className={`fixed inset-0 z-40 pt-24 px-6 lg:hidden overflow-y-auto ${isDesignerMode ? 'bg-[#ffeccc]' : 'bg-[#050505]'}`}
            >
                <div className="flex flex-col gap-4 items-center justify-center min-h-[70vh]">
                    {links.map((item) => (
                        <a
                            key={item.name}
                            href={getLinkHref(item.name)}
                            onClick={() => setIsMenuOpen(false)}
                            className={`min-h-[48px] px-6 py-2.5 flex items-center justify-center text-xl font-bold uppercase tracking-wider rounded-lg transition-colors ${isDesignerMode ? 'text-[#5e1010] hover:bg-[#5e1010]/10' : 'text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 font-mono'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.header>
    );
}
