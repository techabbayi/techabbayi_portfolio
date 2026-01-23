'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { ArrowRight, PenTool, BookOpen } from 'lucide-react';
import { useRef } from 'react';

export default function HeroDesigner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Butter-smooth spring physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    // Hardware-accelerated movement
    const mainTitleY = useTransform(smoothProgress, [0, 1], ["0%", "-25%"]);
    const subTextY = useTransform(smoothProgress, [0, 1], ["0%", "-12%"]);
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-[100vh] flex items-center justify-center bg-[#ffeccc] theme-designer overflow-hidden"
        >
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
               BACKGROUND ELEMENTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
                    style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />

                {/* Large Ambient Glows */}
                <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-white/40 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[#5e1010]/5 rounded-full blur-[160px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10 py-10">
                <div className="flex flex-col items-center">

                    {/* Reduced Notch Size & Added Top Margin to prevent Navbar overlap */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="mt-24 mb-12 flex items-center gap-6 px-6 py-2.5 bg-white/30 backdrop-blur-2xl border border-[#f5d9b3] rounded-xl shadow-sm scale-90 md:scale-100"
                    >
                        <div className="flex items-center gap-2.5 border-r border-[#f5d9b3] pr-6">
                            <PenTool size={14} className="text-[#5e1010]" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5e1010] font-sans">Designer</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <BookOpen size={14} className="text-[#5e1010]" />
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5e1010] font-sans">Writer</span>
                        </div>
                    </motion.div>

                    {/* ━━━━━━━━━━━━━━━━━━━ THE MONUMENTAL LOGOTYPE ━━━━━━━━━━━━━━━━━━━ */}
                    <motion.div
                        style={{ y: mainTitleY }}
                        className="flex flex-col items-center relative z-10 will-change-transform"
                    >
                        {/* 
                            FIX: Horizontal padding (px-20) and vertical space (pb-12) to prevent italic clipping.
                            NEW FONTS: Syne for first name, Cormorant Garamond for second name.
                        */}
                        <h1 className="text-[10vw] md:text-[11.5rem] tracking-tighter text-center leading-[0.8] px-20">
                            <motion.span
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="block font-extrabold text-[#2d0808]"
                                style={{ fontFamily: 'Syne, sans-serif' }}
                            >
                                Lokeswara
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="block italic mt-2 py-4 px-10"
                                style={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 600,
                                    color: '#5e1010',
                                    backgroundImage: 'linear-gradient(to right, #5e1010, #a67c52)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    paddingRight: '0.15em' // Crucial fix for 'a' cutting
                                }}
                            >
                                Muthumula
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* ━━━━━━━━━━━━━━━━━━━ REFINED CONTEXT ━━━━━━━━━━━━━━━━━━━ */}
                    <motion.div
                        style={{ y: subTextY }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 flex flex-col items-center gap-16 will-change-transform"
                    >
                        <p className="text-2xl md:text-4xl font-light text-[#8b2020] leading-[1.3] text-center max-w-2xl italic opacity-90"
                            style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                            {personalInfo.tagline}
                        </p>

                        <div className="flex flex-col items-center">
                            <motion.div
                                style={{ opacity: scrollIndicatorOpacity }}
                                className="flex flex-col items-center gap-5"
                            >
                                <span className="text-[10px] font-black text-[#a67c52] uppercase tracking-[0.5em]">Scroll Down</span>
                                <div className="w-[1.5px] h-14 bg-gradient-to-b from-[#5e1010]/40 via-[#5e1010]/10 to-transparent rounded-full" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Vertical Signature Signature */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-30 pointer-events-none">
                <div className="w-[1.5px] h-64 bg-gradient-to-b from-transparent via-[#5e1010] to-transparent" />
                <span className="text-[9px] font-black text-[#5e1010] uppercase tracking-[0.8em] [writing-mode:vertical-lr] rotate-180">
                    techabbayi — the creator
                </span>
            </div>

            {/* Removed archive text as requested */}
        </section>
    );
}
