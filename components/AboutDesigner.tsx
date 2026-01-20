'use client';

import { motion } from 'framer-motion';
import { designerInfo, personalInfo, designSkills } from '@/lib/data';

export default function AboutDesigner() {
    return (
        <section id="about" className="py-32 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-[var(--accent-secondary)] uppercase tracking-widest text-sm mb-4 block">
                        The Story
                    </span>
                    <h2
                        className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        About
                    </h2>
                    <p className="text-xl text-[var(--accent-secondary)] font-medium">
                        {personalInfo.tagline}
                    </p>
                </motion.div>

                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <p className="text-2xl md:text-3xl leading-relaxed text-[var(--text-secondary)] mb-12 italic border-l-4 border-[var(--bg-tertiary)] pl-8">
                        "{personalInfo.quote}"
                    </p>
                    <div className="text-xl leading-relaxed text-[var(--text-secondary)] space-y-6">
                        <p>{designerInfo.bio}</p>
                    </div>
                </motion.div>

                {/* Personal Info Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-32 border-y border-[var(--border-primary)] py-12"
                >
                    {[
                        { label: 'Email', value: personalInfo.email },
                        { label: 'Phone', value: personalInfo.phone },
                        { label: 'City', value: 'Komarole, Prakasam Dt., AP' },
                        { label: 'Degree', value: personalInfo.degree },
                    ].map((info, i) => (
                        <div key={i}>
                            <span className="text-xs uppercase tracking-widest text-[var(--text-tertiary)] mb-1 block">
                                {info.label}
                            </span>
                            <p className="text-lg text-[var(--text-primary)] font-medium">
                                {info.value}
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                            Philosophy
                        </h3>
                        <ul className="space-y-6">
                            {designerInfo.philosophy.map((principle, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="text-[var(--accent-tertiary)] mt-1">/</span>
                                    <span className="text-lg text-[var(--text-secondary)] leading-snug">{principle}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Core Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
                            Craft
                        </h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {Object.values(designSkills).flat().slice(0, 8).map((skill: { name: string; description: string }, i) => (
                                <span key={i} className="text-[var(--text-secondary)] text-lg border-b border-[var(--border-primary)] pb-1">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
