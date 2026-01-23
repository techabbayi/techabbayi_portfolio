'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { designSkills } from '@/lib/data';
import { useState } from 'react';
import { Command, Cpu, Palette, Zap, Sparkles } from 'lucide-react';

// Import local images from assets
import PythonImg from '@/app/assets/skills/python.jpg';
import CppImg from '@/app/assets/skills/cpp.png';
import HtmlImg from '@/app/assets/skills/html5.png';
import CssImg from '@/app/assets/skills/css3.png';
import JsImg from '@/app/assets/skills/javascript.png';
import GitImg from '@/app/assets/skills/git.png';
import NpmImg from '@/app/assets/skills/npm.png';
import WordpressImg from '@/app/assets/skills/wordpress.png';
import FigmaImg from '@/app/assets/skills/figma.png';
import PhotoshopImg from '@/app/assets/skills/photoshop.png';
import OfficeImg from '@/app/assets/skills/office.png';
import WindowsImg from '@/app/assets/skills/windows.png';
import UbuntuImg from '@/app/assets/skills/ubuntu.png';
import KaliImg from '@/app/assets/skills/kalilinux.png';
import CommandImg from '@/app/assets/skills/command.png';

const skillImages: Record<string, any> = {
    'Python': PythonImg,
    'C++': CppImg,
    'HTML': HtmlImg,
    'CSS': CssImg,
    'JavaScript': JsImg,
    'Git': GitImg,
    'npm': NpmImg,
    'WordPress': WordpressImg,
    'Figma': FigmaImg,
    'Photoshop': PhotoshopImg,
    'Office 365': OfficeImg,
    'Windows': WindowsImg,
    'Ubuntu': UbuntuImg,
    'Kali Linux': KaliImg,
    'Java': CommandImg,
};

export default function SkillsDesigner() {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        { name: 'Architecture', icon: Command, data: designSkills.technical },
        { name: 'Creative Tools', icon: Palette, data: designSkills.tools },
        { name: 'Environments', icon: Cpu, data: designSkills.os },
    ];

    return (
        <section id="skills" className="relative py-32 px-6 overflow-hidden bg-[#ffeccc] theme-designer">
            {/* Background Texture - Refined Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #5e1010 1px, transparent 1px), linear-gradient(to bottom, #5e1010 1px, transparent 1px)',
                        backgroundSize: '120px 120px'
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section - Sharp Typography */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5e1010] mb-8 block">Domain Matrix</span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2d0808] tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-serif)' }}>
                            Skillset <br />
                            <span className="flex items-center gap-6">
                                <span className="text-[#a67c52] italic font-serif">&</span>
                                <span className="relative">
                                    Craft
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="absolute -bottom-2 left-0 h-1 bg-[#5e1010]/20"
                                    />
                                </span>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-2 p-1.5 bg-[#fff5e6] rounded-[1.5rem] border border-[#f5d9b3] shadow-sm"
                    >
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`
                                    px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500
                                    ${activeTab === i
                                        ? 'bg-white text-[#5e1010] shadow-md shadow-[#5e1010]/5'
                                        : 'text-[#a67c52] hover:text-[#5e1010] hover:bg-white/50'
                                    }
                                `}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Skills Grid - Balanced & Refined */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5"
                >
                    {categories[activeTab].data.map((skill: any, i) => {
                        const name = typeof skill === 'string' ? skill : skill.name;
                        const skillImg = skillImages[name];

                        return (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ y: -5 }}
                                className="group relative"
                            >
                                <div className="p-6 rounded-[2rem] bg-white border border-[#f5d9b3] hover:border-[#5e1010] hover:shadow-[0_20px_40px_-10px_rgba(94,16,16,0.1)] transition-all duration-500 flex flex-col items-center justify-center gap-5 h-full min-h-[180px]">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#fff5e6] flex items-center justify-center p-3.5 group-hover:bg-[#5e1010]/5 transition-colors duration-500">
                                        {skillImg ? (
                                            <Image
                                                src={skillImg}
                                                alt={name}
                                                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <Zap size={24} className="text-[#a67c52] group-hover:text-[#5e1010] transition-colors" />
                                        )}
                                    </div>

                                    {/* Text Info */}
                                    <div className="text-center space-y-1.5 overflow-hidden">
                                        <motion.p
                                            className="text-[13px] font-black uppercase tracking-[0.05em] text-[#2d0808] transition-all duration-500 group-hover:text-[#5e1010]"
                                        >
                                            {name}
                                        </motion.p>
                                        <div className="h-[1px] w-0 bg-[#5e1010]/20 mx-auto group-hover:w-full transition-all duration-500" />
                                        <p className="text-[9px] font-bold text-[#d4a574] uppercase tracking-tighter opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                            Handled with Precision
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Meta Filler Card - "And many more" */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-8 rounded-[2rem] bg-gradient-to-br from-[#5e1010] to-[#8b2020] flex flex-col justify-between text-[#ffeccc] hidden xl:flex shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffeccc]/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
                        <Sparkles size={28} className="relative z-10 text-[#d4a574]" />
                        <div className="relative z-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-[#ffeccc]/60">Beyond the Matrix</p>
                            <p className="text-xl font-black leading-[1.1] tracking-tight">And many more are there...</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
