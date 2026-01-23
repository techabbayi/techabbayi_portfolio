'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Globe, ExternalLink, BadgeCheck } from 'lucide-react';
import { certificates } from '@/lib/data';

export default function CertificatesDesigner() {
    return (
        <section id="certificates" className="relative py-24 px-6 overflow-hidden bg-[#ffeccc] theme-designer">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] opacity-[0.03]"
                >
                    <div className="w-full h-full border-[1px] border-[#5e1010] rounded-full" />
                </motion.div>
                <div className="absolute inset-0 bg-[grid-line] opacity-[0.01]"
                    style={{ backgroundImage: 'linear-gradient(to right, #5e1010 2px, transparent 2px), linear-gradient(to bottom, #5e1010 2px, transparent 2px)', backgroundSize: '120px 120px' }} />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Modern Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-8 bg-[#5e1010]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010]">Institutional Record</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-[#2d0808] leading-none tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                            Validated <span className="text-[#a67c52] italic font-serif">Expertise</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-6"
                    >
                        <div className="flex flex-col items-end text-right">
                            <span className="text-[9px] font-black text-[#d4a574] uppercase tracking-widest">Global Status</span>
                            <span className="text-xl font-bold text-[#2d0808]">Fully_Verified</span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#f5d9b3] flex items-center justify-center text-[#5e1010] shadow-sm">
                            <BadgeCheck size={32} />
                        </div>
                    </motion.div>
                </div>

                {/* Refined Certificates Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="h-full bg-white border border-[#f5d9b3] rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl hover:shadow-[#5e1010]/5 hover:border-[#5e1010] transition-all duration-500 overflow-hidden flex flex-col">
                                <div className="p-8 pb-4 flex-grow space-y-8">
                                    {/* Top: Issuer Logo Placeholder / Decor */}
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-xl bg-[#fff5e6] flex items-center justify-center text-[#5e1010] group-hover:bg-[#5e1010] group-hover:text-[#ffeccc] transition-colors duration-500">
                                            <Award size={24} />
                                        </div>
                                        <span className="text-[9px] font-bold text-[#d4a574] font-mono border-b border-[#f5d9b3] pb-1">
                                            REF_ID: {cert.credentialId}
                                        </span>
                                    </div>

                                    {/* Middle: Content */}
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a67c52]">
                                            {cert.issuer}
                                        </p>
                                        <h3 className="text-2xl font-black text-[#2d0808] group-hover:text-[#5e1010] transition-colors leading-tight">
                                            {cert.title}
                                        </h3>
                                    </div>

                                    {/* Verification Badge */}
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#fff5e6] border border-[#f5d9b3] w-fit">
                                        <CheckCircle2 size={12} className="text-[#5e1010]" />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-[#5e1010]">Authorized Record</span>
                                    </div>
                                </div>

                                {/* Bottom: Action Footer */}
                                <div className="p-6 bg-[#fff5e6]/50 border-t border-[#f5d9b3] flex items-center justify-between group-hover:bg-[#5e1010]/5 transition-colors">
                                    <span className="text-[10px] font-bold text-[#a67c52] uppercase tracking-[0.1em]">{cert.date}</span>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, x: 5 }}
                                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#5e1010] hover:text-[#2d0808] transition-colors"
                                    >
                                        Inspect <ExternalLink size={14} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Meta Certification Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-8 rounded-[2.5rem] bg-[#2d0808] text-[#ffeccc] flex flex-col justify-between shadow-xl relative overflow-hidden group/meta"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5e1010] rounded-full blur-[80px] opacity-40 -translate-y-12 translate-x-12 group-hover/meta:scale-150 transition-transform duration-1000" />

                        <div className="relative z-10 space-y-4">
                            <ShieldCheck size={32} className="text-[#d4a574]" />
                            <h4 className="text-2xl font-black leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                                Academic & Professional <span className="italic">Redirection</span>
                            </h4>
                        </div>

                        <div className="relative z-10 pt-8 border-t border-[#5e1010]/30 space-y-2">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#a67c52]">Total Verifications</p>
                            <p className="text-3xl font-black text-[#ffeccc] font-mono">0{certificates.length} / MAX</p>
                        </div>
                    </motion.div>
                </div>

                {/* Institutional Recognition Row */}
                <div className="mt-24 pt-12 border-t border-[#f5d9b3] flex flex-col md:flex-row justify-between items-center gap-10 opacity-40">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#a67c52]">Authorized Bodies</div>
                    <div className="flex flex-wrap justify-center gap-12 text-[11px] font-black text-[#2d0808] tracking-widest grayscale hover:grayscale-0 transition-all">
                        <span>GREAT_LEARNING_CENTER</span>
                        <span>IBM_SKILLSBUILD_GLOBAL</span>
                        <span>GUILD_OF_ENGINEERS</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
