'use client';

import { motion } from 'framer-motion';
import { designProjects } from '@/lib/data';

export default function ProjectsDesigner() {
    return (
        <section id="work" className="py-32 px-6">
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
                        Selected Work
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
                        A curated collection of projects that represent my approach to design—thoughtful, intentional, and human-centered.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="space-y-32">
                    {designProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="border-t border-[var(--border-primary)] pt-12"
                        >
                            {/* Project Header */}
                            <div className="mb-8">
                                <div className="flex items-baseline justify-between mb-4">
                                    <span className="text-sm text-[var(--text-tertiary)] uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-[var(--text-tertiary)]">
                                        {project.year}
                                    </span>
                                </div>
                                <h3
                                    className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6"
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                >
                                    {project.title}
                                </h3>
                            </div>

                            {/* Project Content */}
                            <div className="grid md:grid-cols-3 gap-12">
                                {/* Intent */}
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                                        Intent
                                    </h4>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {project.intent}
                                    </p>
                                </div>

                                {/* Process */}
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                                        Process
                                    </h4>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {project.process}
                                    </p>
                                </div>

                                {/* Outcome */}
                                <div>
                                    <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                                        Outcome
                                    </h4>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {project.outcome}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
