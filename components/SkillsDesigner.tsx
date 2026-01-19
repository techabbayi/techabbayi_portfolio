'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { designSkills } from '@/lib/data';

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
    const skillCategories = [
        { category: 'Technical Skills', skills: designSkills.technical },
        { category: 'Tools', skills: designSkills.tools },
        { category: 'Systems', skills: designSkills.os },
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-[var(--accent-secondary)] font-medium mb-2 tracking-wide uppercase text-sm">
                        Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                        Skills & Tools
                    </h2>
                </motion.div>

                {/* Skills Grid - 3 Columns */}
                <div className="grid md:grid-cols-3 gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Title - Large margin to prevent tooltip overlap */}
                            <h3 className="text-xl font-bold mb-20" style={{ fontFamily: 'var(--font-sans)' }}>
                                {category.category}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-3 gap-y-12 gap-x-8">
                                {category.skills.map((skill: any, i) => {
                                    const name = typeof skill === 'string' ? skill : skill.name;
                                    const skillImg = skillImages[name];
                                    const isSystem = category.category === 'Systems';

                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: categoryIndex * 0.1 + i * 0.05 }}
                                            className="group relative flex flex-col items-center"
                                        >
                                            {/* Image Container - Standardized height for alignment */}
                                            <motion.div
                                                whileHover={{ scale: 1.1, y: -4 }}
                                                className={`
                          ${isSystem ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16 md:w-20 md:h-20'}
                          flex items-center justify-center cursor-pointer transition-all
                        `}
                                            >
                                                {skillImg ? (
                                                    <div className="relative w-full h-full flex items-center justify-center p-1">
                                                        <Image
                                                            src={skillImg}
                                                            alt={name}
                                                            className="object-contain max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                                            style={{ width: 'auto', height: '100%' }}
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="text-[12px] font-mono opacity-50">{name.slice(0, 3)}</span>
                                                )}
                                            </motion.div>

                                            {/* Tooltip - Skill Name */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                                <div className="bg-[var(--bg-elevated)] border border-[var(--border-primary)] px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                                                    <span className="text-xs font-medium text-[var(--text-primary)]">
                                                        {name}
                                                    </span>
                                                </div>
                                                {/* Arrow */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                                    <div className="border-4 border-transparent border-t-[var(--border-primary)]" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
