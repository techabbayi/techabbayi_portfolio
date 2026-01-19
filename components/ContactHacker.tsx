'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone, Terminal, ShieldCheck, Globe, Activity, Wifi, Lock } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function ContactHacker() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute top-20 right-10 font-mono text-[10px] text-[var(--accent-primary)] whitespace-pre text-right leading-tight">
                    {`[INFO] STATUS: LISTENING
[INFO] PORT: 587
[INFO] SSL: ENABLED
[INFO] PING: 24ms
[OK] CONNECTION_SECURE`}
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal size={20} className="text-[var(--accent-primary)] animate-pulse" />
                        <span className="terminal-line font-mono text-sm tracking-widest uppercase">system.exec("init_comm_link")</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter mb-4 uppercase">
                        Secure_Contact<span className="text-[var(--accent-primary)]">.node</span>
                    </h2>
                    <div className="h-1 w-20 bg-[var(--accent-primary)] mb-6"></div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Panel: Status & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-8 relative group">
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--accent-primary)]">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)]">Node Metadata</h3>
                                        <p className="text-xs font-mono text-[var(--text-tertiary)]">Public distribution network active</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-[var(--accent-primary)] mt-1" size={18} />
                                        <div>
                                            <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px]">Primary Location</p>
                                            <p className="text-[var(--text-primary)] font-medium">{personalInfo.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="text-[var(--accent-primary)] mt-1" size={18} />
                                        <div>
                                            <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px]">IMAP Endpoint</p>
                                            <a href={`mailto:${personalInfo.email}`} className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-primary)] transition-colors">
                                                {personalInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="text-[var(--accent-primary)] mt-1" size={18} />
                                        <div>
                                            <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px]">VoiP Interface</p>
                                            <a href={`tel:${personalInfo.phone}`} className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-primary)] transition-colors">
                                                {personalInfo.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-10 border-t border-[var(--border-primary)]">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded text-center">
                                            <Activity size={16} className="mx-auto mb-2 text-[var(--accent-primary)] opacity-50" />
                                            <p className="text-[9px] font-mono text-[var(--text-tertiary)] uppercase leading-tight">Response Time</p>
                                            <p className="text-sm font-bold text-[var(--text-primary)]">&lt; 24h</p>
                                        </div>
                                        <div className="p-4 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded text-center">
                                            <Wifi size={16} className="mx-auto mb-2 text-[var(--accent-primary)] opacity-50" />
                                            <p className="text-[9px] font-mono text-[var(--text-tertiary)] uppercase leading-tight">Uptime Status</p>
                                            <p className="text-sm font-bold text-[#27c93f]">99.9%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl overflow-hidden flex flex-col h-full">
                            {/* Form Terminal Header */}
                            <div className="bg-[var(--bg-tertiary)] px-6 py-3 border-b border-[var(--border-primary)] flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]/80"></div>
                                </div>
                                <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest flex items-center gap-2">
                                    <Lock size={12} className="text-[var(--accent-primary)]" />
                                    transmission_buffer.sh
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-[var(--bg-tertiary)] border border-[var(--accent-primary)]/30 flex items-center justify-center mb-8">
                                            <ShieldCheck size={40} className="text-[var(--accent-primary)] animate-pulse" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 uppercase tracking-[4px]">Data Dispatched</h3>
                                        <div className="font-mono text-xs space-y-1 text-[var(--text-tertiary)]">
                                            <p className="text-[var(--accent-primary)]">&gt; encrypting_payload... [DONE]</p>
                                            <p className="text-[var(--accent-primary)]">&gt; tunneling_via_secure_node... [DONE]</p>
                                            <p className="text-[var(--accent-primary)]">&gt; signaling_recipient... [COMPLETE]</p>
                                        </div>
                                        <p className="mt-8 text-[var(--text-secondary)] text-sm max-w-xs">
                                            Your message has been successfully broadcast to the secure receiver. Expect a handshake within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px] ml-1">identity_label</label>
                                                <div className="relative group">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent-primary)] font-mono text-xs opacity-50 group-focus-within:opacity-100 transition-opacity">$</span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-8 pr-4 py-3 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded-lg text-sm font-mono text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/20 outline-none transition-all placeholder:text-[var(--text-muted)] placeholder:text-[10px] placeholder:uppercase"
                                                        placeholder="Full Name / Handle"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px] ml-1">contact_protocol</label>
                                                <div className="relative group">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent-primary)] font-mono text-xs opacity-50 group-focus-within:opacity-100 transition-opacity">@</span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-8 pr-4 py-3 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded-lg text-sm font-mono text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/20 outline-none transition-all placeholder:text-[var(--text-muted)] placeholder:text-[10px] placeholder:uppercase"
                                                        placeholder="Email Address"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-[2px] ml-1">message_packet</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full px-4 py-4 bg-[var(--bg-tertiary)]/50 border border-[var(--border-primary)] rounded-lg text-sm font-mono text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/20 outline-none transition-all resize-none placeholder:text-[var(--text-muted)] placeholder:text-[10px] placeholder:uppercase"
                                                placeholder="Enter project details, inquiries or Secure comms..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full py-4 bg-[var(--accent-primary)] text-black font-mono text-xs font-black uppercase tracking-[4px] rounded-lg shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all flex items-center justify-center gap-3"
                                        >
                                            <Send size={16} />
                                            Dispatch_Payload
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-20 pt-8 border-t border-[var(--border-primary)] border-dashed flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[var(--text-tertiary)]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                            RELAY_SERVER: ONLINE
                        </span>
                        <span className="hidden md:inline">|</span>
                        <span>ENC: AES_256_GCM</span>
                    </div>
                    <div className="uppercase tracking-[0.2em]">
                        Last Signal Check: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </section>
    );
}

