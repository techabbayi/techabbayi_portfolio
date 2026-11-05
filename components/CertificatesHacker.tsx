'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Cpu, Terminal, ExternalLink, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { certificates, CertificateItem } from '@/lib/data';

export default function CertificatesHacker() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['All', 'AI & ML', 'Cybersecurity', 'National & Civic', 'Engineering & Testing'];

    const filteredCertificates = useMemo(() => {
        return certificates.filter((cert) => {
            const matchesSearch =
                cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (cert.description && cert.description.toLowerCase().includes(searchQuery.toLowerCase()));

            if (!matchesSearch) return false;

            if (selectedCategory === 'All') return true;
            if (selectedCategory === 'AI & ML') {
                return (
                    cert.category?.includes('AI') ||
                    cert.title.toLowerCase().includes('ai') ||
                    cert.title.toLowerCase().includes('claude') ||
                    cert.title.toLowerCase().includes('agent')
                );
            }
            if (selectedCategory === 'Cybersecurity') {
                return (
                    cert.category?.toLowerCase().includes('cyber') ||
                    cert.category?.toLowerCase().includes('security') ||
                    cert.category?.toLowerCase().includes('defense') ||
                    cert.title.toLowerCase().includes('cyber') ||
                    cert.title.toLowerCase().includes('hacking') ||
                    cert.title.toLowerCase().includes('security')
                );
            }
            if (selectedCategory === 'National & Civic') {
                return (
                    cert.category?.includes('National') ||
                    cert.category?.includes('Civic') ||
                    cert.category?.includes('Leadership') ||
                    cert.category?.includes('Aerospace') ||
                    cert.title.toLowerCase().includes('tiranga') ||
                    cert.title.toLowerCase().includes('pledge') ||
                    cert.title.toLowerCase().includes('artemis') ||
                    cert.title.toLowerCase().includes('police')
                );
            }
            if (selectedCategory === 'Engineering & Testing') {
                return (
                    cert.category?.includes('Testing') ||
                    cert.category?.includes('Enterprise') ||
                    cert.category?.includes('Web') ||
                    cert.category?.includes('UI/UX') ||
                    cert.title.toLowerCase().includes('tester') ||
                    cert.title.toLowerCase().includes('wordpress') ||
                    cert.title.toLowerCase().includes('deloitte') ||
                    cert.title.toLowerCase().includes('figma')
                );
            }
            return true;
        });
    }, [selectedCategory, searchQuery]);

    const getCertIcon = (category?: string, title?: string) => {
        const text = `${category || ''} ${title || ''}`.toLowerCase();
        if (text.includes('cyber') || text.includes('security') || text.includes('defense') || text.includes('hack')) {
            return <Shield size={18} className="text-[var(--accent-primary)]" />;
        }
        if (text.includes('ai') || text.includes('agent') || text.includes('claude') || text.includes('test')) {
            return <Cpu size={18} className="text-[var(--accent-primary)]" />;
        }
        return <Award size={18} className="text-[var(--accent-primary)]" />;
    };

    return (
        <section id="certificates" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
            {/* Ambient Background Matrix Glow */}
            <div className="absolute top-10 right-0 w-80 h-80 bg-[var(--accent-primary)]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-[var(--accent-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal size={20} className="text-[var(--accent-primary)] animate-pulse" />
                        <span className="terminal-line font-mono text-xs tracking-widest uppercase">
                            system.exec("fetch_verified_credentials --all")
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter">
                                CREDENTIALS<span className="text-[var(--accent-primary)]">&</span>CERTS<span className="text-[var(--accent-primary)]">.sig</span>
                            </h2>
                            <div className="h-1 w-20 bg-[var(--accent-primary)] mt-3"></div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] p-1.5 rounded-lg font-mono text-xs">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                                        selectedCategory === cat
                                            ? 'bg-[var(--accent-primary)] text-black font-bold shadow-[0_0_12px_rgba(var(--accent-primary-rgb),0.3)]'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Certificates Grid (2-columns on tablet/desktop) */}
                <div className="grid md:grid-cols-2 gap-6">
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            id={`credential-${cert.id}`}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                            className="group relative scroll-mt-24"
                        >
                            <div className="h-full flex flex-col p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl group-hover:border-[var(--border-accent)] transition-all duration-300">
                                {/* Top Row */}
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-primary)] transition-colors">
                                            {getCertIcon(cert.category, cert.title)}
                                        </div>
                                        <div>
                                            <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                                {cert.category || 'Verified'}
                                            </span>
                                            <p className="text-[10px] font-mono text-[var(--text-tertiary)] mt-1">
                                                {cert.date}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="text-[9px] font-mono text-[var(--text-tertiary)] border border-[var(--border-primary)] px-2 py-0.5 rounded bg-[var(--bg-tertiary)]">
                                        REF: {cert.credentialId}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="space-y-2 mb-4 flex-grow">
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs font-mono text-[var(--accent-primary)] opacity-80">
                                        {cert.issuer}
                                    </p>
                                    {cert.description && (
                                        <p className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed pt-1">
                                            {cert.description}
                                        </p>
                                    )}
                                </div>

                                {/* Bottom Row */}
                                <div className="pt-3 border-t border-[var(--border-primary)]/60 flex items-center justify-between text-[10px] font-mono text-[var(--text-tertiary)]">
                                    <span className="flex items-center gap-1.5 text-[var(--accent-primary)]">
                                        <CheckCircle2 size={12} />
                                        <span>AUTHENTICATED</span>
                                    </span>
                                    {cert.link && cert.link !== '#' ? (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1"
                                        >
                                            <span>verify_credential</span>
                                            <ExternalLink size={10} />
                                        </a>
                                    ) : (
                                        <span>ID: {cert.credentialId}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Count Strip */}
                <div className="mt-14 pt-6 border-t border-[var(--border-primary)] border-dashed flex items-center justify-between text-[10px] font-mono text-[var(--text-tertiary)]">
                    <span>RECORD_COUNT: {certificates.length} VERIFIED CREDENTIALS ACTIVE</span>
                    <span className="uppercase tracking-widest text-[var(--accent-primary)]">ENCRYPTION: RSA_SHA256_VALID</span>
                </div>
            </div>
        </section>
    );
}
