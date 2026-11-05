'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Globe, ExternalLink, BadgeCheck, Cpu, Shield, Sparkles } from 'lucide-react';
import { certificates, CertificateItem } from '@/lib/data';

export default function CertificatesDesigner() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = ['All', 'AI & Automation', 'Cybersecurity', 'National & Civic', 'Engineering & Design'];

    const filteredCertificates = useMemo(() => {
        return certificates.filter((cert) => {
            if (activeCategory === 'All') return true;
            if (activeCategory === 'AI & Automation') {
                return (
                    cert.category?.includes('AI') ||
                    cert.title.toLowerCase().includes('ai') ||
                    cert.title.toLowerCase().includes('claude') ||
                    cert.title.toLowerCase().includes('agent')
                );
            }
            if (activeCategory === 'Cybersecurity') {
                return (
                    cert.category?.toLowerCase().includes('cyber') ||
                    cert.category?.toLowerCase().includes('security') ||
                    cert.category?.toLowerCase().includes('defense') ||
                    cert.title.toLowerCase().includes('cyber') ||
                    cert.title.toLowerCase().includes('hacking') ||
                    cert.title.toLowerCase().includes('security')
                );
            }
            if (activeCategory === 'National & Civic') {
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
            if (activeCategory === 'Engineering & Design') {
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
    }, [activeCategory]);

    const getDesignerCertIcon = (category?: string, title?: string) => {
        const text = `${category || ''} ${title || ''}`.toLowerCase();
        if (text.includes('cyber') || text.includes('security') || text.includes('defense') || text.includes('hack')) {
            return <Shield size={24} className="text-[#5e1010]" />;
        }
        if (text.includes('ai') || text.includes('agent') || text.includes('claude') || text.includes('test')) {
            return <Cpu size={24} className="text-[#5e1010]" />;
        }
        return <Award size={24} className="text-[#5e1010]" />;
    };

    return (
        <section id="certificates" className="relative py-28 px-6 overflow-hidden bg-[#ffeccc] theme-designer">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] opacity-[0.03]"
                >
                    <div className="w-full h-full border-[1px] border-[#5e1010] rounded-full" />
                </motion.div>
                <div
                    className="absolute inset-0 bg-[grid-line] opacity-[0.015]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5e1010 2px, transparent 2px), linear-gradient(to bottom, #5e1010 2px, transparent 2px)',
                        backgroundSize: '120px 120px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Modern Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-8 bg-[#5e1010]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010]">Institutional Record</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#2d0808] leading-none tracking-tighter break-words" style={{ fontFamily: 'var(--font-serif)' }}>
                            Validated <span className="text-[#a67c52] italic font-serif">Credentials</span>
                        </h2>
                    </motion.div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 min-h-[44px] rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeCategory === cat
                                        ? 'bg-[#5e1010] text-[#ffeccc] shadow-md shadow-[#5e1010]/20'
                                        : 'bg-white/80 border border-[#f5d9b3] text-[#8b2020] hover:bg-white hover:text-[#5e1010]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Refined Certificates Layout: 3-column grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 6) * 0.05 }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-[#f5d9b3] rounded-2xl sm:rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl hover:shadow-[#5e1010]/5 hover:border-[#5e1010] transition-all duration-500 overflow-hidden flex flex-col">
                                <div className="p-5 sm:p-8 pb-4 flex-grow space-y-6">
                                    {/* Top: Icon & Credential ID */}
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <div className="w-12 h-12 rounded-2xl bg-[#fff5e6] flex items-center justify-center text-[#5e1010] group-hover:bg-[#5e1010] group-hover:text-[#ffeccc] transition-colors duration-500">
                                            {getDesignerCertIcon(cert.category, cert.title)}
                                        </div>
                                        <span className="text-[9px] font-bold text-[#d4a574] font-mono border-b border-[#f5d9b3] pb-1">
                                            REF: {cert.credentialId}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a67c52]">
                                            {cert.issuer}
                                        </p>
                                        <h3 className="text-xl font-black text-[#2d0808] group-hover:text-[#5e1010] transition-colors leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                            {cert.title}
                                        </h3>
                                        {cert.description && (
                                            <p className="text-xs text-[#8b2020] leading-relaxed pt-1 font-medium">
                                                {cert.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Category Pill */}
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#fff5e6] border border-[#f5d9b3] w-fit">
                                        <CheckCircle2 size={12} className="text-[#5e1010]" />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#5e1010]">
                                            {cert.category || 'Authorized Record'}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom: Action Footer */}
                                <div className="p-4 sm:p-6 bg-[#fff5e6]/50 border-t border-[#f5d9b3] flex items-center justify-between group-hover:bg-[#5e1010]/5 transition-colors">
                                    <span className="text-[10px] font-bold text-[#a67c52] uppercase tracking-[0.1em] font-mono">{cert.date}</span>
                                    {cert.link && cert.link !== '#' ? (
                                        <motion.a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, x: 3 }}
                                            className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#5e1010] hover:text-[#2d0808] transition-colors"
                                        >
                                            Inspect <ExternalLink size={13} />
                                        </motion.a>
                                    ) : (
                                        <span className="text-[10px] font-black text-[#5e1010] uppercase tracking-widest">
                                            Verified
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Meta Certification Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-[#2d0808] text-[#ffeccc] flex flex-col justify-between shadow-xl relative overflow-hidden group/meta"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5e1010] rounded-full blur-[80px] opacity-40 -translate-y-12 translate-x-12 group-hover/meta:scale-150 transition-transform duration-1000" />

                        <div className="relative z-10 space-y-4">
                            <ShieldCheck size={32} className="text-[#d4a574]" />
                            <h4 className="text-2xl font-black leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                Academic & Professional <span className="italic">Accreditations</span>
                            </h4>
                            <p className="text-xs text-[#f5d9b3]/80 leading-relaxed">
                                Continuous lifelong learning in Generative AI, cybersecurity resilience, full-stack engineering, and national civic innovation.
                            </p>
                        </div>

                        <div className="relative z-10 pt-8 border-t border-[#5e1010]/30 space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a67c52]">Total Records</p>
                            <p className="text-3xl sm:text-4xl font-black text-[#ffeccc] font-mono">{certificates.length} Credentials</p>
                        </div>
                    </motion.div>
                </div>

                {/* Institutional Recognition Row */}
                <div className="mt-20 sm:mt-24 pt-8 sm:pt-12 border-t border-[#f5d9b3] flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 opacity-60">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a67c52]">Issuing Institutions & Programs</div>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] font-black text-[#2d0808] tracking-widest grayscale hover:grayscale-0 transition-all">
                        <span>THE_ECONOMIC_TIMES</span>
                        <span>GOVERNMENT_OF_INDIA</span>
                        <span>DELOITTE_AUSTRALIA</span>
                        <span>GOOGLE_FOR_DEVELOPERS</span>
                        <span>NASA_ARTEMIS</span>
                        <span>TCS_ION</span>
                        <span>ANTHROPIC_CLAUDE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
