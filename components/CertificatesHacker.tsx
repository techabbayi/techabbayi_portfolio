'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificates } from '@/lib/data';

export default function CertificatesHacker() {
    return (
        <section id="certificates" className="py-20 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                >
                    <p className="terminal-line mb-2">&gt; certifications --all</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                        Certifications
                    </h2>
                </motion.div>

                {/* Certificates List */}
                <div className="space-y-4">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ x: 4 }}
                            className="group"
                        >
                            <div className="flex items-start gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg accent-border-hover">
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-md bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--border-accent)] transition-colors">
                                    <Award className="text-[var(--accent-primary)]" size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                            {cert.title}
                                        </h3>
                                        <span className="text-xs font-mono text-[var(--text-tertiary)] whitespace-nowrap">
                                            {cert.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-xs font-mono text-[var(--text-tertiary)]">
                                        ID: {cert.credentialId}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
