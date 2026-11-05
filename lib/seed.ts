import dbConnect from './mongodb';
import {
    User,
    Settings,
    PersonalInfo,
    DesignerInfo,
    SocialLink,
    Skills,
    Project,
    Experience,
    Writing,
    Certificate,
    About,
} from './models';
import {
    personalInfo,
    designerInfo,
    socialLinks,
    skills,
    projects,
    designProjects,
    achievementsAndExperiences,
    writings,
    certificates,
    about,
} from './data';
import bcrypt from 'bcryptjs';

export async function seedDatabase() {
    try {
        await dbConnect();
        console.log('🌱 Starting database seeding...');

        // 1. Create Admin User (ravikumar)
        const existingUser = await User.findOne({ username: 'ravikumar' });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
            await User.create({
                username: 'ravikumar',
                password: hashedPassword,
                role: 'admin',
            });
            console.log('✅ Admin user created: ravikumar');
        } else {
            console.log('ℹ️  Admin user already exists');
        }

        // 2. Create Settings (Designer Mode - Disabled by default)
        const designerModeSetting = await Settings.findOne({ key: 'designerModeEnabled' });
        if (!designerModeSetting) {
            await Settings.create({
                key: 'designerModeEnabled',
                value: false,
            });
            console.log('✅ Designer mode setting created (disabled)');
        }

        // 3. Seed / Sync Personal Info
        await PersonalInfo.deleteMany({});
        await PersonalInfo.create(personalInfo);
        console.log('✅ Personal info seeded / synced');

        // 4. Seed / Sync Designer Info
        await DesignerInfo.deleteMany({});
        await DesignerInfo.create(designerInfo);
        console.log('✅ Designer info seeded / synced');

        // 5. Seed Social Links
        const existingSocialLinks = await SocialLink.countDocuments();
        if (existingSocialLinks === 0) {
            const socialLinksWithOrder = socialLinks.map((link, index) => ({
                ...link,
                order: index,
            }));
            await SocialLink.insertMany(socialLinksWithOrder);
            console.log(`✅ ${socialLinks.length} social links seeded`);
        }

        // 6. Seed / Sync Skills
        await Skills.deleteMany({});
        await Skills.create(skills);
        console.log('✅ Skills seeded / synced');

        // 7. Seed / Sync Projects (Upsert to ensure all 8 projects are updated)
        for (const project of projects) {
            const designProject = designProjects.find(dp => dp.id === project.id);
            await Project.findOneAndUpdate(
                { projectId: project.id },
                {
                    projectId: project.id,
                    title: project.title,
                    category: project.category,
                    tagline: project.tagline || '',
                    description: project.description,
                    fullDescription: project.fullDescription || project.description,
                    techStack: project.techStack,
                    github: project.github,
                    live: project.live,
                    featured: project.featured,
                    highlights: project.highlights || [],
                    context: project.context || '',
                    intent: designProject?.intent || '',
                    process: designProject?.process || '',
                    outcome: designProject?.outcome || '',
                    year: designProject?.year || project.year || new Date().getFullYear().toString(),
                    updatedAt: new Date(),
                },
                { upsert: true, new: true }
            );
        }
        console.log(`✅ ${projects.length} projects seeded / updated`);

        // 8. Seed / Sync Achievements & Experiences (Clean slate)
        await Experience.deleteMany({});
        const experiencesToSeed = achievementsAndExperiences.map(item => ({
            experienceId: item.id,
            title: item.title,
            category: item.category,
            role: item.role,
            period: item.period,
            organization: item.organization,
            badge: item.badge,
            summary: item.summary,
            highlights: item.highlights,
            techStack: item.techStack,
            link: item.link || '',
            icon: item.icon,
        }));
        await Experience.insertMany(experiencesToSeed);
        console.log(`✅ ${achievementsAndExperiences.length} achievements & experiences seeded`);

        // 9. Seed Writings
        const existingWritings = await Writing.countDocuments();
        if (existingWritings === 0) {
            const writingsToSeed = writings.map(writing => ({
                writingId: writing.id,
                title: writing.title,
                excerpt: writing.excerpt,
                date: writing.date,
                readTime: writing.readTime,
            }));
            await Writing.insertMany(writingsToSeed);
            console.log(`✅ ${writings.length} writings seeded`);
        }

        // 10. Seed / Sync Certificates (Clean slate to include all new certificates)
        await Certificate.deleteMany({});
        const certificatesToSeed = certificates.map(cert => ({
            certificateId: cert.id,
            title: cert.title,
            issuer: cert.issuer,
            date: cert.date,
            credentialId: cert.credentialId,
            link: cert.link,
            category: cert.category || '',
            description: cert.description || '',
        }));
        await Certificate.insertMany(certificatesToSeed);
        console.log(`✅ ${certificates.length} certificates seeded`);

        // 11. Seed About
        const existingAbout = await About.findOne();
        if (!existingAbout) {
            await About.create(about);
            console.log('✅ About section seeded');
        }

        console.log('🎉 Database seeding completed successfully!');
        return { success: true, message: 'Database seeded successfully' };
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}
