import dbConnect from './mongodb';
import {
    User,
    Settings,
    PersonalInfo,
    DesignerInfo,
    SocialLink,
    Skills,
    Project,
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

        // 3. Seed Personal Info
        const existingPersonalInfo = await PersonalInfo.findOne();
        if (!existingPersonalInfo) {
            await PersonalInfo.create(personalInfo);
            console.log('✅ Personal info seeded');
        }

        // 4. Seed Designer Info
        const existingDesignerInfo = await DesignerInfo.findOne();
        if (!existingDesignerInfo) {
            await DesignerInfo.create(designerInfo);
            console.log('✅ Designer info seeded');
        }

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

        // 6. Seed Skills
        const existingSkills = await Skills.findOne();
        if (!existingSkills) {
            await Skills.create(skills);
            console.log('✅ Skills seeded');
        }

        // 7. Seed Projects
        const existingProjects = await Project.countDocuments();
        if (existingProjects === 0) {
            const projectsToSeed = projects.map((project, index) => {
                const designProject = designProjects.find(dp => dp.id === project.id);
                return {
                    projectId: project.id,
                    title: project.title,
                    category: project.category,
                    description: project.description,
                    techStack: project.techStack,
                    github: project.github,
                    live: project.live,
                    featured: project.featured,
                    intent: designProject?.intent || '',
                    process: designProject?.process || '',
                    outcome: designProject?.outcome || '',
                    year: designProject?.year || new Date().getFullYear().toString(),
                };
            });
            await Project.insertMany(projectsToSeed);
            console.log(`✅ ${projects.length} projects seeded`);
        }

        // 8. Seed Writings
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

        // 9. Seed Certificates
        const existingCertificates = await Certificate.countDocuments();
        if (existingCertificates === 0) {
            const certificatesToSeed = certificates.map(cert => ({
                certificateId: cert.id,
                title: cert.title,
                issuer: cert.issuer,
                date: cert.date,
                credentialId: cert.credentialId,
                link: cert.link,
            }));
            await Certificate.insertMany(certificatesToSeed);
            console.log(`✅ ${certificates.length} certificates seeded`);
        }

        // 10. Seed About
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
