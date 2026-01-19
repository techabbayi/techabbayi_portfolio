'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Shield, Cpu, Binary, Lock, FileCode, Folder } from 'lucide-react';
import { projects } from '@/lib/data';

export default function ProjectsHacker() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    // Helper to get project specific icon
    const getProjectIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('webscan') || t.includes('arc')) return <Shield size={18} />;
        if (t.includes('cheat') || t.includes('terminal')) return <FileCode size={18} />;
        if (t.includes('folder') || t.includes('launcher')) return <Folder size={18} />;
        return <Cpu size={18} />;
    };

    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 font-mono text-xs text-[var(--accent-primary)] whitespace-pre">
                    {`[INFO] INITIALIZING PROJECT_MODULE_V4.0
[OK] SECURE_VAULT_LOADED
[OK] REPOSITORY_TREE_FETCHED
[WAIT] LISTENING_FOR_INTRUSIONS...`}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Terminal size={20} className="text-[var(--accent-primary)] animate-pulse" />
                        <span className="terminal-line font-mono text-sm tracking-widest uppercase">system.exec("fetch_projects")</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter mb-4">
                        WORKS<span className="text-[var(--accent-primary)]">.pkg</span>
                    </h2>
                    <div className="h-1 w-20 bg-[var(--accent-primary)] mb-6"></div>
                </motion.div>

                {/* Featured Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Refined subtle glow */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--accent-primary)] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

                            <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl overflow-hidden flex flex-col h-full group-hover:border-[var(--border-accent)] transition-colors duration-300">
                                {/* Terminal Header */}
                                <div className="bg-[var(--bg-tertiary)] px-4 py-2 border-b border-[var(--border-primary)] flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-60"></div>
                                    </div>
                                    <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest">
                                        root@techabbayi:~/{project.title.toLowerCase().replace(/\s+/g, '_')}
                                    </div>
                                    <div className="flex gap-2">
                                        <Lock size={12} className="text-[var(--accent-primary)] opacity-30" />
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Shield size={16} className="text-[var(--accent-primary)] opacity-70" />
                                                <span className="text-[10px] font-mono text-[var(--accent-primary)] tracking-widest uppercase opacity-70">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <span className="text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-primary)] px-2 py-1 rounded text-[var(--text-secondary)]">
                                            v.1.0.4-stable
                                        </span>
                                    </div>

                                    <div className="mb-6 font-mono text-[13px] text-[var(--text-tertiary)] leading-relaxed bg-[var(--bg-tertiary)]/50 p-4 rounded border border-[var(--border-primary)] transition-colors group-hover:border-[var(--border-accent)]">
                                        <p className="mb-2 text-[var(--accent-primary)] opacity-50">&gt; cat description.txt</p>
                                        <p className="text-[var(--text-secondary)]">{project.description}</p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="code-badge text-[10px] flex items-center gap-1.5 py-1 px-3 bg-[var(--bg-tertiary)] hover:text-[var(--accent-primary)] hover:border-[var(--border-accent)] transition-all">
                                                    <Binary size={10} />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                            >
                                                <Github size={14} />
                                                codebase
                                            </motion.a>
                                            {project.live && (
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                                >
                                                    <ExternalLink size={14} />
                                                    run_demo --live
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sub-projects Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-6 relative overflow-hidden transition-colors hover:border-[var(--border-accent)]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded text-[var(--accent-primary)] group-hover:border-[var(--border-accent)] transition-colors">
                                    {getProjectIcon(project.title)}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors">
                                        <Github size={16} />
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors">
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors uppercase tracking-tight">
                                {project.title}
                            </h4>
                            <p className="text-[var(--text-tertiary)] text-xs font-mono mb-4">
                                {project.category}
                            </p>

                            <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {project.techStack.slice(0, 3).map((tech) => (
                                    <span key={tech} className="text-[9px] font-mono px-2 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-primary)] rounded hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-20 pt-8 border-t border-[var(--border-primary)] border-dashed flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[var(--text-tertiary)]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                            CORE_SERVICES: ACTIVE
                        </span>
                        <span className="hidden md:inline">|</span>
                        <span>LATENCY: 12ms</span>
                        <span className="hidden md:inline">|</span>
                        <span>AUTH: RSA_4096_VALID</span>
                    </div>
                    <div className="uppercase tracking-[0.2em]">
                        Last synchronization: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </section>
    );
}
