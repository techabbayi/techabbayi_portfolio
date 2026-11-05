'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ExternalLink,
    Github,
    Terminal,
    Shield,
    Cpu,
    Binary,
    Lock,
    FileCode,
    Folder,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    Layers,
    Scale,
} from 'lucide-react';
import { projects } from '@/lib/data';

export default function ProjectsHacker() {
    // Only featured projects on the homepage (top 5)
    const featuredProjects = projects.filter(p => p.featured).slice(0, 5);
    const nonFeaturedProjects = projects.filter(p => !p.featured);

    // Helper to get project-specific icon
    const getProjectIcon = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('foundr')) return <Cpu size={20} />;
        if (t.includes('lawpilot')) return <Scale size={20} />;
        if (t.includes('quiz') || t.includes('intra')) return <Layers size={20} />;
        if (t.includes('shield') || t.includes('vault')) return <Lock size={20} />;
        if (t.includes('share')) return <Binary size={20} />;
        if (t.includes('folder') || t.includes('launcher')) return <Folder size={20} />;
        if (t.includes('webscan') || t.includes('arc')) return <Shield size={20} />;
        return <FileCode size={20} />;
    };

    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 font-mono text-xs text-[var(--accent-primary)] whitespace-pre">
                    {`[INFO] INITIALIZING PROJECT_MODULE_V5.0
[OK] SECURE_VAULT_LOADED
[OK] 5_FEATURED_PROJECTS_ACTIVE
[OK] ARCHIVE_CATALOG_SYNCED
[WAIT] LISTENING_FOR_EXPLORATION...`}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Terminal size={20} className="text-[var(--accent-primary)] animate-pulse" />
                            <span className="terminal-line font-mono text-sm tracking-widest uppercase">
                                system.exec("fetch_featured_projects")
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter">
                            FEATURED<span className="text-[var(--accent-primary)]">.pkg</span>
                        </h2>
                        <div className="h-1 w-20 bg-[var(--accent-primary)] mt-3"></div>
                    </div>

                    {/* Direct quick-link to the full projects page */}
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] font-mono text-xs hover:bg-[var(--accent-primary)] hover:text-black transition-all shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.15)] group"
                    >
                        <span>View All Projects ({projects.length})</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* 1. Hero Spotlight: 1st Featured Project (FoundrAI) */}
                {featuredProjects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 group relative"
                    >
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-primary)]/40 to-transparent rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

                        <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-accent)] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Terminal Window Header */}
                            <div className="bg-[var(--bg-tertiary)] px-5 py-3 border-b border-[var(--border-primary)] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-75"></div>
                                    <span className="ml-3 text-[11px] font-mono text-[var(--accent-primary)] font-bold">
                                        FLAGSHIP SPOTLIGHT // {featuredProjects[0].title.toUpperCase()}
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-primary)] px-2.5 py-1 rounded text-[var(--accent-primary)]">
                                    {featuredProjects[0].context || 'Bootcamp Flagship'}
                                </span>
                            </div>

                            <div className="p-4 sm:p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
                                {/* Left description */}
                                <div className="lg:col-span-7 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--border-accent)]">
                                            {getProjectIcon(featuredProjects[0].title)}
                                        </div>
                                        <div>
                                            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--accent-primary)]">
                                                {featuredProjects[0].category}
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight">
                                                {featuredProjects[0].title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-base font-mono text-[var(--text-secondary)] leading-relaxed">
                                        {featuredProjects[0].description}
                                    </p>

                                    {/* Key Capabilities Pills */}
                                    {featuredProjects[0].highlights && (
                                        <div className="grid sm:grid-cols-2 gap-2 pt-2">
                                            {featuredProjects[0].highlights.slice(0, 6).map((hl, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs font-mono text-[var(--text-secondary)]">
                                                    <CheckCircle2 size={13} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1">{hl}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {featuredProjects[0].techStack.map(tech => (
                                            <span
                                                key={tech}
                                                className="code-badge text-[11px] flex items-center gap-1.5 py-1 px-3 bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]"
                                            >
                                                <Binary size={11} className="text-[var(--accent-primary)]" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
                                        <a
                                            href={featuredProjects[0].github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--accent-primary)] text-black font-mono font-bold text-xs hover:bg-white transition-colors"
                                        >
                                            <Github size={15} />
                                            <span>inspect_codebase</span>
                                        </a>
                                        <Link
                                            href="/projects"
                                            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1.5"
                                        >
                                            <span>view_case_study</span>
                                            <ArrowRight size={13} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right: Interactive Terminal Breakdown */}
                                <div className="lg:col-span-5 bg-[var(--bg-tertiary)]/70 border border-[var(--border-primary)] p-6 rounded-xl font-mono text-xs text-[var(--text-secondary)] space-y-4">
                                    <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-2 text-[10px] text-[var(--text-tertiary)]">
                                        <span>DIAGNOSTIC_OUTPUT</span>
                                        <span className="text-[var(--accent-primary)]">STATUS: 200 OK</span>
                                    </div>
                                    <p className="text-[var(--accent-primary)]">&gt; init --virtual-cofounder-os</p>
                                    <p className="leading-relaxed text-[var(--text-primary)]">
                                        "What if early-stage founders could have an AI co-founder available 24/7 to turn ideas into executable startups?"
                                    </p>
                                    <div className="space-y-1.5 text-[11px] text-[var(--text-secondary)]">
                                        <div>├── Idea Validation &amp; TAM/SAM/SOM Modeling</div>
                                        <div>├── Interactive Business Model Canvas</div>
                                        <div>├── MVP Sprint &amp; Pitch Deck Engine</div>
                                        <div>└── Autonomous 24/7 Mentorship Core</div>
                                    </div>
                                    <div className="pt-2 text-[10px] text-[var(--text-tertiary)] flex justify-between">
                                        <span>DEPLOYMENT: ACTIVE</span>
                                        <span>AUDIT: VERIFIED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 2. Grid of remaining 4 Featured Projects (LawPilot AI, IntraQuiz AI, NeoShieldX, NeoShare) */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.slice(1).map((project, index) => (
                        <motion.div
                            key={project.id}
                            id={`featured-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col scroll-mt-24"
                        >
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--accent-primary)] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"></div>

                            <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl overflow-hidden flex flex-col h-full group-hover:border-[var(--border-accent)] transition-colors duration-300">
                                {/* Header */}
                                <div className="bg-[var(--bg-tertiary)] px-4 py-2.5 border-b border-[var(--border-primary)] flex items-center justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-60"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-60"></div>
                                    </div>
                                    <div className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-widest">
                                        root@techabbayi:~/{project.title.toLowerCase().replace(/\s+/g, '_')}
                                    </div>
                                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                        {project.year || '2024'}
                                    </span>
                                </div>

                                <div className="p-7 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <div className="text-[var(--accent-primary)]">
                                                    {getProjectIcon(project.title)}
                                                </div>
                                                <span className="text-[10px] font-mono text-[var(--accent-primary)] tracking-widest uppercase">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                        {project.context && (
                                            <span className="text-[9px] font-mono bg-[var(--bg-elevated)] border border-[var(--border-primary)] px-2 py-0.5 rounded text-[var(--text-tertiary)]">
                                                {project.context}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-5 font-mono text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-tertiary)]/50 p-4 rounded border border-[var(--border-primary)] group-hover:border-[var(--border-accent)] transition-colors">
                                        <p className="mb-1.5 text-[var(--accent-primary)] opacity-60">&gt; cat description.txt</p>
                                        <p>{project.description}</p>
                                    </div>

                                    {/* Highlights */}
                                    {project.highlights && project.highlights.length > 0 && (
                                        <div className="mb-6 space-y-1.5 font-mono text-xs text-[var(--text-secondary)]">
                                            {project.highlights.slice(0, 3).map((hl, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="text-[var(--accent-primary)]">▸</span>
                                                    <span className="line-clamp-1">{hl}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-[var(--border-primary)]/60">
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.techStack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-5">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                                >
                                                    <Github size={14} />
                                                    codebase
                                                </a>
                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                                    >
                                                        <ExternalLink size={14} />
                                                        demo
                                                    </a>
                                                )}
                                            </div>
                                            <Link
                                                href="/projects"
                                                className="text-xs font-mono text-[var(--accent-primary)] flex items-center gap-1 hover:underline"
                                            >
                                                <span>all_details</span>
                                                <ArrowRight size={12} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Dedicated "See More Projects" Action Banner (Leading to /projects) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-10 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-accent)] overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-primary)]/10 rounded-full blur-[90px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="space-y-3 max-w-2xl">
                            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)]">
                                <Sparkles size={16} />
                                <span className="uppercase tracking-widest font-bold">
                                    Project Archive & Ecosystem
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                                Want to see more? Explore all {projects.length} projects in the repository.
                            </h3>
                            <p className="text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
                                Including utility tools like <strong>Folder Launcher</strong> (Python + Flask one-click browser launcher), <strong>ARC Advanced WebScan</strong> (automated vulnerability scanner), and <strong>AI-Terminal CheatSheet</strong>, complete with full case studies and architecture specs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/projects"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[var(--accent-primary)] text-black font-mono font-bold text-sm hover:bg-white transition-all shadow-[0_0_25px_rgba(var(--accent-primary-rgb),0.3)] flex items-center justify-center gap-3 group"
                            >
                                <span>See More Projects</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="https://github.com/techabbayi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-white hover:border-[var(--border-accent)] font-mono text-sm transition-all flex items-center justify-center gap-2"
                            >
                                <Github size={16} />
                                <span>GitHub Archive</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Status Bar */}
                <div className="mt-16 pt-8 border-t border-[var(--border-primary)] border-dashed flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[var(--text-tertiary)]">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                            FEATURED_INDEX: 5 / {projects.length} LOADED
                        </span>
                        <span className="hidden md:inline">|</span>
                        <span>STATUS: READY</span>
                        <span className="hidden md:inline">|</span>
                        <span>ROUTER: /projects ENABLED</span>
                    </div>
                    <div className="uppercase tracking-[0.2em]">
                        techabbayi.engineering // systems
                    </div>
                </div>
            </div>
        </section>
    );
}
