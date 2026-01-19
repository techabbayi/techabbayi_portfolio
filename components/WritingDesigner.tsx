'use client';

import { motion } from 'framer-motion';
import { writings } from '@/lib/data';

export default function WritingDesigner() {
    return (
        <section id="writing" className="py-32 px-6 bg-[var(--bg-secondary)]">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h2
                        className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Writing & Thoughts
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
                        Reflections on design, creativity, and the craft of making things that matter.
                    </p>
                </motion.div>

                {/* Writing List */}
                <div className="space-y-12">
                    {writings.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border-b border-[var(--border-primary)] pb-12 last:border-0"
                        >
                            <a href="#" className="group block">
                                <div className="flex items-baseline justify-between mb-4">
                                    <span className="text-sm text-[var(--text-tertiary)]">
                                        {article.date}
                                    </span>
                                    <span className="text-sm text-[var(--text-tertiary)]">
                                        {article.readTime}
                                    </span>
                                </div>

                                <h3
                                    className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--text-secondary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                >
                                    {article.title}
                                </h3>

                                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
