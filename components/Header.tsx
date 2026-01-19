'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Terminal, Palette } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const isDesignerMode = pathname === '/designer';

    const toggleTheme = () => {
        if (isDesignerMode) {
            router.push('/');
        } else {
            router.push('/designer');
        }
    };

    const nameSlug = personalInfo.name.toLowerCase().split(' ').slice(0, 2).join('.');

    const hackerLinks = ['about', 'skills', 'projects', 'certificates', 'contact'];
    const designerLinks = ['about', 'work', 'writing', 'creator', 'contact'];
    const links = isDesignerMode ? designerLinks : hackerLinks;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-primary)]"
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="font-mono text-sm md:text-base font-medium"
                >
                    {isDesignerMode ? (
                        <span className="text-[var(--text-primary)]">{nameSlug}</span>
                    ) : (
                        <span className="text-[var(--accent-primary)]">~/{nameSlug}</span>
                    )}
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 font-mono text-sm">
                    {links.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                    className={`
            flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs
            transition-all duration-200
            ${isDesignerMode
                            ? 'bg-black text-white hover:bg-gray-800'
                            : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--border-accent)] hover:text-[var(--accent-primary)]'
                        }
          `}
                >
                    {isDesignerMode ? (
                        <>
                            <Terminal size={14} />
                            <span>mode: hacker</span>
                        </>
                    ) : (
                        <>
                            <Palette size={14} />
                            <span>mode: designer</span>
                        </>
                    )}
                </motion.button>
            </nav>
        </motion.header>
    );
}
