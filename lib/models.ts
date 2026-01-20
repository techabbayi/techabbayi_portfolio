import mongoose, { Schema, model, models } from 'mongoose';

// User Schema
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'viewer'], default: 'viewer' },
    createdAt: { type: Date, default: Date.now },
});

// Settings Schema
const SettingsSchema = new Schema({
    key: { type: String, required: true, unique: true },
    value: { type: Schema.Types.Mixed, required: true },
    updatedAt: { type: Date, default: Date.now },
});

// Personal Info Schema
const PersonalInfoSchema = new Schema({
    name: String,
    role: String,
    tagline: String,
    quote: String,
    location: String,
    email: String,
    phone: String,
    degree: String,
    updatedAt: { type: Date, default: Date.now },
});

// Designer Info Schema
const DesignerInfoSchema = new Schema({
    name: String,
    role: String,
    manifesto: String,
    bio: String,
    philosophy: [String],
    updatedAt: { type: Date, default: Date.now },
});

// Social Links Schema
const SocialLinkSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    icon: String,
    order: { type: Number, default: 0 },
});

// Skills Schema
const SkillItemSchema = new Schema({
    name: { type: String, required: true },
    description: String,
});

const SkillsSchema = new Schema({
    technical: [SkillItemSchema],
    tools: [SkillItemSchema],
    os: [SkillItemSchema],
    updatedAt: { type: Date, default: Date.now },
});

// Projects Schema
const ProjectSchema = new Schema({
    projectId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    category: String,
    description: String,
    techStack: [String],
    github: String,
    live: String,
    featured: { type: Boolean, default: false },
    // Designer-specific fields
    intent: String,
    process: String,
    outcome: String,
    year: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Writings Schema
const WritingSchema = new Schema({
    writingId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: String,
    date: String,
    readTime: String,
    createdAt: { type: Date, default: Date.now },
});

// Certificates Schema
const CertificateSchema = new Schema({
    certificateId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    issuer: String,
    date: String,
    credentialId: String,
    link: String,
    createdAt: { type: Date, default: Date.now },
});

// About Schema
const AboutSchema = new Schema({
    bio: String,
    highlights: [String],
    updatedAt: { type: Date, default: Date.now },
});

// Export models
export const User = models.User || model('User', UserSchema);
export const Settings = models.Settings || model('Settings', SettingsSchema);
export const PersonalInfo = models.PersonalInfo || model('PersonalInfo', PersonalInfoSchema);
export const DesignerInfo = models.DesignerInfo || model('DesignerInfo', DesignerInfoSchema);
export const SocialLink = models.SocialLink || model('SocialLink', SocialLinkSchema);
export const Skills = models.Skills || model('Skills', SkillsSchema);
export const Project = models.Project || model('Project', ProjectSchema);
export const Writing = models.Writing || model('Writing', WritingSchema);
export const Certificate = models.Certificate || model('Certificate', CertificateSchema);
export const About = models.About || model('About', AboutSchema);
