'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram, Send, Globe, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { socialLinks, personalInfo } from '@/lib/data';

export default function ContactDesigner() {
    const iconMap: Record<string, any> = {
        Github,
        Linkedin,
        Twitter,
        Instagram,
        Mail,
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-[#ffeccc] theme-designer overflow-hidden">
            {/* Modern Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(#5e1010 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] border border-[#5e1010]/10 rounded-full"
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content Side */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010] block">Start a Conversation</span>
                            <h2 className="text-5xl md:text-7xl font-black text-[#2d0808] leading-none tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
                                Connect for new <br /> <span className="text-[#a67c52] italic font-serif">Innovations</span>
                            </h2>
                            <p className="text-lg text-[#8b2020] font-medium leading-relaxed max-w-md">
                                Let's collaborate to build the next generation of digital solutions and secure systems.
                            </p>
                        </motion.div>

                        {/* Quick Contacts - More Compact */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Direct Mail</p>
                                <p className="text-lg font-bold text-[#2d0808]">{personalInfo.email}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4a574]">Current Node</p>
                                <p className="text-lg font-bold text-[#2d0808]">AP, India / Remote</p>
                            </div>
                        </div>

                        {/* Social Row */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = iconMap[social.icon] || Globe;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="w-12 h-12 bg-white border border-[#f5d9b3] rounded-xl flex items-center justify-center text-[#5e1010] hover:border-[#5e1010] transition-all"
                                    >
                                        <Icon size={18} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: The Form - More Compact & Visible Labels */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#f5d9b3] shadow-xl"
                    >
                        <form className="space-y-8">
                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5e1010]">01. Your Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    className="w-full bg-[#fff5e6]/50 border-2 border-[#fff5e6] focus:border-[#5e1010] p-4 rounded-xl text-base font-bold text-[#2d0808] placeholder:text-[#d4a574]/40 focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5e1010]">02. Digital Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-[#fff5e6]/50 border-2 border-[#fff5e6] focus:border-[#5e1010] p-4 rounded-xl text-base font-bold text-[#2d0808] placeholder:text-[#d4a574]/40 focus:outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5e1010]">03. Objective</label>
                                <textarea
                                    rows={3}
                                    placeholder="How can we innovate together?"
                                    className="w-full bg-[#fff5e6]/50 border-2 border-[#fff5e6] focus:border-[#5e1010] p-4 rounded-xl text-base font-bold text-[#2d0808] placeholder:text-[#d4a574]/40 focus:outline-none transition-all resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#5e1010' }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 rounded-xl bg-[#2d0808] text-[#ffeccc] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl transition-all"
                            >
                                Send Transmission <Send size={16} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
