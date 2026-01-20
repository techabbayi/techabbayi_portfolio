'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Terminal,
    Settings,
    FolderGit2,
    Award,
    FileText,
    User,
    LogOut,
    Database,
    Eye,
    EyeOff,
    RefreshCw,
} from 'lucide-react';

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [designerMode, setDesignerMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [seeding, setSeeding] = useState(false);
    const [stats, setStats] = useState({
        projects: 0,
        certificates: 0,
        writings: 0,
    });

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/ravikumar/login');
        } else if (status === 'authenticated' && session?.user?.role !== 'admin') {
            router.push('/');
        }
    }, [status, session, router]);

    useEffect(() => {
        if (status === 'authenticated') {
            fetchSettings();
            fetchStats();
        }
    }, [status]);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/settings?key=designerModeEnabled');
            const data = await res.json();
            setDesignerMode(data.value || false);
        } catch (error) {
            console.error('Error fetching settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const [projectsRes, certificatesRes, writingsRes] = await Promise.all([
                fetch('/api/projects'),
                fetch('/api/certificates'),
                fetch('/api/writings'),
            ]);

            const projects = await projectsRes.json();
            const certificates = await certificatesRes.json();
            const writings = await writingsRes.json();

            setStats({
                projects: projects.length || 0,
                certificates: certificates.length || 0,
                writings: writings.length || 0,
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const toggleDesignerMode = async () => {
        setUpdating(true);
        try {
            const res = await fetch('/api/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    key: 'designerModeEnabled',
                    value: !designerMode,
                }),
            });

            if (res.ok) {
                setDesignerMode(!designerMode);
            }
        } catch (error) {
            console.error('Error updating designer mode:', error);
        } finally {
            setUpdating(false);
        }
    };

    const handleSeedDatabase = async () => {
        if (!confirm('Are you sure you want to seed the database? This will add initial data.')) {
            return;
        }

        setSeeding(true);
        try {
            const res = await fetch('/api/seed', { method: 'POST' });
            const data = await res.json();

            if (data.success) {
                alert('Database seeded successfully!');
                fetchStats();
            } else {
                alert('Failed to seed database');
            }
        } catch (error) {
            console.error('Error seeding database:', error);
            alert('Error seeding database');
        } finally {
            setSeeding(false);
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-[#00ff41] flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 animate-spin" />
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    if (!session || session.user.role !== 'admin') {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <header className="border-b border-[#00ff41]/20 bg-[#111]">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Terminal className="w-8 h-8 text-[#00ff41]" />
                            <div>
                                <h1 className="text-xl font-bold text-[#00ff41]">Control Panel</h1>
                                <p className="text-sm text-gray-400">
                                    Welcome, {session.user.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="/"
                                className="text-sm text-gray-400 hover:text-[#00ff41] transition-colors"
                            >
                                View Portfolio
                            </a>
                            <button
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        icon={<FolderGit2 className="w-6 h-6" />}
                        label="Projects"
                        value={stats.projects}
                        color="text-blue-400"
                    />
                    <StatCard
                        icon={<Award className="w-6 h-6" />}
                        label="Certificates"
                        value={stats.certificates}
                        color="text-yellow-400"
                    />
                    <StatCard
                        icon={<FileText className="w-6 h-6" />}
                        label="Writings"
                        value={stats.writings}
                        color="text-purple-400"
                    />
                </div>

                {/* Settings Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#111] border border-[#00ff41]/20 rounded-lg p-6 mb-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Settings className="w-6 h-6 text-[#00ff41]" />
                        <h2 className="text-2xl font-bold">Settings</h2>
                    </div>

                    {/* Designer Mode Toggle */}
                    <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-[#00ff41]/10">
                        <div className="flex items-center gap-3">
                            {designerMode ? (
                                <Eye className="w-5 h-5 text-[#00ff41]" />
                            ) : (
                                <EyeOff className="w-5 h-5 text-gray-500" />
                            )}
                            <div>
                                <h3 className="font-semibold">Designer Mode</h3>
                                <p className="text-sm text-gray-400">
                                    Toggle between Hacker and Designer themes
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={toggleDesignerMode}
                            disabled={updating}
                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${designerMode ? 'bg-[#00ff41]' : 'bg-gray-600'
                                } ${updating ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${designerMode ? 'translate-x-7' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                    </div>

                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                        <p className="text-sm text-blue-400">
                            <strong>Current Mode:</strong>{' '}
                            {designerMode ? 'Designer Theme' : 'Hacker Theme (Default)'}
                        </p>
                    </div>
                </motion.div>

                {/* Database Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#111] border border-[#00ff41]/20 rounded-lg p-6"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Database className="w-6 h-6 text-[#00ff41]" />
                        <h2 className="text-2xl font-bold">Database Management</h2>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={handleSeedDatabase}
                            disabled={seeding}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00ff41] text-black font-semibold rounded-lg hover:bg-[#00cc33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <RefreshCw className={`w-5 h-5 ${seeding ? 'animate-spin' : ''}`} />
                            {seeding ? 'Seeding Database...' : 'Seed Database'}
                        </button>
                        <p className="text-sm text-gray-400 text-center">
                            Populate the database with initial portfolio data
                        </p>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <QuickLink
                        href="/ravikumar/projects"
                        icon={<FolderGit2 className="w-5 h-5" />}
                        label="Manage Projects"
                    />
                    <QuickLink
                        href="/ravikumar/certificates"
                        icon={<Award className="w-5 h-5" />}
                        label="Manage Certificates"
                    />
                    <QuickLink
                        href="/ravikumar/writings"
                        icon={<FileText className="w-5 h-5" />}
                        label="Manage Writings"
                    />
                    <QuickLink
                        href="/ravikumar/profile"
                        icon={<User className="w-5 h-5" />}
                        label="Edit Profile"
                    />
                </motion.div>
            </main>
        </div>
    );
}

function StatCard({
    icon,
    label,
    value,
    color,
}: {
    icon: React.ReactNode;
    label: string;
    value: number;
    color: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111] border border-[#00ff41]/20 rounded-lg p-6"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-400 text-sm mb-1">{label}</p>
                    <p className="text-3xl font-bold">{value}</p>
                </div>
                <div className={color}>{icon}</div>
            </div>
        </motion.div>
    );
}

function QuickLink({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            className="flex items-center gap-3 p-4 bg-[#111] border border-[#00ff41]/20 rounded-lg hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-all"
        >
            <div className="text-[#00ff41]">{icon}</div>
            <span className="font-medium">{label}</span>
        </a>
    );
}
