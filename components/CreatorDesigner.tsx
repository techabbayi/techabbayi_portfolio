'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiments = [
    {
        title: "Digital Sovereignty",
        description: "An exploration of self-hosting and taking back control of our digital identities in an era of platform monopolies.",
        type: "Personal Experiment"
    },
    {
        title: "Minimalist Code Poetry",
        description: "Writing scripts where the logic itself forms a rhythmic, expressive structure beyond pure utility.",
        type: "Creative Project"
    },
    {
        title: "Community Privacy Labs",
        description: "A series of local workshops and digital resources aimed at helping non-technical users protect their basic data rights.",
        type: "Social Experiment"
    }
];

export default function CreatorDesigner() {
    return (
        <section id="creator" className="py-32 px-6">
            <div className="container mx-auto max-w-5xl">
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
                        Creative Space
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl">
                        Beyond the commercial projects, I dedicate my time to experiments and explorations that challenge the way we think about technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {experiments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="p-10 bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex flex-col justify-between group cursor-default"
                        >
                            <div>
                                <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)] block mb-6">
                                    {item.type}
                                </span>
                                <h3
                                    className="text-3xl font-medium text-[var(--text-primary)] mb-6 leading-tight"
                                    style={{ fontFamily: 'var(--font-serif)' }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed italic">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-2 text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors text-sm font-medium">
                                READ THOUGHTS
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
