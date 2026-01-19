'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/lib/data';

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

export default function SkillsHacker() {
    const skillCategories = [
        { title: 'Technical Skills', items: skills.technical },
        { title: 'Tools', items: skills.tools },
        { title: 'Operating Systems', items: skills.os },
    ];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Programmer Vibe Background - Animated Code Snippets */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none font-mono text-[10px] text-[var(--accent-primary)] leading-tight">
                <div className="absolute top-10 left-10 animate-pulse">
                    {`function initSystem() {\n  const security = new Firewall();\n  security.monitor(true);\n}`}
                </div>
                <div className="absolute bottom-20 right-10 opacity-50">
                    {`class CyberActivist {\n  constructor(name) {\n    this.mission = "Privacy";\n  }\n}`}
                </div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
                    {`import { neoshield } from '@techabbayi/core';\n\nneoshield.encrypt(data);`}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-16"
                >
                    <p className="terminal-line mb-5">&gt; skills --list --detailed</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                        Core Arsenal
                    </h2>
                </motion.div>

                {/* Terminal Container for the Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--bg-secondary)]/80 backdrop-blur-xl border border-[var(--border-primary)] rounded-xl overflow-hidden shadow-2xl"
                >
                    {/* Terminal Top Bar */}
                    <div className="bg-[var(--bg-tertiary)]/50 px-4 py-3 border-b border-[var(--border-primary)] flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest">
                            stack-trace.v1
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
                            {skillCategories.map((category, categoryIndex) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                                >
                                    {/* Category Title - Large margin to prevent tooltip overlap */}
                                    <div className="flex items-center gap-3 mb-14">
                                        <div className="w-1 h-4 bg-[var(--accent-primary)]" />
                                        <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] font-mono">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-12">
                                        {category.items.map((skill: any, index: number) => {
                                            const name = typeof skill === 'string' ? skill : skill.name;
                                            const description = typeof skill === 'string' ? '' : skill.description;
                                            const skillImg = skillImages[name];
                                            const isTechnical = category.title === 'Technical Skills';
                                            const isTools = category.title === 'Tools';
                                            const isOS = category.title === 'Operating Systems';

                                            return (
                                                <div key={name} className="flex justify-center">
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: categoryIndex * 0.1 + index * 0.03 }}
                                                        className="group relative flex flex-col items-center"
                                                    >
                                                        {/* Icon Container - Standardized for all images */}
                                                        <motion.div
                                                            whileHover={{
                                                                scale: 1.1,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                            className={`
                                                                ${isOS ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16 md:w-20 md:h-20'}
                                                                flex items-center justify-center cursor-pointer transition-all
                                                            `}
                                                        >
                                                            {skillImg ? (
                                                                <div className="relative w-full h-full flex items-center justify-center p-2">
                                                                    <Image
                                                                        src={skillImg}
                                                                        alt={name}
                                                                        className="object-contain max-w-full max-h-full drop-shadow-md"
                                                                        style={{ width: 'auto', height: '100%' }}
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className={`
                                                                    flex flex-col items-center justify-center w-full h-full p-2 text-center rounded
                                                                    transition-all duration-300
                                                                    ${isTechnical ? 'border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 group-hover:bg-[var(--accent-primary)]/10' : ''}
                                                                    ${isTools ? 'border border-blue-500/20 bg-blue-500/5 group-hover:bg-blue-500/10' : ''}
                                                                `}>
                                                                    {isTechnical && (
                                                                        <span className="text-[10px] text-[var(--accent-primary)]/50 mb-1 font-mono uppercase tracking-tighter">
                                                                            &gt;
                                                                        </span>
                                                                    )}
                                                                    {isTools && (
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-2 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                                    )}
                                                                    <span className={`
                                                                        text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-tight leading-tight break-words text-center px-1
                                                                        ${isTechnical ? 'text-[var(--accent-primary)]' : 'text-blue-400'}
                                                                    `}>
                                                                        {name}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </motion.div>

                                                        {/* Center-Aligned Tooltip */}
                                                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0">
                                                            <div className={`
                                                                px-3 py-2 rounded shadow-xl border
                                                                ${skillImg ? 'bg-[var(--accent-primary)] text-black border-transparent' : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] border-[var(--border-primary)] backdrop-blur-md'}
                                                            `}>
                                                                <div className="flex flex-col gap-1 min-w-[120px]">
                                                                    <span className={`text-[11px] font-bold font-mono whitespace-nowrap ${skillImg ? '' : 'text-[var(--accent-primary)]'}`}>
                                                                        {name}
                                                                    </span>
                                                                    {(!skillImg && description) && (
                                                                        <span className="text-[9px] font-mono text-[var(--text-secondary)] leading-tight max-w-[180px]">
                                                                            {description}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {/* Centered Arrow */}
                                                            <div className={`
                                                                w-2.5 h-2.5 rotate-45 mx-auto -mt-1.5 border-r border-b
                                                                ${skillImg ? 'bg-[var(--accent-primary)] border-transparent' : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)]'}
                                                            `} />
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
