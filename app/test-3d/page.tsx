'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence, LayoutGroup } from 'framer-motion';
import { personalInfo, designerInfo, projects, socialLinks } from '@/lib/data';
import { Terminal, Shield, Cpu, Zap, Globe, Github, Linkedin, Twitter, Mail, ArrowRight, ExternalLink, Send, Sparkles, Box, Atom } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Advanced Theme: "Hyper-Liquid 3D"
// Colors: Ice White, Neodymium Purple (#8b5cf6), Cyber Cyan (#06b6d4)

export default function Test3DTheme() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Scrolling 3D Background Values
    const bgRotateX = useTransform(smoothProgress, [0, 1], [60, 45]);
    const bgScale = useTransform(smoothProgress, [0, 1], [3, 2]);
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "-30%"]);

    return (
        <div ref={containerRef} className="min-h-[400vh] bg-[#fafaff] text-[#0f172a] selection:bg-cyan-100 font-sans overflow-x-hidden">

            {/* 1. ADVANCED PARTICLE FIELD (Holographic Nodes) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#fcfdff]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_50%)]" />

                {/* Floating 3D Nodes */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <FloatingParticle key={i} />
                    ))}
                </div>

                {/* Perspective Horizon Grid */}
                <motion.div
                    style={{
                        rotateX: bgRotateX,
                        scale: bgScale,
                        y: bgY,
                    }}
                    className="absolute inset-x-0 top-0 h-screen perspective-1000 origin-top opacity-[0.2]"
                >
                    <div className="w-full h-full"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #8b5cf6 1px, transparent 1px),
                                linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </motion.div>
            </div>

            <div className="relative z-10">

                {/* 2. MAGLEV NAVIGATION HEADER */}
                <header className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="group flex items-center gap-4 bg-white/40 backdrop-blur-2xl border border-white/50 px-6 py-3 rounded-2xl shadow-xl"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-10 h-10 bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] rounded-xl flex items-center justify-center text-white"
                        >
                            <Atom size={20} />
                        </motion.div>
                        <span className="text-xl font-black tracking-tighter text-slate-800">TECH.3D [ARCH]</span>
                    </motion.div>

                    <nav className="hidden lg:flex gap-4 p-2 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-xl">
                        {['Hero', 'Nexus', 'Archives', 'Terminal'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-[#8b5cf6] hover:bg-slate-50/50 transition-all"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="flex gap-4">
                        <button className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#8b5cf6] hover:shadow-lg transition-all">
                            <Box size={20} />
                        </button>
                    </div>
                </header>

                <main>
                    {/* 3. HERO: THE 3D MONOLITH */}
                    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="absolute -inset-20 bg-gradient-to-tr from-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-full blur-[100px] animate-pulse" />
                            <h1 className="text-8xl md:text-[14rem] font-black leading-none tracking-tighter text-slate-900 mix-blend-multiply flex flex-col items-center">
                                <motion.span
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    HYPER
                                </motion.span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]">INTERFACE</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="max-w-xl mt-12 space-y-8"
                        >
                            <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed italic">
                                "{personalInfo.tagline}"
                            </p>
                            <div className="flex justify-center gap-6">
                                <MagneticButton className="px-10 py-5 bg-[#0f172a] text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-2xl flex items-center gap-3">
                                    Initiate Deployment <Zap size={18} />
                                </MagneticButton>
                            </div>
                        </motion.div>

                        {/* Scrolling Indicator 3D Look */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mt-32 w-10 h-16 border-2 border-slate-200 rounded-full flex justify-center p-2"
                        >
                            <div className="w-1.5 h-3 bg-[#8b5cf6] rounded-full" />
                        </motion.div>
                    </section>

                    {/* 4. NEXUS: THE PERSPECTIVE ABOUT */}
                    <section id="nexus" className="min-h-screen py-40 flex items-center relative">
                        <div className="container mx-auto max-w-7xl px-6">
                            <div className="grid lg:grid-cols-2 gap-32 items-center">
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                                                <Cpu size={24} />
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-[0.6em] text-cyan-500">Core_Systems</span>
                                        </div>
                                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
                                            Liquid <br /> <span className="text-[#8b5cf6] underline underline-offset-8">Intelligence.</span>
                                        </h2>
                                    </div>
                                    <p className="text-2xl text-slate-500 leading-relaxed max-w-lg font-medium">
                                        {designerInfo.bio.split('. ')[0]}. Transforming abstract concepts into functional digital architecture.
                                    </p>
                                </div>

                                {/* Floating 3D Cards Stack */}
                                <div className="relative perspective-1000 h-[500px] flex items-center justify-center">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            style={{
                                                rotateY: -30,
                                                rotateX: 10,
                                                translateZ: i * 50,
                                                x: i * 20,
                                                y: i * -20
                                            }}
                                            whileHover={{ translateZ: 100, x: i * 10, z: 50 }}
                                            className="absolute w-[350px] h-[450px] bg-white border border-slate-100 rounded-[3rem] shadow-2xl p-10 flex flex-col justify-between"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#8b5cf6]">
                                                {i === 0 ? <Shield size={24} /> : i === 1 ? <Zap size={24} /> : <Terminal size={24} />}
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-5xl font-black text-slate-900 leading-none tracking-tighter">0{i + 1}</h3>
                                                <p className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">Level_{i + 1}_Metric</p>
                                                <p className="text-slate-400 font-medium">Architectural optimization phase {i + 1} active.</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. ARCHIVES: THE 3D SCROLLING GRID */}
                    <section id="archives" className="py-40 relative">
                        <div className="container mx-auto max-w-7xl px-6">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                                <div className="space-y-4">
                                    <span className="text-xs font-black uppercase tracking-[0.5em] text-[#8b5cf6] block">Selected_Artifacts</span>
                                    <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none">THE REPO</h2>
                                </div>
                                <div className="flex gap-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 rotate-90 origin-bottom-right">Scroll_Down /</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {projects.map((project, i) => (
                                    <ArtifactCard key={project.id} project={project} index={i} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 6. TERMINAL: CONTACT FINALITY */}
                    <section id="terminal" className="py-60 flex items-center justify-center px-6">
                        <motion.div
                            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                            viewport={{ once: true }}
                            className="w-full max-w-5xl aspect-video bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[5rem] relative overflow-hidden flex flex-col items-center justify-center text-center p-20 shadow-[0_50px_100px_-20px_rgba(139,92,246,0.3)]"
                        >
                            <div className="absolute inset-0 bg-[grid-line] opacity-[0.05]"
                                style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 10, repeat: Infinity }}
                                className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[150px]"
                            />

                            <div className="relative z-10 space-y-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 justify-center">
                                        <Sparkles size={20} className="text-[#8b5cf6]" />
                                        <span className="text-xs font-black uppercase tracking-[0.8em] text-[#8b5cf6]">Final_Protocol</span>
                                    </div>
                                    <h3 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                                        READY TO <span className="text-[#06b6d4] italic">UPGRADE?</span>
                                    </h3>
                                </div>
                                <div className="flex flex-wrap justify-center gap-6">
                                    <button className="px-12 py-8 bg-[#8b5cf6] text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all flex items-center gap-4">
                                        Open Transmission <Send size={16} />
                                    </button>
                                    <button className="px-12 py-8 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white/10 transition-all">
                                        View_Archive
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </main>

                <footer className="py-20 px-10">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="text-2xl font-black tracking-tighter text-slate-900">techabbayi</h4>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Advanced 3D Layer Alpha_7.0</p>
                        </div>
                        <div className="flex gap-12">
                            {socialLinks.map(s => (
                                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#8b5cf6] transition-colors">{s.name}</a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

// SUPPORTING COMPONENTS

function FloatingParticle() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const duration = 10 + Math.random() * 20;

    return (
        <motion.div
            animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="absolute w-2 h-2 rounded-full bg-[#8b5cf6]/20"
            style={{ left: `${randomX}%`, top: `${randomY}%` }}
        />
    );
}

function MagneticButton({ children, className }: { children: React.ReactNode, className: string }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </motion.button>
    );
}

function ArtifactCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[600px] perspective-1000"
        >
            <motion.div
                whileHover={{ rotateY: -15, rotateX: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full h-full bg-white border border-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative preserve-3d group-hover:shadow-[#8b5cf6]/20 transition-all"
            >
                {/* Visual Area */}
                <div className="h-2/3 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[grid-line] opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="w-40 h-40 border-2 border-dashed border-[#8b5cf6]/20 rounded-full flex items-center justify-center"
                        >
                            <Box size={48} className="text-[#8b5cf6]/30" />
                        </motion.div>
                    </div>

                    {/* Overlay Action */}
                    <div className="absolute inset-0 bg-[#0f172a]/80 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                        <button className="w-16 h-16 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center hover:scale-110 transition-transform"><Globe size={24} /></button>
                        <button className="w-16 h-16 rounded-full bg-white text-[#0f172a] flex items-center justify-center hover:scale-110 transition-transform"><Github size={24} /></button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-12 space-y-4 bg-white relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-[#8b5cf6]">
                        <span>{project.category}</span>
                        <span>0{index + 1}/INF</span>
                    </div>
                    <h4 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">{project.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed italic line-clamp-2">"{project.description}"</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
