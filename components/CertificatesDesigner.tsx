'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificates } from '@/lib/data';

export default function CertificatesDesigner() {
    return (
        <section id="certificates" className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[var(--accent-secondary)] font-medium mb-2 tracking-wide uppercase text-sm">
                        Achievements
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                        Certifications & Awards
                    </h2>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--border-primary)] hover:border-[var(--accent-secondary)] hover:shadow-lg transition-all cursor-default"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mb-4">
                                <Award className="text-[var(--accent-secondary)]" size={24} />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                                {cert.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-3">
                                {cert.issuer}
                            </p>
                            <p className="text-[var(--text-tertiary)] text-xs">
                                {cert.date}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
