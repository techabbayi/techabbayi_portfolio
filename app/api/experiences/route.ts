import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Experience } from '@/lib/models';
import { achievementsAndExperiences } from '@/lib/data';

// GET - Get all achievements & experiences
export async function GET() {
    try {
        await dbConnect();
        const experiences = await Experience.find().sort({ experienceId: 1 });
        if (experiences.length > 0) {
            return NextResponse.json(experiences);
        }
        return NextResponse.json(achievementsAndExperiences);
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return NextResponse.json(achievementsAndExperiences);
    }
}

