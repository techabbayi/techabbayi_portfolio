'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowLeft,
    Search,
    ExternalLink,
    Github,
    Terminal,
    Shield,
    Cpu,
    Binary,
    Lock,
    FileCode,
    Folder,
    CheckCircle2,
    Sparkles,
    Scale,
    Layers,
    Tag,
    X,
    Filter,
    ChevronRight,
} from 'lucide-react';
import { projects, ProjectItem } from '@/lib/data';

export default function AllProjectsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

    // Categories
    const categories = ['All', 'Autonomous AI', 'Security & Cryptography', 'Productivity & Tools', 'EdTech & Capstone'];

    const getIconForProject = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('foundr')) return <Cpu size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('lawpilot')) return <Scale size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('intra') || t.includes('quiz')) return <Layers size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('shield')) return <Lock size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('share')) return <Binary size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('folder') || t.includes('launcher')) return <Folder size={22} className="text-[var(--accent-primary)]" />;
        if (t.includes('webscan') || t.includes('arc')) return <Shield size={22} className="text-[var(--accent-primary)]" />;
        return <FileCode size={22} className="text-[var(--accent-primary)]" />;
    };

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            if (!matchesSearch) return false;

            if (selectedCategory === 'All') return true;
            if (selectedCategory === 'Autonomous AI') {
                return project.title.toLowerCase().includes('foundr') || project.title.toLowerCase().includes('lawpilot') || project.title.toLowerCase().includes('intra');
            }
            if (selectedCategory === 'Security & Cryptography') {
                return project.title.toLowerCase().includes('shield') || project.title.toLowerCase().includes('webscan') || project.title.toLowerCase().includes('share');
            }
            if (selectedCategory === 'Productivity & Tools') {
                return project.title.toLowerCase().includes('folder') || project.title.toLowerCase().includes('cheat');
            }
            if (selectedCategory === 'EdTech & Capstone') {
                return project.title.toLowerCase().includes('intra') || project.title.toLowerCase().includes('quiz');
            }

            return true;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-[#050505] text-[var(--text-primary)] relative overflow-x-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-[var(--accent-primary)]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-[var(--border-primary)] py-4 px-6">
                <div className="container mx-auto max-w-7xl flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>cd .. // return_to_portfolio</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono px-3 py-1 rounded bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 font-bold">
                            INDEX: {projects.length} PROJECTS
                        </span>
                        <Link
                            href="/"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                        >
                            <span>Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Page Hero */}
            <section className="py-16 px-6 border-b border-[var(--border-primary)]">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-4 max-w-3xl"
                    >
                        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)]">
                            <Terminal size={16} />
                            <span>DIRECTORY: /var/www/techabbayi/projects/all</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[var(--text-primary)]">
                            PROJECT<span className="text-[var(--accent-primary)]">_ARCHIVE</span>
                        </h1>
                        <p className="text-base font-mono text-[var(--text-secondary)] leading-relaxed">
                            Comprehensive archive of software applications, autonomous AI agents, security tools, and productivity utilities built by Lokeswara Muthumula. Featuring 5 primary featured works and all open-source repositories.
                        </p>
                    </motion.div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                        {[
                            { label: 'Total Works', value: `${projects.length} Units` },
                            { label: 'Featured Systems', value: '5 Flagships' },
                            { label: 'Open Source', value: '100% Free' },
                            { label: 'Core Stacks', value: 'Python • React' },
                        ].map((stat, i) => (
                            <div key={i} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-1">{stat.label}</p>
                                <p className="text-lg font-bold font-mono text-[var(--accent-primary)]">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter and Search Bar */}
            <section className="py-8 px-6 bg-[var(--bg-secondary)] border-b border-[var(--border-primary)] sticky top-[57px] z-30 backdrop-blur-md bg-opacity-95">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative w-full md:w-96">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by title, stack, or keywords..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-mono text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] hover:text-white"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        <span className="text-[10px] font-mono text-[var(--text-tertiary)] flex items-center gap-1 mr-1">
                            <Filter size={12} /> FILTER:
                        </span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-[var(--accent-primary)] text-black font-bold'
                                        : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <main className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    {filteredProjects.length === 0 ? (
                        <div className="text-center py-24 space-y-4 font-mono">
                            <p className="text-lg text-[var(--accent-primary)]">&gt; NO_PROJECTS_FOUND_MATCHING_QUERY</p>
                            <p className="text-xs text-[var(--text-tertiary)]">Try resetting the search bar or category filters.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="px-4 py-2 rounded bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-xs text-[var(--accent-primary)] hover:border-[var(--accent-primary)]"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {filteredProjects.map((project, idx) => {
                                const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                return (
                                <motion.div
                                    key={project.id}
                                    id={projectSlug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                                    className="group relative flex flex-col scroll-mt-28"
                                >
                                    <div className="relative bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl overflow-hidden flex flex-col h-full group-hover:border-[var(--border-accent)] transition-all duration-300 shadow-lg">
                                        {/* Card Window Top */}
                                        <div className="bg-[var(--bg-tertiary)] px-5 py-3 border-b border-[var(--border-primary)] flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-70"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-70"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-70"></div>
                                                <span className="ml-2 text-[10px] font-mono text-[var(--text-tertiary)]">
                                                    id_{project.id}.sys
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {project.featured && (
                                                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
                                                        Featured
                                                    </span>
                                                )}
                                                {project.context && (
                                                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-tertiary)] border border-[var(--border-primary)]">
                                                        {project.context}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Card Main Body */}
                                        <div className="p-7 flex-grow flex flex-col space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--accent-primary)] transition-colors">
                                                    {getIconForProject(project.title)}
                                                </div>

                                                <div className="space-y-1 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)]">
                                                            {project.category}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-[var(--text-tertiary)]">
                                                            {project.year || '2024'}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight">
                                                        <a href={`#${projectSlug}`} className="hover:underline">
                                                            {project.title}
                                                        </a>
                                                    </h3>
                                                    {project.tagline && (
                                                        <p className="text-xs font-mono text-[var(--text-tertiary)] line-clamp-1 italic">
                                                            {project.tagline}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Description text */}
                                            <div className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-tertiary)]/50 p-4 rounded-xl border border-[var(--border-primary)]">
                                                <p className="text-[var(--accent-primary)] text-[10px] mb-1 opacity-70">&gt; brief.txt</p>
                                                <p>{project.description}</p>
                                            </div>

                                            {/* Exhaustive Highlights */}
                                            {project.highlights && project.highlights.length > 0 && (
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)] flex items-center gap-1.5">
                                                        <Sparkles size={12} /> Key Capabilities & Architecture:
                                                    </p>
                                                    <div className="grid sm:grid-cols-2 gap-2">
                                                        {project.highlights.map((hl, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-2 p-2 rounded bg-[var(--bg-tertiary)]/30 border border-[var(--border-primary)]/50 text-[11px] font-mono text-[var(--text-secondary)]"
                                                            >
                                                                <CheckCircle2 size={13} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                                                                <span className="line-clamp-2">{hl}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tech Stack */}
                                            <div className="mt-auto pt-4 border-t border-[var(--border-primary)]/60">
                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {project.techStack.map(tech => (
                                                        <span
                                                            key={tech}
                                                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Card Footer Actions */}
                                                <div className="flex items-center justify-between pt-2">
                                                    <div className="flex items-center gap-4">
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                                                        >
                                                            <Github size={14} />
                                                            <span>Codebase</span>
                                                        </a>

                                                        {project.live && (
                                                            <a
                                                                href={project.live}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[var(--accent-primary)] text-black text-xs font-mono font-bold hover:bg-white transition-colors"
                                                            >
                                                                <ExternalLink size={13} />
                                                                <span>Live Demo</span>
                                                            </a>
                                                        )}
                                                    </div>

                                                    <button
                                                        onClick={() => setActiveModalProject(project)}
                                                        className="text-xs font-mono text-[var(--accent-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                                                    >
                                                        <span>Full Overview</span>
                                                        <ChevronRight size={13} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>

            {/* Deep-Dive Modal for Project Details */}
            <AnimatePresence>
                {activeModalProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-[var(--bg-secondary)] border border-[var(--accent-primary)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setActiveModalProject(null)}
                                className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white"
                            >
                                <X size={16} />
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)]">
                                    {getIconForProject(activeModalProject.title)}
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-primary)]">
                                        {activeModalProject.category}
                                    </span>
                                    <h2 className="text-3xl font-black text-[var(--text-primary)]">
                                        {activeModalProject.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] font-mono text-xs text-[var(--text-secondary)] leading-relaxed space-y-2">
                                <p className="text-[var(--accent-primary)]">&gt; full_case_study.spec</p>
                                <p className="text-sm text-[var(--text-primary)] font-bold">
                                    {activeModalProject.tagline || activeModalProject.description}
                                </p>
                                <p className="pt-2 text-[var(--text-secondary)]">
                                    {activeModalProject.fullDescription || activeModalProject.description}
                                </p>
                            </div>

                            {activeModalProject.highlights && (
                                <div className="space-y-3">
                                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] flex items-center gap-2">
                                        <Sparkles size={14} /> Full Capability Breakdown
                                    </h4>
                                    <div className="space-y-2">
                                        {activeModalProject.highlights.map((h, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-tertiary)]/40 border border-[var(--border-primary)] text-xs font-mono text-[var(--text-secondary)]"
                                            >
                                                <CheckCircle2 size={14} className="text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {activeModalProject.techStack.map(t => (
                                    <span
                                        key={t}
                                        className="text-xs font-mono px-3 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-primary)]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-[var(--border-primary)] flex items-center justify-between gap-4">
                                <a
                                    href={activeModalProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-lg bg-[var(--accent-primary)] text-black font-mono font-bold text-xs hover:bg-white transition-colors flex items-center gap-2"
                                >
                                    <Github size={15} />
                                    <span>View Repository</span>
                                </a>

                                <button
                                    onClick={() => setActiveModalProject(null)}
                                    className="px-4 py-2.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-white"
                                >
                                    Close Window
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-[var(--border-primary)] bg-[#050505]">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[var(--text-tertiary)]">
                    <p>© {new Date().getFullYear()} Lokeswara Muthumula. All systems documented.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/" className="hover:text-[var(--accent-primary)]">Return Home</Link>
                        <a href="https://github.com/techabbayi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)]">GitHub</a>
                        <a href="mailto:rknewsceo@protonmail.com" className="hover:text-[var(--accent-primary)]">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

