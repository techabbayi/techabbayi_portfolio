'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Instagram } from 'lucide-react';
import { designerInfo } from '@/lib/data';

export default function HeroDesigner() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Main Headline */}
                    <h1
                        className="text-6xl md:text-8xl font-bold mb-12 leading-tight text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        {designerInfo.role}
                    </h1>

                    {/* Manifesto */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)] max-w-3xl mx-auto mb-16"
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        {designerInfo.manifesto}
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-sm text-[var(--text-tertiary)] uppercase tracking-wider">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown size={20} className="text-[var(--text-tertiary)]" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
