'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

export default function ContactDesigner() {
    const iconMap: Record<string, any> = {
        Github: () => <span>GitHub</span>,
        Linkedin: () => <span>LinkedIn</span>,
        Twitter: () => <span>Twitter</span>,
        Instagram: () => <span>Instagram</span>,
        Mail: () => <span>Email</span>,
    };

    return (
        <section id="contact" className="py-32 px-6 bg-[var(--bg-secondary)]">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2
                        className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-8"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        Let's Work Together
                    </h2>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing new projects, creative collaborations, or opportunities to create something meaningful.
                    </p>
                </motion.div>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        <Mail size={32} />
                        {personalInfo.email}
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {socialLinks.map((social) => {
                        const IconComponent = iconMap[social.icon];
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm uppercase tracking-wider"
                            >
                                <IconComponent />
                            </a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
